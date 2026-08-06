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
        `<p style="margin-bottom:16px;">Ons brei die wette van eksponente uit na <strong>heelgetal-eksponente</strong> — heelgetalle wat negatiewe getalle en nul insluit. Dieselfde reëls wat vir positiewe eksponente gegeld het, geld steeds: ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁺ᵇ')}, ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁻ᵇ')}, (${bl('x')}${or('ᵃ')})${or('ᵇ')}=${bl('x')}${or('ᵃᵇ')}, ${bl('x')}${or('⁻ⁿ')}=1/${bl('x')}${or('ⁿ')}, en ${bl('x')}${or('⁰')}=${gr('1')} (vir x≠0). ʼn Kritieke fout om op te let: wanneer jy dieselfde grondtalle <em>vermenigvuldig</em>, <strong>tel</strong> jy die eksponente bymekaar — jy vermenigvuldig hulle nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondtal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wette van eksponente</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Produk van magte:</strong> ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁺ᵇ')} — tel die eksponente bymekaar wanneer jy dieselfde grondtalle vermenigvuldig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Kwosiënt van magte:</strong> ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁻ᵇ')} — trek die eksponente van mekaar af wanneer jy dieselfde grondtalle deel.</p>` +
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
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Nul-eksponent:</strong> ${bl('x')}${or('⁰')} = ${gr('1')} vir enige nie-nul grondtal x.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout om te vermy</p>` +
        `<p style="margin:0;color:#991b1b;">Wanneer jy dieselfde grondtalle <em>vermenigvuldig</em>, <strong>tel</strong> jy die ${or('eksponente')} bymekaar — moet dit nooit vermenigvuldig nie. ${bl('x')}${or('²')}·${bl('x')}${or('³')} = ${gr('x⁵')} omdat ${or('2+3=5')}, nie x⁶ nie. Die wette van eksponente geld slegs wanneer die ${bl('grondtalle identies is')}.</p>` +
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
            `Die korrekte wet om dieselfde ${bl('grondtalle')} te vermenigvuldig, is die <strong>produk-van-magte</strong>-wet: ${bl('x')}${or('ᵃ')} · ${bl('x')}${or('ᵇ')} = ${bl('x')}${or('ᵃ⁺ᵇ')}.`,
            `Pas dit korrek toe: ${bl('x')}${or('²')} · ${bl('x')}${or('³')} = ${bl('x')}${or('²⁺³')} = <strong>Antwoord:</strong> ${gr('x⁵')}, nie x⁶ nie. ✓`,
          ],
        },
      ],


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
        'Kort video wat die vyf wette van eksponente vir heelgetal-eksponente verduidelik met uitgewerkte voorbeelde wat negatiewe en nul-eksponente insluit',
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
        'Kort video wat wys hoe om wortelvorme te vereenvoudig deur die grootste volkome-vierkant-faktor uit te haal en hoe om ʼn wortelvorm tussen twee opeenvolgende heelgetalle te plaas',
      diagramPlaceholder:
        'Getallelyn van 4 tot 7 met √30 gemerk tussen die heelgetalle 5 en 6, en die volkome vierkante 5² = 25 en 6² = 36 gemerk om te wys waarom 5 < √30 < 6',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="60" x2="245" y2="60" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="252,60 244,56 244,64" fill="#0f1f3d"/>` +
        `<line x1="20" y1="52" x2="20" y2="68" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="20" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<line x1="93" y1="52" x2="93" y2="68" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="93" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="93" y="100" text-anchor="middle" font-size="10" fill="#ea580c">5² = 25</text>` +
        `<line x1="166" y1="52" x2="166" y2="68" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="166" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">6</text>` +
        `<text x="166" y="100" text-anchor="middle" font-size="10" fill="#ea580c">6² = 36</text>` +
        `<line x1="239" y1="52" x2="239" y2="68" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="239" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">7</text>` +
        `<circle cx="128" cy="60" r="5" fill="#2563eb"/>` +
        `<line x1="128" y1="60" x2="128" y2="36" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="128" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">√30</text>` +
        `<text x="130" y="118" text-anchor="middle" font-size="11" fill="#6b7280">25 &lt; 30 &lt; 36, dus 5 &lt; √30 &lt; 6</text>` +
        `</svg>`,
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
        `<p style="color:#374151;font-size:14px;margin:0;">Kan geskryf word as a/b (heelgetalle, b≠0). Desimaal eindig of herhaal. Voorbeeld: ¾ = 0,75, √${gr('4')} = 2.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Irrasionale getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kan nie as a/b geskryf word nie. Desimaal hou vir ewig aan sonder om te herhaal. Voorbeeld: √2 = 1,41421356…</p>` +
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
            `√2 ≈ 1,41421356… — die desimaal hou vir ewig aan sonder enige herhalende blok. Dit is die bepalende eienskap van ʼn ${re('irrasionale')} getal.`,
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
              explanation: '7 is nie ʼn volkome vierkant nie (2²=4, 3²=9 — geen heelgetal se vierkant is 7 nie). √7 ≈ 2,6457… hou aan sonder om te herhaal, dus is dit irrasionaal. ✓',
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
          answer: 'a) √5 ≈ 2,236… (irrasionaal — 5 is nie ʼn volkome vierkant nie)\n   √11 ≈ 3,317… (irrasionaal — 11 is nie ʼn volkome vierkant nie)\nb) √81 = 9 (rasionaal — 81 = 9², ʼn volkome vierkant)\nc) Getallelyn: √5 ≈ 2,2, √81 = 9, √11 ≈ 3,3',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat die verskil tussen rasionale en irrasionale getalle verduidelik deur volkome vierkante en nie-volkome vierkante as voorbeelde te gebruik',
      diagramPlaceholder:
        'Diagram wat die versameling Reële Getalle in twee nie-oorvleuelende gebiede verdeel — Rasionale getalle (heelgetalle, eindigende/herhalende desimale) in blou en Irrasionale getalle (wortelvorme, π, nie-herhalende desimale) in rooi',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 210" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="20" width="300" height="180" rx="10" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">ℝ — Reële Getalle</text>` +
        `<circle cx="95" cy="112" r="62" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="95" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Rasionaal (ℚ)</text>` +
        `<text x="95" y="105" text-anchor="middle" font-size="10" fill="#1e3a8a">heelgetalle</text>` +
        `<text x="95" y="122" text-anchor="middle" font-size="10" fill="#1e3a8a">¾, 0,75</text>` +
        `<text x="95" y="139" text-anchor="middle" font-size="10" fill="#1e3a8a">√4 = 2, √9 = 3</text>` +
        `<circle cx="225" cy="112" r="62" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="225" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Irrasionaal</text>` +
        `<text x="225" y="105" text-anchor="middle" font-size="10" fill="#991b1b">√2, √3, √5</text>` +
        `<text x="225" y="122" text-anchor="middle" font-size="10" fill="#991b1b">π</text>` +
        `<text x="225" y="139" text-anchor="middle" font-size="10" fill="#991b1b">1,41421356…</text>` +
        `<text x="160" y="198" text-anchor="middle" font-size="10" fill="#6b7280">Elke reële getal is óf rasionaal óf irrasionaal — nooit albei nie</text>` +
        `</svg>`,
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
          answer: `${gr('4,47')}`,
          steps: [
            `Skryf die ${bl('presiese wortelvorm')}: ${bl('√20')}.`,
            `Bereken die ${or('desimale benadering')}: ${or('√20 ≈ 4,47213…')}`,
            `Identifiseer die afrondingsposisie (2 desimale plekke): 4,47|213… Die beslissende syfer is 2 — minder as 5, dus rond af.`,
            `<strong>Antwoord:</strong> ${gr('4,47')} (korrek tot 2 desimale plekke) ✓`,
          ],
        },
        {
          question: 'Thabo bereken die diagonaal van ʼn vierkant met sy 5 cm as √50 cm. Rond dit af tot 1 desimale plek.',
          answer: `${gr('7,1')} cm`,
          steps: [
            `Skryf die ${bl('presiese wortelvorm')}: ${bl('√50')} cm.`,
            `Bereken die ${or('desimale benadering')}: ${or('√50 ≈ 7,0710678…')}`,
            `Identifiseer die afrondingsposisie (1 desimale plek): 7,0|710… Die beslissende syfer is 7 — 5 of meer, dus rond op.`,
            `<strong>Antwoord:</strong> ${gr('7,1')} cm (korrek tot 1 desimale plek) ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Rond √6 af tot 2 desimale plekke.',
          answer: '2,45',
          checkMode: 'auto',
          correctAnswer: '2,45',
          explanation: '√6 ≈ 2,449489… Die beslissende syfer by posisie 3 is 9 ≥ 5, dus rond die tweede desimale plek op: 2,45 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Rond elke wortelvorm af tot die vereiste akkuraatheid.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Rond √17 af tot 1 desimale plek =',
              correctAnswer: '4,1',
              explanation: '√17 ≈ 4,1231… Die beslissende syfer is 2 < 5, dus rond af: 4,1 ✓',
            },
            {
              label: 'b) Rond √99 af tot 2 desimale plekke =',
              correctAnswer: '9,95',
              explanation: '√99 ≈ 9,94987… Die beslissende syfer by posisie 3 is 9 ≥ 5, dus rond op: 9,95 ✓',
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
              correctAnswer: '3,46',
              correctAnswers: ['3,46', '3,46 cm', '3.46', '3.46 cm'],
              explanation: '2√3 ≈ 2 × 1,73205… = 3,46410… Die beslissende syfer is 4 < 5, dus rond af: 3,46 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys wanneer om presiese wortelvorm teenoor desimale benadering te gebruik en hoe om irrasionale getalle tot ʼn gegewe aantal desimale plekke af te rond',
      diagramPlaceholder:
        'Getallelyn ingezoem tussen 4 en 5 wat √20 by sy posisie (≈4,47213…) merk, wat afrond na 4,47 tot 2 desimale plekke',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 140" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="65" x2="245" y2="65" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="252,65 244,61 244,69" fill="#0f1f3d"/>` +
        `<line x1="20" y1="57" x2="20" y2="73" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="20" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<line x1="130" y1="57" x2="130" y2="73" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="90" text-anchor="middle" font-size="11" fill="#6b7280">4,5</text>` +
        `<line x1="240" y1="57" x2="240" y2="73" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="240" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">5</text>` +
        `<circle cx="124" cy="65" r="5" fill="#2563eb"/>` +
        `<line x1="124" y1="65" x2="124" y2="38" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="124" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">√20</text>` +
        `<text x="124" y="108" text-anchor="middle" font-size="11" fill="#ea580c">≈ 4,47213…</text>` +
        `<text x="124" y="124" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">rond af na 4,47</text>` +
        `</svg>`,
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-2 Produk/kwosiëntwet | 3-5 Mag van ʼn mag/produk |
    // 6-9 Negatiewe eksponente → positiewe vorm | 10-13 Nul-eksponent & gemengde vereenvoudiging |
    // 14-16 Rasionale/breuk-eksponente | 17-19 Eenvoudige eksponensiale vergelykings & kroonvraag
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig x⁶ · x².', checkMode: 'auto', options: ['x⁸', 'x¹²', 'x⁴', 'x⁶'], correctIndex: 0, explanation: 'Tel die eksponente bymekaar: x⁶ · x² = x⁶⁺² = x⁸ ✓ (Om die eksponente te vermenigvuldig of af te trek, of te vergeet om hulle te kombineer, is algemene foute.)' },
        { difficulty: 'Easy', question: 'Vereenvoudig x⁹ ÷ x⁴.', checkMode: 'auto', options: ['x¹³', 'x⁵', 'x⁻⁵', 'x⁹'], correctIndex: 1, explanation: 'Trek die eksponente van mekaar af: x⁹ ÷ x⁴ = x⁹⁻⁴ = x⁵ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig a⁵ · a⁻².', checkMode: 'auto', options: ['a⁷', 'a⁻¹⁰', 'a³', 'a⁵'], correctIndex: 2, explanation: 'Tel die eksponente bymekaar, met inagneming van die teken van die negatiewe eksponent: a⁵ · a⁻² = a⁵⁺⁽⁻²⁾ = a³ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig (x³)⁴.', checkMode: 'auto', options: ['x⁷', 'x³', 'x⁶⁴', 'x¹²'], correctIndex: 3, explanation: 'Gebruik die mag-van-ʼn-mag-wet — vermenigvuldig die eksponente: (x³)⁴ = x³ˣ⁴ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (2x²)³.', checkMode: 'auto', options: ['8x⁶', '6x⁶', '8x⁵', '2x⁶'], correctIndex: 0, explanation: 'Pas die mag toe op elke faktor: 2³ · (x²)³ = 8 · x⁶ = 8x⁶ ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (3a²b)².', checkMode: 'auto', options: ['6a⁴b²', '9a⁴b²', '9a⁴b', '9a²b²'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 3² · (a²)² · b² = 9 · a⁴ · b² = 9a⁴b² ✓' },
        { difficulty: 'Medium', question: 'Skryf x⁻⁴ met ʼn positiewe eksponent.', checkMode: 'auto', options: ['-x⁴', 'x⁴', '1/x⁴', '-1/x⁴'], correctIndex: 2, explanation: 'ʼn Negatiewe eksponent beteken die resiprook: x⁻⁴ = 1/x⁴ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (2x⁻³)⁻¹ en skryf met ʼn positiewe eksponent.', checkMode: 'auto', options: ['2x³', 'x⁻³/2', '1/(2x³)', 'x³/2'], correctIndex: 3, explanation: 'Pas die mag toe op elke faktor: 2⁻¹ · (x⁻³)⁻¹ = (1/2) · x³ = x³/2 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (x⁻²y³) ÷ (x³y⁻¹) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['y⁴/x⁵', 'x⁵y⁴', 'y²/x⁵', 'y⁴/x'], correctIndex: 0, explanation: 'x-terme: x⁻² ÷ x³ = x⁻²⁻³ = x⁻⁵ → 1/x⁵. y-terme: y³ ÷ y⁻¹ = y³⁻⁽⁻¹⁾ = y⁴. Kombineer: y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (4a⁻²b)⁻² en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['a⁴/(8b²)', 'a⁴/(16b²)', 'a⁻⁴/(16b²)', 'a⁴b²/16'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 4⁻² · (a⁻²)⁻² · b⁻² = (1/16) · a⁴ · b⁻² = a⁴/(16b²) ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 5x⁰.', checkMode: 'auto', options: ['0', '5x', '5', '1'], correctIndex: 2, explanation: 'Enige nie-nul grondtal tot die mag 0 is gelyk aan 1: 5x⁰ = 5 × 1 = 5 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (x²y⁰) ÷ x⁻¹.', checkMode: 'auto', options: ['x', 'x²y', '0', 'x³'], correctIndex: 3, explanation: 'y⁰ = 1, dus is dit x² ÷ x⁻¹ = x²⁻⁽⁻¹⁾ = x³ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3x²)⁰ + 2.', checkMode: 'auto', options: ['3', '2', '5', '1'], correctIndex: 0, explanation: 'Enigiets (nie-nul) tot die mag 0 is 1: (3x²)⁰ = 1. Dus 1 + 2 = 3 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (2a³b⁻²)² ÷ (a⁻¹b) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['4a⁶/b⁵', '4a⁷/b⁵', '4a⁷b⁵', '2a⁷/b⁵'], correctIndex: 1, explanation: '(2a³b⁻²)² = 4a⁶b⁻⁴. Deel deur a⁻¹b: 4a⁶⁻⁽⁻¹⁾b⁻⁴⁻¹ = 4a⁷b⁻⁵ = 4a⁷/b⁵ ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 16^(1/2).', checkMode: 'auto', options: ['8', '256', '4', '16'], correctIndex: 2, explanation: 'ʼn Mag van 1/2 beteken die vierkantswortel: 16^(1/2) = √16 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 27^(1/3).', checkMode: 'auto', options: ['9', '19683', '27', '3'], correctIndex: 3, explanation: 'ʼn Mag van 1/3 beteken die derdemagswortel: 27^(1/3) = ∛27 = 3, aangesien 3³ = 27 ✓' },
        { difficulty: 'Hard', question: 'Bereken 8^(2/3).', checkMode: 'auto', options: ['4', '2', '64', '8'], correctIndex: 0, explanation: 'Neem eers die derdemagswortel, dan die kwadraat: 8^(2/3) = (∛8)² = 2² = 4 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2ˣ = 32.', checkMode: 'auto', options: ['x=4', 'x=5', 'x=6', 'x=16'], correctIndex: 1, explanation: 'Skryf 32 as ʼn mag van 2: 32 = 2⁵. Aangesien die grondtalle gelyk is, is x = 5 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 3^(2x) = 9.', checkMode: 'auto', options: ['x=2', 'x=4,5', 'x=1', 'x=3'], correctIndex: 2, explanation: 'Skryf 9 as ʼn mag van 3: 9 = 3². Dus 3^(2x) = 3² beteken 2x = 2, wat x = 1 gee ✓' },
        { difficulty: 'Hard', question: 'Zanele sê x⁻² is altyd negatief weens die minus-teken in die eksponent. Deur x = 3 te gebruik, watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Sy is korrek — x⁻² = -3² = -9, wat negatief is.', 'Sy is korrek, want enige eksponent met ʼn minus-teken voor produseer altyd ʼn negatiewe resultaat.', 'Sy is verkeerd, want x⁻² moet as -1/x² bereken word, wat -1/9 gee.', 'Sy is verkeerd — ʼn negatiewe eksponent beteken die resiprook, nie ʼn negatiewe waarde nie: x⁻² = 3⁻² = 1/3² = 1/9, ʼn positiewe breuk.'], correctIndex: 3, explanation: 'ʼn Negatiewe eksponent beteken jy moet die resiprook van die grondtal neem — dit maak nie die resultaat negatief nie. Vir x=3: x⁻²=3⁻²=1/3²=1/9, ʼn positiewe breuk. Zanele is verkeerd.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het eksponente oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy is selfversekerd met eksponente — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // Blokke: 0-2 Produk/kwosiëntwet | 3-5 Mag van ʼn mag/produk |
    // 6-9 Negatiewe eksponente → positiewe vorm | 10-13 Nul-eksponent & gemengde vereenvoudiging |
    // 14-16 Rasionale/breuk-eksponente | 17-19 Eenvoudige eksponensiale vergelykings & kroonvraag
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig x⁷ · x³.', checkMode: 'auto', options: ['x¹⁰', 'x²¹', 'x⁴', 'x⁷'], correctIndex: 0, explanation: 'Tel die eksponente bymekaar: x⁷ · x³ = x⁷⁺³ = x¹⁰ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig x¹¹ ÷ x⁵.', checkMode: 'auto', options: ['x¹⁶', 'x⁶', 'x⁻⁶', 'x¹¹'], correctIndex: 1, explanation: 'Trek die eksponente van mekaar af: x¹¹ ÷ x⁵ = x¹¹⁻⁵ = x⁶ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig b⁴ · b⁻³.', checkMode: 'auto', options: ['b⁷', 'b⁻¹²', 'b', 'b⁴'], correctIndex: 2, explanation: 'Tel die eksponente bymekaar: b⁴ · b⁻³ = b⁴⁺⁽⁻³⁾ = b¹ = b ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig (x²)⁶.', checkMode: 'auto', options: ['x⁸', 'x²', 'x³⁶', 'x¹²'], correctIndex: 3, explanation: 'Vermenigvuldig die eksponente: (x²)⁶ = x²ˣ⁶ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (3x³)².', checkMode: 'auto', options: ['9x⁶', '6x⁶', '9x⁵', '3x⁶'], correctIndex: 0, explanation: 'Pas die mag toe op elke faktor: 3² · (x³)² = 9 · x⁶ = 9x⁶ ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (2a³b²)³.', checkMode: 'auto', options: ['6a⁹b⁶', '8a⁹b⁶', '8a⁹b²', '8a⁶b⁵'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 2³ · (a³)³ · (b²)³ = 8 · a⁹ · b⁶ = 8a⁹b⁶ ✓' },
        { difficulty: 'Medium', question: 'Skryf x⁻⁵ met ʼn positiewe eksponent.', checkMode: 'auto', options: ['-x⁵', 'x⁵', '1/x⁵', '-1/x⁵'], correctIndex: 2, explanation: 'ʼn Negatiewe eksponent beteken die resiprook: x⁻⁵ = 1/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3x⁻²)⁻¹ en skryf met ʼn positiewe eksponent.', checkMode: 'auto', options: ['3x²', 'x⁻²/3', '1/(3x²)', 'x²/3'], correctIndex: 3, explanation: 'Pas die mag toe op elke faktor: 3⁻¹ · (x⁻²)⁻¹ = (1/3) · x² = x²/3 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (x⁻³y²) ÷ (x²y⁻²) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['y⁴/x⁵', 'x⁵y⁴', '1/x⁵', 'y⁴/x'], correctIndex: 0, explanation: 'x-terme: x⁻³ ÷ x² = x⁻³⁻² = x⁻⁵ → 1/x⁵. y-terme: y² ÷ y⁻² = y²⁻⁽⁻²⁾ = y⁴. Kombineer: y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (2a⁻³b)⁻² en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['a⁶/(2b²)', 'a⁶/(4b²)', 'a⁻⁶/(4b²)', 'a⁶b²/4'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 2⁻² · (a⁻³)⁻² · b⁻² = (1/4) · a⁶ · b⁻² = a⁶/(4b²) ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 7x⁰.', checkMode: 'auto', options: ['0', '7x', '7', '1'], correctIndex: 2, explanation: 'Enige nie-nul grondtal tot die mag 0 is gelyk aan 1: 7x⁰ = 7 × 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (a³b⁰) ÷ a⁻².', checkMode: 'auto', options: ['a', 'a³b', '0', 'a⁵'], correctIndex: 3, explanation: 'b⁰ = 1, dus is dit a³ ÷ a⁻² = a³⁻⁽⁻²⁾ = a⁵ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (5x³)⁰ + 6.', checkMode: 'auto', options: ['7', '6', '11', '1'], correctIndex: 0, explanation: 'Enigiets (nie-nul) tot die mag 0 is 1: (5x³)⁰ = 1. Dus 1 + 6 = 7 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3a²b⁻³)² ÷ (a⁻¹b) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['9a⁴/b⁷', '9a⁵/b⁷', '9a⁵b⁷', '3a⁵/b⁷'], correctIndex: 1, explanation: '(3a²b⁻³)² = 9a⁴b⁻⁶. Deel deur a⁻¹b: 9a⁴⁻⁽⁻¹⁾b⁻⁶⁻¹ = 9a⁵b⁻⁷ = 9a⁵/b⁷ ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 25^(1/2).', checkMode: 'auto', options: ['12,5', '625', '5', '25'], correctIndex: 2, explanation: 'ʼn Mag van 1/2 beteken die vierkantswortel: 25^(1/2) = √25 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 64^(1/3).', checkMode: 'auto', options: ['64/3', '262144', '64', '4'], correctIndex: 3, explanation: 'ʼn Mag van 1/3 beteken die derdemagswortel: 64^(1/3) = ∛64 = 4, aangesien 4³ = 64 ✓' },
        { difficulty: 'Hard', question: 'Bereken 4^(3/2).', checkMode: 'auto', options: ['8', '2', '64', '4'], correctIndex: 0, explanation: 'Neem eers die vierkantswortel, dan die derde mag: 4^(3/2) = (√4)³ = 2³ = 8 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2ˣ = 8.', checkMode: 'auto', options: ['x=2', 'x=3', 'x=4', 'x=8'], correctIndex: 1, explanation: 'Skryf 8 as ʼn mag van 2: 8 = 2³. Aangesien die grondtalle gelyk is, is x = 3 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 5ˣ = 125.', checkMode: 'auto', options: ['x=25', 'x=5', 'x=3', 'x=125'], correctIndex: 2, explanation: 'Skryf 125 as ʼn mag van 5: 125 = 5³. Aangesien die grondtalle gelyk is, is x = 3 ✓' },
        { difficulty: 'Hard', question: 'Bongani sê 9^(1/2) is dieselfde as 9÷2. Watter stelling verduidelik korrek wat die eksponent 1/2 werklik beteken?', checkMode: 'auto', options: ['Hy is korrek — ʼn breuk-eksponent beteken altyd om die grondtal deur die noemer te deel.', 'Hy is verkeerd — ʼn eksponent van 1/2 beteken die vierkantswortel, nie deling nie: 9^(1/2) = √9 = 3, nie 4,5 nie.', 'Hy is korrek, aangesien 9^(1/2) en 9÷2 albei dieselfde desimale waarde gee.', 'Hy is verkeerd, want 9^(1/2) is eintlik gelyk aan 9² = 81.'], correctIndex: 1, explanation: 'ʼn Breuk-eksponent van 1/2 beteken jy neem die vierkantswortel, nie deel deur 2 nie. 9^(1/2)=√9=3, nie 4,5 nie (wat 9÷2 is). Die noemer van ʼn breuk-eksponent wys watter wortel jy moet neem.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het eksponente oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy is selfversekerd met eksponente — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // Blokke: 0-2 Produk/kwosiëntwet | 3-5 Mag van ʼn mag/produk |
    // 6-9 Negatiewe eksponente → positiewe vorm | 10-13 Nul-eksponent & gemengde vereenvoudiging |
    // 14-16 Rasionale/breuk-eksponente | 17-19 Eenvoudige eksponensiale vergelykings & kroonvraag
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vereenvoudig x⁵ · x⁴.', checkMode: 'auto', options: ['x⁹', 'x²⁰', 'x¹', 'x⁵'], correctIndex: 0, explanation: 'Tel die eksponente bymekaar: x⁵ · x⁴ = x⁵⁺⁴ = x⁹ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig x¹⁰ ÷ x⁶.', checkMode: 'auto', options: ['x¹⁶', 'x⁴', 'x⁻⁴', 'x¹⁰'], correctIndex: 1, explanation: 'Trek die eksponente van mekaar af: x¹⁰ ÷ x⁶ = x¹⁰⁻⁶ = x⁴ ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig a⁶ · a⁻⁴.', checkMode: 'auto', options: ['a¹⁰', 'a⁻²⁴', 'a²', 'a⁶'], correctIndex: 2, explanation: 'Tel die eksponente bymekaar: a⁶ · a⁻⁴ = a⁶⁺⁽⁻⁴⁾ = a² ✓' },
        { difficulty: 'Easy', question: 'Vereenvoudig (x⁴)³.', checkMode: 'auto', options: ['x⁷', 'x⁴', 'x⁸¹', 'x¹²'], correctIndex: 3, explanation: 'Vermenigvuldig die eksponente: (x⁴)³ = x⁴ˣ³ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (2x⁴)³.', checkMode: 'auto', options: ['8x¹²', '6x¹²', '8x⁷', '2x¹²'], correctIndex: 0, explanation: 'Pas die mag toe op elke faktor: 2³ · (x⁴)³ = 8 · x¹² = 8x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Vereenvoudig (3a b²)³.', checkMode: 'auto', options: ['9a³b⁶', '27a³b⁶', '27a³b²', '27a⁴b⁵'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 3³ · a³ · (b²)³ = 27 · a³ · b⁶ = 27a³b⁶ ✓' },
        { difficulty: 'Medium', question: 'Skryf x⁻⁶ met ʼn positiewe eksponent.', checkMode: 'auto', options: ['-x⁶', 'x⁶', '1/x⁶', '-1/x⁶'], correctIndex: 2, explanation: 'ʼn Negatiewe eksponent beteken die resiprook: x⁻⁶ = 1/x⁶ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (5x⁻²)⁻¹ en skryf met ʼn positiewe eksponent.', checkMode: 'auto', options: ['5x²', 'x⁻²/5', '1/(5x²)', 'x²/5'], correctIndex: 3, explanation: 'Pas die mag toe op elke faktor: 5⁻¹ · (x⁻²)⁻¹ = (1/5) · x² = x²/5 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (x⁻⁴y³) ÷ (x¹y⁻¹) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['y⁴/x⁵', 'x⁵y⁴', 'y²/x⁵', 'y⁴/x³'], correctIndex: 0, explanation: 'x-terme: x⁻⁴ ÷ x¹ = x⁻⁴⁻¹ = x⁻⁵ → 1/x⁵. y-terme: y³ ÷ y⁻¹ = y³⁻⁽⁻¹⁾ = y⁴. Kombineer: y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (3a⁻²b)⁻² en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['a⁴/(6b²)', 'a⁴/(9b²)', 'a⁻⁴/(9b²)', 'a⁴b²/9'], correctIndex: 1, explanation: 'Pas die mag toe op elke faktor: 3⁻² · (a⁻²)⁻² · b⁻² = (1/9) · a⁴ · b⁻² = a⁴/(9b²) ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 9x⁰.', checkMode: 'auto', options: ['0', '9x', '9', '1'], correctIndex: 2, explanation: 'Enige nie-nul grondtal tot die mag 0 is gelyk aan 1: 9x⁰ = 9 × 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (b⁴c⁰) ÷ b⁻³.', checkMode: 'auto', options: ['b', 'b⁴c', '0', 'b⁷'], correctIndex: 3, explanation: 'c⁰ = 1, dus is dit b⁴ ÷ b⁻³ = b⁴⁻⁽⁻³⁾ = b⁷ ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (7x⁵)⁰ + 4.', checkMode: 'auto', options: ['5', '4', '11', '1'], correctIndex: 0, explanation: 'Enigiets (nie-nul) tot die mag 0 is 1: (7x⁵)⁰ = 1. Dus 1 + 4 = 5 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig (2a³b⁻²)³ ÷ (a⁻¹b) en skryf met slegs positiewe eksponente.', checkMode: 'auto', options: ['8a⁹/b⁷', '8a¹⁰/b⁷', '8a¹⁰b⁷', '6a¹⁰/b⁷'], correctIndex: 1, explanation: '(2a³b⁻²)³ = 8a⁹b⁻⁶. Deel deur a⁻¹b: 8a⁹⁻⁽⁻¹⁾b⁻⁶⁻¹ = 8a¹⁰b⁻⁷ = 8a¹⁰/b⁷ ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 36^(1/2).', checkMode: 'auto', options: ['18', '1296', '6', '36'], correctIndex: 2, explanation: 'ʼn Mag van 1/2 beteken die vierkantswortel: 36^(1/2) = √36 = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 125^(1/3).', checkMode: 'auto', options: ['125/3', '1953125', '125', '5'], correctIndex: 3, explanation: 'ʼn Mag van 1/3 beteken die derdemagswortel: 125^(1/3) = ∛125 = 5, aangesien 5³ = 125 ✓' },
        { difficulty: 'Hard', question: 'Bereken 9^(3/2).', checkMode: 'auto', options: ['27', '3', '729', '9'], correctIndex: 0, explanation: 'Neem eers die vierkantswortel, dan die derde mag: 9^(3/2) = (√9)³ = 3³ = 27 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2ˣ = 64.', checkMode: 'auto', options: ['x=5', 'x=6', 'x=7', 'x=64'], correctIndex: 1, explanation: 'Skryf 64 as ʼn mag van 2: 64 = 2⁶. Aangesien die grondtalle gelyk is, is x = 6 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 4ˣ = 64.', checkMode: 'auto', options: ['x=16', 'x=4', 'x=3', 'x=64'], correctIndex: 2, explanation: 'Skryf 64 as ʼn mag van 4: 64 = 4³ (4×4×4=64). Aangesien die grondtalle gelyk is, is x = 3 ✓' },
        { difficulty: 'Hard', question: 'Thabo sê (x³)² en x^(3²) gee dieselfde antwoord. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is korrek — albei uitdrukkings vereenvoudig tot x⁶ omdat dieselfde twee getalle, 3 en 2, betrokke is.', 'Hy is verkeerd — (x³)² gebruik die mag-van-ʼn-mag-wet om x⁶ te gee, maar x^(3²) beteken x tot die mag 3²=9, wat x⁹ gee; die hakieplasing verander die betekenis.', 'Hy is korrek, aangesien eksponentnotasie altyd kommutatief is ongeag hakies.', 'Hy is verkeerd, want (x³)² is eintlik gelyk aan x⁹ en x^(3²) is gelyk aan x⁶.'], correctIndex: 1, explanation: '(x³)² gebruik die mag-van-ʼn-mag-wet: vermenigvuldig die eksponente, wat x⁶ gee. Maar x^(3²) beteken x tot die mag 3²=9, wat x⁹ gee. Hierdie is verskillend (x⁶≠x⁹), dus is Thabo verkeerd — die hakieplasing verander die betekenis van die uitdrukking.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het eksponente oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy is selfversekerd met eksponente — hersien enige gemiste vrae en probeer nog ʼn stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
    checkMode: 'auto',
    options: ['x⁷', 'x¹²', 'x¹', 'x⁴'],
    correctIndex: 0,
    explanation: 'Gebruik die produkwet — tel die eksponente bymekaar: x⁴·x³ = x⁴⁺³ = x⁷ ✓',
  },

  // ── Q2 Easy — quotient of powers ───────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vereenvoudig x⁸÷x³.',
    checkMode: 'auto',
    options: ['x¹¹', 'x⁵', 'x⁻⁵', 'x⁸'],
    correctIndex: 1,
    explanation: 'Gebruik die kwosiëntwet — trek die eksponente van mekaar af: x⁸÷x³ = x⁸⁻³ = x⁵ ✓',
  },

  // ── Q3 Medium — power of a power ───────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (x²)⁵.',
    checkMode: 'auto',
    options: ['x⁷', 'x²', 'x¹⁰', 'x²⁵'],
    correctIndex: 2,
    explanation: 'Gebruik die mag-van-ʼn-mag-wet — vermenigvuldig die eksponente: (x²)⁵ = x²ˣ⁵ = x¹⁰ ✓',
  },

  // ── Q4 Medium — negative exponent with multiple factors ────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (3x²y⁻¹)⁻².',
    checkMode: 'auto',
    options: ['y²/(6x⁴)', 'y⁻²/(9x⁴)', '9y²/x⁴', 'y²/(9x⁴)'],
    correctIndex: 3,
    explanation: 'Pas die mag toe op elke faktor: 3⁻² · x²×(⁻²) · y⁻¹×(⁻²) = (1/9) · x⁻⁴ · y². Herskryf met positiewe eksponente: y²/(9x⁴) ✓',
  },

  // ── Q5 Hard — common error: adding different bases ─────────────────────────
  {
    difficulty: 'Hard',
    question: 'Sipho vereenvoudig x³·y² en kry (xy)⁵. Watter stelling evalueer sy bewering korrek?',
    checkMode: 'auto',
    options: [
      'Hy is verkeerd — eksponente kan slegs gekombineer word wanneer die grondtalle identies is; x³ en y² het verskillende grondtalle, dus kan hulle nie tot (xy)⁵ gekombineer word nie.',
      'Hy is korrek, aangesien om die eksponente 3+2=5 by te tel altyd werk ongeag die grondtalle.',
      'Hy is verkeerd, want die korrekte vereenvoudiging is x⁵y⁵.',
      'Hy is korrek — (xy)⁵ is net ʼn korter manier om x³·y² te skryf.',
    ],
    correctIndex: 0,
    explanation: 'Die produkwet x^a·x^b=x^(a+b) geld slegs wanneer die grondtalle dieselfde is. x³ en y² het verskillende grondtalle (x en y), dus kan hul eksponente nie gekombineer word nie — die uitdrukking x³y² is reeds ten volle vereenvoudig.',
  },

  // ── Q6 Easy — simplify surd ────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vereenvoudig √32.',
    checkMode: 'auto',
    options: ['2√8', '4√2', '8√2', '16√2'],
    correctIndex: 1,
    explanation: 'Grootste volkome-vierkant-faktor van 32: 32 = 16 × 2. √32 = √16 × √2 = 4√2 ✓',
  },

  // ── Q7 Medium — add like surds ─────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig √45+√20.',
    checkMode: 'auto',
    options: ['√65', '6√5', '5√5', '5'],
    correctIndex: 2,
    explanation: '√45 = √(9×5) = 3√5. √20 = √(4×5) = 2√5. 3√5 + 2√5 = 5√5 ✓',
  },

  // ── Q8 Hard — locate surd between integers ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Tussen watter twee heelgetalle lê √55?',
    checkMode: 'auto',
    options: [
      '6 en 7, aangesien 6²=36 en 7²=49 die naaste volkome vierkante onder 55 is',
      '8 en 9, aangesien 8²=64 net bo 55 is',
      '54 en 56, die heelgetalle wat 55 self onmiddellik omring',
      '7 en 8, aangesien 7²=49<55<64=8²',
    ],
    correctIndex: 3,
    explanation: '7² = 49 en 8² = 64. Aangesien 49 < 55 < 64, lê √55 tussen 7 en 8.',
  },

  // ── Q9 Medium — subtract like surds ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig √98-√32.',
    checkMode: 'auto',
    options: ['3√2', '√66', '11√2', '3√66'],
    correctIndex: 0,
    explanation: '√98 = √(49×2) = 7√2. √32 = √(16×2) = 4√2. 7√2 − 4√2 = 3√2 ✓',
  },

  // ── Q10 Hard — common error: adding radicands ──────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato sê √8+√2=√10. Watter stelling evalueer haar bewering korrek?',
    checkMode: 'auto',
    options: [
      'Sy is korrek, want wortelvorme tel op soos gewone getalle onder dieselfde worteltekens.',
      'Sy is verkeerd — √8=2√2, dus √8+√2=2√2+√2=3√2, nie √10 nie.',
      'Sy is korrek, aangesien 8+2=10 en die worteltekens net oordra.',
      'Sy is verkeerd, want √8+√2 kan glad nie vereenvoudig word nie.',
    ],
    correctIndex: 1,
    explanation: 'Wortelvorme kan slegs direk opgetel word sodra hulle tot dieselfde wortelvorm vereenvoudig is. √8=2√2, dus √8+√2=2√2+√2=3√2, nie √10 nie — jy kan nie die wortelgetalle direk onder een wortelteken optel nie.',
  },

  // ── Q11 Easy — rational or irrational ─────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Is √9 rasionaal of irrasionaal?',
    checkMode: 'auto',
    options: ['Irrasionaal, omdat dit ʼn vierkantswortelteken bevat', 'Irrasionaal, omdat 9 ʼn onewe getal is', 'Rasionaal, omdat √9 = 3 presies, ʼn heelgetal', 'Irrasionaal, omdat die desimaal nooit eindig nie'],
    correctIndex: 2,
    explanation: '√9 = 3 presies, omdat 3² = 9. Aangesien 9 ʼn volkome vierkant is, is die vierkantswortel daarvan ʼn heelgetal en dus rasionaal. ✓',
  },

  // ── Q12 Medium — explain irrational ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Watter stelling verduidelik korrek waarom √5 irrasionaal is?',
    checkMode: 'auto',
    options: [
      '√5 is irrasionaal omdat dit ʼn vierkantswortelteken het, en alle vierkantswortels is irrasionaal.',
      '√5 is irrasionaal omdat 5 ʼn onewe getal is.',
      '√5 is irrasionaal omdat dit groter as 2 is.',
      '√5 is irrasionaal omdat 5 nie ʼn volkome vierkant is nie, dus kan √5 nie as ʼn presiese breuk geskryf word nie en die desimale uitbreiding eindig of herhaal nooit nie.',
    ],
    correctIndex: 3,
    explanation: '5 is nie ʼn volkome vierkant nie, dus kan die vierkantswortel daarvan nie as ʼn presiese breuk geskryf word nie; die desimale uitbreiding hou vir ewig aan sonder om te herhaal, wat die definisie van ʼn irrasionale getal is.',
  },

  // ── Q13 Hard — generalise about primes ────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Thabo sê die vierkantswortels van alle priemgetalle is irrasionaal. Watter stelling evalueer sy bewering korrek?',
    checkMode: 'auto',
    options: [
      'Hy is korrek — aangesien priemgetalle geen volkome-vierkant-faktore anders as 1 het nie, kan hul vierkantswortels nooit tot ʼn heelgetal vereenvoudig nie, wat hulle irrasionaal maak.',
      'Hy is verkeerd — sommige priemgetalle, soos 2, het vierkantswortels wat heelgetalle is.',
      'Hy is korrek, maar slegs vir priemgetalle groter as 10.',
      'Hy is verkeerd, want alle vierkantswortels is per definisie rasionaal.',
    ],
    correctIndex: 0,
    explanation: 'Priemgetalle het geen volkome-vierkant-faktore anders as 1 nie, dus kan hul vierkantswortels nooit tot ʼn heelgetal of presiese breuk vereenvoudig nie. Dit maak die vierkantswortel van elke priemgetal irrasionaal.',
  },

  // ── Q14 Easy — round a surd to 2 dp ───────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Rond √18 af tot 2 desimale plekke.',
    checkMode: 'auto',
    options: ['4,2', '4,24', '4,25', '4,3'],
    correctIndex: 1,
    explanation: '√18 ≈ 4,2426… Die beslissende syfer by posisie 3 is 2 < 5, dus rond af: 4,24 ✓',
  },

  // ── Q15 Medium — round a surd to 1 dp ─────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Rond √63 af tot 1 desimale plek.',
    checkMode: 'auto',
    options: ['7,93', '8,0', '7,9', '8'],
    correctIndex: 2,
    explanation: '√63 ≈ 7,9372… Die beslissende syfer by posisie 2 is 3 < 5, dus rond af: 7,9 ✓',
  },

  // ── Q16 Hard — real-world rounding ────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'ʼn Reghoek se diagonaal is √32 cm. Watter een van die volgende rond dit korrek af tot 2 desimale plekke?',
    checkMode: 'auto',
    options: [
      '5,65 cm, omdat die beslissende syfer verkeerdelik afgerond is',
      '5,7 cm, aangesien slegs 1 desimale plek vir ʼn meting nodig is',
      '√32 cm presies, aangesien presiese wortelvorm altyd verkies word vir werklike-lewe-metings',
      '5,66 cm, aangesien √32 ≈ 5,6568… en die beslissende syfer (6) 5 of meer is, dus rond die tweede desimale plek op',
    ],
    correctIndex: 3,
    explanation: '√32 ≈ 5,6568… Om tot 2 desimale plekke af te rond, kyk na die derde desimale syfer (6), wat 5 of meer is, dus rond op: 5,66 cm. Afronding tot ʼn praktiese aantal desimale plekke is nodig vir werklike-lewe-metings soos die sny van materiaal, waar presiese wortelvorm nie bruikbaar is nie.',
  },

  // ── Q17 Medium — power rule with negative exponent ────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vereenvoudig (2x⁻¹)³.',
    checkMode: 'auto',
    options: ['8/x³', '8x³', '2/x³', '6/x³'],
    correctIndex: 0,
    explanation: 'Pas die mag toe op elke faktor: 2³ · (x⁻¹)³ = 8 · x⁻³ = 8/x³ ✓',
  },

  // ── Q18 Hard — combined exponent laws ─────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Vereenvoudig (x²y⁻³)⁻¹÷(x⁻¹y²) en skryf met slegs positiewe eksponente.',
    checkMode: 'auto',
    options: ['y/x', 'xy', 'y/x³', 'x/y'],
    correctIndex: 0,
    explanation: '(x²y⁻³)⁻¹ = x⁻²y³. Deel deur x⁻¹y²: x⁻²⁻⁽⁻¹⁾y³⁻² = x⁻¹y¹ = y/x ✓',
  },

  // ── Q19 Hard — zero exponent misconception ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle sê x⁰=0 vir enige waarde van x. Watter stelling evalueer haar bewering korrek?',
    checkMode: 'auto',
    options: [
      'Sy is korrek — enige grondtal tot die mag 0 gee altyd 0.',
      'Sy is korrek, behalwe wanneer x ʼn breuk is.',
      'Sy is verkeerd — enige nie-nul getal tot die mag 0 is gelyk aan 1, nie 0 nie; die uitdrukking 0⁰ is onbepaald.',
      'Sy is verkeerd, want x⁰ is eintlik gelyk aan x.',
    ],
    correctIndex: 2,
    explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1, nie 0 nie. Die uitdrukking 0⁰ is onbepaald. Amahle is verkeerd.',
  },

  // ── Q20 Hard — exact and approximate form ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Vereenvoudig √200 en rond jou antwoord af tot 2 desimale plekke. Watter een van die volgende gee beide die korrekte presiese en benaderde vorme?',
    checkMode: 'auto',
    options: [
      '√200 = 20√2 (presies), ≈ 28,28 (afgerond)',
      '√200 = 10√2 (presies), ≈ 14,1 (afgerond tot 1 desimale plek)',
      '√200 = 100√2 (presies), ≈ 141,42 (afgerond)',
      '√200 = 10√2 (presies), ≈ 14,14 (afgerond tot 2 desimale plekke)',
    ],
    correctIndex: 3,
    explanation: '√200 = √(100×2) = 10√2 (presiese vorm). 10√2 ≈ 14,14 (afgerond tot 2 desimale plekke).',
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
