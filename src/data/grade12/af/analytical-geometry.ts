import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: distance formula → blue   (#2563eb)
//            gradient         → orange (#ea580c)
//            midpoint         → green  (#16a34a)
// Section 2: centre coords    → blue   (#2563eb)
//            radius           → orange (#ea580c)
//            completed square → green  (#16a34a)
// Section 3: radius gradient  → blue   (#2563eb)
//            tangent gradient → orange (#ea580c)
//            tangent equation → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analitiese Meetkunde',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: DISTANCE, GRADIENT AND MIDPOINT FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distance-gradient-midpoint',
      title: 'Hersiening — Afstandsformule, Gradiëntformule en Middelpuntformule',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die drie kernformules van Graad 10 waarop alle analitiese-meetkunde-werk berus. Die ${bl('afstandsformule')}, die ${or('gradiëntformule')} en die ${gr('middelpuntformule')} kom in byna elke vraag in hierdie onderwerp voor.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('afstandsformule')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gradiënt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('middelpunt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:8px;">Afstandsformule</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#1e3a8a;margin-bottom:6px;">d = √[(x₂−x₁)² + (y₂−y₁)²]</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gee die lengte van die lynstuk wat twee punte verbind.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Gradiëntformule</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#9a3412;margin-bottom:6px;">m = (y₂−y₁) / (x₂−x₁)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gee die helling (steilheid) van ʼn lynstuk.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Middelpuntformule</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#14532d;margin-bottom:6px;">M = ((x₁+x₂)/2 , (y₁+y₂)/2)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gee die koördinate van die middelpunt van ʼn lynstuk.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parallelle en loodregte lyne</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Parallelle lyne</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#0f1f3d;margin-bottom:6px;">m₁ = m₂</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Twee lyne is parallel wanneer hul gradiënte gelyk is.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Loodregte lyne</p>` +
        `<p style="font-family:monospace;font-size:1.05em;color:#0f1f3d;margin-bottom:6px;">m₁ × m₂ = −1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Twee lyne is loodreg wanneer hul gradiënte negatiewe resiproke van mekaar is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Punte benoem</p>` +
        `<p style="margin:0;color:#1e3a8a;">Benoem altyd die twee punte as (x₁, y₁) en (x₂, y₂) voordat jy vervang. Dit maak nie saak watter punt jy (x₁, y₁) noem nie — die finale antwoorde vir ${bl('afstand')}, ${or('gradiënt')} en ${gr('middelpunt')} sal in albei gevalle dieselfde wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken die afstand, gradiënt en middelpunt van die lynstuk wat A(2, 3) en B(8, 11) verbind.',
          answer: `${bl('Afstand')} = 10 &nbsp;·&nbsp; ${or('Gradiënt')} = 4/3 &nbsp;·&nbsp; ${gr('Middelpunt')} = (5, 7)`,
          steps: [
            `${bl('Afstand:')} d = √[(8−2)² + (11−3)²] = √[36 + 64] = √100 = ${bl('10')}`,
            `${or('Gradiënt:')} m = (11−3) / (8−2) = 8/6 = ${or('4/3')}`,
            `${gr('Middelpunt:')} M = ((2+8)/2 , (3+11)/2) = (10/2 , 14/2) = ${gr('(5, 7)')}`,
          ],
        },
        {
          question: 'Bewys dat die lyn deur C(1, 2) en D(4, 6) loodreg is op die lyn deur E(0, 3) en F(4, 0).',
          answer: `Die lyne is loodreg omdat m<sub>CD</sub> × m<sub>EF</sub> = (4/3) × (−3/4) = −1`,
          steps: [
            `${or('Gradiënt van CD:')} m<sub>CD</sub> = (6−2) / (4−1) = 4/3`,
            `${or('Gradiënt van EF:')} m<sub>EF</sub> = (0−3) / (4−0) = −3/4`,
            `Produk van gradiënte: (4/3) × (−3/4) = −12/12 = <strong>−1</strong>`,
            `Aangesien m<sub>CD</sub> × m<sub>EF</sub> = −1, is die lyne CD en EF <strong>loodreg</strong>. ✓`,
          ],
        },
        {
          question: 'Sipho sê ʼn lyn met gradiënt 2 is parallel aan ʼn lyn met gradiënt −2. Is hy korrek?',
          answer: `Nee — ${or('2 ≠ −2')}, dus is die lyne <strong>nie</strong> parallel nie.`,
          steps: [
            `Nee — parallelle lyne het gelyke gradiënte (m₁ = m₂).`,
            `${or('2 ≠ −2')}, dus is die lyne nie parallel nie.`,
            `ʼn Lyn parallel aan ʼn lyn met gradiënt 2 moet ook gradiënt ${or('2')} hê.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — write the standard circle equation ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf die vergelyking van die sirkel met middelpunt O(2, 1) en radius 5 neer.',
          answer: '(x−2)²+(y−1)²=25',
          checkMode: 'auto',
          correctAnswer: '(x-2)^2+(y-1)^2=25',
          correctAnswers: ['(x-2)^2+(y-1)^2=25', '(x-2)2+(y-1)2=25', 'x^2+y^2-4x-2y-20=0'],
          explanation: 'Vervang a=2, b=1, r=5 in (x−a)²+(y−b)²=r².\n(x−2)²+(y−1)²=5²\n(x−2)²+(y−1)²=25 ✓',
        },

        // ── Q2 Medium — verify a point lies on the circle ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Verifieer dat A(6, 4) op die sirkel (x−2)²+(y−1)²=25 lê. Wat is die waarde van (6−2)²+(4−1)²?',
          answer: '25',
          checkMode: 'auto',
          correctAnswer: '25',
          explanation: '(6−2)²+(4−1)²=4²+3²=16+9=25=r² ✓\nA(6, 4) voldoen aan die vergelyking en lê dus op die sirkel.',
        },

        // ── Q3 Hard — gradient of radius then tangent equation ────────────────
        {
          difficulty: 'Hard',
          question: 'Vir die sirkel (x−2)²+(y−1)²=25 met middelpunt O(2, 1), bereken die gradiënt van die radius OA waar A(6, 4), en bepaal dan die vergelyking van die raaklyn aan die sirkel by A.',
          answer: 'Gradiënt OA = (4−1)/(6−2) = 3/4. Raaklyngradiënt = −4/3 (negatiewe resiprook).\nRaaklyn: y−4 = −4/3(x−6) → 4x+3y=36',
          checkMode: 'self',
        },

        // ── Q4 Medium — midpoint of a chord ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die middelpunt M van koord AB waar A(6, 4) en B(−1, −3).',
          answer: '(2,5, 0,5)',
          checkMode: 'auto',
          correctAnswer: '(2,5, 0,5)',
          correctAnswers: ['(2.5, 0.5)', '(5/2, 1/2)', '(2,5 ; 0,5)', '2.5 ; 0.5'],
          explanation: 'M = ((6+(−1))/2, (4+(−3))/2) = (5/2, 1/2) = (2,5, 0,5) ✓',
        },

        // ── Q5 Hard — prove OM perpendicular to chord AB ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Toon aan dat OM loodreg is op koord AB, waar O(2, 1) die middelpunt is en M(2,5, 0,5) die middelpunt van AB is, met A(6, 4) en B(−1, −3).',
          answer: 'Gradiënt AB = (−3−4)/(−1−6) = −7/−7 = 1.\nGradiënt OM = (0,5−1)/(2,5−2) = −0,5/0,5 = −1.\nProduk = 1×(−1) = −1 ✓ OM⊥AB bevestig.',
          checkMode: 'self',
        },
      ],

      diagramSvg:
        `<svg viewBox="0 0 210 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="91" cy="91" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5" /><line x1="147" y1="49" x2="49" y2="147" stroke="#16a34a" stroke-width="2.5" /><line x1="91" y1="91" x2="147" y2="49" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3" /><line x1="91" y1="91" x2="189" y2="91" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" /><line x1="111" y1="1" x2="183" y2="97" stroke="#ea580c" stroke-width="2.5" /><circle cx="91" cy="91" r="3.5" fill="#0f1f3d" /><circle cx="147" cy="49" r="3.5" fill="#2563eb" /><circle cx="49" cy="147" r="3.5" fill="#2563eb" /><circle cx="98" cy="98" r="3.5" fill="#16a34a" /><circle cx="189" cy="91" r="3.5" fill="#dc2626" /><text x="80" y="107" font-weight="700" font-size="11" fill="#0f1f3d" text-anchor="end">O(2, 1)</text><text x="152" y="42" font-weight="700" font-size="11" fill="#2563eb" text-anchor="start">A(6, 4)</text><text x="38" y="152" font-weight="700" font-size="11" fill="#2563eb" text-anchor="end">B(-1, -3)</text><text x="98" y="113" font-weight="700" font-size="11" fill="#16a34a" text-anchor="middle">M</text><text x="185" y="107" font-weight="700" font-size="11" fill="#dc2626" text-anchor="middle">P(9, 1)</text><text x="172" y="16" font-weight="700" font-size="10" fill="#ea580c" text-anchor="middle">raaklyn</text></svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die afstand-, gradiënt- en middelpuntformules hersien met uitgewerkte voorbeelde deur twee koördinaatpunte" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE EQUATION OF A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equation-of-a-circle',
      title: 'Die Vergelyking van ʼn Sirkel',
      icon: '⭕',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Sirkel met ${bl('middelpunt (a, b)')} en ${or('radius r')} het die vergelyking <strong>(x−a)² + (y−b)² = r²</strong>. Dit volg direk uit die afstandsformule — elke punt (x, y) op die sirkel is presies ${or('r')} eenhede van die ${bl('middelpunt (a, b)')} af. Wanneer die middelpunt by die oorsprong is, vereenvoudig die vergelyking na x² + y² = r².</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('middelpuntkoördinate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('radius')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('voltooide-vierkant-vorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Standaardvorm van ʼn sirkel</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-family:monospace;font-size:1.2em;font-weight:700;color:#0f1f3d;margin:0;">(x − ${bl('a')})² + (y − ${bl('b')})² = ${or('r')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:8px;margin-bottom:0;">Middelpunt ${bl('(a, b)')} &nbsp;·&nbsp; Radius ${or('r')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Uitgebreide vorm — die vierkant voltooi</p>` +
        `<p style="margin-bottom:12px;">ʼn Sirkelvergelyking kan ook in die uitgebreide vorm <strong>x² + y² + Dx + Ey + F = 0</strong> voorkom. Om die ${bl('middelpunt')} en ${or('radius')} te vind, ${gr('voltooi ons die vierkant')} op beide die x- en y-terme.</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Groepeer')} — Herrangskik sodat x-terme en y-terme saam aan die linkerkant is en die konstante aan die regterkant.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Voltooi die vierkant')} — Vir elke veranderlike, neem die helfte van die koëffisiënt, kwadreer dit, en tel dit by albei kante.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Lees af')} — Die vergelyking is nou in standaardvorm. Lees die ${bl('middelpunt')} en ${or('radius')} direk af.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenverandering wanneer die middelpunt afgelees word</p>` +
        `<p style="margin:0;color:#1e3a8a;">In die standaardvorm <strong>(x − a)² + (y − b)² = r²</strong> is die ${bl('middelpunt')} (a, b). Wanneer die vergelyking <em>(x − 4)²</em> toon, is die x-koördinaat <strong>+4</strong>. Wanneer dit <em>(x + 3)²</em> toon — wat eintlik (x − (−3))² is — is die x-koördinaat <strong>−3</strong>. Verander altyd die teken van die waardes binne die hakies.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf die vergelyking van ʼn sirkel met middelpunt (3, −2) en radius 5.',
          answer: `(x − ${bl('3')})² + (y + ${bl('2')})² = ${or('25')}`,
          steps: [
            `Vervang ${bl('a = 3')}, ${bl('b = −2')}, ${or('r = 5')} in (x − a)² + (y − b)² = r²`,
            `(x − ${bl('3')})² + (y − (${bl('−2')}))² = ${or('5')}²`,
            `<strong>(x − ${bl('3')})² + (y + ${bl('2')})² = ${or('25')}</strong>`,
          ],
        },
        {
          question: 'Bepaal die middelpunt en radius van (x − 4)² + (y + 1)² = 49.',
          answer: `Middelpunt = ${bl('(4, −1)')} &nbsp;·&nbsp; Radius = ${or('7')}`,
          steps: [
            `${bl('Middelpunt = (4, −1)')} — verander die tekens van die waardes binne die hakies.`,
            `${or('Radius:')} r² = 49 → r = √49 = ${or('7')}`,
          ],
        },
        {
          question: 'Bepaal die middelpunt en radius van x² + y² − 6x + 4y − 12 = 0 deur die vierkant te voltooi.',
          answer: `${gr('(x − 3)² + (y + 2)² = 25')} &nbsp;·&nbsp; Middelpunt = ${bl('(3, −2)')} &nbsp;·&nbsp; Radius = ${or('5')}`,
          steps: [
            `Groepeer x- en y-terme: (x² − 6x) + (y² + 4y) = 12`,
            `${gr('Voltooi die vierkant:')} (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4`,
            `${gr('(x − 3)² + (y + 2)² = 25')}`,
            `${bl('Middelpunt = (3, −2)')} (verander tekens) &nbsp;&nbsp; ${or('Radius:')} r = √25 = ${or('5')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard — completing the square to find centre and radius ─────────
        {
          difficulty: 'Hard',
          question: 'Bepaal die middelpunt en radius van die sirkel x²+y²−4x+6y−12=0 deur die vierkant te voltooi.',
          answer: '(x²−4x+4)+(y²+6y+9)=12+4+9\n(x−2)²+(y+3)²=25\nMiddelpunt=(2,−3), radius=5',
          checkMode: 'self',
        },

        // ── Q7 Medium — distance from an external point to the centre ─────────
        {
          difficulty: 'Medium',
          question: 'Bereken die afstand vanaf die eksterne punt P(7, −3) tot die middelpunt (2, −3) van die sirkel in Vraag 6.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'd = √[(7−2)²+(−3−(−3))²] = √[25+0] = √25 = 5 ✓',
        },

        // ── Q8 Hard — interpret P lying exactly on the circle ─────────────────
        {
          difficulty: 'Hard',
          question: 'Aangesien P(7, −3) presies 5 eenhede van die middelpunt af is en die radius van die sirkel in Vraag 6 ook 5 is, wat vertel dit jou van P? Wat is die lengte van die raaklyn vanaf P aan die sirkel?',
          answer: 'P lê presies op die sirkel aangesien sy afstand vanaf die middelpunt gelyk is aan die radius. ʼn Punt op die sirkel is nie ekstern nie — die raaklynlengte vanaf ʼn punt op die sirkel is 0.',
          checkMode: 'self',
        },

        // ── Q9 Hard — tangent at a point on the circle from Q6 ───────────────
        {
          difficulty: 'Hard',
          question: 'Bepaal die vergelyking van die raaklyn aan die sirkel (x−2)²+(y+3)²=25 by die punt (2, 2). Verifieer eers dat (2, 2) op die sirkel lê.',
          answer: 'Verifieer: (2−2)²+(2+3)²=0+25=25 ✓\nGradiënt vanaf middelpunt (2,−3) na (2,2): onbepaald (vertikale lyn x=2).\nDie raaklyn is loodreg op die vertikale radius, dus is die raaklyn horisontaal: y=2.',
          checkMode: 'self',
        },

        // ── Q10 Easy — write equation for circle at origin ────────────────────
        {
          difficulty: 'Easy',
          question: 'Bepaal die vergelyking van ʼn sirkel met middelpunt (0, 0) en radius 6.',
          answer: 'x²+y²=36',
          checkMode: 'auto',
          correctAnswer: 'x^2+y^2=36',
          correctAnswers: ['x^2+y^2=36', 'x²+y²=36'],
          explanation: 'Middelpunt by die oorsprong → (x−0)²+(y−0)²=6² → x²+y²=36 ✓',
        },
      ],

      diagramSvg:
        `<svg viewBox="0 0 182 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="91" cy="91" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5" /><line x1="91" y1="91" x2="161" y2="91" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3" /><circle cx="91" cy="91" r="3.5" fill="#2563eb" /><circle cx="161" cy="91" r="3.5" fill="#16a34a" /><text x="80" y="80" font-weight="700" font-size="11" fill="#2563eb" text-anchor="end">middelpunt (2, -3)</text><text x="179" y="103" font-weight="700" font-size="10" fill="#16a34a" text-anchor="end">P(7, -3)</text><text x="126" y="83" font-weight="700" font-size="11" fill="#ea580c" text-anchor="middle">r = 5</text></svg>`,

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die vergelyking van \'n sirkel in standaardvorm verduidelik en hoe om die middelpunt en radius te vind deur die vierkant te voltooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FINDING THE EQUATION OF A TANGENT TO A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-to-a-circle',
      title: 'Die Vergelyking van ʼn Raaklyn aan ʼn Sirkel Bepaal',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Raaklyn aan ʼn sirkel by ʼn gegewe punt P is <strong>loodreg op die radius</strong> by daardie punt. Om die vergelyking van die raaklyn by P te bepaal: (1) bereken die ${bl('gradiënt van die radius')} vanaf die middelpunt na P, (2) bereken die ${or('negatiewe resiprook')} vir die raaklyngradiënt, (3) gebruik die punt-gradiënt-vorm y − y₁ = m(x − x₁) met punt P om die ${gr('raaklynvergelyking')} te skryf.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radiusgradiënt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('raaklyngradiënt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('raaklynvergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie-stap-metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Bereken die radiusgradiënt')} — Gebruik die gradiëntformule met die middelpunt en die raakpunt P.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bereken die raaklyngradiënt')} — Neem die negatiewe resiprook van die ${bl('radiusgradiënt')}: m<sub>raak</sub> = −1 / m<sub>radius</sub>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die raaklynvergelyking')} — Vervang die ${or('raaklyngradiënt')} en punt P in y − y₁ = m(x − x₁).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die raakpunt moet op die sirkel lê</p>` +
        `<p style="margin:0;color:#1e3a8a;">Verifieer eers dat punt P aan die vergelyking van die sirkel voldoen deur sy koördinate te vervang, voordat jy begin. Indien nie, het jy die verkeerde punt en sal jou raaklynvergelyking verkeerd wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die vergelyking van die raaklyn aan die sirkel x² + y² = 25 by die punt (3, 4).',
          answer: `${gr('3x + 4y = 25')}`,
          steps: [
            `Middelpunt = (0, 0). ${bl('Gradiënt van die radius na (3, 4):')} m<sub>radius</sub> = (4−0) / (3−0) = ${bl('4/3')}`,
            `${or('Gradiënt van die raaklyn:')} m<sub>raak</sub> = −1 ÷ (4/3) = ${or('−3/4')} (negatiewe resiprook)`,
            `Raaklynvergelyking: y − 4 = −3/4 · (x − 3)`,
            `Vermenigvuldig met 4: 4y − 16 = −3x + 9 &nbsp;→&nbsp; 3x + 4y = 25`,
            `Of: 4y = −3x + 25 &nbsp;→&nbsp; ${gr('3x + 4y = 25')} ✓`,
          ],
        },
        {
          question: 'Bepaal die vergelyking van die raaklyn aan (x − 2)² + (y − 1)² = 98 by die punt (9, 8).',
          answer: `${gr('y = −x + 17')}`,
          steps: [
            `Middelpunt = (2, 1). ${bl('Gradiënt van die radius:')} m<sub>radius</sub> = (8−1) / (9−2) = 7/7 = ${bl('1')}`,
            `${or('Gradiënt van die raaklyn:')} m<sub>raak</sub> = −1 ÷ 1 = ${or('−1')} (negatiewe resiprook)`,
            `Raaklynvergelyking: y − 8 = −1 · (x − 9)`,
            `${gr('y = −x + 17')} ✓`,
          ],
        },
        {
          question: 'Lerato sê die raaklyn by enige punt op x² + y² = r² kan geskryf word as x·x₁ + y·y₁ = r², waar (x₁, y₁) die raakpunt is. Verifieer dit vir die punt (3, 4) op x² + y² = 25.',
          answer: `Lerato se formule gee ${gr('3x + 4y = 25')}, wat Voorbeeld 1 bevestig.`,
          steps: [
            `Deur Lerato se formule te gebruik met (x₁, y₁) = (3, 4) en r² = 25: x·(3) + y·(4) = 25 &nbsp;→&nbsp; ${gr('3x + 4y = 25')}`,
            `Dit stem ooreen met die antwoord van Voorbeeld 1, wat bevestig dat die formule geldig is. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium — centre and radius from standard form ─────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die middelpunt en radius van (x+3)²+(y−5)²=64.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'Middelpunt:',
              correctAnswer: '(-3, 5)',
              correctAnswers: ['(-3,5)', '(-3, 5)', '(−3, 5)', '(−3,5)'],
              explanation: 'Verander die tekens binne die hakies: x-koördinaat is −3, y-koördinaat is +5. Middelpunt = (−3, 5).',
            },
            {
              label: 'Radius:',
              correctAnswer: '8',
              explanation: 'r² = 64 → r = √64 = 8',
            },
          ],
        },

        // ── Q12 Hard — circle passing through origin ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sirkel gaan deur die oorsprong en het middelpunt (3, 4). Bepaal sy radius en vergelyking.',
          answer: 'Radius = afstand vanaf (3,4) na (0,0) = √(9+16) = √25 = 5.\nVergelyking: (x−3)²+(y−4)²=25',
          checkMode: 'self',
        },

        // ── Q13 Medium — tangent to circle at origin using formula ────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die vergelyking van die raaklyn aan x²+y²=100 by die punt (6, −8).',
          answer: '6x−8y=100 of 3x−4y=50',
          checkMode: 'auto',
          correctAnswer: '6x-8y=100',
          correctAnswers: ['6x-8y=100', '3x-4y=50', '6x−8y=100', '3x−4y=50'],
          explanation: 'Deur x·x₁+y·y₁=r² te gebruik: 6x+(−8)y=100 → 6x−8y=100 → 3x−4y=50 ✓',
        },

        // ── Q14 Hard — tangent at a given point on a shifted circle ───────────
        {
          difficulty: 'Hard',
          question: 'ʼn Raaklyn aan die sirkel (x−1)²+(y−2)²=72 word by punt P(7, 8) getrek. Bepaal die vergelyking van hierdie raaklyn.',
          answer: 'Gradiënt van die radius vanaf (1,2) na (7,8): m = (8−2)/(7−1) = 1.\nRaaklyngradiënt = −1.\nRaaklyn: y−8 = −1(x−7) → y = −x+15',
          checkMode: 'self',
        },

        // ── Q15 Hard — length of tangent from an external point ───────────────
        {
          difficulty: 'Hard',
          question: 'Bepaal die lengte van die raaklyn vanaf die eksterne punt P(10, 0) aan die sirkel x²+y²=36.',
          answer: 'Afstand vanaf P(10,0) na middelpunt O(0,0): d=√(100)=10. Radius r=6.\nRaaklynlengte = √(d²−r²) = √(100−36) = √64 = 8',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die vergelyking van \'n raaklyn aan \'n sirkel te vind deur die radiusgradiënt en die loodregtheidsvoorwaarde te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING PROBLEMS COMBINING CIRCLE AND LINE GEOMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-combining-circle-and-line-geometry',
      title: 'Probleme Oplos wat Sirkel- en Lynmeetkunde Kombineer',
      icon: '🔗',
      explanation:
        `<p style="margin-bottom:16px;">Ons kombineer al die gereedskapstukke van hierdie onderwerp om multi-stap-probleme op te los wat sirkels, raaklyne, koorde en reguit lyne op die Cartesiese vlak behels — deur snypunte te vind, meetkundige eienskappe te bewys, en onbekende vergelykings uit gegewe voorwaardes te bepaal. Die sleutel is om te identifiseer ${bl('wat om te vervang en te verifieer')}, ${or('loodregtheidsvoorwaardes')} te herken, en die ${gr('finale antwoord')} duidelik aan te bied.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vervangingstoets')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('loodregtheidsbewys')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene benadering vir kombinasieprobleme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer en verifieer')} — Vervang gegewe punte in die sirkelvergelyking om te bevestig dat hulle op die sirkel lê voordat jy hulle verder gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Pas loodregtheid toe')} — Gebruik m₁ × m₂ = −1 om loodregte lyne te bewys of te vind; gebruik die middelpuntstelling vir koorde.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Formuleer die gevolgtrekking')} — Skryf altyd ʼn duidelike stelling wat die vraag beantwoord, met die numeriese resultaat en ʼn ✓ waar ʼn bewys vereis word.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Raaklynlengte vanaf ʼn eksterne punt</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn punt P buite ʼn sirkel met middelpunt O en radius r lê, word die lengte van die raaklyn vanaf P aan die sirkel gegee deur <strong>raaklynlengte = √(d² − r²)</strong>, waar d = |PO| die afstand vanaf P tot die middelpunt is. Dit volg uit die stelling van Pythagoras op die reghoekige driehoek gevorm deur O, P, en die raakpunt.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Toon aan dat die punt P(4, 5) op die sirkel (x − 1)² + (y − 1)² = 25 lê.',
          answer: `${gr('P(4, 5) lê op die sirkel')} omdat (4−1)² + (5−1)² = 9 + 16 = 25 = r² ✓`,
          steps: [
            `${bl('Vervang P(4, 5) in (x − 1)² + (y − 1)² = 25:')}`,
            `${bl('(4 − 1)² + (5 − 1)²')} = 3² + 4² = 9 + 16 = ${bl('25')}`,
            `Aangesien ${bl('25 = 25')}, voldoen die koördinate aan die vergelyking. ${gr('P(4, 5) lê op die sirkel.')} ✓`,
          ],
        },
        {
          question: 'Bepaal die lengte van die raaklyn wat vanaf die eksterne punt P(8, 0) aan die sirkel x² + y² = 16 getrek word.',
          answer: `${gr('Raaklynlengte = 4√3')}`,
          steps: [
            `Die sirkel het middelpunt O(0, 0) en radius r = √16 = 4.`,
            `${bl('Afstand vanaf P(8, 0) na middelpunt O(0, 0):')} d = √[(8−0)² + (0−0)²] = √64 = ${bl('8')}`,
            `${or('Raaklynlengte')} = √(d² − r²) = √(64 − 16) = √48 = ${gr('4√3')}`,
          ],
        },
        {
          question: 'Thabo het ʼn sirkel met middelpunt O(2, 3) en ʼn koord met eindpunte A(6, 3) en B(2, 7). Bepaal die middelpunt M van AB, en verifieer dan dat OM loodreg is op AB.',
          answer: `M = (4, 5) &nbsp;·&nbsp; ${or('mₐₙ × mₒₘ = −1 × 1 = −1')}, dus ${gr('OM ⊥ AB')} ✓`,
          steps: [
            `${bl('Middelpunt M van AB:')} M = ((6+2)/2 , (3+7)/2) = (8/2 , 10/2) = ${bl('(4, 5)')}`,
            `${or('Gradiënt van AB:')} mₐₙ = (7−3) / (2−6) = 4 / (−4) = ${or('−1')}`,
            `${or('Gradiënt van OM:')} mₒₘ = (5−3) / (4−2) = 2/2 = ${or('1')}`,
            `Produk van gradiënte: ${or('−1 × 1 = −1')}`,
            `Aangesien mₐₙ × mₒₘ = −1, is ${gr('OM loodreg op AB.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q16 Hard — evaluate a claim about tangent gradients ───────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê enige lyn met gradiënt −3/4 wat deur ʼn punt op x²+y²=25 gaan, is ʼn raaklyn aan die sirkel. Is hy korrek? Verduidelik.',
          answer: 'Nee. ʼn Gradiënt van −3/4 werk slegs as raaklyngradiënt by die spesifieke punte op x²+y²=25 waar die radiusgradiënt 4/3 is — naamlik by (3,4) en (−3,−4). By enige ander punt op die sirkel het die radius ʼn ander gradiënt, dus is die raaklyngradiënt anders.',
          checkMode: 'self',
        },

        // ── Q17 Hard — complete the square for expanded circle equation ────────
        {
          difficulty: 'Hard',
          question: 'Bepaal die koördinate van die middelpunt en die radius van x²+y²+8x−10y+5=0.',
          answer: '(x²+8x+16)+(y²−10y+25)=−5+16+25\n(x+4)²+(y−5)²=36\nMiddelpunt=(−4, 5), radius=6',
          checkMode: 'self',
        },

        // ── Q18 Hard — evaluate a claim about congruent circles ───────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê twee sirkels met dieselfde radius moet kongruent wees. Is sy korrek? Verduidelik.',
          answer: 'Ja. Twee sirkels met dieselfde radius is altyd kongruent, ongeag waar hul middelpunte is. Alle sirkels met radius r is meetkundig identies in vorm en grootte — hulle kan op mekaar afgebeeld word deur ʼn translasie.',
          checkMode: 'self',
        },

        // ── Q19 Hard — circle from diameter endpoints ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sirkel het middellynseindpunte by A(1, 3) en B(7, 9). Bepaal die middelpunt, radius en vergelyking van die sirkel.',
          answer: 'Middelpunt = middelpunt van AB = ((1+7)/2, (3+9)/2) = (4, 6).\nRadius = ½×|AB| = ½×√[(7−1)²+(9−3)²] = ½×√72 = 3√2.\nVergelyking: (x−4)²+(y−6)²=18',
          checkMode: 'self',
        },

        // ── Q20 Hard — prove a line is tangent by repeated root ───────────────
        {
          difficulty: 'Hard',
          question: 'Toon aan dat die lyn y=x+2 ʼn raaklyn is aan die sirkel x²+y²=2, en bepaal die raakpunt.',
          answer: 'Vervang y=x+2: x²+(x+2)²=2 → x²+x²+4x+4=2 → 2x²+4x+2=0 → x²+2x+1=0 → (x+1)²=0.\nHerhaalde wortel x=−1 bevestig raking. y=−1+2=1. Raakpunt: (−1, 1).',
          checkMode: 'self',
        },

        // ── Q21 Hard — vind ʼn onbekende parameter met die rakingsvoorwaarde ──
        {
          difficulty: 'Hard',
          question: 'Bepaal die waarde(s) van k waarvoor die lyn y = 2x + k ʼn raaklyn is aan die sirkel x² + y² = 5.',
          answer: 'Vervang y = 2x + k in x² + y² = 5:\nx² + (2x + k)² = 5\nx² + 4x² + 4kx + k² = 5\n5x² + 4kx + (k² − 5) = 0\n\nVir die lyn om ʼn raaklyn te wees, moet hierdie kwadratiese vergelyking ʼn herhaalde wortel hê, dus moet die diskriminant gelyk aan nul wees:\nΔ = (4k)² − 4(5)(k² − 5) = 0\n16k² − 20k² + 100 = 0\n−4k² + 100 = 0\nk² = 25\nk = ±5\n\nKontroleer k = 5: 5x² + 20x + 20 = 0 → x² + 4x + 4 = 0 → (x+2)² = 0 ✓ (herhaalde wortel by x = −2)\nKontroleer k = −5: 5x² − 20x + 20 = 0 → x² − 4x + 4 = 0 → (x−2)² = 0 ✓ (herhaalde wortel by x = 2)\n\nDus k = 5 of k = −5.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om sirkel- en lynmeetkunde te kombineer om punte op \'n sirkel te bevestig, raaklynlengtes vanaf eksterne punte te vind, en koord-loodregtheidseienskappe te bewys" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het analitiese meetkunde bemeester.' },
      { minPercent: 75, message: 'Uitstekende werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou vol, werk weer deur die studiegids.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets x 20 questions, skill blocks in matching positions:
  // Block 1 (Q1-3):   Standaardsirkelvergelyking — skryf vergelyking / lees middelpunt+radius af / verifieer punt op sirkel — Easy, Easy, Medium
  // Block 2 (Q4-6):   Voltooi die vierkant om middelpunt en radius te vind — Easy, Medium, Medium
  // Block 3 (Q7-9):   Raaklyn aan 'n sirkel by 'n gegewe punt — Medium, Hard, Hard (diagram: Q9)
  // Block 4 (Q10-12): Afstand tot middelpunt / raaklynlengte vanaf 'n eksterne punt — Easy, Medium, Hard (diagram: Q12)
  // Block 5 (Q13-16): Sirkel uit middellynseindpunte / koord-middelpunt-loodregtheid — Medium, Medium, Hard, Hard (diagram: Q16)
  // Block 6 (Q17-20): Gemengde moeilike kombinasie — raking deur herhaalde wortel, bewering-evaluering, multi-deel middelpunt/radius — Hard, Hard, Hard, Hard (diagram: Q17)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block 1 — Standaardsirkelvergelyking
        { difficulty: 'Easy', question: 'Skryf die vergelyking van die sirkel met middelpunt (3, −1) en radius 6 neer.', checkMode: 'auto', correctAnswer: '(x-3)^2+(y+1)^2=36', correctAnswers: ['(x-3)^2+(y+1)^2=36', '(x-3)2+(y+1)2=36'], answer: '(x-3)^2+(y+1)^2=36', explanation: 'Vervang a=3, b=−1, r=6 in (x−a)²+(y−b)²=r².\n(x−3)²+(y−(−1))²=6²\n(x−3)²+(y+1)²=36 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van (x+4)²+(y−6)²=100.', checkMode: 'auto', correctAnswer: '(-4, 6)', correctAnswers: ['(-4, 6)', '(-4,6)', '(−4, 6)', '(−4,6)'], answer: 'Middelpunt = (-4, 6), radius = 10', explanation: 'Verander die tekens binne die hakies: middelpunt = (−4, 6). r²=100 → r=10 ✓' },
        { difficulty: 'Medium', question: 'Verifieer dat A(5, 7) op die sirkel (x−2)²+(y−3)²=25 lê. Wat is die waarde van (5−2)²+(7−3)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(5−2)²+(7−3)²=3²+4²=9+16=25=r² ✓\nA(5, 7) voldoen aan die vergelyking en lê dus op die sirkel.' },

        // Block 2 — Voltooi die vierkant om middelpunt en radius te vind
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van x²+y²−6x+2y−15=0 deur die vierkant te voltooi.', answer: '(x²−6x+9)+(y²+2y+1)=15+9+1\n(x−3)²+(y+1)²=25\nMiddelpunt=(3, −1), radius=5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het vergelyking x²+y²+4x−8y−5=0. Bepaal die middelpunt en radius deur die vierkant te voltooi.', answer: '(x²+4x+4)+(y²−8y+16)=5+4+16\n(x+2)²+(y−4)²=25\nMiddelpunt=(−2, 4), radius=5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt en radius van x²+y²−2x−4y−20=0 deur die vierkant te voltooi.', answer: '(x²−2x+1)+(y²−4y+4)=20+1+4\n(x−1)²+(y−2)²=25\nMiddelpunt=(1, 2), radius=5', checkMode: 'self' },

        // Block 3 — Raaklyn aan 'n sirkel by 'n gegewe punt
        { difficulty: 'Medium', question: 'Vir die sirkel (x−1)²+(y−2)²=169 met middelpunt O(1, 2), bereken die gradiënt van die radius OA waar A(6, 14).', checkMode: 'auto', correctAnswer: '12/5', correctAnswers: ['12/5', '2.4', '2,4'], answer: '12/5', explanation: 'm = (14−2)/(6−1) = 12/5 ✓' },
        { difficulty: 'Hard', question: 'Vir die sirkel (x−1)²+(y−2)²=169, bereken die gradiënt van die raaklyn by die punt A(6, 14), gegee dat die radius OA gradiënt 12/5 het.', checkMode: 'auto', correctAnswer: '-5/12', correctAnswers: ['-5/12', '−5/12'], answer: '-5/12', explanation: 'Die raaklyngradiënt is die negatiewe resiprook van die radiusgradiënt: m = −1 ÷ (12/5) = −5/12 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die vergelyking van die raaklyn aan die sirkel (x−1)²+(y−2)²=169 by die punt A(6, 14), gegee dat die raaklyngradiënt by A −5/12 is.', answer: 'y − 14 = −5/12(x − 6)\n12y − 168 = −5x + 30\n5x + 12y = 198', checkMode: 'self' },

        // Block 4 — Afstand tot middelpunt / raaklynlengte vanaf 'n eksterne punt
        { difficulty: 'Easy', question: 'Bereken die afstand vanaf die eksterne punt P(8, 11) tot die middelpunt (3, −1) van die sirkel (x−3)²+(y+1)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(8−3)²+(11−(−1))²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'Die sirkel (x−3)²+(y+1)²=25 het middelpunt (3, −1) en radius 5. Die afstand vanaf die eksterne punt P(8, 11) tot die middelpunt is 13. Bereken die lengte van die raaklyn vanaf P aan die sirkel.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Raaklynlengte = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Punte word op die Cartesiese vlak geplot: die sirkel (x−3)²+(y+1)²=25 met middelpunt O(3, −1), en ʼn eksterne punt P(8, 11) met raaklynlengte 12 aan die sirkel. Verduidelik, deur Pythagoras te gebruik, waarom raaklynlengte = √(d²−r²), waar d die afstand OP is en r die radius.', answer: 'Die radius na die raakpunt is loodreg op die raaklyn, dus is die driehoek gevorm deur O, P en die raakpunt T reghoekig by T. Volgens Pythagoras: OP² = OT² + PT², dus d² = r² + (raaklynlengte)², wat gee raaklynlengte = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(3, -1)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(8, 11)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Sirkel uit middellynseindpunte / koord-middelpunt-loodregtheid
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(−1, 3) en B(7, 9). Bepaal die middelpunt van die sirkel.', checkMode: 'auto', correctAnswer: '(3, 6)', correctAnswers: ['(3, 6)', '(3,6)', '3, 6'], answer: '(3, 6)', explanation: 'Middelpunt = middelpunt van AB = ((−1+7)/2, (3+9)/2) = (3, 6) ✓' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(−1, 3) en B(7, 9), wat middelpunt (3, 6) gee. Bepaal die radius en vergelyking van die sirkel.', answer: 'Radius = ½×|AB| = ½×√[(7−(−1))²+(9−3)²] = ½×√100 = 5\nVergelyking: (x−3)²+(y−6)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(3, −1) en radius 5. Punte C(6, 3) en D(−1, 2) lê albei op die sirkel. Bepaal die middelpunt M van koord CD.', checkMode: 'auto', correctAnswer: '(2,5; 2,5)', correctAnswers: ['(2.5, 2.5)', '(2,5 ; 2,5)', '(5/2, 5/2)', '2.5, 2.5'], answer: '(2,5; 2,5)', explanation: 'M = ((6+(−1))/2, (3+2)/2) = (5/2, 5/2) = (2,5; 2,5) ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(3, −1) en radius 5, met koord CD waar C(6, 3) en D(−1, 2), middelpunt M(2,5; 2,5). Verifieer dat OM loodreg is op CD.', answer: 'Gradiënt CD = (2−3)/(−1−6) = −1/−7 = 1/7\nGradiënt OM = (2,5−(−1))/(2,5−3) = 3,5/(−0,5) = −7\nProduk = (1/7)×(−7) = −1 ✓ OM⊥CD bevestig.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(3, -1)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(6, 3)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-1, 2)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(2,5, 2,5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Gemengde moeilike kombinasie
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²=18. Toon aan dat die lyn y=x+6 ʼn raaklyn aan hierdie sirkel is, en bepaal die raakpunt.', answer: 'Vervang y=x+6: x²+(x+6)²=18 → x²+x²+12x+36=18 → 2x²+12x+18=0 → x²+6x+9=0 → (x+3)²=0.\nHerhaalde wortel x=−3 bevestig raking. y=−3+6=3. Raakpunt: (−3, 3).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê enige lyn met gradiënt −5/12 wat deur ʼn punt op (x−1)²+(y−2)²=169 gaan, is ʼn raaklyn aan die sirkel. Is hy korrek? Verduidelik.', answer: 'Nee. ʼn Gradiënt van −5/12 werk slegs as raaklyngradiënt by die spesifieke punte op die sirkel waar die radiusgradiënt 12/5 is — naamlik by (6, 14) en die diametraal teenoorgestelde punt (−4, −10). By enige ander punt op die sirkel het die radius ʼn ander gradiënt, dus is die raaklyngradiënt anders.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn sirkel met radius 5 het altyd ʼn groter omtrek as ʼn sirkel met radius 4, ongeag waar die twee sirkels se middelpunte is. Is sy korrek? Verduidelik.', answer: 'Ja. Omtrek = 2πr, dus die omtrek neem direk toe soos die radius toeneem. ʼn Sirkel met radius 5 het omtrek 10π, wat altyd groter is as 8π (die omtrek van ʼn sirkel met radius 4), ongeag waar enige van die twee sirkels se middelpunt is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²−4x+6y−23=0. Beantwoord die volgende.', answer: '', checkMode: 'auto', parts: [
          { label: 'Middelpunt:', correctAnswer: '(2, -3)', correctAnswers: ['(2,-3)', '(2, -3)', '(2, −3)', '(2,−3)'], explanation: 'Voltooi die vierkant: (x²−4x+4)+(y²+6y+9)=23+4+9 → (x−2)²+(y+3)²=36. Middelpunt = (2, −3).' },
          { label: 'Radius:', correctAnswer: '6', explanation: 'r²=36 → r=6' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het sirkelvergelykings, raaklyne en kombinasieprobleme bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Uitstekende werk! Hersien enige gemiste vrae oor raaklynvergelykings of die gemengde kombinasieprobleme en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde oor die voltooiing van die vierkant en die bepaling van raaklyne, en probeer weer.' },
        { minScore: 0, message: 'Hou vol — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block 1 — Standaardsirkelvergelyking
        { difficulty: 'Easy', question: 'Skryf die vergelyking van die sirkel met middelpunt (−2, 4) en radius 7 neer.', checkMode: 'auto', correctAnswer: '(x+2)^2+(y-4)^2=49', correctAnswers: ['(x+2)^2+(y-4)^2=49', '(x+2)2+(y-4)2=49'], answer: '(x+2)^2+(y-4)^2=49', explanation: 'Vervang a=−2, b=4, r=7 in (x−a)²+(y−b)²=r².\n(x−(−2))²+(y−4)²=7²\n(x+2)²+(y−4)²=49 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van (x−7)²+(y+2)²=81.', checkMode: 'auto', correctAnswer: '(7, -2)', correctAnswers: ['(7, -2)', '(7,-2)', '(7, −2)', '(7,−2)'], answer: 'Middelpunt = (7, -2), radius = 9', explanation: 'Verander die tekens binne die hakies: middelpunt = (7, −2). r²=81 → r=9 ✓' },
        { difficulty: 'Medium', question: 'Verifieer dat A(2, 6) op die sirkel (x+1)²+(y−2)²=25 lê. Wat is die waarde van (2+1)²+(6−2)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(2+1)²+(6−2)²=3²+4²=9+16=25=r² ✓\nA(2, 6) voldoen aan die vergelyking en lê dus op die sirkel.' },

        // Block 2 — Voltooi die vierkant om middelpunt en radius te vind
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van x²+y²−8x−4y−16=0 deur die vierkant te voltooi.', answer: '(x²−8x+16)+(y²−4y+4)=16+16+4\n(x−4)²+(y−2)²=36\nMiddelpunt=(4, 2), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het vergelyking x²+y²+6x−10y−2=0. Bepaal die middelpunt en radius deur die vierkant te voltooi.', answer: '(x²+6x+9)+(y²−10y+25)=2+9+25\n(x+3)²+(y−5)²=36\nMiddelpunt=(−3, 5), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt en radius van x²+y²−4x+8y−29=0 deur die vierkant te voltooi.', answer: '(x²−4x+4)+(y²+8y+16)=29+4+16\n(x−2)²+(y+4)²=49\nMiddelpunt=(2, −4), radius=7', checkMode: 'self' },

        // Block 3 — Raaklyn aan 'n sirkel by 'n gegewe punt
        { difficulty: 'Medium', question: 'Vir die sirkel (x−2)²+(y+1)²=169 met middelpunt O(2, −1), bereken die gradiënt van die radius OA waar A(14, 4).', checkMode: 'auto', correctAnswer: '5/12', correctAnswers: ['5/12'], answer: '5/12', explanation: 'm = (4−(−1))/(14−2) = 5/12 ✓' },
        { difficulty: 'Hard', question: 'Vir die sirkel (x−2)²+(y+1)²=169, bereken die gradiënt van die raaklyn by die punt A(14, 4), gegee dat die radius OA gradiënt 5/12 het.', checkMode: 'auto', correctAnswer: '-12/5', correctAnswers: ['-12/5', '−12/5', '-2.4', '-2,4'], answer: '-12/5', explanation: 'Die raaklyngradiënt is die negatiewe resiprook van die radiusgradiënt: m = −1 ÷ (5/12) = −12/5 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die vergelyking van die raaklyn aan die sirkel (x−2)²+(y+1)²=169 by die punt A(14, 4), gegee dat die raaklyngradiënt by A −12/5 is.', answer: 'y − 4 = −12/5(x − 14)\n5y − 20 = −12x + 168\n12x + 5y = 188', checkMode: 'self' },

        // Block 4 — Afstand tot middelpunt / raaklynlengte vanaf 'n eksterne punt
        { difficulty: 'Easy', question: 'Bereken die afstand vanaf die eksterne punt P(3, 16) tot die middelpunt (−2, 4) van die sirkel (x+2)²+(y−4)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(3−(−2))²+(16−4)²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'Die sirkel (x+2)²+(y−4)²=25 het middelpunt (−2, 4) en radius 5. Die afstand vanaf die eksterne punt P(3, 16) tot die middelpunt is 13. Bereken die lengte van die raaklyn vanaf P aan die sirkel.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Raaklynlengte = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Punte word op die Cartesiese vlak geplot: die sirkel (x+2)²+(y−4)²=25 met middelpunt O(−2, 4), en ʼn eksterne punt P(3, 16) met raaklynlengte 12 aan die sirkel. Verduidelik, deur Pythagoras te gebruik, waarom raaklynlengte = √(d²−r²), waar d die afstand OP is en r die radius.', answer: 'Die radius na die raakpunt is loodreg op die raaklyn, dus is die driehoek gevorm deur O, P en die raakpunt T reghoekig by T. Volgens Pythagoras: OP² = OT² + PT², dus d² = r² + (raaklynlengte)², wat gee raaklynlengte = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(-2, 4)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(3, 16)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Sirkel uit middellynseindpunte / koord-middelpunt-loodregtheid
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(2, 5) en B(8, −3). Bepaal die middelpunt van die sirkel.', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', '5, 1'], answer: '(5, 1)', explanation: 'Middelpunt = middelpunt van AB = ((2+8)/2, (5+(−3))/2) = (5, 1) ✓' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(2, 5) en B(8, −3), wat middelpunt (5, 1) gee. Bepaal die radius en vergelyking van die sirkel.', answer: 'Radius = ½×|AB| = ½×√[(8−2)²+(−3−5)²] = ½×√100 = 5\nVergelyking: (x−5)²+(y−1)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(−2, 4) en radius 5. Punte C(1, 8) en D(−6, 7) lê albei op die sirkel. Bepaal die middelpunt M van koord CD.', checkMode: 'auto', correctAnswer: '(-2,5; 7,5)', correctAnswers: ['(-2.5, 7.5)', '(-2,5 ; 7,5)', '(-5/2, 15/2)', '-2.5, 7.5'], answer: '(-2,5; 7,5)', explanation: 'M = ((1+(−6))/2, (8+7)/2) = (−5/2, 15/2) = (−2,5, 7,5) ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(−2, 4) en radius 5, met koord CD waar C(1, 8) en D(−6, 7), middelpunt M(−2,5, 7,5). Verifieer dat OM loodreg is op CD.', answer: 'Gradiënt CD = (7−8)/(−6−1) = −1/−7 = 1/7\nGradiënt OM = (7,5−4)/(−2,5−(−2)) = 3,5/(−0,5) = −7\nProduk = (1/7)×(−7) = −1 ✓ OM⊥CD bevestig.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(-2, 4)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(1, 8)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-6, 7)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(-2,5, 7,5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Gemengde moeilike kombinasie
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²=8. Toon aan dat die lyn y=x+4 ʼn raaklyn aan hierdie sirkel is, en bepaal die raakpunt.', answer: 'Vervang y=x+4: x²+(x+4)²=8 → x²+x²+8x+16=8 → 2x²+8x+8=0 → x²+4x+4=0 → (x+2)²=0.\nHerhaalde wortel x=−2 bevestig raking. y=−2+4=2. Raakpunt: (−2, 2).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê enige lyn met gradiënt −12/5 wat deur ʼn punt op (x−2)²+(y+1)²=169 gaan, is ʼn raaklyn aan die sirkel. Is hy korrek? Verduidelik.', answer: 'Nee. ʼn Gradiënt van −12/5 werk slegs as raaklyngradiënt by die spesifieke punte op die sirkel waar die radiusgradiënt 5/12 is — naamlik by (14, 4) en die diametraal teenoorgestelde punt (−10, −6). By enige ander punt op die sirkel het die radius ʼn ander gradiënt, dus is die raaklyngradiënt anders.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn sirkel met radius 6 het altyd ʼn groter omtrek as ʼn sirkel met radius 5, ongeag waar die twee sirkels se middelpunte is. Is sy korrek? Verduidelik.', answer: 'Ja. Omtrek = 2πr, dus die omtrek neem direk toe soos die radius toeneem. ʼn Sirkel met radius 6 het omtrek 12π, wat altyd groter is as 10π (die omtrek van ʼn sirkel met radius 5), ongeag waar enige van die twee sirkels se middelpunt is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²+2x+8y−32=0. Beantwoord die volgende.', answer: '', checkMode: 'auto', parts: [
          { label: 'Middelpunt:', correctAnswer: '(-1, -4)', correctAnswers: ['(-1,-4)', '(-1, -4)', '(−1, −4)', '(−1,−4)'], explanation: 'Voltooi die vierkant: (x²+2x+1)+(y²+8y+16)=32+1+16 → (x+1)²+(y+4)²=49. Middelpunt = (−1, −4).' },
          { label: 'Radius:', correctAnswer: '7', explanation: 'r²=49 → r=7' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het sirkelvergelykings, raaklyne en kombinasieprobleme bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Uitstekende werk! Hersien enige gemiste vrae oor raaklynvergelykings of die gemengde kombinasieprobleme en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde oor die voltooiing van die vierkant en die bepaling van raaklyne, en probeer weer.' },
        { minScore: 0, message: 'Hou vol — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Block 1 — Standaardsirkelvergelyking
        { difficulty: 'Easy', question: 'Skryf die vergelyking van die sirkel met middelpunt (5, −3) en radius 9 neer.', checkMode: 'auto', correctAnswer: '(x-5)^2+(y+3)^2=81', correctAnswers: ['(x-5)^2+(y+3)^2=81', '(x-5)2+(y+3)2=81'], answer: '(x-5)^2+(y+3)^2=81', explanation: 'Vervang a=5, b=−3, r=9 in (x−a)²+(y−b)²=r².\n(x−5)²+(y−(−3))²=9²\n(x−5)²+(y+3)²=81 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van (x+1)²+(y−9)²=144.', checkMode: 'auto', correctAnswer: '(-1, 9)', correctAnswers: ['(-1, 9)', '(-1,9)', '(−1, 9)', '(−1,9)'], answer: 'Middelpunt = (-1, 9), radius = 12', explanation: 'Verander die tekens binne die hakies: middelpunt = (−1, 9). r²=144 → r=12 ✓' },
        { difficulty: 'Medium', question: 'Verifieer dat A(7, 2) op die sirkel (x−4)²+(y+2)²=25 lê. Wat is die waarde van (7−4)²+(2+2)²?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '(7−4)²+(2+2)²=3²+4²=9+16=25=r² ✓\nA(7, 2) voldoen aan die vergelyking en lê dus op die sirkel.' },

        // Block 2 — Voltooi die vierkant om middelpunt en radius te vind
        { difficulty: 'Easy', question: 'Bepaal die middelpunt en radius van x²+y²−10x−2y+10=0 deur die vierkant te voltooi.', answer: '(x²−10x+25)+(y²−2y+1)=−10+25+1\n(x−5)²+(y−1)²=16\nMiddelpunt=(5, 1), radius=4', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het vergelyking x²+y²+8x+4y−16=0. Bepaal die middelpunt en radius deur die vierkant te voltooi.', answer: '(x²+8x+16)+(y²+4y+4)=16+16+4\n(x+4)²+(y+2)²=36\nMiddelpunt=(−4, −2), radius=6', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt en radius van x²+y²−6y−16=0 deur die vierkant te voltooi.', answer: '(x²)+(y²−6y+9)=16+9\n(x−0)²+(y−3)²=25\nMiddelpunt=(0, 3), radius=5', checkMode: 'self' },

        // Block 3 — Raaklyn aan 'n sirkel by 'n gegewe punt
        { difficulty: 'Medium', question: 'Vir die sirkel (x+3)²+(y−4)²=169 met middelpunt O(−3, 4), bereken die gradiënt van die radius OA waar A(2, 16).', checkMode: 'auto', correctAnswer: '12/5', correctAnswers: ['12/5', '2.4', '2,4'], answer: '12/5', explanation: 'm = (16−4)/(2−(−3)) = 12/5 ✓' },
        { difficulty: 'Hard', question: 'Vir die sirkel (x+3)²+(y−4)²=169, bereken die gradiënt van die raaklyn by die punt A(2, 16), gegee dat die radius OA gradiënt 12/5 het.', checkMode: 'auto', correctAnswer: '-5/12', correctAnswers: ['-5/12', '−5/12'], answer: '-5/12', explanation: 'Die raaklyngradiënt is die negatiewe resiprook van die radiusgradiënt: m = −1 ÷ (12/5) = −5/12 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die vergelyking van die raaklyn aan die sirkel (x+3)²+(y−4)²=169 by die punt A(2, 16), gegee dat die raaklyngradiënt by A −5/12 is.', answer: 'y − 16 = −5/12(x − 2)\n12y − 192 = −5x + 10\n5x + 12y = 202', checkMode: 'self' },

        // Block 4 — Afstand tot middelpunt / raaklynlengte vanaf 'n eksterne punt
        { difficulty: 'Easy', question: 'Bereken die afstand vanaf die eksterne punt P(6, 14) tot die middelpunt (1, 2) van die sirkel (x−1)²+(y−2)²=25.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'd = √[(6−1)²+(14−2)²] = √[25+144] = √169 = 13 ✓' },
        { difficulty: 'Medium', question: 'Die sirkel (x−1)²+(y−2)²=25 het middelpunt (1, 2) en radius 5. Die afstand vanaf die eksterne punt P(6, 14) tot die middelpunt is 13. Bereken die lengte van die raaklyn vanaf P aan die sirkel.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: 'Raaklynlengte = √(d²−r²) = √(169−25) = √144 = 12 ✓' },
        { difficulty: 'Hard', question: 'Punte word op die Cartesiese vlak geplot: die sirkel (x−1)²+(y−2)²=25 met middelpunt O(1, 2), en ʼn eksterne punt P(6, 14) met raaklynlengte 12 aan die sirkel. Verduidelik, deur Pythagoras te gebruik, waarom raaklynlengte = √(d²−r²), waar d die afstand OP is en r die radius.', answer: 'Die radius na die raakpunt is loodreg op die raaklyn, dus is die driehoek gevorm deur O, P en die raakpunt T reghoekig by T. Volgens Pythagoras: OP² = OT² + PT², dus d² = r² + (raaklynlengte)², wat gee raaklynlengte = √(d²−r²).', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 210 176" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="60" cy="150" r="90" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="60" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="60" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" /><line x1="60" y1="150" x2="168" y2="60" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4 3" /><rect x="60" y="60" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="60" cy="150" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="60" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="168" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="52" y="166" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">O(1, 2)</text><text x="52" y="54" fill="#374151" font-weight="700" font-size="11" text-anchor="end">T</text><text x="176" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(6, 14)</text><text x="50" y="109" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">r = 5</text><text x="114" y="54" fill="#2563eb" font-weight="700" font-size="11" text-anchor="middle">PT = 12</text><text x="126" y="107" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OP = 13</text></svg>` },

        // Block 5 — Sirkel uit middellynseindpunte / koord-middelpunt-loodregtheid
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(1, −2) en B(9, 4). Bepaal die middelpunt van die sirkel.', checkMode: 'auto', correctAnswer: '(5, 1)', correctAnswers: ['(5, 1)', '(5,1)', '5, 1'], answer: '(5, 1)', explanation: 'Middelpunt = middelpunt van AB = ((1+9)/2, (−2+4)/2) = (5, 1) ✓' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middellynseindpunte by A(1, −2) en B(9, 4), wat middelpunt (5, 1) gee. Bepaal die radius en vergelyking van die sirkel.', answer: 'Radius = ½×|AB| = ½×√[(9−1)²+(4−(−2))²] = ½×√100 = 5\nVergelyking: (x−5)²+(y−1)²=25', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(1, 2) en radius 5. Punte C(4, 6) en D(−3, 5) lê albei op die sirkel. Bepaal die middelpunt M van koord CD.', checkMode: 'auto', correctAnswer: '(0,5; 5,5)', correctAnswers: ['(0.5, 5.5)', '(0,5 ; 5,5)', '(1/2, 11/2)', '0.5, 5.5'], answer: '(0,5; 5,5)', explanation: 'M = ((4+(−3))/2, (6+5)/2) = (1/2, 11/2) = (0,5; 5,5) ✓' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O(1, 2) en radius 5, met koord CD waar C(4, 6) en D(−3, 5), middelpunt M(0,5; 5,5). Verifieer dat OM loodreg is op CD.', answer: 'Gradiënt CD = (5−6)/(−3−4) = −1/−7 = 1/7\nGradiënt OM = (5,5−2)/(0,5−1) = 3,5/(−0,5) = −7\nProduk = (1/7)×(−7) = −1 ✓ OM⊥CD bevestig.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="100" cy="60" r="70" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><line x1="46" y1="105" x2="154" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="105" stroke="#0f1f3d" stroke-width="1.5" /><rect x="90" y="95" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.2" /><circle cx="100" cy="60" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="46" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="105" r="3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="100" cy="105" r="3" fill="#ea580c" stroke="#0f1f3d" stroke-width="1" /><text x="108" y="52" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">O(1, 2)</text><text x="38" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4, 6)</text><text x="162" y="121" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(-3, 5)</text><text x="110" y="119" fill="#ea580c" font-weight="700" font-size="11" text-anchor="start">M(0,5, 5,5)</text><text x="110" y="84.5" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">OM</text><text x="133" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">r = 5</text></svg>` },

        // Block 6 — Gemengde moeilike kombinasie
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²=32. Toon aan dat die lyn y=x+8 ʼn raaklyn aan hierdie sirkel is, en bepaal die raakpunt.', answer: 'Vervang y=x+8: x²+(x+8)²=32 → x²+x²+16x+64=32 → 2x²+16x+32=0 → x²+8x+16=0 → (x+4)²=0.\nHerhaalde wortel x=−4 bevestig raking. y=−4+8=4. Raakpunt: (−4, 4).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê enige lyn met gradiënt −5/12 wat deur ʼn punt op (x+3)²+(y−4)²=169 gaan, is ʼn raaklyn aan die sirkel. Is hy korrek? Verduidelik.', answer: 'Nee. ʼn Gradiënt van −5/12 werk slegs as raaklyngradiënt by die spesifieke punte op die sirkel waar die radiusgradiënt 12/5 is — naamlik by (2, 16) en die diametraal teenoorgestelde punt (−8, −8). By enige ander punt op die sirkel het die radius ʼn ander gradiënt, dus is die raaklyngradiënt anders.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn sirkel met radius 8 het altyd ʼn groter omtrek as ʼn sirkel met radius 6, ongeag waar die twee sirkels se middelpunte is. Is sy korrek? Verduidelik.', answer: 'Ja. Omtrek = 2πr, dus die omtrek neem direk toe soos die radius toeneem. ʼn Sirkel met radius 8 het omtrek 16π, wat altyd groter is as 12π (die omtrek van ʼn sirkel met radius 6), ongeag waar enige van die twee sirkels se middelpunt is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het vergelyking x²+y²−12x+4y−24=0. Beantwoord die volgende.', answer: '', checkMode: 'auto', parts: [
          { label: 'Middelpunt:', correctAnswer: '(6, -2)', correctAnswers: ['(6,-2)', '(6, -2)', '(6, −2)', '(6,−2)'], explanation: 'Voltooi die vierkant: (x²−12x+36)+(y²+4y+4)=24+36+4 → (x−6)²+(y+2)²=64. Middelpunt = (6, −2).' },
          { label: 'Radius:', correctAnswer: '8', explanation: 'r²=64 → r=8' },
        ] },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het sirkelvergelykings, raaklyne en kombinasieprobleme bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Uitstekende werk! Hersien enige gemiste vrae oor raaklynvergelykings of die gemengde kombinasieprobleme en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde oor die voltooiing van die vierkant en die bepaling van raaklyne, en probeer weer.' },
        { minScore: 0, message: 'Hou vol — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het analitiese meetkunde bemeester.' },
    { minScore: 15, message: 'Uitstekende werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou vol, werk weer deur die studiegids.' },
  ],
}
