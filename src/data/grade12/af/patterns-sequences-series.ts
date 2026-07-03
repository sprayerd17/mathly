import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// first term        → blue   (#2563eb)
// common difference / common ratio / lower limit → orange (#ea580c)
// general term / upper limit / term formula      → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patrone, Rye en Reekse',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: ARITHMETIC SEQUENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'arithmetic-sequences',
      title: 'Hersiening — Rekenkundige Rye',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Rekenkundige ry het ʼn <strong>konstante verskil</strong> (d) tussen opeenvolgende terme. Die algemene-term-formule is T<sub>n</sub> = ${bl('a')} + (n − 1)${or('d')}, waar ${bl('a')} die eerste term is en ${or('d')} die gemeenskaplike verskil. Ons gebruik hierdie formule om enige term in die ry te vind sonder om elke term voor dit uit te skryf.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste term (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemeenskaplike verskil (d)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('algemene term (Tₙ)')}</span>` +
        `</div>` +

        // ── Formula card ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene-term-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}</p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Eerste term (a)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginwaarde T<sub>1</sub> van die ry.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gemeenskaplike verskil (d)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste bedrag wat by elke term getel word om die volgende te kry. d = T<sub>2</sub> − T<sub>1</sub>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Algemene term (Tₙ)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Formule wat die waarde van enige term in die ry direk gee.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">d kan negatief wees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ${or('d')} negatief is, is die ry <strong>afnemend</strong> — elke term is kleiner as die vorige een. Die formule werk steeds presies dieselfde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die 15de term van die rekenkundige ry 4, 9, 14, 19, …',
          answer: `${gr('T₁₅')} = ${gr('74')}`,
          steps: [
            `Identifiseer die waardes: ${bl('a')} = ${bl('4')}, ${or('d')} = 9 − 4 = ${or('5')}.`,
            `Skryf die algemene-term-formule: ${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}.`,
            `Vervang n = 15: ${gr('T<sub>15</sub>')} = ${bl('4')} + (15 − 1)(${or('5')}).`,
            `Vereenvoudig: ${gr('T<sub>15</sub>')} = ${bl('4')} + 14 × ${or('5')} = ${bl('4')} + 70 = ${gr('74')}.`,
          ],
        },
        {
          question: 'Sipho het ʼn rekenkundige ry met a = 10 en d = −3. Vind T₂₀.',
          answer: `${gr('T₂₀')} = ${gr('−47')}`,
          steps: [
            `Identifiseer die waardes: ${bl('a')} = ${bl('10')}, ${or('d')} = ${or('−3')}.`,
            `Skryf die algemene-term-formule: ${gr('T<sub>n</sub>')} = ${bl('a')} + (n − 1)${or('d')}.`,
            `Vervang n = 20: ${gr('T<sub>20</sub>')} = ${bl('10')} + (20 − 1)(${or('−3')}).`,
            `Vereenvoudig: ${gr('T<sub>20</sub>')} = ${bl('10')} + 19 × (${or('−3')}) = ${bl('10')} − 57 = ${gr('−47')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining arithmetic sequences, the general term formula Tₙ = a + (n−1)d, and how to find any term using worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — REVISION: GEOMETRIC SEQUENCES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-sequences',
      title: 'Hersiening — Meetkundige Rye',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Meetkundige ry het ʼn <strong>konstante verhouding</strong> (r) tussen opeenvolgende terme — elke term word gevind deur die vorige term met r te vermenigvuldig. Die algemene-term-formule is T<sub>n</sub> = ${bl('a')} · ${or('r')}<sup>n−1</sup>, waar ${bl('a')} die eerste term is en ${or('r')} die gemeenskaplike verhouding.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste term (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemeenskaplike verhouding (r)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('algemene term (Tₙ)')}</span>` +
        `</div>` +

        // ── Formula card ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene-term-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup></p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Eerste term (a)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginwaarde T<sub>1</sub> van die ry.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gemeenskaplike verhouding (r)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste vermenigvuldiger tussen terme. r = T<sub>2</sub> ÷ T<sub>1</sub>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Algemene term (Tₙ)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Formule wat die waarde van enige term direk gee sonder om alle vorige terme uit te skryf.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">r tussen 0 en 1</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer 0 &lt; ${or('r')} &lt; 1, is die ry <strong>afnemend</strong> — die terme word kleiner en nader aan nul. Dit word ʼn <strong>konvergente</strong> meetkundige ry genoem.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die 8ste term van die meetkundige ry 3, 6, 12, 24, …',
          answer: `${gr('T₈')} = ${gr('384')}`,
          steps: [
            `Identifiseer die waardes: ${bl('a')} = ${bl('3')}, ${or('r')} = 6 ÷ 3 = ${or('2')}.`,
            `Skryf die algemene-term-formule: ${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup>.`,
            `Vervang n = 8: ${gr('T<sub>8</sub>')} = ${bl('3')} × ${or('2')}<sup>7</sup>.`,
            `Bereken: ${or('2')}<sup>7</sup> = 128. Daarom ${gr('T<sub>8</sub>')} = ${bl('3')} × 128 = ${gr('384')}.`,
          ],
        },
        {
          question: 'Lerato het ʼn meetkundige ry met a = 100 en r = 0,5. Vind T₆.',
          answer: `${gr('T₆')} = ${gr('3,125')}`,
          steps: [
            `Identifiseer die waardes: ${bl('a')} = ${bl('100')}, ${or('r')} = ${or('0,5')}.`,
            `Skryf die algemene-term-formule: ${gr('T<sub>n</sub>')} = ${bl('a')} · ${or('r')}<sup>n−1</sup>.`,
            `Vervang n = 6: ${gr('T<sub>6</sub>')} = ${bl('100')} × ${or('0,5')}<sup>5</sup>.`,
            `Bereken: ${or('0,5')}<sup>5</sup> = 0,03125. Daarom ${gr('T<sub>6</sub>')} = ${bl('100')} × 0,03125 = ${gr('3,125')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining geometric sequences, the general term formula Tₙ = a · rⁿ⁻¹, and how to find any term using worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIGMA NOTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sigma-notation',
      title: 'Sigma-notasie',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">Sigma-notasie (Σ) bied ʼn kompakte manier om die som van ʼn ry terme te skryf. ∑ (vanaf i = ${bl('1')} tot ${or('n')}) van ${gr('f(i)')} beteken ons vervang i = 1, dan i = 2, ensovoorts tot by i = n, en tel al die resulterende waardes bymekaar.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ondergrens')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bogrens')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('termformule')}</span>` +
        `</div>` +

        // ── Anatomy of sigma notation ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sigma-notasie lees</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">` +
        `∑ <sub style="font-size:0.7em;">i = ${bl('1')}</sub><sup style="font-size:0.7em;">${or('n')}</sup> ${gr('f(i)')}` +
        `</p>` +
        `</div>` +

        // ── Key parts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteldele</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ondergrens</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginwaarde van die indeksveranderlike (geskryf onder Σ).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Bogrens</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die eindwaarde van die indeksveranderlike (geskryf bo Σ).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Termformule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die uitdrukking in terme van die indeksveranderlike wat geëvalueer en opgetel word.</p>` +
        `</div>` +

        `</div>` +

        // ── How to evaluate ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om sigma-notasie te evalueer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Begin by die ${bl('ondergrens')} — vervang daardie waarde in die ${gr('termformule')} en noteer die resultaat.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Verhoog die indeks met 1 en herhaal totdat jy die ${or('bogrens')} bereik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Tel al die ${gr('resultate')} bymekaar — dit is die waarde van die sigma-uitdrukking.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die ondergrens hoef nie 1 te wees nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('ondergrens')} kan enige heelgetal wees, insluitend 0 of ʼn waarde groter as 1. Begin altyd om te vervang vanaf watter waarde ook al onder Σ geskryf staan.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evalueer ∑ (vanaf k = 1 tot 4) van (2k + 1).',
          answer: `Som = ${gr('24')}`,
          steps: [
            `Identifiseer die dele: ${bl('ondergrens')} = ${bl('1')}, ${or('bogrens')} = ${or('4')}, ${gr('termformule')} = ${gr('2k + 1')}.`,
            `Vervang k = ${bl('1')}: ${gr('2(1) + 1')} = ${gr('3')}.`,
            `Vervang k = 2: ${gr('2(2) + 1')} = ${gr('5')}.`,
            `Vervang k = 3: ${gr('2(3) + 1')} = ${gr('7')}.`,
            `Vervang k = ${or('4')}: ${gr('2(4) + 1')} = ${gr('9')}.`,
            `Tel die resultate bymekaar: 3 + 5 + 7 + 9 = ${gr('24')}.`,
          ],
        },
        {
          question: 'Skryf die som 2 + 4 + 6 + 8 + 10 met sigma-notasie.',
          answer: `∑ (vanaf k = ${bl('1')} tot ${or('5')}) van ${gr('2k')}`,
          steps: [
            `Identifiseer die patroon: elke term is ʼn ewe getal, dus is die ${gr('termformule')} ${gr('2k')}.`,
            `Die som begin by k = ${bl('1')} (wat 2×1 = 2 gee) en eindig by k = ${or('5')} (wat 2×5 = 10 gee).`,
            `Geskryf in sigma-notasie: ∑ (vanaf k = ${bl('1')} tot ${or('5')}) van ${gr('2k')}.`,
          ],
        },
        {
          question: 'Thabo evalueer ∑ (vanaf i = 3 tot 6) van i². Vind die som.',
          answer: `Som = ${gr('86')}`,
          steps: [
            `Identifiseer die dele: ${bl('ondergrens')} = ${bl('3')}, ${or('bogrens')} = ${or('6')}, ${gr('termformule')} = ${gr('i²')}.`,
            `Vervang i = ${bl('3')}: ${gr('3²')} = ${gr('9')}.`,
            `Vervang i = 4: ${gr('4²')} = ${gr('16')}.`,
            `Vervang i = 5: ${gr('5²')} = ${gr('25')}.`,
            `Vervang i = ${or('6')}: ${gr('6²')} = ${gr('36')}.`,
            `Tel die resultate bymekaar: 9 + 16 + 25 + 36 = ${gr('86')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining sigma notation, how to read and evaluate a sigma expression, and how to convert a written sum into sigma notation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SUM OF AN ARITHMETIC SERIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-arithmetic-series',
      title: 'Som van ʼn Rekenkundige Reeks',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Rekenkundige reeks is die som van die terme van ʼn rekenkundige ry. Die somformule is S<sub>n</sub> = n/2[2${bl('a')} + (n − 1)${or('d')}], waar ${bl('a')} die eerste term is, ${or('d')} die gemeenskaplike verskil, en n die aantal terme. Wanneer die laaste term <em>l</em> direk bekend is, kan ons ook S<sub>n</sub> = n/2(${bl('a')} + l) gebruik.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formule toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('somresultaat')}</span>` +
        `</div>` +

        // ── Formula cards ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Somformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Algemene formule</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${or('n/2')}[2${bl('a')} + (n − 1)${bl('d')}]</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Wanneer laaste term l bekend is</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${or('n/2')}(${bl('a')} + ${bl('l')})</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kies die regte formule</p>` +
        `<p style="margin:0;color:#1e3a8a;">Gebruik S<sub>n</sub> = n/2[2${bl('a')} + (n − 1)${bl('d')}] wanneer jy ${bl('a')} en ${bl('d')} ken. Gebruik S<sub>n</sub> = n/2(${bl('a')} + ${bl('l')}) wanneer jy beide die eerste term en die laaste term direk ken — dit spaar ʼn stap.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die som van die eerste 20 terme van die rekenkundige ry 3, 7, 11, 15, …',
          answer: `${gr('S₂₀')} = ${gr('820')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('a')} = ${bl('3')}, ${bl('d')} = ${bl('4')}, n = ${bl('20')}.`,
            `Skryf die formule: ${or('S<sub>n</sub> = n/2[2a + (n − 1)d]')}.`,
            `Vervang: ${or('S<sub>20</sub>')} = ${or('20/2')}[2(${bl('3')}) + (19)(${bl('4')})] = 10[6 + 76].`,
            `Vereenvoudig: 10 × 82 = ${gr('820')}.`,
          ],
        },
        {
          question: 'Amahle vind die som van die eerste 12 terme van ʼn reeks waar a = 5 en die 12de term 60 is.',
          answer: `${gr('S₁₂')} = ${gr('390')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('a')} = ${bl('5')}, laaste term ${bl('l')} = ${bl('60')}, n = ${bl('12')}.`,
            `Aangesien beide die eerste en laaste terme bekend is, gebruik ${or('S<sub>n</sub> = n/2(a + l)')}.`,
            `Vervang: ${or('S<sub>12</sub>')} = ${or('12/2')}(${bl('5')} + ${bl('60')}) = 6 × 65.`,
            `Bereken: 6 × 65 = ${gr('390')}.`,
          ],
        },
        {
          question: 'Vind n as die som van ʼn rekenkundige reeks 165 is, met a = 3 en d = 2.',
          answer: `n = ${gr('11')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('S<sub>n</sub>')} = ${bl('165')}, ${bl('a')} = ${bl('3')}, ${bl('d')} = ${bl('2')}.`,
            `Skryf die formule: ${or('S<sub>n</sub> = n/2[2a + (n − 1)d]')}.`,
            `Vervang: ${bl('165')} = ${or('n/2')}[6 + 2(n − 1)] → 330 = n(2n + 4) = 2n² + 4n.`,
            `Herrangskik: 2n² + 4n − 330 = 0 → n² + 2n − 165 = 0.`,
            `Faktoriseer: (n + 15)(n − 11) = 0 → n = ${gr('11')} (verwerp die negatiewe oplossing n = −15).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sum of an arithmetic series using Sₙ = n/2[2a + (n−1)d] and Sₙ = n/2(a + l), with worked examples including finding n from the sum" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SUM OF A GEOMETRIC SERIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-geometric-series',
      title: 'Som van ʼn Meetkundige Reeks',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Meetkundige reeks is die som van die terme van ʼn meetkundige ry. Die somformule is S<sub>n</sub> = ${bl('a')}(${bl('r')}<sup>n</sup> − 1)/(${bl('r')} − 1) vir r ≠ 1 (ekwivalent geskryf as ${bl('a')}(1 − ${bl('r')}<sup>n</sup>)/(1 − ${bl('r')})). Ons bestudeer ook die <strong>som tot oneindig</strong>, S<sub>∞</sub> = ${bl('a')}/(1 − ${bl('r')}), wat slegs na ʼn eindige waarde konvergeer wanneer ${or('−1 &lt; r &lt; 1')} — andersins groei die reeks onbegrens en het dit geen eindige som tot oneindig nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('konvergensietoets')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('somresultaat')}</span>` +
        `</div>` +

        // ── Formula cards ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Somformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Som van eerste n terme (r ≠ 1)</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>n</sub>')} = ${bl('a')}(${bl('r')}<sup>n</sup> − 1) / (${bl('r')} − 1)</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Som tot oneindig (−1 &lt; r &lt; 1 slegs)</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('S<sub>∞</sub>')} = ${bl('a')} / (1 − ${bl('r')})</p>` +
        `</div>` +

        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Konvergent vs. divergent</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Konvergente reeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer ${or('−1 &lt; r &lt; 1')}, krimp die terme na nul en het die reeks ʼn eindige som tot oneindig S<sub>∞</sub>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Divergente reeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer ${or('|r| ≥ 1')}, krimp die terme nie. Die reeks groei onbegrens en S<sub>∞</sub> bestaan nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd r voordat jy S<sub>∞</sub> gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die som-tot-oneindig-formule geld slegs wanneer ${or('−1 &lt; r &lt; 1')}. Verifieer altyd die konvergensievoorwaarde voordat jy dit gebruik — as r buite hierdie interval val, stel eenvoudig dat die reeks divergeer en geen som tot oneindig bestaan nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die som van die eerste 6 terme van die meetkundige ry 2, 6, 18, 54, …',
          answer: `${gr('S₆')} = ${gr('728')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('a')} = ${bl('2')}, ${bl('r')} = 6 ÷ 2 = ${bl('3')}, n = ${bl('6')}.`,
            `Skryf die formule: ${or('S<sub>n</sub> = a(rⁿ − 1) / (r − 1)')}.`,
            `Vervang: ${or('S<sub>6</sub>')} = ${bl('2')}(${bl('3')}<sup>6</sup> − 1) / (${bl('3')} − 1) = 2(729 − 1) / 2.`,
            `Vereenvoudig: 2 × 728 / 2 = ${gr('728')}.`,
          ],
        },
        {
          question: 'Vind die som tot oneindig van die meetkundige reeks met a = 8 en r = 0,5.',
          answer: `${gr('S∞')} = ${gr('16')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('a')} = ${bl('8')}, ${bl('r')} = ${bl('0,5')}.`,
            `Kontroleer konvergensie: ${or('−1 &lt; 0,5 &lt; 1')} ✓ — die reeks konvergeer, dus bestaan S<sub>∞</sub>.`,
            `Skryf die formule: ${or('S<sub>∞</sub> = a / (1 − r)')}.`,
            `Vervang: ${or('S<sub>∞</sub>')} = ${bl('8')} / (1 − ${bl('0,5')}) = 8 / 0,5 = ${gr('16')}.`,
          ],
        },
        {
          question: 'Sipho sê die meetkundige reeks met a = 4 en r = 2 het ʼn som tot oneindig. Is hy korrek?',
          answer: `${gr('Nee — die reeks divergeer en S∞ bestaan nie.')}`,
          steps: [
            `Identifiseer die bekende waardes: ${bl('a')} = ${bl('4')}, ${bl('r')} = ${bl('2')}.`,
            `Kontroleer konvergensie: ${or('r = 2, wat NIE tussen −1 en 1 is nie')} — die konvergensievoorwaarde misluk.`,
            `Aangesien ${or('|r| ≥ 1')}, ${gr('divergeer')} die reeks — die terme groei onbegrens.`,
            `Gevolgtrekking: ${gr('Sipho is verkeerd.')} Daar is geen eindige som tot oneindig vir hierdie reeks nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the sum of a geometric series using Sₙ = a(rⁿ−1)/(r−1) and the sum to infinity S∞ = a/(1−r), including the convergence condition and divergent series" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die 10de term van die rekenkundige ry 2, 5, 8, 11, …',
      answer: '29',
      checkMode: 'auto',
      correctAnswer: '29',
      explanation: 'Gebruik Tₙ = a + (n−1)d. a = 2, d = 3. T₁₀ = 2 + (10−1)(3) = 2 + 27 = 29.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die 12de term van die meetkundige ry 4, 8, 16, 32, …',
      answer: '8192',
      checkMode: 'auto',
      correctAnswer: '8192',
      explanation: 'Gebruik Tₙ = a · rⁿ⁻¹. a = 4, r = 2. T₁₂ = 4 × 2¹¹ = 4 × 2048 = 8192.',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die ry 5, 10, 20, 40 is rekenkundig. Is hy korrek? Verduidelik.',
      answer: 'Nee — die verskille (5, 10, 20) is nie konstant nie, maar die verhoudings (2, 2, 2) is konstant, wat dit ʼn meetkundige, nie rekenkundige, ry maak.',
      checkMode: 'self',
    },

    // ── Q4 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Evalueer ∑ (vanaf k = 1 tot 4) van 3k.',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'k=1: 3(1)=3. k=2: 3(2)=6. k=3: 3(3)=9. k=4: 3(4)=12. Som = 3+6+9+12 = 30.',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf die som 5+10+15+20+25 met sigma-notasie.',
      answer: '∑ (vanaf k = 1 tot 5) van 5k',
      checkMode: 'self',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Evalueer ∑ (vanaf i = 2 tot 5) van (i² + 1). Toon alle vervangings.',
      answer: 'i=2: 5. i=3: 10. i=4: 17. i=5: 26. Som = 5+10+17+26 = 58.',
      checkMode: 'self',
    },

    // ── Q7 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die som van die eerste 15 terme van die rekenkundige ry 6, 10, 14, 18, …',
      answer: '510',
      checkMode: 'auto',
      correctAnswer: '510',
      explanation: 'a=6, d=4, n=15. S₁₅ = 15/2[2(6) + 14(4)] = 15/2[12+56] = 15/2 × 68 = 15 × 34 = 510.',
    },

    // ── Q8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die som van ʼn rekenkundige reeks met a = 8, n = 10, en laaste term 53.',
      answer: '305',
      checkMode: 'auto',
      correctAnswer: '305',
      explanation: 'Deur Sₙ = n/2(a + l) te gebruik: S₁₀ = 10/2(8 + 53) = 5 × 61 = 305.',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind n as die som van ʼn rekenkundige reeks 99 is, met a = 3 en d = 2.',
      answer: '99 = n/2[6 + 2(n−1)]. 198 = n(2n + 4). 2n² + 4n − 198 = 0. n² + 2n − 99 = 0. (n + 11)(n − 9) = 0. n = 9.',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die som van die eerste 5 terme van die meetkundige ry 3, 6, 12, 24, …',
      answer: '93',
      checkMode: 'auto',
      correctAnswer: '93',
      explanation: 'a=3, r=2, n=5. S₅ = 3(2⁵−1)/(2−1) = 3(32−1) = 3 × 31 = 93.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die som tot oneindig van die meetkundige reeks met a = 12 en r = 0,25.',
      answer: '16',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'Kontroleer konvergensie: −1 < 0,25 < 1 ✓. S∞ = a/(1−r) = 12/(1−0,25) = 12/0,75 = 16.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die meetkundige reeks met a = 5 en r = −0,5 het ʼn som tot oneindig. Is sy korrek? Verduidelik.',
      answer: 'Ja — aangesien −1 < −0,5 < 1, konvergeer die reeks. S∞ = 5/(1−(−0,5)) = 5/1,5 ≈ 3,33.',
      checkMode: 'self',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die som van die eerste 8 terme van die meetkundige ry met a = 5 en r = 2.',
      answer: '1275',
      checkMode: 'auto',
      correctAnswer: '1275',
      explanation: 'S₈ = 5(2⁸−1)/(2−1) = 5(256−1) = 5 × 255 = 1275.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn ry met r = 1 kan nie die meetkundige somformule Sₙ = a(rⁿ−1)/(r−1) gebruik nie. Is hy korrek? Verduidelik.',
      answer: 'Ja — wanneer r = 1, behels die formule deling deur nul (r−1 = 0), wat onbepaald is; die som is in plaas daarvan eenvoudig Sₙ = na, aangesien elke term gelyk is aan a.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Rekenkundige ry het T₅ = 23 en T₁₀ = 53. Vind a en d.',
      answer: 'T₅ = a + 4d = 23. T₁₀ = a + 9d = 53. Trek af: 5d = 30, d = 6. Dan a = 23 − 24 = −1.',
      checkMode: 'self',
    },

    // ── Q16 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Meetkundige ry het T₃ = 18 en T₆ = 486. Vind a en r.',
      answer: 'T₃ = ar² = 18. T₆ = ar⁵ = 486. Deel: r³ = 486/18 = 27. r = 3. Dan a = 18/9 = 2.',
      checkMode: 'self',
    },

    // ── Q17 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die som van die eerste 25 terme van ʼn rekenkundige reeks met eerste term −4 en gemeenskaplike verskil 3.',
      answer: '800',
      checkMode: 'auto',
      correctAnswer: '800',
      explanation: 'a=−4, d=3, n=25. S₂₅ = 25/2[2(−4) + 24(3)] = 25/2[−8+72] = 25/2 × 64 = 25 × 32 = 800.',
    },

    // ── Q18 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle belê geld sodat haar besparings ʼn meetkundige ry vorm. Na 1 maand het sy R1 000, na 2 maande R1 100, na 3 maande R1 210. Vind die gemeenskaplike verhouding en voorspel haar besparings na 6 maande.',
      answer: 'r = 1100/1000 = 1,1. T₆ = 1000 × 1,1⁵ ≈ R1 610,51.',
      checkMode: 'self',
    },

    // ── Q19 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die som tot oneindig van die meetkundige reeks 16 + 8 + 4 + 2 + …, en verduidelik waarom hierdie reeks konvergeer.',
      answer: 'a=16, r=0,5. Aangesien −1 < 0,5 < 1, konvergeer dit. S∞ = 16/(1−0,5) = 32.',
      checkMode: 'self',
    },

    // ── Q20 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ∑ (vanaf k = 1 tot n) van k is gelyk aan n(n+1)/2 vir enige positiewe heelgetal n. Verifieer dit vir n = 5 deur beide direk op te tel en die formule te gebruik.',
      answer: 'Direkte som: 1+2+3+4+5 = 15. Formule: 5(6)/2 = 30/2 = 15. Albei metodes stem ooreen, wat die formule bevestig.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het patrone, rye en reekse bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het patrone, rye en reekse bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
