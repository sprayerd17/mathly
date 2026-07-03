import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic expression roles) ──────────────────────────────
// distributed term / divisor / first term      → blue   (#2563eb)
// each multiplication / division / outer+inner → orange (#ea580c)
// final expression / last term                 → green  (#16a34a)
// final answer (FOIL)                          → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING MONOMIALS BY POLYNOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-monomials-polynomials',
      title: 'Monome met Polinome Vermenigvuldig',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei ons algebraïese vaardighede uit om heelgetalle en monome met polinome (uitdrukkings met baie terme) te vermenigvuldig, deur die <strong>distributiewe wet</strong> op elke term in die polinoom toe te pas.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gedistribueerde term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('elke vermenigvuldiging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale uitdrukking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die distributiewe wet</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">${bl('a')}(b + c + d) = ${or('ab')} + ${or('ac')} + ${or('ad')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">Vermenigvuldig die term buite die hakies met <strong>elke</strong> term binne die hakies, en hou tekens dop.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stap-vir-stap metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Skryf die ${bl('monoom')} neer wat gedistribueer gaan word. Let op die koëffisiënt en veranderlike(s).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig')} — ${or('Vermenigvuldig')} die monoom met elke term binne die hakies: vermenigvuldig koëffisiënte en tel eksponente bymekaar (x<sup>a</sup> × x<sup>b</sup> = x<sup>a+b</sup>).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die finale uitdrukking')} — Lys al die terme wat verkry is. Geen verdere vereenvoudiging is nodig nie, tensy gelyksoortige terme saamgevoeg kan word.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Eksponentreël vir vermenigvuldiging</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer magte met dieselfde grondtal vermenigvuldig word, <strong>tel</strong> die eksponente bymekaar: x<sup>a</sup> × x<sup>b</sup> = x<sup>a+b</sup>. Byvoorbeeld, x × x² = x<sup>1+2</sup> = x³.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vermenigvuldig 3x(2x² + 5x − 4).',
          answer: `${gr('6x³ + 15x² − 12x')}`,
          steps: [
            `${bl('Distribueer 3x')} na elke term: ${or('(3x)(2x²)')} + ${or('(3x)(5x)')} + ${or('(3x)(−4)')}`,
            `${or('Vermenigvuldig elke paar:')} (3x)(2x²) = 6x³ &nbsp;·&nbsp; (3x)(5x) = 15x² &nbsp;·&nbsp; (3x)(−4) = −12x`,
            `${gr('Finale uitdrukking:')} ${gr('6x³ + 15x² − 12x')}`,
          ],
        },
        {
          question: 'Vermenigvuldig −2y(y³ − 3y² + y − 7).',
          answer: `${gr('−2y⁴ + 6y³ − 2y² + 14y')}`,
          steps: [
            `${bl('Distribueer −2y')} na elke term: ${or('(−2y)(y³)')} + ${or('(−2y)(−3y²)')} + ${or('(−2y)(y)')} + ${or('(−2y)(−7)')}`,
            `${or('Vermenigvuldig elke paar:')} −2y⁴ &nbsp;·&nbsp; +6y³ &nbsp;·&nbsp; −2y² &nbsp;·&nbsp; +14y`,
            `${gr('Finale uitdrukking:')} ${gr('−2y⁴ + 6y³ − 2y² + 14y')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vermenigvuldig 4x(x + 7).',
          answer: '4x² + 28x',
          checkMode: 'auto',
          correctAnswer: '4x² + 28x',
          correctAnswers: ['4x² + 28x', '4x^2 + 28x', '4x²+28x', '4x^2+28x', '28x + 4x²', '28x + 4x^2'],
          explanation: 'Distribueer 4x na elke term:\n(4x)(x) = 4x²\n(4x)(7) = 28x\nAntwoord: 4x² + 28x ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vermenigvuldig −3x(2x² − 5x + 1).',
          answer: '−6x³ + 15x² − 3x',
          checkMode: 'auto',
          correctAnswer: '−6x³ + 15x² − 3x',
          correctAnswers: [
            '−6x³ + 15x² − 3x', '-6x³ + 15x² - 3x',
            '-6x^3 + 15x^2 - 3x', '−6x^3 + 15x^2 − 3x',
            '−6x³+15x²−3x', '-6x³+15x²-3x',
          ],
          explanation: 'Distribueer −3x:\n(−3x)(2x²) = −6x³\n(−3x)(−5x) = +15x²\n(−3x)(1) = −3x\nAntwoord: −6x³ + 15x² − 3x ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho vermenigvuldig 5y(y² − 3y + 8) en kry 5y³ − 15y² + 40y. Kontroleer sy antwoord.',
          answer: 'Hy is korrek — deur 5y met elke term te distribueer, kry ons:\n(5y)(y²) = 5y³\n(5y)(−3y) = −15y²\n(5y)(8) = 40y\nFinale uitdrukking: 5y³ − 15y² + 40y ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a monomial by a polynomial using the distributive law with step-by-step colour coded examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the distributive law applied to 3x(2x²+5x−4) with arrows from the distributed term in blue to each multiplication in orange and the final expression in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING POLYNOMIALS BY INTEGERS OR MONOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-polynomials-monomials',
      title: 'Polinome deur Heelgetalle of Monome Deel',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Ons deel polinome deur heelgetalle of monome, deur <strong>elke term</strong> van die polinoom afsonderlik deur die deler te deel.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deler')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('elke delingstap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale uitdrukking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die delingsreël</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">(a + b + c) ÷ ${bl('d')} = ${or('a ÷ d')} + ${or('b ÷ d')} + ${or('c ÷ d')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">Deel <strong>elke</strong> term in die polinoom afsonderlik deur die ${bl('deler')}, en vereenvoudig dan elke resultaat.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stap-vir-stap metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer die deler')} — Let op die ${bl('deler')} en herskryf die polinoom as afsonderlike breuke, een per term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Deel elke term')} — Deel die koëffisiënte en trek die eksponente van mekaar af (x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup>).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die finale uitdrukking')} — Kombineer die vereenvoudigde terme tot die ${gr('finale uitdrukking')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Eksponentreël vir deling</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer magte met dieselfde grondtal gedeel word, <strong>trek</strong> die eksponente van mekaar af: x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup>. Byvoorbeeld, x³ ÷ x = x<sup>3−1</sup> = x².</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Deel (15x³ + 10x² − 5x) ÷ 5x.',
          answer: `${gr('3x² + 2x − 1')}`,
          steps: [
            `${bl('Deler:')} 5x. Deel elke term afsonderlik.`,
            `${or('15x³ ÷ 5x')} = 3x² &nbsp;&nbsp; ${or('10x² ÷ 5x')} = 2x &nbsp;&nbsp; ${or('−5x ÷ 5x')} = −1`,
            `${gr('Antwoord:')} ${gr('3x² + 2x − 1')}`,
          ],
        },
        {
          question: 'Sipho deel (8x⁴ − 12x²) ÷ 4x² en kry 2x² − 3. Kontroleer sy antwoord.',
          answer: `${gr('Hy is korrek: 2x² − 3')}`,
          steps: [
            `${bl('Deler:')} 4x². Deel elke term afsonderlik.`,
            `${or('8x⁴ ÷ 4x²')} = 2x² &nbsp;&nbsp; ${or('−12x² ÷ 4x²')} = −3`,
            `${gr('Antwoord:')} ${gr('2x² − 3')}. Sipho is korrek. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Deel (12x³ + 8x²) ÷ 4x.',
          answer: '3x² + 2x',
          checkMode: 'auto',
          correctAnswer: '3x² + 2x',
          correctAnswers: ['3x² + 2x', '3x^2 + 2x', '3x²+2x', '3x^2+2x', '2x + 3x²', '2x + 3x^2'],
          explanation: 'Deel elke term deur 4x:\n12x³ ÷ 4x = 3x²\n8x² ÷ 4x = 2x\nAntwoord: 3x² + 2x ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Deel (20x⁴ − 15x² + 10x) ÷ 5x.',
          answer: '4x³ − 3x + 2',
          checkMode: 'auto',
          correctAnswer: '4x³ − 3x + 2',
          correctAnswers: [
            '4x³ − 3x + 2', '4x^3 − 3x + 2',
            '4x³ - 3x + 2', '4x^3 - 3x + 2',
            '4x³−3x+2', '4x^3-3x+2',
          ],
          explanation: 'Deel elke term deur 5x:\n20x⁴ ÷ 5x = 4x³\n−15x² ÷ 5x = −3x\n10x ÷ 5x = 2\nAntwoord: 4x³ − 3x + 2 ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato deel (9x³ − 6x²) ÷ 3x² en kry 3x − 2. Kontroleer haar antwoord.',
          answer: 'Sy is korrek — deur elke term deur 3x² te deel:\n9x³ ÷ 3x² = 3x\n−6x² ÷ 3x² = −2\nFinale uitdrukking: 3x − 2 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide a polynomial by a monomial by splitting each term and applying the exponent subtraction rule" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing (15x³+10x²−5x)÷5x split into three separate fractions with the divisor in blue each division step in orange and the final expression in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PRODUCT OF TWO BINOMIALS AND SQUARE OF A BINOMIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-binomials-square',
      title: 'Die Produk van Twee Binome en die Kwadraat van ʼn Binoom',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons vermenigvuldig twee binome deur die <strong>FOIL-metode</strong> (Eerste, Buite, Binne, Laaste) of distribusie te gebruik, en herken spesiale patrone vir die kwadraat van ʼn binoom: <strong>(a + b)² = a² + 2ab + b²</strong>, en <strong>(a − b)² = a² − 2ab + b²</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste term')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('buite / binne terme')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('laaste term')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die FOIL-metode</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0 0 12px 0;font-style:italic;">FOIL staan vir First, Outer, Inner, Last in Engels — die volgorde waarin jy die terme vermenigvuldig.</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;font-size:1.1em;">E — ${bl('Eerste')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Vermenigvuldig die ${bl('eerste')} terme van elke binoom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:1.1em;">B — ${or('Buite')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Vermenigvuldig die ${or('buite')} terme (eerste van eerste × laaste van tweede).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:1.1em;">B — ${or('Binne')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Vermenigvuldig die ${or('binne')} terme (laaste van eerste × eerste van tweede).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;font-size:1.1em;">L — ${gr('Laaste')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Vermenigvuldig die ${gr('laaste')} terme van elke binoom.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spesiale patrone</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Kwadraat van ʼn som</p>` +
        `<p style="font-size:1.05em;color:#374151;margin-bottom:6px;">(a + b)² = a² + 2ab + b²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Let op die <strong>middelste term 2ab</strong> — dit is noodsaaklik en word maklik vergeet.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Kwadraat van ʼn verskil</p>` +
        `<p style="font-size:1.05em;color:#374151;margin-bottom:6px;">(a − b)² = a² − 2ab + b²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die laaste term is altyd <strong>positief</strong> omdat (−b)² = +b².</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout om te vermy</p>` +
        `<p style="margin:0;color:#991b1b;">(x + 4)² ≠ x² + 16. Die kwadreer van ʼn binoom lewer altyd ʼn <strong>trinoom</strong> op: (x + 4)² = x² + 8x + 16. Die middelste term 2ab is noodsaaklik — moet dit nooit weglaat nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vermenigvuldig (x + 3)(x + 5).',
          answer: `${re('x² + 8x + 15')}`,
          steps: [
            `FOIL: ${bl('Eerste:')} x · x = x² &nbsp;&nbsp; ${or('Buite:')} x · 5 = 5x &nbsp;&nbsp; ${or('Binne:')} 3 · x = 3x &nbsp;&nbsp; ${gr('Laaste:')} 3 · 5 = 15`,
            `Voeg gelyksoortige terme saam: x² + 5x + 3x + 15`,
            `${re('Finale antwoord:')} ${re('x² + 8x + 15')}`,
          ],
        },
        {
          question: 'Brei (2x − 1)(3x + 4) uit.',
          answer: `${re('6x² + 5x − 4')}`,
          steps: [
            `FOIL: ${bl('Eerste:')} 2x · 3x = 6x² &nbsp;&nbsp; ${or('Buite:')} 2x · 4 = 8x &nbsp;&nbsp; ${or('Binne:')} −1 · 3x = −3x &nbsp;&nbsp; ${gr('Laaste:')} −1 · 4 = −4`,
            `Voeg gelyksoortige terme saam: 6x² + 8x − 3x − 4`,
            `${re('Finale antwoord:')} ${re('6x² + 5x − 4')}`,
          ],
        },
        {
          question: 'Brei (x + 4)² uit deur die spesiale patroon te gebruik.',
          answer: `${re('x² + 8x + 16')}`,
          steps: [
            `Gebruik die patroon: (a + b)² = a² + 2ab + b²`,
            `Hier is a = x, b = 4.`,
            `x² + 2(x)(4) + 4² = x² + 8x + 16`,
            `${re('Finale antwoord:')} ${re('x² + 8x + 16')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Brei (x + 2)(x + 5) uit.',
          answer: 'x² + 7x + 10',
          checkMode: 'auto',
          correctAnswer: 'x² + 7x + 10',
          correctAnswers: ['x² + 7x + 10', 'x^2 + 7x + 10', 'x²+7x+10', 'x^2+7x+10'],
          explanation: 'FOIL:\nEerste: x · x = x²\nBuite: x · 5 = 5x\nBinne: 2 · x = 2x\nLaaste: 2 · 5 = 10\nVoeg saam: x² + 7x + 10 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Brei (x − 3)(x + 6) uit.',
          answer: 'x² + 3x − 18',
          checkMode: 'auto',
          correctAnswer: 'x² + 3x − 18',
          correctAnswers: ['x² + 3x − 18', 'x^2 + 3x − 18', 'x²+3x−18', 'x²+3x-18', 'x^2+3x-18'],
          explanation: 'FOIL:\nEerste: x²\nBuite: +6x\nBinne: −3x\nLaaste: −18\nVoeg saam: x² + 3x − 18 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo brei (2x + 3)(x − 4) uit en kry 2x² − 5x − 12. Kontroleer sy antwoord.',
          answer: 'Hy is korrek.\nFOIL:\nEerste: 2x · x = 2x²\nBuite: 2x · (−4) = −8x\nBinne: 3 · x = 3x\nLaaste: 3 · (−4) = −12\nSaamgevoeg: 2x² − 8x + 3x − 12 = 2x² − 5x − 12 ✓',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Brei (x + 6)² uit deur die spesiale patroon te gebruik.',
          answer: 'x² + 12x + 36',
          checkMode: 'auto',
          correctAnswer: 'x² + 12x + 36',
          correctAnswers: ['x² + 12x + 36', 'x^2 + 12x + 36', 'x²+12x+36', 'x^2+12x+36'],
          explanation: 'Gebruik (a + b)² = a² + 2ab + b²\na = x, b = 6\nx² + 2(x)(6) + 6² = x² + 12x + 36 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Brei (x − 5)² uit deur die spesiale patroon te gebruik en verduidelik watter formule jy gebruik het.',
          answer: 'Die patroon (a − b)² = a² − 2ab + b² is gebruik.\na = x, b = 5.\nx² − 2(x)(5) + 5² = x² − 10x + 25 ✓',
          checkMode: 'self',
        },

        // ── Q12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Brei (3x + 2)² uit.',
          answer: '9x² + 12x + 4',
          checkMode: 'auto',
          correctAnswer: '9x² + 12x + 4',
          correctAnswers: ['9x² + 12x + 4', '9x^2 + 12x + 4', '9x²+12x+4', '9x^2+12x+4'],
          explanation: 'Gebruik (a + b)² = a² + 2ab + b²\na = 3x, b = 2\n(3x)² + 2(3x)(2) + 2² = 9x² + 12x + 4 ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê (x + 4)² en x² + 16 is gelyk. Is sy korrek? Verduidelik.',
          answer: 'Nee — (x + 4)² = x² + 8x + 16, wat die middelste term 8x insluit wat ontbreek in x² + 16. Hulle is nie gelyk nie.',
          checkMode: 'self',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Brei (2x − 5)(2x + 5) uit en identifiseer enige spesiale patroon wat gebruik is.',
          answer: '4x² − 25. Dit is die verskil-van-twee-kwadrate-patroon: (a − b)(a + b) = a² − b².\nHier is a = 2x en b = 5, so (2x)² − 5² = 4x² − 25.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Deel (6x⁴ + 9x³ − 3x²) ÷ 3x² en brei (x + 7)(x − 7) uit. Vergelyk die tegnieke wat gebruik is.',
          answer: 'Deling: deel elke term deur 3x²:\n6x⁴ ÷ 3x² = 2x²\n9x³ ÷ 3x² = 3x\n−3x² ÷ 3x² = −1\nResultaat: 2x² + 3x − 1\n\nUitbreiding: (x + 7)(x − 7) is die verskil van twee kwadrate: x² − 49.\n\nDeling gebruik die eksponent-aftrekkingsreël; uitbreiding gebruik die (a − b)(a + b) = a² − b² patroon.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply two binomials using FOIL and how to expand the square of a binomial using the special patterns with colour coded steps" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing FOIL method for (x+3)(x+5) with first term in blue outer and inner terms in orange last term in green and final answer in red alongside the square of a binomial pattern" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
    { minScore: 12, message: 'Puik werk! Jy het ʼn sterk begrip van algebraïese uitdrukkings. Gaan enige gemiste vrae na en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging — gaan die studiegids na en probeer die vrae weer.' },
    { minScore: 0, message: 'Hou aan — werk noukeurig deur die gids en let op elke uitgewerkte voorbeeld.' },
  ],
}
