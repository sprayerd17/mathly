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
        'Short video explaining arithmetic sequences, the general term formula Tₙ = a + (n−1)d, and how to find any term using worked examples',
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
        'Short video explaining geometric sequences, the general term formula Tₙ = a · rⁿ⁻¹, and how to find any term using worked examples',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FINDING a AND d (OR a AND r) FROM TWO GIVEN TERMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'finding-a-and-d-from-two-terms',
      title: 'Finding a and d (or a and r) from Two Given Terms',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">So far we have been given ${bl('a')} and ${or('d')} (or ${bl('a')} and ${or('r')}) and asked to find a term. Many exam questions work in <strong>reverse</strong>: you are given two specific terms of a sequence, e.g. T<sub>m</sub> and T<sub>n</sub>, and must find ${bl('a')} and ${or('d')} (or ${bl('a')} and ${or('r')}) yourself. We do this by writing each given term using the general term formula, which produces <strong>two equations in two unknowns</strong>, then solving them <strong>simultaneously</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given term values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('simultaneous equations')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('a and d (or a and r)')}</span>` +
        `</div>` +

        // ── Arithmetic: subtract to eliminate a ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Arithmetic sequences — subtract to eliminate a</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0 0 6px 0;">${or('T<sub>m</sub>')} = ${bl('a')} + (m − 1)${gr('d')} &nbsp;and&nbsp; ${or('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${gr('d')}</p>` +
        `<p style="font-size:0.95em;color:#6b7280;margin:0;">Subtracting the equations cancels ${bl('a')}, leaving an equation in ${gr('d')} alone.</p>` +
        `</div>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each ${bl('given term')} using T<sub>n</sub> = a + (n − 1)d. This gives two equations in a and d.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Subtract')} the equation with the smaller term number from the one with the larger term number. The ${bl('a')} terms cancel, leaving (n − m)${gr('d')} = T<sub>n</sub> − T<sub>m</sub>. Solve this for ${gr('d')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Substitute')} d back into either original equation and solve for a.</p>` +
        `</div>` +

        `</div>` +

        // ── Geometric: divide to eliminate a ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Geometric sequences — divide to eliminate a</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0 0 6px 0;">${or('T<sub>m</sub>')} = ${bl('a')} · ${gr('r')}<sup>m−1</sup> &nbsp;and&nbsp; ${or('T<sub>n</sub>')} = ${bl('a')} · ${gr('r')}<sup>n−1</sup></p>` +
        `<p style="font-size:0.95em;color:#6b7280;margin:0;">Dividing the equations cancels ${bl('a')}, leaving a power of ${gr('r')} alone.</p>` +
        `</div>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each ${bl('given term')} using T<sub>n</sub> = a · r<sup>n−1</sup>. This gives two equations in a and r.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Divide')} the equation with the larger term number by the one with the smaller term number. The ${bl('a')} terms cancel, leaving ${gr('r')}<sup>n−m</sup> = T<sub>n</sub> ÷ T<sub>m</sub>. Take the appropriate root to solve for ${gr('r')} — remember an <strong>even</strong> root can give a ± answer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Substitute')} r back into either original equation and solve for a.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch for a ± answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">If eliminating ${bl('a')} in a geometric sequence leaves an <strong>even</strong> power of ${gr('r')} (e.g. r² or r⁴), there are two possible values of ${gr('r')} — one positive and one negative. Unless the context rules one out (e.g. all terms must be positive), you may need to give both solutions, each with its own value of ${bl('a')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'An arithmetic sequence has T₅ = 16 and T₁₀ = 41. Find a and d.',
          answer: `${bl('a')} = ${gr('−4')}, ${or('d')} = ${gr('5')}`,
          steps: [
            `Write each ${bl('term')} using T<sub>n</sub> = a + (n − 1)d: ${or('T<sub>5</sub>')} = a + 4d = 16 and ${or('T<sub>10</sub>')} = a + 9d = 41.`,
            `${or('Subtract')} the first equation from the second: (a + 9d) − (a + 4d) = 41 − 16 → 5d = 25.`,
            `Solve for d: ${gr('d')} = 25 ÷ 5 = ${gr('5')}.`,
            `${gr('Substitute')} d = 5 into a + 4d = 16: a + 4(5) = 16 → a + 20 = 16 → ${bl('a')} = ${gr('−4')}.`,
          ],
        },
        {
          question: 'A geometric sequence has T₂ = 6 and T₅ = 162. Find a and r.',
          answer: `${bl('a')} = ${gr('2')}, ${or('r')} = ${gr('3')}`,
          steps: [
            `Write each ${bl('term')} using T<sub>n</sub> = a · r<sup>n−1</sup>: ${or('T<sub>2</sub>')} = ar = 6 and ${or('T<sub>5</sub>')} = ar⁴ = 162.`,
            `${or('Divide')} T<sub>5</sub> by T<sub>2</sub>: ar⁴ ÷ ar = 162 ÷ 6 → r³ = 27.`,
            `Solve for r: ${gr('r')} = ∛27 = ${gr('3')}.`,
            `${gr('Substitute')} r = 3 into ar = 6: a(3) = 6 → ${bl('a')} = ${gr('2')}.`,
          ],
        },
        {
          question: 'A geometric sequence has T₂ = 20 and T₄ = 5, and all terms are known to be positive. Find a and r.',
          answer: `${bl('a')} = ${gr('40')}, ${or('r')} = ${gr('0.5')}`,
          steps: [
            `Write each ${bl('term')} using T<sub>n</sub> = a · r<sup>n−1</sup>: ${or('T<sub>2</sub>')} = ar = 20 and ${or('T<sub>4</sub>')} = ar³ = 5.`,
            `${or('Divide')} T<sub>4</sub> by T<sub>2</sub>: ar³ ÷ ar = 5 ÷ 20 → r² = 0.25.`,
            `Solve for r: r = ±√0.25 = ±0.5. This is an <strong>even</strong> root, so both signs are mathematically possible.`,
            `Since every term must be positive, reject r = −0.5 (it would alternate the sign of the terms). So ${gr('r')} = ${gr('0.5')}.`,
            `${gr('Substitute')} r = 0.5 into ar = 20: a(0.5) = 20 → ${bl('a')} = ${gr('40')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Short video explaining how to find a and d (or a and r) when given two terms of a sequence, by forming and solving simultaneous equations using subtraction (arithmetic) or division (geometric)',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SIGMA NOTATION
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
        'Short video explaining sigma notation, how to read and evaluate a sigma expression, and how to convert a written sum into sigma notation',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SUM OF AN ARITHMETIC SERIES
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
          question: 'Find n if the sum of an arithmetic series is 143, with a = 3 and d = 2.',
          answer: `n = ${gr('11')}`,
          steps: [
            `Identify the known values: ${bl('S<sub>n</sub>')} = ${bl('143')}, ${bl('a')} = ${bl('3')}, ${bl('d')} = ${bl('2')}.`,
            `Write the formula: ${or('S<sub>n</sub> = n/2[2a + (n − 1)d]')}.`,
            `Substitute: ${bl('143')} = ${or('n/2')}[6 + 2(n − 1)] → 286 = n(2n + 4) = 2n² + 4n.`,
            `Rearrange: 2n² + 4n − 286 = 0 → n² + 2n − 143 = 0.`,
            `Factorise: (n + 13)(n − 11) = 0 → n = ${gr('11')} (rejecting the negative solution n = −13).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Short video explaining the sum of an arithmetic series using Sₙ = n/2[2a + (n−1)d] and Sₙ = n/2(a + l), with worked examples including finding n from the sum',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — SUM OF A GEOMETRIC SERIES
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
        'Short video explaining the sum of a geometric series using Sₙ = a(rⁿ−1)/(r−1) and the sum to infinity S∞ = a/(1−r), including the convergence condition and divergent series',
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

    // ── Q21 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'An arithmetic sequence has first term a = 3. The 1st, 2nd and 4th terms of this sequence (T₁, T₂, T₄) form the first three terms of a geometric sequence. Determine the value(s) of the common difference d, and identify which value gives a genuine (non-trivial) geometric sequence.',
      answer: 'T₁ = a = 3, T₂ = a + d = 3 + d, T₄ = a + 3d = 3 + 3d. For these to form a geometric sequence, T₂² = T₁ × T₄: (3 + d)² = 3(3 + 3d) → 9 + 6d + d² = 9 + 9d → d² − 3d = 0 → d(d − 3) = 0 → d = 0 or d = 3. d = 0 gives the trivial constant sequence 3, 3, 3 (not a meaningful geometric sequence), so d = 3 is the answer that works: T₁ = 3, T₂ = 6, T₄ = 12, with common ratio r = 2.',
      checkMode: 'self',
    },

    // ── Q22 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A geometric series has a sum to infinity of 12, and its second term T₂ = 3. Determine the common ratio r and the first term a.',
      answer: 'S∞ = a/(1 − r) = 12, so a = 12(1 − r). Also T₂ = ar = 3, so 12(1 − r)r = 3 → 12r − 12r² = 3 → 12r² − 12r + 3 = 0 → 4r² − 4r + 1 = 0 → (2r − 1)² = 0 → r = 0.5. Then a = 12(1 − 0.5) = 6. Check: T₂ = 6 × 0.5 = 3 ✓, and −1 < 0.5 < 1 so S∞ exists.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (1-3):   Arithmetic sequence — find the nth term
    // Block 2 (4-6):   Geometric sequence — find the nth term
    // Block 3 (7-10):  Sigma notation — evaluate a sum
    // Block 4 (11-13): Sum of an arithmetic series
    // Block 5 (14-16): Sum of a geometric series / sum to infinity
    // Block 6 (17-20): Hard — combined, reverse and real-life application problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Arithmetic sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 14th term of the arithmetic sequence 5, 9, 13, 17, …', checkMode: 'auto', correctAnswer: '57', answer: '57', explanation: 'a=5, d=4. T₁₄ = a + (n−1)d = 5 + (14−1)(4) = 5 + 52 = 57.' },
        { difficulty: 'Easy', question: 'Find the 10th term of the arithmetic sequence −6, −2, 2, 6, …', checkMode: 'auto', correctAnswer: '30', answer: '30', explanation: 'a=−6, d=4. T₁₀ = a + (n−1)d = −6 + (10−1)(4) = −6 + 36 = 30.' },
        { difficulty: 'Easy', question: 'Find the 20th term of the arithmetic sequence 12, 8, 4, 0, …', checkMode: 'auto', correctAnswer: '-64', correctAnswers: ['-64', '−64'], answer: '−64', explanation: 'a=12, d=−4. T₂₀ = a + (n−1)d = 12 + (20−1)(−4) = 12 − 76 = −64.' },

        // Block 2 — Geometric sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 6th term of the geometric sequence 2, 6, 18, 54, …', checkMode: 'auto', correctAnswer: '486', answer: '486', explanation: 'a=2, r=3. T₆ = a·rⁿ⁻¹ = 2 × 3⁵ = 2 × 243 = 486.' },
        { difficulty: 'Easy', question: 'Find the 7th term of the geometric sequence 3, 6, 12, 24, …', checkMode: 'auto', correctAnswer: '192', answer: '192', explanation: 'a=3, r=2. T₇ = a·rⁿ⁻¹ = 3 × 2⁶ = 3 × 64 = 192.' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term of the geometric sequence 1, 5, 25, 125, …', checkMode: 'auto', correctAnswer: '625', answer: '625', explanation: 'a=1, r=5. T₅ = a·rⁿ⁻¹ = 1 × 5⁴ = 625.' },

        // Block 3 — Sigma notation: evaluate (Medium)
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 1 to 5) of (4k − 1).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=1:3, k=2:7, k=3:11, k=4:15, k=5:19. Sum = 3+7+11+15+19 = 55.' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from i = 2 to 5) of i².', checkMode: 'auto', correctAnswer: '54', answer: '54', explanation: 'i=2:4, i=3:9, i=4:16, i=5:25. Sum = 4+9+16+25 = 54.' },
        { difficulty: 'Medium', question: 'Write the sum 3 + 6 + 9 + 12 + 15 using sigma notation.', answer: '∑ (from k = 1 to 5) of 3k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 3 to 7) of (2k + 1).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=3:7, k=4:9, k=5:11, k=6:13, k=7:15. Sum = 7+9+11+13+15 = 55.' },

        // Block 4 — Sum of an arithmetic series (Medium)
        { difficulty: 'Medium', question: 'Find the sum of the first 16 terms of the arithmetic sequence 4, 7, 10, 13, …', checkMode: 'auto', correctAnswer: '424', answer: '424', explanation: 'a=4, d=3, n=16. S₁₆ = 16/2[2(4) + 15(3)] = 8[8+45] = 8 × 53 = 424.' },
        { difficulty: 'Medium', question: 'Find the sum of an arithmetic series with a = 10, n = 13, and last term 100.', checkMode: 'auto', correctAnswer: '715', answer: '715', explanation: 'Using Sₙ = n/2(a + l): S₁₃ = 13/2(10 + 100) = 6.5 × 110 = 715.' },
        { difficulty: 'Medium', question: 'Find the sum of the first 12 terms of the arithmetic sequence 9, 5, 1, −3, …', checkMode: 'auto', correctAnswer: '-154', correctAnswers: ['-154', '−154'], answer: '−154', explanation: 'a=9, d=−4, n=12. S₁₂ = 12/2[2(9) + 11(−4)] = 6[18−44] = 6 × (−26) = −154.' },

        // Block 5 — Sum of a geometric series / sum to infinity (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the sum of the first 7 terms of the geometric sequence 3, 6, 12, 24, …', checkMode: 'auto', correctAnswer: '381', answer: '381', explanation: 'a=3, r=2, n=7. S₇ = 3(2⁷−1)/(2−1) = 3(128−1) = 3 × 127 = 381.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum to infinity of the geometric series with a = 18 and r = 1/3.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Check convergence: −1 < 1/3 < 1 ✓. S∞ = a/(1−r) = 18/(1−1/3) = 18/(2/3) = 27.' },
        { difficulty: 'Hard', question: 'Determine whether the geometric series with a = 5 and r = 1.5 has a sum to infinity. Explain.', answer: 'No — since r = 1.5 does not satisfy −1 < r < 1 (|r| ≥ 1), the series diverges and no sum to infinity exists.', checkMode: 'self' },

        // Block 6 — Hard: combined, reverse and real-life application problems
        { difficulty: 'Hard', question: 'An arithmetic sequence has T₄ = 17 and T₉ = 42. Find a and d.', answer: 'T₄ = a+3d = 17. T₉ = a+8d = 42. Subtracting: 5d = 25, so d = 5. Then a = 17 − 15 = 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find n if the sum of an arithmetic series is 143, with a = 3 and d = 2.', checkMode: 'auto', correctAnswer: '11', answer: '11', explanation: '143 = n/2[6 + 2(n−1)] → 286 = n(2n+4) = 2n²+4n. Rearranged: n²+2n−143=0. Factorise: (n+13)(n−11)=0, so n=11 (rejecting the negative solution n=−13).' },
        { difficulty: 'Hard', question: 'A colony of bacteria starts with 500 cells and doubles every hour. Use a geometric sequence to find the number of cells after 5 hours (i.e. the 6th term).', checkMode: 'auto', correctAnswer: '16000', answer: '16 000', explanation: 'a=500 (T₁, at hour 0), r=2, n=6 (after 5 doublings). T₆ = 500 × 2⁵ = 500 × 32 = 16 000 cells.' },
        { difficulty: 'Hard', question: 'Verify that ∑ (from k = 1 to n) of k = n(n+1)/2 for n = 6, by both summing directly and using the formula.', answer: 'Direct sum: 1+2+3+4+5+6 = 21. Formula: 6(7)/2 = 42/2 = 21. Both methods agree, confirming the formula.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered patterns, sequences and series.' },
        { minScore: 15, message: 'Great work! Review any missed questions on series sums or sigma notation and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the nth term and sum formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Arithmetic sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 15th term of the arithmetic sequence 6, 11, 16, 21, …', checkMode: 'auto', correctAnswer: '76', answer: '76', explanation: 'a=6, d=5. T₁₅ = a + (n−1)d = 6 + (15−1)(5) = 6 + 70 = 76.' },
        { difficulty: 'Easy', question: 'Find the 11th term of the arithmetic sequence −4, 0, 4, 8, …', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: 'a=−4, d=4. T₁₁ = a + (n−1)d = −4 + (11−1)(4) = −4 + 40 = 36.' },
        { difficulty: 'Easy', question: 'Find the 18th term of the arithmetic sequence 15, 11, 7, 3, …', checkMode: 'auto', correctAnswer: '-53', correctAnswers: ['-53', '−53'], answer: '−53', explanation: 'a=15, d=−4. T₁₈ = a + (n−1)d = 15 + (18−1)(−4) = 15 − 68 = −53.' },

        // Block 2 — Geometric sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 6th term of the geometric sequence 6, 12, 24, 48, …', checkMode: 'auto', correctAnswer: '192', answer: '192', explanation: 'a=6, r=2. T₆ = a·rⁿ⁻¹ = 6 × 2⁵ = 6 × 32 = 192.' },
        { difficulty: 'Easy', question: 'Find the 6th term of the geometric sequence 4, 8, 16, 32, …', checkMode: 'auto', correctAnswer: '128', answer: '128', explanation: 'a=4, r=2. T₆ = a·rⁿ⁻¹ = 4 × 2⁵ = 4 × 32 = 128.' },
        { difficulty: 'Easy-Medium', question: 'Find the 5th term of the geometric sequence 2, 10, 50, 250, …', checkMode: 'auto', correctAnswer: '1250', answer: '1250', explanation: 'a=2, r=5. T₅ = a·rⁿ⁻¹ = 2 × 5⁴ = 2 × 625 = 1250.' },

        // Block 3 — Sigma notation: evaluate (Medium)
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 1 to 5) of (3k + 2).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=1:5, k=2:8, k=3:11, k=4:14, k=5:17. Sum = 5+8+11+14+17 = 55.' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from i = 2 to 5) of (i² + 1).', checkMode: 'auto', correctAnswer: '58', answer: '58', explanation: 'i=2:5, i=3:10, i=4:17, i=5:26. Sum = 5+10+17+26 = 58.' },
        { difficulty: 'Medium', question: 'Write the sum 4 + 8 + 12 + 16 + 20 using sigma notation.', answer: '∑ (from k = 1 to 5) of 4k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 2 to 6) of (2k − 1).', checkMode: 'auto', correctAnswer: '45', answer: '45', explanation: 'k=2:3, k=3:5, k=4:7, k=5:9, k=6:11. Sum = 3+5+7+9+11 = 45.' },

        // Block 4 — Sum of an arithmetic series (Medium)
        { difficulty: 'Medium', question: 'Find the sum of the first 14 terms of the arithmetic sequence 5, 9, 13, 17, …', checkMode: 'auto', correctAnswer: '434', answer: '434', explanation: 'a=5, d=4, n=14. S₁₄ = 14/2[2(5) + 13(4)] = 7[10+52] = 7 × 62 = 434.' },
        { difficulty: 'Medium', question: 'Find the sum of an arithmetic series with a = 8, n = 15, and last term 92.', checkMode: 'auto', correctAnswer: '750', answer: '750', explanation: 'Using Sₙ = n/2(a + l): S₁₅ = 15/2(8 + 92) = 7.5 × 100 = 750.' },
        { difficulty: 'Medium', question: 'Find the sum of the first 10 terms of the arithmetic sequence 7, 3, −1, −5, …', checkMode: 'auto', correctAnswer: '-110', correctAnswers: ['-110', '−110'], answer: '−110', explanation: 'a=7, d=−4, n=10. S₁₀ = 10/2[2(7) + 9(−4)] = 5[14−36] = 5 × (−22) = −110.' },

        // Block 5 — Sum of a geometric series / sum to infinity (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the sum of the first 6 terms of the geometric sequence 4, 8, 16, 32, …', checkMode: 'auto', correctAnswer: '252', answer: '252', explanation: 'a=4, r=2, n=6. S₆ = 4(2⁶−1)/(2−1) = 4(64−1) = 4 × 63 = 252.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum to infinity of the geometric series with a = 24 and r = 1/3.', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: 'Check convergence: −1 < 1/3 < 1 ✓. S∞ = a/(1−r) = 24/(1−1/3) = 24/(2/3) = 36.' },
        { difficulty: 'Hard', question: 'Determine whether the geometric series with a = 6 and r = −2 has a sum to infinity. Explain.', answer: 'No — since r = −2 does not satisfy −1 < r < 1 (|r| ≥ 1), the series diverges and no sum to infinity exists.', checkMode: 'self' },

        // Block 6 — Hard: combined, reverse and real-life application problems
        { difficulty: 'Hard', question: 'An arithmetic sequence has T₄ = 19 and T₉ = 44. Find a and d.', answer: 'T₄ = a+3d = 19. T₉ = a+8d = 44. Subtracting: 5d = 25, so d = 5. Then a = 19 − 15 = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find n if the sum of an arithmetic series is 222, with a = 2 and d = 3.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: '222 = n/2[4 + 3(n−1)] → 444 = n(3n+1) = 3n²+n. Rearranged: 3n²+n−444=0. Factorise: (3n+37)(n−12)=0, so n=12 (rejecting the negative solution n=−37/3).' },
        { difficulty: 'Hard', question: 'A colony of bacteria starts with 300 cells and doubles every hour. Use a geometric sequence to find the number of cells after 5 hours (i.e. the 6th term).', checkMode: 'auto', correctAnswer: '9600', answer: '9 600', explanation: 'a=300 (T₁, at hour 0), r=2, n=6 (after 5 doublings). T₆ = 300 × 2⁵ = 300 × 32 = 9 600 cells.' },
        { difficulty: 'Hard', question: 'Verify that ∑ (from k = 1 to n) of k = n(n+1)/2 for n = 7, by both summing directly and using the formula.', answer: 'Direct sum: 1+2+3+4+5+6+7 = 28. Formula: 7(8)/2 = 56/2 = 28. Both methods agree, confirming the formula.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered patterns, sequences and series.' },
        { minScore: 15, message: 'Great work! Review any missed questions on series sums or sigma notation and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the nth term and sum formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Arithmetic sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 13th term of the arithmetic sequence 8, 15, 22, 29, …', checkMode: 'auto', correctAnswer: '92', answer: '92', explanation: 'a=8, d=7. T₁₃ = a + (n−1)d = 8 + (13−1)(7) = 8 + 84 = 92.' },
        { difficulty: 'Easy', question: 'Find the 12th term of the arithmetic sequence −5, −1, 3, 7, …', checkMode: 'auto', correctAnswer: '39', answer: '39', explanation: 'a=−5, d=4. T₁₂ = a + (n−1)d = −5 + (12−1)(4) = −5 + 44 = 39.' },
        { difficulty: 'Easy', question: 'Find the 16th term of the arithmetic sequence 20, 15, 10, 5, …', checkMode: 'auto', correctAnswer: '-55', correctAnswers: ['-55', '−55'], answer: '−55', explanation: 'a=20, d=−5. T₁₆ = a + (n−1)d = 20 + (16−1)(−5) = 20 − 75 = −55.' },

        // Block 2 — Geometric sequence: find Tₙ (Easy)
        { difficulty: 'Easy', question: 'Find the 4th term of the geometric sequence 4, 12, 36, 108, …', checkMode: 'auto', correctAnswer: '108', answer: '108', explanation: 'a=4, r=3. T₄ = a·rⁿ⁻¹ = 4 × 3³ = 4 × 27 = 108.' },
        { difficulty: 'Easy', question: 'Find the 6th term of the geometric sequence 5, 10, 20, 40, …', checkMode: 'auto', correctAnswer: '160', answer: '160', explanation: 'a=5, r=2. T₆ = a·rⁿ⁻¹ = 5 × 2⁵ = 5 × 32 = 160.' },
        { difficulty: 'Easy-Medium', question: 'Find the 4th term of the geometric sequence 5, 15, 45, 135, …', checkMode: 'auto', correctAnswer: '135', answer: '135', explanation: 'a=5, r=3. T₄ = a·rⁿ⁻¹ = 5 × 3³ = 5 × 27 = 135.' },

        // Block 3 — Sigma notation: evaluate (Medium)
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 1 to 5) of (5k − 2).', checkMode: 'auto', correctAnswer: '65', answer: '65', explanation: 'k=1:3, k=2:8, k=3:13, k=4:18, k=5:23. Sum = 3+8+13+18+23 = 65.' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from i = 1 to 4) of (i² + 2).', checkMode: 'auto', correctAnswer: '38', answer: '38', explanation: 'i=1:3, i=2:6, i=3:11, i=4:18. Sum = 3+6+11+18 = 38.' },
        { difficulty: 'Medium', question: 'Write the sum 6 + 12 + 18 + 24 + 30 using sigma notation.', answer: '∑ (from k = 1 to 5) of 6k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evaluate ∑ (from k = 3 to 6) of (3k + 1).', checkMode: 'auto', correctAnswer: '58', answer: '58', explanation: 'k=3:10, k=4:13, k=5:16, k=6:19. Sum = 10+13+16+19 = 58.' },

        // Block 4 — Sum of an arithmetic series (Medium)
        { difficulty: 'Medium', question: 'Find the sum of the first 12 terms of the arithmetic sequence 6, 11, 16, 21, …', checkMode: 'auto', correctAnswer: '402', answer: '402', explanation: 'a=6, d=5, n=12. S₁₂ = 12/2[2(6) + 11(5)] = 6[12+55] = 6 × 67 = 402.' },
        { difficulty: 'Medium', question: 'Find the sum of an arithmetic series with a = 6, n = 15, and last term 90.', checkMode: 'auto', correctAnswer: '720', answer: '720', explanation: 'Using Sₙ = n/2(a + l): S₁₅ = 15/2(6 + 90) = 7.5 × 96 = 720.' },
        { difficulty: 'Medium', question: 'Find the sum of the first 9 terms of the arithmetic sequence 10, 6, 2, −2, …', checkMode: 'auto', correctAnswer: '-54', correctAnswers: ['-54', '−54'], answer: '−54', explanation: 'a=10, d=−4, n=9. S₉ = 9/2[2(10) + 8(−4)] = 4.5[20−32] = 4.5 × (−12) = −54.' },

        // Block 5 — Sum of a geometric series / sum to infinity (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Find the sum of the first 5 terms of the geometric sequence 4, 12, 36, 108, …', checkMode: 'auto', correctAnswer: '484', answer: '484', explanation: 'a=4, r=3, n=5. S₅ = 4(3⁵−1)/(3−1) = 4(243−1)/2 = 4 × 242/2 = 484.' },
        { difficulty: 'Medium-Hard', question: 'Find the sum to infinity of the geometric series with a = 12 and r = 1/4.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Check convergence: −1 < 1/4 < 1 ✓. S∞ = a/(1−r) = 12/(1−1/4) = 12/(3/4) = 16.' },
        { difficulty: 'Hard', question: 'Determine whether the geometric series with a = 7 and r = 1.2 has a sum to infinity. Explain.', answer: 'No — since r = 1.2 does not satisfy −1 < r < 1 (|r| ≥ 1), the series diverges and no sum to infinity exists.', checkMode: 'self' },

        // Block 6 — Hard: combined, reverse and real-life application problems
        { difficulty: 'Hard', question: 'An arithmetic sequence has T₅ = 23 and T₉ = 43. Find a and d.', answer: 'T₅ = a+4d = 23. T₉ = a+8d = 43. Subtracting: 4d = 20, so d = 5. Then a = 23 − 20 = 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Find n if the sum of an arithmetic series is 130, with a = 4 and d = 2.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: '130 = n/2[8 + 2(n−1)] → 260 = n(2n+6) = 2n²+6n. Rearranged: n²+3n−130=0. Factorise: (n+13)(n−10)=0, so n=10 (rejecting the negative solution n=−13).' },
        { difficulty: 'Hard', question: 'A colony of bacteria starts with 400 cells and doubles every hour. Use a geometric sequence to find the number of cells after 4 hours (i.e. the 5th term).', checkMode: 'auto', correctAnswer: '6400', answer: '6 400', explanation: 'a=400 (T₁, at hour 0), r=2, n=5 (after 4 doublings). T₅ = 400 × 2⁴ = 400 × 16 = 6 400 cells.' },
        { difficulty: 'Hard', question: 'Verify that ∑ (from k = 1 to n) of k = n(n+1)/2 for n = 8, by both summing directly and using the formula.', answer: 'Direct sum: 1+2+3+4+5+6+7+8 = 36. Formula: 8(9)/2 = 72/2 = 36. Both methods agree, confirming the formula.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered patterns, sequences and series.' },
        { minScore: 15, message: 'Great work! Review any missed questions on series sums or sigma notation and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on the nth term and sum formulas, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
