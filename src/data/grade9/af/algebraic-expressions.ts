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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn monoom met ʼn polinoom te vermenigvuldig deur die distributiewe wet te gebruik, met stap-vir-stap kleurgekodeerde voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die distributiewe wet toegepas op 3x(2x²+5x−4) wys, met pyle vanaf die gedistribueerde term in blou na elke vermenigvuldiging in oranje en die finale uitdrukking in groen" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn polinoom deur ʼn monoom te deel deur elke term te skei en die eksponent-aftrekkingsreël toe te pas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat (15x³+10x²−5x)÷5x wys, opgedeel in drie afsonderlike breuke met die deler in blou, elke delingstap in oranje en die finale uitdrukking in groen" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om twee binome te vermenigvuldig deur die FOIL-metode te gebruik en hoe om die kwadraat van ʼn binoom uit te brei met die spesiale patrone, met kleurgekodeerde stappe" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die FOIL-metode vir (x+3)(x+5) wys, met die eerste terme in blou, buitenste en binneste terme in oranje, laaste terme in groen en die finale antwoord in rooi, langs die kwadraat-van-ʼn-binoom-patroon" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
    { minScore: 12, message: 'Puik werk! Jy het ʼn sterk begrip van algebraïese uitdrukkings. Gaan enige gemiste vrae na en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goeie poging — gaan die studiegids na en probeer die vrae weer.' },
    { minScore: 0, message: 'Hou aan — werk noukeurig deur die gids en let op elke uitgewerkte voorbeeld.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Vereenvoudiging — vermenigvuldig/deel monome met
    //                 meer as een veranderlike en meervoudige eksponente
    // Blok 2 (3-6):   Binoom × binoom uitbrei (algemene FOIL)
    // Blok 3 (7-10):  Kwadraat van ʼn binoom en verskil van twee kwadrate
    // Blok 4 (11-13): Substitusie met negatiewe/breukwaardes
    // Blok 5 (14-16): Algebraïese breuke — die KGV (kleinste gemene veelvoud) vind
    // Blok 6 (17-19): Multi-stap vereenvoudiging / foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Vereenvoudiging met meer komplekse eksponentreëls (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 3x²y × 4xy².', checkMode: 'auto', correctAnswer: '12x³y³', correctAnswers: ['12x³y³', '12x^3y^3'], answer: '12x³y³', explanation: 'Vermenigvuldig koëffisiënte: 3 × 4 = 12.\nTel eksponente van x bymekaar: x² × x = x³.\nTel eksponente van y bymekaar: y × y² = y³.\nAntwoord: 12x³y³' },
        { difficulty: 'Easy', question: 'Vereenvoudig (−2a³b²)(5ab³).', checkMode: 'auto', correctAnswer: '-10a⁴b⁵', correctAnswers: ['-10a⁴b⁵', '−10a⁴b⁵', '-10a^4b^5', '−10a^4b^5'], answer: '−10a⁴b⁵', explanation: 'Vermenigvuldig koëffisiënte: −2 × 5 = −10.\nTel eksponente van a bymekaar: a³ × a = a⁴.\nTel eksponente van b bymekaar: b² × b³ = b⁵.\nAntwoord: −10a⁴b⁵' },
        { difficulty: 'Medium', question: 'Vereenvoudig 24x⁵y³ ÷ 6x²y.', checkMode: 'auto', correctAnswer: '4x³y²', correctAnswers: ['4x³y²', '4x^3y^2'], answer: '4x³y²', explanation: 'Deel koëffisiënte: 24 ÷ 6 = 4.\nTrek eksponente van x van mekaar af: x⁵ ÷ x² = x³.\nTrek eksponente van y van mekaar af: y³ ÷ y = y².\nAntwoord: 4x³y²' },

        // Blok 2 — Binoom × binoom uitbrei (algemene FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 4)(x + 9) uit.', checkMode: 'auto', correctAnswer: 'x²+13x+36', correctAnswers: ['x²+13x+36', 'x^2+13x+36', 'x² + 13x + 36'], answer: 'x² + 13x + 36', explanation: 'FOIL: Eerste: x·x = x². Buite: x·9 = 9x. Binne: 4·x = 4x. Laaste: 4·9 = 36.\nVoeg saam: x² + 9x + 4x + 36 = x² + 13x + 36' },
        { difficulty: 'Medium', question: 'Brei (2x − 3)(x + 7) uit.', checkMode: 'auto', correctAnswer: '2x²+11x-21', correctAnswers: ['2x²+11x-21', '2x²+11x−21', '2x^2+11x-21', '2x^2+11x−21'], answer: '2x² + 11x − 21', explanation: 'FOIL: Eerste: 2x·x = 2x². Buite: 2x·7 = 14x. Binne: −3·x = −3x. Laaste: −3·7 = −21.\nVoeg saam: 2x² + 14x − 3x − 21 = 2x² + 11x − 21' },
        { difficulty: 'Hard', question: 'ʼn Rugbyveld-uitbreiding word gemodelleer deur (3x + 2)(2x − 5) vierkante meter, waar x in meter gemeet word. Brei hierdie uitdrukking volledig uit.', checkMode: 'auto', correctAnswer: '6x²-11x-10', correctAnswers: ['6x²-11x-10', '6x²−11x−10', '6x^2-11x-10', '6x^2−11x−10'], answer: '6x² − 11x − 10', explanation: 'FOIL: Eerste: 3x·2x = 6x². Buite: 3x·(−5) = −15x. Binne: 2·2x = 4x. Laaste: 2·(−5) = −10.\nVoeg saam: 6x² − 15x + 4x − 10 = 6x² − 11x − 10' },
        { difficulty: 'Hard', question: 'Buhle brei (x − 6)(x − 8) uit en kry x² − 14x − 48. Kontroleer haar werk en verbeter dit indien nodig.', answer: 'Sy het ʼn tekenfout by die laaste term gemaak. FOIL: Eerste: x·x = x². Buite: x·(−8) = −8x. Binne: −6·x = −6x. Laaste: (−6)(−8) = +48 (twee negatiewe getalle vermenigvuldig tot ʼn positiewe getal), nie −48 nie.\nVoeg saam: x² − 8x − 6x + 48 = x² − 14x + 48. Die korrekte uitbreiding is x² − 14x + 48.', checkMode: 'self' },

        // Blok 3 — Kwadraat van ʼn binoom en verskil van twee kwadrate (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 7)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: 'x²+14x+49', correctAnswers: ['x²+14x+49', 'x^2+14x+49'], answer: 'x² + 14x + 49', explanation: 'Gebruik (a + b)² = a² + 2ab + b² met a = x, b = 7.\nx² + 2(x)(7) + 7² = x² + 14x + 49' },
        { difficulty: 'Medium', question: 'Brei (2x − 5)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: '4x²-20x+25', correctAnswers: ['4x²-20x+25', '4x²−20x+25', '4x^2-20x+25', '4x^2−20x+25'], answer: '4x² − 20x + 25', explanation: 'Gebruik (a − b)² = a² − 2ab + b² met a = 2x, b = 5.\n(2x)² − 2(2x)(5) + 5² = 4x² − 20x + 25' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige binneplaas het sye van lengte (x − 9) m, langs ʼn tweede vierkantige binneplaas met sye (x + 9) m. Brei (x − 9)(x + 9) uit om die patroon tussen die twee te vind.', checkMode: 'auto', correctAnswer: 'x²-81', correctAnswers: ['x²-81', 'x²−81', 'x^2-81', 'x^2−81'], answer: 'x² − 81', explanation: 'Dit is die verskil-van-twee-kwadrate-patroon: (a − b)(a + b) = a² − b².\nHier is a = x, b = 9, so x² − 9² = x² − 81.' },
        { difficulty: 'Hard', question: 'Kagiso sê (x + 4)(x − 4) en (x + 4)² gee dieselfde antwoord omdat albei die getal 4 bevat. Verduidelik waarom hy verkeerd is, en gee albei uitbreidings.', answer: 'Hy is verkeerd — hierdie gebruik verskillende patrone. (x + 4)(x − 4) is die verskil van twee kwadrate: x² − 16. (x + 4)² is die kwadraat van ʼn binoom: x² + 8x + 16. Die twee resultate verskil met die middelste term 8x, aangesien een uitdrukking ʼn "+4, −4" paar het (middelste terme kanselleer) en die ander dieselfde "+4" twee keer kwadreer (middelste terme tel op).', checkMode: 'self' },

        // Blok 4 — Substitusie met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evalueer 2x² − 3x + 1 wanneer x = −3.', checkMode: 'auto', correctAnswer: '28', answer: '28', explanation: 'Vervang x = −3: 2(−3)² − 3(−3) + 1.\n(−3)² = 9, so 2(9) = 18. Ook −3(−3) = +9.\n18 + 9 + 1 = 28' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 3(x − 2)² wanneer x = −1.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Vervang x = −1: 3(−1 − 2)² = 3(−3)².\n(−3)² = 9, so 3(9) = 27.' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 4x² − 2y wanneer x = ½ en y = −2.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'Vervang x = ½, y = −2: 4(½)² − 2(−2).\n(½)² = ¼, so 4(¼) = 1. Ook −2(−2) = +4.\n1 + 4 = 5' },

        // Blok 5 — Algebraïese breuke met KGV (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig x/2 + x/5 deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '7x/10', correctAnswers: ['7x/10', '7x÷10'], answer: '7x/10', explanation: 'Die KGV van 2 en 5 is 10.\nx/2 = 5x/10 en x/5 = 2x/10.\nTel op: 5x/10 + 2x/10 = 7x/10' },
        { difficulty: 'Hard', question: 'Vereenvoudig 2/x + 3/x² deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '(2x+3)/x²', correctAnswers: ['(2x+3)/x²', '(2x+3)/x^2', '2x+3/x²', '2x+3/x^2'], answer: '(2x + 3)/x²', explanation: 'Die KGV van x en x² is x².\n2/x = 2x/x² en 3/x² bly 3/x².\nTel op: 2x/x² + 3/x² = (2x + 3)/x²' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5/(2x) − 1/(3x) deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'Die KGV van 2x en 3x is 6x.\n5/(2x) = 15/(6x) en 1/(3x) = 2/(6x).\nTrek af: 15/(6x) − 2/(6x) = 13/(6x)' },

        // Blok 6 — Multi-stap vereenvoudiging / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig (x + 3)(x + 2) + 2x.', checkMode: 'auto', correctAnswer: 'x²+7x+6', correctAnswers: ['x²+7x+6', 'x^2+7x+6'], answer: 'x² + 7x + 6', explanation: 'Brei eers uit: (x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6.\nTel die oorblywende term by: x² + 5x + 6 + 2x.\nVoeg gelyksoortige terme saam: 5x + 2x = 7x.\nAntwoord: x² + 7x + 6' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer (x + 6)² = x² + 36. Verduidelik die fout en gee die korrekte uitbreiding.', answer: 'Die leerder het elke term apart gekwadreer en die middelste term vergeet. Die kwadreer van ʼn binoom lewer altyd ʼn trinoom op: (x + 6)² = x² + 2(x)(6) + 6² = x² + 12x + 36, nie x² + 36 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evalueer (x + 3)(x − 2) wanneer x = −1, en wys of jy eers uitbrei of eers vervang.', answer: 'Albei metodes werk. Direkte vervanging: (−1 + 3)(−1 − 2) = (2)(−3) = −6.\nEers uitbrei: (x + 3)(x − 2) = x² + x − 6, en dan x = −1 vervang: 1 − 1 − 6 = −6. Albei metodes gee −6.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding en substitusie in algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor binoomprodukte of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor FOIL en die kwadraat van ʼn binoom weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Vereenvoudiging met meer komplekse eksponentreëls (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 4x²y × 3xy³.', checkMode: 'auto', correctAnswer: '12x³y⁴', correctAnswers: ['12x³y⁴', '12x^3y^4'], answer: '12x³y⁴', explanation: 'Vermenigvuldig koëffisiënte: 4 × 3 = 12.\nTel eksponente van x bymekaar: x² × x = x³.\nTel eksponente van y bymekaar: y × y³ = y⁴.\nAntwoord: 12x³y⁴' },
        { difficulty: 'Easy', question: 'Vereenvoudig (−3a²b⁴)(4a³b).', checkMode: 'auto', correctAnswer: '-12a⁵b⁵', correctAnswers: ['-12a⁵b⁵', '−12a⁵b⁵', '-12a^5b^5', '−12a^5b^5'], answer: '−12a⁵b⁵', explanation: 'Vermenigvuldig koëffisiënte: −3 × 4 = −12.\nTel eksponente van a bymekaar: a² × a³ = a⁵.\nTel eksponente van b bymekaar: b⁴ × b = b⁵.\nAntwoord: −12a⁵b⁵' },
        { difficulty: 'Medium', question: 'Vereenvoudig 30x⁶y² ÷ 5x³y.', checkMode: 'auto', correctAnswer: '6x³y', correctAnswers: ['6x³y', '6x^3y'], answer: '6x³y', explanation: 'Deel koëffisiënte: 30 ÷ 5 = 6.\nTrek eksponente van x van mekaar af: x⁶ ÷ x³ = x³.\nTrek eksponente van y van mekaar af: y² ÷ y = y.\nAntwoord: 6x³y' },

        // Blok 2 — Binoom × binoom uitbrei (algemene FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 5)(x + 7) uit.', checkMode: 'auto', correctAnswer: 'x²+12x+35', correctAnswers: ['x²+12x+35', 'x^2+12x+35', 'x² + 12x + 35'], answer: 'x² + 12x + 35', explanation: 'FOIL: Eerste: x·x = x². Buite: x·7 = 7x. Binne: 5·x = 5x. Laaste: 5·7 = 35.\nVoeg saam: x² + 7x + 5x + 35 = x² + 12x + 35' },
        { difficulty: 'Medium', question: 'Brei (3x − 2)(x + 4) uit.', checkMode: 'auto', correctAnswer: '3x²+10x-8', correctAnswers: ['3x²+10x-8', '3x²+10x−8', '3x^2+10x-8', '3x^2+10x−8'], answer: '3x² + 10x − 8', explanation: 'FOIL: Eerste: 3x·x = 3x². Buite: 3x·4 = 12x. Binne: −2·x = −2x. Laaste: −2·4 = −8.\nVoeg saam: 3x² + 12x − 2x − 8 = 3x² + 10x − 8' },
        { difficulty: 'Hard', question: 'ʼn Groentetuin-uitbreiding word gemodelleer deur (2x + 5)(3x − 4) vierkante meter, waar x in meter gemeet word. Brei hierdie uitdrukking volledig uit.', checkMode: 'auto', correctAnswer: '6x²+7x-20', correctAnswers: ['6x²+7x-20', '6x²+7x−20', '6x^2+7x-20', '6x^2+7x−20'], answer: '6x² + 7x − 20', explanation: 'FOIL: Eerste: 2x·3x = 6x². Buite: 2x·(−4) = −8x. Binne: 5·3x = 15x. Laaste: 5·(−4) = −20.\nVoeg saam: 6x² − 8x + 15x − 20 = 6x² + 7x − 20' },
        { difficulty: 'Hard', question: 'Sibusiso brei (x − 7)(x − 9) uit en kry x² − 16x − 63. Kontroleer sy werk en verbeter dit indien nodig.', answer: 'Hy het ʼn tekenfout by die laaste term gemaak. FOIL: Eerste: x·x = x². Buite: x·(−9) = −9x. Binne: −7·x = −7x. Laaste: (−7)(−9) = +63 (twee negatiewe getalle vermenigvuldig tot ʼn positiewe getal), nie −63 nie.\nVoeg saam: x² − 9x − 7x + 63 = x² − 16x + 63. Die korrekte uitbreiding is x² − 16x + 63.', checkMode: 'self' },

        // Blok 3 — Kwadraat van ʼn binoom en verskil van twee kwadrate (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 8)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: 'x²+16x+64', correctAnswers: ['x²+16x+64', 'x^2+16x+64'], answer: 'x² + 16x + 64', explanation: 'Gebruik (a + b)² = a² + 2ab + b² met a = x, b = 8.\nx² + 2(x)(8) + 8² = x² + 16x + 64' },
        { difficulty: 'Medium', question: 'Brei (3x − 4)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: '9x²-24x+16', correctAnswers: ['9x²-24x+16', '9x²−24x+16', '9x^2-24x+16', '9x^2−24x+16'], answer: '9x² − 24x + 16', explanation: 'Gebruik (a − b)² = a² − 2ab + b² met a = 3x, b = 4.\n(3x)² − 2(3x)(4) + 4² = 9x² − 24x + 16. Die laaste term bly positief omdat (−4)² = +16.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige landerye het sye van lengte (x − 10) m, langs ʼn tweede vierkantige landerye met sye (x + 10) m. Brei (x − 10)(x + 10) uit om die patroon tussen die twee te vind.', checkMode: 'auto', correctAnswer: 'x²-100', correctAnswers: ['x²-100', 'x²−100', 'x^2-100', 'x^2−100'], answer: 'x² − 100', explanation: 'Dit is die verskil-van-twee-kwadrate-patroon: (a − b)(a + b) = a² − b².\nHier is a = x, b = 10, so x² − 10² = x² − 100.' },
        { difficulty: 'Hard', question: 'Naledi sê (x + 5)(x − 5) en (x + 5)² gee dieselfde antwoord omdat albei die getal 5 bevat. Verduidelik waarom sy verkeerd is, en gee albei uitbreidings.', answer: 'Sy is verkeerd — hierdie gebruik verskillende patrone. (x + 5)(x − 5) is die verskil van twee kwadrate: x² − 25. (x + 5)² is die kwadraat van ʼn binoom: x² + 10x + 25. Die twee resultate verskil met die middelste term 10x, aangesien een uitdrukking ʼn "+5, −5" paar het (middelste terme kanselleer) en die ander dieselfde "+5" twee keer kwadreer (middelste terme tel op).', checkMode: 'self' },

        // Blok 4 — Substitusie met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evalueer 2x² − 5x + 3 wanneer x = −4.', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'Vervang x = −4: 2(−4)² − 5(−4) + 3.\n(−4)² = 16, so 2(16) = 32. Ook −5(−4) = +20.\n32 + 20 + 3 = 55' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 2(x − 3)² wanneer x = −2.', checkMode: 'auto', correctAnswer: '50', answer: '50', explanation: 'Vervang x = −2: 2(−2 − 3)² = 2(−5)².\n(−5)² = 25, so 2(25) = 50.' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 9x² − 3y wanneer x = ⅓ en y = −3.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'Vervang x = ⅓, y = −3: 9(⅓)² − 3(−3).\n(⅓)² = 1/9, so 9(1/9) = 1. Ook −3(−3) = +9.\n1 + 9 = 10' },

        // Blok 5 — Algebraïese breuke met KGV (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig x/3 + x/4 deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '7x/12', correctAnswers: ['7x/12', '7x÷12'], answer: '7x/12', explanation: 'Die KGV van 3 en 4 is 12.\nx/3 = 4x/12 en x/4 = 3x/12.\nTel op: 4x/12 + 3x/12 = 7x/12' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5/x + 2/x² deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '(5x+2)/x²', correctAnswers: ['(5x+2)/x²', '(5x+2)/x^2', '5x+2/x²', '5x+2/x^2'], answer: '(5x + 2)/x²', explanation: 'Die KGV van x en x² is x².\n5/x = 5x/x² en 2/x² bly 2/x².\nTel op: 5x/x² + 2/x² = (5x + 2)/x²' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3/(2x) − 1/(4x) deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '5/(4x)', correctAnswers: ['5/(4x)', '5/4x'], answer: '5/(4x)', explanation: 'Die KGV van 2x en 4x is 4x.\n3/(2x) = 6/(4x) en 1/(4x) bly 1/(4x).\nTrek af: 6/(4x) − 1/(4x) = 5/(4x)' },

        // Blok 6 — Multi-stap vereenvoudiging / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig (x + 4)(x + 1) + 3x.', checkMode: 'auto', correctAnswer: 'x²+8x+4', correctAnswers: ['x²+8x+4', 'x^2+8x+4'], answer: 'x² + 8x + 4', explanation: 'Brei eers uit: (x + 4)(x + 1) = x² + x + 4x + 4 = x² + 5x + 4.\nTel die oorblywende term by: x² + 5x + 4 + 3x.\nVoeg gelyksoortige terme saam: 5x + 3x = 8x.\nAntwoord: x² + 8x + 4' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer (x − 5)² = x² − 25. Verduidelik die fout en gee die korrekte uitbreiding.', answer: 'Die leerder het elke term apart gekwadreer en die middelste term vergeet. Die kwadreer van ʼn binoom lewer altyd ʼn trinoom op: (x − 5)² = x² − 2(x)(5) + 5² = x² − 10x + 25, nie x² − 25 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evalueer (x + 5)(x − 3) wanneer x = −2, en wys of jy eers uitbrei of eers vervang.', answer: 'Albei metodes werk. Direkte vervanging: (−2 + 5)(−2 − 3) = (3)(−5) = −15.\nEers uitbrei: (x + 5)(x − 3) = x² + 2x − 15, en dan x = −2 vervang: 4 − 4 − 15 = −15. Albei metodes gee −15.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding en substitusie in algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor binoomprodukte of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor FOIL en die kwadraat van ʼn binoom weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Vereenvoudiging met meer komplekse eksponentreëls (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig 5x²y × 2xy³.', checkMode: 'auto', correctAnswer: '10x³y⁴', correctAnswers: ['10x³y⁴', '10x^3y^4'], answer: '10x³y⁴', explanation: 'Vermenigvuldig koëffisiënte: 5 × 2 = 10.\nTel eksponente van x bymekaar: x² × x = x³.\nTel eksponente van y bymekaar: y × y³ = y⁴.\nAntwoord: 10x³y⁴' },
        { difficulty: 'Easy', question: 'Vereenvoudig (−4a³b)(3a²b⁴).', checkMode: 'auto', correctAnswer: '-12a⁵b⁵', correctAnswers: ['-12a⁵b⁵', '−12a⁵b⁵', '-12a^5b^5', '−12a^5b^5'], answer: '−12a⁵b⁵', explanation: 'Vermenigvuldig koëffisiënte: −4 × 3 = −12.\nTel eksponente van a bymekaar: a³ × a² = a⁵.\nTel eksponente van b bymekaar: b × b⁴ = b⁵.\nAntwoord: −12a⁵b⁵' },
        { difficulty: 'Medium', question: 'Vereenvoudig 36x⁵y⁴ ÷ 9x²y².', checkMode: 'auto', correctAnswer: '4x³y²', correctAnswers: ['4x³y²', '4x^3y^2'], answer: '4x³y²', explanation: 'Deel koëffisiënte: 36 ÷ 9 = 4.\nTrek eksponente van x van mekaar af: x⁵ ÷ x² = x³.\nTrek eksponente van y van mekaar af: y⁴ ÷ y² = y².\nAntwoord: 4x³y²' },

        // Blok 2 — Binoom × binoom uitbrei (algemene FOIL) (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 6)(x + 8) uit.', checkMode: 'auto', correctAnswer: 'x²+14x+48', correctAnswers: ['x²+14x+48', 'x^2+14x+48', 'x² + 14x + 48'], answer: 'x² + 14x + 48', explanation: 'FOIL: Eerste: x·x = x². Buite: x·8 = 8x. Binne: 6·x = 6x. Laaste: 6·8 = 48.\nVoeg saam: x² + 8x + 6x + 48 = x² + 14x + 48' },
        { difficulty: 'Medium', question: 'Brei (4x − 1)(x + 5) uit.', checkMode: 'auto', correctAnswer: '4x²+19x-5', correctAnswers: ['4x²+19x-5', '4x²+19x−5', '4x^2+19x-5', '4x^2+19x−5'], answer: '4x² + 19x − 5', explanation: 'FOIL: Eerste: 4x·x = 4x². Buite: 4x·5 = 20x. Binne: −1·x = −x. Laaste: −1·5 = −5.\nVoeg saam: 4x² + 20x − x − 5 = 4x² + 19x − 5' },
        { difficulty: 'Hard', question: 'ʼn Gemeenskapsaal-uitbreiding word gemodelleer deur (2x + 3)(3x − 7) vierkante meter, waar x in meter gemeet word. Brei hierdie uitdrukking volledig uit.', checkMode: 'auto', correctAnswer: '6x²-5x-21', correctAnswers: ['6x²-5x-21', '6x²−5x−21', '6x^2-5x-21', '6x^2−5x−21'], answer: '6x² − 5x − 21', explanation: 'FOIL: Eerste: 2x·3x = 6x². Buite: 2x·(−7) = −14x. Binne: 3·3x = 9x. Laaste: 3·(−7) = −21.\nVoeg saam: 6x² − 14x + 9x − 21 = 6x² − 5x − 21' },
        { difficulty: 'Hard', question: 'Zanele brei (x − 5)(x − 11) uit en kry x² − 16x − 55. Kontroleer haar werk en verbeter dit indien nodig.', answer: 'Sy het ʼn tekenfout by die laaste term gemaak. FOIL: Eerste: x·x = x². Buite: x·(−11) = −11x. Binne: −5·x = −5x. Laaste: (−5)(−11) = +55 (twee negatiewe getalle vermenigvuldig tot ʼn positiewe getal), nie −55 nie.\nVoeg saam: x² − 11x − 5x + 55 = x² − 16x + 55. Die korrekte uitbreiding is x² − 16x + 55.', checkMode: 'self' },

        // Blok 3 — Kwadraat van ʼn binoom en verskil van twee kwadrate (Medium/Hard)
        { difficulty: 'Medium', question: 'Brei (x + 9)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: 'x²+18x+81', correctAnswers: ['x²+18x+81', 'x^2+18x+81'], answer: 'x² + 18x + 81', explanation: 'Gebruik (a + b)² = a² + 2ab + b² met a = x, b = 9.\nx² + 2(x)(9) + 9² = x² + 18x + 81' },
        { difficulty: 'Medium', question: 'Brei (2x − 7)² uit deur die spesiale patroon te gebruik.', checkMode: 'auto', correctAnswer: '4x²-28x+49', correctAnswers: ['4x²-28x+49', '4x²−28x+49', '4x^2-28x+49', '4x^2−28x+49'], answer: '4x² − 28x + 49', explanation: 'Gebruik (a − b)² = a² − 2ab + b² met a = 2x, b = 7.\n(2x)² − 2(2x)(7) + 7² = 4x² − 28x + 49' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige kavel het sye van lengte (x − 6) m, langs ʼn tweede vierkantige kavel met sye (x + 6) m. Brei (x − 6)(x + 6) uit om die patroon tussen die twee te vind.', checkMode: 'auto', correctAnswer: 'x²-36', correctAnswers: ['x²-36', 'x²−36', 'x^2-36', 'x^2−36'], answer: 'x² − 36', explanation: 'Dit is die verskil-van-twee-kwadrate-patroon: (a − b)(a + b) = a² − b².\nHier is a = x, b = 6, so x² − 6² = x² − 36.' },
        { difficulty: 'Hard', question: 'Bongani sê (x + 3)(x − 3) en (x + 3)² gee dieselfde antwoord omdat albei die getal 3 bevat. Verduidelik waarom hy verkeerd is, en gee albei uitbreidings.', answer: 'Hy is verkeerd — hierdie gebruik verskillende patrone. (x + 3)(x − 3) is die verskil van twee kwadrate: x² − 9. (x + 3)² is die kwadraat van ʼn binoom: x² + 6x + 9. Die twee resultate verskil met die middelste term 6x, aangesien een uitdrukking ʼn "+3, −3" paar het (middelste terme kanselleer) en die ander dieselfde "+3" twee keer kwadreer (middelste terme tel op).', checkMode: 'self' },

        // Blok 4 — Substitusie met negatiewe/breukwaardes (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Evalueer 3x² − 4x + 2 wanneer x = −2.', checkMode: 'auto', correctAnswer: '22', answer: '22', explanation: 'Vervang x = −2: 3(−2)² − 4(−2) + 2.\n(−2)² = 4, so 3(4) = 12. Ook −4(−2) = +8.\n12 + 8 + 2 = 22' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 4(x − 1)² wanneer x = −1.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Vervang x = −1: 4(−1 − 1)² = 4(−2)².\n(−2)² = 4, so 4(4) = 16.' },
        { difficulty: 'Medium-Hard', question: 'Evalueer 4x² − 3y wanneer x = ½ en y = −3.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'Vervang x = ½, y = −3: 4(½)² − 3(−3).\n(½)² = ¼, so 4(¼) = 1. Ook −3(−3) = +9.\n1 + 9 = 10' },

        // Blok 5 — Algebraïese breuke met KGV (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig x/2 + x/3 deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '5x/6', correctAnswers: ['5x/6', '5x÷6'], answer: '5x/6', explanation: 'Die KGV van 2 en 3 is 6.\nx/2 = 3x/6 en x/3 = 2x/6.\nTel op: 3x/6 + 2x/6 = 5x/6' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3/x + 4/x² deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '(3x+4)/x²', correctAnswers: ['(3x+4)/x²', '(3x+4)/x^2', '3x+4/x²', '3x+4/x^2'], answer: '(3x + 4)/x²', explanation: 'Die KGV van x en x² is x².\n3/x = 3x/x² en 4/x² bly 4/x².\nTel op: 3x/x² + 4/x² = (3x + 4)/x²' },
        { difficulty: 'Hard', question: 'Vereenvoudig 7/(3x) − 1/(6x) deur albei breuke met ʼn gemeenskaplike noemer te skryf.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'Die KGV van 3x en 6x is 6x.\n7/(3x) = 14/(6x) en 1/(6x) bly 1/(6x).\nTrek af: 14/(6x) − 1/(6x) = 13/(6x)' },

        // Blok 6 — Multi-stap vereenvoudiging / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Brei uit en vereenvoudig (x + 2)(x + 5) + 4x.', checkMode: 'auto', correctAnswer: 'x²+11x+10', correctAnswers: ['x²+11x+10', 'x^2+11x+10'], answer: 'x² + 11x + 10', explanation: 'Brei eers uit: (x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10.\nTel die oorblywende term by: x² + 7x + 10 + 4x.\nVoeg gelyksoortige terme saam: 7x + 4x = 11x.\nAntwoord: x² + 11x + 10' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer (x − 4)² = x² − 16. Verduidelik die fout en gee die korrekte uitbreiding.', answer: 'Die leerder het elke term apart gekwadreer en die middelste term vergeet. Die kwadreer van ʼn binoom lewer altyd ʼn trinoom op: (x − 4)² = x² − 2(x)(4) + 4² = x² − 8x + 16, nie x² − 16 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Evalueer (x + 4)(x − 1) wanneer x = −3, en wys of jy eers uitbrei of eers vervang.', answer: 'Albei metodes werk. Direkte vervanging: (−3 + 4)(−3 − 1) = (1)(−4) = −4.\nEers uitbrei: (x + 4)(x − 1) = x² + 3x − 4, en dan x = −3 vervang: 9 − 9 − 4 = −4. Albei metodes gee −4.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vereenvoudiging, uitbreiding en substitusie in algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor binoomprodukte of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor FOIL en die kwadraat van ʼn binoom weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
