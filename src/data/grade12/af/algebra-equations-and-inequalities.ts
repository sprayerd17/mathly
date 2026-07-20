import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Kleurhelpers ───────────────────────────────────────────────────────────────
// bl (blou #2563eb)   → gegewe/getoetste waardes, lineêre dele, gefaktoriseerde vorme
// or (oranje #ea580c) → tussenwerk, kritieke waardes, vervangingstappe
// gr (groen #16a34a)  → finale resultate / gevolgtrekkings
// re (rooi #dc2626)   → waarskuwings, nie-reële / verworpe (vreemde) resultate
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebra, Vergelykings en Ongelykhede',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — AARD VAN WORTELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nature-of-roots',
      title: 'Aard van Wortels',
      icon: 'Δ',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>diskriminant</strong> Δ = b² − 4ac (uit die kwadratiese formule) vertel ons die <strong>aard van die wortels</strong> van ax²+bx+c=0 — hoeveel reële oplossings daar is, en of hulle rasionaal of irrasionaal is — sonder om die vergelyking werklik op te los. Dit is nuut vir Graad 12: in Graad 11 het jy die diskriminant gebruik om vergelykings op te los; nou gebruik jy dit om oor die tipe oplossing te redeneer voordat jy oplos.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('koëffisiënte a, b, c')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('diskriminantwaarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolgtrekking')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('geen reële wortels / nie-reële geval')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die diskriminant lees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Δ &gt; 0 — twee reële, ongelyke wortels</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">As Δ ʼn <strong>volkome vierkant</strong> is, is die wortels ${bl('rasionaal')}. As Δ positief is maar NIE ʼn volkome vierkant nie, is die wortels ${bl('irrasionaal')} (wortelvorme).</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Δ = 0 — reële, gelyke wortels</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Daar is presies een herhaalde wortel, x = −b/2a. Hierdie wortel is altyd ${or('rasionaal')} wanneer a, b, c rasionaal is.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Δ &lt; 0 — nie-reële wortels</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die vierkantswortel van ʼn negatiewe getal is nie ʼn reële getal nie, dus het die vergelyking ${re('geen reële oplossings')} nie — die parabool raak nooit die x-as nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Jy hoef nie die vergelyking op te los nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die aard van die wortels te beskryf, bereken slegs ${or('Δ = b² − 4ac')} — daar is geen nodigheid om in die volledige kwadratiese formule te vervang nie. Dit maak "aard van wortels"-vrae vinnig sodra jy die reëls hierbo ken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die aard van die wortels van x² − 6x + 9 = 0 sonder om die vergelyking op te los.',
          answer: `${gr('Reële, gelyke, rasionale wortels')} (Δ = 0)`,
          steps: [
            `Identifiseer ${bl('a = 1, b = −6, c = 9')}.`,
            `Bereken die ${or('diskriminant')}: Δ = b² − 4ac = (−6)² − 4(1)(9) = ${or('36 − 36 = 0')}.`,
            `Aangesien Δ = 0, is die wortels ${gr('reëel, gelyk, en rasionaal')} (die herhaalde wortel is x = −b/2a = 6/2 = 3, ʼn rasionale getal).`,
          ],
        },
        {
          question: 'Bepaal die aard van die wortels van 2x² + 3x − 5 = 0 sonder om die vergelyking op te los.',
          answer: `${gr('Reële, ongelyke, rasionale wortels')} (Δ = 49, ʼn volkome vierkant)`,
          steps: [
            `Identifiseer ${bl('a = 2, b = 3, c = −5')}.`,
            `Bereken die ${or('diskriminant')}: Δ = 3² − 4(2)(−5) = ${or('9 + 40 = 49')}.`,
            `Aangesien Δ = 49 &gt; 0, is die wortels reëel en ongelyk. Aangesien 49 = 7² ʼn ${or('volkome vierkant')} is, is die wortels ook ${gr('rasionaal')} (hulle vereenvoudig tot breuke, nie wortelvorme nie).`,
          ],
        },
        {
          question: 'Bepaal die aard van die wortels van x² + 2x + 5 = 0 sonder om die vergelyking op te los.',
          answer: `${re('Nie-reële wortels')} (Δ = −16)`,
          steps: [
            `Identifiseer ${bl('a = 1, b = 2, c = 5')}.`,
            `Bereken die ${or('diskriminant')}: Δ = 2² − 4(1)(5) = ${or('4 − 20 = −16')}.`,
            `Aangesien Δ &lt; 0, het die vergelyking ${re('geen reële wortels')} nie — die wortels is nie-reëel.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Bepaal die aard van die wortels van x² + 4x + 4 = 0 sonder om die vergelyking op te los.',
          answer: 'Reële, gelyke, rasionale wortels',
          checkMode: 'auto',
          correctAnswer: 'reeel, gelyk, rasionaal',
          correctAnswers: ['reeel, gelyk, rasionaal', 'reël, gelyk, rasionaal', 'reëel, gelyk, rasionaal', 'gelyk, reëel, rasionaal', 'rasionaal, reëel, gelyk'],
          explanation: 'a=1, b=4, c=4. Δ = 16 − 16 = 0.\nAangesien Δ = 0, is die wortels reëel, gelyk en rasionaal ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bepaal die aard van die wortels van x² − 4x − 2 = 0 sonder om die vergelyking op te los.',
          answer: 'Reële, ongelyke, irrasionale wortels',
          checkMode: 'auto',
          correctAnswer: 'reeel, ongelyk, irrasionaal',
          correctAnswers: ['reeel, ongelyk, irrasionaal', 'reëel, ongelyk, irrasionaal', 'ongelyk, reëel, irrasionaal', 'irrasionaal, reëel, ongelyk'],
          explanation: 'a=1, b=−4, c=−2. Δ = 16 + 8 = 24.\nAangesien Δ=24>0, is die wortels reëel en ongelyk. Aangesien 24 nie ʼn volkome vierkant is nie, is die wortels irrasionaal ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Vir watter waarde(s) van k sal die vergelyking x² − 2x + k = 0 nie-reële wortels hê?',
          answer: 'k > 1',
          checkMode: 'auto',
          correctAnswer: 'k>1',
          correctAnswers: ['k>1', 'k > 1'],
          explanation: 'a=1, b=−2, c=k. Vir nie-reële wortels, Δ < 0: 4 − 4k < 0 → 4 < 4k → k > 1 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg"><g><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 30 Q 100 245 180 30" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="58" cy="110" r="3.5" fill="#2563eb"/><circle cx="142" cy="110" r="3.5" fill="#2563eb"/><text x="100" y="20" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">&#916; &gt; 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">twee reële, ongelyke wortels</text></g><g transform="translate(210,0)"><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 30 Q 100 190 180 30" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="100" cy="110" r="3.5" fill="#ea580c"/><text x="100" y="20" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">&#916; = 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">een reële, herhaalde wortel</text></g><g transform="translate(420,0)"><line x1="10" y1="110" x2="190" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 20 90 Q 100 55 180 90" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="100" y="20" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">&#916; &lt; 0</text><text x="100" y="150" font-size="10" font-weight="600" fill="#0f1f3d" text-anchor="middle">geen reële wortels (nie-reëel)</text></g></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe die diskriminant bepaal of die wortels van ʼn kwadratiese vergelyking reëel en gelyk, reëel en ongelyk (rasionaal of irrasionaal), of nie-reëel is" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KWADRATIESE VERGELYKINGS OPLOS (KONSOLIDASIE)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-quadratic-equations',
      title: 'Kwadratiese Vergelykings Oplos — Konsolidasie',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Om ax²+bx+c=0 op te los, is hersiening van Graad 11, en ʼn kernvaardigheid waarop jy regdeur hierdie onderwerp sal steun. Die twee metodes wat op Graad 12-vlak geëksamineer word, is ${bl('faktorisering')} en die ${gr('kwadratiese formule')} x = (−b ± √(b² − 4ac)) / 2a. ${or('Volledigmaking van die vierkant')} word hieronder ingesluit slegs as hersiening, aangesien dit presies is waar die kwadratiese formule (en dus die diskriminant van Afdeling 1) vandaan kom.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faktorisering')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volledigmaking van die vierkant (hersiening)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadratiese formule')}</span>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Nota oor eksamenomvang</p>` +
        `<p style="margin:0;color:#78350f;">Volgens die NSS-eksamenriglyne word die oplos van ʼn kwadratiese vergelyking deur volledigmaking van die vierkant <strong>nie</strong> as ʼn alleenstaande vraag op Graad 12-vlak geëksamineer nie — jy sal verwag word om ${bl('faktorisering')} of die ${gr('kwadratiese formule')} te gebruik. Die <strong>vervangingsmetode ("k-metode")</strong> vir vergelykings wat tot kwadratiese vorm herlei (later in hierdie onderwerp gebruik vir eksponensiële vergelykings) <em>is</em> wel eksamineerbaar.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die kwadratiese formule</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin:0;letter-spacing:0.02em;">x = (−b ± √(b² − 4ac)) / 2a</p>` +
        `<p style="font-size:13px;color:#374151;margin-top:10px;margin-bottom:0;">Werk altyd — veral nuttig wanneer die uitdrukking nie oor die heelgetalle faktoriseer nie, wat wortelvorm-antwoorde gee.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x deur faktorisering: 3x² − 5x − 2 = 0.',
          answer: `${bl('x = 2')} of ${bl('x = −⅓')}`,
          steps: [
            `Vind twee getalle wat vermenigvuldig tot (3)(−2) = −6 en optel tot −5: dit is ${bl('−6 en 1')}.`,
            `Verdeel die middelterm: 3x² − 6x + x − 2 = 0. ${bl('Faktoriseer')} in pare: 3x(x − 2) + 1(x − 2) = 0 → (3x + 1)(x − 2) = 0.`,
            `Stel elke faktor gelyk aan nul: 3x + 1 = 0 of x − 2 = 0.`,
            `<strong>Oplossings:</strong> ${bl('x = −⅓')} of ${bl('x = 2')}`,
          ],
        },
        {
          question: 'Los op vir x met die kwadratiese formule, en laat jou antwoord in eenvoudigste wortelvorm: x² − 6x + 4 = 0.',
          answer: `${gr('x = 3 + √5')} of ${gr('x = 3 − √5')}`,
          steps: [
            `Identifiseer die koëffisiënte: a = 1, b = −6, c = 4.`,
            `Bereken die diskriminant: Δ = (−6)² − 4(1)(4) = 36 − 16 = 20.`,
            `Pas die ${gr('kwadratiese formule')} toe: x = (6 ± √20) / 2 = (6 ± 2√5) / 2`,
            `<strong>Oplossings:</strong> ${gr('x = 3 ± √5')}`,
          ],
        },
        {
          question: 'Hersiening: skryf x² + 8x + 3 = 0 in volledige vierkantvorm, en los daarvolgens op vir x.',
          answer: `${or('(x + 4)² = 13')}, dus x = ${or('−4 + √13')} of x = ${or('−4 − √13')}`,
          steps: [
            `Neem die helfte van 8 (die x-koëffisiënt): 8 ÷ 2 = 4. Kwadreer dit: 4² = 16.`,
            `Tel by en trek af 16: x² + 8x + 16 − 16 + 3 = 0 → ${or('(x + 4)² − 13 = 0')}.`,
            `Herrangskik en trek vierkantswortels: (x + 4)² = 13 → x + 4 = ±√13.`,
            `<strong>Oplossings:</strong> x = ${or('−4 ± √13')} — let op dat dit ooreenstem met wat die kwadratiese formule direk sou gee, aangesien Δ = 64 − 12 = 52 = 4×13, en (−8 ± √52)/2 = −4 ± √13.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x deur faktorisering: 2x² + 7x + 3 = 0.',
          answer: 'x = −½ of x = −3',
          checkMode: 'auto',
          correctAnswers: ['x=-1/2 or x=-3', 'x = -1/2 of x = -3', 'x=-3 of x=-1/2', 'x=-0.5 of x=-3', '-0.5 of -3', '-3 of -0.5'],
          explanation: '2x²+6x+x+3=0 → 2x(x+3)+1(x+3)=0 → (2x+1)(x+3)=0.\nx=−½ of x=−3 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x met die kwadratiese formule, en laat jou antwoord in eenvoudigste wortelvorm: x² − 8x + 9 = 0.',
          answer: 'x = 4 + √7 of x = 4 − √7',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Skryf x² + 10x − 3 = 0 in volledige vierkantvorm, en los daarvolgens op vir x.',
          answer: 'Helfte van 10 is 5; 5²=25. x²+10x+25−25−3=0 → (x+5)²−28=0 → (x+5)²=28 → x=−5±√28=−5±2√7.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die drie metodes vir die oplos van kwadratiese vergelykings konsolideer, met ʼn nota oor watter metodes direk op Graad 12-vlak geëksamineer word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — KWADRATIESE ONGELYKHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-inequalities',
      title: 'Kwadratiese Ongelykhede',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Op Graad 12-vlak los ons kwadratiese ongelykhede op deur die parabool ${bl('te skets (of voor te stel)')} vanaf sy gefaktoriseerde vorm, en lees dan die ${gr('oplossing')} direk af waar die grafiek bo of onder die x-as lê — dit is dikwels vinniger as ʼn volledige tekentabel, en dit is die metode wat CAPS van jou verwag om gemaklik mee te wees, aangesien dit direk verband hou met die Funksies-onderwerpe.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kritieke waardes / wortels')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vorm van die parabool')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Skets gebruik om op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind die kritieke waardes')} — los die verwante vergelyking op (vervang die ongelykheidsteken met =) en faktoriseer om te vind waar die uitdrukking gelyk is aan nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skets die vorm')} — as a &gt; 0 open die parabool opwaarts (onder die x-as tussen die wortels, bo daarbuite); as a &lt; 0 open dit afwaarts (die teenoorgestelde).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Lees die oplossing af')} — vir "&gt; 0" of "≥ 0" lees die x-waardes waar die grafiek bo die as is; vir "&lt; 0" of "≤ 0" lees waar dit onder is. Sluit eindpunte in vir ≤ / ≥, sluit hulle uit vir &lt; / &gt;.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Tekentabel werk steeds</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy skets moeilik vind, gee die Graad 11-tekentabelmetode (toets ʼn punt in elke interval) altyd dieselfde antwoord — gebruik watter metode jy ook al vinniger vind onder eksamentoestande.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: x² − x − 6 ≤ 0.',
          answer: `${gr('−2 ≤ x ≤ 3')}`,
          steps: [
            `${bl('Kritieke waardes:')} x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = ${bl('−2')} of x = ${bl('3')}.`,
            `${or('Vorm:')} a = 1 &gt; 0, dus open die parabool opwaarts — dit is onder die x-as (negatief) tussen die wortels.`,
            `Ons benodig die uitdrukking ≤ 0, dus wil ons waar die grafiek onder of op die as is — dit gebeur tussen en insluitend die wortels.`,
            `<strong>Oplossing:</strong> ${gr('−2 ≤ x ≤ 3')}`,
          ],
        },
        {
          question: 'Los op vir x: −x² + 4x − 3 > 0.',
          answer: `${gr('1 < x < 3')}`,
          steps: [
            `${bl('Kritieke waardes:')} −x² + 4x − 3 = 0 → vermenigvuldig met −1: x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = ${bl('1')} of x = ${bl('3')}.`,
            `${or('Vorm:')} a = −1 &lt; 0, dus open die parabool afwaarts — dit is bo die x-as (positief) tussen die wortels.`,
            `Ons benodig die uitdrukking &gt; 0, dus wil ons waar die grafiek streng bo die as is — dit gebeur tussen die wortels, eindpunte uitgesluit.`,
            `<strong>Oplossing:</strong> ${gr('1 < x < 3')}`,
          ],
        },
        {
          question: 'Die grafiek van f(x) = x² − 2x − 8 het x-afsnitte by x = −2 en x = 4, met sy draaipunt onder die x-as. Gebruik die grafiek om f(x) ≥ 0 op te los.',
          answer: `${gr('x ≤ −2 of x ≥ 4')}`,
          steps: [
            `${bl('x-afsnitte (kritieke waardes):')} x = ${bl('−2')} en x = ${bl('4')}.`,
            `${or('Vorm:')} die leidende koëffisiënt van x² is positief, en die draaipunt is onder die as — dit stem ooreen met ʼn opwaarts-openende parabool wat tussen sy wortels onder die as duik.`,
            `Ons benodig f(x) ≥ 0, d.w.s. waar die grafiek op of bo die as is — dit gebeur buite (en insluitend) die wortels.`,
            `<strong>Oplossing:</strong> ${gr('x ≤ −2 of x ≥ 4')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x: x² − 5x + 4 ≤ 0.',
          answer: '1 ≤ x ≤ 4',
          checkMode: 'auto',
          correctAnswers: ['1≤x≤4', '1 ≤ x ≤ 4', '[1,4]', '1<=x<=4'],
          explanation: 'Kritieke waardes: (x−1)(x−4)=0 → x=1 of x=4.\nParabool open opwaarts (a=1>0), dus is dit ≤0 tussen die wortels.\nOplossing: 1 ≤ x ≤ 4 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x: −x² + 2x + 3 < 0.',
          answer: 'x < −1 of x > 3',
          checkMode: 'auto',
          correctAnswers: ['x<-1 or x>3', 'x < -1 of x > 3', 'x>3 of x<-1'],
          explanation: '−x²+2x+3=0 → x²−2x−3=0 → (x−3)(x+1)=0 → x=3 of x=−1.\nParabool open afwaarts (a=−1<0), dus is dit positief tussen die wortels en negatief daarbuite.\nOns benodig <0 (negatief): x < −1 of x > 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Die grafiek van g(x) = x² + x − 12 het x-afsnitte by x = −4 en x = 3. Gebruik die grafiek om g(x) > 0 op te los.',
          answer: 'x < −4 of x > 3',
          checkMode: 'auto',
          correctAnswers: ['x<-4 or x>3', 'x < -4 of x > 3', 'x>3 of x<-4'],
          explanation: 'a=1>0, dus open die parabool opwaarts — positief (bo die as) buite die wortels.\nAangesien die ongelykheid streng is, word eindpunte uitgesluit.\nOplossing: x < −4 of x > 3 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="110" x2="245" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><rect x="80" y="110" width="100" height="35" fill="#fed7aa" opacity="0.5"/><path d="M 40 40 Q 130 220 220 40" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="80" cy="110" r="4" fill="#2563eb"/><circle cx="180" cy="110" r="4" fill="#2563eb"/><text x="80" y="128" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">-2</text><text x="180" y="128" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="130" y="150" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">-2 &#8804; x &#8804; 3</text><text x="130" y="20" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = x&#178; - x - 6 &#8804; 0</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn kwadratiese ongelykheid op te los deur die parabool vanaf sy gefaktoriseerde vorm te skets en die oplossing van die grafiek af te lees" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — GELYKTYDIGE VERGELYKINGS: EEN LINEÊR EN EEN KWADRATIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simultaneous-linear-quadratic',
      title: 'Gelyktydige Vergelykings — Lineêr en Kwadraties',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">Jy het die vervangingsmetode vir een ${bl('lineêre')} en een ${or('kwadratiese')} vergelyking in Graad 11 teëgekom. Op Graad 12-vlak word hierdie vaardigheid gekonsolideer en uitgebrei: verwag deurmekaarder koëffisiënte, ${gr('wortelvorm-oplossings')}, en vrae wat die aantal oplossings met die ${gr('diskriminant')} verbind — byvoorbeeld, om ʼn waarde van ʼn konstante te bepaal waarvoor ʼn lyn <strong>raaklynig</strong> aan ʼn parabool is, of om algebraïes te toon dat ʼn lyn en parabool <strong>nie</strong> sny nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lineêre vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadratiese vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolglike vergelyking / oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: vervanging</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Maak ${bl('y (of x)')} die onderwerp van die lineêre vergelyking.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang in die ${or('kwadratiese vergelyking')} om ʼn enkele vergelyking in een veranderlike te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Los die ${gr('gevolglike kwadratiese')} op, en vervang dan terug om die ander veranderlike vir elke oplossing te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Verband met die diskriminant</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die diskriminant van die gevolglike kwadratiese vertel jou presies hoe die lyn en parabool verband hou: <strong>Δ &gt; 0</strong> → twee snypunte, <strong>Δ = 0</strong> → die lyn is raaklynig aan die parabool (een punt), <strong>Δ &lt; 0</strong> → die lyn ontmoet die parabool nooit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los gelyktydig op: 2x + y = 7 en y = x² − 4x + 1.',
          answer: `(${gr('1 + √7')} ; ${gr('5 − 2√7')}) en (${gr('1 − √7')} ; ${gr('5 + 2√7')})`,
          steps: [
            `Maak y die onderwerp van die ${bl('lineêre vergelyking')}: y = 7 − 2x.`,
            `${gr('Vervang')} in die ${or('kwadratiese vergelyking')}: 7 − 2x = x² − 4x + 1.`,
            `Herrangskik: ${gr('x² − 2x − 6 = 0')}.`,
            `Los op met die kwadratiese formule: a=1, b=−2, c=−6. x = (2 ± √(4+24)) / 2 = (2 ± √28) / 2 = 1 ± √7.`,
            `Vervang terug in ${bl('y = 7 − 2x')}: wanneer x = 1+√7, y = 7−2(1+√7) = 5−2√7; wanneer x = 1−√7, y = 7−2(1−√7) = 5+2√7.`,
            `<strong>Oplossings:</strong> (${gr('1 + √7')} ; ${gr('5 − 2√7')}) en (${gr('1 − √7')} ; ${gr('5 + 2√7')})`,
          ],
        },
        {
          question: 'Bepaal die waarde van c waarvoor die lyn y = 2x + c raaklynig is aan (raak) die parabool y = x² + 4x + 1.',
          answer: `${gr('c = 0')}`,
          steps: [
            `${gr('Vervang')} die ${bl('lineêre vergelyking')} in die ${or('kwadratiese vergelyking')}: 2x + c = x² + 4x + 1.`,
            `Herrangskik: x² + 2x + (1 − c) = 0.`,
            `Vir die lyn om <strong>raaklynig</strong> te wees, moet hierdie vergelyking gelyke wortels hê, dus Δ = 0: Δ = 2² − 4(1)(1−c) = 4 − 4 + 4c = 4c.`,
            `Stel Δ = 0: 4c = 0 → ${gr('c = 0')}.`,
            `<strong>Kontroleer:</strong> met c=0, x² + 2x + 1 = 0 → (x+1)² = 0 → x = −1 (herhaal). By x=−1: y = 2(−1)+0 = −2, en op die parabool: (−1)²+4(−1)+1 = 1−4+1 = −2 ✓ — die lyn raak die parabool by presies een punt.`,
          ],
        },
        {
          question: 'Toon algebraïes dat die lyn y = 3x − 1 nie die parabool y = x² + x + 5 sny nie.',
          answer: `${re('Geen reële oplossings — die lyn en parabool sny nie')} (Δ = −20)`,
          steps: [
            `${gr('Vervang')} die ${bl('lineêre vergelyking')} in die ${or('kwadratiese vergelyking')}: 3x − 1 = x² + x + 5.`,
            `Herrangskik: x² − 2x + 6 = 0.`,
            `Bereken die diskriminant: Δ = (−2)² − 4(1)(6) = 4 − 24 = ${re('−20')}.`,
            `Aangesien Δ &lt; 0, het die vergelyking ${re('geen reële oplossings')} nie — die lyn ontmoet die parabool nooit.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los gelyktydig op: y = 2x − 3 en y = x² − 2x − 3.',
          answer: 'x = 0, y = −3  of  x = 4, y = 5',
          checkMode: 'auto',
          correctAnswers: ['x=0,y=-3 or x=4,y=5', 'x=4,y=5 of x=0,y=-3', '(0,-3) en (4,5)'],
          explanation: '2x−3=x²−2x−3 → x²−4x=0 → x(x−4)=0 → x=0 of x=4.\nWanneer x=0: y=2(0)−3=−3. Wanneer x=4: y=2(4)−3=5.\nKontroleer: 0²−2(0)−3=−3 ✓ en 4²−2(4)−3=5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los gelyktydig op, en laat jou antwoorde in eenvoudigste wortelvorm: y = x + 4 en y = x² − x − 2.',
          answer: 'x = 1+√7, y = 5+√7  of  x = 1−√7, y = 5−√7',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Bepaal die waarde van k waarvoor die lyn y = x + k raak (raaklynig is aan) die parabool y = x² − 4x + 9.',
          answer: 'k = 11/4',
          checkMode: 'auto',
          correctAnswer: 'k=11/4',
          correctAnswers: ['k=11/4', 'k = 11/4', 'k=2.75', 'k = 2.75', '11/4', '2.75'],
          explanation: 'x+k=x²−4x+9 → x²−5x+(9−k)=0.\nVir raaklynigheid, Δ=0: 25−4(9−k)=0 → 25−36+4k=0 → 4k=11 → k=11/4 ✓',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="160" x2="245" y2="160" stroke="#0f1f3d" stroke-width="1.5"/><line x1="25" y1="150" x2="235" y2="30" stroke="#2563eb" stroke-width="2.5"/><path d="M 30 30 Q 130 185 230 30" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="107" cy="103" r="4.5" fill="#16a34a"/><circle cx="227" cy="35" r="4.5" fill="#16a34a"/><text x="130" y="16" font-size="11.5" font-weight="700" fill="#0f1f3d" text-anchor="middle">lyn en parabool: 2 snypunte</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn lineêr-kwadratiese stelsel met wortelvorm-oplossings op te los, en hoe die diskriminant van die gevolglike vergelyking raaklynigheid of geen snypunt bepaal" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VERGELYKINGS MET WORTELVORME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surd-equations',
      title: 'Vergelykings met Wortelvorme',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn vergelyking met x onder ʼn vierkantswortel op te los, ${bl('isoleer ons die wortelvorm')}, en ${or('kwadreer dan albei kante')} om dit te verwyder — dit lewer gewoonlik ʼn kwadratiese vergelyking. Om albei kante te kwadreer kan ${re('vreemde (vals) wortels')} inbring, dus moet elke oplossing in die <strong>oorspronklike</strong> vergelyking gekontroleer word, nie die gekwadreerde weergawe nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('isoleer die wortelvorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadreer albei kante')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer vir vreemde wortels')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Isoleer die wortelvorm')} — kry die vierkantswortelterm alleen aan een kant van die vergelyking.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Kwadreer albei kante')} om die wortel te verwyder, en los dan die gevolglike vergelyking op (gewoonlik ʼn kwadratiese).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Kontroleer elke oplossing')} in die oorspronklike (ongekwadreerde) vergelyking. Verwerp enige oplossing wat dit nie bevredig nie — die vierkantswortelteken beteken altyd die nie-negatiewe wortel, dus kan dit nooit gelyk wees aan ʼn negatiewe getal nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">Waarom vreemde wortels verskyn</p>` +
        `<p style="margin:0;color:#7f1d1d;">Om albei kante van ʼn vergelyking te kwadreer kan ʼn vals stelling waar maak — byvoorbeeld √9 = −3 is vals, maar as albei kante gekwadreer word, kry ons 9 = 9, wat waar is. Dit is waarom die kontrole teen die oorspronklike vergelyking nie opsioneel is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: √(x + 10) = x − 2.',
          answer: `${gr('x = 6')} (x = −1 word verwerp)`,
          steps: [
            `Die wortelvorm is reeds ${bl('geïsoleer')}. ${or('Kwadreer albei kante')}: x + 10 = (x−2)² = x² − 4x + 4.`,
            `Herrangskik: x² − 5x − 6 = 0 → (x − 6)(x + 1) = 0 → x = 6 of x = −1.`,
            `${re('Kontroleer x = 6')}: √(6+10) = √16 = 4, en 6−2 = 4. 4 = 4 ✓ geldig.`,
            `${re('Kontroleer x = −1')}: √(−1+10) = √9 = 3, maar −1−2 = −3. 3 ≠ −3 ✗ — ${re('vreemd, verwerp')}.`,
            `<strong>Oplossing:</strong> ${gr('x = 6')} slegs.`,
          ],
        },
        {
          question: 'Los op vir x: √(3x − 2) = x − 4.',
          answer: `${gr('x = 9')} (x = 2 word verwerp)`,
          steps: [
            `${or('Kwadreer albei kante')}: 3x − 2 = (x−4)² = x² − 8x + 16.`,
            `Herrangskik: x² − 11x + 18 = 0 → (x − 9)(x − 2) = 0 → x = 9 of x = 2.`,
            `${re('Kontroleer x = 9')}: √(27−2) = √25 = 5, en 9−4 = 5. 5 = 5 ✓ geldig.`,
            `${re('Kontroleer x = 2')}: √(6−2) = √4 = 2, maar 2−4 = −2. 2 ≠ −2 ✗ — ${re('vreemd, verwerp')}.`,
            `<strong>Oplossing:</strong> ${gr('x = 9')} slegs.`,
          ],
        },
        {
          question: 'Los op vir x: √(5x + 1) = x + 1.',
          answer: `${gr('x = 0')} of ${gr('x = 3')} (albei geldig)`,
          steps: [
            `${or('Kwadreer albei kante')}: 5x + 1 = (x+1)² = x² + 2x + 1.`,
            `Herrangskik: x² − 3x = 0 → x(x − 3) = 0 → x = 0 of x = 3.`,
            `${re('Kontroleer x = 0')}: √(0+1) = √1 = 1, en 0+1 = 1. 1 = 1 ✓ geldig.`,
            `${re('Kontroleer x = 3')}: √(15+1) = √16 = 4, en 3+1 = 4. 4 = 4 ✓ geldig.`,
            `<strong>Oplossing:</strong> ${gr('x = 0')} of ${gr('x = 3')} — nie elke wortelvorm-vergelyking lewer ʼn vreemde wortel nie; jy moet steeds albei kontroleer.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x: √(x + 4) = x − 2.',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Kwadreer: x+4=x²−4x+4 → x²−5x=0 → x(x−5)=0 → x=0 of x=5.\nKontroleer x=0: √4=2, maar 0−2=−2, dus 2≠−2, verwerp.\nKontroleer x=5: √9=3, en 5−2=3 ✓ geldig.\nOplossing: x=5 slegs.',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x: √(3x + 7) = x + 1.',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: 'Kwadreer: 3x+7=x²+2x+1 → x²−x−6=0 → (x−3)(x+2)=0 → x=3 of x=−2.\nKontroleer x=3: √16=4, en 3+1=4 ✓ geldig.\nKontroleer x=−2: √1=1, maar −2+1=−1, dus 1≠−1, verwerp.\nOplossing: x=3 slegs.',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho moet √(2x − 3) = −5 oplos. Verduidelik, sonder om enige algebra te doen, waarom hierdie vergelyking geen oplossing het nie.',
          answer: 'Die vierkantswortelteken beteken altyd die nie-negatiewe wortel, dus kan √(2x − 3) nooit gelyk wees aan ʼn negatiewe getal soos −5 nie. Geen algebra is nodig nie — die vergelyking het geen oplossing nie omdat die regterkant negatief is.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om vergelykings met wortelvorme op te los deur die wortel te isoleer, albei kante te kwadreer, en elke oplossing teen die oorspronklike vergelyking te kontroleer om vreemde wortels te verwerp" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — EKSPONENSIËLE VERGELYKINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-equations',
      title: 'Eksponensiële Vergelykings',
      icon: 'ˣ',
      explanation:
        `<p style="margin-bottom:16px;">Dit is ʼn kort brug terug na vaardighede van Graad 11: wanneer albei kante van ʼn vergelyking met dieselfde ${bl('grondtal')} geskryf kan word, kan die eksponente aan mekaar gelyk gestel word. Sommige vergelykings herlei tot ʼn versteekte kwadratiese — deur die ${or('vervanging ("k-metode")')} te gebruik, waar k = a^x, verander dit in ʼn gewone kwadratiese vergelyking.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dieselfde grondtal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vervanging (k-metode)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volledige dekking elders</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hierdie afdeling hersien slegs die algebraïese hantering van eksponente. Vir ʼn volledige behandeling van eksponensiële funksies, logaritmes, en vergelykings wat nie tot dieselfde grondtal herlei kan word nie (wat logaritmes vereis om op te los), sien die onderwerp <strong>Eksponensiële en Logaritmiese Funksies</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: 5^(2x − 1) = 125.',
          answer: `${gr('x = 2')}`,
          steps: [
            `Skryf 125 as ʼn mag van ${bl('5')}: 125 = 5³.`,
            `Dus 5^(2x−1) = 5³, wat beteken die eksponente moet gelyk wees: 2x − 1 = 3.`,
            `<strong>Oplossing:</strong> 2x = 4 → ${gr('x = 2')}`,
          ],
        },
        {
          question: 'Los op vir x: 4^(x + 1) = 8^(x − 2).',
          answer: `${gr('x = 8')}`,
          steps: [
            `Skryf albei kante met grondtal ${bl('2')}: 4 = 2² en 8 = 2³.`,
            `Dus (2²)^(x+1) = (2³)^(x−2) → 2^(2x+2) = 2^(3x−6).`,
            `Stel die eksponente gelyk: 2x + 2 = 3x − 6.`,
            `<strong>Oplossing:</strong> 8 = x → ${gr('x = 8')}`,
          ],
        },
        {
          question: 'Los op vir x: 3^(2x) − 10 · 3^x + 9 = 0.',
          answer: `${gr('x = 0')} of ${gr('x = 2')}`,
          steps: [
            `${or('Laat k = 3^x')}, dus 3^(2x) = (3^x)² = k². Die vergelyking word k² − 10k + 9 = 0.`,
            `Faktoriseer: (k − 1)(k − 9) = 0 → k = 1 of k = 9.`,
            `Vervang terug: 3^x = 1 → x = 0. &nbsp; 3^x = 9 = 3² → x = 2.`,
            `<strong>Oplossing:</strong> ${gr('x = 0')} of ${gr('x = 2')}`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x: 3^(x + 2) = 81.',
          answer: 'x = 2',
          checkMode: 'auto',
          correctAnswer: 'x=2',
          correctAnswers: ['x=2', 'x = 2', '2'],
          explanation: '81=3⁴. Dus x+2=4 → x=2 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x: 9^x = 27^(x − 1).',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: '9=3², 27=3³. Dus 3^(2x)=3^(3x−3) → 2x=3x−3 → x=3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los op vir x: 2^(2x) − 9 · 2^x + 8 = 0.',
          answer: 'x = 0 of x = 3',
          checkMode: 'auto',
          correctAnswers: ['x=0 or x=3', 'x=3 of x=0'],
          explanation: 'Laat k=2^x: k²−9k+8=0 → (k−1)(k−8)=0 → k=1 of k=8.\n2^x=1 → x=0. 2^x=8=2³ → x=3.\nOplossing: x=0 of x=3 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat hersien hoe om eksponensiële vergelykings op te los deur albei kante met dieselfde grondtal te skryf, insluitend die vervangingsmetode vir vergelykings wat tot ʼn kwadratiese herlei" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 7 — ALGEBRAÏESE (RASIONALE) BREUKVERGELYKINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-fraction-equations',
      title: 'Algebraïese (Rasionale) Breukvergelykings',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Dit is werklik nuut vir Graad 12: die oplos van ʼn vergelyking waar x in ʼn ${bl('noemer')} voorkom. Gee eers die ${re('beperkings')} — die waardes van x wat enige noemer nul maak, aangesien die uitdrukking daar onbepaald is. Vermenigvuldig dan elke term met die ${or('kleinste gemene noemer (KGN)')} om die breuke te verwyder, en los die gevolglike vergelyking op. Kontroleer altyd jou oplossing(s) teen die beperkings.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('noemer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vermenigvuldig met die KGN')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('beperkings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Gee eers die beperkings')} — stel elke ${bl('noemer')} ≠ 0 en los op vir die uitgeslote x-waarde(s).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig elke term met die KGN')} om al die breuke te verwyder, wat ʼn lineêre of kwadratiese vergelyking laat.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Los op, en <strong>verwerp</strong> dan enige oplossing wat gelyk is aan ʼn beperkte waarde — al los dit die verwerkte vergelyking op, los dit nie die oorspronklike op nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">ʼn Beperkte waarde kan die enigste "oplossing" wees</p>` +
        `<p style="margin:0;color:#7f1d1d;">As die algebra slegs ʼn beperkte x-waarde lewer, het die vergelyking ${re('geen oplossing')} nie — dit is die rasionale-vergelyking-ekwivalent van ʼn vreemde wortel in ʼn wortelvorm-vergelyking.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: 3/(x + 2) = 2/(x − 1).',
          answer: `${gr('x = 7')}`,
          steps: [
            `${re('Beperkings:')} x ≠ ${bl('−2')} en x ≠ ${bl('1')}.`,
            `${or('Kruisvermenigvuldig')} (dieselfde as om albei kante met die KGN (x+2)(x−1) te vermenigvuldig): 3(x − 1) = 2(x + 2).`,
            `Vermenigvuldig uit en los op: 3x − 3 = 2x + 4 → x = 7.`,
            `Kontroleer teen die beperkings: x = 7 is nie uitgesluit nie. <strong>Oplossing:</strong> ${gr('x = 7')}`,
          ],
        },
        {
          question: 'Los op vir x: x + 6/x = 5.',
          answer: `${gr('x = 2')} of ${gr('x = 3')}`,
          steps: [
            `${re('Beperking:')} x ≠ ${bl('0')}.`,
            `${or('Vermenigvuldig elke term met x')}: x² + 6 = 5x.`,
            `Herrangskik en faktoriseer: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 of x = 3.`,
            `Kontroleer teen die beperkings: geen oplossing is gelyk aan 0 nie. <strong>Oplossing:</strong> ${gr('x = 2')} of ${gr('x = 3')}`,
          ],
        },
        {
          question: 'Los op vir x: 2x/(x − 4) = 3 + 8/(x − 4).',
          answer: `${re('Geen oplossing')} (x = 4 word uitgesluit)`,
          steps: [
            `${re('Beperking:')} x ≠ ${bl('4')}.`,
            `${or('Vermenigvuldig elke term met (x − 4)')}: 2x = 3(x − 4) + 8.`,
            `Vermenigvuldig uit en los op: 2x = 3x − 12 + 8 → 2x = 3x − 4 → x = 4.`,
            `Kontroleer teen die beperkings: x = 4 ${re('word uitgesluit')} — dit maak die oorspronklike noemers nul. <strong>Daar is geen oplossing nie.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los op vir x: 4/(x + 1) = 2/(x − 2).',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Beperkings: x≠−1, x≠2.\nKruisvermenigvuldig: 4(x−2)=2(x+1) → 4x−8=2x+2 → 2x=10 → x=5.\nNie uitgesluit nie — geldig. x=5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los op vir x: x − 4/x = 3.',
          answer: 'x = 4 of x = −1',
          checkMode: 'auto',
          correctAnswers: ['x=4 or x=-1', 'x=-1 of x=4', '4 of -1', '-1 of 4'],
          explanation: 'Beperking: x≠0.\nVermenigvuldig met x: x²−4=3x → x²−3x−4=0 → (x−4)(x+1)=0 → x=4 of x=−1.\nGeen is uitgesluit nie. Oplossing: x=4 of x=−1 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los op vir x: (3x)/(x − 3) = 4 + 6/(x − 3), met vermelding van enige beperkings.',
          answer: 'Geen oplossing — x = 3 word uitgesluit',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om algebraïese breukvergelykings op te los deur beperkings te gee, met die KGN te vermenigvuldig, en oplossings teen die uitgeslote waardes te kontroleer" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — aard van wortels ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die aard van die wortels van 3x² − 2x − 1 = 0 sonder om die vergelyking op te los.',
      answer: 'Reële, ongelyke, rasionale wortels',
      checkMode: 'auto',
      correctAnswer: 'reeel, ongelyk, rasionaal',
      correctAnswers: ['reeel, ongelyk, rasionaal', 'reëel, ongelyk, rasionaal', 'ongelyk, reëel, rasionaal'],
      explanation: 'a=3, b=−2, c=−1. Δ = 4 + 12 = 16, ʼn volkome vierkant.\nReële, ongelyke, rasionale wortels ✓',
    },

    // ── V2 Medium — aard van wortels ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die aard van die wortels van x² + 3x + 5 = 0 sonder om die vergelyking op te los.',
      answer: 'Nie-reële wortels',
      checkMode: 'auto',
      correctAnswer: 'nie-reeel',
      correctAnswers: ['nie-reeel', 'nie-reël', 'nie-reëel', 'nie reëel', 'geen reële wortels'],
      explanation: 'a=1, b=3, c=5. Δ = 9 − 20 = −11 < 0.\nNie-reële wortels ✓',
    },

    // ── V3 Hard — aard van wortels, probleemoplossing ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Toon dat die wortels van x² − (k + 1)x + k = 0 reëel is vir elke reële waarde van k.',
      answer: 'a=1, b=−(k+1), c=k. Δ = (k+1)² − 4k = k² + 2k + 1 − 4k = k² − 2k + 1 = (k−1)².\nAangesien (k−1)² ≥ 0 vir elke reële k, is Δ ≥ 0 altyd, dus is die wortels altyd reëel (gelyk wanneer k=1).',
      checkMode: 'self',
    },

    // ── V4 Medium — kwadratiese vergelykings, wortelvorm ─────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x met die kwadratiese formule, en laat jou antwoord in eenvoudigste wortelvorm: 2x² − 4x − 1 = 0.',
      answer: 'x = (2 + √6)/2 of x = (2 − √6)/2',
      checkMode: 'self',
    },

    // ── V5 Hard — volledigmaking van die vierkant, terugwerk ─────────────────
    {
      difficulty: 'Hard',
      question: 'Die vergelyking x² + bx + c = 0 word in volledige vierkantvorm geskryf as (x + 7)² = 40. Bepaal die waardes van b en c.',
      answer: 'b = 14, c = 9',
      checkMode: 'auto',
      correctAnswers: ['b=14, c=9', 'b=14 c=9', 'b = 14, c = 9'],
      explanation: 'Vermenigvuldig (x+7)²=40 uit: x²+14x+49=40 → x²+14x+9=0.\nDus b=14, c=9 ✓',
    },

    // ── V6 Maklik — kwadratiese ongelykheid ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: x² − 49 ≥ 0.',
      answer: 'x ≤ −7 of x ≥ 7',
      checkMode: 'auto',
      correctAnswers: ['x≤-7 or x≥7', 'x <= -7 of x >= 7', 'x≥7 of x≤-7'],
      explanation: 'x²−49=0 → x=±7. Parabool open opwaarts, dus ≥0 buite die wortels.\nOplossing: x≤−7 of x≥7 ✓',
    },

    // ── V7 Medium — kwadratiese ongelykheid ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: −x² + 5x − 4 ≥ 0.',
      answer: '1 ≤ x ≤ 4',
      checkMode: 'auto',
      correctAnswers: ['1≤x≤4', '1 <= x <= 4', '[1,4]'],
      explanation: '−x²+5x−4=0 → x²−5x+4=0 → (x−1)(x−4)=0 → x=1 of x=4.\nParabool open afwaarts (a=−1<0), positief tussen die wortels.\nOplossing: 1 ≤ x ≤ 4 ✓',
    },

    // ── V8 Hard — kwadratiese ongelykheid, toegepaste konteks ────────────────
    {
      difficulty: 'Hard',
      question: 'Die hoogte van ʼn bal bo die grond word gemodelleer deur h(t) = −5t² + 20t (t in sekondes). Vir hoe lank is die bal bo ʼn hoogte van 15 m?',
      answer: '−5t²+20t>15 → −5t²+20t−15>0 → deel deur −5 (draai om): t²−4t+3<0 → (t−1)(t−3)<0 → 1<t<3.\nDie bal is bo 15 m vir 1s < t < 3s, d.w.s. vir ʼn tydsduur van 2 sekondes.',
      checkMode: 'self',
    },

    // ── V9 Maklik — gelyktydige lineêr-kwadraties ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los gelyktydig op: y = 3x − 2 en y = x² − x − 2.',
      answer: 'x = 0, y = −2  of  x = 4, y = 10',
      checkMode: 'auto',
      correctAnswers: ['x=0,y=-2 or x=4,y=10', 'x=4,y=10 of x=0,y=-2', '(0,-2) en (4,10)'],
      explanation: '3x−2=x²−x−2 → x²−4x=0 → x(x−4)=0 → x=0 of x=4.\nWanneer x=0: y=−2. Wanneer x=4: y=10.\nKontroleer: 0²−0−2=−2 ✓ en 4²−4−2=10 ✓',
    },

    // ── V10 Medium — gelyktydig, skoon heelgetalle ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los gelyktydig op: y = x − 2 en y = x² − 5x + 3.',
      answer: 'x = 1, y = −1  of  x = 5, y = 3',
      checkMode: 'auto',
      correctAnswers: ['x=1,y=-1 or x=5,y=3', 'x=5,y=3 of x=1,y=-1', '(1,-1) en (5,3)'],
      explanation: 'x−2=x²−5x+3 → x²−6x+5=0 → (x−1)(x−5)=0 → x=1 of x=5.\nWanneer x=1: y=−1. Wanneer x=5: y=3.\nKontroleer: 1²−5(1)+3=−1 ✓ en 5²−5(5)+3=3 ✓',
    },

    // ── V11 Hard — gelyktydig, diskriminant-redenasie ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vir watter waarde(s) van m sal die lyn y = mx + 4 die parabool y = x² + 2x + 7 by twee afsonderlike punte sny?',
      answer: 'm < 2 − 2√3 of m > 2 + 2√3',
      checkMode: 'self',
    },

    // ── V12 Maklik — wortelvorm-vergelyking ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: √(x + 4) = x − 2.',
      answer: 'x = 5',
      checkMode: 'auto',
      correctAnswer: 'x=5',
      correctAnswers: ['x=5', 'x = 5', '5'],
      explanation: 'Kwadreer: x+4=x²−4x+4 → x²−5x=0 → x=0 of x=5.\nKontroleer x=0: √4=2, maar 0−2=−2, verwerp.\nKontroleer x=5: √9=3, en 5−2=3 ✓ geldig.\nOplossing: x=5.',
    },

    // ── V13 Medium — wortelvorm-vergelyking ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: √(3x + 7) = x + 1.',
      answer: 'x = 3',
      checkMode: 'auto',
      correctAnswer: 'x=3',
      correctAnswers: ['x=3', 'x = 3', '3'],
      explanation: 'Kwadreer: 3x+7=x²+2x+1 → x²−x−6=0 → (x−3)(x+2)=0 → x=3 of x=−2.\nKontroleer x=3: √16=4, en 3+1=4 ✓ geldig.\nKontroleer x=−2: √1=1, maar −2+1=−1, verwerp.\nOplossing: x=3.',
    },

    // ── V14 Hard — wortelvorm-vergelyking, konseptueel ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho los √(2x − 3) = −5 op en sê daar is geen oplossing nie. Is hy korrek? Verduidelik.',
      answer: 'Ja — die vierkantswortelteken beteken altyd die nie-negatiewe wortel, dus kan √(2x − 3) nooit gelyk wees aan ʼn negatiewe getal soos −5 nie. Die vergelyking het geen oplossing nie, en geen algebra is nodig om dit te sien nie.',
      checkMode: 'self',
    },

    // ── V15 Maklik — eksponensiële vergelyking ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: 2^(3x) = 64.',
      answer: 'x = 2',
      checkMode: 'auto',
      correctAnswer: 'x=2',
      correctAnswers: ['x=2', 'x = 2', '2'],
      explanation: '64=2⁶. Dus 3x=6 → x=2 ✓',
    },

    // ── V16 Medium — eksponensiële vergelyking ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: 25^(x + 1) = 125^x.',
      answer: 'x = 2',
      checkMode: 'auto',
      correctAnswer: 'x=2',
      correctAnswers: ['x=2', 'x = 2', '2'],
      explanation: '25=5², 125=5³. Dus 5^(2x+2)=5^(3x) → 2x+2=3x → x=2 ✓',
    },

    // ── V17 Hard — eksponensiële vergelyking, k-metode ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: 5^(2x) − 30 · 5^x + 125 = 0.',
      answer: 'x = 1 of x = 2',
      checkMode: 'auto',
      correctAnswers: ['x=1 or x=2', 'x=2 of x=1'],
      explanation: 'Laat k=5^x: k²−30k+125=0. Δ=900−500=400, √400=20. k=(30±20)/2=25 of 5.\n5^x=25=5² → x=2. 5^x=5 → x=1.\nOplossing: x=1 of x=2 ✓',
    },

    // ── V18 Maklik — rasionale breukvergelyking ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: 6/(x − 1) = 3/(x + 2).',
      answer: 'x = −5',
      checkMode: 'auto',
      correctAnswer: 'x=-5',
      correctAnswers: ['x=-5', 'x = -5', '-5'],
      explanation: 'Beperkings: x≠1, x≠−2.\nKruisvermenigvuldig: 6(x+2)=3(x−1) → 6x+12=3x−3 → 3x=−15 → x=−5.\nNie uitgesluit nie — geldig. x=−5 ✓',
    },

    // ── V19 Medium — rasionale breukvergelyking, kwadraties ──────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: x − 12/x = 1.',
      answer: 'x = 4 of x = −3',
      checkMode: 'auto',
      correctAnswers: ['x=4 or x=-3', 'x=-3 of x=4', '4 of -3', '-3 of 4'],
      explanation: 'Beperking: x≠0.\nVermenigvuldig met x: x²−12=x → x²−x−12=0 → (x−4)(x+3)=0 → x=4 of x=−3.\nGeen is uitgesluit nie. Oplossing: x=4 of x=−3 ✓',
    },

    // ── V20 Hard — rasionale breukvergelyking, beperkingsredenasie ───────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: (5x)/(x − 3) = 2 + 15/(x − 3), met vermelding van enige beperkings.',
      answer: 'Beperking: x ≠ 3.\nVermenigvuldig met (x−3): 5x = 2(x−3) + 15 → 5x = 2x − 6 + 15 → 5x = 2x + 9 → 3x = 9 → x = 3.\nAangesien x = 3 uitgesluit word (dit maak die noemer nul), is daar geen oplossing nie.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het algebra, vergelykings en ongelykhede op Graad 12-vlak bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk deur die gids weer.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok A (0-2):   Aard van wortels
    // Blok B (3-4):   Kwadratiese vergelykings oplos (formule / volledigmaking)
    // Blok C (5-7):   Kwadratiese ongelykhede
    // Blok D (8-10):  Gelyktydige lineêr-kwadratiese vergelykings
    // Blok E (11-13): Wortelvorm-vergelykings
    // Blok F (14-16): Eksponensiële vergelykings
    // Blok G (17-19): Algebraïese breukvergelykings
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Aard van wortels
        { difficulty: 'Easy', question: 'Bepaal die aard van die wortels van x² − 10x + 25 = 0 sonder om op te los.', answer: 'Reële, gelyke, rasionale wortels', checkMode: 'auto', correctAnswer: 'reeel, gelyk, rasionaal', correctAnswers: ['reeel, gelyk, rasionaal', 'reëel, gelyk, rasionaal', 'gelyk, reëel, rasionaal'], explanation: 'a=1, b=−10, c=25. Δ=100−100=0.\nReële, gelyke, rasionale wortels ✓' },
        { difficulty: 'Medium', question: 'Bepaal die aard van die wortels van x² + 2x − 4 = 0 sonder om op te los.', answer: 'Reële, ongelyke, irrasionale wortels', checkMode: 'auto', correctAnswer: 'reeel, ongelyk, irrasionaal', correctAnswers: ['reeel, ongelyk, irrasionaal', 'reëel, ongelyk, irrasionaal', 'ongelyk, reëel, irrasionaal'], explanation: 'a=1, b=2, c=−4. Δ=4+16=20, nie ʼn volkome vierkant nie.\nReële, ongelyke, irrasionale wortels ✓' },
        { difficulty: 'Hard', question: 'Vir watter waarde(s) van p sal 2x² + px + 8 = 0 reële, gelyke wortels hê?', answer: 'p = 8 of p = −8', checkMode: 'auto', correctAnswers: ['p=8 or p=-8', 'p=-8 of p=8', 'p=±8', 'p = ±8', '8 of -8', '-8 of 8'], explanation: 'Δ=p²−4(2)(8)=p²−64. Vir gelyke wortels, Δ=0: p²=64 → p=8 of p=−8 ✓' },

        // Blok B — Kwadratiese vergelykings oplos
        { difficulty: 'Easy', question: 'Los op vir x deur faktorisering: 4x² + 4x − 3 = 0.', answer: 'x = ½ of x = −3/2', checkMode: 'auto', correctAnswers: ['x=1/2 or x=-3/2', 'x=-3/2 of x=1/2', 'x=0.5 of x=-1.5', 'x=-1.5 of x=0.5'], explanation: '4x²+6x−2x−3=0 → 2x(2x+3)−1(2x+3)=0 → (2x−1)(2x+3)=0.\nx=½ of x=−3/2 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x met die kwadratiese formule, en laat jou antwoord in eenvoudigste wortelvorm: x² + 4x − 3 = 0.', answer: 'x = −2 + √7 of x = −2 − √7', checkMode: 'self' },

        // Blok C — Kwadratiese ongelykhede
        { difficulty: 'Easy', question: 'Los op vir x: x² − 16 < 0.', answer: '−4 < x < 4', checkMode: 'auto', correctAnswers: ['-4<x<4', '-4 < x < 4', '(-4,4)'], explanation: 'x²−16=0 → x=±4. Open opwaarts, dus <0 tussen die wortels.\nOplossing: −4 < x < 4 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: x² + 2x − 15 ≥ 0.', answer: 'x ≤ −5 of x ≥ 3', checkMode: 'auto', correctAnswers: ['x≤-5 or x≥3', 'x <= -5 of x >= 3', 'x≥3 of x≤-5'], explanation: '(x+5)(x−3)=0 → x=−5 of x=3. Open opwaarts, dus ≥0 buite die wortels.\nOplossing: x≤−5 of x≥3 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: −2x² + 2x + 4 > 0.', answer: '−1 < x < 2', checkMode: 'auto', correctAnswers: ['-1<x<2', '-1 < x < 2', '(-1,2)'], explanation: 'Deel deur −2 (draai om): x²−x−2<0 → (x−2)(x+1)<0 → −1<x<2 ✓' },

        // Blok D — Gelyktydige lineêr-kwadratiese vergelykings
        { difficulty: 'Medium', question: 'Los gelyktydig op: y = 2x + 1 en y = x² + 2x − 3.', answer: 'x = 2, y = 5  of  x = −2, y = −3', checkMode: 'auto', correctAnswers: ['x=2,y=5 or x=-2,y=-3', 'x=-2,y=-3 of x=2,y=5', '(2,5) en (-2,-3)'], explanation: '2x+1=x²+2x−3 → x²−4=0 → x=±2.\nWanneer x=2: y=5. Wanneer x=−2: y=−3.\nKontroleer: 2²+2(2)−3=5 ✓ en (−2)²+2(−2)−3=−3 ✓' },
        { difficulty: 'Medium', question: 'Los gelyktydig op: y = x + 1 en y = x² − 3x + 1.', answer: 'x = 0, y = 1  of  x = 4, y = 5', checkMode: 'auto', correctAnswers: ['x=0,y=1 or x=4,y=5', 'x=4,y=5 of x=0,y=1', '(0,1) en (4,5)'], explanation: 'x+1=x²−3x+1 → x²−4x=0 → x=0 of x=4.\nWanneer x=0: y=1. Wanneer x=4: y=5.\nKontroleer: 0²−0+1=1 ✓ en 4²−3(4)+1=5 ✓' },
        { difficulty: 'Hard', question: 'Toon algebraïes dat die lyn y = x − 4 nie die parabool y = x² − 3x + 2 sny nie.', answer: 'x−4=x²−3x+2 → x²−4x+6=0. Δ=16−24=−8<0.\nAangesien Δ<0, is daar geen reële oplossings nie, dus sny die lyn nie die parabool nie.', checkMode: 'self' },

        // Blok E — Wortelvorm-vergelykings
        { difficulty: 'Easy', question: 'Los op vir x: √(x + 6) = x.', answer: 'x = 3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Kwadreer: x+6=x² → x²−x−6=0 → (x−3)(x+2)=0 → x=3 of x=−2.\nKontroleer x=3: √9=3=3 ✓ geldig.\nKontroleer x=−2: √4=2≠−2, verwerp.\nOplossing: x=3.' },
        { difficulty: 'Medium', question: 'Los op vir x: √(4x + 5) = x + 2.', answer: 'x = 1 of x = −1', checkMode: 'auto', correctAnswers: ['x=1 or x=-1', 'x=-1 of x=1', '1 of -1', '-1 of 1'], explanation: 'Kwadreer: 4x+5=x²+4x+4 → x²=1 → x=±1.\nKontroleer x=1: √9=3, en 1+2=3 ✓ geldig.\nKontroleer x=−1: √1=1, en −1+2=1 ✓ geldig.\nOplossing: x=1 of x=−1.' },
        { difficulty: 'Hard', question: 'Los op vir x: 2 + √(x − 3) = x − 1.', answer: 'x = 3 of x = 4', checkMode: 'auto', correctAnswers: ['x=3 or x=4', 'x=4 of x=3', '3 of 4', '4 of 3'], explanation: 'Isoleer: √(x−3)=x−3. Kwadreer: x−3=(x−3)². Laat w=x−3: w=w² → w(w−1)=0 → w=0 of w=1 → x=3 of x=4.\nKontroleer x=3: 2+√0=2, en 3−1=2 ✓ geldig.\nKontroleer x=4: 2+√1=3, en 4−1=3 ✓ geldig.\nOplossing: x=3 of x=4.' },

        // Blok F — Eksponensiële vergelykings
        { difficulty: 'Easy', question: 'Los op vir x: 4^x = 256.', answer: 'x = 4', checkMode: 'auto', correctAnswer: 'x=4', correctAnswers: ['x=4', 'x = 4', '4'], explanation: '256=4⁴. Dus x=4 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: 8^(x − 1) = 16^x.', answer: 'x = −3', checkMode: 'auto', correctAnswer: 'x=-3', correctAnswers: ['x=-3', 'x = -3', '-3'], explanation: '8=2³, 16=2⁴. Dus 2^(3x−3)=2^(4x) → 3x−3=4x → x=−3 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 3^(2x) − 12 · 3^x + 27 = 0.', answer: 'x = 1 of x = 2', checkMode: 'auto', correctAnswers: ['x=1 or x=2', 'x=2 of x=1'], explanation: 'Laat k=3^x: k²−12k+27=0 → (k−3)(k−9)=0 → k=3 of k=9.\n3^x=3 → x=1. 3^x=9=3² → x=2.\nOplossing: x=1 of x=2 ✓' },

        // Blok G — Algebraïese breukvergelykings
        { difficulty: 'Easy', question: 'Los op vir x: 8/(x + 3) = 4/(x − 1).', answer: 'x = 5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Beperkings: x≠−3, x≠1.\nKruisvermenigvuldig: 8(x−1)=4(x+3) → 8x−8=4x+12 → 4x=20 → x=5 ✓' },
        { difficulty: 'Medium', question: 'Los op vir x: x − 12/x = 1.', answer: 'x = 4 of x = −3', checkMode: 'auto', correctAnswers: ['x=4 or x=-3', 'x=-3 of x=4', '4 of -3', '-3 of 4'], explanation: 'Beperking: x≠0.\nVermenigvuldig met x: x²−12=x → x²−x−12=0 → (x−4)(x+3)=0 → x=4 of x=−3 ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: (2x + 1)/(x − 1) = 3 − 2/(x − 1), met vermelding van enige beperkings.', answer: 'x = 6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: 'Beperking: x≠1.\nVermenigvuldig met (x−1): 2x+1=3(x−1)−2 → 2x+1=3x−3−2 → 2x+1=3x−5 → −x=−6 → x=6.\nNie uitgesluit nie — geldig. x=6 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die aard van wortels, kwadratiese vergelykings en ongelykhede, gelyktydige stelsels, wortelvorm-vergelykings, eksponensiële vergelykings, en algebraïese breukvergelykings bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur, veral oor wortelvorm- en rasionale breukvergelykings, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
