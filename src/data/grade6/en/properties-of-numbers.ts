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
        'Factor tree diagram for 120 with composite numbers in blue, prime numbers circled in green, and the final prime factorisation 120 = 2³ × 3 × 5 in red',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 210" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="140" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">120</text>` +
        `<line x1="132" y1="28" x2="84" y2="48" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="148" y1="28" x2="196" y2="48" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="80" y="62" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">12</text>` +
        `<text x="200" y="62" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">10</text>` +
        `<line x1="74" y1="66" x2="52" y2="86" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="86" y1="66" x2="108" y2="86" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="194" y1="66" x2="172" y2="86" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="206" y1="66" x2="228" y2="86" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="50" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">4</text>` +
        `<circle cx="110" cy="94" r="13" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="110" y="99" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">3</text>` +
        `<circle cx="170" cy="94" r="13" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="170" y="99" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">2</text>` +
        `<circle cx="230" cy="94" r="13" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="230" y="99" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">5</text>` +
        `<line x1="45" y1="103" x2="30" y2="123" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="55" y1="103" x2="70" y2="123" stroke="#0f1f3d" stroke-width="2"/>` +
        `<circle cx="28" cy="132" r="13" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="28" y="137" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">2</text>` +
        `<circle cx="72" cy="132" r="13" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="72" y="137" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">2</text>` +
        `<text x="140" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">120 = 2 × 2 × 2 × 3 × 5 = 2<tspan fill="#ea580c">³</tspan> × 3 × 5</text>` +
        `</svg>`,

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
        'Venn diagram comparing the factors of 12 and 18, with the common factors shown in the overlap and the highest common factor of 6 highlighted in orange',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 190" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<circle cx="90" cy="90" r="65" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="160" cy="90" r="65" fill="rgba(22,163,74,0.08)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="55" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Factors of 12</text>` +
        `<text x="195" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">Factors of 18</text>` +
        `<text x="45" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="45" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">12</text>` +
        `<text x="205" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">9</text>` +
        `<text x="205" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">18</text>` +
        `<text x="115" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="135" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="115" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">3</text>` +
        `<circle cx="135" cy="103" r="11" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="135" y="107" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">6</text>` +
        `<text x="125" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">HCF(12, 18) = 6</text>` +
        `</svg>`,

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
        'Double number line showing multiples of 8 and multiples of 12 aligned by value, with the point where they first meet — 24 — highlighted in orange as the lowest common multiple',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 165" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="8" y="54" font-size="10" font-weight="700" fill="#2563eb">×8</text>` +
        `<line x1="30" y1="50" x2="200" y2="50" stroke="#2563eb" stroke-width="2.5"/>` +
        `<line x1="62" y1="45" x2="62" y2="55" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="94" y1="45" x2="94" y2="55" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="126" y1="45" x2="126" y2="55" stroke="#ea580c" stroke-width="2"/>` +
        `<line x1="158" y1="45" x2="158" y2="55" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="190" y1="45" x2="190" y2="55" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="62" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">8</text>` +
        `<text x="94" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">16</text>` +
        `<text x="126" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">24</text>` +
        `<text x="158" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">32</text>` +
        `<text x="190" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">40</text>` +
        `<text x="5" y="114" font-size="10" font-weight="700" fill="#16a34a">×12</text>` +
        `<line x1="30" y1="110" x2="230" y2="110" stroke="#16a34a" stroke-width="2.5"/>` +
        `<line x1="78" y1="105" x2="78" y2="115" stroke="#16a34a" stroke-width="1.5"/>` +
        `<line x1="126" y1="105" x2="126" y2="115" stroke="#ea580c" stroke-width="2"/>` +
        `<line x1="174" y1="105" x2="174" y2="115" stroke="#16a34a" stroke-width="1.5"/>` +
        `<line x1="222" y1="105" x2="222" y2="115" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="78" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">12</text>` +
        `<text x="126" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">24</text>` +
        `<text x="174" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">36</text>` +
        `<text x="222" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">48</text>` +
        `<line x1="126" y1="42" x2="126" y2="102" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/>` +
        `<text x="130" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">LCM(8, 12) = 24</text>` +
        `</svg>`,

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
  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have a rock-solid grip on prime factorisation, HCF and LCM. Keep it up!' },
    { minScore: 15, message: 'Great work! You clearly understand properties of numbers — review any missed questions and try again.' },
    { minScore: 10, message: 'Good effort! Revisit the worked examples on prime factorisation, HCF and LCM, then try this set again.' },
    { minScore: 0, message: "Keep going — every mathematician started somewhere! Work through the study guide again and retry this set." },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Prime vs composite & basic prime factorisation | 4-7 Prime
    // factorisation with exponents | 8-11 HCF | 12-15 LCM | 16-19 Integrating
    // HCF, LCM & prime factorisation
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Is 23 a prime number or a composite number? Give a brief reason.', answer: 'Prime — its only factors are 1 and 23, so it cannot be split into smaller factors.', checkMode: 'self', explanation: '23 cannot be divided evenly by 2, 3, 4, or 5, and checking up to its square root (about 4.8) is enough. Its only factors are 1 and 23, so it is prime.' },
        { difficulty: 'Easy', question: 'List all the factors of 42.', answer: '1, 2, 3, 6, 7, 14, 21, 42', checkMode: 'auto', correctAnswer: '1, 2, 3, 6, 7, 14, 21, 42', correctAnswers: ['1, 2, 3, 6, 7, 14, 21, 42', '1,2,3,6,7,14,21,42'], explanation: 'Test each whole number from 1 up: 42 ÷ 1 = 42, ÷2 = 21, ÷3 = 14, ÷6 = 7, ÷7 = 6 (repeat).\nFactors of 42: 1, 2, 3, 6, 7, 14, 21, 42 ✓' },
        { difficulty: 'Easy', question: 'A factor tree for 40 starts by splitting it into 4 × 10. Complete the tree by splitting each of those into prime factors, then give the full list of prime factors.', answer: '2, 2, 2, 5', checkMode: 'auto', correctAnswer: '2, 2, 2, 5', correctAnswers: ['2, 2, 2, 5', '2,2,2,5', '2 2 2 5'], explanation: 'Split 4 into 2 × 2 (both prime). Split 10 into 2 × 5 (both prime).\nPrime factors of 40: 2, 2, 2, 5 ✓' },
        { difficulty: 'Easy', question: 'Karabo says 21 is a prime number because it is odd. Is she correct? Explain using its factors.', answer: 'No — 21 is composite. Its factors are 1, 3, 7 and 21, so it has more than just 1 and itself as factors. Being odd does not make a number prime.', checkMode: 'self', explanation: '21 = 3 × 7, so 21 has four factors: 1, 3, 7, 21. A prime number must have exactly two factors. Since 21 has more than two, it is composite, not prime — Karabo is incorrect.' },
        { difficulty: 'Easy-Medium', question: 'Use a factor tree to find the prime factorisation of 40, writing your answer with exponents.', answer: '2³ x 5', checkMode: 'auto', correctAnswer: '2³ x 5', correctAnswers: ['2³ x 5', '2^3 x 5', '2³ × 5', '2^3 × 5'], explanation: 'Factor tree: 40 → 4 × 10 → 2 × 2 × 2 × 5\nPrime factors: 2, 2, 2, 5\n2 appears three times → 2³\nPrime factorisation: 40 = 2³ × 5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Evaluate 2³ × 5² as a whole number.', answer: '200', checkMode: 'auto', correctAnswer: '200', explanation: '2³ = 2 × 2 × 2 = 8\n5² = 5 × 5 = 25\n8 × 25 = 200 ✓' },
        { difficulty: 'Medium', question: 'A learner draws a factor tree for 72: 72 → 8 × 9 → 2 × 2 × 2 × 3 × 3, then writes the answer as 2³ × 3³. Spot the mistake and give the correct prime factorisation.', answer: '2³ x 3²', checkMode: 'auto', correctAnswer: '2³ x 3²', correctAnswers: ['2³ x 3²', '2^3 x 3^2', '2³ × 3²', '2^3 × 3^2'], explanation: 'The factor tree itself is correct: 2, 2, 2, 3, 3 are the prime factors. But 3 only appears TWICE, not three times, so the exponent on 3 should be 3², not 3³.\nCorrect prime factorisation: 72 = 2³ × 3² ✓ (the learner miscounted the exponent)' },
        { difficulty: 'Medium', question: 'Thabo splits 60 as 6 × 10 first, while Ayesha splits 60 as 4 × 15 first. Show that both starting splits lead to the same prime factorisation.', answer: '2² x 3 x 5', checkMode: 'auto', correctAnswer: '2² x 3 x 5', correctAnswers: ['2² x 3 x 5', '2^2 x 3 x 5', '2² × 3 × 5', '2^2 × 3 × 5'], explanation: "Thabo: 60 → 6 × 10 → (2 × 3) × (2 × 5) = 2 × 2 × 3 × 5\nAyesha: 60 → 4 × 15 → (2 × 2) × (3 × 5) = 2 × 2 × 3 × 5\nBoth give the same prime factors: 2, 2, 3, 5\nPrime factorisation: 60 = 2² × 3 × 5 ✓ — the starting split never changes the final answer." },
        { difficulty: 'Medium', question: 'Find the HCF of 24 and 36 by listing factors.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nCommon factors: 1, 2, 3, 4, 6, 12\nHCF = 12 ✓' },
        { difficulty: 'Medium', question: 'Find the HCF of 84 and 126 using prime factorisation.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: '84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nShared prime factors: 2 (lowest power 2¹), 3 (lowest power 3¹), 7 (lowest power 7¹)\nHCF = 2 × 3 × 7 = 42 ✓' },
        { difficulty: 'Medium', question: 'A caterer has 60 samosas and 84 spring rolls. She wants to pack identical goodie bags using all the snacks with none left over. What is the maximum number of goodie bags she can make?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'This is an HCF problem: find the HCF of 60 and 84.\n60 = 2² × 3 × 5\n84 = 2² × 3 × 7\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3¹)\nHCF = 2² × 3 = 4 × 3 = 12\nShe can pack 12 identical goodie bags ✓' },
        { difficulty: 'Medium', question: 'Zanele is finding the HCF of 30 and 45. She lists the common factors as 1, 3, 5 and 15, then picks 5 as the HCF. What mistake did she make, and what is the correct HCF?', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Zanele correctly found the common factors (1, 3, 5, 15) but picked the wrong one — she must choose the HIGHEST common factor, not just any common factor.\nThe highest of 1, 3, 5, 15 is 15.\nHCF of 30 and 45 = 15 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 4 and 6 by listing multiples.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Multiples of 4: 4, 8, 12, 16\nMultiples of 6: 6, 12, 18\nSmallest shared multiple: 12\nLCM = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 18 and 24 using prime factorisation.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: '18 = 2 × 3²\n24 = 2³ × 3\nAll prime factors using highest powers: 2³ (from 24) and 3² (from 18)\nLCM = 2³ × 3² = 8 × 9 = 72 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two flashing lights at a taxi rank blink at the same moment. Light A flashes every 12 seconds and Light B flashes every 16 seconds. After how many seconds will they next flash together?', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'Find the LCM of 12 and 16.\n12 = 2² × 3\n16 = 2⁴\nHighest powers: 2⁴ (from 16) and 3¹ (from 12)\nLCM = 2⁴ × 3 = 16 × 3 = 48\nThey will next flash together after 48 seconds ✓' },
        { difficulty: 'Medium-Hard', question: 'Looking for the LCM of 8 and 20, a learner lists multiples of 8 as 8, 16 and multiples of 20 as 20, and concludes there is no common multiple. What went wrong, and what is the actual LCM?', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'The learner stopped listing multiples far too early — with only one or two multiples of each number, a shared one may not have appeared yet.\nMultiples of 8: 8, 16, 24, 32, 40\nMultiples of 20: 20, 40\nSmallest shared multiple: 40\nLCM = 40 ✓' },
        { difficulty: 'Hard', question: 'Find both the HCF and the LCM of 60 and 72.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 60 and 72', correctAnswer: '12', explanation: '60 = 2² × 3 × 5\n72 = 2³ × 3²\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3¹)\nHCF = 2² × 3 = 4 × 3 = 12 ✓' }, { label: 'b) LCM of 60 and 72', correctAnswer: '360', explanation: '60 = 2² × 3 × 5\n72 = 2³ × 3²\nHighest powers: 2³, 3², 5¹\nLCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360 ✓' } ] },
        { difficulty: 'Hard', question: 'Two fabric rolls measure 90 cm and 150 cm. A tailor wants to cut both rolls into the longest possible equal-length pieces with no fabric wasted. Find that length, then say how many pieces she will get in total.', answer: '8 pieces total (30 cm each)', checkMode: 'auto', correctAnswer: '8 pieces total (30 cm each)', correctAnswers: ['8 pieces total', '8 pieces', '8'], explanation: 'The longest equal piece length is the HCF of 90 and 150.\n90 = 2 × 3² × 5\n150 = 2 × 3 × 5²\nShared prime factors: 2 (power 1), 3 (lowest power 1), 5 (lowest power 1)\nHCF = 2 × 3 × 5 = 30 cm per piece\nFrom the 90 cm roll: 90 ÷ 30 = 3 pieces. From the 150 cm roll: 150 ÷ 30 = 5 pieces.\nTotal pieces = 3 + 5 = 8 ✓' },
        { difficulty: 'Hard', question: 'Sibongile says that for any two numbers, the LCM is always bigger than the HCF. Is she correct? Test this using 8 and 8, then explain.', answer: 'No — if the two numbers are equal (like 8 and 8), the HCF and LCM are both 8, so they are equal, not one bigger than the other. Sibongile\'s claim only holds when the two numbers are different.', checkMode: 'self', explanation: 'HCF(8, 8) = 8 and LCM(8, 8) = 8 — they are exactly equal, not one greater than the other. In general the LCM is greater than or equal to the HCF, never smaller, but they are only strictly unequal when the two numbers are different. Sibongile is incorrect as a blanket statement.' },
        { difficulty: 'Hard', question: 'A school has 96 pencils and 120 rulers to pack into identical stationery kits, using all items with none left over. First find the prime factorisation of 96 and 120, then find the maximum number of kits, and finally state how many pencils and rulers go in each kit.', answer: '24 kits, each with 4 pencils and 5 rulers', checkMode: 'auto', correctAnswer: '24 kits, each with 4 pencils and 5 rulers', correctAnswers: ['24 kits, each with 4 pencils and 5 rulers', '24 kits with 4 pencils and 5 rulers each'], explanation: '96 = 2⁵ × 3\n120 = 2³ × 3 × 5\nShared prime factors: 2 (lowest power 2³) and 3 (lowest power 3¹)\nHCF = 2³ × 3 = 8 × 3 = 24 kits\nPencils per kit: 96 ÷ 24 = 4. Rulers per kit: 120 ÷ 24 = 5 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered prime factorisation, HCF and LCM in one go.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Is 29 prime or composite? Give a brief reason.', answer: 'Prime — the only factors of 29 are 1 and 29, so it cannot be broken into smaller whole-number factors.', checkMode: 'self', explanation: '29 is not divisible by 2, 3, or 5 (checking up to its square root, about 5.4, is enough). Its only factors are 1 and 29, so 29 is prime.' },
        { difficulty: 'Easy', question: 'List all the factors of 36.', answer: '1, 2, 3, 4, 6, 9, 12, 18, 36', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 9, 12, 18, 36', correctAnswers: ['1, 2, 3, 4, 6, 9, 12, 18, 36', '1,2,3,4,6,9,12,18,36'], explanation: 'Test each whole number from 1 up: 36 ÷ 1 = 36, ÷2 = 18, ÷3 = 12, ÷4 = 9, ÷6 = 6 (meet in the middle).\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 ✓' },
        { difficulty: 'Easy', question: 'A factor tree for 54 starts by splitting it into 6 × 9. Complete the tree by splitting each branch into prime factors, then give the full list of prime factors.', answer: '2, 3, 3, 3', checkMode: 'auto', correctAnswer: '2, 3, 3, 3', correctAnswers: ['2, 3, 3, 3', '2,3,3,3', '2 3 3 3'], explanation: 'Split 6 into 2 × 3 (both prime). Split 9 into 3 × 3 (both prime).\nPrime factors of 54: 2, 3, 3, 3 ✓' },
        { difficulty: 'Easy', question: 'Sipho says 33 is prime because it does not end in an even digit or a 5. Is he correct? Explain using its factors.', answer: 'No — 33 is composite. Its factors are 1, 3, 11 and 33. Even though it does not end in an even digit or 5, it is still divisible by 3 and 11.', checkMode: 'self', explanation: '33 = 3 × 11, so 33 has four factors: 1, 3, 11, 33. A prime number needs exactly two factors, so 33 is composite, not prime. Sipho\'s rule (checking only even digits and 5) misses divisibility by 3, 7, 11 and other primes.' },
        { difficulty: 'Easy-Medium', question: 'Use a factor tree to find the prime factorisation of 54, writing your answer with exponents.', answer: '2 x 3³', checkMode: 'auto', correctAnswer: '2 x 3³', correctAnswers: ['2 x 3³', '2 x 3^3', '2 × 3³', '2 × 3^3'], explanation: 'Factor tree: 54 → 6 × 9 → 2 × 3 × 3 × 3\nPrime factors: 2, 3, 3, 3\n3 appears three times → 3³\nPrime factorisation: 54 = 2 × 3³ ✓' },
        { difficulty: 'Easy-Medium', question: 'Evaluate 2⁴ × 3² as a whole number.', answer: '144', checkMode: 'auto', correctAnswer: '144', explanation: '2⁴ = 2 × 2 × 2 × 2 = 16\n3² = 3 × 3 = 9\n16 × 9 = 144 ✓' },
        { difficulty: 'Medium', question: 'A learner draws a factor tree for 90: 90 → 9 × 10 → 3 × 3 × 2 × 5, then writes the answer as 3³ × 2 × 5. Spot the mistake and give the correct prime factorisation.', answer: '2 x 3² x 5', checkMode: 'auto', correctAnswer: '2 x 3² x 5', correctAnswers: ['2 x 3² x 5', '2 x 3^2 x 5', '2 × 3² × 5', '2 × 3^2 × 5'], explanation: 'The prime factors found (3, 3, 2, 5) are correct, but 3 only appears TWICE, not three times, so the exponent should be 3², not 3³.\nCorrect prime factorisation: 90 = 2 × 3² × 5 ✓ (the learner miscounted the exponent)' },
        { difficulty: 'Medium', question: 'Nomvula splits 96 as 8 × 12 first, while her friend splits 96 as 6 × 16 first. Show that both starting splits lead to the same prime factorisation.', answer: '2⁵ x 3', checkMode: 'auto', correctAnswer: '2⁵ x 3', correctAnswers: ['2⁵ x 3', '2^5 x 3', '2⁵ × 3', '2^5 × 3'], explanation: "Nomvula: 96 → 8 × 12 → (2 × 2 × 2) × (2 × 2 × 3) = 2 × 2 × 2 × 2 × 2 × 3\nFriend: 96 → 6 × 16 → (2 × 3) × (2 × 2 × 2 × 2) = 2 × 2 × 2 × 2 × 2 × 3\nBoth give five 2's and one 3.\nPrime factorisation: 96 = 2⁵ × 3 ✓ — the starting split never changes the final answer." },
        { difficulty: 'Medium', question: 'Find the HCF of 18 and 30 by listing factors.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18\nFactors of 30: 1, 2, 3, 5, 6, 10, 15, 30\nCommon factors: 1, 2, 3, 6\nHCF = 6 ✓' },
        { difficulty: 'Medium', question: 'Find the HCF of 90 and 120 using prime factorisation.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: '90 = 2 × 3² × 5\n120 = 2³ × 3 × 5\nShared prime factors: 2 (lowest power 2¹), 3 (lowest power 3¹), 5 (lowest power 5¹)\nHCF = 2 × 3 × 5 = 30 ✓' },
        { difficulty: 'Medium', question: 'A bookshop has 45 pens and 60 notebooks. The owner wants to arrange them into identical gift boxes using all the stock with none left over. What is the maximum number of gift boxes she can make?', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'This is an HCF problem: find the HCF of 45 and 60.\n45 = 3² × 5\n60 = 2² × 3 × 5\nShared prime factors: 3 (lowest power 3¹) and 5 (lowest power 5¹)\nHCF = 3 × 5 = 15\nShe can make 15 identical gift boxes ✓' },
        { difficulty: 'Medium', question: 'Given the numbers 24 and 32, Bongani lists their common factors as 1, 2, 4 and 8, then says the HCF is 4. What mistake did he make, and what is the correct HCF?', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Bongani found the common factors correctly (1, 2, 4, 8) but did not choose the highest one — he must pick the largest number in that list, not the second largest.\nThe highest of 1, 2, 4, 8 is 8.\nHCF of 24 and 32 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 5 and 6 by listing multiples.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Multiples of 5: 5, 10, 15, 20, 25, 30\nMultiples of 6: 6, 12, 18, 24, 30\nSmallest shared multiple: 30\nLCM = 30 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 20 and 25 using prime factorisation.', answer: '100', checkMode: 'auto', correctAnswer: '100', explanation: '20 = 2² × 5\n25 = 5²\nAll prime factors using highest powers: 2² (from 20) and 5² (from 25)\nLCM = 2² × 5² = 4 × 25 = 100 ✓' },
        { difficulty: 'Medium-Hard', question: 'A market stall restocks fruit every 15 days and restocks vegetables every 18 days, starting on the same day. After how many days will both restocks next happen on the same day?', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: 'Find the LCM of 15 and 18.\n15 = 3 × 5\n18 = 2 × 3²\nHighest powers: 2¹ (from 18), 3² (from 18), 5¹ (from 15)\nLCM = 2 × 3² × 5 = 2 × 9 × 5 = 90\nBoth restocks will next align after 90 days ✓' },
        { difficulty: 'Medium-Hard', question: 'Looking for the LCM of 9 and 15, a learner lists only the first multiple of each — 9 and 15 — and concludes the LCM is 9 × 15 = 135. Is this the actual LCM? Explain and give the correct LCM.', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'The learner stopped listing multiples too early and just multiplied the two numbers together, which does not always give the LCM.\nMultiples of 9: 9, 18, 27, 36, 45\nMultiples of 15: 15, 30, 45\nSmallest shared multiple: 45, not 135.\nLCM = 45 ✓' },
        { difficulty: 'Hard', question: 'Find both the HCF and the LCM of 45 and 75.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 45 and 75', correctAnswer: '15', explanation: '45 = 3² × 5\n75 = 3 × 5²\nShared prime factors: 3 (lowest power 3¹) and 5 (lowest power 5¹)\nHCF = 3 × 5 = 15 ✓' }, { label: 'b) LCM of 45 and 75', correctAnswer: '225', explanation: '45 = 3² × 5\n75 = 3 × 5²\nHighest powers: 3² (from 45), 5² (from 75)\nLCM = 3² × 5² = 9 × 25 = 225 ✓' } ] },
        { difficulty: 'Hard', question: 'Two ropes measure 105 m and 140 m. A scout leader wants to cut both ropes into the longest possible equal-length pieces with none wasted. Find that length, then say how many pieces she will get in total.', answer: '7 pieces total (35 m each)', checkMode: 'auto', correctAnswer: '7 pieces total (35 m each)', correctAnswers: ['7 pieces total', '7 pieces', '7'], explanation: 'The longest equal piece length is the HCF of 105 and 140.\n105 = 3 × 5 × 7\n140 = 2² × 5 × 7\nShared prime factors: 5 (power 1) and 7 (power 1)\nHCF = 5 × 7 = 35 m per piece\nFrom the 105 m rope: 105 ÷ 35 = 3 pieces. From the 140 m rope: 140 ÷ 35 = 4 pieces.\nTotal pieces = 3 + 4 = 7 ✓' },
        { difficulty: 'Hard', question: 'Deon claims that the HCF of two different numbers can never be equal to their LCM. Is he correct? Test this using 4 and 8, then explain.', answer: 'His conclusion is correct, though his reasoning needs care: for 4 and 8, the HCF is 4 and the LCM is 8, which are different. In general, the HCF and LCM of two DIFFERENT numbers are always different — they can only be equal when the two numbers themselves are equal.', checkMode: 'self', explanation: 'HCF(4, 8) = 4 and LCM(4, 8) = 8 — these are different because 4 ≠ 8. In fact, the HCF and LCM of two DIFFERENT numbers are always different; they can only be equal when the two numbers are the same (e.g. HCF(6,6) = LCM(6,6) = 6). So Deon\'s claim happens to be true for any two different numbers, and this example confirms it.' },
        { difficulty: 'Hard', question: 'A gift shop has 84 chocolates and 126 sweets to pack into identical gift bags, using all items with none left over. First find the prime factorisation of 84 and 126, then find the maximum number of gift bags, and finally state how many of each item go in each bag.', answer: '42 gift bags, each with 2 chocolates and 3 sweets', checkMode: 'auto', correctAnswer: '42 gift bags, each with 2 chocolates and 3 sweets', correctAnswers: ['42 gift bags, each with 2 chocolates and 3 sweets', '42 bags with 2 chocolates and 3 sweets each'], explanation: '84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nShared prime factors: 2 (lowest power 2¹), 3 (lowest power 3¹), 7 (lowest power 7¹)\nHCF = 2 × 3 × 7 = 42 gift bags\nChocolates per bag: 84 ÷ 42 = 2. Sweets per bag: 126 ÷ 42 = 3 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently apply prime factorisation, HCF and LCM to a wide range of problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Is 31 prime or composite? Give a brief reason.', answer: 'Prime — the only factors of 31 are 1 and 31, so no smaller whole number divides into it evenly.', checkMode: 'self', explanation: '31 is not divisible by 2, 3, or 5 (checking up to its square root, about 5.6, is enough). Its only factors are 1 and 31, so 31 is prime.' },
        { difficulty: 'Easy', question: 'List all the factors of 48.', answer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', correctAnswers: ['1, 2, 3, 4, 6, 8, 12, 16, 24, 48', '1,2,3,4,6,8,12,16,24,48'], explanation: 'Test each whole number from 1 up: 48 ÷ 1 = 48, ÷2 = 24, ÷3 = 16, ÷4 = 12, ÷6 = 8 (meet in the middle).\nFactors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 ✓' },
        { difficulty: 'Easy', question: 'A factor tree for 63 starts by splitting it into 7 × 9. Complete the tree by splitting each branch into prime factors, then give the full list of prime factors.', answer: '7, 3, 3', checkMode: 'auto', correctAnswer: '7, 3, 3', correctAnswers: ['7, 3, 3', '3, 3, 7', '7,3,3', '3,3,7'], explanation: '7 is already prime, so that branch stops. Split 9 into 3 × 3 (both prime).\nPrime factors of 63: 7, 3, 3 ✓' },
        { difficulty: 'Easy', question: 'Amahle says 39 is prime because it is not in the times tables she memorised for 2, 4, 5, 6, 8 and 10. Is she correct? Explain using its factors.', answer: 'No — 39 is composite. Its factors are 1, 3, 13 and 39. Amahle only checked some times tables and missed that 39 is divisible by 3 and 13.', checkMode: 'self', explanation: '39 = 3 × 13, so 39 has four factors: 1, 3, 13, 39. A prime number needs exactly two factors, so 39 is composite. To properly test for primality you must check ALL primes up to the square root, not just a few common times tables.' },
        { difficulty: 'Easy-Medium', question: 'Use a factor tree to find the prime factorisation of 63, writing your answer with exponents.', answer: '3² x 7', checkMode: 'auto', correctAnswer: '3² x 7', correctAnswers: ['3² x 7', '3^2 x 7', '3² × 7', '3^2 × 7'], explanation: 'Factor tree: 63 → 7 × 9 → 7 × 3 × 3\nPrime factors: 3, 3, 7\n3 appears twice → 3²\nPrime factorisation: 63 = 3² × 7 ✓' },
        { difficulty: 'Easy-Medium', question: 'Evaluate 3³ × 5² as a whole number.', answer: '675', checkMode: 'auto', correctAnswer: '675', explanation: '3³ = 3 × 3 × 3 = 27\n5² = 5 × 5 = 25\n27 × 25 = 675 ✓' },
        { difficulty: 'Medium', question: 'A learner draws a factor tree for 108: 108 → 12 × 9 → 2 × 2 × 3 × 3 × 3, then writes the answer as 2² × 3⁴. Spot the mistake and give the correct prime factorisation.', answer: '2² x 3³', checkMode: 'auto', correctAnswer: '2² x 3³', correctAnswers: ['2² x 3³', '2^2 x 3^3', '2² × 3³', '2^2 × 3^3'], explanation: 'The prime factors found (2, 2, 3, 3, 3) are correct, but 3 appears THREE times, not four, so the exponent should be 3³, not 3⁴.\nCorrect prime factorisation: 108 = 2² × 3³ ✓ (the learner miscounted the exponent)' },
        { difficulty: 'Medium', question: 'Lindiwe splits 132 as 12 × 11 first, while her classmate splits 132 as 4 × 33 first. Show that both starting splits lead to the same prime factorisation.', answer: '2² x 3 x 11', checkMode: 'auto', correctAnswer: '2² x 3 x 11', correctAnswers: ['2² x 3 x 11', '2^2 x 3 x 11', '2² × 3 × 11', '2^2 × 3 × 11'], explanation: "Lindiwe: 132 → 12 × 11 → (2 × 2 × 3) × 11 = 2 × 2 × 3 × 11\nClassmate: 132 → 4 × 33 → (2 × 2) × (3 × 11) = 2 × 2 × 3 × 11\nBoth give two 2's, one 3, and one 11.\nPrime factorisation: 132 = 2² × 3 × 11 ✓ — the starting split never changes the final answer." },
        { difficulty: 'Medium', question: 'Find the HCF of 28 and 42 by listing factors.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Factors of 28: 1, 2, 4, 7, 14, 28\nFactors of 42: 1, 2, 3, 6, 7, 14, 21, 42\nCommon factors: 1, 2, 7, 14\nHCF = 14 ✓' },
        { difficulty: 'Medium', question: 'Find the HCF of 108 and 144 using prime factorisation.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '108 = 2² × 3³\n144 = 2⁴ × 3²\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3²)\nHCF = 2² × 3² = 4 × 9 = 36 ✓' },
        { difficulty: 'Medium', question: 'A hall has 60 chairs and 96 programme booklets. The organiser wants to set up identical rows, each with the same number of chairs and the same number of booklets, using everything with none left over. What is the maximum number of rows she can set up?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'This is an HCF problem: find the HCF of 60 and 96.\n60 = 2² × 3 × 5\n96 = 2⁵ × 3\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3¹)\nHCF = 2² × 3 = 4 × 3 = 12\nShe can set up 12 identical rows ✓' },
        { difficulty: 'Medium', question: 'For the numbers 36 and 48, Katlego lists the common factors as 1, 2, 3, 4, 6 and 12, then says the HCF is 6. What mistake did he make, and what is the correct HCF?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Katlego found the common factors correctly (1, 2, 3, 4, 6, 12) but picked a middle value instead of the largest one.\nThe highest of 1, 2, 3, 4, 6, 12 is 12.\nHCF of 36 and 48 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 8 and 10 by listing multiples.', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Multiples of 8: 8, 16, 24, 32, 40\nMultiples of 10: 10, 20, 30, 40\nSmallest shared multiple: 40\nLCM = 40 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 14 and 21 using prime factorisation.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: '14 = 2 × 7\n21 = 3 × 7\nAll prime factors using highest powers: 2¹ (from 14), 3¹ (from 21), 7¹ (shared)\nLCM = 2 × 3 × 7 = 42 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two alarm clocks are set at the same moment. Alarm A rings every 20 minutes and Alarm B rings every 24 minutes. After how many minutes will they next ring at exactly the same time?', answer: '120', checkMode: 'auto', correctAnswer: '120', explanation: 'Find the LCM of 20 and 24.\n20 = 2² × 5\n24 = 2³ × 3\nHighest powers: 2³ (from 24), 3¹ (from 24), 5¹ (from 20)\nLCM = 2³ × 3 × 5 = 8 × 3 × 5 = 120\nThey will next ring together after 120 minutes ✓' },
        { difficulty: 'Medium-Hard', question: 'Looking for the LCM of 6 and 16, a learner lists multiples of 6 as 6, 12 and multiples of 16 as just 16, then says there is no LCM because the lists do not overlap yet. What went wrong, and what is the actual LCM?', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'The learner stopped listing multiples far too early — a shared multiple often only appears once the lists are extended further.\nMultiples of 6: 6, 12, 18, 24, 30, 36, 42, 48\nMultiples of 16: 16, 32, 48\nSmallest shared multiple: 48\nLCM = 48 ✓' },
        { difficulty: 'Hard', question: 'Find both the HCF and the LCM of 56 and 84.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 56 and 84', correctAnswer: '28', explanation: '56 = 2³ × 7\n84 = 2² × 3 × 7\nShared prime factors: 2 (lowest power 2²) and 7 (lowest power 7¹)\nHCF = 2² × 7 = 4 × 7 = 28 ✓' }, { label: 'b) LCM of 56 and 84', correctAnswer: '168', explanation: '56 = 2³ × 7\n84 = 2² × 3 × 7\nHighest powers: 2³ (from 56), 3¹ (from 84), 7¹ (shared)\nLCM = 2³ × 3 × 7 = 8 × 3 × 7 = 168 ✓' } ] },
        { difficulty: 'Hard', question: 'Two wooden planks measure 126 cm and 210 cm. A carpenter wants to cut both into the longest possible equal-length pieces with none wasted. Find that length, then say how many pieces he will get in total.', answer: '8 pieces total (42 cm each)', checkMode: 'auto', correctAnswer: '8 pieces total (42 cm each)', correctAnswers: ['8 pieces total', '8 pieces', '8'], explanation: 'The longest equal piece length is the HCF of 126 and 210.\n126 = 2 × 3² × 7\n210 = 2 × 3 × 5 × 7\nShared prime factors: 2 (power 1), 3 (lowest power 1), 7 (power 1)\nHCF = 2 × 3 × 7 = 42 cm per piece\nFrom the 126 cm plank: 126 ÷ 42 = 3 pieces. From the 210 cm plank: 210 ÷ 42 = 5 pieces.\nTotal pieces = 3 + 5 = 8 ✓' },
        { difficulty: 'Hard', question: 'Kagiso claims that for any two numbers, multiplying their HCF by their LCM always gives the same result as multiplying the two original numbers together. Test his claim using 8 and 12, then say whether it holds.', answer: 'Yes — HCF(8,12) × LCM(8,12) = 4 × 24 = 96, and 8 × 12 = 96. The two results match, so Kagiso\'s claim holds for this pair (and in fact it is true for any two whole numbers).', checkMode: 'self', explanation: 'HCF(8, 12) = 4 and LCM(8, 12) = 24, so 4 × 24 = 96. Also 8 × 12 = 96. Since both calculations give 96, Kagiso\'s claim is confirmed for this example — this relationship (HCF × LCM = product of the two numbers) always holds true.' },
        { difficulty: 'Hard', question: 'A museum shop has 108 pamphlets and 144 stickers to pack into identical welcome packs, using all items with none left over. First find the prime factorisation of 108 and 144, then find the maximum number of welcome packs, and finally state how many of each item go in each pack.', answer: '36 welcome packs, each with 3 pamphlets and 4 stickers', checkMode: 'auto', correctAnswer: '36 welcome packs, each with 3 pamphlets and 4 stickers', correctAnswers: ['36 welcome packs, each with 3 pamphlets and 4 stickers', '36 packs with 3 pamphlets and 4 stickers each'], explanation: '108 = 2² × 3³\n144 = 2⁴ × 3²\nShared prime factors: 2 (lowest power 2²) and 3 (lowest power 3²)\nHCF = 2² × 3² = 4 × 9 = 36 welcome packs\nPamphlets per pack: 108 ÷ 36 = 3. Stickers per pack: 144 ÷ 36 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply prime factorisation, HCF and LCM to real-world problems and multi-step reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
