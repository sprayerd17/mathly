import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// base / rational numbers / exact surd form  → blue    (#2563eb)
// exponent / perf-sq factor / decimal approx → orange  (#ea580c)
// simplified answer / integers / rounded ans → green   (#16a34a)
// irrational numbers                         → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicInfo = {
  title: 'Eksponente',
  grade: 10,
  subject: 'Wiskunde',
}

export const topicData: TopicData = {
  title: 'Eksponente',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — LAWS OF EXPONENTS FOR INTEGRAL EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'laws-of-exponents',
      title: 'Wette van Eksponente vir Heelgetal-eksponente',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die wette van eksponente uit na <strong>heelgetal-eksponente</strong> — heelgetalle wat negatiewe getalle en nul insluit. Dieselfde reëls wat vir positiewe eksponente gegeld het, geld steeds: ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁺ᵇ')}, ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁻ᵇ')}, (${bl('x')}${or('ᵃ')})${or('ᵇ')}=${bl('x')}${or('ᵃᵇ')}, ${bl('x')}${or('⁻ⁿ')}=1/${bl('x')}${or('ⁿ')}, en ${bl('x')}${or('⁰')}=${gr('1')} (vir x≠0). ʼn Kritieke fout om op te let: wanneer jy dieselfde grondgetalle <em>vermenigvuldig</em>, ${'​'}<strong>tel</strong> jy die eksponente bymekaar — jy vermenigvuldig hulle nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wette van eksponente</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Produk van magte:</strong> ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁺ᵇ')} — tel die eksponente bymekaar wanneer jy dieselfde grondgetalle vermenigvuldig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Kwosiënt van magte:</strong> ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁻ᵇ')} — trek die eksponente van mekaar af wanneer jy dieselfde grondgetalle deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Mag van ʼn mag:</strong> (${bl('x')}${or('ᵃ')})${or('ᵇ')} = ${gr('xᵃᵇ')} — vermenigvuldig die eksponente.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Negatiewe eksponent:</strong> ${bl('x')}${or('⁻ⁿ')} = ${gr('1/xⁿ')} — ʼn negatiewe eksponent beteken die resiprook.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Nul-eksponent:</strong> ${bl('x')}${or('⁰')} = ${gr('1')} vir enige nie-nul grondgetal x.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout om te vermy</p>` +
        `<p style="margin:0;color:#991b1b;">Wanneer jy dieselfde grondgetalle <em>vermenigvuldig</em>, <strong>tel</strong> jy die ${or('eksponente')} bymekaar — moet dit nooit vermenigvuldig nie. ${bl('x')}${or('²')}·${bl('x')}${or('³')} = ${gr('x⁵')} omdat ${or('2+3=5')}, nie x⁶ nie. Die wette van eksponente geld slegs wanneer die ${bl('grondgetalle identies is')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig (x⁻³y²) ÷ (x²y⁻¹).',
          answer: `${gr('y³/x⁵')}`,
          steps: [
            `Hanteer die ${bl('x')}-terme met die kwosiëntwet: ${bl('x')}${or('⁻³')} ÷ ${bl('x')}${or('²')} = ${bl('x')}${or('⁻³⁻²')} = ${bl('x')}${or('⁻⁵')}.`,
            `Hanteer die ${bl('y')}-terme: ${bl('y')}${or('²')} ÷ ${bl('y')}${or('⁻¹')} = ${bl('y')}${or('²⁻(⁻¹)')} = ${bl('y')}${or('²⁺¹')} = ${bl('y')}${or('³')}.`,
            `Herskryf ${bl('x')}${or('⁻⁵')} met ʼn positiewe eksponent: ${bl('x')}${or('⁻⁵')} = 1/${bl('x')}${or('⁵')}.`,
            `<strong>Antwoord:</strong> ${gr('y³/x⁵')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig (2x³)⁻².',
          answer: `${gr('1/(4x⁶)')}`,
          steps: [
            `Pas die mag toe op elke faktor binne die hakies: (${bl('2')}${bl('x')}${or('³')})${or('⁻²')} = ${bl('2')}${or('⁻²')} · (${bl('x')}${or('³')})${or('⁻²')}.`,
            `Vereenvoudig die koëffisiënt: ${bl('2')}${or('⁻²')} = 1/${bl('2')}${or('²')} = 1/4.`,
            `Vereenvoudig die veranderlike met die mag-van-ʼn-mag-wet: (${bl('x')}${or('³')})${or('⁻²')} = ${bl('x')}${or('³×(⁻²)')} = ${bl('x')}${or('⁻⁶')} = 1/${bl('x')}${or('⁶')}.`,
            `Kombineer: ¼ × 1/${bl('x')}${or('⁶')} = <strong>Antwoord:</strong> ${gr('1/(4x⁶)')} ✓`,
          ],
        },
        {
          question: 'Sipho vereenvoudig x²·x³ en kry x⁶, deur die eksponente met mekaar te vermenigvuldig in plaas daarvan om hulle bymekaar te tel. Identifiseer en verbeter sy fout.',
          answer: `${gr('x⁵')}`,
          steps: [
            `Sipho se fout: hy het die ${or('eksponente')} <em>vermenigvuldig</em> (${or('2 × 3 = 6')}) in plaas daarvan om hulle <em>bymekaar te tel</em>.`,
            `Die korrekte wet om dieselfde ${bl('grondgetalle')} te vermenigvuldig, is die <strong>produk-van-magte</strong>-wet: ${bl('x')}${or('ᵃ')} · ${bl('x')}${or('ᵇ')} = ${bl('x')}${or('ᵃ⁺ᵇ')}.`,
            `Pas dit korrek toe: ${bl('x')}${or('²')} · ${bl('x')}${or('³')} = ${bl('x')}${or('²⁺³')} = <strong>Antwoord:</strong> ${gr('x⁵')}, nie x⁶ nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig x⁵ · x⁻³.',
          answer: 'x²',
          checkMode: 'auto',
          correctAnswer: 'x²',
          explanation: 'Gebruik die produkwet — tel die eksponente bymekaar: x⁵ · x⁻³ = x⁵⁺⁽⁻³⁾ = x² ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig elke uitdrukking.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (a⁴b⁻¹) ÷ (a²b²) =',
              correctAnswer: 'a²/b³',
              correctAnswers: ['a²/b³', 'a²b⁻³'],
              explanation: 'a-terme: a⁴ ÷ a² = a⁴⁻² = a².\nb-terme: b⁻¹ ÷ b² = b⁻¹⁻² = b⁻³ = 1/b³.\nAntwoord: a²/b³ ✓',
            },
            {
              label: 'b) (3y²)⁻¹ =',
              correctAnswer: '1/(3y²)',
              correctAnswers: ['1/(3y²)', '(3y²)⁻¹'],
              explanation: 'Pas die mag toe op elke faktor: 3⁻¹ · y⁻² = 1/3 · 1/y² = 1/(3y²) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig [(x²y⁻¹)³] ÷ [x⁻¹y²] en skryf jou antwoord met slegs positiewe eksponente. Wys alle werk.',
          answer: 'Stap 1: Brei die teller uit — (x²y⁻¹)³ = x⁶y⁻³\nStap 2: Pas die kwosiëntwet toe:\n  x⁶ ÷ x⁻¹ = x⁶⁻⁽⁻¹⁾ = x⁷\n  y⁻³ ÷ y² = y⁻³⁻² = y⁻⁵\nStap 3: Herskryf met positiewe eksponente: y⁻⁵ = 1/y⁵\nAntwoord: x⁷/y⁵',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die vyf wette van eksponente vir heelgetal-eksponente verduidelik met uitgewerkte voorbeelde wat negatiewe en nul-eksponente insluit" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Verwysingskaart wat al vyf wette van eksponente wys met grondgetal in blou, eksponent in oranje en vereenvoudigde antwoord in groen kleurkodering" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SIMPLIFYING SURDS AND LOCATING THEM BETWEEN INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simplifying-surds',
      title: 'Wortelvorme Vereenvoudig en Tussen Heelgetalle Plaas',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Wortelvorm</strong> (surd) is ʼn irrasionale wortel wat nie tot ʼn heelgetal vereenvoudig kan word nie, soos √2 of √7. Ons vereenvoudig wortelvorme deur die grootste ${or('volkome vierkant')}-faktor uit te haal, en die wortelvorm in die vorm ${bl('a√b')} te skryf waar b geen volkome-vierkant-faktore het nie. Ons plaas ʼn wortelvorm tussen twee opeenvolgende ${gr('heelgetalle')} deur die volkome vierkante onmiddellik onder en bo die wortelgetal (radikand) te identifiseer.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volkome-vierkant-faktor')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vereenvoudigde wortelvorm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('heelgetalle')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn wortelvorm te vereenvoudig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die <strong>grootste ${or('volkome vierkant')}</strong> wat eweredig in die wortelgetal (radikand) deel (1, 4, 9, 16, 25, 36, …).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die wortelgetal as die produk van die ${or('volkome vierkant')} en die oorblywende faktor, en skei dan: √(${or('a')}×b) = ${bl('√a × √b')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Bereken √(${or('volkome vierkant')}) en skryf die ${bl('vereenvoudigde wortelvorm')} in die vorm ${bl('c√d')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Wortelvorm tussen heelgetalle plaas</p>` +
        `<p style="margin-bottom:12px;">Vind die twee opeenvolgende ${gr('heelgetalle')} n en n+1 sodat ${gr('n')}² &lt; wortelgetal &lt; ${gr('(n+1)')}². Die wortelvorm lê streng tussen hierdie twee ${gr('heelgetalle')}.</p>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Soortgelyke wortelvorme optel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy kan slegs wortelvorme optel of aftrek wat, na vereenvoudiging, dieselfde <strong>wortelgetal</strong> het — byvoorbeeld, ${bl('3√5')} + ${bl('2√5')} = ${gr('5√5')}. Vereenvoudig altyd eers sodat soortgelyke wortelvorme sigbaar word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig √48.',
          answer: `${bl('4√3')}`,
          steps: [
            `Vind die grootste ${or('volkome-vierkant')}-faktor van 48: 48 = ${or('16')} × 3.`,
            `Skei die wortelvorm: √48 = √(${or('16')} × 3) = ${bl('√16')} × ${bl('√3')}.`,
            `Bereken √${or('16')} = ${gr('4')}: ${bl('4√3')}.`,
            `<strong>Antwoord:</strong> ${bl('4√3')} ✓`,
          ],
        },
        {
          question: 'Tussen watter twee heelgetalle lê √30?',
          answer: `${gr('5')} en ${gr('6')}`,
          steps: [
            `Vind volkome vierkante naby 30: ${gr('5')}² = ${or('25')} en ${gr('6')}² = ${or('36')}.`,
            `Vergelyk: ${or('25')} &lt; 30 &lt; ${or('36')}, dus ${gr('5')}² &lt; 30 &lt; ${gr('6')}².`,
            `<strong>Antwoord:</strong> √30 lê tussen ${gr('5')} en ${gr('6')}. ✓`,
          ],
        },
        {
          question: 'Vereenvoudig √75 + √12.',
          answer: `${bl('7√3')}`,
          steps: [
            `Vereenvoudig √75: grootste ${or('volkome-vierkant')}-faktor is ${or('25')} (75 = ${or('25')} × 3). Dus √75 = ${bl('5√3')}.`,
            `Vereenvoudig √12: grootste ${or('volkome-vierkant')}-faktor is ${or('4')} (12 = ${or('4')} × 3). Dus √12 = ${bl('2√3')}.`,
            `Kombineer soortgelyke wortelvorme (dieselfde wortelgetal 3): ${bl('5√3')} + ${bl('2√3')} = <strong>Antwoord:</strong> ${bl('7√3')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig √18.',
          answer: '3√2',
          checkMode: 'auto',
          correctAnswer: '3√2',
          explanation: 'Grootste volkome-vierkant-faktor van 18: 18 = 9 × 2.\n√18 = √9 × √2 = 3√2 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vereenvoudig √45 =',
              correctAnswer: '3√5',
              explanation: 'Grootste volkome-vierkant-faktor: 45 = 9 × 5.\n√45 = √9 × √5 = 3√5 ✓',
            },
            {
              label: 'b) Tussen watter twee opeenvolgende heelgetalle lê √50? Skryf hulle as: laer, hoër',
              correctAnswer: '7, 8',
              correctAnswers: ['7, 8', '7,8', '7 en 8', 'tussen 7 en 8'],
              explanation: '7² = 49 en 8² = 64. Aangesien 49 < 50 < 64, lê √50 tussen 7 en 8. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig √28 + √63. Wys alle werk.',
          answer: '√28 = √(4×7) = 2√7\n√63 = √(9×7) = 3√7\n2√7 + 3√7 = 5√7',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om wortelvorme te vereenvoudig deur die grootste volkome-vierkant-faktor uit te haal en hoe om ʼn wortelvorm tussen twee opeenvolgende heelgetalle te plaas" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat √30 tussen die heelgetalle 5 en 6 wys met volkome vierkante 25 en 36 in oranje gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SHOWING THAT SIMPLE SURDS ARE NOT RATIONAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surds-are-irrational',
      title: 'Aantoon Dat Eenvoudige Wortelvorme Nie Rasionaal Is Nie',
      icon: 'ℚ',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Getal is <strong>${bl('rasionaal')}</strong> as dit as ʼn breuk a/b geskryf kan word waar a en b heelgetalle is en b ≠ 0. ʼn Getal is <strong>${re('irrasionaal')}</strong> as geen sodanige breuk bestaan nie — die desimale uitbreiding hou vir ewig aan sonder om te herhaal. Vierkantswortels van nie-volkome vierkante is altyd ${re('irrasionaal')} per definisie. Vierkantswortels van ${gr('volkome vierkante')} (1, 4, 9, 16, 25, …) is ${bl('rasionaal')} omdat hulle gelyk is aan heelgetalle.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rasionale getalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrasionale getalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volkome vierkante')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rasionale getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kan geskryf word as a/b (heelgetalle, b≠0). Desimaal eindig of herhaal. Voorbeeld: ¾ = 0.75, √${gr('4')} = 2.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Irrasionale getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kan nie as a/b geskryf word nie. Desimaal hou vir ewig aan sonder om te herhaal. Voorbeeld: √2 = 1.41421356…</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Volkome vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Heelgetal waarvan die vierkantswortel ook ʼn heelgetal is: ${gr('1, 4, 9, 16, 25, 36, …')} Hul vierkantswortels is ${bl('rasionaal')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Bewys deur teenstrydigheid (uitbreiding)</p>` +
        `<p style="margin:0;color:#1e3a8a;">Op hierdie vlak is dit voldoende om te stel dat die vierkantswortel van ʼn heelgetal wat nie ʼn volkome vierkant is nie, ${re('irrasionaal')} is per definisie, en om daarop te let dat die desimale uitbreiding nóg eindig nóg herhaal. Die formele bewys — deur aan te neem dat √2 = a/b in laagste terme is en ʼn teenstrydigheid af te lei — is opsionele uitbreidingsinhoud.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Verduidelik waarom √2 irrasionaal is.',
          answer: `${re('√2 is irrasionaal')}`,
          steps: [
            `Vra: kan √2 as ʼn presiese breuk a/b geskryf word (heelgetalle, b ≠ 0)? As dit kon, sou dit ${bl('rasionaal')} wees.`,
            `√2 ≈ 1.41421356… — die desimaal hou vir ewig aan sonder enige herhalende blok. Dit is die bepalende eienskap van ʼn ${re('irrasionale')} getal.`,
            `Aangesien 2 nie ʼn ${gr('volkome vierkant')} is nie, kan √2 nie gelyk wees aan ʼn heelgetal of ʼn presiese breuk nie. <strong>Daarom is √2 ${re('irrasionaal')}.</strong> ✓`,
          ],
        },
        {
          question: 'Lerato sê √16 is irrasionaal omdat dit ʼn vierkantswortelteken het. Is sy korrek?',
          answer: `Nee — ${bl('√16 = 4')}, wat ${bl('rasionaal')} is`,
          steps: [
            `Bereken: √${gr('16')} = ${bl('4')}, omdat 4² = 16. Die resultaat is ʼn heelgetal.`,
            `ʼn Heelgetal kan as ʼn breuk geskryf word (4 = 4/1), dus is dit ${bl('rasionaal')}.`,
            `Lerato is <strong>verkeerd</strong>. Die vierkantswortelteken op sy eie maak nie ʼn getal irrasionaal nie — slegs die vierkantswortels van <em>nie-${gr('volkome vierkante')}</em> is ${re('irrasionaal')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is √36 rasionaal of irrasionaal? Gee ʼn rede.',
          answer: 'rasionaal',
          checkMode: 'auto',
          correctAnswer: 'rasionaal',
          correctAnswers: ['rasionaal', 'Rasionaal'],
          explanation: '√36 = 6 presies, omdat 6² = 36. Aangesien 36 ʼn volkome vierkant is, is die vierkantswortel daarvan ʼn heelgetal en dus rasionaal. ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Klassifiseer elke getal as rasionaal of irrasionaal.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) √7 is:',
              correctAnswer: 'irrasionaal',
              correctAnswers: ['irrasionaal', 'Irrasionaal'],
              explanation: '7 is nie ʼn volkome vierkant nie (2²=4, 3²=9 — geen heelgetal se vierkant is 7 nie). √7 ≈ 2.6457… hou aan sonder om te herhaal, dus is dit irrasionaal. ✓',
            },
            {
              label: 'b) √100 is:',
              correctAnswer: 'rasionaal',
              correctAnswers: ['rasionaal', 'Rasionaal'],
              explanation: '√100 = 10 presies (10² = 100). Dit is ʼn heelgetal en dus rasionaal. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Drie getalle word gegee: √5, √81, √11.\n\na) Watter is irrasionaal? Gee ʼn rede vir elk.\nb) Watter is rasionaal? Skryf hul presiese waarde.\nc) Plaas al drie op ʼn getallelyn en wys hul benaderde posisie.',
          answer: 'a) √5 ≈ 2.236… (irrasionaal — 5 is nie ʼn volkome vierkant nie)\n   √11 ≈ 3.317… (irrasionaal — 11 is nie ʼn volkome vierkant nie)\nb) √81 = 9 (rasionaal — 81 = 9², ʼn volkome vierkant)\nc) Getallelyn: √5 ≈ 2.2, √81 = 9, √11 ≈ 3.3',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen rasionale en irrasionale getalle verduidelik deur volkome vierkante en nie-volkome vierkante as voorbeelde te gebruik" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Venn-diagram wat rasionale getalle wys wat heelgetalle en eindigende desimale bevat, langs die versameling irrasionale getalle met wortelvorme in rooi gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROUNDING TO AN APPROPRIATE DEGREE OF ACCURACY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-surds',
      title: 'Afrond tot ʼn Gepaste Graad van Akkuraatheid',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Omdat irrasionale getalle oneindige, nie-herhalende desimale uitbreidings het, moet ons hulle afrond wanneer ʼn desimale antwoord verlang word. In algebraïese werk, laat antwoorde in ${bl('presiese wortelvorm')} tensy ʼn desimaal spesifiek gevra word. Wanneer jy afrond, gebruik ${or('desimale benaderings')} en identifiseer die vereiste aantal desimale plekke, pas dan die standaard afrondingsreël toe: as die syfer na die afrondingsposisie 5 of meer is, rond op; andersins rond af. Die ${gr('afgeronde antwoord')} moet altyd die gebruikte graad van akkuraatheid vermeld.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('presiese wortelvorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('desimale benadering')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('afgeronde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om af te rond</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf eers die ${bl('presiese wortelvorm')} (bv. √20) en gebruik dan ʼn sakrekenaar of skatting om die ${or('desimale benadering')} tot ten minste een ekstra syfer te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die vereiste desimale plek en kyk na die syfer onmiddellik daarna — die <strong>beslissende syfer</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">As die beslissende syfer ≥ 5 is, rond op; as dit &lt; 5 is, rond af. Skryf die ${gr('afgeronde antwoord')} met die korrekte eenheid en vermeld die akkuraatheid.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Presies teenoor benaderd</p>` +
        `<p style="margin:0;color:#1e3a8a;">In algebra word ${bl('presiese wortelvorm')} (bv. 4√3) verkies omdat afronding ʼn fout inbring. Skakel slegs om na ʼn ${or('desimale benadering')} wanneer die vraag sê "korrek tot … desimale plekke" of ʼn praktiese meting verlang.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Rond √20 af tot 2 desimale plekke.',
          answer: `${gr('4.47')}`,
          steps: [
            `Skryf die ${bl('presiese wortelvorm')}: ${bl('√20')}.`,
            `Bereken die ${or('desimale benadering')}: ${or('√20 ≈ 4.47213…')}`,
            `Identifiseer die afrondingsposisie (2 desimale plekke): 4.47|213… Die beslissende syfer is 2 — minder as 5, dus rond af.`,
            `<strong>Antwoord:</strong> ${gr('4.47')} (korrek tot 2 desimale plekke) ✓`,
          ],
        },
        {
          question: 'Thabo bereken die diagonaal van ʼn vierkant met sy 5 cm as √50 cm. Rond dit af tot 1 desimale plek.',
          answer: `${gr('7.1')} cm`,
          steps: [
            `Skryf die ${bl('presiese wortelvorm')}: ${bl('√50')} cm.`,
            `Bereken die ${or('desimale benadering')}: ${or('√50 ≈ 7.0710678…')}`,
            `Identifiseer die afrondingsposisie (1 desimale plek): 7.0|710… Die beslissende syfer is 7 — 5 of meer, dus rond op.`,
            `<strong>Antwoord:</strong> ${gr('7.1')} cm (korrek tot 1 desimale plek) ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Rond √6 af tot 2 desimale plekke.',
          answer: '2.45',
          checkMode: 'auto',
          correctAnswer: '2.45',
          explanation: '√6 ≈ 2.449489… Die beslissende syfer by posisie 3 is 9 ≥ 5, dus rond die tweede desimale plek op: 2.45 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Rond elke wortelvorm af tot die vereiste akkuraatheid.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Rond √17 af tot 1 desimale plek =',
              correctAnswer: '4.1',
              explanation: '√17 ≈ 4.1231… Die beslissende syfer is 2 < 5, dus rond af: 4.1 ✓',
            },
            {
              label: 'b) Rond √99 af tot 2 desimale plekke =',
              correctAnswer: '9.95',
              explanation: '√99 ≈ 9.94987… Die beslissende syfer by posisie 3 is 9 ≥ 5, dus rond op: 9.95 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die omtrek van ʼn gelyksydige driehoek is √108 cm.\n\na) Vereenvoudig √108 (laat in presiese wortelvorm).\nb) Skryf die presiese lengte van een sy.\nc) Rond die lengte van een sy af tot 2 desimale plekke.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vereenvoudigde wortelvorm van √108 =',
              correctAnswer: '6√3',
              explanation: '108 = 36 × 3. √108 = √36 × √3 = 6√3 ✓',
            },
            {
              label: 'b) Presiese lengte van een sy =',
              correctAnswer: '2√3',
              correctAnswers: ['2√3', '2√3 cm'],
              explanation: 'Omtrek = 3 × sy. Sy = 6√3 ÷ 3 = 2√3 cm ✓',
            },
            {
              label: 'c) Lengte van een sy afgerond tot 2 dp (cm) =',
              correctAnswer: '3.46',
              correctAnswers: ['3.46', '3.46 cm'],
              explanation: '2√3 ≈ 2 × 1.73205… = 3.46410… Die beslissende syfer is 4 < 5, dus rond af: 3.46 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys wanneer om presiese wortelvorm teenoor desimale benadering te gebruik en hoe om irrasionale getalle tot ʼn gegewe aantal desimale plekke af te rond" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn ingezoem op √20 tussen 4 en 5 wat die desimale benadering 4.47213 wys met die afgeronde antwoord 4.47 in groen gemerk" />',
    },
  ],
  scoreMessages: [
    { minScore: 14, message: 'Uitstekend! ʼn Volmaakte telling — jy het eksponente en wortelvorme vir Graad 10 volkome bemeester. Hou so aan!' },
    { minScore: 11, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van hierdie onderwerp. Hersien enige gemiste dele en jy sal dit volmaak hê.' },
    { minScore: 8, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 5, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling noukeurig deur, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan elke afdeling se verduidelikings en uitgewerkte voorbeelde weer deur, en probeer dan weer." },
  ],
}

export const topicPractice = [
  // ── Q1 Easy — product of powers ────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vereenvoudig x⁴·x³.',
    answer: 'x⁷',
    checkMode: 'auto',
    correctAnswer: 'x⁷',
    explanation: 'Gebruik die produkwet — tel die eksponente bymekaar: x⁴·x³ = x⁴⁺³ = x⁷ ✓',
  },

  // ── Q2 Easy — quotient of powers ───────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vereenvoudig x⁸÷x³.',
    answer: 'x⁵',
    checkMode: 'auto',
    correctAnswer: 'x⁵',
    explanation: 'Gebruik die kwosiëntwet — trek die eksponente van mekaar af: x⁸÷x³ = x⁸⁻³ = x⁵ ✓',
  },

  // ── Q3 Medium — power of a power ───────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (x²)⁵.',
    answer: 'x¹⁰',
    checkMode: 'auto',
    correctAnswer: 'x¹⁰',
    explanation: 'Gebruik die mag-van-ʼn-mag-wet — vermenigvuldig die eksponente: (x²)⁵ = x²ˣ⁵ = x¹⁰ ✓',
  },

  // ── Q4 Medium — negative exponent with multiple factors ────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (3x²y⁻¹)⁻².',
    answer: 'y²/(9x⁴)',
    checkMode: 'auto',
    correctAnswer: 'y²/(9x⁴)',
    correctAnswers: ['y²/(9x⁴)', 'y²/9x⁴'],
    explanation: 'Pas die mag toe op elke faktor: 3⁻² · x²×(⁻²) · y⁻¹×(⁻²) = (1/9) · x⁻⁴ · y².\nHerskryf met positiewe eksponente: y²/(9x⁴) ✓',
  },

  // ── Q5 Hard — common error: adding different bases ─────────────────────────
  {
    difficulty: 'Hard',
    question: 'Sipho vereenvoudig x³·y² en kry (xy)⁵. Is hy korrek? Verduidelik.',
    answer: 'Nee — jy kan slegs eksponente kombineer wanneer die grondgetalle dieselfde is. x³ en y² het verskillende grondgetalle, dus kan hulle nie op hierdie manier gekombineer word nie.',
    checkMode: 'self',
  },

  // ── Q6 Easy — simplify surd ────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vereenvoudig √32.',
    answer: '4√2',
    checkMode: 'auto',
    correctAnswer: '4√2',
    explanation: 'Grootste volkome-vierkant-faktor van 32: 32 = 16 × 2.\n√32 = √16 × √2 = 4√2 ✓',
  },

  // ── Q7 Medium — add like surds ─────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig √45+√20.',
    answer: '5√5',
    checkMode: 'auto',
    correctAnswer: '5√5',
    explanation: '√45 = √(9×5) = 3√5.\n√20 = √(4×5) = 2√5.\n3√5 + 2√5 = 5√5 ✓',
  },

  // ── Q8 Hard — locate surd between integers ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Tussen watter twee heelgetalle lê √55?',
    answer: '7²=49 en 8²=64. Aangesien 49<55<64, lê √55 tussen 7 en 8.',
    checkMode: 'self',
  },

  // ── Q9 Medium — subtract like surds ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig √98-√32.',
    answer: '3√2',
    checkMode: 'auto',
    correctAnswer: '3√2',
    explanation: '√98 = √(49×2) = 7√2.\n√32 = √(16×2) = 4√2.\n7√2 − 4√2 = 3√2 ✓',
  },

  // ── Q10 Hard — common error: adding radicands ──────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato sê √8+√2=√10. Is sy korrek? Verduidelik.',
    answer: 'Nee — wortelvorme kan slegs direk opgetel word wanneer hulle tot dieselfde wortelvorm vereenvoudig is. √8=2√2, dus √8+√2=2√2+√2=3√2, nie √10 nie.',
    checkMode: 'self',
  },

  // ── Q11 Easy — rational or irrational ─────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Is √9 rasionaal of irrasionaal?',
    answer: 'rasionaal',
    checkMode: 'auto',
    correctAnswer: 'rasionaal',
    correctAnswers: ['rasionaal', 'Rasionaal'],
    explanation: '√9 = 3 presies, omdat 3² = 9. Aangesien 9 ʼn volkome vierkant is, is die vierkantswortel daarvan ʼn heelgetal en dus rasionaal. ✓',
  },

  // ── Q12 Medium — explain irrational ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Verduidelik waarom √5 irrasionaal is.',
    answer: '5 is nie ʼn volkome vierkant nie, dus kan die vierkantswortel daarvan nie as ʼn presiese breuk geskryf word nie; die desimale uitbreiding hou vir ewig aan sonder om te herhaal.',
    checkMode: 'self',
  },

  // ── Q13 Hard — generalise about primes ────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Thabo sê die vierkantswortels van alle priemgetalle is irrasionaal. Is hy korrek? Verduidelik.',
    answer: 'Ja — aangesien priemgetalle geen volkome-vierkant-faktore anders as 1 het nie, kan hul vierkantswortels nooit tot ʼn heelgetal vereenvoudig nie, wat hulle irrasionaal maak.',
    checkMode: 'self',
  },

  // ── Q14 Easy — round a surd to 2 dp ───────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Rond √18 af tot 2 desimale plekke.',
    answer: '4.24',
    checkMode: 'auto',
    correctAnswer: '4.24',
    explanation: '√18 ≈ 4.2426… Die beslissende syfer by posisie 3 is 2 < 5, dus rond af: 4.24 ✓',
  },

  // ── Q15 Medium — round a surd to 1 dp ─────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Rond √63 af tot 1 desimale plek.',
    answer: '7.9',
    checkMode: 'auto',
    correctAnswer: '7.9',
    explanation: '√63 ≈ 7.9372… Die beslissende syfer by posisie 2 is 3 < 5, dus rond af: 7.9 ✓',
  },

  // ── Q16 Hard — real-world rounding ────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "ʼn Reghoek se diagonaal is √32 cm. Rond dit af tot 2 desimale plekke en verduidelik wanneer hierdie afronding nodig sou wees.",
    answer: "√32≈5.6568... Afgerond tot 5.66 cm. Afronding is nodig vir praktiese, werklike-lewe-metings soos die sny van materiaal, waar presiese wortelvorm nie bruikbaar is nie.",
    checkMode: 'self',
  },

  // ── Q17 Medium — power rule with negative exponent ────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (2x⁻¹)³.',
    answer: '8/x³',
    checkMode: 'auto',
    correctAnswer: '8/x³',
    explanation: 'Pas die mag toe op elke faktor: 2³ · (x⁻¹)³ = 8 · x⁻³ = 8/x³ ✓',
  },

  // ── Q18 Hard — combined exponent laws ─────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Vereenvoudig (x²y⁻³)⁻¹÷(x⁻¹y²).',
    answer: '(x²y⁻³)⁻¹=x⁻²y³. Deel deur x⁻¹y²: x⁻²⁻⁽⁻¹⁾y³⁻²=x⁻¹y¹=y/x.',
    checkMode: 'self',
  },

  // ── Q19 Hard — zero exponent misconception ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle sê x⁰=0 vir enige waarde van x. Is sy korrek? Verduidelik.',
    answer: 'Nee — enige nie-nul getal tot die mag 0 is gelyk aan 1, nie 0 nie. Die uitdrukking 0⁰ is onbepaald.',
    checkMode: 'self',
  },

  // ── Q20 Hard — exact and approximate form ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Vereenvoudig √200 en rond jou antwoord af tot 2 desimale plekke, en wys beide die presiese en benaderde vorme.',
    answer: '√200=√(100×2)=10√2 (presiese vorm). 10√2≈14.14 (afgerond tot 2 desimale plekke).',
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 20,
  messages: [
    { minScore: 20, message: 'Uitstekend! Jy het eksponente bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
