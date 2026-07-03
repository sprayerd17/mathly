import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// first term        → blue   (#2563eb)
// common difference / common ratio / lower limit → orange (#ea580c)
// general term / upper limit / term formula      → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patterns, Sequences and Series',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: ARITHMETIC SEQUENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'arithmetic-sequences',
      title: 'Revision — Arithmetic Sequences',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">An arithmetic sequence has a <strong>constant difference</strong> (d) between consecutive terms. The general term formula is T<sub>n</sub> = ${bl('a')} + (n − 1)${or('d')}, where ${bl('a')} is the first term and ${or('d')} is the common difference. We use this formula to find any term in the sequence without listing every term before it.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first term (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common difference (d)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('general term (Tₙ)')}</span>` +
        `</div>` +

        // ── Formula card ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General term formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}</p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">First term (a)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting value T<sub>1</sub> of the sequence.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Common difference (d)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed amount added to each term to get the next. d = T<sub>2</sub> − T<sub>1</sub>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">General term (Tₙ)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A formula that gives the value of any term in the sequence directly.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">d can be negative</p>` +
        `<p style="margin:0;color:#1e3a8a;">When ${or('d')} is negative the sequence is <strong>decreasing</strong> — each term is smaller than the one before it. The formula still works exactly the same way.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the 15th term of the arithmetic sequence 4, 9, 14, 19, …',
          answer: `${gr('T₁₅')} = ${gr('74')}`,
          steps: [
            `Identify the values: ${bl('a')} = ${bl('4')}, ${or('d')} = 9 − 4 = ${or('5')}.`,
            `Write the general term formula: ${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}.`,
            `Substitute n = 15: ${gr('T<sub>15</sub>')} = ${bl('4')} + (15 − 1)(${or('5')}).`,
            `Simplify: ${gr('T<sub>15</sub>')} = ${bl('4')} + 14 × ${or('5')} = ${bl('4')} + 70 = ${gr('74')}.`,
          ],
        },
        {
          question: 'Sipho has an arithmetic sequence with a = 10 and d = −3. Find T₂₀.',
          answer: `${gr('T₂₀')} = ${gr('−47')}`,
          steps: [
            `Identify the values: ${bl('a')} = ${bl('10')}, ${or('d')} = ${or('−3')}.`,
            `Write the general term formula: ${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}.`,
            `Substitute n = 20: ${gr('T<sub>20</sub>')} = ${bl('10')} + (20 − 1)(${or('−3')}).`,
            `Simplify: ${gr('T<sub>20</sub>')} = ${bl('10')} + 19 × (${or('−3')}) = ${bl('10')} − 57 = ${gr('−47')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining arithmetic sequences, the general term formula Tₙ = a + (n−1)d, and how to find any term using worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — REVISION: GEOMETRIC SEQUENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-sequences',
      title: 'Revision — Geometric Sequences',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">A geometric sequence has a <strong>constant ratio</strong> (r) between consecutive terms — each term is found by multiplying the previous term by r. The general term formula is T<sub>n</sub> = ${bl('a')} · ${or('r')}<sup>n−1</sup>, where ${bl('a')} is the first term and ${or('r')} is the common ratio.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first term (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('common ratio (r)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('general term (Tₙ)')}</span>` +
        `</div>` +

        // ── Formula card ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">General term formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup></p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">First term (a)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting value T<sub>1</sub> of the sequence.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Common ratio (r)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The fixed multiplier between terms. r = T<sub>2</sub> ÷ T<sub>1</sub>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">General term (Tₙ)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A formula that gives the value of any term directly without listing all previous terms.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">r between 0 and 1</p>` +
        `<p style="margin:0;color:#1e3a8a;">When 0 &lt; ${or('r')} &lt; 1 the sequence is <strong>decreasing</strong> — the terms get smaller and approach zero. This is called a <strong>convergent</strong> geometric sequence.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the 8th term of the geometric sequence 3, 6, 12, 24, …',
          answer: `${gr('T₈')} = ${gr('384')}`,
          steps: [
            `Identify the values: ${bl('a')} = ${bl('3')}, ${or('r')} = 6 ÷ 3 = ${or('2')}.`,
            `Write the general term formula: ${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup>.`,
            `Substitute n = 8: ${gr('T<sub>8</sub>')} = ${bl('3')} × ${or('2')}<sup>7</sup>.`,
            `Calculate: ${or('2')}<sup>7</sup> = 128. Therefore ${gr('T<sub>8</sub>')} = ${bl('3')} × 128 = ${gr('384')}.`,
          ],
        },
        {
          question: 'Lerato has a geometric sequence with a = 100 and r = 0.5. Find T₆.',
          answer: `${gr('T₆')} = ${gr('3.125')}`,
          steps: [
            `Identify the values: ${bl('a')} = ${bl('100')}, ${or('r')} = ${or('0.5')}.`,
            `Write the general term formula: ${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup>.`,
            `Substitute n = 6: ${gr('T<sub>6</sub>')} = ${bl('100')} × ${or('0.5')}<sup>5</sup>.`,
            `Calculate: ${or('0.5')}<sup>5</sup> = 0.03125. Therefore ${gr('T<sub>6</sub>')} = ${bl('100')} × 0.03125 = ${gr('3.125')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining geometric sequences, the general term formula Tₙ = a · rⁿ⁻¹, and how to find any term using worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIGMA NOTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sigma-notation',
      title: 'Sigma Notation',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">Sigma notation (Σ) provides a compact way to write the sum of a sequence of terms. ∑ (from i = ${bl('1')} to ${or('n')}) of ${gr('f(i)')} means we substitute i = 1, then i = 2, and so on up to i = n, adding all the resulting values together.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lower limit')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('upper limit')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('term formula')}</span>` +
        `</div>` +

        // ── Anatomy of sigma notation ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reading sigma notation</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">` +
        `∑ <sub style="font-size:0.7em;">i = ${bl('1')}</sub><sup style="font-size:0.7em;">${or('n')}</sup> ${gr('f(i)')}` +
        `</p>` +
        `</div>` +

        // ── Key parts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key parts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lower limit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting value of the index variable (written below Σ).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Upper limit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ending value of the index variable (written above Σ).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Term formula</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The expression in terms of the index variable that is evaluated and summed.</p>` +
        `</div>` +

        `</div>` +

        // ── How to evaluate ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to evaluate sigma notation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Start at the ${bl('lower limit')} — substitute that value into the ${gr('term formula')} and record the result.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Increase the index by 1 and repeat until you reach the ${or('upper limit')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Add all the ${gr('results')} together — this is the value of the sigma expression.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The lower limit does not have to be 1</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('lower limit')} can be any integer, including 0 or a value greater than 1. Always start substituting from whatever value is written below Σ.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evaluate ∑ (from k = 1 to 4) of (2k + 1).',
          answer: `Sum = ${gr('24')}`,
          steps: [
            `Identify the parts: ${bl('lower limit')} = ${bl('1')}, ${or('upper limit')} = ${or('4')}, ${gr('term formula')} = ${gr('2k + 1')}.`,
            `Substitute k = ${bl('1')}: ${gr('2(1) + 1')} = ${gr('3')}.`,
            `Substitute k = 2: ${gr('2(2) + 1')} = ${gr('5')}.`,
            `Substitute k = 3: ${gr('2(3) + 1')} = ${gr('7')}.`,
            `Substitute k = ${or('4')}: ${gr('2(4) + 1')} = ${gr('9')}.`,
            `Add the results: 3 + 5 + 7 + 9 = ${gr('24')}.`,
          ],
        },
        {
          question: 'Write the sum 2 + 4 + 6 + 8 + 10 using sigma notation.',
          answer: `∑ (from k = ${bl('1')} to ${or('5')}) of ${gr('2k')}`,
          steps: [
            `Identify the pattern: each term is an even number, so the ${gr('term formula')} is ${gr('2k')}.`,
            `The sum starts at k = ${bl('1')} (giving 2×1 = 2) and ends at k = ${or('5')} (giving 2×5 = 10).`,
            `Written in sigma notation: ∑ (from k = ${bl('1')} to ${or('5')}) of ${gr('2k')}.`,
          ],
        },
        {
          question: 'Thabo evaluates ∑ (from i = 3 to 6) of i². Find the sum.',
          answer: `Sum = ${gr('86')}`,
          steps: [
            `Identify the parts: ${bl('lower limit')} = ${bl('3')}, ${or('upper limit')} = ${or('6')}, ${gr('term formula')} = ${gr('i²')}.`,
            `Substitute i = ${bl('3')}: ${gr('3²')} = ${gr('9')}.`,
            `Substitute i = 4: ${gr('4²')} = ${gr('16')}.`,
            `Substitute i = 5: ${gr('5²')} = ${gr('25')}.`,
            `Substitute i = ${or('6')}: ${gr('6²')} = ${gr('36')}.`,
            `Add the results: 9 + 16 + 25 + 36 = ${gr('86')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining sigma notation, how to read and evaluate a sigma expression, and how to convert a written sum into sigma notation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SUM OF AN ARITHMETIC SERIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-arithmetic-series',
      title: 'Sum of an Arithmetic Series',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">An arithmetic series is the sum of the terms of an arithmetic sequence. The sum formula is S<sub>n</sub> = n/2[2${bl('a')} + (n − 1)${or('d')}], where ${bl('a')} is the first term, ${or('d')} is the common difference, and n is the number of terms. When the last term <em>l</em> is known directly, we can also use S<sub>n</sub> = n/2(${bl('a')} + l).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formula applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sum result')}</span>` +
        `</div>` +

        // ── Formula cards ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sum formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">General formula</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${or('n/2')}[2${bl('a')} + (n − 1)${bl('d')}]</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">When last term l is known</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${or('n/2')}(${bl('a')} + ${bl('l')})</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Choosing the right formula</p>` +
        `<p style="margin:0;color:#1e3a8a;">Use S<sub>n</sub> = n/2[2${bl('a')} + (n − 1)${bl('d')}] when you know ${bl('a')} and ${bl('d')}. Use S<sub>n</sub> = n/2(${bl('a')} + ${bl('l')}) when you know both the first term and the last term directly — it saves a step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the sum of the first 20 terms of the arithmetic sequence 3, 7, 11, 15, …',
          answer: `${gr('S₂₀')} = ${gr('820')}`,
          steps: [
            `Identify the known values: ${bl('a')} = ${bl('3')}, ${bl('d')} = ${bl('4')}, n = ${bl('20')}.`,
            `Write the formula: ${or('S<sub>n</sub> = n/2[2a + (n − 1)d]')}.`,
            `Substitute: ${or('S<sub>20</sub>')} = ${or('20/2')}[2(${bl('3')}) + (19)(${bl('4')})] = 10[6 + 76].`,
            `Simplify: 10 × 82 = ${gr('820')}.`,
          ],
        },
        {
          question: 'Amahle finds the sum of the first 12 terms of a series where a = 5 and the 12th term is 60.',
          answer: `${gr('S₁₂')} = ${gr('390')}`,
          steps: [
            `Identify the known values: ${bl('a')} = ${bl('5')}, last term ${bl('l')} = ${bl('60')}, n = ${bl('12')}.`,
            `Since both the first and last terms are known, use ${or('S<sub>n</sub> = n/2(a + l)')}.`,
            `Substitute: ${or('S<sub>12</sub>')} = ${or('12/2')}(${bl('5')} + ${bl('60')}) = 6 × 65.`,
            `Calculate: 6 × 65 = ${gr('390')}.`,
          ],
        },
        {
          question: 'Find n if the sum of an arithmetic series is 165, with a = 3 and d = 2.',
          answer: `n = ${gr('11')}`,
          steps: [
            `Identify the known values: ${bl('S<sub>n</sub>')} = ${bl('165')}, ${bl('a')} = ${bl('3')}, ${bl('d')} = ${bl('2')}.`,
            `Write the formula: ${or('S<sub>n</sub> = n/2[2a + (n − 1)d]')}.`,
            `Substitute: ${bl('165')} = ${or('n/2')}[6 + 2(n − 1)] → 330 = n(2n + 4) = 2n² + 4n.`,
            `Rearrange: 2n² + 4n − 330 = 0 → n² + 2n − 165 = 0.`,
            `Factorise: (n + 15)(n − 11) = 0 → n = ${gr('11')} (rejecting the negative solution n = −15).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sum of an arithmetic series using Sₙ = n/2[2a + (n−1)d] and Sₙ = n/2(a + l), with worked examples including finding n from the sum" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SUM OF A GEOMETRIC SERIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-geometric-series',
      title: 'Sum of a Geometric Series',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">A geometric series is the sum of the terms of a geometric sequence. The sum formula is S<sub>n</sub> = ${bl('a')}(${bl('r')}<sup>n</sup> − 1)/(${bl('r')} − 1) for r ≠ 1 (equivalently written as ${bl('a')}(1 − ${bl('r')}<sup>n</sup>)/(1 − ${bl('r')})). We also study the <strong>sum to infinity</strong>, S<sub>∞</sub> = ${bl('a')}/(1 − ${bl('r')}), which only converges to a finite value when ${or('−1 &lt; r &lt; 1')} — otherwise the series grows without bound and has no finite sum to infinity.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('convergence check')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sum result')}</span>` +
        `</div>` +

        // ── Formula cards ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sum formulas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Sum of first n terms (r ≠ 1)</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${bl('a')}(${bl('r')}<sup>n</sup> − 1) / (${bl('r')} − 1)</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Sum to infinity (−1 &lt; r &lt; 1 only)</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>∞</sub>')} = ${bl('a')} / (1 − ${bl('r')})</p>` +
        `</div>` +

        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Convergence vs. divergence</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Convergent series</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When ${or('−1 &lt; r &lt; 1')}, the terms shrink to zero and the series has a finite sum to infinity S<sub>∞</sub>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Divergent series</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When ${or('|r| ≥ 1')}, the terms do not shrink. The series grows without bound and S<sub>∞</sub> does not exist.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check r before using S<sub>∞</sub></p>` +
        `<p style="margin:0;color:#1e3a8a;">The sum to infinity formula only applies when ${or('−1 &lt; r &lt; 1')}. Always verify the convergence condition before using it — if r falls outside this range, simply state that the series diverges and no sum to infinity exists.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the sum of the first 6 terms of the geometric sequence 2, 6, 18, 54, …',
          answer: `${gr('S₆')} = ${gr('728')}`,
          steps: [
            `Identify the known values: ${bl('a')} = ${bl('2')}, ${bl('r')} = 6 ÷ 2 = ${bl('3')}, n = ${bl('6')}.`,
            `Write the formula: ${or('S<sub>n</sub> = a(rⁿ − 1) / (r − 1)')}.`,
            `Substitute: ${or('S<sub>6</sub>')} = ${bl('2')}(${bl('3')}<sup>6</sup> − 1) / (${bl('3')} − 1) = 2(729 − 1) / 2.`,
            `Simplify: 2 × 728 / 2 = ${gr('728')}.`,
          ],
        },
        {
          question: 'Find the sum to infinity of the geometric series with a = 8 and r = 0.5.',
          answer: `${gr('S∞')} = ${gr('16')}`,
          steps: [
            `Identify the known values: ${bl('a')} = ${bl('8')}, ${bl('r')} = ${bl('0.5')}.`,
            `Check convergence: ${or('−1 &lt; 0.5 &lt; 1')} ✓ — the series converges, so S<sub>∞</sub> exists.`,
            `Write the formula: ${or('S<sub>∞</sub> = a / (1 − r)')}.`,
            `Substitute: ${or('S<sub>∞</sub>')} = ${bl('8')} / (1 − ${bl('0.5')}) = 8 / 0.5 = ${gr('16')}.`,
          ],
        },
        {
          question: 'Sipho says the geometric series with a = 4 and r = 2 has a sum to infinity. Is he correct?',
          answer: `${gr('No — the series diverges and S∞ does not exist.')}`,
          steps: [
            `Identify the known values: ${bl('a')} = ${bl('4')}, ${bl('r')} = ${bl('2')}.`,
            `Check convergence: ${or('r = 2, which is NOT between −1 and 1')} — the convergence condition fails.`,
            `Since ${or('|r| ≥ 1')}, the series ${gr('diverges')} — the terms grow without bound.`,
            `Conclusion: ${gr('Sipho is incorrect.')} There is no finite sum to infinity for this series.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sum of a geometric series using Sₙ = a(rⁿ−1)/(r−1) and the sum to infinity S∞ = a/(1−r), including the convergence condition and divergent series" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the 10th term of the arithmetic sequence 2, 5, 8, 11, …',
      answer: '29',
      checkMode: 'auto',
      correctAnswer: '29',
      explanation: 'Use Tₙ = a + (n−1)d. a = 2, d = 3. T₁₀ = 2 + (10−1)(3) = 2 + 27 = 29.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the 12th term of the geometric sequence 4, 8, 16, 32, …',
      answer: '8192',
      checkMode: 'auto',
      correctAnswer: '8192',
      explanation: 'Use Tₙ = a · rⁿ⁻¹. a = 4, r = 2. T₁₂ = 4 × 2¹¹ = 4 × 2048 = 8192.',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says the sequence 5, 10, 20, 40 is arithmetic. Is he correct? Explain.',
      answer: 'No — the differences (5, 10, 20) are not constant, but the ratios (2, 2, 2) are constant, making this a geometric, not arithmetic, sequence.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Evaluate ∑ (from k = 1 to 4) of 3k.',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'k=1: 3(1)=3. k=2: 3(2)=6. k=3: 3(3)=9. k=4: 3(4)=12. Sum = 3+6+9+12 = 30.',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write the sum 5+10+15+20+25 using sigma notation.',
      answer: '∑ (from k = 1 to 5) of 5k',
      checkMode: 'self',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Evaluate ∑ (from i = 2 to 5) of (i² + 1). Show all substitutions.',
      answer: 'i=2: 5. i=3: 10. i=4: 17. i=5: 26. Sum = 5+10+17+26 = 58.',
      checkMode: 'self',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the sum of the first 15 terms of the arithmetic sequence 6, 10, 14, 18, …',
      answer: '510',
      checkMode: 'auto',
      correctAnswer: '510',
      explanation: 'a=6, d=4, n=15. S₁₅ = 15/2[2(6) + 14(4)] = 15/2[12+56] = 15/2 × 68 = 15 × 34 = 510.',
    },

    // ── Q8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the sum of an arithmetic series with a = 8, n = 10, and last term 53.',
      answer: '305',
      checkMode: 'auto',
      correctAnswer: '305',
      explanation: 'Using Sₙ = n/2(a + l): S₁₀ = 10/2(8 + 53) = 5 × 61 = 305.',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find n if the sum of an arithmetic series is 99, with a = 3 and d = 2.',
      answer: '99 = n/2[6 + 2(n−1)]. 198 = n(2n + 4). 2n² + 4n − 198 = 0. n² + 2n − 99 = 0. (n + 11)(n − 9) = 0. n = 9.',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the sum of the first 5 terms of the geometric sequence 3, 6, 12, 24, …',
      answer: '93',
      checkMode: 'auto',
      correctAnswer: '93',
      explanation: 'a=3, r=2, n=5. S₅ = 3(2⁵−1)/(2−1) = 3(32−1) = 3 × 31 = 93.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the sum to infinity of the geometric series with a = 12 and r = 0.25.',
      answer: '16',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'Check convergence: −1 < 0.25 < 1 ✓. S∞ = a/(1−r) = 12/(1−0.25) = 12/0.75 = 16.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says the geometric series with a = 5 and r = −0.5 has a sum to infinity. Is she correct? Explain.',
      answer: 'Yes — since −1 < −0.5 < 1, the series converges. S∞ = 5/(1−(−0.5)) = 5/1.5 ≈ 3.33.',
      checkMode: 'self',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the sum of the first 8 terms of the geometric sequence with a = 5 and r = 2.',
      answer: '1275',
      checkMode: 'auto',
      correctAnswer: '1275',
      explanation: 'S₈ = 5(2⁸−1)/(2−1) = 5(256−1) = 5 × 255 = 1275.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says a sequence with r = 1 cannot use the geometric sum formula Sₙ = a(rⁿ−1)/(r−1). Is he correct? Explain.',
      answer: 'Yes — when r = 1, the formula involves division by zero (r−1 = 0), which is undefined; instead, the sum is simply Sₙ = na, since every term equals a.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'An arithmetic sequence has T₅ = 23 and T₁₀ = 53. Find a and d.',
      answer: 'T₅ = a + 4d = 23. T₁₀ = a + 9d = 53. Subtracting: 5d = 30, d = 6. Then a = 23 − 24 = −1.',
      checkMode: 'self',
    },

    // ── Q16 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A geometric sequence has T₃ = 18 and T₆ = 486. Find a and r.',
      answer: 'T₃ = ar² = 18. T₆ = ar⁵ = 486. Dividing: r³ = 486/18 = 27. r = 3. Then a = 18/9 = 2.',
      checkMode: 'self',
    },

    // ── Q17 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the sum of the first 25 terms of an arithmetic series with first term −4 and common difference 3.',
      answer: '800',
      checkMode: 'auto',
      correctAnswer: '800',
      explanation: 'a=−4, d=3, n=25. S₂₅ = 25/2[2(−4) + 24(3)] = 25/2[−8+72] = 25/2 × 64 = 25 × 32 = 800.',
    },

    // ── Q18 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle invests money such that her savings form a geometric sequence. After 1 month she has R1 000, after 2 months R1 100, after 3 months R1 210. Find the common ratio and predict her savings after 6 months.',
      answer: 'r = 1100/1000 = 1.1. T₆ = 1000 × 1.1⁵ ≈ R1 610.51.',
      checkMode: 'self',
    },

    // ── Q19 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Find the sum to infinity of the geometric series 16 + 8 + 4 + 2 + …, and explain why this series converges.',
      answer: 'a=16, r=0.5. Since −1 < 0.5 < 1, it converges. S∞ = 16/(1−0.5) = 32.',
      checkMode: 'self',
    },

    // ── Q20 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says ∑ (from k = 1 to n) of k equals n(n+1)/2 for any positive integer n. Verify this for n = 5 by both summing directly and using the formula.',
      answer: 'Direct sum: 1+2+3+4+5 = 15. Formula: 5(6)/2 = 30/2 = 15. Both methods agree, confirming the formula.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered patterns, sequences and series.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered patterns, sequences and series.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
