import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ─────────────────────────────────────────
// base            → blue    (#2563eb)
// exponent        → orange  (#ea580c)
// simplified      → green   (#16a34a)
// negative sign   → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eksponente',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WETTE VAN EKSPONENTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'laws-of-exponents',
      title: 'Wette van Eksponente',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">Ons stel die algemene <strong>wette van eksponente</strong> vir natuurlike getal-eksponente op. Hierdie wette laat ons toe om uitdrukkings met magte te vereenvoudig deur direk met die ${or('eksponente')} te werk, in plaas daarvan om groot getalle te bereken.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde antwoord')}</span>` +
        `</div>` +

        // ── Five laws ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vyf wette</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Produkwet</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('m')}</sup> × ${bl('a')}<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m+n')}</sup> &nbsp;— tel die ${or('eksponente')} bymekaar wanneer jy magte met dieselfde ${bl('grondgetal')} vermenigvuldig.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Kwosiëntwet</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('m')}</sup> ÷ ${bl('a')}<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m−n')}</sup> &nbsp;— trek die ${or('eksponente')} van mekaar af wanneer jy soortgelyke grondgetalle deel (m &gt; n).</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Mag van ʼn Mag</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">(${bl('a')}<sup>${or('m')}</sup>)<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('m×n')}</sup> &nbsp;— vermenigvuldig die ${or('eksponente')} wanneer ʼn mag tot ʼn ander mag verhef word.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Mag van ʼn Produk</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">(${bl('a')} × ${bl('t')})<sup>${or('n')}</sup> = ${gr('a')}<sup>${gr('n')}</sup> × ${gr('t')}<sup>${gr('n')}</sup> &nbsp;— versprei die ${or('eksponent')} oor elke faktor.</p></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<div><p style="margin:0;font-size:14px;font-weight:700;color:#1e40af;">Nul-eksponent</p>` +
        `<p style="margin:4px 0 0 0;font-size:14px;">${bl('a')}<sup>${or('0')}</sup> = ${gr('1')} &nbsp;— enige nie-nul getal tot die mag ${or('0')} is gelyk aan ${gr('1')}.</p></div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Die grondgetal moet dieselfde wees</p>` +
        `<p style="margin:0;color:#7c2d12;">Die produk- en kwosiëntwette geld slegs wanneer die ${bl('grondgetalle')} identies is. Jy kan nie ${or('eksponente')} bymekaartel of van mekaar aftrek wanneer die grondgetalle verskil nie — bv. 2³ × 3² kan nie met hierdie wette vereenvoudig word nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig 3⁴ × 3².',
          answer: `${bl('3')}<sup>${or('4')}</sup> × ${bl('3')}<sup>${or('2')}</sup> = ${bl('3')}<sup>${or('6')}</sup> = ${gr('729')}`,
          steps: [
            `Albei terme het dieselfde ${bl('grondgetal')}: ${bl('3')}. Pas die <strong>produkwet</strong> toe — tel die ${or('eksponente')} bymekaar.`,
            `${bl('3')}<sup>${or('4')}</sup> × ${bl('3')}<sup>${or('2')}</sup> = ${bl('3')}<sup>${or('4+2')}</sup> = ${bl('3')}<sup>${or('6')}</sup>`,
            `Bereken: ${bl('3')}<sup>${or('6')}</sup> = 3 × 3 × 3 × 3 × 3 × 3 = ${gr('729')}`,
          ],
        },
        {
          question: 'Vereenvoudig (5³)².',
          answer: `(${bl('5')}<sup>${or('3')}</sup>)<sup>${or('2')}</sup> = ${bl('5')}<sup>${or('6')}</sup> = ${gr('15 625')}`,
          steps: [
            `Pas die <strong>mag-van-ʼn-mag-wet</strong> toe — vermenigvuldig die ${or('eksponente')}.`,
            `(${bl('5')}<sup>${or('3')}</sup>)<sup>${or('2')}</sup> = ${bl('5')}<sup>${or('3×2')}</sup> = ${bl('5')}<sup>${or('6')}</sup>`,
            `Bereken: ${bl('5')}<sup>${or('6')}</sup> = 5 × 5 × 5 × 5 × 5 × 5 = ${gr('15 625')}`,
          ],
        },
        {
          question: 'Vereenvoudig 8⁰.',
          answer: `${bl('8')}<sup>${or('0')}</sup> = ${gr('1')}`,
          steps: [
            `Pas die <strong>nul-eksponentwet</strong> toe: enige nie-nul getal tot die mag ${or('0')} is gelyk aan ${gr('1')}.`,
            `${bl('8')}<sup>${or('0')}</sup> = ${gr('1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig 2³ × 2⁴.',
          answer: '128',
          checkMode: 'auto',
          correctAnswer: '128',
          explanation: 'Dieselfde grondgetal (2) — pas die produkwet toe: tel die eksponente bymekaar.\n2^(3+4) = 2⁷ = 128 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 5⁶ ÷ 5²',
              correctAnswer: '625',
              explanation: 'Kwosiëntwet — trek die eksponente van mekaar af.\n5^(6−2) = 5⁴ = 625 ✓',
            },
            {
              label: 'b) (2⁴)³',
              correctAnswer: '4096',
              explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente.\n2^(4×3) = 2¹² = 4 096 ✓',
            },
            {
              label: 'c) (3 × 4)²',
              correctAnswer: '144',
              explanation: 'Mag van ʼn produk — versprei die eksponent.\n3² × 4² = 9 × 16 = 144 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig en evalueer: (2³ × 2⁴) ÷ 2⁵.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Stap 1: Pas die produkwet in die teller toe: 2^(3+4) = 2⁷.\nStap 2: Pas die kwosiëntwet toe: 2^(7−5) = 2² = 4 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat al vyf wette van eksponente verduidelik met kleurgekodeerde grondgetal- en eksponentvoorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Verwysingskaart wat al vyf wette van eksponente wys met grondgetal in blou, eksponent in oranje en vereenvoudigde antwoord in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — WETENSKAPLIKE NOTASIE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scientific-notation',
      title: 'Wetenskaplike Notasie',
      icon: '×10ⁿ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Wetenskaplike notasie</strong> druk baie groot of baie klein getalle uit as ʼn getal tussen 1 en 10 vermenigvuldig met ʼn mag van 10. In Graad 8 werk ons slegs met positiewe ${or('eksponente')}. Om om te skakel, skuif die desimale punt totdat presies een nie-nul syfer daarvoor oorbly, en tel dan hoeveel plekke dit geskuif het — daardie telling is die ${or('eksponent')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale skuif')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mag van 10')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vorm')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om na wetenskaplike notasie om te skakel</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skuif die desimale punt')} na links totdat slegs een nie-nul syfer daarvoor oorbly.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Tel die aantal plekke wat geskuif is — dit word die ${or('eksponent')} in ${or('10')}<sup>${or('n')}</sup>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${gr('finale vorm')}: (syfer tussen 1 en 10) × ${or('10')}<sup>${or('n')}</sup>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom wetenskaplike notasie?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om 3 200 000 as ${gr('3.2 × 10⁶')} te skryf is kompak en maklik om te vergelyk. Wetenskaplikes gebruik dit vir afstande, massas en hoeveelhede wat baie groottordes strek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf 45 000 in wetenskaplike notasie.',
          answer: `${gr('4.5 × 10')}<sup>${or('4')}</sup>`,
          steps: [
            `${bl('Skuif die desimale punt')} 4 plekke na links totdat een nie-nul syfer daarvoor oorbly: 45 000 → ${bl('4.5')}`,
            `Die desimaal het ${or('4')} plekke geskuif, dus is die ${or('mag van 10')} ${or('10')}<sup>${or('4')}</sup>.`,
            `Skryf die ${gr('finale vorm')}: ${gr('4.5 × 10')}<sup>${or('4')}</sup>`,
          ],
        },
        {
          question: 'Skryf 3 200 000 in wetenskaplike notasie.',
          answer: `${gr('3.2 × 10')}<sup>${or('6')}</sup>`,
          steps: [
            `${bl('Skuif die desimale punt')} 6 plekke na links totdat een nie-nul syfer daarvoor oorbly: 3 200 000 → ${bl('3.2')}`,
            `Die desimaal het ${or('6')} plekke geskuif, dus is die ${or('mag van 10')} ${or('10')}<sup>${or('6')}</sup>.`,
            `Skryf die ${gr('finale vorm')}: ${gr('3.2 × 10')}<sup>${or('6')}</sup>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skryf 6 700 in wetenskaplike notasie.',
          answer: '6.7 × 10³',
          checkMode: 'auto',
          correctAnswer: '6.7 × 10³',
          correctAnswers: ['6.7 × 10³', '6.7 x 10³', '6.7×10³', '6.7x10^3', '6.7 × 10^3'],
          explanation: 'Skuif die desimaal 3 plekke na links: 6 700 → 6.7\nAntwoord: 6.7 × 10³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Skryf elke getal in wetenskaplike notasie.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 850 000',
              correctAnswer: '8.5 × 10⁵',
              correctAnswers: ['8.5 × 10⁵', '8.5 x 10⁵', '8.5×10⁵', '8.5 × 10^5'],
              explanation: 'Skuif die desimaal 5 plekke na links: 850 000 → 8.5\nAntwoord: 8.5 × 10⁵ ✓',
            },
            {
              label: 'b) 12 000 000',
              correctAnswer: '1.2 × 10⁷',
              correctAnswers: ['1.2 × 10⁷', '1.2 x 10⁷', '1.2×10⁷', '1.2 × 10^7'],
              explanation: 'Skuif die desimaal 7 plekke na links: 12 000 000 → 1.2\nAntwoord: 1.2 × 10⁷ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die afstand van die Aarde na die Son is ongeveer 150 000 000 km.\n\na) Skryf hierdie afstand in wetenskaplike notasie.\nb) Die afstand van die Aarde na Proxima Centauri is ongeveer 4.0 × 10¹³ km. Hoeveel keer verder is Proxima Centauri as die Son? (Skryf jou antwoord in wetenskaplike notasie.)',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Aarde na Son in wetenskaplike notasie',
              correctAnswer: '1.5 × 10⁸',
              correctAnswers: ['1.5 × 10⁸', '1.5 x 10⁸', '1.5 × 10^8'],
              explanation: 'Skuif die desimaal 8 plekke na links: 150 000 000 → 1.5\nAntwoord: 1.5 × 10⁸ km ✓',
            },
            {
              label: 'b) Hoeveel keer verder (in wetenskaplike notasie)',
              correctAnswer: '2.67 × 10⁵',
              correctAnswers: ['2.67 × 10⁵', '2.67 x 10⁵', '≈ 2.67 × 10⁵', '2.7 × 10⁵'],
              explanation: 'Deel: (4.0 × 10¹³) ÷ (1.5 × 10⁸)\n= (4.0 ÷ 1.5) × 10^(13−8)\n≈ 2.67 × 10⁵\nProxima Centauri is ongeveer 2.67 × 10⁵ keer verder ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om groot getalle na wetenskaplike notasie om te skakel deur die desimale punt te skuif en die plekke te tel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stap-vir-stap diagram wat desimale skuif in blou, mag van 10 in oranje en finale wetenskaplike-notasie-vorm in groen wys vir 45 000 en 3 200 000" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — BEREKENINGE MET VIERKANTE, KUBUSSE EN WORTELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots',
      title: 'Berekeninge met Vierkante, Kubusse en Wortels van Heelgetalle en Rasionale Getalle',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Ons voer al vier bewerkings uit met getalle wat <strong>vierkante</strong>, <strong>kubusse</strong>, <strong>kwadraatwortels</strong> en <strong>kubuswortels</strong> van heelgetalle behels, en brei dit uit om vierkante, kubusse, kwadraatwortels en kubuswortels van <strong>rasionale getalle</strong> (breuke en desimale) te bereken.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe teken')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('wortel / resultaat')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('n')}² = ${bl('n')} × ${bl('n')}. Vir breuke: (${bl('a/b')})² = ${bl('a²/b²')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kubus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('n')}³ = ${bl('n')} × ${bl('n')} × ${bl('n')}. Vir breuke: (${bl('a/b')})³ = ${bl('a³/b³')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kwadraatwortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('√(a/b)')} = ${gr('√a / √b')}. Pas die wortel afsonderlik op die teller en noemer toe.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kubuswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('∛(a/b)')} = ${gr('∛a / ∛b')}. Pas die wortel afsonderlik op die teller en noemer toe.</p>` +
        `</div>` +

        `</div>` +

        // ── Critical distinction box ─────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Belangrike onderskeid: ${re('(−4)²')} is NIE dieselfde as ${re('−4²')} nie</p>` +
        `<p style="margin:0;color:#991b1b;">${re('(−4)²')} beteken die ${re('negatiewe teken')} is binne die hakies, dus word dit gekwadreer: (${re('−')}4) × (${re('−')}4) = +16.<br>` +
        `${re('−4²')} beteken slegs 4 word gekwadreer: ${re('−')}(4²) = ${re('−')}16. Die ${re('negatiewe teken')} word na die kwadratering toegepas.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken (−4)² en −4². Verduidelik die verskil.',
          answer: `${re('(−4)²')} = ${gr('16')} &nbsp;en&nbsp; ${re('−4²')} = ${re('−')}${gr('16')} — hierdie is verskillend`,
          steps: [
            `${re('(−4)²')}: Die ${re('negatiewe teken')} is binne die hakies, dus is dit deel van die grondgetal. Vermenigvuldig: (${re('−')}4) × (${re('−')}4) = ${gr('+16')}.`,
            `${re('−4²')}: Die eksponent geld slegs vir 4, nie vir die ${re('negatiewe teken')} nie. Bereken: ${re('−')}(4 × 4) = ${re('−')}${gr('16')}.`,
            `<strong>Gevolgtrekking:</strong> ${re('(−4)²')} = ${gr('16')} maar ${re('−4²')} = ${re('−')}${gr('16')}. Hierdie is verskillend omdat die posisie van die ${re('negatiewe teken')} relatief tot die hakies saak maak.`,
          ],
        },
        {
          question: 'Vind die kwadraatwortel van 4/9.',
          answer: `${gr('√')}(${bl('4/9')}) = ${gr('2/3')}`,
          steps: [
            `Pas die kwadraatwortel afsonderlik op die teller en noemer toe: ${gr('√')}(${bl('4/9')}) = ${gr('√4')} / ${gr('√9')}`,
            `Bereken: ${gr('√4')} = ${gr('2')} &nbsp;en&nbsp; ${gr('√9')} = ${gr('3')}`,
            `Resultaat: ${gr('√')}(${bl('4/9')}) = ${gr('2/3')}`,
          ],
        },
        {
          question: 'Bereken die kubus van 0.5.',
          answer: `${bl('0.5')}³ = ${gr('0.125')}`,
          steps: [
            `Skryf 0.5 as ʼn ${bl('breuk')}: ${bl('0.5')} = ${bl('1/2')}`,
            `Kubus die breuk: (${bl('1/2')})³ = ${bl('1³/2³')} = ${bl('1/8')}`,
            `Skakel terug na ʼn desimaal: ${bl('1/8')} = ${gr('0.125')}`,
            `Alternatiewelik: ${bl('0.5')} × ${bl('0.5')} × ${bl('0.5')} = 0.25 × 0.5 = ${gr('0.125')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Bereken (−3)².',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: '(−3)² = (−3) × (−3) = +9\nDie negatiewe teken is binne die hakies en word gekwadreer, wat ʼn positiewe resultaat gee ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) √(9/16)',
              correctAnswer: '3/4',
              correctAnswers: ['3/4', '0.75'],
              explanation: 'Pas die wortel afsonderlik op elke deel toe.\n√9 = 3 en √16 = 4\n√(9/16) = 3/4 ✓',
            },
            {
              label: 'b) ∛(8/27)',
              correctAnswer: '2/3',
              correctAnswers: ['2/3'],
              explanation: 'Pas die kubuswortel afsonderlik op elke deel toe.\n∛8 = 2 en ∛27 = 3\n∛(8/27) = 2/3 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Bereken en vergelyk. Wys alle werk.\n\na) (−5)² + √25\nb) −5² − ∛(−125)',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (−5)² + √25',
              correctAnswer: '30',
              explanation: '(−5)² = (−5) × (−5) = 25\n√25 = 5\n25 + 5 = 30 ✓',
            },
            {
              label: 'b) −5² − ∛(−125)',
              correctAnswer: '-20',
              correctAnswers: ['-20', '−20'],
              explanation: '−5² = −(5²) = −25\n∛(−125) = −5 (aangesien (−5)³ = −125)\n−25 − (−5) = −25 + 5 = −20 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat vierkante, kubusse, kwadraatwortels en kubuswortels van heelgetalle en breuke demonstreer met verduideliking van die negatiewe-teken-reëls" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Kant-aan-kant vergelyking wat negatiewe teken in rooi, breuk in blou en wortel/resultaat in groen wys vir sleutelvoorbeelde, insluitend die belangrike onderskeid tussen (negatiewe 4) in die kwadraat en negatiewe 4 in die kwadraat" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — product law ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig 2³ × 2².',
      answer: '32',
      checkMode: 'auto',
      correctAnswer: '32',
      explanation: 'Produkwet — dieselfde grondgetal (2), tel die eksponente bymekaar: 2^(3+2) = 2⁵ = 32 ✓',
    },

    // ── Q2 Medium — quotient law ──────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig 7⁵ ÷ 7².',
      answer: '343',
      checkMode: 'auto',
      correctAnswer: '343',
      explanation: 'Kwosiëntwet — dieselfde grondgetal (7), trek die eksponente van mekaar af: 7^(5−2) = 7³ = 343 ✓',
    },

    // ── Q3 Medium — power of a power ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig (4²)³.',
      answer: '4096',
      checkMode: 'auto',
      correctAnswer: '4096',
      explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: 4^(2×3) = 4⁶ = 4 096 ✓',
    },

    // ── Q4 Hard — zero exponent ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê 6⁰ = 0. Is hy korrek? Verduidelik.',
      answer: 'Nee — enige nie-nul getal tot die mag 0 is gelyk aan 1, nie 0 nie.',
      checkMode: 'self',
    },

    // ── Q5 Easy — scientific notation ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 67 000 in wetenskaplike notasie.',
      answer: '6.7 × 10⁴',
      checkMode: 'auto',
      correctAnswer: '6.7 × 10⁴',
      correctAnswers: ['6.7 × 10⁴', '6.7 x 10⁴', '6.7×10⁴', '6.7 × 10^4', '6.7x10^4'],
      explanation: 'Skuif die desimaal 4 plekke na links: 67 000 → 6.7\nAntwoord: 6.7 × 10⁴ ✓',
    },

    // ── Q6 Medium — scientific notation ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 9 150 000 in wetenskaplike notasie.',
      answer: '9.15 × 10⁶',
      checkMode: 'auto',
      correctAnswer: '9.15 × 10⁶',
      correctAnswers: ['9.15 × 10⁶', '9.15 x 10⁶', '9.15×10⁶', '9.15 × 10^6'],
      explanation: 'Skuif die desimaal 6 plekke na links: 9 150 000 → 9.15\nAntwoord: 9.15 × 10⁶ ✓',
    },

    // ── Q7 Hard — check scientific notation ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato skakel 520 000 om na wetenskaplike notasie en kry 5.2 × 10⁵. Kontroleer haar antwoord.',
      answer: 'Korrek — deur die desimaal 5 plekke na links te skuif kry jy 5.2 × 10⁵.',
      checkMode: 'self',
    },

    // ── Q8 Easy — negative base squared ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken (−3)².',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: '(−3)² = (−3) × (−3) = +9\nDie negatiewe teken is binne die hakies en word gekwadreer, wat ʼn positiewe resultaat gee ✓',
    },

    // ── Q9 Easy — negative sign outside exponent ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken −3².',
      answer: '-9',
      checkMode: 'auto',
      correctAnswer: '-9',
      correctAnswers: ['-9', '−9'],
      explanation: '−3² beteken −(3²) = −(9) = −9\nDie eksponent geld slegs vir 3, nie vir die negatiewe teken nie ✓',
    },

    // ── Q10 Medium — square root of a fraction ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die kwadraatwortel van 9/16.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      correctAnswers: ['3/4', '0.75'],
      explanation: 'Pas die wortel afsonderlik op die teller en noemer toe.\n√9 = 3 en √16 = 4\n√(9/16) = 3/4 ✓',
    },

    // ── Q11 Medium — cube of a decimal ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken die kubus van 0.4.',
      answer: '0.064',
      checkMode: 'auto',
      correctAnswer: '0.064',
      explanation: '0.4 × 0.4 = 0.16\n0.16 × 0.4 = 0.064\nAntwoord: (0.4)³ = 0.064 ✓',
    },

    // ── Q12 Hard — cube of negative: same result ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê (−2)³ en −2³ gee dieselfde antwoord. Is hy korrek? Verduidelik.',
      answer: 'Ja — (−2)³ = −8 en −2³ = −(2³) = −8. In hierdie geval is hulle toevallig gelyk omdat die kubus van ʼn negatiewe getal negatief bly.',
      checkMode: 'self',
    },

    // ── Q13 Hard — square of negative: different results ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê (−5)² en −5² gee dieselfde antwoord. Is sy korrek? Verduidelik.',
      answer: 'Nee — (−5)² = 25 (positief) maar −5² = −(5²) = −25 (negatief). Hulle is verskillend.',
      checkMode: 'self',
    },

    // ── Q14 Medium — power of a product ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig (2 × 3)².',
      answer: '36',
      checkMode: 'auto',
      correctAnswer: '36',
      explanation: 'Mag van ʼn produk: (2 × 3)² = 6² = 36\nOf versprei: 2² × 3² = 4 × 9 = 36 ✓',
    },

    // ── Q15 Hard — square root of a decimal ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die kwadraatwortel van 1.44.',
      answer: '1.2',
      checkMode: 'auto',
      correctAnswer: '1.2',
      explanation: '1.44 = 144/100\n√(144/100) = √144 / √100 = 12/10 = 1.2\nOf: 1.2 × 1.2 = 1.44 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het eksponente bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! ʼn Volmaakte telling — jy het Eksponente vir Graad 8 volkome bemeester. Hou so aan!' },
    { minScore: 9, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van eksponente. Hersien enige gemiste dele en jy sal dit volmaak hê.' },
    { minScore: 6, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
