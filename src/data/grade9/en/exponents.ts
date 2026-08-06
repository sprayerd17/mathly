import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ─────────────────────────────────────────
// negative exponent → orange  (#ea580c)
// reciprocal / rule → blue    (#2563eb)
// simplified answer → green   (#16a34a)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — EXTENDING LAWS OF EXPONENTS TO INTEGER EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'integer-exponents',
      title: 'Extending Laws of Exponents to Integer Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 8 you established the five laws of exponents for natural-number exponents. We now <strong>extend</strong> these laws to include <strong>integer (negative) exponents</strong>. The key rule is ${or('a⁻ᵏ')} = ${bl('1 / aᵏ')} — a ${or('negative exponent')} means taking the ${bl('reciprocal')} of the base raised to the positive version of that exponent. The result is always a ${gr('positive fraction')} when the base is greater than 1.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponent')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reciprocal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The key rule</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">If a ≠ 0 and k is a positive integer:&nbsp;&nbsp;${or('a⁻ᵏ')} = ${bl('1 / aᵏ')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Quick examples</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('5⁻¹')} = ${bl('1/5')} = ${gr('0.2')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('3⁻²')} = ${bl('1/3²')} = ${gr('1/9')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Common misconception</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${or('negative exponent')} does <strong>not</strong> make the result negative — it means take the ${bl('reciprocal')}. For example, ${or('2⁻³')} = ${gr('1/8')}, which is a positive fraction. Never write ${or('2⁻³')} = −8.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify 2⁻³.',
          answer: `${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}`,
          steps: [
            `Apply the rule ${or('a⁻ᵏ')} = ${bl('1/aᵏ')}: ${or('2⁻³')} = ${bl('1/2³')}`,
            `Evaluate the denominator: 2³ = 2 × 2 × 2 = 8`,
            `<strong>Answer:</strong> ${or('2⁻³')} = ${bl('1/8')} = ${gr('1/8')} ✓`,
          ],
        },
        {
          question: 'Simplify 5² × 5⁻⁴.',
          answer: `5² × ${or('5⁻⁴')} = ${bl('5⁻²')} = ${gr('1/25')}`,
          steps: [
            `Same base — ${bl('add the exponents')}: 5² × ${or('5⁻⁴')} = 5^(2 + (${or('−4')})) = ${bl('5⁻²')}`,
            `Apply the ${or('negative exponent rule')}: ${bl('5⁻²')} = ${bl('1/5²')}`,
            `Evaluate: 5² = 25`,
            `<strong>Answer:</strong> 5² × ${or('5⁻⁴')} = ${gr('1/25')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Simplify 3⁻².',
          checkMode: 'auto',
          options: ['1/9', '-9', '1/6', '9'],
          correctIndex: 0,
          explanation: 'Apply a⁻ᵏ = 1/aᵏ: 3⁻² = 1/3² = 1/9. (Other options confuse the negative sign with a negative result, multiply the base by the exponent instead of raising it to the power, or forget to take the reciprocal.)',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 4³ × 4⁻⁵.',
          checkMode: 'auto',
          options: ['65536', '1/16', '-16', '1/8'],
          correctIndex: 1,
          explanation: 'Same base — add the exponents: 4³ × 4⁻⁵ = 4^(3 + (−5)) = 4⁻² = 1/4² = 1/16. (Other options add the exponents as if both were positive, forget to take the reciprocal, or multiply the base by the exponent instead of squaring it.)',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says 2⁻⁴ = −16. Which statement correctly evaluates 2⁻⁴ and explains his mistake?',
          checkMode: 'auto',
          options: [
            '2⁻⁴ = −16 — Sipho is correct, since the exponent is negative.',
            '2⁻⁴ = 16 — negative exponents are ignored once the base is squared enough times.',
            '2⁻⁴ = 1/16 — a negative exponent means take the reciprocal, not make the value negative.',
            '2⁻⁴ = −1/16 — the reciprocal should also carry the negative sign.',
          ],
          correctIndex: 2,
          explanation: 'A negative exponent means reciprocal, not negative value: 2⁻⁴ = 1/2⁴ = 1/16. Sipho incorrectly treated the negative sign on the exponent as making the answer negative.',
        },
      ],

      videoPlaceholder:
        'Short video showing how to apply the negative exponent rule a⁻ᵏ = 1/aᵏ with worked examples',

      diagramPlaceholder:
        'Sequence showing 2³ down to 2⁻² each divided by 2, with the negative-exponent boxes highlighted to show they give reciprocals',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 150" width="100%" style="max-width:560px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="240" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Each step divides by 2 — negative exponents give reciprocals</text>` +
        `<rect x="21" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="50" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2³</text>` +
        `<text x="50" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">8</text>` +
        `<rect x="97" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="126" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2²</text>` +
        `<text x="126" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">4</text>` +
        `<rect x="173" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="202" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2¹</text>` +
        `<text x="202" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">2</text>` +
        `<rect x="249" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="278" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2⁰</text>` +
        `<text x="278" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">1</text>` +
        `<rect x="325" y="62" width="58" height="36" rx="4" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="354" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">2⁻¹</text>` +
        `<text x="354" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">1/2</text>` +
        `<rect x="401" y="62" width="58" height="36" rx="4" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="430" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">2⁻²</text>` +
        `<text x="430" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">1/4</text>` +
        `<line x1="82" y1="80" x2="94" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="94,80 88,77 88,83" fill="#6b7280"/>` +
        `<text x="88" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="158" y1="80" x2="170" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="170,80 164,77 164,83" fill="#6b7280"/>` +
        `<text x="164" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="234" y1="80" x2="246" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="246,80 240,77 240,83" fill="#6b7280"/>` +
        `<text x="240" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="310" y1="80" x2="322" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="322,80 316,77 316,83" fill="#6b7280"/>` +
        `<text x="316" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="386" y1="80" x2="398" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="398,80 392,77 392,83" fill="#6b7280"/>` +
        `<text x="392" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="325" y1="104" x2="459" y2="104" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="325" y1="104" x2="325" y2="108" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="459" y1="104" x2="459" y2="108" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="392" y="120" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">negative exponent → reciprocal</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SCIENTIFIC NOTATION WITH NEGATIVE EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scientific-notation',
      title: 'Scientific Notation with Negative Exponents',
      icon: '×10ⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We extend scientific notation to include ${or('negative exponents')}, used for writing <strong>very small numbers</strong> as a value between 1 and 10 multiplied by a ${or('negative power of 10')}. When we ${bl('move the decimal point to the right')}, the exponent is ${or('negative')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('decimal movement')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final form')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting a small number to scientific notation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1 — Move the decimal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Move the decimal point to the right')} until you have a number between 1 and 10. Count the number of places moved.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Step 2 — Write the exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Since you moved the decimal <em>right</em> (making the number larger), the exponent is ${or('negative')}. It equals the number of places moved.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 3 — Write in scientific notation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Write the ${gr('final form')}: (number between 1 and 10) × 10^(${or('negative exponent')}).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Large vs small numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moving the decimal <strong>left</strong> (large numbers, greater than 10) gives a <strong>positive</strong> exponent. Moving the decimal ${bl('right')} (small numbers, less than 1) gives a ${or('negative exponent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write 0.00045 in scientific notation.',
          answer: `0.00045 = ${gr('4.5 × 10⁻⁴')}`,
          steps: [
            `${bl('Move the decimal point to the right')} until you get a number between 1 and 10: 0.00045 → 4.5 (moved ${bl('4 places right')})`,
            `Since we moved the decimal right, the exponent is ${or('negative')}: the exponent is ${or('−4')}`,
            `<strong>Answer:</strong> 0.00045 = ${gr('4.5 × 10⁻⁴')} ✓`,
          ],
        },
        {
          question: 'Sipho writes 0.0072 in scientific notation as 7.2 × 10⁻³. Check his answer.',
          answer: `${gr('7.2 × 10⁻³')} is correct`,
          steps: [
            `${bl('Move the decimal point to the right')} from 0.0072 until you get a number between 1 and 10: 0.0072 → 7.2 (moved ${bl('3 places right')})`,
            `Since we moved the decimal right, the exponent is ${or('negative')}: the exponent is ${or('−3')}`,
            `Sipho wrote ${gr('7.2 × 10⁻³')} — this matches. His answer is ${gr('correct')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 0.0036 in scientific notation.',
          checkMode: 'auto',
          options: ['3.6 × 10⁻³', '3.6 × 10³', '36 × 10⁻⁴', '3.6 × 10⁻⁴'],
          correctIndex: 0,
          explanation: 'Move the decimal 3 places right: 0.0036 → 3.6. Moving right gives a negative exponent: 3.6 × 10⁻³. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Write 0.000089 in scientific notation.',
          checkMode: 'auto',
          options: ['8.9 × 10⁻⁵', '8.9 × 10⁵', '89 × 10⁻⁶', '8.9 × 10⁻⁴'],
          correctIndex: 0,
          explanation: 'Move the decimal 5 places right: 0.000089 → 8.9. Moving right gives a negative exponent: 8.9 × 10⁻⁵. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato converts 0.00056 to scientific notation and gets 5.6 × 10⁻⁴. Which statement correctly checks her answer?',
          checkMode: 'auto',
          options: [
            'Incorrect — the exponent should be positive, giving 5.6 × 10⁴.',
            'Correct — moving the decimal 4 places right from 0.00056 gives 5.6, so 5.6 × 10⁻⁴ is right.',
            'Incorrect — moving the decimal only 3 places gives 5.6 × 10⁻³.',
            'Incorrect — the front number should be 0.56, giving 0.56 × 10⁻³.',
          ],
          correctIndex: 1,
          explanation: 'Moving the decimal point 4 places right from 0.00056 gives 5.6, and moving right gives a negative exponent of −4, so 5.6 × 10⁻⁴ is correct.',
        },
      ],

      videoPlaceholder:
        'Short video showing how to convert small decimal numbers into scientific notation using negative exponents',

      diagramPlaceholder:
        'The decimal point in 0.00045 hopping 4 places right to land as 4.5 × 10⁻⁴',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#0f1f3d">Moving the decimal point right gives a negative exponent</text>` +
        `<text x="20" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="34" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#ea580c">.</text>` +
        `<text x="48" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="62" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="76" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="90" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">4</text>` +
        `<text x="104" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">5</text>` +
        `<path d="M34,44 Q42.75,24 51.5,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M51.5,44 Q60.25,24 69,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M69,44 Q77.5,24 86.5,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M86.5,44 Q95.25,24 104,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="104,44 98,40 98,48" fill="#ea580c"/>` +
        `<text x="69" y="66" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">4 places right</text>` +
        `<text x="130" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4.5 × 10⁻⁴</text>` +
        `<text x="130" y="115" text-anchor="middle" font-size="9" fill="#6b7280">0.00045 in scientific notation</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING CALCULATIONS AND PROBLEMS USING ALL LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponent-calculations',
      title: 'Solving Calculations and Problems Using All Laws of Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We now apply <strong>all four operations</strong> to numbers in exponential form, using all the laws of exponents including ${or('integer (negative) exponents')}. We also solve real-life problems involving exponential notation such as scientific measurements and very small quantities.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('exponent rules')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negative exponents')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Laws of exponents — complete summary</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply same base:')} aᵐ × aⁿ = a^(m+n) — <em>add</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Divide same base:')} aᵐ ÷ aⁿ = a^(m−n) — <em>subtract</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Power of a power:')} (aᵐ)ⁿ = a^(m×n) — <em>multiply</em> the exponents</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Negative exponent:')} ${or('a⁻ᵏ')} = 1/aᵏ — take the ${or('reciprocal')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Zero exponent:</strong> a⁰ = 1 for any a ≠ 0</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Scientific notation arithmetic tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">When multiplying numbers in scientific notation, multiply the front numbers and ${bl('add the powers of 10')}. Always check that the front number in your ${gr('final answer')} is between 1 and 10 — adjust the power if needed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify (3⁻²)³.',
          answer: `(${or('3⁻²')})³ = ${bl('3⁻⁶')} = ${gr('1/729')}`,
          steps: [
            `${bl('Power of a power rule:')} multiply the exponents: (${or('3⁻²')})³ = 3^(${or('−2')} × 3) = ${bl('3⁻⁶')}`,
            `Apply the ${or('negative exponent rule')}: ${bl('3⁻⁶')} = 1/3⁶`,
            `Evaluate: 3⁶ = 729`,
            `<strong>Answer:</strong> (${or('3⁻²')})³ = ${gr('1/729')} ✓`,
          ],
        },
        {
          question: 'Simplify 4³ ÷ 4⁻².',
          answer: `4³ ÷ ${or('4⁻²')} = ${bl('4⁵')} = ${gr('1024')}`,
          steps: [
            `${bl('Divide same base rule:')} subtract the exponents: 4³ ÷ ${or('4⁻²')} = 4^(3 − (${or('−2')})) = 4^(3 + 2) = ${bl('4⁵')}`,
            `Evaluate: 4⁵ = 4 × 4 × 4 × 4 × 4 = 1024`,
            `<strong>Answer:</strong> 4³ ÷ ${or('4⁻²')} = ${gr('1024')} ✓`,
          ],
        },
        {
          question: 'Lerato calculates the mass of a virus as 2 × 10⁻⁷ grams. If she has 5 viruses, find the total mass in scientific notation.',
          answer: `Total mass = ${gr('1 × 10⁻⁶ grams')}`,
          steps: [
            `Multiply: 5 × (2 × ${or('10⁻⁷')}) = (5 × 2) × ${or('10⁻⁷')} = 10 × ${or('10⁻⁷')}`,
            `${bl('Multiply same base:')} 10 × ${or('10⁻⁷')} = 10¹ × ${or('10⁻⁷')} = 10^(1 + (${or('−7')})) = ${bl('10⁻⁶')}`,
            `Adjust to scientific notation: 10 is not between 1 and 10, so rewrite 10 × ${or('10⁻⁷')} = 1 × 10¹ × ${or('10⁻⁷')} = 1 × ${bl('10⁻⁶')}`,
            `<strong>Answer:</strong> Total mass = ${gr('1 × 10⁻⁶ grams')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify (2⁻³)².',
          checkMode: 'auto',
          options: ['1/2', '-64', '1/64', '64'],
          correctIndex: 2,
          explanation: 'Power of a power — multiply the exponents: (2⁻³)² = 2^(−3 × 2) = 2⁻⁶ = 1/64. (Other options add the exponents instead of multiplying, drop the reciprocal step, or ignore the negative sign entirely.)',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 6² ÷ 6⁻¹.',
          checkMode: 'auto',
          options: ['6', '1/36', '36', '216'],
          correctIndex: 3,
          explanation: 'Same base — subtract the exponents: 6² ÷ 6⁻¹ = 6^(2 − (−1)) = 6³ = 216. (Other options forget to flip the sign when subtracting a negative, multiply the exponents instead of subtracting, or miscalculate the power.)',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says 5⁰ = 5. Which statement correctly evaluates 5⁰?',
          checkMode: 'auto',
          options: [
            'He is incorrect — any non-zero number raised to the power 0 equals 1, so 5⁰ = 1.',
            'He is correct — 5⁰ = 5 because any number to the power 0 stays the same.',
            'He is incorrect — 5⁰ = 0, since anything to the power 0 is zero.',
            'He is incorrect — 5⁰ is undefined for non-zero bases.',
          ],
          correctIndex: 0,
          explanation: 'Any non-zero number raised to the power 0 equals 1, so 5⁰ = 1, not 5 or 0.',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A bacterium has a mass of 3 × 10⁻¹² grams. Find the total mass of 4 bacteria in scientific notation.',
          checkMode: 'auto',
          options: ['12 × 10⁻¹² grams', '1.2 × 10⁻¹¹ grams', '1.2 × 10⁻¹² grams', '1.2 × 10⁻¹³ grams'],
          correctIndex: 1,
          explanation: 'Multiply: 4 × (3 × 10⁻¹²) = 12 × 10⁻¹². Adjust to scientific notation: 12 × 10⁻¹² = 1.2 × 10¹ × 10⁻¹² = 1.2 × 10⁻¹¹ grams. (Other options leave the front number outside 1–10, or shift the exponent the wrong way when adjusting.)',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Simplify 7⁻¹ × 7³.',
          checkMode: 'auto',
          options: ['1/343', '2401', '49', '7'],
          correctIndex: 2,
          explanation: 'Same base — add the exponents: 7⁻¹ × 7³ = 7^(−1 + 3) = 7² = 49. (Other options multiply the exponents instead of adding, ignore the negative sign, or make an arithmetic slip evaluating the power.)',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says (3⁻¹)⁻² equals 9. Which statement correctly evaluates (3⁻¹)⁻²?',
          checkMode: 'auto',
          options: [
            'She is incorrect — (3⁻¹)⁻² = 3^(−1 + −2) = 3⁻³ = 1/27.',
            'She is incorrect — the two negative exponents cancel to give 3⁰ = 1.',
            'She is incorrect — (3⁻¹)⁻² = −9, since one negative sign should remain.',
            'She is correct — (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9.',
          ],
          correctIndex: 3,
          explanation: 'Power of a power — multiply the exponents: (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9. Amahle is correct.',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Simplify 10⁻³ × 10⁵ ÷ 10⁻¹.',
          checkMode: 'auto',
          options: ['1000', '10', '1/1000', '100'],
          correctIndex: 0,
          explanation: 'Work left to right: 10⁻³ × 10⁵ = 10^(−3 + 5) = 10². Then 10² ÷ 10⁻¹ = 10^(2 − (−1)) = 10³ = 1000. (Other options forget to flip the sign when dividing by a negative exponent, invert the final answer, or miscalculate the power.)',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A grain of sand has a mass of approximately 5 × 10⁻⁵ grams. Find the mass of 1000 grains in scientific notation.',
          checkMode: 'auto',
          options: ['5 × 10⁻⁸ grams', '5 × 10⁻² grams', '5 × 10⁻³ grams', '5000 × 10⁻⁵ grams'],
          correctIndex: 1,
          explanation: 'Multiply: 1000 × (5 × 10⁻⁵) = 5 × 10³ × 10⁻⁵ = 5 × 10^(3 + (−5)) = 5 × 10⁻² grams. (Other options subtract the exponents instead of adding, miscount the powers of 10 in 1000, or leave the answer unadjusted to scientific notation.)',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says negative exponents always make a number smaller than 1. Which statement best explains whether he is correct?',
          checkMode: 'auto',
          options: [
            'Yes, always — a negative exponent makes any number smaller than 1, regardless of the base.',
            'No — a negative exponent always makes the result negative, not necessarily smaller than 1.',
            'Yes, provided the base is greater than 1 — a negative exponent gives a reciprocal, which is a fraction smaller than 1 when the base is greater than 1.',
            'No — the size of the result never depends on the sign of the exponent, only on the base.',
          ],
          correctIndex: 2,
          explanation: 'A negative exponent means take the reciprocal: a⁻ᵏ = 1/aᵏ. If a > 1, then aᵏ > 1, so the reciprocal 1/aᵏ is a fraction smaller than 1 — but this depends on the base being greater than 1, so Sipho\'s claim needs that condition.',
        },
      ],

      videoPlaceholder:
        'Short video showing how to apply all laws of exponents including negative exponents in calculations and real-life problems',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered exponents.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 2⁻⁴.', checkMode: 'auto', options: ['1/16', '-16', '1/8', '16'], correctIndex: 0, explanation: 'Apply a⁻ᵏ = 1/aᵏ: 2⁻⁴ = 1/2⁴ = 1/16. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'Write 5⁻³ as a fraction in simplest form.', checkMode: 'auto', options: ['-125', '1/125', '1/15', '125'], correctIndex: 1, explanation: 'Apply the negative exponent rule: 5⁻³ = 1/5³ = 1/125. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'What is the value of 10⁻²?', checkMode: 'auto', options: ['-100', '1/20', '1/100', '100'], correctIndex: 2, explanation: '10⁻² = 1/10² = 1/100. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Medium', question: 'Evaluate 6⁻² and give your answer as a fraction.', checkMode: 'auto', options: ['-36', '1/12', '36', '1/36'], correctIndex: 3, explanation: '6⁻² = 1/6² = 1/36. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 3⁵ × 3⁻².', checkMode: 'auto', options: ['27', '2187', '1/59049', '1/27'], correctIndex: 0, explanation: 'Same base — add the exponents: 3⁵ × 3⁻² = 3^(5 + (−2)) = 3³ = 27. (Other options add the exponents as if both were positive, multiply the exponents instead of adding them, or flip the sign of the wrong exponent.)' },
        { difficulty: 'Medium', question: 'Simplify 2⁻³ × 2⁷.', checkMode: 'auto', options: ['1024', '16', '1/1024', '-16'], correctIndex: 1, explanation: 'Same base — add the exponents: 2⁻³ × 2⁷ = 2^(−3 + 7) = 2⁴ = 16. (Other options add the exponents as if both were positive, subtract instead of add, or wrongly apply a negative sign to the final answer.)' },
        { difficulty: 'Hard', question: 'Simplify 6⁴ × 6⁻⁶, giving your answer as a fraction.', checkMode: 'auto', options: ['36', '-36', '1/36', '1/12'], correctIndex: 2, explanation: 'Same base — add the exponents: 6⁴ × 6⁻⁶ = 6^(4 + (−6)) = 6⁻² = 1/6² = 1/36. (Other options invert the subtraction order, forget to take the reciprocal after finding a negative exponent, or miscalculate 6² as 12 instead of 36.)' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 5² ÷ 5⁻³.', checkMode: 'auto', options: ['1/5', '1/15625', '1/3125', '3125'], correctIndex: 3, explanation: 'Same base — subtract the exponents: 5² ÷ 5⁻³ = 5^(2 − (−3)) = 5⁵ = 3125. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Medium', question: 'Find the value of 7⁻² ÷ 7⁻⁵.', checkMode: 'auto', options: ['343', '1/823543', '282475249', '1/343'], correctIndex: 0, explanation: 'Same base — subtract the exponents: 7⁻² ÷ 7⁻⁵ = 7^(−2 − (−5)) = 7³ = 343. (Other options forget to flip the sign of the second negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Hard', question: 'Simplify 3⁻¹ ÷ 3², giving your answer as a fraction.', checkMode: 'auto', options: ['3', '1/27', '1/9', '27'], correctIndex: 1, explanation: 'Same base — subtract the exponents: 3⁻¹ ÷ 3² = 3^(−1 − 2) = 3⁻³ = 1/27. (Other options add the exponents instead of subtracting, multiply the exponents instead of subtracting, or invert the subtraction order.)' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (6⁻²)².', checkMode: 'auto', options: ['1', '1296', '1/1296', '36'], correctIndex: 2, explanation: 'Power of a power — multiply the exponents: (6⁻²)² = 6^(−2 × 2) = 6⁻⁴ = 1/1296. (Other options add the exponents instead of multiplying, drop the negative sign, or only use the outer exponent while ignoring the inner one.)' },
        { difficulty: 'Hard', question: 'Simplify (5⁻¹)⁻³.', checkMode: 'auto', options: ['1/625', '1/125', '15', '125'], correctIndex: 3, explanation: 'Power of a power — multiply the exponents: (5⁻¹)⁻³ = 5^(−1 × −3) = 5³ = 125. (Other options add the exponents instead of multiplying, mishandle one of the negative signs, or miscalculate 5³.)' },
        { difficulty: 'Hard', question: 'Evaluate (3²)⁻², giving your answer as a fraction.', checkMode: 'auto', options: ['1/81', '1', '81', '1/9'], correctIndex: 0, explanation: 'Power of a power — multiply the exponents: (3²)⁻² = 3^(2 × −2) = 3⁻⁴ = 1/81. (Other options add the exponents instead of multiplying, drop the negative sign, or ignore the inner exponent.)' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.00052 in scientific notation.', checkMode: 'auto', options: ['5.2 × 10⁴', '5.2 × 10⁻⁴', '52 × 10⁻⁵', '5.2 × 10⁻³'], correctIndex: 1, explanation: 'Move the decimal 4 places right: 0.00052 → 5.2. Moving right gives a negative exponent: 5.2 × 10⁻⁴. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Medium', question: 'Express 0.0000078 in scientific notation.', checkMode: 'auto', options: ['7.8 × 10⁶', '78 × 10⁻⁷', '7.8 × 10⁻⁶', '7.8 × 10⁻⁵'], correctIndex: 2, explanation: 'Move the decimal 6 places right: 0.0000078 → 7.8. Moving right gives a negative exponent: 7.8 × 10⁻⁶. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Hard', question: 'Zanele writes 0.000416 in scientific notation as 4.16 × 10⁻⁴. Which statement correctly checks her answer?', checkMode: 'auto', options: ['Incorrect — the exponent should be positive, giving 4.16 × 10⁴.', 'Incorrect — moving the decimal only 3 places gives 4.16 × 10⁻³.', 'Incorrect — the front number should be 41.6, giving 41.6 × 10⁻⁵.', 'Correct — moving the decimal 4 places right from 0.000416 gives 4.16, confirming 4.16 × 10⁻⁴.'], correctIndex: 3, explanation: 'Moving the decimal 4 places right from 0.000416 gives 4.16, and moving right gives a negative exponent of −4, so 4.16 × 10⁻⁴ is correct.' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 2⁷ × 2⁻⁴ ÷ 2².', checkMode: 'auto', options: ['2', '512', '32', '8'], correctIndex: 0, explanation: 'Work left to right: 2⁷ × 2⁻⁴ = 2^(7 + (−4)) = 2³. Then 2³ ÷ 2² = 2^(3 − 2) = 2¹ = 2. (Other options ignore the negative sign in the first step, add instead of subtract in the second step, or forget the division step entirely.)' },
        { difficulty: 'Hard', question: 'A skin cell has a mass of 3 × 10⁻⁸ grams. Find the total mass of 5 skin cells in scientific notation.', checkMode: 'auto', options: ['15 × 10⁻⁸ grams', '1.5 × 10⁻⁷ grams', '1.5 × 10⁻⁹ grams', '8 × 10⁻⁸ grams'], correctIndex: 1, explanation: 'Multiply: 5 × (3 × 10⁻⁸) = 15 × 10⁻⁸. Adjust to scientific notation: 15 × 10⁻⁸ = 1.5 × 10¹ × 10⁻⁸ = 1.5 × 10⁻⁷ grams. (Other options leave the front number outside 1–10, shift the exponent the wrong way when adjusting, or add the front numbers instead of multiplying them.)' },
        { difficulty: 'Hard', question: 'Karabo says 4⁻¹ × 4⁰ × 4³ simplifies to 4². Which statement correctly evaluates this?', checkMode: 'auto', options: ['He is incorrect — a zero exponent makes the whole product zero, so the answer is 0.', 'He is incorrect — the exponents should be multiplied, not added, giving 4⁰ = 1.', 'He is correct — adding the exponents gives −1 + 0 + 3 = 2, so 4⁻¹ × 4⁰ × 4³ = 4² = 16.', 'He is incorrect — 4⁻¹ makes the whole expression negative, so the answer is −4².'], correctIndex: 2, explanation: 'Same base — add the exponents: −1 + 0 + 3 = 2, so 4⁻¹ × 4⁰ × 4³ = 4² = 16. Karabo is correct.' },
        { difficulty: 'Hard', question: 'Simplify 10⁻³ × 10⁶ ÷ 10².', checkMode: 'auto', options: ['10000000', '100000', '1000', '10'], correctIndex: 3, explanation: 'Work left to right: 10⁻³ × 10⁶ = 10^(−3 + 6) = 10³. Then 10³ ÷ 10² = 10^(3 − 2) = 10¹ = 10. (Other options ignore the negative sign in the first step, add instead of subtract in the second step, or forget the division step entirely.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 8⁻².', checkMode: 'auto', options: ['1/64', '-64', '1/16', '64'], correctIndex: 0, explanation: 'Apply a⁻ᵏ = 1/aᵏ: 8⁻² = 1/8² = 1/64. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'Write 4⁻⁴ as a fraction in simplest form.', checkMode: 'auto', options: ['-256', '1/256', '1/16', '256'], correctIndex: 1, explanation: 'Apply the negative exponent rule: 4⁻⁴ = 1/4⁴ = 1/256. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'What is the value of 3⁻³?', checkMode: 'auto', options: ['-27', '1/9', '1/27', '27'], correctIndex: 2, explanation: '3⁻³ = 1/3³ = 1/27. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Medium', question: 'Evaluate 9⁻² and give your answer as a fraction.', checkMode: 'auto', options: ['-81', '1/18', '81', '1/81'], correctIndex: 3, explanation: '9⁻² = 1/9² = 1/81. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 4⁶ × 4⁻⁴.', checkMode: 'auto', options: ['16', '1048576', '1/16', '-16'], correctIndex: 0, explanation: 'Same base — add the exponents: 4⁶ × 4⁻⁴ = 4^(6 + (−4)) = 4² = 16. (Other options add the exponents as if both were positive, flip the sign of the wrong exponent, or wrongly apply a negative sign to the final answer.)' },
        { difficulty: 'Medium', question: 'Simplify 3⁻² × 3⁶.', checkMode: 'auto', options: ['6561', '81', '1/6561', '-81'], correctIndex: 1, explanation: 'Same base — add the exponents: 3⁻² × 3⁶ = 3^(−2 + 6) = 3⁴ = 81. (Other options add the exponents as if both were positive, subtract instead of add, or wrongly apply a negative sign to the final answer.)' },
        { difficulty: 'Hard', question: 'Simplify 5³ × 5⁻⁶, giving your answer as a fraction.', checkMode: 'auto', options: ['125', '-125', '1/125', '1/15'], correctIndex: 2, explanation: 'Same base — add the exponents: 5³ × 5⁻⁶ = 5^(3 + (−6)) = 5⁻³ = 1/5³ = 1/125. (Other options invert the subtraction order, forget to take the reciprocal after finding a negative exponent, or miscalculate 5³.)' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 9¹ ÷ 9⁻³.', checkMode: 'auto', options: ['1/81', '1/729', '1/6561', '6561'], correctIndex: 3, explanation: 'Same base — subtract the exponents: 9¹ ÷ 9⁻³ = 9^(1 − (−3)) = 9⁴ = 6561. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Medium', question: 'Find the value of 6⁻¹ ÷ 6⁻⁴.', checkMode: 'auto', options: ['216', '1/7776', '1296', '1/216'], correctIndex: 0, explanation: 'Same base — subtract the exponents: 6⁻¹ ÷ 6⁻⁴ = 6^(−1 − (−4)) = 6³ = 216. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Hard', question: 'Simplify 2⁻² ÷ 2³, giving your answer as a fraction.', checkMode: 'auto', options: ['2', '1/32', '1/64', '32'], correctIndex: 1, explanation: 'Same base — subtract the exponents: 2⁻² ÷ 2³ = 2^(−2 − 3) = 2⁻⁵ = 1/32. (Other options add the exponents instead of subtracting, multiply the exponents instead of subtracting, or invert the subtraction order.)' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (3⁻²)².', checkMode: 'auto', options: ['1', '81', '1/81', '9'], correctIndex: 2, explanation: 'Power of a power — multiply the exponents: (3⁻²)² = 3^(−2 × 2) = 3⁻⁴ = 1/81. (Other options add the exponents instead of multiplying, drop the negative sign, or only use the outer exponent while ignoring the inner one.)' },
        { difficulty: 'Hard', question: 'Simplify (2⁻¹)⁻⁴.', checkMode: 'auto', options: ['1/32', '1/16', '8', '16'], correctIndex: 3, explanation: 'Power of a power — multiply the exponents: (2⁻¹)⁻⁴ = 2^(−1 × −4) = 2⁴ = 16. (Other options add the exponents instead of multiplying, mishandle one of the negative signs, or miscalculate 2⁴.)' },
        { difficulty: 'Hard', question: 'Evaluate (4²)⁻², giving your answer as a fraction.', checkMode: 'auto', options: ['1/256', '1', '256', '1/16'], correctIndex: 0, explanation: 'Power of a power — multiply the exponents: (4²)⁻² = 4^(2 × −2) = 4⁻⁴ = 1/256. (Other options add the exponents instead of multiplying, drop the negative sign, or ignore the inner exponent.)' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.0000031 in scientific notation.', checkMode: 'auto', options: ['3.1 × 10⁶', '3.1 × 10⁻⁶', '31 × 10⁻⁷', '3.1 × 10⁻⁵'], correctIndex: 1, explanation: 'Move the decimal 6 places right: 0.0000031 → 3.1. Moving right gives a negative exponent: 3.1 × 10⁻⁶. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Medium', question: 'Express 0.0000091 in scientific notation.', checkMode: 'auto', options: ['9.1 × 10⁶', '91 × 10⁻⁷', '9.1 × 10⁻⁶', '9.1 × 10⁻⁵'], correctIndex: 2, explanation: 'Move the decimal 6 places right: 0.0000091 → 9.1. Moving right gives a negative exponent: 9.1 × 10⁻⁶. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Hard', question: 'Thabo writes 0.000029 in scientific notation as 2.9 × 10⁻⁵. Which statement correctly checks his answer?', checkMode: 'auto', options: ['Incorrect — the exponent should be positive, giving 2.9 × 10⁵.', 'Incorrect — moving the decimal only 4 places gives 2.9 × 10⁻⁴.', 'Incorrect — the front number should be 29, giving 29 × 10⁻⁶.', 'Correct — moving the decimal 5 places right from 0.000029 gives 2.9, confirming 2.9 × 10⁻⁵.'], correctIndex: 3, explanation: 'Moving the decimal 5 places right from 0.000029 gives 2.9, and moving right gives a negative exponent of −5, so 2.9 × 10⁻⁵ is correct.' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 3⁻² × 3⁵ ÷ 3⁻¹.', checkMode: 'auto', options: ['81', '9', '6561', '27'], correctIndex: 0, explanation: 'Work left to right: 3⁻² × 3⁵ = 3^(−2 + 5) = 3³. Then 3³ ÷ 3⁻¹ = 3^(3 − (−1)) = 3⁴ = 81. (Other options forget to flip the sign in the division step, ignore the negative sign in the first step, or forget the division step entirely.)' },
        { difficulty: 'Hard', question: 'A bacterium has a mass of 6 × 10⁻¹¹ grams. Find the total mass of 3 bacteria in scientific notation.', checkMode: 'auto', options: ['18 × 10⁻¹¹ grams', '1.8 × 10⁻¹⁰ grams', '1.8 × 10⁻¹² grams', '9 × 10⁻¹¹ grams'], correctIndex: 1, explanation: 'Multiply: 3 × (6 × 10⁻¹¹) = 18 × 10⁻¹¹. Adjust to scientific notation: 18 × 10⁻¹¹ = 1.8 × 10¹ × 10⁻¹¹ = 1.8 × 10⁻¹⁰ grams. (Other options leave the front number outside 1–10, shift the exponent the wrong way when adjusting, or add the front numbers instead of multiplying them.)' },
        { difficulty: 'Hard', question: 'Amahle says 6⁻² × 6⁵ equals 216. Which statement correctly evaluates this?', checkMode: 'auto', options: ['She is incorrect — the exponents should multiply, giving 6⁻¹⁰.', 'She is incorrect — a negative exponent makes the whole product negative, so the answer is −216.', 'She is correct — adding the exponents gives −2 + 5 = 3, so 6⁻² × 6⁵ = 6³ = 216.', 'She is incorrect — the answer should be a fraction, 1/216, since one exponent is negative.'], correctIndex: 2, explanation: 'Same base — add the exponents: −2 + 5 = 3, so 6⁻² × 6⁵ = 6³ = 216. Amahle is correct.' },
        { difficulty: 'Hard', question: 'Simplify 5⁻² × 5⁴ ÷ 5⁻¹.', checkMode: 'auto', options: ['5', '78125', '25', '125'], correctIndex: 3, explanation: 'Work left to right: 5⁻² × 5⁴ = 5^(−2 + 4) = 5². Then 5² ÷ 5⁻¹ = 5^(2 − (−1)) = 5³ = 125. (Other options forget to flip the sign in the division step, ignore the negative sign in the first step, or forget the division step entirely.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Negative exponent → reciprocal (Q1-4)
        { difficulty: 'Easy', question: 'Simplify 10⁻³.', checkMode: 'auto', options: ['1/1000', '-1000', '1/30', '1000'], correctIndex: 0, explanation: 'Apply a⁻ᵏ = 1/aᵏ: 10⁻³ = 1/10³ = 1/1000. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'Write 2⁻⁶ as a fraction in simplest form.', checkMode: 'auto', options: ['-64', '1/64', '1/12', '64'], correctIndex: 1, explanation: 'Apply the negative exponent rule: 2⁻⁶ = 1/2⁶ = 1/64. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Easy', question: 'What is the value of 5⁻²?', checkMode: 'auto', options: ['-25', '1/10', '1/25', '25'], correctIndex: 2, explanation: '5⁻² = 1/5² = 1/25. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },
        { difficulty: 'Medium', question: 'Evaluate 6⁻³ and give your answer as a fraction.', checkMode: 'auto', options: ['-216', '1/18', '216', '1/216'], correctIndex: 3, explanation: '6⁻³ = 1/6³ = 1/216. (Other options flip the sign, multiply the base by the exponent, or forget the reciprocal.)' },

        // Block 2 — Product law with negative exponents (Q5-7)
        { difficulty: 'Medium', question: 'Simplify 7⁻³ × 7⁻¹.', checkMode: 'auto', options: ['1/2401', '2401', '1/49', '343'], correctIndex: 0, explanation: 'Same base — add the exponents: 7⁻³ × 7⁻¹ = 7^(−3 + (−1)) = 7⁻⁴ = 1/7⁴ = 1/2401. (Other options forget the reciprocal, subtract instead of add, or multiply the exponents instead of adding them.)' },
        { difficulty: 'Medium', question: 'Simplify 2⁵ × 2⁻⁸.', checkMode: 'auto', options: ['8192', '1/8', '-8', '1/6'], correctIndex: 1, explanation: 'Same base — add the exponents: 2⁵ × 2⁻⁸ = 2^(5 + (−8)) = 2⁻³ = 1/2³ = 1/8. (Other options add the exponents as if both were positive, forget the reciprocal, or miscalculate 2³.)' },
        { difficulty: 'Hard', question: 'Simplify 9⁻¹ × 9⁻², giving your answer as a fraction.', checkMode: 'auto', options: ['729', '9', '1/729', '81'], correctIndex: 2, explanation: 'Same base — add the exponents: 9⁻¹ × 9⁻² = 9^(−1 + (−2)) = 9⁻³ = 1/9³ = 1/729. (Other options forget the reciprocal, subtract instead of add, or multiply the exponents instead of adding them.)' },

        // Block 3 — Quotient law with negative exponents (Q8-10)
        { difficulty: 'Medium', question: 'Simplify 9² ÷ 9⁻¹.', checkMode: 'auto', options: ['9', '1/81', '1/729', '729'], correctIndex: 3, explanation: 'Same base — subtract the exponents: 9² ÷ 9⁻¹ = 9^(2 − (−1)) = 9³ = 729. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Medium', question: 'Find the value of 7³ ÷ 7⁻².', checkMode: 'auto', options: ['16807', '7', '1/117649', '1/16807'], correctIndex: 0, explanation: 'Same base — subtract the exponents: 7³ ÷ 7⁻² = 7^(3 − (−2)) = 7⁵ = 16807. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the order giving the reciprocal.)' },
        { difficulty: 'Hard', question: 'Simplify 3⁻³ ÷ 3⁻¹, giving your answer as a fraction.', checkMode: 'auto', options: ['1/81', '1/9', '27', '9'], correctIndex: 1, explanation: 'Same base — subtract the exponents: 3⁻³ ÷ 3⁻¹ = 3^(−3 − (−1)) = 3⁻² = 1/9. (Other options forget to flip the sign of the negative exponent, multiply the exponents instead of subtracting, or invert the subtraction order.)' },

        // Block 4 — Power of a power with negative exponents (Q11-13)
        { difficulty: 'Medium', question: 'Simplify (6⁻¹)⁻².', checkMode: 'auto', options: ['1/216', '1/36', '36', '12'], correctIndex: 2, explanation: 'Power of a power — multiply the exponents: (6⁻¹)⁻² = 6^(−1 × −2) = 6² = 36. (Other options add the exponents instead of multiplying, mishandle one of the negative signs, or miscalculate 6².)' },
        { difficulty: 'Hard', question: 'Simplify (10⁻²)².', checkMode: 'auto', options: ['1', '10000', '1/100', '1/10000'], correctIndex: 3, explanation: 'Power of a power — multiply the exponents: (10⁻²)² = 10^(−2 × 2) = 10⁻⁴ = 1/10000. (Other options add the exponents instead of multiplying, drop the negative sign, or only use the outer exponent while ignoring the inner one.)' },
        { difficulty: 'Hard', question: 'Evaluate (5⁻²)⁻¹, giving your answer as a whole number.', checkMode: 'auto', options: ['25', '1/125', '1/25', '10'], correctIndex: 0, explanation: 'Power of a power — multiply the exponents: (5⁻²)⁻¹ = 5^(−2 × −1) = 5² = 25. (Other options add the exponents instead of multiplying, mishandle one of the negative signs, or miscalculate 5².)' },

        // Block 5 — Scientific notation with negative exponents (Q14-16)
        { difficulty: 'Easy', question: 'Write 0.000000605 in scientific notation.', checkMode: 'auto', options: ['6.05 × 10⁷', '6.05 × 10⁻⁷', '60.5 × 10⁻⁸', '6.05 × 10⁻⁶'], correctIndex: 1, explanation: 'Move the decimal 7 places right: 0.000000605 → 6.05. Moving right gives a negative exponent: 6.05 × 10⁻⁷. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Medium', question: 'Express 0.0000004 in scientific notation.', checkMode: 'auto', options: ['4 × 10⁷', '40 × 10⁻⁸', '4 × 10⁻⁷', '4 × 10⁻⁶'], correctIndex: 2, explanation: 'Move the decimal 7 places right: 0.0000004 → 4. Moving right gives a negative exponent: 4 × 10⁻⁷. (Other options use a positive exponent, leave the front number outside 1–10, or miscount the number of places moved.)' },
        { difficulty: 'Hard', question: 'Lerato writes 0.000625 in scientific notation as 6.25 × 10⁻⁴. Which statement correctly checks her answer?', checkMode: 'auto', options: ['Incorrect — the exponent should be positive, giving 6.25 × 10⁴.', 'Incorrect — moving the decimal only 3 places gives 6.25 × 10⁻³.', 'Incorrect — the front number should be 62.5, giving 62.5 × 10⁻⁵.', 'Correct — moving the decimal 4 places right from 0.000625 gives 6.25, confirming 6.25 × 10⁻⁴.'], correctIndex: 3, explanation: 'Moving the decimal 4 places right from 0.000625 gives 6.25, and moving right gives a negative exponent of −4, so 6.25 × 10⁻⁴ is correct.' },

        // Block 6 — Combined laws, multi-step and real-life problems (Q17-20)
        { difficulty: 'Hard', question: 'Simplify 7² × 7⁻³ ÷ 7⁻².', checkMode: 'auto', options: ['7', '1/343', '823543', '1/7'], correctIndex: 0, explanation: 'Work left to right: 7² × 7⁻³ = 7^(2 + (−3)) = 7⁻¹. Then 7⁻¹ ÷ 7⁻² = 7^(−1 − (−2)) = 7¹ = 7. (Other options forget to flip the sign in the division step, ignore the negative sign in the first step, or forget the division step entirely.)' },
        { difficulty: 'Hard', question: 'A hair has a width of 8 × 10⁻⁵ metres. Find the combined width of 200 hairs laid side by side, in scientific notation.', checkMode: 'auto', options: ['1600 × 10⁻⁵ metres', '1.6 × 10⁻² metres', '1.6 × 10² metres', '208 × 10⁻⁵ metres'], correctIndex: 1, explanation: 'Multiply: 200 × (8 × 10⁻⁵) = 1600 × 10⁻⁵ = 1.6 × 10³ × 10⁻⁵ = 1.6 × 10⁻² metres. (Other options leave the front number outside 1–10, shift the exponent the wrong way when adjusting, or add the front numbers instead of multiplying them.)' },
        { difficulty: 'Hard', question: 'Sipho says 2⁻⁴ × 2⁶ equals 4. Which statement correctly evaluates this?', checkMode: 'auto', options: ['He is incorrect — the exponents should multiply, giving 2⁻²⁴.', 'He is incorrect — a negative exponent makes the product negative, so the answer is −4.', 'He is correct — adding the exponents gives −4 + 6 = 2, so 2⁻⁴ × 2⁶ = 2² = 4.', 'He is incorrect — the answer should be a fraction, 1/4, since one exponent is negative.'], correctIndex: 2, explanation: 'Same base — add the exponents: −4 + 6 = 2, so 2⁻⁴ × 2⁶ = 2² = 4. Sipho is correct.' },
        { difficulty: 'Hard', question: 'Simplify 6⁻³ × 6⁷ ÷ 6².', checkMode: 'auto', options: ['46656', '1679616', '1296', '36'], correctIndex: 3, explanation: 'Work left to right: 6⁻³ × 6⁷ = 6^(−3 + 7) = 6⁴. Then 6⁴ ÷ 6² = 6^(4 − 2) = 6² = 36. (Other options add instead of subtracting in the final step, ignore the negative sign in the first step, or forget the division step entirely.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered integer exponents and scientific notation.' },
        { minScore: 14, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 9, message: 'Good effort! Revisit negative exponents and the laws of exponents, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
