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
        'Short video explaining non-real numbers and how to identify equations with no real solutions using the discriminant',

      diagramPlaceholder:
        'Diagram of the number system showing real numbers on the number line and indicating that non-real solutions fall outside it, with examples of equations producing each type',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 155" width="100%" style="max-width:320px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<ellipse cx="130" cy="35" rx="95" ry="26" fill="rgba(220,38,38,0.06)" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<text x="130" y="31" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">non-real numbers</text>` +
        `<text x="130" y="44" text-anchor="middle" font-size="10" fill="#dc2626">e.g. x² = −4 → no real x</text>` +
        `<line x1="130" y1="61" x2="130" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>` +
        `<text x="130" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">✕</text>` +
        `<polygon points="15,115 25,110 25,120" fill="#0f1f3d"/>` +
        `<line x1="25" y1="115" x2="235" y2="115" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="245,115 235,110 235,120" fill="#0f1f3d"/>` +
        `<line x1="40" y1="111" x2="40" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<line x1="70" y1="111" x2="70" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<line x1="100" y1="111" x2="100" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<line x1="130" y1="111" x2="130" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<line x1="160" y1="111" x2="160" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<line x1="220" y1="111" x2="220" y2="119" stroke="#6b7280" stroke-width="1.2"/>` +
        `<circle cx="190" cy="115" r="4" fill="#2563eb"/>` +
        `<text x="190" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">x = 3</text>` +
        `<text x="40" y="133" text-anchor="middle" font-size="10" fill="#6b7280">−2</text>` +
        `<text x="70" y="133" text-anchor="middle" font-size="10" fill="#6b7280">−1</text>` +
        `<text x="100" y="133" text-anchor="middle" font-size="10" fill="#6b7280">0</text>` +
        `<text x="130" y="133" text-anchor="middle" font-size="10" fill="#6b7280">1</text>` +
        `<text x="160" y="133" text-anchor="middle" font-size="10" fill="#6b7280">2</text>` +
        `<text x="220" y="133" text-anchor="middle" font-size="10" fill="#6b7280">4</text>` +
        `<text x="130" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">ℝ — the real number line</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE QUADRATIC FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-formula',
      title: 'The Quadratic Formula',
      icon: '±√Δ',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>quadratic formula</strong> lets us solve any quadratic equation of the form ax² + bx + c = 0 (a ≠ 0) directly. It states that <strong>x = (−b ± √(b²−4ac)) / 2a</strong>. Look closely at what is under the root sign: b²−4ac is exactly the <strong>discriminant</strong> we met earlier. So the formula can be written more compactly as x = (−b ± √Δ) / 2a — once you know Δ, you already have the hardest part of the formula calculated.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('discriminant')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('root taken')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('real solutions')}</span>` +
        `</div>` +

        // ── Formula box ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The quadratic formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">For ax² + bx + c = 0 (a ≠ 0): ${bl('x')} = (−b ± ${or('√Δ')}) / 2a, where ${gr('Δ = b² − 4ac')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Calculate the ${gr('discriminant')} first, then ${or('take its square root')} to complete the formula.</p>` +
        `</div>` +

        // ── Steps list ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to solve using the formula</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write the equation in ${bl('standard form')} ax² + bx + c = 0, then identify a, b and c.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Calculate the ${gr('discriminant')}: ${gr('Δ = b² − 4ac')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Take the square root')} of the discriminant, ${or('√Δ')}, simplifying it as a surd if it is not a perfect square.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Substitute a, b and ${or('√Δ')} into ${bl('x = (−b ± √Δ) / 2a')} and simplify both solutions.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Where does the formula come from?</p>` +
        `<p style="margin:0;color:#7c2d12;">The quadratic formula is derived by <strong>completing the square</strong> on the general equation ax² + bx + c = 0: divide through by a, move c across, add (b/2a)² to both sides to form a perfect square on the left, then take the square root of both sides and isolate x. You do not need to redo this derivation each time — the result, x = (−b ± √Δ)/2a, works for every quadratic equation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x² + 3x − 10 = 0 using the quadratic formula.',
          answer: `x = ${gr('2')} or x = ${gr('−5')}`,
          steps: [
            `Identify the coefficients: a = 1, b = 3, c = −10.`,
            `Calculate the ${gr('discriminant')}: ${gr('Δ = b² − 4ac')} = (3)² − 4(1)(−10) = 9 + 40 = ${gr('49')}.`,
            `${or('Take the square root')}: ${or('√49 = 7')}.`,
            `Substitute into the formula: x = (−3 ± 7) / 2(1) = (−3 ± 7) / 2.`,
            `Split into the two solutions: x = (−3 + 7)/2 = ${gr('4/2 = 2')}, or x = (−3 − 7)/2 = ${gr('−10/2 = −5')}.`,
            `<strong>Answer:</strong> x = ${gr('2')} or x = ${gr('−5')} ✓ (check: 2² + 3(2) − 10 = 4 + 6 − 10 = 0 ✓)`,
          ],
        },
        {
          question: 'A quadratic pattern gives the equation 2n² + n − 105 = 0, where n is a positive term number. Solve for n using the quadratic formula.',
          answer: `n = ${gr('7')} (rejecting the negative root)`,
          steps: [
            `Identify the coefficients: a = 2, b = 1, c = −105.`,
            `Calculate the ${gr('discriminant')}: ${gr('Δ = b² − 4ac')} = (1)² − 4(2)(−105) = 1 + 840 = ${gr('841')}.`,
            `${or('Take the square root')}: ${or('√841 = 29')} (841 is a perfect square).`,
            `Substitute into the formula: n = (−1 ± 29) / 2(2) = (−1 ± 29) / 4.`,
            `Split into the two solutions: n = (−1 + 29)/4 = ${gr('28/4 = 7')}, or n = (−1 − 29)/4 = ${gr('−30/4 = −7.5')}.`,
            `Since n must be a ${bl('positive')} term number, reject n = −7.5.`,
            `<strong>Answer:</strong> n = ${gr('7')} ✓`,
          ],
        },
        {
          question: 'Solve 3x² − 4x − 2 = 0 using the quadratic formula, giving your answer as simplified surds.',
          answer: `x = ${gr('(2 ± √10) / 3')}`,
          steps: [
            `Identify the coefficients: a = 3, b = −4, c = −2.`,
            `Calculate the ${gr('discriminant')}: ${gr('Δ = b² − 4ac')} = (−4)² − 4(3)(−2) = 16 + 24 = ${gr('40')}.`,
            `Since 40 is not a perfect square, ${or('take the square root')} and simplify it as a surd: ${or('√40 = √(4 × 10) = 2√10')}.`,
            `Substitute into the formula: x = (4 ± ${or('2√10')}) / 2(3) = (4 ± 2√10) / 6.`,
            `Simplify by dividing every term by the common factor 2: x = ${gr('(2 ± √10) / 3')}.`,
            `<strong>Answer:</strong> x = ${gr('(2 ± √10) / 3')} — these are irrational (surd) solutions, since Δ = 40 is positive but not a perfect square ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q23 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Solve x² − x − 6 = 0 using the quadratic formula. If x represents a positive length, state its value.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'a=1, b=−1, c=−6. Δ=(−1)²−4(1)(−6)=1+24=25. √25=5. x=(1±5)/2, so x=3 or x=−2. Since x is a positive length, x=3.',
        },

        // ── Q24 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Solve 2x² − 7x − 4 = 0 using the quadratic formula. If x represents a positive quantity, state its value.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'a=2, b=−7, c=−4. Δ=(−7)²−4(2)(−4)=49+32=81. √81=9. x=(7±9)/4, so x=4 or x=−0.5. Since x is positive, x=4.',
        },

        // ── Q25 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Solve 3x² − 6x − 2 = 0 using the quadratic formula, giving your answer as simplified surds. Explain why the solutions are irrational.',
          answer: 'a=3, b=−6, c=−2. Δ=(−6)²−4(3)(−2)=36+24=60. √60=2√15. x=(6±2√15)/6=(3±√15)/3. The solutions are irrational because Δ=60 is positive (two real solutions exist) but is not a perfect square, so √Δ cannot be simplified to a whole number.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video deriving the quadratic formula from completing the square, connecting it to the discriminant, and using it to solve quadratic equations including those with surd solutions',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LAWS OF EXPONENTS FOR RATIONAL EXPONENTS
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

        // ── Q21 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'If x^(3/2) = 27, determine the value of x.',
          answer: 'x = 9',
          checkMode: 'auto',
          correctAnswer: '9',
          correctAnswers: ['9', 'x=9', 'x = 9'],
          explanation: 'This time we are given the result, not x, so we must undo the rational exponent by raising both sides to the reciprocal power 2/3: x = (x^(3/2))^(2/3) = 27^(2/3) = (∛27)² = 3² = 9. Check by substituting back: 9^(3/2) = (√9)³ = 3³ = 27.',
        },
      ],

      videoPlaceholder:
        'Short video demonstrating rational exponents, the connection between fractional powers and roots, and applying exponent laws with fractional exponents',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING SIMPLE SURDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surds',
      title: 'Adding, Subtracting, Multiplying and Dividing Simple Surds',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>add or subtract surds</strong>, they must first be simplified to <strong>like surds</strong> (same number under the root sign) before combining. To <strong>multiply</strong>, we multiply the numbers under the root together: √a × √b = √(ab). To <strong>divide</strong>, we <em>rationalise the denominator</em> — removing the surd from the denominator by multiplying both numerator and denominator by the surd.</p>` +

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
        'Short video showing how to simplify surds and then add, subtract, multiply, and rationalise the denominator when dividing surds',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — ERROR MARGINS
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
        'Short video explaining error margins, how to calculate minimum and maximum values from a measurement with a stated tolerance, and how to find the range of possible areas',

      diagramPlaceholder:
        'Number line diagram showing a measured value with error margin, minimum and maximum endpoints of the range colour coded, and a rectangle example with both dimensions labelled with tolerances',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 205" width="100%" style="max-width:320px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="70" y1="65" x2="190" y2="65" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>` +
        `<line x1="70" y1="55" x2="70" y2="75" stroke="#16a34a" stroke-width="2.5"/>` +
        `<line x1="190" y1="55" x2="190" y2="75" stroke="#16a34a" stroke-width="2.5"/>` +
        `<circle cx="130" cy="65" r="5" fill="#2563eb" stroke="white" stroke-width="1.5"/>` +
        `<line x1="125" y1="42" x2="78" y2="42" stroke="#ea580c" stroke-width="1.5"/>` +
        `<polygon points="70,42 78,38 78,46" fill="#ea580c"/>` +
        `<line x1="135" y1="42" x2="182" y2="42" stroke="#ea580c" stroke-width="1.5"/>` +
        `<polygon points="190,42 182,38 182,46" fill="#ea580c"/>` +
        `<text x="100" y="36" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">−0.1</text>` +
        `<text x="160" y="36" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">+0.1</text>` +
        `<text x="70" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">Min = 15.1 cm</text>` +
        `<text x="130" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">15.2 cm</text>` +
        `<text x="190" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">Max = 15.3 cm</text>` +
        `<line x1="15" y1="102" x2="245" y2="102" stroke="#e2e8f0" stroke-width="1"/>` +
        `<rect x="85" y="112" width="90" height="45" fill="rgba(37,99,235,0.06)" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="130" y="173" text-anchor="middle" font-size="10"><tspan fill="#2563eb" font-weight="700">8 cm</tspan><tspan fill="#ea580c" font-weight="700"> ± 0.2 cm</tspan></text>` +
        `<text x="182" y="132" font-size="10" fill="#2563eb" font-weight="700">5 cm</text>` +
        `<text x="182" y="146" font-size="10" fill="#ea580c" font-weight="700">± 0.1 cm</text>` +
        `<text x="130" y="193" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">Area: 38.22 – 41.82 cm²</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — INVESTIGATING QUADRATIC NUMBER PATTERNS
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

        // ── Q22 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A quadratic pattern begins 3, 5, 9, 15. A learner wants to know whether this pattern will ever contain the term 2. Determine the general term Tₙ, then use the discriminant to decide whether the equation Tₙ = 2 has any real solutions for n. Hence state whether 2 is ever a term of this pattern.',
          answer: 'First differences: 2,4,6. Second differences: 2,2. a=1. Using T₁=3: 1+b+c=3→b+c=2. Using T₂=5: 4+2b+c=5→2b+c=1. Subtract: b=-1, c=3. Rule: Tₙ=n²-n+3. Setting Tₙ=2: n²-n+3=2→n²-n+1=0. Discriminant=(-1)²-4(1)(1)=1-4=-3, which is negative, so this equation has no real solutions at all. Since there is no real value of n (let alone a positive integer one) satisfying Tₙ=2, the pattern will never contain the term 2.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video showing how to find the nth term of a quadratic number pattern using first and second differences, then setting up and solving simultaneous equations for a, b and c',

      diagramPlaceholder:
        'Diagram showing a number pattern with first differences colour coded blue and second differences colour coded orange beneath, leading to the quadratic rule shown in green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 195" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="45" y="16" text-anchor="middle" font-size="9" fill="#6b7280">T₁</text>` +
        `<text x="115" y="16" text-anchor="middle" font-size="9" fill="#6b7280">T₂</text>` +
        `<text x="185" y="16" text-anchor="middle" font-size="9" fill="#6b7280">T₃</text>` +
        `<text x="255" y="16" text-anchor="middle" font-size="9" fill="#6b7280">T₄</text>` +
        `<rect x="29" y="22" width="32" height="26" rx="5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="99" y="22" width="32" height="26" rx="5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="169" y="22" width="32" height="26" rx="5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="239" y="22" width="32" height="26" rx="5" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="45" y="39" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="115" y="39" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="185" y="39" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">16</text>` +
        `<text x="255" y="39" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">29</text>` +
        `<line x1="53" y1="48" x2="80" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="107" y1="48" x2="80" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="123" y1="48" x2="150" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="177" y1="48" x2="150" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="193" y1="48" x2="220" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="247" y1="48" x2="220" y2="72" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<rect x="65" y="72" width="30" height="26" rx="5" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="135" y="72" width="30" height="26" rx="5" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="205" y="72" width="30" height="26" rx="5" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="80" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">+5</text>` +
        `<text x="150" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">+9</text>` +
        `<text x="220" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">+13</text>` +
        `<line x1="88" y1="98" x2="115" y2="122" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="142" y1="98" x2="115" y2="122" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="158" y1="98" x2="185" y2="122" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="212" y1="98" x2="185" y2="122" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<rect x="100" y="122" width="30" height="26" rx="5" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<rect x="170" y="122" width="30" height="26" rx="5" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="115" y="139" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">+4</text>` +
        `<text x="185" y="139" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">+4</text>` +
        `<line x1="115" y1="148" x2="150" y2="160" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="185" y1="148" x2="150" y2="160" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<rect x="80" y="160" width="140" height="28" rx="6" fill="rgba(22,163,74,0.08)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="150" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">Tₙ = 2n² − n + 1</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — Quadratic number patterns
    // Block 1 (0-2):   Find the next term using first/second differences
    // Block 2 (3-5):   State the second difference and find a
    // Block 3 (6-9):   Derive the full general term Tₙ = an² + bn + c
    // Block 4 (10-12): Evaluate a specific term (beyond the given terms)
    // Block 5 (13-15): Solve for n given Tₙ
    // Block 6 (16-19): Hard — combined/reverse and verification problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Next term via first/second differences (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 2, 9, 20, 35.', checkMode: 'auto', options: ['54', '50', '39', '46'], correctIndex: 0, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 35+19=54. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 1, 5, 13, 25.', checkMode: 'auto', options: ['37', '41', '29', '33'], correctIndex: 1, explanation: 'First differences: 4,8,12. Second differences: 4,4 (constant). Next first difference: 12+4=16. Next term: 25+16=41. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 6, 13, 24, 39.', checkMode: 'auto', options: ['54', '43', '58', '50'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 39+19=58. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },

        // Block 2 — Second difference and value of a (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'For the pattern 2, 9, 20, 35, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 4', '4 and 8', '6 and 3', '4 and 2'], correctIndex: 3, explanation: 'First differences: 7,11,15. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 1, 5, 13, 25, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 2', '4 and 4', '4 and 8', '6 and 3'], correctIndex: 0, explanation: 'First differences: 4,8,12. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 3, 12, 27, 48, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['6 and 6', '6 and 3', '6 and 12', '8 and 4'], correctIndex: 1, explanation: 'First differences: 9,15,21. Second differences: 6,6 — constant second difference is 6. Since 2a = second difference, a = 6÷2 = 3. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },

        // Block 3 — Derive full general term Tₙ = an² + bn + c (Medium)
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 6, 13, 24, 39.', checkMode: 'auto', options: ['2n²-n+3', '4n²+n+3', '2n²+n+3', '2n²+n+4'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=6: 2+b+c=6→b+c=4. T₂=13: 8+2b+c=13→2b+c=5. Subtract: b=1. c=4-1=3. Rule: Tₙ=2n²+n+3. Check: T₁=2+1+3=6✓, T₄=32+4+3=39✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 1, 5, 13, 25.', checkMode: 'auto', options: ['2n²+2n+1', '4n²-2n+1', '2n²-2n+2', '2n²-2n+1'], correctIndex: 3, explanation: 'First differences: 4,8,12. Second differences: 4,4. a=2. T₁=1: 2+b+c=1→b+c=-1. T₂=5: 8+2b+c=5→2b+c=-3. Subtract: b=-2. c=-1-(-2)=1. Rule: Tₙ=2n²-2n+1. Check: T₁=2-2+1=1✓, T₄=32-8+1=25✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 3, 12, 27, 48.', checkMode: 'auto', options: ['3n²', '3n²+n', '6n²', '3n²+1'], correctIndex: 0, explanation: 'First differences: 9,15,21. Second differences: 6,6. a=3. T₁=3: 3+b+c=3→b+c=0. T₂=12: 12+2b+c=12→2b+c=0. Subtract: b=0. c=0-0=0. Rule: Tₙ=3n². Check: T₁=3✓, T₄=3(16)=48✓. (Distractors come from wrongly adding an n-term that does not belong, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 2, 10, 24, 44.', checkMode: 'auto', options: ['3n²+n', '3n²-n', '6n²-n', '3n²-n+1'], correctIndex: 1, explanation: 'First differences: 8,14,20. Second differences: 6,6. a=3. T₁=2: 3+b+c=2→b+c=-1. T₂=10: 12+2b+c=10→2b+c=-2. Subtract: b=-1. c=-1-(-1)=0. Rule: Tₙ=3n²-n. Check: T₁=3-1=2✓, T₄=48-4=44✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },

        // Block 4 — Evaluate a specific term beyond the given terms (Medium)
        { difficulty: 'Medium', question: 'A quadratic pattern begins 3, 12, 27, 48. Find the 6th term.', checkMode: 'auto', options: ['75', '114', '108', '36'], correctIndex: 2, explanation: 'First differences: 9,15,21. Second differences: 6,6. a=3, and T₁=3 gives b=0, c=0, so Tₙ=3n². T₆=3(36)=108. (Distractors come from evaluating at n=5 instead of n=6, using a wrongly formed +n term, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 6, 13, 24, 39. Find the 7th term.', checkMode: 'auto', options: ['81', '94', '38', '108'], correctIndex: 3, explanation: 'Rule: Tₙ=2n²+n+3 (derived from second difference 4, a=2, b=1, c=3). T₇=2(49)+7+3=98+10=108. (Distractors come from evaluating at n=6 instead of n=7, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 2, 10, 24, 44. Find the 6th term.', checkMode: 'auto', options: ['102', '70', '114', '30'], correctIndex: 0, explanation: 'Rule: Tₙ=3n²-n (derived from second difference 6, a=3, b=-1, c=0). T₆=3(36)-6=108-6=102. (Distractors come from evaluating at n=5 instead of n=6, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },

        // Block 5 — Solve for n given Tₙ (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 3n² − n. Find the value of n for which Tₙ = 184.', checkMode: 'auto', options: ['-23/3', '8', '7', '9'], correctIndex: 1, explanation: '3n²-n=184 → 3n²-n-184=0. Using the quadratic formula: n=(1±√(1+2208))/6=(1±47)/6. n=48/6=8 (rejecting the negative root n=-23/3). Check: 3(64)-8=192-8=184 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 2n² + n + 3. Find the value of n for which Tₙ = 108.', checkMode: 'auto', options: ['-7.5', '6', '7', '8'], correctIndex: 2, explanation: '2n²+n+3=108 → 2n²+n-105=0. Using the quadratic formula: n=(-1±√(1+840))/4=(-1±29)/4. n=28/4=7 (rejecting the negative root n=-30/4). Check: 2(49)+7+3=98+10=108 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 3n². Find the value of n for which Tₙ = 300.', checkMode: 'auto', options: ['-10', '9', '11', '10'], correctIndex: 3, explanation: '3n²=300 → n²=100 → n=10 (rejecting the negative root n=-10, since n must be a positive term number). Check: 3(100)=300 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },

        // Block 6 — Hard: combined/reverse and verification problems
        { difficulty: 'Hard', question: "A theatre's row seating pattern (seats in row n) is 5, 14, 29, 50. Find the nth term rule and use it to predict the number of seats in row 7.", checkMode: 'auto', options: ['149', '110', '156', '44'], correctIndex: 0, explanation: 'First differences: 9,15,21. Second differences: 6,6. a=3. T₁=5: 3+b+c=5→b+c=2. T₂=14: 12+2b+c=14→2b+c=2. Subtract: b=0. c=2. Rule: Tₙ=3n²+2. T₇=3(49)+2=147+2=149. (Distractors come from evaluating at row 6 instead of row 7, wrongly adding an n-term to the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Hard', question: 'Thabo derives the rule Tₙ = 2n² − n + 1 for the pattern 2, 7, 16, 29 and checks it by finding T₅. Sipho says T₅ should be 52. Verify whether Sipho is correct.', checkMode: 'auto', options: ['T₅ = 52 — Sipho is correct', 'T₅ = 46 — Sipho is incorrect', 'T₅ = 50 — Sipho is incorrect (evaluated only the 2n² term and dropped −n+1)', 'T₅ = 41 — Sipho is incorrect (used the second difference instead of the first difference to extend the pattern)'], correctIndex: 1, explanation: 'Substituting n=5 into Tₙ=2n²−n+1: T₅=2(25)−5+1=46. Checking via the pattern (second difference 4, so the next first difference after 13 is 17): T₅=29+17=46. Sipho\'s claim of 52 is incorrect — the correct value is 46.' },
        { difficulty: 'Hard', question: 'Lerato says every pattern with a constant second difference of 4 must have nth term Tₙ = 2n² + bn + c for some b and c, and that a can never be anything other than 2 in that case. Is she correct? Explain.', checkMode: 'auto', options: ['No — a constant second difference of 4 could also give a=4, since a equals the second difference directly', 'Yes, completely — a second difference of 4 forces not only a=2 but also fixed values of b and c for every such pattern', 'No — the second difference only determines c, not a, so a could be any value', 'Yes for a — since 2a equals the constant second difference, a second difference of 4 forces a=2, but b and c can still vary between patterns'], correctIndex: 3, explanation: 'Since 2a always equals the constant second difference, a second difference of 4 forces a=2 in every such pattern — Lerato is correct about a. However, b and c depend on the actual terms of each pattern and can differ between patterns sharing the same second difference, so the patterns themselves are not identical, only their a-value.' },
        { difficulty: 'Hard', question: 'A quadratic pattern has Tₙ = 3n² − n and a linear pattern has Uₙ = 20n − 25. Find the value(s) of n for which Tₙ = Uₙ, given that n must be a positive integer.', checkMode: 'auto', options: ['n=1 and n=6, since these satisfy the equation exactly', 'n=5, since T₅ and U₅ are approximately equal', 'n=2, since it is the closest integer solution to the equation', 'There is no positive integer n for which Tₙ=Uₙ exactly — the equation 3n²−21n+25=0 has irrational roots'], correctIndex: 3, explanation: 'Setting Tₙ=Uₙ: 3n²−n=20n−25 → 3n²−21n+25=0. Testing small positive integers (n=1,2,3) shows none satisfy the equation exactly, and the quadratic formula gives irrational roots n≈1.52 or n≈5.48 — so there is no positive integer n where Tₙ=Uₙ exactly.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered quadratic number patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on second differences or the general term and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on deriving Tₙ = an² + bn + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Next term via first/second differences (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 3, 10, 21, 36.', checkMode: 'auto', options: ['55', '51', '40', '47'], correctIndex: 0, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 36+19=55. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 2, 6, 14, 26.', checkMode: 'auto', options: ['38', '42', '30', '34'], correctIndex: 1, explanation: 'First differences: 4,8,12. Second differences: 4,4 (constant). Next first difference: 12+4=16. Next term: 26+16=42. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 7, 14, 25, 40.', checkMode: 'auto', options: ['55', '44', '59', '51'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 40+19=59. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },

        // Block 2 — Second difference and value of a (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'For the pattern 3, 10, 21, 36, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 4', '4 and 8', '6 and 3', '4 and 2'], correctIndex: 3, explanation: 'First differences: 7,11,15. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 2, 6, 14, 26, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 2', '4 and 4', '4 and 8', '6 and 3'], correctIndex: 0, explanation: 'First differences: 4,8,12. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 5, 15, 31, 53, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['6 and 6', '6 and 3', '6 and 12', '8 and 4'], correctIndex: 1, explanation: 'First differences: 10,16,22. Second differences: 6,6 — constant second difference is 6. Since 2a = second difference, a = 6÷2 = 3. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },

        // Block 3 — Derive full general term Tₙ = an² + bn + c (Medium)
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 7, 14, 25, 40.', checkMode: 'auto', options: ['2n²-n+4', '4n²+n+4', '2n²+n+4', '2n²+n+5'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=7: 2+b+c=7→b+c=5. T₂=14: 8+2b+c=14→2b+c=6. Subtract: b=1. c=5-1=4. Rule: Tₙ=2n²+n+4. Check: T₁=2+1+4=7✓, T₄=32+4+4=40✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 3, 10, 21, 36.', checkMode: 'auto', options: ['2n²-n', '4n²+n', '2n²+n+1', '2n²+n'], correctIndex: 3, explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=3: 2+b+c=3→b+c=1. T₂=10: 8+2b+c=10→2b+c=2. Subtract: b=1. c=1-1=0. Rule: Tₙ=2n²+n. Check: T₁=2+1=3✓, T₄=32+4=36✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 2, 6, 14, 26.', checkMode: 'auto', options: ['2n²-2n+2', '2n²+2n+2', '4n²-2n+2', '2n²-2n+3'], correctIndex: 0, explanation: 'First differences: 4,8,12. Second differences: 4,4. a=2. T₁=2: 2+b+c=2→b+c=0. T₂=6: 8+2b+c=6→2b+c=-2. Subtract: b=-2. c=0-(-2)=2. Rule: Tₙ=2n²-2n+2. Check: T₁=2-2+2=2✓, T₄=32-8+2=26✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 1, 9, 23, 43.', checkMode: 'auto', options: ['3n²+n-1', '3n²-n-1', '6n²-n-1', '3n²-n'], correctIndex: 1, explanation: 'First differences: 8,14,20. Second differences: 6,6. a=3. T₁=1: 3+b+c=1→b+c=-2. T₂=9: 12+2b+c=9→2b+c=-3. Subtract: b=-1. c=-2-(-1)=-1. Rule: Tₙ=3n²-n-1. Check: T₁=3-1-1=1✓, T₄=48-4-1=43✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and losing the constant term entirely.)' },

        // Block 4 — Evaluate a specific term beyond the given terms (Medium)
        { difficulty: 'Medium', question: 'A quadratic pattern begins 5, 15, 31, 53. Find the 7th term.', checkMode: 'auto', options: ['115', '141', '155', '50'], correctIndex: 2, explanation: 'Rule: Tₙ=3n²+n+1 (second difference 6, a=3, b=1, c=1). T₇=3(49)+7+1=147+8=155. (Distractors come from evaluating at n=6 instead of n=7, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 7, 14, 25, 40. Find the 6th term.', checkMode: 'auto', options: ['59', '70', '34', '82'], correctIndex: 3, explanation: 'Rule: Tₙ=2n²+n+4 (second difference 4, a=2, b=1, c=4). T₆=2(36)+6+4=72+10=82. (Distractors come from evaluating at n=5 instead of n=6, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 1, 9, 23, 43. Find the 6th term.', checkMode: 'auto', options: ['101', '69', '113', '29'], correctIndex: 0, explanation: 'Rule: Tₙ=3n²-n-1 (second difference 6, a=3, b=-1, c=-1). T₆=3(36)-6-1=108-7=101. (Distractors come from evaluating at n=5 instead of n=6, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },

        // Block 5 — Solve for n given Tₙ (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 3n² − n − 1. Find the value of n for which Tₙ = 233.', checkMode: 'auto', options: ['-26/3', '9', '8', '10'], correctIndex: 1, explanation: '3n²-n-1=233 → 3n²-n-234=0. Using the quadratic formula: n=(1±√(1+2808))/6=(1±53)/6. n=54/6=9 (rejecting the negative root n=-26/3). Check: 3(81)-9-1=243-10=233 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 2n² + n + 4. Find the value of n for which Tₙ = 214.', checkMode: 'auto', options: ['-10.5', '9', '10', '11'], correctIndex: 2, explanation: '2n²+n+4=214 → 2n²+n-210=0. Using the quadratic formula: n=(-1±√(1+1680))/4=(-1±41)/4. n=40/4=10 (rejecting the negative root n=-10.5). Check: 2(100)+10+4=200+14=214 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 2n² + n. Find the value of n for which Tₙ = 210.', checkMode: 'auto', options: ['-10.5', '9', '11', '10'], correctIndex: 3, explanation: '2n²+n=210 → 2n²+n-210=0. Using the quadratic formula: n=(-1±√(1+1680))/4=(-1±41)/4. n=40/4=10 (rejecting the negative root n=-10.5). Check: 2(100)+10=200+10=210 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },

        // Block 6 — Hard: combined/reverse and verification problems
        { difficulty: 'Hard', question: "A hall's row seating pattern (seats in row n) is 6, 15, 30, 51. Find the nth term rule and use it to predict the number of seats in row 6.", checkMode: 'auto', options: ['111', '78', '117', '39'], correctIndex: 0, explanation: 'First differences: 9,15,21. Second differences: 6,6. a=3. T₁=6: 3+b+c=6→b+c=3. T₂=15: 12+2b+c=15→2b+c=3. Subtract: b=0. c=3. Rule: Tₙ=3n²+3. T₆=3(36)+3=108+3=111. (Distractors come from evaluating at row 5 instead of row 6, wrongly adding an n-term to the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Hard', question: 'Amahle derives the rule Tₙ = 2n² − n for the pattern 1, 6, 15, 28 and checks it by finding T₅. Bongani says T₅ should be 44. Verify whether Bongani is correct.', checkMode: 'auto', options: ['T₅ = 44 — Bongani is correct', 'T₅ = 45 — Bongani is incorrect', 'T₅ = 40 — Bongani is incorrect (evaluated only the 2n² term and dropped −n)', 'T₅ = 41 — Bongani is incorrect (used the second difference instead of the first difference to extend the pattern)'], correctIndex: 1, explanation: 'Substituting n=5 into Tₙ=2n²−n: T₅=2(25)−5=45. Checking via the pattern (second difference 4, next first difference after 13 is 17): T₅=28+17=45. Bongani\'s claim of 44 is incorrect — the correct value is 45.' },
        { difficulty: 'Hard', question: 'Sipho says every pattern with a constant second difference of 6 must have nth term Tₙ = 3n² + bn + c for some b and c, and that a can never be anything other than 3 in that case. Is he correct? Explain.', checkMode: 'auto', options: ['No — a constant second difference of 6 could also give a=6, since a equals the second difference directly', 'Yes for a — since 2a equals the constant second difference, a second difference of 6 forces a=3, but b and c can still vary between patterns', 'Yes, completely — a second difference of 6 forces not only a=3 but also fixed values of b and c for every such pattern', 'No — the second difference only determines b, not a, so a could be any value'], correctIndex: 1, explanation: 'Since 2a always equals the constant second difference, a second difference of 6 forces a=3 in every such pattern — Sipho is correct about a. However, b and c depend on the actual terms of each pattern and can differ between patterns sharing the same second difference.' },
        { difficulty: 'Hard', question: 'A quadratic pattern has Tₙ = 2n² + n and a linear pattern has Uₙ = 15n − 12. Find the value(s) of n for which Tₙ = Uₙ, given that n must be a positive integer.', checkMode: 'auto', options: ['There is no positive integer n for which Tₙ=Uₙ exactly', 'n=1 only, since n=6 gives Tₙ≠Uₙ', 'n=6 only, since n=1 gives Tₙ≠Uₙ', 'n=1 and n=6, since both satisfy 2n²−14n+12=0'], correctIndex: 3, explanation: '2n²+n=15n-12 → 2n²-14n+12=0 → n²-7n+6=0 → (n-1)(n-6)=0 → n=1 or n=6. Check n=1: T=3, U=3 ✓. Check n=6: T=78, U=78 ✓. Both n=1 and n=6 satisfy Tₙ=Uₙ.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered quadratic number patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on second differences or the general term and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on deriving Tₙ = an² + bn + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Next term via first/second differences (Easy)
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 4, 11, 22, 37.', checkMode: 'auto', options: ['56', '52', '41', '48'], correctIndex: 0, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 37+19=56. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 3, 7, 15, 27.', checkMode: 'auto', options: ['39', '43', '31', '35'], correctIndex: 1, explanation: 'First differences: 4,8,12. Second differences: 4,4 (constant). Next first difference: 12+4=16. Next term: 27+16=43. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },
        { difficulty: 'Easy', question: 'Find the next term in the quadratic pattern 8, 15, 26, 41.', checkMode: 'auto', options: ['56', '45', '60', '52'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4 (constant). Next first difference: 15+4=19. Next term: 41+19=60. (Distractors come from assuming the first differences stay constant, adding the second difference directly instead of updating the first difference, and subtracting instead of adding the second difference.)' },

        // Block 2 — Second difference and value of a (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'For the pattern 4, 11, 22, 37, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 4', '4 and 8', '6 and 3', '4 and 2'], correctIndex: 3, explanation: 'First differences: 7,11,15. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 3, 7, 15, 27, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['4 and 2', '4 and 4', '4 and 8', '6 and 3'], correctIndex: 0, explanation: 'First differences: 4,8,12. Second differences: 4,4 — constant second difference is 4. Since 2a = second difference, a = 4÷2 = 2. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },
        { difficulty: 'Easy-Medium', question: 'For the pattern 4, 13, 28, 49, find the constant second difference and the value of a in Tₙ = an² + bn + c.', checkMode: 'auto', options: ['6 and 6', '6 and 3', '6 and 12', '8 and 4'], correctIndex: 1, explanation: 'First differences: 9,15,21. Second differences: 6,6 — constant second difference is 6. Since 2a = second difference, a = 6÷2 = 3. (Distractors come from forgetting to halve the second difference, doubling instead of halving, and an arithmetic slip in the second difference itself.)' },

        // Block 3 — Derive full general term Tₙ = an² + bn + c (Medium)
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 8, 15, 26, 41.', checkMode: 'auto', options: ['2n²-n+5', '4n²+n+5', '2n²+n+5', '2n²+n+6'], correctIndex: 2, explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=8: 2+b+c=8→b+c=6. T₂=15: 8+2b+c=15→2b+c=7. Subtract: b=1. c=6-1=5. Rule: Tₙ=2n²+n+5. Check: T₁=2+1+5=8✓, T₄=32+4+5=41✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 4, 11, 22, 37.', checkMode: 'auto', options: ['2n²-n+1', '4n²+n+1', '2n²+n+2', '2n²+n+1'], correctIndex: 3, explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=4: 2+b+c=4→b+c=2. T₂=11: 8+2b+c=11→2b+c=3. Subtract: b=1. c=2-1=1. Rule: Tₙ=2n²+n+1. Check: T₁=2+1+1=4✓, T₄=32+4+1=37✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 3, 7, 15, 27.', checkMode: 'auto', options: ['2n²-2n+3', '2n²+2n+3', '4n²-2n+3', '2n²-2n+4'], correctIndex: 0, explanation: 'First differences: 4,8,12. Second differences: 4,4. a=2. T₁=3: 2+b+c=3→b+c=1. T₂=7: 8+2b+c=7→2b+c=-1. Subtract: b=-2. c=1-(-2)=3. Rule: Tₙ=2n²-2n+3. Check: T₁=2-2+3=3✓, T₄=32-8+3=27✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },
        { difficulty: 'Medium', question: 'Find the nth term of the quadratic pattern 3, 11, 25, 45.', checkMode: 'auto', options: ['3n²+n+1', '3n²-n+1', '6n²-n+1', '3n²-n+2'], correctIndex: 1, explanation: 'First differences: 8,14,20. Second differences: 6,6. a=3. T₁=3: 3+b+c=3→b+c=0. T₂=11: 12+2b+c=11→2b+c=-1. Subtract: b=-1. c=0-(-1)=1. Rule: Tₙ=3n²-n+1. Check: T₁=3-1+1=3✓, T₄=48-4+1=45✓. (Distractors come from a sign error on the n-term, forgetting to halve the second difference when finding a, and a slip in solving for the constant term.)' },

        // Block 4 — Evaluate a specific term beyond the given terms (Medium)
        { difficulty: 'Medium', question: 'A quadratic pattern begins 4, 13, 28, 49. Find the 6th term.', checkMode: 'auto', options: ['76', '115', '109', '37'], correctIndex: 2, explanation: 'Rule: Tₙ=3n²+1 (second difference 6, a=3, b=0, c=1). T₆=3(36)+1=108+1=109. (Distractors come from evaluating at n=5 instead of n=6, wrongly adding an n-term to the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 8, 15, 26, 41. Find the 7th term.', checkMode: 'auto', options: ['83', '96', '40', '110'], correctIndex: 3, explanation: 'Rule: Tₙ=2n²+n+5 (second difference 4, a=2, b=1, c=5). T₇=2(49)+7+5=98+12=110. (Distractors come from evaluating at n=6 instead of n=7, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Medium', question: 'A quadratic pattern begins 3, 11, 25, 45. Find the 6th term.', checkMode: 'auto', options: ['103', '71', '115', '31'], correctIndex: 0, explanation: 'Rule: Tₙ=3n²-n+1 (second difference 6, a=3, b=-1, c=1). T₆=3(36)-6+1=108-5=103. (Distractors come from evaluating at n=5 instead of n=6, flipping the sign of the n-term in the rule, and confusing an² with a(2n).)' },

        // Block 5 — Solve for n given Tₙ (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 3n² − n + 1. Find the value of n for which Tₙ = 291.', checkMode: 'auto', options: ['-29/3', '10', '9', '11'], correctIndex: 1, explanation: '3n²-n+1=291 → 3n²-n-290=0. Using the quadratic formula: n=(1±√(1+3480))/6=(1±59)/6. n=60/6=10 (rejecting the negative root n=-29/3). Check: 3(100)-10+1=300-9=291 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 2n² + n + 5. Find the value of n for which Tₙ = 215.', checkMode: 'auto', options: ['-10.5', '9', '10', '11'], correctIndex: 2, explanation: '2n²+n+5=215 → 2n²+n-210=0. Using the quadratic formula: n=(-1±√(1+1680))/4=(-1±41)/4. n=40/4=10 (rejecting the negative root n=-10.5). Check: 2(100)+10+5=200+15=215 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },
        { difficulty: 'Medium-Hard', question: 'The nth term of a pattern is Tₙ = 2n² + n + 1. Find the value of n for which Tₙ = 172.', checkMode: 'auto', options: ['-9.5', '8', '10', '9'], correctIndex: 3, explanation: '2n²+n+1=172 → 2n²+n-171=0. Using the quadratic formula: n=(-1±√(1+1368))/4=(-1±37)/4. n=36/4=9 (rejecting the negative root n=-9.5). Check: 2(81)+9+1=162+10=172 ✓. (Distractors include the rejected negative root and off-by-one errors in n.)' },

        // Block 6 — Hard: combined/reverse and verification problems
        { difficulty: 'Hard', question: "A stadium's row seating pattern (seats in row n) is 7, 16, 31, 52. Find the nth term rule and use it to predict the number of seats in row 5.", checkMode: 'auto', options: ['79', '52', '84', '34'], correctIndex: 0, explanation: 'First differences: 9,15,21. Second differences: 6,6. a=3. T₁=7: 3+b+c=7→b+c=4. T₂=16: 12+2b+c=16→2b+c=4. Subtract: b=0. c=4. Rule: Tₙ=3n²+4. T₅=3(25)+4=75+4=79. (Distractors come from evaluating at row 4 instead of row 5, wrongly adding an n-term to the rule, and confusing an² with a(2n).)' },
        { difficulty: 'Hard', question: 'Bongani derives the rule Tₙ = 2n² − n + 3 for the pattern 4, 9, 18, 31 and checks it by finding T₅. Amahle says T₅ should be 50. Verify whether Amahle is correct.', checkMode: 'auto', options: ['T₅ = 50 — Amahle is correct', 'T₅ = 43 — Amahle is incorrect (evaluated only 2n²−n and dropped the +3)', 'T₅ = 48 — Amahle is incorrect', 'T₅ = 44 — Amahle is incorrect (used the second difference instead of the first difference to extend the pattern)'], correctIndex: 2, explanation: 'Substituting n=5 into Tₙ=2n²−n+3: T₅=2(25)−5+3=48. Checking via the pattern (second difference 4, next first difference after 13 is 17): T₅=31+17=48. Amahle\'s claim of 50 is incorrect — the correct value is 48.' },
        { difficulty: 'Hard', question: 'Lerato says every pattern with a constant second difference of 6 must have nth term Tₙ = 3n² + bn + c for some b and c, and that b and c must also always be the same across all such patterns. Is she correct? Explain.', checkMode: 'auto', options: ['Completely correct — a, b and c are all fixed once the second difference is known', 'Completely incorrect — the second difference does not even determine a', 'Only partly correct — a is always 3 when the second difference is 6, but b and c depend on the pattern\'s first terms and can vary', 'Only partly correct — b is always fixed, but a and c can vary between patterns'], correctIndex: 2, explanation: 'The value of a is always 3 when the second difference is 6, since 2a=6 — but b and c depend on the actual first terms of each specific pattern and can differ between patterns sharing the same second difference, so Lerato is only partly correct.' },
        { difficulty: 'Hard', question: 'A quadratic pattern has Tₙ = 3n² − n + 1 and a linear pattern has Uₙ = 22n − 20. Find the value(s) of n for which Tₙ = Uₙ, given that n must be a positive integer.', checkMode: 'auto', options: ['n=1 and n=7, since these are the closest integers to the roots of 3n²−23n+21=0', 'n=4, since substituting gives values that are approximately equal', 'n=1 and n=6, since these satisfy the equation exactly', 'There is no positive integer n for which Tₙ=Uₙ exactly — the roots of 3n²−23n+21=0 involve √277, which is irrational'], correctIndex: 3, explanation: '3n²-n+1=22n-20 → 3n²-23n+21=0. Using the quadratic formula: n=(23±√(529-252))/6=(23±√277)/6. Since √277 is not a perfect square, there is no positive integer n where Tₙ=Uₙ exactly.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered quadratic number patterns.' },
        { minScore: 15, message: 'Great work! Review any missed questions on second differences or the general term and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on deriving Tₙ = an² + bn + c, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
