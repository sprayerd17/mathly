import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (fraction roles) ─────────────────────────────────────────
// subject            → Mathematics
// numerator          → blue   (#2563eb)
// denominator        → red    (#dc2626)
// HCF                → orange (#ea580c)
// simplified fraction→ green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

// ─── Shared "Looking ahead" enrichment banner ─────────────────────────────
// The CAPS phase-overview table lists "Fractions of whole numbers" as
// Grade 6 calculations-with-fractions content (Grade 5 covers "fractions
// of whole numbers which result in whole numbers"). Multiplying a fraction
// by a whole number, or finding a fraction of a whole number, is therefore
// correctly scoped to Grade 6. Multiplying a fraction by a fraction
// (e.g. 2/3 x 3/4) never appears anywhere in the Grade 4-6 CAPS document —
// it is Senior Phase (Grade 7+) content. Kept here as clearly labelled
// enrichment rather than removed, since the material is accurate and
// well-built.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Looking ahead: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — EQUIVALENT FRACTIONS AND SIMPLIFYING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions-simplifying',
      title: 'Equivalent Fractions and Simplifying',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Equivalent fractions are fractions that <strong>look different but have the same value</strong>. We make equivalent fractions by multiplying or dividing both the numerator and denominator by the same number. To simplify a fraction we divide both the numerator and denominator by their <strong>Highest Common Factor</strong> until no common factor remains except 1. A fraction in its simplest form is called a fraction in <strong>lowest terms</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('HCF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified fraction')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Numerator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The top number of a fraction — how many equal parts we have.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Denominator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The bottom number of a fraction — how many equal parts the whole is divided into.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">HCF (Highest Common Factor)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest factor shared by two numbers — we divide by this to simplify in one step.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Lowest terms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fraction is in lowest terms when the only common factor of the numerator and denominator is 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Making equivalent fractions ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Making equivalent fractions</p>` +
        `<p style="margin-bottom:12px;">Multiply <strong>or</strong> divide both the ${bl('numerator')} and the ${re('denominator')} by the <strong>same number</strong>. The value of the fraction does not change because you are multiplying by a form of 1.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Original</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('2')}/${re('3')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×2 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 2</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('4')}/${re('6')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×3 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 3</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('6')}/${re('9')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×4 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 4</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('8')}/${re('12')}</p>` +
        `</div>` +
        `</div>` +

        // ── Simplifying tip box ──────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simplifying: always divide by the HCF</p>` +
        `<p style="margin:0;color:#1e3a8a;">Find the ${or('HCF')} of the ${bl('numerator')} and ${re('denominator')}. Divide both by the ${or('HCF')} and you reach the ${gr('simplified fraction')} in one step — no need to simplify repeatedly by smaller factors.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Write three equivalent fractions for 2/3 ──────────────
        {
          question: 'Write three fractions equivalent to 2/3.',
          answer: `${bl('2')}/${re('3')} = ${bl('4')}/${re('6')} = ${bl('6')}/${re('9')} = ${bl('8')}/${re('12')}`,
          steps: [
            `Multiply both the ${bl('numerator')} and ${re('denominator')} by 2: ${bl('2')} × 2 = ${bl('4')}, ${re('3')} × 2 = ${re('6')}. First equivalent fraction: ${bl('4')}/${re('6')}.`,
            `Multiply both by 3: ${bl('2')} × 3 = ${bl('6')}, ${re('3')} × 3 = ${re('9')}. Second equivalent fraction: ${bl('6')}/${re('9')}.`,
            `Multiply both by 4: ${bl('2')} × 4 = ${bl('8')}, ${re('3')} × 4 = ${re('12')}. Third equivalent fraction: ${bl('8')}/${re('12')}.`,
            `The fractions ${bl('2')}/${re('3')}, ${bl('4')}/${re('6')}, ${bl('6')}/${re('9')} and ${bl('8')}/${re('12')} are all equivalent. ✓`,
          ],
        },
        // ── Example 2: Simplify 36/48 ────────────────────────────────────────
        {
          question: 'Simplify 36/48.',
          answer: `${bl('36')}/${re('48')} simplified = ${gr('3')}/${gr('4')}`,
          steps: [
            `Find the ${or('HCF')} of ${bl('36')} and ${re('48')}. List the factors of each number.`,
            `Factors of ${bl('36')}: 1, 2, 3, 4, 6, 9, 12, 18, 36.`,
            `Factors of ${re('48')}: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.`,
            `${or('HCF')} = ${or('12')} (the largest factor that appears in both lists).`,
            `Divide both by ${or('12')}: ${bl('36')} ÷ ${or('12')} = ${bl('3')}, ${re('48')} ÷ ${or('12')} = ${re('4')}.`,
            `Simplified fraction = ${gr('3')}/${gr('4')}. ✓`,
          ],
        },
        // ── Example 3: Sipho says 15/25 simplified is 3/5. Is he correct? ────
        {
          question: 'Sipho says 15/25 simplified is 3/5. Is he correct?',
          answer: `Yes, Sipho is correct — ${bl('15')}/${re('25')} = ${gr('3')}/${gr('5')}`,
          steps: [
            `Find the ${or('HCF')} of ${bl('15')} and ${re('25')}. List the factors of each number.`,
            `Factors of ${bl('15')}: 1, 3, 5, 15.`,
            `Factors of ${re('25')}: 1, 5, 25.`,
            `${or('HCF')} = ${or('5')} (the largest shared factor).`,
            `Divide both by ${or('5')}: ${bl('15')} ÷ ${or('5')} = ${bl('3')}, ${re('25')} ÷ ${or('5')} = ${re('5')}.`,
            `Simplified fraction = ${gr('3')}/${gr('5')}. Yes, Sipho is correct. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Three fraction strips of equal length showing 2/3, 4/6 and 8/12 with equal shaded portions, proving the fractions are equivalent',
      diagramSvg: '<svg viewBox="0 0 230 160" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="120" height="25" fill="#93c5fd"/><rect x="15" y="20" width="180" height="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="20" x2="75" y2="45" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="20" x2="135" y2="45" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="37" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">2/3</text><rect x="15" y="60" width="120" height="25" fill="#93c5fd"/><rect x="15" y="60" width="180" height="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="60" x2="45" y2="85" stroke="#0f1f3d" stroke-width="1"/><line x1="75" y1="60" x2="75" y2="85" stroke="#0f1f3d" stroke-width="1"/><line x1="105" y1="60" x2="105" y2="85" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="60" x2="135" y2="85" stroke="#0f1f3d" stroke-width="1"/><line x1="165" y1="60" x2="165" y2="85" stroke="#0f1f3d" stroke-width="1"/><text x="205" y="77" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">4/6</text><rect x="15" y="100" width="120" height="25" fill="#93c5fd"/><rect x="15" y="100" width="180" height="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="100" x2="30" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="45" y1="100" x2="45" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="60" y1="100" x2="60" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="75" y1="100" x2="75" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="90" y1="100" x2="90" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="105" y1="100" x2="105" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="120" y1="100" x2="120" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="135" y1="100" x2="135" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="150" y1="100" x2="150" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="165" y1="100" x2="165" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><line x1="180" y1="100" x2="180" y2="125" stroke="#0f1f3d" stroke-width="0.75"/><text x="205" y="117" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">8/12</text><text x="115" y="150" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">Same shaded length = equal fractions</text></svg>',

      videoPlaceholder:
        'Short video showing how to generate equivalent fractions by multiplying and how to simplify a fraction to lowest terms using the Highest Common Factor',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPARING AND ORDERING FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions',
      title: 'Comparing and Ordering Fractions',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">To compare fractions we need a <strong>common denominator</strong>. The common denominator is the <strong>LCM</strong> of the denominators. Once fractions have the same denominator we compare the numerators — the larger numerator means the larger fraction. To order fractions we convert them all to equivalent fractions with the same denominator and then arrange the numerators. We can also convert fractions to decimals to compare them.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('converted fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Common Denominator</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A shared ${re('denominator')} for two or more fractions. We need one before we can compare numerators fairly.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">LCM (Lowest Common Multiple)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest number that is a multiple of all the ${re('denominators')}. This becomes the ${or('common denominator')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equivalent Conversion</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Multiply the numerator and denominator by the same number so the fraction keeps its value but now has the ${or('LCM')} as its ${re('denominator')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Comparing numerators</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Once all fractions share the same ${re('denominator')}, the fraction with the larger numerator is the ${gr('greater fraction')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Step-by-step method ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: comparing and ordering fractions</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the ${or('LCM')}</strong> of all the ${re('denominators')} — this is your common denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Convert</strong> each fraction to an ${bl('equivalent fraction')} with the ${or('LCM')} as its ${re('denominator')}. Multiply the top and bottom by the same number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Compare the numerators</strong> and write your ${gr('answer')} using the original fractions.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Quick tip: decimal method</p>` +
        `<p style="margin:0;color:#1e3a8a;">You can also compare fractions by dividing the numerator by the ${re('denominator')} to get a decimal. The fraction with the larger decimal value is the greater fraction. This is useful for a quick check but always show the ${or('LCM')} method in your working.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: Which is greater — 3/4 or 5/7? ────────────────────────
        {
          question: 'Which is greater — 3/4 or 5/7?',
          answer: `${gr('3/4 > 5/7')}`,
          steps: [
            `Find the ${or('LCM')} of ${re('4')} and ${re('7')}. Since 4 and 7 share no common factors, ${or('LCM')} = ${or('4 × 7')} = ${or('28')}.`,
            `Convert ${bl('3/4')}: multiply top and bottom by 7 → ${bl('3 × 7')} / ${re('4 × 7')} = ${bl('21')}/${bl('28')}.`,
            `Convert ${bl('5/7')}: multiply top and bottom by 4 → ${bl('5 × 4')} / ${re('7 × 4')} = ${bl('20')}/${bl('28')}.`,
            `Compare the numerators: ${bl('21')} > ${bl('20')}, so ${bl('21/28')} > ${bl('20/28')}.`,
            `<strong>${gr('Answer:')} 3/4 > 5/7</strong> ✓`,
          ],
        },
        // ── Example 5: Order fractions from smallest to biggest ───────────────
        {
          question: 'Order these fractions from smallest to biggest — 2/3, 3/4, 5/6, 1/2.',
          answer: `${gr('1/2 < 2/3 < 3/4 < 5/6')}`,
          steps: [
            `Find the ${or('LCM')} of ${re('3')}, ${re('4')}, ${re('6')} and ${re('2')}. Multiples of 6: 6, 12, 18 … ${or('LCM')} = ${or('12')}.`,
            `Convert each fraction to an equivalent fraction with ${re('denominator')} ${re('12')}:`,
            `${bl('2/3')} = ${bl('2 × 4')} / ${re('3 × 4')} = ${bl('8/12')}. &nbsp; ${bl('3/4')} = ${bl('3 × 3')} / ${re('4 × 3')} = ${bl('9/12')}. &nbsp; ${bl('5/6')} = ${bl('5 × 2')} / ${re('6 × 2')} = ${bl('10/12')}. &nbsp; ${bl('1/2')} = ${bl('1 × 6')} / ${re('2 × 6')} = ${bl('6/12')}.`,
            `Order the numerators from smallest to biggest: 6, 8, 9, 10.`,
            `<strong>${gr('Answer:')} 1/2 &lt; 2/3 &lt; 3/4 &lt; 5/6</strong> ✓`,
          ],
        },
        // ── Example 6: Lerato and Amahle pizza ───────────────────────────────
        {
          question: 'Lerato ate 2/5 of a pizza and Amahle ate 3/8. Who ate more?',
          answer: `${gr('Lerato ate more')}`,
          steps: [
            `Find the ${or('LCM')} of ${re('5')} and ${re('8')}. Since 5 and 8 share no common factors, ${or('LCM')} = ${or('5 × 8')} = ${or('40')}.`,
            `Convert ${bl('2/5')}: multiply top and bottom by 8 → ${bl('2 × 8')} / ${re('5 × 8')} = ${bl('16/40')}.`,
            `Convert ${bl('3/8')}: multiply top and bottom by 5 → ${bl('3 × 5')} / ${re('8 × 5')} = ${bl('15/40')}.`,
            `Compare: ${bl('16/40')} > ${bl('15/40')}, so 2/5 > 3/8.`,
            `<strong>${gr('Answer:')} Lerato ate more.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Number line from 0 to 1 showing 1/2, 2/3, 3/4 and 5/6 plotted in order with their equivalent twelfths shown below each fraction',
      diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="60" x2="200" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="54" x2="20" y2="66" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="54" x2="200" y2="66" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="80" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">0</text><text x="200" y="80" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">1</text><circle cx="110" cy="60" r="4.5" fill="#2563eb"/><text x="110" y="40" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">1/2</text><text x="110" y="100" font-size="10" text-anchor="middle" fill="#374151">6/12</text><circle cx="140" cy="60" r="4.5" fill="#dc2626"/><text x="140" y="40" font-weight="700" font-size="12" text-anchor="middle" fill="#dc2626">2/3</text><text x="140" y="100" font-size="10" text-anchor="middle" fill="#374151">8/12</text><circle cx="155" cy="60" r="4.5" fill="#ea580c"/><text x="155" y="24" font-weight="700" font-size="12" text-anchor="middle" fill="#ea580c">3/4</text><text x="155" y="114" font-size="10" text-anchor="middle" fill="#374151">9/12</text><circle cx="170" cy="60" r="4.5" fill="#16a34a"/><text x="170" y="40" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">5/6</text><text x="170" y="100" font-size="10" text-anchor="middle" fill="#374151">10/12</text></svg>',

      videoPlaceholder:
        'Short video showing how to compare and order fractions by finding the LCM of the denominators and converting to equivalent fractions',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING AND SUBTRACTING FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-fractions',
      title: 'Adding and Subtracting Fractions',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">To add or subtract fractions we need a <strong>common denominator</strong>. Find the <strong>LCM</strong> of the denominators and convert each fraction to an equivalent fraction with that denominator. Then add or subtract the numerators and keep the denominator the same. If the answer is an improper fraction convert it to a mixed number. Always simplify your answer if possible.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCM')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('converted fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('numerator calculation')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('final answer')}</span>` +
        `</div>` +

        // ── Method steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: adding and subtracting fractions</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the ${or('LCM')}</strong> of the denominators — this becomes your common denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Convert</strong> each fraction to an ${bl('equivalent fraction')} with the ${or('LCM')} as denominator. Multiply the numerator and denominator by the same number.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Add or subtract the numerators')}</strong> — keep the denominator the same. Do not add the denominators.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Write your final answer')}</strong>. If it is an improper fraction, convert it to a mixed number. Always simplify if possible.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Improper fractions and mixed numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">If your answer has a numerator larger than the denominator it is an <strong>improper fraction</strong>. Divide the numerator by the denominator: the quotient is the whole number part and the remainder over the denominator is the fraction part. For example: 19/12 = 1 remainder 7 → <strong>1 and 7/12</strong>.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Calculate 1/4 + 2/3 ───────────────────────────────────
        {
          question: 'Calculate 1/4 + 2/3.',
          answer: `${re('1/4 + 2/3 = 11/12')}`,
          steps: [
            `Find the ${or('LCM')} of ${or('4')} and ${or('3')}. The ${or('LCM')} = ${or('12')}.`,
            `Convert ${bl('1/4')}: multiply top and bottom by 3 → ${bl('1 × 3')}/${bl('4 × 3')} = ${bl('3/12')}.`,
            `Convert ${bl('2/3')}: multiply top and bottom by 4 → ${bl('2 × 4')}/${bl('3 × 4')} = ${bl('8/12')}.`,
            `${gr('Add the numerators:')} ${gr('3 + 8')} = ${gr('11')}. Keep the denominator: ${gr('11')}/12.`,
            `<strong>${re('Answer:')} ${re('11/12')}</strong> (already in simplest form) ✓`,
          ],
        },
        // ── Example 8: Calculate 5/6 − 1/4 ───────────────────────────────────
        {
          question: 'Calculate 5/6 − 1/4.',
          answer: `${re('5/6 − 1/4 = 7/12')}`,
          steps: [
            `Find the ${or('LCM')} of ${or('6')} and ${or('4')}. Multiples of 6: 6, 12 … Multiples of 4: 4, 8, 12 … ${or('LCM')} = ${or('12')}.`,
            `Convert ${bl('5/6')}: multiply top and bottom by 2 → ${bl('5 × 2')}/${bl('6 × 2')} = ${bl('10/12')}.`,
            `Convert ${bl('1/4')}: multiply top and bottom by 3 → ${bl('1 × 3')}/${bl('4 × 3')} = ${bl('3/12')}.`,
            `${gr('Subtract the numerators:')} ${gr('10 − 3')} = ${gr('7')}. Keep the denominator: ${gr('7')}/12.`,
            `<strong>${re('Answer:')} ${re('7/12')}</strong> (already in simplest form) ✓`,
          ],
        },
        // ── Example 9: Calculate 3/4 + 5/6 ───────────────────────────────────
        {
          question: 'Calculate 3/4 + 5/6.',
          answer: `${re('3/4 + 5/6 = 19/12 = 1 and 7/12')}`,
          steps: [
            `Find the ${or('LCM')} of ${or('4')} and ${or('6')}. Multiples of 4: 4, 8, 12 … Multiples of 6: 6, 12 … ${or('LCM')} = ${or('12')}.`,
            `Convert ${bl('3/4')}: multiply top and bottom by 3 → ${bl('3 × 3')}/${bl('4 × 3')} = ${bl('9/12')}.`,
            `Convert ${bl('5/6')}: multiply top and bottom by 2 → ${bl('5 × 2')}/${bl('6 × 2')} = ${bl('10/12')}.`,
            `${gr('Add the numerators:')} ${gr('9 + 10')} = ${gr('19')}. Keep the denominator: ${gr('19')}/12.`,
            `19/12 is an improper fraction. Convert to a mixed number: 19 ÷ 12 = 1 remainder 7. So 19/12 = 1 and 7/12.`,
            `<strong>${re('Answer:')} ${re('1 and 7/12')}</strong> ✓`,
          ],
        },
        // ── Example 10: Sipho's water bottles ────────────────────────────────
        {
          question: 'Sipho drinks 2/3 of a bottle of water in the morning and 3/8 of a bottle in the afternoon. How much does he drink in total?',
          answer: `${re('Sipho drinks 1 and 1/24 bottles of water in total')}`,
          steps: [
            `Find the ${or('LCM')} of ${or('3')} and ${or('8')}. Since 3 and 8 share no common factors, ${or('LCM')} = ${or('3 × 8')} = ${or('24')}.`,
            `Convert ${bl('2/3')}: multiply top and bottom by 8 → ${bl('2 × 8')}/${bl('3 × 8')} = ${bl('16/24')}.`,
            `Convert ${bl('3/8')}: multiply top and bottom by 3 → ${bl('3 × 3')}/${bl('8 × 3')} = ${bl('9/24')}.`,
            `${gr('Add the numerators:')} ${gr('16 + 9')} = ${gr('25')}. Keep the denominator: ${gr('25')}/24.`,
            `25/24 is an improper fraction. Convert: 25 ÷ 24 = 1 remainder 1. So 25/24 = 1 and 1/24.`,
            `<strong>${re('Answer:')} Sipho drinks ${re('1 and 1/24')} bottles of water in total.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Fraction bars showing 1/4 and 2/3 both converted to twelfths and combined to give 11/12',
      diagramSvg: '<svg viewBox="0 0 230 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="12" width="45" height="22" fill="#93c5fd"/><rect x="15" y="12" width="180" height="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="12" x2="30" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="45" y1="12" x2="45" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="60" y1="12" x2="60" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="75" y1="12" x2="75" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="90" y1="12" x2="90" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="105" y1="12" x2="105" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="120" y1="12" x2="120" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="135" y1="12" x2="135" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="150" y1="12" x2="150" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="165" y1="12" x2="165" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><line x1="180" y1="12" x2="180" y2="34" stroke="#0f1f3d" stroke-width="0.75"/><text x="207" y="27" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">1/4</text><text x="105" y="49" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">+</text><rect x="15" y="54" width="120" height="22" fill="#fdba74"/><rect x="15" y="54" width="180" height="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="54" x2="30" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="45" y1="54" x2="45" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="60" y1="54" x2="60" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="75" y1="54" x2="75" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="90" y1="54" x2="90" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="105" y1="54" x2="105" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="120" y1="54" x2="120" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="135" y1="54" x2="135" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="150" y1="54" x2="150" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="165" y1="54" x2="165" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><line x1="180" y1="54" x2="180" y2="76" stroke="#0f1f3d" stroke-width="0.75"/><text x="207" y="69" font-weight="700" font-size="12" text-anchor="middle" fill="#ea580c">2/3</text><text x="105" y="91" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">=</text><rect x="15" y="96" width="165" height="22" fill="#86efac"/><rect x="15" y="96" width="180" height="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="96" x2="30" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="45" y1="96" x2="45" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="60" y1="96" x2="60" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="75" y1="96" x2="75" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="90" y1="96" x2="90" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="105" y1="96" x2="105" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="120" y1="96" x2="120" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="135" y1="96" x2="135" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="150" y1="96" x2="150" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="165" y1="96" x2="165" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><line x1="180" y1="96" x2="180" y2="118" stroke="#0f1f3d" stroke-width="0.75"/><text x="207" y="111" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">11/12</text><text x="115" y="138" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">1/4 + 2/3 = 3/12 + 8/12 = 11/12</text></svg>',

      videoPlaceholder:
        'Short video showing step by step how to add and subtract fractions by finding the LCM converting to equivalent fractions and adding or subtracting numerators',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MIXED NUMBERS AND IMPROPER FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Mixed Numbers and Improper Fractions',
      icon: '⅔',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>mixed number</strong> has a ${bl('whole number')} part and a fraction part — for example ${bl('2')} and ${or('3')}/${re('4')}. An <strong>improper fraction</strong> has a ${or('numerator')} larger than the ${re('denominator')} — for example ${gr('11')}/${re('4')}. To convert a mixed number to an improper fraction multiply the ${bl('whole number')} by the ${re('denominator')} and add the ${or('numerator')} — keep the same ${re('denominator')}. To convert an improper fraction to a mixed number divide the ${or('numerator')} by the ${re('denominator')} — the quotient is the ${bl('whole number')} and the remainder is the new ${or('numerator')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('whole number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('improper fraction')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mixed Number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number with a ${bl('whole number')} part and a fraction part — for example ${bl('2')} and ${or('3')}/${re('4')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Improper Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fraction where the ${or('numerator')} is greater than or equal to the ${re('denominator')} — for example ${gr('11')}/${re('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: mixed number → improper fraction ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: mixed number → improper fraction</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Multiply</strong> the ${bl('whole number')} by the ${re('denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add</strong> the ${or('numerator')} to that product.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Keep</strong> the same ${re('denominator')} — this is the ${re('denominator')} of the ${gr('improper fraction')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: improper fraction → mixed number ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: improper fraction → mixed number</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Divide</strong> the ${or('numerator')} by the ${re('denominator')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">The <strong>quotient</strong> is the ${bl('whole number')} part.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The <strong>remainder</strong> becomes the new ${or('numerator')} — keep the same ${re('denominator')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Adding mixed numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">When adding or subtracting mixed numbers, convert them to ${gr('improper fractions')} first, find a common ${re('denominator')}, add or subtract the ${or('numerators')}, then convert the result back to a mixed number.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 11: Convert 3 and 2/5 to an improper fraction ────────────
        {
          question: 'Convert 3 and 2/5 to an improper fraction.',
          answer: `${bl('3')} and ${or('2')}/${re('5')} = ${gr('17')}/${re('5')}`,
          steps: [
            `Multiply the ${bl('whole number')} by the ${re('denominator')}: ${bl('3')} × ${re('5')} = ${bl('15')}.`,
            `Add the ${or('numerator')}: ${bl('15')} + ${or('2')} = ${gr('17')}.`,
            `Keep the same ${re('denominator')}: ${re('5')}.`,
            `<strong>Answer: ${gr('17')}/${re('5')}</strong> ✓`,
          ],
        },

        // ── Example 12: Convert 23/6 to a mixed number ───────────────────────
        {
          question: 'Convert 23/6 to a mixed number.',
          answer: `${gr('23')}/${re('6')} = ${bl('3')} and ${or('5')}/${re('6')}`,
          steps: [
            `Divide ${or('23')} by ${re('6')}.`,
            `${re('6')} goes into ${or('23')} three times: ${bl('3')} × ${re('6')} = 18.`,
            `Remainder: ${or('23')} − 18 = ${or('5')}.`,
            `<strong>Answer: ${bl('3')} and ${or('5')}/${re('6')}</strong> ✓`,
          ],
        },

        // ── Example 13: Calculate 2 and 1/3 + 1 and 3/4 ─────────────────────
        {
          question: 'Calculate 2 and 1/3 + 1 and 3/4.',
          answer: `${bl('2')} and ${or('1')}/${re('3')} + ${bl('1')} and ${or('3')}/${re('4')} = ${bl('4')} and ${or('1')}/${re('12')}`,
          steps: [
            `Convert to ${gr('improper fractions')}: ${bl('2')} and ${or('1')}/${re('3')} = (${bl('2')} × ${re('3')} + ${or('1')})/${re('3')} = ${gr('7')}/${re('3')}. &nbsp; ${bl('1')} and ${or('3')}/${re('4')} = (${bl('1')} × ${re('4')} + ${or('3')})/${re('4')} = ${gr('7')}/${re('4')}.`,
            `LCM of ${re('3')} and ${re('4')} = ${re('12')}.`,
            `${gr('7')}/${re('3')} = ${or('28')}/${re('12')}. &nbsp; ${gr('7')}/${re('4')} = ${or('21')}/${re('12')}.`,
            `Add: ${or('28')} + ${or('21')} = ${or('49')}. &nbsp; Result: ${gr('49')}/${re('12')}.`,
            `Convert back: ${or('49')} ÷ ${re('12')} = ${bl('4')} remainder ${or('1')}.`,
            `<strong>Answer: ${bl('4')} and ${or('1')}/${re('12')}</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — mixed number to improper fraction ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 2 and 3/4 to an improper fraction.',
          answer: '11/4',
          checkMode: 'auto',
          correctAnswer: '11/4',
          explanation: 'Step 1: Multiply the whole number by the denominator: 2 × 4 = 8.\nStep 2: Add the numerator: 8 + 3 = 11.\nStep 3: Keep the same denominator: 4.\nAnswer: 11/4 ✓',
        },

        // ── Q2 Medium — convert both directions ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert 17/5 to a mixed number',
              correctAnswer: '3 and 2/5',
              correctAnswers: ['3 and 2/5', '3 2/5'],
              explanation: 'Divide 17 by 5: 5 goes into 17 three times (3 × 5 = 15). Remainder: 17 − 15 = 2.\nAnswer: 3 and 2/5 ✓',
            },
            {
              label: 'b) Convert 3 and 5/6 to an improper fraction',
              correctAnswer: '23/6',
              explanation: 'Multiply: 3 × 6 = 18. Add numerator: 18 + 5 = 23. Keep denominator: 6.\nAnswer: 23/6 ✓',
            },
          ],
        },

        // ── Q3 Hard — add mixed numbers ──────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 3 and 1/2 + 2 and 2/3. Write your answer as a mixed number.',
          answer: '6 and 1/6',
          checkMode: 'auto',
          correctAnswer: '6 and 1/6',
          correctAnswers: ['6 and 1/6', '6 1/6'],
          explanation: 'Convert: 3 and 1/2 = 7/2. 2 and 2/3 = 8/3.\nLCM of 2 and 3 = 6.\n7/2 = 21/6. 8/3 = 16/6.\nAdd: 21 + 16 = 37/6.\nConvert back: 37 ÷ 6 = 6 remainder 1.\nAnswer: 6 and 1/6 ✓',
        },
      ],

      diagramPlaceholder: 'Three whole bars split into fifths plus a partial bar with 2 fifths shaded, showing that 3 and 2/5 equals 17/5',
      diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="35" height="90" fill="#93c5fd"/><rect x="15" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="15" y1="33" x2="50" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="51" x2="50" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="69" x2="50" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="87" x2="50" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="60" y="15" width="35" height="90" fill="#93c5fd"/><rect x="60" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="33" x2="95" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="60" y1="51" x2="95" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="60" y1="69" x2="95" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="60" y1="87" x2="95" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="105" y="15" width="35" height="90" fill="#93c5fd"/><rect x="105" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="105" y1="33" x2="140" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="105" y1="51" x2="140" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="105" y1="69" x2="140" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="105" y1="87" x2="140" y2="87" stroke="#0f1f3d" stroke-width="1"/><rect x="150" y="69" width="35" height="36" fill="#93c5fd"/><rect x="150" y="15" width="35" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="33" x2="185" y2="33" stroke="#0f1f3d" stroke-width="1"/><line x1="150" y1="51" x2="185" y2="51" stroke="#0f1f3d" stroke-width="1"/><line x1="150" y1="69" x2="185" y2="69" stroke="#0f1f3d" stroke-width="1"/><line x1="150" y1="87" x2="185" y2="87" stroke="#0f1f3d" stroke-width="1"/><text x="32.5" y="118" font-size="11" text-anchor="middle" fill="#374151">5/5</text><text x="77.5" y="118" font-size="11" text-anchor="middle" fill="#374151">5/5</text><text x="122.5" y="118" font-size="11" text-anchor="middle" fill="#374151">5/5</text><text x="167.5" y="118" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">2/5</text><text x="110" y="140" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">3 and 2/5 = 15/5 + 2/5 = 17/5</text></svg>',

      videoPlaceholder:
        'Short video showing how to convert between mixed numbers and improper fractions and how to add mixed numbers by converting to improper fractions first',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MULTIPLYING FRACTIONS AND FRACTIONS OF WHOLE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-fractions',
      title: 'Multiplying Fractions and Fractions of Whole Numbers',
      icon: '×',
      explanation:
        lookingAhead(
          'multiplying a fraction by a fraction',
          'CAPS Grade 6 covers multiplying a fraction by a whole number and finding a fraction of a whole number — both are covered below and are correctly within Grade 6 scope. Multiplying a fraction by a fraction (e.g. 2/3 × 3/4) never appears in the Grade 4-6 CAPS document — it is Senior Phase (Grade 7+) content, shown here for learners who want to see where this is heading.'
        ) +
        `<p style="margin-bottom:16px;">To <strong>multiply a fraction by a whole number</strong> we multiply the ${bl('numerator')} by the whole number and keep the ${re('denominator')} the same. To <strong>find a fraction of a whole number</strong> we multiply the fraction by the whole number — this is the same as dividing by the ${re('denominator')} and multiplying by the ${bl('numerator')}. To <strong>multiply a fraction by a fraction</strong> we multiply the ${bl('numerators')} together and multiply the ${re('denominators')} together, then ${or('simplify')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerator multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('simplification')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Three methods ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three methods for multiplying fractions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Fraction × Whole Number</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Multiply the numerator')} by the whole number. Keep the ${re('denominator')} the same. ${or('Simplify')} the result.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 3/4 × 8 = ${bl('24')}/${re('4')} = ${gr('6')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Fraction of a Whole Number</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">"Of" means multiply. Divide by the ${re('denominator')} first, then ${bl('multiply by the numerator')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 2/5 of 45 → 45 ÷ ${re('5')} = 9, ${bl('9 × 2')} = ${gr('18')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Fraction × Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Multiply numerators')} together. ${re('Multiply denominators')} together. ${or('Simplify')} the result.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 2/3 × 3/4 = ${bl('6')}/${re('12')} = ${gr('1/2')}</p>` +
        `</div>` +

        `</div>` +

        // ── Method steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method: fraction × fraction</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Multiply the numerators')} — the top numbers multiplied together become the new numerator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Multiply the denominators')} — the bottom numbers multiplied together become the new denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Simplify')} the resulting fraction by dividing both the numerator and denominator by their HCF.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Write the final answer')}</strong> in its simplest form.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">"Of" always means multiply</p>` +
        `<p style="margin:0;color:#1e3a8a;">Whenever you see the word <strong>"of"</strong> between a fraction and a number, replace it with a multiplication sign. Finding <strong>2/5 of 45</strong> is exactly the same as calculating <strong>2/5 × 45</strong>. You can also divide by the ${re('denominator')} first and then ${bl('multiply by the numerator')} — both methods give the same answer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 14: 3/4 × 8 ──────────────────────────────────────────────
        {
          question: 'Calculate 3/4 × 8.',
          answer: `3/${re('4')} × 8 = ${gr('6')}`,
          steps: [
            `${bl('Multiply the numerator by 8:')} ${bl('3')} × 8 = ${bl('24')}.`,
            `Keep the ${re('denominator:')} ${bl('24')}/${re('4')}.`,
            `${or('Simplify:')} ${bl('24')} ÷ ${re('4')} = ${or('6')}.`,
            `<strong>${gr('Answer:')} ${gr('6')}</strong> ✓`,
          ],
        },

        // ── Example 15: 2/5 of 45 ────────────────────────────────────────────
        {
          question: 'Find 2/5 of 45.',
          answer: `${bl('2')}/${re('5')} of 45 = ${gr('18')}`,
          steps: [
            `"Of" means multiply: ${bl('2')}/${re('5')} × 45.`,
            `${bl('Multiply the numerator by 45:')} ${bl('2')} × 45 = ${bl('90')}.`,
            `Divide by the ${re('denominator:')} ${bl('90')} ÷ ${re('5')} = ${or('18')}.`,
            `<strong>${gr('Answer:')} ${gr('18')}</strong> ✓`,
          ],
        },

        // ── Example 16: 2/3 × 3/4 ────────────────────────────────────────────
        {
          question: 'Calculate 2/3 × 3/4.',
          answer: `${bl('2')}/${re('3')} × ${bl('3')}/${re('4')} = ${gr('1/2')}`,
          steps: [
            `${bl('Multiply the numerators:')} ${bl('2')} × ${bl('3')} = ${bl('6')}.`,
            `${re('Multiply the denominators:')} ${re('3')} × ${re('4')} = ${re('12')}.`,
            `Result: ${bl('6')}/${re('12')}.`,
            `${or('Simplify')} by dividing by the HCF of ${or('6')}: ${bl('6')} ÷ ${or('6')} = 1, ${re('12')} ÷ ${or('6')} = 2.`,
            `<strong>${gr('Answer:')} ${gr('1/2')}</strong> ✓`,
          ],
        },

        // ── Example 17: Lerato's beads ────────────────────────────────────────
        {
          question: 'Lerato has 360 beads. She uses 5/8 of them for a necklace. How many beads does she use?',
          answer: `${gr('Lerato uses 225 beads')}`,
          steps: [
            `Find ${bl('5')}/${re('8')} of 360.`,
            `Divide by the ${re('denominator:')} 360 ÷ ${re('8')} = ${or('45')}.`,
            `${bl('Multiply by the numerator:')} ${or('45')} × ${bl('5')} = ${gr('225')}.`,
            `<strong>${gr('Answer:')} Lerato uses ${gr('225')} beads.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Area model grid showing 2/3 shaded across and 3/4 shaded down, with the double-shaded overlap outlined in green showing the product 6/12 simplified to 1/2',
      diagramSvg: '<svg viewBox="0 0 230 150" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="120" height="100" fill="#2563eb" opacity="0.25"/><rect x="15" y="20" width="180" height="75" fill="#dc2626" opacity="0.25"/><rect x="15" y="20" width="120" height="75" fill="none" stroke="#16a34a" stroke-width="3"/><rect x="15" y="20" width="180" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="20" x2="75" y2="120" stroke="#0f1f3d" stroke-width="1"/><line x1="135" y1="20" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="45" x2="195" y2="45" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="70" x2="195" y2="70" stroke="#0f1f3d" stroke-width="1"/><line x1="15" y1="95" x2="195" y2="95" stroke="#0f1f3d" stroke-width="1"/><text x="75" y="14" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">2/3 across</text><text x="205" y="58" font-weight="700" font-size="12" text-anchor="start" fill="#dc2626">3/4</text><text x="205" y="72" font-weight="700" font-size="12" text-anchor="start" fill="#dc2626">down</text><text x="105" y="140" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">2/3 × 3/4 = 6/12 = 1/2</text></svg>',

      videoPlaceholder:
        'Short video showing how to multiply a fraction by a whole number find a fraction of a whole number and multiply a fraction by a fraction with simplification',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — simplify 12/16 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify 12/16.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'HCF of 12 and 16 is 4.\n12 ÷ 4 = 3. 16 ÷ 4 = 4.\nAnswer: 3/4 ✓',
    },

    // ── Q2 Easy — simplify 24/36 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Simplify 24/36.',
      answer: '2/3',
      checkMode: 'auto',
      correctAnswer: '2/3',
      explanation: 'HCF of 24 and 36 is 12.\n24 ÷ 12 = 2. 36 ÷ 12 = 3.\nAnswer: 2/3 ✓',
    },

    // ── Q3 Medium — three equivalent fractions for 3/5 ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Write three equivalent fractions for 3/5.',
      answer: 'Any three correct equivalent fractions such as 6/10, 9/15, 12/20.',
      checkMode: 'self',
    },

    // ── Q4 Hard — Sipho's simplification check ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho simplifies 42/56 and gets 6/8. Is he fully simplified? Explain.',
      answer: 'No — 6/8 can be simplified further. HCF of 6 and 8 is 2. 6/8 = 3/4. The fully simplified answer is 3/4.',
      checkMode: 'self',
    },

    // ── Q5 Easy — compare 3/5 and 5/8 ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Which is greater — 3/5 or 5/8?',
      answer: '3/5',
      checkMode: 'auto',
      correctAnswer: '3/5',
      explanation: 'LCM of 5 and 8 = 40.\n3/5 = 24/40. 5/8 = 25/40.\nSince 24 < 25, 3/5 < 5/8.',
    },

    // ── Q6 Medium — order four fractions ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Order from smallest to biggest — 1/2, 2/5, 3/4, 7/10.',
      answer: 'LCM = 20. 1/2 = 10/20, 2/5 = 8/20, 3/4 = 15/20, 7/10 = 14/20. Order: 2/5, 1/2, 7/10, 3/4.',
      checkMode: 'self',
    },

    // ── Q7 Easy — 1/3 + 1/4 ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 1/3 + 1/4.',
      answer: '7/12',
      checkMode: 'auto',
      correctAnswer: '7/12',
      explanation: 'LCM of 3 and 4 = 12.\n1/3 = 4/12. 1/4 = 3/12.\n4/12 + 3/12 = 7/12 ✓',
    },

    // ── Q8 Medium — 5/6 − 3/8 ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 5/6 − 3/8.',
      answer: '11/24',
      checkMode: 'auto',
      correctAnswer: '11/24',
      explanation: 'LCM of 6 and 8 = 24.\n5/6 = 20/24. 3/8 = 9/24.\n20/24 − 9/24 = 11/24 ✓',
    },

    // ── Q9 Hard — fraction addition word problem ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle spends 1/3 of her pocket money on sweets and 2/5 on a book. What fraction has she spent in total?',
      answer: '11/15',
      checkMode: 'auto',
      correctAnswer: '11/15',
      explanation: 'LCM of 3 and 5 = 15.\n1/3 = 5/15. 2/5 = 6/15.\n5/15 + 6/15 = 11/15 ✓',
    },

    // ── Q10 Easy — mixed number to improper fraction ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Convert 2 and 3/4 to an improper fraction.',
      answer: '11/4',
      checkMode: 'auto',
      correctAnswer: '11/4',
      explanation: 'Multiply the whole number by the denominator: 2 × 4 = 8.\nAdd the numerator: 8 + 3 = 11.\nKeep the denominator: 4.\nAnswer: 11/4 ✓',
    },

    // ── Q11 Medium — improper fraction to mixed number ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Convert 31/7 to a mixed number.',
      answer: '4 and 3/7',
      checkMode: 'auto',
      correctAnswer: '4 and 3/7',
      correctAnswers: ['4 and 3/7', '4 3/7'],
      explanation: 'Divide 31 by 7: 7 × 4 = 28. Remainder: 31 − 28 = 3.\nAnswer: 4 and 3/7 ✓',
    },

    // ── Q12 Hard — add mixed numbers ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 1 and 2/3 + 2 and 3/4.',
      answer: '4 and 5/12',
      checkMode: 'auto',
      correctAnswer: '4 and 5/12',
      correctAnswers: ['4 and 5/12', '4 5/12'],
      explanation: 'Convert: 1 and 2/3 = 5/3. 2 and 3/4 = 11/4.\nLCM of 3 and 4 = 12.\n5/3 = 20/12. 11/4 = 33/12.\n20/12 + 33/12 = 53/12.\n53 ÷ 12 = 4 remainder 5.\nAnswer: 4 and 5/12 ✓',
    },

    // ── Q13 Easy — fraction × whole number ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 3/5 × 10.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Multiply the numerator: 3 × 10 = 30.\nDivide by the denominator: 30 ÷ 5 = 6.\nAnswer: 6 ✓',
    },

    // ── Q14 Medium — fraction of a whole number ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find 3/4 of 96.',
      answer: '72',
      checkMode: 'auto',
      correctAnswer: '72',
      explanation: 'Divide by the denominator: 96 ÷ 4 = 24.\nMultiply by the numerator: 24 × 3 = 72.\nAnswer: 72 ✓',
    },

    // ── Q15 Hard — fractions of a whole word problem ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo has 480 marbles. He gives 3/8 to Sipho and 1/4 to Lerato. How many marbles does he have left?',
      answer: '3/8 of 480 = 180. 1/4 of 480 = 120. Total given away = 180 + 120 = 300. Left = 480 − 300 = 180 marbles.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 18/24 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', explanation: 'HCF of 18 and 24 is 6.\n18 ÷ 6 = 3. 24 ÷ 6 = 4.\nAnswer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Write three fractions equivalent to 3/4.', answer: 'Any three correct equivalent fractions such as 6/8, 9/12, 12/16.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Simplify 20/30 to its lowest terms.', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', explanation: 'HCF of 20 and 30 is 10.\n20 ÷ 10 = 2. 30 ÷ 10 = 3.\nAnswer: 2/3 ✓' },
        { difficulty: 'Easy', question: 'Karabo simplifies 42/56 and gets 6/8. Has she reached the lowest terms? Explain your answer.', answer: 'No — 6/8 can still be simplified. The HCF of 6 and 8 is 2, so 6/8 = 3/4. The fully simplified fraction is 3/4, not 6/8.', checkMode: 'self' },

        { difficulty: 'Easy-Medium', question: 'Which is greater — 3/8 or 2/5?', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', explanation: 'LCM of 8 and 5 = 40.\n3/8 = 15/40. 2/5 = 16/40.\nSince 16 > 15, 2/5 > 3/8.' },
        { difficulty: 'Easy-Medium', question: 'Order these fractions from smallest to biggest: 1/2, 3/5, 7/10, 2/3.', answer: '1/2, 3/5, 2/3, 7/10', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo ate 3/8 of a chocolate bar and Sipho ate 5/12 of an identical bar. Who ate more?', answer: 'Sipho ate more', checkMode: 'auto', correctAnswer: 'Sipho', correctAnswers: ['Sipho', 'Sipho ate more'], explanation: 'LCM of 8 and 12 = 24.\n3/8 = 9/24. 5/12 = 10/24.\nSince 10 > 9, Sipho ate more.' },
        { difficulty: 'Medium', question: 'Nomvula says that 5/9 is bigger than 3/7 because 5 is bigger than 3. Is her reasoning correct? Explain.', answer: 'No — you cannot compare numerators alone unless the denominators are the same. Using the LCM of 63: 5/9 = 35/63 and 3/7 = 27/63. Since 35 > 27, 5/9 is indeed bigger, but Nomvula’s reasoning was wrong — it only worked by coincidence.', checkMode: 'self' },

        { difficulty: 'Medium', question: 'Calculate 2/9 + 1/6.', answer: '7/18', checkMode: 'auto', correctAnswer: '7/18', explanation: 'LCM of 9 and 6 = 18.\n2/9 = 4/18. 1/6 = 3/18.\n4/18 + 3/18 = 7/18 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/6 − 3/10.', answer: '8/15', checkMode: 'auto', correctAnswer: '8/15', explanation: 'LCM of 6 and 10 = 30.\n5/6 = 25/30. 3/10 = 9/30.\n25/30 − 9/30 = 16/30 = 8/15 ✓' },
        { difficulty: 'Medium', question: 'Calculate 5/6 + 3/4. Give your answer as a mixed number.', answer: '1 and 7/12', checkMode: 'auto', correctAnswer: '1 and 7/12', correctAnswers: ['1 and 7/12', '1 7/12'], explanation: 'LCM of 6 and 4 = 12.\n5/6 = 10/12. 3/4 = 9/12.\n10/12 + 9/12 = 19/12.\n19 ÷ 12 = 1 remainder 7.\nAnswer: 1 and 7/12 ✓' },
        { difficulty: 'Medium', question: 'A painter has 7/8 of a tin of blue paint and uses 5/12 of a tin on a fence. How much paint is left?', answer: '11/24 of a tin', checkMode: 'auto', correctAnswer: '11/24', correctAnswers: ['11/24', '11/24 of a tin'], explanation: 'LCM of 8 and 12 = 24.\n7/8 = 21/24. 5/12 = 10/24.\n21/24 − 10/24 = 11/24 of a tin ✓' },

        { difficulty: 'Medium-Hard', question: 'Convert 4 and 3/7 to an improper fraction.', answer: '31/7', checkMode: 'auto', correctAnswer: '31/7', explanation: 'Multiply the whole number by the denominator: 4 × 7 = 28.\nAdd the numerator: 28 + 3 = 31.\nKeep the denominator: 7.\nAnswer: 31/7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Convert 29/6 to a mixed number.', answer: '4 and 5/6', checkMode: 'auto', correctAnswer: '4 and 5/6', correctAnswers: ['4 and 5/6', '4 5/6'], explanation: 'Divide 29 by 6: 6 × 4 = 24. Remainder: 29 − 24 = 5.\nAnswer: 4 and 5/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Convert 47/9 to a mixed number, then convert 5 and 2/3 to an improper fraction.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 47/9 as a mixed number', correctAnswer: '5 and 2/9', correctAnswers: ['5 and 2/9', '5 2/9'], explanation: 'Divide 47 by 9: 9 × 5 = 45. Remainder: 47 − 45 = 2.\nAnswer: 5 and 2/9 ✓' },
          { label: 'b) 5 and 2/3 as an improper fraction', correctAnswer: '17/3', explanation: 'Multiply: 5 × 3 = 15. Add the numerator: 15 + 2 = 17. Keep the denominator: 3.\nAnswer: 17/3 ✓' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A recipe needs 1 and 1/2 cups of flour for the base and 2 and 2/3 cups for the topping. How many cups of flour are needed in total?', answer: '4 and 1/6 cups', checkMode: 'auto', correctAnswer: '4 and 1/6', correctAnswers: ['4 and 1/6', '4 1/6', '4 and 1/6 cups'], explanation: 'Convert: 1 and 1/2 = 3/2. 2 and 2/3 = 8/3.\nLCM of 2 and 3 = 6.\n3/2 = 9/6. 8/3 = 16/6.\n9/6 + 16/6 = 25/6.\n25 ÷ 6 = 4 remainder 1.\nAnswer: 4 and 1/6 cups ✓' },

        { difficulty: 'Hard', question: 'Calculate 5/6 × 12.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Multiply the numerator: 5 × 12 = 60.\nDivide by the denominator: 60 ÷ 6 = 10.\nAnswer: 10 ✓' },
        { difficulty: 'Hard', question: 'A shop has 64 loaves of bread. It sells 3/8 of them before lunch. How many loaves were sold?', answer: '24 loaves', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 loaves'], explanation: 'Divide by the denominator: 64 ÷ 8 = 8.\nMultiply by the numerator: 8 × 3 = 24.\nAnswer: 24 loaves ✓' },
        { difficulty: 'Hard', question: 'Calculate 4/9 × 3/8. Give your answer in its simplest form.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', explanation: 'Multiply the numerators: 4 × 3 = 12.\nMultiply the denominators: 9 × 8 = 72.\nResult: 12/72.\nSimplify using HCF 12: 12 ÷ 12 = 1, 72 ÷ 12 = 6.\nAnswer: 1/6 ✓' },
        { difficulty: 'Hard', question: 'Lindiwe starts with 60 sweets. She gives 1/3 of them to her brother, then gives 2/5 of what remains to her sister. How many sweets does Lindiwe have left?', answer: '24 sweets', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 sweets'], explanation: '1/3 of 60 = 20, so after giving to her brother she has 60 − 20 = 40 sweets left.\n2/5 of 40 = 16, so after giving to her sister she has 40 − 16 = 24 sweets left ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equivalent fractions, comparing, operations and multiplying fractions.' },
        { minScore: 15, message: 'Great work! You are confident with common fractions — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 28/35 to its lowest terms.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', explanation: 'HCF of 28 and 35 is 7.\n28 ÷ 7 = 4. 35 ÷ 7 = 5.\nAnswer: 4/5 ✓' },
        { difficulty: 'Easy', question: 'Simplify 45/60 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', explanation: 'HCF of 45 and 60 is 15.\n45 ÷ 15 = 3. 60 ÷ 15 = 4.\nAnswer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Which of these fractions is already in its simplest form — 6/10, 16/24, or 5/9?', answer: '5/9', checkMode: 'auto', correctAnswer: '5/9', explanation: 'HCF of 6 and 10 is 2 (not simplest). HCF of 16 and 24 is 8 (not simplest). HCF of 5 and 9 is 1, so 5/9 is already in its simplest form ✓' },
        { difficulty: 'Easy', question: 'Boitumelo simplifies 36/48 and gets 9/12. Is this the lowest terms? If not, simplify it fully.', answer: 'No — the HCF of 9 and 12 is 3, so 9/12 = 3/4. The fully simplified fraction is 3/4.', checkMode: 'self' },

        { difficulty: 'Easy-Medium', question: 'Which is greater — 5/9 or 7/12?', answer: '7/12', checkMode: 'auto', correctAnswer: '7/12', explanation: 'LCM of 9 and 12 = 36.\n5/9 = 20/36. 7/12 = 21/36.\nSince 21 > 20, 7/12 > 5/9.' },
        { difficulty: 'Easy-Medium', question: 'Order these fractions from biggest to smallest: 3/8, 5/12, 2/3, 7/24.', answer: '2/3, 5/12, 3/8, 7/24', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Amahle walks 5/6 of a kilometre to school and Kagiso walks 7/9 of a kilometre. Who walks further?', answer: 'Amahle walks further', checkMode: 'auto', correctAnswer: 'Amahle', correctAnswers: ['Amahle', 'Amahle walks further'], explanation: 'LCM of 6 and 9 = 18.\n5/6 = 15/18. 7/9 = 14/18.\nSince 15 > 14, Amahle walks further.' },
        { difficulty: 'Medium', question: 'Given that Amahle spends 3/4 of an hour on homework and Kagiso spends 5/8 of an hour, who spends longer on homework? Show your working using a common denominator.', answer: 'Amahle spends longer', checkMode: 'auto', correctAnswer: 'Amahle', correctAnswers: ['Amahle', 'Amahle spends longer'], explanation: 'LCM of 4 and 8 = 8.\n3/4 = 6/8. 5/8 = 5/8.\nSince 6 > 5, Amahle spends longer.' },

        { difficulty: 'Medium', question: 'Calculate 3/10 + 2/15.', answer: '13/30', checkMode: 'auto', correctAnswer: '13/30', explanation: 'LCM of 10 and 15 = 30.\n3/10 = 9/30. 2/15 = 4/30.\n9/30 + 4/30 = 13/30 ✓' },
        { difficulty: 'Medium', question: 'Calculate 7/9 − 5/12.', answer: '13/36', checkMode: 'auto', correctAnswer: '13/36', explanation: 'LCM of 9 and 12 = 36.\n7/9 = 28/36. 5/12 = 15/36.\n28/36 − 15/36 = 13/36 ✓' },
        { difficulty: 'Medium', question: 'Calculate 7/9 + 5/6. Give your answer as a mixed number.', answer: '1 and 11/18', checkMode: 'auto', correctAnswer: '1 and 11/18', correctAnswers: ['1 and 11/18', '1 11/18'], explanation: 'LCM of 9 and 6 = 18.\n7/9 = 14/18. 5/6 = 15/18.\n14/18 + 15/18 = 29/18.\n29 ÷ 18 = 1 remainder 11.\nAnswer: 1 and 11/18 ✓' },
        { difficulty: 'Medium', question: 'On a hike, Tumi walks 3/10 of the route before breakfast and a further 3/8 of the route after breakfast. What fraction of the route has she walked in total?', answer: '27/40', checkMode: 'auto', correctAnswer: '27/40', explanation: 'LCM of 10 and 8 = 40.\n3/10 = 12/40. 3/8 = 15/40.\n12/40 + 15/40 = 27/40 ✓' },

        { difficulty: 'Medium-Hard', question: 'Convert 5 and 2/9 to an improper fraction.', answer: '47/9', checkMode: 'auto', correctAnswer: '47/9', explanation: 'Multiply the whole number by the denominator: 5 × 9 = 45.\nAdd the numerator: 45 + 2 = 47.\nKeep the denominator: 9.\nAnswer: 47/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Convert 38/7 to a mixed number.', answer: '5 and 3/7', checkMode: 'auto', correctAnswer: '5 and 3/7', correctAnswers: ['5 and 3/7', '5 3/7'], explanation: 'Divide 38 by 7: 7 × 5 = 35. Remainder: 38 − 35 = 3.\nAnswer: 5 and 3/7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Boy says that converting 4 and 2/5 to an improper fraction gives 20/5, because he only multiplied the whole number by the denominator. What did he forget, and what is the correct answer?', answer: 'He forgot to add the numerator after multiplying. Correct working: 4 × 5 = 20, then add the numerator 2 to get 22. The correct answer is 22/5, not 20/5.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A piece of rope is 3 and 1/4 metres long and another piece is 2 and 5/6 metres long. If they are joined end to end, what is the total length?', answer: '6 and 1/12 metres', checkMode: 'auto', correctAnswer: '6 and 1/12', correctAnswers: ['6 and 1/12', '6 1/12', '6 and 1/12 metres'], explanation: 'Convert: 3 and 1/4 = 13/4. 2 and 5/6 = 17/6.\nLCM of 4 and 6 = 12.\n13/4 = 39/12. 17/6 = 34/12.\n39/12 + 34/12 = 73/12.\n73 ÷ 12 = 6 remainder 1.\nAnswer: 6 and 1/12 metres ✓' },

        { difficulty: 'Hard', question: 'Calculate 7/8 × 16.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Multiply the numerator: 7 × 16 = 112.\nDivide by the denominator: 112 ÷ 8 = 14.\nAnswer: 14 ✓' },
        { difficulty: 'Hard', question: 'Find 5/6 of 72 learners who are Grade 6 pupils in a school. How many learners is that?', answer: '60 learners', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 learners'], explanation: 'Divide by the denominator: 72 ÷ 6 = 12.\nMultiply by the numerator: 12 × 5 = 60.\nAnswer: 60 learners ✓' },
        { difficulty: 'Hard', question: 'Calculate 5/6 × 3/10. Give your answer in its simplest form.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', explanation: 'Multiply the numerators: 5 × 3 = 15.\nMultiply the denominators: 6 × 10 = 60.\nResult: 15/60.\nSimplify using HCF 15: 15 ÷ 15 = 1, 60 ÷ 15 = 4.\nAnswer: 1/4 ✓' },
        { difficulty: 'Hard', question: 'Given 80 stickers, Priya uses 2/5 of them to decorate a card, then gives 1/4 of what remains to a friend. How many stickers does Priya have left?', answer: '36 stickers', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 stickers'], explanation: '2/5 of 80 = 32, so after decorating the card she has 80 − 32 = 48 stickers left.\n1/4 of 48 = 12, so after giving to her friend she has 48 − 12 = 36 stickers left ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equivalent fractions, comparing, operations and multiplying fractions.' },
        { minScore: 15, message: 'Great work! You are confident with common fractions — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Simplify 24/32 to its lowest terms.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', explanation: 'HCF of 24 and 32 is 8.\n24 ÷ 8 = 3. 32 ÷ 8 = 4.\nAnswer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Write three fractions equivalent to 4/5.', answer: 'Any three correct equivalent fractions such as 8/10, 12/15, 16/20.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Which of these fractions is already in its simplest form — 7/10, 8/12, or 9/16?', answer: '7/10 and 9/16', checkMode: 'auto', correctAnswer: '7/10 and 9/16', correctAnswers: ['7/10 and 9/16', '7/10, 9/16', '9/16 and 7/10'], explanation: 'HCF of 7 and 10 is 1 (simplest). HCF of 8 and 12 is 4 (not simplest — simplifies to 2/3). HCF of 9 and 16 is 1 (simplest).\nAnswer: 7/10 and 9/16 are both already in simplest form ✓' },
        { difficulty: 'Easy', question: 'Refilwe simplifies 48/64 in one step and gets 12/16. Is this the lowest terms? If not, simplify it fully.', answer: 'No — the HCF of 12 and 16 is 4, so 12/16 = 3/4. The fully simplified fraction is 3/4.', checkMode: 'self' },

        { difficulty: 'Easy-Medium', question: 'Which is greater — 4/7 or 5/9?', answer: '4/7', checkMode: 'auto', correctAnswer: '4/7', explanation: 'LCM of 7 and 9 = 63.\n4/7 = 36/63. 5/9 = 35/63.\nSince 36 > 35, 4/7 > 5/9.' },
        { difficulty: 'Easy-Medium', question: 'Order these fractions from smallest to biggest: 5/8, 7/12, 3/4, 11/24.', answer: '11/24, 7/12, 5/8, 3/4', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele ate 3/5 of a pizza and Karabo ate 7/10 of an identical pizza. Who ate more?', answer: 'Karabo ate more', checkMode: 'auto', correctAnswer: 'Karabo', correctAnswers: ['Karabo', 'Karabo ate more'], explanation: 'LCM of 5 and 10 = 10.\n3/5 = 6/10. 7/10 = 7/10.\nSince 7 > 6, Karabo ate more.' },
        { difficulty: 'Medium', question: 'Thandiwe claims that 5/6 must be smaller than 13/15 simply because 6 is smaller than 15. Is her reasoning valid? Compare the two fractions properly and explain.', answer: 'No — comparing denominators alone tells you nothing about a fraction’s size. Using the LCM of 30: 5/6 = 25/30 and 13/15 = 26/30. Since 25 < 26, 5/6 is indeed smaller, but Thandiwe’s method was not valid — it must be checked using a common denominator, not just by comparing denominators.', checkMode: 'self' },

        { difficulty: 'Medium', question: 'Calculate 5/12 + 3/8.', answer: '19/24', checkMode: 'auto', correctAnswer: '19/24', explanation: 'LCM of 12 and 8 = 24.\n5/12 = 10/24. 3/8 = 9/24.\n10/24 + 9/24 = 19/24 ✓' },
        { difficulty: 'Medium', question: 'Calculate 11/15 − 3/10.', answer: '13/30', checkMode: 'auto', correctAnswer: '13/30', explanation: 'LCM of 15 and 10 = 30.\n11/15 = 22/30. 3/10 = 9/30.\n22/30 − 9/30 = 13/30 ✓' },
        { difficulty: 'Medium', question: 'Calculate 11/12 + 5/8. Give your answer as a mixed number.', answer: '1 and 13/24', checkMode: 'auto', correctAnswer: '1 and 13/24', correctAnswers: ['1 and 13/24', '1 13/24'], explanation: 'LCM of 12 and 8 = 24.\n11/12 = 22/24. 5/8 = 15/24.\n22/24 + 15/24 = 37/24.\n37 ÷ 24 = 1 remainder 13.\nAnswer: 1 and 13/24 ✓' },
        { difficulty: 'Medium', question: 'A cyclist has 5/6 of her water bottle full before a race and drinks 1/4 of a bottle during the first lap. How much water is left in the bottle?', answer: '7/12 of a bottle', checkMode: 'auto', correctAnswer: '7/12', correctAnswers: ['7/12', '7/12 of a bottle'], explanation: 'LCM of 6 and 4 = 12.\n5/6 = 10/12. 1/4 = 3/12.\n10/12 − 3/12 = 7/12 of a bottle ✓' },

        { difficulty: 'Medium-Hard', question: 'Convert 6 and 3/8 to an improper fraction.', answer: '51/8', checkMode: 'auto', correctAnswer: '51/8', explanation: 'Multiply the whole number by the denominator: 6 × 8 = 48.\nAdd the numerator: 48 + 3 = 51.\nKeep the denominator: 8.\nAnswer: 51/8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Convert 33/5 to a mixed number.', answer: '6 and 3/5', checkMode: 'auto', correctAnswer: '6 and 3/5', correctAnswers: ['6 and 3/5', '6 3/5'], explanation: 'Divide 33 by 5: 5 × 6 = 30. Remainder: 33 − 30 = 3.\nAnswer: 6 and 3/5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Convert 52/7 to a mixed number, then convert 8 and 3/5 to an improper fraction.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 52/7 as a mixed number', correctAnswer: '7 and 3/7', correctAnswers: ['7 and 3/7', '7 3/7'], explanation: 'Divide 52 by 7: 7 × 7 = 49. Remainder: 52 − 49 = 3.\nAnswer: 7 and 3/7 ✓' },
          { label: 'b) 8 and 3/5 as an improper fraction', correctAnswer: '43/5', explanation: 'Multiply: 8 × 5 = 40. Add the numerator: 40 + 3 = 43. Keep the denominator: 5.\nAnswer: 43/5 ✓' },
        ] },
        { difficulty: 'Medium-Hard', question: 'A recipe needs 2 and 1/3 cups of sugar for the cake and 1 and 3/4 cups for the icing. How many cups of sugar are needed in total?', answer: '4 and 1/12 cups', checkMode: 'auto', correctAnswer: '4 and 1/12', correctAnswers: ['4 and 1/12', '4 1/12', '4 and 1/12 cups'], explanation: 'Convert: 2 and 1/3 = 7/3. 1 and 3/4 = 7/4.\nLCM of 3 and 4 = 12.\n7/3 = 28/12. 7/4 = 21/12.\n28/12 + 21/12 = 49/12.\n49 ÷ 12 = 4 remainder 1.\nAnswer: 4 and 1/12 cups ✓' },

        { difficulty: 'Hard', question: 'Find 7/12 of 84 learners who took part in a school sports day. How many learners is that?', answer: '49 learners', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49 learners'], explanation: 'Divide by the denominator: 84 ÷ 12 = 7.\nMultiply by the numerator: 7 × 7 = 49.\nAnswer: 49 learners ✓' },
        { difficulty: 'Hard', question: 'Calculate 3/8 × 4/9. Give your answer in its simplest form.', answer: '1/6', checkMode: 'auto', correctAnswer: '1/6', explanation: 'Multiply the numerators: 3 × 4 = 12.\nMultiply the denominators: 8 × 9 = 72.\nResult: 12/72.\nSimplify using HCF 12: 12 ÷ 12 = 1, 72 ÷ 12 = 6.\nAnswer: 1/6 ✓' },
        { difficulty: 'Hard', question: 'Given 96 marbles, Bongani gives 3/8 of them to his cousin, then gives 1/3 of what remains to his friend. How many marbles does Bongani have left?', answer: '40 marbles', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 marbles'], explanation: '3/8 of 96 = 36, so after giving to his cousin he has 96 − 36 = 60 marbles left.\n1/3 of 60 = 20, so after giving to his friend he has 60 − 20 = 40 marbles left ✓' },
        { difficulty: 'Hard', question: 'Sibusiso says finding "5/6 of 90" is not the same as calculating "5/6 × 90" because "of" and "×" are different words. Is he correct? Explain and give the value.', answer: 'No, Sibusiso is incorrect — the word "of" placed between a fraction and a number always means multiply, so "5/6 of 90" and "5/6 × 90" give exactly the same result. 5/6 × 90 = 450 ÷ 6 = 75, so 5/6 of 90 = 75.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equivalent fractions, comparing, operations and multiplying fractions.' },
        { minScore: 15, message: 'Great work! You are confident with common fractions — review any missed questions and try another set.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered common fractions.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of fractions.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
