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
        'Kort video wat wys hoe om heelgetalle en breuke deur ʼn gewone breuk te deel met die resiprookmetode',

      diagramPlaceholder:
        'Diagram wat die deler 2/3 omgekeer wys as sy resiprook 3/2, wat a ÷ b/c = a × c/b illustreer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="60" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">deler</text>` +
        `<line x1="35" y1="55" x2="85" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="60" y="48" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="60" y="75" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="180" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">resiprook</text>` +
        `<line x1="155" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="180" y="48" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="180" y="75" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">2</text>` +
        `<path d="M90,40 C120,10 140,10 160,40" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="160,40 150,36 154,46" fill="#2563eb"/>` +
        `<path d="M90,70 C120,100 140,100 160,70" fill="none" stroke="#dc2626" stroke-width="2"/>` +
        `<polygon points="160,70 150,74 154,64" fill="#dc2626"/>` +
        `<text x="120" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">a ÷ b/c = a × c/b</text>` +
        `<text x="120" y="132" text-anchor="middle" font-size="10" fill="#6b7280">ruil teller en noemer om</text>` +
        `</svg>`,
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
        'Kort video wat wys hoe om kwadrate, kubusse, vierkantswortels en kubuswortels van gewone breuke te bereken deur bewerkings apart op teller en noemer toe te pas',

      diagramPlaceholder:
        'Oppervlaktemodel van ʼn 3-by-3-rooster met ʼn 2-by-3-geskakeerde blok wat (2/3)² = 4/9 wys',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 210" width="100%" style="max-width:260px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="30" y="20" width="120" height="120" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="70" y1="20" x2="70" y2="140" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="110" y1="20" x2="110" y2="140" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="30" y1="60" x2="150" y2="60" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="30" y1="100" x2="150" y2="100" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="30" y="20" width="80" height="80" fill="rgba(37,99,235,0.28)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="90" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2/3</text>` +
        `<text x="16" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" transform="rotate(-90 16 65)">2/3</text>` +
        `<text x="100" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4/9</text>` +
        `<text x="90" y="165" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">(2/3)² = 4/9</text>` +
        `</svg>`,
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
        'Kort video wat wys hoe om groeperings- en delingsprobleme met gewone breuke en gemengde getalle op te los',

      diagramPlaceholder:
        'Staafmodel van ʼn 6½ m tou gesny in agt stukke van 3/4 m, met die kort oorblywende stuk apart gewys',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="170" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">6½ m tou</text>` +
        `<rect x="20" y="30" width="300" height="34" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 8 }, (_, i) => `<rect x="${(20 + i * 34.6).toFixed(1)}" y="30" width="34.6" height="34" fill="${i % 2 === 0 ? 'rgba(37,99,235,0.18)' : 'rgba(37,99,235,0.32)'}" stroke="#2563eb" stroke-width="1"/>`).join('') +
        `<rect x="296.8" y="30" width="23.2" height="34" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>` +
        `<text x="170" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">8 stukke van 3/4 m</text>` +
        `<text x="308" y="82" text-anchor="middle" font-size="8" fill="#6b7280">oorblywend</text>` +
        `<text x="170" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">8 volle stukke</text>` +
        `</svg>`,
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk deur die gids weer.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Bloklayout per stel: 0-2 gemengde bewerkings & bewerkingsvolgorde met breuke
  // (Medium/Moeilik) | 3-5 kwadrate, kubusse en wortels van breuke gekombineer met
  // ander bewerkings (Medium-Moeilik/Moeilik) | 6-9 deling deur breuke en gemengde
  // getalle met die resiprook, ingesluit gekombineer met eksponente (Medium-
  // Moeilik/Moeilik) | 10-13 groeperings- en delingsvraagstukke met gemengde
  // getalle (Medium-Moeilik/Moeilik) | 14-16 multi-stap vraagstukke met gemengde
  // getalle / multi-bewerking redenasie (Moeilik) | 17-19 foutopsporing, kritiek
  // en vergelyking/rangskikking (Moeilik)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1: gemengde bewerkings / bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 2/3 + 1/4 × 2/5, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '23/30', checkMode: 'auto', correctAnswer: '23/30', correctAnswers: ['23/30'], explanation: 'Stap 1: Vermenigvuldiging voor optelling: 1/4 × 2/5 = 2/20 = 1/10.\nStap 2: Vind die LGV van 3 en 10: LGV = 30. Skakel om: 2/3 = 20/30, 1/10 = 3/30.\nStap 3: Tel die tellers bymekaar: 20 + 3 = 23.\nAntwoord: 23/30 ✓' },
        { difficulty: 'Hard', question: 'Bereken (3/4 − 1/2) × 2/5 + 1/10.', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Stap 1: Werk eers die hakie uit: 3/4 − 1/2 = 3/4 − 2/4 = 1/4.\nStap 2: Vermenigvuldig: 1/4 × 2/5 = 2/20 = 1/10.\nStap 3: Tel by: 1/10 + 1/10 = 2/10 = 1/5.\nAntwoord: 1/5 ✓' },
        { difficulty: 'Hard', question: 'Bereken 1/2 van (3/4 + 1/8), en trek dan 1/4 af.', answer: '3/16', checkMode: 'auto', correctAnswer: '3/16', correctAnswers: ['3/16'], explanation: 'Stap 1: Werk die hakie uit: 3/4 + 1/8 = 6/8 + 1/8 = 7/8.\nStap 2: "1/2 van" beteken vermenigvuldig: 1/2 × 7/8 = 7/16.\nStap 3: Trek af: 7/16 − 1/4 = 7/16 − 4/16 = 3/16.\nAntwoord: 3/16 ✓' },

        // Blok 2: kwadrate, kubusse en wortels van breuke gekombineer met ander bewerkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (2/3)² + 1/3.', answer: '7/9', checkMode: 'auto', correctAnswer: '7/9', correctAnswers: ['7/9'], explanation: 'Stap 1: Kwadreer die breuk: (2/3)² = 4/9.\nStap 2: Vind die LGV van 9 en 3: LGV = 9. Skakel om: 1/3 = 3/9.\nStap 3: Tel die tellers bymekaar: 4 + 3 = 7.\nAntwoord: 7/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(9/16) × 2/3.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Vind die vierkantswortel: √(9/16) = √9/√16 = 3/4.\nStap 2: Vermenigvuldig: 3/4 × 2/3 = 6/12.\nStap 3: Vereenvoudig deur beide deur 6 te deel: 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken (1/2)³ + (3/4)².', answer: '11/16', checkMode: 'auto', correctAnswer: '11/16', correctAnswers: ['11/16'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/2)³ = 1/8.\nStap 2: Kwadreer die tweede breuk: (3/4)² = 9/16.\nStap 3: Vind die LGV van 8 en 16: LGV = 16. Skakel om: 1/8 = 2/16.\nStap 4: Tel die tellers bymekaar: 2 + 9 = 11.\nAntwoord: 11/16 ✓' },

        // Blok 3: deling deur breuke/gemengde getalle met die resiprook, ingesluit eksponente (V7-10)
        { difficulty: 'Medium', question: 'Bereken 5/6 ÷ 2/3.', answer: '1 en 1/4', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 en 1/4', '1 1/4', '5/4'], explanation: 'Stap 1: Vermenigvuldig met die resiprook van 2/3, wat 3/2 is: 5/6 × 3/2.\nStap 2: Vermenigvuldig die tellers: 5 × 3 = 15. Vermenigvuldig die noemers: 6 × 2 = 12.\nStap 3: Resultaat: 15/12. Vereenvoudig deur beide deur 3 te deel: 5/4.\nAntwoord: 1 en 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 2 en 1/4 ÷ 3/8.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Stap 1: Skakel om na ʼn onegte breuk: 2 en 1/4 = 9/4.\nStap 2: Vermenigvuldig met die resiprook van 3/8, wat 8/3 is: 9/4 × 8/3.\nStap 3: Vermenigvuldig die tellers: 9 × 8 = 72. Vermenigvuldig die noemers: 4 × 3 = 12.\nStap 4: Resultaat: 72/12 = 6.\nAntwoord: 6 ✓' },
        { difficulty: 'Hard', question: 'Bereken 3/5 ÷ (1/2)².', answer: '2 en 2/5', checkMode: 'auto', correctAnswer: '2 and 2/5', correctAnswers: ['2 and 2/5', '2 en 2/5', '2 2/5', '12/5'], explanation: 'Stap 1: Werk eers die mag uit: (1/2)² = 1/4.\nStap 2: Deel: 3/5 ÷ 1/4 = 3/5 × 4/1 = 12/5.\nStap 3: Skakel om na ʼn gemengde getal: 12 ÷ 5 = 2 res 2.\nAntwoord: 2 en 2/5 ✓' },
        { difficulty: 'Hard', question: 'Bereken 4 ÷ 2/3 − 1/3, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '5 en 2/3', checkMode: 'auto', correctAnswer: '5 and 2/3', correctAnswers: ['5 and 2/3', '5 en 2/3', '5 2/3', '17/3'], explanation: 'Stap 1: Deling voor aftrekking: 4 ÷ 2/3 = 4 × 3/2 = 12/2 = 6.\nStap 2: Trek af: 6 − 1/3 = 18/3 − 1/3 = 17/3.\nStap 3: Skakel om na ʼn gemengde getal: 17 ÷ 3 = 5 res 2.\nAntwoord: 5 en 2/3 ✓' },

        // Blok 4: groeperings- en delingsvraagstukke met gemengde getalle (V11-14)
        { difficulty: 'Medium-Hard', question: 'ʼn Bouer het 7 en 1/2 m pyp en sny dit in stukke van 5/6 m elk. Hoeveel volle stukke kan hy sny?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Stap 1: Skakel 7 en 1/2 om na ʼn onegte breuk: 15/2.\nStap 2: Deel: 15/2 ÷ 5/6 = 15/2 × 6/5 = 90/10 = 9.\nAntwoord: 9 volle stukke ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Watertenk wat 7/8 van sy kapasiteit hou, word gelykop onder 5 huishoudings verdeel. Watter breukdeel van die tenk ontvang elke huishouding?', answer: '7/40', checkMode: 'auto', correctAnswer: '7/40', correctAnswers: ['7/40'], explanation: 'Stap 1: Skryf 5 as 5/1, sodat die resiprook 1/5 is.\nStap 2: Deel: 7/8 ÷ 5 = 7/8 × 1/5 = 7/40.\nAntwoord: 7/40 van die tenk ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 9 en 3/4 kg rys en pak dit in sakke van 3/8 kg elk. Hoeveel volle sakke kan sy pak?', answer: '26', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26'], explanation: 'Stap 1: Skakel 9 en 3/4 om na ʼn onegte breuk: 39/4.\nStap 2: Deel: 39/4 ÷ 3/8 = 39/4 × 8/3 = 312/12 = 26.\nAntwoord: 26 volle sakke ✓' },
        { difficulty: 'Hard', question: 'ʼn Vader laat 5/6 van sy plaas na, om gelykop onder sy 4 kinders verdeel te word. Watter breukdeel van die hele plaas erf elke kind?', answer: '5/24', checkMode: 'auto', correctAnswer: '5/24', correctAnswers: ['5/24'], explanation: 'Stap 1: Skryf 4 as 4/1, sodat die resiprook 1/4 is.\nStap 2: Deel: 5/6 ÷ 4 = 5/6 × 1/4 = 5/24.\nAntwoord: 5/24 van die plaas ✓' },

        // Blok 5: multi-stap vraagstukke met gemengde getalle / multi-bewerking redenasie (V15-17)
        { difficulty: 'Hard', question: 'ʼn Tenk is 3/4 vol. Gedurende die dag word 2/5 van die water in die tenk gebruik. Watter breukdeel van die hele tenk is nog oor aan die einde van die dag?', answer: '9/20', checkMode: 'auto', correctAnswer: '9/20', correctAnswers: ['9/20'], explanation: 'Stap 1: Vind die breukdeel wat gebruik is: 3/4 × 2/5 = 6/20 = 3/10.\nStap 2: Trek af van die beginhoeveelheid: 3/4 − 3/10. Vind die LGV van 4 en 10: LGV = 20. Skakel om: 3/4 = 15/20, 3/10 = 6/20.\nStap 3: Trek die tellers af: 15 − 6 = 9.\nAntwoord: 9/20 van die hele tenk ✓' },
        { difficulty: 'Hard', question: 'Zinhle verdien R240 vir ʼn naweekwerkie. Sy spandeer 1/3 daarvan aan data, en spandeer dan 1/4 van wat oorbly aan vervoer. Hoeveel geld het sy nog oor?', answer: 'R120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', 'R120'], explanation: 'Stap 1: Datakoste: 1/3 × R240 = R80. Oorblywend: R240 − R80 = R160.\nStap 2: Vervoerkoste: 1/4 × R160 = R40. Oorblywend: R160 − R40 = R120.\nAntwoord: R120 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 2/3 koppie suiker per bondel beskuitjies. Palesa maak 1 en 1/2 bondels, en voeg dan ʼn ekstra 1/4 koppie suiker vir ʼn versiering by. Hoeveel suiker gebruik sy altesaam?', answer: '1 en 1/4 koppies', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 en 1/4', '1 1/4', '5/4', '1 en 1/4 koppies'], explanation: 'Stap 1: Suiker vir die bondels: 2/3 × 1 en 1/2 = 2/3 × 3/2 = 6/6 = 1.\nStap 2: Tel die versiering by: 1 + 1/4 = 1 en 1/4.\nAntwoord: 1 en 1/4 koppies ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Bongani sê 2/3 ÷ 1/6 = 1/9, omdat hy die eerste breuk omgedraai het in plaas van die tweede. Wat is die korrekte antwoord?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Stap 1: Om deur ʼn breuk te deel, draai die tweede breuk (1/6) om, nie die eerste nie: resiprook van 1/6 is 6/1.\nStap 2: Vermenigvuldig: 2/3 × 6/1 = 12/3 = 4.\nAntwoord: 4 ✓ (Bongani het die fout gemaak om die verkeerde breuk om te draai.)' },
        { difficulty: 'Hard', question: 'Is 3/4 ÷ 1/2 gelyk aan 3/4 × 2? Bereken albei en verduidelik hoekom of hoekom nie.', answer: 'Ja — albei is gelyk aan 3/2 (1 en 1/2), want om deur 1/2 te deel is dieselfde as om met sy resiprook te vermenigvuldig, wat 2 is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: 5/8, √(1/4) + 1/4, (1/2)² + 1/4.', answer: '1/2, 5/8, 3/4', checkMode: 'auto', correctAnswer: '1/2, 5/8, 3/4', correctAnswers: ['1/2, 5/8, 3/4', '1/2; 5/8; 3/4'], explanation: 'Stap 1: Bereken elkeen: 5/8 bly soos dit is. √(1/4) + 1/4 = 1/2 + 1/4 = 3/4. (1/2)² + 1/4 = 1/4 + 1/4 = 1/2.\nStap 2: Vergelyk 5/8, 3/4 en 1/2 met 24stes: 1/2 = 12/24, 5/8 = 15/24, 3/4 = 18/24.\nStap 3: Rangskik: 1/2 < 5/8 < 3/4.\nAntwoord: 1/2, 5/8, 3/4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn baie stewige begrip van Graad 8 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1: gemengde bewerkings / bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 3/5 + 1/2 × 2/3, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '14/15', checkMode: 'auto', correctAnswer: '14/15', correctAnswers: ['14/15'], explanation: 'Stap 1: Vermenigvuldiging voor optelling: 1/2 × 2/3 = 2/6 = 1/3.\nStap 2: Vind die LGV van 5 en 3: LGV = 15. Skakel om: 3/5 = 9/15, 1/3 = 5/15.\nStap 3: Tel die tellers bymekaar: 9 + 5 = 14.\nAntwoord: 14/15 ✓' },
        { difficulty: 'Hard', question: 'Bereken (5/6 − 1/3) × 3/4 + 1/8.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Werk eers die hakie uit: 5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2.\nStap 2: Vermenigvuldig: 1/2 × 3/4 = 3/8.\nStap 3: Tel by: 3/8 + 1/8 = 4/8 = 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken 1/3 van (2/3 + 1/6), en trek dan 1/6 af.', answer: '1/9', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9'], explanation: 'Stap 1: Werk die hakie uit: 2/3 + 1/6 = 4/6 + 1/6 = 5/6.\nStap 2: "1/3 van" beteken vermenigvuldig: 1/3 × 5/6 = 5/18.\nStap 3: Trek af: 5/18 − 1/6 = 5/18 − 3/18 = 2/18 = 1/9.\nAntwoord: 1/9 ✓' },

        // Blok 2: kwadrate, kubusse en wortels van breuke gekombineer met ander bewerkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (3/5)² + 1/5.', answer: '14/25', checkMode: 'auto', correctAnswer: '14/25', correctAnswers: ['14/25'], explanation: 'Stap 1: Kwadreer die breuk: (3/5)² = 9/25.\nStap 2: Vind die LGV van 25 en 5: LGV = 25. Skakel om: 1/5 = 5/25.\nStap 3: Tel die tellers bymekaar: 9 + 5 = 14.\nAntwoord: 14/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(4/9) × 3/4.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Vind die vierkantswortel: √(4/9) = √4/√9 = 2/3.\nStap 2: Vermenigvuldig: 2/3 × 3/4 = 6/12.\nStap 3: Vereenvoudig deur beide deur 6 te deel: 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken (1/3)³ + (2/3)².', answer: '13/27', checkMode: 'auto', correctAnswer: '13/27', correctAnswers: ['13/27'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/3)³ = 1/27.\nStap 2: Kwadreer die tweede breuk: (2/3)² = 4/9.\nStap 3: Vind die LGV van 27 en 9: LGV = 27. Skakel om: 4/9 = 12/27.\nStap 4: Tel die tellers bymekaar: 1 + 12 = 13.\nAntwoord: 13/27 ✓' },

        // Blok 3: deling deur breuke/gemengde getalle met die resiprook, ingesluit eksponente (V7-10)
        { difficulty: 'Medium', question: 'Bereken 7/9 ÷ 2/3.', answer: '1 en 1/6', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 en 1/6', '1 1/6', '7/6'], explanation: 'Stap 1: Vermenigvuldig met die resiprook van 2/3, wat 3/2 is: 7/9 × 3/2.\nStap 2: Vermenigvuldig die tellers: 7 × 3 = 21. Vermenigvuldig die noemers: 9 × 2 = 18.\nStap 3: Resultaat: 21/18. Vereenvoudig deur beide deur 3 te deel: 7/6.\nAntwoord: 1 en 1/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 3 en 1/3 ÷ 5/9.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Stap 1: Skakel om na ʼn onegte breuk: 3 en 1/3 = 10/3.\nStap 2: Vermenigvuldig met die resiprook van 5/9, wat 9/5 is: 10/3 × 9/5.\nStap 3: Vermenigvuldig die tellers: 10 × 9 = 90. Vermenigvuldig die noemers: 3 × 5 = 15.\nStap 4: Resultaat: 90/15 = 6.\nAntwoord: 6 ✓' },
        { difficulty: 'Hard', question: 'Bereken 5/8 ÷ (1/2)².', answer: '2 en 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 en 1/2', '2 1/2', '5/2'], explanation: 'Stap 1: Werk eers die mag uit: (1/2)² = 1/4.\nStap 2: Deel: 5/8 ÷ 1/4 = 5/8 × 4/1 = 20/8 = 5/2.\nStap 3: Skakel om na ʼn gemengde getal: 5 ÷ 2 = 2 res 1.\nAntwoord: 2 en 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken 6 ÷ 3/4 − 1/2, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '7 en 1/2', checkMode: 'auto', correctAnswer: '7 and 1/2', correctAnswers: ['7 and 1/2', '7 en 1/2', '7 1/2', '15/2'], explanation: 'Stap 1: Deling voor aftrekking: 6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8.\nStap 2: Trek af: 8 − 1/2 = 16/2 − 1/2 = 15/2.\nStap 3: Skakel om na ʼn gemengde getal: 15 ÷ 2 = 7 res 1.\nAntwoord: 7 en 1/2 ✓' },

        // Blok 4: groeperings- en delingsvraagstukke met gemengde getalle (V11-14)
        { difficulty: 'Medium-Hard', question: 'ʼn Elektrisiën het 8 en 1/4 m kabel en sny dit in stukke van 3/8 m elk. Hoeveel volle stukke kan hy sny?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22'], explanation: 'Stap 1: Skakel 8 en 1/4 om na ʼn onegte breuk: 33/4.\nStap 2: Deel: 33/4 ÷ 3/8 = 33/4 × 8/3 = 264/12 = 22.\nAntwoord: 22 volle stukke ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stuk grond van 5/6 van ʼn hektaar word gelykop onder 4 boere verdeel. Watter breukdeel van ʼn hektaar ontvang elke boer?', answer: '5/24', checkMode: 'auto', correctAnswer: '5/24', correctAnswers: ['5/24'], explanation: 'Stap 1: Skryf 4 as 4/1, sodat die resiprook 1/4 is.\nStap 2: Deel: 5/6 ÷ 4 = 5/6 × 1/4 = 5/24.\nAntwoord: 5/24 van ʼn hektaar ✓' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 11 en 1/4 kg suiker en pak dit in sakke van 5/8 kg elk. Hoeveel volle sakke kan dit pak?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Stap 1: Skakel 11 en 1/4 om na ʼn onegte breuk: 45/4.\nStap 2: Deel: 45/4 ÷ 5/8 = 45/4 × 8/5 = 360/20 = 18.\nAntwoord: 18 volle sakke ✓' },
        { difficulty: 'Hard', question: 'ʼn Moeder laat 7/10 van haar tuin na, om gelykop onder haar 3 kinders verdeel te word. Watter breukdeel van die hele tuin erf elke kind?', answer: '7/30', checkMode: 'auto', correctAnswer: '7/30', correctAnswers: ['7/30'], explanation: 'Stap 1: Skryf 3 as 3/1, sodat die resiprook 1/3 is.\nStap 2: Deel: 7/10 ÷ 3 = 7/10 × 1/3 = 7/30.\nAntwoord: 7/30 van die tuin ✓' },

        // Blok 5: multi-stap vraagstukke met gemengde getalle / multi-bewerking redenasie (V15-17)
        { difficulty: 'Hard', question: 'ʼn Tenk is 5/6 vol. Gedurende die dag word 3/5 van die water in die tenk gebruik. Watter breukdeel van die hele tenk is nog oor aan die einde van die dag?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Stap 1: Vind die breukdeel wat gebruik is: 5/6 × 3/5 = 15/30 = 1/2.\nStap 2: Trek af van die beginhoeveelheid: 5/6 − 1/2. Vind die LGV van 6 en 2: LGV = 6. Skakel om: 1/2 = 3/6.\nStap 3: Trek die tellers af: 5 − 3 = 2, wat 2/6 = 1/3 gee.\nAntwoord: 1/3 van die hele tenk ✓' },
        { difficulty: 'Hard', question: 'Thabiso verdien R360 met tuinwerk. Hy spandeer 1/4 daarvan aan huur, en spandeer dan 1/3 van wat oorbly aan kos. Hoeveel geld het hy nog oor?', answer: 'R180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', 'R180'], explanation: 'Stap 1: Huurkoste: 1/4 × R360 = R90. Oorblywend: R360 − R90 = R270.\nStap 2: Koskoste: 1/3 × R270 = R90. Oorblywend: R270 − R90 = R180.\nAntwoord: R180 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 3/4 koppie melk per bondel pannekoeke. Naledi maak 1 en 1/3 bondels, en voeg dan ʼn ekstra 1/6 koppie melk by om die deeg dunner te maak. Hoeveel melk gebruik sy altesaam?', answer: '1 en 1/6 koppies', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 en 1/6', '1 1/6', '7/6', '1 en 1/6 koppies'], explanation: 'Stap 1: Melk vir die bondels: 3/4 × 1 en 1/3 = 3/4 × 4/3 = 12/12 = 1.\nStap 2: Tel die ekstra by: 1 + 1/6 = 1 en 1/6.\nAntwoord: 1 en 1/6 koppies ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Nomsa sê 3/5 ÷ 1/10 = 1/6, omdat sy die eerste breuk omgedraai het in plaas van die tweede. Wat is die korrekte antwoord?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Stap 1: Om deur ʼn breuk te deel, draai die tweede breuk (1/10) om, nie die eerste nie: resiprook van 1/10 is 10/1.\nStap 2: Vermenigvuldig: 3/5 × 10/1 = 30/5 = 6.\nAntwoord: 6 ✓ (Nomsa het die fout gemaak om die verkeerde breuk om te draai.)' },
        { difficulty: 'Hard', question: 'Is 5/6 ÷ 1/3 gelyk aan 5/6 × 3? Bereken albei en verduidelik hoekom of hoekom nie.', answer: 'Ja — albei is gelyk aan 5/2 (2 en 1/2), want om deur 1/3 te deel is dieselfde as om met sy resiprook te vermenigvuldig, wat 3 is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: 7/12, √(1/9) + 1/3, (1/3)² + 1/3.', answer: '4/9, 7/12, 2/3', checkMode: 'auto', correctAnswer: '4/9, 7/12, 2/3', correctAnswers: ['4/9, 7/12, 2/3', '4/9; 7/12; 2/3'], explanation: 'Stap 1: Bereken elkeen: 7/12 bly soos dit is. √(1/9) + 1/3 = 1/3 + 1/3 = 2/3. (1/3)² + 1/3 = 1/9 + 1/3 = 1/9 + 3/9 = 4/9.\nStap 2: Vergelyk 7/12, 2/3 en 4/9 met 36stes: 7/12 = 21/36, 2/3 = 24/36, 4/9 = 16/36.\nStap 3: Rangskik: 4/9 < 7/12 < 2/3.\nAntwoord: 4/9, 7/12, 2/3 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn baie stewige begrip van Graad 8 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1: gemengde bewerkings / bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 5/6 + 1/3 × 3/8, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '23/24', checkMode: 'auto', correctAnswer: '23/24', correctAnswers: ['23/24'], explanation: 'Stap 1: Vermenigvuldiging voor optelling: 1/3 × 3/8 = 3/24 = 1/8.\nStap 2: Vind die LGV van 6 en 8: LGV = 24. Skakel om: 5/6 = 20/24, 1/8 = 3/24.\nStap 3: Tel die tellers bymekaar: 20 + 3 = 23.\nAntwoord: 23/24 ✓' },
        { difficulty: 'Hard', question: 'Bereken (7/8 − 1/4) × 2/5 + 1/4.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Werk eers die hakie uit: 7/8 − 1/4 = 7/8 − 2/8 = 5/8.\nStap 2: Vermenigvuldig: 5/8 × 2/5 = 10/40 = 1/4.\nStap 3: Tel by: 1/4 + 1/4 = 2/4 = 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken 1/4 van (2/5 + 3/10), en trek dan 1/8 af.', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20'], explanation: 'Stap 1: Werk die hakie uit: 2/5 + 3/10 = 4/10 + 3/10 = 7/10.\nStap 2: "1/4 van" beteken vermenigvuldig: 1/4 × 7/10 = 7/40.\nStap 3: Trek af: 7/40 − 1/8 = 7/40 − 5/40 = 2/40 = 1/20.\nAntwoord: 1/20 ✓' },

        // Blok 2: kwadrate, kubusse en wortels van breuke gekombineer met ander bewerkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (4/5)² − 1/5.', answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25'], explanation: 'Stap 1: Kwadreer die breuk: (4/5)² = 16/25.\nStap 2: Vind die LGV van 25 en 5: LGV = 25. Skakel om: 1/5 = 5/25.\nStap 3: Trek die tellers af: 16 − 5 = 11.\nAntwoord: 11/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(16/25) × 5/8.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Stap 1: Vind die vierkantswortel: √(16/25) = √16/√25 = 4/5.\nStap 2: Vermenigvuldig: 4/5 × 5/8 = 20/40.\nStap 3: Vereenvoudig deur beide deur 20 te deel: 1/2.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken (1/4)³ + (3/4)².', answer: '37/64', checkMode: 'auto', correctAnswer: '37/64', correctAnswers: ['37/64'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/4)³ = 1/64.\nStap 2: Kwadreer die tweede breuk: (3/4)² = 9/16.\nStap 3: Vind die LGV van 64 en 16: LGV = 64. Skakel om: 9/16 = 36/64.\nStap 4: Tel die tellers bymekaar: 1 + 36 = 37.\nAntwoord: 37/64 ✓' },

        // Blok 3: deling deur breuke/gemengde getalle met die resiprook, ingesluit eksponente (V7-10)
        { difficulty: 'Medium', question: 'Bereken 5/7 ÷ 2/7.', answer: '2 en 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 en 1/2', '2 1/2', '5/2'], explanation: 'Stap 1: Vermenigvuldig met die resiprook van 2/7, wat 7/2 is: 5/7 × 7/2.\nStap 2: Vermenigvuldig die tellers: 5 × 7 = 35. Vermenigvuldig die noemers: 7 × 2 = 14.\nStap 3: Resultaat: 35/14. Vereenvoudig deur beide deur 7 te deel: 5/2.\nAntwoord: 2 en 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 4 en 1/2 ÷ 3/5.', answer: '7 en 1/2', checkMode: 'auto', correctAnswer: '7 and 1/2', correctAnswers: ['7 and 1/2', '7 en 1/2', '7 1/2', '15/2'], explanation: 'Stap 1: Skakel om na ʼn onegte breuk: 4 en 1/2 = 9/2.\nStap 2: Vermenigvuldig met die resiprook van 3/5, wat 5/3 is: 9/2 × 5/3.\nStap 3: Vermenigvuldig die tellers: 9 × 5 = 45. Vermenigvuldig die noemers: 2 × 3 = 6.\nStap 4: Resultaat: 45/6. Vereenvoudig deur beide deur 3 te deel: 15/2.\nStap 5: Skakel om na ʼn gemengde getal: 15 ÷ 2 = 7 res 1.\nAntwoord: 7 en 1/2 ✓' },
        { difficulty: 'Hard', question: 'Bereken 7/10 ÷ (1/2)².', answer: '2 en 4/5', checkMode: 'auto', correctAnswer: '2 and 4/5', correctAnswers: ['2 and 4/5', '2 en 4/5', '2 4/5', '14/5'], explanation: 'Stap 1: Werk eers die mag uit: (1/2)² = 1/4.\nStap 2: Deel: 7/10 ÷ 1/4 = 7/10 × 4/1 = 28/10 = 14/5.\nStap 3: Skakel om na ʼn gemengde getal: 14 ÷ 5 = 2 res 4.\nAntwoord: 2 en 4/5 ✓' },
        { difficulty: 'Hard', question: 'Bereken 8 ÷ 4/5 − 3/5, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '9 en 2/5', checkMode: 'auto', correctAnswer: '9 and 2/5', correctAnswers: ['9 and 2/5', '9 en 2/5', '9 2/5', '47/5'], explanation: 'Stap 1: Deling voor aftrekking: 8 ÷ 4/5 = 8 × 5/4 = 40/4 = 10.\nStap 2: Trek af: 10 − 3/5 = 50/5 − 3/5 = 47/5.\nStap 3: Skakel om na ʼn gemengde getal: 47 ÷ 5 = 9 res 2.\nAntwoord: 9 en 2/5 ✓' },

        // Blok 4: groeperings- en delingsvraagstukke met gemengde getalle (V11-14)
        { difficulty: 'Medium-Hard', question: 'ʼn Kleremaakster het 6 en 2/3 m materiaal en sny dit in stukke van 5/9 m elk. Hoeveel volle stukke kan sy sny?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Stap 1: Skakel 6 en 2/3 om na ʼn onegte breuk: 20/3.\nStap 2: Deel: 20/3 ÷ 5/9 = 20/3 × 9/5 = 180/15 = 12.\nAntwoord: 12 volle stukke ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Koek wat 9/10 van ʼn geheel is, word gelykop onder 6 gaste verdeel. Watter breukdeel van die hele koek ontvang elke gas?', answer: '3/20', checkMode: 'auto', correctAnswer: '3/20', correctAnswers: ['3/20'], explanation: 'Stap 1: Skryf 6 as 6/1, sodat die resiprook 1/6 is.\nStap 2: Deel: 9/10 ÷ 6 = 9/10 × 1/6 = 9/60.\nStap 3: Vereenvoudig deur beide deur 3 te deel: 3/20.\nAntwoord: 3/20 van die hele koek ✓' },
        { difficulty: 'Hard', question: 'ʼn Bakkery het 13 en 1/2 kg meel en pak dit in sakke van 3/4 kg elk. Hoeveel volle sakke kan dit pak?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Stap 1: Skakel 13 en 1/2 om na ʼn onegte breuk: 27/2.\nStap 2: Deel: 27/2 ÷ 3/4 = 27/2 × 4/3 = 108/6 = 18.\nAntwoord: 18 volle sakke ✓' },
        { difficulty: 'Hard', question: 'ʼn Oupa laat 5/8 van sy boord na, om gelykop onder sy 5 seuns verdeel te word. Watter breukdeel van die hele boord erf elke seun?', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', correctAnswers: ['1/8'], explanation: 'Stap 1: Skryf 5 as 5/1, sodat die resiprook 1/5 is.\nStap 2: Deel: 5/8 ÷ 5 = 5/8 × 1/5 = 5/40.\nStap 3: Vereenvoudig deur beide deur 5 te deel: 1/8.\nAntwoord: 1/8 van die hele boord ✓' },

        // Blok 5: multi-stap vraagstukke met gemengde getalle / multi-bewerking redenasie (V15-17)
        { difficulty: 'Hard', question: 'ʼn Tenk is 7/8 vol. Gedurende die dag word 2/7 van die water in die tenk gebruik. Watter breukdeel van die hele tenk is nog oor aan die einde van die dag?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'Stap 1: Vind die breukdeel wat gebruik is: 7/8 × 2/7 = 14/56 = 1/4.\nStap 2: Trek af van die beginhoeveelheid: 7/8 − 1/4 = 7/8 − 2/8 = 5/8.\nAntwoord: 5/8 van die hele tenk ✓' },
        { difficulty: 'Hard', question: 'Katlego verdien R450 met vakansiewerk. Hy spandeer 1/5 daarvan aan vervoer, en spandeer dan 1/3 van wat oorbly aan kos. Hoeveel geld het hy nog oor?', answer: 'R240', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240', 'R240'], explanation: 'Stap 1: Vervoerkoste: 1/5 × R450 = R90. Oorblywend: R450 − R90 = R360.\nStap 2: Koskoste: 1/3 × R360 = R120. Oorblywend: R360 − R120 = R240.\nAntwoord: R240 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 5/6 koppie meel per bondel broodrolletjies. Aisha maak 1 en 1/5 bondels, en voeg dan ʼn ekstra 1/3 koppie meel vir uitstrooiing by. Hoeveel meel gebruik sy altesaam?', answer: '1 en 1/3 koppies', checkMode: 'auto', correctAnswer: '1 and 1/3', correctAnswers: ['1 and 1/3', '1 en 1/3', '1 1/3', '4/3', '1 en 1/3 koppies'], explanation: 'Stap 1: Meel vir die bondels: 5/6 × 1 en 1/5 = 5/6 × 6/5 = 30/30 = 1.\nStap 2: Tel die ekstra by: 1 + 1/3 = 1 en 1/3.\nAntwoord: 1 en 1/3 koppies ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Vusi sê 4/5 ÷ 1/10 = 2/25, omdat hy die eerste breuk omgedraai het in plaas van die tweede. Wat is die korrekte antwoord?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Stap 1: Om deur ʼn breuk te deel, draai die tweede breuk (1/10) om, nie die eerste nie: resiprook van 1/10 is 10/1.\nStap 2: Vermenigvuldig: 4/5 × 10/1 = 40/5 = 8.\nAntwoord: 8 ✓ (Vusi het die fout gemaak om die verkeerde breuk om te draai.)' },
        { difficulty: 'Hard', question: 'Is 2/3 ÷ 1/4 gelyk aan 2/3 × 4? Bereken albei en verduidelik hoekom of hoekom nie.', answer: 'Ja — albei is gelyk aan 8/3 (2 en 2/3), want om deur 1/4 te deel is dieselfde as om met sy resiprook te vermenigvuldig, wat 4 is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: 5/16, √(1/16) + 1/4, (1/2)² + 1/8.', answer: '5/16, 3/8, 1/2', checkMode: 'auto', correctAnswer: '5/16, 3/8, 1/2', correctAnswers: ['5/16, 3/8, 1/2', '5/16; 3/8; 1/2'], explanation: 'Stap 1: Bereken elkeen: 5/16 bly soos dit is. √(1/16) + 1/4 = 1/4 + 1/4 = 1/2. (1/2)² + 1/8 = 1/4 + 1/8 = 2/8 + 1/8 = 3/8.\nStap 2: Vergelyk 5/16, 1/2 en 3/8 met 16des: 5/16 bly, 1/2 = 8/16, 3/8 = 6/16.\nStap 3: Rangskik: 5/16 < 3/8 < 1/2.\nAntwoord: 5/16, 3/8, 1/2 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn baie stewige begrip van Graad 8 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
