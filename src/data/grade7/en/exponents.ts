import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ──────────────────────────────────────────
// base number          → blue   (#2563eb)
// exponent             → orange (#ea580c)
// square/cube root     → green  (#16a34a)
// repeated mult/result → green  (#16a34a)  [sections 1–2]
// final answer         → red    (#dc2626)  [section 3]
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SQUARE NUMBERS AND SQUARE ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'square-numbers-roots',
      title: 'Square Numbers and Square Roots',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>square number</strong> is the result of multiplying a number by itself. The notation is a small ${or('2')} written after the number — for example ${bl('7')}${or('²')} means ${bl('7')} × ${bl('7')} = 49. A <strong>perfect square</strong> is a number that has a whole number ${gr('square root')}. The ${gr('square root')} symbol is ${gr('√')}. To find the ${gr('square root')} we ask what number multiplied by itself gives the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('square root')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of multiplying a number by itself — for example, ${bl('5')}${or('²')} = 25.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The small raised number that tells us how many times to multiply. In ${bl('5')}${or('²')}, the exponent is ${or('2')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square root (√)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number that was multiplied by itself to give the square number — ${gr('√')}25 = ${bl('5')} because ${bl('5')} × ${bl('5')} = 25.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Perfect square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number whose ${gr('square root')} is a whole number — 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, …</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why perfect squares matter</p>` +
        `<p style="margin:0;color:#1e3a8a;">Knowing the first <strong>15 perfect squares</strong> (${bl('1')}${or('²')} to ${bl('15')}${or('²')}) by heart will help you quickly evaluate and simplify expressions involving ${or('exponents')} and ${gr('square roots')} throughout your mathematics career.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 12² and find √144.',
          answer: `${bl('12')}${or('²')} = 144 and ${gr('√')}144 = ${bl('12')}`,
          steps: [
            `${bl('12')}${or('²')} = ${bl('12')} × ${bl('12')} = 144`,
            `${gr('√')}144 = ${bl('12')} because ${bl('12')} × ${bl('12')} = 144`,
          ],
        },
        {
          question: 'Is 50 a perfect square?',
          answer: '50 is not a perfect square.',
          steps: [
            `Check nearby squares — ${bl('7')}${or('²')} = 49 and ${bl('8')}${or('²')} = 64`,
            `50 is between these so it has no whole number ${gr('square root')}`,
            `50 is not a perfect square`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining square numbers and square roots with visual examples of squaring and finding the square root" />',

      diagramPlaceholder:
        'Visual grid showing square numbers from 1² to 6² as growing n × n grids, with the base number blue, exponent orange and value green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="100" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Square numbers: n × n grids</text>` +
        `<rect x="10" y="94" width="6" height="6" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="26" y="88" width="12" height="12" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="48" y="82" width="18" height="18" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="76" y="76" width="24" height="24" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="110" y="70" width="30" height="30" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="150" y="64" width="36" height="36" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<text x="13" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">1</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=1</tspan></text>` +
        `<text x="32" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">2</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=4</tspan></text>` +
        `<text x="57" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">3</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=9</tspan></text>` +
        `<text x="88" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">4</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=16</tspan></text>` +
        `<text x="125" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">5</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=25</tspan></text>` +
        `<text x="168" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">6</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=36</tspan></text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CUBE NUMBERS AND CUBE ROOTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cube-numbers-roots',
      title: 'Cube Numbers and Cube Roots',
      icon: '³',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>cube number</strong> is the result of multiplying a number by itself three times. The notation uses a small ${or('3')} — for example ${bl('4')}${or('³')} = ${bl('4')} × ${bl('4')} × ${bl('4')} = 64. The ${gr('cube root')} symbol is ${gr('∛')}. To find the ${gr('cube root')} we ask what number multiplied by itself three times gives the original number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cube root')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cube number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of multiplying a number by itself three times — for example, ${bl('3')}${or('³')} = 27.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Cube root (∛)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number that was multiplied by itself three times to give the cube number — ${gr('∛')}27 = ${bl('3')} because ${bl('3')} × ${bl('3')} × ${bl('3')} = 27.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Perfect cubes to know</p>` +
        `<p style="margin:0;color:#1e3a8a;">Learn the cube numbers from ${bl('1')}${or('³')} to ${bl('10')}${or('³')}: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Recognising these helps you find ${gr('cube roots')} instantly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 6³ and find ∛216.',
          answer: `${bl('6')}${or('³')} = 216 and ${gr('∛')}216 = ${bl('6')}`,
          steps: [
            `${bl('6')}${or('³')} = ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
            `${gr('∛')}216 = ${bl('6')} because ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
          ],
        },
        {
          question: 'Find ∛1000.',
          answer: `${gr('∛')}1000 = ${bl('10')}`,
          steps: [
            `We need a number that cubed gives 1000`,
            `${bl('10')} × ${bl('10')} × ${bl('10')} = 1000`,
            `${gr('∛')}1000 = ${bl('10')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining cube numbers and cube roots with visual 3D cube examples and colour coded working" />',

      diagramPlaceholder:
        'Visual diagram showing cube numbers from 1³ to 4³ as growing 3D cubes, with the base number blue, exponent orange and value green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="100" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Cube numbers: n × n × n solids</text>` +
        `<polygon points="10,90 20,90 20,100 10,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="10,90 20,90 24,87 14,87" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="20,90 24,87 24,97 20,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="38,82 56,82 56,100 38,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="38,82 56,82 63,77 45,77" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="56,82 63,77 63,95 56,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="77,74 103,74 103,100 77,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="77,74 103,74 113,67 87,67" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="103,74 113,67 113,93 103,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="127,66 161,66 161,100 127,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="127,66 161,66 174,57 140,57" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="161,66 174,57 174,91 161,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<text x="16" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">1</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=1</tspan></text>` +
        `<text x="49" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">2</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=8</tspan></text>` +
        `<text x="92" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">3</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=27</tspan></text>` +
        `<text x="148" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">4</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=64</tspan></text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EXPONENTIAL NOTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-notation',
      title: 'Exponential Notation',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Exponential notation</strong> is a shorter way of writing repeated multiplication. The ${bl('base')} is the number being multiplied and the ${or('exponent')} tells us how many times to multiply it by itself. Any number to the power of ${or('1')} equals itself. Any number to the power of ${or('0')} equals ${re('1')} (except 0 itself).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('repeated multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final answer')}</span>` +
        `</div>` +

        // ── Key rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('1')} — any number to the power of 1 equals itself: ${bl('n')}${or('¹')} = ${bl('n')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('0')} — any non-zero number to the power of 0 equals ${re('1')}: ${bl('n')}${or('⁰')} = ${re('1')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Base')} to the power of ${or('n')} — expand as ${gr('repeated multiplication')}: ${bl('a')}${or('ⁿ')} = ${gr('a × a × ⋯ × a')} (n times) = ${re('answer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading exponential notation</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('2')}${or('⁵')} is read as "two to the power of five" or "two to the fifth". The ${bl('base')} is always written first and the ${or('exponent')} is always the small raised number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write 3 × 3 × 3 × 3 in exponential notation and calculate the answer.',
          answer: `${bl('3')}${or('⁴')} = ${re('81')}`,
          steps: [
            `There are ${or('4')} threes multiplied together: ${bl('3')}${or('⁴')}`,
            `Calculate: ${gr('3 × 3 × 3 × 3')} = ${re('81')}`,
          ],
        },
        {
          question: 'Calculate 2⁵.',
          answer: `${bl('2')}${or('⁵')} = ${re('32')}`,
          steps: [
            `${gr('2 × 2 × 2 × 2 × 2')} = ${re('32')}`,
          ],
        },
        {
          question: 'Calculate 10⁰.',
          answer: `${bl('10')}${or('⁰')} = ${re('1')}`,
          steps: [
            `Any number to the power of ${or('0')} equals ${re('1')}`,
            `${bl('10')}${or('⁰')} = ${re('1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining exponential notation showing how to expand and evaluate expressions with any base and exponent including the power of 0 and power of 1 rules" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — square a single-digit number ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 9².',
      answer: '81',
      checkMode: 'auto',
      correctAnswer: '81',
      explanation: '9² = 9 × 9 = 81',
    },

    // ── Q2 Easy — find a square root ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find √121.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: '√121 = 11 because 11 × 11 = 121',
    },

    // ── Q3 Medium — identify a non-perfect square ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Is 75 a perfect square? Explain.',
      answer: 'No — 8²=64 and 9²=81, so 75 falls between perfect squares and has no whole number square root.',
      checkMode: 'self',
    },

    // ── Q4 Medium — square then root to show inverse relationship ────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 14² then find its square root.',
      answer: '14²=196. √196=14, confirming the square root undoes the squaring.',
      checkMode: 'self',
    },

    // ── Q5 Easy — cube a single-digit number ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 5³.',
      answer: '125',
      checkMode: 'auto',
      correctAnswer: '125',
      explanation: '5³ = 5 × 5 × 5 = 125',
    },

    // ── Q6 Easy — find a cube root ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find ∛64.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: '∛64 = 4 because 4 × 4 × 4 = 64',
    },

    // ── Q7 Medium — find a larger cube root ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find ∛729.',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: '∛729 = 9 because 9 × 9 × 9 = 729',
    },

    // ── Q8 Hard — spot an error involving cube roots and cube numbers ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho says ∛27=3 and also that 3³=9. Spot his error.',
      answer: 'His cube root is correct but his second statement is wrong — 3³=3×3×3=27, not 9.',
      checkMode: 'self',
    },

    // ── Q9 Easy — write repeated multiplication in exponential notation ───────
    {
      difficulty: 'Easy',
      question: 'Write 4×4×4×4×4 in exponential notation.',
      answer: '4⁵',
      checkMode: 'auto',
      correctAnswer: '4^5',
      correctAnswers: ['4^5', '4⁵'],
      explanation: 'There are 5 fours multiplied together, so the exponential notation is 4⁵.',
    },

    // ── Q10 Easy — apply the zero exponent rule ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 6⁰.',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'Any non-zero number raised to the power of 0 equals 1. So 6⁰ = 1.',
    },

    // ── Q11 Medium — evaluate a power of 2 ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 2⁶.',
      answer: '64',
      checkMode: 'auto',
      correctAnswer: '64',
      explanation: '2⁶ = 2×2×2×2×2×2 = 64',
    },

    // ── Q12 Medium — evaluate and add two exponential expressions ────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 3³ + 4².',
      answer: '43',
      checkMode: 'auto',
      correctAnswer: '43',
      explanation: '3³ = 27 and 4² = 16. 27 + 16 = 43.',
    },

    // ── Q13 Hard — correct a common misconception about squaring ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says 5²=10 because 5×2=10. Is she correct? Explain.',
      answer: 'No — squaring means multiplying a number by itself, so 5²=5×5=25, not 5×2.',
      checkMode: 'self',
    },

    // ── Q14 Hard — evaluate a compound exponent expression and explain ────────
    {
      difficulty: 'Hard',
      question: 'Calculate (2³)² and explain what this means.',
      answer: '2³=8, then 8²=64. This means we first cube 2 then square the result.',
      checkMode: 'self',
    },

    // ── Q15 Hard — evaluate a claim about cube roots with a counter-example ───
    {
      difficulty: 'Hard',
      question: 'Amahle says every number has a whole number cube root. Is she correct? Give an example to support your answer.',
      answer: 'No — for example ∛10 is not a whole number since no whole number cubed gives exactly 10.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered exponents.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 Notation (base/exponent, writing exponential form) |
    // 4-7 Evaluating powers | 8-11 Laws of exponents (multiply/divide same base) |
    // 12-14 Exponents of 0 and 1 | 15-17 Comparing/ordering | 18-20 Word problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'In the expression 6⁴, which number is the base and which is the exponent?', answer: 'Base = 6, exponent = 4', checkMode: 'auto', correctAnswer: 'base6exponent4', correctAnswers: ['base6exponent4', 'base=6exponent=4', '6base4exponent'], explanation: 'The base is the number being multiplied by itself (6), and the exponent is the small raised number showing how many times to multiply it (4).' },
        { difficulty: 'Easy', question: 'Write 8 × 8 × 8 × 8 × 8 using exponential notation.', answer: '8⁵', checkMode: 'auto', correctAnswer: '8^5', correctAnswers: ['8^5', '8⁵'], explanation: 'There are 5 eights multiplied together, so this is written as 8⁵ (base 8, exponent 5).' },
        { difficulty: 'Easy-Medium', question: 'Thabo writes 4 × 4 × 4 as 4 × 3. Explain why this is incorrect and give the correct exponential form.', answer: '4 × 3 means 4 multiplied by 3, not 4 multiplied by itself 3 times. The correct form is 4³.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 7².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '7² = 7 × 7 = 49.' },
        { difficulty: 'Easy', question: 'Calculate 2⁷.', answer: '128', checkMode: 'auto', correctAnswer: '128', explanation: '2⁷ = 2×2×2×2×2×2×2 = 128.' },
        { difficulty: 'Medium', question: 'Calculate 3⁵.', answer: '243', checkMode: 'auto', correctAnswer: '243', explanation: '3⁵ = 3×3×3×3×3 = 243.' },
        { difficulty: 'Medium', question: 'Palesa says 4⁴ = 16 because she calculated 4 × 4. Explain her mistake and give the correct answer.', answer: 'She only multiplied 4 by itself once (which gives 4²), but the exponent is 4, so 4 must be multiplied by itself 4 times: 4⁴ = 4×4×4×4 = 256.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 3⁴ × 3² using the laws of exponents. Leave your answer as a power of 3, then evaluate it.', answer: '3⁶ = 729', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Same base, so add the exponents: 3⁴ × 3² = 3^(4+2) = 3⁶ = 729.' },
        { difficulty: 'Medium', question: 'Simplify 5⁶ ÷ 5² using the laws of exponents. Leave your answer as a power of 5, then evaluate it.', answer: '5⁴ = 625', checkMode: 'auto', correctAnswer: '625', correctAnswers: ['625', '5^4=625', '5⁴=625'], explanation: 'Same base, so subtract the exponents: 5⁶ ÷ 5² = 5^(6−2) = 5⁴ = 625.' },
        { difficulty: 'Medium-Hard', question: 'Kagiso simplifies 2³ × 2⁵ as 2¹⁵, saying "you multiply the exponents." Is he correct? Explain and give the correct simplified answer.', answer: 'No — when multiplying powers with the same base, you add the exponents, not multiply them. 2³ × 2⁵ = 2^(3+5) = 2⁸ = 256, not 2¹⁵.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 4⁵ ÷ 4³ × 4¹, giving your answer as a single power of 4.', answer: '4³', checkMode: 'auto', correctAnswer: '4^3', correctAnswers: ['4^3', '4³', '64'], explanation: 'Work left to right: 4⁵ ÷ 4³ = 4^(5−3) = 4². Then 4² × 4¹ = 4^(2+1) = 4³.' },
        { difficulty: 'Easy', question: 'Calculate 9⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Any non-zero number raised to the power of 0 equals 1, so 9⁰ = 1.' },
        { difficulty: 'Easy', question: 'Calculate 15¹.', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Any number raised to the power of 1 equals itself, so 15¹ = 15.' },
        { difficulty: 'Medium', question: 'Bongani says 0⁰ and 5⁰ must both equal 1 "because anything to the power of 0 is 1, no exceptions." Explain why this reasoning is flawed.', answer: 'The rule that a number to the power of 0 equals 1 applies to non-zero bases only. 0⁰ is a special case that is not simply 1 by the standard rule — the rule n⁰ = 1 requires n ≠ 0.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: 2⁶ or 4³? Show your working.', answer: 'They are equal — both equal 64.', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'theyareequal', 'neither'], explanation: '2⁶ = 64 and 4³ = 64, so the two values are equal.' },
        { difficulty: 'Medium', question: 'Order these from smallest to largest: 3³, 2⁵, 5², separated by commas.', answer: '5², 3³, 2⁵', checkMode: 'auto', correctAnswer: '5²3³2⁵', correctAnswers: ['5²,3³,2⁵', '5^2,3^3,2^5', '25,27,32'], explanation: '3³ = 27, 2⁵ = 32, 5² = 25. Ordering the values smallest to largest: 25, 27, 32 which is 5², 3³, 2⁵.' },
        { difficulty: 'Medium-Hard', question: 'Zinhle claims 10³ is bigger than 3¹⁰ because "10 is a much bigger number than 3." Is she correct? Show the actual values to support your answer.', answer: 'No — 10³ = 1 000 but 3¹⁰ = 59 049, so 3¹⁰ is far bigger. A larger base does not always give a larger result; the exponent matters a lot too.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A square tile pattern has 6 tiles along each side of a square arrangement. How many tiles are there in total? Write your answer using exponential notation and then evaluate it.', answer: '6² = 36 tiles', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '6^2=36', '6²=36'], explanation: 'A square arrangement with 6 tiles per side has 6 × 6 = 6² = 36 tiles in total.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped storage box is built from small cubes, with 5 small cubes fitting along each edge. How many small cubes fill the box? Write your answer using exponential notation and then evaluate it.', answer: '5³ = 125 small cubes', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '5^3=125', '5³=125'], explanation: 'A cube with 5 small cubes along each edge holds 5 × 5 × 5 = 5³ = 125 small cubes.' },
        { difficulty: 'Hard', question: 'A colony of bacteria doubles every hour, starting from 1 bacterium. Write an exponential expression for the number of bacteria after 8 hours, and calculate the total.', answer: '2⁸ = 256 bacteria', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Doubling every hour from 1 bacterium for 8 hours gives 2⁸ = 256 bacteria.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered exponent notation and the laws of exponents.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'In the expression 9³, which number is the base and which is the exponent?', answer: 'Base = 9, exponent = 3', checkMode: 'auto', correctAnswer: 'base9exponent3', correctAnswers: ['base9exponent3', 'base=9exponent=3', '9base3exponent'], explanation: 'The base is the number being multiplied by itself (9), and the exponent is the small raised number showing how many times to multiply it (3).' },
        { difficulty: 'Easy', question: 'Write 5 × 5 × 5 × 5 using exponential notation.', answer: '5⁴', checkMode: 'auto', correctAnswer: '5^4', correctAnswers: ['5^4', '5⁴'], explanation: 'There are 4 fives multiplied together, so this is written as 5⁴ (base 5, exponent 4).' },
        { difficulty: 'Easy-Medium', question: 'Naledi writes 6 × 6 × 6 × 6 as 6 × 4. Explain why this is incorrect and give the correct exponential form.', answer: '6 × 4 means 6 multiplied by 4, not 6 multiplied by itself 4 times. The correct form is 6⁴.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 8².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '8² = 8 × 8 = 64.' },
        { difficulty: 'Easy', question: 'Calculate 4⁴.', answer: '256', checkMode: 'auto', correctAnswer: '256', explanation: '4⁴ = 4×4×4×4 = 256.' },
        { difficulty: 'Medium', question: 'Calculate 6³.', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: '6³ = 6×6×6 = 216.' },
        { difficulty: 'Medium', question: 'Sipho says 3⁵ = 15 because he calculated 3 × 5. Explain his mistake and give the correct answer.', answer: 'He multiplied the base by the exponent instead of multiplying the base by itself 5 times. 3⁵ = 3×3×3×3×3 = 243.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 4² × 4³ using the laws of exponents. Leave your answer as a power of 4, then evaluate it.', answer: '4⁵ = 1 024', checkMode: 'auto', correctAnswer: '1024', correctAnswers: ['1024', '4^5=1024', '4⁵=1024'], explanation: 'Same base, so add the exponents: 4² × 4³ = 4^(2+3) = 4⁵ = 1 024.' },
        { difficulty: 'Medium', question: 'Simplify 6⁷ ÷ 6⁴ using the laws of exponents. Leave your answer as a power of 6, then evaluate it.', answer: '6³ = 216', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '6^3=216', '6³=216'], explanation: 'Same base, so subtract the exponents: 6⁷ ÷ 6⁴ = 6^(7−4) = 6³ = 216.' },
        { difficulty: 'Medium-Hard', question: 'Amahle simplifies 5³ × 5³ as 5⁹, saying "you add the two base numbers as an exponent." Is she correct? Explain and give the correct simplified answer.', answer: 'No — you add the exponents (3 and 3), not create a new exponent from something else. 5³ × 5³ = 5^(3+3) = 5⁶ = 15 625, not 5⁹.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 8⁴ ÷ 8² × 8¹, giving your answer as a single power of 8.', answer: '8³', checkMode: 'auto', correctAnswer: '8^3', correctAnswers: ['8^3', '8³', '512'], explanation: 'Work left to right: 8⁴ ÷ 8² = 8^(4−2) = 8². Then 8² × 8¹ = 8^(2+1) = 8³.' },
        { difficulty: 'Easy', question: 'Calculate 12⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Any non-zero number raised to the power of 0 equals 1, so 12⁰ = 1.' },
        { difficulty: 'Easy', question: 'Calculate 23¹.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Any number raised to the power of 1 equals itself, so 23¹ = 23.' },
        { difficulty: 'Medium', question: 'Lerato says n⁰ always equals 1 for every number n, including n = 0. Explain why this reasoning is flawed.', answer: 'The rule n⁰ = 1 only applies when n is not zero. 0⁰ is a special case and is not automatically equal to 1 like other numbers to the power of 0.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: 3⁴ or 9²? Show your working.', answer: 'They are equal — both equal 81.', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'theyareequal', 'neither'], explanation: '3⁴ = 81 and 9² = 81, so the two values are equal.' },
        { difficulty: 'Medium', question: 'Order these from smallest to largest: 4³, 2⁶, 8², separated by commas.', answer: '4³, 8², 2⁶', checkMode: 'auto', correctAnswer: '4³8²2⁶', correctAnswers: ['4³,8²,2⁶', '4^3,8^2,2^6', '64,64,64'], explanation: '4³ = 64, 2⁶ = 64, 8² = 64. All three values are equal, so any order listing them is acceptable, e.g. 4³, 8², 2⁶.' },
        { difficulty: 'Medium-Hard', question: 'Sibusiso claims 5⁴ is bigger than 4⁵ because "5 is a bigger base than 4." Is he correct? Show the actual values to support your answer.', answer: 'No — 5⁴ = 625 but 4⁵ = 1 024, so 4⁵ is bigger. A larger base does not always give a larger result; the exponent matters a lot too.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A square garden bed has 7 plants growing along each side of a square arrangement. How many plants are there in total? Write your answer using exponential notation and then evaluate it.', answer: '7² = 49 plants', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '7^2=49', '7²=49'], explanation: 'A square arrangement with 7 plants per side has 7 × 7 = 7² = 49 plants in total.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped display of boxes is stacked so that 4 boxes fit along each edge of the cube. How many boxes make up the display? Write your answer using exponential notation and then evaluate it.', answer: '4³ = 64 boxes', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '4^3=64', '4³=64'], explanation: 'A cube with 4 boxes along each edge holds 4 × 4 × 4 = 4³ = 64 boxes.' },
        { difficulty: 'Hard', question: 'A social media post is shared by 3 people, and each of those people shares it with 3 new people, and this pattern continues. Write an exponential expression for the number of new people who see the post after 6 rounds of sharing, and calculate the total.', answer: '3⁶ = 729 people', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Tripling at each of 6 rounds starting from 1 gives 3⁶ = 729 people.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered exponent notation and the laws of exponents.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1/2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'In the expression 11³, which number is the base and which is the exponent?', answer: 'Base = 11, exponent = 3', checkMode: 'auto', correctAnswer: 'base11exponent3', correctAnswers: ['base11exponent3', 'base=11exponent=3', '11base3exponent'], explanation: 'The base is the number being multiplied by itself (11), and the exponent is the small raised number showing how many times to multiply it (3).' },
        { difficulty: 'Easy', question: 'Write 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 using exponential notation.', answer: '2⁸', checkMode: 'auto', correctAnswer: '2^8', correctAnswers: ['2^8', '2⁸'], explanation: 'There are 8 twos multiplied together, so this is written as 2⁸ (base 2, exponent 8).' },
        { difficulty: 'Easy-Medium', question: 'Mpho writes 9 × 9 × 9 as 9 × 3. Explain why this is incorrect and give the correct exponential form.', answer: '9 × 3 means 9 multiplied by 3, not 9 multiplied by itself 3 times. The correct form is 9³.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Calculate 6².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '6² = 6 × 6 = 36.' },
        { difficulty: 'Easy', question: 'Calculate 3⁴.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: '3⁴ = 3×3×3×3 = 81.' },
        { difficulty: 'Medium', question: 'Calculate 2⁸.', answer: '256', checkMode: 'auto', correctAnswer: '256', explanation: '2⁸ = 2×2×2×2×2×2×2×2 = 256.' },
        { difficulty: 'Medium', question: 'Ayanda says 2⁵ = 10 because she calculated 2 × 5. Explain her mistake and give the correct answer.', answer: 'She multiplied the base by the exponent instead of multiplying the base by itself 5 times. 2⁵ = 2×2×2×2×2 = 32.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Simplify 2³ × 2⁵ using the laws of exponents. Leave your answer as a power of 2, then evaluate it.', answer: '2⁸ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Same base, so add the exponents: 2³ × 2⁵ = 2^(3+5) = 2⁸ = 256.' },
        { difficulty: 'Medium', question: 'Simplify 9⁵ ÷ 9³ using the laws of exponents. Leave your answer as a power of 9, then evaluate it.', answer: '9² = 81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'Same base, so subtract the exponents: 9⁵ ÷ 9³ = 9^(5−3) = 9² = 81.' },
        { difficulty: 'Medium-Hard', question: 'Thandeka simplifies 7⁵ ÷ 7³ as 7^(5×3), saying "division means you multiply the exponents." Is she correct? Explain and give the correct simplified answer.', answer: 'No — when dividing powers with the same base, you subtract the exponents, not multiply them. 7⁵ ÷ 7³ = 7^(5−3) = 7² = 49, not 7^(5×3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Simplify 11³ ÷ 11¹ × 11², giving your answer as a single power of 11.', answer: '11⁴', checkMode: 'auto', correctAnswer: '11^4', correctAnswers: ['11^4', '11⁴', '14641'], explanation: 'Work left to right: 11³ ÷ 11¹ = 11^(3−1) = 11². Then 11² × 11² = 11^(2+2) = 11⁴.' },
        { difficulty: 'Easy', question: 'Calculate 20⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Any non-zero number raised to the power of 0 equals 1, so 20⁰ = 1.' },
        { difficulty: 'Easy', question: 'Calculate 37¹.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Any number raised to the power of 1 equals itself, so 37¹ = 37.' },
        { difficulty: 'Medium', question: 'Karabo says 8⁰ must equal 8 because "raising to a power just gives back the base when nothing else is happening." Explain why this reasoning is flawed.', answer: 'Raising to the power of 0 does not give back the base — it always equals 1 (for a non-zero base), because it represents multiplying by the base zero times. 8⁰ = 1, not 8.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is greater: 4³ or 2⁶? Show your working.', answer: 'They are equal — both equal 64.', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'theyareequal', 'neither'], explanation: '4³ = 64 and 2⁶ = 64, so the two values are equal.' },
        { difficulty: 'Medium', question: 'Order these from smallest to largest: 2⁴, 3³, 5², separated by commas.', answer: '5², 2⁴, 3³', checkMode: 'auto', correctAnswer: '5²2⁴3³', correctAnswers: ['5²,2⁴,3³', '5^2,2^4,3^3', '25,16,27'], explanation: '2⁴ = 16, 3³ = 27, 5² = 25. Ordering the values smallest to largest: 16, 25, 27 which is 2⁴, 5², 3³.' },
        { difficulty: 'Medium-Hard', question: 'Nomvula claims 6³ is bigger than 3⁶ because "6 is a much bigger base than 3." Is she correct? Show the actual values to support your answer.', answer: 'No — 6³ = 216 but 3⁶ = 729, so 3⁶ is far bigger. A larger base does not always give a larger result; the exponent matters a lot too.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A square patio has 9 tiles laid along each side of a square arrangement. How many tiles are there in total? Write your answer using exponential notation and then evaluate it.', answer: '9² = 81 tiles', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'A square arrangement with 9 tiles per side has 9 × 9 = 9² = 81 tiles in total.' },
        { difficulty: 'Medium-Hard', question: 'A cube-shaped gift box is packed with small cubes, with 6 small cubes fitting along each edge. How many small cubes fill the box? Write your answer using exponential notation and then evaluate it.', answer: '6³ = 216 small cubes', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '6^3=216', '6³=216'], explanation: 'A cube with 6 small cubes along each edge holds 6 × 6 × 6 = 6³ = 216 small cubes.' },
        { difficulty: 'Hard', question: 'A chain message is sent to 2 people, and each of those people forwards it to 2 new people, and this pattern continues. Write an exponential expression for the number of new people who receive the message after 10 rounds of forwarding, and calculate the total.', answer: '2¹⁰ = 1 024 people', checkMode: 'auto', correctAnswer: '1024', correctAnswers: ['1024', '2^10=1024', '2¹⁰=1024'], explanation: 'Doubling at each of 10 rounds starting from 1 gives 2¹⁰ = 1 024 people.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered exponent notation and the laws of exponents.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
