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
        '<VideoPlaceholder label="Kort video wat rekenkundige rye, die algemene-term-formule Tₙ = a + (n−1)d, en hoe om enige term te vind met uitgewerkte voorbeelde verduidelik" />',
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
        '<VideoPlaceholder label="Kort video wat meetkundige rye, die algemene-term-formule Tₙ = a · rⁿ⁻¹, en hoe om enige term te vind met uitgewerkte voorbeelde verduidelik" />',
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
        '<VideoPlaceholder label="Kort video wat sigmanotasie verduidelik, hoe om ʼn sigma-uitdrukking te lees en te evalueer, en hoe om ʼn geskrewe som na sigmanotasie om te skakel" />',
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
        '<VideoPlaceholder label="Kort video wat die som van ʼn rekenkundige reeks verduidelik deur Sₙ = n/2[2a + (n−1)d] en Sₙ = n/2(a + l) te gebruik, met uitgewerkte voorbeelde insluitend hoe om n vanaf die som te vind" />',
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
        '<VideoPlaceholder label="Kort video wat die som van ʼn meetkundige reeks verduidelik deur Sₙ = a(rⁿ−1)/(r−1) en die som tot oneindig S∞ = a/(1−r) te gebruik, insluitend die konvergensievoorwaarde en divergente reekse" />',
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

    // ── Q21 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Rekenkundige ry het eerste term a = 3. Die 1ste, 2de en 4de terme van hierdie ry (T₁, T₂, T₄) vorm die eerste drie terme van ʼn meetkundige ry. Bepaal die waarde(s) van die gemeenskaplike verskil d, en identifiseer watter waarde ʼn werklike (nie-triviale) meetkundige ry lewer.',
      answer: 'T₁ = a = 3, T₂ = a + d = 3 + d, T₄ = a + 3d = 3 + 3d. Vir hierdie terme om ʼn meetkundige ry te vorm, moet T₂² = T₁ × T₄: (3 + d)² = 3(3 + 3d) → 9 + 6d + d² = 9 + 9d → d² − 3d = 0 → d(d − 3) = 0 → d = 0 of d = 3. d = 0 lewer die triviale konstante ry 3, 3, 3 (nie ʼn betekenisvolle meetkundige ry nie), dus is d = 3 die antwoord wat werk: T₁ = 3, T₂ = 6, T₄ = 12, met gemeenskaplike verhouding r = 2.',
      checkMode: 'self',
    },

    // ── Q22 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Meetkundige reeks het ʼn som tot oneindig van 12, en die tweede term T₂ = 3. Bepaal die gemeenskaplike verhouding r en die eerste term a.',
      answer: 'S∞ = a/(1 − r) = 12, dus a = 12(1 − r). Ook T₂ = ar = 3, dus 12(1 − r)r = 3 → 12r − 12r² = 3 → 12r² − 12r + 3 = 0 → 4r² − 4r + 1 = 0 → (2r − 1)² = 0 → r = 0,5. Dan a = 12(1 − 0,5) = 6. Kontroleer: T₂ = 6 × 0,5 = 3 ✓, en −1 < 0,5 < 1, dus bestaan S∞.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (1-3):   Rekenkundige ry — vind die nde term
    // Blok 2 (4-6):   Meetkundige ry — vind die nde term
    // Blok 3 (7-10):  Sigma-notasie — evalueer ʼn som
    // Blok 4 (11-13): Som van ʼn rekenkundige reeks
    // Blok 5 (14-16): Som van ʼn meetkundige reeks / som tot oneindig
    // Blok 6 (17-20): Moeilik — gekombineerde, omgekeerde en werklike-lewe-probleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Rekenkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 14de term van die rekenkundige ry 5, 9, 13, 17, …', checkMode: 'auto', correctAnswer: '57', answer: '57', explanation: 'a=5, d=4. T₁₄ = a + (n−1)d = 5 + (14−1)(4) = 5 + 52 = 57.' },
        { difficulty: 'Easy', question: 'Vind die 10de term van die rekenkundige ry −6, −2, 2, 6, …', checkMode: 'auto', correctAnswer: '30', answer: '30', explanation: 'a=−6, d=4. T₁₀ = a + (n−1)d = −6 + (10−1)(4) = −6 + 36 = 30.' },
        { difficulty: 'Easy', question: 'Vind die 20ste term van die rekenkundige ry 12, 8, 4, 0, …', checkMode: 'auto', correctAnswer: '-64', correctAnswers: ['-64', '−64'], answer: '−64', explanation: 'a=12, d=−4. T₂₀ = a + (n−1)d = 12 + (20−1)(−4) = 12 − 76 = −64.' },

        // Blok 2 — Meetkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 6de term van die meetkundige ry 2, 6, 18, 54, …', checkMode: 'auto', correctAnswer: '486', answer: '486', explanation: 'a=2, r=3. T₆ = a·rⁿ⁻¹ = 2 × 3⁵ = 2 × 243 = 486.' },
        { difficulty: 'Easy', question: 'Vind die 7de term van die meetkundige ry 3, 6, 12, 24, …', checkMode: 'auto', correctAnswer: '192', answer: '192', explanation: 'a=3, r=2. T₇ = a·rⁿ⁻¹ = 3 × 2⁶ = 3 × 64 = 192.' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term van die meetkundige ry 1, 5, 25, 125, …', checkMode: 'auto', correctAnswer: '625', answer: '625', explanation: 'a=1, r=5. T₅ = a·rⁿ⁻¹ = 1 × 5⁴ = 625.' },

        // Blok 3 — Sigma-notasie: evalueer (Medium)
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 1 tot 5) van (4k − 1).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=1:3, k=2:7, k=3:11, k=4:15, k=5:19. Som = 3+7+11+15+19 = 55.' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf i = 2 tot 5) van i².', checkMode: 'auto', correctAnswer: '54', answer: '54', explanation: 'i=2:4, i=3:9, i=4:16, i=5:25. Som = 4+9+16+25 = 54.' },
        { difficulty: 'Medium', question: 'Skryf die som 3 + 6 + 9 + 12 + 15 met sigma-notasie.', answer: '∑ (vanaf k = 1 tot 5) van 3k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 3 tot 7) van (2k + 1).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=3:7, k=4:9, k=5:11, k=6:13, k=7:15. Som = 7+9+11+13+15 = 55.' },

        // Blok 4 — Som van ʼn rekenkundige reeks (Medium)
        { difficulty: 'Medium', question: 'Vind die som van die eerste 16 terme van die rekenkundige ry 4, 7, 10, 13, …', checkMode: 'auto', correctAnswer: '424', answer: '424', explanation: 'a=4, d=3, n=16. S₁₆ = 16/2[2(4) + 15(3)] = 8[8+45] = 8 × 53 = 424.' },
        { difficulty: 'Medium', question: 'Vind die som van ʼn rekenkundige reeks met a = 10, n = 13, en laaste term 100.', checkMode: 'auto', correctAnswer: '715', answer: '715', explanation: 'Deur Sₙ = n/2(a + l) te gebruik: S₁₃ = 13/2(10 + 100) = 6,5 × 110 = 715.' },
        { difficulty: 'Medium', question: 'Vind die som van die eerste 12 terme van die rekenkundige ry 9, 5, 1, −3, …', checkMode: 'auto', correctAnswer: '-154', correctAnswers: ['-154', '−154'], answer: '−154', explanation: 'a=9, d=−4, n=12. S₁₂ = 12/2[2(9) + 11(−4)] = 6[18−44] = 6 × (−26) = −154.' },

        // Blok 5 — Som van ʼn meetkundige reeks / som tot oneindig (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vind die som van die eerste 7 terme van die meetkundige ry 3, 6, 12, 24, …', checkMode: 'auto', correctAnswer: '381', answer: '381', explanation: 'a=3, r=2, n=7. S₇ = 3(2⁷−1)/(2−1) = 3(128−1) = 3 × 127 = 381.' },
        { difficulty: 'Medium-Hard', question: 'Vind die som tot oneindig van die meetkundige reeks met a = 18 en r = 1/3.', checkMode: 'auto', correctAnswer: '27', answer: '27', explanation: 'Kontroleer konvergensie: −1 < 1/3 < 1 ✓. S∞ = a/(1−r) = 18/(1−1/3) = 18/(2/3) = 27.' },
        { difficulty: 'Hard', question: 'Bepaal of die meetkundige reeks met a = 5 en r = 1,5 ʼn som tot oneindig het. Verduidelik.', answer: 'Nee — aangesien r = 1,5 nie aan −1 < r < 1 voldoen nie (|r| ≥ 1), divergeer die reeks en bestaan geen som tot oneindig nie.', checkMode: 'self' },

        // Blok 6 — Moeilik: gekombineerde, omgekeerde en werklike-lewe-probleme
        { difficulty: 'Hard', question: 'ʼn Rekenkundige ry het T₄ = 17 en T₉ = 42. Vind a en d.', answer: 'T₄ = a+3d = 17. T₉ = a+8d = 42. Trek af: 5d = 25, dus d = 5. Dan a = 17 − 15 = 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind n as die som van ʼn rekenkundige reeks 143 is, met a = 3 en d = 2.', checkMode: 'auto', correctAnswer: '11', answer: '11', explanation: '143 = n/2[6 + 2(n−1)] → 286 = n(2n+4) = 2n²+4n. Herrangskik: n²+2n−143=0. Faktoriseer: (n+13)(n−11)=0, dus n=11 (verwerp die negatiewe oplossing n=−13).' },
        { difficulty: 'Hard', question: 'ʼn Kolonie bakterieë begin met 500 selle en verdubbel elke uur. Gebruik ʼn meetkundige ry om die aantal selle na 5 uur te vind (d.w.s. die 6de term).', checkMode: 'auto', correctAnswer: '16000', answer: '16 000', explanation: 'a=500 (T₁, by uur 0), r=2, n=6 (na 5 verdubbelings). T₆ = 500 × 2⁵ = 500 × 32 = 16 000 selle.' },
        { difficulty: 'Hard', question: 'Verifieer dat ∑ (vanaf k = 1 tot n) van k = n(n+1)/2 vir n = 6, deur beide direk op te tel en die formule te gebruik.', answer: 'Direkte som: 1+2+3+4+5+6 = 21. Formule: 6(7)/2 = 42/2 = 21. Albei metodes stem ooreen, wat die formule bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het patrone, rye en reekse bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy oor reekssomme of sigma-notasie gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die nde term en somformules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Rekenkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 15de term van die rekenkundige ry 6, 11, 16, 21, …', checkMode: 'auto', correctAnswer: '76', answer: '76', explanation: 'a=6, d=5. T₁₅ = a + (n−1)d = 6 + (15−1)(5) = 6 + 70 = 76.' },
        { difficulty: 'Easy', question: 'Vind die 11de term van die rekenkundige ry −4, 0, 4, 8, …', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: 'a=−4, d=4. T₁₁ = a + (n−1)d = −4 + (11−1)(4) = −4 + 40 = 36.' },
        { difficulty: 'Easy', question: 'Vind die 18de term van die rekenkundige ry 15, 11, 7, 3, …', checkMode: 'auto', correctAnswer: '-53', correctAnswers: ['-53', '−53'], answer: '−53', explanation: 'a=15, d=−4. T₁₈ = a + (n−1)d = 15 + (18−1)(−4) = 15 − 68 = −53.' },

        // Blok 2 — Meetkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 6de term van die meetkundige ry 6, 12, 24, 48, …', checkMode: 'auto', correctAnswer: '192', answer: '192', explanation: 'a=6, r=2. T₆ = a·rⁿ⁻¹ = 6 × 2⁵ = 6 × 32 = 192.' },
        { difficulty: 'Easy', question: 'Vind die 6de term van die meetkundige ry 4, 8, 16, 32, …', checkMode: 'auto', correctAnswer: '128', answer: '128', explanation: 'a=4, r=2. T₆ = a·rⁿ⁻¹ = 4 × 2⁵ = 4 × 32 = 128.' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term van die meetkundige ry 2, 10, 50, 250, …', checkMode: 'auto', correctAnswer: '1250', answer: '1250', explanation: 'a=2, r=5. T₅ = a·rⁿ⁻¹ = 2 × 5⁴ = 2 × 625 = 1250.' },

        // Blok 3 — Sigma-notasie: evalueer (Medium)
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 1 tot 5) van (3k + 2).', checkMode: 'auto', correctAnswer: '55', answer: '55', explanation: 'k=1:5, k=2:8, k=3:11, k=4:14, k=5:17. Som = 5+8+11+14+17 = 55.' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf i = 2 tot 5) van (i² + 1).', checkMode: 'auto', correctAnswer: '58', answer: '58', explanation: 'i=2:5, i=3:10, i=4:17, i=5:26. Som = 5+10+17+26 = 58.' },
        { difficulty: 'Medium', question: 'Skryf die som 4 + 8 + 12 + 16 + 20 met sigma-notasie.', answer: '∑ (vanaf k = 1 tot 5) van 4k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 2 tot 6) van (2k − 1).', checkMode: 'auto', correctAnswer: '45', answer: '45', explanation: 'k=2:3, k=3:5, k=4:7, k=5:9, k=6:11. Som = 3+5+7+9+11 = 45.' },

        // Blok 4 — Som van ʼn rekenkundige reeks (Medium)
        { difficulty: 'Medium', question: 'Vind die som van die eerste 14 terme van die rekenkundige ry 5, 9, 13, 17, …', checkMode: 'auto', correctAnswer: '434', answer: '434', explanation: 'a=5, d=4, n=14. S₁₄ = 14/2[2(5) + 13(4)] = 7[10+52] = 7 × 62 = 434.' },
        { difficulty: 'Medium', question: 'Vind die som van ʼn rekenkundige reeks met a = 8, n = 15, en laaste term 92.', checkMode: 'auto', correctAnswer: '750', answer: '750', explanation: 'Deur Sₙ = n/2(a + l) te gebruik: S₁₅ = 15/2(8 + 92) = 7,5 × 100 = 750.' },
        { difficulty: 'Medium', question: 'Vind die som van die eerste 10 terme van die rekenkundige ry 7, 3, −1, −5, …', checkMode: 'auto', correctAnswer: '-110', correctAnswers: ['-110', '−110'], answer: '−110', explanation: 'a=7, d=−4, n=10. S₁₀ = 10/2[2(7) + 9(−4)] = 5[14−36] = 5 × (−22) = −110.' },

        // Blok 5 — Som van ʼn meetkundige reeks / som tot oneindig (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vind die som van die eerste 6 terme van die meetkundige ry 4, 8, 16, 32, …', checkMode: 'auto', correctAnswer: '252', answer: '252', explanation: 'a=4, r=2, n=6. S₆ = 4(2⁶−1)/(2−1) = 4(64−1) = 4 × 63 = 252.' },
        { difficulty: 'Medium-Hard', question: 'Vind die som tot oneindig van die meetkundige reeks met a = 24 en r = 1/3.', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: 'Kontroleer konvergensie: −1 < 1/3 < 1 ✓. S∞ = a/(1−r) = 24/(1−1/3) = 24/(2/3) = 36.' },
        { difficulty: 'Hard', question: 'Bepaal of die meetkundige reeks met a = 6 en r = −2 ʼn som tot oneindig het. Verduidelik.', answer: 'Nee — aangesien r = −2 nie aan −1 < r < 1 voldoen nie (|r| ≥ 1), divergeer die reeks en bestaan geen som tot oneindig nie.', checkMode: 'self' },

        // Blok 6 — Moeilik: gekombineerde, omgekeerde en werklike-lewe-probleme
        { difficulty: 'Hard', question: 'ʼn Rekenkundige ry het T₄ = 19 en T₉ = 44. Vind a en d.', answer: 'T₄ = a+3d = 19. T₉ = a+8d = 44. Trek af: 5d = 25, dus d = 5. Dan a = 19 − 15 = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind n as die som van ʼn rekenkundige reeks 222 is, met a = 2 en d = 3.', checkMode: 'auto', correctAnswer: '12', answer: '12', explanation: '222 = n/2[4 + 3(n−1)] → 444 = n(3n+1) = 3n²+n. Herrangskik: 3n²+n−444=0. Faktoriseer: (3n+37)(n−12)=0, dus n=12 (verwerp die negatiewe oplossing n=−37/3).' },
        { difficulty: 'Hard', question: 'ʼn Kolonie bakterieë begin met 300 selle en verdubbel elke uur. Gebruik ʼn meetkundige ry om die aantal selle na 5 uur te vind (d.w.s. die 6de term).', checkMode: 'auto', correctAnswer: '9600', answer: '9 600', explanation: 'a=300 (T₁, by uur 0), r=2, n=6 (na 5 verdubbelings). T₆ = 300 × 2⁵ = 300 × 32 = 9 600 selle.' },
        { difficulty: 'Hard', question: 'Verifieer dat ∑ (vanaf k = 1 tot n) van k = n(n+1)/2 vir n = 7, deur beide direk op te tel en die formule te gebruik.', answer: 'Direkte som: 1+2+3+4+5+6+7 = 28. Formule: 7(8)/2 = 56/2 = 28. Albei metodes stem ooreen, wat die formule bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het patrone, rye en reekse bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy oor reekssomme of sigma-notasie gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die nde term en somformules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Rekenkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 13de term van die rekenkundige ry 8, 15, 22, 29, …', checkMode: 'auto', correctAnswer: '92', answer: '92', explanation: 'a=8, d=7. T₁₃ = a + (n−1)d = 8 + (13−1)(7) = 8 + 84 = 92.' },
        { difficulty: 'Easy', question: 'Vind die 12de term van die rekenkundige ry −5, −1, 3, 7, …', checkMode: 'auto', correctAnswer: '39', answer: '39', explanation: 'a=−5, d=4. T₁₂ = a + (n−1)d = −5 + (12−1)(4) = −5 + 44 = 39.' },
        { difficulty: 'Easy', question: 'Vind die 16de term van die rekenkundige ry 20, 15, 10, 5, …', checkMode: 'auto', correctAnswer: '-55', correctAnswers: ['-55', '−55'], answer: '−55', explanation: 'a=20, d=−5. T₁₆ = a + (n−1)d = 20 + (16−1)(−5) = 20 − 75 = −55.' },

        // Blok 2 — Meetkundige ry: vind Tₙ (Maklik)
        { difficulty: 'Easy', question: 'Vind die 4de term van die meetkundige ry 4, 12, 36, 108, …', checkMode: 'auto', correctAnswer: '108', answer: '108', explanation: 'a=4, r=3. T₄ = a·rⁿ⁻¹ = 4 × 3³ = 4 × 27 = 108.' },
        { difficulty: 'Easy', question: 'Vind die 6de term van die meetkundige ry 5, 10, 20, 40, …', checkMode: 'auto', correctAnswer: '160', answer: '160', explanation: 'a=5, r=2. T₆ = a·rⁿ⁻¹ = 5 × 2⁵ = 5 × 32 = 160.' },
        { difficulty: 'Easy-Medium', question: 'Vind die 4de term van die meetkundige ry 5, 15, 45, 135, …', checkMode: 'auto', correctAnswer: '135', answer: '135', explanation: 'a=5, r=3. T₄ = a·rⁿ⁻¹ = 5 × 3³ = 5 × 27 = 135.' },

        // Blok 3 — Sigma-notasie: evalueer (Medium)
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 1 tot 5) van (5k − 2).', checkMode: 'auto', correctAnswer: '65', answer: '65', explanation: 'k=1:3, k=2:8, k=3:13, k=4:18, k=5:23. Som = 3+8+13+18+23 = 65.' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf i = 1 tot 4) van (i² + 2).', checkMode: 'auto', correctAnswer: '38', answer: '38', explanation: 'i=1:3, i=2:6, i=3:11, i=4:18. Som = 3+6+11+18 = 38.' },
        { difficulty: 'Medium', question: 'Skryf die som 6 + 12 + 18 + 24 + 30 met sigma-notasie.', answer: '∑ (vanaf k = 1 tot 5) van 6k', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Evalueer ∑ (vanaf k = 3 tot 6) van (3k + 1).', checkMode: 'auto', correctAnswer: '58', answer: '58', explanation: 'k=3:10, k=4:13, k=5:16, k=6:19. Som = 10+13+16+19 = 58.' },

        // Blok 4 — Som van ʼn rekenkundige reeks (Medium)
        { difficulty: 'Medium', question: 'Vind die som van die eerste 12 terme van die rekenkundige ry 6, 11, 16, 21, …', checkMode: 'auto', correctAnswer: '402', answer: '402', explanation: 'a=6, d=5, n=12. S₁₂ = 12/2[2(6) + 11(5)] = 6[12+55] = 6 × 67 = 402.' },
        { difficulty: 'Medium', question: 'Vind die som van ʼn rekenkundige reeks met a = 6, n = 15, en laaste term 90.', checkMode: 'auto', correctAnswer: '720', answer: '720', explanation: 'Deur Sₙ = n/2(a + l) te gebruik: S₁₅ = 15/2(6 + 90) = 7,5 × 96 = 720.' },
        { difficulty: 'Medium', question: 'Vind die som van die eerste 9 terme van die rekenkundige ry 10, 6, 2, −2, …', checkMode: 'auto', correctAnswer: '-54', correctAnswers: ['-54', '−54'], answer: '−54', explanation: 'a=10, d=−4, n=9. S₉ = 9/2[2(10) + 8(−4)] = 4,5[20−32] = 4,5 × (−12) = −54.' },

        // Blok 5 — Som van ʼn meetkundige reeks / som tot oneindig (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vind die som van die eerste 5 terme van die meetkundige ry 4, 12, 36, 108, …', checkMode: 'auto', correctAnswer: '484', answer: '484', explanation: 'a=4, r=3, n=5. S₅ = 4(3⁵−1)/(3−1) = 4(243−1)/2 = 4 × 242/2 = 484.' },
        { difficulty: 'Medium-Hard', question: 'Vind die som tot oneindig van die meetkundige reeks met a = 12 en r = 1/4.', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Kontroleer konvergensie: −1 < 1/4 < 1 ✓. S∞ = a/(1−r) = 12/(1−1/4) = 12/(3/4) = 16.' },
        { difficulty: 'Hard', question: 'Bepaal of die meetkundige reeks met a = 7 en r = 1,2 ʼn som tot oneindig het. Verduidelik.', answer: 'Nee — aangesien r = 1,2 nie aan −1 < r < 1 voldoen nie (|r| ≥ 1), divergeer die reeks en bestaan geen som tot oneindig nie.', checkMode: 'self' },

        // Blok 6 — Moeilik: gekombineerde, omgekeerde en werklike-lewe-probleme
        { difficulty: 'Hard', question: 'ʼn Rekenkundige ry het T₅ = 23 en T₉ = 43. Vind a en d.', answer: 'T₅ = a+4d = 23. T₉ = a+8d = 43. Trek af: 4d = 20, dus d = 5. Dan a = 23 − 20 = 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vind n as die som van ʼn rekenkundige reeks 130 is, met a = 4 en d = 2.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: '130 = n/2[8 + 2(n−1)] → 260 = n(2n+6) = 2n²+6n. Herrangskik: n²+3n−130=0. Faktoriseer: (n+13)(n−10)=0, dus n=10 (verwerp die negatiewe oplossing n=−13).' },
        { difficulty: 'Hard', question: 'ʼn Kolonie bakterieë begin met 400 selle en verdubbel elke uur. Gebruik ʼn meetkundige ry om die aantal selle na 4 uur te vind (d.w.s. die 5de term).', checkMode: 'auto', correctAnswer: '6400', answer: '6 400', explanation: 'a=400 (T₁, by uur 0), r=2, n=5 (na 4 verdubbelings). T₅ = 400 × 2⁴ = 400 × 16 = 6 400 selle.' },
        { difficulty: 'Hard', question: 'Verifieer dat ∑ (vanaf k = 1 tot n) van k = n(n+1)/2 vir n = 8, deur beide direk op te tel en die formule te gebruik.', answer: 'Direkte som: 1+2+3+4+5+6+7+8 = 36. Formule: 8(9)/2 = 72/2 = 36. Albei metodes stem ooreen, wat die formule bevestig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het patrone, rye en reekse bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy oor reekssomme of sigma-notasie gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die nde term en somformules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
