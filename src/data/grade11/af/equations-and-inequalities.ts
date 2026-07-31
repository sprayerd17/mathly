import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────
// Section 1: factorisation method  → blue   (#2563eb)
//            completing the square → orange (#ea580c)
//            quadratic formula     → green  (#16a34a)
// Section 2: isolate the surd      → blue
//            square both sides     → orange
//            check for extraneous roots → green
// Section 3: same base             → blue
//            quadratic in form     → orange
//            substitution          → green
// Section 4: critical values       → blue
//            sign of each interval → orange
//            final solution        → green
// Section 5: linear equation       → blue
//            quadratic equation    → orange
//            substitution result   → green
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Vergelykings en Ongelykhede',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING QUADRATIC EQUATIONS USING THREE METHODS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-quadratic-equations',
      title: 'Kwadratiese Vergelykings Oplos deur Drie Metodes',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons los kwadratiese vergelykings van die vorm <strong>ax² + bx + c = 0</strong> op deur drie metodes te gebruik: ${bl('faktorisering')} (wanneer die uitdrukking maklik faktoriseer), ${or('volledigmaking van die kwadraat')} (veral nuttig wanneer faktorisering nie eenvoudig is nie), en die ${gr('kwadratiese formule')} x = (−b ± √(b² − 4ac)) / 2a (wat altyd werk vir enige kwadratiese ax² + bx + c = 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faktorisering')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volledigmaking van die kwadraat')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadratiese formule')}</span>` +
        `</div>` +

        // ── Three method cards ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie metodes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Faktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf ax² + bx + c as ʼn produk van twee lineêre faktore, en stel dan elke faktor gelyk aan nul.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> die uitdrukking maklik oor die heelgetalle faktoriseer.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Volledigmaking van die Kwadraat</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Herskryf die vergelyking in die vorm (x + p)² = q, en trek dan die vierkantswortel van albei kante.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> faktorisering nie voor die hand liggend is nie, of wanneer wortelvorm-antwoorde verwag word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Kwadratiese Formule</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vervang die waardes van a, b en c uit ax² + bx + c = 0 direk in die formule.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> enige kwadratiese — hierdie metode werk altyd.</p>` +
        `</div>` +

        `</div>` +

        // ── Quadratic formula display ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die kwadratiese formule</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin:0;letter-spacing:0.02em;">x = (−b ± √(b² − 4ac)) / 2a</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">waar ax² + bx + c = 0, met a ≠ 0</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die doeltreffendste metode kies</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk altyd eers of die kwadratiese ${bl('faktoriseer')} — dit gee die vinnigste oplossing. As dit nie netjies faktoriseer nie, gebruik ${or('volledigmaking van die kwadraat')} (veral doeltreffend wanneer a = 1) of die ${gr('kwadratiese formule')} (die veilige alombruikbare keuse, veral wanneer a ≠ 1).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x² − 7x + 12 = 0 deur faktorisering.',
          answer: `${bl('x = 3')} of ${bl('x = 4')}`,
          steps: [
            `Skryf die vergelyking in standaardvorm: x² − 7x + 12 = 0.`,
            `${bl('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot +12 en optel tot −7. Dit is −3 en −4.<br>(x − 3)(x − 4) = 0`,
            `Stel elke faktor gelyk aan nul: x − 3 = 0 of x − 4 = 0.`,
            `<strong>Oplossings:</strong> ${bl('x = 3')} of ${bl('x = 4')}`,
          ],
        },
        {
          question: 'Los op: x² + 6x + 4 = 0 deur die vierkant volledig te maak.',
          answer: `${or('x = −3 + √5')} of ${or('x = −3 − √5')}`,
          steps: [
            `Skryf die vergelyking: x² + 6x + 4 = 0. Aangesien a = 1, is die volledigmaking van die kwadraat eenvoudig.`,
            `${or('Maak die vierkant volledig:')} Neem die helfte van die koëffisiënt van x: die helfte van 6 is 3. Skryf die volkome vierkant-trinoom:<br>(x + 3)² − 9 + 4 = 0`,
            `Vereenvoudig: ${or('(x + 3)² = 5')}`,
            `Trek die vierkantswortel van albei kante: x + 3 = ±√5`,
            `<strong>Oplossings:</strong> ${or('x = −3 ± √5')} &nbsp;(m.a.w. x = −3 + √5 of x = −3 − √5)`,
          ],
        },
        {
          question: 'Los op: 2x² − 5x − 3 = 0 deur die kwadratiese formule te gebruik.',
          answer: `${gr('x = 3')} of ${gr('x = −½')}`,
          steps: [
            `Identifiseer die koëffisiënte: a = 2, b = −5, c = −3.`,
            `${gr('Kwadratiese formule:')} x = (−b ± √(b² − 4ac)) / 2a`,
            `Vervang: x = (−(−5) ± √((−5)² − 4(2)(−3))) / (2 × 2) = (5 ± √(25 + 24)) / 4 = (5 ± √49) / 4 = (5 ± 7) / 4`,
            `<strong>Oplossings:</strong> x = (5 + 7) / 4 = 12/4 = ${gr('3')} &nbsp; of &nbsp; x = (5 − 7) / 4 = −2/4 = ${gr('−½')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om kwadratiese vergelykings op te los deur faktorisering, volledigmaking van die kwadraat, en die kwadratiese formule, met ʼn uitgewerkte voorbeeld vir elke metode',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING SURD (RADICAL) EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surd-equations',
      title: 'Wortelvergelykings Oplos',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Wortelvergelyking</strong> bevat die veranderlike onder ʼn vierkantswortelteken, byvoorbeeld √(2x + 3) = x. Om dit op te los: ${bl('isoleer die wortelterm')} aan een kant van die vergelyking, ${or('vierkant albei kante')} om die wortelteken te verwyder, en los die vergelyking wat oorbly op. Omdat vierkanting van albei kante ekstra oplossings kan skep wat nie werklik aan die oorspronklike vergelyking voldoen nie, moet jy altyd elke antwoord terug in die ${gr('oorspronklike vergelyking vervang om vir vreemde wortels te toets')} en enige wat faal, verwerp.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('isoleer die wortelterm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vierkant albei kante')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toets vir vreemde wortels')}</span>` +
        `</div>` +

        // ── Steps ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om wortelvergelykings op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Isoleer die wortelterm')} — herrangskik die vergelyking sodat die vierkantswortelterm alleen aan een kant is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vierkant albei kante')} van die vergelyking om die vierkantswortelteken te verwyder — onthou om die hele ander kant te vierkant, nie net elke term nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Los die vergelyking wat oorbly op</strong> — dit is gewoonlik ʼn kwadratiese vergelyking, gebruik dus faktorisering of die kwadratiese formule.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Toets elke oplossing in die OORSPRONKLIKE vergelyking')} — vervang elke waarde terug voordat dit gevierkant is. Verwerp enige waarde wat nie aan die oorspronklike vergelyking voldoen nie; dit word vreemde wortels genoem.</p>` +
        `</div>` +

        `</div>` +

        // ── Why extraneous roots occur ─────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Waarom vreemde wortels voorkom</p>` +
        `<p style="margin:0;color:#7c2d12;">Die simbool √ dui altyd die <strong>nie-negatiewe</strong> vierkantswortel aan, so √(enigiets) kan nooit gelyk wees aan ʼn negatiewe getal nie. Wanneer albei kante van ʼn vergelyking gevierkant word, gaan hierdie inligting verlore — dit behandel ʼn moontlike negatiewe resultaat asof dit positief is. Dit is waarom vierkanting ʼn oplossing kan skep wat aan die gevierkantde vergelyking voldoen, maar nie aan die oorspronklike wortelvergelyking nie, en waarom toetsing nie opsioneel is nie.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige toets voordat jy selfs vierkant</p>` +
        `<p style="margin:0;color:#1e3a8a;">As, nadat jy die ${bl('wortelterm geïsoleer')} het, die ander kant ʼn waarde is wat negatief moet wees (byvoorbeeld √(x + 3) = −5), kan jy dadelik aflei dat daar geen oplossing is nie — ʼn vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie, so daar is geen nodigheid om ${or('albei kante te vierkant')} nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: √(5x + 14) = x',
          answer: `${gr('x = 7')} (x = −2 word verwerp)`,
          steps: [
            `${bl('Die wortelterm is reeds geïsoleer:')} √(5x + 14) = x`,
            `${or('Vierkant albei kante:')} 5x + 14 = x²`,
            `Herrangskik in standaardvorm en los op: x² − 5x − 14 = 0 → (x − 7)(x + 2) = 0, dus x = 7 of x = −2`,
            `${gr('Toets albei oplossings in die oorspronklike vergelyking:')}<br>x = 7: √(5(7) + 14) = √49 = 7 = 7 ✓ geldig<br>x = −2: √(5(−2) + 14) = √4 = 2 ≠ −2 ✗ vreemde wortel — verwerp`,
            `<strong>Oplossing:</strong> ${gr('x = 7')} slegs`,
          ],
        },
        {
          question: 'Los op vir x: √(2x + 8) = x, en toets vir vreemde wortels.',
          answer: `${gr('x = 4')} (x = −2 word verwerp)`,
          steps: [
            `${bl('Die wortelterm is reeds geïsoleer:')} √(2x + 8) = x`,
            `${or('Vierkant albei kante:')} 2x + 8 = x²`,
            `Herrangskik in standaardvorm en los op: x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0, dus x = 4 of x = −2`,
            `${gr('Toets albei oplossings in die oorspronklike vergelyking:')}<br>x = 4: √(2(4) + 8) = √16 = 4 = 4 ✓ geldig<br>x = −2: √(2(−2) + 8) = √4 = 2 ≠ −2 ✗ vreemde wortel — verwerp`,
            `<strong>Oplossing:</strong> ${gr('x = 4')} slegs`,
          ],
        },
        {
          question: 'Los op vir x: √(x + 3) = x − 3, en toets sorgvuldig vir vreemde wortels.',
          answer: `${gr('x = 6')} (x = 1 word verwerp)`,
          steps: [
            `${bl('Die wortelterm is reeds geïsoleer:')} √(x + 3) = x − 3`,
            `${or('Vierkant albei kante:')} x + 3 = (x − 3)² = x² − 6x + 9`,
            `Herrangskik in standaardvorm en los op: x² − 7x + 6 = 0 → (x − 6)(x − 1) = 0, dus x = 6 of x = 1`,
            `${gr('Toets albei oplossings in die oorspronklike vergelyking:')}<br>x = 6: √(6 + 3) = √9 = 3, en 6 − 3 = 3 ✓ geldig<br>x = 1: √(1 + 3) = √4 = 2, maar 1 − 3 = −2, en 2 ≠ −2 ✗ vreemde wortel — verwerp (ʼn vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie)`,
            `<strong>Oplossing:</strong> ${gr('x = 6')} slegs`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om wortelvergelykings op te los deur die wortelterm te isoleer, albei kante te vierkant, en elke oplossing in die oorspronklike vergelyking vir vreemde wortels te toets',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING EXPONENTIAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-equations',
      title: 'Eksponensiële Vergelykings Oplos',
      icon: 'ˣ',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Eksponensiële vergelyking</strong> is ʼn vergelyking waarin die veranderlike in die eksponent voorkom, byvoorbeeld 2^x = 8. Die mees algemene strategie is om ${bl('albei kante met dieselfde grondtal te skryf')}, aangesien as b^m = b^n (met b &gt; 0 en b ≠ 1) dan moet die eksponente gelyk wees: m = n. Sommige eksponensiële vergelykings is ${or('kwadraties van vorm')} — hulle kan nie na ʼn enkele mag aan elke kant herlei word nie, maar ʼn ${gr('vervanging')} soos y = b^x verander hulle in ʼn gewone kwadratiese vergelyking.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dieselfde grondtal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadraties van vorm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vervanging')}</span>` +
        `</div>` +

        // ── Law box ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#2563eb;margin:0;letter-spacing:0.02em;">As b^m = b^n dan m = n</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">(waar b &gt; 0 en b ≠ 1) — sodra albei kante dieselfde grondtal deel, stel jy eenvoudig die eksponente gelyk.</p>` +
        `</div>` +

        // ── Two method cards ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee oplossingstrategieë</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Dieselfde-Grondtal-Metode</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf albei kante as magte van dieselfde grondtal, stel dan die eksponente gelyk en los die vergelyking vir x op.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> albei kante as magte van dieselfde getal geskryf kan word, bv. 2^x = 32 = 2⁵.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Vervanging (Kwadratiese Vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Laat y = b^x om die vergelyking in ʼn kwadratiese vergelyking in y te verander. Los vir y op, en vervang dan terug om vir x op te los.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;"><strong>Gebruik wanneer:</strong> die vergelyking b^(2x)- en b^x-terme bevat, bv. 2^(2x) − 3·2^x + 2 = 0.</p>` +
        `</div>` +

        `</div>` +

        // ── Powers reference ────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Magte wat jy behoort te ken</p>` +
        `<p style="margin:0;color:#7c2d12;">2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64 &nbsp;|&nbsp; 3² = 9, 3³ = 27, 3⁴ = 81 &nbsp;|&nbsp; 5² = 25, 5³ = 125, 5⁴ = 625. Om hierdie vinnig te herken, maak die ${bl('dieselfde-grondtal-metode')} baie vinniger.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die kwadratiese vorm raaksien</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn vergelyking beide b^(2x) en b^x bevat, onthou dat b^(2x) = (b^x)². Gebruik die ${gr('vervanging')} y = b^x om die vergelyking as ʼn gewone ${or('kwadratiese vergelyking in y')} te herskryf, los dit op (deur te faktoriseer of die kwadratiese formule te gebruik), en verander dan elke y-waarde terug met b^x = y om x te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: 2^x = 16',
          answer: `${bl('x = 4')}`,
          steps: [
            `Skryf 16 as ʼn mag van 2: 16 = 2⁴.`,
            `${bl('Dieselfde grondtal:')} 2^x = 2⁴`,
            `Aangesien die grondtalle gelyk is, stel die eksponente gelyk: x = 4`,
            `<strong>Oplossing:</strong> ${bl('x = 4')}`,
          ],
        },
        {
          question: 'Los op vir x: 3^(x−2) = 27',
          answer: `${bl('x = 5')}`,
          steps: [
            `Skryf 27 as ʼn mag van 3: 27 = 3³.`,
            `${bl('Dieselfde grondtal:')} 3^(x−2) = 3³`,
            `Aangesien die grondtalle gelyk is, stel die eksponente gelyk: x − 2 = 3`,
            `<strong>Oplossing:</strong> x = 3 + 2 = ${bl('5')}`,
          ],
        },
        {
          question: 'Los op vir x: 2^(2x) − 3 · 2^x + 2 = 0',
          answer: `${gr('x = 0')} of ${gr('x = 1')}`,
          steps: [
            `Let daarop dat 2^(2x) = (2^x)². ${gr('Laat y = 2^x,')} sodat die vergelyking ʼn kwadratiese vergelyking in y word: y² − 3y + 2 = 0`,
            `${or('Los die kwadratiese vergelyking op:')} Faktoriseer: (y − 1)(y − 2) = 0, dus y = 1 of y = 2`,
            `Vervang terug met 2^x = y:<br>2^x = 1 = 2⁰ → x = 0<br>2^x = 2 = 2¹ → x = 1`,
            `<strong>Oplossings:</strong> ${gr('x = 0')} of ${gr('x = 1')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om eksponensiële vergelykings op te los deur albei kante met dieselfde grondtal te skryf, en deur vervanging wanneer die vergelyking kwadraties van vorm is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — QUADRATIC AND RATIONAL INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-rational-inequalities',
      title: 'Kwadratiese en Rasionale Ongelykhede',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn kwadratiese ongelykheid op te los, los ons eers die verwante kwadratiese vergelyking op om die ${bl('kritieke waardes')} te vind, en gebruik dan ʼn getallelyn of ${or('tekenanalise')} om te bepaal watter intervalle aan die ongelykheid voldoen. Die ${gr('finale oplossing')} is die versameling van alle x-waardes waarvoor die ongelykheid geld. Vir rasionale ongelykhede (breuke) moet ons ook oorweeg waar die noemer gelyk is aan nul, aangesien die uitdrukking daar onbepaald is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kritieke waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teken van elke interval')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale oplossing')}</span>` +
        `</div>` +

        // ── Steps ───────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ongelykhede op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind kritieke waardes')} — Los die verwante vergelyking op (vervang die ongelykheidsteken met =) om die x-waardes te vind waar die uitdrukking gelyk is aan nul. Vir rasionale ongelykhede, let ook op waar die noemer gelyk is aan nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Ontleed elke interval')} — Die kritieke waardes verdeel die getallelyn in gebiede. Kies ʼn toetspunt in elke gebied en bepaal die ${or('teken')} (positief of negatief) van die uitdrukking in daardie gebied.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die finale oplossing')} — Kies die gebiede waar die teken ooreenstem met die ongelykheid. Sluit die eindpunte in as ≤ of ≥ gebruik word; sluit hulle uit as &lt; of &gt; gebruik word. Sluit altyd waardes uit wat die noemer nul maak.</p>` +
        `</div>` +

        `</div>` +

        // ── Rational inequalities warning ────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Belangrik: rasionale ongelykhede</p>` +
        `<p style="margin:0;color:#7c2d12;">Wanneer die ongelykheid ʼn breuk bevat, sluit die x-waarde in wat die <strong>noemer nul</strong> maak as ʼn kritieke waarde. Hierdie waarde word <strong>altyd uitgesluit</strong> van die oplossing — selfs wanneer die ongelykheid ≤ of ≥ gebruik — omdat die uitdrukking daar onbepaald is.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenanalise op ʼn getallelyn</p>` +
        `<p style="margin:0;color:#1e3a8a;">Trek ʼn getallelyn, merk die ${bl('kritieke waardes')}, en toets een punt in elke gebied. Die ${or('teken')} wissel gewoonlik tussen gebiede vir kwadratiese en rasionale uitdrukkings — maar verifieer altyd deur substitusie. Identifiseer die gebiede wat aan die ongelykheid voldoen en skryf die ${gr('oplossing')} in ongelykheids- of intervalnotasie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x² − 5x + 6 > 0.',
          answer: `${gr('x < 2 of x > 3')}`,
          steps: [
            `Los die verwante vergelyking op: x² − 5x + 6 = 0. Faktoriseer: (x − 2)(x − 3) = 0.<br>${bl('Kritieke waardes:')} x = ${bl('2')} of x = ${bl('3')}`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; 2, &nbsp;2 &lt; x &lt; 3, &nbsp;x &gt; 3.`,
            `${or('Toets elke interval:')}<br>• x &lt; 2: toets x = 0 → (0)² − 5(0) + 6 = 6 &gt; 0 &nbsp;${or('positief ✓')}<br>• 2 &lt; x &lt; 3: toets x = 2,5 → (2,5)² − 5(2,5) + 6 = −0,25 &lt; 0 &nbsp;${or('negatief')}<br>• x &gt; 3: toets x = 4 → (4)² − 5(4) + 6 = 2 &gt; 0 &nbsp;${or('positief ✓')}`,
            `Ons benodig die uitdrukking &gt; 0. Die ongelykheid is streng, dus word die eindpunte x = 2 en x = 3 uitgesluit.<br><strong>Oplossing:</strong> ${gr('x < 2 of x > 3')}`,
          ],
        },
        {
          question: 'Los op: x² − 9 ≤ 0.',
          answer: `${gr('−3 ≤ x ≤ 3')}`,
          steps: [
            `Los die verwante vergelyking op: x² − 9 = 0 → x² = 9.<br>${bl('Kritieke waardes:')} x = ${bl('−3')} of x = ${bl('3')}`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; −3, &nbsp;−3 ≤ x ≤ 3, &nbsp;x &gt; 3.`,
            `${or('Toets elke interval:')}<br>• x &lt; −3: toets x = −4 → (−4)² − 9 = 7 &gt; 0 &nbsp;${or('positief')}<br>• −3 &lt; x &lt; 3: toets x = 0 → (0)² − 9 = −9 &lt; 0 &nbsp;${or('negatief ✓')}<br>• x &gt; 3: toets x = 4 → (4)² − 9 = 7 &gt; 0 &nbsp;${or('positief')}`,
            `Ons benodig die uitdrukking ≤ 0. Die uitdrukking is gelyk aan nul by x = −3 en x = 3, dus word hierdie eindpunte ingesluit (≤).<br><strong>Oplossing:</strong> ${gr('−3 ≤ x ≤ 3')}`,
          ],
        },
        {
          question: 'Los op: (x − 2) / (x + 1) > 0.',
          answer: `${gr('x < −1 of x > 2')}`,
          steps: [
            `Vind ${bl('kritieke waardes:')} Die teller is gelyk aan nul wanneer x = ${bl('2')} (uitdrukking is nul). Die noemer is gelyk aan nul wanneer x = ${bl('−1')} (uitdrukking is onbepaald — altyd uitgesluit).`,
            `Die kritieke waardes verdeel die getallelyn in drie intervalle: x &lt; −1, &nbsp;−1 &lt; x &lt; 2, &nbsp;x &gt; 2.`,
            `${or('Toets elke interval:')}<br>• x &lt; −1: toets x = −2 → (−2 − 2)/(−2 + 1) = (−4)/(−1) = 4 &gt; 0 &nbsp;${or('positief ✓')}<br>• −1 &lt; x &lt; 2: toets x = 0 → (0 − 2)/(0 + 1) = −2 &lt; 0 &nbsp;${or('negatief')}<br>• x &gt; 2: toets x = 3 → (3 − 2)/(3 + 1) = ¼ &gt; 0 &nbsp;${or('positief ✓')}`,
            `Ons benodig die uitdrukking &gt; 0. Die ongelykheid is streng, dus word x = 2 uitgesluit. x = −1 word altyd uitgesluit (noemer nul).<br><strong>Oplossing:</strong> ${gr('x < −1 of x > 2')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om kwadratiese en rasionale ongelykhede op te los deur kritieke waardes en tekenanalise op ʼn getallelyn te gebruik',

      diagramPlaceholder:
        'Getallelyndiagram wat kritieke waardes in blou toon, die teken van die uitdrukking in elke interval in oranje, en die finale oplossingsintervalle in groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="150" y="14" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">x² − 5x + 6 &gt; 0</text>` +
        `<text x="86" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<text x="166" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">−</text>` +
        `<text x="227" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">+</text>` +
        `<polygon points="15,40 25,35 25,45" fill="#16a34a"/>` +
        `<line x1="25" y1="40" x2="148" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<line x1="184" y1="40" x2="271" y2="40" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>` +
        `<polygon points="281,40 271,35 271,45" fill="#16a34a"/>` +
        `<polygon points="15,55 25,50 25,60" fill="#0f1f3d"/>` +
        `<line x1="25" y1="55" x2="271" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="281,55 271,50 271,60" fill="#0f1f3d"/>` +
        `<line x1="40" y1="50" x2="40" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="76" y1="50" x2="76" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="112" y1="50" x2="112" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="220" y1="50" x2="220" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<line x1="256" y1="50" x2="256" y2="60" stroke="#9ca3af" stroke-width="1.2"/>` +
        `<circle cx="148" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="184" cy="55" r="5" fill="white" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="40" y="75" text-anchor="middle" font-size="11" fill="#6b7280">−1</text>` +
        `<text x="76" y="75" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="112" y="75" text-anchor="middle" font-size="11" fill="#6b7280">1</text>` +
        `<text x="148" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="184" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="220" y="75" text-anchor="middle" font-size="11" fill="#6b7280">4</text>` +
        `<text x="256" y="75" text-anchor="middle" font-size="11" fill="#6b7280">5</text>` +
        `<text x="150" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">Oplossing: x &lt; 2 of x &gt; 3</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING SYSTEMS WITH ONE LINEAR AND ONE QUADRATIC EQUATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-quadratic-systems',
      title: 'Stelsels met Een Lineêre en Een Kwadratiese Vergelyking Oplos',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons twee vergelykings gelyktydig oplos waar een ${bl('lineêr')} en die ander ${or('kwadraties')} is, gebruik ons substitusie: los die ${bl('lineêre vergelyking')} op vir een veranderlike, vervang dit in die ${or('kwadratiese vergelyking')}, en los dan die ${gr('gevolglike kwadratiese vergelyking')} op. Dit kan algebraïes gedoen word, of grafies geverifieer word deur te vind waar die lyn die parabool sny.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lineêre vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadratiese vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('substitusieresultaat')}</span>` +
        `</div>` +

        // ── Substitution steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe vir die substitusiemetode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Los die lineêre vergelyking op')} vir een veranderlike — druk gewoonlik y in terme van x uit die lineêre vergelyking uit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang die uitdrukking van stap 1 in die ${or('kwadratiese vergelyking')} om een veranderlike te elimineer, wat ʼn enkele vergelyking in x gee.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Los die ${gr('gevolglike kwadratiese vergelyking')} op deur enige geskikte metode — faktorisering, volledigmaking van die kwadraat, of die kwadratiese formule.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vervang terug</strong> — vervang elke x-waarde terug in die ${bl('lineêre vergelyking')} om die ooreenstemmende y-waarde te vind, en skryf dan jou antwoord as koördinaatpare.</p>` +
        `</div>` +

        `</div>` +

        // ── Graphical interpretation ──────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Grafiese interpretasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die oplossings verteenwoordig die <strong>snypunte</strong> van die ${bl('reguit lyn')} en die ${or('parabool')} op die Cartesiese vlak. ʼn Stelsel kan 0, 1, of 2 oplossings hê, wat ooreenstem met die lyn wat die parabool by 0, 1, of 2 punte sny. Die diskriminant van die gevolglike kwadratiese vergelyking wys jou hoeveel snypunte daar is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los gelyktydig op: y = x + 1 en y = x² − x − 1.',
          answer: `(${gr('1 + √3')} ; ${gr('2 + √3')}) en (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          steps: [
            `Identifiseer die vergelykings: ${bl('lineêr:')} y = x + 1 &nbsp; en &nbsp; ${or('kwadraties:')} y = x² − x − 1.`,
            `${gr('Vervang')} die lineêre uitdrukking in die kwadratiese vergelyking:<br>x + 1 = x² − x − 1`,
            `Herrangskik: ${gr('x² − 2x − 2 = 0')}`,
            `Los op deur die kwadratiese formule: a = 1, b = −2, c = −2.<br>x = (2 ± √(4 + 8)) / 2 = (2 ± √12) / 2 = 1 ± √3`,
            `Vind die ooreenstemmende y-waardes deur ${bl('y = x + 1')} te gebruik:<br>Wanneer x = 1 + √3: y = (1 + √3) + 1 = 2 + √3<br>Wanneer x = 1 − √3: y = (1 − √3) + 1 = 2 − √3`,
            `<strong>Oplossings:</strong> (${gr('1 + √3')} ; ${gr('2 + √3')}) en (${gr('1 − √3')} ; ${gr('2 − √3')})`,
          ],
        },
        {
          question: 'Sipho los gelyktydig op: y = 2x − 3 en y = x² − 4x + 1.',
          answer: `(${gr('3 + √5')} ; ${gr('3 + 2√5')}) en (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          steps: [
            `Identifiseer die vergelykings: ${bl('lineêr:')} y = 2x − 3 &nbsp; en &nbsp; ${or('kwadraties:')} y = x² − 4x + 1.`,
            `${gr('Vervang')} die lineêre uitdrukking in die kwadratiese vergelyking:<br>2x − 3 = x² − 4x + 1`,
            `Herrangskik: ${gr('x² − 6x + 4 = 0')}`,
            `Los op deur die kwadratiese formule: a = 1, b = −6, c = 4.<br>x = (6 ± √(36 − 16)) / 2 = (6 ± √20) / 2 = 3 ± √5`,
            `Vind die ooreenstemmende y-waardes deur ${bl('y = 2x − 3')} te gebruik:<br>Wanneer x = 3 + √5: y = 2(3 + √5) − 3 = 6 + 2√5 − 3 = 3 + 2√5<br>Wanneer x = 3 − √5: y = 2(3 − √5) − 3 = 6 − 2√5 − 3 = 3 − 2√5`,
            `<strong>Oplossings:</strong> (${gr('3 + √5')} ; ${gr('3 + 2√5')}) en (${gr('3 − √5')} ; ${gr('3 − 2√5')})`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn stelsel van een lineêre en een kwadratiese vergelyking gelyktydig op te los deur die substitusiemetode te gebruik',

      diagramPlaceholder:
        'Grafiek wat ʼn reguit lyn in blou toon wat ʼn parabool in oranje by twee punte sny, met die snypuntkoördinate in groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="5" y1="150" x2="230" y2="150" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="238,150 228,145 228,155" fill="#0f1f3d"/>` +
        `<line x1="70" y1="175" x2="70" y2="20" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="70,10 65,20 75,20" fill="#0f1f3d"/>` +
        `<text x="230" y="163" text-anchor="middle" font-size="10" fill="#0f1f3d">x</text>` +
        `<text x="76" y="16" font-size="10" fill="#0f1f3d">y</text>` +
        `<polyline points="10,121 25,134 40,143 55,148 70,150 85,148 100,143 115,134 130,121 145,105 160,85" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<line x1="0" y1="137" x2="175" y2="106" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="24" cy="133" r="4" fill="#16a34a"/>` +
        `<circle cx="138" cy="113" r="4" fill="#16a34a"/>` +
        `<text x="12" y="126" font-size="10" font-weight="700" fill="#16a34a">A</text>` +
        `<text x="144" y="106" font-size="10" font-weight="700" fill="#16a34a">B</text>` +
        `<text x="163" y="78" font-size="9" font-weight="700" fill="#ea580c">y=ax²+bx+c</text>` +
        `<text x="178" y="103" font-size="9" font-weight="700" fill="#2563eb">y=mx+c</text>` +
        `<text x="120" y="184" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">2 snypunte = 2 oplossings</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x² − 9x + 20 = 0 deur faktorisering.',
      checkMode: 'auto',
      options: ['x = 4 of x = 5', 'x = −4 of x = −5', 'x = 2 of x = 10', 'x = −2 of x = −10'],
      correctIndex: 0,
      explanation: 'Vind twee getalle wat vermenigvuldig tot 20 en optel tot −9: dit is −4 en −5, dus (x − 4)(x − 5) = 0, wat x = 4 of x = 5 gee. Deur die tekens om te swaai wanneer elke faktor opgelos word, kry ʼn mens x = −4 of x = −5; die faktorpaar 2 × 10 = 20 voldoen aan die produk maar nie aan die som nie (2 + 10 = 12, nie −9 nie).',
    },

    // ── Q2 Medium — completing the square ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² + 4x − 1 = 0 deur die vierkant volledig te maak.',
      checkMode: 'auto',
      options: ['x = −1 of x = −3', 'x = −2 + √5 of x = −2 − √5', 'x = 2 + √5 of x = 2 − √5', 'x = −4 + √5 of x = −4 − √5'],
      correctIndex: 1,
      explanation: 'x² + 4x = 1. Die helfte van 4 is 2, dus (x + 2)² − 4 = 1, wat (x + 2)² = 5 gee, dus x = −2 ± √5. As ʼn mens vergeet om die 4 terug te tel voordat vierkantswortels getrek word, kry ʼn mens x = −1 of x = −3; die verkeerde teken in die hakie gee x = 2 ± √5; die gebruik van b self in plaas van die helfte van b gee x = −4 ± √5.',
    },

    // ── Q3 Hard — quadratic formula with full discriminant ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: 3x² + 2x − 5 = 0 deur die kwadratiese formule te gebruik, en toon die volledige diskriminantberekening.',
      checkMode: 'auto',
      options: ['x = 5/3 of x = −1', 'x = 1 of x = −5/3', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 of x = −10/3'],
      correctIndex: 1,
      explanation: 'a = 3, b = 2, c = −5. Diskriminant = b² − 4ac = 4 − 4(3)(−5) = 4 + 60 = 64. x = (−2 ± 8) / 6, wat x = 1 of x = −5/3 gee. Deur +b in plaas van −b in die teller te gebruik, kry ʼn mens x = 5/3 of x = −1; deur die diskriminant verkeerdelik as b² + 4ac te bereken, kry ʼn mens ʼn negatiewe waarde; deur deur a in plaas van 2a te deel, kry ʼn mens x = 2 of x = −10/3.',
    },

    // ── Q4 Easy — quadratic inequality ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x² − 4 > 0.',
      checkMode: 'auto',
      options: ['−2 < x < 2', 'x > 2', 'x ≤ −2 of x ≥ 2', 'x < −2 of x > 2'],
      correctIndex: 3,
      explanation: 'Kritieke waardes: x² − 4 = 0 → x = −2 of x = 2. Deur intervalle te toets, blyk dit dat die uitdrukking positief is buite die wortels. Aangesien die ongelykheid streng is (>), word die eindpunte uitgesluit. Oplossing: x < −2 of x > 2. Om die negatiewe/binneste interval te kies, die linkertak weg te laat, of die eindpunte verkeerdelik in te sluit, is algemene foute.',
    },

    // ── Q5 Medium — quadratic inequality ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² − 7x + 10 ≤ 0.',
      checkMode: 'auto',
      options: ['2 ≤ x ≤ 5', 'x ≤ 2 of x ≥ 5', '2 < x < 5', '−5 ≤ x ≤ −2'],
      correctIndex: 0,
      explanation: 'Kritieke waardes: (x − 2)(x − 5) = 0 → x = 2 of x = 5. Aangesien die parabool na bo oopmaak, is die uitdrukking ≤ 0 tussen die wortels, met die eindpunte ingesluit omdat die ongelykheid ≤ is. Oplossing: 2 ≤ x ≤ 5. Om die buitenste interval te kies, die eindpunte weg te laat, of die verkeerde teken op die kritieke waardes te gebruik, is algemene foute.',
    },

    // ── Q6 Hard — incomplete inequality answer ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho los x² − 16 < 0 op en kry x < 4. Watter stelling evalueer sy antwoord korrek?',
      checkMode: 'auto',
      options: [
        'Hy is korrek — x < 4 is die volledige oplossing.',
        'Hy is verkeerd — die korrekte oplossing is −4 < x < 4, aangesien x² − 16 < 0 slegs tussen die wortels geld.',
        'Hy is verkeerd — die korrekte oplossing is x < −4 of x > 4.',
        'Hy is verkeerd — die korrekte oplossing is x ≤ 4.',
      ],
      correctIndex: 1,
      explanation: 'Die kritieke waardes is x = −4 en x = 4. Aangesien die parabool na bo oopmaak, geld x² − 16 < 0 slegs tussen die wortels (streng, aangesien <). Sipho het een grens gevind maar die ondergrens vergeet, dus is die volledige oplossing −4 < x < 4, nie net x < 4 nie.',
    },

    // ── Q7 Medium — rational inequality ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: (x − 3) / (x + 2) < 0.',
      checkMode: 'auto',
      options: ['x < −2 of x > 3', '−2 ≤ x < 3', '−2 < x < 3', '−3 < x < 2'],
      correctIndex: 2,
      explanation: 'Kritieke waardes: teller nul by x = 3; noemer nul by x = −2 (altyd uitgesluit). Deur intervalle te toets, blyk dit dat die uitdrukking negatief is tussen die kritieke waardes. Oplossing: −2 < x < 3. Om die buitenste intervalle te kies, x = −2 (waar die uitdrukking onbepaald is) verkeerdelik in te sluit, of die twee kritieke waardes om te ruil, is algemene foute.',
    },

    // ── Q8 Hard — excluded value in rational inequality ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato los (x + 1) / (x − 4) ≥ 0 op en sluit x = 4 by haar finale antwoord in. Watter stelling evalueer dit korrek?',
      checkMode: 'auto',
      options: [
        'Korrek — aangesien die ongelykheid "of gelyk aan" insluit, moet x = 4 ingesluit word.',
        'Verkeerd — x = −1 moet ook uitgesluit word, nie net x = 4 nie.',
        'Korrek, maar slegs as x beperk word tot positiewe waardes.',
        'Verkeerd — x = 4 maak die noemer nul, dus is die uitdrukking daar onbepaald en moet dit altyd uitgesluit word, ongeag die ongelykheidsteken.',
      ],
      correctIndex: 3,
      explanation: 'ʼn Rasionale uitdrukking is onbepaald waar die noemer nul is. Aangesien x = 4 (x − 4) = 0 maak, moet dit van die oplossingsversameling uitgesluit word, selfs al gebruik die ongelykheid ≥. Slegs x = −1 (waar die teller nul is) mag ingesluit word, aangesien die uitdrukking daar presies 0 is.',
    },

    // ── Q9 Hard — quadratic inequality with sign analysis ────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² − 2x − 8 ≥ 0.',
      checkMode: 'auto',
      options: ['x ≤ −2 of x ≥ 4', '−2 ≤ x ≤ 4', 'x < −2 of x > 4', 'x ≤ 2 of x ≥ −4'],
      correctIndex: 0,
      explanation: 'Los x² − 2x − 8 = 0 op: (x − 4)(x + 2) = 0, dus x = 4 of x = −2. Aangesien die parabool na bo oopmaak, is die uitdrukking ≥ 0 buite die wortels, met die eindpunte ingesluit omdat die ongelykheid ≥ is. Oplossing: x ≤ −2 of x ≥ 4. Om die interval tussen die wortels te kies, die eindpunte verkeerdelik uit te sluit, of die tekens van die kritieke waardes om te ruil, is algemene foute.',
    },

    // ── Q10 Medium — simultaneous linear and quadratic ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Los gelyktydig op: y = x + 2 en y = x² − 4.',
      checkMode: 'auto',
      options: ['(2, 4) en (−3, −1)', '(3, 5) en (−2, 0)', '(3, 3) en (−2, −2)', '(3, 5) en (−2, −8)'],
      correctIndex: 1,
      explanation: 'Vervang y = x + 2 in y = x² − 4: x + 2 = x² − 4, dus x² − x − 6 = 0. Faktoriseer: (x − 3)(x + 2) = 0, wat x = 3 of x = −2 gee. Ooreenstemmende y-waardes uit y = x + 2: y = 5 of y = 0. Oplossings: (3, 5) en (−2, 0). ʼn Tekenfout by die herrangskikking kan x² + x − 6 = 0 gee; deur te vergeet om 2 by te tel wanneer y bereken word, kry ʼn mens (3, 3) en (−2, −2); deur (−2)² verkeerdelik as −4 te kwadreer, kry ʼn mens (3, 5) en (−2, −8).',
    },

    // ── Q11 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo los y = 2x − 1 en y = x² − 3x + 2 gelyktydig op. Watter paar oplossingspunte is korrek?',
      checkMode: 'auto',
      options: [
        '((−5 + √13)/2 ; −6 + √13) en ((−5 − √13)/2 ; −6 − √13)',
        '((5 + √37)/2 ; 4 + √37) en ((5 − √37)/2 ; 4 − √37)',
        '((5 + √13)/2 ; 4 + √13) en ((5 − √13)/2 ; 4 − √13)',
        '((5 + √13)/2 ; (3 + √13)/2) en ((5 − √13)/2 ; (3 − √13)/2)',
      ],
      correctIndex: 2,
      explanation: 'Vervang: 2x − 1 = x² − 3x + 2, wat x² − 5x + 3 = 0 gee. Deur die kwadratiese formule te gebruik: x = (5 ± √13)/2. Ooreenstemmende y = 2x − 1 = 4 ± √13. Oplossingspunte: ((5+√13)/2 ; 4+√13) en ((5−√13)/2 ; 4−√13). ʼn Tekenfout by die herrangskikking kan x² + 5x + 3 = 0 gee; deur die diskriminant verkeerdelik as b² + 4ac te bereken, kry ʼn mens √37 in plaas van √13; deur te vergeet om x te verdubbel wanneer dit terug in y = 2x − 1 vervang word, halveer die y-waardes.',
    },

    // ── Q12 Hard — simultaneous equations, surd solutions ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los gelyktydig op: y = −x + 5 en y = x² − 2x − 3.',
      checkMode: 'auto',
      options: [
        '((−1 + √33)/2 ; (11 − √33)/2) en ((−1 − √33)/2 ; (11 + √33)/2)',
        'Geen reële oplossings nie — die diskriminant is negatief',
        '((1 + √33)/2 ; (11 + √33)/2) en ((1 − √33)/2 ; (11 − √33)/2)',
        '((1 + √33)/2 ; (9 − √33)/2) en ((1 − √33)/2 ; (9 + √33)/2)',
      ],
      correctIndex: 3,
      explanation: 'Vervang −x + 5 = x² − 2x − 3, wat x² − x − 8 = 0 gee. Deur die kwadratiese formule te gebruik: x = (1 ± √33)/2. Ooreenstemmende y = −x + 5 gee die gepaarde waardes: ((1+√33)/2 ; (9−√33)/2) en ((1−√33)/2 ; (9+√33)/2). ʼn Tekenfout by die herrangskikking kan x² + x − 8 = 0 gee; deur die verkeerde teken vir c te gebruik, word die diskriminant negatief met geen reële oplossing nie; en deur die negatiewe teken in y = −x + 5 te vergeet, verskuif elke y-waarde.',
    },

    // ── Q13 Medium — quadratic formula ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x² + x − 12 = 0 deur die kwadratiese formule te gebruik.',
      checkMode: 'auto',
      options: ['x = 3 of x = −4', 'x = 4 of x = −3', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 6 of x = −8'],
      correctIndex: 0,
      explanation: 'a = 1, b = 1, c = −12. Diskriminant = 1 + 48 = 49. x = (−1 ± 7) / 2, wat x = 3 of x = −4 gee. ʼn Tekenfout deur +b in plaas van −b te gebruik, gee x = 4 of x = −3; deur die diskriminant verkeerdelik as b² + 4ac te bereken, kry ʼn mens ʼn negatiewe waarde; deur te vergeet om deur 2a te deel (deur 1 te deel), verdubbel albei wortels.',
    },

    // ── Q14 Hard — discriminant and nature of roots ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê elke kwadratiese vergelyking het twee reële oplossings. Watter stelling evalueer haar bewering korrek?',
      checkMode: 'auto',
      options: [
        'Ja — die kwadratiese formule lewer altyd twee waardes van x.',
        'Nee — die aantal reële oplossings hang af van die diskriminant: negatief gee geen, nul gee een herhaalde wortel, en slegs ʼn positiewe diskriminant gee twee verskillende reële wortels.',
        'Nee — elke kwadratiese vergelyking het presies een reële oplossing, gevind deur die draaipunt te gebruik.',
        'Nee — kwadratiese vergelykings met ʼn negatiewe konstante term c het altyd twee reële oplossings, maar ʼn positiewe c nooit nie.',
      ],
      correctIndex: 1,
      explanation: 'Die diskriminant b² − 4ac bepaal die aantal reële wortels: negatief beteken geen reële oplossings nie, nul beteken een herhaalde reële oplossing, en positief beteken twee verskillende reële oplossings. Amahle is verkeerd om aan te neem dat daar altyd twee is.',
    },

    // ── Q15 Hard — inequality with repeated root ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² − 6x + 9 ≤ 0, en verduidelik wat die diskriminant ons vertel voordat jy oplos.',
      checkMode: 'auto',
      options: [
        'Geen oplossing nie — ʼn nul-diskriminant beteken die ongelykheid kan nooit voldoen word nie.',
        'Alle reële x, aangesien (x − 3)² altyd ≥ 0 is.',
        'x = 3 alleenlik, aangesien (x − 3)² altyd ≥ 0 is, en dit slegs 0 is (wat aan ≤ 0 voldoen) wanneer x = 3.',
        '3 ≤ x ≤ 9',
      ],
      correctIndex: 2,
      explanation: 'Diskriminant = 36 − 36 = 0, dus is daar een herhaalde wortel by x = 3, wat beteken x² − 6x + 9 = (x − 3)². Aangesien ʼn volkome vierkant altyd ≥ 0 is, word die ongelykheid (x − 3)² ≤ 0 slegs voldoen waar dit presies 0 is — by x = 3.',
    },

    // ── Q16 Hard — rational inequality requiring rearrangement ───────────────
    {
      difficulty: 'Hard',
      question: 'Los op: (2x − 1) / (x + 3) ≤ 2, en wees versigtig met die rigting van die ongelykheid wanneer jy vermenigvuldig.',
      checkMode: 'auto',
      options: [
        'Alle reële x behalwe x = −3 (gevind deur albei kante direk met (x + 3) te vermenigvuldig)',
        'x < −3',
        'x ≥ −3',
        'x > −3',
      ],
      correctIndex: 3,
      explanation: 'Om eers te herrangskik, vermy die gevaar om met ʼn uitdrukking van onbekende teken te vermenigvuldig: (2x − 1)/(x + 3) − 2 ≤ 0 kombineer tot −7/(x + 3) ≤ 0. Aangesien die teller −7 altyd negatief is, is die breuk ≤ 0 presies wanneer die noemer positief is, dus x + 3 > 0, wat x > −3 gee. Om albei kante direk met (x + 3) te vermenigvuldig, sonder om die teken daarvan te ken, is ongeldig en lewer ʼn vals "altyd waar"-resultaat.',
    },

    // ── Q17 Hard — simultaneous linear and quadratic ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los gelyktydig op: y = 3x − 4 en y = 2x² − 6x − 9, en vind albei snypunte.',
      checkMode: 'auto',
      options: [
        'x = 5, y = 11 of x = −1/2, y = −5,5',
        'x = 1/2, y = −2,5 of x = −5, y = −19',
        'x = 5, y = 11 of x = 1/2, y = −2,5',
        'x = 5, y = 11 of x = −1/2, y = −4,5',
      ],
      correctIndex: 0,
      explanation: 'Vervang y = 3x − 4 in y = 2x² − 6x − 9: 3x − 4 = 2x² − 6x − 9, wat 2x² − 9x − 5 = 0 gee. Faktoriseer: (2x + 1)(x − 5) = 0, dus x = 5 of x = −1/2. Ooreenstemmende y-waardes uit y = 3x − 4: y = 11 of y = −5,5. ʼn Tekenfout by die herrangskikking kan die middelterm omswaai om 2x² + 9x − 5 = 0 te gee; deur die negatiewe teken op die breukwortel weg te laat, of deur 3(−1/2) − 4 verkeerd te bereken, is ander algemene foute.',
    },

    // ── Q18 Hard — nature of inequality solutions ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die oplossing van ʼn kwadratiese ongelykheid is altyd ʼn enkele deurlopende interval. Watter stelling is korrek?',
      checkMode: 'auto',
      options: [
        'Ja — kwadratiese ongelykhede lewer altyd een deurlopende interval, soos a < x < b.',
        'Nee — byvoorbeeld, x² − 4 > 0 gee twee afsonderlike intervalle, x < −2 of x > 2, eerder as een deurlopende interval. Of die oplossing een of twee intervalle is, hang af van die rigting van die parabool en die ongelykheidsteken.',
        'Nee — kwadratiese ongelykhede lewer altyd twee afsonderlike intervalle, nooit een nie.',
        'Ja, maar slegs wanneer die koëffisiënt van x² negatief is.',
      ],
      correctIndex: 1,
      explanation: 'Of ʼn kwadratiese ongelykheid een interval of twee afsonderlike intervalle gee, hang af van of die ongelykheid die gebied tussen die wortels vra (een interval, bv. x² − 4 < 0 gee −2 < x < 2) of buite die wortels (twee intervalle, bv. x² − 4 > 0 gee x < −2 of x > 2). Sipho is verkeerd om te beweer dit is altyd ʼn enkele interval.',
    },

    // ── Q19 Hard — boundary points of inequality ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² + 3x − 10 = 0 om die kritieke waardes te vind, en gee dan die volledige oplossingversameling van x² + 3x − 10 ≤ 0.',
      checkMode: 'auto',
      options: ['x ≤ −5 of x ≥ 2', '−5 < x < 2', '−5 ≤ x ≤ 2', '2 ≤ x ≤ 5'],
      correctIndex: 2,
      explanation: 'Faktoriseer: (x + 5)(x − 2) = 0, dus is die kritieke waardes x = −5 en x = 2. Aangesien die parabool na bo oopmaak, is die uitdrukking ≤ 0 tussen die wortels, met die eindpunte ingesluit omdat die ongelykheid ≤ is. Volledige oplossing: −5 ≤ x ≤ 2.',
    },

    // ── Q20 Hard — quadratic inequality in context ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Reghoekige tuin het lengte (x + 4) en breedte (x − 2), met ʼn oppervlakte groter as 35 m². Vind die moontlike reeks x-waardes, gegewe dat x > 2 sodat die afmetings sinvol is.',
      checkMode: 'auto',
      options: [
        'x < −1 − √44 of x > −1 + √44',
        'x > √43 (x ≈ 6,56 m)',
        'Geen reële oplossing nie — dus bestaan daar geen geldige reeks vir x nie.',
        'x > −1 + √44 (x ≈ 5,63 m)',
      ],
      correctIndex: 3,
      explanation: '(x + 4)(x − 2) > 35 brei uit na x² + 2x − 8 > 35, dus x² + 2x − 43 > 0. Deur die kwadratiese formule te gebruik: x = (−2 ± √176)/2 = −1 ± √44. Aangesien x > 2 vereis word sodat die afmetings sinvol is, moet die negatiewe tak (x < −1 − √44) verwerp word omdat dit buite die geldige gebied lê. Oplossing: x > −1 + √44 (ongeveer x > 5,63). Om die kruisterm by die uitbreiding te vergeet, of ʼn tekenfout in die diskriminant te maak, is algemene foute hier.',
    },

    // ── Q21 Hard — problem-solving: work backwards from equal-roots condition to find k ──
    {
      difficulty: 'Hard',
      question: 'Die vergelyking x² − kx + 9 = 0 het reële, gelyke wortels. Bepaal die waarde(s) van k.',
      checkMode: 'auto',
      options: ['k = 6 of k = −6', 'k = 3 of k = −3', 'k = 6 alleenlik', 'Geen reële waarde van k bestaan nie (k² = −36 het geen reële oplossing nie)'],
      correctIndex: 0,
      explanation: 'Vir reële, gelyke wortels moet die diskriminant nul wees: b² − 4ac = 0. Met a = 1, b = −k, c = 9: (−k)² − 4(1)(9) = 0, dus k² − 36 = 0, wat k = 6 of k = −6 gee. Deur die faktor 4 in 4ac te vergeet, kry ʼn mens k² − 9 = 0 (k = ±3 in plaas daarvan); deur die ± te vergeet, kry ʼn mens slegs een waarde; en deur die teken van c om te swaai, kry ʼn mens ʼn vergelyking met geen reële oplossing nie.',
    },

    // ── Q22 Hard — problem-solving: synthesise systems + discriminant to find range of k ──
    {
      difficulty: 'Hard',
      question: 'Vir watter waarde(s) van k sal die lyn y = x + k nie die parabool y = x² + 3x + 5 sny nie?',
      checkMode: 'auto',
      options: ['k > 4', 'k < 4', 'k > −4', 'k ≤ 4'],
      correctIndex: 1,
      explanation: 'Vervang die lyn in die parabool: x + k = x² + 3x + 5, wat x² + 2x + (5 − k) = 0 gee. Sodat die lyn en die parabool glad nie sny nie, moet hierdie vergelyking geen reële oplossings hê nie, dus moet die diskriminant negatief wees: 4 − 4(5 − k) < 0 → 4k − 16 < 0 → k < 4. ʼn Tekenfout by die verspreiding van die −4 kan die ongelykheid omswaai na k > −4; deur die rigting van die diskriminant om te keer, kry ʼn mens k > 4; en deur ≤ in plaas van < te gebruik, sluit ʼn mens verkeerdelik die raakgeval (presies een snypunt) in as "geen snyding nie".',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het vergelykings en ongelykhede volkome bemeester.' },
      { minPercent: 75, message: 'Baie goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou so aan, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + 2x − 8 = 0', checkMode: 'auto', options: ['x = 2 of x = −4', 'x = 4 of x = −2', 'x = 4 of x = −8', 'Geen reële oplossings nie — die diskriminant is negatief'], correctIndex: 0, explanation: 'a = 1, b = 2, c = −8. Diskriminant = 4 − 4(1)(−8) = 4 + 32 = 36. x = (−2 ± 6) / 2, wat x = 2 of x = −4 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 4 of x = −2; deur te vergeet om deur 2a te deel (deur a te deel), kry ʼn mens x = 4 of x = −8; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² + 3x − 5 = 0', checkMode: 'auto', options: ['x = 5/2 of x = −1', 'x = 1 of x = −5/2', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 of x = −5'], correctIndex: 1, explanation: 'a = 2, b = 3, c = −5. Diskriminant = 9 + 40 = 49. x = (−3 ± 7) / 4, wat x = 1 of x = −5/2 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 5/2 of x = −1; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur deur a in plaas van 2a te deel, kry ʼn mens x = 2 of x = −5.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 3x² − 2x − 8 = 0', checkMode: 'auto', options: ['x = 4/3 of x = −2', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 of x = −4/3', 'x = 4 of x = −8/3'], correctIndex: 2, explanation: 'a = 3, b = −2, c = −8. Diskriminant = 4 + 96 = 100. x = (2 ± 10) / 6, wat x = 2 of x = −4/3 gee. Deur die verkeerde teken vir b te gebruik, kry ʼn mens x = 4/3 of x = −2; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur deur a in plaas van 2a te deel, kry ʼn mens x = 4 of x = −8/3.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² − 4x − 3 = 0', checkMode: 'auto', options: ['x = −2 + √7 of x = −2 − √7', 'x = 3 of x = 1', 'x = 4 + 2√7 of x = 4 − 2√7', 'x = 2 + √7 of x = 2 − √7'], correctIndex: 3, explanation: 'a = 1, b = −4, c = −3. Diskriminant = 16 + 12 = 28. x = (4 ± √28) / 2 = (4 ± 2√7) / 2 = 2 ± √7. Deur die verkeerde teken vir b te gebruik, kry ʼn mens −2 ± √7; deur die diskriminant verkeerdelik as b² + 4ac = 4 te bereken, kry ʼn mens die netjies-lykende maar verkeerde x = 3 of x = 1; deur te vergeet om die 2√7-term deur 2 te deel, bly 4 ± 2√7 oor.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² + 4x + 1 = 0', checkMode: 'auto', options: ['x = −2 + √3 of x = −2 − √3', 'x = 2 + √3 of x = 2 − √3', 'x = −2 + √5 of x = −2 − √5', 'x = −4 + 2√3 of x = −4 − 2√3'], correctIndex: 0, explanation: 'a = 1, b = 4, c = 1. Diskriminant = 16 − 4(1)(1) = 12, wat positief is maar nie ʼn volkome vierkant nie, dus in wortelvorm. x = (−4 ± √12)/2 = (−4 ± 2√3)/2 = −2 ± √3. Deur die verkeerde teken vir b te gebruik, kry ʼn mens 2 ± √3; deur die diskriminant verkeerdelik as b² + 4ac = 20 te bereken, kry ʼn mens −2 ± √5; deur te vergeet om die wortelterm te halveer, bly −4 ± 2√3 oor.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(2x + 3) = x', checkMode: 'auto', options: ['x = 3 of x = −1', 'x = 3', 'x = −3', 'x = −1'], correctIndex: 1, explanation: 'Kwadreer albei kante: 2x + 3 = x². Herrangskik: x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0, dus x = 3 of x = −1. Toets: x = 3 gee √9 = 3 ✓ geldig; x = −1 gee √1 = 1 ≠ −1 ✗ buitenstaander — verwerp. Deur te vergeet om vir buitenstaander-wortels te toets, kry ʼn mens albei waardes; deur glad nie te kwadreer nie (asof dit lineêr is), kry ʼn mens x = −3.' },
        { difficulty: 'Medium', question: 'Los op vir x: √(3x + 4) = x, en toets vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 4 of x = −1', 'x = −2', 'x = 4', 'x = −1'], correctIndex: 2, explanation: 'Kwadreer albei kante: 3x + 4 = x². Herrangskik: x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0, dus x = 4 of x = −1. Toets: x = 4 gee √16 = 4 ✓ geldig; x = −1 gee √1 = 1 ≠ −1 ✗ buitenstaander — verwerp. Deur te vergeet om vir buitenstaander-wortels te toets, hou ʼn mens albei waardes; deur glad nie te kwadreer nie, kry ʼn mens x = −2; deur slegs die buitenstaander-wortel te behou, kry ʼn mens x = −1.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 7) = x − 5, en toets versigtig vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 9 of x = 2', 'x = 2', 'Geen reële oplossings nie (deur (x − 5)² verkeerdelik as x² + 25 uit te brei)', 'x = 9'], correctIndex: 3, explanation: 'Kwadreer albei kante: x + 7 = (x − 5)² = x² − 10x + 25. Herrangskik: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0, dus x = 9 of x = 2. Toets: x = 9 gee √16 = 4 = 9 − 5 ✓ geldig; x = 2 gee √9 = 3 maar 2 − 5 = −3 ✗ buitenstaander — verwerp (ʼn vierkantswortel kan nooit gelyk wees aan ʼn negatiewe getal nie). Deur nie vir albei wortels te toets nie, hou ʼn mens die buitenstaander x = 2; deur (x − 5)² verkeerdelik as x² + 25 uit te brei, kry ʼn mens glad geen reële oplossing nie.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 2^x = 32', checkMode: 'auto', options: ['x = 5', 'x = 6', 'x = 4', 'x = 16'], correctIndex: 0, explanation: 'Skryf 32 as ʼn mag van 2: 32 = 2⁵. Dus 2^x = 2⁵, wat beteken x = 5. Deur die mag van 2 verkeerd te onthou (te dink 2⁶ = 32 of 2⁴ = 32), kry ʼn mens x = 6 of x = 4; deur 32 deur 2 te deel in plaas van na dieselfde grondtal om te skakel, kry ʼn mens x = 16.' },
        { difficulty: 'Medium', question: 'Los op vir x: 2^(x+1) = 64', checkMode: 'auto', options: ['x = 6', 'x = 5', 'x = 4', 'x = 7'], correctIndex: 1, explanation: 'Skryf 64 as ʼn mag van 2: 64 = 2⁶. Dus 2^(x+1) = 2⁶, wat beteken x + 1 = 6, dus x = 5. Deur te vergeet om 1 terug te trek nadat die eksponente gelykgestel is, kry ʼn mens x = 6; deur 64 verkeerd as 2⁵ te onthou, kry ʼn mens x = 4; deur op te tel in plaas van af te trek, kry ʼn mens x = 7.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2^(2x) − 5 · 2^x + 4 = 0', checkMode: 'auto', options: ['x = 1 (herhaalde wortel, deur y² − 5y + 4 verkeerdelik as (y − 2)² te faktoriseer)', 'y = 1 of y = 4 (vergeet om terug na x om te skakel)', 'x = 0 of x = 2', 'x = 0 alleenlik (deur y = 4 per ongeluk te verwerp)'], correctIndex: 2, explanation: 'Laat y = 2^x, dus word die vergelyking y² − 5y + 4 = 0. Faktoriseer: (y − 1)(y − 4) = 0, dus y = 1 of y = 4. Vervang terug: 2^x = 1 → x = 0, en 2^x = 4 → x = 2. Deur die kwadratiese verkeerdelik as ʼn volkome vierkant te faktoriseer, kry ʼn mens ʼn herhaalde wortel; deur die finale vervangingstap te vergeet, bly die antwoord in terme van y; deur een van die geldige y-waardes per ongeluk te verwerp, verloor ʼn mens ʼn oplossing.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 25 ≥ 0', checkMode: 'auto', options: ['−5 ≤ x ≤ 5', 'x < −5 of x > 5', 'x ≥ 5 alleenlik', 'x ≤ −5 of x ≥ 5'], correctIndex: 3, explanation: 'Kritieke waardes: x² − 25 = 0 → x = −5 of x = 5. Aangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels, met die eindpunte ingesluit. Oplossing: x ≤ −5 of x ≥ 5. Om die interval tussen die wortels te kies, die eindpunte uit te sluit, of die negatiewe tak weg te laat, is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − x − 12 ≤ 0', checkMode: 'auto', options: ['−3 ≤ x ≤ 4', 'x ≤ −3 of x ≥ 4', '−3 < x < 4', '−4 ≤ x ≤ 3'], correctIndex: 0, explanation: 'Kritieke waardes: (x − 4)(x + 3) = 0 → x = 4 of x = −3. Aangesien die parabool opwaarts oopmaak, is die uitdrukking ≤ 0 tussen die wortels, met die eindpunte ingesluit. Oplossing: −3 ≤ x ≤ 4. Om die buitenste interval te kies, die eindpunte weg te laat, of die kritieke waardes om te ruil, is algemene foute.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x² − x − 6 > 0', checkMode: 'auto', options: ['−3/2 < x < 2', 'x < −3/2 of x > 2', 'x ≤ −3/2 of x ≥ 2', 'x < −2 of x > 3/2'], correctIndex: 1, explanation: 'Faktoriseer: (2x + 3)(x − 2) > 0. Kritieke waardes: x = −3/2 of x = 2. Aangesien die parabool opwaarts oopmaak, is die uitdrukking > 0 buite die wortels, met die eindpunte uitgesluit. Oplossing: x < −3/2 of x > 2. Om die interval tussen die wortels te kies, die eindpunte verkeerdelik in te sluit, of die twee kritieke waardes om te ruil, is algemene foute.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 2x − 1 en y = x² − 4', checkMode: 'auto', options: ['(−3, −7) en (1, 1)', '(3, 6) en (−1, −2)', '(3, 5) en (−1, −3)', 'x = 3 of x = −1 (y-waardes nie gevind nie)'], correctIndex: 2, explanation: 'Vervang y = 2x − 1 in y = x² − 4: 2x − 1 = x² − 4, wat x² − 2x − 3 = 0 gee. Faktoriseer: (x − 3)(x + 1) = 0, dus x = 3 of x = −1. Ooreenstemmende y = 2x − 1 gee y = 5 of y = −3. ʼn Tekenfout by die herrangskikking kan x² + 2x − 3 = 0 gee; deur te vergeet om 1 af te trek wanneer y bereken word, kry ʼn mens (3, 6) en (−1, −2); deur op te hou nadat x gevind is, bly die antwoord onvolledig.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 3 en y = x² − x − 2', checkMode: 'auto', options: ['(−1 + √6 ; 2 + √6) en (−1 − √6 ; 2 − √6)', 'Geen reële oplossing nie — die diskriminant is negatief', '(1 + √6 ; 1 + √6) en (1 − √6 ; 1 − √6)', '(1 + √6 ; 4 + √6) en (1 − √6 ; 4 − √6)'], correctIndex: 3, explanation: 'Vervang: x + 3 = x² − x − 2, wat x² − 2x − 5 = 0 gee. Deur die kwadratiese formule te gebruik: x = (2 ± √24)/2 = 1 ± √6. Ooreenstemmende y = x + 3 gee y = 4 ± √6. ʼn Tekenfout by die herrangskikking kan x² + 2x − 5 = 0 gee; ʼn foutiewe diskriminant lewer ʼn vals "geen reële oplossing nie"; deur te vergeet om 3 by te tel wanneer y bereken word, bly y gelyk aan x self.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = x + 6 en y = x² + 2x', checkMode: 'auto', options: ['(3, 9) en (−2, 4)', '(−3, −3) en (2, 2)', 'x = 2, y = 8 alleenlik', '(−3, 3) en (2, 8)'], correctIndex: 3, explanation: 'Vervang y = x + 6 in y = x² + 2x: x + 6 = x² + 2x, wat x² + x − 6 = 0 gee. Faktoriseer: (x + 3)(x − 2) = 0, dus x = −3 of x = 2. Ooreenstemmende y = x + 6 gee y = 3 of y = 8. ʼn Tekenfout by die herrangskikking kan x² − x − 6 = 0 gee; deur te vergeet om 6 by te tel wanneer y bereken word, kry ʼn mens (−3, −3) en (2, 2); deur slegs een snypunt te rapporteer, mis ʼn mens dat ʼn lyn ʼn parabool twee keer kan sny.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Thabo los √(x − 2) = −3 op en sê daar is geen oplossing nie. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Nee — hy is verkeerd; deur albei kante te kwadreer, kry ʼn mens x − 2 = 9, dus is x = 11 ʼn geldige oplossing.', 'Ja, hy is korrek — die vierkantswortelsimbool dui altyd die nie-negatiewe wortel aan, dus kan √(x − 2) nooit gelyk wees aan −3 nie, wat beteken die vergelyking het werklik geen oplossing nie.', 'Nee — die vergelyking het eintlik twee oplossings, x = 11 en x = −7.', 'Ja, maar slegs omdat die uitdrukking binne die wortel x − 2 is eerder as x + 2.'], correctIndex: 1, explanation: 'Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 2) nooit gelyk wees aan ʼn negatiewe getal soos −3 nie. Deur albei kante te kwadreer, kry ʼn mens x − 2 = 9, dus x = 11, maar vervanging terug gee √9 = 3, nie −3 nie — wat bevestig dat dit ʼn buitenstaander-oplossing is en die vergelyking werklik geen oplossing het nie. Thabo is korrek.' },
        { difficulty: 'Hard', question: 'Amahle sê die vergelyking 3^(2x) − 4 · 3^x + 3 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wat is die korrekte oplossing, gevind deur die vervanging y = 3^x te gebruik?', checkMode: 'auto', options: ['x = 0 alleenlik (y = 3 per ongeluk verwerp)', 'Geen oplossing nie — 3^x kan nooit negatief wees nie', 'x = 0 of x = 1', 'y = 1 of y = 3 (die vervanging is nooit terug na x omgeskakel nie)'], correctIndex: 2, explanation: 'Amahle is verkeerd — die vervanging y = 3^x verander die vergelyking in ʼn gewone kwadratiese vergelyking: y² − 4y + 3 = 0. Faktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3. Albei is geldig aangesien 3^x altyd positief is. Vervang terug: 3^x = 1 → x = 0, en 3^x = 3 → x = 1.' },
        { difficulty: 'Hard', question: 'Sipho los x² − x − 12 ≤ 0 op en skryf sy finale antwoord as x ≤ 4. Watter stelling evalueer sy antwoord korrek, en wat is die korrekte oplossing?', checkMode: 'auto', options: ['Korrek — x ≤ 4 is die volledige oplossing.', 'Verkeerd — die korrekte oplossing is x ≤ −3.', 'Verkeerd — die korrekte oplossing is x < −3 of x > 4.', 'Verkeerd — hy mis die ondergrens; die kritieke waardes is x = 4 en x = −3, en aangesien die parabool opwaarts oopmaak is die uitdrukking slegs ≤ 0 tussen hulle, dus is die korrekte oplossing −3 ≤ x ≤ 4.'], correctIndex: 3, explanation: 'Die kritieke waardes is x = 4 en x = −3 (uit (x − 4)(x + 3) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels, nie net onder een van hulle nie. Sipho het een grens gevind maar die ondergrens weggelaat, dus is die korrekte, volledige oplossing −3 ≤ x ≤ 4.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + 3x − 10 = 0', checkMode: 'auto', options: ['x = 2 of x = −5', 'x = 5 of x = −2', 'x = 4 of x = −10', 'Geen reële oplossings nie — die diskriminant is negatief'], correctIndex: 0, explanation: 'a = 1, b = 3, c = −10. Diskriminant = 9 + 40 = 49. x = (−3 ± 7) / 2, wat x = 2 of x = −5 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 5 of x = −2; deur deur a in plaas van 2a te deel, kry ʼn mens x = 4 of x = −10; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 3x² + 2x − 8 = 0', checkMode: 'auto', options: ['x = 2 of x = −4/3', 'x = 4/3 of x = −2', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 8/3 of x = −4'], correctIndex: 1, explanation: 'a = 3, b = 2, c = −8. Diskriminant = 4 + 96 = 100. x = (−2 ± 10) / 6, wat x = 4/3 of x = −2 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 2 of x = −4/3; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur deur a in plaas van 2a te deel, kry ʼn mens x = 8/3 of x = −4.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² − x − 6 = 0', checkMode: 'auto', options: ['x = 3/2 of x = −2', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 of x = −3/2', 'x = 4 of x = −3'], correctIndex: 2, explanation: 'a = 2, b = −1, c = −6. Diskriminant = 1 + 48 = 49. x = (1 ± 7) / 4, wat x = 2 of x = −3/2 gee. Deur die verkeerde teken vir b te gebruik, kry ʼn mens x = 3/2 of x = −2; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur deur a in plaas van 2a te deel, kry ʼn mens x = 4 of x = −3.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² − 2x − 9 = 0', checkMode: 'auto', options: ['x = −1 + √10 of x = −1 − √10', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 + 2√10 of x = 2 − 2√10', 'x = 1 + √10 of x = 1 − √10'], correctIndex: 3, explanation: 'a = 1, b = −2, c = −9. Diskriminant = 4 + 36 = 40. x = (2 ± √40)/2 = (2 ± 2√10)/2 = 1 ± √10. Deur die verkeerde teken vir b te gebruik, kry ʼn mens −1 ± √10; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur te vergeet om die wortelterm te halveer, bly 2 ± 2√10 oor.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² − 6x + 4 = 0', checkMode: 'auto', options: ['x = 3 + √5 of x = 3 − √5', 'x = −3 + √5 of x = −3 − √5', 'x = 3 + √13 of x = 3 − √13', 'x = 6 + 2√5 of x = 6 − 2√5'], correctIndex: 0, explanation: 'a = 1, b = −6, c = 4. Diskriminant = 36 − 16 = 20, wat positief is maar nie ʼn volkome vierkant nie, dus in wortelvorm. x = (6 ± √20)/2 = (6 ± 2√5)/2 = 3 ± √5. Deur die verkeerde teken vir b te gebruik, kry ʼn mens −3 ± √5; deur die diskriminant verkeerdelik as b² + 4ac = 52 te bereken, kry ʼn mens 3 ± √13; deur te vergeet om die wortelterm te halveer, bly 6 ± 2√5 oor.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(x + 6) = x', checkMode: 'auto', options: ['x = 3 of x = −2', 'x = 3', 'Geen oplossing nie (deur te vergeet om te kwadreer voordat opgelos word)', 'x = −2'], correctIndex: 1, explanation: 'Kwadreer albei kante: x + 6 = x². Herrangskik: x² − x − 6 = 0 → (x − 3)(x + 2) = 0, dus x = 3 of x = −2. Toets: x = 3 gee √9 = 3 ✓ geldig; x = −2 gee √4 = 2 ≠ −2 ✗ buitenstaander — verwerp. Deur te vergeet om vir buitenstaander-wortels te toets, hou ʼn mens albei waardes; deur glad nie te kwadreer nie, lei tot ʼn vals "geen oplossing nie".' },
        { difficulty: 'Medium', question: 'Los op vir x: √(4x + 5) = x, en toets vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 5 of x = −1', 'x = −5/3', 'x = 5', 'x = −1'], correctIndex: 2, explanation: 'Kwadreer albei kante: 4x + 5 = x². Herrangskik: x² − 4x − 5 = 0 → (x − 5)(x + 1) = 0, dus x = 5 of x = −1. Toets: x = 5 gee √25 = 5 ✓ geldig; x = −1 gee √1 = 1 ≠ −1 ✗ buitenstaander — verwerp. Deur te vergeet om te toets, hou ʼn mens albei waardes; deur glad nie te kwadreer nie, kry ʼn mens x = −5/3.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 6) = x − 6, en toets versigtig vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 10 of x = 3', 'x = 3', 'Geen reële oplossings nie (deur (x − 6)² verkeerdelik as x² + 36 uit te brei)', 'x = 10'], correctIndex: 3, explanation: 'Kwadreer albei kante: x + 6 = (x − 6)² = x² − 12x + 36. Herrangskik: x² − 13x + 30 = 0 → (x − 10)(x − 3) = 0, dus x = 10 of x = 3. Toets: x = 10 gee √16 = 4 = 10 − 6 ✓ geldig; x = 3 gee √9 = 3 maar 3 − 6 = −3 ✗ buitenstaander — verwerp. Deur nie albei wortels te toets nie, hou ʼn mens die buitenstaander x = 3; deur (x − 6)² verkeerdelik uit te brei deur die middelterm weg te laat, kry ʼn mens glad geen reële oplossing nie.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 3^x = 81', checkMode: 'auto', options: ['x = 4', 'x = 3', 'x = 5', 'x = 27'], correctIndex: 0, explanation: 'Skryf 81 as ʼn mag van 3: 81 = 3⁴. Dus 3^x = 3⁴, wat beteken x = 4. Deur die mag van 3 verkeerd te onthou, kry ʼn mens x = 3 of x = 5; deur 81 deur 3 te deel in plaas van na dieselfde grondtal om te skakel, kry ʼn mens x = 27.' },
        { difficulty: 'Medium', question: 'Los op vir x: 3^(x-1) = 27', checkMode: 'auto', options: ['x = 3', 'x = 4', 'x = 5', 'x = 2'], correctIndex: 1, explanation: 'Skryf 27 as ʼn mag van 3: 27 = 3³. Dus 3^(x−1) = 3³, wat beteken x − 1 = 3, dus x = 4. Deur te vergeet om 1 terug te tel, kry ʼn mens x = 3; deur 27 verkeerd as 3⁴ te onthou, kry ʼn mens x = 5; deur af te trek in plaas van op te tel, kry ʼn mens x = 2.' },
        { difficulty: 'Hard', question: 'Los op vir x: 3^(2x) − 4 · 3^x + 3 = 0', checkMode: 'auto', options: ['x = 0 alleenlik (y = 3 per ongeluk verwerp)', 'y = 1 of y = 3 (nooit terug na x omgeskakel nie)', 'x = 0 of x = 1', 'Geen oplossing nie — albei y-waardes sou negatief moes wees'], correctIndex: 2, explanation: 'Laat y = 3^x, dus word die vergelyking y² − 4y + 3 = 0. Faktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3 — albei geldig aangesien 3^x altyd positief is. Vervang terug: 3^x = 1 → x = 0, en 3^x = 3 → x = 1. Verkeerde faktorisering, die vervangingstap vergeet, of ʼn foutiewe tekenaanname is algemene foute.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 36 ≥ 0', checkMode: 'auto', options: ['−6 ≤ x ≤ 6', 'x < −6 of x > 6', 'x ≥ 6 alleenlik', 'x ≤ −6 of x ≥ 6'], correctIndex: 3, explanation: 'Kritieke waardes: x² − 36 = 0 → x = −6 of x = 6. Aangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels, met die eindpunte ingesluit. Oplossing: x ≤ −6 of x ≥ 6.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − 2x − 15 ≤ 0', checkMode: 'auto', options: ['−3 ≤ x ≤ 5', 'x ≤ −3 of x ≥ 5', '−3 < x < 5', '−5 ≤ x ≤ 3'], correctIndex: 0, explanation: 'Kritieke waardes: (x − 5)(x + 3) = 0 → x = 5 of x = −3. Aangesien die parabool opwaarts oopmaak, is die uitdrukking ≤ 0 tussen die wortels, met die eindpunte ingesluit. Oplossing: −3 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Los op vir x: 3x² + x − 4 > 0', checkMode: 'auto', options: ['−4/3 < x < 1', 'x < −4/3 of x > 1', 'x ≤ −4/3 of x ≥ 1', 'x < −1 of x > 4/3'], correctIndex: 1, explanation: 'Faktoriseer: (3x + 4)(x − 1) > 0. Kritieke waardes: x = −4/3 of x = 1. Aangesien die parabool opwaarts oopmaak, is die uitdrukking > 0 buite die wortels, met die eindpunte uitgesluit. Oplossing: x < −4/3 of x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 3x − 2 en y = x² − 2x − 2', checkMode: 'auto', options: ['(0, −2) en (−5, −17)', '(0, 0) en (5, 15)', '(0, −2) en (5, 13)', 'x = 5, y = 13 alleenlik'], correctIndex: 2, explanation: 'Vervang y = 3x − 2 in y = x² − 2x − 2: 3x − 2 = x² − 2x − 2, wat x² − 5x = 0 gee. Faktoriseer: x(x − 5) = 0, dus x = 0 of x = 5. Ooreenstemmende y = 3x − 2 gee y = −2 of y = 13. ʼn Tekenfout kan x² + 5x = 0 gee; deur 2 te vergeet by y, kry ʼn mens (0, 0) en (5, 15); deur slegs een snypunt te rapporteer, mis ʼn mens die tweede.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 2 en y = x² − 3x − 4', checkMode: 'auto', options: ['(−2 + √10 ; √10) en (−2 − √10 ; −√10)', 'Geen reële oplossing nie — die diskriminant is negatief', '(2 + √10 ; 2 + √10) en (2 − √10 ; 2 − √10)', '(2 + √10 ; 4 + √10) en (2 − √10 ; 4 − √10)'], correctIndex: 3, explanation: 'Vervang: x + 2 = x² − 3x − 4, wat x² − 4x − 6 = 0 gee. Deur die kwadratiese formule te gebruik: x = (4 ± √40)/2 = 2 ± √10. Ooreenstemmende y = x + 2 gee y = 4 ± √10. ʼn Tekenfout kan x² + 4x − 6 = 0 gee; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur te vergeet om 2 by te tel by y, bly y gelyk aan x self.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = 4x − 3 en y = x² − x − 3', checkMode: 'auto', options: ['(0, −3) en (5, 17)', '(0, −3) en (−5, −23)', '(0, 0) en (5, 20)', 'x = 0, y = −3 alleenlik'], correctIndex: 0, explanation: 'Vervang y = 4x − 3 in y = x² − x − 3: 4x − 3 = x² − x − 3, wat x² − 5x = 0 gee. Faktoriseer: x(x − 5) = 0, dus x = 0 of x = 5. Ooreenstemmende y = 4x − 3 gee y = −3 of y = 17. ʼn Tekenfout kan x² + 5x = 0 gee; deur 3 te vergeet by y, kry ʼn mens (0, 0) en (5, 20); deur slegs een snypunt te rapporteer, mis ʼn mens die tweede.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Lerato los √(x − 3) = −4 op en sê daar is geen oplossing nie. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Nee — sy is verkeerd; deur albei kante te kwadreer, kry ʼn mens x − 3 = 16, dus is x = 19 ʼn geldige oplossing.', 'Ja, sy is korrek — die vierkantswortelsimbool dui altyd die nie-negatiewe wortel aan, dus kan √(x − 3) nooit gelyk wees aan −4 nie, wat beteken die vergelyking het werklik geen oplossing nie.', 'Nee — die vergelyking het eintlik twee oplossings, x = 19 en x = −13.', 'Ja, maar slegs omdat die uitdrukking binne die wortel x − 3 is eerder as x + 3.'], correctIndex: 1, explanation: 'Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 3) nooit gelyk wees aan ʼn negatiewe getal soos −4 nie. Deur albei kante te kwadreer, kry ʼn mens x − 3 = 16, dus x = 19, maar vervanging terug gee √16 = 4, nie −4 nie — wat bevestig dat dit ʼn buitenstaander-oplossing is. Lerato is korrek.' },
        { difficulty: 'Hard', question: 'Sipho sê die vergelyking 2^(2x) − 6 · 2^x + 8 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wat is die korrekte oplossing, gevind deur die vervanging y = 2^x te gebruik?', checkMode: 'auto', options: ['x = 1 alleenlik (y = 4 per ongeluk verwerp)', 'y = 2 of y = 4 (nooit terug na x omgeskakel nie)', 'x = 1 of x = 2', 'Geen oplossing nie — albei y-waardes sou negatief moes wees'], correctIndex: 2, explanation: 'Sipho is verkeerd — die vervanging y = 2^x verander die vergelyking in ʼn gewone kwadratiese vergelyking: y² − 6y + 8 = 0. Faktoriseer: (y − 2)(y − 4) = 0, dus y = 2 of y = 4, albei geldig aangesien 2^x altyd positief is. Vervang terug: 2^x = 2 → x = 1, en 2^x = 4 → x = 2.' },
        { difficulty: 'Hard', question: 'Amahle los x² − 2x − 15 ≤ 0 op en skryf haar finale antwoord as x ≤ 5. Watter stelling evalueer haar antwoord korrek, en wat is die korrekte oplossing?', checkMode: 'auto', options: ['Korrek — x ≤ 5 is die volledige oplossing.', 'Verkeerd — die korrekte oplossing is x ≤ −3.', 'Verkeerd — die korrekte oplossing is x < −3 of x > 5.', 'Verkeerd — sy mis die ondergrens; die kritieke waardes is x = 5 en x = −3, en aangesien die parabool opwaarts oopmaak is die uitdrukking slegs ≤ 0 tussen hulle, dus is die korrekte oplossing −3 ≤ x ≤ 5.'], correctIndex: 3, explanation: 'Die kritieke waardes is x = 5 en x = −3 (uit (x − 5)(x + 3) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels. Amahle het een grens gevind maar die ondergrens weggelaat, dus is die korrekte, volledige oplossing −3 ≤ x ≤ 5.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Block A — Quadratic formula (positions 0-2)
        { difficulty: 'Easy', question: 'Los op vir x deur die kwadratiese formule te gebruik: x² + x − 6 = 0', checkMode: 'auto', options: ['x = 2 of x = −3', 'x = 3 of x = −2', 'x = 4 of x = −6', 'Geen reële oplossings nie — die diskriminant is negatief'], correctIndex: 0, explanation: 'a = 1, b = 1, c = −6. Diskriminant = 1 + 24 = 25. x = (−1 ± 5) / 2, wat x = 2 of x = −3 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 3 of x = −2; deur deur a in plaas van 2a te deel, kry ʼn mens x = 4 of x = −6; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 4x² − 3x − 1 = 0', checkMode: 'auto', options: ['x = 1/4 of x = −1', 'x = 1 of x = −1/4', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = 2 of x = −1/2'], correctIndex: 1, explanation: 'a = 4, b = −3, c = −1. Diskriminant = 9 + 16 = 25. x = (3 ± 5) / 8, wat x = 1 of x = −1/4 gee. Deur die verkeerde teken vir b te gebruik, kry ʼn mens x = 1/4 of x = −1; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur deur a in plaas van 2a te deel, kry ʼn mens x = 2 of x = −1/2.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik: 2x² + 5x − 3 = 0', checkMode: 'auto', options: ['x = 3 of x = −1/2', 'x = −1 of x = −3/2', 'x = 1/2 of x = −3', 'x = 1 of x = −6'], correctIndex: 2, explanation: 'a = 2, b = 5, c = −3. Diskriminant = 25 + 24 = 49. x = (−5 ± 7) / 4, wat x = 1/2 of x = −3 gee. Deur +b in plaas van −b te gebruik, kry ʼn mens x = 3 of x = −1/2; deur c as positief te behandel, verander die diskriminant na 1, wat x = −1 of x = −3/2 gee; deur deur a in plaas van 2a te deel, kry ʼn mens x = 1 of x = −6.' },

        // Block B — Quadratic formula, surd-form answers (positions 3-4)
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² + 2x − 7 = 0', checkMode: 'auto', options: ['x = 1 + 2√2 of x = 1 − 2√2', 'Geen reële oplossings nie — die diskriminant is negatief', 'x = −2 + 4√2 of x = −2 − 4√2', 'x = −1 + 2√2 of x = −1 − 2√2'], correctIndex: 3, explanation: 'a = 1, b = 2, c = −7. Diskriminant = 4 + 28 = 32. x = (−2 ± √32)/2 = (−2 ± 4√2)/2 = −1 ± 2√2. Deur die verkeerde teken vir b te gebruik, kry ʼn mens 1 ± 2√2; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur te vergeet om die wortelterm te halveer, bly −2 ± 4√2 oor.' },
        { difficulty: 'Medium', question: 'Los op vir x deur die kwadratiese formule te gebruik, en laat jou antwoord in eenvoudigste wortelvorm: x² + 6x + 3 = 0', checkMode: 'auto', options: ['x = −3 + √6 of x = −3 − √6', 'x = 3 + √6 of x = 3 − √6', 'x = −3 + 2√3 of x = −3 − 2√3', 'x = −6 + 2√6 of x = −6 − 2√6'], correctIndex: 0, explanation: 'a = 1, b = 6, c = 3. Diskriminant = 36 − 12 = 24, wat positief is maar nie ʼn volkome vierkant nie, dus in wortelvorm. x = (−6 ± √24)/2 = (−6 ± 2√6)/2 = −3 ± √6. Deur die verkeerde teken vir b te gebruik, kry ʼn mens 3 ± √6; deur die diskriminant verkeerdelik as b² + 4ac = 48 te bereken, kry ʼn mens −3 ± 2√3; deur te vergeet om die wortelterm te halveer, bly −6 ± 2√6 oor.' },

        // Block C — Surd equations with extraneous-root checks (positions 5-7)
        { difficulty: 'Medium', question: 'Los op vir x: √(x + 2) = x', checkMode: 'auto', options: ['x = 2 of x = −1', 'x = 2', 'Geen oplossing nie (deur te vergeet om te kwadreer voordat opgelos word)', 'x = −1'], correctIndex: 1, explanation: 'Kwadreer albei kante: x + 2 = x². Herrangskik: x² − x − 2 = 0 → (x − 2)(x + 1) = 0, dus x = 2 of x = −1. Toets: x = 2 gee √4 = 2 ✓ geldig; x = −1 gee √1 = 1 ≠ −1 ✗ buitenstaander — verwerp. Deur te vergeet om vir buitenstaander-wortels te toets, hou ʼn mens albei waardes; deur glad nie te kwadreer nie, lei tot ʼn vals "geen oplossing nie".' },
        { difficulty: 'Medium', question: 'Los op vir x: √(6x + 7) = x, en toets vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 7 of x = −1', 'x = −7/5', 'x = 7', 'x = −1'], correctIndex: 2, explanation: 'Kwadreer albei kante: 6x + 7 = x². Herrangskik: x² − 6x − 7 = 0 → (x − 7)(x + 1) = 0, dus x = 7 of x = −1. Toets: x = 7 gee √49 = 7 ✓ geldig; x = −1 gee √1 = 1 ≠ −1 ✗ buitenstaander — verwerp. Deur te vergeet om te toets, hou ʼn mens albei waardes; deur glad nie te kwadreer nie, kry ʼn mens x = −7/5.' },
        { difficulty: 'Hard', question: 'Los op vir x: √(x + 8) = x − 4, en toets versigtig vir buitenstaander-wortels.', checkMode: 'auto', options: ['x = 8 of x = 1', 'x = 1', 'Geen reële oplossings nie (deur (x − 4)² verkeerdelik as x² + 16 uit te brei)', 'x = 8'], correctIndex: 3, explanation: 'Kwadreer albei kante: x + 8 = (x − 4)² = x² − 8x + 16. Herrangskik: x² − 9x + 8 = 0 → (x − 8)(x − 1) = 0, dus x = 8 of x = 1. Toets: x = 8 gee √16 = 4 = 8 − 4 ✓ geldig; x = 1 gee √9 = 3 maar 1 − 4 = −3 ✗ buitenstaander — verwerp. Deur nie albei wortels te toets nie, hou ʼn mens die buitenstaander x = 1; deur (x − 4)² verkeerdelik uit te brei, kry ʼn mens glad geen reële oplossing nie.' },

        // Block D — Exponential equations (positions 8-10)
        { difficulty: 'Easy', question: 'Los op vir x: 5^x = 125', checkMode: 'auto', options: ['x = 3', 'x = 2', 'x = 4', 'x = 25'], correctIndex: 0, explanation: 'Skryf 125 as ʼn mag van 5: 125 = 5³. Dus 5^x = 5³, wat beteken x = 3. Deur die mag van 5 verkeerd te onthou, kry ʼn mens x = 2 of x = 4; deur 125 deur 5 te deel in plaas van na dieselfde grondtal om te skakel, kry ʼn mens x = 25.' },
        { difficulty: 'Medium', question: 'Los op vir x: 5^(x+2) = 625', checkMode: 'auto', options: ['x = 4', 'x = 2', 'x = 1', 'x = 6'], correctIndex: 1, explanation: 'Skryf 625 as ʼn mag van 5: 625 = 5⁴. Dus 5^(x+2) = 5⁴, wat beteken x + 2 = 4, dus x = 2. Deur te vergeet om 2 terug te tel, kry ʼn mens x = 4; deur 625 verkeerd as 5³ te onthou, kry ʼn mens x = 1; deur op te tel in plaas van af te trek, kry ʼn mens x = 6.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2^(2x) − 6 · 2^x + 8 = 0', checkMode: 'auto', options: ['x = 1 alleenlik (y = 4 per ongeluk verwerp)', 'y = 2 of y = 4 (nooit terug na x omgeskakel nie)', 'x = 1 of x = 2', 'Geen oplossing nie — albei y-waardes sou negatief moes wees'], correctIndex: 2, explanation: 'Laat y = 2^x, dus word die vergelyking y² − 6y + 8 = 0. Faktoriseer: (y − 2)(y − 4) = 0, dus y = 2 of y = 4 — albei geldig aangesien 2^x altyd positief is. Vervang terug: 2^x = 2 → x = 1, en 2^x = 4 → x = 2. Verkeerde faktorisering, die vervangingstap vergeet, of ʼn foutiewe tekenaanname is algemene foute.' },

        // Block E — Quadratic inequalities (positions 11-13)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 49 ≥ 0', checkMode: 'auto', options: ['−7 ≤ x ≤ 7', 'x < −7 of x > 7', 'x ≥ 7 alleenlik', 'x ≤ −7 of x ≥ 7'], correctIndex: 3, explanation: 'Kritieke waardes: x² − 49 = 0 → x = −7 of x = 7. Aangesien die uitdrukking ʼn opwaartse parabool is, is dit ≥ 0 buite die wortels, met die eindpunte ingesluit. Oplossing: x ≤ −7 of x ≥ 7.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² − 3x − 10 ≤ 0', checkMode: 'auto', options: ['−2 ≤ x ≤ 5', 'x ≤ −2 of x ≥ 5', '−2 < x < 5', '−5 ≤ x ≤ 2'], correctIndex: 0, explanation: 'Kritieke waardes: (x − 5)(x + 2) = 0 → x = 5 of x = −2. Aangesien die parabool opwaarts oopmaak, is die uitdrukking ≤ 0 tussen die wortels, met die eindpunte ingesluit. Oplossing: −2 ≤ x ≤ 5.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x² + 3x − 5 > 0', checkMode: 'auto', options: ['−5/2 < x < 1', 'x < −5/2 of x > 1', 'x ≤ −5/2 of x ≥ 1', 'x < −1 of x > 5/2'], correctIndex: 1, explanation: 'Faktoriseer: (2x + 5)(x − 1) > 0. Kritieke waardes: x = −5/2 of x = 1. Aangesien die parabool opwaarts oopmaak, is die uitdrukking > 0 buite die wortels, met die eindpunte uitgesluit. Oplossing: x < −5/2 of x > 1.' },

        // Block F — Simultaneous linear-quadratic systems (positions 14-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = 4x − 5 en y = x² − x − 5', checkMode: 'auto', options: ['(0, −5) en (−5, −25)', '(0, 0) en (5, 20)', '(0, −5) en (5, 15)', 'x = 5, y = 15 alleenlik'], correctIndex: 2, explanation: 'Vervang y = 4x − 5 in y = x² − x − 5: 4x − 5 = x² − x − 5, wat x² − 5x = 0 gee. Faktoriseer: x(x − 5) = 0, dus x = 0 of x = 5. Ooreenstemmende y = 4x − 5 gee y = −5 of y = 15. ʼn Tekenfout kan x² + 5x = 0 gee; deur 5 te vergeet by y, kry ʼn mens (0, 0) en (5, 20); deur slegs een snypunt te rapporteer, mis ʼn mens die tweede.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 4 en y = x² − 2x − 3', checkMode: 'auto', options: ['((−3 + √37)/2 ; (5 + √37)/2) en ((−3 − √37)/2 ; (5 − √37)/2)', 'Geen reële oplossing nie — die diskriminant is negatief', '((3 + √37)/2 ; (3 + √37)/2) en ((3 − √37)/2 ; (3 − √37)/2)', '((3 + √37)/2 ; (11 + √37)/2) en ((3 − √37)/2 ; (11 − √37)/2)'], correctIndex: 3, explanation: 'Vervang: x + 4 = x² − 2x − 3, wat x² − 3x − 7 = 0 gee. Deur die kwadratiese formule te gebruik: x = (3 ± √37)/2. Ooreenstemmende y = x + 4 gee y = (11 ± √37)/2. ʼn Tekenfout kan x² + 3x − 7 = 0 gee; deur c as positief te behandel, kry ʼn mens ʼn negatiewe diskriminant; deur te vergeet om 4 by te tel by y, bly y gelyk aan x self.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: y = x − 5 en y = x² − 6x + 1', checkMode: 'auto', options: ['(6, 1) en (1, −4)', '(−6, −11) en (−1, −6)', '(6, 6) en (1, 1)', 'x = 6, y = 1 alleenlik'], correctIndex: 0, explanation: 'Vervang y = x − 5 in y = x² − 6x + 1: x − 5 = x² − 6x + 1, wat x² − 7x + 6 = 0 gee. Faktoriseer: (x − 6)(x − 1) = 0, dus x = 6 of x = 1. Ooreenstemmende y = x − 5 gee y = 1 of y = −4. ʼn Tekenfout kan x² + 7x + 6 = 0 gee; deur 5 te vergeet by y, kry ʼn mens (6, 6) en (1, 1); deur slegs een snypunt te rapporteer, mis ʼn mens die tweede.' },

        // Block G — Conceptual reasoning questions (positions 17-19)
        { difficulty: 'Hard', question: 'Sipho los √(x − 5) = −2 op en sê daar is geen oplossing nie. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Nee — hy is verkeerd; deur albei kante te kwadreer, kry ʼn mens x − 5 = 4, dus is x = 9 ʼn geldige oplossing.', 'Ja, hy is korrek — die vierkantswortelsimbool dui altyd die nie-negatiewe wortel aan, dus kan √(x − 5) nooit gelyk wees aan −2 nie, wat beteken die vergelyking het werklik geen oplossing nie.', 'Nee — die vergelyking het eintlik twee oplossings, x = 9 en x = 1.', 'Ja, maar slegs omdat die uitdrukking binne die wortel x − 5 is eerder as x + 5.'], correctIndex: 1, explanation: 'Die vierkantswortelsimbool dui altyd die nie-negatiewe vierkantswortel aan, dus kan √(x − 5) nooit gelyk wees aan ʼn negatiewe getal soos −2 nie. Deur albei kante te kwadreer, kry ʼn mens x − 5 = 4, dus x = 9, maar vervanging terug gee √4 = 2, nie −2 nie — wat bevestig dat dit ʼn buitenstaander-oplossing is. Sipho is korrek.' },
        { difficulty: 'Hard', question: 'Lerato sê die vergelyking 3^(2x) − 4 · 3^x + 3 = 0 kan nie opgelos word nie omdat dit nie ʼn normale kwadratiese vergelyking is nie. Wat is die korrekte oplossing, gevind deur die vervanging y = 3^x te gebruik?', checkMode: 'auto', options: ['x = 0 alleenlik (y = 3 per ongeluk verwerp)', 'y = 1 of y = 3 (nooit terug na x omgeskakel nie)', 'x = 0 of x = 1', 'Geen oplossing nie — albei y-waardes sou negatief moes wees'], correctIndex: 2, explanation: 'Lerato is verkeerd — die vervanging y = 3^x verander die vergelyking in ʼn gewone kwadratiese vergelyking: y² − 4y + 3 = 0. Faktoriseer: (y − 1)(y − 3) = 0, dus y = 1 of y = 3, albei geldig aangesien 3^x altyd positief is. Vervang terug: 3^x = 1 → x = 0, en 3^x = 3 → x = 1.' },
        { difficulty: 'Hard', question: 'Amahle los x² − 3x − 10 ≤ 0 op en skryf haar finale antwoord as x ≤ 5. Watter stelling evalueer haar antwoord korrek, en wat is die korrekte oplossing?', checkMode: 'auto', options: ['Korrek — x ≤ 5 is die volledige oplossing.', 'Verkeerd — die korrekte oplossing is x ≤ −2.', 'Verkeerd — die korrekte oplossing is x < −2 of x > 5.', 'Verkeerd — sy mis die ondergrens; die kritieke waardes is x = 5 en x = −2, en aangesien die parabool opwaarts oopmaak is die uitdrukking slegs ≤ 0 tussen hulle, dus is die korrekte oplossing −2 ≤ x ≤ 5.'], correctIndex: 3, explanation: 'Die kritieke waardes is x = 5 en x = −2 (uit (x − 5)(x + 2) = 0). Aangesien die parabool opwaarts oopmaak, is die uitdrukking slegs ≤ 0 tussen die wortels. Amahle het een grens gevind maar die ondergrens weggelaat, dus is die korrekte, volledige oplossing −2 ≤ x ≤ 5.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die kwadratiese formule, wortelvergelykings, eksponensiële vergelykings, kwadratiese ongelykhede, en gelyktydige stelsels bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor wortelvergelykings of kwadratiese ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor die kwadratiese formule en gelyktydige stelsels, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
