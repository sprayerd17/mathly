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
        '<VideoPlaceholder label="Kort video wat vierkantsgetalle en kwadraatwortels verduidelik met visuele voorbeelde van kwadratering en die vind van die kwadraatwortel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele rooster wat vierkantsgetalle van 1² tot 12² wys met kleurgekodeerde grondgetal in blou en eksponent in oranje en ooreenstemmende kwadraatwortel in groen" />',
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
        '<VideoPlaceholder label="Kort video wat kubusgetalle en kubuswortels verduidelik met visuele 3D-kubusvoorbeelde en kleurgekodeerde werk" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele diagram wat kubusgetalle van 1³ tot 5³ as 3D-kubusse wys met kleurgekodeerde grondgetal in blou, eksponent in oranje en kubuswortel in groen" />',
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
        '<VideoPlaceholder label="Kort video wat eksponensiële notasie verduidelik en wys hoe om uitdrukkings met enige grondgetal en eksponent uit te brei en te evalueer, insluitend die mag-van-0- en mag-van-1-reëls" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die struktuur van eksponensiële notasie wys met grondgetal in blou, eksponent in oranje, uitgebreide herhaalde vermenigvuldiging in groen en finale antwoord in rooi" />',
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
}
