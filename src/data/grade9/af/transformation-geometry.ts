import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation geometry roles) ──────────────────────────
// line y=x (S1) / original point (S2) / original vertices (S3) → blue  (#2563eb)
// original point (S1) / transformation (S2) / new vertices (S3) → green (#16a34a)
// reflected point (S1) / image point (S2) / scale factor (S3)  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformasiemeetkunde',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTING POINTS AND FIGURES IN THE LINE y=x
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflecting-in-y-equals-x',
      title: 'Punte en Figure Reflekteer in die Lyn y=x',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei ons refleksievaardighede uit om punte, lynsegmente en eenvoudige meetkundige figure in die ${bl('lyn y=x')} te reflekteer — ʼn diagonale lyn deur die oorsprong. Om ʼn ${gr('punt (a,b)')} in die ${bl('lyn y=x')} te reflekteer, ruil die koördinate om, wat die ${or('beeld (b,a)')} gee.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lyn y=x')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oorspronklike punt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gereflekteerde punt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die refleksiereël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Die ${bl('lyn y=x')} is ʼn diagonale lyn deur die oorsprong waar elke punt gelyke x- en y-waardes het, byvoorbeeld (1,1), (2,2), (3,3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Om ${gr('punt (a,b)')} in die ${bl('lyn y=x')} te reflekteer: <strong>ruil eenvoudig die koördinate om</strong>. Die ${or('beeld is (b,a)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Vir ʼn figuur, reflekteer elke hoekpunt afsonderlik: elke ${gr('hoekpunt (a,b)')} beeld af na ${or('beeld (b,a)')}. Verbind dan die beeldhoekpunte in dieselfde volgorde.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die omruil werk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('lyn y=x')} is die versameling van alle punte waar x = y. Om oor hierdie lyn te reflekteer, ruil die rol van die x- en y-asse om — dus beeld elke ${gr('punt (a,b)')} af na die ${or('punt (b,a)')} aan die ander kant van die lyn.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Reflekteer die punt (3,7) in die lyn y=x.',
          answer: `Die ${or('beeld')} van ${gr('(3,7)')} is ${or('(7,3)')}`,
          steps: [
            `Identifiseer die ${gr('oorspronklike punt')}: ${gr('(3,7)')}. Die ${bl('lyn y=x')} is die diagonaal deur die oorsprong.`,
            `<strong>Ruil die koördinate om:</strong> ${gr('(3,7)')} → ${or('(7,3)')}`,
            `Die ${or('beeld (7,3)')} lê aan die ander kant van die ${bl('lyn y=x')}. Sien die diagram hieronder wat hierdie refleksie oor die diagonale lyn toon.`,
          ],
        },
        {
          question: 'Sipho reflekteer die punt (−4,2) in die lyn y=x. Vind die beeld.',
          answer: `Die ${or('beeld')} van ${gr('(−4,2)')} is ${or('(2,−4)')}`,
          steps: [
            `Identifiseer die ${gr('oorspronklike punt')}: ${gr('(−4,2)')}. Die ${bl('lyn y=x')} loop deur die oorsprong teen 45°.`,
            `<strong>Ruil koördinate om:</strong> ${gr('(−4,2)')} → ${or('(2,−4)')}`,
            `Antwoord: Die ${or('beeld is (2,−4)')}. Let daarop dat negatiewe waardes in hul nuwe posisie behoue bly ná die omruiling. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflekteer die punt (4,9) in die lyn y=x.',
          answer: '(9,4)',
          checkMode: 'auto',
          correctAnswer: '(9,4)',
          correctAnswers: ['(9,4)', '9,4'],
          explanation: 'Refleksie in y=x ruil die koördinate om.\n(4,9) → (9,4) ✓',
        },

        // ── Q2 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Reflekteer die punt (−2,6) in die lyn y=x.',
          answer: '(6,−2)',
          checkMode: 'auto',
          correctAnswer: '(6,-2)',
          correctAnswers: ['(6,-2)', '(6,−2)', '6,-2', '6,−2'],
          explanation: 'Refleksie in y=x ruil die koördinate om.\n(−2,6) → (6,−2) ✓',
        },

        // ── Q3 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho reflekteer (7,−3) in die lyn y=x en kry (−3,7). Is hy korrek? Verduidelik.',
          answer: 'Ja — refleksie in y=x ruil die koördinate om, so (7,−3) word (−3,7).',
          checkMode: 'self',
        },

        // ── Q9 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Punt (4,7) word gereflekteer in die lyn y=x, en dan getransleer met (2,−1). Vind die finale posisie.',
          answer: '(9,3)',
          checkMode: 'auto',
          correctAnswer: '(9,3)',
          correctAnswers: ['(9,3)', '9,3'],
          explanation: 'Stap 1: Reflekteer (4,7) in y=x → ruil koördinate om → (7,4).\nStap 2: Transleer met (2,−1): (7+2, 4+(−1)) = (9,3).\nFinale posisie: (9,3) ✓',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê om ʼn punt twee keer in die lyn y=x te reflekteer, bring dit terug na sy oorspronklike posisie. Is sy korrek? Verduidelik.',
          answer: 'Ja — refleksie van (a,b) in y=x gee (b,a); refleksie van (b,a) weer in y=x gee weer (a,b), die oorspronklike punt.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the diagonal line y=x, with point (3,7) and its reflection (7,3) marked on either side of the line]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to reflect a point and a simple figure in the line y=x by swapping coordinates" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — IDENTIFYING TRANSFORMATIONS FROM GIVEN IMAGE COORDINATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identifying-transformations',
      title: 'Identifisering van Transformasies vanaf Gegewe Beeldkoördinate',
      icon: '🔎',
      explanation:
        `<p style="margin-bottom:16px;">Gegewe die koördinate van ʼn ${bl('punt')} en sy ${or('beeld')} ná ʼn transformasie, kan ons identifiseer watter transformasie toegepas is — refleksie in die x-as, y-as, of lyn y=x, of ʼn translasie — deur te vergelyk wat verander het.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike punt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('beeldpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('geïdentifiseerde transformasie')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Transformasiereëls om te onthou</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Refleksie in x-as</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (a, −b)<br>x bly dieselfde; y verander van teken.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Refleksie in y-as</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (−a, b)<br>y bly dieselfde; x verander van teken.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Refleksie in y=x</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (b, a)<br>Koördinate word omgeruil.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Translasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a, b) → (a+h, b+k)<br>Beide koördinate skuif met ʼn vaste bedrag.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om die transformasie te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Vergelyk die ${bl('oorspronklike')} en ${or('beeld')}-koördinate.<br><strong>Stap 2</strong> — Kyk wat verander het: het x van teken verander? het y van teken verander? het hulle omgeruil? het beide met ʼn konstante geskuif?<br><strong>Stap 3</strong> — Pas dit by die reël en noem die ${gr('transformasie')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt (5,2) word (5,−2) ná ʼn transformasie. Identifiseer die transformasie.',
          answer: `${gr('Refleksie in die x-as')}`,
          steps: [
            `Vergelyk ${bl('(5,2)')} en ${or('(5,−2)')}.`,
            `Die x-waarde het dieselfde gebly (5 = 5). Die y-waarde se teken het omgeswaai: 2 → −2.`,
            `Dit pas by die reël (a,b) → (a,−b), wat ${gr('refleksie in die x-as')} is. ✓`,
          ],
        },
        {
          question: `Lerato se punt (3,8) word (8,3). Watter transformasie is toegepas?`,
          answer: `${gr('Refleksie in die lyn y=x')}`,
          steps: [
            `Vergelyk ${bl('(3,8)')} en ${or('(8,3)')}.`,
            `Die koördinate is omgeruil: 3 en 8 het posisies verwissel.`,
            `Dit pas by die reël (a,b) → (b,a), wat ${gr('refleksie in die lyn y=x')} aandui. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Punt (6,1) word (6,−1) ná ʼn transformasie. Identifiseer die transformasie.',
          answer: 'refleksie in die x-as',
          checkMode: 'auto',
          correctAnswer: 'refleksie in die x-as',
          correctAnswers: ['refleksie in die x-as', 'refleksie in x-as', 'x-as refleksie'],
          explanation: 'Die x-waarde het dieselfde gebly (6 = 6). Die y-waarde het van teken verander: 1 → −1.\nDit is ʼn refleksie in die x-as: (a,b) → (a,−b). ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Punt (−5,4) word (5,4) ná ʼn transformasie. Identifiseer die transformasie.',
          answer: 'refleksie in die y-as',
          checkMode: 'auto',
          correctAnswer: 'refleksie in die y-as',
          correctAnswers: ['refleksie in die y-as', 'refleksie in y-as', 'y-as refleksie'],
          explanation: 'Die y-waarde het dieselfde gebly (4 = 4). Die x-waarde het van teken verander: −5 → 5.\nDit is ʼn refleksie in die y-as: (a,b) → (−a,b). ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: `Lerato se punt (9,2) word (2,9). Identifiseer die transformasie en verduidelik jou redenasie.`,
          answer: 'Refleksie in die lyn y=x, aangesien die koördinate omgeruil is.',
          checkMode: 'self',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: `Sipho se punt (6,3) word (−6,3). Identifiseer die transformasie.`,
          answer: `Refleksie in die y-as, aangesien die x-koördinaat se teken omgeswaai het terwyl y dieselfde gebly het.`,
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing transformation examples: reflection in x-axis, y-axis, line y=x, and a translation, with original and image points colour coded" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify a transformation by comparing original and image coordinates" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING COORDINATES AFTER ENLARGEMENT OR REDUCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargement-reduction-scale-factor',
      title: 'Ondersoek van Koördinate Ná Vergroting of Verkleining deur ʼn Skaalfaktor',
      icon: '↕',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek die koördinate van hoekpunte van figure wat vergroot of verklein is deur ʼn gegewe ${or('skaalfaktor')} vanaf die oorsprong — deur beide x- en y-koördinate van elke ${bl('hoekpunt')} met die ${or('skaalfaktor')} te vermenigvuldig om die ${gr('nuwe koördinate')} te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike hoekpunte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('nuwe hoekpunte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vergrotings- en verkleiningsreël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vir ʼn ${or('skaalfaktor')} k &gt; 1: elke ${bl('hoekpunt (x,y)')} beeld af na ${gr('(kx,ky)')} — die vorm word groter (${or('vergroting')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vir ʼn ${or('skaalfaktor')} 0 &lt; k &lt; 1: elke ${bl('hoekpunt (x,y)')} beeld af na ${gr('(kx,ky)')} — die vorm word kleiner (${or('verkleining')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die middelpunt van vergroting/verkleining is die oorsprong. Die vorm en sy beeld is ${gr('gelykvormig')} — dieselfde vorm, verskillende grootte.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Wat dieselfde bly en wat verander</p>` +
        `<p style="margin:0;color:#166534;">Die <strong>hoeke</strong> van die vorm verander nie ná ʼn skaaltransformasie nie. Die <strong>syelengtes</strong> word met die ${or('skaalfaktor')} k vermenigvuldig, en so ook die omtrek. Die <strong>oppervlakte</strong> word met k² vermenigvuldig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het hoekpunte (2,3), (4,3), (3,6). Vergroot dit met ʼn skaalfaktor van 2 vanaf die oorsprong.',
          answer: `Nuwe hoekpunte: ${gr('(4,6)')} , ${gr('(8,6)')} , ${gr('(6,12)')}`,
          steps: [
            `${or('Skaalfaktor')} = 2. Vermenigvuldig elke koördinaat van elke ${bl('hoekpunt')} met ${or('2')}.`,
            `${bl('(2,3)')} → (2×${or('2')}, 3×${or('2')}) = ${gr('(4,6)')}`,
            `${bl('(4,3)')} → (4×${or('2')}, 3×${or('2')}) = ${gr('(8,6)')}`,
            `${bl('(3,6)')} → (3×${or('2')}, 6×${or('2')}) = ${gr('(6,12)')}`,
            `<strong>Nuwe driehoekhoekpunte:</strong> ${gr('(4,6)')} , ${gr('(8,6)')} , ${gr('(6,12)')} ✓`,
          ],
        },
        {
          question: 'Thabo verklein ʼn vorm met hoekpunt (8,12) met ʼn skaalfaktor van ¼ vanaf die oorsprong. Vind die nuwe koördinate.',
          answer: `Nuwe hoekpunt: ${gr('(2,3)')}`,
          steps: [
            `${or('Skaalfaktor')} = ¼. Vermenigvuldig elke koördinaat van die ${bl('hoekpunt')} met ${or('¼')}.`,
            `${bl('(8,12)')} → (8×${or('¼')}, 12×${or('¼')}) = ${gr('(2,3)')}`,
            `<strong>Nuwe hoekpunt:</strong> ${gr('(2,3)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het hoekpunte (1,2), (3,2), (2,5). Vergroot dit met ʼn skaalfaktor van 3 vanaf die oorsprong.',
          answer: '(3,6),(9,6),(6,15)',
          checkMode: 'auto',
          correctAnswer: '(3,6),(9,6),(6,15)',
          correctAnswers: ['(3,6),(9,6),(6,15)', '(3,6), (9,6), (6,15)'],
          explanation: 'Vermenigvuldig elke koördinaat met 3:\n(1,2) → (3,6)\n(3,2) → (9,6)\n(2,5) → (6,15)\nNuwe hoekpunte: (3,6), (9,6), (6,15) ✓',
        },

        // ── Q8 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo verklein ʼn vorm met hoekpunt (12,16) met ʼn skaalfaktor van ¼ vanaf die oorsprong. Vind die nuwe koördinate.',
          answer: 'Vermenigvuldig met ¼: (3,4).',
          checkMode: 'self',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vierkant het hoekpunte (0,0), (2,0), (2,2), (0,2). Vergroot dit met ʼn skaalfaktor van 5.',
          answer: '(0,0),(10,0),(10,10),(0,10)',
          checkMode: 'auto',
          correctAnswer: '(0,0),(10,0),(10,10),(0,10)',
          correctAnswers: ['(0,0),(10,0),(10,10),(0,10)', '(0,0), (10,0), (10,10), (0,10)'],
          explanation: 'Vermenigvuldig elke koördinaat met 5:\n(0,0) → (0,0)\n(2,0) → (10,0)\n(2,2) → (10,10)\n(0,2) → (0,10)\nNuwe hoekpunte: (0,0), (10,0), (10,10), (0,10) ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Vorm met hoekpunt (15,20) word verklein met ʼn skaalfaktor van ⅕ vanaf die oorsprong. Vind die nuwe koördinaat, reflekteer dit dan in die lyn y=x.',
          answer: 'Verklein: (3,4). Gereflekteer in y=x: (4,3).',
          checkMode: 'self',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om ʼn vorm met ʼn skaalfaktor van 1 te vergroot, hou dit presies dieselfde. Is sy korrek? Verduidelik.',
          answer: 'Ja — om koördinate met ʼn skaalfaktor van 1 te vermenigvuldig, laat hulle onveranderd, wat beteken die vorm bly identies in grootte en posisie.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Driehoek met hoekpunte (2,1), (4,1), (3,3) word met skaalfaktor 4 vergroot, en die resultaat word dan in die lyn y=x gereflekteer. Vind die finale koördinate.',
          answer: 'Vergroot: (8,4),(16,4),(12,12). Gereflekteer in y=x: (4,8),(4,16),(12,12).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="[Diagram needed: a small triangle with vertices (2,3),(4,3),(3,6) and a larger enlarged triangle with vertices (4,6),(8,6),(6,12), both shown on the same Cartesian plane radiating from the origin]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to enlarge and reduce a shape using a scale factor from the origin on a Cartesian plane" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het transformasiemeetkunde bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
