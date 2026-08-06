import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// factored-out coefficient / completed square form / factorised forms → blue   (#2563eb)
// completed square term  / turning point coordinates / LCM            → orange (#ea580c)
// constant adjustment    / max/min value / simplified result           → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline. Works for algebraic numerators/denominators too.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COMPLETING THE SQUARE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'completing-the-square',
      title: 'Voltooiing van die Kwadraat',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Om die vierkant te voltooi, herskryf ons ʼn kwadratiese uitdrukking <strong>ax²+bx+c</strong> in die vorm <strong>a(x+p)²+q</strong>, wat die draaipunt van die verwante parabool direk openbaar. Die metode behels: faktoriseer <strong>a</strong> uit die x²- en x-terme, en voeg dan <strong>(die helfte van die koëffisiënt van x)²</strong> binne die hakie by en trek dit af om ʼn volkome vierkant te vorm.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uitgefaktoriseerde koëffisiënt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('voltooide vierkantterm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('konstante aanpassing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metodestappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Faktoriseer a uit')} — As a ≠ 1, faktoriseer <em>a</em> uit slegs die x²- en x-terme. Los die konstante term buite die hakie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Halveer en kwadreer')} — Neem die helfte van die koëffisiënt van x binne die hakie, kwadreer dit, en voeg dan daardie waarde binne die hakie by en trek dit af.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vereenvoudig')} — Skryf die eerste drie terme binne die hakie as ʼn volkome vierkant, en versamel dan die ${gr('konstante terme')} buite.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleuteliteit</p>` +
        `<p style="margin:0;color:#1e3a8a;">x²+bx = (x + b/2)² − (b/2)² — deur (b/2)² by te voeg en af te trek, bly die uitdrukking gelyk terwyl die volkome vierkant gevorm word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf x²+6x+5 in voltooide vierkantvorm.',
          answer: `${or('(x+3)²')}${gr('−4')}`,
          steps: [
            `Neem die helfte van 6 (die x-koëffisiënt): <strong>6 ÷ 2 = 3</strong>. Kwadreer dit: <strong>3² = ${or('9')}</strong>.`,
            `Voeg ${or('9')} binne die uitdrukking by en trek dit af: x²+6x+${or('9')}−${gr('9')}+5.`,
            `Die eerste drie terme vorm ʼn volkome vierkant: ${or('(x+3)²')}. Versamel die konstantes: −${gr('9')}+5 = ${gr('−4')}.`,
            `<strong>Resultaat:</strong> x²+6x+5 = ${or('(x+3)²')}${gr('−4')} ✓`,
          ],
        },
        {
          question: 'Skryf 2x²−8x+3 in voltooide vierkantvorm.',
          answer: `${bl('2')}${or('(x−2)²')}${gr('−5')}`,
          steps: [
            `Faktoriseer ${bl('2')} uit die eerste twee terme: ${bl('2')}(x²−4x)+3.`,
            `Binne die hakie: die helfte van −4 is −2; gekwadreer is ${or('4')}. Voeg by en trek af: ${bl('2')}(x²−4x+${or('4')}−${or('4')})+3.`,
            `Skryf as ʼn volkome vierkant en brei die afgetrekte term buite uit: ${bl('2')}${or('(x−2)²')}−${bl('2')}×${or('4')}+3.`,
            `Vereenvoudig die konstantes: −${gr('8')}+3 = ${gr('−5')}.`,
            `<strong>Resultaat:</strong> 2x²−8x+3 = ${bl('2')}${or('(x−2)²')}${gr('−5')} ✓`,
          ],
        },
        {
          question: 'Sipho skryf x²−10x+30 in voltooide vierkantvorm en kry (x−5)²+5. Gaan sy antwoord na.',
          answer: `Sipho is ${gr('korrek')}`,
          steps: [
            `Die helfte van −10 is −5. Gekwadreer: (−5)² = ${or('25')}.`,
            `Voeg by en trek af: x²−10x+${or('25')}−${gr('25')}+30 = ${or('(x−5)²')}+${gr('5')}.`,
            `Sy antwoord is ${or('(x−5)²')}+${gr('5')}, wat ooreenstem. Sipho is ${gr('korrek')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q1 Easy — completed square form, a=1 ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf x²+8x+10 in voltooide vierkantvorm.',
          answer: '(x+4)²−6',
          checkMode: 'auto',
          correctAnswer: '(x+4)²−6',
          correctAnswers: ['(x+4)²−6', '(x+4)^2−6', '(x+4)²-6', '(x+4)^2-6'],
          explanation: 'Die helfte van 8 is 4; 4² = 16.\nVoeg by en trek af: x²+8x+16−16+10 = (x+4)²−16+10 = (x+4)²−6 ✓',
        },

        // ── Q2 Medium — completed square form with negative x-term ───────────
        {
          difficulty: 'Medium',
          question: 'Skryf x²−4x−7 in voltooide vierkantvorm.',
          answer: '(x−2)²−11',
          checkMode: 'auto',
          correctAnswer: '(x−2)²−11',
          correctAnswers: ['(x−2)²−11', '(x-2)²-11', '(x−2)^2−11', '(x-2)^2-11'],
          explanation: 'Die helfte van −4 is −2; (−2)² = 4.\nVoeg by en trek af: x²−4x+4−4−7 = (x−2)²−11 ✓',
        },

        // ── Q3 Hard — verify a peer's completed square working ────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho skryf 3x²+12x+5 in voltooide vierkantvorm en kry 3(x+2)²−7. Gaan sy antwoord na.',
          answer: '3(x²+4x)+5 = 3(x²+4x+4−4)+5 = 3(x+2)²−12+5 = 3(x+2)²−7. Hy is korrek.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat demonstreer hoe om die vierkant te voltooi vir kwadratiese uitdrukkings met a=1 en a≠1, met elke stap kleurgekodeer',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FINDING MAXIMUM OR MINIMUM VALUES USING COMPLETING THE SQUARE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'max-min-completing-square',
      title: 'Maksimum- of Minimumwaardes Vind deur die Vierkant te Voltooi',
      icon: '⌃',
      explanation:
        `<p style="margin-bottom:16px;">Sodra ʼn kwadratiese uitdrukking in voltooide vierkantvorm <strong>a(x+p)²+q</strong> geskryf is, kom die <strong>minimumwaarde</strong> (as a&gt;0) of <strong>maksimumwaarde</strong> (as a&lt;0) voor by <strong>x = −p</strong>, wat die minimum-/maksimumwaarde van <strong>q</strong> self gee, aangesien (x+p)² altyd ≥ 0 is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('voltooide vierkantvorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('draaipunt-x-waarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('maksimum-/minimumwaarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">a &gt; 0 → Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die parabool open opwaarts. Die uitdrukking het ʼn <strong>minimumwaarde</strong> van ${gr('q')} by ${or('x = −p')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die gekwadreerde term kan slegs by q bytel, nooit daarvan aftrek nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">a &lt; 0 → Maksimum</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die parabool open afwaarts. Die uitdrukking het ʼn <strong>maksimumwaarde</strong> van ${gr('q')} by ${or('x = −p')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die gekwadreerde term word met ʼn negatiewe getal vermenigvuldig, so dit kan q slegs verminder.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom dit werk</p>` +
        `<p style="margin:0;color:#1e3a8a;">(x+p)² ≥ 0 altyd. As a&gt;0: a(x+p)² ≥ 0, so a(x+p)²+q ≥ q — die kleinste moontlike waarde is q, bereik wanneer x = −p. As a&lt;0: a(x+p)² ≤ 0, so die grootste moontlike waarde is q.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die minimumwaarde van x²+6x+5 deur van sy voltooide vierkantvorm (x+3)²−4 gebruik te maak.',
          answer: `Minimumwaarde is ${gr('−4')}, wat voorkom wanneer ${or('x = −3')}`,
          steps: [
            `Die voltooide vierkantvorm is ${bl('(x+3)²−4')}.`,
            `Aangesien a = 1 &gt; 0, open die parabool opwaarts — dit is ʼn <strong>minimum</strong>.`,
            `Die minimum kom voor by ${or('x = −3')} (waar die gekwadreerde term gelyk is aan nul).`,
            `By ${or('x = −3')}: (−3+3)² − 4 = 0 − 4 = ${gr('−4')}.`,
            `<strong>Resultaat:</strong> Minimumwaarde is ${gr('−4')}, wat voorkom by ${or('x = −3')} ✓`,
          ],
        },
        {
          question: 'Ek het 12 meter draad en wil die grootste reghoekige area teen ʼn bestaande muur inkamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees, sodat die sy parallel aan die muur (12−2x) meter is. Vind die maksimum area.',
          answer: `Maksimum area = ${gr('18 m²')}, wat voorkom wanneer ${or('x = 3 m')}`,
          steps: [
            `Skryf die area-uitdrukking: A = x(12−2x) = 12x−2x².`,
            `Herskryf in standaardvorm: A = −2x²+12x.`,
            `Faktoriseer −2 uit albei terme: A = ${bl('−2')}(x²−6x).`,
            `Voltooi die vierkant binne die hakie: die helfte van −6 is −3; gekwadreer is ${or('9')}. Dus A = ${bl('−2')}(x²−6x+${or('9')}−${or('9')}) = ${bl('−2')}${or('(x−3)²')}+${gr('18')}.`,
            `Aangesien a = −2 &lt; 0, is dit ʼn <strong>maksimum</strong>.`,
            `Die maksimum kom voor by ${or('x = 3')} en die maksimumwaarde is ${gr('18 m²')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q4 Easy — minimum value from completing the square ────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die minimumwaarde van x²−6x+13.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Voltooi die vierkant: x²−6x+9−9+13 = (x−3)²+4.\nAangesien a=1>0, is die minimumwaarde 4, wat voorkom wanneer x=3 ✓',
        },

        // ── Q5 Medium — maximum value, negative leading coefficient ──────────
        {
          difficulty: 'Medium',
          question: 'Vind die maksimumwaarde van −x²+4x+1.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: '−x²+4x+1 = −(x²−4x)+1 = −(x²−4x+4−4)+1 = −(x−2)²+4+1 = −(x−2)²+5.\nAangesien a=−1<0, is die maksimumwaarde 5, wat voorkom wanneer x=2 ✓',
        },

        // ── Q6 Hard — optimisation fencing problem ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het 20 m draad vir ʼn reghoekige tuin teen ʼn muur. Vind die dimensies wat die maksimum area gee, en gee die maksimum area.',
          answer: 'Laat loodregte sye = x. Parallelle sy = 20−2x.\nArea = x(20−2x) = −2x²+20x = −2(x−5)²+50.\nMaksimum area = 50 m² wanneer x = 5 m (die tuin is dus 5 m by 10 m).',
          checkMode: 'self',
        },

        // ── Q7 Medium — turning point via completing the square ───────────────
        {
          difficulty: 'Medium',
          question: 'Vind die draaipunt van y = x²+10x+21 deur die vierkant te voltooi.',
          answer: '(−5, −4)',
          checkMode: 'auto',
          correctAnswer: '(−5,−4)',
          correctAnswers: ['(−5,−4)', '(-5,-4)', '(−5, −4)', '(-5, -4)'],
          explanation: 'x²+10x+21 = (x+5)²−25+21 = (x+5)²−4.\nDraaipunt: x = −5, y = −4. Koördinate: (−5, −4) ✓',
        },

        // ── Q8 Hard — verify a peer's turning point claim ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê die draaipunt van y = 2(x−3)²+7 is by (3, 7). Is hy korrek? Verduidelik.',
          answer: 'Ja — in die vorm a(x−p)²+q is die draaipunt altyd by (p, q), wat hier (3, 7) is.',
          checkMode: 'self',
        },

        // ── Q8b Hard (probleemoplossing) — herbou vergelyking uit draaipunt + ekstra punt ──
        {
          difficulty: 'Hard',
          question: 'ʼn Parabool in die vorm y = a(x−p)²+q het ʼn maksimumwaarde van 20, wat voorkom by x = 3. Die parabool gaan ook deur die punt (0, 2). Bepaal die vergelyking van die parabool in die vorm y = ax²+bx+c.',
          answer: 'y = −2x²+12x+2',
          checkMode: 'auto',
          correctAnswer: '−2x²+12x+2',
          correctAnswers: ['−2x²+12x+2', '-2x²+12x+2', '−2x^2+12x+2', '-2x^2+12x+2', 'y=−2x²+12x+2', 'y = −2x²+12x+2'],
          explanation: 'Die draaipunt is (p, q) = (3, 20), en dit is ʼn maksimum, dus a<0: y = a(x−3)²+20.\nGebruik die punt (0, 2): 2 = a(0−3)²+20 = 9a+20, dus 9a = −18 en a = −2 (stem ooreen met a<0).\nDus y = −2(x−3)²+20 = −2(x²−6x+9)+20 = −2x²+12x−18+20 = −2x²+12x+2 ✓',
        },
      ],

      diagramPlaceholder:
        'Paraboolsketse langs mekaar: een wat opwaarts oopmaak (a>0) met die minimum by die draaipunt gemerk as q in groen en die x-waarde in oranje; een wat afwaarts oopmaak (a<0) met die maksimum eenders gemerk',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 178" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="160" y1="20" x2="160" y2="150" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="85" y="13" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">a &gt; 0 → Minimum</text>` +
        `<line x1="85" y1="22" x2="85" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<line x1="18" y1="128" x2="152" y2="128" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<polyline points="25,20 35,53 45,80 55,101 65,116 75,125 85,128 95,125 105,116 115,101 125,80 135,53 145,20" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="85" cy="128" r="4" fill="#16a34a"/>` +
        `<text x="85" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">q</text>` +
        `<text x="85" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">x = −p</text>` +
        `<text x="235" y="13" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">a &lt; 0 → Maksimum</text>` +
        `<line x1="235" y1="22" x2="235" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<line x1="168" y1="20" x2="302" y2="20" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>` +
        `<polyline points="175,128 185,95 195,68 205,47 215,32 225,23 235,20 245,23 255,32 265,47 275,68 285,95 295,128" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="235" cy="20" r="4" fill="#16a34a"/>` +
        `<text x="235" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">q</text>` +
        `<text x="235" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">x = −p</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om die minimum- of maksimumwaarde en die x-posisie daarvan direk uit ʼn voltooide vierkantvorm af te lees, met ʼn toegepaste omheiningswoordprobleem',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLIFYING ALGEBRAIC FRACTIONS WITH BINOMIAL DENOMINATORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'algebraic-fractions-binomial-denominators',
      title: 'Algebraïese Breuke met Binoomnoemers Vereenvoudig',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Om algebraïese breuke met <strong>binoom- (tweeterm-) noemers</strong> te vereenvoudig, op te tel of af te trek, <strong>faktoriseer</strong> ons waar moontlik, vind die <strong>KGV</strong> van die noemers, kombineer dan in ʼn enkele breuk en vereenvoudig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gefaktoriseerde vorms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('KGV')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde resultaat')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Faktoriseer')} — Faktoriseer elke teller en noemer volledig. Soek gemeenskaplike faktore, verskil van kwadrate en trinome.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vind die KGV')} — Die KGV van die noemers is die produk van al die verskillende faktore. Gebruik dit as die gemeenskaplike noemer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kombineer en vereenvoudig')} — Skakel elke breuk om na die gemeenskaplike noemer, tel die tellers op of trek hulle af, en kanselleer dan enige gemeenskaplike faktore.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Belangrike beperking</p>` +
        `<p style="margin:0;color:#92400e;">Gee altyd die waardes van x waarvoor die uitdrukking onbepaald is (waar enige noemer gelyk is aan nul). Dit word <strong>uitgeslote waardes</strong> genoem. Byvoorbeeld, as ʼn noemer (x+3) is, gee x ≠ −3.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig (x²−9)/(x+3).',
          answer: `${gr('x−3')}`,
          steps: [
            `Faktoriseer die teller deur die verskil-van-kwadrate-identiteit te gebruik: ${bl('x²−9')} = ${bl('(x−3)(x+3)')}.`,
            `Herskryf die breuk: ${bl('(x−3)(x+3)')}/(x+3).`,
            `Kanselleer die gemeenskaplike faktor (x+3): ${gr('x−3')}, waar x ≠ −3.`,
            `<strong>Resultaat:</strong> (x²−9)/(x+3) = ${gr('x−3')} ✓`,
          ],
        },
        {
          question: 'Bereken 2/(x+1) + 3/(x−2).',
          answer: `${gr('(5x−1)/[(x+1)(x−2)]')}`,
          steps: [
            `Identifiseer die noemers: (x+1) en (x−2). Albei is reeds volledig gefaktoriseer.`,
            `Vind die ${or('KGV')}: ${or('(x+1)(x−2)')}.`,
            `Skakel elke breuk om: 2/(x+1) = 2(x−2)/[${or('(x+1)(x−2)')}] en 3/(x−2) = 3(x+1)/[${or('(x+1)(x−2)')}].`,
            `Tel die tellers op: [2(x−2)+3(x+1)] / [${or('(x+1)(x−2)')}].`,
            `Brei die teller uit: 2x−4+3x+3 = ${gr('5x−1')}.`,
            `<strong>Resultaat:</strong> ${gr('(5x−1)/[(x+1)(x−2)]')}, waar x ≠ −1 en x ≠ 2 ✓`,
          ],
        },
        {
          question: 'Vereenvoudig (x+4)/(x²−16) − 1/(x−4).',
          answer: `${gr('0')}`,
          steps: [
            `Faktoriseer die noemer van die eerste breuk deur die verskil van kwadrate te gebruik: ${bl('x²−16')} = ${bl('(x−4)(x+4)')}.`,
            `Herskryf: (x+4)/[${bl('(x−4)(x+4)')}] − 1/(x−4).`,
            `Kanselleer (x+4) uit die eerste breuk: ${bl('1/(x−4)')} − 1/(x−4).`,
            `Albei breuke is nou identies. Trek af: ${gr('0')}, waar x ≠ ±4.`,
            `<strong>Resultaat:</strong> (x+4)/(x²−16) − 1/(x−4) = ${gr('0')} ✓`,
          ],
        },
      ],


      openQuestions: [
        // ── Q9 Easy — difference of squares simplification ────────────────────
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig (x²−25) / (x+5).',
          answer: 'x−5',
          checkMode: 'auto',
          correctAnswer: 'x−5',
          correctAnswers: ['x−5', 'x-5'],
          explanation: 'Faktoriseer teller: x²−25 = (x−5)(x+5).\nKanselleer (x+5): x−5, waar x ≠ −5 ✓',
        },

        // ── Q10 Medium — difference of squares simplification ─────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig (x²−49) / (x−7).',
          answer: 'x+7',
          checkMode: 'auto',
          correctAnswer: 'x+7',
          correctAnswers: ['x+7'],
          explanation: 'Faktoriseer teller: x²−49 = (x−7)(x+7).\nKanselleer (x−7): x+7, waar x ≠ 7 ✓',
        },

        // ── Q11 Hard — addition of fractions showing LCM and working ──────────
        {
          difficulty: 'Hard',
          question: 'Bereken 3/(x+2) + 4/(x−1), en toon die KGV en die kombinasiestappe.',
          answer: 'KGV = (x+2)(x−1).\nKombineer: [3(x−1) + 4(x+2)] / [(x+2)(x−1)] = (3x−3+4x+8) / [(x+2)(x−1)] = (7x+5) / [(x+2)(x−1)].',
          checkMode: 'self',
        },

        // ── Q12 Medium — addition requiring factorisation first ───────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig (x+3)/(x²−9) + 1/(x−3).',
          answer: '2/(x−3)',
          checkMode: 'auto',
          correctAnswer: '2/(x−3)',
          correctAnswers: ['2/(x−3)', '2/(x-3)'],
          explanation: 'Faktoriseer noemer: x²−9 = (x−3)(x+3).\nEerste breuk: (x+3)/[(x−3)(x+3)] = 1/(x−3).\nTel op: 1/(x−3) + 1/(x−3) = 2/(x−3), waar x ≠ ±3 ✓',
        },

        // ── Q13 Hard — verify a peer's subtraction of fractions ───────────────
        {
          difficulty: 'Hard',
          question: 'Amahle vereenvoudig 5/(x−4) − 2/(x+1) en kry (3x+13)/[(x−4)(x+1)]. Gaan haar antwoord na.',
          answer: 'Kombineer: [5(x+1) − 2(x−4)] / [(x−4)(x+1)] = (5x+5−2x+8) / [(x−4)(x+1)] = (3x+13) / [(x−4)(x+1)]. Sy is korrek.',
          checkMode: 'self',
        },

        // ── Q14 Hard — minimum value via completing the square ────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die minimumwaarde van 2x²−12x+25 deur die vierkant te voltooi.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: '2x²−12x+25 = 2(x²−6x)+25 = 2(x²−6x+9−9)+25 = 2(x−3)²−18+25 = 2(x−3)²+7.\nMinimumwaarde is 7 (wanneer x=3) ✓',
        },

        // ── Q15 Hard — optimisation fencing problem ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Boer het 40 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Vind die maksimum moontlike area.',
          answer: 'Laat loodregte sye = x. Parallelle sy = 40−2x.\nArea = −2x²+40x = −2(x−10)²+200.\nMaksimum area = 200 m² wanneer x = 10 m.',
          checkMode: 'self',
        },

        // ── Q16 Hard — simplify by factorising trinomial numerator ────────────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig (x²−x−6) / (x−3), en faktoriseer die teller eers volledig.',
          answer: 'Faktoriseer teller: x²−x−6 = (x−3)(x+2).\nKanselleer (x−3): x+2, waar x ≠ 3.',
          checkMode: 'self',
        },

        // ── Q17 Hard — addition of fractions over difference of squares ────────
        {
          difficulty: 'Hard',
          question: 'Bereken 1/(x−5) + 1/(x+5), en kombineer oor ʼn gemeenskaplike noemer.',
          answer: 'KGV = (x−5)(x+5).\nKombineer: [(x+5) + (x−5)] / [(x−5)(x+5)] = 2x / (x²−25).',
          checkMode: 'self',
        },

        // ── Q18 Hard — write equation from turning point ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die vergelyking van die parabool in voltooide vierkantvorm as dit die draaipunt (4, −9) het en a = 1.',
          answer: 'y = (x−4)²−9',
          checkMode: 'auto',
          correctAnswer: '(x−4)²−9',
          correctAnswers: ['(x−4)²−9', '(x-4)²-9', '(x−4)^2−9', '(x-4)^2-9', 'y=(x−4)²−9', 'y=(x-4)²-9', 'y = (x−4)²−9'],
          explanation: 'In die vorm a(x−p)²+q, met draaipunt (p, q) = (4, −9) en a = 1:\ny = (x−4)²+(−9) = (x−4)²−9 ✓',
        },

        // ── Q19 Hard — conceptual question on universality of CTS ─────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê elke kwadratiese uitdrukking in die vorm ax²+bx+c kan in voltooide vierkantvorm geskryf word. Is hy korrek? Verduidelik.',
          answer: 'Ja — die voltooiing van die kwadraat is ʼn universele algebraïese tegniek wat vir enige kwadratiese uitdrukking werk, ongeag of dit netjies met heelgetalle gefaktoriseer kan word.',
          checkMode: 'self',
        },

        // ── Q20 Hard — simplify by factorising numerator and denominator ───────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig (2x+6) / (x²+3x) volledig.',
          answer: '2/x',
          checkMode: 'auto',
          correctAnswer: '2/x',
          explanation: 'Faktoriseer teller: 2x+6 = 2(x+3).\nFaktoriseer noemer: x²+3x = x(x+3).\nKanselleer (x+3): 2/x, waar x ≠ 0 en x ≠ −3 ✓',
        },

        // ── Q20b Hard (probleemoplossing) — werk terugwaarts van ʼn gekombineerde resultaat om ʼn onbekende parameter te vind ──
        {
          difficulty: 'Hard',
          question: 'Die som 3/(x+2) + k/(x−5) vereenvoudig na (5x−11)/[(x+2)(x−5)]. Bepaal die waarde van k.',
          answer: 'k = 2',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2', 'k=2', 'k = 2'],
          explanation: 'Kombineer die linkerkant oor die gemeenskaplike noemer: [3(x−5) + k(x+2)] / [(x+2)(x−5)] = [(3+k)x + (2k−15)] / [(x+2)(x−5)].\nVergelyk dit met die gegewe resultaat (5x−11)/[(x+2)(x−5)]: die x-koëffisiënt gee 3+k = 5, dus k = 2.\nGaan die konstante term na: 2(2)−15 = −11, wat ooreenstem ✓. Dus k = 2 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om algebraïese breuke met binoomnoemers te vereenvoudig: faktorisering, die KGV vind, tellers kombineer en gemeenskaplike faktore kanselleer',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Voltooi die vierkant, a = 1
    // Blok 2 (3-5):   Voltooi die vierkant, a ≠ 1
    // Blok 3 (6-8):   Minimum-/maksimumwaarde deur die vierkant te voltooi
    // Blok 4 (9-11):  Draaipunt / optimeringsprobleem / eweknie-nagaan
    // Blok 5 (12-15): Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer)
    // Blok 6 (16-19): Optel/aftrek van algebraïese breuke met binoomnoemers
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Voltooi die vierkant, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Skryf x²+10x+18 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+5)²−7', '(x+5)²+18', '(x+10)²−7', '(x−5)²−7'], correctIndex: 0, explanation: 'Die helfte van 10 is 5; 5²=25. Voeg by en trek af: x²+10x+25−25+18 = (x+5)²−7. (Om b=10 te gebruik in plaas van die helfte daarvan, om te vergeet om die 25 van die konstante af te trek, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Easy', question: 'Skryf x²−8x+9 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x−4)²+9', '(x−4)²−7', '(x−8)²−7', '(x+4)²−7'], correctIndex: 1, explanation: 'Die helfte van −8 is −4; (−4)²=16. Voeg by en trek af: x²−8x+16−16+9 = (x−4)²−7. (Om die oorspronklike konstante 9 te behou in plaas van 16 af te trek, om b=−8 te gebruik in plaas van die helfte daarvan, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf x²+2x−11 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+1)²−11', '(x−1)²−12', '(x+1)²−12', '(x+2)²−12'], correctIndex: 2, explanation: 'Die helfte van 2 is 1; 1²=1. Voeg by en trek af: x²+2x+1−1−11 = (x+1)²−12. (Om te vergeet om die 1 van die konstante af te trek, om die teken binne die hakie om te keer, of om b=2 te gebruik in plaas van die helfte daarvan, gee almal verkeerde vorms.)' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²+8x+5 in voltooide vierkantvorm.', checkMode: 'auto', options: ['2(x+2)²+5', '2(x+4)²−3', '2(x+2)²−11', '2(x+2)²−3'], correctIndex: 3, explanation: 'Faktoriseer 2 uit: 2(x²+4x)+5. Die helfte van 4 is 2, 2²=4: 2(x²+4x+4−4)+5 = 2(x+2)²−8+5 = 2(x+2)²−3. (Om te vergeet om 2×4=8 van die konstante af te trek, om die ongehalveerde waarde 4 as p te gebruik, of ʼn berekeningsfout in die konstante, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf 3x²−12x+7 in voltooide vierkantvorm.', checkMode: 'auto', options: ['3(x−2)²−5', '3(x−4)²−5', '3(x−2)²+7', '3(x−2)²−12'], correctIndex: 0, explanation: 'Faktoriseer 3 uit: 3(x²−4x)+7. Die helfte van −4 is −2, (−2)²=4: 3(x²−4x+4−4)+7 = 3(x−2)²−12+7 = 3(x−2)²−5. (Om die ongehalveerde waarde −4 as p te gebruik, om te vergeet om 3×4=12 van die konstante af te trek, of om te vergeet om die +7 weer by te tel, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf −2x²+8x−3 in voltooide vierkantvorm.', checkMode: 'auto', options: ['−2(x−2)²−3', '−2(x−2)²+5', '−2(x−4)²+5', '−2(x+2)²+5'], correctIndex: 1, explanation: 'Faktoriseer −2 uit: −2(x²−4x)−3. Die helfte van −4 is −2, (−2)²=4: −2(x²−4x+4−4)−3 = −2(x−2)²+8−3 = −2(x−2)²+5. (Om te vergeet om die konstante met −2×4=−8 aan te pas, om die ongehalveerde waarde −4 as p te gebruik, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²−14x+53.', checkMode: 'auto', options: ['7', '−4', '4', '53'], correctIndex: 2, explanation: 'x²−14x+53 = (x−7)²−49+53 = (x−7)²+4. Aangesien a=1>0, is die minimumwaarde q=4, by x=7. (Om die draaipunt-x-waarde 7 te gee in plaas van die minimum, om die teken van q om te keer, of om die oorspronklike konstante 53 aan te haal in plaas van q, is algemene foute.)' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+4x+2.', checkMode: 'auto', options: ['−6', '2', '4', '6'], correctIndex: 3, explanation: '−x²+4x+2 = −(x²−4x)+2 = −(x²−4x+4−4)+2 = −(x−2)²+4+2 = −(x−2)²+6. Aangesien a=−1<0, is die maksimumwaarde q=6, by x=2. (Om die teken van q om te keer, om die draaipunt-x-waarde 2 aan te haal in plaas van q, of ʼn berekeningsfout wat die finale +2 laat val, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 2x²−8x+15.', checkMode: 'auto', options: ['7', '−7', '15', '2'], correctIndex: 0, explanation: '2x²−8x+15 = 2(x²−4x)+15 = 2(x²−4x+4−4)+15 = 2(x−2)²−8+15 = 2(x−2)²+7. Minimumwaarde is q=7, by x=2. (Om die teken van q om te keer, om die oorspronklike konstante 15 aan te haal in plaas van q, of om die draaipunt-x-waarde 2 te gee in plaas van q, is algemene foute.)' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²+8x+9 deur die vierkant te voltooi.', checkMode: 'auto', options: ['(4,−7)', '(−4,−7)', '(−7,−4)', '(−4,7)'], correctIndex: 1, explanation: 'x²+8x+9 = (x+4)²−16+9 = (x+4)²−7. Draaipunt: x=−4, y=−7, dus (−4, −7). (Om die teken van die x-koördinaat om te keer, om die koördinate te verwissel, of om die teken van die y-koördinaat om te keer, is algemene foute.)' },
        { difficulty: 'Hard', question: 'ʼn Boer het 16 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Wat is die maksimum moontlike area, en by watter waarde van x kom dit voor?', checkMode: 'auto', options: ['Maksimum area = 64 m² by x = 8 m', 'Maksimum area = 32 m² by x = 8 m', 'Maksimum area = 32 m² by x = 4 m', 'Maksimum area = 16 m² by x = 4 m'], correctIndex: 2, explanation: 'Area = x(16−2x) = −2x²+16x = −2(x²−8x) = −2(x²−8x+16−16) = −2(x−4)²+32. Maksimum area is 32 m², wat voorkom by x=4 m. (Om die ongehalveerde waarde 8 as x te gebruik, om die volle draadlengte as x te gebruik, of ʼn berekeningsfout in die konstante, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Zanele sê die minimumwaarde van 2(x+3)²−9 is −9, wat voorkom by x=−3. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Sy is verkeerd — die minimumwaarde is −3, aangesien q=−3 in hierdie vorm is.', 'Sy is verkeerd — die minimum kom voor by x=3, aangesien die draaipunt-x-waarde p is, nie −p nie.', 'Sy is korrek oor die waarde, maar haar redenasie is verkeerd aangesien a=2>0 eintlik ʼn maksimum gee, nie ʼn minimum nie.', 'Sy is korrek — in die vorm a(x+p)²+q met a=2>0, is die minimumwaarde q=−9, wat voorkom waar die gekwadreerde term nul is, dit wil sê x=−3.'], correctIndex: 3, explanation: 'In a(x+p)²+q is die draaipunt by x=−p met waarde q. Hier is a=2>0 (dus ʼn minimum), p=3, q=−9. Die minimumwaarde is q=−9 by x=−3, dus is Zanele korrek.' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−36) / (x+6).', checkMode: 'auto', options: ['x−6', 'x+6', '(x−6)(x+6)', 'x²−6'], correctIndex: 0, explanation: 'Faktoriseer: x²−36 = (x−6)(x+6). Kanselleer die gemeenskaplike faktor (x+6): x−6, waar x ≠ −6. (Om die verkeerde hakie te kanselleer gee x+6, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²−6.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−64) / (x−8).', checkMode: 'auto', options: ['x−8', 'x+8', '(x−8)(x+8)', 'x²+8'], correctIndex: 1, explanation: 'Faktoriseer: x²−64 = (x−8)(x+8). Kanselleer die gemeenskaplike faktor (x−8): x+8, waar x ≠ 8. (Om die verkeerde hakie te kanselleer gee x−8, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²+8.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−x−12) / (x−4).', checkMode: 'auto', options: ['x−3', 'x+4', 'x+3', '(x+3)(x−4)'], correctIndex: 2, explanation: 'Faktoriseer: x²−x−12 = (x−4)(x+3). Kanselleer die gemeenskaplike faktor (x−4): x+3, waar x ≠ 4. (ʼn Tekenfout gee x−3, om die verkeerde faktorpaar te gebruik gee x+4, en om te vergeet om te kanselleer laat die ongesimplifiseerde gefaktoriseerde vorm.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+5)/(x²−25) − 1/(x−5).', checkMode: 'auto', options: [frac('2', 'x−5'), frac('1', 'x−5'), 'ongedefinieerd vir alle x', '0'], correctIndex: 3, explanation: 'x²−25 = (x−5)(x+5), dus (x+5)/[(x−5)(x+5)] = 1/(x−5). Dan 1/(x−5) − 1/(x−5) = 0, waar x ≠ ±5. (Om op te tel in plaas van af te trek gee 2/(x−5), om te vergeet om die eerste breuk eers te vereenvoudig laat 1/(x−5), en om die beperking te verwar met die waarde oral gee "ongedefinieerd vir alle x".)' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 2/(x+3) + 5/(x−1).', checkMode: 'auto', options: [frac('7x+13', '(x+3)(x−1)'), frac('7', '(x+3)(x−1)'), frac('−3x−17', '(x+3)(x−1)'), frac('7x+15', '(x+3)(x−1)')], correctIndex: 0, explanation: 'KGV = (x+3)(x−1). Kombineer: [2(x−1) + 5(x+3)] / [(x+3)(x−1)] = (2x−2+5x+15) / [(x+3)(x−1)] = (7x+13) / [(x+3)(x−1)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Bereken 3/(x−2) + 2/(x+4).', checkMode: 'auto', options: [frac('5', '(x−2)(x+4)'), frac('5x+8', '(x−2)(x+4)'), frac('x+16', '(x−2)(x+4)'), frac('5x+12', '(x−2)(x+4)')], correctIndex: 1, explanation: 'KGV = (x−2)(x+4). Kombineer: [3(x+4) + 2(x−2)] / [(x−2)(x+4)] = (3x+12+2x−4) / [(x−2)(x+4)] = (5x+8) / [(x−2)(x+4)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+6)/(x²−36) + 1/(x−6).', checkMode: 'auto', options: [frac('x+7', 'x²−36'), '0', frac('2', 'x−6'), frac('1', 'x−6')], correctIndex: 2, explanation: 'Faktoriseer noemer: x²−36 = (x−6)(x+6). Eerste breuk: (x+6)/[(x−6)(x+6)] = 1/(x−6). Tel op: 1/(x−6) + 1/(x−6) = 2/(x−6), waar x ≠ ±6. (Om te vergeet om die eerste breuk eers te vereenvoudig laat ʼn ongesimplifiseerde uitdrukking, om af te trek in plaas van op te tel gee 0, en om te vergeet om die teller te verdubbel na kombinasie van identiese breuke gee 1/(x−6).)' },
        { difficulty: 'Hard', question: 'Sipho vereenvoudig 4/(x−4) − 1/(x+2) en kry (3x+12)/[(x−4)(x+2)]. Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Nee — die korrekte gekombineerde teller is 3x+4, nie 3x+12 nie.', 'Nee — die korrekte noemer is (x−4)(x−2), nie (x−4)(x+2) nie.', 'Nee — hy moes die noemers afgetrek het, wat ʼn resultaat van 2/(x−6) sou gee.', 'Ja — kombinering gee [4(x+2) − 1(x−4)] / [(x−4)(x+2)] = (4x+8−x+4) / [(x−4)(x+2)] = (3x+12) / [(x−4)(x+2)], dus is sy antwoord korrek.'], correctIndex: 3, explanation: 'Kombineer: [4(x+2) − 1(x−4)] / [(x−4)(x+2)] = (4x+8−x+4) / [(x−4)(x+2)] = (3x+12) / [(x−4)(x+2)]. Sipho is korrek.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die kwadraat en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die kwadraat of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die kwadraat en vereenvoudiging van breuke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Voltooi die vierkant, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Skryf x²+12x+20 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+6)²−16', '(x+6)²+20', '(x+12)²−16', '(x−6)²−16'], correctIndex: 0, explanation: 'Die helfte van 12 is 6; 6²=36. Voeg by en trek af: x²+12x+36−36+20 = (x+6)²−16. (Om b=12 te gebruik in plaas van die helfte daarvan, om te vergeet om 36 van die konstante af te trek, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Easy', question: 'Skryf x²−6x−2 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x−3)²−2', '(x−3)²−11', '(x−6)²−11', '(x+3)²−11'], correctIndex: 1, explanation: 'Die helfte van −6 is −3; (−3)²=9. Voeg by en trek af: x²−6x+9−9−2 = (x−3)²−11. (Om die oorspronklike konstante −2 te behou in plaas van 9 af te trek, om b=−6 te gebruik in plaas van die helfte daarvan, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf x²+4x−9 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+2)²−9', '(x−2)²−13', '(x+2)²−13', '(x+4)²−13'], correctIndex: 2, explanation: 'Die helfte van 4 is 2; 2²=4. Voeg by en trek af: x²+4x+4−4−9 = (x+2)²−13. (Om te vergeet om die 4 van die konstante af te trek, om die teken binne die hakie om te keer, of om b=4 te gebruik in plaas van die helfte daarvan, gee almal verkeerde vorms.)' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²−12x+13 in voltooide vierkantvorm.', checkMode: 'auto', options: ['2(x−3)²+13', '2(x−6)²−5', '2(x−3)²−23', '2(x−3)²−5'], correctIndex: 3, explanation: 'Faktoriseer 2 uit: 2(x²−6x)+13. Die helfte van −6 is −3, (−3)²=9: 2(x²−6x+9−9)+13 = 2(x−3)²−18+13 = 2(x−3)²−5. (Om te vergeet om 2×9=18 van die konstante af te trek, om die ongehalveerde waarde −6 as p te gebruik, of ʼn berekeningsfout in die konstante, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf 4x²+16x+9 in voltooide vierkantvorm.', checkMode: 'auto', options: ['4(x+2)²−7', '4(x+4)²−7', '4(x+2)²+9', '4(x+2)²−23'], correctIndex: 0, explanation: 'Faktoriseer 4 uit: 4(x²+4x)+9. Die helfte van 4 is 2, 2²=4: 4(x²+4x+4−4)+9 = 4(x+2)²−16+9 = 4(x+2)²−7. (Om die ongehalveerde waarde 4 as p te gebruik, om te vergeet om 4×4=16 van die konstante af te trek, of ʼn berekeningsfout in die konstante, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf −3x²+18x−4 in voltooide vierkantvorm.', checkMode: 'auto', options: ['−3(x−3)²−4', '−3(x−3)²+23', '−3(x−6)²+23', '−3(x+3)²+23'], correctIndex: 1, explanation: 'Faktoriseer −3 uit: −3(x²−6x)−4. Die helfte van −6 is −3, (−3)²=9: −3(x²−6x+9−9)−4 = −3(x−3)²+27−4 = −3(x−3)²+23. (Om te vergeet om die konstante met −3×9=−27 aan te pas, om die ongehalveerde waarde −6 as p te gebruik, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²−10x+28.', checkMode: 'auto', options: ['5', '−3', '3', '28'], correctIndex: 2, explanation: 'x²−10x+28 = (x−5)²−25+28 = (x−5)²+3. Aangesien a=1>0, is die minimumwaarde q=3, by x=5. (Om die draaipunt-x-waarde 5 te gee in plaas van die minimum, om die teken van q om te keer, of om die oorspronklike konstante 28 aan te haal in plaas van q, is algemene foute.)' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+6x−1.', checkMode: 'auto', options: ['−8', '3', '9', '8'], correctIndex: 3, explanation: '−x²+6x−1 = −(x²−6x)−1 = −(x²−6x+9−9)−1 = −(x−3)²+9−1 = −(x−3)²+8. Aangesien a=−1<0, is die maksimumwaarde q=8, by x=3. (Om die teken van q om te keer, om die draaipunt-x-waarde 3 aan te haal in plaas van q, of om die finale −1-aanpassing te vergeet en by 9 te stop, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 3x²+12x+10.', checkMode: 'auto', options: ['−2', '2', '10', '−4'], correctIndex: 0, explanation: '3x²+12x+10 = 3(x²+4x)+10 = 3(x²+4x+4−4)+10 = 3(x+2)²−12+10 = 3(x+2)²−2. Minimumwaarde is q=−2, by x=−2. (Om die teken van q om te keer, om die oorspronklike konstante 10 aan te haal in plaas van q, of ʼn berekeningsfout deur −4 in plaas van −12 vir 3×4 te gebruik, is algemene foute.)' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²−12x+32 deur die vierkant te voltooi.', checkMode: 'auto', options: ['(−6,−4)', '(6,−4)', '(−4,6)', '(6,4)'], correctIndex: 1, explanation: 'x²−12x+32 = (x−6)²−36+32 = (x−6)²−4. Draaipunt: x=6, y=−4, dus (6, −4). (Om die teken van die x-koördinaat om te keer, om die koördinate te verwissel, of om die teken van die y-koördinaat om te keer, is algemene foute.)' },
        { difficulty: 'Hard', question: 'ʼn Boer het 24 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Wat is die maksimum moontlike area, en by watter waarde van x kom dit voor?', checkMode: 'auto', options: ['Maksimum area = 144 m² by x = 12 m', 'Maksimum area = 72 m² by x = 12 m', 'Maksimum area = 72 m² by x = 6 m', 'Maksimum area = 36 m² by x = 6 m'], correctIndex: 2, explanation: 'Area = x(24−2x) = −2x²+24x = −2(x²−12x) = −2(x²−12x+36−36) = −2(x−6)²+72. Maksimum area is 72 m², wat voorkom by x=6 m. (Om die ongehalveerde waarde 12 as x te gebruik, om die volle draadlengte as x te gebruik, of ʼn berekeningsfout in die konstante, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Thabo sê die maksimumwaarde van −3(x−1)²+8 is 8, wat voorkom by x=1. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is verkeerd — die maksimumwaarde is 1, aangesien p=1 in hierdie vorm is.', 'Hy is verkeerd — die maksimum kom voor by x=−1, aangesien die draaipunt-x-waarde −p is.', 'Hy is korrek oor die waarde, maar sy redenasie is verkeerd aangesien a=−3<0 eintlik ʼn minimum behoort te gee, nie ʼn maksimum nie.', 'Hy is korrek — in die vorm a(x−p)²+q met a=−3<0, is die maksimumwaarde q=8, wat voorkom waar die gekwadreerde term nul is, dit wil sê x=1.'], correctIndex: 3, explanation: 'In a(x−p)²+q is die draaipunt by x=p met waarde q. Hier is a=−3<0 (dus ʼn maksimum), p=1, q=8. Die maksimumwaarde is q=8 by x=1, dus is Thabo korrek.' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−4) / (x−2).', checkMode: 'auto', options: ['x+2', 'x−2', '(x−2)(x+2)', 'x²+2'], correctIndex: 0, explanation: 'Faktoriseer: x²−4 = (x−2)(x+2). Kanselleer die gemeenskaplike faktor (x−2): x+2, waar x ≠ 2. (Om die verkeerde hakie te kanselleer gee x−2, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²+2.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−100) / (x+10).', checkMode: 'auto', options: ['x+10', 'x−10', '(x−10)(x+10)', 'x²−10'], correctIndex: 1, explanation: 'Faktoriseer: x²−100 = (x−10)(x+10). Kanselleer die gemeenskaplike faktor (x+10): x−10, waar x ≠ −10. (Om die verkeerde hakie te kanselleer gee x+10, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²−10.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²+x−20) / (x+5).', checkMode: 'auto', options: ['x+4', 'x−5', 'x−4', '(x−4)(x+5)'], correctIndex: 2, explanation: 'Faktoriseer: x²+x−20 = (x+5)(x−4). Kanselleer die gemeenskaplike faktor (x+5): x−4, waar x ≠ −5. (ʼn Tekenfout gee x+4, om die verkeerde faktorpaar te gebruik gee x−5, en om te vergeet om te kanselleer laat die ongesimplifiseerde gefaktoriseerde vorm.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+7)/(x²−49) − 1/(x−7).', checkMode: 'auto', options: [frac('2', 'x−7'), frac('1', 'x−7'), 'ongedefinieerd vir alle x', '0'], correctIndex: 3, explanation: 'x²−49 = (x−7)(x+7), dus (x+7)/[(x−7)(x+7)] = 1/(x−7). Dan 1/(x−7) − 1/(x−7) = 0, waar x ≠ ±7. (Om op te tel in plaas van af te trek gee 2/(x−7), om te vergeet om die eerste breuk eers te vereenvoudig laat 1/(x−7), en om die beperking te verwar met die waarde oral gee "ongedefinieerd vir alle x".)' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 4/(x+1) + 1/(x−3).', checkMode: 'auto', options: [frac('5x−11', '(x+1)(x−3)'), frac('5', '(x+1)(x−3)'), frac('3x−13', '(x+1)(x−3)'), frac('5x−12', '(x+1)(x−3)')], correctIndex: 0, explanation: 'KGV = (x+1)(x−3). Kombineer: [4(x−3) + 1(x+1)] / [(x+1)(x−3)] = (4x−12+x+1) / [(x+1)(x−3)] = (5x−11) / [(x+1)(x−3)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Bereken 2/(x−5) + 3/(x+2).', checkMode: 'auto', options: [frac('5', '(x−5)(x+2)'), frac('5x−11', '(x−5)(x+2)'), frac('−x+19', '(x−5)(x+2)'), frac('5x+4', '(x−5)(x+2)')], correctIndex: 1, explanation: 'KGV = (x−5)(x+2). Kombineer: [2(x+2) + 3(x−5)] / [(x−5)(x+2)] = (2x+4+3x−15) / [(x−5)(x+2)] = (5x−11) / [(x−5)(x+2)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+4)/(x²−16) + 1/(x−4).', checkMode: 'auto', options: [frac('x+5', 'x²−16'), '0', frac('2', 'x−4'), frac('1', 'x−4')], correctIndex: 2, explanation: 'Faktoriseer noemer: x²−16 = (x−4)(x+4). Eerste breuk: (x+4)/[(x−4)(x+4)] = 1/(x−4). Tel op: 1/(x−4) + 1/(x−4) = 2/(x−4), waar x ≠ ±4. (Om te vergeet om die eerste breuk eers te vereenvoudig laat ʼn ongesimplifiseerde uitdrukking, om af te trek in plaas van op te tel gee 0, en om te vergeet om die teller te verdubbel na kombinasie van identiese breuke gee 1/(x−4).)' },
        { difficulty: 'Hard', question: 'Amahle vereenvoudig 5/(x−3) − 2/(x+2) en kry (3x+16)/[(x−3)(x+2)]. Watter stelling evalueer haar antwoord korrek?', checkMode: 'auto', options: ['Nee — die korrekte gekombineerde teller is 3x+4, nie 3x+16 nie.', 'Nee — die korrekte noemer is (x−3)(x−2), nie (x−3)(x+2) nie.', 'Nee — sy moes die breuke opgetel het in plaas van afgetrek, wat ʼn ander resultaat sou gee.', 'Ja — kombinering gee [5(x+2) − 2(x−3)] / [(x−3)(x+2)] = (5x+10−2x+6) / [(x−3)(x+2)] = (3x+16) / [(x−3)(x+2)], dus is haar antwoord korrek.'], correctIndex: 3, explanation: 'Kombineer: [5(x+2) − 2(x−3)] / [(x−3)(x+2)] = (5x+10−2x+6) / [(x−3)(x+2)] = (3x+16) / [(x−3)(x+2)]. Amahle is korrek.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die kwadraat en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die kwadraat of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die kwadraat en vereenvoudiging van breuke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Voltooi die vierkant, a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Skryf x²+14x+25 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+7)²−24', '(x+7)²+25', '(x+14)²−24', '(x−7)²−24'], correctIndex: 0, explanation: 'Die helfte van 14 is 7; 7²=49. Voeg by en trek af: x²+14x+49−49+25 = (x+7)²−24. (Om b=14 te gebruik in plaas van die helfte daarvan, om te vergeet om 49 van die konstante af te trek, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Easy', question: 'Skryf x²−10x+3 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x−5)²+3', '(x−5)²−22', '(x−10)²−22', '(x+5)²−22'], correctIndex: 1, explanation: 'Die helfte van −10 is −5; (−5)²=25. Voeg by en trek af: x²−10x+25−25+3 = (x−5)²−22. (Om die oorspronklike konstante 3 te behou in plaas van 25 af te trek, om b=−10 te gebruik in plaas van die helfte daarvan, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf x²+6x−17 in voltooide vierkantvorm.', checkMode: 'auto', options: ['(x+3)²−17', '(x−3)²−26', '(x+3)²−26', '(x+6)²−26'], correctIndex: 2, explanation: 'Die helfte van 6 is 3; 3²=9. Voeg by en trek af: x²+6x+9−9−17 = (x+3)²−26. (Om te vergeet om die 9 van die konstante af te trek, om die teken binne die hakie om te keer, of om b=6 te gebruik in plaas van die helfte daarvan, gee almal verkeerde vorms.)' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²−4x−9 in voltooide vierkantvorm.', checkMode: 'auto', options: ['2(x−1)²−9', '2(x−2)²−11', '2(x−1)²−13', '2(x−1)²−11'], correctIndex: 3, explanation: 'Faktoriseer 2 uit: 2(x²−2x)−9. Die helfte van −2 is −1, (−1)²=1: 2(x²−2x+1−1)−9 = 2(x−1)²−2−9 = 2(x−1)²−11. (Om te vergeet om 2×1=2 van die konstante af te trek, om die ongehalveerde waarde −2 as p te gebruik, of ʼn berekeningsfout in die konstante, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf 3x²+6x−1 in voltooide vierkantvorm.', checkMode: 'auto', options: ['3(x+1)²−4', '3(x+2)²−4', '3(x+1)²−1', '3(x+1)²−7'], correctIndex: 0, explanation: 'Faktoriseer 3 uit: 3(x²+2x)−1. Die helfte van 2 is 1, 1²=1: 3(x²+2x+1−1)−1 = 3(x+1)²−3−1 = 3(x+1)²−4. (Om die ongehalveerde waarde 2 as p te gebruik, om te vergeet om 3×1=3 van die konstante af te trek, of ʼn berekeningsfout in die konstante, gee almal verkeerde vorms.)' },
        { difficulty: 'Medium', question: 'Skryf −2x²−8x+1 in voltooide vierkantvorm.', checkMode: 'auto', options: ['−2(x+2)²+1', '−2(x+2)²+9', '−2(x+4)²+9', '−2(x−2)²+9'], correctIndex: 1, explanation: 'Faktoriseer −2 uit: −2(x²+4x)+1. Die helfte van 4 is 2, 2²=4: −2(x²+4x+4−4)+1 = −2(x+2)²+8+1 = −2(x+2)²+9. (Om te vergeet om die konstante met −2×4=−8 aan te pas, om die ongehalveerde waarde 4 as p te gebruik, of om die teken binne die hakie om te keer, gee almal verkeerde vorms.)' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²+4x−3.', checkMode: 'auto', options: ['−2', '7', '−7', '−3'], correctIndex: 2, explanation: 'x²+4x−3 = (x+2)²−4−3 = (x+2)²−7. Aangesien a=1>0, is die minimumwaarde q=−7, by x=−2. (Om die draaipunt-x-waarde −2 te gee in plaas van die minimum, om die teken van q om te keer, of om die oorspronklike konstante −3 aan te haal in plaas van q, is algemene foute.)' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+8x−5.', checkMode: 'auto', options: ['−11', '4', '16', '11'], correctIndex: 3, explanation: '−x²+8x−5 = −(x²−8x)−5 = −(x²−8x+16−16)−5 = −(x−4)²+16−5 = −(x−4)²+11. Aangesien a=−1<0, is die maksimumwaarde q=11, by x=4. (Om die teken van q om te keer, om die draaipunt-x-waarde 4 aan te haal in plaas van q, of om die finale −5-aanpassing te vergeet en by 16 te stop, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 2x²+4x+9.', checkMode: 'auto', options: ['7', '−7', '9', '−1'], correctIndex: 0, explanation: '2x²+4x+9 = 2(x²+2x)+9 = 2(x²+2x+1−1)+9 = 2(x+1)²−2+9 = 2(x+1)²+7. Minimumwaarde is q=7, by x=−1. (Om die teken van q om te keer, om die oorspronklike konstante 9 aan te haal in plaas van q, of om die draaipunt-x-waarde −1 te gee in plaas van q, is algemene foute.)' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²+6x−7 deur die vierkant te voltooi.', checkMode: 'auto', options: ['(3,−16)', '(−3,−16)', '(−16,−3)', '(−3,16)'], correctIndex: 1, explanation: 'x²+6x−7 = (x+3)²−9−7 = (x+3)²−16. Draaipunt: x=−3, y=−16, dus (−3, −16). (Om die teken van die x-koördinaat om te keer, om die koördinate te verwissel, of om die teken van die y-koördinaat om te keer, is algemene foute.)' },
        { difficulty: 'Hard', question: 'ʼn Boer het 32 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Wat is die maksimum moontlike area, en by watter waarde van x kom dit voor?', checkMode: 'auto', options: ['Maksimum area = 256 m² by x = 16 m', 'Maksimum area = 128 m² by x = 16 m', 'Maksimum area = 128 m² by x = 8 m', 'Maksimum area = 64 m² by x = 8 m'], correctIndex: 2, explanation: 'Area = x(32−2x) = −2x²+32x = −2(x²−16x) = −2(x²−16x+64−64) = −2(x−8)²+128. Maksimum area is 128 m², wat voorkom by x=8 m. (Om die ongehalveerde waarde 16 as x te gebruik, om die volle draadlengte as x te gebruik, of ʼn berekeningsfout in die konstante, is algemene foute.)' },
        { difficulty: 'Hard', question: 'Lerato sê elke kwadratiese ax²+bx+c met a≠0 kan die kwadraat voltooi word, ongeag of b²−4ac ʼn volkome vierkant is. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Sy is verkeerd — die voltooiing van die kwadraat werk slegs wanneer b²−4ac ʼn volkome vierkant is, aangesien die wortels anders irrasionaal is.', 'Sy is verkeerd — die voltooiing van die kwadraat werk slegs wanneer a=1, aangesien om a≠1 uit te faktoriseer breuke veroorsaak wat nie vereenvoudig kan word nie.', 'Sy is korrek, maar slegs vir kwadratiese uitdrukkings wat reeds met heelgetalle gefaktoriseer kan word.', 'Sy is korrek — die voltooiing van die kwadraat is ʼn suiwer algebraïese proses (faktoriseer a uit, halveer en kwadreer die koëffisiënt van x) wat vir enige kwadratiese uitdrukking werk, ongeag of dit netjies faktoriseer.'], correctIndex: 3, explanation: 'Die voltooiing van die kwadraat berus slegs op die uitfaktorisering van a en die by- en aftrekking van (die helfte van die koëffisiënt van x)² — algebraïese stappe wat werk ongeag of die kwadratiese uitdrukking rasionale, irrasionale, of geen reële wortels het nie. Lerato is korrek.' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−1) / (x−1).', checkMode: 'auto', options: ['x+1', 'x−1', '(x−1)(x+1)', 'x²+1'], correctIndex: 0, explanation: 'Faktoriseer: x²−1 = (x−1)(x+1). Kanselleer die gemeenskaplike faktor (x−1): x+1, waar x ≠ 1. (Om die verkeerde hakie te kanselleer gee x−1, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²+1.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−81) / (x+9).', checkMode: 'auto', options: ['x+9', 'x−9', '(x−9)(x+9)', 'x²−9'], correctIndex: 1, explanation: 'Faktoriseer: x²−81 = (x−9)(x+9). Kanselleer die gemeenskaplike faktor (x+9): x−9, waar x ≠ −9. (Om die verkeerde hakie te kanselleer gee x+9, om glad nie te kanselleer nie laat die ongesimplifiseerde gefaktoriseerde vorm, en om slegs deel van ʼn faktor te kanselleer gee x²−9.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−2x−15) / (x−5).', checkMode: 'auto', options: ['x−3', 'x−5', 'x+3', '(x+3)(x−5)'], correctIndex: 2, explanation: 'Faktoriseer: x²−2x−15 = (x−5)(x+3). Kanselleer die gemeenskaplike faktor (x−5): x+3, waar x ≠ 5. (ʼn Tekenfout gee x−3, om die verkeerde faktorpaar te gebruik gee x−5, en om te vergeet om te kanselleer laat die ongesimplifiseerde gefaktoriseerde vorm.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+2)/(x²−4) − 1/(x−2).', checkMode: 'auto', options: [frac('2', 'x−2'), frac('1', 'x−2'), 'ongedefinieerd vir alle x', '0'], correctIndex: 3, explanation: 'x²−4 = (x−2)(x+2), dus (x+2)/[(x−2)(x+2)] = 1/(x−2). Dan 1/(x−2) − 1/(x−2) = 0, waar x ≠ ±2. (Om op te tel in plaas van af te trek gee 2/(x−2), om te vergeet om die eerste breuk eers te vereenvoudig laat 1/(x−2), en om die beperking te verwar met die waarde oral gee "ongedefinieerd vir alle x".)' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 5/(x+2) + 3/(x−4).', checkMode: 'auto', options: [frac('8x−14', '(x+2)(x−4)'), frac('8', '(x+2)(x−4)'), frac('2x−26', '(x+2)(x−4)'), frac('8x−20', '(x+2)(x−4)')], correctIndex: 0, explanation: 'KGV = (x+2)(x−4). Kombineer: [5(x−4) + 3(x+2)] / [(x+2)(x−4)] = (5x−20+3x+6) / [(x+2)(x−4)] = (8x−14) / [(x+2)(x−4)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Bereken 1/(x−6) + 4/(x+3).', checkMode: 'auto', options: [frac('5', '(x−6)(x+3)'), frac('5x−21', '(x−6)(x+3)'), frac('−3x+27', '(x−6)(x+3)'), frac('5x+3', '(x−6)(x+3)')], correctIndex: 1, explanation: 'KGV = (x−6)(x+3). Kombineer: [1(x+3) + 4(x−6)] / [(x−6)(x+3)] = (x+3+4x−24) / [(x−6)(x+3)] = (5x−21) / [(x−6)(x+3)]. (Om die tellers direk op te tel sonder om na die gemeenskaplike noemer om te skakel, om af te trek in plaas van op te tel, of om ʼn term te laat val tydens uitbreiding, gee almal verkeerde resultate.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+8)/(x²−64) + 1/(x−8).', checkMode: 'auto', options: [frac('x+9', 'x²−64'), '0', frac('2', 'x−8'), frac('1', 'x−8')], correctIndex: 2, explanation: 'Faktoriseer noemer: x²−64 = (x−8)(x+8). Eerste breuk: (x+8)/[(x−8)(x+8)] = 1/(x−8). Tel op: 1/(x−8) + 1/(x−8) = 2/(x−8), waar x ≠ ±8. (Om te vergeet om die eerste breuk eers te vereenvoudig laat ʼn ongesimplifiseerde uitdrukking, om af te trek in plaas van op te tel gee 0, en om te vergeet om die teller te verdubbel na kombinasie van identiese breuke gee 1/(x−8).)' },
        { difficulty: 'Hard', question: 'Bongani vereenvoudig 3/(x+4) − 2/(x−1) en kry (x−11)/[(x+4)(x−1)]. Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Nee — die korrekte gekombineerde teller is x−5, nie x−11 nie.', 'Nee — die korrekte noemer is (x+4)(x+1), nie (x+4)(x−1) nie.', 'Nee — hy moes die breuke opgetel het in plaas van afgetrek, wat ʼn ander resultaat sou gee.', 'Ja — kombinering gee [3(x−1) − 2(x+4)] / [(x+4)(x−1)] = (3x−3−2x−8) / [(x+4)(x−1)] = (x−11) / [(x+4)(x−1)], dus is sy antwoord korrek.'], correctIndex: 3, explanation: 'Kombineer: [3(x−1) − 2(x+4)] / [(x+4)(x−1)] = (3x−3−2x−8) / [(x+4)(x−1)] = (x−11) / [(x+4)(x−1)]. Bongani is korrek.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die kwadraat en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die kwadraat of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die kwadraat en vereenvoudiging van breuke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
