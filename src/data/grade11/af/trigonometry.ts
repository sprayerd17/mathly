import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (trigonometry roles) ─────────────────────────────────────
// special triangle sides / sinθ → blue   (#2563eb)
// derived ratio / cosθ          → orange (#ea580c)
// final surd value / identity   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Trigonometrie',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SPECIAL ANGLES — 30°, 45° AND 60°
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'special-angles',
      title: 'Spesiale Hoeke — 30°, 45° en 60°',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons lei die <strong>presiese (wortelvorm) waardes</strong> van sin, cos en tan vir 30°, 45° en 60° af deur twee spesiale driehoeke te gebruik, soos in die diagram hieronder getoon. Die <strong>45-45-90-driehoek</strong> kom van ʼn vierkant wat diagonaal deurgesny word — albei bene is gelyk aan 1, wat ʼn skuinssy van √2 gee. Die <strong>30-60-90-driehoek</strong> kom van ʼn gelyksydige driehoek (sye van 2) wat middeldeur gesny word — dit gee ʼn basis van 1, hoogte van √3, en skuinssy van 2. Verwys na die diagram om presies te sien watter sy teenoor elke hoek lê voordat jy deur die voorbeelde werk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sye van spesiale driehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afgeleide verhouding')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale wortelwaarde')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die 45-45-90-driehoek in die diagram om sin 45° af te lei.',
          answer: `sin 45° = ${gr('√2/2')}`,
          steps: [
            `Uit die diagram is die sy ${bl('teenoor')} die 45°-hoek ${bl('1')}, en die skuinssy is ${bl('√2')}.`,
            `${or('sin 45°')} = teenoorstaande / skuinssy = ${bl('1')} / ${bl('√2')}.`,
            `Rasionaliseer die noemer: ${or('1/√2')} × ${bl('√2/√2')} = ${gr('√2/2')} (na rasionalisering).`,
            `<strong>Antwoord:</strong> sin 45° = ${gr('√2/2')} ✓`,
          ],
        },
        {
          question: 'Gebruik die 30-60-90-driehoek in die diagram om cos 30° af te lei.',
          answer: `cos 30° = ${gr('√3/2')}`,
          steps: [
            `Uit die diagram is die sy ${bl('aangrensend')} aan die 30°-hoek ${bl('√3')}, en die skuinssy is ${bl('2')}.`,
            `${or('cos 30°')} = aangrensende / skuinssy = ${bl('√3')} / ${bl('2')}.`,
            `<strong>Antwoord:</strong> cos 30° = ${gr('√3/2')} ✓`,
          ],
        },
        {
          question: 'Gebruik dieselfde 30-60-90-driehoek in die diagram om tan 60° af te lei.',
          answer: `tan 60° = ${gr('√3')}`,
          steps: [
            `Uit die diagram is die sy ${bl('teenoor')} 60° gelyk aan ${bl('√3')}, en die sy ${bl('aangrensend')} aan 60° is ${bl('1')}.`,
            `${or('tan 60°')} = teenoorstaande / aangrensende = ${bl('√3')} / ${bl('1')} = ${gr('√3')}.`,
            `<strong>Antwoord:</strong> tan 60° = ${gr('√3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skryf die presiese waarde van elk van die volgende neer sonder om ʼn sakrekenaar te gebruik.\na) sin 30°\nb) cos 45°\nc) tan 30°',
          answer: 'a) sin 30° = 1/2\nb) cos 45° = √2/2\nc) tan 30° = 1/√3 = √3/3',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken die presiese waarde van elke uitdrukking. Toon alle werk.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin²45° + cos²45° =',
              correctAnswer: '1',
              explanation: 'sin²45° = (√2/2)² = 2/4 = 1/2\ncos²45° = (√2/2)² = 1/2\nsin²45° + cos²45° = 1/2 + 1/2 = 1 ✓',
            },
            {
              label: 'b) 2 sin 30° × cos 30° =',
              correctAnswer: '√3/2',
              correctAnswers: ['√3/2', 'root3/2', '(√3)/2'],
              explanation: 'sin 30° = 1/2 en cos 30° = √3/2\n2 × (1/2) × (√3/2) = 2 × √3/4 = √3/2 ✓',
            },
            {
              label: 'c) tan²60° − 1 =',
              correctAnswer: '2',
              explanation: 'tan 60° = √3\ntan²60° = (√3)² = 3\ntan²60° − 1 = 3 − 1 = 2 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Bereken die presiese waarde van sin 30° × cos 60° + sin 60° × cos 30° sonder ʼn sakrekenaar. Toon alle werk en vereenvoudig jou antwoord volledig.',
          answer: 'sin 30° × cos 60° + sin 60° × cos 30°\n= (1/2)(1/2) + (√3/2)(√3/2)\n= 1/4 + 3/4\n= 4/4\n= 1\n\nLet wel: dit is die saamgestelde-hoek-uitbreiding van sin(30° + 60°) = sin 90° = 1 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die presiese waardes van sin, cos en tan vir 30°, 45° en 60° aflei deur die 45-45-90- en 30-60-90-spesiale driehoeke te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRIGONOMETRIC IDENTITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-identities',
      title: 'Trigonometriese Identiteite',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Trigonometriese identiteit</strong> is ʼn vergelyking met trig-verhoudings wat waar is vir alle geldige waardes van θ. In Graad 11 lei ons twee fundamentele identiteite af en gebruik hulle: die <strong>kwosiëntidentiteit</strong> tanθ = sinθ/cosθ (afgelei deur y/r en x/r te deel) en die <strong>Pythagoras-identiteit</strong> sin²θ + cos²θ = 1 (afgelei deur x² + y² = r² toe te pas en deur r² te deel).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sinθ')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('cosθ')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde identiteitsresultaat')}</span>` +
        `</div>` +

        // ── Two identities ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee fundamentele identiteite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kwosiëntidentiteit</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:8px;">tanθ = sinθ / cosθ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Afgelei van:</strong> ${bl('sinθ')} = y/r en ${or('cosθ')} = x/r. Deling gee (y/r) ÷ (x/r) = y/x = tanθ.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Pythagoras-identiteit</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:8px;">sin²θ + cos²θ = 1</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Afgelei van:</strong> x² + y² = r² (Stelling van Pythagoras). Deel albei kante deur r²: (x/r)² + (y/r)² = 1, wat ${or('cos²θ')} + ${bl('sin²θ')} = 1 gee.</p>` +
        `</div>` +

        `</div>` +

        // ── Rearrangements ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Nuttige herrangskikkings van die Pythagoras-identiteit</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 18px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">` +
        `<div style="min-width:160px;padding:8px 14px;background:white;border:1px solid #e2e8f0;border-radius:8px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin:0;">${bl('sin²θ')} = 1 − ${or('cos²θ')}</p>` +
        `</div>` +
        `<div style="min-width:160px;padding:8px 14px;background:white;border:1px solid #e2e8f0;border-radius:8px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin:0;">${or('cos²θ')} = 1 − ${bl('sin²θ')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie om identiteite te vereenvoudig en te bewys</p>` +
        `<p style="margin:0;color:#1e3a8a;">Werk op <strong>net een kant</strong> — gewoonlik die meer komplekse kant. Vervang tanθ met behulp van die kwosiëntidentiteit, en vervang ${bl('sin²θ')} + ${or('cos²θ')} met 1 wanneer dit voorkom. Skuif nooit terme oor die gelykaanteken nie — dit is rekenkunde, nie ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bewys dat tanθ = sinθ/cosθ.',
          answer: `tanθ = ${gr('sinθ / cosθ')}`,
          steps: [
            `Skryf die definisies van die trig-verhoudings neer: ${bl('sinθ')} = y/r en ${or('cosθ')} = x/r.`,
            `Deel ${bl('sinθ')} deur ${or('cosθ')}: ${bl('sinθ')} / ${or('cosθ')} = (y/r) ÷ (x/r).`,
            `Vereenvoudig die saamgestelde breuk: (y/r) ÷ (x/r) = (y/r) × (r/x) = y/x.`,
            `Onthou dat tanθ = y/x per definisie.`,
            `<strong>Daarom:</strong> ${bl('sinθ')} / ${or('cosθ')} = y/x = ${gr('tanθ')} ✓`,
          ],
        },
        {
          question: 'Gebruik die identiteit sin²θ + cos²θ = 1 om cosθ te bepaal as sinθ = 3/5 en θ in die eerste kwadrant is.',
          answer: `cosθ = ${gr('4/5')}`,
          steps: [
            `Skryf die Pythagoras-identiteit neer: ${bl('sin²θ')} + ${or('cos²θ')} = 1.`,
            `Vervang ${bl('sinθ')} = 3/5: ${bl('(3/5)²')} + ${or('cos²θ')} = 1.`,
            `Vereenvoudig: ${bl('9/25')} + ${or('cos²θ')} = 1.`,
            `Isoleer ${or('cos²θ')}: ${or('cos²θ')} = 1 − ${bl('9/25')} = 25/25 − 9/25 = 16/25.`,
            `Trek die vierkantswortel: ${or('cosθ')} = ±√(16/25) = ±4/5.`,
            `Aangesien θ in die <strong>eerste kwadrant</strong> is, is cosθ positief: ${or('cosθ')} = ${gr('4/5')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig sinθ · tanθ + cosθ met behulp van die trigonometriese identiteite.',
          answer: `sinθ · tanθ + cosθ = ${gr('1/cosθ')}`,
          steps: [
            `Vervang tanθ met behulp van die kwosiëntidentiteit: ${bl('sinθ')} · (${bl('sinθ')} / ${or('cosθ')}) + ${or('cosθ')}.`,
            `Vereenvoudig die produk: ${bl('sin²θ')} / ${or('cosθ')} + ${or('cosθ')}.`,
            `Skryf ${or('cosθ')} as ʼn breuk met noemer cosθ: ${bl('sin²θ')} / ${or('cosθ')} + ${or('cos²θ')} / ${or('cosθ')}.`,
            `Kombineer die breuke: (${bl('sin²θ')} + ${or('cos²θ')}) / ${or('cosθ')}.`,
            `Pas die Pythagoras-identiteit toe — ${bl('sin²θ')} + ${or('cos²θ')} = 1: = ${gr('1 / cosθ')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Gebruik die identiteit sin²θ + cos²θ = 1 om sinθ te bepaal as cosθ = 5/13 en θ in die eerste kwadrant is.',
          answer: 'sin²θ = 1 − cos²θ\n= 1 − (5/13)²\n= 1 − 25/169\n= 144/169\nsinθ = 12/13 (positief in die eerste kwadrant) ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking met behulp van die identiteite. Toon alle werk.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (sinθ / cosθ) × cosθ =',
              correctAnswer: 'sinθ',
              explanation: '(sinθ/cosθ) × cosθ = sinθ × (cosθ/cosθ) = sinθ × 1 = sinθ ✓',
            },
            {
              label: 'b) 1 − sin²θ =',
              correctAnswer: 'cos²θ',
              correctAnswers: ['cos²θ', 'cos^2θ', 'cos^2(θ)'],
              explanation: 'Herrangskik sin²θ + cos²θ = 1:\n1 − sin²θ = cos²θ ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Bewys die volgende identiteit. Toon alle stappe en gee aan watter identiteit jy by elke stap toepas.\n\n(1 − sin²θ) / cosθ = cosθ',
          answer: 'LK = (1 − sin²θ) / cosθ\nStap 1: Pas die Pythagoras-identiteit toe — 1 − sin²θ = cos²θ\n= cos²θ / cosθ\nStap 2: Vereenvoudig deur een faktor van cosθ te kanselleer\n= cosθ\n= RK ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Reghoekige driehoek gemerk met x, y en r wat die definisies sinθ = y/r in blou, cosθ = x/r in oranje, en tanθ = y/x toon, met die afgeleide Pythagoras-identiteit sin²θ + cos²θ = 1 uitgelig in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die kwosiëntidentiteit tanθ = sinθ/cosθ en die Pythagoras-identiteit sin²θ + cos²θ = 1 aflei, en wys hoe om albei identiteite te gebruik om uitdrukkings te vereenvoudig" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE EFFECT OF PARAMETERS k AND p ON TRIG GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trig-graph-parameters',
      title: 'Die Effek van Parameters k en p op Trig-grafieke',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Verwys na die diagram hieronder wat ${bl('y=sinθ')} (in blou) vergelyk met ${or('y=sin(2θ)')} (in oranje) oor een volle omwenteling. Die parameter <strong>k</strong> druk saam (k&gt;1) of rek uit (0&lt;k&lt;1) die grafiek horisontaal, wat die periode verander — let in die diagram op hoe die ${or('oranje grafiek')} twee volle golwe voltooi in dieselfde ruimte wat die ${bl('blou grafiek')} vir een neem, aangesien sy periode 360°/k is. Die parameter <strong>p</strong> skuif die grafiek horisontaal — links as p positief is (soos in θ+p), regs as p negatief is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike grafiek (k=1)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('getransformeerde grafiek (k=2)')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die diagram om die periode van y=sin(2θ) te bepaal en verduidelik hoe jy dit direk uit die grafiek kan sien.',
          answer: `Die periode van ${or('y=sin(2θ)')} is ${or('180°')}`,
          steps: [
            `Die periode is 360°/2 = ${or('180°')}.`,
            `In die diagram voltooi die ${or('oranje kurwe')} een volle siklus (begin tot einde van een golf) in net ${or('180°')}, presies die helfte van die ruimte wat die ${bl('blou kurwe')} nodig het.`,
          ],
        },
        {
          question: 'Beskryf hoe y=cos(θ−30°) verskil van y=cosθ, deur dieselfde skuiflogika te gebruik as in die diagram se k-vergelyking.',
          answer: `Die grafiek van ${or('y=cos(θ−30°)')} is die grafiek van ${bl('y=cosθ')} ${or('30° na regs')} geskuif`,
          steps: [
            `Dit skuif die hele grafiek ${or('30° na regs')}, dieselfde horisontale-skuif-beginsel wat deur die p-parameter geïllustreer word, maar hier beweeg dit regs aangesien die hoek θ−30° is.`,
          ],
        },
        {
          question: 'Lerato vergelyk y=sin(θ+45°) met y=sinθ. Beskryf die transformasie.',
          answer: `Die grafiek van ${or('y=sin(θ+45°)')} is die grafiek van ${bl('y=sinθ')} ${or('45° na links')} geskuif`,
          steps: [
            `Dit skuif die grafiek ${or('45° na links')}, aangesien p positief is wanneer dit geskryf word as θ+45°.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Gee die periode van elk van die volgende grafieke.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y = cos(3θ) — periode =',
              correctAnswer: '120°',
              explanation: 'Periode = 360°/k = 360°/3 = 120° ✓',
            },
            {
              label: 'b) y = sin(θ/2) — periode =',
              correctAnswer: '720°',
              explanation: 'k = 1/2. Periode = 360° ÷ (1/2) = 720°. Die grafiek word horisontaal uitgerek en voltooi slegs ʼn halwe siklus in 360°. ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Vir elke grafiek, gee die periode en beskryf die horisontale skuif in vergelyking met die standaardgrafiek. Toon jou redenasie.',
          answer: 'a) y = sin(2θ + 60°)\nFaktoriseer eers: y = sin(2(θ + 30°)).\nk = 2 → periode = 360°/2 = 180°.\np = +30° → grafiek skuif 30° na links.\n\nb) y = cos(θ − 45°)\nk = 1 → periode = 360° (onveranderd).\np = −45° → grafiek skuif 45° na regs.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Trigonometriese grafiek het die vergelyking y = sin(kθ + p). Die periode van die grafiek is 90° en die grafiek is dieselfde as y = sin(kθ) 15° na regs geskuif.\n\na) Bepaal die waarde van k.\nb) Bepaal die waarde van p.\nc) Skryf die volledige vergelyking van die grafiek neer.',
          answer: 'a) Periode = 360°/k = 90°\nk = 360°/90° = 4\n\nb) ʼn Skuif van 15° na regs beteken p < 0.\ny = sin(4θ + p). Om 15° na regs te skuif, vervang θ met (θ − 15°):\ny = sin(4(θ − 15°)) = sin(4θ − 60°).\nDus p = −60°.\n\nc) y = sin(4θ − 60°)',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe die parameters k en p die periode en horisontale posisie van trigonometriese grafieke beïnvloed, met ʼn regstreekse langs-mekaar-vergelyking van y = sinθ, y = sin(2θ) en y = sin(θ + 45°)" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — REDUCTION FORMULAE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reduction-formulae',
      title: 'Reduksieformules',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">Verwys na die diagram hieronder wat die vier kwadrante van die Cartesiese vlak toon, elk gemerk met watter trig-verhoudings daar positief is (ʼn nuttige geheuehulpmiddel is '<strong>CAST</strong>' anti-kloksgewys gelees vanaf Kwadrant 4: <span style="color:#dc2626;font-weight:700">C</span>os, ${gr('A')}lle, ${bl('S')}in, ${or('T')}an). Reduksieformules laat ons trig-verhoudings van hoeke groter as 90° uitdruk in terme van ʼn ekwivalente verhouding vir ʼn hoek tussen 0° en 90° (die <strong>verwysingshoek</strong>), met die teken bepaal deur watter kwadrant die oorspronklike hoek in val, soos in die diagram getoon.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('K1 — Alles positief')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('K2 — Sin positief')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('K3 — Tan positief')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#dc2626;font-weight:700">K4 — Cos positief</span></span>` +
        `</div>` +

        // ── Reduction formulae table ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel-reduksieformules</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f1f5f9;">` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">Vorm</th>` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">sin-resultaat</th>` +
        `<th style="border:1px solid #e2e8f0;padding:10px 14px;text-align:left;font-weight:700;color:#0f1f3d;">cos-resultaat</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">180°−θ &nbsp;(${bl('K2')})</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${bl('sin(180°−θ)')} = ${gr('+sinθ')}</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${bl('cos(180°−θ)')} = <span style="color:#dc2626;font-weight:700">−cosθ</span></td></tr>` +
        `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">180°+θ &nbsp;(${or('K3')})</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${or('sin(180°+θ)')} = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;">${or('cos(180°+θ)')} = <span style="color:#dc2626;font-weight:700">−cosθ</span></td></tr>` +
        `<tr><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">360°−θ &nbsp;(<span style="color:#dc2626;font-weight:700">K4</span>)</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">sin(360°−θ)</span> = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">cos(360°−θ)</span> = ${gr('+cosθ')}</td></tr>` +
        `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:10px 14px;font-weight:600;color:#374151;">−θ &nbsp;(<span style="color:#dc2626;font-weight:700">K4</span>)</td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">sin(−θ)</span> = <span style="color:#dc2626;font-weight:700">−sinθ</span></td>` +
        `<td style="border:1px solid #e2e8f0;padding:10px 14px;"><span style="color:#dc2626;font-weight:700">cos(−θ)</span> = ${gr('+cosθ')}</td></tr>` +
        `</tbody></table>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Drie-stap-metode</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Identifiseer die vorm: 180°±θ, 360°−θ, of −θ.<br><strong>Stap 2</strong> — Pas die reduksieformule toe om die uitdrukking te vervang met ʼn verhouding van die verwysingshoek θ.<br><strong>Stap 3</strong> — Bepaal die teken met behulp van die kwadrant wat in die diagram hierbo getoon word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig sin(180°−40°).',
          answer: `sin(180°−40°) = ${bl('sin 40°')}`,
          steps: [
            `180°−40° val in ${bl('Kwadrant 2')}, waar (soos in die diagram getoon) ${bl('sin positief is')}.`,
            `Dus sin(180°−40°) = ${bl('sin 40°')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig cos(360°−65°).',
          answer: `cos(360°−65°) = <span style="color:#dc2626;font-weight:700">cos 65°</span>`,
          steps: [
            `360°−65° val in <span style="color:#dc2626;font-weight:700">Kwadrant 4</span>, waar (soos in die diagram getoon) <span style="color:#dc2626;font-weight:700">net cos positief is</span>.`,
            `Dus cos(360°−65°) = <span style="color:#dc2626;font-weight:700">cos 65°</span> ✓`,
          ],
        },
        {
          question: 'Sipho vereenvoudig sin(180°+30°)·cos(−30°). Bepaal die presiese waarde.',
          answer: `sin(180°+30°)·cos(−30°) = ${gr('−√3/4')}`,
          steps: [
            `180°+30° val in ${or('Kwadrant 3')}, waar (volgens die diagram) nie sin of cos positief is nie — ${or('sin is daar negatief')}. ${or('sin(180°+30°)')} = ${or('−sin30°')} = ${or('−½')}.`,
            `cos(−30°) = <span style="color:#dc2626;font-weight:700">cos 30°</span> = <span style="color:#dc2626;font-weight:700">√3/2</span> (negatiewe hoeke roteer kloksgewys in Kwadrant 4 in, waar cos positief is).`,
            `Gekombineer: ${or('(−½)')} × <span style="color:#dc2626;font-weight:700">(√3/2)</span> = ${gr('−√3/4')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Gebruik reduksieformules om elke uitdrukking te vereenvoudig.\na) sin(180° − x)\nb) cos(360° − x)',
          answer: 'a) sin(180° − x) = sin x\nb) cos(360° − x) = cos x',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking met behulp van reduksieformules.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) sin(180° + 50°) =',
              correctAnswer: '−sin50°',
              correctAnswers: ['−sin50°', '-sin50°', '−sin 50°', '-sin 50°'],
              explanation: 'sin(180° + θ) = −sinθ\nsin(180° + 50°) = −sin 50° ✓',
            },
            {
              label: 'b) cos(−70°) =',
              correctAnswer: 'cos70°',
              correctAnswers: ['cos70°', 'cos 70°', 'cos(70°)'],
              explanation: 'cos(−θ) = cosθ\ncos(−70°) = cos 70° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig sonder ʼn sakrekenaar die volgende uitdrukking volledig:\n\nsin(180° + x) · cos(360° − x) + cos(180° − x) · sin(−x)',
          answer: 'Stap 1: Pas reduksieformules op elke faktor toe.\nsin(180° + x) = −sin x\ncos(360° − x) = cos x\ncos(180° − x) = −cos x\nsin(−x) = −sin x\n\nStap 2: Vervang.\n= (−sin x)(cos x) + (−cos x)(−sin x)\n= −sin x cos x + sin x cos x\n= 0 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat reduksieformules verduidelik met behulp van die CAST-diagram, met uitgewerkte voorbeelde wat hoeke in K2, K3 en K4 na hul verwysingshoeke omskakel en die korrekte teken vir elke verhouding bepaal" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — GENERAL SOLUTIONS OF TRIGONOMETRIC EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'general-solutions',
      title: 'Algemene Oplossings van Trigonometriese Vergelykings',
      icon: '∞',
      explanation:
        `<p style="margin-bottom:16px;">Verwys na die eenheidsirkel-diagram hieronder. Aangesien trig-funksies <strong>periodies</strong> is (die sirkel herhaal elke volle omwenteling van 360°), het ʼn vergelyking soos sinθ = 0.5 <strong>oneindig baie oplossings</strong> — die diagram toon albei hoeke binne een omwenteling (${or('30°')} en ${or('150°')}) waar sinθ = 0.5, gemerk met ooreenstemmende y-waardes. Die algemene oplossing tel ${gr('360°n')} (n = enige heelgetal) by om elke ekstra omwenteling in ag te neem: vir sinθ = k, θ = verwysingshoek + ${gr('360°n')} <strong>OF</strong> θ = (180° − verwysingshoek) + ${gr('360°n')}. Vir cosθ = k, θ = ±verwysingshoek + ${gr('360°n')}. Vir tanθ = k, θ = verwysingshoek + ${gr('180°n')} (tan het net een formule nodig aangesien dit elke 180° herhaal, soos die diagonale simmetrie in die diagram toon).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oplossingshoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('herhalende periode (n ∈ ℤ)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene-oplossing-formules</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">sin θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = verwysingshoek + 360°n')} &nbsp; <strong>of</strong> &nbsp; ${or('θ = (180° − verwysingshoek) + 360°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">cos θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = ±verwysingshoek + 360°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">tan θ = k</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('θ = verwysingshoek + 180°n')}, &nbsp; ${gr('n ∈ ℤ')}</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die algemene oplossing van sinθ = 0.5.',
          answer: `θ = ${or('30°')} + ${gr('360°n')} of θ = ${or('150°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `Soos in die diagram getoon, is sinθ = 0.5 by beide ${or('30°')} en ${or('150°')} binne een omwenteling.`,
            `Verwysingshoek = ${or('30°')}.`,
            `<strong>Algemene oplossing:</strong> θ = ${or('30°')} + ${gr('360°n')} of θ = ${or('150°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
        {
          question: 'Bepaal die algemene oplossing van cosθ = −0.5.',
          answer: `θ = ${or('±120°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `Verwysingshoek = cos⁻¹(0.5) = ${or('60°')}.`,
            `Aangesien cosθ negatief is, lê die oplossings in Kwadrante 2 en 3 van die sirkel.`,
            `Algemene oplossing: θ = 180° − ${or('60°')} + ${gr('360°n')} of θ = 180° + ${or('60°')} + ${gr('360°n')}, kompak geskryf as θ = ${or('±120°')} + ${gr('360°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
        {
          question: 'Lerato bepaal die algemene oplossing van tanθ = 1.',
          answer: `θ = ${or('45°')} + ${gr('180°n')}, ${gr('n ∈ ℤ')}`,
          steps: [
            `Verwysingshoek = tan⁻¹(1) = ${or('45°')}.`,
            `Aangesien tan elke 180° herhaal (sigbaar uit die diagonale simmetrie van die sirkel), is die algemene oplossing eenvoudig θ = ${or('45°')} + ${gr('180°n')}, ${gr('n ∈ ℤ')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skryf die algemene oplossing van sinθ = √3/2 neer.',
          answer: 'Verwysingshoek: sin⁻¹(√3/2) = 60°\nsinθ is positief → oplossings in K1 en K2.\nAlgemene oplossing: θ = 60° + 360°n of θ = 120° + 360°n, n ∈ ℤ',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bepaal die algemene oplossing van elke vergelyking. Toon alle werk.',
          answer: 'a) cosθ = √2/2\nVerwysingshoek: cos⁻¹(√2/2) = 45°\ncosθ is positief → K1 en K4.\nAlgemene oplossing: θ = ±45° + 360°n, n ∈ ℤ\n\nb) tanθ = √3\nVerwysingshoek: tan⁻¹(√3) = 60°\nAlgemene oplossing: θ = 60° + 180°n, n ∈ ℤ',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Bepaal die algemene oplossing van 2sinθ + 1 = 0. Lys dan alle oplossings in die interval −360° ≤ θ ≤ 360°.',
          answer: 'Stap 1: Isoleer sinθ.\n2sinθ = −1 → sinθ = −1/2\n\nStap 2: Verwysingshoek = sin⁻¹(1/2) = 30°.\nsinθ is negatief → oplossings in K3 en K4.\n\nStap 3: Algemene oplossing.\nθ = (180° + 30°) + 360°n = 210° + 360°n, n ∈ ℤ\nof θ = (360° − 30°) + 360°n = 330° + 360°n, n ∈ ℤ\n\nStap 4: Oplossings in [−360°, 360°].\nVan 210° + 360°n: n = 0 → 210°; n = −1 → −150°.\nVan 330° + 360°n: n = 0 → 330°; n = −1 → −30°.\nOplossings: −150°, −30°, 210°, 330°.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap vir stap wys hoe om die algemene oplossing van sinθ = k, cosθ = k, en tanθ = k te bepaal, insluitend die identifisering van die verwysingshoek en die skryf van die volledige algemene oplossing met n ∈ ℤ" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — THE SINE, COSINE AND AREA RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sine-cosine-area-rules',
      title: 'Die Sin reël, Cos reël en Oppervlakte-reël',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Hierdie drie reëls brei trigonometrie uit na <strong>enige driehoek</strong> — nie net reghoekiges nie. Die keuse van reël hang heeltemal af van watter sye en hoeke aan jou gegee is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende sye/hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gebruikte reël')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie reëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sin reël</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">a / sinA = b / sinB = c / sinC</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> jy ʼn ooreenstemmende hoek-sy-paar plus een ander sy of hoek ken (HHS of SSH).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Cos reël</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">a² = b² + c² − 2bc · cosA</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> jy twee sye en die ingeslote hoek ken (SHS) of al drie sye (SSS).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Oppervlakte-reël</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin-bottom:6px;">Oppervlakte = ½ · a · b · sinC</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> jy twee sye en die ingeslote hoek ken.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Merkkonvensie</p>` +
        `<p style="margin:0;color:#374151;">Sy a lê teenoor hoek A, sy b lê teenoor hoek B, en sy c lê teenoor hoek C. Koppel altyd elke sy met sy <strong>teenoorstaande</strong> hoek — om hulle te verwar is die algemeenste fout.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watter reël om te gebruik?</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Sin reël eerste</strong> — as jy ʼn ooreenstemmende hoek-sy-paar en een ander element het.<br><strong>Cos reël</strong> — vir SHS (twee sye + ingeslote hoek) of SSS (drie sye).<br><strong>Oppervlakte-reël</strong> — wanneer jy ook al die oppervlakte nodig het en twee sye + die ingeslote hoek het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In driehoek ABC is A = 40°, B = 65°, en a = 10 cm. Bepaal sy b met behulp van die Sin reël.',
          answer: `b ≈ ${gr('14.1 cm')}`,
          steps: [
            `Identifiseer wat bekend is: ${bl('A = 40°')}, ${bl('B = 65°')}, ${bl('a = 10 cm')}.`,
            `Ons het ʼn ooreenstemmende paar (${bl('a')} teenoor ${bl('A')}) en benodig ${gr('b')}, dus pas die ${or('Sin reël')} toe: ${or('a / sinA = b / sinB')}.`,
            `Vervang: ${bl('10')} / sin(${bl('40°')}) = ${gr('b')} / sin(${bl('65°')}).`,
            `Los op vir ${gr('b')}: ${gr('b')} = ${bl('10')} × sin(${bl('65°')}) / sin(${bl('40°')}).`,
            `Bereken: ${gr('b')} = 10 × 0.9063 / 0.6428 ≈ ${gr('14.1 cm')} ✓`,
          ],
        },
        {
          question: 'In driehoek ABC is b = 8 cm, c = 10 cm, en A = 50°. Bepaal sy a met behulp van die Cos reël.',
          answer: `a ≈ ${gr('7.82 cm')}`,
          steps: [
            `Identifiseer wat bekend is: ${bl('b = 8 cm')}, ${bl('c = 10 cm')}, ${bl('A = 50°')} (twee sye en die ingeslote hoek → SHS).`,
            `Pas die ${or('Cos reël')} toe: ${or('a² = b² + c² − 2bc · cosA')}.`,
            `Vervang: ${gr('a²')} = ${bl('8²')} + ${bl('10²')} − 2(${bl('8')})(${bl('10')}) × cos(${bl('50°')}).`,
            `Bereken: ${gr('a²')} = 64 + 100 − 160 × 0.6428 = 164 − 102.85 ≈ 61.15.`,
            `Trek die vierkantswortel: ${gr('a')} = √61.15 ≈ ${gr('7.82 cm')} ✓`,
          ],
        },
        {
          question: 'Bepaal die oppervlakte van driehoek ABC waar a = 6 cm, b = 9 cm, en die ingeslote hoek C = 70°.',
          answer: `Oppervlakte ≈ ${gr('25.38 cm²')}`,
          steps: [
            `Identifiseer wat bekend is: ${bl('a = 6 cm')}, ${bl('b = 9 cm')}, ${bl('C = 70°')} (twee sye en die ingeslote hoek).`,
            `Pas die ${or('Oppervlakte-reël')} toe: ${or('Oppervlakte = ½ · a · b · sinC')}.`,
            `Vervang: Oppervlakte = ½ × ${bl('6')} × ${bl('9')} × sin(${bl('70°')}).`,
            `Bereken: Oppervlakte = ½ × 54 × 0.9397 = 27 × 0.9397 ≈ ${gr('25.38 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In driehoek PQR is P = 55°, Q = 72°, en sy p = 12 cm. Gebruik die Sin reël om sy q te bepaal. Rond jou antwoord af tot een desimale plek.',
          answer: 'p/sinP = q/sinQ\n12/sin55° = q/sin72°\nq = 12 × sin72°/sin55° = 12 × 0.9511/0.8192 ≈ 13.9 cm ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Los die volgende op met die toepaslike reël. Toon alle werk.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) In △ABC is b = 5 cm, c = 7 cm, A = 60°. Bepaal a² (presiese waarde):',
              correctAnswer: '39',
              explanation: 'Cos reël: a² = b² + c² − 2bc·cosA\n= 25 + 49 − 2(5)(7)cos60°\n= 74 − 70 × 0.5\n= 74 − 35\n= 39 ✓',
            },
            {
              label: 'b) Oppervlakte van △ABC met sye 4 cm, 7 cm en ingeslote hoek 30° (presiese waarde in cm²):',
              correctAnswer: '7',
              explanation: 'Oppervlakte = ½ × 4 × 7 × sin30°\n= ½ × 28 × 0.5\n= 7 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In driehoek ABC is AB = 9 cm, BC = 12 cm en AC = 15 cm.\n\na) Toon dat hoek B = 90° met behulp van die Cos reël.\nb) Bepaal die oppervlakte van die driehoek met die Oppervlakte-reël met sye AB en BC en hoek B.\nc) Bevestig jou antwoord met Oppervlakte = ½ × basis × hoogte.',
          answer: 'a) cosB = (AB² + BC² − AC²) / (2 · AB · BC)\n= (81 + 144 − 225) / (2 × 9 × 12)\n= 0 / 216 = 0\nDus B = cos⁻¹(0) = 90° ✓\n\nb) Oppervlakte = ½ × AB × BC × sinB\n= ½ × 9 × 12 × sin90°\n= ½ × 108 × 1\n= 54 cm²\n\nc) Oppervlakte = ½ × basis × hoogte = ½ × 12 × 9 = 54 cm² ✓',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Nie-reghoekige driehoek ABC met sye a, b, c en hoeke A, B, C gemerk in blou — wat die Sin reël-verhouding a/sinA = b/sinB uitgelig in oranje, die Cos reël a² = b² + c² − 2bc·cosA in oranje, en die Oppervlakte-reël ½ab·sinC in oranje toon, met die berekende waarde in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wanneer en hoe om die Sin reël, Cos reël en Oppervlakte-reël vir nie-reghoekige driehoeke te gebruik, met een volledig uitgewerkte voorbeeld vir elke reël" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — SOLVING 2D PROBLEMS USING TRIGONOMETRIC MODELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-trig-models',
      title: '2D-Probleme Oplos met Trigonometriese Modelle',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike <strong>tweedimensionele probleme</strong> op deur trigonometriese modelle te bou en te interpreteer, dikwels deur die sin reël, cos reël, oppervlakte-reël en reghoekige-driehoek-trigonometrie binne een multi-stap-probleem te kombineer, veral waar ʼn figuur meer as een driehoek bevat.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe metings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tussentydse berekening')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Multi-stap-strategie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Stap 1 — Teken en merk</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Skets die figuur, merk alle ${bl('gegewe metings')} in blou, en merk die onbekende wat jy moet vind.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Stap 2 — Identifiseer sub-driehoeke</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Breek die figuur op in aparte driehoeke. Besluit watter reël (sinus, kosinus, oppervlakte, of reghoekige trig) op elke sub-driehoek van toepassing is en teken ${or('tussentydse resultate')} in oranje aan.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Stap 3 — Kombineer en trek gevolgtrekking</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Ketting die resultate van elke sub-driehoek om die ${gr('finale antwoord')} in groen te bereik. Rond slegs af by die laaste stap.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelbeginsel: rond nooit tussentydse antwoorde af nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Bêre volle sakrekenaarwaardes vir ${or('tussentydse berekeninge')} en rond slegs die ${gr('finale antwoord')} af. Vroeë afronding in multi-stap-probleme vergroot foute en kan die antwoord aansienlik verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee vlagpale is 30 m van mekaar af. Die korter paal is 10 m hoog en die langer paal is 15 m hoog. Toue verbind die bopunt van elke paal met die voetpunt van die ander. Bepaal die hoogte waarop die toue mekaar bo die grond kruis.',
          answer: `Kruishoogte = ${gr('6 m')}`,
          steps: [
            `Teken die twee vlagpale ${bl('30 m')} uitmekaar. Die korter paal het hoogte ${bl('10 m')} en die langer paal het hoogte ${bl('15 m')}. Merk die voetpunt van die korter paal A, die voetpunt van die langer paal B, en die kruispunt X.`,
            `Die tou vanaf die bopunt van die korter paal (hoogte ${bl('10 m')}) na B, en die tou vanaf die bopunt van die langer paal (hoogte ${bl('15 m')}) na A, kruis by X.`,
            `Volgens die gelykvormige-driehoek-eienskappe van die kruispunt voldoen die kruishoogte h aan: ${or('1/h = 1/10 + 1/15')}.`,
            `Bereken die regterkant: ${or('1/10 + 1/15')} = ${or('3/30 + 2/30')} = ${or('5/30')} = ${or('1/6')}.`,
            `Dus ${or('1/h = 1/6')}, sodat h = ${or('6')}. Ekwivalent: h = (${bl('10')} × ${bl('15')}) / (${bl('10')} + ${bl('15')}) = ${or('150')} / ${or('25')} = ${gr('6 m')} ✓`,
          ],
        },
        {
          question: 'ʼn Landmeter staan by punt A en meet die hoogtehoek na die bopunt van ʼn toring as 25°. Sy loop 50 m nader (nou by punt B) en meet die nuwe hoogtehoek as 40°. Bepaal die hoogte van die toring.',
          answer: `Toringhoogte h ≈ ${gr('34.8 m')}`,
          steps: [
            `Laat die toringhoogte = h en die horisontale afstand van B na die basis van die toring = d. Die landmeter begin by A, wat ${bl('50 m')} verder van die basis af is as B.`,
            `Vanaf B (hoogtehoek ${bl('40°')}): ${or('tan 40° = h / d')}, dus ${or('h = d · tan 40°')}.`,
            `Vanaf A (hoogtehoek ${bl('25°')}): ${or('tan 25° = h / (d + 50)')}, dus ${or('h = (d + 50) · tan 25°')}.`,
            `Stel die twee uitdrukkings vir h gelyk: ${or('d · tan 40° = (d + 50) · tan 25°')}.`,
            `Vermenigvuldig uit en versamel d-terme: ${or('d · tan 40° − d · tan 25° = 50 · tan 25°')}, dus ${or('d(tan 40° − tan 25°) = 50 · tan 25°')}.`,
            `Los op vir d: ${or('d = 50 · tan 25° / (tan 40° − tan 25°)')} ≈ ${or('50 × 0.4663 / (0.8391 − 0.4663)')} ≈ ${or('23.315 / 0.3728')} ≈ ${or('62.5 m')}.`,
            `Vervang terug: h = ${or('d · tan 40°')} ≈ ${or('62.5 × 0.8391')} ≈ ${gr('34.8 m')} ✓`,
          ],
        },
        {
          question: 'In ʼn driehoekige stuk grond is twee sye 45 m en 60 m met ʼn ingeslote hoek van 55°. Bepaal die oppervlakte van die stuk grond en die lengte van die derde sy.',
          answer: `Oppervlakte ≈ ${gr('1106.7 m²')}; derde sy ≈ ${gr('50.28 m')}`,
          steps: [
            `Merk die driehoek: die twee bekende sye is ${bl('b = 45 m')} en ${bl('c = 60 m')}, en die ingeslote hoek is ${bl('A = 55°')}.`,
            `Pas die ${or('Oppervlakte-reël')} toe: ${or('Oppervlakte = ½ · b · c · sin A')} = ½ × ${bl('45')} × ${bl('60')} × sin(${bl('55°')}).`,
            `Bereken: ${or('Oppervlakte')} = ½ × 2700 × 0.8192 = ${or('1350 × 0.8192')} ≈ ${gr('1106.7 m²')} ✓`,
            `Pas die ${or('Cos reël')} toe om sy a te bepaal: ${or('a² = b² + c² − 2bc · cos A')}.`,
            `Vervang: ${or('a²')} = ${bl('45²')} + ${bl('60²')} − 2 × ${bl('45')} × ${bl('60')} × cos(${bl('55°')}) = ${or('2025')} + ${or('3600')} − ${or('5400 × 0.5736')} ≈ ${or('5625 − 3097')} = ${or('2528')}.`,
            `Trek die vierkantswortel: a = √${or('2528')} ≈ ${gr('50.28 m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Leer leun teen ʼn vertikale muur. Die onderpunt van die leer is 2.5 m van die basis van die muur af en die leer maak ʼn hoek van 70° met die grond.\n\na) Hoe hoog teen die muur reik die leer?\nb) Hoe lank is die leer?',
          answer: 'a) hoogte = 2.5 × tan 70° ≈ 6.87 m\nb) lengte = 2.5 / cos 70° ≈ 7.31 m',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Twee skepe vertrek gelyktydig vanaf ʼn hawe. Skip A vaar op ʼn koers van 040° vir 30 km en Skip B vaar op ʼn koers van 115° vir 45 km.\n\nBepaal die afstand tussen die twee skepe.',
          answer: 'Die hoek tussen die twee rigtings = 115° − 40° = 75°.\nCos reël: d² = 30² + 45² − 2(30)(45)cos75°\n= 900 + 2025 − 2700 × 0.2588\n= 2925 − 699\n= 2226\nd = √2226 ≈ 47.2 km ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Punte A, B en C is op gelyke grond. Vanaf A is die koers na B 060° en die koers na C 130°. AB = 80 m en AC = 110 m.\n\na) Bepaal hoek BAC.\nb) Bepaal BC met behulp van die Cos reël.\nc) Bepaal die oppervlakte van driehoek ABC.',
          answer: 'a) Hoek BAC = 130° − 60° = 70°\n\nb) BC² = AB² + AC² − 2(AB)(AC)cos(BAC)\n= 80² + 110² − 2(80)(110)cos70°\n= 6400 + 12100 − 17600 × 0.3420\n= 18500 − 6019\n= 12481\nBC = √12481 ≈ 111.7 m\n\nc) Oppervlakte = ½ × AB × AC × sin(BAC)\n= ½ × 80 × 110 × sin70°\n= ½ × 8800 × 0.9397\n≈ 4134.7 m²',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Drie sub-diagramme langs mekaar: (1) twee vlagpale 30 m uitmekaar met kruisende toue en kruishoogte h gemerk in blou, tussentydse verhouding in oranje, antwoord 6 m in groen; (2) landmeter-scenario met toring, hoeke 25° en 40° in blou, afstand d in oranje, hoogte h ≈ 34.8 m in groen; (3) driehoekige stuk grond met sye 45 m en 60 m en hoek 55° in blou, oppervlakte- en derde-sy-berekeninge in oranje, finale antwoorde in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat deur multi-stap-2D-trigonometrieprobleme stap — die kruishoogte van kruisende toue, die hoogtehoek-toring-probleem gelyktydig opgelos, en die driehoekige stuk grond met die Oppervlakte- en Cos reël" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — presiese waarde sin 30° ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gee die presiese waarde van sin 30°.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      explanation: 'Deur die 30-60-90-spesiale driehoek te gebruik: sin 30° = teenoorstaande/skuinssy = 1/2 ✓',
    },

    // ── V2 Maklik — presiese waarde cos 45° ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gee die presiese waarde van cos 45°.',
      answer: '√2/2',
      checkMode: 'auto',
      correctAnswer: '√2/2',
      correctAnswers: ['√2/2', 'root2/2', '1/√2'],
      explanation: 'Deur die 45-45-90-spesiale driehoek te gebruik: cos 45° = aangrensende/skuinssy = 1/√2 = √2/2 ✓',
    },

    // ── V3 Matig — presiese waarde tan 60° ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gee die presiese waarde van tan 60°.',
      answer: '√3',
      checkMode: 'auto',
      correctAnswer: '√3',
      explanation: 'Deur die 30-60-90-driehoek te gebruik: tan 60° = teenoorstaande/aangrensende = √3/1 = √3 ✓',
    },

    // ── V4 Moeilik — Sipho se bewering oor sin 60° ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê sin 60° = 2 × sin 30°. Is hy korrek? Verduidelik.',
      answer: 'Nee — sin 60° = √3/2 ≈ 0.866, terwyl 2 × sin 30° = 2 × 0.5 = 1. Hulle is nie gelyk nie.',
      checkMode: 'self',
    },

    // ── V5 Matig — bewys die Pythagoras-identiteit ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bewys dat sin²θ + cos²θ = 1 met behulp van die definisies sinθ = y/r en cosθ = x/r.',
      answer: 'sinθ = y/r, cosθ = x/r. sin²θ + cos²θ = (y/r)² + (x/r)² = (y² + x²)/r². Aangesien x² + y² = r² (Pythagoras), vereenvoudig dit na r²/r² = 1.',
      checkMode: 'self',
    },

    // ── V6 Moeilik — bepaal sinθ met die Pythagoras-identiteit ───────────────────
    {
      difficulty: 'Hard',
      question: 'As cosθ = 5/13 en θ in die eerste kwadrant is, bepaal sinθ.',
      answer: 'sin²θ = 1 − 25/169 = 144/169. sinθ = 12/13.',
      checkMode: 'self',
    },

    // ── V7 Matig — periode van y = sin(3θ) ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die periode van y = sin(3θ).',
      answer: '120°',
      checkMode: 'auto',
      correctAnswer: '120°',
      explanation: 'Periode = 360°/k = 360°/3 = 120° ✓',
    },

    // ── V8 Moeilik — transformasie van y = cos(θ + 60°) ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Beskryf die transformasie van y = cos(θ + 60°) in vergelyking met y = cosθ.',
      answer: 'Horisontale skuif van 60° na links.',
      checkMode: 'self',
    },

    // ── V9 Maklik — reduksieformule sin(180° − 50°) ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik ʼn reduksieformule om sin(180° − 50°) te vereenvoudig.',
      answer: 'sin 50°',
      checkMode: 'auto',
      correctAnswer: 'sin50°',
      correctAnswers: ['sin50°', 'sin 50°', 'sin(50°)'],
      explanation: 'sin(180° − θ) = sinθ, dus sin(180° − 50°) = sin 50° ✓',
    },

    // ── V10 Matig — reduksieformule cos(180° + 35°) ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik ʼn reduksieformule om cos(180° + 35°) te vereenvoudig.',
      answer: '−cos 35°',
      checkMode: 'auto',
      correctAnswer: '-cos35°',
      correctAnswers: ['-cos35°', '-cos 35°', '−cos35°', '−cos 35°'],
      explanation: 'cos(180° + θ) = −cosθ, dus cos(180° + 35°) = −cos 35° ✓',
    },

    // ── V11 Moeilik — vereenvoudig met reduksieformules ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vereenvoudig sin(360° − θ) / cos(−θ) met behulp van reduksieformules.',
      answer: 'sin(360° − θ) = −sinθ. cos(−θ) = cosθ. Resultaat: −sinθ/cosθ = −tanθ.',
      checkMode: 'self',
    },

    // ── V12 Maklik — algemene oplossing sinθ = √3/2 ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die algemene oplossing van sinθ = √3/2.',
      answer: 'θ = 60° + 360°n of θ = 120° + 360°n, n ∈ ℤ',
      checkMode: 'auto',
      correctAnswer: 'θ=60°+360°n or θ=120°+360°n, n∈ℤ',
      correctAnswers: ['θ=60°+360°n or θ=120°+360°n, n∈ℤ', '60°+360°n or 120°+360°n', 'θ=60+360n or θ=120+360n'],
      explanation: 'Verwysingshoek = sin⁻¹(√3/2) = 60°. sinθ is positief → K1 en K2.\nθ = 60° + 360°n of θ = 120° + 360°n, n ∈ ℤ ✓',
    },

    // ── V13 Matig — algemene oplossing cosθ = −√2/2 ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die algemene oplossing van cosθ = −√2/2.',
      answer: 'θ = 135° + 360°n of θ = 225° + 360°n, n ∈ ℤ (ekwivalent ±135° + 360°n)',
      checkMode: 'auto',
      correctAnswer: 'θ=135°+360°n or θ=225°+360°n',
      correctAnswers: ['θ=135°+360°n or θ=225°+360°n', '±135°+360°n', 'θ=±135°+360°n'],
      explanation: 'Verwysingshoek = cos⁻¹(√2/2) = 45°. cosθ is negatief → K2 en K3.\nK2: θ = 180° − 45° = 135°. K3: θ = 180° + 45° = 225°.\nAlgemene oplossing: θ = 135° + 360°n of θ = 225° + 360°n, n ∈ ℤ ✓',
    },

    // ── V14 Moeilik — algemene oplossing tanθ = −1 ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die algemene oplossing van tanθ = −1, en toon jou verwysingshoek-redenasie.',
      answer: 'Verwysingshoek = 45°. Aangesien tan negatief is, θ = 180° − 45° = 135° as die basisoplossing. Algemene oplossing: θ = 135° + 180°n, n ∈ ℤ.',
      checkMode: 'self',
    },

    // ── V15 Matig — Sin reël ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In driehoek ABC is A = 35°, B = 70°, a = 12 cm. Bepaal sy b met die Sin reël.',
      answer: '19.95 cm',
      checkMode: 'auto',
      correctAnswer: '19.95cm',
      correctAnswers: ['19.95cm', '19.95 cm', '≈19.95cm', '≈ 19.95 cm', '19.9cm', '20cm'],
      explanation: 'Sin reël: a/sinA = b/sinB\n12/sin35° = b/sin70°\nb = 12 × sin70°/sin35° = 12 × 0.9397/0.5736 ≈ 19.95 cm ✓',
    },

    // ── V16 Moeilik — Cos reël ────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'In driehoek ABC is b = 7 cm, c = 9 cm, A = 60°. Bepaal sy a met die Cos reël.',
      answer: 'a² = 49 + 81 − 2(7)(9)cos60° = 130 − 63 = 67. a ≈ 8.19 cm.',
      checkMode: 'self',
    },

    // ── V17 Matig — Oppervlakte-reël ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die oppervlakte van ʼn driehoek met sye a = 8 cm, b = 11 cm, en ingeslote hoek C = 45°.',
      answer: '31.11 cm²',
      checkMode: 'auto',
      correctAnswer: '31.11cm²',
      correctAnswers: ['31.11cm²', '31.11 cm²', '≈31.11cm²', '≈ 31.11 cm²', '31.1cm²'],
      explanation: 'Oppervlakte = ½ × a × b × sinC = ½ × 8 × 11 × sin45° = ½ × 88 × (√2/2) ≈ 31.11 cm² ✓',
    },

    // ── V18 Moeilik — kruispunt van kruisende toue ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Twee vlagpale 20 m uitmekaar het hoogtes 8 m en 12 m. Toue verbind die bopunt van elkeen met die voetpunt van die ander. Bepaal die hoogte van hul kruispunt bo die grond.',
      answer: 'Kruishoogte = 8 × 12 / (8 + 12) = 96/20 = 4.8 m.',
      checkMode: 'self',
    },

    // ── V19 Moeilik — landmeter twee-vergelyking-opstelling ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Landmeter meet die hoogtehoek na ʼn toring as 20° vanaf punt A, loop dan 40 m nader na punt B en meet 35°. Stel die twee vergelykings op wat nodig is om die toring se hoogte op te los, sonder om dit volledig op te los.',
      answer: 'Laat hoogte = h, afstand van B na basis = d. Vergelyking 1 (vanaf B): tan35° = h/d. Vergelyking 2 (vanaf A): tan20° = h/(d + 40).',
      checkMode: 'self',
    },

    // ── V20 Moeilik — driehoekige veld oppervlakte en derde sy ───────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Driehoekige veld het twee sye van 35 m en 50 m met ʼn ingeslote hoek van 65°. Bepaal die oppervlakte van die veld en die lengte van die derde sy.',
      answer: 'Oppervlakte = ½(35)(50)sin65° ≈ 792.6 m². Derde sy: sy² = 35² + 50² − 2(35)(50)cos65° ≈ 1225 + 2500 − 1478.4 = 2246.6. sy ≈ 47.4 m.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het trigonometrie bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Perfekte telling — jy het Graad 11 Trigonometrie heeltemal bemeester. Hou so aan met die uitstekende werk!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van trigonometrie. Hersien enige gemiste dele en jy sal dit perfek onder die knie hê.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 5, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — trigonometrie verg oefening! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
}

