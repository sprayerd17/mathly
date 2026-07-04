import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic expression roles) ──────────────────────────────
// variable / x term         → blue   (#2563eb)
// coefficient               → orange (#ea580c)
// constant / y term / final → green  (#16a34a)
// mismatched / error term   → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS AN ALGEBRAIC EXPRESSION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-an-algebraic-expression',
      title: 'Wat is ʼn Algebraïese Uitdrukking?',
      icon: 'x',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Algebraïese uitdrukking</strong> is ʼn wiskundige frase wat getalle, veranderlikes en bewerkings bevat, maar <strong>geen gelykaan-teken</strong> nie. ʼn <strong>Term</strong> is ʼn enkele deel van ʼn uitdrukking wat deur + of − tekens geskei word. ʼn <strong>Koëffisiënt</strong> is die getal voor ʼn veranderlike. ʼn <strong>Konstante</strong> is ʼn term sonder ʼn veranderlike. Ons kan waardes vir veranderlikes <strong>vervang</strong> om ʼn uitdrukking te bereken.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koëffisiënt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('konstante')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Algebraïese uitdrukking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Frase met getalle, ${bl('veranderlikes')} en bewerkings — maar geen gelykaan-teken nie. Voorbeeld: ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Enkele deel wat deur + of − tekens geskei word. In ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')} is die terme ${or('5')}${bl('x')}, ${or('3')}${bl('y')} en ${gr('−7')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koëffisiënt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('getal voor ʼn veranderlike')}. In ${or('5')}${bl('x')} is die koëffisiënt ${or('5')}; in ${or('3')}${bl('y')} is die koëffisiënt ${or('3')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Konstante</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Term ${gr('sonder ʼn veranderlike')} — sy waarde verander nooit nie. In ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')} is die konstante ${gr('−7')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Veranderlike</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Letter wat ${bl('ʼn onbekende waarde verteenwoordig')}. Algemene veranderlikes is ${bl('x')}, ${bl('y')}, ${bl('a')} en ${bl('b')}. Ons vervang dit met ʼn getal om die uitdrukking te bereken.</p>` +
        `</div>` +

        `</div>` +

        // ── Substitution tip ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn uitdrukking te bereken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vervang elke ${bl('veranderlike')} met die gegewe getal en bereken dan met behulp van BODMAS. Skryf altyd die vervangingstap neer voordat jy vereenvoudig — dit help jou om foute te vermy.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Identifiseer die terme, koëffisiënte en konstante in ${or('5')}${bl('x')} + ${or('3')}${bl('y')} − ${gr('7')}.`,
          answer: `Terme: ${or('5')}${bl('x')}, ${or('3')}${bl('y')}, ${gr('−7')} · Koëffisiënte: ${or('5')} en ${or('3')} · Konstante: ${gr('−7')}`,
          steps: [
            `Terme word deur + of − tekens geskei. Die drie terme is ${or('5')}${bl('x')}, ${or('3')}${bl('y')} en ${gr('−7')}.`,
            `Koëffisiënte is die getalle voor veranderlikes. Die koëffisiënte is ${or('5')} (voor ${bl('x')}) en ${or('3')} (voor ${bl('y')}).`,
            `Die konstante is ${gr('−7')} — dit het geen veranderlike nie en sy waarde verander nooit nie.`,
          ],
        },
        {
          question: `Bereken ${or('4')}${bl('x')} + ${gr('9')} wanneer ${bl('x')} = 6.`,
          answer: `${or('4')}(6) + ${gr('9')} = 24 + 9 = <strong>33</strong>`,
          steps: [
            `Vervang ${bl('x')} = 6: vervang ${bl('x')} met 6. Die uitdrukking word ${or('4')}(6) + ${gr('9')}.`,
            `Vermenigvuldig eerste (BODMAS): ${or('4')} × 6 = 24. Die uitdrukking word 24 + ${gr('9')}.`,
            `Tel op: 24 + ${gr('9')} = <strong>33</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Identifiseer die koëffisiënt van x in 7x + 4.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Die koëffisiënt is die getal voor die veranderlike. In 7x is die getal voor x gelyk aan 7.',
        },

        // ── Q2 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 3x + 8 wanneer x = 5.',
          answer: '23',
          checkMode: 'auto',
          correctAnswer: '23',
          explanation: 'Vervang x = 5: 3(5) + 8 = 15 + 8 = 23 ✓',
        },

        // ── Q3 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 2x² − 3 wanneer x = 4.',
          answer: '29',
          checkMode: 'auto',
          correctAnswer: '29',
          explanation: 'Vervang x = 4: 2(4²) − 3 = 2(16) − 3 = 32 − 3 = 29 ✓',
        },

        // ── Q4 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die konstante in 6x − 9 + 2y is −9. Is hy korrek? Verduidelik.',
          answer: 'Ja — ʼn konstante is ʼn term sonder ʼn veranderlike, en −9 het geen veranderlike daaraan gekoppel nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die dele van die algebraïese uitdrukking 5x plus 3y minus 7 merk met pyle wat na elke term, koëffisiënt, konstante en veranderlike wys, kleurgekodeer blou vir veranderlikes, oranje vir koëffisiënte en groen vir die konstante" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn algebraïese uitdrukking is, terme, koëffisiënte en konstantes identifiseer, en wys hoe om ʼn uitdrukking te bereken deur ʼn waarde vir die veranderlike te vervang" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LIKE AND UNLIKE TERMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'like-and-unlike-terms',
      title: 'Gelyksoortige en Ongelyksoortige Terme',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Gelyksoortige terme</strong> het presies dieselfde veranderlike tot dieselfde mag — hulle kan gekombineer word deur hul koëffisiënte op te tel of af te trek. <strong>Ongelyksoortige terme</strong> het verskillende veranderlikes of verskillende magte en kan nie gekombineer word nie.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-terme')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-terme')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('ongelyksoortige terme')}</span>` +
        `</div>` +

        // ── Like vs unlike ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gelyksoortige teenoor ongelyksoortige terme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Gelyksoortige terme ✓</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Dieselfde veranderlike, <strong>dieselfde mag</strong>. Hul koëffisiënte kan opgetel of afgetrek word.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeelde: ${bl('3x')} en ${bl('−2x')} · ${gr('5y')} en ${gr('7y')} · 4 en 9</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Ongelyksoortige terme ✗</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Verskillende veranderlikes <strong>of</strong> verskillende magte. Hulle kan nie gekombineer word nie.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeelde: ${re('4x')} en ${re('4x²')} · ${re('3a')} en ${re('3b')} · ${re('5x')} en ${re('5')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dieselfde veranderlike EN dieselfde mag</p>` +
        `<p style="margin:0;color:#1e3a8a;">Albei voorwaardes moet waar wees vir terme om gelyksoortige terme te wees. ${bl('x')} en ${re('x²')} lyk soortgelyk maar is ongelyksoortige terme — die magte verskil (1 ≠ 2). Die koëffisiënt het <em>geen</em> invloed op of terme gelyksoortig al dan nie is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Identifiseer die gelyksoortige terme in ${bl('3x')} + ${gr('5y')} − ${bl('2x')} + ${gr('7y')}.`,
          answer: `${bl('3x')} en ${bl('−2x')} is gelyksoortige terme · ${gr('5y')} en ${gr('7y')} is gelyksoortige terme`,
          steps: [
            `${bl('3x')} en ${bl('−2x')} is gelyksoortige terme — albei het veranderlike ${bl('x')} tot die mag 1.`,
            `${gr('5y')} en ${gr('7y')} is gelyksoortige terme — albei het veranderlike ${gr('y')} tot die mag 1.`,
          ],
        },
        {
          question: `Sipho sê ${bl('4x')} en ${re('4x²')} is gelyksoortige terme. Is hy korrek?`,
          answer: `Sipho is <strong>verkeerd</strong> — ${bl('4x')} en ${re('4x²')} is ongelyksoortige terme`,
          steps: [
            `${bl('4x')} het veranderlike ${bl('x')} tot die mag <strong>1</strong>.`,
            `${re('4x²')} het veranderlike ${re('x')} tot die mag <strong>2</strong>.`,
            `Verskillende magte beteken hulle is ongelyksoortige terme — al is die koëffisiënt (4) en die veranderlike-letter (x) dieselfde.`,
            `Sipho is <strong>verkeerd</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is 7x en 3x gelyksoortige terme?',
          answer: 'Ja',
          checkMode: 'auto',
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja'],
          explanation: 'Albei terme het dieselfde veranderlike x tot die mag 1, so hulle is gelyksoortige terme.',
        },

        // ── Q6 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Is 5x en 5x² gelyksoortige terme? Verduidelik.',
          answer: 'Nee — hulle het verskillende magte van x, so hulle is ongelyksoortige terme.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van die uitdrukking 3x plus 5y minus 2x plus 7y met gelyksoortige terme in passende kleure omkring, blou vir x-terme en groen vir y-terme, wat wys watter pare gekombineer kan word" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen gelyksoortige en ongelyksoortige terme verduidelik met kleurkodering en wys waarom terme met verskillende veranderlikes of verskillende magte nie gekombineer kan word nie" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMPLIFYING EXPRESSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simplifying-expressions',
      title: 'Uitdrukkings Vereenvoudig',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn algebraïese uitdrukking te <strong>vereenvoudig</strong>, kombineer ons <strong>gelyksoortige terme</strong> deur hul koëffisiënte op te tel of af te trek, terwyl die veranderlike dieselfde bly. Ons werk stelselmatig deur die uitdrukking en groepeer gelyksoortige terme voordat ons kombineer.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gelyksoortige terme in passende kleur gegroepeer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vereenvoudigde uitdrukking')}</span>` +
        `</div>` +

        // ── Steps to simplify ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn uitdrukking te vereenvoudig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer gelyksoortige terme')} — kyk deur die uitdrukking en vind al die terme wat dieselfde veranderlike en dieselfde mag deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Groepeer gelyksoortige terme')} — herskryf die uitdrukking met gelyksoortige terme langs mekaar binne hakies. Neem altyd die teken (+ of −) saam met die term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kombineer')} — tel of trek die koëffisiënte binne elke groep. Skryf die veranderlike net een keer. Dit gee die vereenvoudigde uitdrukking.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hou die teken by sy term</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy terme groepeer, skuif altyd die teken (+ of −) voor ʼn term saam met daardie term. Om ʼn teken te verloor is die algemeenste fout wanneer algebraïese uitdrukkings vereenvoudig word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Vereenvoudig ${bl('6x')} + ${gr('3y')} − ${bl('2x')} + ${gr('5y')}.`,
          answer: `${gr('4x + 8y')}`,
          steps: [
            `Groepeer gelyksoortige terme: (${bl('6x')} − ${bl('2x')}) + (${gr('3y')} + ${gr('5y')}).`,
            `Kombineer: ${gr('4x + 8y')}.`,
          ],
        },
        {
          question: `Vereenvoudig ${bl('9a')} − ${gr('4b')} + ${bl('2a')} + ${gr('7b')} − ${bl('3a')}.`,
          answer: `${gr('8a + 3b')}`,
          steps: [
            `Groepeer ${bl('a')}-terme: ${bl('9a')} + ${bl('2a')} − ${bl('3a')} = ${bl('8a')}.`,
            `Groepeer ${gr('b')}-terme: −${gr('4b')} + ${gr('7b')} = ${gr('3b')}.`,
            `Antwoord: ${gr('8a + 3b')}.`,
          ],
        },
        {
          question: `Lerato vereenvoudig ${bl('5x')} + ${gr('3')} − ${bl('2x')} + ${gr('8')} en kry ${re('3x + 5')}. Kontroleer haar antwoord.`,
          answer: `Lerato is <strong>verkeerd</strong> — die korrekte antwoord is ${gr('3x + 11')}`,
          steps: [
            `Groepeer ${bl('x')}-terme: ${bl('5x')} − ${bl('2x')} = ${bl('3x')}.`,
            `Groepeer konstantes: ${gr('3')} + ${gr('8')} = ${gr('11')}.`,
            `Die korrekte antwoord is ${gr('3x + 11')}, so Lerato het ʼn fout gemaak.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig 4x + 3x.',
          answer: '7x',
          checkMode: 'auto',
          correctAnswer: '7x',
          explanation: '4x + 3x = (4 + 3)x = 7x ✓',
        },

        // ── Q8 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 8y − 3y + 2y.',
          answer: '7y',
          checkMode: 'auto',
          correctAnswer: '7y',
          explanation: '8y − 3y + 2y = (8 − 3 + 2)y = 7y ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 5a + 3b − 2a + 6b.',
          answer: '3a + 9b',
          checkMode: 'auto',
          correctAnswer: '3a+9b',
          correctAnswers: ['3a+9b', '3a + 9b'],
          explanation: 'Groepeer gelyksoortige terme: (5a − 2a) + (3b + 6b) = 3a + 9b ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato vereenvoudig 7x − 4 + 3x + 9 en kry 10x + 5. Kontroleer haar antwoord.',
          answer: 'x-terme: 7x + 3x = 10x. Konstantes: −4 + 9 = 5. Lerato se antwoord is korrek.',
          checkMode: 'self',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig 9m − 5n + 3m − 2n + 4.',
          answer: '12m − 7n + 4',
          checkMode: 'auto',
          correctAnswer: '12m-7n+4',
          correctAnswers: ['12m-7n+4', '12m - 7n + 4', '12m−7n+4', '12m − 7n + 4'],
          explanation: 'Groepeer gelyksoortige terme: (9m + 3m) + (−5n − 2n) + 4 = 12m − 7n + 4 ✓',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê om 6x + 5 − 6x te vereenvoudig gee altyd 0. Is hy korrek? Verduidelik.',
          answer: 'Nee — 6x en −6x kanselleer uit, en laat net die konstante 5 oor. Die antwoord is 5, nie 0 nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van die uitdrukking 6x plus 3y minus 2x plus 5y met gelyksoortige terme gegroepeer met kleurgekodeerde hakies, blou vir x-terme en groen vir y-terme, wat dan die finale vereenvoudigde resultaat 4x plus 8y in groen wys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om algebraïese uitdrukkings te vereenvoudig deur gelyksoortige terme met passende kleure te groepeer en hul koëffisiënte stap vir stap te kombineer" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
    { minScore: 9, message: 'Puik werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
