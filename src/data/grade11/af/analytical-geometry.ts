import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: x-coordinates → blue   (#2563eb)
//            y-coordinates → green  (#16a34a)
//            final answer  → orange (#ea580c)
// Section 2: gradient step → red    (#dc2626)
//            substitution  → yellow (#d97706)
//            final equation→ green  (#16a34a)
// Section 3: known gradient → red   (#dc2626)
//            new gradient   → green (#16a34a)
//            final equation → blue  (#2563eb)
// Section 4: gradient values → blue (#2563eb)
//            angle values   → orange(#ea580c)
//            +180° correction→ red  (#dc2626)
// Section 5: first line/side → red  (#dc2626)
//            second line/side→ yellow(#d97706)
//            third line/side → green(#16a34a)
//            final conclusion→ blue (#2563eb)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#d97706;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analitiese Meetkunde',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: DISTANCE, GRADIENT AND MIDPOINT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-distance-gradient-midpoint',
      title: 'Hersiening — Afstand, Gradiënt en Middelpunt',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons met nuwe lynvergelykings werk, hersien ons drie Graad 10-gereedskapstukke waarop Analitiese Meetkunde staatmaak. Vir twee punte (${bl('x₁')}, ${gr('y₁')}) en (${bl('x₂')}, ${gr('y₂')}): die <strong>afstandsformule</strong> is d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²], die <strong>gradiëntformule</strong> is m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')}), en die <strong>middelpuntformule</strong> is M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2). Hierdie drie formules laat ons toe om enige meting tussen twee punte op die Cartesiese vlak te bereken sonder om skaalgetrou te teken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-koördinate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-koördinate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('finale antwoord')}</span>` +
        `</div>` +

        // ── Three formulas ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Afstand</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²]</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die reguitlyn-lengte tussen twee punte.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Gradiënt</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')})</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die helling of steilheid van die lyn tussen twee punte.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Middelpunt</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die presiese halfpadpunt tussen twee punte.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die volgorde van die punte maak nie saak vir afstand en middelpunt nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy kan (${bl('x₁')}, ${gr('y₁')}) en (${bl('x₂')}, ${gr('y₂')}) omruil en steeds dieselfde afstand en middelpunt kry. Vir die gradiënt gee die omruiling van die punte dieselfde resultaat, aangesien beide die teller en die noemer saam van teken verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gegewe A(2, 5) en B(3, 1), bereken die afstand AB.',
          answer: `d = ${or('√17')}`,
          steps: [
            `Identifiseer (${bl('x₁')}, ${gr('y₁')}) = (${bl('2')}, ${gr('5')}) en (${bl('x₂')}, ${gr('y₂')}) = (${bl('3')}, ${gr('1')}).`,
            `Vervang in d = √[(${bl('x₂')} − ${bl('x₁')})² + (${gr('y₂')} − ${gr('y₁')})²].`,
            `Bereken: d = √[(${bl('3')} − ${bl('2')})² + (${gr('1')} − ${gr('5')})²] = √[1 + 16] = ${or('√17')}`,
          ],
        },
        {
          question: 'Gegewe A(2, 5) en B(3, 1), bereken die gradiënt van AB.',
          answer: `m = ${or('−4')}`,
          steps: [
            `Vervang in m = (${gr('y₂')} − ${gr('y₁')}) / (${bl('x₂')} − ${bl('x₁')}).`,
            `Bereken: m = (${gr('1')} − ${gr('5')}) / (${bl('3')} − ${bl('2')}) = ${or('−4')}`,
          ],
        },
        {
          question: 'Gegewe A(2, 5) en B(3, 1), bepaal die middelpunt van AB.',
          answer: `M = ${or('(2,5, 3)')}`,
          steps: [
            `Vervang in M = ((${bl('x₁')} + ${bl('x₂')}) / 2, (${gr('y₁')} + ${gr('y₂')}) / 2).`,
            `Bereken: M = ((${bl('2')} + ${bl('3')}) / 2, (${gr('5')} + ${gr('1')}) / 2) = ${or('(2,5, 3)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — distance with integer answer ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken die afstand tussen (0, 0) en (3, 4).',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Vervang in d = √[(x₂ − x₁)² + (y₂ − y₁)²]:\nd = √[(3 − 0)² + (4 − 0)²] = √[9 + 16] = √25 = 5 ✓',
        },

        // ── Q2 Easy — gradient between two points ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken die gradiënt van die lyn wat (1, 2) en (5, 10) verbind.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'm = (y₂ − y₁) / (x₂ − x₁) = (10 − 2) / (5 − 1) = 8/4 = 2 ✓',
        },

        // ── Q3 Medium — midpoint ─────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die middelpunt van die lynstuk wat (−2, 7) en (6, −3) verbind.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)', '2, 2'],
          explanation: 'M = ((−2 + 6)/2, (7 + (−3))/2) = (4/2, 4/2) = (2, 2) ✓',
        },

        // ── Q4 Hard — multi-part: distance, gradient and midpoint ────────────
        {
          difficulty: 'Hard',
          question: 'Gegewe A(−1, −1) en B(5, 7), bereken elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Afstand AB',
              correctAnswer: '10',
              explanation: 'd = √[(5 − (−1))² + (7 − (−1))²] = √[36 + 64] = √100 = 10 ✓',
            },
            {
              label: 'b) Gradiënt van AB',
              correctAnswer: '4/3',
              correctAnswers: ['4/3', '1.33', '1.3'],
              explanation: 'm = (7 − (−1)) / (5 − (−1)) = 8/6 = 4/3 ✓',
            },
            {
              label: 'c) Middelpunt van AB',
              correctAnswer: '(2, 3)',
              correctAnswers: ['(2, 3)', '(2,3)', '2, 3'],
              explanation: 'M = ((−1 + 5)/2, (−1 + 7)/2) = (4/2, 6/2) = (2, 3) ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat punte A en B geplot wys, met ʼn stippel-regte-hoek-driehoek tussen hulle wat die horisontale en vertikale afstand illustreer wat in die afstandsformule gebruik word, en die middelpunt M gemerk tussen A en B',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="160" x2="30" y2="15" stroke="#0f1f3d" stroke-width="2"/><line x1="60" y1="120" x2="170" y2="45" stroke="#2563eb" stroke-width="2.5"/><line x1="60" y1="120" x2="170" y2="120" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="170" y1="120" x2="170" y2="45" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><circle cx="60" cy="120" r="4" fill="#0f1f3d"/><circle cx="170" cy="45" r="4" fill="#0f1f3d"/><circle cx="115" cy="82.5" r="4" fill="#ea580c"/><text x="48" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="end">A</text><text x="176" y="42" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">B</text><text x="122" y="80" font-size="12" font-weight="700" fill="#ea580c" text-anchor="start">M</text><text x="115" y="136" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">&#916;x</text><text x="178" y="86" font-size="12" font-weight="700" fill="#dc2626" text-anchor="start">&#916;y</text><text x="78" y="94" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">d</text><text x="205" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="22" y="20" font-size="11" fill="#374151">y</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die afstand-, gradiënt- en middelpuntformules hersien met uitgewerkte voorbeelde op die Cartesiese vlak" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUATION OF A LINE THROUGH TWO POINTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equation-of-a-line-two-points',
      title: 'Vergelyking van ʼn Lyn Deur Twee Punte',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Om die vergelyking van ʼn lyn deur twee bekende punte te vind, ${re('bereken')} ons eers ${re('die gradiënt m')} met die gradiëntformule, dan ${ye('vervang ons m en een van die punte in y − y₁ = m(x − x₁)')}, en ${gr('vereenvoudig ons na die vorm y = mx + c')}. Hierdie metode werk vir enige twee punte, mits hulle nie dieselfde x-koördinaat deel nie (wat ʼn onbepaalde, vertikale lyn sou gee).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gradiëntberekening')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('puntvervanging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vergelyking')}</span>` +
        `</div>` +

        // ── Three-step method ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie-stap-metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Bereken m')} — gebruik m = (y₂ − y₁) / (x₂ − x₁) om die gradiënt tussen die twee gegewe punte te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fefce8;border:1.5px solid #fef08a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${ye('Vervang')} — kies enige een van die twee gegewe punte en vervang m en die punt in y − y₁ = m(x − x₁).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vereenvoudig')} — vermenigvuldig uit en herrangskik na die vorm y = mx + c.</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ──────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Vertikale lyne</p>` +
        `<p style="margin:0;color:#7c2d12;">As twee punte dieselfde x-koördinaat deel, is die gradiënt onbepaald en is die lyn vertikaal. Die vergelyking daarvan is bloot <strong>x = a</strong>, waar a die gedeelde x-waarde is. Die drie-stap-metode hierbo is nie op vertikale lyne van toepassing nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die vergelyking van die lyn deur A(−3, −4) en B(4, −2).',
          answer: `${gr('y = 2/7x − 22/7')}`,
          steps: [
            `${re('Bereken die gradiënt:')} m = (−2 − (−4)) / (4 − (−3)) = ${re('2/7')}`,
            `${ye('Vervang punt A(−3, −4) in y − y₁ = m(x − x₁):')} y − (−4) = 2/7(x − (−3))`,
            `Vereenvoudig: y + 4 = 2/7x + 6/7, dus ${gr('y = 2/7x − 22/7')}`,
          ],
        },
        {
          question: 'Vind die vergelyking van die lyn deur P(0, 6) en Q(2, 0).',
          answer: `${gr('y = −3x + 6')}`,
          steps: [
            `${re('Bereken die gradiënt:')} m = (0 − 6) / (2 − 0) = ${re('−3')}`,
            `${ye('Vervang punt P(0, 6) in y − y₁ = m(x − x₁):')} y − 6 = −3(x − 0)`,
            `Vereenvoudig: ${gr('y = −3x + 6')}`,
          ],
        },
        {
          question: 'Vind die vergelyking van die lyn deur C(1, 1) en D(5, 9), en bepaal waar dit die y-as sny.',
          answer: `${gr('y = 2x − 1')}, sny die y-as by (0, −1)`,
          steps: [
            `${re('Bereken die gradiënt:')} m = (9 − 1) / (5 − 1) = ${re('2')}`,
            `${ye('Vervang punt C(1, 1) in y − y₁ = m(x − x₁):')} y − 1 = 2(x − 1)`,
            `Vereenvoudig: ${gr('y = 2x − 1')}`,
            `Stel x = 0 om die y-afsnit te vind: y = 2(0) − 1 = −1, dus sny die lyn die y-as by (0, −1).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — equation from two points ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die vergelyking van die lyn deur (0, 3) en (2, 7).',
          answer: 'y = 2x + 3',
          checkMode: 'auto',
          correctAnswer: 'y = 2x + 3',
          correctAnswers: ['y = 2x + 3', 'y=2x+3'],
          explanation: 'Stap 1: m = (7 − 3)/(2 − 0) = 4/2 = 2\nStap 2: y − 3 = 2(x − 0)\nStap 3: y = 2x + 3 ✓',
        },

        // ── Q6 Medium — equation with negative gradient ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vergelyking van die lyn deur (−2, 5) en (4, −7).',
          answer: 'y = -2x + 1',
          checkMode: 'auto',
          correctAnswer: 'y = -2x + 1',
          correctAnswers: ['y = -2x + 1', 'y=-2x+1', 'y = −2x + 1', 'y=−2x+1'],
          explanation: 'Stap 1: m = (−7 − 5)/(4 − (−2)) = −12/6 = −2\nStap 2: y − 5 = −2(x − (−2))\nStap 3: y − 5 = −2x − 4 → y = −2x + 1 ✓',
        },

        // ── Q7 Medium — vertical line with explanation ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vergelyking van die lyn deur (3, 3) en (3, 8), en verduidelik watter soort lyn dit is.',
          answer: 'Die vergelyking is x = 3. Dit is ʼn vertikale lyn omdat albei punte dieselfde x-koördinaat deel, wat die gradiënt onbepaald maak.',
          checkMode: 'self',
        },

        // ── Q8 Hard — horizontal line multi-part ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Gegewe die lyn deur (1, 4) en (6, 4), beantwoord die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die vergelyking van die lyn.',
              correctAnswer: 'y = 4',
              correctAnswers: ['y = 4', 'y=4'],
              explanation: 'Stap 1: m = (4 − 4)/(6 − 1) = 0/5 = 0\nStap 2: y − 4 = 0(x − 1)\nStap 3: y = 4 ✓',
            },
            {
              label: 'b) Bepaal waar die lyn die y-as sny. Verduidelik jou redenasie.',
              checkMode: 'self',
              answer: 'Aangesien die vergelyking y = 4 is, is die lyn horisontaal. Dit sny die y-as by (0, 4) omdat die y-waarde altyd 4 is, ongeag x.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat die twee gegewe punte geplot wys, die lyn deur albei getrek, en die gevolglike vergelyking langs die lyn gemerk, met die y-afsnit aangedui waar relevant',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="15" y1="150" x2="205" y2="150" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="170" x2="30" y2="10" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="18" x2="145" y2="168" stroke="#16a34a" stroke-width="2.5"/><circle cx="30" cy="30" r="4" fill="#0f1f3d"/><circle cx="130" cy="150" r="4" fill="#0f1f3d"/><circle cx="30" cy="30" r="7" fill="none" stroke="#ea580c" stroke-width="2"/><text x="38" y="26" font-size="11" font-weight="700" fill="#0f1f3d">P(0, 6)</text><text x="38" y="44" font-size="10" font-weight="700" fill="#ea580c">y-afsnit</text><text x="130" y="166" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Q(2, 0)</text><text x="140" y="60" font-size="13" font-weight="700" fill="#16a34a">y = &#8722;3x + 6</text><text x="20" y="163" font-size="10" fill="#374151">O</text><text x="205" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="22" y="15" font-size="11" fill="#374151">y</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die vergelyking van ʼn reguit lyn deur twee punte te vind deur die gradiëntformule en punt-gradiëntvorm te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PARALLEL AND PERPENDICULAR LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'parallel-perpendicular-lines',
      title: 'Parallelle en Loodregte Lyne',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Twee lyne is ${re('parallel')} as, en slegs as, hulle gelyke gradiënte het: ${re('m₁ = m₂')}. Twee lyne is ${gr('loodreg')} as, en slegs as, die produk van hul gradiënte −1 is: ${re('m₁')} × ${gr('m₂')} = −1, wat beteken dat elke gradiënt die negatiewe resiprook van die ander is. Om die vergelyking van ʼn lyn deur ʼn gegewe punt te vind wat parallel of loodreg aan ʼn bekende lyn is, ${re('identifiseer')} ons eers ${re('die gradiënt van die bekende lyn')}, dan ${gr('pas ons die parallel- of loodregte reël toe om die nuwe gradiënt te vind')}, en vervang ons dan die nuwe gradiënt en die gegewe punt in ${bl('y − y₁ = m(x − x₁)')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('bekende / gegewe gradiënt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende nuwe gradiënt')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('finale vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee reëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Parallelle lyne</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">${re('m₁ = m₂')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Parallelle lyne ontmoet mekaar nooit nie — hulle het gelyke gradiënte en verskillende y-afsnitte.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Loodregte lyne</p>` +
        `<p style="font-size:14px;margin-bottom:6px;color:#374151;">${re('m₁')} × ${gr('m₂')} = −1, dus ${gr('m₂ = −1 / m₁')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Loodregte lyne ontmoet mekaar teen ʼn regte hoek — die nuwe gradiënt is die negatiewe resiprook van die gegewe gradiënt.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Metode: die vergelyking van ʼn parallelle of loodregte lyn vind</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — ${re('Identifiseer die gradiënt')} van die bekende lyn.<br><strong>Stap 2</strong> — Pas die reël toe om ${gr('die nuwe gradiënt')} te vind.<br><strong>Stap 3</strong> — Vervang ${gr('die nuwe gradiënt')} en die gegewe punt in ${bl('y − y₁ = m(x − x₁)')} en vereenvoudig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die vergelyking van die lyn deur (2, −1) parallel aan y = 3x + 4.',
          answer: `${bl('y = 3x − 7')}`,
          steps: [
            `Identifiseer die gradiënt van die gegewe lyn: ${re('m = 3')}.`,
            `Aangesien parallelle lyne dieselfde gradiënt deel, het die nuwe lyn ook ${re('m = 3')}.`,
            `Vervang (2, −1) en ${re('m = 3')} in y − y₁ = m(x − x₁): y − (−1) = 3(x − 2).`,
            `Vereenvoudig: y + 1 = 3x − 6, dus ${bl('y = 3x − 7')}.`,
          ],
        },
        {
          question: 'Vind die vergelyking van die lyn deur (4, 5) loodreg aan y = −2x + 1.',
          answer: `${bl('y = ½x + 3')}`,
          steps: [
            `Identifiseer die gradiënt van die gegewe lyn: ${re('m₁ = −2')}.`,
            `Bereken die loodregte gradiënt: ${gr('m₂ = −1/m₁ = −1/(−2) = ½')}.`,
            `Vervang (4, 5) en ${gr('m₂ = ½')} in y − y₁ = m(x − x₁): y − 5 = ½(x − 4).`,
            `Vereenvoudig: y − 5 = ½x − 2, dus ${bl('y = ½x + 3')}.`,
          ],
        },
        {
          question: 'Bepaal of die lyn deur A(1, 2) en B(4, 8) parallel, loodreg, of geeneen aan die lyn deur C(0, 3) en D(2, −1) is nie.',
          answer: 'Nòg parallel, nòg loodreg',
          steps: [
            `Bereken die gradiënt van AB: ${re('m₁ = (8 − 2)/(4 − 1) = 6/3 = 2')}.`,
            `Bereken die gradiënt van CD: ${re('m₂ = (−1 − 3)/(2 − 0) = −4/2 = −2')}.`,
            `Kontroleer die parallel-voorwaarde: m₁ ≠ m₂ (2 ≠ −2), dus is die lyne nie parallel nie.`,
            `Kontroleer die loodregte voorwaarde: ${re('m₁')} × ${re('m₂')} = 2 × (−2) = −4 ≠ −1, dus is die lyne nie loodreg nie.`,
            `Gevolgtrekking: die lyne is <strong>nòg parallel, nòg loodreg</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — gradient of a parallel line ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf die gradiënt van ʼn lyn parallel aan y = 5x − 2 neer.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Parallelle lyne het gelyke gradiënte. Die gradiënt van y = 5x − 2 is m = 5, dus het ʼn parallelle lyn ook m = 5 ✓',
        },

        // ── Q10 Easy — gradient of a perpendicular line ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf die gradiënt van ʼn lyn loodreg aan y = 4x + 1 neer.',
          answer: '-1/4',
          checkMode: 'auto',
          correctAnswer: '-1/4',
          correctAnswers: ['-1/4', '−1/4', '-0.25'],
          explanation: 'Vir loodregte lyne geld m₁ × m₂ = −1.\nGegewe m₁ = 4: m₂ = −1/4 ✓',
        },

        // ── Q11 Medium — equation of parallel line ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vergelyking van die lyn deur (0, −3) parallel aan y = −3x + 5.',
          answer: 'y = -3x - 3',
          checkMode: 'auto',
          correctAnswer: 'y = -3x - 3',
          correctAnswers: ['y = -3x - 3', 'y=-3x-3', 'y = −3x − 3', 'y=−3x−3'],
          explanation: 'Gradiënt: m = −3 (dieselfde as die parallelle lyn).\nVervang (0, −3): y − (−3) = −3(x − 0) → y = −3x − 3 ✓',
        },

        // ── Q12 Hard — equation of perpendicular line ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die vergelyking van die lyn deur (2, 6) loodreg aan y = ⅓x − 2.',
          answer: 'y = -3x + 12',
          checkMode: 'auto',
          correctAnswer: 'y = -3x + 12',
          correctAnswers: ['y = -3x + 12', 'y=-3x+12', 'y = −3x + 12'],
          explanation: 'Gradiënt van die gegewe lyn: m₁ = 1/3.\nLoodregte gradiënt: m₂ = −3.\nVervang (2, 6): y − 6 = −3(x − 2) → y − 6 = −3x + 6 → y = −3x + 12 ✓',
        },

        // ── Q12b Hard — loodregtheid gebruik om ʼn onbekende koördinaat te vind ──
        {
          difficulty: 'Hard',
          question: 'Punte A(1, 2), B(5, 4) en D(k, −4) word gegee sodat AD ⊥ AB. Bepaal die waarde van k.',
          answer: 'Stap 1: Bereken die gradiënt van AB.\nm_AB = (4 − 2)/(5 − 1) = 2/4 = 1/2\n\nStap 2: Aangesien AD ⊥ AB, is die gradiënt van AD die negatiewe resiprook.\nm_AD = −1 ÷ (1/2) = −2\n\nStap 3: Skryf die gradiënt van AD met die onbekende koördinaat k, en stel dit gelyk aan −2.\nm_AD = (−4 − 2)/(k − 1) = −6/(k − 1)\n−6/(k − 1) = −2\n\nStap 4: Los op vir k.\n−6 = −2(k − 1)\n−6 = −2k + 2\n−8 = −2k\nk = 4 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat twee parallelle lyne wys met ooreenstemmende gradiëntdriehoeke langs elkeen geteken, en ʼn aparte diagram wat twee loodregte lyne wys wat by ʼn regte hoek ontmoet met hul gradiëntdriehoeke geteken om die negatiewe-resiprook-verhouding te wys',

      diagramSvg:
        '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="160" y1="15" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1.5"/><text x="80" y="18" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Parallelle lyne</text><line x1="20" y1="155" x2="60" y2="155" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="60" y1="155" x2="60" y2="110" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="20" y1="155" x2="60" y2="110" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="125" x2="80" y2="125" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="80" y1="125" x2="80" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="40" y1="125" x2="80" y2="80" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="167" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8321;</text><text x="60" y="137" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8322;</text><text x="80" y="182" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">m&#8321; = m&#8322;</text><text x="245" y="18" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Loodregte lyne</text><line x1="205" y1="165" x2="285" y2="85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="205" y1="165" x2="285" y2="165" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="285" y1="165" x2="285" y2="85" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="205" y1="85" x2="285" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="205" y1="85" x2="285" y2="85" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="205" y1="85" x2="205" y2="165" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3"/><polygon points="245,125 252,118 259,125 252,132" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="245" y="178" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m&#8321;</text><text x="198" y="90" font-size="12" font-weight="700" fill="#16a34a" text-anchor="end">m&#8322;</text><text x="245" y="182" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">m&#8321; &#215; m&#8322; = &#8722;1</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die parallel- en loodregte-gradiëntreëls verduidelik en wys hoe om die vergelyking van ʼn lyn deur ʼn gegewe punt te vind met elke reël" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — INCLINATION OF A LINE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inclination-of-a-line',
      title: 'Inklinasie van ʼn Lyn',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Die inklinasie van ʼn lyn is die hoek ${or('θ')} wat die lyn met die positiewe rigting van die x-as maak, anti-kloksgewys gemeet, waar 0° ≤ ${or('θ')} &lt; 180°. Die gradiënt en die inklinasie word verbind deur die formule ${bl('m')} = tan ${or('θ')}. As die gradiënt positief is, is ${or('θ')} ʼn skerp hoek tussen 0° en 90°. As die gradiënt negatief is, sal die sakrekenaar ʼn negatiewe hoek gee, wat ${re('reggestel moet word deur 180° by te tel')} om die korrekte inklinasie tussen 90° en 180° te kry. ʼn Horisontale lyn het ${or('θ = 0°')} en ʼn onbepaalde (vertikale) lyn het ${or('θ = 90°')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradiëntwaardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekwaardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('+180°-regstelling — algemene fout')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelgevalle</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Positiewe gradiënt</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m')} &gt; 0 → ${or('0° &lt; θ &lt; 90°')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die sakrekenaar se antwoord is korrek. Geen aanpassing nodig nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Negatiewe gradiënt</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m')} &lt; 0 → ${re('tel 180° by')} die sakrekenaarwaarde</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die sakrekenaar gee ʼn negatiewe hoek. Tel 180° by om die ware inklinasie tussen 90° en 180° te vind.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Spesiale gevalle</p>` +
        `<p style="font-size:14px;color:#374151;margin-bottom:6px;">${bl('m = 0')} → ${or('θ = 0°')} &nbsp;|&nbsp; vertikaal → ${or('θ = 90°')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Horisontale lyne het nul gradiënt en nul inklinasie. Vertikale lyne het onbepaalde gradiënt en 90° inklinasie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die formule</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('m')} = tan ${or('θ')} &nbsp;⟺&nbsp; ${or('θ')} = tan⁻¹(${bl('m')})<br>As ${bl('m')} &lt; 0: ${or('θ')} = tan⁻¹(${bl('m')}) ${re('+ 180°')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 1,5.',
          answer: `θ = ${or('56,31°')}`,
          steps: [
            `Vervang in ${bl('m')} = tan ${or('θ')}: tan ${or('θ')} = ${bl('1,5')}.`,
            `Bereken ${or('θ')} = tan⁻¹(${bl('1,5')}) = ${or('56,31°')}.`,
            `Aangesien die gradiënt positief is, is hierdie hoek reeds korrek: ${or('θ = 56,31°')}.`,
          ],
        },
        {
          question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = −0,84.',
          answer: `θ = ${or('140,0°')}`,
          steps: [
            `Vervang in ${bl('m')} = tan ${or('θ')}: tan ${or('θ')} = ${bl('−0,84')}.`,
            `Bereken die sakrekenaarwaarde: tan⁻¹(${bl('−0,84')}) = ${or('−40,0°')}.`,
            `Aangesien die gradiënt negatief is, lê die ware inklinasie tussen 90° en 180°, dus ${re('tel ons 180° by')}: ${or('θ')} = ${or('−40,0°')} ${re('+ 180°')} = ${or('140,0°')}.`,
          ],
        },
        {
          question: 'Vind die gradiënt van ʼn lyn met inklinasie θ = 120°.',
          answer: `m = ${bl('−1,73')}`,
          steps: [
            `Vervang in ${bl('m')} = tan ${or('θ')}: ${bl('m')} = tan(${or('120°')}).`,
            `Bereken: ${bl('m')} = ${bl('−1,73')} (afgerond tot 2 desimale plekke).`,
            `Let op dat dit negatief is, wat ooreenstem met ʼn inklinasie groter as 90°.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy — inclination with exact value ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 1.',
          answer: '45',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '45°', '45 grade'],
          explanation: 'tan θ = 1 → θ = tan⁻¹(1) = 45°.\nDie gradiënt is positief, dus is geen regstelling nodig nie. θ = 45° ✓',
        },

        // ── Q14 Medium — inclination with positive decimal gradient ──────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 0,5774, afgerond tot een desimale plek.',
          answer: 'θ = tan⁻¹(0,5774) ≈ 30,0°',
          checkMode: 'self',
        },

        // ── Q15 Medium — inclination with negative gradient ──────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = −1,19, afgerond tot een desimale plek.',
          answer: 'θ = tan⁻¹(−1,19) ≈ −49,9°. Aangesien die gradiënt negatief is, tel ons 180° by: θ = −49,9° + 180° = 130,1°',
          checkMode: 'self',
        },

        // ── Q16 Hard — gradient from inclination ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bepaal die gradiënt van ʼn lyn met inklinasie 150°, afgerond tot twee desimale plekke.',
          answer: 'm = tan(150°) = −tan(30°) ≈ −0,58',
          checkMode: 'self',
        },

        // ── Q16b Hard — inklinasie gebruik om ʼn onbekende koördinaat te vind ──
        {
          difficulty: 'Hard',
          question: 'Lyn AB het ʼn inklinasie van 135°, en gaan deur A(2, −1) en B(t, 3). Bepaal die waarde van t.',
          answer: 'Stap 1: Skakel die inklinasie om na ʼn gradiënt.\nm = tan(135°) = −1\n\nStap 2: Skryf die gradiënt van AB met die onbekende koördinaat t, en stel dit gelyk aan −1.\nm_AB = (3 − (−1))/(t − 2) = 4/(t − 2)\n4/(t − 2) = −1\n\nStap 3: Los op vir t.\n4 = −1(t − 2)\n4 = −t + 2\nt = 2 − 4\nt = −2 ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat ʼn lyn wys met inklinasiehoek θ gemerk by die punt waar die lyn die x-as kruis, anti-kloksgewys gemeet vanaf die positiewe x-as, vir beide ʼn positiewe-gradiënt-voorbeeld en ʼn negatiewe-gradiënt-voorbeeld langs mekaar',

      diagramSvg:
        '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="160" y1="15" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1.5"/><text x="82" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Positiewe gradiënt</text><line x1="15" y1="150" x2="150" y2="150" stroke="#0f1f3d" stroke-width="2"/><circle cx="55" cy="150" r="3" fill="#0f1f3d"/><line x1="55" y1="150" x2="112" y2="110" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 83,150 A 28,28 0 0 0 78,134" fill="none" stroke="#2563eb" stroke-width="2"/><text x="90" y="140" font-size="13" font-weight="700" fill="#ea580c">&#952;</text><text x="82" y="178" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">0&#176; &lt; &#952; &lt; 90&#176;</text><text x="145" y="145" font-size="11" fill="#374151" text-anchor="end">x</text><text x="245" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Negatiewe gradiënt</text><line x1="170" y1="150" x2="305" y2="150" stroke="#0f1f3d" stroke-width="2"/><circle cx="245" cy="150" r="3" fill="#0f1f3d"/><line x1="245" y1="150" x2="191" y2="105" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="150" x2="264" y2="166" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 273,150 A 28,28 0 0 1 224,132" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 263,150 A 18,18 0 0 0 259,162" fill="none" stroke="#6b7280" stroke-width="1.5"/><text x="258" y="114" font-size="12" font-weight="700" fill="#ea580c">&#952; = 140&#176;</text><text x="266" y="163" font-size="9" font-weight="700" fill="#6b7280">&#8722;40&#176;</text><text x="245" y="178" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">&#8722;40&#176; + 180&#176; = 140&#176;</text><text x="300" y="145" font-size="11" fill="#374151" text-anchor="end">x</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die inklinasie van ʼn lyn verduidelik, die formule m = tan θ, en die +180°-regstelling vir negatiewe gradiënte" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MIXED APPLICATIONS: LINES, ANGLES AND TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-applications-lines-angles-triangles',
      title: 'Gemengde Toepassings — Lyne, Hoeke en Driehoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Analitiese Meetkunde-vrae kombineer dikwels afstand, gradiënt, middelpunt, parallel-/loodregte voorwaardes en inklinasie in een enkele probleem, en gebruik dikwels drie punte om ʼn driehoek op die Cartesiese vlak te vorm. Die hoek tussen twee lyne kan gevind word deur die inklinasie van elke lyn afsonderlik te bereken, en dan die verskil tussen die twee hoeke te bepaal. Hierdie afdeling bring elke gereedskapstuk van hierdie onderwerp saam om gekombineerde probleme op te los, wat is hoe Analitiese Meetkunde tipies geëksamineer word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eerste lyn / sy')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('tweede lyn / sy')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('derde lyn / sy')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('finale gevolgtrekking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die gereedskapstukke kombineer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skets eers</strong> — teken die gegewe punte en die driehoek of lyne om die meetkunde te verstaan voordat jy bereken.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Bereken gradiënte')} — gebruik m = (y₂ − y₁)/(x₂ − x₁) vir elke nodige sy of lyn.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fefce8;border:1.5px solid #fef08a;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#d97706;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${ye('Vind inklinasies')} — gebruik θ = tan⁻¹(m) vir elke lyn, en tel 180° by waar die gradiënt negatief is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Formuleer gevolgtrekkings')} — gebruik die parallel-/loodregte reëls of trek inklinasies van mekaar af om hoeke tussen lyne te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die hoek tussen twee lyne</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die hoek by ʼn hoekpunt van ʼn driehoek te vind, bereken die inklinasie van elke sy wat by daardie hoekpunt ontmoet. Die hoek tussen die twee lyne is die verskil tussen die twee inklinasies (wees versigtig met rigting).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gegewe A(−3, 1), B(2, 4) en C(5, −2), bepaal die grootte van hoek BAC.',
          answer: `∠BAC ≈ ${bl('51,52°')}`,
          steps: [
            `Bereken die gradiënt van AB: ${re('m₁ = (4 − 1)/(2 − (−3)) = 3/5')}.`,
            `Bereken die gradiënt van AC: ${ye('m₂ = (−2 − 1)/(5 − (−3)) = −3/8')}.`,
            `Vind die inklinasie van AB: ${re('θ₁ = tan⁻¹(3/5) = 30,96°')}.`,
            `Vind die inklinasie van AC: tan⁻¹(−3/8) = −20,56°. Aangesien die gradiënt negatief is, tel ons 180° by: ${ye('θ₂ = 159,44°')}.`,
            `Bereken hoek BAC = 180° − 159,44° + 30,96° = ${bl('51,52°')}.`,
          ],
        },
        {
          question: 'Gegewe P(0, 0), Q(4, 0) en R(4, 3), bewys dat driehoek PQR reghoekig is by Q.',
          answer: `${bl('Driehoek PQR is reghoekig by Q')} — PQ ⊥ QR`,
          steps: [
            `Bereken die gradiënt van PQ: ${re('m₁ = (0 − 0)/(4 − 0) = 0')} (horisontale lyn).`,
            `Bereken die gradiënt van QR: ${ye('m₂ = (3 − 0)/(4 − 4) = onbepaald')} (vertikale lyn).`,
            `Aangesien PQ horisontaal is (gradiënt 0) en QR vertikaal is (onbepaalde gradiënt), is PQ ⊥ QR.`,
            `${bl('Gevolgtrekking:')} Driehoek PQR het ʼn regte hoek by Q. ✓`,
          ],
        },
        {
          question: 'Gegewe A(1, 2), B(7, 4) en C(3, 8), bepaal of driehoek ABC gelykbenig is.',
          answer: `${bl('Driehoek ABC is gelykbenig')} — AB = AC = √40`,
          steps: [
            `Bereken AB: ${re('AB = √[(7 − 1)² + (4 − 2)²] = √[36 + 4] = √40')}.`,
            `Bereken AC: ${ye('AC = √[(3 − 1)² + (8 − 2)²] = √[4 + 36] = √40')}.`,
            `Bereken BC: ${gr('BC = √[(3 − 7)² + (8 − 4)²] = √[16 + 16] = √32')}.`,
            `Aangesien ${re('AB')} = ${ye('AC')} = √40 maar ${gr('BC')} = √32, is presies twee sye gelyk.`,
            `${bl('Gevolgtrekking:')} Driehoek ABC is gelykbenig. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q17 Medium — right angle proof ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gegewe A(0, 0), B(4, 0) en C(4, 5), bewys dat driehoek ABC reghoekig is by B.',
          answer: 'Gradiënt van AB: m₁ = (0 − 0)/(4 − 0) = 0 (horisontaal). Gradiënt van BC: m₂ = (5 − 0)/(4 − 4) = onbepaald (vertikaal). ʼn Horisontale lyn is loodreg op ʼn vertikale lyn, dus AB ⊥ BC. Daarom is driehoek ABC reghoekig by B. ✓',
          checkMode: 'self',
        },

        // ── Q18 Medium — length and isosceles check ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gegewe P(1, 1), Q(5, 1) en R(5, 5), beantwoord die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken die lengte van PR.',
              correctAnswer: '4√2',
              correctAnswers: ['4√2', '4sqrt(2)', '√32', 'sqrt(32)', '4√2 eenhede'],
              explanation: 'PR = √[(5 − 1)² + (5 − 1)²] = √[16 + 16] = √32 = 4√2 ✓',
            },
            {
              label: 'b) Bereken PQ en QR, en bepaal dan of driehoek PQR gelykbenig is.',
              checkMode: 'self',
              answer: 'PQ = √[(5−1)²+(1−1)²] = √16 = 4\nQR = √[(5−5)²+(5−1)²] = √16 = 4\nAangesien PQ = QR = 4 en PR = 4√2, is presies twee sye gelyk. Driehoek PQR is gelykbenig. ✓',
            },
          ],
        },

        // ── Q19 Hard — angle at a vertex ─────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Gegewe A(−2, 3), B(3, 3) en C(3, −2), bepaal die grootte van hoek ABC, afgerond tot een desimale plek.',
          answer: 'Gradiënt van BA: m₁ = (3 − 3)/(−2 − 3) = 0 (horisontaal). Gradiënt van BC: m₂ = (−2 − 3)/(3 − 3) = onbepaald (vertikaal). Aangesien BA horisontaal is en BC vertikaal is, is BA ⊥ BC. Daarom is hoek ABC = 90,0°.',
          checkMode: 'self',
        },

        // ── Q20 Hard — multi-part combined application ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Gegewe A(1, 5), B(6, 5) en C(6, 1), beantwoord die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken die gradiënt van AB.',
              correctAnswer: '0',
              explanation: 'm = (5 − 5)/(6 − 1) = 0/5 = 0 ✓',
            },
            {
              label: 'b) Bereken die gradiënt van BC.',
              correctAnswer: 'onbepaald',
              correctAnswers: ['onbepaald', 'Onbepaald'],
              explanation: 'm = (1 − 5)/(6 − 6) = −4/0 = onbepaald (vertikale lyn) ✓',
            },
            {
              label: 'c) Is AB loodreg op BC? Skryf Ja of Nee.',
              correctAnswer: 'Ja',
              correctAnswers: ['Ja', 'ja', 'JA'],
              explanation: 'AB het gradiënt 0 (horisontaal) en BC het onbepaalde gradiënt (vertikaal). ʼn Horisontale lyn is altyd loodreg op ʼn vertikale lyn. Ja ✓',
            },
            {
              label: 'd) Bepaal die grootte van hoek ABC.',
              checkMode: 'self',
              answer: 'Aangesien AB horisontaal is en BC vertikaal is, is AB ⊥ BC. Daarom is hoek ABC = 90°.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'Cartesiese vlak wat die volledige driehoek gevorm deur die drie gegewe punte wys, al drie hoekpunte gemerk, die relevante hoek by die betrokke hoekpunt gemerk, en stippel-gradiëntdriehoeke op elke sy soos nodig',

      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><polygon points="90,35 35,145 185,120" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="35" x2="35" y2="35" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="35" y1="35" x2="35" y2="145" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="35" y1="145" x2="185" y2="145" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="185" y1="145" x2="185" y2="120" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,3"/><path d="M 59,141 A 24,24 0 0 1 46,124" fill="none" stroke="#2563eb" stroke-width="2"/><text x="62" y="126" font-size="13" font-weight="700" fill="#2563eb">&#952;</text><text x="90" y="27" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">A</text><text x="22" y="150" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">B</text><text x="192" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="start">C</text><text x="28" y="90" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">AB</text><text x="110" y="157" font-size="10" font-weight="700" fill="#d97706" text-anchor="middle">BC</text><text x="110" y="172" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">&#952; = verskil in inklinasies</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om afstand, gradiënt, middelpunt en inklinasie te kombineer om gemengde Analitiese Meetkunde-probleme met driehoeke op te los" />',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets x 20 questions, skill blocks in matching positions:
  // Block 1 (Q1-3):   Afstand / gradiënt / middelpunt hersiening — Easy, Easy, Medium (diagram: Q3)
  // Block 2 (Q4-7):   Vergelyking van 'n lyn deur twee punte — Easy, Easy, Medium, Medium
  // Block 3 (Q8-11):  Parallelle en loodregte lyne — Easy, Easy, Medium, Hard
  // Block 4 (Q12-15): Inklinasie van 'n lyn — Easy, Medium, Medium, Hard
  // Block 5 (Q16-18): Regte hoek / gelykbenige driehoek bewyse — Medium, Medium, Hard (diagram: Q18)
  // Block 6 (Q19-20): Hoek by 'n hoekpunt via inklinasie — Hard, Hard (diagram: Q20)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block 1 — Afstand / gradiënt / middelpunt hersiening
        { difficulty: 'Easy', question: 'Gegewe A(1, 2) en B(4, 6), bereken die afstand AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Gegewe A(1, 2) en C(4, 2), bereken die gradiënt van AC.', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'm = (2 − 2)/(4 − 1) = 0/3 = 0 ✓' },
        { difficulty: 'Medium', question: 'A(1, 2), B(4, 6) en C(4, 2) is op die Cartesiese vlak geplot en vorm driehoek ABC. Bepaal die middelpunt van BC.', checkMode: 'auto', correctAnswer: '(4, 4)', correctAnswers: ['(4, 4)', '(4,4)', '4, 4'], answer: '(4, 4)', explanation: 'M = ((4 + 4)/2, (6 + 2)/2) = (8/2, 8/2) = (4, 4) ✓', diagramSvg: `<svg viewBox="0 0 130 162" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="154" x2="26" y2="26" /><line x1="42" y1="154" x2="42" y2="26" /><line x1="58" y1="154" x2="58" y2="26" /><line x1="74" y1="154" x2="74" y2="26" /><line x1="90" y1="154" x2="90" y2="26" /><line x1="106" y1="154" x2="106" y2="26" /><line x1="122" y1="154" x2="122" y2="26" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="122" y2="138" /><line x1="42" y1="154" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-1</text><text x="58" y="150" text-anchor="middle">1</text><text x="74" y="150" text-anchor="middle">2</text><text x="90" y="150" text-anchor="middle">3</text><text x="106" y="150" text-anchor="middle">4</text><text x="122" y="150" text-anchor="middle">5</text><text x="34" y="157" text-anchor="end">-1</text><text x="34" y="141" text-anchor="end">0</text><text x="34" y="125" text-anchor="end">1</text><text x="34" y="109" text-anchor="end">2</text><text x="34" y="93" text-anchor="end">3</text><text x="34" y="77" text-anchor="end">4</text><text x="34" y="61" text-anchor="end">5</text><text x="34" y="45" text-anchor="end">6</text><text x="34" y="29" text-anchor="end">7</text></g><polygon points="58,106 106,42 106,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="58" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="46" y="112" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(1,2)</text><text x="100" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(4,6)</text><text x="100" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4,2)</text></svg>` },

        // Block 2 — Vergelyking van 'n lyn deur twee punte
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (0, 4) en (2, 8).', checkMode: 'auto', correctAnswer: 'y = 2x + 4', correctAnswers: ['y = 2x + 4', 'y=2x+4'], answer: 'y = 2x + 4', explanation: 'm = (8 − 4)/(2 − 0) = 4/2 = 2. Vervang (0, 4): y − 4 = 2(x − 0) → y = 2x + 4 ✓' },
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (1, 5) en (4, 11).', checkMode: 'auto', correctAnswer: 'y = 2x + 3', correctAnswers: ['y = 2x + 3', 'y=2x+3'], answer: 'y = 2x + 3', explanation: 'm = (11 − 5)/(4 − 1) = 6/3 = 2. Vervang (1, 5): y − 5 = 2(x − 1) → y = 2x + 3 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (−3, 6) en (3, −6).', checkMode: 'auto', correctAnswer: 'y = -2x', correctAnswers: ['y = -2x', 'y=-2x', 'y = −2x', 'y=−2x', 'y = -2x + 0'], answer: 'y = -2x', explanation: 'm = (−6 − 6)/(3 − (−3)) = −12/6 = −2. Vervang (3, −6): y − (−6) = −2(x − 3) → y + 6 = −2x + 6 → y = −2x ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (2, 2) en (2, 9), en verduidelik watter soort lyn dit is.', answer: 'Die vergelyking is x = 2. Dit is ʼn vertikale lyn omdat albei punte dieselfde x-koördinaat deel, wat die gradiënt onbepaald maak.', checkMode: 'self' },

        // Block 3 — Parallelle en loodregte lyne
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn parallel aan y = 2x − 5 neer.', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'Parallelle lyne het gelyke gradiënte. Die gradiënt van y = 2x − 5 is m = 2, dus het ʼn parallelle lyn ook m = 2 ✓' },
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn loodreg aan y = -1/3x + 4 neer.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Vir loodregte lyne geld m₁ × m₂ = −1.\nGegewe m₁ = −1/3: m₂ = −1 ÷ (−1/3) = 3 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (1, −1) parallel aan y = 2x + 3.', checkMode: 'auto', correctAnswer: 'y = 2x - 3', correctAnswers: ['y = 2x - 3', 'y=2x-3', 'y = 2x − 3', 'y=2x−3'], answer: 'y = 2x - 3', explanation: 'Gradiënt: m = 2 (dieselfde as die parallelle lyn).\nVervang (1, −1): y − (−1) = 2(x − 1) → y + 1 = 2x − 2 → y = 2x − 3 ✓' },
        { difficulty: 'Hard', question: 'Vind die vergelyking van die lyn deur (4, 1) loodreg aan y = -1/3x - 2.', checkMode: 'auto', correctAnswer: 'y = 3x - 11', correctAnswers: ['y = 3x - 11', 'y=3x-11', 'y = 3x − 11', 'y=3x−11'], answer: 'y = 3x - 11', explanation: 'Gradiënt van die gegewe lyn: m₁ = −1/3.\nLoodregte gradiënt: m₂ = 3.\nVervang (4, 1): y − 1 = 3(x − 4) → y − 1 = 3x − 12 → y = 3x − 11 ✓' },

        // Block 4 — Inklinasie van 'n lyn
        { difficulty: 'Easy', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 0,5774, afgerond tot die naaste graad.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30°', '30 grade'], answer: '30', explanation: 'tan θ = 0,5774 → θ = tan⁻¹(0,5774) ≈ 30°. Die gradiënt is positief, dus is geen regstelling nodig nie. θ ≈ 30° ✓' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 0,7002, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(0,7002) ≈ 35°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = −0,5774, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(−0,5774) ≈ −30°. Aangesien die gradiënt negatief is, tel ons 180° by: θ = −30° + 180° = 150°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die gradiënt van ʼn lyn met inklinasie 65°, afgerond tot twee desimale plekke.', answer: 'm = tan(65°) ≈ 2,14', checkMode: 'self' },

        // Block 5 — Regte hoek / gelykbenige driehoek bewyse
        { difficulty: 'Medium', question: 'Gegewe A(0, 0), B(5, 0) en C(5, 4), bewys dat driehoek ABC reghoekig is by B.', answer: 'Gradiënt van AB: m₁ = (0 − 0)/(5 − 0) = 0 (horisontaal). Gradiënt van BC: m₂ = (4 − 0)/(5 − 5) = onbepaald (vertikaal). ʼn Horisontale lyn is loodreg op ʼn vertikale lyn, dus AB ⊥ BC. Daarom is driehoek ABC reghoekig by B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gegewe P(1, 1) en Q(5, 1), bereken die lengte van PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(5 − 1)² + (1 − 1)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(1, 1), Q(5, 1) en R(5, 5) is op die Cartesiese vlak geplot en vorm driehoek PQR. Gegewe dat PQ = 4 en QR = 4, bereken PR en bepaal dus of driehoek PQR gelykbenig is.', answer: 'PR = √[(5 − 1)² + (5 − 1)²] = √[16 + 16] = √32 = 4√2\nAangesien PQ = QR = 4 en PR = 4√2, is presies twee sye gelyk. Driehoek PQR is gelykbenig. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 146 146" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="138" x2="26" y2="26" /><line x1="42" y1="138" x2="42" y2="26" /><line x1="58" y1="138" x2="58" y2="26" /><line x1="74" y1="138" x2="74" y2="26" /><line x1="90" y1="138" x2="90" y2="26" /><line x1="106" y1="138" x2="106" y2="26" /><line x1="122" y1="138" x2="122" y2="26" /><line x1="138" y1="138" x2="138" y2="26" /><line x1="26" y1="138" x2="138" y2="138" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="122" x2="138" y2="122" /><line x1="42" y1="138" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="134" text-anchor="middle">-1</text><text x="58" y="134" text-anchor="middle">1</text><text x="74" y="134" text-anchor="middle">2</text><text x="90" y="134" text-anchor="middle">3</text><text x="106" y="134" text-anchor="middle">4</text><text x="122" y="134" text-anchor="middle">5</text><text x="138" y="134" text-anchor="middle">6</text><text x="34" y="141" text-anchor="end">-1</text><text x="34" y="125" text-anchor="end">0</text><text x="34" y="109" text-anchor="end">1</text><text x="34" y="93" text-anchor="end">2</text><text x="34" y="77" text-anchor="end">3</text><text x="34" y="61" text-anchor="end">4</text><text x="34" y="45" text-anchor="end">5</text><text x="34" y="29" text-anchor="end">6</text></g><polygon points="58,106 122,106 122,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="58" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="46" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(1,1)</text><text x="116" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(5,1)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(5,5)</text></svg>` },

        // Block 6 — Hoek by 'n hoekpunt via inklinasie
        { difficulty: 'Hard', question: 'Gegewe A(−2, 2), B(3, 2) en C(3, −2), bepaal die grootte van hoek ABC, afgerond tot een desimale plek.', answer: 'Gradiënt van BA: m₁ = (2 − 2)/(−2 − 3) = 0 (horisontaal). Gradiënt van BC: m₂ = (−2 − 2)/(3 − 3) = onbepaald (vertikaal). Aangesien BA horisontaal is en BC vertikaal is, is BA ⊥ BC. Daarom is hoek ABC = 90,0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−2, 2), B(3, 2) en C(3, −2) is op die Cartesiese vlak geplot en vorm driehoek ABC met ʼn regte hoek by B. Gegewe dat AB = 5 en BC = 4, bereken die lengte van AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(3 − (−2))² + (−2 − 2)²] = √[25 + 16] = √41 ≈ 6,40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="74" x2="138" y2="74" /><line x1="74" y1="122" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="86" text-anchor="middle">-3</text><text x="42" y="86" text-anchor="middle">-2</text><text x="58" y="86" text-anchor="middle">-1</text><text x="90" y="86" text-anchor="middle">1</text><text x="106" y="86" text-anchor="middle">2</text><text x="122" y="86" text-anchor="middle">3</text><text x="138" y="86" text-anchor="middle">4</text><text x="66" y="125" text-anchor="end">-3</text><text x="66" y="109" text-anchor="end">-2</text><text x="66" y="93" text-anchor="end">-1</text><text x="66" y="77" text-anchor="end">0</text><text x="66" y="61" text-anchor="end">1</text><text x="66" y="45" text-anchor="end">2</text><text x="66" y="29" text-anchor="end">3</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-2,2)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(3,2)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(3,-2)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het lyne, gradiënte, inklinasie en driehoekbewyse bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Goeie werk! Hersien enige gemiste vrae oor inklinasie of die gemengde driehoektoepassings en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor vergelykings van lyne en parallelle/loodregte gradiënte, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block 1 — Afstand / gradiënt / middelpunt hersiening
        { difficulty: 'Easy', question: 'Gegewe A(2, 1) en B(6, 4), bereken die afstand AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(6 − 2)² + (4 − 1)²] = √[16 + 9] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Gegewe A(2, 1) en C(2, 4), bereken die gradiënt van AC.', checkMode: 'auto', correctAnswer: 'onbepaald', correctAnswers: ['onbepaald', 'Onbepaald'], answer: 'onbepaald', explanation: 'm = (4 − 1)/(2 − 2) = 3/0 = onbepaald (vertikale lyn) ✓' },
        { difficulty: 'Medium', question: 'A(2, 1), B(6, 4) en C(2, 4) is op die Cartesiese vlak geplot en vorm driehoek ABC. Bepaal die middelpunt van BC.', checkMode: 'auto', correctAnswer: '(4, 4)', correctAnswers: ['(4, 4)', '(4,4)', '4, 4'], answer: '(4, 4)', explanation: 'M = ((6 + 2)/2, (4 + 4)/2) = (8/2, 8/2) = (4, 4) ✓', diagramSvg: `<svg viewBox="0 0 162 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="154" y1="122" x2="154" y2="26" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="154" y2="106" /><line x1="42" y1="122" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-1</text><text x="58" y="118" text-anchor="middle">1</text><text x="74" y="118" text-anchor="middle">2</text><text x="90" y="118" text-anchor="middle">3</text><text x="106" y="118" text-anchor="middle">4</text><text x="122" y="118" text-anchor="middle">5</text><text x="138" y="118" text-anchor="middle">6</text><text x="154" y="118" text-anchor="middle">7</text><text x="34" y="125" text-anchor="end">-1</text><text x="34" y="109" text-anchor="end">0</text><text x="34" y="93" text-anchor="end">1</text><text x="34" y="77" text-anchor="end">2</text><text x="34" y="61" text-anchor="end">3</text><text x="34" y="45" text-anchor="end">4</text><text x="34" y="29" text-anchor="end">5</text></g><polygon points="74,90 138,42 74,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="74" cy="90" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="74" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="68" y="102" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(2,1)</text><text x="132" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(6,4)</text><text x="80" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">C(2,4)</text></svg>` },

        // Block 2 — Vergelyking van 'n lyn deur twee punte
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (0, 2) en (3, 8).', checkMode: 'auto', correctAnswer: 'y = 2x + 2', correctAnswers: ['y = 2x + 2', 'y=2x+2'], answer: 'y = 2x + 2', explanation: 'm = (8 − 2)/(3 − 0) = 6/3 = 2. Vervang (0, 2): y − 2 = 2(x − 0) → y = 2x + 2 ✓' },
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (2, 3) en (5, 9).', checkMode: 'auto', correctAnswer: 'y = 2x - 1', correctAnswers: ['y = 2x - 1', 'y=2x-1', 'y = 2x − 1', 'y=2x−1'], answer: 'y = 2x - 1', explanation: 'm = (9 − 3)/(5 − 2) = 6/3 = 2. Vervang (2, 3): y − 3 = 2(x − 2) → y = 2x − 1 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (−2, 8) en (4, −4).', checkMode: 'auto', correctAnswer: 'y = -2x + 4', correctAnswers: ['y = -2x + 4', 'y=-2x+4', 'y = −2x + 4', 'y=−2x+4'], answer: 'y = -2x + 4', explanation: 'm = (−4 − 8)/(4 − (−2)) = −12/6 = −2. Vervang (4, −4): y − (−4) = −2(x − 4) → y + 4 = −2x + 8 → y = −2x + 4 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (5, 1) en (5, 7), en verduidelik watter soort lyn dit is.', answer: 'Die vergelyking is x = 5. Dit is ʼn vertikale lyn omdat albei punte dieselfde x-koördinaat deel, wat die gradiënt onbepaald maak.', checkMode: 'self' },

        // Block 3 — Parallelle en loodregte lyne
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn parallel aan y = 4x + 1 neer.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Parallelle lyne het gelyke gradiënte. Die gradiënt van y = 4x + 1 is m = 4, dus het ʼn parallelle lyn ook m = 4 ✓' },
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn loodreg aan y = 2/5x - 3 neer.', checkMode: 'auto', correctAnswer: '-5/2', correctAnswers: ['-5/2', '−5/2', '-2.5'], answer: '-5/2', explanation: 'Vir loodregte lyne geld m₁ × m₂ = −1.\nGegewe m₁ = 2/5: m₂ = −1 ÷ (2/5) = −5/2 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (0, −5) parallel aan y = 4x + 2.', checkMode: 'auto', correctAnswer: 'y = 4x - 5', correctAnswers: ['y = 4x - 5', 'y=4x-5', 'y = 4x − 5', 'y=4x−5'], answer: 'y = 4x - 5', explanation: 'Gradiënt: m = 4 (dieselfde as die parallelle lyn).\nVervang (0, −5): y − (−5) = 4(x − 0) → y = 4x − 5 ✓' },
        { difficulty: 'Hard', question: 'Vind die vergelyking van die lyn deur (2, 5) loodreg aan y = 2/5x + 1.', checkMode: 'auto', correctAnswer: 'y = -5/2x + 10', correctAnswers: ['y = -5/2x + 10', 'y=-5/2x+10', 'y = −5/2x + 10', 'y=−5/2x+10'], answer: 'y = -5/2x + 10', explanation: 'Gradiënt van die gegewe lyn: m₁ = 2/5.\nLoodregte gradiënt: m₂ = −5/2.\nVervang (2, 5): y − 5 = −5/2(x − 2) → y − 5 = −5/2x + 5 → y = −5/2x + 10 ✓' },

        // Block 4 — Inklinasie van 'n lyn
        { difficulty: 'Easy', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 1,7321, afgerond tot die naaste graad.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60°', '60 grade'], answer: '60', explanation: 'tan θ = 1,7321 → θ = tan⁻¹(1,7321) ≈ 60°. Die gradiënt is positief, dus is geen regstelling nodig nie. θ ≈ 60° ✓' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 0,3640, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(0,3640) ≈ 20°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = −2,9042, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(−2,9042) ≈ −71°. Aangesien die gradiënt negatief is, tel ons 180° by: θ = −71° + 180° = 109°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die gradiënt van ʼn lyn met inklinasie 40°, afgerond tot twee desimale plekke.', answer: 'm = tan(40°) ≈ 0,84', checkMode: 'self' },

        // Block 5 — Regte hoek / gelykbenige driehoek bewyse
        { difficulty: 'Medium', question: 'Gegewe A(0, 0), B(6, 0) en C(6, 3), bewys dat driehoek ABC reghoekig is by B.', answer: 'Gradiënt van AB: m₁ = (0 − 0)/(6 − 0) = 0 (horisontaal). Gradiënt van BC: m₂ = (3 − 0)/(6 − 6) = onbepaald (vertikaal). ʼn Horisontale lyn is loodreg op ʼn vertikale lyn, dus AB ⊥ BC. Daarom is driehoek ABC reghoekig by B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gegewe P(2, 2) en Q(6, 2), bereken die lengte van PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(6 − 2)² + (2 − 2)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(2, 2), Q(6, 2) en R(6, 6) is op die Cartesiese vlak geplot en vorm driehoek PQR. Gegewe dat PQ = 4 en QR = 4, bereken PR en bepaal dus of driehoek PQR gelykbenig is.', answer: 'PR = √[(6 − 2)² + (6 − 2)²] = √[16 + 16] = √32 = 4√2\nAangesien PQ = QR = 4 en PR = 4√2, is presies twee sye gelyk. Driehoek PQR is gelykbenig. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 162 162" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="154" x2="26" y2="26" /><line x1="42" y1="154" x2="42" y2="26" /><line x1="58" y1="154" x2="58" y2="26" /><line x1="74" y1="154" x2="74" y2="26" /><line x1="90" y1="154" x2="90" y2="26" /><line x1="106" y1="154" x2="106" y2="26" /><line x1="122" y1="154" x2="122" y2="26" /><line x1="138" y1="154" x2="138" y2="26" /><line x1="154" y1="154" x2="154" y2="26" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="154" y2="138" /><line x1="42" y1="154" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-1</text><text x="58" y="150" text-anchor="middle">1</text><text x="74" y="150" text-anchor="middle">2</text><text x="90" y="150" text-anchor="middle">3</text><text x="106" y="150" text-anchor="middle">4</text><text x="122" y="150" text-anchor="middle">5</text><text x="138" y="150" text-anchor="middle">6</text><text x="154" y="150" text-anchor="middle">7</text><text x="34" y="157" text-anchor="end">-1</text><text x="34" y="141" text-anchor="end">0</text><text x="34" y="125" text-anchor="end">1</text><text x="34" y="109" text-anchor="end">2</text><text x="34" y="93" text-anchor="end">3</text><text x="34" y="77" text-anchor="end">4</text><text x="34" y="61" text-anchor="end">5</text><text x="34" y="45" text-anchor="end">6</text><text x="34" y="29" text-anchor="end">7</text></g><polygon points="74,106 138,106 138,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="74" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="62" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(2,2)</text><text x="132" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(6,2)</text><text x="132" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(6,6)</text></svg>` },

        // Block 6 — Hoek by 'n hoekpunt via inklinasie
        { difficulty: 'Hard', question: 'Gegewe A(−1, 3), B(4, 3) en C(4, −1), bepaal die grootte van hoek ABC, afgerond tot een desimale plek.', answer: 'Gradiënt van BA: m₁ = (3 − 3)/(−1 − 4) = 0 (horisontaal). Gradiënt van BC: m₂ = (−1 − 3)/(4 − 4) = onbepaald (vertikaal). Aangesien BA horisontaal is en BC vertikaal is, is BA ⊥ BC. Daarom is hoek ABC = 90,0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−1, 3), B(4, 3) en C(4, −1) is op die Cartesiese vlak geplot en vorm driehoek ABC met ʼn regte hoek by B. Gegewe dat AB = 5 en BC = 4, bereken die lengte van AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(4 − (−1))² + (−1 − 3)²] = √[25 + 16] = √41 ≈ 6,40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="90" x2="138" y2="90" /><line x1="58" y1="122" x2="58" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="102" text-anchor="middle">-2</text><text x="42" y="102" text-anchor="middle">-1</text><text x="74" y="102" text-anchor="middle">1</text><text x="90" y="102" text-anchor="middle">2</text><text x="106" y="102" text-anchor="middle">3</text><text x="122" y="102" text-anchor="middle">4</text><text x="138" y="102" text-anchor="middle">5</text><text x="50" y="125" text-anchor="end">-2</text><text x="50" y="109" text-anchor="end">-1</text><text x="50" y="93" text-anchor="end">0</text><text x="50" y="77" text-anchor="end">1</text><text x="50" y="61" text-anchor="end">2</text><text x="50" y="45" text-anchor="end">3</text><text x="50" y="29" text-anchor="end">4</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-1,3)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(4,3)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(4,-1)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het lyne, gradiënte, inklinasie en driehoekbewyse bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Goeie werk! Hersien enige gemiste vrae oor inklinasie of die gemengde driehoektoepassings en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor vergelykings van lyne en parallelle/loodregte gradiënte, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Block 1 — Afstand / gradiënt / middelpunt hersiening
        { difficulty: 'Easy', question: 'Gegewe A(0, 3) en B(3, 7), bereken die afstand AB.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'd = √[(3 − 0)² + (7 − 3)²] = √[9 + 16] = √25 = 5 ✓' },
        { difficulty: 'Easy', question: 'Gegewe A(0, 3) en C(3, 3), bereken die gradiënt van AC.', checkMode: 'auto', correctAnswer: '0', answer: '0', explanation: 'm = (3 − 3)/(3 − 0) = 0/3 = 0 ✓' },
        { difficulty: 'Medium', question: 'A(0, 3), B(3, 7) en C(3, 3) is op die Cartesiese vlak geplot en vorm driehoek ABC. Bepaal die middelpunt van BC.', checkMode: 'auto', correctAnswer: '(3, 5)', correctAnswers: ['(3, 5)', '(3,5)', '3, 5'], answer: '(3, 5)', explanation: 'M = ((3 + 3)/2, (7 + 3)/2) = (6/2, 10/2) = (3, 5) ✓', diagramSvg: `<svg viewBox="0 0 114 178" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="170" x2="26" y2="26" /><line x1="42" y1="170" x2="42" y2="26" /><line x1="58" y1="170" x2="58" y2="26" /><line x1="74" y1="170" x2="74" y2="26" /><line x1="90" y1="170" x2="90" y2="26" /><line x1="106" y1="170" x2="106" y2="26" /><line x1="26" y1="170" x2="106" y2="170" /><line x1="26" y1="154" x2="106" y2="154" /><line x1="26" y1="138" x2="106" y2="138" /><line x1="26" y1="122" x2="106" y2="122" /><line x1="26" y1="106" x2="106" y2="106" /><line x1="26" y1="90" x2="106" y2="90" /><line x1="26" y1="74" x2="106" y2="74" /><line x1="26" y1="58" x2="106" y2="58" /><line x1="26" y1="42" x2="106" y2="42" /><line x1="26" y1="26" x2="106" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="106" y2="154" /><line x1="42" y1="170" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-1</text><text x="58" y="166" text-anchor="middle">1</text><text x="74" y="166" text-anchor="middle">2</text><text x="90" y="166" text-anchor="middle">3</text><text x="106" y="166" text-anchor="middle">4</text><text x="34" y="173" text-anchor="end">-1</text><text x="34" y="157" text-anchor="end">0</text><text x="34" y="141" text-anchor="end">1</text><text x="34" y="125" text-anchor="end">2</text><text x="34" y="109" text-anchor="end">3</text><text x="34" y="93" text-anchor="end">4</text><text x="34" y="77" text-anchor="end">5</text><text x="34" y="61" text-anchor="end">6</text><text x="34" y="45" text-anchor="end">7</text><text x="34" y="29" text-anchor="end">8</text></g><polygon points="42,106 90,42 90,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="30" y="112" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(0,3)</text><text x="84" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(3,7)</text><text x="84" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(3,3)</text></svg>` },

        // Block 2 — Vergelyking van 'n lyn deur twee punte
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (0, 1) en (4, 9).', checkMode: 'auto', correctAnswer: 'y = 2x + 1', correctAnswers: ['y = 2x + 1', 'y=2x+1'], answer: 'y = 2x + 1', explanation: 'm = (9 − 1)/(4 − 0) = 8/4 = 2. Vervang (0, 1): y − 1 = 2(x − 0) → y = 2x + 1 ✓' },
        { difficulty: 'Easy', question: 'Vind die vergelyking van die lyn deur (1, 4) en (3, 10).', checkMode: 'auto', correctAnswer: 'y = 3x + 1', correctAnswers: ['y = 3x + 1', 'y=3x+1'], answer: 'y = 3x + 1', explanation: 'm = (10 − 4)/(3 − 1) = 6/2 = 3. Vervang (1, 4): y − 4 = 3(x − 1) → y = 3x + 1 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (−4, 7) en (2, −5).', checkMode: 'auto', correctAnswer: 'y = -2x - 1', correctAnswers: ['y = -2x - 1', 'y=-2x-1', 'y = −2x − 1', 'y=−2x−1'], answer: 'y = -2x - 1', explanation: 'm = (−5 − 7)/(2 − (−4)) = −12/6 = −2. Vervang (2, −5): y − (−5) = −2(x − 2) → y + 5 = −2x + 4 → y = −2x − 1 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (−1, 3) en (−1, 9), en verduidelik watter soort lyn dit is.', answer: 'Die vergelyking is x = −1. Dit is ʼn vertikale lyn omdat albei punte dieselfde x-koördinaat deel, wat die gradiënt onbepaald maak.', checkMode: 'self' },

        // Block 3 — Parallelle en loodregte lyne
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn parallel aan y = -3x + 7 neer.', checkMode: 'auto', correctAnswer: '-3', answer: '-3', explanation: 'Parallelle lyne het gelyke gradiënte. Die gradiënt van y = −3x + 7 is m = −3, dus het ʼn parallelle lyn ook m = −3 ✓' },
        { difficulty: 'Easy', question: 'Skryf die gradiënt van ʼn lyn loodreg aan y = 3/4x - 6 neer.', checkMode: 'auto', correctAnswer: '-4/3', correctAnswers: ['-4/3', '−4/3', '-1.33', '-1.3'], answer: '-4/3', explanation: 'Vir loodregte lyne geld m₁ × m₂ = −1.\nGegewe m₁ = 3/4: m₂ = −1 ÷ (3/4) = −4/3 ✓' },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die lyn deur (0, 2) parallel aan y = -3x - 1.', checkMode: 'auto', correctAnswer: 'y = -3x + 2', correctAnswers: ['y = -3x + 2', 'y=-3x+2', 'y = −3x + 2', 'y=−3x+2'], answer: 'y = -3x + 2', explanation: 'Gradiënt: m = −3 (dieselfde as die parallelle lyn).\nVervang (0, 2): y − 2 = −3(x − 0) → y = −3x + 2 ✓' },
        { difficulty: 'Hard', question: 'Vind die vergelyking van die lyn deur (3, 2) loodreg aan y = 3/4x + 5.', checkMode: 'auto', correctAnswer: 'y = -4/3x + 6', correctAnswers: ['y = -4/3x + 6', 'y=-4/3x+6', 'y = −4/3x + 6', 'y=−4/3x+6'], answer: 'y = -4/3x + 6', explanation: 'Gradiënt van die gegewe lyn: m₁ = 3/4.\nLoodregte gradiënt: m₂ = −4/3.\nVervang (3, 2): y − 2 = −4/3(x − 3) → y − 2 = −4/3x + 4 → y = −4/3x + 6 ✓' },

        // Block 4 — Inklinasie van 'n lyn
        { difficulty: 'Easy', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 0,5, afgerond tot twee desimale plekke.', checkMode: 'auto', correctAnswer: '26,57', correctAnswers: ['26.57', '26.57°', '26.6', '26.6°'], answer: '26,57', explanation: 'tan θ = 0,5 → θ = tan⁻¹(0,5) ≈ 26,57°. Die gradiënt is positief, dus is geen regstelling nodig nie. θ ≈ 26,57° ✓' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = 1,1918, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(1,1918) ≈ 50°', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bepaal die inklinasie van ʼn lyn met gradiënt m = −0,2679, afgerond tot die naaste graad.', answer: 'θ = tan⁻¹(−0,2679) ≈ −15°. Aangesien die gradiënt negatief is, tel ons 180° by: θ = −15° + 180° = 165°', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die gradiënt van ʼn lyn met inklinasie 104°, afgerond tot twee desimale plekke.', answer: 'm = tan(104°) ≈ −4,01', checkMode: 'self' },

        // Block 5 — Regte hoek / gelykbenige driehoek bewyse
        { difficulty: 'Medium', question: 'Gegewe A(0, 0), B(4, 0) en C(4, 6), bewys dat driehoek ABC reghoekig is by B.', answer: 'Gradiënt van AB: m₁ = (0 − 0)/(4 − 0) = 0 (horisontaal). Gradiënt van BC: m₂ = (6 − 0)/(4 − 4) = onbepaald (vertikaal). ʼn Horisontale lyn is loodreg op ʼn vertikale lyn, dus AB ⊥ BC. Daarom is driehoek ABC reghoekig by B. ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gegewe P(0, 0) en Q(4, 0), bereken die lengte van PQ.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'PQ = √[(4 − 0)² + (0 − 0)²] = √[16 + 0] = √16 = 4 ✓' },
        { difficulty: 'Hard', question: 'P(0, 0), Q(4, 0) en R(4, 4) is op die Cartesiese vlak geplot en vorm driehoek PQR. Gegewe dat PQ = 4 en QR = 4, bereken PR en bepaal dus of driehoek PQR gelykbenig is.', answer: 'PR = √[(4 − 0)² + (4 − 0)²] = √[16 + 16] = √32 = 4√2\nAangesien PQ = QR = 4 en PR = 4√2, is presies twee sye gelyk. Driehoek PQR is gelykbenig. ✓', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="122" y2="106" /><line x1="42" y1="122" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-1</text><text x="58" y="118" text-anchor="middle">1</text><text x="74" y="118" text-anchor="middle">2</text><text x="90" y="118" text-anchor="middle">3</text><text x="106" y="118" text-anchor="middle">4</text><text x="122" y="118" text-anchor="middle">5</text><text x="34" y="125" text-anchor="end">-1</text><text x="34" y="109" text-anchor="end">0</text><text x="34" y="93" text-anchor="end">1</text><text x="34" y="77" text-anchor="end">2</text><text x="34" y="61" text-anchor="end">3</text><text x="34" y="45" text-anchor="end">4</text><text x="34" y="29" text-anchor="end">5</text></g><polygon points="42,106 106,106 106,42" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="30" y="111" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,0)</text><text x="100" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">Q(4,0)</text><text x="100" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">R(4,4)</text></svg>` },

        // Block 6 — Hoek by 'n hoekpunt via inklinasie
        { difficulty: 'Hard', question: 'Gegewe A(−3, 1), B(2, 1) en C(2, −3), bepaal die grootte van hoek ABC, afgerond tot een desimale plek.', answer: 'Gradiënt van BA: m₁ = (1 − 1)/(−3 − 2) = 0 (horisontaal). Gradiënt van BC: m₂ = (−3 − 1)/(2 − 2) = onbepaald (vertikaal). Aangesien BA horisontaal is en BC vertikaal is, is BA ⊥ BC. Daarom is hoek ABC = 90,0°.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A(−3, 1), B(2, 1) en C(2, −3) is op die Cartesiese vlak geplot en vorm driehoek ABC met ʼn regte hoek by B. Gegewe dat AB = 5 en BC = 4, bereken die lengte van AC.', checkMode: 'auto', correctAnswer: '√41', correctAnswers: ['√41', 'sqrt(41)', '6.40', '6.4'], answer: '√41', explanation: 'AC = √[(2 − (−3))² + (−3 − 1)²] = √[25 + 16] = √41 ≈ 6,40 ✓', diagramSvg: `<svg viewBox="0 0 146 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="58" x2="138" y2="58" /><line x1="90" y1="122" x2="90" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="70" text-anchor="middle">-4</text><text x="42" y="70" text-anchor="middle">-3</text><text x="58" y="70" text-anchor="middle">-2</text><text x="74" y="70" text-anchor="middle">-1</text><text x="106" y="70" text-anchor="middle">1</text><text x="122" y="70" text-anchor="middle">2</text><text x="138" y="70" text-anchor="middle">3</text><text x="82" y="125" text-anchor="end">-4</text><text x="82" y="109" text-anchor="end">-3</text><text x="82" y="93" text-anchor="end">-2</text><text x="82" y="77" text-anchor="end">-1</text><text x="82" y="61" text-anchor="end">0</text><text x="82" y="45" text-anchor="end">1</text><text x="82" y="29" text-anchor="end">2</text></g><polygon points="42,42 122,42 122,106" fill="none" stroke="#0f1f3d" stroke-width="1.5" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-3,1)</text><text x="116" y="56" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">B(2,1)</text><text x="128" y="118" fill="#2563eb" font-weight="700" font-size="11" text-anchor="end">C(2,-3)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 17, message: 'Uitstekend! Jy het lyne, gradiënte, inklinasie en driehoekbewyse bemeester. Uitstekende werk!' },
        { minScore: 13, message: 'Goeie werk! Hersien enige gemiste vrae oor inklinasie of die gemengde driehoektoepassings en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor vergelykings van lyne en parallelle/loodregte gradiënte, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 24, message: 'Uitstekend! Jy het elke afdeling van Analitiese Meetkunde bemeester. Uitstekende werk regdeur!' },
    { minScore: 20, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van analitiese meetkunde. Hersien enige gemiste dele en jy sal dit perfek onder die knie hê.' },
    { minScore: 14, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — analitiese meetkunde word baie logies sodra die formules kliek! Gaan die verduidelikings en uitgewerkte voorbeelde weer deur, en probeer dan weer.' },
  ],
}
