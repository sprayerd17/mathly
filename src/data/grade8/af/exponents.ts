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
        `<p style="margin:0;color:#1e3a8a;">Om 3 200 000 as ${gr('3,2 × 10⁶')} te skryf is kompak en maklik om te vergelyk. Wetenskaplikes gebruik dit vir afstande, massas en hoeveelhede wat baie groottordes strek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf 45 000 in wetenskaplike notasie.',
          answer: `${gr('4,5 × 10')}<sup>${or('4')}</sup>`,
          steps: [
            `${bl('Skuif die desimale punt')} 4 plekke na links totdat een nie-nul syfer daarvoor oorbly: 45 000 → ${bl('4,5')}`,
            `Die desimaal het ${or('4')} plekke geskuif, dus is die ${or('mag van 10')} ${or('10')}<sup>${or('4')}</sup>.`,
            `Skryf die ${gr('finale vorm')}: ${gr('4,5 × 10')}<sup>${or('4')}</sup>`,
          ],
        },
        {
          question: 'Skryf 3 200 000 in wetenskaplike notasie.',
          answer: `${gr('3,2 × 10')}<sup>${or('6')}</sup>`,
          steps: [
            `${bl('Skuif die desimale punt')} 6 plekke na links totdat een nie-nul syfer daarvoor oorbly: 3 200 000 → ${bl('3,2')}`,
            `Die desimaal het ${or('6')} plekke geskuif, dus is die ${or('mag van 10')} ${or('10')}<sup>${or('6')}</sup>.`,
            `Skryf die ${gr('finale vorm')}: ${gr('3,2 × 10')}<sup>${or('6')}</sup>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skryf 6 700 in wetenskaplike notasie.',
          answer: '6,7 × 10³',
          checkMode: 'auto',
          correctAnswer: '6,7 × 10³',
          correctAnswers: ['6.7 × 10³', '6.7 x 10³', '6.7×10³', '6.7x10^3', '6.7 × 10^3', '6,7 × 10³', '6,7 x 10³', '6,7×10³', '6,7x10^3', '6,7 × 10^3'],
          explanation: 'Skuif die desimaal 3 plekke na links: 6 700 → 6,7\nAntwoord: 6,7 × 10³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Skryf elke getal in wetenskaplike notasie.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 850 000',
              correctAnswer: '8,5 × 10⁵',
              correctAnswers: ['8.5 × 10⁵', '8.5 x 10⁵', '8.5×10⁵', '8.5 × 10^5', '8,5 × 10⁵', '8,5 x 10⁵', '8,5×10⁵', '8,5 × 10^5'],
              explanation: 'Skuif die desimaal 5 plekke na links: 850 000 → 8,5\nAntwoord: 8,5 × 10⁵ ✓',
            },
            {
              label: 'b) 12 000 000',
              correctAnswer: '1,2 × 10⁷',
              correctAnswers: ['1.2 × 10⁷', '1.2 x 10⁷', '1.2×10⁷', '1.2 × 10^7', '1,2 × 10⁷', '1,2 x 10⁷', '1,2×10⁷', '1,2 × 10^7'],
              explanation: 'Skuif die desimaal 7 plekke na links: 12 000 000 → 1,2\nAntwoord: 1,2 × 10⁷ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die afstand van die Aarde na die Son is ongeveer 150 000 000 km.\n\na) Skryf hierdie afstand in wetenskaplike notasie.\nb) Die afstand van die Aarde na Proxima Centauri is ongeveer 4,0 × 10¹³ km. Hoeveel keer verder is Proxima Centauri as die Son? (Skryf jou antwoord in wetenskaplike notasie.)',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Aarde na Son in wetenskaplike notasie',
              correctAnswer: '1,5 × 10⁸',
              correctAnswers: ['1.5 × 10⁸', '1.5 x 10⁸', '1.5 × 10^8', '1,5 × 10⁸', '1,5 x 10⁸', '1,5 × 10^8'],
              explanation: 'Skuif die desimaal 8 plekke na links: 150 000 000 → 1,5\nAntwoord: 1,5 × 10⁸ km ✓',
            },
            {
              label: 'b) Hoeveel keer verder (in wetenskaplike notasie)',
              correctAnswer: '2,67 × 10⁵',
              correctAnswers: ['2.67 × 10⁵', '2.67 x 10⁵', '≈ 2.67 × 10⁵', '2.7 × 10⁵', '2,67 × 10⁵', '2,67 x 10⁵', '≈ 2,67 × 10⁵', '2,7 × 10⁵'],
              explanation: 'Deel: (4,0 × 10¹³) ÷ (1,5 × 10⁸)\n= (4,0 ÷ 1,5) × 10^(13−8)\n≈ 2,67 × 10⁵\nProxima Centauri is ongeveer 2,67 × 10⁵ keer verder ✓',
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
          question: 'Bereken die kubus van 0,5.',
          answer: `${bl('0,5')}³ = ${gr('0,125')}`,
          steps: [
            `Skryf 0,5 as ʼn ${bl('breuk')}: ${bl('0,5')} = ${bl('1/2')}`,
            `Kubus die breuk: (${bl('1/2')})³ = ${bl('1³/2³')} = ${bl('1/8')}`,
            `Skakel terug na ʼn desimaal: ${bl('1/8')} = ${gr('0,125')}`,
            `Alternatiewelik: ${bl('0,5')} × ${bl('0,5')} × ${bl('0,5')} = 0,25 × 0,5 = ${gr('0,125')} ✓`,
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
              correctAnswers: ['3/4', '0.75', '0,75'],
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
      answer: '6,7 × 10⁴',
      checkMode: 'auto',
      correctAnswer: '6,7 × 10⁴',
      correctAnswers: ['6.7 × 10⁴', '6.7 x 10⁴', '6.7×10⁴', '6.7 × 10^4', '6.7x10^4', '6,7 × 10⁴', '6,7 x 10⁴', '6,7×10⁴', '6,7 × 10^4', '6,7x10^4'],
      explanation: 'Skuif die desimaal 4 plekke na links: 67 000 → 6,7\nAntwoord: 6,7 × 10⁴ ✓',
    },

    // ── Q6 Medium — scientific notation ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 9 150 000 in wetenskaplike notasie.',
      answer: '9,15 × 10⁶',
      checkMode: 'auto',
      correctAnswer: '9,15 × 10⁶',
      correctAnswers: ['9.15 × 10⁶', '9.15 x 10⁶', '9.15×10⁶', '9.15 × 10^6', '9,15 × 10⁶', '9,15 x 10⁶', '9,15×10⁶', '9,15 × 10^6'],
      explanation: 'Skuif die desimaal 6 plekke na links: 9 150 000 → 9,15\nAntwoord: 9,15 × 10⁶ ✓',
    },

    // ── Q7 Hard — check scientific notation ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato skakel 520 000 om na wetenskaplike notasie en kry 5,2 × 10⁵. Kontroleer haar antwoord.',
      answer: 'Korrek — deur die desimaal 5 plekke na links te skuif kry jy 5,2 × 10⁵.',
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
      correctAnswers: ['3/4', '0.75', '0,75'],
      explanation: 'Pas die wortel afsonderlik op die teller en noemer toe.\n√9 = 3 en √16 = 4\n√(9/16) = 3/4 ✓',
    },

    // ── Q11 Medium — cube of a decimal ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken die kubus van 0,4.',
      answer: '0,064',
      checkMode: 'auto',
      correctAnswer: '0,064',
      correctAnswers: ['0.064', '0,064'],
      explanation: '0,4 × 0,4 = 0,16\n0,16 × 0,4 = 0,064\nAntwoord: (0,4)³ = 0,064 ✓',
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
      question: 'Vind die kwadraatwortel van 1,44.',
      answer: '1,2',
      checkMode: 'auto',
      correctAnswer: '1,2',
      correctAnswers: ['1.2', '1,2'],
      explanation: '1,44 = 144/100\n√(144/100) = √144 / √100 = 12/10 = 1,2\nOf: 1,2 × 1,2 = 1,44 ✓',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-4 Produk- en kwosiëntwet | 5-7 Mag van ʼn mag / mag van ʼn
    // produk | 8-10 Nul-eksponent & meerstap-kombinasies van wette |
    // 11-14 Vierkante/kubusse/wortels van heelgetalle, insl. negatiewe grondgetalle |
    // 15-17 Vierkante/kubusse/wortels van rasionale getalle | 18-20 Wetenskaplike notasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig 3⁵ × 3², laat jou antwoord as ʼn mag van 3, en bereken dit dan.', answer: '3⁷ = 2 187', checkMode: 'auto', correctAnswer: '2187', correctAnswers: ['2187', '3^7=2187', '3⁷=2187'], explanation: 'Dieselfde grondgetal — tel die eksponente bymekaar: 3⁵ × 3² = 3^(5+2) = 3⁷ = 2 187 ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig 4⁶ ÷ 4², laat jou antwoord as ʼn mag van 4, en bereken dit dan.', answer: '4⁴ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '4^4=256', '4⁴=256'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 4⁶ ÷ 4² = 4^(6−2) = 4⁴ = 256 ✓' },
        { difficulty: 'Medium', question: 'Bongiwe vereenvoudig 2⁴ × 2⁶ as 4¹⁰, en sê "jy vermenigvuldig die grondgetalle en tel die eksponente bymekaar." Verduidelik haar fout en gee die korrekte vereenvoudigde antwoord.', answer: 'Die grondgetal bly dieselfde (2) — dit mag nie vermenigvuldig word nie. Slegs die eksponente word bymekaar getel: 2⁴ × 2⁶ = 2^(4+6) = 2¹⁰ = 1 024, nie 4¹⁰ nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 7⁷ ÷ 7³, laat jou antwoord as ʼn mag van 7, en bereken dit dan.', answer: '7⁴ = 2 401', checkMode: 'auto', correctAnswer: '2401', correctAnswers: ['2401', '7^4=2401', '7⁴=2401'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 7⁷ ÷ 7³ = 7^(7−3) = 7⁴ = 2 401 ✓' },
        { difficulty: 'Medium', question: 'Pas die mag-van-ʼn-mag-wet toe om (2³)⁴ te vereenvoudig, en bereken dit dan.', answer: '2¹² = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '2^12=4096', '2¹²=4096'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (2³)⁴ = 2^(3×4) = 2¹² = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3²)³ deur die mag-van-ʼn-mag-wet te gebruik, en bereken dit dan.', answer: '3⁶ = 729', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (3²)³ = 3^(2×3) = 3⁶ = 729 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die mag-van-ʼn-produk-wet om (2 × 5)³ te vereenvoudig, en bereken dit dan op twee verskillende maniere om te kontroleer of jou antwoord ooreenstem.', answer: '(2 × 5)³ = 10³ = 1 000, en 2³ × 5³ = 8 × 125 = 1 000', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '10^3=1000', '10³=1000'], explanation: 'Metode 1: (2 × 5)³ = 10³ = 1 000. Metode 2 (mag van ʼn produk): 2³ × 5³ = 8 × 125 = 1 000. Albei metodes stem ooreen ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig en bereken: (2³ × 2²) ÷ 2⁴.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Stap 1: Produkwet in die teller: 2³ × 2² = 2^(3+2) = 2⁵.\nStap 2: Kwosiëntwet: 2⁵ ÷ 2⁴ = 2^(5−4) = 2¹ = 2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vereenvoudig (3⁴ × 3¹) ÷ 3³, en gee ʼn finale numeriese antwoord.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Stap 1: Produkwet: 3⁴ × 3¹ = 3^(4+1) = 3⁵.\nStap 2: Kwosiëntwet: 3⁵ ÷ 3³ = 3^(5−3) = 3² = 9 ✓' },
        { difficulty: 'Hard', question: 'Zanele sê dat, omdat 5⁰ = 1, dit ook waar moet wees dat 0 × 5⁰ = 0 × 1 = 0, so "enige uitdrukking met ʼn nul-eksponent is gelyk aan nul." Verduidelik wat verkeerd is met haar redenasie.', answer: 'Sy verwar die eksponent 0 met ʼn koëffisiënt van 0. Die nul-eksponentwet sê net vir ons dat 5⁰ = 1; om daardie resultaat met ʼn ongerelateerde 0 te vermenigvuldig gee 0, maar dit het niks met die eksponent self te doen nie. 5⁰ op sy eie is steeds 1, nie 0 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−6)².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '(−6)² = (−6) × (−6) = +36\nDie negatiewe teken is binne die hakies en word gekwadreer, wat ʼn positiewe resultaat gee ✓' },
        { difficulty: 'Easy', question: 'Bereken −6².', answer: '-36', checkMode: 'auto', correctAnswer: '-36', correctAnswers: ['-36', '−36'], explanation: '−6² beteken −(6²) = −(36) = −36\nDie eksponent geld slegs vir 6, nie vir die negatiewe teken nie ✓' },
        { difficulty: 'Medium', question: 'Bereken (−2)³ en −2³. Kagiso sê hierdie moet verskillend wees omdat "(−a)ⁿ en −aⁿ nooit gelyk is nie." Wys die waardes en kommentaar op sy stelling.', answer: '(−2)³ = −8 en −2³ = −8 — hulle is toevallig gelyk hier', checkMode: 'auto', correctAnswer: '-8', correctAnswers: ['-8', '−8', 'bothequal-8', 'equal'], explanation: '(−2)³ = (−2)×(−2)×(−2) = −8. −2³ = −(2³) = −8. Sy stelling is vals in hierdie geval — vir onewe eksponente is (−a)ⁿ en −aⁿ altyd gelyk, want ʼn negatiewe getal tot ʼn onewe mag bly in albei gevalle negatief.' },
        { difficulty: 'Hard', question: 'Bereken (−4)² + √36, en bereken dan −4² − ∛(−64). Wys alle werk vir albei.', answer: '(−4)² + √36 = 22, en −4² − ∛(−64) = −12', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−4)² + √36', correctAnswer: '22', explanation: '(−4)² = (−4) × (−4) = 16\n√36 = 6\n16 + 6 = 22 ✓' }, { label: 'b) −4² − ∛(−64)', correctAnswer: '-12', correctAnswers: ['-12', '−12'], explanation: '−4² = −(4²) = −16\n∛(−64) = −4 (aangesien (−4)³ = −64)\n−16 − (−4) = −16 + 4 = −12 ✓' } ] },
        { difficulty: 'Medium', question: 'Vind die kwadraatwortel van 16/25.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5', '0.8', '0,8'], explanation: 'Pas die wortel afsonderlik op die teller en noemer toe.\n√16 = 4 en √25 = 5\n√(16/25) = 4/5 ✓' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 27/64.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '0.75', '0,75'], explanation: 'Pas die kubuswortel afsonderlik op die teller en noemer toe.\n∛27 = 3 en ∛64 = 4\n∛(27/64) = 3/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken die kubus van 0,3, en vind dan die kwadraatwortel van 2,25. Wys alle werk.', answer: '(0,3)³ = 0,027, en √2,25 = 1,5', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0,3)³', correctAnswer: '0,027', correctAnswers: ['0.027', '0,027'], explanation: '0,3 × 0,3 = 0,09\n0,09 × 0,3 = 0,027\nAntwoord: (0,3)³ = 0,027 ✓' }, { label: 'b) √2,25', correctAnswer: '1,5', correctAnswers: ['1.5', '1,5'], explanation: '2,25 = 225/100\n√(225/100) = √225 / √100 = 15/10 = 1,5\nOf: 1,5 × 1,5 = 2,25 ✓' } ] },
        { difficulty: 'Easy', question: 'Skryf 123 000 in wetenskaplike notasie.', answer: '1,23 × 10⁵', checkMode: 'auto', correctAnswer: '1,23 × 10⁵', correctAnswers: ['1.23 × 10⁵', '1.23 x 10⁵', '1.23×10⁵', '1.23 × 10^5', '1.23x10^5', '1,23 × 10⁵', '1,23 x 10⁵', '1,23×10⁵', '1,23 × 10^5', '1,23x10^5'], explanation: 'Skuif die desimaal 5 plekke na links: 123 000 → 1,23\nAntwoord: 1,23 × 10⁵ ✓' },
        { difficulty: 'Medium', question: 'Skryf 900 000 000 in wetenskaplike notasie.', answer: '9 × 10⁸', checkMode: 'auto', correctAnswer: '9 × 10⁸', correctAnswers: ['9 × 10⁸', '9 x 10⁸', '9×10⁸', '9 × 10^8', '9.0 × 10⁸', '9,0 × 10⁸'], explanation: 'Skuif die desimaal 8 plekke na links: 900 000 000 → 9\nAntwoord: 9 × 10⁸ ✓' },
        { difficulty: 'Hard', question: 'ʼn Stadsbiblioteek hou ongeveer 300 000 000 (3,0 × 10⁸) bladsye dokumente in totaal, gestoor in lêers van 24 000 (2,4 × 10⁴) bladsye elk. Skryf albei hoeveelhede in wetenskaplike notasie, en bereken dan hoeveel lêers benodig word.', answer: '3,0 × 10⁸ bladsye, 2,4 × 10⁴ bladsye per lêer, 12 500 lêers', checkMode: 'auto', correctAnswer: '12500', correctAnswers: ['12500', '12 500', '1.25 × 10⁴', '1.25×10⁴', '1,25 × 10⁴', '1,25×10⁴'], explanation: 'Deel: (3,0 × 10⁸) ÷ (2,4 × 10⁴)\n= (3,0 ÷ 2,4) × 10^(8−4)\n= 1,25 × 10⁴ = 12 500 lêers ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die wette van eksponente, wortels en wetenskaplike notasie op Graad 8-vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig 5³ × 5⁴, laat jou antwoord as ʼn mag van 5, en bereken dit dan.', answer: '5⁷ = 78 125', checkMode: 'auto', correctAnswer: '78125', correctAnswers: ['78125', '5^7=78125', '5⁷=78125'], explanation: 'Dieselfde grondgetal — tel die eksponente bymekaar: 5³ × 5⁴ = 5^(3+4) = 5⁷ = 78 125 ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig 8⁷ ÷ 8³, laat jou antwoord as ʼn mag van 8, en bereken dit dan.', answer: '8⁴ = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '8^4=4096', '8⁴=4096'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 8⁷ ÷ 8³ = 8^(7−3) = 8⁴ = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Thabiso vereenvoudig 3⁵ × 3² as 9⁷, en sê "jy vermenigvuldig die grondgetalle en tel die eksponente bymekaar." Verduidelik sy fout en gee die korrekte vereenvoudigde antwoord.', answer: 'Die grondgetal bly dieselfde (3) — dit mag nie vermenigvuldig word nie. Slegs die eksponente word bymekaar getel: 3⁵ × 3² = 3^(5+2) = 3⁷ = 2 187, nie 9⁷ nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 9⁶ ÷ 9⁴, laat jou antwoord as ʼn mag van 9, en bereken dit dan.', answer: '9² = 81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 9⁶ ÷ 9⁴ = 9^(6−4) = 9² = 81 ✓' },
        { difficulty: 'Medium', question: 'Pas die mag-van-ʼn-mag-wet toe om (4²)³ te vereenvoudig, en bereken dit dan.', answer: '4⁶ = 4 096', checkMode: 'auto', correctAnswer: '4096', correctAnswers: ['4096', '4^6=4096', '4⁶=4096'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (4²)³ = 4^(2×3) = 4⁶ = 4 096 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (2⁴)² deur die mag-van-ʼn-mag-wet te gebruik, en bereken dit dan.', answer: '2⁸ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (2⁴)² = 2^(4×2) = 2⁸ = 256 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die mag-van-ʼn-produk-wet om (3 × 4)³ te vereenvoudig, en bereken dit dan op twee verskillende maniere om te kontroleer of jou antwoord ooreenstem.', answer: '(3 × 4)³ = 12³ = 1 728, en 3³ × 4³ = 27 × 64 = 1 728', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '12^3=1728', '12³=1728'], explanation: 'Metode 1: (3 × 4)³ = 12³ = 1 728. Metode 2 (mag van ʼn produk): 3³ × 4³ = 27 × 64 = 1 728. Albei metodes stem ooreen ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig en bereken: (5³ × 5²) ÷ 5⁴.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Stap 1: Produkwet in die teller: 5³ × 5² = 5^(3+2) = 5⁵.\nStap 2: Kwosiëntwet: 5⁵ ÷ 5⁴ = 5^(5−4) = 5¹ = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vereenvoudig (2⁵ × 2¹) ÷ 2⁴, en gee ʼn finale numeriese antwoord.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Stap 1: Produkwet: 2⁵ × 2¹ = 2^(5+1) = 2⁶.\nStap 2: Kwosiëntwet: 2⁶ ÷ 2⁴ = 2^(6−4) = 2² = 4 ✓' },
        { difficulty: 'Hard', question: 'Kagiso sê dat, omdat 8⁰ = 1, dit ook waar moet wees dat 0 × 8⁰ = 0 × 1 = 0, so "enige uitdrukking met ʼn nul-eksponent is gelyk aan nul." Verduidelik wat verkeerd is met sy redenasie.', answer: 'Hy verwar die eksponent 0 met ʼn koëffisiënt van 0. Die nul-eksponentwet sê net vir ons dat 8⁰ = 1; om daardie resultaat met ʼn ongerelateerde 0 te vermenigvuldig gee 0, maar dit het niks met die eksponent self te doen nie. 8⁰ op sy eie is steeds 1, nie 0 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−8)².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '(−8)² = (−8) × (−8) = +64\nDie negatiewe teken is binne die hakies en word gekwadreer, wat ʼn positiewe resultaat gee ✓' },
        { difficulty: 'Easy', question: 'Bereken −8².', answer: '-64', checkMode: 'auto', correctAnswer: '-64', correctAnswers: ['-64', '−64'], explanation: '−8² beteken −(8²) = −(64) = −64\nDie eksponent geld slegs vir 8, nie vir die negatiewe teken nie ✓' },
        { difficulty: 'Medium', question: 'Bereken (−3)³ en −3³. Naledi sê hierdie moet verskillend wees omdat "(−a)ⁿ en −aⁿ nooit gelyk is nie." Wys die waardes en kommentaar op haar stelling.', answer: '(−3)³ = −27 en −3³ = −27 — hulle is toevallig gelyk hier', checkMode: 'auto', correctAnswer: '-27', correctAnswers: ['-27', '−27', 'bothequal-27', 'equal'], explanation: '(−3)³ = (−3)×(−3)×(−3) = −27. −3³ = −(3³) = −27. Haar stelling is vals in hierdie geval — vir onewe eksponente is (−a)ⁿ en −aⁿ altyd gelyk, want ʼn negatiewe getal tot ʼn onewe mag bly in albei gevalle negatief.' },
        { difficulty: 'Hard', question: 'Bereken (−3)² + √64, en bereken dan −3² − ∛(−27). Wys alle werk vir albei.', answer: '(−3)² + √64 = 17, en −3² − ∛(−27) = −6', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−3)² + √64', correctAnswer: '17', explanation: '(−3)² = (−3) × (−3) = 9\n√64 = 8\n9 + 8 = 17 ✓' }, { label: 'b) −3² − ∛(−27)', correctAnswer: '-6', correctAnswers: ['-6', '−6'], explanation: '−3² = −(3²) = −9\n∛(−27) = −3 (aangesien (−3)³ = −27)\n−9 − (−3) = −9 + 3 = −6 ✓' } ] },
        { difficulty: 'Medium', question: 'Vind die kwadraatwortel van 25/49.', answer: '5/7', checkMode: 'auto', correctAnswer: '5/7', explanation: 'Pas die wortel afsonderlik op die teller en noemer toe.\n√25 = 5 en √49 = 7\n√(25/49) = 5/7 ✓' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 64/125.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5', '0.8', '0,8'], explanation: 'Pas die kubuswortel afsonderlik op die teller en noemer toe.\n∛64 = 4 en ∛125 = 5\n∛(64/125) = 4/5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken die kubus van 0,2, en vind dan die kwadraatwortel van 1,69. Wys alle werk.', answer: '(0,2)³ = 0,008, en √1,69 = 1,3', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0,2)³', correctAnswer: '0,008', correctAnswers: ['0.008', '0,008'], explanation: '0,2 × 0,2 = 0,04\n0,04 × 0,2 = 0,008\nAntwoord: (0,2)³ = 0,008 ✓' }, { label: 'b) √1,69', correctAnswer: '1,3', correctAnswers: ['1.3', '1,3'], explanation: '1,69 = 169/100\n√(169/100) = √169 / √100 = 13/10 = 1,3\nOf: 1,3 × 1,3 = 1,69 ✓' } ] },
        { difficulty: 'Easy', question: 'Skryf 67 000 in wetenskaplike notasie.', answer: '6,7 × 10⁴', checkMode: 'auto', correctAnswer: '6,7 × 10⁴', correctAnswers: ['6.7 × 10⁴', '6.7 x 10⁴', '6.7×10⁴', '6.7 × 10^4', '6.7x10^4', '6,7 × 10⁴', '6,7 x 10⁴', '6,7×10⁴', '6,7 × 10^4', '6,7x10^4'], explanation: 'Skuif die desimaal 4 plekke na links: 67 000 → 6,7\nAntwoord: 6,7 × 10⁴ ✓' },
        { difficulty: 'Medium', question: 'Skryf 5 000 000 000 in wetenskaplike notasie.', answer: '5 × 10⁹', checkMode: 'auto', correctAnswer: '5 × 10⁹', correctAnswers: ['5 × 10⁹', '5 x 10⁹', '5×10⁹', '5 × 10^9', '5.0 × 10⁹', '5,0 × 10⁹'], explanation: 'Skuif die desimaal 9 plekke na links: 5 000 000 000 → 5\nAntwoord: 5 × 10⁹ ✓' },
        { difficulty: 'Hard', question: 'ʼn Selfoonvervaardiger vervaardig ongeveer 480 000 000 (4,8 × 10⁸) komponente per jaar, verpak in bokse van 160 000 (1,6 × 10⁵) komponente elk. Skryf albei hoeveelhede in wetenskaplike notasie, en bereken dan hoeveel bokse per jaar benodig word.', answer: '4,8 × 10⁸ komponente, 1,6 × 10⁵ per boks, 3 000 bokse', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', '3 000', '3.0 × 10³', '3.0×10³', '3,0 × 10³', '3,0×10³'], explanation: 'Deel: (4,8 × 10⁸) ÷ (1,6 × 10⁵)\n= (4,8 ÷ 1,6) × 10^(8−5)\n= 3,0 × 10³ = 3 000 bokse ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die wette van eksponente, wortels en wetenskaplike notasie op Graad 8-vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1/2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig 2⁶ × 2³, laat jou antwoord as ʼn mag van 2, en bereken dit dan.', answer: '2⁹ = 512', checkMode: 'auto', correctAnswer: '512', correctAnswers: ['512', '2^9=512', '2⁹=512'], explanation: 'Dieselfde grondgetal — tel die eksponente bymekaar: 2⁶ × 2³ = 2^(6+3) = 2⁹ = 512 ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig 6⁷ ÷ 6⁵, laat jou antwoord as ʼn mag van 6, en bereken dit dan.', answer: '6² = 36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '6^2=36', '6²=36'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 6⁷ ÷ 6⁵ = 6^(7−5) = 6² = 36 ✓' },
        { difficulty: 'Medium', question: 'Amahle vereenvoudig 4³ × 4² as 16⁵, en sê "jy vermenigvuldig die grondgetalle en tel die eksponente bymekaar." Verduidelik haar fout en gee die korrekte vereenvoudigde antwoord.', answer: 'Die grondgetal bly dieselfde (4) — dit mag nie vermenigvuldig word nie. Slegs die eksponente word bymekaar getel: 4³ × 4² = 4^(3+2) = 4⁵ = 1 024, nie 16⁵ nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 10⁸ ÷ 10⁵, laat jou antwoord as ʼn mag van 10, en bereken dit dan.', answer: '10³ = 1 000', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '10^3=1000', '10³=1000'], explanation: 'Dieselfde grondgetal — trek die eksponente van mekaar af: 10⁸ ÷ 10⁵ = 10^(8−5) = 10³ = 1 000 ✓' },
        { difficulty: 'Medium', question: 'Pas die mag-van-ʼn-mag-wet toe om (5³)² te vereenvoudig, en bereken dit dan.', answer: '5⁶ = 15 625', checkMode: 'auto', correctAnswer: '15625', correctAnswers: ['15625', '15 625', '5^6=15625', '5⁶=15625'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (5³)² = 5^(3×2) = 5⁶ = 15 625 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3²)⁴ deur die mag-van-ʼn-mag-wet te gebruik, en bereken dit dan.', answer: '3⁸ = 6 561', checkMode: 'auto', correctAnswer: '6561', correctAnswers: ['6561', '3^8=6561', '3⁸=6561'], explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (3²)⁴ = 3^(2×4) = 3⁸ = 6 561 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die mag-van-ʼn-produk-wet om (2 × 3)⁵ te vereenvoudig, en bereken dit dan op twee verskillende maniere om te kontroleer of jou antwoord ooreenstem.', answer: '(2 × 3)⁵ = 6⁵ = 7 776, en 2⁵ × 3⁵ = 32 × 243 = 7 776', checkMode: 'auto', correctAnswer: '7776', correctAnswers: ['7776', '6^5=7776', '6⁵=7776'], explanation: 'Metode 1: (2 × 3)⁵ = 6⁵ = 7 776. Metode 2 (mag van ʼn produk): 2⁵ × 3⁵ = 32 × 243 = 7 776. Albei metodes stem ooreen ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig en bereken: (3³ × 3²) ÷ 3⁴.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Stap 1: Produkwet in die teller: 3³ × 3² = 3^(3+2) = 3⁵.\nStap 2: Kwosiëntwet: 3⁵ ÷ 3⁴ = 3^(5−4) = 3¹ = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vereenvoudig (6⁴ × 6¹) ÷ 6³, en gee ʼn finale numeriese antwoord.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Stap 1: Produkwet: 6⁴ × 6¹ = 6^(4+1) = 6⁵.\nStap 2: Kwosiëntwet: 6⁵ ÷ 6³ = 6^(5−3) = 6² = 36 ✓' },
        { difficulty: 'Hard', question: 'Palesa sê dat, omdat 12⁰ = 1, dit ook waar moet wees dat 0 × 12⁰ = 0 × 1 = 0, so "enige uitdrukking met ʼn nul-eksponent is gelyk aan nul." Verduidelik wat verkeerd is met haar redenasie.', answer: 'Sy verwar die eksponent 0 met ʼn koëffisiënt van 0. Die nul-eksponentwet sê net vir ons dat 12⁰ = 1; om daardie resultaat met ʼn ongerelateerde 0 te vermenigvuldig gee 0, maar dit het niks met die eksponent self te doen nie. 12⁰ op sy eie is steeds 1, nie 0 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken (−9)².', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: '(−9)² = (−9) × (−9) = +81\nDie negatiewe teken is binne die hakies en word gekwadreer, wat ʼn positiewe resultaat gee ✓' },
        { difficulty: 'Easy', question: 'Bereken −9².', answer: '-81', checkMode: 'auto', correctAnswer: '-81', correctAnswers: ['-81', '−81'], explanation: '−9² beteken −(9²) = −(81) = −81\nDie eksponent geld slegs vir 9, nie vir die negatiewe teken nie ✓' },
        { difficulty: 'Medium', question: 'Bereken (−5)³ en −5³. Sibusiso sê hierdie moet verskillend wees omdat "(−a)ⁿ en −aⁿ nooit gelyk is nie." Wys die waardes en kommentaar op sy stelling.', answer: '(−5)³ = −125 en −5³ = −125 — hulle is toevallig gelyk hier', checkMode: 'auto', correctAnswer: '-125', correctAnswers: ['-125', '−125', 'bothequal-125', 'equal'], explanation: '(−5)³ = (−5)×(−5)×(−5) = −125. −5³ = −(5³) = −125. Sy stelling is vals in hierdie geval — vir onewe eksponente is (−a)ⁿ en −aⁿ altyd gelyk, want ʼn negatiewe getal tot ʼn onewe mag bly in albei gevalle negatief.' },
        { difficulty: 'Hard', question: 'Bereken (−6)² + √81, en bereken dan −6² − ∛(−216). Wys alle werk vir albei.', answer: '(−6)² + √81 = 45, en −6² − ∛(−216) = −30', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (−6)² + √81', correctAnswer: '45', explanation: '(−6)² = (−6) × (−6) = 36\n√81 = 9\n36 + 9 = 45 ✓' }, { label: 'b) −6² − ∛(−216)', correctAnswer: '-30', correctAnswers: ['-30', '−30'], explanation: '−6² = −(6²) = −36\n∛(−216) = −6 (aangesien (−6)³ = −216)\n−36 − (−6) = −36 + 6 = −30 ✓' } ] },
        { difficulty: 'Medium', question: 'Vind die kwadraatwortel van 36/121.', answer: '6/11', checkMode: 'auto', correctAnswer: '6/11', explanation: 'Pas die wortel afsonderlik op die teller en noemer toe.\n√36 = 6 en √121 = 11\n√(36/121) = 6/11 ✓' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 125/216.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', explanation: 'Pas die kubuswortel afsonderlik op die teller en noemer toe.\n∛125 = 5 en ∛216 = 6\n∛(125/216) = 5/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken die vierkant van 0,7, en vind dan die kwadraatwortel van 6,25. Wys alle werk.', answer: '(0,7)² = 0,49, en √6,25 = 2,5', checkMode: 'auto', correctAnswer: '', parts: [ { label: 'a) (0,7)²', correctAnswer: '0,49', correctAnswers: ['0.49', '0,49'], explanation: '0,7 × 0,7 = 0,49\nAntwoord: (0,7)² = 0,49 ✓' }, { label: 'b) √6,25', correctAnswer: '2,5', correctAnswers: ['2.5', '2,5'], explanation: '6,25 = 625/100\n√(625/100) = √625 / √100 = 25/10 = 2,5\nOf: 2,5 × 2,5 = 6,25 ✓' } ] },
        { difficulty: 'Easy', question: 'Skryf 890 000 in wetenskaplike notasie.', answer: '8,9 × 10⁵', checkMode: 'auto', correctAnswer: '8,9 × 10⁵', correctAnswers: ['8.9 × 10⁵', '8.9 x 10⁵', '8.9×10⁵', '8.9 × 10^5', '8.9x10^5', '8,9 × 10⁵', '8,9 x 10⁵', '8,9×10⁵', '8,9 × 10^5', '8,9x10^5'], explanation: 'Skuif die desimaal 5 plekke na links: 890 000 → 8,9\nAntwoord: 8,9 × 10⁵ ✓' },
        { difficulty: 'Medium', question: 'Skryf 72 000 000 in wetenskaplike notasie.', answer: '7,2 × 10⁷', checkMode: 'auto', correctAnswer: '7,2 × 10⁷', correctAnswers: ['7.2 × 10⁷', '7.2 x 10⁷', '7.2×10⁷', '7.2 × 10^7', '7,2 × 10⁷', '7,2 x 10⁷', '7,2×10⁷', '7,2 × 10^7'], explanation: 'Skuif die desimaal 7 plekke na links: 72 000 000 → 7,2\nAntwoord: 7,2 × 10⁷ ✓' },
        { difficulty: 'Hard', question: 'ʼn Nasionale datasentrum verwerk ongeveer 6 600 000 000 (6,6 × 10⁹) rekords per jaar, in bondels van 300 000 (3,0 × 10⁵) rekords elk. Skryf albei hoeveelhede in wetenskaplike notasie, en bereken dan hoeveel bondels per jaar verwerk word.', answer: '6,6 × 10⁹ rekords, 3,0 × 10⁵ per bondel, 22 000 bondels', checkMode: 'auto', correctAnswer: '22000', correctAnswers: ['22000', '22 000', '2.2 × 10⁴', '2.2×10⁴', '2,2 × 10⁴', '2,2×10⁴'], explanation: 'Deel: (6,6 × 10⁹) ÷ (3,0 × 10⁵)\n= (6,6 ÷ 3,0) × 10^(9−5)\n= 2,2 × 10⁴ = 22 000 bondels ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die wette van eksponente, wortels en wetenskaplike notasie op Graad 8-vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
