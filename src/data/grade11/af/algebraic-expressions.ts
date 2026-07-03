import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// factored-out coefficient / completed square form / factorised forms → blue   (#2563eb)
// completed square term  / turning point coordinates / LCM            → orange (#ea580c)
// constant adjustment    / max/min value / simplified result           → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COMPLETING THE SQUARE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'completing-the-square',
      title: 'Voltooiing van die Vierkant',
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

      practiceQuestions: [],

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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side layout showing x²+6x+5 transforming step by step into completed square form (x+3)²−4, with factored coefficient in blue, completed square term in orange and constant in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to complete the square for quadratics with a=1 and a≠1, showing each step colour coded" />',
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

      practiceQuestions: [],

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
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Parabola sketches side by side: one opening upward (a>0) with minimum at turning point labelled q in green and x-value in orange; one opening downward (a<0) with maximum labelled similarly" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read the minimum or maximum value and its x-position directly from a completed square form, including an applied fencing word problem" />',
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

      practiceQuestions: [],

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
          answer: 'Ja — die voltooiing van die vierkant is ʼn universele algebraïese tegniek wat vir enige kwadratiese uitdrukking werk, ongeag of dit netjies met heelgetalle gefaktoriseer kan word.',
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
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step layout for 2/(x+1) + 3/(x−2) showing factorised forms in blue, LCM in orange and combined simplified numerator in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify algebraic fractions with binomial denominators: factorising, finding the LCM, combining numerators and cancelling common factors" />',
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
}
