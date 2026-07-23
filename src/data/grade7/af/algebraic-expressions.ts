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
        'Gemerkte uiteensetting van die uitdrukking 5x + 3y − 7 wat die koëffisiënte 5 en 3 in oranje blokkies, die veranderlikes x en y in blou blokkies, en die konstante −7 in ʼn groen blokkie wys, met die drie terme onderaan gemerk',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="20" y="15" width="26" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="33" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">5</text>` +
        `<rect x="50" y="15" width="26" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="63" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">x</text>` +
        `<text x="85" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="100" y="15" width="26" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="113" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">3</text>` +
        `<rect x="130" y="15" width="26" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="143" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">y</text>` +
        `<text x="165" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">−</text>` +
        `<rect x="180" y="15" width="26" height="32" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="193" y="37" text-anchor="middle" font-size="18" font-weight="700" fill="#16a34a">7</text>` +
        `<line x1="33" y1="47" x2="33" y2="60" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="33" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">koëffisiënt</text>` +
        `<line x1="113" y1="47" x2="113" y2="60" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="113" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">koëffisiënt</text>` +
        `<line x1="193" y1="47" x2="193" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="193" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">konstante</text>` +
        `<line x1="63" y1="47" x2="63" y2="85" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="63" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">veranderlike</text>` +
        `<line x1="143" y1="47" x2="143" y2="85" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="143" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">veranderlike</text>` +
        `<line x1="20" y1="104" x2="20" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="76" y1="104" x2="76" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="20" y1="108" x2="76" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="48" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 1</text>` +
        `<line x1="100" y1="104" x2="100" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="156" y1="104" x2="156" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="100" y1="108" x2="156" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="128" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 2</text>` +
        `<line x1="180" y1="104" x2="180" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="206" y1="104" x2="206" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<line x1="180" y1="108" x2="206" y2="108" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="193" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">term 3</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat verduidelik wat ʼn algebraïese uitdrukking is, terme, koëffisiënte en konstantes identifiseer, en wys hoe om ʼn uitdrukking te bereken deur ʼn waarde vir die veranderlike te vervang',
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

      videoPlaceholder:
        'Kort video wat die verskil tussen gelyksoortige en ongelyksoortige terme verduidelik met kleurkodering en wys waarom terme met verskillende veranderlikes of verskillende magte nie gekombineer kan word nie',
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
        'Diagram wat 6x + 3y − 2x + 5y wys met die x-terme 6x en −2x in blou blokkies, die y-terme 3y en 5y in oranje blokkies, en ʼn pyl na die vereenvoudigde uitdrukking 4x + 8y in ʼn groen blokkie',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 85" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="15" width="34" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="27" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">6x</text>` +
        `<text x="56" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="68" y="15" width="34" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="85" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">3y</text>` +
        `<text x="114" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">−</text>` +
        `<rect x="126" y="15" width="34" height="32" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="143" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">2x</text>` +
        `<text x="172" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">+</text>` +
        `<rect x="184" y="15" width="34" height="32" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="201" y="37" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">5y</text>` +
        `<line x1="224" y1="31" x2="248" y2="31" stroke="#16a34a" stroke-width="2.5"/>` +
        `<polygon points="248,26 256,31 248,36" fill="#16a34a"/>` +
        `<rect x="260" y="15" width="60" height="32" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="290" y="37" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">4x + 8y</text>` +
        `<line x1="27" y1="47" x2="27" y2="58" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="27" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">x-term</text>` +
        `<line x1="85" y1="47" x2="85" y2="58" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="85" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">y-term</text>` +
        `<line x1="143" y1="47" x2="143" y2="58" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="143" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">x-term</text>` +
        `<line x1="201" y1="47" x2="201" y2="58" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="201" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">y-term</text>` +
        `<line x1="290" y1="47" x2="290" y2="58" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>` +
        `<text x="290" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">vereenvoudig</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat demonstreer hoe om algebraïese uitdrukkings te vereenvoudig deur gelyksoortige terme met passende kleure te groepeer en hul koëffisiënte stap vir stap te kombineer',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
    { minScore: 9, message: 'Puik werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Algebraïese woordeskat: terme, koëffisiënte, konstantes (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Hoeveel terme is in die uitdrukking 8x + 3y − 5?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terme word deur + of − tekens geskei.\nDie terme is 8x, 3y en −5.\nDit is 3 terme.' },
        { difficulty: 'Easy', question: 'Identifiseer die koëffisiënt van y in 6y − 11.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Die koëffisiënt is die getal voor die veranderlike.\nIn 6y is die getal voor y gelyk aan 6.' },
        { difficulty: 'Easy', question: 'Identifiseer die konstante term in 4a + 9b − 12.', answer: '−12', checkMode: 'auto', correctAnswer: '-12', correctAnswers: ['-12', '−12'], explanation: 'ʼn Konstante is ʼn term sonder ʼn veranderlike.\nIn 4a + 9b − 12 is die enigste term sonder ʼn veranderlike −12.' },

        // Blok 2 — Uitdrukkings skryf vanuit woordbeskrywings (Easy-Medium) — posisies 3-6
        { difficulty: 'Easy', question: 'Skryf ʼn uitdrukking vir ʼn getal n wat met 8 vermeerder word.', answer: 'n + 8', checkMode: 'auto', correctAnswer: 'n + 8', correctAnswers: ['n + 8', 'n+8', '8 + n', '8+n'], explanation: '"Vermeerder met" beteken optel.\nn + 8' },
        { difficulty: 'Easy-Medium', question: 'Skryf ʼn uitdrukking vir die totale koste, in rand, om p penne teen R4 elk te koop.', answer: '4p', checkMode: 'auto', correctAnswer: '4p', correctAnswers: ['4p', 'p*4', '4*p'], explanation: '"Teen R4 elk" beteken vermenigvuldig.\nKoste = prys per pen × aantal penne\n4p' },
        { difficulty: 'Medium', question: 'Thandi het k lekkers. Skryf ʼn uitdrukking vir 3 maal haar aantal lekkers, met 5 verminder.', answer: '3k − 5', checkMode: 'auto', correctAnswer: '3k - 5', correctAnswers: ['3k - 5', '3k-5', '3k − 5'], explanation: '"3 maal haar lekkers" beteken 3k.\n"Verminder met 5" beteken trek 5 af.\n3k − 5' },
        { difficulty: 'Medium', question: 'ʼn Leerder vertaal "die som van ʼn getal y en 9" as 9 − y. Verduidelik die fout en gee die korrekte uitdrukking.', answer: 'Die leerder is verkeerd. "Som" beteken optelling, nie aftrekking nie, so die frase behoort y + 9 te word, nie 9 − y nie. Die korrekte uitdrukking is y + 9.', checkMode: 'self' },

        // Blok 3 — Vereenvoudig deur gelyksoortige terme te groepeer (Medium) — posisies 7-10
        { difficulty: 'Medium', question: 'Vereenvoudig 9x + 4x − 2x.', answer: '11x', checkMode: 'auto', correctAnswer: '11x', explanation: 'Al drie terme het dieselfde veranderlike x tot die mag 1, so hulle is gelyksoortige terme.\n9x + 4x − 2x = (9 + 4 − 2)x = 11x' },
        { difficulty: 'Medium', question: 'Vereenvoudig 7a − 3b + 2a + 8b.', answer: '9a + 5b', checkMode: 'auto', correctAnswer: '9a + 5b', correctAnswers: ['9a + 5b', '9a+5b'], explanation: 'Groepeer gelyksoortige terme: (7a + 2a) + (−3b + 8b)\na-terme: 7a + 2a = 9a\nb-terme: −3b + 8b = 5b\nAntwoord: 9a + 5b' },
        { difficulty: 'Medium', question: 'Vereenvoudig 6x + 5 − 2x − 9.', answer: '4x − 4', checkMode: 'auto', correctAnswer: '4x - 4', correctAnswers: ['4x - 4', '4x-4', '4x − 4'], explanation: 'Groepeer gelyksoortige terme: (6x − 2x) + (5 − 9)\nx-terme: 6x − 2x = 4x\nKonstantes: 5 − 9 = −4\nAntwoord: 4x − 4' },
        { difficulty: 'Medium', question: 'ʼn Leerder vereenvoudig 8y − 3 + 2y + 7 en kry 10y + 4. Kontroleer die werk en sê of die leerder korrek is.', answer: 'y-terme: 8y + 2y = 10y. Konstantes: −3 + 7 = 4. Die korrekte vereenvoudigde uitdrukking is 10y + 4, so die leerder is korrek.', checkMode: 'self' },

        // Blok 4 — Vervanging / uitdrukkings bereken (Medium) — posisies 11-14
        { difficulty: 'Medium', question: 'Bereken 5x + 2 wanneer x = 7.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Vervang x = 7: 5(7) + 2 = 35 + 2 = 37 ✓' },
        { difficulty: 'Medium', question: 'Bereken 3a − 4b wanneer a = 6 en b = 2.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Vervang a = 6 en b = 2: 3(6) − 4(2) = 18 − 8 = 10 ✓' },
        { difficulty: 'Medium', question: 'Bereken 2x² + 3 wanneer x = 5.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Vervang x = 5: 2(5²) + 3 = 2(25) + 3 = 50 + 3 = 53 ✓' },
        { difficulty: 'Medium', question: 'Die koste in rand om ʼn fiets te huur word gegee deur C = 15h + 20, waar h die aantal ure is. Bepaal die koste om ʼn fiets vir 4 ure te huur.', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: 'Vervang h = 4: C = 15(4) + 20 = 60 + 20 = 80\nDie koste is R80.' },

        // Blok 5 — Optel en aftrek van uitdrukkings (Medium-Hard) — posisies 15-17
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings (4x + 3) en (2x − 7) bymekaar.', answer: '6x − 4', checkMode: 'auto', correctAnswer: '6x - 4', correctAnswers: ['6x - 4', '6x-4', '6x − 4'], explanation: '(4x + 3) + (2x − 7)\nGroepeer gelyksoortige terme: (4x + 2x) + (3 − 7)\n= 6x − 4' },
        { difficulty: 'Medium-Hard', question: 'Trek (3a − 2) af van (7a + 5).', answer: '4a + 7', checkMode: 'auto', correctAnswer: '4a + 7', correctAnswers: ['4a + 7', '4a+7'], explanation: '(7a + 5) − (3a − 2)\nVerander die teken van elke term wat afgetrek word: 7a + 5 − 3a + 2\nGroepeer gelyksoortige terme: (7a − 3a) + (5 + 2)\n= 4a + 7' },
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings 5m − 2n en 3m + 6n bymekaar.', answer: '8m + 4n', checkMode: 'auto', correctAnswer: '8m + 4n', correctAnswers: ['8m + 4n', '8m+4n'], explanation: '(5m − 2n) + (3m + 6n)\nGroepeer gelyksoortige terme: (5m + 3m) + (−2n + 6n)\n= 8m + 4n' },

        // Blok 6 — Multi-stap en foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'Vereenvoudig 5x + 3y − 2x + 4 − y − 6.', answer: '3x + 2y − 2', checkMode: 'auto', correctAnswer: '3x + 2y - 2', correctAnswers: ['3x + 2y - 2', '3x+2y-2', '3x + 2y − 2'], explanation: 'Groepeer gelyksoortige terme: (5x − 2x) + (3y − y) + (4 − 6)\nx-terme: 5x − 2x = 3x\ny-terme: 3y − y = 2y\nKonstantes: 4 − 6 = −2\nAntwoord: 3x + 2y − 2' },
        { difficulty: 'Hard', question: 'ʼn Leerder moet 4x + 3x bereken wanneer x = 5. Hulle vereenvoudig eers na 7x, en vervang dan om 35 te kry. ʼn Tweede leerder vervang eers: 4(5) + 3(5) = 20 + 15 = 35. Gee albei metodes dieselfde antwoord? Verduidelik waarom.', answer: 'Ja, albei metodes gee 35. Om ʼn uitdrukking eers te vereenvoudig en dan te vervang gee ʼn gelykstaande resultaat aan om eers in die oorspronklike uitdrukking te vervang, want 4x + 3x en 7x verteenwoordig dieselfde waarde vir enige waarde van x — die kombinering van gelyksoortige terme verander nie wat die uitdrukking werd is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het algebraïese woordeskat, uitdrukkings skryf, vereenvoudiging, vervanging en die kombinering van uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige vrae oor wat jy verkeerd gehad het oor gelyksoortige terme of vervanging weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vereenvoudiging en die optel of aftrek van uitdrukkings weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Algebraïese woordeskat: terme, koëffisiënte, konstantes (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Hoeveel terme is in die uitdrukking 9a − 4b + 6?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terme word deur + of − tekens geskei.\nDie terme is 9a, −4b en 6.\nDit is 3 terme.' },
        { difficulty: 'Easy', question: 'Identifiseer die koëffisiënt van x in 8x − 15.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Die koëffisiënt is die getal voor die veranderlike.\nIn 8x is die getal voor x gelyk aan 8.' },
        { difficulty: 'Easy', question: 'Identifiseer die konstante term in 5m + 2n − 20.', answer: '−20', checkMode: 'auto', correctAnswer: '-20', correctAnswers: ['-20', '−20'], explanation: 'ʼn Konstante is ʼn term sonder ʼn veranderlike.\nIn 5m + 2n − 20 is die enigste term sonder ʼn veranderlike −20.' },

        // Blok 2 — Uitdrukkings skryf vanuit woordbeskrywings (Easy-Medium) — posisies 3-6
        { difficulty: 'Easy', question: 'Skryf ʼn uitdrukking vir ʼn getal m wat met 6 verminder word.', answer: 'm − 6', checkMode: 'auto', correctAnswer: 'm - 6', correctAnswers: ['m - 6', 'm-6', 'm − 6'], explanation: '"Verminder met" beteken aftrek.\nm − 6' },
        { difficulty: 'Easy-Medium', question: 'Skryf ʼn uitdrukking vir die totale koste, in rand, om t T-hemde teen R85 elk te koop.', answer: '85t', checkMode: 'auto', correctAnswer: '85t', correctAnswers: ['85t', 't*85', '85*t'], explanation: '"Teen R85 elk" beteken vermenigvuldig.\nKoste = prys per T-hemp × aantal T-hemde\n85t' },
        { difficulty: 'Medium', question: 'Bongani het j jellielekkers. Skryf ʼn uitdrukking vir 4 maal sy aantal jellielekkers, met 6 vermeerder.', answer: '4j + 6', checkMode: 'auto', correctAnswer: '4j + 6', correctAnswers: ['4j + 6', '4j+6', '6 + 4j', '6+4j'], explanation: '"4 maal sy jellielekkers" beteken 4j.\n"Vermeerder met 6" beteken tel 6 by.\n4j + 6' },
        { difficulty: 'Medium', question: 'ʼn Leerder vertaal "12 afgetrek van ʼn getal w" as 12 − w. Verduidelik die fout en gee die korrekte uitdrukking.', answer: 'Die leerder is verkeerd. "12 afgetrek van ʼn getal w" beteken jy begin met w en trek 12 af, so die korrekte uitdrukking is w − 12, nie 12 − w nie. Om dit andersom te skryf keer die volgorde van die aftrekking om en gee ʼn ander waarde.', checkMode: 'self' },

        // Blok 3 — Vereenvoudig deur gelyksoortige terme te groepeer (Medium) — posisies 7-10
        { difficulty: 'Medium', question: 'Vereenvoudig 6x + 7x − 3x.', answer: '10x', checkMode: 'auto', correctAnswer: '10x', explanation: 'Al drie terme het dieselfde veranderlike x tot die mag 1, so hulle is gelyksoortige terme.\n6x + 7x − 3x = (6 + 7 − 3)x = 10x' },
        { difficulty: 'Medium', question: 'Vereenvoudig 8a − 5b + 3a + 9b.', answer: '11a + 4b', checkMode: 'auto', correctAnswer: '11a + 4b', correctAnswers: ['11a + 4b', '11a+4b'], explanation: 'Groepeer gelyksoortige terme: (8a + 3a) + (−5b + 9b)\na-terme: 8a + 3a = 11a\nb-terme: −5b + 9b = 4b\nAntwoord: 11a + 4b' },
        { difficulty: 'Medium', question: 'Vereenvoudig 9x + 6 − 4x − 11.', answer: '5x − 5', checkMode: 'auto', correctAnswer: '5x - 5', correctAnswers: ['5x - 5', '5x-5', '5x − 5'], explanation: 'Groepeer gelyksoortige terme: (9x − 4x) + (6 − 11)\nx-terme: 9x − 4x = 5x\nKonstantes: 6 − 11 = −5\nAntwoord: 5x − 5' },
        { difficulty: 'Medium', question: 'ʼn Leerder vereenvoudig 7y − 2 + 5y + 8 en kry 12y + 5. Kontroleer die werk en sê of die leerder korrek is.', answer: 'y-terme: 7y + 5y = 12y. Konstantes: −2 + 8 = 6. Die korrekte vereenvoudigde uitdrukking is 12y + 6, nie 12y + 5 nie, so die leerder is verkeerd — hulle het ʼn fout gemaak met die optel van die konstantes.', checkMode: 'self' },

        // Blok 4 — Vervanging / uitdrukkings bereken (Medium) — posisies 11-14
        { difficulty: 'Medium', question: 'Bereken 6x + 5 wanneer x = 8.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Vervang x = 8: 6(8) + 5 = 48 + 5 = 53 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5a − 2b wanneer a = 9 en b = 4.', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Vervang a = 9 en b = 4: 5(9) − 2(4) = 45 − 8 = 37 ✓' },
        { difficulty: 'Medium', question: 'Bereken 3x² − 7 wanneer x = 4.', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Vervang x = 4: 3(4²) − 7 = 3(16) − 7 = 48 − 7 = 41 ✓' },
        { difficulty: 'Medium', question: 'Die koste in rand om ʼn kano te huur word gegee deur C = 12h + 35, waar h die aantal ure is. Bepaal die koste om ʼn kano vir 5 ure te huur.', answer: '95', checkMode: 'auto', correctAnswer: '95', explanation: 'Vervang h = 5: C = 12(5) + 35 = 60 + 35 = 95\nDie koste is R95.' },

        // Blok 5 — Optel en aftrek van uitdrukkings (Medium-Hard) — posisies 15-17
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings (6x + 2) en (3x − 5) bymekaar.', answer: '9x − 3', checkMode: 'auto', correctAnswer: '9x - 3', correctAnswers: ['9x - 3', '9x-3', '9x − 3'], explanation: '(6x + 2) + (3x − 5)\nGroepeer gelyksoortige terme: (6x + 3x) + (2 − 5)\n= 9x − 3' },
        { difficulty: 'Medium-Hard', question: 'Trek (5a − 6) af van (9a + 4).', answer: '4a + 10', checkMode: 'auto', correctAnswer: '4a + 10', correctAnswers: ['4a + 10', '4a+10'], explanation: '(9a + 4) − (5a − 6)\nVerander die teken van elke term wat afgetrek word: 9a + 4 − 5a + 6\nGroepeer gelyksoortige terme: (9a − 5a) + (4 + 6)\n= 4a + 10' },
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings 7m − 3n en 2m + 8n bymekaar.', answer: '9m + 5n', checkMode: 'auto', correctAnswer: '9m + 5n', correctAnswers: ['9m + 5n', '9m+5n'], explanation: '(7m − 3n) + (2m + 8n)\nGroepeer gelyksoortige terme: (7m + 2m) + (−3n + 8n)\n= 9m + 5n' },

        // Blok 6 — Multi-stap en foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'Vereenvoudig 6x + 4y − 3x + 2 − 3y − 8.', answer: '3x + y − 6', checkMode: 'auto', correctAnswer: '3x + y - 6', correctAnswers: ['3x + y - 6', '3x+y-6', '3x + y − 6'], explanation: 'Groepeer gelyksoortige terme: (6x − 3x) + (4y − 3y) + (2 − 8)\nx-terme: 6x − 3x = 3x\ny-terme: 4y − 3y = y\nKonstantes: 2 − 8 = −6\nAntwoord: 3x + y − 6' },
        { difficulty: 'Hard', question: 'ʼn Leerder moet 5x − 2x bereken wanneer x = 6. Hulle vereenvoudig eers na 3x, en vervang dan om 18 te kry. ʼn Tweede leerder vervang eers: 5(6) − 2(6) = 30 − 12 = 18. Gee albei metodes dieselfde antwoord? Verduidelik waarom.', answer: 'Ja, albei metodes gee 18. Om ʼn uitdrukking eers te vereenvoudig en dan te vervang gee ʼn gelykstaande resultaat aan om eers in die oorspronklike uitdrukking te vervang, want 5x − 2x en 3x verteenwoordig dieselfde waarde vir enige waarde van x — die kombinering van gelyksoortige terme verander nie wat die uitdrukking werd is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het algebraïese woordeskat, uitdrukkings skryf, vereenvoudiging, vervanging en die kombinering van uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige vrae oor wat jy verkeerd gehad het oor gelyksoortige terme of vervanging weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vereenvoudiging en die optel of aftrek van uitdrukkings weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Algebraïese woordeskat: terme, koëffisiënte, konstantes (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Hoeveel terme is in die uitdrukking 7m + 2n − 9?', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Terme word deur + of − tekens geskei.\nDie terme is 7m, 2n en −9.\nDit is 3 terme.' },
        { difficulty: 'Easy', question: 'Identifiseer die koëffisiënt van a in 9a − 14.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Die koëffisiënt is die getal voor die veranderlike.\nIn 9a is die getal voor a gelyk aan 9.' },
        { difficulty: 'Easy', question: 'Identifiseer die konstante term in 3x + 7y − 18.', answer: '−18', checkMode: 'auto', correctAnswer: '-18', correctAnswers: ['-18', '−18'], explanation: 'ʼn Konstante is ʼn term sonder ʼn veranderlike.\nIn 3x + 7y − 18 is die enigste term sonder ʼn veranderlike −18.' },

        // Blok 2 — Uitdrukkings skryf vanuit woordbeskrywings (Easy-Medium) — posisies 3-6
        { difficulty: 'Easy', question: 'Skryf ʼn uitdrukking vir ʼn getal p wat met 15 vermeerder word.', answer: 'p + 15', checkMode: 'auto', correctAnswer: 'p + 15', correctAnswers: ['p + 15', 'p+15', '15 + p', '15+p'], explanation: '"Vermeerder met" beteken optel.\np + 15' },
        { difficulty: 'Easy-Medium', question: 'Skryf ʼn uitdrukking vir die totale koste, in rand, om b brode teen R18 elk te koop.', answer: '18b', checkMode: 'auto', correctAnswer: '18b', correctAnswers: ['18b', 'b*18', '18*b'], explanation: '"Teen R18 elk" beteken vermenigvuldig.\nKoste = prys per brood × aantal brode\n18b' },
        { difficulty: 'Medium', question: 'Zanele het c kaarte. Skryf ʼn uitdrukking vir 5 maal haar aantal kaarte, met 9 verminder.', answer: '5c − 9', checkMode: 'auto', correctAnswer: '5c - 9', correctAnswers: ['5c - 9', '5c-9', '5c − 9'], explanation: '"5 maal haar kaarte" beteken 5c.\n"Verminder met 9" beteken trek 9 af.\n5c − 9' },
        { difficulty: 'Medium', question: 'ʼn Leerder vertaal "die verskil tussen ʼn getal h en 7" as 7 − h. Verduidelik waarom dit riskant is en gee die meer standaard uitdrukking.', answer: 'Die frase is dubbelsinnig, maar "die verskil tussen h en 7" word gewoonlik in die gegewe volgorde gelees, wat h − 7 beteken (begin met h, trek 7 af). Om 7 − h te skryf keer die volgorde om en gee die teenoorgestelde waarde, tensy h = 7. Die standaard uitdrukking is h − 7.', checkMode: 'self' },

        // Blok 3 — Vereenvoudig deur gelyksoortige terme te groepeer (Medium) — posisies 7-10
        { difficulty: 'Medium', question: 'Vereenvoudig 10x − 3x + 2x.', answer: '9x', checkMode: 'auto', correctAnswer: '9x', explanation: 'Al drie terme het dieselfde veranderlike x tot die mag 1, so hulle is gelyksoortige terme.\n10x − 3x + 2x = (10 − 3 + 2)x = 9x' },
        { difficulty: 'Medium', question: 'Vereenvoudig 6a + 2b − 4a + 7b.', answer: '2a + 9b', checkMode: 'auto', correctAnswer: '2a + 9b', correctAnswers: ['2a + 9b', '2a+9b'], explanation: 'Groepeer gelyksoortige terme: (6a − 4a) + (2b + 7b)\na-terme: 6a − 4a = 2a\nb-terme: 2b + 7b = 9b\nAntwoord: 2a + 9b' },
        { difficulty: 'Medium', question: 'Vereenvoudig 7x + 9 − 3x − 14.', answer: '4x − 5', checkMode: 'auto', correctAnswer: '4x - 5', correctAnswers: ['4x - 5', '4x-5', '4x − 5'], explanation: 'Groepeer gelyksoortige terme: (7x − 3x) + (9 − 14)\nx-terme: 7x − 3x = 4x\nKonstantes: 9 − 14 = −5\nAntwoord: 4x − 5' },
        { difficulty: 'Medium', question: 'ʼn Leerder vereenvoudig 9y − 6 + 4y + 10 en kry 13y + 4. Kontroleer die werk en sê of die leerder korrek is.', answer: 'y-terme: 9y + 4y = 13y. Konstantes: −6 + 10 = 4. Die korrekte vereenvoudigde uitdrukking is 13y + 4, so die leerder is korrek.', checkMode: 'self' },

        // Blok 4 — Vervanging / uitdrukkings bereken (Medium) — posisies 11-14
        { difficulty: 'Medium', question: 'Bereken 4x + 9 wanneer x = 6.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Vervang x = 6: 4(6) + 9 = 24 + 9 = 33 ✓' },
        { difficulty: 'Medium', question: 'Bereken 7a − 3b wanneer a = 5 en b = 6.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Vervang a = 5 en b = 6: 7(5) − 3(6) = 35 − 18 = 17 ✓' },
        { difficulty: 'Medium', question: 'Bereken 4x² − 5 wanneer x = 3.', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Vervang x = 3: 4(3²) − 5 = 4(9) − 5 = 36 − 5 = 31 ✓' },
        { difficulty: 'Medium', question: 'Die koste in rand om ʼn kajak te huur word gegee deur C = 18h + 25, waar h die aantal ure is. Bepaal die koste om ʼn kajak vir 3 ure te huur.', answer: '79', checkMode: 'auto', correctAnswer: '79', explanation: 'Vervang h = 3: C = 18(3) + 25 = 54 + 25 = 79\nDie koste is R79.' },

        // Blok 5 — Optel en aftrek van uitdrukkings (Medium-Hard) — posisies 15-17
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings (5x + 9) en (4x − 3) bymekaar.', answer: '9x + 6', checkMode: 'auto', correctAnswer: '9x + 6', correctAnswers: ['9x + 6', '9x+6'], explanation: '(5x + 9) + (4x − 3)\nGroepeer gelyksoortige terme: (5x + 4x) + (9 − 3)\n= 9x + 6' },
        { difficulty: 'Medium-Hard', question: 'Trek (2a − 7) af van (8a + 3).', answer: '6a + 10', checkMode: 'auto', correctAnswer: '6a + 10', correctAnswers: ['6a + 10', '6a+10'], explanation: '(8a + 3) − (2a − 7)\nVerander die teken van elke term wat afgetrek word: 8a + 3 − 2a + 7\nGroepeer gelyksoortige terme: (8a − 2a) + (3 + 7)\n= 6a + 10' },
        { difficulty: 'Medium-Hard', question: 'Tel die uitdrukkings 4m + 5n en 6m − 2n bymekaar.', answer: '10m + 3n', checkMode: 'auto', correctAnswer: '10m + 3n', correctAnswers: ['10m + 3n', '10m+3n'], explanation: '(4m + 5n) + (6m − 2n)\nGroepeer gelyksoortige terme: (4m + 6m) + (5n − 2n)\n= 10m + 3n' },

        // Blok 6 — Multi-stap en foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'Vereenvoudig 4x + 5y − 2x + 3 − 2y − 9.', answer: '2x + 3y − 6', checkMode: 'auto', correctAnswer: '2x + 3y - 6', correctAnswers: ['2x + 3y - 6', '2x+3y-6', '2x + 3y − 6'], explanation: 'Groepeer gelyksoortige terme: (4x − 2x) + (5y − 2y) + (3 − 9)\nx-terme: 4x − 2x = 2x\ny-terme: 5y − 2y = 3y\nKonstantes: 3 − 9 = −6\nAntwoord: 2x + 3y − 6' },
        { difficulty: 'Hard', question: 'ʼn Leerder moet 6x + 3x bereken wanneer x = 4. Hulle vereenvoudig eers na 9x, en vervang dan om 36 te kry. ʼn Tweede leerder vervang eers: 6(4) + 3(4) = 24 + 12 = 36. Gee albei metodes dieselfde antwoord? Verduidelik waarom.', answer: 'Ja, albei metodes gee 36. Om ʼn uitdrukking eers te vereenvoudig en dan te vervang gee ʼn gelykstaande resultaat aan om eers in die oorspronklike uitdrukking te vervang, want 6x + 3x en 9x verteenwoordig dieselfde waarde vir enige waarde van x — die kombinering van gelyksoortige terme verander nie wat die uitdrukking werd is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het algebraïese woordeskat, uitdrukkings skryf, vereenvoudiging, vervanging en die kombinering van uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige vrae oor wat jy verkeerd gehad het oor gelyksoortige terme of vervanging weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor vereenvoudiging en die optel of aftrek van uitdrukkings weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
