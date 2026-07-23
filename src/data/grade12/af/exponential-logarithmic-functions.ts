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
          question: 'Skets y = 3 · (0,5)ˣ − 2 deur die horisontale asimptoot en y-afsnit te vind.',
          answer: `${re('Horisontale asimptoot: y = −2')}; y-afsnit: (0, 1); die grafiek ${or('verval')} soos x toeneem`,
          steps: [
            `${re('Horisontale asimptoot:')} q = −2, dus is die asimptoot die lyn <strong>y = −2</strong>.`,
            `<strong>y-afsnit:</strong> Stel x = 0 → y = 3 · (0,5)⁰ − 2 = 3 · 1 − 2 = <strong>1</strong>. Die grafiek gaan deur die punt (0, 1).`,
            `<strong>Gedrag:</strong> Aangesien b = 0,5 en ${or('0 < 0,5 < 1')}, ${or('verval')} die funksie — die grafiek daal soos x toeneem en nader y = −2 van bo af.`,
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
        'Kort video wat die eksponensiële funksie y = a maal b tot die mag x plus q hersien, en wys hoe om die horisontale asimptoot, y-afsnit, en of die grafiek groei of verval, te identifiseer',
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
        'Kort video wat die definisie van \'n logaritme verduidelik en hoe om vrylik tussen logaritmiese vorm en eksponensiële vorm om te skakel',
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
          answer: `${re('log₅20')} ≈ 1,861`,
          steps: [
            `${re('Formule vir verandering van basis:')} log<sub>5</sub>20 = log(20) / log(5).`,
            `Met ʼn sakrekenaar: log(20) ≈ 1,301 en log(5) ≈ 0,699.`,
            `Antwoord: 1,301 / 0,699 ≈ <strong>1,861</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat al vier logaritmewette demonstreer — produk, kwosiënt, mag, en verandering van grondtal — met uitgewerkte voorbeelde vir elkeen',
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
          answer: `${gr('x ≈ 2,727')}`,
          steps: [
            `${or('Neem log van albei kante:')} log(3<sup>x</sup>) = log(20).`,
            `${or('Deur die magswet te gebruik:')} x · log 3 = log 20.`,
            `${gr('x = log 20 / log 3 ≈ 2,727')}.`,
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
        'Kort video wat logaritmiese en eksponensiële vergelykings oplos — deur tussen vorms om te skakel, logwette toe te pas, en vir ongeldige oplossings te toets',
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
          question: 'Lerato vergelyk y = log₂x met y = log₀,₅x. Beskryf die verskil.',
          answer: `y = log₀,₅x is ${gr('afnemend')} (anders as die ${gr('toenemende')} y = log₂x); albei deel dieselfde ${re('vertikale asimptoot (x = 0)')} en dieselfde ${bl('punt (1, 0)')}`,
          steps: [
            `Aangesien 0,5 &lt; 1, is y = log<sub>0,5</sub>x ʼn ${gr('afnemende funksie')} — anders as die ${gr('toenemende')} y = log<sub>2</sub>x.`,
            `Albei grafieke deel dieselfde ${re('vertikale asimptoot (x = 0)')} en dieselfde ${bl('sleutelpunt (1, 0)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die grafiek van y is gelyk aan log tot die grondtal a van x skets — deur die vertikale asimptoot en sleutelpunte te identifiseer, en stygende teenoor dalende gevalle te vergelyk',
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
      question: 'Vind die horisontale asimptoot van y = 5 · (0,4)ˣ − 1, en gee aan of die funksie groei of verval.',
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
          explanation: 'Aangesien b = 0,4 en 0 < 0,4 < 1, verval die funksie soos x toeneem.',
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
      answer: 'log₇ 50 = log(50) / log(7) ≈ 1,699 / 0,845 ≈ 2,011.',
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
      answer: 'x ≈ 3,907',
      checkMode: 'auto',
      correctAnswer: '3,907',
      correctAnswers: ['3,907', '≈3,907', 'x=3,907', 'x ≈ 3,907'],
      explanation: 'Neem log van albei kante: x · log 2 = log 15. x = log 15 / log 2 ≈ 1,176 / 0,301 ≈ 3,907.',
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
      question: 'Lerato sê y = log₀,₃ x is ʼn toenemende funksie. Is sy korrek? Verduidelik.',
      answer: 'Nee — aangesien die basis 0,3 tussen 0 en 1 is, is dit ʼn afnemende funksie, nie toenemend nie.',
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

    // ── Q21 Hard (probleemoplossing: werk terug om 'n onbekende grondtal te vind) ──
    {
      difficulty: 'Hard',
      question: 'Die vergelyking logₖ x + logₖ(x + 3) = 1 het x = 2 as een van sy oplossings. Bepaal die waarde van k, en toon dat jou antwoord aan die vergelyking voldoen.',
      answer: 'Gebruik die produkwet: logₖ x + logₖ(x + 3) = logₖ(x(x + 3)) = 1. Vervang x = 2: logₖ(2 × 5) = logₖ 10 = 1. Skakel om na eksponensiële vorm: k¹ = 10, dus k = 10. Toets: log₁₀ 2 + log₁₀ 5 ≈ 0,301 + 0,699 = 1 ✓, en k = 10 voldoen aan k > 0 en k ≠ 1.',
      checkMode: 'self',
    },

    // ── Q22 Hard (probleemoplossing: bewys 'n identiteit deur wette te kombineer) ──
    {
      difficulty: 'Hard',
      question: 'Toon aan dat log₂ x · logₓ 8 = 3 vir alle x > 0, x ≠ 1.',
      answer: 'Gebruik die formule vir verandering van basis met basis 2: logₓ 8 = log₂ 8 / log₂ x = 3 / log₂ x, aangesien log₂ 8 = 3 (want 2³ = 8). Dus is log₂ x · logₓ 8 = log₂ x · (3 / log₂ x) = 3. Dit geld vir elke x > 0, x ≠ 1, aangesien dit presies die beperkings is wat nodig is sodat logₓ 8 bepaald is — spesifiek verseker x ≠ 1 dat log₂ x ≠ 0, sodat die deling altyd geldig is.',
      checkMode: 'self',
    },

    // ── Q23 Hard (probleemoplossing: stel 'n groeimodel op en los dit op) ─────
    {
      difficulty: 'Hard',
      question: 'ʼn Bakteriekultuur verdubbel in grootte elke h ure. As n die aantal verdubbelings is wat in t ure plaasvind (dus n = t / h), word die bevolking na tyd t gegee deur N = N₀ · 2ⁿ, waar N₀ die aanvanklike aantal bakterieë is. ʼn Kultuur wat met 150 bakterieë begin, groei na 900 bakterieë na 4 ure. Bepaal die verdubbelingstyd h, korrek tot 3 desimale plekke.',
      answer: 'Vind eers n, die aantal verdubbelings, deur N = N₀ · 2ⁿ te gebruik: 900 = 150 · 2ⁿ, dus 2ⁿ = 6. Neem logs: n = log 6 / log 2 (verandering van basis) ≈ 0,778 / 0,301 ≈ 2,585. Aangesien n = t / h en t = 4, is die verdubbelingstyd h = t / n = 4 / 2,585 ≈ 1,548 ure.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-2 Skakel om tussen eksp<->log vorm (Maklik) | 3-5 Bereken 'n log
    // met die definisie (Maklik-Medium) | 6-9 Logwette — produk/kwosiënt/mag (Medium) |
    // 10-13 Los logvergelykings op (Medium) | 14-16 Los eksponensiële vergelykings op /
    // verandering van basis (Medium-Moeilik) | 17-19 Inverse verwantskap & grafiekkenmerke (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Skakel log₂ 32 = 5 om na eksponensiële vorm.', answer: '2⁵ = 32', checkMode: 'auto', correctAnswer: '2^5=32', correctAnswers: ['2^5=32', '2⁵=32', '2^5 = 32', '2⁵ = 32'], explanation: 'log₂ 32 = 5 beteken die basis 2 moet tot die mag 5 verhef word om 32 te gee: 2⁵ = 32. ✓' },
        { difficulty: 'Easy', question: 'Skakel 7² = 49 om na logaritmiese vorm.', answer: 'log₇ 49 = 2', checkMode: 'auto', correctAnswer: 'log7(49)=2', correctAnswers: ['log7(49)=2', 'log7 49=2', 'log_7(49)=2'], explanation: '7² = 49 beteken log₇ 49 = 2. ✓' },
        { difficulty: 'Easy', question: 'Skakel log₄ x = 3 om na eksponensiële vorm.', answer: 'x = 4³', checkMode: 'auto', correctAnswer: 'x=4^3', correctAnswers: ['x=4^3', 'x=4³', '4^3', '4³', '64', 'x=64'], explanation: 'log₄ x = 3 beteken x = 4³ (wat gelyk is aan 64). ✓' },

        { difficulty: 'Easy-Medium', question: 'Bereken log₂ 64.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Vra: tot watter mag moet 2 verhef word om 64 te kry? 2⁶ = 64, dus is log₂ 64 = 6. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₆ 36.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vra: tot watter mag moet 6 verhef word om 36 te kry? 6² = 36, dus is log₆ 36 = 2. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₇ 343.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Vra: tot watter mag moet 7 verhef word om 343 te kry? 7³ = 343, dus is log₇ 343 = 3. ✓' },

        { difficulty: 'Medium', question: 'Vereenvoudig log₂(16 × 8) deur die produkwet te gebruik.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Produkwet: log₂(16 × 8) = log₂ 16 + log₂ 8 = 4 + 3 = 7. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₂(128 ÷ 16) deur die kwosiëntwet te gebruik.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Kwosiëntwet: log₂(128 ÷ 16) = log₂ 128 − log₂ 16 = 7 − 4 = 3. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₂(32²) deur die magswet te gebruik.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Magswet: log₂(32²) = 2 · log₂ 32 = 2 × 5 = 10. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₃(9 × 27) − log₃ 3 deur die produk- en kwosiëntwette te gebruik.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'log₃(9 × 27) = log₃ 9 + log₃ 27 = 2 + 3 = 5. Dan 5 − log₃ 3 = 5 − 1 = 4. ✓' },

        { difficulty: 'Medium', question: 'Los op vir x: log₂ x = 6.', answer: 'x = 64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', 'x=64', 'x = 64'], explanation: 'Skakel om na eksponensiële vorm: x = 2⁶ = 64. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log₃(x + 5) = 3.', answer: 'x = 22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', 'x=22', 'x = 22'], explanation: 'Skakel om na eksponensiële vorm: x + 5 = 3³ = 27. x = 27 − 5 = 22. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log x + log(x − 8) = log 20.', answer: 'x = 10 (x = −2 word verwerp)', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'x=10', 'x = 10'], explanation: 'Kombineer: log(x(x − 8)) = log 20, dus x(x − 8) = 20. Vermenigvuldig uit: x² − 8x − 20 = 0. Faktoriseer: (x − 10)(x + 2) = 0, dus x = 10 of x = −2. Aangesien die log van ʼn negatiewe getal onbepaald is, word x = −2 verwerp, wat x = 10 laat. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log(x²) = 2, en oorweeg albei moontlike oplossings.', answer: 'x = ±10', checkMode: 'auto', correctAnswer: '±10', correctAnswers: ['±10', '+-10', '10 en -10', '-10 en 10', 'x=±10'], explanation: 'x² = 10² = 100, dus x = ±10 (albei is geldig aangesien x² altyd positief is, ongeag die teken van x). ✓' },

        { difficulty: 'Medium-Hard', question: 'Los op vir x: 2ˣ = 50. Gee jou antwoord tot 3 desimale plekke.', answer: 'x ≈ 5,644', checkMode: 'auto', correctAnswer: '5,644', correctAnswers: ['5,644', '≈5,644', 'x=5,644', 'x ≈ 5,644'], explanation: 'Neem log van albei kante: x · log 2 = log 50. x = log 50 / log 2 ≈ 1,699 / 0,301 ≈ 5,644. ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die formule vir verandering van basis om log₆ 200 tot 3 desimale plekke te bereken.', answer: 'log₆ 200 ≈ 2,957', checkMode: 'auto', correctAnswer: '2,957', correctAnswers: ['2,957', '≈2,957'], explanation: 'log₆ 200 = log(200) / log(6) ≈ 2,301 / 0,778 ≈ 2,957. ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: log₂(x − 1) + log₂ 3 = log₂ 18.', answer: 'x = 7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'x=7', 'x = 7'], explanation: 'Kombineer: log₂(3(x − 1)) = log₂ 18, dus 3(x − 1) = 18. x − 1 = 6, x = 7. Kontroleer: x − 1 = 6 > 0, dus geldig. ✓' },

        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = log₅ x, en verduidelik waarom dit sin maak gegewe die verwantskap tussen eksponensiële en logaritmiese funksies.', answer: 'f⁻¹(x) = 5ˣ. Dit maak sin aangesien logaritmiese en eksponensiële funksies per definisie inverses van mekaar is — om tussen log- en eksponensiële vorm om te skakel, is dieselfde bewerking as om die inverse te vind.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die grafiek van g(x) = 3ˣ het horisontale asimptoot y = 0 en gaan deur (0, 1) en (1, 3). Gee die vertikale asimptoot en twee sleutelpunte van g⁻¹(x) = log₃ x.', answer: 'Aangesien g⁻¹ g oor die lyn y = x spieël, word elke punt (a, b) op g die punt (b, a) op g⁻¹, en die horisontale asimptoot y = 0 word die vertikale asimptoot x = 0. Dus het g⁻¹(x) = log₃ x ʼn vertikale asimptoot x = 0, en gaan dit deur (1, 0) en (3, 1).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê dat omdat f(x) = 2ˣ ʼn toenemende funksie is, sy inverse f⁻¹(x) = log₂ x ook toenemend moet wees. Is hy korrek? Verduidelik deur gebruik te maak van die feit dat om ʼn grafiek oor y = x te spieël, of dit toeneem of afneem, behou.', answer: 'Ja, Sipho is korrek. Om ʼn toenemende grafiek oor die lyn y = x te spieël, lewer nog ʼn toenemende grafiek (spieëling ruil die rolle van die x- en y-asse om, maar keer nie die toenemende tendens om nie). Aangesien f(x) = 2ˣ vir alle x toeneem, neem sy inverse f⁻¹(x) = log₂ x ook vir alle x > 0 toe.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omskakeling tussen vorms, logwette, en die oplos van log- en eksponensiële vergelykings bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Skakel log₃ 243 = 5 om na eksponensiële vorm.', answer: '3⁵ = 243', checkMode: 'auto', correctAnswer: '3^5=243', correctAnswers: ['3^5=243', '3⁵=243', '3^5 = 243', '3⁵ = 243'], explanation: 'log₃ 243 = 5 beteken die basis 3 moet tot die mag 5 verhef word om 243 te gee: 3⁵ = 243. ✓' },
        { difficulty: 'Easy', question: 'Skakel 8² = 64 om na logaritmiese vorm.', answer: 'log₈ 64 = 2', checkMode: 'auto', correctAnswer: 'log8(64)=2', correctAnswers: ['log8(64)=2', 'log8 64=2', 'log_8(64)=2'], explanation: '8² = 64 beteken log₈ 64 = 2. ✓' },
        { difficulty: 'Easy', question: 'Skakel log₅ x = 4 om na eksponensiële vorm.', answer: 'x = 5⁴', checkMode: 'auto', correctAnswer: 'x=5^4', correctAnswers: ['x=5^4', 'x=5⁴', '5^4', '5⁴', '625', 'x=625'], explanation: 'log₅ x = 4 beteken x = 5⁴ (wat gelyk is aan 625). ✓' },

        { difficulty: 'Easy-Medium', question: 'Bereken log₃ 243.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Vra: tot watter mag moet 3 verhef word om 243 te kry? 3⁵ = 243, dus is log₃ 243 = 5. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₉ 81.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vra: tot watter mag moet 9 verhef word om 81 te kry? 9² = 81, dus is log₉ 81 = 2. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₄ 64.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Vra: tot watter mag moet 4 verhef word om 64 te kry? 4³ = 64, dus is log₄ 64 = 3. ✓' },

        { difficulty: 'Medium', question: 'Vereenvoudig log₃(27 × 9) deur die produkwet te gebruik.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Produkwet: log₃(27 × 9) = log₃ 27 + log₃ 9 = 3 + 2 = 5. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₃(243 ÷ 27) deur die kwosiëntwet te gebruik.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Kwosiëntwet: log₃(243 ÷ 27) = log₃ 243 − log₃ 27 = 5 − 3 = 2. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₃(9³) deur die magswet te gebruik.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Magswet: log₃(9³) = 3 · log₃ 9 = 3 × 2 = 6. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₂(8 × 16) − log₂ 4 deur die produk- en kwosiëntwette te gebruik.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'log₂(8 × 16) = log₂ 8 + log₂ 16 = 3 + 4 = 7. Dan 7 − log₂ 4 = 7 − 2 = 5. ✓' },

        { difficulty: 'Medium', question: 'Los op vir x: log₂ x = 7.', answer: 'x = 128', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128', 'x=128', 'x = 128'], explanation: 'Skakel om na eksponensiële vorm: x = 2⁷ = 128. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log₂(x + 6) = 4.', answer: 'x = 10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'x=10', 'x = 10'], explanation: 'Skakel om na eksponensiële vorm: x + 6 = 2⁴ = 16. x = 16 − 6 = 10. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log x + log(x − 4) = log 12.', answer: 'x = 6 (x = −2 word verwerp)', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x=6', 'x = 6'], explanation: 'Kombineer: log(x(x − 4)) = log 12, dus x(x − 4) = 12. Vermenigvuldig uit: x² − 4x − 12 = 0. Faktoriseer: (x − 6)(x + 2) = 0, dus x = 6 of x = −2. Aangesien die log van ʼn negatiewe getal onbepaald is, word x = −2 verwerp, wat x = 6 laat. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log(x²) = 3, en oorweeg albei moontlike oplossings, tot 3 desimale plekke waar nodig.', answer: 'x = ±31,623', checkMode: 'auto', correctAnswer: '±31,623', correctAnswers: ['±31,623', '+-31,623', '31,623 en -31,623', '-31,623 en 31,623', 'x=±31,623'], explanation: 'x² = 10³ = 1000, dus x = ±√1000 ≈ ±31,623 (albei is geldig aangesien x² altyd positief is, ongeag die teken van x). ✓' },

        { difficulty: 'Medium-Hard', question: 'Los op vir x: 3ˣ = 40. Gee jou antwoord tot 3 desimale plekke.', answer: 'x ≈ 3,358', checkMode: 'auto', correctAnswer: '3,358', correctAnswers: ['3,358', '≈3,358', 'x=3,358', 'x ≈ 3,358'], explanation: 'Neem log van albei kante: x · log 3 = log 40. x = log 40 / log 3 ≈ 1,602 / 0,477 ≈ 3,358. ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die formule vir verandering van basis om log₄ 60 tot 3 desimale plekke te bereken.', answer: 'log₄ 60 ≈ 2,953', checkMode: 'auto', correctAnswer: '2,953', correctAnswers: ['2,953', '≈2,953'], explanation: 'log₄ 60 = log(60) / log(4) ≈ 1,778 / 0,602 ≈ 2,953. ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: log₂(x − 2) + log₂ 5 = log₂ 25.', answer: 'x = 7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'x=7', 'x = 7'], explanation: 'Kombineer: log₂(5(x − 2)) = log₂ 25, dus 5(x − 2) = 25. x − 2 = 5, x = 7. Kontroleer: x − 2 = 5 > 0, dus geldig. ✓' },

        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = log₇ x, en verduidelik waarom dit sin maak gegewe die verwantskap tussen eksponensiële en logaritmiese funksies.', answer: 'f⁻¹(x) = 7ˣ. Dit maak sin aangesien logaritmiese en eksponensiële funksies per definisie inverses van mekaar is — om tussen log- en eksponensiële vorm om te skakel, is dieselfde bewerking as om die inverse te vind.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die grafiek van g(x) = 4ˣ het horisontale asimptoot y = 0 en gaan deur (0, 1) en (1, 4). Gee die vertikale asimptoot en twee sleutelpunte van g⁻¹(x) = log₄ x.', answer: 'Aangesien g⁻¹ g oor die lyn y = x spieël, word elke punt (a, b) op g die punt (b, a) op g⁻¹, en die horisontale asimptoot y = 0 word die vertikale asimptoot x = 0. Dus het g⁻¹(x) = log₄ x ʼn vertikale asimptoot x = 0, en gaan dit deur (1, 0) en (4, 1).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê dat omdat f(x) = (0,5)ˣ ʼn afnemende funksie is, sy inverse f⁻¹(x) = log₀,₅ x ook afnemend moet wees. Is sy korrek? Verduidelik deur gebruik te maak van die feit dat om ʼn grafiek oor y = x te spieël, of dit toeneem of afneem, behou.', answer: 'Ja, Lerato is korrek. Om ʼn afnemende grafiek oor die lyn y = x te spieël, lewer nog ʼn afnemende grafiek (spieëling ruil die rolle van die x- en y-asse om, maar keer nie die afnemende tendens om nie). Aangesien f(x) = (0,5)ˣ vir alle x afneem, neem sy inverse f⁻¹(x) = log₀,₅ x ook vir alle x > 0 af.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan vol vertroue omskakel tussen vorms, logwette toepas, en log- en eksponensiële vergelykings oplos.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, vars getalle, meer klem op grafieklees
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Skakel log₂ 128 = 7 om na eksponensiële vorm.', answer: '2⁷ = 128', checkMode: 'auto', correctAnswer: '2^7=128', correctAnswers: ['2^7=128', '2⁷=128', '2^7 = 128', '2⁷ = 128'], explanation: 'log₂ 128 = 7 beteken die basis 2 moet tot die mag 7 verhef word om 128 te gee: 2⁷ = 128. ✓' },
        { difficulty: 'Easy', question: 'Skakel 9² = 81 om na logaritmiese vorm.', answer: 'log₉ 81 = 2', checkMode: 'auto', correctAnswer: 'log9(81)=2', correctAnswers: ['log9(81)=2', 'log9 81=2', 'log_9(81)=2'], explanation: '9² = 81 beteken log₉ 81 = 2. ✓' },
        { difficulty: 'Easy', question: 'Skakel log₆ x = 2 om na eksponensiële vorm.', answer: 'x = 6²', checkMode: 'auto', correctAnswer: 'x=6^2', correctAnswers: ['x=6^2', 'x=6²', '6^2', '6²', '36', 'x=36'], explanation: 'log₆ x = 2 beteken x = 6² (wat gelyk is aan 36). ✓' },

        { difficulty: 'Easy-Medium', question: 'Bereken log₂ 128.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Vra: tot watter mag moet 2 verhef word om 128 te kry? 2⁷ = 128, dus is log₂ 128 = 7. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₈ 64.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Vra: tot watter mag moet 8 verhef word om 64 te kry? 8² = 64, dus is log₈ 64 = 2. ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken log₅ 625.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Vra: tot watter mag moet 5 verhef word om 625 te kry? 5⁴ = 625, dus is log₅ 625 = 4. ✓' },

        { difficulty: 'Medium', question: 'Vereenvoudig log₂(8 × 32) deur die produkwet te gebruik.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Produkwet: log₂(8 × 32) = log₂ 8 + log₂ 32 = 3 + 5 = 8. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₄(1024 ÷ 16) deur die kwosiëntwet te gebruik.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Kwosiëntwet: log₄(1024 ÷ 16) = log₄ 1024 − log₄ 16 = 5 − 2 = 3. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₂(16²) deur die magswet te gebruik.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Magswet: log₂(16²) = 2 · log₂ 16 = 2 × 4 = 8. ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig log₅(25 × 125) − log₅ 5 deur die produk- en kwosiëntwette te gebruik.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'log₅(25 × 125) = log₅ 25 + log₅ 125 = 2 + 3 = 5. Dan 5 − log₅ 5 = 5 − 1 = 4. ✓' },

        { difficulty: 'Medium', question: 'Los op vir x: log₂ x = 8.', answer: 'x = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', 'x=256', 'x = 256'], explanation: 'Skakel om na eksponensiële vorm: x = 2⁸ = 256. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log₅(x + 3) = 2.', answer: 'x = 22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', 'x=22', 'x = 22'], explanation: 'Skakel om na eksponensiële vorm: x + 3 = 5² = 25. x = 25 − 3 = 22. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log x + log(x − 6) = log 16.', answer: 'x = 8 (x = −2 word verwerp)', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'x=8', 'x = 8'], explanation: 'Kombineer: log(x(x − 6)) = log 16, dus x(x − 6) = 16. Vermenigvuldig uit: x² − 6x − 16 = 0. Faktoriseer: (x − 8)(x + 2) = 0, dus x = 8 of x = −2. Aangesien die log van ʼn negatiewe getal onbepaald is, word x = −2 verwerp, wat x = 8 laat. ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: log(x²) = 6, en oorweeg albei moontlike oplossings.', answer: 'x = ±1000', checkMode: 'auto', correctAnswer: '±1000', correctAnswers: ['±1000', '+-1000', '1000 en -1000', '-1000 en 1000', 'x=±1000'], explanation: 'x² = 10⁶ = 1 000 000, dus x = ±1000 (albei is geldig aangesien x² altyd positief is, ongeag die teken van x). ✓' },

        { difficulty: 'Medium-Hard', question: 'Los op vir x: 5ˣ = 70. Gee jou antwoord tot 3 desimale plekke.', answer: 'x ≈ 2,640', checkMode: 'auto', correctAnswer: '2,640', correctAnswers: ['2,640', '2,64', '≈2,640', 'x=2,640', 'x ≈ 2,640'], explanation: 'Neem log van albei kante: x · log 5 = log 70. x = log 70 / log 5 ≈ 1,845 / 0,699 ≈ 2,640. ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die formule vir verandering van basis om log₉ 150 tot 3 desimale plekke te bereken.', answer: 'log₉ 150 ≈ 2,280', checkMode: 'auto', correctAnswer: '2,280', correctAnswers: ['2,280', '2,28', '≈2,280'], explanation: 'log₉ 150 = log(150) / log(9) ≈ 2,176 / 0,954 ≈ 2,280. ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: log₃(x − 1) + log₃ 4 = log₃ 20.', answer: 'x = 6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x=6', 'x = 6'], explanation: 'Kombineer: log₃(4(x − 1)) = log₃ 20, dus 4(x − 1) = 20. x − 1 = 5, x = 6. Kontroleer: x − 1 = 5 > 0, dus geldig. ✓' },

        { difficulty: 'Hard', question: 'Vind die inverse van f(x) = log₆ x, en verduidelik waarom dit sin maak gegewe die verwantskap tussen eksponensiële en logaritmiese funksies.', answer: 'f⁻¹(x) = 6ˣ. Dit maak sin aangesien logaritmiese en eksponensiële funksies per definisie inverses van mekaar is — om tussen log- en eksponensiële vorm om te skakel, is dieselfde bewerking as om die inverse te vind.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die grafiek van g(x) = 5ˣ het horisontale asimptoot y = 0 en gaan deur (0, 1) en (1, 5). Gee die vertikale asimptoot en twee sleutelpunte van g⁻¹(x) = log₅ x.', answer: 'Aangesien g⁻¹ g oor die lyn y = x spieël, word elke punt (a, b) op g die punt (b, a) op g⁻¹, en die horisontale asimptoot y = 0 word die vertikale asimptoot x = 0. Dus het g⁻¹(x) = log₅ x ʼn vertikale asimptoot x = 0, en gaan dit deur (1, 0) en (5, 1).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê dat aangesien f(x) = log₂ x ʼn vertikale asimptoot by x = 0 het, sy inverse f⁻¹(x) = 2ˣ ook ʼn vertikale asimptoot moet hê. Is hy korrek? Verduidelik wat met ʼn asimptoot gebeur wanneer ʼn grafiek oor y = x gespieël word.', answer: 'Nee, Thabo is nie korrek nie. Wanneer ʼn grafiek oor y = x gespieël word, word ʼn vertikale asimptoot ʼn horisontale asimptoot (die rolle van x en y ruil om). Dus word die vertikale asimptoot x = 0 van f(x) = log₂ x die horisontale asimptoot y = 0 van f⁻¹(x) = 2ˣ — die inverse het glad nie ʼn vertikale asimptoot nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan logwette toepas, log- en eksponensiële vergelykings oplos, en met selfvertroue oor eksponensiële-log inverses redeneer.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
