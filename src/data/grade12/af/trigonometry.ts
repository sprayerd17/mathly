import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// blue   → CAST quadrant signs / first-angle components / double-angle formula used
// orange → reduction formula applied / second-angle components / substitution
// green  → final value / expanded form / simplified result
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Trigonometrie',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: SPECIAL ANGLES, IDENTITIES AND REDUCTION FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revision-special-angles-identities',
      title: 'Hersiening — Spesiale Hoeke, Identiteite en Reduksieformules',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 12 bou ons voort op die trigonometrie wat in Graad 11 bestudeer is. Hierdie afdeling hersien die <strong>spesiale hoeke</strong>, <strong>fundamentele identiteite</strong>, <strong>CAST-reël</strong>, en <strong>reduksieformules</strong> wat nodig is vir alle Graad 12-trig-werk.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('CAST-kwadrantetekens')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reduksieformule toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale waarde')}</span>` +
        `</div>` +

        // ── Special angles table ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spesiale hoeke</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;width:100%;font-size:14px;text-align:center;">` +
        `<thead><tr style="background:#f1f5f9;">` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">θ</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">30°</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">45°</th>` +
        `<th style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">60°</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">sin θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('½')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√2 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3 / 2')}</td>` +
        `</tr>` +
        `<tr style="background:#f8fafc;">` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">cos θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√2 / 2')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('½')}</td>` +
        `</tr>` +
        `<tr>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;font-weight:700;color:#374151;">tan θ</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('1 / √3')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('1')}</td>` +
        `<td style="padding:8px 12px;border:1.5px solid #e2e8f0;">${gr('√3')}</td>` +
        `</tr>` +
        `</tbody></table>` +
        `</div>` +

        // ── Fundamental identities ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Fundamentele identiteite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;font-size:1.05em;margin-bottom:4px;">tan θ = sin θ / cos θ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Kwosiëntidentiteit</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#166534;font-size:1.05em;margin-bottom:4px;">sin²θ + cos²θ = 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Pythagoras-identiteit</p>` +
        `</div>` +

        `</div>` +

        // ── CAST rule ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die CAST-reël — tekens volgens kwadrant</p>` +
        `<p style="margin-bottom:12px;">Die teken van enige trig-verhouding hang af van watter <strong>kwadrant</strong> die hoek in val. CAST word <strong>anti-kloksgewys</strong> gelees vanaf Kwadrant 4: ${bl('C')}os → ${bl('A')}lle → ${bl('S')}in → ${bl('T')}an.</p>` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-width:340px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px;text-align:center;order:1;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Kwadrant 2</p>` +
        `<p style="font-weight:800;color:#7c3aed;font-size:1.3em;margin-bottom:2px;">${bl('S')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Sin')} positief</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px;text-align:center;order:2;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Kwadrant 1</p>` +
        `<p style="font-weight:800;color:#dc2626;font-size:1.3em;margin-bottom:2px;">${bl('A')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Alles')} positief</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px;text-align:center;order:3;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Kwadrant 3</p>` +
        `<p style="font-weight:800;color:#16a34a;font-size:1.3em;margin-bottom:2px;">${bl('T')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Tan')} positief</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px;text-align:center;order:4;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:4px;">Kwadrant 4</p>` +
        `<p style="font-weight:800;color:#2563eb;font-size:1.3em;margin-bottom:2px;">${bl('C')}</p>` +
        `<p style="font-size:12px;color:#374151;margin:0;">${bl('Cos')} positief</p>` +
        `</div>` +

        `</div>` +

        // ── Reduction formulae ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reduksieformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">180° − θ &nbsp;(Kwadrant 2)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(180°−θ)')} = ${gr('sinθ')}<br>${or('cos(180°−θ)')} = ${gr('−cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">180° + θ &nbsp;(Kwadrant 3)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(180°+θ)')} = ${gr('−sinθ')}<br>${or('cos(180°+θ)')} = ${gr('−cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">360° − θ &nbsp;(Kwadrant 4)</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(360°−θ)')} = ${gr('−sinθ')}<br>${or('cos(360°−θ)')} = ${gr('cosθ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:0.9em;">Negatiewe hoeke</p>` +
        `<p style="margin:0;font-size:13px;line-height:2;">${or('sin(−θ)')} = ${gr('−sinθ')}<br>${or('cos(−θ)')} = ${gr('cosθ')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir enige reduksie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Identifiseer altyd eers die ${or('verwysingsvorm')} (180°±θ, 360°−θ, of −θ), en pas dan die korrekte teken van die ${bl('CAST')}-reël toe om die ${gr('finale gereduseerde uitdrukking')} te verkry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die presiese waarde van sin(210°) met behulp van reduksieformules.',
          answer: `sin(210°) = ${gr('−½')}`,
          steps: [
            `Skryf 210° in terme van ʼn verwysingshoek: ${or('210° = 180° + 30°')} — dit is in ${bl('Kwadrant 3')} waar ${bl('net tan positief is')}, dus is sin ${bl('negatief')}.`,
            `Pas die reduksieformule toe: ${or('sin(180°+θ) = −sinθ')}.`,
            `Vervang θ = 30°: ${or('sin(180°+30°) = −sin30°')}.`,
            `<strong>Antwoord:</strong> sin(210°) = ${gr('−½')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig sin(360°−θ)·cos(−θ) / tan(180°+θ).',
          answer: `${gr('−cos²θ')}`,
          steps: [
            `Pas reduksieformules op elke verhouding afsonderlik toe. ${or('sin(360°−θ) = −sinθ')} (${bl('Kwadrant 4')}: sin negatief).`,
            `${or('cos(−θ) = cosθ')} (negatiewe-hoek-formule: cos is ʼn ewe funksie).`,
            `${or('tan(180°+θ) = tanθ')} (${bl('Kwadrant 3')}: tan positief).`,
            `Vervang: uitdrukking = (${or('−sinθ')}) · cosθ / tanθ.`,
            `Vervang tanθ met sinθ/cosθ: = −sinθ · cosθ ÷ (sinθ/cosθ) = −sinθ · cosθ · (cosθ/sinθ).`,
            `Kanselleer sinθ: = ${gr('−cos²θ')} ✓`,
          ],
        },
        {
          question: 'As sinθ = 3/5 en θ in Kwadrant 2 is, bepaal cosθ en tanθ.',
          answer: `cosθ = ${gr('−4/5')}, &nbsp;tanθ = ${gr('−3/4')}`,
          steps: [
            `Gebruik die Pythagoras-identiteit: sin²θ + cos²θ = 1.`,
            `Vervang: (3/5)² + cos²θ = 1 &nbsp;→&nbsp; cos²θ = 1 − 9/25 = ${or('16/25')}.`,
            `In ${bl('Kwadrant 2')} is cos ${bl('negatief')}: cosθ = ${gr('−4/5')}.`,
            `Pas die kwosiëntidentiteit toe: tanθ = sinθ/cosθ = (3/5)/(−4/5) = ${gr('−3/4')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Bepaal die presiese waarde van cos(300°) met behulp van reduksieformules.',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          correctAnswers: ['1/2', '0,5', '0.5'],
          explanation: '300° = 360° − 60° → Kwadrant 4 waar cos positief is.\ncos(360°−60°) = cos60° = 1/2 ✓',
        },

        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking volledig.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin(180°+θ) / cos(360°−θ)',
              correctAnswer: '−tanθ',
              correctAnswers: ['-tanθ', '-tan(θ)', '−tanθ', '−tan(θ)', '-tan θ'],
              explanation: 'sin(180°+θ) = −sinθ  (K3: sin negatief)\ncos(360°−θ) = cosθ  (K4: cos positief)\n→ (−sinθ)/cosθ = −tanθ ✓',
            },
            {
              label: 'b) cos(−θ)·tan(180°+θ)',
              correctAnswer: 'sinθ',
              correctAnswers: ['sinθ', 'sin(θ)', 'sin θ'],
              explanation: 'cos(−θ) = cosθ  (negatiewe-hoek-formule)\ntan(180°+θ) = tanθ  (K3: tan positief)\n→ cosθ·(sinθ/cosθ) = sinθ ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'As cosα = −5/13 en α in Kwadrant 3 is, bepaal sinα en tanα. Bepaal daarna sin(180°−α).',
          answer: 'Stap 1: sin²α = 1 − 25/169 = 144/169. In K3 is sin negatief, dus sinα = −12/13.\nStap 2: tanα = sinα/cosα = (−12/13)/(−5/13) = 12/5.\nStap 3: sin(180°−α) = sinα = −12/13.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat spesiale hoeke, die CAST-reël, en hoe om reduksieformules toe te pas om trig-uitdrukkings te vereenvoudig, hersien" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-angle-identities',
      title: 'Saamgestelde Hoek Identiteite',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>saamgestelde hoek identiteite</strong> druk die trig-verhoudings van ʼn som of verskil van twee hoeke uit in terme van die individuele verhoudings van elke hoek. Hulle word gebruik om gekombineerde trig-uitdrukkings uit te brei, te vereenvoudig, of te herken — en kan ook in omgekeerde volgorde toegepas word.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste-hoek-komponente')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede-hoek-komponente')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitgebreide vorm')}</span>` +
        `</div>` +

        // ── Formulae ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Saamgestelde hoek formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">sin(α ± β)</p>` +
        `<p style="margin:0;font-size:14px;line-height:2;">${gr('sin(α+β)')} = ${bl('sinα · cosβ')} + ${or('cosα · sinβ')}<br>${gr('sin(α−β)')} = ${bl('sinα · cosβ')} − ${or('cosα · sinβ')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">cos(α ± β)</p>` +
        `<p style="margin:0;font-size:14px;line-height:2;">${gr('cos(α+β)')} = ${bl('cosα · cosβ')} − ${or('sinα · sinβ')}<br>${gr('cos(α−β)')} = ${bl('cosα · cosβ')} + ${or('sinα · sinβ')}</p>` +
        `</div>` +

        `</div>` +

        // ── Sign pattern tip ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let op die tekenpatrone</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir ${bl('sin')}: die teken in die uitbreiding <strong>stem ooreen</strong> met die teken in die hakie (+ bly +, − bly −).<br>Vir ${gr('cos')}: die teken in die uitbreiding is die <strong>teenoorgestelde</strong> (+ word −, − word +).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Brei sin(A + 30°) uit met behulp van die saamgestelde hoek identiteit.',
          answer: `${gr('sin(A+30°) = (√3 sinA + cosA) / 2')}`,
          steps: [
            `Pas die identiteit toe: ${gr('sin(A+30°)')} = ${bl('sinA · cos30°')} + ${or('cosA · sin30°')}.`,
            `Vervang spesiale-hoek-waardes: ${bl('cos30°')} = ${bl('√3/2')} en ${or('sin30°')} = ${or('1/2')}.`,
            `= ${bl('sinA · (√3/2)')} + ${or('cosA · (1/2)')}.`,
            `<strong>Antwoord:</strong> ${gr('sin(A+30°) = (√3 sinA + cosA)/2')} ✓`,
          ],
        },
        {
          question: 'Toon dat sin75° = (√6+√2)/4, deur sin(45°+30°) te gebruik.',
          answer: `${gr('sin75° = (√6 + √2)/4')}`,
          steps: [
            `Skryf sin75° = ${or('sin(45°+30°)')}.`,
            `Pas toe: ${or('sin(45°+30°)')} = ${bl('sin45° · cos30°')} + ${or('cos45° · sin30°')}.`,
            `Vervang: = ${bl('(√2/2) · (√3/2)')} + ${or('(√2/2) · (1/2)')}.`,
            `= ${bl('√6/4')} + ${or('√2/4')}.`,
            `<strong>Antwoord:</strong> ${gr('sin75° = (√6+√2)/4')} ✓`,
          ],
        },
        {
          question: 'Brei uit en vereenvoudig cos(x+y)·cos(x−y).',
          answer: `${gr('cos²x·cos²y − sin²x·sin²y')}`,
          steps: [
            `Brei ${bl('cos(x+y)')} uit = ${bl('cosxcosy − sinxsiny')}.`,
            `Brei ${or('cos(x−y)')} uit = ${or('cosxcosy + sinxsiny')}.`,
            `Vermenigvuldig: (${bl('cosxcosy − sinxsiny')})(${or('cosxcosy + sinxsiny')}).`,
            `Dit is ʼn verskil van vierkante (a−b)(a+b) = a²−b² met a = cosxcosy, b = sinxsiny.`,
            `<strong>Antwoord:</strong> ${gr('cos²xcos²y − sin²xsin²y')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Brei cos(A − 45°) uit met behulp van die saamgestelde hoek identiteit. Los jou antwoord in vereenvoudigde wortelvorm.',
          answer: '(cosA + sinA)/√2',
          checkMode: 'self',
        },

        {
          difficulty: 'Medium',
          question: 'Gebruik saamgestelde hoek formules om elke presiese waarde te bepaal.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) cos15° met behulp van cos(45°−30°)',
              correctAnswer: '(√6+√2)/4',
              correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'],
              explanation: 'cos(45°−30°) = cos45°cos30° + sin45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4 = (√6+√2)/4 ✓',
            },
            {
              label: 'b) sin105° met behulp van sin(60°+45°)',
              correctAnswer: '(√6+√2)/4',
              correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'],
              explanation: 'sin(60°+45°) = sin60°cos45° + cos60°sin45°\n= (√3/2)(√2/2) + (1/2)(√2/2)\n= √6/4 + √2/4 = (√6+√2)/4 ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'Bewys dat cos(x+y) + cos(x−y) = 2cosxcosy.',
          answer: 'LK = (cosxcosy − sinxsiny) + (cosxcosy + sinxsiny)\n= 2cosxcosy − sinxsiny + sinxsiny\n= 2cosxcosy\n= RK ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die saamgestelde hoek identiteite vir sin en cos bekendstel met uitgewerkte voorbeelde wat uitbreiding en presiese-waarde-berekeninge toon" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DOUBLE ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'double-angle-identities',
      title: 'Dubbelhoek Identiteite',
      icon: '2θ',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>dubbelhoek identiteite</strong> is spesiale gevalle van die saamgestelde hoek identiteite waar albei hoeke gelyk is (α = β). Hulle is uiters nuttig om uitdrukkings te vereenvoudig en vergelykings op te los.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dubbelhoek formule gebruik')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vervanging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde resultaat')}</span>` +
        `</div>` +

        // ── Formulae ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dubbelhoek formules</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">sin 2α</p>` +
        `<p style="margin:0;font-size:14px;">${bl('sin 2α')} = ${gr('2 sinα cosα')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">cos 2α — drie ekwivalente vorme</p>` +
        `<p style="margin:0;font-size:14px;line-height:2.1;">${bl('cos 2α')} = ${gr('cos²α − sin²α')}<br>${bl('cos 2α')} = ${gr('1 − 2sin²α')}<br>${bl('cos 2α')} = ${gr('2cos²α − 1')}</p>` +
        `</div>` +

        `</div>` +

        // ── Which form to use ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Watter vorm van cos 2α moet jy gebruik?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;font-size:0.9em;">cos²α − sin²α</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gebruik wanneer albei sinα en cosα reeds in die uitdrukking voorkom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;font-size:0.9em;">1 − 2sin²α</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gebruik wanneer jy cos²α wil elimineer, deur dit via sin² te vervang.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;font-size:0.9em;">2cos²α − 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gebruik wanneer jy sin²α wil elimineer, deur dit via cos² te vervang.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Aflei van die alternatiewe vorme</p>` +
        `<p style="margin:0;color:#1e3a8a;">Begin by cos²α − sin²α. Vervang ${or('cos²α = 1 − sin²α')} om <strong>1 − 2sin²α</strong> te kry, of vervang ${or('sin²α = 1 − cos²α')} om <strong>2cos²α − 1</strong> te kry. Al drie vorme is ekwivalent — kies watter een ook al die algebra die eenvoudigste maak.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'As sinα = 5/13 en α skerp is, bepaal sin2α en cos2α.',
          answer: `sin2α = ${gr('120/169')}, &nbsp;cos2α = ${gr('119/169')}`,
          steps: [
            `Aangesien α skerp is en ${or('sinα = 5/13')}, bepaal cosα met sin²α + cos²α = 1.`,
            `cos²α = 1 − (5/13)² = 1 − 25/169 = ${or('144/169')}. Aangesien α skerp is, cosα = ${or('12/13')}.`,
            `Pas ${bl('sin2α = 2sinαcosα')} toe: = 2 · (5/13) · (12/13) = ${gr('120/169')}.`,
            `Pas ${bl('cos2α = cos²α − sin²α')} toe: = (144/169) − (25/169) = ${gr('119/169')} ✓`,
          ],
        },
        {
          question: 'Bewys dat sin2α / (1 + cos2α) = tanα.',
          answer: `${gr('LK = tanα = RK ✓')}`,
          steps: [
            `Skryf LK met ${bl('sin2α')} en ${bl('cos2α')}: LK = ${bl('sin2α')} / (1 + ${bl('cos2α')}).`,
            `Vervang ${or('sin2α = 2sinαcosα')} en ${or('cos2α = 2cos²α − 1')}.`,
            `Vereenvoudig die noemer: 1 + (2cos²α − 1) = ${or('2cos²α')}.`,
            `LK = ${or('2sinαcosα')} / ${or('2cos²α')} = sinα/cosα = ${gr('tanα')} = RK ✓`,
          ],
        },
        {
          question: 'Los op vir α (0° ≤ α ≤ 360°): cos2α = cosα.',
          answer: `α = ${gr('0°, 120°, 240°, 360°')}`,
          steps: [
            `Gebruik ${bl('cos2α = 2cos²α − 1')} om alles in terme van cosα te skryf: ${or('2cos²α − 1 = cosα')}.`,
            `Herrangskik: ${or('2cos²α − cosα − 1 = 0')}.`,
            `Faktoriseer: ${or('(2cosα + 1)(cosα − 1) = 0')}.`,
            `Dus cosα = ${gr('−½')} of cosα = ${gr('1')}.`,
            `cosα = −½: verwysingshoek = 60°. ${bl('Kwadrant 2')}: α = ${gr('120°')}; ${bl('Kwadrant 3')}: α = ${gr('240°')}.`,
            `cosα = 1: α = ${gr('0°')} of α = ${gr('360°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'As cosα = 3/5 en α skerp is, bereken die presiese waarde van sin2α.',
          answer: '24/25',
          checkMode: 'auto',
          correctAnswer: '24/25',
          explanation: 'sinα = 4/5  (met sin²α + cos²α = 1, α skerp)\nsin2α = 2sinαcosα = 2·(4/5)·(3/5) = 24/25 ✓',
        },

        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking met behulp van dubbelhoek identiteite.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2sin3x · cos3x',
              correctAnswer: 'sin6x',
              correctAnswers: ['sin6x', 'sin(6x)', 'sin 6x'],
              explanation: '2sinθcosθ = sin2θ, met θ = 3x.\n→ 2sin3xcos3x = sin(2·3x) = sin6x ✓',
            },
            {
              label: 'b) 1 − 2sin²(x/2)',
              correctAnswer: 'cosx',
              correctAnswers: ['cosx', 'cos(x)', 'cos x'],
              explanation: '1 − 2sin²α = cos2α, met α = x/2.\n→ 1 − 2sin²(x/2) = cos(2·x/2) = cosx ✓',
            },
          ],
        },

        {
          difficulty: 'Hard',
          question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x = sinx.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gebruik sin2x = 2sinxcosx om te herskryf as 2sinxcosx − sinx = 0.',
              correctAnswer: 'sinx(2cosx-1)=0',
              correctAnswers: ['sinx(2cosx-1)=0', 'sin x(2cos x - 1) = 0', '2sinxcosx−sinx=0', '2sinxcosx - sinx = 0'],
              explanation: 'sin2x = 2sinxcosx\n2sinxcosx − sinx = 0\nFaktoriseer: sinx(2cosx − 1) = 0 ✓',
            },
            {
              label: 'b) Los sinx = 0 op.',
              correctAnswer: '0, 180, 360',
              correctAnswers: ['0°, 180°, 360°', 'x = 0, 180, 360', '0, 180, 360', 'x=0,180,360'],
              explanation: 'sinx = 0 → x = 0°, 180°, 360° ✓',
            },
            {
              label: 'c) Los 2cosx − 1 = 0 op (d.w.s. cosx = 1/2).',
              correctAnswer: '60, 300',
              correctAnswers: ['60°, 300°', 'x = 60, 300', '60, 300', 'x=60,300'],
              explanation: 'cosx = 1/2 → verwysingshoek = 60°.\nK1: x = 60°;  K4: x = 300°.\nVolledige oplossing: x = 0°, 60°, 180°, 300°, 360° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die dubbelhoek identiteite van saamgestelde hoeke aflei en dit toepas om uitdrukkings te vereenvoudig en trig-vergelykings op te los" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING TRIG EQUATIONS USING COMPOUND AND DOUBLE ANGLE IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-trig-equations-compound-double',
      title: 'Trigonometriese Vergelykings Oplos met Saamgestelde en Dubbelhoek Identiteite',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die algemene-oplossing-tegnieke van Graad 11 uit om vergelykings op te los wat eers vereenvoudig moet word met behulp van <strong>saamgestelde of dubbelhoek identiteite</strong> voordat die standaard-oplossingsmetodes toegepas word. Die sleutelstrategie is om die vergelyking in terme van ʼn <strong>enkele trig-verhouding</strong> te herskryf voordat dit opgelos word.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('identiteitsvervanging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gefaktoriseerde vorm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('alle oplossings')}</span>` +
        `</div>` +

        // ── Strategy box ──────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algemene strategie</p>` +
        `<ol style="margin:0;padding-left:18px;color:#1e3a8a;line-height:1.9;font-size:14px;">` +
        `<li>${bl('Vervang')} die saamgestelde of dubbelhoek identiteit om alles in terme van ʼn enkele trig-verhouding uit te druk.</li>` +
        `<li>Skuif alle terme na een kant en ${or('faktoriseer')}.</li>` +
        `<li>Stel elke faktor gelyk aan nul en ${gr('lys alle oplossings')} in die gegewe interval.</li>` +
        `</ol>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x (0° ≤ x ≤ 360°): sin 2x = sin x.',
          answer: `x = ${gr('0°, 60°, 180°, 300°, 360°')}`,
          steps: [
            `${bl('Vervang')} die dubbelhoek identiteit: ${bl('sin 2x = 2 sin x cos x')}.`,
            `Vergelyking word: 2 sin x cos x = sin x.`,
            `Skuif alle terme na een kant: 2 sin x cos x − sin x = 0.`,
            `${or('Faktoriseer')}: ${or('sin x (2 cos x − 1) = 0')}.`,
            `Stel elke faktor gelyk aan nul: sin x = 0 &nbsp;of&nbsp; cos x = ½.`,
            `sin x = 0: ${gr('x = 0°, 180°, 360°')}.`,
            `cos x = ½ → verwysingshoek = 60°, Kwadrante 1 en 4: ${gr('x = 60°, 300°')}.`,
            `<strong>Alle oplossings:</strong> ${gr('x = 0°, 60°, 180°, 300°, 360°')} ✓`,
          ],
        },
        {
          question: 'Los op vir x (0° ≤ x ≤ 360°): cos 2x + cos x = 0.',
          answer: `x = ${gr('60°, 180°, 300°')}`,
          steps: [
            `${bl('Vervang')} die identiteit ${bl('cos 2x = 2 cos²x − 1')} (gekies om alles in cos x te skryf).`,
            `Vergelyking word: 2 cos²x − 1 + cos x = 0.`,
            `Herrangskik: 2 cos²x + cos x − 1 = 0.`,
            `${or('Faktoriseer')}: ${or('(2 cos x − 1)(cos x + 1) = 0')}.`,
            `Stel elke faktor gelyk aan nul: cos x = ½ &nbsp;of&nbsp; cos x = −1.`,
            `cos x = ½ → verwysingshoek = 60°, Kwadrante 1 en 4: ${gr('x = 60°, 300°')}.`,
            `cos x = −1: ${gr('x = 180°')}.`,
            `<strong>Alle oplossings:</strong> ${gr('x = 60°, 180°, 300°')} ✓`,
          ],
        },
        {
          question: 'Lerato los sin 2x = cos x op vir x (0° ≤ x ≤ 360°). Skryf die volledige oplossing neer.',
          answer: `x = ${gr('30°, 90°, 150°, 270°')}`,
          steps: [
            `${bl('Vervang')} die dubbelhoek identiteit: ${bl('sin 2x = 2 sin x cos x')}.`,
            `Vergelyking word: 2 sin x cos x = cos x.`,
            `Skuif alle terme na een kant: 2 sin x cos x − cos x = 0.`,
            `${or('Faktoriseer')}: ${or('cos x (2 sin x − 1) = 0')}.`,
            `Stel elke faktor gelyk aan nul: cos x = 0 &nbsp;of&nbsp; sin x = ½.`,
            `cos x = 0: ${gr('x = 90°, 270°')}.`,
            `sin x = ½ → verwysingshoek = 30°, Kwadrante 1 en 2: ${gr('x = 30°, 150°')}.`,
            `<strong>Alle oplossings:</strong> ${gr('x = 30°, 90°, 150°, 270°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x (0° ≤ x ≤ 360°): sin 2x = 0.',
          answer: '0°, 90°, 180°, 270°, 360°',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x (0° ≤ x ≤ 360°): cos 2x = sin x.',
          answer: '1 − 2sin²x = sinx  →  2sin²x + sinx − 1 = 0  →  (2sinx − 1)(sinx + 1) = 0\nsinx = ½ → x = 30°, 150°\nsinx = −1 → x = 270°\nAlle oplossings: x = 30°, 150°, 270°',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Los op vir x (0° ≤ x ≤ 360°): cos 2x + sin x = 0. Toon alle stappe duidelik.',
          answer: '1 − 2sin²x + sinx = 0  →  2sin²x − sinx − 1 = 0  →  (2sinx + 1)(sinx − 1) = 0\nsinx = −½ → x = 210°, 330°\nsinx = 1 → x = 90°\nAlle oplossings: x = 90°, 210°, 330°',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om dubbelhoek identiteite te gebruik om trig-vergelykings te vereenvoudig voordat dit binne ʼn gegewe interval gefaktoriseer en opgelos word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PROVING TRIGONOMETRIC IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-trig-identities',
      title: 'Trigonometriese Identiteite Bewys',
      icon: '⊢',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Trigonometriese identiteit</strong> is ʼn vergelyking wat waar is vir alle geldige waardes van die veranderlike. Om ʼn identiteit te bewys werk ons op <strong>net een kant</strong> (gewoonlik die meer komplekse kant) en gebruik bekende identiteite, reduksieformules, en algebraïese manipulasie totdat ons die ander kant bereik. Ons <strong>kruisvermenigvuldig of skuif nooit terme tussen kante</strong> tydens die bewys nie.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('LK-manipulasie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('identiteit gebruik')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ooreenstemmende RK')}</span>` +
        `</div>` +

        // ── Rules box ─────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Reëls vir die bewys van identiteite</p>` +
        `<ul style="margin:0;padding-left:18px;color:#92400e;line-height:1.9;font-size:14px;">` +
        `<li>Werk op <strong>net een kant</strong> — begin met die meer komplekse kant.</li>` +
        `<li>Gebruik bekende identiteite (Pythagoras, kwosiënt, dubbelhoek, saamgestelde hoek).</li>` +
        `<li>Faktoriseer of brei uit soos nodig, en vereenvoudig dan stap vir stap.</li>` +
        `<li><strong>Kruisvermenigvuldig nooit</strong> en skuif nooit terme oor die gelykaanteken nie.</li>` +
        `</ul>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bewys dat (sin x + cos x)² = 1 + sin 2x.',
          answer: `${gr('LK = 1 + sin 2x = RK ✓')}`,
          steps: [
            `${bl('Begin met LK')}: (sin x + cos x)².`,
            `${bl('Brei uit')}: sin²x + 2 sin x cos x + cos²x.`,
            `${or('Pas sin²x + cos²x = 1 toe')}: die eerste en laaste terme val saam tot 1.`,
            `${or('Pas 2 sin x cos x = sin 2x toe')}: die middelste term word sin 2x.`,
            `LK = ${gr('1 + sin 2x')} = RK ✓`,
          ],
        },
        {
          question: 'Bewys dat cos 2x / (sin x cos x) = cos x/sin x − sin x/cos x.',
          answer: `${gr('LK = cos x/sin x − sin x/cos x = RK ✓')}`,
          steps: [
            `${bl('Begin met LK')}: cos 2x / (sin x cos x).`,
            `${or('Vervang cos 2x = cos²x − sin²x')}: LK = (cos²x − sin²x) / (sin x cos x).`,
            `${bl('Verdeel die breuk')}: = cos²x/(sin x cos x) − sin²x/(sin x cos x).`,
            `${bl('Kanselleer gemeenskaplike faktore in elke term')}: = cos x/sin x − sin x/cos x.`,
            `LK = ${gr('cos x/sin x − sin x/cos x')} = RK ✓`,
          ],
        },
        {
          question: 'Bewys dat (1 − cos 2x) / sin 2x = tan x.',
          answer: `${gr('LK = tan x = RK ✓')}`,
          steps: [
            `${bl('Begin met die teller van LK')}: 1 − cos 2x.`,
            `${or('Vervang cos 2x = 1 − 2 sin²x')}: 1 − (1 − 2 sin²x) = ${or('2 sin²x')}.`,
            `${bl('Herskryf die noemer')}: sin 2x = ${or('2 sin x cos x')}.`,
            `${bl('LK')}: = (2 sin²x) / (2 sin x cos x).`,
            `${bl('Kanselleer die gemeenskaplike faktor van 2 sin x')}: = sin x / cos x.`,
            `LK = ${gr('tan x')} = RK ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Bewys dat sin 2x / (2 cos x) = sin x.',
          answer: 'LK = 2sinxcosx / (2cosx) = sinx = RK ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bewys dat cos²x − sin²x = 1 − 2sin²x.',
          answer: 'LK = cos²x − sin²x\nVervang cos²x = 1 − sin²x:\n= (1 − sin²x) − sin²x = 1 − 2sin²x = RK ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Bewys dat (cos 2x + 1) / (sin 2x) = cos x / sin x.',
          answer: 'LK-teller: cos2x + 1 = (2cos²x − 1) + 1 = 2cos²x\nLK-noemer: sin2x = 2sinxcosx\nLK = 2cos²x / (2sinxcosx) = cosx/sinx = RK ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die reëls vir die bewys van trig-identiteite verduidelik en deur voorbeelde stap wat saamgestelde en dubbelhoek identiteite gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — PROBLEMS IN TWO AND THREE DIMENSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problems-2d-3d',
      title: 'Probleme in Twee en Drie Dimensies',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike probleme op in <strong>2D</strong> (met behulp van die sin reël, cos reël en oppervlakte-reël op ʼn plat vlak) en brei hierdie tegnieke uit na <strong>3D-probleme</strong> wat hoogtes, afstande en hoeke tussen voorwerpe in drie-dimensionele ruimte behels. In 3D-probleme breek ons die diagram gewoonlik op in verskeie reghoekige of nie-reghoekige driehoeke, los elkeen afsonderlik op, en kombineer die resultate. Ons gebruik <strong>hoogtehoeke</strong> (opkyk vanaf horisontaal) en <strong>dieptehoeke</strong> (afkyk vanaf horisontaal), en pas dikwels die sin reël toe oor driehoeke wat ʼn gemeenskaplike sy deel.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('2D-driehoek-komponente')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('3D-hoogte / -diepte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Key rules ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel-reëls gebruik</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">Sin reël</p>` +
        `<p style="margin:0;font-size:14px;">${bl('a / sinA = b / sinB = c / sinC')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Gebruik wanneer jy ʼn hoek-teenoorstaande-sy-paar ken.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:8px;">Cos reël</p>` +
        `<p style="margin:0;font-size:14px;">${bl('a² = b² + c² − 2bc · cosA')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Gebruik wanneer jy twee sye en die ingeslote hoek ken, of al drie sye.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Oppervlakte-reël</p>` +
        `<p style="margin:0;font-size:14px;">${or('Oppervlakte = ½ · b · c · sinA')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-top:6px;">Gebruik wanneer jy twee sye en die ingeslote hoek ken.</p>` +
        `</div>` +

        `</div>` +

        // ── 3D strategy ───────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir 3D-probleme</p>` +
        `<ol style="margin:0;padding-left:18px;color:#1e3a8a;line-height:1.9;font-size:14px;">` +
        `<li>Teken ʼn duidelike diagram en merk alle ${bl('horisontale afstande')}, ${or('vertikale hoogtes')}, en gegewe hoeke.</li>` +
        `<li>Identifiseer ʼn horisontale driehoek in die grondvlak — los dit op met die ${bl('sin- of cos reël')} om ʼn horisontale afstand te vind wat met ʼn vertikale driehoek gedeel word.</li>` +
        `<li>Gebruik ʼn ${or('reghoekige vertikale driehoek')} met die hoogte- of dieptehoek (tan, sin, of cos) om die ${or('hoogte')} met die horisontale afstand van stap 2 te verbind.</li>` +
        `<li>Kombineer die resultate om die ${gr('finale antwoord')} te kry.</li>` +
        `</ol>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In driehoek ABC is AB = 7 cm, BC = 10 cm en ∠ABC = 60°. Bepaal (a) die oppervlakte van driehoek ABC en (b) die lengte van AC.',
          answer: `Oppervlakte = ${gr('35√3/2 ≈ 30,31 cm²')}, &nbsp;AC = ${gr('√79 ≈ 8,89 cm')}`,
          steps: [
            `<strong>Deel (a) — Oppervlakte:</strong> Pas die ${bl('oppervlakte-reël')} toe: Oppervlakte = ½ · AB · BC · sin(∠ABC).`,
            `Vervang: Oppervlakte = ½ · ${bl('7')} · ${bl('10')} · sin${bl('60°')} = 35 · (√3/2) ≈ ${gr('30,31 cm²')}.`,
            `<strong>Deel (b) — Lengte AC:</strong> Pas die ${bl('cos reël')} toe: AC² = AB² + BC² − 2 · AB · BC · cos(∠ABC).`,
            `Vervang: AC² = ${bl('49')} + ${bl('100')} − 2 · ${bl('7')} · ${bl('10')} · cos${bl('60°')} = 149 − 140 · (0,5) = 149 − 70 = ${or('79')}.`,
            `<strong>Antwoord:</strong> AC = √79 ≈ ${gr('8,89 cm')} ✓`,
          ],
        },
        {
          question: 'Gebou TP het sy basis P op dieselfde horisontale vlak as punte Q en R. Vanaf Q is die hoogtehoek na die bopunt T gelyk aan x. Hoek PQR = 150°, hoek QPR = y, en PR = a meter. Bewys dat TP = a · tanx · (cosy + √3 · siny) / 2.',
          answer: `${gr('TP = a · tanx · (cosy + √3 · siny) / 2 ✓')}`,
          steps: [
            `In ${bl('driehoek PQR')} tel die hoeke op tot 180°: ∠PQR + ∠QPR + ∠PRQ = 180°, dus ∠PRQ = 180° − 150° − y = ${bl('30° − y')}.`,
            `Pas die ${bl('sin reël')} in driehoek PQR toe: PQ / sin(∠PRQ) = PR / sin(∠PQR).`,
            `Vervang: PQ / sin(30° − y) = ${bl('a')} / sin(150°) = ${bl('a')} / (½) = ${bl('2a')}, &nbsp;dus ${bl('PQ = 2a · sin(30° − y)')}.`,
            `In reghoekige ${or('driehoek TPQ')} (TP vertikaal, PQ horisontaal): ${or('tanx = TP / PQ')}, dus ${or('TP = PQ · tanx = 2a · tanx · sin(30° − y)')}.`,
            `Brei uit met die saamgestelde hoek formule: sin(30° − y) = sin30°cosy − cos30°siny = (1/2)cosy − (√3/2)siny.`,
            `Ekwivalent, let op dat ${or('cos(30° − y) = cos30°cosy + sin30°siny = (√3/2)cosy + (1/2)siny')}, dus sin(30° + y) = (1/2)cosy + (√3/2)siny = ${or('(cosy + √3 · siny) / 2')}.`,
            `Vervang die ekwivalente saamgestelde-hoek-resultaat: TP = 2a · tanx · ${or('(cosy + √3 · siny) / 2')} = ${gr('a · tanx · (cosy + √3 · siny) / 2')} ✓`,
          ],
        },
        {
          question: 'Sipho staan by A en bekyk die bopunt T van ʼn vertikale toring TC vanaf twee posisies A en B op dieselfde horisontale vlak, waar ∠TAC = 50°, ∠TBC = 65°, AB = 30 m, en A, B, C kollineêr is. Bepaal die hoogte van die toring.',
          answer: `TC ≈ ${gr('69,5 m')}`,
          steps: [
            `Laat ${or('TC = h')} (die hoogte van die toring) en ${or('BC = d')} (horisontale afstand van B na die basis).`,
            `In reghoekige driehoek TBC: ${or('tan65° = h / d')}, dus ${or('d = h / tan65°')}.`,
            `In reghoekige driehoek TAC: ${or('tan50° = h / (d + 30)')}, aangesien AC = BC + AB = d + 30.`,
            `Vervang die uitdrukking vir d: ${or('tan50° = h / (h / tan65° + 30)')}.`,
            `Kruisvermenigvuldig: ${or('h / tan65° + 30 = h / tan50°')}.`,
            `Herrangskik: ${or('h / tan50° − h / tan65° = 30')}, &nbsp;dus ${or('h (1/tan50° − 1/tan65°) = 30')}.`,
            `Bereken: 1/tan50° ≈ 0,8391, &nbsp;1/tan65° ≈ 0,4663, &nbsp;verskil ≈ 0,3728.`,
            `<strong>Antwoord:</strong> h = 30 / 0,3728 ≈ ${gr('69,5 m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In driehoek PQR is PQ = 5 cm, PR = 8 cm en ∠QPR = 40°. Bereken die oppervlakte van driehoek PQR.',
          answer: '½ · 5 · 8 · sin40° = 20 · sin40° ≈ 20 · 0,6428 ≈ 12,86 cm²',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'In driehoek KLM is KL = 9 cm, KM = 12 cm en ∠LKM = 55°.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken die oppervlakte van driehoek KLM.',
              correctAnswer: '44,23',
              correctAnswers: ['44,23', '44.23', '44,2', '44.2', '44'],
              explanation: 'Oppervlakte = ½ · 9 · 12 · sin55° = 54 · 0,8192 ≈ 44,23 cm² ✓',
            },
            {
              label: 'b) Bereken die lengte van LM (korrek tot 2 desimale plekke).',
              correctAnswer: '10,05',
              correctAnswers: ['10,05', '10.05', '10,06', '10.06', '10,04', '10.04'],
              explanation: 'LM² = 9² + 12² − 2(9)(12)cos55° = 81 + 144 − 216 · 0,5736 ≈ 225 − 123,90 = 101,10\nLM = √101,10 ≈ 10,05 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vertikale mas TM staan by M op horisontale grond. Vanaf punt A op die grond is die hoogtehoek na T 35°. Vanaf punt B, ook op die grond en 20 m nader aan die mas langs die reguit lyn AB (sodat B tussen A en M lê, met A, B, M kollineêr), is die hoogtehoek na T 48°. Bepaal die hoogte van die mas TM.',
          answer: 'Laat TM = h, BM = d.\nVanaf B: tan48° = h/d → d = h/tan48°.\nVanaf A: tan35° = h/(d + 20) → d + 20 = h/tan35°.\nTrek af: 20 = h(1/tan35° − 1/tan48°) = h(1,4281 − 0,9004) = h · 0,5277.\nh = 20/0,5277 ≈ 37,9 m.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 2D- en 3D-trigonometrieprobleme op te los deur horisontale en vertikale driehoeke te identifiseer, die sin reël en cos reël toe te pas, en hoogte- en dieptehoeke te gebruik" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — slegs inhoud, nog geen diagramme nie (Fase 1)
    // Blok 1 (0-2):   Reduksieformules / CAST                              — abstrak, geen diagram
    // Blok 2 (3-5):   Saamgestelde hoek identiteite — uitbrei / presies    — abstrak, geen diagram
    // Blok 3 (6-8):   Dubbelhoek identiteite — bereken / vereenvoudig      — abstrak, geen diagram
    // Blok 4 (9-12):  Trig-vergelykings oplos met identiteite              — abstrak, geen diagram
    // Blok 5 (13-15): Trig-identiteite bewys                               — abstrak, geen diagram
    // Blok 6 (16-19): 2D/3D-probleme — oppervlakte/cos reël, hoogtehoek-kombinasie — BENODIG DIAGRAM (16,17,19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Reduksieformules / CAST (Maklik/Maklik/Matig)
        { difficulty: 'Easy', question: 'Gebruik ʼn reduksieformule om sin(150°) presies te bepaal.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '0,5', '0.5', '½'], answer: '1/2', explanation: '150° = 180° − 30°, wat in Kwadrant 2 is waar sin positief is.\nsin(180°−30°) = sin30° = 1/2 ✓' },
        { difficulty: 'Easy', question: 'As cosθ = 4/5 en θ in Kwadrant 4 is, bepaal sinθ.', checkMode: 'auto', correctAnswer: '-3/5', correctAnswers: ['-3/5', '−3/5', '-0,6', '-0.6', '−0,6', '−0.6'], answer: '−3/5', explanation: 'sin²θ = 1 − (4/5)² = 1 − 16/25 = 9/25.\nIn Kwadrant 4 is sin negatief, dus sinθ = −3/5 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig volledig: sin(360°−x) · cos(180°+x) / sin(180°−x).', checkMode: 'auto', correctAnswer: 'cosx', correctAnswers: ['cosx', 'cos(x)', 'cos x'], answer: 'cos x', explanation: 'sin(360°−x) = −sinx  (K4: sin negatief)\ncos(180°+x) = −cosx  (K3: cos negatief)\nsin(180°−x) = sinx  (K2: sin positief)\n(−sinx)(−cosx)/sinx = sinx·cosx/sinx = cosx ✓' },

        // Blok 2 — Saamgestelde hoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Brei sin(x + 60°) uit met behulp van die saamgestelde hoek identiteit.', checkMode: 'auto', correctAnswer: '(sinx+√3cosx)/2', correctAnswers: ['(sinx+√3cosx)/2', '(sinx + √3cosx)/2', '(sin x + √3 cos x)/2', 'sinx/2+√3cosx/2'], answer: '(sinx + √3cosx)/2', explanation: 'sin(x+60°) = sinx·cos60° + cosx·sin60°\n= sinx·(1/2) + cosx·(√3/2)\n= (sinx + √3cosx)/2 ✓' },
        { difficulty: 'Medium', question: 'Gebruik cos(60°−45°) om die presiese waarde van cos15° te bepaal.', checkMode: 'auto', correctAnswer: '(√6+√2)/4', correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'], answer: '(√6+√2)/4', explanation: 'cos(60°−45°) = cos60°cos45° + sin60°sin45°\n= (1/2)(√2/2) + (√3/2)(√2/2)\n= √2/4 + √6/4 = (√6+√2)/4 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat sin(x+y) − sin(x−y) = 2cosx·siny.', answer: 'sin(x+y) = sinxcosy + cosxsiny\nsin(x−y) = sinxcosy − cosxsiny\nTrek af: sin(x+y) − sin(x−y) = (sinxcosy + cosxsiny) − (sinxcosy − cosxsiny)\n= 2cosxsiny ✓', checkMode: 'self' },

        // Blok 3 — Dubbelhoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'As sinα = 8/17 en α skerp is, bereken die presiese waarde van sin2α.', checkMode: 'auto', correctAnswer: '240/289', correctAnswers: ['240/289'], answer: '240/289', explanation: 'cosα = 15/17  (met sin²α + cos²α = 1, α skerp)\nsin2α = 2sinαcosα = 2·(8/17)·(15/17) = 240/289 ✓' },
        { difficulty: 'Medium', question: 'As cosα = 7/25 en α skerp is, bereken die presiese waarde van cos2α.', checkMode: 'auto', correctAnswer: '-527/625', correctAnswers: ['-527/625', '−527/625'], answer: '−527/625', explanation: 'sinα = 24/25  (met sin²α + cos²α = 1, α skerp)\ncos2α = cos²α − sin²α = (7/25)² − (24/25)² = 49/625 − 576/625 = −527/625 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat cos4x = 8cos⁴x − 8cos²x + 1. (Wenk: skryf cos4x = cos2(2x) en gebruik cos2θ = 2cos²θ − 1 twee keer.)', answer: 'Laat θ = 2x, dus cos4x = cos2θ = 2cos²θ − 1 = 2cos²(2x) − 1.\nNou is cos2x = 2cos²x − 1, dus cos²(2x) = (2cos²x − 1)² = 4cos⁴x − 4cos²x + 1.\nVervang: cos4x = 2(4cos⁴x − 4cos²x + 1) − 1 = 8cos⁴x − 8cos²x + 2 − 1 = 8cos⁴x − 8cos²x + 1 ✓', checkMode: 'self' },

        // Blok 4 — Trig-vergelykings oplos met identiteite (Maklik/Matig/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x = 1.', checkMode: 'auto', correctAnswer: '45, 225', correctAnswers: ['45°, 225°', 'x = 45, 225', '45, 225', 'x=45,225'], answer: '45°, 225°', explanation: 'sin2x = 1  →  2x = 90°, 450°  (voeg 360° eenmaal by binne die interval van 2x)\n→ x = 45°, 225° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x = cosx.', checkMode: 'auto', correctAnswer: '0, 120, 240, 360', correctAnswers: ['0°, 120°, 240°, 360°', 'x = 0, 120, 240, 360', '0, 120, 240, 360', 'x=0,120,240,360'], answer: '0°, 120°, 240°, 360°', explanation: 'cos2x = 2cos²x − 1, dus 2cos²x − 1 = cosx\n2cos²x − cosx − 1 = 0\n(2cosx + 1)(cosx − 1) = 0\ncosx = −1/2 → x = 120°, 240°\ncosx = 1 → x = 0°, 360°\nAlle oplossings: x = 0°, 120°, 240°, 360° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x + cosx = 0.', checkMode: 'auto', correctAnswer: '90, 210, 270, 330', correctAnswers: ['90°, 210°, 270°, 330°', 'x = 90, 210, 270, 330', '90, 210, 270, 330', 'x=90,210,270,330'], answer: '90°, 210°, 270°, 330°', explanation: 'sin2x = 2sinxcosx, dus 2sinxcosx + cosx = 0\ncosx(2sinx + 1) = 0\ncosx = 0 → x = 90°, 270°\nsinx = −1/2 → x = 210°, 330°\nAlle oplossings: x = 90°, 210°, 270°, 330° ✓' },
        { difficulty: 'Hard', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x + sinx = 1. Toon alle stappe duidelik.', answer: 'cos2x = 1 − 2sin²x, dus 1 − 2sin²x + sinx = 1\n−2sin²x + sinx = 0\nsinx(1 − 2sinx) = 0\nsinx = 0 → x = 0°, 180°, 360°\nsinx = 1/2 → x = 30°, 150°\nAlle oplossings: x = 0°, 30°, 150°, 180°, 360°', checkMode: 'self' },

        // Blok 5 — Trig-identiteite bewys (Matig/Moeilik/Moeilik)
        { difficulty: 'Medium', question: 'Bewys dat (1 + cos2x)/(2cosx) = cosx.', answer: 'LK-teller: 1 + cos2x = 1 + (2cos²x − 1) = 2cos²x\nLK = 2cos²x / (2cosx) = cosx = RK ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat (sinx + cosx)² − (sinx − cosx)² = 2sin2x.', answer: 'Brei albei kwadrate uit:\n(sinx+cosx)² = sin²x + 2sinxcosx + cos²x = 1 + sin2x\n(sinx−cosx)² = sin²x − 2sinxcosx + cos²x = 1 − sin2x\nTrek af: (1 + sin2x) − (1 − sin2x) = 2sin2x ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat cosx/(1−sinx) − tanx = 1/cosx.', answer: 'LK = cosx/(1−sinx) − sinx/cosx\n= [cos²x − sinx(1−sinx)] / [cosx(1−sinx)]\n= [cos²x − sinx + sin²x] / [cosx(1−sinx)]\n= [(cos²x+sin²x) − sinx] / [cosx(1−sinx)]\n= [1 − sinx] / [cosx(1−sinx)]\n= 1/cosx = RK ✓', checkMode: 'self' },

        // Blok 6 — 2D/3D-probleme: oppervlakte-reël, cos reël, hoogtehoek-kombinasie (Matig/Moeilik/Matig/Moeilik)
        { difficulty: 'Medium', question: 'In driehoek ABC is AB = 8 cm, AC = 11 cm en ∠BAC = 48°. Bereken die oppervlakte van driehoek ABC, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '32,70', correctAnswers: ['32,70', '32.70', '32,7', '32.7', '32,69', '32.69', '32,71', '32.71'], answer: '32,70 cm²', explanation: 'Oppervlakte = ½ · AB · AC · sin(∠BAC)\n= ½ × 8 × 11 × sin48°\n= 44 × 0,7431\n≈ 32,70 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 159.1,146.0 149.1,18.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 51.4,126.7\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"173.6\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"152.1\" y=\"8.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"96.5\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"81.1\" y=\"72.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"68.7\" y=\"130.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text></svg>"},
        { difficulty: 'Hard', question: 'Gebruik dieselfde driehoek ABC van die vorige vraag (AB = 8 cm, AC = 11 cm, ∠BAC = 48°), bepaal die lengte van BC met behulp van die cos reël, korrek tot 2 desimale plekke.', answer: 'BC² = AB² + AC² − 2·AB·AC·cos(∠BAC)\n= 64 + 121 − 2(8)(11)cos48°\n= 185 − 176 × 0,6691\n= 185 − 117,76\n= 67,24\nBC = √67,24 ≈ 8,20 cm', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 159.1,146.0 149.1,18.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 51.4,126.7\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"173.6\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"152.1\" y=\"8.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"96.5\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"81.1\" y=\"72.7\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 cm</text><text x=\"68.7\" y=\"130.5\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"168.0\" y=\"81.0\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'ʼn Vertikale toring TC staan op horisontale grond. Vanaf punt A is die hoogtehoek na die bopunt T 32°. Vanaf punt B, wat op die reguit lyn AC tussen A en C lê en 25 m nader aan die basis is, is die hoogtehoek na T 50°. Stel die twee vergelykings op (in terme van h = TC en d = BC) wat nodig is om die hoogte van die toring te bepaal.', answer: 'Laat TC = h en BC = d, dus AC = d + 25.\nVanaf B: tan50° = h/d → d = h/tan50°.\nVanaf A: tan32° = h/(d + 25).\nHierdie twee vergelykings kan gelyktydig vir h opgelos word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die vergelykings van die vorige vraag (toring TC, hoogtehoek 32° vanaf A, 50° vanaf B, AB = 25 m, B tussen A en C), los op vir die hoogte h van die toring. Gee jou antwoord korrek tot 2 desimale plekke.', answer: 'Vanaf B: d = h/tan50°.\nVanaf A: tan32° = h/(d + 25) → d + 25 = h/tan32°.\nTrek af: 25 = h/tan32° − h/tan50° = h(1/tan32° − 1/tan50°) = h(1,6003 − 0,8391) = h(0,7612).\nh = 25/0,7612 ≈ 32,84 m', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"150.0\" x2=\"245\" y2=\"150.0\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"230.0\" y1=\"150.0\" x2=\"230.0\" y2=\"18.8\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 220.0,150.0 L 220.0,140.0 L 230.0,140.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><line x1=\"20.0\" y1=\"150.0\" x2=\"230.0\" y2=\"18.8\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"119.9\" y1=\"150.0\" x2=\"230.0\" y2=\"18.8\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><path d=\"M 42.0,150.0 A 22 22 0 0 0 38.7,138.3\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><path d=\"M 139.9,150.0 A 20 20 0 0 0 132.7,134.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><circle cx=\"20.0\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><circle cx=\"119.9\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><text x=\"20.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"119.9\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"230.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"239.0\" y=\"14.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"54.6\" y=\"140.1\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">32°</text><text x=\"150.7\" y=\"135.6\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">50°</text><text x=\"69.9\" y=\"182.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 m</text><line x1=\"20.0\" y1=\"174.0\" x2=\"119.9\" y2=\"174.0\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><text x=\"246.0\" y=\"88.4\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het reduksieformules, saamgestelde en dubbelhoek identiteite, trig-vergelykings oplos, identiteite bewys, en 2D/3D-driehoeksprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor dubbelhoek identiteite of die 2D/3D-driehoeksprobleme, en probeer dan weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde oor saamgestelde hoek uitbreidings en trig-vergelykings oplos, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Reduksieformules / CAST (Maklik/Maklik/Matig)
        { difficulty: 'Easy', question: 'Gebruik ʼn reduksieformule om cos(240°) presies te bepaal.', checkMode: 'auto', correctAnswer: '-1/2', correctAnswers: ['-1/2', '−1/2', '-0,5', '-0.5', '−0,5', '−0.5'], answer: '−1/2', explanation: '240° = 180° + 60°, wat in Kwadrant 3 is waar cos negatief is.\ncos(180°+60°) = −cos60° = −1/2 ✓' },
        { difficulty: 'Easy', question: 'As sinθ = 5/13 en θ in Kwadrant 2 is, bepaal cosθ.', checkMode: 'auto', correctAnswer: '-12/13', correctAnswers: ['-12/13', '−12/13'], answer: '−12/13', explanation: 'cos²θ = 1 − (5/13)² = 1 − 25/169 = 144/169.\nIn Kwadrant 2 is cos negatief, dus cosθ = −12/13 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig volledig: cos(180°−x) · sin(360°+x) / cos(−x).', checkMode: 'auto', correctAnswer: '-sinx', correctAnswers: ['-sinx', '−sinx', '-sin(x)', '-sin x'], answer: '−sinx', explanation: 'cos(180°−x) = −cosx  (K2: cos negatief)\nsin(360°+x) = sinx  (K1: sin positief)\ncos(−x) = cosx  (cos is ewe)\n(−cosx)(sinx)/cosx = −sinx ✓' },

        // Blok 2 — Saamgestelde hoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Brei cos(x + 30°) uit met behulp van die saamgestelde hoek identiteit.', checkMode: 'auto', correctAnswer: '(√3cosx-sinx)/2', correctAnswers: ['(√3cosx-sinx)/2', '(√3cosx − sinx)/2', '(√3 cos x - sin x)/2'], answer: '(√3cosx − sinx)/2', explanation: 'cos(x+30°) = cosxcos30° − sinxsin30°\n= cosx·(√3/2) − sinx·(1/2)\n= (√3cosx − sinx)/2 ✓' },
        { difficulty: 'Medium', question: 'Gebruik sin(60°+45°) om die presiese waarde van sin105° te bepaal.', checkMode: 'auto', correctAnswer: '(√6+√2)/4', correctAnswers: ['(√6+√2)/4', '(√2+√6)/4'], answer: '(√6+√2)/4', explanation: 'sin(60°+45°) = sin60°cos45° + cos60°sin45°\n= (√3/2)(√2/2) + (1/2)(√2/2)\n= √6/4 + √2/4 = (√6+√2)/4 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat cos(x+y) − cos(x−y) = −2sinx·siny.', answer: 'cos(x+y) = cosxcosy − sinxsiny\ncos(x−y) = cosxcosy + sinxsiny\nTrek af: cos(x+y) − cos(x−y) = (cosxcosy − sinxsiny) − (cosxcosy + sinxsiny)\n= −2sinxsiny ✓', checkMode: 'self' },

        // Blok 3 — Dubbelhoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'As cosα = 3/5 en α skerp is, bereken die presiese waarde van cos2α.', checkMode: 'auto', correctAnswer: '-7/25', correctAnswers: ['-7/25', '−7/25'], answer: '−7/25', explanation: 'sinα = 4/5  (met sin²α + cos²α = 1, α skerp)\ncos2α = cos²α − sin²α = (3/5)² − (4/5)² = 9/25 − 16/25 = −7/25 ✓' },
        { difficulty: 'Medium', question: 'As sinα = 24/25 en α skerp is, bereken die presiese waarde van sin2α.', checkMode: 'auto', correctAnswer: '336/625', correctAnswers: ['336/625'], answer: '336/625', explanation: 'cosα = 7/25  (met sin²α + cos²α = 1, α skerp)\nsin2α = 2sinαcosα = 2·(24/25)·(7/25) = 336/625 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat (sinx + cosx)² + (sinx − cosx)² = 2.', answer: 'Brei albei kwadrate uit:\n(sinx+cosx)² = sin²x + 2sinxcosx + cos²x = 1 + sin2x\n(sinx−cosx)² = sin²x − 2sinxcosx + cos²x = 1 − sin2x\nTel op: (1 + sin2x) + (1 − sin2x) = 2 ✓', checkMode: 'self' },

        // Blok 4 — Trig-vergelykings oplos met identiteite (Maklik/Matig/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x = 1.', checkMode: 'auto', correctAnswer: '0, 180, 360', correctAnswers: ['0°, 180°, 360°', 'x = 0, 180, 360', '0, 180, 360', 'x=0,180,360'], answer: '0°, 180°, 360°', explanation: 'cos2x = 1  →  2x = 0°, 360°, 720°\n→ x = 0°, 180°, 360° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x = sinx.', checkMode: 'auto', correctAnswer: '30, 150, 270', correctAnswers: ['30°, 150°, 270°', 'x = 30, 150, 270', '30, 150, 270', 'x=30,150,270'], answer: '30°, 150°, 270°', explanation: 'cos2x = 1 − 2sin²x, dus 1 − 2sin²x = sinx\n2sin²x + sinx − 1 = 0\n(2sinx − 1)(sinx + 1) = 0\nsinx = 1/2 → x = 30°, 150°\nsinx = −1 → x = 270°\nAlle oplossings: x = 30°, 150°, 270° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x − cosx = 0.', checkMode: 'auto', correctAnswer: '90, 30, 150, 270', correctAnswers: ['30°, 90°, 150°, 270°', 'x = 30, 90, 150, 270', '30, 90, 150, 270', 'x=30,90,150,270'], answer: '30°, 90°, 150°, 270°', explanation: 'sin2x = 2sinxcosx, dus 2sinxcosx − cosx = 0\ncosx(2sinx − 1) = 0\ncosx = 0 → x = 90°, 270°\nsinx = 1/2 → x = 30°, 150°\nAlle oplossings: x = 30°, 90°, 150°, 270° ✓' },
        { difficulty: 'Hard', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x − 3sinx − 2 = 0. Toon alle stappe duidelik.', answer: 'cos2x = 1 − 2sin²x, dus 1 − 2sin²x − 3sinx − 2 = 0\n−2sin²x − 3sinx − 1 = 0\n2sin²x + 3sinx + 1 = 0\n(2sinx + 1)(sinx + 1) = 0\nsinx = −1/2 → x = 210°, 330°\nsinx = −1 → x = 270°\nAlle oplossings: x = 210°, 270°, 330°', checkMode: 'self' },

        // Blok 5 — Trig-identiteite bewys (Matig/Moeilik/Moeilik)
        { difficulty: 'Medium', question: 'Bewys dat (1 − cos2x)/(2sinx) = sinx.', answer: 'LK-teller: 1 − cos2x = 1 − (1 − 2sin²x) = 2sin²x\nLK = 2sin²x / (2sinx) = sinx = RK ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat sin2x/(1−cosx) = 2cosx(1+cosx)/sinx.', answer: 'LK = 2sinxcosx/(1−cosx). Vermenigvuldig teller en noemer met (1+cosx):\n= 2sinxcosx(1+cosx) / [(1−cosx)(1+cosx)]\n= 2sinxcosx(1+cosx) / sin²x\n= 2cosx(1+cosx)/sinx = RK ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat cos2x/(cosx − sinx) = cosx + sinx.', answer: 'LK-teller: cos2x = cos²x − sin²x = (cosx−sinx)(cosx+sinx)  (verskil van vierkante).\nLK = (cosx−sinx)(cosx+sinx) / (cosx−sinx)\n= cosx+sinx = RK ✓', checkMode: 'self' },

        // Blok 6 — 2D/3D-probleme: oppervlakte-reël, cos reël, hoogtehoek-kombinasie (Matig/Moeilik/Matig/Moeilik)
        { difficulty: 'Medium', question: 'In driehoek DEF is DE = 9 cm, DF = 13 cm en ∠EDF = 50°. Bereken die oppervlakte van driehoek DEF, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '44,81', correctAnswers: ['44,81', '44.81', '44,8', '44.8', '44,80', '44.80', '44,82', '44.82'], answer: '44,81 cm²', explanation: 'Oppervlakte = ½ · DE · DF · sin(∠EDF)\n= ½ × 9 × 13 × sin50°\n= 58,5 × 0,7660\n≈ 44,81 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 153.1,146.0 144.6,14.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 50.7,126.1\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"167.6\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"147.6\" y=\"4.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"93.5\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"78.6\" y=\"71.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"68.4\" y=\"129.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">50°</text></svg>"},
        { difficulty: 'Hard', question: 'Gebruik dieselfde driehoek DEF van die vorige vraag (DE = 9 cm, DF = 13 cm, ∠EDF = 50°), bepaal die lengte van EF met behulp van die cos reël, korrek tot 2 desimale plekke.', answer: 'EF² = DE² + DF² − 2·DE·DF·cos(∠EDF)\n= 81 + 169 − 2(9)(13)cos50°\n= 250 − 234 × 0,6428\n= 250 − 150,42\n= 99,58\nEF = √99,58 ≈ 9,98 cm', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 153.1,146.0 144.6,14.2\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 50.7,126.1\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">D</text><text x=\"167.6\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">E</text><text x=\"147.6\" y=\"4.2\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">F</text><text x=\"93.5\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"78.6\" y=\"71.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text><text x=\"68.4\" y=\"129.9\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">50°</text><text x=\"162.8\" y=\"79.2\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'ʼn Vertikale toring TC staan op horisontale grond. Vanaf punt A is die hoogtehoek na die bopunt T 28°. Vanaf punt B, wat op die reguit lyn AC tussen A en C lê en 30 m nader aan die basis is, is die hoogtehoek na T 45°. Stel die twee vergelykings op (in terme van h = TC en d = BC) wat nodig is om die hoogte van die toring te bepaal.', answer: 'Laat TC = h en BC = d, dus AC = d + 30.\nVanaf B: tan45° = h/d → d = h/tan45°.\nVanaf A: tan28° = h/(d + 30).\nHierdie twee vergelykings kan gelyktydig vir h opgelos word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die vergelykings van die vorige vraag (toring TC, hoogtehoek 28° vanaf A, 45° vanaf B, AB = 30 m, B tussen A en C), los op vir die hoogte h van die toring. Gee jou antwoord korrek tot 2 desimale plekke.', answer: 'Vanaf B: d = h/tan45° = h.\nVanaf A: tan28° = h/(d + 30) → d + 30 = h/tan28°.\nTrek af: 30 = h/tan28° − h/tan45° = h(1/tan28° − 1/tan45°) = h(1,8807 − 1) = h(0,8807).\nh = 30/0,8807 ≈ 34,06 m', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"150.0\" x2=\"245\" y2=\"150.0\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"230.0\" y1=\"150.0\" x2=\"230.0\" y2=\"38.3\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 220.0,150.0 L 220.0,140.0 L 230.0,140.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><line x1=\"20.0\" y1=\"150.0\" x2=\"230.0\" y2=\"38.3\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"118.3\" y1=\"150.0\" x2=\"230.0\" y2=\"38.3\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><path d=\"M 42.0,150.0 A 22 22 0 0 0 39.4,139.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><path d=\"M 138.3,150.0 A 20 20 0 0 0 132.5,135.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><circle cx=\"20.0\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><circle cx=\"118.3\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><text x=\"20.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"118.3\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"230.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"239.0\" y=\"34.3\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"54.9\" y=\"141.3\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">28°</text><text x=\"149.8\" y=\"137.0\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">45°</text><text x=\"69.2\" y=\"182.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><line x1=\"20.0\" y1=\"174.0\" x2=\"118.3\" y2=\"174.0\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><text x=\"246.0\" y=\"98.2\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het reduksieformules, saamgestelde en dubbelhoek identiteite, trig-vergelykings oplos, identiteite bewys, en 2D/3D-driehoeksprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor dubbelhoek identiteite of die 2D/3D-driehoeksprobleme, en probeer dan weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde oor saamgestelde hoek uitbreidings en trig-vergelykings oplos, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Reduksieformules / CAST (Maklik/Maklik/Matig)
        { difficulty: 'Easy', question: 'Gebruik ʼn reduksieformule om sin(315°) presies te bepaal.', checkMode: 'auto', correctAnswer: '-√2/2', correctAnswers: ['-√2/2', '−√2/2', '-sqrt(2)/2', '-0,71', '-0.71'], answer: '−√2/2', explanation: '315° = 360° − 45°, wat in Kwadrant 4 is waar sin negatief is.\nsin(360°−45°) = −sin45° = −√2/2 ✓' },
        { difficulty: 'Easy', question: 'As cosθ = −7/25 en θ in Kwadrant 2 is, bepaal sinθ.', checkMode: 'auto', correctAnswer: '24/25', correctAnswers: ['24/25'], answer: '24/25', explanation: 'sin²θ = 1 − (7/25)² = 1 − 49/625 = 576/625.\nIn Kwadrant 2 is sin positief, dus sinθ = 24/25 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig volledig: sin(180°+x) · cos(−x) / cos(180°−x).', checkMode: 'auto', correctAnswer: 'sinx', correctAnswers: ['sinx', 'sin(x)', 'sin x'], answer: 'sinx', explanation: 'sin(180°+x) = −sinx  (K3: sin negatief)\ncos(−x) = cosx  (cos is ewe)\ncos(180°−x) = −cosx  (K2: cos negatief)\n(−sinx)(cosx)/(−cosx) = sinx ✓' },

        // Blok 2 — Saamgestelde hoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Brei sin(x − 60°) uit met behulp van die saamgestelde hoek identiteit.', checkMode: 'auto', correctAnswer: '(sinx-√3cosx)/2', correctAnswers: ['(sinx-√3cosx)/2', '(sinx − √3cosx)/2', '(sin x - √3 cos x)/2'], answer: '(sinx − √3cosx)/2', explanation: 'sin(x−60°) = sinxcos60° − cosxsin60°\n= sinx·(1/2) − cosx·(√3/2)\n= (sinx − √3cosx)/2 ✓' },
        { difficulty: 'Medium', question: 'Gebruik cos(45°+30°) om die presiese waarde van cos75° te bepaal.', checkMode: 'auto', correctAnswer: '(√6-√2)/4', correctAnswers: ['(√6-√2)/4', '(√6 − √2)/4'], answer: '(√6−√2)/4', explanation: 'cos(45°+30°) = cos45°cos30° − sin45°sin30°\n= (√2/2)(√3/2) − (√2/2)(1/2)\n= √6/4 − √2/4 = (√6−√2)/4 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat tan(x+45°) = (1+tanx)/(1−tanx).', answer: 'tan(x+45°) = [sinx·cos45° + cosx·sin45°] / [cosx·cos45° − sinx·sin45°]\nAangesien sin45° = cos45°, deel teller en noemer deur cosx·cos45°:\n= [sinx/cosx + 1] / [1 − sinx/cosx]\n= (tanx + 1)/(1 − tanx) = (1+tanx)/(1−tanx) ✓', checkMode: 'self' },

        // Blok 3 — Dubbelhoek identiteite (Maklik/Matig/Moeilik)
        { difficulty: 'Easy', question: 'As sinα = 15/17 en α skerp is, bereken die presiese waarde van cos2α.', checkMode: 'auto', correctAnswer: '-161/289', correctAnswers: ['-161/289', '−161/289'], answer: '−161/289', explanation: 'cosα = 8/17  (met sin²α + cos²α = 1, α skerp)\ncos2α = cos²α − sin²α = (8/17)² − (15/17)² = 64/289 − 225/289 = −161/289 ✓' },
        { difficulty: 'Medium', question: 'As cosα = 20/29 en α skerp is, bereken die presiese waarde van sin2α.', checkMode: 'auto', correctAnswer: '840/841', correctAnswers: ['840/841'], answer: '840/841', explanation: 'sinα = 21/29  (met sin²α + cos²α = 1, α skerp, aangesien 20²+21²=400+441=841=29²)\nsin2α = 2sinαcosα = 2·(21/29)·(20/29) = 840/841 ✓' },
        { difficulty: 'Hard', question: 'Bewys dat cotx − tanx = 2cot2x.', answer: 'LK = cosx/sinx − sinx/cosx = (cos²x − sin²x)/(sinxcosx) = cos2x/(sinxcosx).\nAangesien sinxcosx = (1/2)sin2x, LK = cos2x/[(1/2)sin2x] = 2cos2x/sin2x = 2cot2x = RK ✓', checkMode: 'self' },

        // Blok 4 — Trig-vergelykings oplos met identiteite (Maklik/Matig/Matig/Moeilik)
        { difficulty: 'Easy', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x = 0.', checkMode: 'auto', correctAnswer: '45, 135, 225, 315', correctAnswers: ['45°, 135°, 225°, 315°', 'x = 45, 135, 225, 315', '45, 135, 225, 315', 'x=45,135,225,315'], answer: '45°, 135°, 225°, 315°', explanation: 'cos2x = 0  →  2x = 90°, 270°, 450°, 630°\n→ x = 45°, 135°, 225°, 315° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x + cosx = 0.', checkMode: 'auto', correctAnswer: '60, 180, 300', correctAnswers: ['60°, 180°, 300°', 'x = 60, 180, 300', '60, 180, 300', 'x=60,180,300'], answer: '60°, 180°, 300°', explanation: 'cos2x = 2cos²x − 1, dus 2cos²x − 1 + cosx = 0\n2cos²x + cosx − 1 = 0\n(2cosx − 1)(cosx + 1) = 0\ncosx = 1/2 → x = 60°, 300°\ncosx = −1 → x = 180°\nAlle oplossings: x = 60°, 180°, 300° ✓' },
        { difficulty: 'Medium', question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x + sinx = 0.', checkMode: 'auto', correctAnswer: '0, 120, 180, 240, 360', correctAnswers: ['0°, 120°, 180°, 240°, 360°', 'x = 0, 120, 180, 240, 360', '0, 120, 180, 240, 360', 'x=0,120,180,240,360'], answer: '0°, 120°, 180°, 240°, 360°', explanation: 'sin2x = 2sinxcosx, dus 2sinxcosx + sinx = 0\nsinx(2cosx + 1) = 0\nsinx = 0 → x = 0°, 180°, 360°\ncosx = −1/2 → x = 120°, 240°\nAlle oplossings: x = 0°, 120°, 180°, 240°, 360° ✓' },
        { difficulty: 'Hard', question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x + sinx + 1 = 0. Toon alle stappe duidelik.', answer: 'cos2x = 1 − 2sin²x, dus 1 − 2sin²x + sinx + 1 = 0\n−2sin²x + sinx + 2 = 0\n2sin²x − sinx − 2 = 0\nDit faktoriseer nie netjies nie, gebruik dus die kwadratiese formule met u = sinx:\nu = [1 ± √(1+16)]/4 = [1 ± √17]/4\nu ≈ 1,28 (verwerp, sinx kan nie 1 oorskry nie) of u ≈ −0,78\nsinx ≈ −0,78 → verwysingshoek ≈ 51,26°, K3 en K4:\nx ≈ 231,26° of x ≈ 308,74°', checkMode: 'self' },

        // Blok 5 — Trig-identiteite bewys (Matig/Moeilik/Moeilik)
        { difficulty: 'Medium', question: 'Bewys dat sin2x/(2sinx) = cosx.', answer: 'LK = 2sinxcosx / (2sinx) = cosx = RK ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat (1 + sin2x)/(cosx + sinx) = cosx + sinx.', answer: 'LK-teller: 1 + sin2x = 1 + 2sinxcosx = sin²x + cos²x + 2sinxcosx = (sinx+cosx)².\nLK = (sinx+cosx)² / (cosx+sinx) = (sinx+cosx) = RK ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bewys dat (sinx + sin2x)/(1 + cosx + cos2x) = tanx.', answer: 'Teller: sinx + sin2x = sinx + 2sinxcosx = sinx(1 + 2cosx).\nNoemer: 1 + cosx + cos2x = 1 + cosx + (2cos²x − 1) = cosx + 2cos²x = cosx(1 + 2cosx).\nLK = sinx(1+2cosx) / [cosx(1+2cosx)] = sinx/cosx = tanx = RK ✓', checkMode: 'self' },

        // Blok 6 — 2D/3D-probleme: oppervlakte-reël, cos reël, hoogtehoek-kombinasie (Matig/Moeilik/Matig/Moeilik)
        { difficulty: 'Medium', question: 'In driehoek GHI is GH = 10 cm, GI = 14 cm en ∠HGI = 42°. Bereken die oppervlakte van driehoek GHI, korrek tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '46,84', correctAnswers: ['46,84', '46.84', '46,8', '46.8', '46,83', '46.83', '46,85', '46.85'], answer: '46,84 cm²', explanation: 'Oppervlakte = ½ · GH · GI · sin(∠HGI)\n= ½ × 10 × 14 × sin42°\n= 70 × 0,6691\n≈ 46,84 cm² ✓' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 156.9,146.0 161.8,30.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 53.3,128.6\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"171.4\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"164.8\" y=\"20.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"95.4\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"88.5\" y=\"78.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"69.5\" y=\"132.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text></svg>"},
        { difficulty: 'Hard', question: 'Gebruik dieselfde driehoek GHI van die vorige vraag (GH = 10 cm, GI = 14 cm, ∠HGI = 42°), bepaal die lengte van HI met behulp van die cos reël, korrek tot 2 desimale plekke.', answer: 'HI² = GH² + GI² − 2·GH·GI·cos(∠HGI)\n= 100 + 196 − 2(10)(14)cos42°\n= 296 − 280 × 0,7431\n= 296 − 208,07\n= 87,93\nHI = √87,93 ≈ 9,38 cm', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"34.0,146.0 156.9,146.0 161.8,30.9\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.2\"/><path d=\"M 60.0,146.0 A 26 26 0 0 0 53.3,128.6\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\"/><text x=\"19.5\" y=\"152.5\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">G</text><text x=\"171.4\" y=\"152.8\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">H</text><text x=\"164.8\" y=\"20.9\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">I</text><text x=\"95.4\" y=\"164.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"88.5\" y=\"78.1\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 cm</text><text x=\"69.5\" y=\"132.4\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">42°</text><text x=\"173.3\" y=\"89.1\" font-size=\"13\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
        { difficulty: 'Medium', question: 'ʼn Vertikale toring TC staan op horisontale grond. Vanaf punt A is die hoogtehoek na die bopunt T 25°. Vanaf punt B, wat op die reguit lyn AC tussen A en C lê en 40 m nader aan die basis is, is die hoogtehoek na T 48°. Stel die twee vergelykings op (in terme van h = TC en d = BC) wat nodig is om die hoogte van die toring te bepaal.', answer: 'Laat TC = h en BC = d, dus AC = d + 40.\nVanaf B: tan48° = h/d → d = h/tan48°.\nVanaf A: tan25° = h/(d + 40).\nHierdie twee vergelykings kan gelyktydig vir h opgelos word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die vergelykings van die vorige vraag (toring TC, hoogtehoek 25° vanaf A, 48° vanaf B, AB = 40 m, B tussen A en C), los op vir die hoogte h van die toring. Gee jou antwoord korrek tot 2 desimale plekke.', answer: 'Vanaf B: d = h/tan48°.\nVanaf A: tan25° = h/(d + 40) → d + 40 = h/tan25°.\nTrek af: 40 = h/tan25° − h/tan48° = h(1/tan25° − 1/tan48°) = h(2,1445 − 0,9004) = h(1,2441).\nh = 40/1,2441 ≈ 32,15 m', checkMode: 'self' , diagramSvg: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"150.0\" x2=\"245\" y2=\"150.0\" stroke=\"#0f1f3d\" stroke-width=\"2\"/><line x1=\"230.0\" y1=\"150.0\" x2=\"230.0\" y2=\"52.1\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 220.0,150.0 L 220.0,140.0 L 230.0,140.0\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.3\"/><line x1=\"20.0\" y1=\"150.0\" x2=\"230.0\" y2=\"52.1\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><line x1=\"141.8\" y1=\"150.0\" x2=\"230.0\" y2=\"52.1\" stroke=\"#0f1f3d\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/><path d=\"M 42.0,150.0 A 22 22 0 0 0 39.9,140.7\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><path d=\"M 161.8,150.0 A 20 20 0 0 0 155.2,135.1\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.2\"/><circle cx=\"20.0\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><circle cx=\"141.8\" cy=\"150.0\" r=\"2.6\" fill=\"#0f1f3d\"/><text x=\"20.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">A</text><text x=\"141.8\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">B</text><text x=\"230.0\" y=\"166.0\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">C</text><text x=\"239.0\" y=\"48.1\" font-size=\"12\" fill=\"#475569\" font-weight=\"600\" text-anchor=\"middle\">T</text><text x=\"55.1\" y=\"142.2\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25°</text><text x=\"172.9\" y=\"136.2\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48°</text><text x=\"80.9\" y=\"182.0\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">40 m</text><line x1=\"20.0\" y1=\"174.0\" x2=\"141.8\" y2=\"174.0\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><text x=\"246.0\" y=\"105.0\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>"},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het reduksieformules, saamgestelde en dubbelhoek identiteite, trig-vergelykings oplos, identiteite bewys, en 2D/3D-driehoeksprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor dubbelhoek identiteite of die 2D/3D-driehoeksprobleme, en probeer dan weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde oor saamgestelde hoek uitbreidings en trig-vergelykings oplos, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },
  ],

  topicPractice: [

    // ── V1 Maklik — bereken met reduksieformules ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die presiese waarde van sin(180°+45°) met behulp van reduksieformules.',
      answer: '−√2/2',
      checkMode: 'auto',
      correctAnswer: '-√2/2',
      correctAnswers: ['-√2/2', '−√2/2', '-sqrt(2)/2'],
      explanation: '180°+45° is in Kwadrant 3 waar sin negatief is.\nsin(180°+45°) = −sin45° = −√2/2 ✓',
    },

    // ── V2 Matig — vereenvoudig produk met reduksieformules ──────────────────
    {
      difficulty: 'Medium',
      question: 'Vereenvoudig cos(360°−θ)·sin(−θ).',
      answer: '−sinθcosθ  of  −½sin2θ',
      checkMode: 'auto',
      correctAnswers: ['-sinθcosθ', '-sin θ cos θ', '-½sin2θ', '-1/2sin2θ', '-sinθ·cosθ'],
      explanation: 'cos(360°−θ) = cosθ  (K4: cos positief)\nsin(−θ) = −sinθ  (negatiewe-hoek-formule)\nProduk: cosθ·(−sinθ) = −sinθcosθ = −½sin2θ ✓',
    },

    // ── V3 Moeilik — CAST-reël en Pythagoras-identiteit ───────────────────────
    {
      difficulty: 'Hard',
      question: 'As cosθ = −5/13 en θ in Kwadrant 3 is, bepaal sinθ en tanθ.',
      answer: 'sin²θ = 1 − 25/169 = 144/169.\nsinθ = −12/13  (negatief in K3).\ntanθ = (−12/13) ÷ (−5/13) = 12/5.',
      checkMode: 'self',
    },

    // ── V4 Matig — brei uit met saamgestelde hoek identiteit ───────────────────
    {
      difficulty: 'Medium',
      question: 'Brei cos(x+45°) uit met behulp van die saamgestelde hoek identiteit.',
      answer: '(cosx − sinx)/√2',
      checkMode: 'auto',
      correctAnswer: '(cosx-sinx)/√2',
      correctAnswers: ['(cosx-sinx)/√2', '(cosx − sinx)/√2', '(cos x - sin x)/√2'],
      explanation: 'cos(x+45°) = cosxcos45° − sinxsin45°\n= cosx·(√2/2) − sinx·(√2/2)\n= (cosx − sinx)/√2 ✓',
    },

    // ── V5 Moeilik — presiese waarde met saamgestelde hoek identiteit ────────────────
    {
      difficulty: 'Hard',
      question: 'Toon dat cos15° = (√6+√2)/4 deur cos(45°−30°) te gebruik. Toon alle stappe.',
      answer: 'cos(45°−30°) = cos45°cos30° + sin45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4\n= (√6+√2)/4 ✓',
      checkMode: 'self',
    },

    // ── V6 Maklik — gee die drie vorme van die dubbelhoek formule ────────
    {
      difficulty: 'Easy',
      question: 'Gee die drie ekwivalente vorme van die dubbelhoek formule vir cos2α.',
      answer: 'cos²α − sin²α\n1 − 2sin²α\n2cos²α − 1',
      checkMode: 'self',
    },

    // ── V7 Matig — bereken sin2α en cos2α ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'As cosα = 3/5 en α skerp is, bepaal sin2α en cos2α.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) sin2α =',
          correctAnswer: '24/25',
          correctAnswers: ['24/25', '0,96', '0.96'],
          explanation: 'sinα = 4/5  (Pythagoras-identiteit, α skerp)\nsin2α = 2sinαcosα = 2·(4/5)·(3/5) = 24/25 ✓',
        },
        {
          label: 'b) cos2α =',
          correctAnswer: '7/25',
          correctAnswers: ['7/25', '0,28', '0.28'],
          explanation: 'cos2α = cos²α − sin²α = (3/5)² − (4/5)² = 9/25 − 16/25 = 7/25 ✓',
        },
      ],
    },

    // ── V8 Moeilik — bewys dubbelhoek identiteit ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bewys dat (sinθ + cosθ)² = 1 + sin2θ.',
      answer: 'Brei uit: sin²θ + 2sinθcosθ + cos²θ\n= (sin²θ + cos²θ) + 2sinθcosθ\n= 1 + 2sinθcosθ\n= 1 + sin2θ ✓',
      checkMode: 'self',
    },

    // ── V9 Moeilik — bewys identiteit met dubbelhoek formules ───────────────
    {
      difficulty: 'Hard',
      question: 'Bewys dat sin2x / (1 − cos2x) = 1/tanx.',
      answer: 'sin2x = 2sinxcosx.\n1 − cos2x = 1 − (1 − 2sin²x) = 2sin²x.\nsin2x/(1−cos2x) = 2sinxcosx/(2sin²x) = cosx/sinx = 1/tanx ✓',
      checkMode: 'self',
    },

    // ── V10 Matig — los sin2x = 0 op ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x = 0.',
      answer: 'x = 0°, 90°, 180°, 270°, 360°',
      checkMode: 'auto',
      correctAnswer: '0, 90, 180, 270, 360',
      correctAnswers: ['0°, 90°, 180°, 270°, 360°', '0, 90, 180, 270, 360', 'x=0,90,180,270,360'],
      explanation: 'sin2x = 0  →  2x = 0°, 180°, 360°, 540°, 720°\n→ x = 0°, 90°, 180°, 270°, 360° ✓',
    },

    // ── V11 Moeilik — los op met dubbelhoek identiteit ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x (0° ≤ x ≤ 360°): cos2x + 3cosx + 2 = 0.',
      answer: 'Vervang cos2x = 2cos²x − 1:\n2cos²x − 1 + 3cosx + 2 = 0\n2cos²x + 3cosx + 1 = 0\n(2cosx + 1)(cosx + 1) = 0\ncosx = −½  →  x = 120°, 240°\ncosx = −1  →  x = 180°',
      checkMode: 'self',
    },

    // ── V12 Moeilik — los op met dubbelhoek identiteit ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x (0° ≤ x ≤ 360°): sin2x = cosx.',
      answer: '2sinxcosx = cosx\n2sinxcosx − cosx = 0\ncosx(2sinx − 1) = 0\ncosx = 0  →  x = 90°, 270°\nsinx = ½  →  x = 30°, 150°\nAlle oplossings: x = 30°, 90°, 150°, 270°',
      checkMode: 'self',
    },

    // ── V13 Matig — oppervlakte van driehoek met oppervlakte-reël ──────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: Driehoek ABC met AB = 9 cm, AC = 12 cm en hoek BAC = 55°]\n\nGebruik die gegewe driehoek om die oppervlakte van driehoek ABC te bepaal. Gee jou antwoord korrek tot 2 desimale plekke.',
      answer: '≈ 44,29 cm²',
      checkMode: 'auto',
      correctAnswer: '44,29',
      correctAnswers: ['44,29', '44.29', '44,3', '44.3', '44,28', '44.28', '44,30', '44.30', '44,2', '44.2'],
      explanation: 'Oppervlakte = ½ · AB · AC · sin(∠BAC)\n= ½(9)(12)sin55°\n= 54 × 0,8192\n≈ 44,29 cm² ✓',
    },

    // ── V14 Moeilik — cos reël om onbekende sy te bepaal ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde driehoek van V13 (AB = 9 cm, AC = 12 cm, hoek BAC = 55°), bepaal die lengte van BC met behulp van die cos reël. Gee jou antwoord korrek tot 2 desimale plekke.',
      answer: 'BC² = 9² + 12² − 2(9)(12)cos55°\n= 81 + 144 − 216cos55°\n= 225 − 123,85\n≈ 101,15\nBC ≈ 10,06 cm',
      checkMode: 'self',
    },

    // ── V15 Moeilik — 3D-probleem: stel vergelykings op vir toringhoogte ───────────
    {
      difficulty: 'Hard',
      question: '[DIAGRAM: Vertikale toring TC. Punte A en B is op dieselfde horisontale vlak as C, met A, B en C kollineêr en B tussen A en C. Hoek TAC = 40°, hoek TBC = 65°, AB = 20 m.]\n\nGebruik die diagram om die twee vergelykings op te stel wat nodig is om die hoogte van die toring TC te bepaal.',
      answer: 'Laat TC = h en BC = d.\nVanaf B: tan65° = h/d,  dus d = h/tan65°.\nVanaf A: tan40° = h/(d + 20).\nHierdie twee vergelykings kan gelyktydig vir h opgelos word.',
      checkMode: 'self',
    },

    // ── V16 Moeilik — los op vir toringhoogte ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die vergelykings van V15, los op vir die hoogte h van die toring. Gee jou antwoord korrek tot 1 desimale plek.',
      answer: 'Vervang d = h/tan65° in tan40° = h/(d + 20):\ntan40°(h/tan65° + 20) = h\nh·tan40°/tan65° + 20tan40° = h\n20tan40° = h(1 − tan40°/tan65°)\nh = 20tan40° / (1 − tan40°/tan65°) ≈ 46,2 m',
      checkMode: 'self',
    },

    // ── V17 Moeilik — bewys trigonometriese identiteit ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bewys dat cos2x / (sinxcosx) = cotx − tanx.',
      answer: 'LK = cos2x/(sinxcosx)\n= (cos²x − sin²x)/(sinxcosx)\n= cos²x/(sinxcosx) − sin²x/(sinxcosx)\n= cosx/sinx − sinx/cosx\n= cotx − tanx\n= RK ✓',
      checkMode: 'self',
    },

    // ── V18 Moeilik — 2D-probleem: bepaal hoogte vanaf twee hoogtehoeke ───────
    {
      difficulty: 'Hard',
      question: 'ʼn Landmeter by punt A meet die hoogtehoek na die bopunt T van ʼn toring as 35°. Sy loop 50 m reguit na die basis C toe en meet nou 55°. Bepaal die hoogte van die toring. Gee jou antwoord korrek tot 2 desimale plekke.',
      answer: 'Laat TC = h en BC = d.\ntan55° = h/d  →  d = h/tan55°.\ntan35° = h/(d + 50).\nVervang: tan35°(h/tan55° + 50) = h.\n50tan35° = h(1 − tan35°/tan55°).\nh = 50tan35° / (1 − tan35°/tan55°) ≈ 57,67 m',
      checkMode: 'self',
    },

    // ── V19 Moeilik — weerlê onkorrekte identiteit ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho beweer dat sin(A+B) = sinA + sinB vir alle waardes van A en B. Weerlê hierdie bewering met ʼn spesifieke numeriese voorbeeld.',
      answer: 'Laat A = 30° en B = 60°.\nLK: sin(30°+60°) = sin90° = 1.\nRK: sin30° + sin60° = 0,5 + √3/2 ≈ 1,366.\nAangesien 1 ≠ 1,366, is Sipho se bewering vals. ✓',
      checkMode: 'self',
    },

    // ── V20 Moeilik — bewys produk-identiteit met saamgestelde hoeke ────────────
    {
      difficulty: 'Hard',
      question: 'Bewys dat sin(x+y)·sin(x−y) = sin²x − sin²y.',
      answer: 'Brei uit met saamgestelde hoek identiteite:\n(sinxcosy + cosxsiny)(sinxcosy − cosxsiny)\n= sin²xcos²y − cos²xsin²y\nVervang cos²y = 1 − sin²y en cos²x = 1 − sin²x:\n= sin²x(1 − sin²y) − (1 − sin²x)sin²y\n= sin²x − sin²xsin²y − sin²y + sin²xsin²y\n= sin²x − sin²y ✓',
      checkMode: 'self',
    },

  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het trigonometrie bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Perfekte telling — jy het hierdie Graad 12-trigonometrie-grondbeginsels heeltemal bemeester. Uitstekende werk!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van trig-identiteite en reduksieformules. Hersien enige gemiste stappe en jy sal dit perfek onder die knie hê.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer elkeen weer.' },
    { minScore: 6, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling deeglik deur, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — trigonometrie verg oefening! Gaan deur elke afdeling se verduideliking en uitgewerkte voorbeelde, en probeer dan weer.' },
  ],
}

