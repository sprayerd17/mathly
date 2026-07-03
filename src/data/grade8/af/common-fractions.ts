import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// dividend / numerator / grouping → blue   (#2563eb)
// reciprocal / sharing            → orange (#ea580c)
// final answer                    → green  (#16a34a)
// denominator                     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — DEEL DEUR GEWONE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-by-common-fractions',
      title: 'Deel deur Gewone Breuke',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien optelling, aftrekking en vermenigvuldiging van gewone breuke en gemengde getalle, en brei dit dan uit na die <strong>deling</strong> van heelgetalle en breuke deur ʼn gewone breuk. Om deur ʼn breuk te deel, <strong>vermenigvuldig met sy resiprook</strong> — draai die tweede breuk om en verander ÷ na ×.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deeltal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('resiprook')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die resiprookreël</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Deel deur ʼn breuk = vermenigvuldig met sy resiprook</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('a')} ÷ ${or('b/c')} = ${bl('a')} × ${or('c/b')} = ${gr('antwoord')}<br>Die <strong>resiprook</strong> van ʼn breuk word verkry deur die teller en noemer om te ruil.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vind die resiprook</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resiprook van <strong>2/3</strong> is ${or('3/2')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Heelgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resiprook van <strong>5</strong> (= 5/1) is ${or('1/5')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gemengde getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skakel eers om: 1½ = 3/2, dan is die resiprook ${or('2/3')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Skakel gemengde getalle altyd eers om</p>` +
        `<p style="margin:0;color:#9a3412;">Skakel enige gemengde getalle na onegte breuke om voordat jy deel. Pas dan die resiprookreël toe.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 5 ÷ 2/3.',
          answer: `${bl('5')} ÷ 2/3 = ${bl('5')} × ${or('3/2')} = ${gr('15/2')} = ${gr('7 en 1/2')}`,
          steps: [
            `Skryf die deling neer: ${bl('5')} ÷ 2/3`,
            `Vermenigvuldig met die resiprook van 2/3, wat ${or('3/2')} is: ${bl('5')} × ${or('3/2')}`,
            `Bereken: 5 × ${or('3')} = 15 en die noemer is ${or('2')}: ${gr('15/2')}`,
            `Skakel om na ʼn gemengde getal: ${gr('15/2')} = ${gr('7 en 1/2')} ✓`,
          ],
        },
        {
          question: 'Bereken 3/4 ÷ 5/8.',
          answer: `${bl('3/4')} ÷ 5/8 = ${bl('3/4')} × ${or('8/5')} = ${gr('24/20')} = ${gr('6/5')} = ${gr('1 en 1/5')}`,
          steps: [
            `Skryf die deling neer: ${bl('3/4')} ÷ 5/8`,
            `Vermenigvuldig met die resiprook van 5/8, wat ${or('8/5')} is: ${bl('3/4')} × ${or('8/5')}`,
            `Vermenigvuldig die tellers en noemers: ${bl('3')} × ${or('8')} = 24 en ${bl('4')} × ${or('5')} = 20 → ${gr('24/20')}`,
            `Vereenvoudig deur beide deur 4 te deel: ${gr('24/20')} = ${gr('6/5')}`,
            `Skakel om na ʼn gemengde getal: ${gr('6/5')} = ${gr('1 en 1/5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 4 ÷ 1/2.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Vermenigvuldig met die resiprook: 4 ÷ 1/2 = 4 × 2/1 = 8/1 = 8 ✓',
        },

        // ── V2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 2/3 ÷ 4/9.',
          answer: '3/2',
          checkMode: 'auto',
          correctAnswer: '3/2',
          correctAnswers: ['3/2', '1 1/2', '1 en 1/2'],
          explanation: 'Vermenigvuldig met die resiprook: 2/3 × 9/4 = 18/12 = 3/2 = 1 en 1/2 ✓',
        },

        // ── V3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê 5 ÷ 2/5 = 2. Is hy korrek? Verduidelik.',
          answer: 'Nee — 5 ÷ 2/5 = 5 × 5/2 = 25/2 = 12 en 1/2, nie 2 nie.',
          checkMode: 'self',
        },

        // ── V10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 7/8 ÷ 3/4.',
          answer: '7/6',
          checkMode: 'auto',
          correctAnswer: '7/6',
          correctAnswers: ['7/6', '1 1/6', '1 en 1/6'],
          explanation: 'Vermenigvuldig met die resiprook: 7/8 × 4/3 = 28/24 = 7/6 = 1 en 1/6 ✓',
        },

        // ── V11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê om ʼn breuk deur ʼn ander breuk te deel gee altyd ʼn kleiner antwoord. Is hy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — byvoorbeeld 1/2 ÷ 1/4 = 2, wat groter is as die oorspronklike 1/2. Om deur ʼn breuk kleiner as 1 te deel gee ʼn groter resultaat.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om heelgetalle en breuke deur ʼn gewone breuk te deel met die resiprookmetode" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat deling deur ʼn breuk as vermenigvuldiging met sy resiprook wys met kleurgekodeerde deeltal en resiprook" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KWADRATE, KUBUSSE EN WORTELS VAN GEWONE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-fractions',
      title: 'Kwadrate, Kubusse en Wortels van Gewone Breuke',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons bereken die kwadrate, kubusse, vierkantswortels en kubuswortels van gewone breuke deur <strong>die bewerking apart op die teller en die noemer toe te pas</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Kwadrering</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(${bl('a')}/${re('b')})² = ${bl('a')}²/${re('b')}²<br>Voorbeeld: (2/3)² = ${bl('4')}/${re('9')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Kubering</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(${bl('a')}/${re('b')})³ = ${bl('a')}³/${re('b')}³<br>Voorbeeld: (2/3)³ = ${bl('8')}/${re('27')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierkantswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">√(${bl('a')}/${re('b')}) = √${bl('a')}/√${re('b')}<br>Voorbeeld: √(4/9) = ${bl('2')}/${re('3')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kubuswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">∛(${bl('a')}/${re('b')}) = ∛${bl('a')}/∛${re('b')}<br>Voorbeeld: ∛(8/27) = ${bl('2')}/${re('3')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Pas dieselfde bewerking op albei dele toe</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om ʼn breuk te kwadreer, te kubeer of ʼn wortel daarvan te vind, beteken om dieselfde bewerking onafhanklik op die ${bl('teller')} en die ${re('noemer')} toe te pas. Hou die breukstreep deurgaans in plek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken (2/3)².',
          answer: `(${bl('2')}/${re('3')})² = ${bl('2')}²/${re('3')}² = ${gr('4/9')}`,
          steps: [
            `Skryf die uitdrukking neer: (${bl('2')}/${re('3')})²`,
            `Kwadreer die ${bl('teller')}: ${bl('2')}² = ${bl('4')}`,
            `Kwadreer die ${re('noemer')}: ${re('3')}² = ${re('9')}`,
            `Resultaat: ${bl('4')}/${re('9')} = ${gr('4/9')} ✓`,
          ],
        },
        {
          question: 'Vind die kubuswortel van 8/27.',
          answer: `∛(${bl('8')}/${re('27')}) = ∛${bl('8')}/∛${re('27')} = ${gr('2/3')}`,
          steps: [
            `Skryf die uitdrukking neer: ∛(${bl('8')}/${re('27')})`,
            `Vind die kubuswortel van die ${bl('teller')}: ∛${bl('8')} = ${bl('2')} (aangesien 2³ = 8)`,
            `Vind die kubuswortel van die ${re('noemer')}: ∛${re('27')} = ${re('3')} (aangesien 3³ = 27)`,
            `Resultaat: ${bl('2')}/${re('3')} = ${gr('2/3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken (3/4)².',
          answer: '9/16',
          checkMode: 'auto',
          correctAnswer: '9/16',
          explanation: 'Kwadreer die teller en noemer apart: 3²/4² = 9/16 ✓',
        },

        // ── V5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken (2/5)³.',
          answer: '8/125',
          checkMode: 'auto',
          correctAnswer: '8/125',
          explanation: 'Kubeer die teller en noemer apart: 2³/5³ = 8/125 ✓',
        },

        // ── V6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die vierkantswortel van 16/25.',
          answer: '√16/√25 = 4/5',
          checkMode: 'self',
        },

        // ── V7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die kubuswortel van 1/8.',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          explanation: '∛1/∛8 = 1/2 (aangesien 1³ = 1 en 2³ = 8) ✓',
        },

        // ── V12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (1/3)² + (2/3)².',
          answer: '5/9',
          checkMode: 'auto',
          correctAnswer: '5/9',
          explanation: '(1/3)² = 1/9 en (2/3)² = 4/9. Dan 1/9 + 4/9 = 5/9 ✓',
        },

        // ── V14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê √(9/16) is gelyk aan 3/4 omdat 3² = 9 en 4² = 16. Is sy redenasie korrek?',
          answer: 'Ja — sy redenasie is korrek aangesien die vierkantswortel van ʼn breuk die vierkantswortel van die teller oor die vierkantswortel van die noemer is: √9/√16 = 3/4.',
          checkMode: 'self',
        },

        // ── V15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 2/3 ÷ (1/3)².',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Bereken eers (1/3)² = 1/9. Dan 2/3 ÷ 1/9 = 2/3 × 9/1 = 18/3 = 6 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kwadrate, kubusse, vierkantswortels en kubuswortels van gewone breuke te bereken deur bewerkings apart op teller en noemer toe te pas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat kwadrering en vierkantswortel van ʼn breuk wys met teller uitgelig in blou en noemer uitgelig in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — PROBLEEMOPLOSSING MET BREUKE, GEMENGDE GETALLE EN GROEPERING/DELING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fraction-word-problems',
      title: 'Probleemoplossing met Breuke, Gemengde Getalle en Groepering/Deling',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike-lewe-probleme op wat gewone breuke en gemengde getalle behels, insluitend <strong>groepering</strong> (hoeveel groepe van ʼn breuk pas in ʼn geheel) en <strong>deling</strong> (om ʼn geheel in breukdele te verdeel), deur resiprookverwantskappe te gebruik om breuke te deel.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('groepering')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('deling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Groepering teenoor Deling</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Groepering')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy ken die totaal en die grootte van elke groep. Vind <strong>hoeveel groepe</strong> in die totaal pas.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: Hoeveel stukke van 3/4 m kan van 6½ m tou gesny word?</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Deling')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy ken die totaal en die aantal mense. Vind <strong>watter breukdeel elke persoon kry</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 4/5 van ʼn koek word onder 3 mense verdeel — hoeveel kry elkeen?</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Strategie vir woordprobleme</p>` +
        `<p style="margin:0;color:#15803d;"><strong>Stap 1</strong> — Besluit: is dit groepering of deling?<br><strong>Stap 2</strong> — Skakel enige gemengde getalle na onegte breuke om.<br><strong>Stap 3</strong> — Skryf die deling neer en vermenigvuldig met die resiprook.<br><strong>Stap 4</strong> — Vereenvoudig en interpreteer die antwoord binne konteks.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho het 6 en 1/2 meter tou en sny dit in stukke van 3/4 meter elk. Hoeveel stukke kry hy?',
          answer: `${bl('Groepering')}-probleem: ${bl('6½')} ÷ 3/4 = ${bl('13/2')} × ${or('4/3')} = ${gr('52/6')} = ${gr('8 en 2/3')} → ${gr('8')} volle stukke`,
          steps: [
            `Dit is ʼn ${bl('groeperings')}probleem — ons vind hoeveel groepe van 3/4 in 6½ pas.`,
            `Skakel die gemengde getal om: 6½ = ${bl('13/2')}`,
            `Skryf die deling neer en vermenigvuldig met die resiprook: ${bl('13/2')} × ${or('4/3')} = ${gr('52/6')}`,
            `Vereenvoudig: ${gr('52/6')} = ${gr('26/3')} = ${gr('8 en 2/3')}`,
            `<strong>Antwoord:</strong> Sipho kry ${gr('8')} volle stukke (die oorblywende 2/3 stuk is te kort) ✓`,
          ],
        },
        {
          question: 'Lerato verdeel 4/5 van ʼn koek gelykop onder 3 mense. Watter breukdeel kry elke persoon?',
          answer: `${or('Delings')}probleem: ${or('4/5')} ÷ 3 = ${or('4/5')} × 1/3 = ${gr('4/15')}`,
          steps: [
            `Dit is ʼn ${or('delings')}probleem — ons verdeel 4/5 onder 3 mense.`,
            `Skryf die deling neer: ${or('4/5')} ÷ 3`,
            `Skryf 3 as 3/1, sodat die resiprook 1/3 is.`,
            `Vermenigvuldig met die resiprook: ${or('4/5')} × 1/3 = ${gr('4/15')}`,
            `<strong>Antwoord:</strong> Elke persoon kry ${gr('4/15')} van die koek ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato het 5 en 1/4 liter sap en giet dit in bottels van 3/4 liter elk. Hoeveel bottels kan sy vol maak?',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Skakel om: 5¼ = 21/4. Dan 21/4 ÷ 3/4 = 21/4 × 4/3 = 84/12 = 7 ✓',
        },

        // ── V9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle verdeel 5/6 van ʼn pizza gelykop onder 4 mense. Watter breukdeel kry elke persoon?',
          answer: '5/24',
          checkMode: 'auto',
          correctAnswer: '5/24',
          explanation: '5/6 ÷ 4 = 5/6 × 1/4 = 5/24 ✓',
        },

        // ── V13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Stuk hout is 8 en 1/3 meter lank. Dit word in stukke van 5/6 meter elk gesny. Hoeveel volle stukke kan gesny word?',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Skakel om: 8⅓ = 25/3. Dan 25/3 ÷ 5/6 = 25/3 × 6/5 = 150/15 = 10 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om groeperings- en delingsprobleme met gewone breuke en gemengde getalle op te los" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat groepering uitgelig in blou en deling uitgelig in oranje wys met ʼn uitgewerkte voorbeeld van die deling van ʼn gemengde getal deur ʼn breuk" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk deur die gids weer.' },
  ],
}
