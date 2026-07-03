import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (prime factorisation roles) ───────────────────────────────
// prime numbers         → green   (#16a34a)
// composite (splitting) → blue    (#2563eb)
// exponents             → orange  (#ea580c)
// final factorisation   → red     (#dc2626)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Properties of Numbers',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FACTOR TREES AND PRIME FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factor-trees-prime-factorisation',
      title: 'Factor Trees and Prime Factorisation',
      icon: '🌳',
      explanation:
        `<p style="margin-bottom:16px;">Every <strong>composite number</strong> can be broken down into <strong>prime factors</strong>. A <strong>factor tree</strong> is a diagram we use to find prime factors step by step. Start with the number and split it into any two factors. Keep splitting each factor until all branches end in prime numbers. The prime numbers at the ends of all branches are the prime factors. We write the final answer using multiplication — this is called <strong>prime factorisation</strong>. We can also write repeated prime factors using <strong>exponents</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('prime numbers')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('composite numbers being split')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponents')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final factorisation')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Prime number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Composite number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with more than two factors — it can be split into smaller factors. Examples: 4, 6, 9, 12.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A shorthand for repeated multiplication. 2³ means 2 × 2 × 2. The small raised number is the exponent.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Prime factorisation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Writing a number as a product of its prime factors. Every composite number has exactly one prime factorisation.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps for building a factor tree ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for drawing a factor tree</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('composite number')} at the top of the tree.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Split it into any two factors (not 1 and itself). Draw two branches and write a factor at the end of each branch.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">If a branch ends in a ${bl('composite number')}, keep splitting it. If a branch ends in a ${gr('prime number')}, circle it — that branch is done.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Collect all the ${gr('circled prime numbers')} from every branch. These are the prime factors.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${re('prime factorisation')}: list the prime factors from smallest to largest using × signs. Write repeated factors using ${or('exponents')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Any starting split gives the same answer</p>` +
        `<p style="margin:0;color:#14532d;">It does not matter which two factors you choose first — you will always end up with the same ${re('prime factorisation')}. For example, splitting ${bl('36')} as 4 × 9 or as 6 × 6 will both give ${re('36 = 2² × 3²')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 36 ───────────────────────────────────────────────────
        {
          question: 'Use a factor tree to find the prime factors of 36.',
          answer: `${re('36 = 2 × 2 × 3 × 3 = 2')}${or('²')} ${re('× 3')}${or('²')}`,
          steps: [
            `Split ${bl('36')} into ${bl('4')} × ${bl('9')}.`,
            `Split ${bl('4')} into ${gr('2')} × ${gr('2')} — both prime.`,
            `Split ${bl('9')} into ${gr('3')} × ${gr('3')} — both prime.`,
            `Prime factors are ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('3')}.`,
            `${re('Prime factorisation:')} ${re('36')} = ${re('2 × 2 × 3 × 3')} = ${re('2')}${or('²')} × ${re('3')}${or('²')} ✓`,
          ],
        },

        // ── Example 2: 120 ──────────────────────────────────────────────────
        {
          question: 'Use a factor tree to find the prime factors of 120.',
          answer: `${re('120 = 2')}${or('³')} ${re('× 3 × 5')}`,
          steps: [
            `Split ${bl('120')} into ${bl('12')} × ${bl('10')}.`,
            `Split ${bl('12')} into ${bl('4')} × ${gr('3')} — split ${bl('4')} into ${gr('2')} × ${gr('2')}.`,
            `Split ${bl('10')} into ${gr('2')} × ${gr('5')} — both prime.`,
            `Prime factors: ${gr('2')}, ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('5')}.`,
            `${re('Prime factorisation:')} ${re('120')} = ${re('2 × 2 × 2 × 3 × 5')} = ${re('2')}${or('³')} × ${re('3')} × ${re('5')} ✓`,
          ],
        },

        // ── Example 3: 252 ──────────────────────────────────────────────────
        {
          question: 'Write 252 as a product of its prime factors using exponents.',
          answer: `${re('252 = 2')}${or('²')} ${re('× 3')}${or('²')} ${re('× 7')}`,
          steps: [
            `Split ${bl('252')} into ${gr('2')} × ${bl('126')} — 2 is prime. Continue with ${bl('126')}.`,
            `Split ${bl('126')} into ${gr('2')} × ${bl('63')} — 2 is prime. Continue with ${bl('63')}.`,
            `Split ${bl('63')} into ${gr('7')} × ${bl('9')} — 7 is prime. Continue with ${bl('9')}.`,
            `Split ${bl('9')} into ${gr('3')} × ${gr('3')} — both prime.`,
            `Prime factors: ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('3')}, ${gr('7')}.`,
            `${re('Prime factorisation:')} ${re('252')} = ${re('2 × 2 × 3 × 3 × 7')} = ${re('2')}${or('²')} × ${re('3')}${or('²')} × ${re('7')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — product of prime factors ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 24 as a product of its prime factors.',
          answer: '2 x 2 x 2 x 3',
          checkMode: 'auto',
          correctAnswer: '2 x 2 x 2 x 3',
          correctAnswers: ['2 x 2 x 2 x 3', '2 × 2 × 2 × 3', '2x2x2x3'],
          explanation: 'Factor tree: 24 → 2 × 12 → 2 × 2 × 6 → 2 × 2 × 2 × 3\nAll prime factors: 2, 2, 2, 3\nPrime factorisation: 24 = 2 × 2 × 2 × 3 ✓',
        },

        // ── Q2 Easy — prime factorisation with exponents ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Write 45 as a product of its prime factors using exponents.',
          answer: '3² x 5',
          checkMode: 'auto',
          correctAnswer: '3² x 5',
          correctAnswers: ['3² x 5', '3^2 x 5', '3² × 5', '3^2 × 5'],
          explanation: 'Factor tree: 45 → 9 × 5 → 3 × 3 × 5\nPrime factors: 3, 3, 5\n3 appears twice → 3²\nPrime factorisation: 45 = 3² × 5 ✓',
        },

        // ── Q3 Medium — factor tree for 84 ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Use a factor tree to find the prime factorisation of 84.',
          answer: '2² x 3 x 7',
          checkMode: 'auto',
          correctAnswer: '2² x 3 x 7',
          correctAnswers: ['2² x 3 x 7', '2^2 x 3 x 7', '2² × 3 × 7', '2^2 × 3 × 7'],
          explanation: 'Factor tree: 84 → 4 × 21 → 2 × 2 × 3 × 7\nPrime factors: 2, 2, 3, 7\n2 appears twice → 2²\nPrime factorisation: 84 = 2² × 3 × 7 ✓',
        },

        // ── Q4 Medium — prime factorisation of 180 ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Write 180 as a product of its prime factors using exponents.',
          answer: '2² x 3² x 5',
          checkMode: 'auto',
          correctAnswer: '2² x 3² x 5',
          correctAnswers: ['2² x 3² x 5', '2^2 x 3^2 x 5', '2² × 3² × 5', '2^2 × 3^2 × 5'],
          explanation: 'Factor tree: 180 → 4 × 45 → 2 × 2 × 9 × 5 → 2 × 2 × 3 × 3 × 5\nPrime factors: 2, 2, 3, 3, 5\n2 appears twice → 2², 3 appears twice → 3²\nPrime factorisation: 180 = 2² × 3² × 5 ✓',
        },

        // ── Q5 Hard — error spotting with explanation ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the prime factorisation of 60 is 2 × 3 × 5. Is he correct? Explain.',
          answer: 'No — 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. He missed one factor of 2.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor tree diagrams for 36, 120, and 252 with composite numbers in blue, prime numbers circled in green, exponents in orange, and the final prime factorisation in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a factor tree and write the prime factorisation of a composite number using exponents for repeated factors" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — HIGHEST COMMON FACTOR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'highest-common-factor',
      title: 'Highest Common Factor',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>Highest Common Factor (HCF)</strong> of two or more numbers is the largest number that divides exactly into all of them. We can find the HCF by <strong>listing all factors</strong> of each number and finding the largest one they share. We can also use <strong>prime factorisation</strong> to find the HCF — write each number as a product of prime factors, identify the prime factors they share and multiply those shared factors together. The HCF is useful when simplifying fractions and sharing things equally.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('factors')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('common factors')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('HCF')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('shared prime factors')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number that divides exactly into another number with no remainder. Example: the factors of 12 are 1, 2, 3, 4, 6, 12.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Common factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A factor that is shared by two or more numbers. Example: 4 is a common factor of 8 and 12.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Highest Common Factor (HCF)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest factor that two or more numbers share. Also written as GCF (Greatest Common Factor).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Shared prime factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A prime factor that appears in the prime factorisation of two or more numbers. Used to find the HCF by prime factorisation.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 1: Listing factors ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 1: Listing factors</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">List all ${bl('factors')} of each number in order from smallest to largest.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${gr('common factors')} — numbers that appear in both lists.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The largest of the ${gr('common factors')} is the ${or('HCF')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 2: Prime factorisation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 2: Prime factorisation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each number as a product of its prime ${bl('factors')} using a factor tree.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${re('shared prime factors')} — prime factors that appear in both factorisations.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For each ${re('shared prime factor')}, take the <strong>lowest power</strong> that appears in either factorisation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Multiply those lowest powers together — the result is the ${or('HCF')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">When to use each method</p>` +
        `<p style="margin:0;color:#7c2d12;">Use <strong>listing factors</strong> for smaller numbers — it is straightforward and easy to check. Use <strong>prime factorisation</strong> for larger numbers where listing all factors would take a long time. Both methods always give the same ${or('HCF')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: HCF of 48 and 60 by listing factors ──────────────────
        {
          question: 'Find the HCF of 48 and 60 by listing factors.',
          answer: `${or('HCF')} = ${or('12')}`,
          steps: [
            `List the ${bl('factors')} of ${bl('48')}: ${bl('1, 2, 3, 4, 6, 8, 12, 16, 24, 48')}.`,
            `List the ${bl('factors')} of ${bl('60')}: ${bl('1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60')}.`,
            `Identify the ${gr('common factors')} — numbers that appear in both lists: ${gr('1, 2, 3, 4, 6, 12')}.`,
            `The largest ${gr('common factor')} is the ${or('HCF')}: ${or('HCF = 12')} ✓`,
          ],
        },

        // ── Example 5: HCF of 72 and 90 using prime factorisation ───────────
        {
          question: 'Find the HCF of 72 and 90 using prime factorisation.',
          answer: `${or('HCF')} = ${or('18')}`,
          steps: [
            `Write ${bl('72')} as a product of prime ${bl('factors')}: ${bl('72')} = ${re('2³ × 3²')}.`,
            `Write ${bl('90')} as a product of prime ${bl('factors')}: ${bl('90')} = ${re('2 × 3² × 5')}.`,
            `Identify the ${re('shared prime factors')}: ${re('2')} appears in both — take the lowest power: ${re('2¹')}. ${re('3')} appears in both — take the lowest power: ${re('3²')}.`,
            `${or('HCF')} = ${re('2')} × ${re('3²')} = ${re('2')} × ${re('9')} = ${or('18')} ✓`,
          ],
        },

        // ── Example 6: Lerato bracelets word problem ─────────────────────────
        {
          question: 'Lerato has 48 red beads and 60 blue beads. She wants to make identical bracelets using all the beads with no beads left over. What is the maximum number of bracelets she can make?',
          answer: `Lerato can make ${or('12')} bracelets — each with ${bl('4')} red beads and ${bl('5')} blue beads`,
          steps: [
            `To make identical bracelets using all beads with none left over, find the ${or('HCF')} of ${bl('48')} and ${bl('60')}.`,
            `${bl('Factors')} of ${bl('48')}: ${bl('1, 2, 3, 4, 6, 8, 12, 16, 24, 48')}.`,
            `${bl('Factors')} of ${bl('60')}: ${bl('1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60')}.`,
            `${gr('Common factors')}: ${gr('1, 2, 3, 4, 6, 12')}. The ${or('HCF')} = ${or('12')}.`,
            `She can make ${or('12')} bracelets — each bracelet gets ${bl('48')} ÷ ${or('12')} = ${bl('4')} red beads and ${bl('60')} ÷ ${or('12')} = ${bl('5')} blue beads ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — HCF by listing factors ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the HCF of 12 and 18.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Factors of 12: 1, 2, 3, 4, 6, 12\nFactors of 18: 1, 2, 3, 6, 9, 18\nCommon factors: 1, 2, 3, 6\nLargest common factor: HCF = 6 ✓',
        },

        // ── Q7 Medium — HCF using prime factorisation ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the HCF of 48 and 72 using prime factorisation.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: '48 = 2⁴ × 3\n72 = 2³ × 3²\nShared prime factors: 2 (lowest power 2³) and 3 (lowest power 3¹)\nHCF = 2³ × 3 = 8 × 3 = 24 ✓',
        },

        // ── Q8 Hard — fruit bags word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has 60 apples and 84 oranges. She wants to make identical fruit bags using all the fruit with none left over. What is the maximum number of bags she can make and how many of each fruit will be in each bag?',
          answer: 'HCF of 60 and 84 = 12. She can make 12 bags each with 5 apples and 7 oranges.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor lists for 48 and 60 with factors in blue, common factors highlighted in green, and the HCF circled in orange; alongside a prime factorisation diagram for 72 and 90 with shared prime factors in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the Highest Common Factor by listing factors and by using prime factorisation, with colour coded factors, common factors, and HCF" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LOWEST COMMON MULTIPLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lowest-common-multiple',
      title: 'Lowest Common Multiple',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>Lowest Common Multiple (LCM)</strong> of two or more numbers is the smallest number that is a multiple of all of them. We can find the LCM by <strong>listing multiples</strong> of each number until we find the smallest one they share. We can also use <strong>prime factorisation</strong> — write each number as a product of prime factors, take all prime factors that appear in any of the numbers using the highest power, and multiply them together. The LCM is useful when adding fractions with different denominators and solving timing problems.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiples')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('shared multiples')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('highest prime powers')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Multiple</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number you get when you multiply a given number by 1, 2, 3, 4, and so on. Example: multiples of 6 are 6, 12, 18, 24, …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Common multiple</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A multiple that is shared by two or more numbers. Example: 24 is a common multiple of 6 and 8.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Lowest Common Multiple (LCM)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest multiple that two or more numbers share.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Highest prime power</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When using prime factorisation to find the LCM, take each prime factor with the highest exponent it appears with in any of the numbers.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 1: Listing multiples ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 1: Listing multiples</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">List the ${bl('multiples')} of each number in order until you find one they share.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identify the ${gr('shared multiples')} — numbers that appear in all lists.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The smallest of the ${gr('shared multiples')} is the ${or('LCM')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 2: Prime factorisation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method 2: Prime factorisation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each number as a product of its prime factors using a factor tree.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identify all prime factors that appear in any of the factorisations.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For each prime factor, take the ${re('highest power')} it appears with in any of the numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Multiply those ${re('highest powers')} together — the result is the ${or('LCM')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">When to use each method</p>` +
        `<p style="margin:0;color:#7c2d12;">Use <strong>listing multiples</strong> for smaller numbers — it is quick and easy to check. Use <strong>prime factorisation</strong> for larger numbers where listing multiples would take a long time. Both methods always give the same ${or('LCM')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: LCM of 8 and 12 by listing multiples ─────────────────
        {
          question: 'Find the LCM of 8 and 12 by listing multiples.',
          answer: `${or('LCM')} = ${or('24')}`,
          steps: [
            `List the ${bl('multiples')} of ${bl('8')}: ${bl('8, 16, 24, 32, 40')}.`,
            `List the ${bl('multiples')} of ${bl('12')}: ${bl('12, 24, 36, 48')}.`,
            `Identify the ${gr('shared multiples')} — numbers that appear in both lists: ${gr('24')}.`,
            `The smallest ${gr('shared multiple')} is the ${or('LCM')}: ${or('LCM = 24')} ✓`,
          ],
        },

        // ── Example 8: LCM of 12 and 18 using prime factorisation ───────────
        {
          question: 'Find the LCM of 12 and 18 using prime factorisation.',
          answer: `${or('LCM')} = ${or('36')}`,
          steps: [
            `Write ${bl('12')} as a product of prime factors: ${bl('12')} = ${re('2² × 3')}.`,
            `Write ${bl('18')} as a product of prime factors: ${bl('18')} = ${re('2 × 3²')}.`,
            `Take all prime factors using the ${re('highest power')}: ${re('2')} appears with highest power ${re('2²')}. ${re('3')} appears with highest power ${re('3²')}.`,
            `${or('LCM')} = ${re('2²')} × ${re('3²')} = ${re('4')} × ${re('9')} = ${or('36')} ✓`,
          ],
        },

        // ── Example 9: Sipho and Amahle library word problem ─────────────────
        {
          question: 'Sipho goes to the library every 6 days. Amahle goes every 8 days. They both go today. After how many days will they next go on the same day?',
          answer: `They will next go on the same day after ${or('24')} days`,
          steps: [
            `Find the ${or('LCM')} of ${bl('6')} and ${bl('8')}.`,
            `List the ${bl('multiples')} of ${bl('6')}: ${bl('6, 12, 18, 24')}.`,
            `List the ${bl('multiples')} of ${bl('8')}: ${bl('8, 16, 24')}.`,
            `The smallest ${gr('shared multiple')} is ${gr('24')}: ${or('LCM = 24')}.`,
            `<strong>Answer:</strong> They will go on the same day again after ${or('24')} days ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — LCM by listing multiples ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the LCM of 6 and 9.',
          answer: '18',
          checkMode: 'auto',
          correctAnswer: '18',
          explanation: 'Multiples of 6: 6, 12, 18, 24\nMultiples of 9: 9, 18, 27\nSmallest shared multiple: 18\nLCM = 18 ✓',
        },

        // ── Q10 Medium — LCM using prime factorisation ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the LCM of 15 and 20 using prime factorisation.',
          answer: '60',
          checkMode: 'auto',
          correctAnswer: '60',
          explanation: '15 = 3 × 5\n20 = 2² × 5\nAll prime factors using highest powers: 2² × 3 × 5 = 4 × 3 × 5 = 60\nLCM = 60 ✓',
        },

        // ── Q11 Hard — bus timing word problem ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two buses leave the station at the same time. Bus A leaves every 12 minutes and Bus B leaves every 18 minutes. After how many minutes will they next leave at the same time?',
          answer: '36',
          checkMode: 'auto',
          correctAnswer: '36',
          explanation: 'Find the LCM of 12 and 18.\n12 = 2² × 3\n18 = 2 × 3²\nAll prime factors with highest powers: 2² × 3² = 4 × 9 = 36\nLCM = 36 minutes ✓',
        },

        // ── Q12 Hard — HCF and LCM of 36 and 48 ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the HCF and LCM of 36 and 48.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) HCF of 36 and 48',
              correctAnswer: '12',
              explanation: '36 = 2² × 3²\n48 = 2⁴ × 3\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3¹)\nHCF = 2² × 3 = 4 × 3 = 12 ✓',
            },
            {
              label: 'b) LCM of 36 and 48',
              correctAnswer: '144',
              explanation: '36 = 2² × 3²\n48 = 2⁴ × 3\nAll prime factors with highest powers: 2⁴ × 3² = 16 × 9 = 144\nLCM = 144 ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Multiple lists for 8 and 12 with multiples in blue, shared multiples highlighted in green, and the LCM circled in orange; alongside a prime factorisation diagram for 12 and 18 with highest prime powers in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the Lowest Common Multiple by listing multiples and by using prime factorisation, with colour coded multiples, shared multiples, LCM, and highest prime powers" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have mastered properties of numbers.' },
      { minScore: 9, message: 'Great work! You have a strong understanding of properties of numbers.' },
      { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
