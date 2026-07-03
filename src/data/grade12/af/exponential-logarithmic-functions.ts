import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// horizontal asymptote / change of base → red    (#dc2626)
// base / product law                    → blue   (#2563eb)
// growth (b>1) / result / power law     → green  (#16a34a)
// decay (0<b<1) / exponent / quotient   → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eksponensiële en Logaritmiese Funksies',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: EXPONENTIAL FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-exponential-functions',
      title: 'Hersiening — Eksponensiële Funksies',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons met logaritmes werk, hersien ons eksponensiële funksies van die vorm <strong>y = a · bˣ + q</strong> (waar b &gt; 0, b ≠ 1). Om die rol van elke parameter te verstaan, is noodsaaklik vir die werk wat volg.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('horisontale asimptoot')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('groei (b > 1)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verval (0 < b < 1)')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe van y = a · bˣ + q</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Horisontale asimptoot</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die lyn <strong>y = q</strong>. Die grafiek nader hierdie lyn soos x → ±∞, maar sny dit nooit nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Groei (b &gt; 1)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer b &gt; 1 <strong>neem</strong> die funksie toe soos x toeneem — die grafiek styg van links na regs.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Verval (0 &lt; b &lt; 1)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer 0 &lt; b &lt; 1 <strong>neem</strong> die funksie af soos x toeneem — die grafiek daal van links na regs.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">y-afsnit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Stel x = 0: y = a · b⁰ + q = <strong>a + q</strong>, aangesien enige nie-nul basis tot die mag 0 gelyk is aan 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom hersien ons dit nou?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Logaritmes is die <em>inverse</em> van eksponensiële funksies. Hoe beter jy die eksponensiële grafiek en sy asimptoot verstaan, hoe makliker is dit om die ooreenstemmende logaritmiese grafiek te skets en te interpreteer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skets y = 2ˣ + 1 deur die horisontale asimptoot en y-afsnit te vind.',
          answer: `${re('Horisontale asimptoot: y = 1')}; y-afsnit: (0, 2); die grafiek ${gr('groei')} soos x toeneem`,
          steps: [
            `${re('Horisontale asimptoot:')} q = 1, dus is die asimptoot die lyn <strong>y = 1</strong>. Die grafiek nader y = 1, maar sny dit nooit nie.`,
            `<strong>y-afsnit:</strong> Stel x = 0 → y = 2⁰ + 1 = 1 + 1 = <strong>2</strong>. Die grafiek gaan deur die punt (0, 2).`,
            `<strong>Gedrag:</strong> Aangesien b = 2 en ${gr('2 > 1')}, ${gr('groei')} die funksie — die grafiek styg steil soos x toeneem en word platter na y = 1 soos x → −∞.`,
          ],
        },
        {
          question: 'Skets y = 3 · (0.5)ˣ − 2 deur die horisontale asimptoot en y-afsnit te vind.',
          answer: `${re('Horisontale asimptoot: y = −2')}; y-afsnit: (0, 1); die grafiek ${or('verval')} soos x toeneem`,
          steps: [
            `${re('Horisontale asimptoot:')} q = −2, dus is die asimptoot die lyn <strong>y = −2</strong>.`,
            `<strong>y-afsnit:</strong> Stel x = 0 → y = 3 · (0.5)⁰ − 2 = 3 · 1 − 2 = <strong>1</strong>. Die grafiek gaan deur die punt (0, 1).`,
            `<strong>Gedrag:</strong> Aangesien b = 0.5 en ${or('0 < 0.5 < 1')}, ${or('verval')} die funksie — die grafiek daal soos x toeneem en nader y = −2 van bo af.`,
          ],
        },
        {
          question: 'Sipho vergelyk y = 4ˣ met y = 4ˣ − 3. Beskryf die verwantskap tussen die twee grafieke.',
          answer: `y = 4ˣ − 3 is y = 4ˣ wat 3 eenhede afwaarts geskuif is; die ${re('horisontale asimptoot')} beweeg van y = 0 na y = −3`,
          steps: [
            `Albei funksies het dieselfde basis b = 4 (${gr('b > 1')}), dus het albei grafieke dieselfde vorm en ${gr('groeigedrag')}.`,
            `y = 4ˣ het ${re('horisontale asimptoot')} y = 0 (aangesien q = 0).`,
            `y = 4ˣ − 3 trek 3 af van elke y-waarde — dit skuif die hele grafiek <strong>3 eenhede afwaarts</strong>. Sy ${re('horisontale asimptoot')} beweeg van y = 0 na <strong>y = −3</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising the exponential function y = a times b to the power x plus q, showing how to identify the horizontal asymptote, y-intercept, and whether the graph grows or decays" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DEFINITION OF A LOGARITHM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'definition-of-a-logarithm',
      title: 'Definisie van ʼn Logaritme',
      icon: '㏒',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Logaritme beantwoord die vraag: <em>"tot watter mag moet die basis verhef word om hierdie getal te kry?"</em> Ons definieer <strong>log<sub>b</sub> x = y</strong> om te beteken <strong>b<sup>y</sup> = x</strong> (waar b &gt; 0, b ≠ 1, x &gt; 0). Logaritmiese vorm en eksponensiële vorm is twee maniere om presies dieselfde verwantskap uit te druk.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('basis')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('resultaat')}</span>` +
        `</div>` +

        // ── Conversion table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakeling tussen vorms</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +

        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Logaritmiese vorm</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}</p>` +
        `</div>` +

        `<div style="color:#9ca3af;font-size:1.6em;font-weight:300;">⟺</div>` +

        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Eksponensiële vorm</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('b')}<sup>${or('y')}</sup> = ${gr('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── Restrictions ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Beperkings om te onthou</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${bl('Basis b:')} b &gt; 0 en b ≠ 1 — ʼn negatiewe basis of ʼn basis van 1 maak die logaritme onbepaald.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<p style="margin:0;font-size:14px;">${gr('Argument x:')} x &gt; 0 — jy kan nie die logaritme van nul of ʼn negatiewe getal neem nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige geheue-truuk</p>` +
        `<p style="margin:0;color:#1e3a8a;">In log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}: die ${bl('basis')} aan die linkerkant bly die ${bl('basis')} aan die regterkant, die ${or('eksponent')} is die antwoord van die log, en die ${gr('resultaat')} is wat jy kry wanneer jy die basis tot daardie mag verhef.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel log₂8 = 3 om na eksponensiële vorm.',
          answer: `${bl('2')}${or('³')} = ${gr('8')}`,
          steps: [
            `Die definisie: log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')} beteken ${bl('b')}<sup>${or('y')}</sup> = ${gr('x')}.`,
            `Identifiseer die dele: ${bl('basis b = 2')}, ${gr('resultaat x = 8')}, ${or('eksponent y = 3')}.`,
            `Eksponensiële vorm: <strong>${bl('2')}<sup>${or('3')}</sup> = ${gr('8')}</strong>.`,
          ],
        },
        {
          question: 'Skakel 5² = 25 om na logaritmiese vorm.',
          answer: `log<sub>${bl('5')}</sub> ${gr('25')} = ${or('2')}`,
          steps: [
            `Die definisie: ${bl('b')}<sup>${or('y')}</sup> = ${gr('x')} beteken log<sub>${bl('b')}</sub> ${gr('x')} = ${or('y')}.`,
            `Identifiseer die dele: ${bl('basis b = 5')}, ${or('eksponent y = 2')}, ${gr('resultaat x = 25')}.`,
            `Logaritmiese vorm: <strong>log<sub>${bl('5')}</sub> ${gr('25')} = ${or('2')}</strong>.`,
          ],
        },
        {
          question: 'Bereken log₃81.',
          answer: `log<sub>${bl('3')}</sub> ${gr('81')} = ${or('4')}`,
          steps: [
            `Ons vra: tot watter ${or('mag')} moet ${bl('3')} verhef word om ${gr('81')} te kry?`,
            `Werk deur die magte van ${bl('3')}: 3¹ = 3, 3² = 9, 3³ = 27, <strong>3⁴ = 81</strong>.`,
            `Aangesien ${bl('3')}<sup>${or('4')}</sup> = ${gr('81')}, het ons <strong>log<sub>${bl('3')}</sub> ${gr('81')} = ${or('4')}</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the definition of a logarithm and how to convert freely between logarithmic form and exponential form" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — STANDARD LOGARITHM LAWS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'standard-logarithm-laws',
      title: 'Standaard Logaritmewette',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik vier standaardwette om logaritmiese uitdrukkings te vereenvoudig en te bereken. Hierdie wette geld vir enige geldige basis b (b &gt; 0, b ≠ 1) en positiewe argumente.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('produkwet')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwosiëntwet')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('magswet')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verandering van basis')}</span>` +
        `</div>` +

        // ── Laws reference ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier wette</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Produkwet:</strong>&nbsp; log<sub>b</sub>(AB) = log<sub>b</sub>A + log<sub>b</sub>B<br><span style="color:#6b7280;font-size:13px;">ʼn Produk binne die log verdeel in ʼn som van logs.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Kwosiëntwet:</strong>&nbsp; log<sub>b</sub>(A/B) = log<sub>b</sub>A − log<sub>b</sub>B<br><span style="color:#6b7280;font-size:13px;">ʼn Kwosiënt binne die log verdeel in ʼn verskil van logs.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Magswet:</strong>&nbsp; log<sub>b</sub>(Aⁿ) = n · log<sub>b</sub>A<br><span style="color:#6b7280;font-size:13px;">ʼn Eksponent binne die log skuif na vore as ʼn vermenigvuldiger.</span></div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<div style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Verandering van basis:</strong>&nbsp; log<sub>b</sub>A = log<sub>c</sub>A / log<sub>c</sub>b<br><span style="color:#6b7280;font-size:13px;">Skakel om na enige nuwe basis c — nuttig vir sakrekenaar-berekening (gebruik c = 10 of c = e).</span></div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sakrekenaar-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wetenskaplike sakrekenaars het ʼn <strong>log</strong>-knoppie (basis 10) en ʼn <strong>ln</strong>-knoppie (basis e). Gebruik die ${re('formule vir verandering van basis')} om enige ander basis te bereken: log<sub>b</sub>A = log(A) / log(b).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig log₂(8 × 4) deur die produkwet te gebruik.',
          answer: `${bl('log₂(8 × 4)')} = 5`,
          steps: [
            `${bl('Produkwet:')} log<sub>2</sub>(8 × 4) = log<sub>2</sub>8 + log<sub>2</sub>4.`,
            `Bereken elke term: log<sub>2</sub>8 = 3 (aangesien 2³ = 8) en log<sub>2</sub>4 = 2 (aangesien 2² = 4).`,
            `Antwoord: 3 + 2 = <strong>5</strong>.`,
          ],
        },
        {
          question: 'Vereenvoudig log₃(81/9) deur die kwosiëntwet te gebruik.',
          answer: `${or('log₃(81/9)')} = 2`,
          steps: [
            `${or('Kwosiëntwet:')} log<sub>3</sub>(81/9) = log<sub>3</sub>81 − log<sub>3</sub>9.`,
            `Bereken elke term: log<sub>3</sub>81 = 4 (aangesien 3⁴ = 81) en log<sub>3</sub>9 = 2 (aangesien 3² = 9).`,
            `Antwoord: 4 − 2 = <strong>2</strong>.`,
          ],
        },
        {
          question: 'Vereenvoudig log₂(8³) deur die magswet te gebruik.',
          answer: `${gr('log₂(8³)')} = 9`,
          steps: [
            `${gr('Magswet:')} log<sub>2</sub>(8³) = 3 · log<sub>2</sub>8.`,
            `Bereken: log<sub>2</sub>8 = 3 (aangesien 2³ = 8).`,
            `Antwoord: 3 × 3 = <strong>9</strong>.`,
          ],
        },
        {
          question: 'Sipho gebruik ʼn sakrekenaar om log₅20 te bereken. Gebruik die formule vir verandering van basis.',
          answer: `${re('log₅20')} ≈ 1.861`,
          steps: [
            `${re('Formule vir verandering van basis:')} log<sub>5</sub>20 = log(20) / log(5).`,
            `Met ʼn sakrekenaar: log(20) ≈ 1.301 en log(5) ≈ 0.699.`,
            `Antwoord: 1.301 / 0.699 ≈ <strong>1.861</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating all four logarithm laws — product, quotient, power, and change of base — with worked examples for each" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING LOGARITHMIC AND EXPONENTIAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-log-exp-equations',
      title: 'Oplos van Logaritmiese en Eksponensiële Vergelykings',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Ons los vergelykings met logaritmes of eksponente op deur na behoefte tussen vorms om te skakel, die wette van logaritmes te gebruik om uitdrukkings te kombineer of te vereenvoudig, en logs op albei kante van ʼn eksponensiële vergelyking toe te pas wanneer die veranderlike in die eksponent is.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vergelykingsvorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omskakelingstap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing(s)')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: log₂x = 5.',
          answer: `${gr('x = 32')}`,
          steps: [
            `${or('Skakel om na eksponensiële vorm:')} log<sub>2</sub>x = 5 beteken 2<sup>5</sup> = x.`,
            `${gr('x = 2⁵ = 32')}.`,
          ],
        },
        {
          question: 'Los op vir x: 3ˣ = 20.',
          answer: `${gr('x ≈ 2.727')}`,
          steps: [
            `${or('Neem log van albei kante:')} log(3<sup>x</sup>) = log(20).`,
            `${or('Deur die magswet te gebruik:')} x · log 3 = log 20.`,
            `${gr('x = log 20 / log 3 ≈ 2.727')}.`,
          ],
        },
        {
          question: 'Los op vir x: log x + log(x − 3) = 1.',
          answer: `${gr('x = 5')} (x = −2 word verwerp)`,
          steps: [
            `${or('Kombineer deur die produkwet te gebruik:')} log(x(x − 3)) = 1.`,
            `${or('Skakel om na eksponensiële vorm:')} x(x − 3) = 10<sup>1</sup> = 10.`,
            `${bl('Vermenigvuldig uit en herrangskik:')} x² − 3x − 10 = 0.`,
            `${bl('Faktoriseer:')} (x − 5)(x + 2) = 0, dus x = 5 of x = −2.`,
            `Aangesien die logaritme van ʼn negatiewe getal onbepaald is, word x = −2 verwerp. ${gr('Slegs x = 5 is geldig')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving logarithmic and exponential equations — converting between forms, applying log laws, and checking for invalid solutions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE GRAPH OF y = logₐx
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'graph-of-log-function',
      title: 'Die Grafiek van y = logₐx',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Die grafiek van y = log<sub>a</sub>x is die inverse van y = a<sup>x</sup>, gespieël oor die lyn y = x. Vir a &gt; 1 neem die grafiek toe (dit gaan deur (1, 0), aangesien log<sub>a</sub>1 = 0 vir enige basis), met ʼn ${re('vertikale asimptoot')} by x = 0 (die grafiek raak of sny nooit die y-as nie, aangesien logs van nul of negatiewe getalle onbepaald is). Vir 0 &lt; a &lt; 1 neem die grafiek eerder af.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertikale asimptoot')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sleutelpunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toenemende / afnemende rigting')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skets y = log₂x deur sleutelpunte en die asimptoot te vind.',
          answer: `${re('Vertikale asimptoot: x = 0')}; ${bl('gaan deur (1, 0) en (2, 1)')}; ${gr('toenemend')}`,
          steps: [
            `${re('Vertikale asimptoot:')} x = 0 — die grafiek nader die y-as, maar sny dit nooit nie.`,
            `${bl('Sleutelpunt:')} (1, 0), aangesien log<sub>2</sub>1 = 0.`,
            `${bl('Nog ʼn punt:')} (2, 1), aangesien log<sub>2</sub>2 = 1.`,
            `${gr('Die grafiek neem gestadig toe')} soos x toeneem, maar baie stadig vir groot x-waardes.`,
          ],
        },
        {
          question: 'Lerato vergelyk y = log₂x met y = log₀.₅x. Beskryf die verskil.',
          answer: `y = log₀.₅x is ${gr('afnemend')} (anders as die ${gr('toenemende')} y = log₂x); albei deel dieselfde ${re('vertikale asimptoot (x = 0)')} en dieselfde ${bl('punt (1, 0)')}`,
          steps: [
            `Aangesien 0.5 &lt; 1, is y = log<sub>0.5</sub>x ʼn ${gr('afnemende funksie')} — anders as die ${gr('toenemende')} y = log<sub>2</sub>x.`,
            `Albei grafieke deel dieselfde ${re('vertikale asimptoot (x = 0)')} en dieselfde ${bl('sleutelpunt (1, 0)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video sketching the graph of y equals log base a of x — identifying the vertical asymptote, key points, and comparing increasing versus decreasing cases" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die horisontale asimptoot en y-afsnit van y = 2ˣ + 3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horisontale asimptoot (skryf as y = ...):',
          correctAnswer: 'y=3',
          correctAnswers: ['y=3', 'y = 3'],
          explanation: 'Die horisontale asimptoot is y = q. Hier is q = 3, dus is die asimptoot y = 3.',
        },
        {
          label: 'b) y-afsnit (skryf as koördinate):',
          correctAnswer: '(0,4)',
          correctAnswers: ['(0,4)', '(0, 4)', '4'],
          explanation: 'Stel x = 0: y = 2⁰ + 3 = 1 + 3 = 4. Die y-afsnit is (0, 4).',
        },
      ],
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die horisontale asimptoot van y = 5 · (0.4)ˣ − 1, en gee aan of die funksie groei of verval.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Horisontale asimptoot (skryf as y = ...):',
          correctAnswer: 'y=-1',
          correctAnswers: ['y=-1', 'y = -1'],
          explanation: 'q = −1, dus is die horisontale asimptoot y = −1.',
        },
        {
          label: 'b) Groei of verval:',
          correctAnswer: 'verval',
          correctAnswers: ['verval', 'verval nie'],
          explanation: 'Aangesien b = 0.4 en 0 < 0.4 < 1, verval die funksie soos x toeneem.',
        },
      ],
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho vergelyk y = 3ˣ met y = 3ˣ + 5. Beskryf die verwantskap tussen die twee grafieke.',
      answer: 'Albei het dieselfde vorm en groei, maar y = 3ˣ + 5 is 5 eenhede opwaarts geskuif, wat die asimptoot van y = 0 na y = 5 beweeg.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skakel log₄ 16 = 2 om na eksponensiële vorm.',
      answer: '4² = 16',
      checkMode: 'auto',
      correctAnswer: '4^2=16',
      correctAnswers: ['4^2=16', '4²=16', '4^2 = 16', '4² = 16'],
      explanation: 'log₄ 16 = 2 beteken die basis 4 moet tot die mag 2 verhef word om 16 te gee: 4² = 16.',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skakel 6³ = 216 om na logaritmiese vorm.',
      answer: 'log₆ 216 = 3',
      checkMode: 'auto',
      correctAnswer: 'log6(216)=3',
      correctAnswers: ['log6(216)=3', 'log6 216=3', 'log_6(216)=3'],
      explanation: '6³ = 216 beteken log₆ 216 = 3.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken log₅ 125.',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Vra: tot watter mag moet 5 verhef word om 125 te kry? 5³ = 125, dus is log₅ 125 = 3.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê log₂ 0 is gelyk aan 0. Is hy korrek? Verduidelik.',
      answer: 'Nee — log van 0 is onbepaald, aangesien daar geen mag is waartoe jy ʼn positiewe basis kan verhef om 0 te gee nie.',
      checkMode: 'self',
    },

    // ── Q8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig log₃(9 × 27) deur die produkwet te gebruik.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'Produkwet: log₃(9 × 27) = log₃ 9 + log₃ 27 = 2 + 3 = 5.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig log₂(64 ÷ 8) deur die kwosiëntwet te gebruik.',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Kwosiëntwet: log₂(64 ÷ 8) = log₂ 64 − log₂ 8 = 6 − 3 = 3.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vereenvoudig log₅(125²) deur die magswet te gebruik, en wys jou werk.',
      answer: 'log₅(125²) = 2 · log₅ 125 = 2 × 3 = 6.',
      checkMode: 'self',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die formule vir verandering van basis om log₇ 50 tot 3 desimale plekke te bereken.',
      answer: 'log₇ 50 = log(50) / log(7) ≈ 1.699 / 0.845 ≈ 2.011.',
      checkMode: 'self',
    },

    // ── Q12 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: log₃ x = 4.',
      answer: 'x = 81',
      checkMode: 'auto',
      correctAnswer: '81',
      correctAnswers: ['81', 'x=81', 'x = 81'],
      explanation: 'Skakel om na eksponensiële vorm: x = 3⁴ = 81.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: 2ˣ = 15. Gee jou antwoord tot 3 desimale plekke.',
      answer: 'x ≈ 3.907',
      checkMode: 'auto',
      correctAnswer: '3.907',
      correctAnswers: ['3.907', '≈3.907', 'x=3.907', 'x ≈ 3.907'],
      explanation: 'Neem log van albei kante: x · log 2 = log 15. x = log 15 / log 2 ≈ 1.176 / 0.301 ≈ 3.907.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: log x + log(x − 2) = log 15.',
      answer: 'log(x(x − 2)) = log 15. x(x − 2) = 15. x² − 2x − 15 = 0. (x − 5)(x + 3) = 0. x = 5 of x = −3 (verwerp, aangesien log van ʼn negatiewe getal onbepaald is). x = 5.',
      checkMode: 'self',
    },

    // ── Q15 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gee die vertikale asimptoot van y = log₃ x.',
      answer: 'x = 0',
      checkMode: 'auto',
      correctAnswer: 'x=0',
      correctAnswers: ['x=0', 'x = 0'],
      explanation: 'Die grafiek van y = log₃ x het ʼn vertikale asimptoot by x = 0. Logaritmes is onbepaald vir x ≤ 0.',
    },

    // ── Q16 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vir y = log₅ x, gee die koördinate van die punt waar die grafiek y = 0 sny.',
      answer: '(1, 0)',
      checkMode: 'auto',
      correctAnswer: '(1,0)',
      correctAnswers: ['(1,0)', '(1, 0)', '1,0'],
      explanation: 'Stel y = 0: log₅ x = 0 → x = 5⁰ = 1. Die grafiek sny die x-as by (1, 0).',
    },

    // ── Q17 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê y = log₀.₃ x is ʼn toenemende funksie. Is sy korrek? Verduidelik.',
      answer: 'Nee — aangesien die basis 0.3 tussen 0 en 1 is, is dit ʼn afnemende funksie, nie toenemend nie.',
      checkMode: 'self',
    },

    // ── Q18 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: log₂(x + 3) = 4.',
      answer: 'Skakel om na eksponensiële vorm: x + 3 = 2⁴ = 16. x = 13.',
      checkMode: 'self',
    },

    // ── Q19 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die inverse van f(x) = log₄ x, en verduidelik waarom dit sin maak gegewe die verwantskap tussen eksponensiële en logaritmiese funksies.',
      answer: 'f⁻¹(x) = 4ˣ. Dit maak sin aangesien logaritmiese en eksponensiële funksies per definisie inverses van mekaar is — om tussen log- en eksponensiële vorm om te skakel, is dieselfde bewerking as om die inverse te vind.',
      checkMode: 'self',
    },

    // ── Q20 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: log(x²) = 4, en oorweeg albei moontlike oplossings.',
      answer: 'x² = 10⁴ = 10 000. x = ±100 (albei waardes is geldig aangesien x² altyd positief is, ongeag die teken van x).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het eksponensiële en logaritmiese funksies bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het eksponensiële en logaritmiese funksies bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
