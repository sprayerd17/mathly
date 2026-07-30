import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (factorising roles) ──────────────────────────────────────
// common factor / first square / numbers found → blue   (#2563eb)
// remaining expression / factorised form       → green  (#16a34a)
// second square / common factor in trinomials  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Faktorisering van Algebraïese Uitdrukkings',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FACTORISING USING COMMON FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'common-factors',
      title: 'Faktorisering deur Gemeenskaplike Faktore',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Faktorisering beteken om ʼn uitdrukking te skryf as ʼn <strong>produk van sy faktore</strong> — die omgekeerde van uitbreiding. Ons vind die <strong>grootste gemene faktor (GGF)</strong> van al die terme en skryf dit buite hakies, met die oorblywende dele binne.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemeenskaplike faktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oorblywende uitdrukking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die GGF te vind en uit te faktoriseer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${bl('GGF')} van die numeriese koëffisiënte van al die terme.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${bl('GGF')} van enige veranderlike dele — die laagste mag van elke veranderlike wat in elke term voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('GGF')} buite die hakies en deel elke term daardeur om die ${gr('oorblywende uitdrukking')} binne die hakies te kry.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer jou antwoord</p>` +
        `<p style="margin:0;color:#1e3a8a;">Brei altyd jou antwoord uit om te bevestig dat dit ooreenstem met die oorspronklike uitdrukking. As ${bl('GGF')} × ${gr('hakie')} = oorspronklike uitdrukking, is jou faktorisering korrek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer 6x² + 9x.',
          answer: `${bl('3x')}(${gr('2x + 3')})`,
          steps: [
            `Vind die ${bl('GGF')} van 6x² en 9x. GGF van 6 en 9 is 3; GGF van x² en x is x. Dus ${bl('GGF = 3x')}.`,
            `Faktoriseer ${bl('3x')} uit: deel elke term deur ${bl('3x')} om die ${gr('oorblywende uitdrukking')} te kry: 6x² ÷ 3x = ${gr('2x')} en 9x ÷ 3x = ${gr('3')}.`,
            `Skryf die gefaktoriseerde vorm: ${bl('3x')}(${gr('2x + 3')}).`,
            `<strong>Kontroleer:</strong> ${bl('3x')} × ${gr('2x')} = 6x² en ${bl('3x')} × ${gr('3')} = 9x → 6x² + 9x ✓`,
          ],
        },
        {
          question: 'Faktoriseer 12x³ − 8x² + 4x.',
          answer: `${bl('4x')}(${gr('3x² − 2x + 1')})`,
          steps: [
            `Vind die ${bl('GGF')} van 12x³, 8x² en 4x. GGF van 12, 8 en 4 is 4; GGF van x³, x² en x is x. Dus ${bl('GGF = 4x')}.`,
            `Faktoriseer ${bl('4x')} uit: 12x³ ÷ 4x = ${gr('3x²')}, 8x² ÷ 4x = ${gr('2x')}, 4x ÷ 4x = ${gr('1')}.`,
            `Skryf die gefaktoriseerde vorm: ${bl('4x')}(${gr('3x² − 2x + 1')}).`,
            `<strong>Kontroleer:</strong> ${bl('4x')} × ${gr('3x²')} = 12x³, ${bl('4x')} × ${gr('−2x')} = −8x², ${bl('4x')} × ${gr('1')} = 4x → 12x³ − 8x² + 4x ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om die GGF van algebraïese terme te vind en dit uit ʼn uitdrukking te faktoriseer',

      diagramPlaceholder:
        'Diagram wat 6x² en 9x wys wat saamvloei na hul GGF 3x, wat uitgefaktoriseer word om 3x(2x + 3) te gee',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 175" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="20" width="70" height="32" rx="6" fill="rgba(55,65,81,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="45" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#374151">6x²</text>` +
        `<rect x="10" y="122" width="70" height="32" rx="6" fill="rgba(55,65,81,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="45" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#374151">9x</text>` +
        `<line x1="80" y1="36" x2="138" y2="78" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="140,80 130,77 133,86" fill="#0f1f3d"/>` +
        `<line x1="80" y1="138" x2="138" y2="97" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="140,95 130,94 135,102" fill="#0f1f3d"/>` +
        `<text x="170" y="60" text-anchor="middle" font-size="9" fill="#6b7280">GGF</text>` +
        `<rect x="140" y="68" width="60" height="38" rx="6" fill="rgba(37,99,235,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="170" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">3x</text>` +
        `<line x1="200" y1="87" x2="233" y2="87" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="235,87 226,83 226,91" fill="#0f1f3d"/>` +
        `<rect x="235" y="62" width="85" height="50" rx="6" fill="rgba(22,163,74,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="277" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">3x(2x + 3)</text>` +
        `<text x="160" y="168" text-anchor="middle" font-size="10" fill="#6b7280">Die GGF word uitgefaktoriseer, wat die res in hakies laat</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FACTORISING THE DIFFERENCE OF TWO SQUARES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'difference-of-two-squares',
      title: 'Faktorisering van die Verskil van Twee Kwadrate',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Die patroon van die <strong>verskil van twee kwadrate</strong> lui dat a² − b² = (a − b)(a + b). Ons herken hierdie patroon wanneer ʼn uitdrukking ʼn <strong>aftrekking van twee volkome kwadrate</strong> is, en faktoriseer dienooreenkomstig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste kwadraat (a²)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede kwadraat (b²)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gefaktoriseerde vorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die patroon</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('a²')} − ${or('b²')} = ${gr('(a − b)(a + b)')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die patroon te herken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Die uitdrukking moet ʼn <strong>aftrekking</strong> (verskil) wees, nie ʼn optelling nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Albei terme moet <strong>volkome kwadrate</strong> wees — ʼn getal of uitdrukking wat ontstaan deur iets te kwadreer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Vind die vierkantswortel van elke term (a en b), en skryf dan die ${gr('gefaktoriseerde vorm')} (a − b)(a + b).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Belangrik: optelling kan nie op hierdie manier gefaktoriseer word nie</p>` +
        `<p style="margin:0;color:#991b1b;">Die verskil van twee kwadrate werk slegs vir <strong>aftrekking</strong>. ʼn Uitdrukking soos x² + 16 kan nie met hierdie patroon gefaktoriseer word nie, aangesien dit ʼn optelling is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer x² − 25.',
          answer: `${gr('(x − 5)(x + 5)')}`,
          steps: [
            `Herken die patroon: ${bl('x²')} − ${or('25')} is ʼn verskil van twee kwadrate aangesien ${bl('x²')} = (x)² en ${or('25')} = (5)².`,
            `Identifiseer a = x en b = 5.`,
            `Pas die patroon a² − b² = (a − b)(a + b) toe: ${gr('(x − 5)(x + 5)')}.`,
            `<strong>Kontroleer:</strong> (x − 5)(x + 5) = x² + 5x − 5x − 25 = x² − 25 ✓`,
          ],
        },
        {
          question: 'Sipho faktoriseer 9x² − 16 en kry (3x − 4)(3x + 4). Kontroleer sy antwoord.',
          answer: `Sipho is korrek — ${gr('(3x − 4)(3x + 4)')}`,
          steps: [
            `Kontroleer of 9x² en 16 volkome kwadrate is: ${bl('9x²')} = (3x)² en ${or('16')} = (4)². Albei is volkome kwadrate en die uitdrukking is ʼn aftrekking — die patroon geld.`,
            `Deur a² − b² = (a − b)(a + b) toe te pas met a = 3x en b = 4, kry ons ${gr('(3x − 4)(3x + 4)')}.`,
            `Sipho is <strong>korrek</strong>. ✓`,
            `<strong>Verifieer deur uit te brei:</strong> (3x − 4)(3x + 4) = 9x² + 12x − 12x − 16 = 9x² − 16 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn verskil van twee kwadrate te herken en te faktoriseer deur die patroon a kwadraat minus b kwadraat is gelyk aan (a minus b)(a plus b) te gebruik',

      diagramPlaceholder:
        'Meetkundige diagram wat ʼn vierkant met sy a wys, met ʼn kleiner vierkant met sy b verwyder, herrangskik na ʼn reghoek met wydte (a + b) en hoogte (a − b), wat a² − b² = (a − b)(a + b) illustreer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 190" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<polygon points="20,20 85,20 85,55 120,55 120,120 20,120" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="10" y="74" font-size="13" font-weight="700" fill="#2563eb">a</text>` +
        `<text x="68" y="138" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">a</text>` +
        `<text x="102" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">b</text>` +
        `<text x="130" y="41" font-size="12" font-weight="700" fill="#ea580c">b</text>` +
        `<line x1="128" y1="70" x2="178" y2="70" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="184,70 176,65 176,75" fill="#0f1f3d"/>` +
        `<text x="156" y="58" text-anchor="middle" font-size="9" fill="#6b7280">herrangskik</text>` +
        `<rect x="192" y="42" width="125" height="58" rx="4" fill="rgba(22,163,74,0.15)" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="254" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(a + b)</text>` +
        `<text x="254" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(a − b)</text>` +
        `<text x="170" y="180" text-anchor="middle" font-size="14" font-weight="700">` +
        `<tspan fill="#2563eb">a²</tspan><tspan fill="#0f1f3d"> − </tspan><tspan fill="#ea580c">b²</tspan><tspan fill="#0f1f3d"> = </tspan><tspan fill="#16a34a">(a − b)(a + b)</tspan>` +
        `</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING TRINOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trinomials',
      title: 'Faktorisering van Trinome',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">Ons faktoriseer trinome van die vorm <strong>x² + bx + c</strong> deur twee getalle te vind wat vermenigvuldig om <strong>c</strong> te gee en optel om <strong>b</strong> te gee. Vir trinome van die vorm <strong>ax² + bx + c</strong> waar a ʼn gemeenskaplike faktor is, faktoriseer ons eers a uit, en faktoriseer dan die oorblywende trinoom.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gevonde getalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gefaktoriseerde hakies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemeenskaplike faktor')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Faktorisering van x² + bx + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind twee ${bl('getalle')} wat <strong>vermenigvuldig</strong> om c (die konstante term) te gee en <strong>optel</strong> om b (die koëffisiënt van x) te gee.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${gr('gefaktoriseerde vorm')}: (x + eerste getal)(x + tweede getal).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer</strong> deur jou antwoord uit te brei — dit moet gelyk wees aan die oorspronklike trinoom.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wanneer a ≠ 1 maar a ʼn gemeenskaplike faktor is</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;font-size:14px;">As elke term ʼn ${or('gemeenskaplike faktor')} a deel, <strong>faktoriseer dit eers uit</strong>: skryf ${or('a')}(x² + …). Faktoriseer dan die trinoom binne die hakies soos normaalweg.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenreëls vir die twee getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">As c positief is en b positief is → is albei getalle <strong>positief</strong>.<br>As c positief is en b negatief is → is albei getalle <strong>negatief</strong>.<br>As c negatief is → is een getal positief en een <strong>negatief</strong>; die groter absolute waarde het dieselfde teken as b.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer x² + 7x + 12.',
          answer: `${gr('(x + 3)(x + 4)')}`,
          steps: [
            `Vind twee ${bl('getalle')} wat vermenigvuldig na 12 en optel na 7.`,
            `Lys faktorpare van 12: 1 × 12, 2 × 6, ${bl('3 × 4')}. Kontroleer somme: 3 + 4 = ${bl('7')} ✓`,
            `Die twee getalle is ${bl('3')} en ${bl('4')}.`,
            `Skryf die gefaktoriseerde vorm: ${gr('(x + 3)(x + 4)')}.`,
            `<strong>Kontroleer:</strong> (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓`,
          ],
        },
        {
          question: 'Faktoriseer x² − 2x − 15.',
          answer: `${gr('(x − 5)(x + 3)')}`,
          steps: [
            `Vind twee ${bl('getalle')} wat vermenigvuldig na −15 en optel na −2.`,
            `Aangesien die produk negatief is, het die getalle teenoorgestelde tekens. Probeer ${bl('−5 en 3')}: (−5) × 3 = −15 ✓ en (−5) + 3 = ${bl('−2')} ✓`,
            `Die twee getalle is ${bl('−5')} en ${bl('3')}.`,
            `Skryf die gefaktoriseerde vorm: ${gr('(x − 5)(x + 3)')}.`,
            `<strong>Kontroleer:</strong> (x − 5)(x + 3) = x² + 3x − 5x − 15 = x² − 2x − 15 ✓`,
          ],
        },
        {
          question: 'Faktoriseer 2x² + 10x + 12.',
          answer: `${or('2')}${gr('(x + 2)(x + 3)')}`,
          steps: [
            `Al drie terme is deelbaar deur ${or('2')} — faktoriseer eers die ${or('gemeenskaplike faktor')} uit: ${or('2')}(x² + 5x + 6).`,
            `Faktoriseer nou die trinoom x² + 5x + 6: vind twee ${bl('getalle')} wat vermenigvuldig na 6 en optel na 5.`,
            `Probeer ${bl('2 en 3')}: 2 × 3 = 6 ✓ en 2 + 3 = ${bl('5')} ✓`,
            `Skryf die ${gr('gefaktoriseerde trinoom')}: ${gr('(x + 2)(x + 3)')}.`,
            `Finale antwoord: ${or('2')}${gr('(x + 2)(x + 3)')}.`,
            `<strong>Kontroleer:</strong> 2(x + 2)(x + 3) = 2(x² + 5x + 6) = 2x² + 10x + 12 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om trinome van die vorm x kwadraat plus bx plus c te faktoriseer deur twee getalle te vind wat vermenigvuldig na c en optel na b',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — HCF common factor ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer 8x² + 12x.',
      answer: '4x(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '4x(2x+3)',
      correctAnswers: ['4x(2x+3)', '4x(2x + 3)'],
      explanation: 'GGF van 8x² en 12x is 4x.\n8x² ÷ 4x = 2x en 12x ÷ 4x = 3.\nGefaktoriseer: 4x(2x + 3) ✓',
    },

    // ── Q2 Medium — three-term common factor ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 15x³ − 10x² + 5x.',
      answer: '5x(3x² − 2x + 1)',
      checkMode: 'auto',
      correctAnswer: '5x(3x²-2x+1)',
      correctAnswers: ['5x(3x²-2x+1)', '5x(3x² - 2x + 1)', '5x(3x²−2x+1)', '5x(3x² − 2x + 1)'],
      explanation: 'GGF van 15x³, 10x² en 5x is 5x.\n15x³ ÷ 5x = 3x², 10x² ÷ 5x = 2x, 5x ÷ 5x = 1.\nGefaktoriseer: 5x(3x² − 2x + 1) ✓',
    },

    // ── Q3 Hard — check a learner's common factor answer ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho faktoriseer 6x² − 9x en kry 3(2x − 3). Kontroleer sy antwoord.',
      answer: 'Hy het ʼn x gemis — die korrekte faktorisering is 3x(2x − 3), aangesien 3x die volledige gemeenskaplike faktor is, nie net 3 nie.',
      checkMode: 'self',
    },

    // ── Q4 Easy — difference of two squares ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer x² − 49.',
      answer: '(x − 7)(x + 7)',
      checkMode: 'auto',
      correctAnswer: '(x-7)(x+7)',
      correctAnswers: ['(x-7)(x+7)', '(x − 7)(x + 7)', '(x+7)(x-7)', '(x + 7)(x − 7)'],
      explanation: 'Herken x² − 49 = x² − 7².\nVerskil van kwadrate: a² − b² = (a − b)(a + b).\nGefaktoriseer: (x − 7)(x + 7) ✓',
    },

    // ── Q5 Medium — difference of two squares with coefficient ───────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 4x² − 9.',
      answer: '(2x − 3)(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '(2x-3)(2x+3)',
      correctAnswers: ['(2x-3)(2x+3)', '(2x − 3)(2x + 3)', '(2x+3)(2x-3)', '(2x + 3)(2x − 3)'],
      explanation: '4x² = (2x)² en 9 = (3)².\nVerskil van kwadrate: (2x − 3)(2x + 3) ✓',
    },

    // ── Q6 Hard — check a learner's difference of squares answer ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato faktoriseer 16x² − 25y² en kry (4x − 5y)(4x + 5y). Kontroleer haar antwoord.',
      answer: 'Sy is korrek — 16x² = (4x)² en 25y² = (5y)², so die verskil van kwadrate gee (4x − 5y)(4x + 5y).',
      checkMode: 'self',
    },

    // ── Q7 Easy — trinomial with positive terms ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer x² + 9x + 20.',
      answer: '(x + 4)(x + 5)',
      checkMode: 'auto',
      correctAnswer: '(x+4)(x+5)',
      correctAnswers: ['(x+4)(x+5)', '(x + 4)(x + 5)', '(x+5)(x+4)', '(x + 5)(x + 4)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na 20 en optel na 9: 4 en 5.\nGefaktoriseer: (x + 4)(x + 5) ✓',
    },

    // ── Q8 Medium — trinomial with negative constant ──────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer x² − 3x − 10.',
      answer: '(x − 5)(x + 2)',
      checkMode: 'auto',
      correctAnswer: '(x-5)(x+2)',
      correctAnswers: ['(x-5)(x+2)', '(x − 5)(x + 2)', '(x+2)(x-5)', '(x + 2)(x − 5)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na −10 en optel na −3: −5 en 2.\nGefaktoriseer: (x − 5)(x + 2) ✓',
    },

    // ── Q9 Hard — check a learner's trinomial answer ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo faktoriseer x² + x − 12 en kry (x + 4)(x − 3). Kontroleer sy antwoord.',
      answer: 'Hy is korrek — 4 en −3 vermenigvuldig na −12 en tel op na 1.',
      checkMode: 'self',
    },

    // ── Q10 Medium — trinomial with common factor ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 3x² + 15x + 18.',
      answer: '3(x + 2)(x + 3)',
      checkMode: 'auto',
      correctAnswer: '3(x+2)(x+3)',
      correctAnswers: ['3(x+2)(x+3)', '3(x + 2)(x + 3)', '3(x+3)(x+2)', '3(x + 3)(x + 2)'],
      explanation: 'Faktoriseer 3 uit: 3(x² + 5x + 6).\nVind twee getalle wat vermenigvuldig na 6 en optel na 5: 2 en 3.\nGefaktoriseer: 3(x + 2)(x + 3) ✓',
    },

    // ── Q11 Hard — full factorisation with common factor shown ────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 2x² − 8x − 10 volledig, en toon die gemeenskaplike-faktor-stap.',
      answer: 'Faktoriseer 2 uit: 2(x² − 4x − 5). Faktoriseer trinoom: 2(x − 5)(x + 1).',
      checkMode: 'self',
    },

    // ── Q12 Medium — difference of two squares (larger square) ───────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer x² − 64.',
      answer: '(x − 8)(x + 8)',
      checkMode: 'auto',
      correctAnswer: '(x-8)(x+8)',
      correctAnswers: ['(x-8)(x+8)', '(x − 8)(x + 8)', '(x+8)(x-8)', '(x + 8)(x − 8)'],
      explanation: 'Herken x² − 64 = x² − 8².\nVerskil van kwadrate: (x − 8)(x + 8) ✓',
    },

    // ── Q13 Hard — addition cannot use difference of squares ──────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê x² + 16 kan met die verskil van twee kwadrate gefaktoriseer word. Is sy korrek? Verduidelik.',
      answer: 'Nee — die verskil van twee kwadrate vereis aftrekking (a² − b²), maar x² + 16 is ʼn optelling, so dit kan nie op hierdie manier gefaktoriseer word nie.',
      checkMode: 'self',
    },

    // ── Q14 Hard — combined common factor and difference of squares ───────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 5x² − 20 volledig, en identifiseer beide die gemeenskaplike faktor en die verskil-van-kwadrate-patroon wat gebruik is.',
      answer: 'Faktoriseer 5 uit: 5(x² − 4). Herken verskil van kwadrate: 5(x − 2)(x + 2).',
      checkMode: 'self',
    },

    // ── Q15 Hard — factorise and verify by expanding ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer x² − 5x − 24 en verifieer jou antwoord deur dit weer uit te brei.',
      answer: 'Vind getalle wat vermenigvuldig na −24 en optel na −5: −8 en 3. Gefaktoriseer: (x − 8)(x + 3). Verifieer deur uit te brei: x² + 3x − 8x − 24 = x² − 5x − 24 ✓',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het faktorisering van algebraïese uitdrukkings bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van faktorisering. Gaan enige gemiste vrae weer deur en mik vir volpunte.' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-1):   Gemeenskaplike faktor — twee-term monoom GGF
    // Blok 2 (2-3):   Gemeenskaplike faktor — drie-term (ingesluit kubies)
    // Blok 3 (4-6):   Verskil van twee kwadrate — basies (x² − n²)
    // Blok 4 (7-9):   Verskil van twee kwadrate — met koëffisiënte
    // Blok 5 (10-12): Trinoom x² + bx + c — positiewe/eenvoudige konstante
    // Blok 6 (13-15): Trinoom x² + bx + c — negatiewe konstante
    // Blok 7 (16-19): Trinoom met gemeenskaplike faktor + foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Gemeenskaplike faktor, twee-term (Easy)
        { difficulty: 'Easy', question: 'Faktoriseer 10x² + 15x.', checkMode: 'auto', options: ['5x(2x+3)', '5(2x²+3x)', 'x(10x+15)', '5x(2x-3)'], correctIndex: 0, explanation: 'GGF van 10x² en 15x is 5x. 10x²÷5x=2x en 15x÷5x=3. Gefaktoriseer: 5x(2x+3) ✓ (Die ander opsies faktoriseer slegs deel van die GGF uit, of kry ʼn teken verkeerd.)' },
        { difficulty: 'Easy', question: 'Faktoriseer 6x³ − 18x².', checkMode: 'auto', options: ['6(x³-3x²)', '6x²(x-3)', 'x²(6x-18)', '6x²(x+3)'], correctIndex: 1, explanation: 'GGF van 6x³ en 18x² is 6x². 6x³÷6x²=x en 18x²÷6x²=3. Gefaktoriseer: 6x²(x-3) ✓' },

        // Blok 2 — Gemeenskaplike faktor, drie-term / kubies (Easy-Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 4x³ + 8x² − 12x.', checkMode: 'auto', options: ['4(x³+2x²-3x)', 'x(4x²+8x-12)', '4x(x²+2x-3)', '4x(x²+2x+3)'], correctIndex: 2, explanation: 'GGF van 4x³, 8x² en 12x is 4x. 4x³÷4x=x², 8x²÷4x=2x, 12x÷4x=3. Gefaktoriseer: 4x(x²+2x-3) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 9a²b + 6ab².', checkMode: 'auto', options: ['3(3a²b+2ab²)', 'ab(9a+6b)', '3ab(3a-2b)', '3ab(3a+2b)'], correctIndex: 3, explanation: 'GGF van 9a²b en 6ab² is 3ab. 9a²b÷3ab=3a en 6ab²÷3ab=2b. Gefaktoriseer: 3ab(3a+2b) ✓' },

        // Blok 3 — Verskil van twee kwadrate, basies (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² − 81.', checkMode: 'auto', options: ['(x-9)(x+9)', '(x-9)²', '(x+9)²', '(x-81)(x+81)'], correctIndex: 0, explanation: 'Herken x²-81 = x²-9². Verskil van kwadrate: (x-9)(x+9) ✓ (Om een hakie te kwadreer, of te vergeet om die vierkantswortel van 81 te trek, gee die verkeerde antwoorde.)' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 121.', checkMode: 'auto', options: ['(x-11)²', '(x-11)(x+11)', '(x+11)²', '(x-121)(x+121)'], correctIndex: 1, explanation: 'Herken x²-121 = x²-11². Verskil van kwadrate: (x-11)(x+11) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 16x² − 1.', checkMode: 'auto', options: ['(4x-1)²', '(16x-1)(16x+1)', '(4x-1)(4x+1)', '(4x+1)²'], correctIndex: 2, explanation: '16x² = (4x)² en 1 = (1)². Verskil van kwadrate: (4x-1)(4x+1) ✓ (Om 16 te gebruik in plaas van sy vierkantswortel 4 gee die verkeerde faktor.)' },

        // Blok 4 — Verskil van twee kwadrate, met koëffisiënte (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer 9x² − 25.', checkMode: 'auto', options: ['(3x-5)²', '(9x-5)(9x+5)', '(3x-25)(3x+25)', '(3x-5)(3x+5)'], correctIndex: 3, explanation: '9x² = (3x)² en 25 = (5)². Verskil van kwadrate: (3x-5)(3x+5) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 25x² − 4y².', checkMode: 'auto', options: ['(5x-2y)(5x+2y)', '(5x-2y)²', '(25x-2y)(25x+2y)', '(5x-4y)(5x+4y)'], correctIndex: 0, explanation: '25x² = (5x)² en 4y² = (2y)². Verskil van kwadrate: (5x-2y)(5x+2y) ✓' },
        { difficulty: 'Hard', question: 'Lindiwe faktoriseer 36x² − 49 en kry (6x − 7)(6x + 7). Watter stelling evalueer haar antwoord korrek?', checkMode: 'auto', options: ['Sy is verkeerd — die korrekte faktorisering is (6x-7)².', 'Sy is korrek — 36x² = (6x)² en 49 = (7)², so die verskil van kwadrate gee (6x-7)(6x+7).', 'Sy is verkeerd — die korrekte faktorisering is (36x-49)(x+1).', 'Sy is korrek, maar net per toeval — die patroon geld nie oor die algemeen vir uitdrukkings soos hierdie nie.'], correctIndex: 1, explanation: '36x² = (6x)² en 49 = (7)² — albei volkome kwadrate, en die uitdrukking is ʼn aftrekking, so die verskil-van-kwadrate-patroon geld oor die algemeen, nie per toeval nie: (6x-7)(6x+7) ✓' },

        // Blok 5 — Trinoom x² + bx + c, positiewe/eenvoudige konstante (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² + 10x + 24.', checkMode: 'auto', options: ['(x-4)(x-6)', '(x+4)(x-6)', '(x+4)(x+6)', '(x+2)(x+12)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na 24 en optel na 10: 4 en 6. Gefaktoriseer: (x+4)(x+6) ✓ (2 en 12 vermenigvuldig ook na 24, maar tel op na 14, nie 10 nie.)' },
        { difficulty: 'Medium', question: 'Faktoriseer x² + 11x + 18.', checkMode: 'auto', options: ['(x-2)(x-9)', '(x+2)(x-9)', '(x+3)(x+6)', '(x+2)(x+9)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na 18 en optel na 11: 2 en 9. Gefaktoriseer: (x+2)(x+9) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 7x + 12.', checkMode: 'auto', options: ['(x-3)(x-4)', '(x+3)(x+4)', '(x-3)(x+4)', '(x-2)(x-6)'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig na 12 en optel na -7: -3 en -4. Gefaktoriseer: (x-3)(x-4) ✓' },

        // Blok 6 — Trinoom x² + bx + c, negatiewe konstante (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² − 4x − 21.', checkMode: 'auto', options: ['(x+7)(x-3)', '(x-7)(x+3)', '(x-7)(x-3)', '(x+1)(x-21)'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig na -21 en optel na -4: -7 en 3. Gefaktoriseer: (x-7)(x+3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² + 2x − 24.', checkMode: 'auto', options: ['(x-6)(x+4)', '(x+6)(x+4)', '(x+6)(x-4)', '(x+2)(x-12)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na -24 en optel na 2: 6 en -4. Gefaktoriseer: (x+6)(x-4) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer x² − x − 30.', checkMode: 'auto', options: ['(x+6)(x-5)', '(x-6)(x-5)', '(x+2)(x-15)', '(x-6)(x+5)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na -30 en optel na -1: -6 en 5. Gefaktoriseer: (x-6)(x+5) ✓' },

        // Blok 7 — Trinoom met gemeenskaplike faktor + foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Faktoriseer 2x² + 14x + 24 volledig.', checkMode: 'auto', options: ['2(x+3)(x+4)', '(x+3)(x+4)', '2(x+3)(x-4)', '2(x+2)(x+6)'], correctIndex: 0, explanation: 'Faktoriseer 2 uit: 2(x²+7x+12). Vind twee getalle wat vermenigvuldig na 12 en optel na 7: 3 en 4. Gefaktoriseer: 2(x+3)(x+4) ✓ (Om die gemeenskaplike faktor 2 te vergeet, of ʼn teken verkeerd te kry, gee die verkeerde antwoorde.)' },
        { difficulty: 'Hard', question: 'Faktoriseer 3x² − 3x − 18 volledig.', checkMode: 'auto', options: ['(x-3)(x+2)', '3(x-3)(x+2)', '3(x-3)(x-2)', '3(x+1)(x-6)'], correctIndex: 1, explanation: 'Faktoriseer 3 uit: 3(x²-x-6). Vind twee getalle wat vermenigvuldig na -6 en optel na -1: -3 en 2. Gefaktoriseer: 3(x-3)(x+2) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 4x² − 16 volledig.', checkMode: 'auto', options: ['4(x²-4)', '(x-2)(x+2)', '4(x-2)(x+2)', '4(x+2)(x+2)'], correctIndex: 2, explanation: 'Faktoriseer die gemeenskaplike faktor 4 uit: 4(x²-4). Herken x²-4 as ʼn verskil van kwadrate: 4(x-2)(x+2) ✓ (Om te stop na die gemeenskaplike-faktor-stap, of om die 4 heeltemal weg te laat, laat die faktorisering onvolledig of verkeerd.)' },
        { difficulty: 'Hard', question: 'Karabo faktoriseer x² − 5x − 14 en kry (x − 2)(x + 7). Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Hy is korrek — (-2)(7) = -14 en -2 + 7 = -5, so die faktorisering is geldig.', 'Hy is verkeerd — die korrekte faktorisering is (x-14)(x+1).', 'Hy is korrek, maar die faktore moet in die teenoorgestelde volgorde geskryf word: (x+7)(x-2).', 'Hy is verkeerd — die korrekte faktorisering is (x-7)(x+2), aangesien (-7)(2) = -14 en -7 + 2 = -5.'], correctIndex: 3, explanation: 'Alhoewel (-2)(7) = -14 ✓, is die som -2 + 7 = 5, nie -5 nie. Die korrekte paar is -7 en 2: (-7)(2) = -14 en -7+2 = -5. Die korrekte faktorisering is dus (x-7)(x+2).' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het faktorisering van gemeenskaplike faktore, verskille van kwadrate en trinome bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor trinome of verskil van kwadrate weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die GGF en faktorisering van trinome weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Gemeenskaplike faktor, twee-term (Easy)
        { difficulty: 'Easy', question: 'Faktoriseer 14x² + 21x.', checkMode: 'auto', options: ['7x(2x+3)', '7(2x²+3x)', 'x(14x+21)', '7x(2x-3)'], correctIndex: 0, explanation: 'GGF van 14x² en 21x is 7x. 14x²÷7x=2x en 21x÷7x=3. Gefaktoriseer: 7x(2x+3) ✓' },
        { difficulty: 'Easy', question: 'Faktoriseer 8x³ − 20x².', checkMode: 'auto', options: ['4(2x³-5x²)', '4x²(2x-5)', 'x²(8x-20)', '4x²(2x+5)'], correctIndex: 1, explanation: 'GGF van 8x³ en 20x² is 4x². 8x³÷4x²=2x en 20x²÷4x²=5. Gefaktoriseer: 4x²(2x-5) ✓' },

        // Blok 2 — Gemeenskaplike faktor, drie-term / kubies (Easy-Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 6x³ + 9x² − 15x.', checkMode: 'auto', options: ['3(2x³+3x²-5x)', 'x(6x²+9x-15)', '3x(2x²+3x-5)', '3x(2x²+3x+5)'], correctIndex: 2, explanation: 'GGF van 6x³, 9x² en 15x is 3x. 6x³÷3x=2x², 9x²÷3x=3x, 15x÷3x=5. Gefaktoriseer: 3x(2x²+3x-5) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 12a²b + 8ab².', checkMode: 'auto', options: ['4(3a²b+2ab²)', 'ab(12a+8b)', '4ab(3a-2b)', '4ab(3a+2b)'], correctIndex: 3, explanation: 'GGF van 12a²b en 8ab² is 4ab. 12a²b÷4ab=3a en 8ab²÷4ab=2b. Gefaktoriseer: 4ab(3a+2b) ✓' },

        // Blok 3 — Verskil van twee kwadrate, basies (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² − 36.', checkMode: 'auto', options: ['(x-6)(x+6)', '(x-6)²', '(x+6)²', '(x-36)(x+36)'], correctIndex: 0, explanation: 'Herken x²-36 = x²-6². Verskil van kwadrate: (x-6)(x+6) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 100.', checkMode: 'auto', options: ['(x-10)²', '(x-10)(x+10)', '(x+10)²', '(x-100)(x+100)'], correctIndex: 1, explanation: 'Herken x²-100 = x²-10². Verskil van kwadrate: (x-10)(x+10) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 9x² − 1.', checkMode: 'auto', options: ['(3x-1)²', '(9x-1)(9x+1)', '(3x-1)(3x+1)', '(3x+1)²'], correctIndex: 2, explanation: '9x² = (3x)² en 1 = (1)². Verskil van kwadrate: (3x-1)(3x+1) ✓' },

        // Blok 4 — Verskil van twee kwadrate, met koëffisiënte (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer 16x² − 49.', checkMode: 'auto', options: ['(4x-7)²', '(16x-7)(16x+7)', '(4x-49)(4x+49)', '(4x-7)(4x+7)'], correctIndex: 3, explanation: '16x² = (4x)² en 49 = (7)². Verskil van kwadrate: (4x-7)(4x+7) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 4x² − 9y².', checkMode: 'auto', options: ['(2x-3y)(2x+3y)', '(2x-3y)²', '(4x-3y)(4x+3y)', '(2x-9y)(2x+9y)'], correctIndex: 0, explanation: '4x² = (2x)² en 9y² = (3y)². Verskil van kwadrate: (2x-3y)(2x+3y) ✓' },
        { difficulty: 'Hard', question: 'Thandi faktoriseer 64x² − 81 en kry (8x − 9)(8x + 9). Watter stelling evalueer haar antwoord korrek?', checkMode: 'auto', options: ['Sy is verkeerd — die korrekte faktorisering is (8x-9)².', 'Sy is korrek — 64x² = (8x)² en 81 = (9)², so die verskil van kwadrate gee (8x-9)(8x+9).', 'Sy is verkeerd — die korrekte faktorisering is (64x-81)(x+1).', 'Sy is korrek, maar net per toeval — die patroon geld nie oor die algemeen vir uitdrukkings soos hierdie nie.'], correctIndex: 1, explanation: '64x² = (8x)² en 81 = (9)² — albei volkome kwadrate, en die uitdrukking is ʼn aftrekking, so die verskil-van-kwadrate-patroon geld: (8x-9)(8x+9) ✓' },

        // Blok 5 — Trinoom x² + bx + c, positiewe/eenvoudige konstante (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² + 9x + 14.', checkMode: 'auto', options: ['(x-2)(x-7)', '(x+2)(x-7)', '(x+2)(x+7)', '(x+1)(x+14)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na 14 en optel na 9: 2 en 7. Gefaktoriseer: (x+2)(x+7) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² + 13x + 40.', checkMode: 'auto', options: ['(x-5)(x-8)', '(x+5)(x-8)', '(x+4)(x+10)', '(x+5)(x+8)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na 40 en optel na 13: 5 en 8. Gefaktoriseer: (x+5)(x+8) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 9x + 20.', checkMode: 'auto', options: ['(x-4)(x-5)', '(x+4)(x+5)', '(x-4)(x+5)', '(x-2)(x-10)'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig na 20 en optel na -9: -4 en -5. Gefaktoriseer: (x-4)(x-5) ✓' },

        // Blok 6 — Trinoom x² + bx + c, negatiewe konstante (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² − 3x − 40.', checkMode: 'auto', options: ['(x+8)(x-5)', '(x-8)(x+5)', '(x-8)(x-5)', '(x+4)(x-10)'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig na -40 en optel na -3: -8 en 5. Gefaktoriseer: (x-8)(x+5) ✓' },
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² + 4x − 21.', checkMode: 'auto', options: ['(x-7)(x+3)', '(x+7)(x+3)', '(x+7)(x-3)', '(x+1)(x-21)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na -21 en optel na 4: 7 en -3. Gefaktoriseer: (x+7)(x-3) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer x² − 2x − 35.', checkMode: 'auto', options: ['(x+7)(x-5)', '(x-7)(x-5)', '(x+1)(x-35)', '(x-7)(x+5)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na -35 en optel na -2: -7 en 5. Gefaktoriseer: (x-7)(x+5) ✓' },

        // Blok 7 — Trinoom met gemeenskaplike faktor + foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Faktoriseer 3x² + 21x + 30 volledig.', checkMode: 'auto', options: ['3(x+2)(x+5)', '(x+2)(x+5)', '3(x+2)(x-5)', '3(x+1)(x+10)'], correctIndex: 0, explanation: 'Faktoriseer 3 uit: 3(x²+7x+10). Vind twee getalle wat vermenigvuldig na 10 en optel na 7: 2 en 5. Gefaktoriseer: 3(x+2)(x+5) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 2x² − 2x − 24 volledig.', checkMode: 'auto', options: ['(x-4)(x+3)', '2(x-4)(x+3)', '2(x+4)(x+3)', '2(x+2)(x-6)'], correctIndex: 1, explanation: 'Faktoriseer 2 uit: 2(x²-x-12). Vind twee getalle wat vermenigvuldig na -12 en optel na -1: -4 en 3. Gefaktoriseer: 2(x-4)(x+3) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 5x² − 45 volledig.', checkMode: 'auto', options: ['5(x²-9)', '(x-3)(x+3)', '5(x-3)(x+3)', '5(x+3)(x+3)'], correctIndex: 2, explanation: 'Faktoriseer die gemeenskaplike faktor 5 uit: 5(x²-9). Herken x²-9 as ʼn verskil van kwadrate: 5(x-3)(x+3) ✓' },
        { difficulty: 'Hard', question: 'Naledi faktoriseer x² − 6x − 16 en kry (x − 2)(x + 8). Watter stelling evalueer haar antwoord korrek?', checkMode: 'auto', options: ['Sy is korrek — (-2)(8) = -16 en -2 + 8 = -6, so die faktorisering is geldig.', 'Sy is verkeerd — die korrekte faktorisering is (x-16)(x+1).', 'Sy is korrek, maar die faktore moet in die teenoorgestelde volgorde geskryf word: (x+8)(x-2).', 'Sy is verkeerd — die korrekte faktorisering is (x-8)(x+2), aangesien (-8)(2) = -16 en -8 + 2 = -6.'], correctIndex: 3, explanation: 'Alhoewel (-2)(8) = -16 ✓, is die som -2 + 8 = 6, nie -6 nie. Die korrekte paar is -8 en 2: (-8)(2) = -16 en -8+2 = -6. Die korrekte faktorisering is dus (x-8)(x+2).' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het faktorisering van gemeenskaplike faktore, verskille van kwadrate en trinome bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor trinome of verskil van kwadrate weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die GGF en faktorisering van trinome weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Gemeenskaplike faktor, twee-term (Easy)
        { difficulty: 'Easy', question: 'Faktoriseer 12x² + 18x.', checkMode: 'auto', options: ['6x(2x+3)', '6(2x²+3x)', 'x(12x+18)', '6x(2x-3)'], correctIndex: 0, explanation: 'GGF van 12x² en 18x is 6x. 12x²÷6x=2x en 18x÷6x=3. Gefaktoriseer: 6x(2x+3) ✓' },
        { difficulty: 'Easy', question: 'Faktoriseer 10x³ − 15x².', checkMode: 'auto', options: ['5(2x³-3x²)', '5x²(2x-3)', 'x²(10x-15)', '5x²(2x+3)'], correctIndex: 1, explanation: 'GGF van 10x³ en 15x² is 5x². 10x³÷5x²=2x en 15x²÷5x²=3. Gefaktoriseer: 5x²(2x-3) ✓' },

        // Blok 2 — Gemeenskaplike faktor, drie-term / kubies (Easy-Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 8x³ + 12x² − 20x.', checkMode: 'auto', options: ['4(2x³+3x²-5x)', 'x(8x²+12x-20)', '4x(2x²+3x-5)', '4x(2x²+3x+5)'], correctIndex: 2, explanation: 'GGF van 8x³, 12x² en 20x is 4x. 8x³÷4x=2x², 12x²÷4x=3x, 20x÷4x=5. Gefaktoriseer: 4x(2x²+3x-5) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 15a²b + 10ab².', checkMode: 'auto', options: ['5(3a²b+2ab²)', 'ab(15a+10b)', '5ab(3a-2b)', '5ab(3a+2b)'], correctIndex: 3, explanation: 'GGF van 15a²b en 10ab² is 5ab. 15a²b÷5ab=3a en 10ab²÷5ab=2b. Gefaktoriseer: 5ab(3a+2b) ✓' },

        // Blok 3 — Verskil van twee kwadrate, basies (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² − 16.', checkMode: 'auto', options: ['(x-4)(x+4)', '(x-4)²', '(x+4)²', '(x-16)(x+16)'], correctIndex: 0, explanation: 'Herken x²-16 = x²-4². Verskil van kwadrate: (x-4)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 144.', checkMode: 'auto', options: ['(x-12)²', '(x-12)(x+12)', '(x+12)²', '(x-144)(x+144)'], correctIndex: 1, explanation: 'Herken x²-144 = x²-12². Verskil van kwadrate: (x-12)(x+12) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer 25x² − 1.', checkMode: 'auto', options: ['(5x-1)²', '(25x-1)(25x+1)', '(5x-1)(5x+1)', '(5x+1)²'], correctIndex: 2, explanation: '25x² = (5x)² en 1 = (1)². Verskil van kwadrate: (5x-1)(5x+1) ✓' },

        // Blok 4 — Verskil van twee kwadrate, met koëffisiënte (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer 49x² − 9.', checkMode: 'auto', options: ['(7x-3)²', '(49x-3)(49x+3)', '(7x-9)(7x+9)', '(7x-3)(7x+3)'], correctIndex: 3, explanation: '49x² = (7x)² en 9 = (3)². Verskil van kwadrate: (7x-3)(7x+3) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 9x² − 16y².', checkMode: 'auto', options: ['(3x-4y)(3x+4y)', '(3x-4y)²', '(9x-4y)(9x+4y)', '(3x-16y)(3x+16y)'], correctIndex: 0, explanation: '9x² = (3x)² en 16y² = (4y)². Verskil van kwadrate: (3x-4y)(3x+4y) ✓' },
        { difficulty: 'Hard', question: 'Mpho faktoriseer 100x² − 121 en kry (10x − 11)(10x + 11). Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Hy is verkeerd — die korrekte faktorisering is (10x-11)².', 'Hy is korrek — 100x² = (10x)² en 121 = (11)², so die verskil van kwadrate gee (10x-11)(10x+11).', 'Hy is verkeerd — die korrekte faktorisering is (100x-121)(x+1).', 'Hy is korrek, maar net per toeval — die patroon geld nie oor die algemeen vir uitdrukkings soos hierdie nie.'], correctIndex: 1, explanation: '100x² = (10x)² en 121 = (11)² — albei volkome kwadrate, en die uitdrukking is ʼn aftrekking, so die verskil-van-kwadrate-patroon geld: (10x-11)(10x+11) ✓' },

        // Blok 5 — Trinoom x² + bx + c, positiewe/eenvoudige konstante (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer x² + 8x + 15.', checkMode: 'auto', options: ['(x-3)(x-5)', '(x+3)(x-5)', '(x+3)(x+5)', '(x+1)(x+15)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na 15 en optel na 8: 3 en 5. Gefaktoriseer: (x+3)(x+5) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² + 12x + 35.', checkMode: 'auto', options: ['(x-5)(x-7)', '(x+5)(x-7)', '(x+1)(x+35)', '(x+5)(x+7)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na 35 en optel na 12: 5 en 7. Gefaktoriseer: (x+5)(x+7) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 8x + 15.', checkMode: 'auto', options: ['(x-3)(x-5)', '(x+3)(x+5)', '(x-3)(x+5)', '(x-1)(x-15)'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig na 15 en optel na -8: -3 en -5. Gefaktoriseer: (x-3)(x-5) ✓' },

        // Blok 6 — Trinoom x² + bx + c, negatiewe konstante (Medium/Hard)
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² − 4x − 32.', checkMode: 'auto', options: ['(x+8)(x-4)', '(x-8)(x+4)', '(x-8)(x-4)', '(x+2)(x-16)'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig na -32 en optel na -4: -8 en 4. Gefaktoriseer: (x-8)(x+4) ✓' },
        { difficulty: 'Medium-Hard', question: 'Faktoriseer x² + 3x − 28.', checkMode: 'auto', options: ['(x-7)(x+4)', '(x+7)(x+4)', '(x+7)(x-4)', '(x+2)(x-14)'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig na -28 en optel na 3: 7 en -4. Gefaktoriseer: (x+7)(x-4) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer x² − 3x − 18.', checkMode: 'auto', options: ['(x+6)(x-3)', '(x-6)(x-3)', '(x+2)(x-9)', '(x-6)(x+3)'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig na -18 en optel na -3: -6 en 3. Gefaktoriseer: (x-6)(x+3) ✓' },

        // Blok 7 — Trinoom met gemeenskaplike faktor + foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Faktoriseer 4x² + 20x + 24 volledig.', checkMode: 'auto', options: ['4(x+2)(x+3)', '(x+2)(x+3)', '4(x+2)(x-3)', '4(x+1)(x+6)'], correctIndex: 0, explanation: 'Faktoriseer 4 uit: 4(x²+5x+6). Vind twee getalle wat vermenigvuldig na 6 en optel na 5: 2 en 3. Gefaktoriseer: 4(x+2)(x+3) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 3x² − 6x − 45 volledig.', checkMode: 'auto', options: ['(x-5)(x+3)', '3(x-5)(x+3)', '3(x+5)(x+3)', '3(x+1)(x-15)'], correctIndex: 1, explanation: 'Faktoriseer 3 uit: 3(x²-2x-15). Vind twee getalle wat vermenigvuldig na -15 en optel na -2: -5 en 3. Gefaktoriseer: 3(x-5)(x+3) ✓' },
        { difficulty: 'Hard', question: 'Faktoriseer 6x² − 24 volledig.', checkMode: 'auto', options: ['6(x²-4)', '(x-2)(x+2)', '6(x-2)(x+2)', '6(x+2)(x+2)'], correctIndex: 2, explanation: 'Faktoriseer die gemeenskaplike faktor 6 uit: 6(x²-4). Herken x²-4 as ʼn verskil van kwadrate: 6(x-2)(x+2) ✓' },
        { difficulty: 'Hard', question: 'Thabo faktoriseer x² − 7x − 18 en kry (x − 2)(x + 9). Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Hy is korrek — (-2)(9) = -18 en -2 + 9 = -7, so die faktorisering is geldig.', 'Hy is verkeerd — die korrekte faktorisering is (x-18)(x+1).', 'Hy is korrek, maar die faktore moet in die teenoorgestelde volgorde geskryf word: (x+9)(x-2).', 'Hy is verkeerd — die korrekte faktorisering is (x-9)(x+2), aangesien (-9)(2) = -18 en -9 + 2 = -7.'], correctIndex: 3, explanation: 'Alhoewel (-2)(9) = -18 ✓, is die som -2 + 9 = 7, nie -7 nie. Die korrekte paar is -9 en 2: (-9)(2) = -18 en -9+2 = -7. Die korrekte faktorisering is dus (x-9)(x+2).' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het faktorisering van gemeenskaplike faktore, verskille van kwadrate en trinome bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor trinome of verskil van kwadrate weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die GGF en faktorisering van trinome weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
