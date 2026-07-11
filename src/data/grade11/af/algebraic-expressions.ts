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
        { difficulty: 'Easy', question: 'Skryf x²+10x+18 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+5)²−7', correctAnswers: ['(x+5)²−7', '(x+5)^2−7', '(x+5)²-7', '(x+5)^2-7'], answer: '(x+5)²−7', explanation: 'Die helfte van 10 is 5; 5²=25.\nVoeg by en trek af: x²+10x+25−25+18 = (x+5)²−7 ✓' },
        { difficulty: 'Easy', question: 'Skryf x²−8x+9 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x−4)²−7', correctAnswers: ['(x−4)²−7', '(x-4)²-7', '(x−4)^2−7', '(x-4)^2-7'], answer: '(x−4)²−7', explanation: 'Die helfte van −8 is −4; (−4)²=16.\nVoeg by en trek af: x²−8x+16−16+9 = (x−4)²−7 ✓' },
        { difficulty: 'Medium', question: 'Skryf x²+2x−11 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+1)²−12', correctAnswers: ['(x+1)²−12', '(x+1)^2−12', '(x+1)²-12', '(x+1)^2-12'], answer: '(x+1)²−12', explanation: 'Die helfte van 2 is 1; 1²=1.\nVoeg by en trek af: x²+2x+1−1−11 = (x+1)²−12 ✓' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²+8x+5 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '2(x+2)²−3', correctAnswers: ['2(x+2)²−3', '2(x+2)^2−3', '2(x+2)²-3', '2(x+2)^2-3'], answer: '2(x+2)²−3', explanation: 'Faktoriseer 2 uit: 2(x²+4x)+5.\nVoltooi die vierkant binne: die helfte van 4 is 2, 2²=4. 2(x²+4x+4−4)+5 = 2(x+2)²−8+5 = 2(x+2)²−3 ✓' },
        { difficulty: 'Medium', question: 'Skryf 3x²−12x+7 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '3(x−2)²−5', correctAnswers: ['3(x−2)²−5', '3(x-2)²-5', '3(x−2)^2−5', '3(x-2)^2-5'], answer: '3(x−2)²−5', explanation: 'Faktoriseer 3 uit: 3(x²−4x)+7.\nVoltooi die vierkant binne: die helfte van −4 is −2, (−2)²=4. 3(x²−4x+4−4)+7 = 3(x−2)²−12+7 = 3(x−2)²−5 ✓' },
        { difficulty: 'Medium', question: 'Skryf −2x²+8x−3 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '−2(x−2)²+5', correctAnswers: ['−2(x−2)²+5', '-2(x-2)²+5', '−2(x−2)^2+5', '-2(x-2)^2+5'], answer: '−2(x−2)²+5', explanation: 'Faktoriseer −2 uit: −2(x²−4x)−3.\nVoltooi die vierkant binne: die helfte van −4 is −2, (−2)²=4. −2(x²−4x+4−4)−3 = −2(x−2)²+8−3 = −2(x−2)²+5 ✓' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²−14x+53.', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], answer: '4', explanation: 'x²−14x+53 = (x−7)²−49+53 = (x−7)²+4.\nAangesien a=1>0, is die minimumwaarde 4, by x=7 ✓' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+4x+2.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], answer: '6', explanation: '−x²+4x+2 = −(x²−4x)+2 = −(x²−4x+4−4)+2 = −(x−2)²+4+2 = −(x−2)²+6.\nAangesien a=−1<0, is die maksimumwaarde 6, by x=2 ✓' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 2x²−8x+15.', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], answer: '7', explanation: '2x²−8x+15 = 2(x²−4x)+15 = 2(x²−4x+4−4)+15 = 2(x−2)²−8+15 = 2(x−2)²+7.\nMinimumwaarde is 7, by x=2 ✓' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²+8x+9 deur die vierkant te voltooi.', checkMode: 'auto', correctAnswer: '(−4,−7)', correctAnswers: ['(−4,−7)', '(-4,-7)', '(−4, −7)', '(-4, -7)'], answer: '(−4, −7)', explanation: 'x²+8x+9 = (x+4)²−16+9 = (x+4)²−7.\nDraaipunt: x=−4, y=−7. Koördinate: (−4, −7) ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 16 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Vind die maksimum moontlike area.', answer: 'Laat loodregte sye = x. Parallelle sy = 16−2x.\nArea = x(16−2x) = −2x²+16x = −2(x−4)²+32.\nMaksimum area = 32 m² wanneer x = 4 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele sê die minimumwaarde van 2(x+3)²−9 is −9, wat voorkom by x=−3. Is sy korrek? Verduidelik.', answer: 'Ja — in die vorm a(x+p)²+q met a=2>0, is die minimumwaarde q=−9, wat voorkom waar die gekwadreerde term nul is, dit wil sê x=−3.', checkMode: 'self' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−36) / (x+6).', checkMode: 'auto', correctAnswer: 'x−6', correctAnswers: ['x−6', 'x-6'], answer: 'x−6', explanation: 'Faktoriseer teller: x²−36 = (x−6)(x+6).\nKanselleer (x+6): x−6, waar x ≠ −6 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−64) / (x−8).', checkMode: 'auto', correctAnswer: 'x+8', correctAnswers: ['x+8'], answer: 'x+8', explanation: 'Faktoriseer teller: x²−64 = (x−8)(x+8).\nKanselleer (x−8): x+8, waar x ≠ 8 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−x−12) / (x−4).', checkMode: 'auto', correctAnswer: 'x+3', correctAnswers: ['x+3'], answer: 'x+3', explanation: 'Faktoriseer teller: x²−x−12 = (x−4)(x+3).\nKanselleer (x−4): x+3, waar x ≠ 4 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+5)/(x²−25) − 1/(x−5).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Faktoriseer: x²−25 = (x−5)(x+5). Die eerste breuk word (x+5)/[(x−5)(x+5)] = 1/(x−5).\nTrek af: 1/(x−5) − 1/(x−5) = 0, waar x ≠ ±5 ✓' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 2/(x+3) + 5/(x−1), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x+3)(x−1).\nKombineer: [2(x−1) + 5(x+3)] / [(x+3)(x−1)] = (2x−2+5x+15) / [(x+3)(x−1)] = (7x+13) / [(x+3)(x−1)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 3/(x−2) + 2/(x+4), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x−2)(x+4).\nKombineer: [3(x+4) + 2(x−2)] / [(x−2)(x+4)] = (3x+12+2x−4) / [(x−2)(x+4)] = (5x+8) / [(x−2)(x+4)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+6)/(x²−36) + 1/(x−6).', checkMode: 'auto', correctAnswer: '2/(x−6)', correctAnswers: ['2/(x−6)', '2/(x-6)'], answer: '2/(x−6)', explanation: 'Faktoriseer noemer: x²−36 = (x−6)(x+6).\nEerste breuk: (x+6)/[(x−6)(x+6)] = 1/(x−6).\nTel op: 1/(x−6) + 1/(x−6) = 2/(x−6), waar x ≠ ±6 ✓' },
        { difficulty: 'Hard', question: 'Sipho vereenvoudig 4/(x−4) − 1/(x+2) en kry (3x+12)/[(x−4)(x+2)]. Gaan sy antwoord na.', answer: 'Kombineer: [4(x+2) − 1(x−4)] / [(x−4)(x+2)] = (4x+8−x+4) / [(x−4)(x+2)] = (3x+12) / [(x−4)(x+2)]. Hy is korrek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die vierkant en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die vierkant of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die vierkant en vereenvoudiging van breuke weer deur, en probeer weer.' },
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
        { difficulty: 'Easy', question: 'Skryf x²+12x+20 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+6)²−16', correctAnswers: ['(x+6)²−16', '(x+6)^2−16', '(x+6)²-16', '(x+6)^2-16'], answer: '(x+6)²−16', explanation: 'Die helfte van 12 is 6; 6²=36.\nVoeg by en trek af: x²+12x+36−36+20 = (x+6)²−16 ✓' },
        { difficulty: 'Easy', question: 'Skryf x²−6x−2 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x−3)²−11', correctAnswers: ['(x−3)²−11', '(x-3)²-11', '(x−3)^2−11', '(x-3)^2-11'], answer: '(x−3)²−11', explanation: 'Die helfte van −6 is −3; (−3)²=9.\nVoeg by en trek af: x²−6x+9−9−2 = (x−3)²−11 ✓' },
        { difficulty: 'Medium', question: 'Skryf x²+4x−9 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+2)²−13', correctAnswers: ['(x+2)²−13', '(x+2)^2−13', '(x+2)²-13', '(x+2)^2-13'], answer: '(x+2)²−13', explanation: 'Die helfte van 4 is 2; 2²=4.\nVoeg by en trek af: x²+4x+4−4−9 = (x+2)²−13 ✓' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²−12x+13 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '2(x−3)²−5', correctAnswers: ['2(x−3)²−5', '2(x-3)²-5', '2(x−3)^2−5', '2(x-3)^2-5'], answer: '2(x−3)²−5', explanation: 'Faktoriseer 2 uit: 2(x²−6x)+13.\nVoltooi die vierkant binne: die helfte van −6 is −3, (−3)²=9. 2(x²−6x+9−9)+13 = 2(x−3)²−18+13 = 2(x−3)²−5 ✓' },
        { difficulty: 'Medium', question: 'Skryf 4x²+16x+9 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '4(x+2)²−7', correctAnswers: ['4(x+2)²−7', '4(x+2)^2−7', '4(x+2)²-7', '4(x+2)^2-7'], answer: '4(x+2)²−7', explanation: 'Faktoriseer 4 uit: 4(x²+4x)+9.\nVoltooi die vierkant binne: die helfte van 4 is 2, 2²=4. 4(x²+4x+4−4)+9 = 4(x+2)²−16+9 = 4(x+2)²−7 ✓' },
        { difficulty: 'Medium', question: 'Skryf −3x²+18x−4 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '−3(x−3)²+23', correctAnswers: ['−3(x−3)²+23', '-3(x-3)²+23', '−3(x−3)^2+23', '-3(x-3)^2+23'], answer: '−3(x−3)²+23', explanation: 'Faktoriseer −3 uit: −3(x²−6x)−4.\nVoltooi die vierkant binne: die helfte van −6 is −3, (−3)²=9. −3(x²−6x+9−9)−4 = −3(x−3)²+27−4 = −3(x−3)²+23 ✓' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²−10x+28.', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], answer: '3', explanation: 'x²−10x+28 = (x−5)²−25+28 = (x−5)²+3.\nAangesien a=1>0, is die minimumwaarde 3, by x=5 ✓' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+6x−1.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], answer: '8', explanation: '−x²+6x−1 = −(x²−6x)−1 = −(x²−6x+9−9)−1 = −(x−3)²+9−1 = −(x−3)²+8.\nAangesien a=−1<0, is die maksimumwaarde 8, by x=3 ✓' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 3x²+12x+10.', checkMode: 'auto', correctAnswer: '−2', correctAnswers: ['−2', '-2'], answer: '−2', explanation: '3x²+12x+10 = 3(x²+4x)+10 = 3(x²+4x+4−4)+10 = 3(x+2)²−12+10 = 3(x+2)²−2.\nMinimumwaarde is −2, by x=−2 ✓' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²−12x+32 deur die vierkant te voltooi.', checkMode: 'auto', correctAnswer: '(6,−4)', correctAnswers: ['(6,−4)', '(6,-4)', '(6, −4)', '(6, -4)'], answer: '(6, −4)', explanation: 'x²−12x+32 = (x−6)²−36+32 = (x−6)²−4.\nDraaipunt: x=6, y=−4. Koördinate: (6, −4) ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 24 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Vind die maksimum moontlike area.', answer: 'Laat loodregte sye = x. Parallelle sy = 24−2x.\nArea = x(24−2x) = −2x²+24x = −2(x−6)²+72.\nMaksimum area = 72 m² wanneer x = 6 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê die maksimumwaarde van −3(x−1)²+8 is 8, wat voorkom by x=1. Is hy korrek? Verduidelik.', answer: 'Ja — in die vorm a(x−p)²+q met a=−3<0, is die maksimumwaarde q=8, wat voorkom waar die gekwadreerde term nul is, dit wil sê x=1.', checkMode: 'self' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−4) / (x−2).', checkMode: 'auto', correctAnswer: 'x+2', correctAnswers: ['x+2'], answer: 'x+2', explanation: 'Faktoriseer teller: x²−4 = (x−2)(x+2).\nKanselleer (x−2): x+2, waar x ≠ 2 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−100) / (x+10).', checkMode: 'auto', correctAnswer: 'x−10', correctAnswers: ['x−10', 'x-10'], answer: 'x−10', explanation: 'Faktoriseer teller: x²−100 = (x−10)(x+10).\nKanselleer (x+10): x−10, waar x ≠ −10 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²+x−20) / (x+5).', checkMode: 'auto', correctAnswer: 'x−4', correctAnswers: ['x−4', 'x-4'], answer: 'x−4', explanation: 'Faktoriseer teller: x²+x−20 = (x+5)(x−4).\nKanselleer (x+5): x−4, waar x ≠ −5 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+7)/(x²−49) − 1/(x−7).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Faktoriseer: x²−49 = (x−7)(x+7). Die eerste breuk word (x+7)/[(x−7)(x+7)] = 1/(x−7).\nTrek af: 1/(x−7) − 1/(x−7) = 0, waar x ≠ ±7 ✓' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 4/(x+1) + 1/(x−3), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x+1)(x−3).\nKombineer: [4(x−3) + 1(x+1)] / [(x+1)(x−3)] = (4x−12+x+1) / [(x+1)(x−3)] = (5x−11) / [(x+1)(x−3)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 2/(x−5) + 3/(x+2), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x−5)(x+2).\nKombineer: [2(x+2) + 3(x−5)] / [(x−5)(x+2)] = (2x+4+3x−15) / [(x−5)(x+2)] = (5x−11) / [(x−5)(x+2)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+4)/(x²−16) + 1/(x−4).', checkMode: 'auto', correctAnswer: '2/(x−4)', correctAnswers: ['2/(x−4)', '2/(x-4)'], answer: '2/(x−4)', explanation: 'Faktoriseer noemer: x²−16 = (x−4)(x+4).\nEerste breuk: (x+4)/[(x−4)(x+4)] = 1/(x−4).\nTel op: 1/(x−4) + 1/(x−4) = 2/(x−4), waar x ≠ ±4 ✓' },
        { difficulty: 'Hard', question: 'Amahle vereenvoudig 5/(x−3) − 2/(x+2) en kry (3x+16)/[(x−3)(x+2)]. Gaan haar antwoord na.', answer: 'Kombineer: [5(x+2) − 2(x−3)] / [(x−3)(x+2)] = (5x+10−2x+6) / [(x−3)(x+2)] = (3x+16) / [(x−3)(x+2)]. Sy is korrek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die vierkant en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die vierkant of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die vierkant en vereenvoudiging van breuke weer deur, en probeer weer.' },
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
        { difficulty: 'Easy', question: 'Skryf x²+14x+25 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+7)²−24', correctAnswers: ['(x+7)²−24', '(x+7)^2−24', '(x+7)²-24', '(x+7)^2-24'], answer: '(x+7)²−24', explanation: 'Die helfte van 14 is 7; 7²=49.\nVoeg by en trek af: x²+14x+49−49+25 = (x+7)²−24 ✓' },
        { difficulty: 'Easy', question: 'Skryf x²−10x+3 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x−5)²−22', correctAnswers: ['(x−5)²−22', '(x-5)²-22', '(x−5)^2−22', '(x-5)^2-22'], answer: '(x−5)²−22', explanation: 'Die helfte van −10 is −5; (−5)²=25.\nVoeg by en trek af: x²−10x+25−25+3 = (x−5)²−22 ✓' },
        { difficulty: 'Medium', question: 'Skryf x²+6x−17 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '(x+3)²−26', correctAnswers: ['(x+3)²−26', '(x+3)^2−26', '(x+3)²-26', '(x+3)^2-26'], answer: '(x+3)²−26', explanation: 'Die helfte van 6 is 3; 3²=9.\nVoeg by en trek af: x²+6x+9−9−17 = (x+3)²−26 ✓' },

        // Blok 2 — Voltooi die vierkant, a ≠ 1 (Medium)
        { difficulty: 'Medium', question: 'Skryf 2x²−4x−9 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '2(x−1)²−11', correctAnswers: ['2(x−1)²−11', '2(x-1)²-11', '2(x−1)^2−11', '2(x-1)^2-11'], answer: '2(x−1)²−11', explanation: 'Faktoriseer 2 uit: 2(x²−2x)−9.\nVoltooi die vierkant binne: die helfte van −2 is −1, (−1)²=1. 2(x²−2x+1−1)−9 = 2(x−1)²−2−9 = 2(x−1)²−11 ✓' },
        { difficulty: 'Medium', question: 'Skryf 3x²+6x−1 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '3(x+1)²−4', correctAnswers: ['3(x+1)²−4', '3(x+1)^2−4', '3(x+1)²-4', '3(x+1)^2-4'], answer: '3(x+1)²−4', explanation: 'Faktoriseer 3 uit: 3(x²+2x)−1.\nVoltooi die vierkant binne: die helfte van 2 is 1, 1²=1. 3(x²+2x+1−1)−1 = 3(x+1)²−3−1 = 3(x+1)²−4 ✓' },
        { difficulty: 'Medium', question: 'Skryf −2x²−8x+1 in voltooide vierkantvorm.', checkMode: 'auto', correctAnswer: '−2(x+2)²+9', correctAnswers: ['−2(x+2)²+9', '-2(x+2)²+9', '−2(x+2)^2+9', '-2(x+2)^2+9'], answer: '−2(x+2)²+9', explanation: 'Faktoriseer −2 uit: −2(x²+4x)+1.\nVoltooi die vierkant binne: die helfte van 4 is 2, 2²=4. −2(x²+4x+4−4)+1 = −2(x+2)²+8+1 = −2(x+2)²+9 ✓' },

        // Blok 3 — Minimum-/maksimumwaarde deur die vierkant te voltooi (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die minimumwaarde van x²+4x−3.', checkMode: 'auto', correctAnswer: '−7', correctAnswers: ['−7', '-7'], answer: '−7', explanation: 'x²+4x−3 = (x+2)²−4−3 = (x+2)²−7.\nAangesien a=1>0, is die minimumwaarde −7, by x=−2 ✓' },
        { difficulty: 'Medium', question: 'Vind die maksimumwaarde van −x²+8x−5.', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], answer: '11', explanation: '−x²+8x−5 = −(x²−8x)−5 = −(x²−8x+16−16)−5 = −(x−4)²+16−5 = −(x−4)²+11.\nAangesien a=−1<0, is die maksimumwaarde 11, by x=4 ✓' },
        { difficulty: 'Hard', question: 'Vind die minimumwaarde van 2x²+4x+9.', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], answer: '7', explanation: '2x²+4x+9 = 2(x²+2x)+9 = 2(x²+2x+1−1)+9 = 2(x+1)²−2+9 = 2(x+1)²+7.\nMinimumwaarde is 7, by x=−1 ✓' },

        // Blok 4 — Draaipunt / optimeringsprobleem / eweknie-nagaan (Medium/Hard)
        { difficulty: 'Medium', question: 'Vind die draaipunt van y = x²+6x−7 deur die vierkant te voltooi.', checkMode: 'auto', correctAnswer: '(−3,−16)', correctAnswers: ['(−3,−16)', '(-3,-16)', '(−3, −16)', '(-3, -16)'], answer: '(−3, −16)', explanation: 'x²+6x−7 = (x+3)²−9−7 = (x+3)²−16.\nDraaipunt: x=−3, y=−16. Koördinate: (−3, −16) ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 32 m draad om ʼn reghoekige area teen ʼn skuurmuur aan een kant in te kamp. Laat die twee gelyke sye (loodreg op die muur) x meter wees. Vind die maksimum moontlike area.', answer: 'Laat loodregte sye = x. Parallelle sy = 32−2x.\nArea = x(32−2x) = −2x²+32x = −2(x−8)²+128.\nMaksimum area = 128 m² wanneer x = 8 m.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê elke kwadratiese ax²+bx+c met a≠0 kan die vierkant voltooi word, ongeag of b²−4ac ʼn volkome vierkant is. Is sy korrek? Verduidelik.', answer: 'Ja — die voltooiing van die vierkant is ʼn suiwer algebraïese proses (faktoriseer a uit, halveer en kwadreer die koëffisiënt van x) wat vir enige kwadratiese uitdrukking werk, ongeag of dit netjies faktoriseer.', checkMode: 'self' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (binoomnoemer) (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−1) / (x−1).', checkMode: 'auto', correctAnswer: 'x+1', correctAnswers: ['x+1'], answer: 'x+1', explanation: 'Faktoriseer teller: x²−1 = (x−1)(x+1).\nKanselleer (x−1): x+1, waar x ≠ 1 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−81) / (x+9).', checkMode: 'auto', correctAnswer: 'x−9', correctAnswers: ['x−9', 'x-9'], answer: 'x−9', explanation: 'Faktoriseer teller: x²−81 = (x−9)(x+9).\nKanselleer (x+9): x−9, waar x ≠ −9 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x²−2x−15) / (x−5).', checkMode: 'auto', correctAnswer: 'x+3', correctAnswers: ['x+3'], answer: 'x+3', explanation: 'Faktoriseer teller: x²−2x−15 = (x−5)(x+3).\nKanselleer (x−5): x+3, waar x ≠ 5 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+2)/(x²−4) − 1/(x−2).', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0'], answer: '0', explanation: 'Faktoriseer: x²−4 = (x−2)(x+2). Die eerste breuk word (x+2)/[(x−2)(x+2)] = 1/(x−2).\nTrek af: 1/(x−2) − 1/(x−2) = 0, waar x ≠ ±2 ✓' },

        // Blok 6 — Optel/aftrek van algebraïese breuke met binoomnoemers (Hard)
        { difficulty: 'Hard', question: 'Bereken 5/(x+2) + 3/(x−4), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x+2)(x−4).\nKombineer: [5(x−4) + 3(x+2)] / [(x+2)(x−4)] = (5x−20+3x+6) / [(x+2)(x−4)] = (8x−14) / [(x+2)(x−4)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 1/(x−6) + 4/(x+3), en toon die KGV en die kombinasiestappe.', answer: 'KGV = (x−6)(x+3).\nKombineer: [1(x+3) + 4(x−6)] / [(x−6)(x+3)] = (x+3+4x−24) / [(x−6)(x+3)] = (5x−21) / [(x−6)(x+3)].', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x+8)/(x²−64) + 1/(x−8).', checkMode: 'auto', correctAnswer: '2/(x−8)', correctAnswers: ['2/(x−8)', '2/(x-8)'], answer: '2/(x−8)', explanation: 'Faktoriseer noemer: x²−64 = (x−8)(x+8).\nEerste breuk: (x+8)/[(x−8)(x+8)] = 1/(x−8).\nTel op: 1/(x−8) + 1/(x−8) = 2/(x−8), waar x ≠ ±8 ✓' },
        { difficulty: 'Hard', question: 'Bongani vereenvoudig 3/(x+4) − 2/(x−1) en kry (x−11)/[(x+4)(x−1)]. Gaan sy antwoord na.', answer: 'Kombineer: [3(x−1) − 2(x+4)] / [(x+4)(x−1)] = (3x−3−2x−8) / [(x+4)(x−1)] = (x−11) / [(x+4)(x−1)]. Hy is korrek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die voltooiing van die vierkant en algebraïese breuke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die voltooiing van die vierkant of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die voltooiing van die vierkant en vereenvoudiging van breuke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
