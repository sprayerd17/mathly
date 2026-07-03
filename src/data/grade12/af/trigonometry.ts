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
          correctAnswers: ['1/2', '0.5'],
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
          answer: `Oppervlakte = ${gr('35√3/2 ≈ 30.31 cm²')}, &nbsp;AC = ${gr('√79 ≈ 8.89 cm')}`,
          steps: [
            `<strong>Deel (a) — Oppervlakte:</strong> Pas die ${bl('oppervlakte-reël')} toe: Oppervlakte = ½ · AB · BC · sin(∠ABC).`,
            `Vervang: Oppervlakte = ½ · ${bl('7')} · ${bl('10')} · sin${bl('60°')} = 35 · (√3/2) ≈ ${gr('30.31 cm²')}.`,
            `<strong>Deel (b) — Lengte AC:</strong> Pas die ${bl('cos reël')} toe: AC² = AB² + BC² − 2 · AB · BC · cos(∠ABC).`,
            `Vervang: AC² = ${bl('49')} + ${bl('100')} − 2 · ${bl('7')} · ${bl('10')} · cos${bl('60°')} = 149 − 140 · (0.5) = 149 − 70 = ${or('79')}.`,
            `<strong>Antwoord:</strong> AC = √79 ≈ ${gr('8.89 cm')} ✓`,
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
          answer: `TC ≈ ${gr('69.5 m')}`,
          steps: [
            `Laat ${or('TC = h')} (die hoogte van die toring) en ${or('BC = d')} (horisontale afstand van B na die basis).`,
            `In reghoekige driehoek TBC: ${or('tan65° = h / d')}, dus ${or('d = h / tan65°')}.`,
            `In reghoekige driehoek TAC: ${or('tan50° = h / (d + 30)')}, aangesien AC = BC + AB = d + 30.`,
            `Vervang die uitdrukking vir d: ${or('tan50° = h / (h / tan65° + 30)')}.`,
            `Kruisvermenigvuldig: ${or('h / tan65° + 30 = h / tan50°')}.`,
            `Herrangskik: ${or('h / tan50° − h / tan65° = 30')}, &nbsp;dus ${or('h (1/tan50° − 1/tan65°) = 30')}.`,
            `Bereken: 1/tan50° ≈ 0.8391, &nbsp;1/tan65° ≈ 0.4663, &nbsp;verskil ≈ 0.3728.`,
            `<strong>Antwoord:</strong> h = 30 / 0.3728 ≈ ${gr('69.5 m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In driehoek PQR is PQ = 5 cm, PR = 8 cm en ∠QPR = 40°. Bereken die oppervlakte van driehoek PQR.',
          answer: '½ · 5 · 8 · sin40° = 20 · sin40° ≈ 20 · 0.6428 ≈ 12.86 cm²',
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
              correctAnswer: '44.23',
              correctAnswers: ['44.23', '44.2', '44'],
              explanation: 'Oppervlakte = ½ · 9 · 12 · sin55° = 54 · 0.8192 ≈ 44.23 cm² ✓',
            },
            {
              label: 'b) Bereken die lengte van LM (korrek tot 2 desimale plekke).',
              correctAnswer: '9.84',
              correctAnswers: ['9.84', '9.83', '9.85'],
              explanation: 'LM² = 9² + 12² − 2(9)(12)cos55° = 81 + 144 − 216 · 0.5736 ≈ 225 − 123.90 = 101.10\nLM = √101.10 ≈ 9.84 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vertikale mas TM staan by M op horisontale grond. Vanaf punt A op die grond is die hoogtehoek na T 35°. Vanaf punt B, ook op die grond en 20 m nader aan die mas langs die reguit lyn AB (sodat B tussen A en M lê, met A, B, M kollineêr), is die hoogtehoek na T 48°. Bepaal die hoogte van die mas TM.',
          answer: 'Laat TM = h, BM = d.\nVanaf B: tan48° = h/d → d = h/tan48°.\nVanaf A: tan35° = h/(d + 20) → d + 20 = h/tan35°.\nTrek af: 20 = h(1/tan35° − 1/tan48°) = h(1.4281 − 0.9004) = h · 0.5277.\nh = 20/0.5277 ≈ 37.9 m.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 2D- en 3D-trigonometrieprobleme op te los deur horisontale en vertikale driehoeke te identifiseer, die sin reël en cos reël toe te pas, en hoogte- en dieptehoeke te gebruik" />',
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
          correctAnswers: ['24/25', '0.96'],
          explanation: 'sinα = 4/5  (Pythagoras-identiteit, α skerp)\nsin2α = 2sinαcosα = 2·(4/5)·(3/5) = 24/25 ✓',
        },
        {
          label: 'b) cos2α =',
          correctAnswer: '7/25',
          correctAnswers: ['7/25', '0.28'],
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
      answer: '≈ 44.29 cm²',
      checkMode: 'auto',
      correctAnswer: '44.29',
      correctAnswers: ['44.29', '44.3', '44.28', '44.30', '44.2'],
      explanation: 'Oppervlakte = ½ · AB · AC · sin(∠BAC)\n= ½(9)(12)sin55°\n= 54 × 0.8192\n≈ 44.29 cm² ✓',
    },

    // ── V14 Moeilik — cos reël om onbekende sy te bepaal ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde driehoek van V13 (AB = 9 cm, AC = 12 cm, hoek BAC = 55°), bepaal die lengte van BC met behulp van die cos reël. Gee jou antwoord korrek tot 2 desimale plekke.',
      answer: 'BC² = 9² + 12² − 2(9)(12)cos55°\n= 81 + 144 − 216cos55°\n= 225 − 123.85\n≈ 101.15\nBC ≈ 10.06 cm',
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
      answer: 'Vervang d = h/tan65° in tan40° = h/(d + 20):\ntan40°(h/tan65° + 20) = h\nh·tan40°/tan65° + 20tan40° = h\n20tan40° = h(1 − tan40°/tan65°)\nh = 20tan40° / (1 − tan40°/tan65°) ≈ 46.2 m',
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
      answer: 'Laat TC = h en BC = d.\ntan55° = h/d  →  d = h/tan55°.\ntan35° = h/(d + 50).\nVervang: tan35°(h/tan55° + 50) = h.\n50tan35° = h(1 − tan35°/tan55°).\nh = 50tan35° / (1 − tan35°/tan55°) ≈ 57.67 m',
      checkMode: 'self',
    },

    // ── V19 Moeilik — weerlê onkorrekte identiteit ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho beweer dat sin(A+B) = sinA + sinB vir alle waardes van A en B. Weerlê hierdie bewering met ʼn spesifieke numeriese voorbeeld.',
      answer: 'Laat A = 30° en B = 60°.\nLK: sin(30°+60°) = sin90° = 1.\nRK: sin30° + sin60° = 0.5 + √3/2 ≈ 1.366.\nAangesien 1 ≠ 1.366, is Sipho se bewering vals. ✓',
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

