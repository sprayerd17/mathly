import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ──────────────────────────────────────────
// base number          → blue   (#2563eb)
// exponent             → orange (#ea580c)
// square/cube root     → green  (#16a34a)
// repeated mult/result → green  (#16a34a)  [sections 1–2]
// final answer         → red    (#dc2626)  [section 3]
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eksponente',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VIERKANTSGETALLE EN KWADRAATWORTELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'square-numbers-roots',
      title: 'Vierkantsgetalle en Kwadraatwortels',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Vierkantsgetal</strong> is die resultaat wanneer ʼn getal met homself vermenigvuldig word. Die notasie is ʼn klein ${or('2')} wat na die getal geskryf word — byvoorbeeld ${bl('7')}${or('²')} beteken ${bl('7')} × ${bl('7')} = 49. ʼn <strong>Volkome vierkant</strong> is ʼn getal wat ʼn heelgetal ${gr('kwadraatwortel')} het. Die ${gr('kwadraatwortel')}-simbool is ${gr('√')}. Om die ${gr('kwadraatwortel')} te vind, vra ons watter getal met homself vermenigvuldig die oorspronklike getal gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadraatwortel')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkantsgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat wanneer ʼn getal met homself vermenigvuldig word — byvoorbeeld, ${bl('5')}${or('²')} = 25.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Eksponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die klein verhoogde getal wat vir ons sê hoeveel keer om te vermenigvuldig. In ${bl('5')}${or('²')} is die eksponent ${or('2')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kwadraatwortel (√)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat met homself vermenigvuldig is om die vierkantsgetal te gee — ${gr('√')}25 = ${bl('5')} want ${bl('5')} × ${bl('5')} = 25.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Volkome vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal waarvan die ${gr('kwadraatwortel')} ʼn heelgetal is — 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, …</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom volkome vierkante belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy die eerste <strong>15 volkome vierkante</strong> (${bl('1')}${or('²')} tot ${bl('15')}${or('²')}) uit jou kop ken, sal dit jou help om uitdrukkings met ${or('eksponente')} en ${gr('kwadraatwortels')} vinnig te evalueer en te vereenvoudig regdeur jou wiskundeloopbaan.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 12² en vind √144.',
          answer: `${bl('12')}${or('²')} = 144 en ${gr('√')}144 = ${bl('12')}`,
          steps: [
            `${bl('12')}${or('²')} = ${bl('12')} × ${bl('12')} = 144`,
            `${gr('√')}144 = ${bl('12')} want ${bl('12')} × ${bl('12')} = 144`,
          ],
        },
        {
          question: 'Is 50 ʼn volkome vierkant?',
          answer: '50 is nie ʼn volkome vierkant nie.',
          steps: [
            `Kyk na naburige vierkante — ${bl('7')}${or('²')} = 49 en ${bl('8')}${or('²')} = 64`,
            `50 lê tussen hierdie twee, dus het dit geen heelgetal ${gr('kwadraatwortel')} nie`,
            `50 is nie ʼn volkome vierkant nie`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat vierkantsgetalle en kwadraatwortels verduidelik met visuele voorbeelde van kwadratering en die vind van die kwadraatwortel',

      diagramPlaceholder:
        'Visuele rooster wat vierkantsgetalle van 1² tot 6² as groeiende n × n roosters wys, met die grondgetal in blou, eksponent in oranje en waarde in groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="100" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Vierkantsgetalle: n × n roosters</text>` +
        `<rect x="10" y="94" width="6" height="6" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="26" y="88" width="12" height="12" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="48" y="82" width="18" height="18" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="76" y="76" width="24" height="24" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="110" y="70" width="30" height="30" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="150" y="64" width="36" height="36" fill="rgba(37,99,235,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<text x="13" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">1</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=1</tspan></text>` +
        `<text x="32" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">2</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=4</tspan></text>` +
        `<text x="57" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">3</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=9</tspan></text>` +
        `<text x="88" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">4</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=16</tspan></text>` +
        `<text x="125" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">5</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=25</tspan></text>` +
        `<text x="168" y="112" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">6</tspan><tspan fill="#ea580c" font-weight="700">²</tspan><tspan fill="#16a34a" font-weight="700">=36</tspan></text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KUBUSGETALLE EN KUBUSWORTELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cube-numbers-roots',
      title: 'Kubusgetalle en Kubuswortels',
      icon: '³',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Kubusgetal</strong> is die resultaat wanneer ʼn getal drie keer met homself vermenigvuldig word. Die notasie gebruik ʼn klein ${or('3')} — byvoorbeeld ${bl('4')}${or('³')} = ${bl('4')} × ${bl('4')} × ${bl('4')} = 64. Die ${gr('kubuswortel')}-simbool is ${gr('∛')}. Om die ${gr('kubuswortel')} te vind, vra ons watter getal drie keer met homself vermenigvuldig die oorspronklike getal gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kubuswortel')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kubusgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat wanneer ʼn getal drie keer met homself vermenigvuldig word — byvoorbeeld, ${bl('3')}${or('³')} = 27.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kubuswortel (∛)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat drie keer met homself vermenigvuldig is om die kubusgetal te gee — ${gr('∛')}27 = ${bl('3')} want ${bl('3')} × ${bl('3')} × ${bl('3')} = 27.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volkome kubusse om te ken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Leer die kubusgetalle van ${bl('1')}${or('³')} tot ${bl('10')}${or('³')}: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. As jy hierdie herken, help dit jou om ${gr('kubuswortels')} onmiddellik te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 6³ en vind ∛216.',
          answer: `${bl('6')}${or('³')} = 216 en ${gr('∛')}216 = ${bl('6')}`,
          steps: [
            `${bl('6')}${or('³')} = ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
            `${gr('∛')}216 = ${bl('6')} want ${bl('6')} × ${bl('6')} × ${bl('6')} = 216`,
          ],
        },
        {
          question: 'Vind ∛1000.',
          answer: `${gr('∛')}1000 = ${bl('10')}`,
          steps: [
            `Ons het ʼn getal nodig wat, gekubus, 1000 gee`,
            `${bl('10')} × ${bl('10')} × ${bl('10')} = 1000`,
            `${gr('∛')}1000 = ${bl('10')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat kubusgetalle en kubuswortels verduidelik met visuele 3D-kubusvoorbeelde en kleurgekodeerde werk',

      diagramPlaceholder:
        'Visuele diagram wat kubusgetalle van 1³ tot 4³ as groeiende 3D-kubusse wys, met die grondgetal in blou, eksponent in oranje en waarde in groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="100" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Kubusgetalle: n × n × n vaste vorms</text>` +
        `<polygon points="10,90 20,90 20,100 10,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="10,90 20,90 24,87 14,87" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="20,90 24,87 24,97 20,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="38,82 56,82 56,100 38,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="38,82 56,82 63,77 45,77" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="56,82 63,77 63,95 56,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="77,74 103,74 103,100 77,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="77,74 103,74 113,67 87,67" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="103,74 113,67 113,93 103,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="127,66 161,66 161,100 127,100" fill="rgba(234,88,12,0.30)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="127,66 161,66 174,57 140,57" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<polygon points="161,66 174,57 174,91 161,100" fill="rgba(234,88,12,0.45)" stroke="#0f1f3d" stroke-width="1"/>` +
        `<text x="16" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">1</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=1</tspan></text>` +
        `<text x="49" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">2</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=8</tspan></text>` +
        `<text x="92" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">3</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=27</tspan></text>` +
        `<text x="148" y="114" text-anchor="middle" font-size="7"><tspan fill="#2563eb" font-weight="700">4</tspan><tspan fill="#ea580c" font-weight="700">³</tspan><tspan fill="#16a34a" font-weight="700">=64</tspan></text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — EKSPONENSIËLE NOTASIE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-notation',
      title: 'Eksponensiële Notasie',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Eksponensiële notasie</strong> is ʼn korter manier om herhaalde vermenigvuldiging te skryf. Die ${bl('grondgetal')} is die getal wat vermenigvuldig word en die ${or('eksponent')} sê vir ons hoeveel keer om dit met homself te vermenigvuldig. Enige getal tot die mag ${or('1')} is gelyk aan homself. Enige getal tot die mag ${or('0')} is gelyk aan ${re('1')} (behalwe 0 self).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('herhaalde vermenigvuldiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale antwoord')}</span>` +
        `</div>` +

        // ── Key rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Grondgetal')} tot die mag ${or('1')} — enige getal tot die mag 1 is gelyk aan homself: ${bl('n')}${or('¹')} = ${bl('n')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Grondgetal')} tot die mag ${or('0')} — enige nie-nul getal tot die mag 0 is gelyk aan ${re('1')}: ${bl('n')}${or('⁰')} = ${re('1')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Grondgetal')} tot die mag ${or('n')} — brei uit as ${gr('herhaalde vermenigvuldiging')}: ${bl('a')}${or('ⁿ')} = ${gr('a × a × ⋯ × a')} (n keer) = ${re('antwoord')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Eksponensiële notasie lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('2')}${or('⁵')} word gelees as "twee tot die mag vyf" of "twee tot die vyfde". Die ${bl('grondgetal')} word altyd eerste geskryf en die ${or('eksponent')} is altyd die klein verhoogde getal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf 3 × 3 × 3 × 3 in eksponensiële notasie en bereken die antwoord.',
          answer: `${bl('3')}${or('⁴')} = ${re('81')}`,
          steps: [
            `Daar is ${or('4')} drietalle wat met mekaar vermenigvuldig word: ${bl('3')}${or('⁴')}`,
            `Bereken: ${gr('3 × 3 × 3 × 3')} = ${re('81')}`,
          ],
        },
        {
          question: 'Bereken 2⁵.',
          answer: `${bl('2')}${or('⁵')} = ${re('32')}`,
          steps: [
            `${gr('2 × 2 × 2 × 2 × 2')} = ${re('32')}`,
          ],
        },
        {
          question: 'Bereken 10⁰.',
          answer: `${bl('10')}${or('⁰')} = ${re('1')}`,
          steps: [
            `Enige getal tot die mag ${or('0')} is gelyk aan ${re('1')}`,
            `${bl('10')}${or('⁰')} = ${re('1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat eksponensiële notasie verduidelik en wys hoe om uitdrukkings met enige grondgetal en eksponent uit te brei en te evalueer, insluitend die mag-van-0- en mag-van-1-reëls',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — square a single-digit number ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 9².',
      answer: '81',
      checkMode: 'auto',
      correctAnswer: '81',
      explanation: '9² = 9 × 9 = 81',
    },

    // ── Q2 Easy — find a square root ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind √121.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: '√121 = 11 want 11 × 11 = 121',
    },

    // ── Q3 Medium — identify a non-perfect square ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Is 75 ʼn volkome vierkant? Verduidelik.',
      answer: 'Nee — 8²=64 en 9²=81, dus lê 75 tussen volkome vierkante en het dit geen heelgetal kwadraatwortel nie.',
      checkMode: 'self',
    },

    // ── Q4 Medium — square then root to show inverse relationship ────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 14² en vind dan sy kwadraatwortel.',
      answer: '14²=196. √196=14, wat bevestig dat die kwadraatwortel die kwadratering ongedaan maak.',
      checkMode: 'self',
    },

    // ── Q5 Easy — cube a single-digit number ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 5³.',
      answer: '125',
      checkMode: 'auto',
      correctAnswer: '125',
      explanation: '5³ = 5 × 5 × 5 = 125',
    },

    // ── Q6 Easy — find a cube root ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind ∛64.',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
      explanation: '∛64 = 4 want 4 × 4 × 4 = 64',
    },

    // ── Q7 Medium — find a larger cube root ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind ∛729.',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: '∛729 = 9 want 9 × 9 × 9 = 729',
    },

    // ── Q8 Hard — spot an error involving cube roots and cube numbers ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ∛27=3 en ook dat 3³=9. Vind sy fout.',
      answer: 'Sy kubuswortel is korrek, maar sy tweede stelling is verkeerd — 3³=3×3×3=27, nie 9 nie.',
      checkMode: 'self',
    },

    // ── Q9 Easy — write repeated multiplication in exponential notation ───────
    {
      difficulty: 'Easy',
      question: 'Skryf 4×4×4×4×4 in eksponensiële notasie.',
      answer: '4⁵',
      checkMode: 'auto',
      correctAnswer: '4^5',
      correctAnswers: ['4^5', '4⁵'],
      explanation: 'Daar is 5 viertalle wat met mekaar vermenigvuldig word, dus is die eksponensiële notasie 4⁵.',
    },

    // ── Q10 Easy — apply the zero exponent rule ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 6⁰.',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1. Dus 6⁰ = 1.',
    },

    // ── Q11 Medium — evaluate a power of 2 ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 2⁶.',
      answer: '64',
      checkMode: 'auto',
      correctAnswer: '64',
      explanation: '2⁶ = 2×2×2×2×2×2 = 64',
    },

    // ── Q12 Medium — evaluate and add two exponential expressions ────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 3³ + 4².',
      answer: '43',
      checkMode: 'auto',
      correctAnswer: '43',
      explanation: '3³ = 27 en 4² = 16. 27 + 16 = 43.',
    },

    // ── Q13 Hard — correct a common misconception about squaring ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê 5²=10 want 5×2=10. Is sy korrek? Verduidelik.',
      answer: 'Nee — kwadratering beteken om ʼn getal met homself te vermenigvuldig, dus 5²=5×5=25, nie 5×2 nie.',
      checkMode: 'self',
    },

    // ── Q14 Hard — evaluate a compound exponent expression and explain ────────
    {
      difficulty: 'Hard',
      question: 'Bereken (2³)² en verduidelik wat dit beteken.',
      answer: '2³=8, dan 8²=64. Dit beteken ons kubus eers 2 en kwadreer dan die resultaat.',
      checkMode: 'self',
    },

    // ── Q15 Hard — evaluate a claim about cube roots with a counter-example ───
    {
      difficulty: 'Hard',
      question: 'Amahle sê elke getal het ʼn heelgetal kubuswortel. Is sy korrek? Gee ʼn voorbeeld om jou antwoord te ondersteun.',
      answer: 'Nee — byvoorbeeld ∛10 is nie ʼn heelgetal nie aangesien geen heelgetal gekubus presies 10 gee nie.',
      checkMode: 'self',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 Notasie (grondgetal/eksponent, skryf eksponensiële vorm) |
    // 4-7 Evalueer magte | 8-11 Eksponentwette (vermenigvuldig/deel dieselfde grondgetal) |
    // 12-14 Eksponente 0 en 1 | 15-17 Vergelyk/orden | 18-20 Woordprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'In die uitdrukking 6⁴, watter getal is die grondgetal en watter is die eksponent?', answer: 'Grondgetal = 6, eksponent = 4', checkMode: 'auto', correctAnswer: 'grondgetal6eksponent4', correctAnswers: ['grondgetal6eksponent4', 'grondgetal=6eksponent=4', '6grondgetal4eksponent'], explanation: 'Die grondgetal is die getal wat met homself vermenigvuldig word (6), en die eksponent is die klein verhoogde getal wat wys hoeveel keer om dit te vermenigvuldig (4).' },
        { difficulty: 'Easy', question: 'Skryf 8 × 8 × 8 × 8 × 8 in eksponensiële notasie.', answer: '8⁵', checkMode: 'auto', correctAnswer: '8^5', correctAnswers: ['8^5', '8⁵'], explanation: 'Daar is 5 agte wat met mekaar vermenigvuldig word, dus word dit geskryf as 8⁵ (grondgetal 8, eksponent 5).' },
        { difficulty: 'Easy-Medium', question: 'Thabo skryf 4 × 4 × 4 as 4 × 3. Verduidelik waarom dit verkeerd is en gee die korrekte eksponensiële vorm.', answer: '4 × 3 beteken 4 vermenigvuldig met 3, nie 4 drie keer met homself vermenigvuldig nie. Die korrekte vorm is 4³.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 7².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '7² = 7 × 7 = 49.' },
        { difficulty: 'Easy', question: 'Bereken 2⁷.', answer: '128', checkMode: 'auto', correctAnswer: '128', explanation: '2⁷ = 2×2×2×2×2×2×2 = 128.' },
        { difficulty: 'Medium', question: 'Bereken 3⁵.', answer: '243', checkMode: 'auto', correctAnswer: '243', explanation: '3⁵ = 3×3×3×3×3 = 243.' },
        { difficulty: 'Medium', question: 'Palesa sê 4⁴ = 16 want sy het 4 × 4 bereken. Verduidelik haar fout en gee die korrekte antwoord.', answer: 'Sy het 4 net een keer met homself vermenigvuldig (wat 4² gee), maar die eksponent is 4, dus moet 4 vier keer met homself vermenigvuldig word: 4⁴ = 4×4×4×4 = 256.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 3⁴ × 3² deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 3, en evalueer dit dan.', answer: '3⁶ = 729', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Dieselfde grondgetal, dus tel die eksponente op: 3⁴ × 3² = 3^(4+2) = 3⁶ = 729.' },
        { difficulty: 'Medium', question: 'Vereenvoudig 5⁶ ÷ 5² deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 5, en evalueer dit dan.', answer: '5⁴ = 625', checkMode: 'auto', correctAnswer: '625', correctAnswers: ['625', '5^4=625', '5⁴=625'], explanation: 'Dieselfde grondgetal, dus trek die eksponente af: 5⁶ ÷ 5² = 5^(6−2) = 5⁴ = 625.' },
        { difficulty: 'Medium-Hard', question: 'Kagiso vereenvoudig 2³ × 2⁵ as 2¹⁵, en sê "jy vermenigvuldig die eksponente." Is hy korrek? Verduidelik en gee die korrekte vereenvoudigde antwoord.', answer: 'Nee — wanneer jy magte met dieselfde grondgetal vermenigvuldig, tel jy die eksponente op, jy vermenigvuldig hulle nie. 2³ × 2⁵ = 2^(3+5) = 2⁸ = 256, nie 2¹⁵ nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 4⁵ ÷ 4³ × 4¹, en gee jou antwoord as ʼn enkele mag van 4.', answer: '4³', checkMode: 'auto', correctAnswer: '4^3', correctAnswers: ['4^3', '4³', '64'], explanation: 'Werk van links na regs: 4⁵ ÷ 4³ = 4^(5−3) = 4². Dan 4² × 4¹ = 4^(2+1) = 4³.' },
        { difficulty: 'Easy', question: 'Bereken 9⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 9⁰ = 1.' },
        { difficulty: 'Easy', question: 'Bereken 15¹.', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Enige getal tot die mag 1 is gelyk aan homself, dus 15¹ = 15.' },
        { difficulty: 'Medium', question: 'Bongani sê 0⁰ en 5⁰ moet altwee gelyk wees aan 1 "want enigiets tot die mag 0 is 1, sonder uitsonderings." Verduidelik waarom hierdie redenasie foutief is.', answer: 'Die reël dat ʼn getal tot die mag 0 gelyk is aan 1, geld net vir nie-nul grondgetalle. 0⁰ is ʼn spesiale geval en is nie outomaties gelyk aan 1 soos ander getalle tot die mag 0 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: 2⁶ of 4³? Wys jou werk.', answer: 'Hulle is gelyk — altwee is gelyk aan 64.', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulleisgelyk', 'nieteen'], explanation: '2⁶ = 64 en 4³ = 64, dus is die twee waardes gelyk.' },
        { difficulty: 'Medium', question: 'Orden hierdie van kleinste na grootste: 3³, 2⁵, 5², geskei deur kommas.', answer: '5², 3³, 2⁵', checkMode: 'auto', correctAnswer: '5²3³2⁵', correctAnswers: ['5²,3³,2⁵', '5^2,3^3,2^5', '25,27,32'], explanation: '3³ = 27, 2⁵ = 32, 5² = 25. Die waardes van kleinste na grootste geordend: 25, 27, 32 wat 5², 3³, 2⁵ is.' },
        { difficulty: 'Medium-Hard', question: 'Zinhle beweer 10³ is groter as 3¹⁰ want "10 is ʼn baie groter getal as 3." Is sy korrek? Wys die werklike waardes om jou antwoord te ondersteun.', answer: 'Nee — 10³ = 1 000 maar 3¹⁰ = 59 049, dus is 3¹⁰ baie groter. ʼn Groter grondgetal gee nie altyd ʼn groter resultaat nie; die eksponent maak ook baie saak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige teëlpatroon het 6 teëls langs elke kant van ʼn vierkantige rangskikking. Hoeveel teëls is daar in totaal? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '6² = 36 teëls', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '6^2=36', '6²=36'], explanation: 'ʼn Vierkantige rangskikking met 6 teëls per kant het 6 × 6 = 6² = 36 teëls in totaal.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige opbergboks word gebou uit klein kubusse, met 5 klein kubusse wat langs elke rand pas. Hoeveel klein kubusse vul die boks? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '5³ = 125 klein kubusse', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '5^3=125', '5³=125'], explanation: 'ʼn Kubus met 5 klein kubusse langs elke rand bevat 5 × 5 × 5 = 5³ = 125 klein kubusse.' },
        { difficulty: 'Hard', question: 'ʼn Kolonie bakterieë verdubbel elke uur, beginnende met 1 bakterie. Skryf ʼn eksponensiële uitdrukking vir die aantal bakterieë na 8 uur, en bereken die totaal.', answer: '2⁸ = 256 bakterieë', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Verdubbeling elke uur vanaf 1 bakterie vir 8 uur gee 2⁸ = 256 bakterieë.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eksponensiële notasie en die eksponentwette bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokindeling as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'In die uitdrukking 9³, watter getal is die grondgetal en watter is die eksponent?', answer: 'Grondgetal = 9, eksponent = 3', checkMode: 'auto', correctAnswer: 'grondgetal9eksponent3', correctAnswers: ['grondgetal9eksponent3', 'grondgetal=9eksponent=3', '9grondgetal3eksponent'], explanation: 'Die grondgetal is die getal wat met homself vermenigvuldig word (9), en die eksponent is die klein verhoogde getal wat wys hoeveel keer om dit te vermenigvuldig (3).' },
        { difficulty: 'Easy', question: 'Skryf 5 × 5 × 5 × 5 in eksponensiële notasie.', answer: '5⁴', checkMode: 'auto', correctAnswer: '5^4', correctAnswers: ['5^4', '5⁴'], explanation: 'Daar is 4 vywe wat met mekaar vermenigvuldig word, dus word dit geskryf as 5⁴ (grondgetal 5, eksponent 4).' },
        { difficulty: 'Easy-Medium', question: 'Naledi skryf 6 × 6 × 6 × 6 as 6 × 4. Verduidelik waarom dit verkeerd is en gee die korrekte eksponensiële vorm.', answer: '6 × 4 beteken 6 vermenigvuldig met 4, nie 6 vier keer met homself vermenigvuldig nie. Die korrekte vorm is 6⁴.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 8².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '8² = 8 × 8 = 64.' },
        { difficulty: 'Easy', question: 'Bereken 4⁴.', answer: '256', checkMode: 'auto', correctAnswer: '256', explanation: '4⁴ = 4×4×4×4 = 256.' },
        { difficulty: 'Medium', question: 'Bereken 6³.', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: '6³ = 6×6×6 = 216.' },
        { difficulty: 'Medium', question: 'Sipho sê 3⁵ = 15 want hy het 3 × 5 bereken. Verduidelik sy fout en gee die korrekte antwoord.', answer: 'Hy het die grondgetal met die eksponent vermenigvuldig in plaas daarvan om die grondgetal 5 keer met homself te vermenigvuldig. 3⁵ = 3×3×3×3×3 = 243.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 4² × 4³ deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 4, en evalueer dit dan.', answer: '4⁵ = 1 024', checkMode: 'auto', correctAnswer: '1024', correctAnswers: ['1024', '4^5=1024', '4⁵=1024'], explanation: 'Dieselfde grondgetal, dus tel die eksponente op: 4² × 4³ = 4^(2+3) = 4⁵ = 1 024.' },
        { difficulty: 'Medium', question: 'Vereenvoudig 6⁷ ÷ 6⁴ deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 6, en evalueer dit dan.', answer: '6³ = 216', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '6^3=216', '6³=216'], explanation: 'Dieselfde grondgetal, dus trek die eksponente af: 6⁷ ÷ 6⁴ = 6^(7−4) = 6³ = 216.' },
        { difficulty: 'Medium-Hard', question: 'Amahle vereenvoudig 5³ × 5³ as 5⁹, en sê "jy tel die twee grondgetalle op as ʼn eksponent." Is sy korrek? Verduidelik en gee die korrekte vereenvoudigde antwoord.', answer: 'Nee — jy tel die eksponente op (3 en 3), jy skep nie ʼn nuwe eksponent van iets anders nie. 5³ × 5³ = 5^(3+3) = 5⁶ = 15 625, nie 5⁹ nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 8⁴ ÷ 8² × 8¹, en gee jou antwoord as ʼn enkele mag van 8.', answer: '8³', checkMode: 'auto', correctAnswer: '8^3', correctAnswers: ['8^3', '8³', '512'], explanation: 'Werk van links na regs: 8⁴ ÷ 8² = 8^(4−2) = 8². Dan 8² × 8¹ = 8^(2+1) = 8³.' },
        { difficulty: 'Easy', question: 'Bereken 12⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 12⁰ = 1.' },
        { difficulty: 'Easy', question: 'Bereken 23¹.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Enige getal tot die mag 1 is gelyk aan homself, dus 23¹ = 23.' },
        { difficulty: 'Medium', question: 'Lerato sê n⁰ is altyd gelyk aan 1 vir elke getal n, insluitend n = 0. Verduidelik waarom hierdie redenasie foutief is.', answer: 'Die reël n⁰ = 1 geld net wanneer n nie nul is nie. 0⁰ is ʼn spesiale geval en is nie outomaties gelyk aan 1 soos ander getalle tot die mag 0 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: 3⁴ of 9²? Wys jou werk.', answer: 'Hulle is gelyk — altwee is gelyk aan 81.', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulleisgelyk', 'nieteen'], explanation: '3⁴ = 81 en 9² = 81, dus is die twee waardes gelyk.' },
        { difficulty: 'Medium', question: 'Orden hierdie van kleinste na grootste: 4³, 2⁶, 8², geskei deur kommas.', answer: '4³, 8², 2⁶', checkMode: 'auto', correctAnswer: '4³8²2⁶', correctAnswers: ['4³,8²,2⁶', '4^3,8^2,2^6', '64,64,64'], explanation: '4³ = 64, 2⁶ = 64, 8² = 64. Al drie waardes is gelyk, so enige volgorde wat hulle lys is aanvaarbaar, byvoorbeeld 4³, 8², 2⁶.' },
        { difficulty: 'Medium-Hard', question: 'Sibusiso beweer 5⁴ is groter as 4⁵ want "5 is ʼn groter grondgetal as 4." Is hy korrek? Wys die werklike waardes om jou antwoord te ondersteun.', answer: 'Nee — 5⁴ = 625 maar 4⁵ = 1 024, dus is 4⁵ groter. ʼn Groter grondgetal gee nie altyd ʼn groter resultaat nie; die eksponent maak ook baie saak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige tuinbedding het 7 plante wat langs elke kant van ʼn vierkantige rangskikking groei. Hoeveel plante is daar in totaal? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '7² = 49 plante', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '7^2=49', '7²=49'], explanation: 'ʼn Vierkantige rangskikking met 7 plante per kant het 7 × 7 = 7² = 49 plante in totaal.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige uitstalling van bokse word so gestapel dat 4 bokse langs elke rand van die kubus pas. Hoeveel bokse maak die uitstalling op? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '4³ = 64 bokse', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '4^3=64', '4³=64'], explanation: 'ʼn Kubus met 4 bokse langs elke rand bevat 4 × 4 × 4 = 4³ = 64 bokse.' },
        { difficulty: 'Hard', question: 'ʼn Sosiale media-plasing word deur 3 mense gedeel, en elkeen van daardie mense deel dit met 3 nuwe mense, en hierdie patroon gaan voort. Skryf ʼn eksponensiële uitdrukking vir die aantal nuwe mense wat die plasing sien na 6 rondtes van deel, en bereken die totaal.', answer: '3⁶ = 729 mense', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '3^6=729', '3⁶=729'], explanation: 'Verdrievoudiging by elk van 6 rondtes, beginnende met 1, gee 3⁶ = 729 mense.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eksponensiële notasie en die eksponentwette bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokindeling as Stel 1/2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'In die uitdrukking 11³, watter getal is die grondgetal en watter is die eksponent?', answer: 'Grondgetal = 11, eksponent = 3', checkMode: 'auto', correctAnswer: 'grondgetal11eksponent3', correctAnswers: ['grondgetal11eksponent3', 'grondgetal=11eksponent=3', '11grondgetal3eksponent'], explanation: 'Die grondgetal is die getal wat met homself vermenigvuldig word (11), en die eksponent is die klein verhoogde getal wat wys hoeveel keer om dit te vermenigvuldig (3).' },
        { difficulty: 'Easy', question: 'Skryf 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 in eksponensiële notasie.', answer: '2⁸', checkMode: 'auto', correctAnswer: '2^8', correctAnswers: ['2^8', '2⁸'], explanation: 'Daar is 8 twees wat met mekaar vermenigvuldig word, dus word dit geskryf as 2⁸ (grondgetal 2, eksponent 8).' },
        { difficulty: 'Easy-Medium', question: 'Mpho skryf 9 × 9 × 9 as 9 × 3. Verduidelik waarom dit verkeerd is en gee die korrekte eksponensiële vorm.', answer: '9 × 3 beteken 9 vermenigvuldig met 3, nie 9 drie keer met homself vermenigvuldig nie. Die korrekte vorm is 9³.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 6².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '6² = 6 × 6 = 36.' },
        { difficulty: 'Easy', question: 'Bereken 3⁴.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: '3⁴ = 3×3×3×3 = 81.' },
        { difficulty: 'Medium', question: 'Bereken 2⁸.', answer: '256', checkMode: 'auto', correctAnswer: '256', explanation: '2⁸ = 2×2×2×2×2×2×2×2 = 256.' },
        { difficulty: 'Medium', question: 'Ayanda sê 2⁵ = 10 want sy het 2 × 5 bereken. Verduidelik haar fout en gee die korrekte antwoord.', answer: 'Sy het die grondgetal met die eksponent vermenigvuldig in plaas daarvan om die grondgetal 5 keer met homself te vermenigvuldig. 2⁵ = 2×2×2×2×2 = 32.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Vereenvoudig 2³ × 2⁵ deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 2, en evalueer dit dan.', answer: '2⁸ = 256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '2^8=256', '2⁸=256'], explanation: 'Dieselfde grondgetal, dus tel die eksponente op: 2³ × 2⁵ = 2^(3+5) = 2⁸ = 256.' },
        { difficulty: 'Medium', question: 'Vereenvoudig 9⁵ ÷ 9³ deur die eksponentwette te gebruik. Laat jou antwoord as ʼn mag van 9, en evalueer dit dan.', answer: '9² = 81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'Dieselfde grondgetal, dus trek die eksponente af: 9⁵ ÷ 9³ = 9^(5−3) = 9² = 81.' },
        { difficulty: 'Medium-Hard', question: 'Thandeka vereenvoudig 7⁵ ÷ 7³ as 7^(5×3), en sê "deling beteken jy vermenigvuldig die eksponente." Is sy korrek? Verduidelik en gee die korrekte vereenvoudigde antwoord.', answer: 'Nee — wanneer jy magte met dieselfde grondgetal deel, trek jy die eksponente af, jy vermenigvuldig hulle nie. 7⁵ ÷ 7³ = 7^(5−3) = 7² = 49, nie 7^(5×3) nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 11³ ÷ 11¹ × 11², en gee jou antwoord as ʼn enkele mag van 11.', answer: '11⁴', checkMode: 'auto', correctAnswer: '11^4', correctAnswers: ['11^4', '11⁴', '14641'], explanation: 'Werk van links na regs: 11³ ÷ 11¹ = 11^(3−1) = 11². Dan 11² × 11² = 11^(2+2) = 11⁴.' },
        { difficulty: 'Easy', question: 'Bereken 20⁰.', answer: '1', checkMode: 'auto', correctAnswer: '1', explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 20⁰ = 1.' },
        { difficulty: 'Easy', question: 'Bereken 37¹.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Enige getal tot die mag 1 is gelyk aan homself, dus 37¹ = 37.' },
        { difficulty: 'Medium', question: 'Karabo sê 8⁰ moet gelyk wees aan 8 want "om tot ʼn mag te verhef gee net die grondgetal terug wanneer niks anders gebeur nie." Verduidelik waarom hierdie redenasie foutief is.', answer: 'Om tot die mag 0 te verhef gee nie die grondgetal terug nie — dit is altyd gelyk aan 1 (vir ʼn nie-nul grondgetal), want dit verteenwoordig vermenigvuldiging met die grondgetal nul keer. 8⁰ = 1, nie 8 nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: 4³ of 2⁶? Wys jou werk.', answer: 'Hulle is gelyk — altwee is gelyk aan 64.', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulleisgelyk', 'nieteen'], explanation: '4³ = 64 en 2⁶ = 64, dus is die twee waardes gelyk.' },
        { difficulty: 'Medium', question: 'Orden hierdie van kleinste na grootste: 2⁴, 3³, 5², geskei deur kommas.', answer: '5², 2⁴, 3³', checkMode: 'auto', correctAnswer: '5²2⁴3³', correctAnswers: ['5²,2⁴,3³', '5^2,2^4,3^3', '25,16,27'], explanation: '2⁴ = 16, 3³ = 27, 5² = 25. Die waardes van kleinste na grootste geordend: 16, 25, 27 wat 2⁴, 5², 3³ is.' },
        { difficulty: 'Medium-Hard', question: 'Nomvula beweer 6³ is groter as 3⁶ want "6 is ʼn baie groter grondgetal as 3." Is sy korrek? Wys die werklike waardes om jou antwoord te ondersteun.', answer: 'Nee — 6³ = 216 maar 3⁶ = 729, dus is 3⁶ baie groter. ʼn Groter grondgetal gee nie altyd ʼn groter resultaat nie; die eksponent maak ook baie saak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige binnehof het 9 teëls wat langs elke kant van ʼn vierkantige rangskikking gelê is. Hoeveel teëls is daar in totaal? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '9² = 81 teëls', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '9^2=81', '9²=81'], explanation: 'ʼn Vierkantige rangskikking met 9 teëls per kant het 9 × 9 = 9² = 81 teëls in totaal.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige geskenkboks word met klein kubusse gepak, met 6 klein kubusse wat langs elke rand pas. Hoeveel klein kubusse vul die boks? Skryf jou antwoord in eksponensiële notasie en evalueer dit dan.', answer: '6³ = 216 klein kubusse', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '6^3=216', '6³=216'], explanation: 'ʼn Kubus met 6 klein kubusse langs elke rand bevat 6 × 6 × 6 = 6³ = 216 klein kubusse.' },
        { difficulty: 'Hard', question: 'ʼn Kettingboodskap word aan 2 mense gestuur, en elkeen van daardie mense stuur dit aan na 2 nuwe mense, en hierdie patroon gaan voort. Skryf ʼn eksponensiële uitdrukking vir die aantal nuwe mense wat die boodskap na 10 rondtes van aanstuur ontvang, en bereken die totaal.', answer: '2¹⁰ = 1 024 mense', checkMode: 'auto', correctAnswer: '1024', correctAnswers: ['1024', '2^10=1024', '2¹⁰=1024'], explanation: 'Verdubbeling by elk van 10 rondtes, beginnende met 1, gee 2¹⁰ = 1 024 mense.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eksponensiële notasie en die eksponentwette bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
