import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────────
// quotient term    → blue   (#2563eb)
// subtraction step → orange (#ea580c)
// remainder        → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies — Polinome',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: POLYNOMIALS AND LONG DIVISION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'polynomials-long-division',
      title: 'Hersiening — Polinome en Langdeling',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Polinoom van graad n het die vorm a<sub>n</sub>x<sup>n</sup>+a<sub>n−1</sub>x<sup>n−1</sup>+…+a<sub>1</sub>x+a<sub>0</sub>, waar die koëffisiënte reële getalle is en n ʼn nie-negatiewe heelgetal is. Ons hersien <strong>polinoom-langdeling</strong> — die deel van ʼn polinoom van hoër graad deur ʼn polinoom van laer graad om ʼn <strong>kwosiënt</strong> en <strong>res</strong> te vind, soortgelyk aan langdeling met hele getalle.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwosiëntterm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aftrekkingstap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('res')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kwosiënt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die polinoomresultaat van die deling. Die graad daarvan is gelyk aan die graad van die deeltal minus die graad van die deler.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Res</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wat oorbly na deling. As die res nul is, is die deler ʼn faktor van die deeltal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Delingsalgoritme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">p(x) = d(x)·k(x) + r(x), waar p die deeltal is, d die deler, k die kwosiënt, en r die res.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe vir polinoom-langdeling</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Deel')} — Deel die voorste term van die huidige deeltal deur die voorste term van die deler. Dit gee die volgende term van die ${bl('kwosiënt')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig & Trek af')} — Vermenigvuldig die kwosiëntterm met die hele deler, en ${or('trek')} dan af van die huidige deeltal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Herhaal</strong> — Herhaal totdat die graad van wat oorbly kleiner is as die graad van die deler. Wat oorbly is die ${gr('res')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk: sluit terme met nul-koëffisiënte in</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn mag van x in die polinoom ontbreek (byvoorbeeld x<sup>2</sup> is afwesig in x<sup>3</sup>−3x+5), skryf dit as <strong>0x<sup>2</sup></strong> in jou werk sodat die kolomme korrek belyn bly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Deel x³+2x²−5x−6 deur (x−2) deur polinoom-langdeling te gebruik.',
          answer: `Kwosiënt: ${bl('x²+4x+3')},  ${gr('Res: 0')}`,
          steps: [
            `${bl('Deel:')} x<sup>3</sup> ÷ x = ${bl('x²')}. Skryf ${bl('x²')} as die eerste term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('x²')}(x−2) = x<sup>3</sup>−2x<sup>2</sup>. ${or('Trek af:')} (x<sup>3</sup>+2x<sup>2</sup>−5x−6) − (x<sup>3</sup>−2x<sup>2</sup>) = 4x<sup>2</sup>−5x−6.`,
            `${bl('Deel:')} 4x<sup>2</sup> ÷ x = ${bl('4x')}. Skryf ${bl('4x')} as die volgende term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('4x')}(x−2) = 4x<sup>2</sup>−8x. ${or('Trek af:')} (4x<sup>2</sup>−5x−6) − (4x<sup>2</sup>−8x) = 3x−6.`,
            `${bl('Deel:')} 3x ÷ x = ${bl('3')}. Skryf ${bl('3')} as die volgende term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('3')}(x−2) = 3x−6. ${or('Trek af:')} (3x−6) − (3x−6) = ${gr('0')}.`,
            `<strong>Resultaat:</strong> Kwosiënt = ${bl('x²+4x+3')}, ${gr('Res = 0')}. Dus x<sup>3</sup>+2x<sup>2</sup>−5x−6 = (x−2)(x<sup>2</sup>+4x+3).`,
          ],
        },
        {
          question: 'Sipho deel x³−3x+5 deur (x+1). Vind die kwosiënt en die res.',
          answer: `Kwosiënt: ${bl('x²−x−2')},  ${gr('Res: 7')}`,
          steps: [
            `<strong>Let wel:</strong> x<sup>3</sup>−3x+5 het geen x<sup>2</sup>-term nie. Herskryf as x<sup>3</sup>+<strong>0x<sup>2</sup></strong>−3x+5 sodat die kolomme belyn bly.`,
            `${bl('Deel:')} x<sup>3</sup> ÷ x = ${bl('x²')}. Skryf ${bl('x²')} as die eerste term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('x²')}(x+1) = x<sup>3</sup>+x<sup>2</sup>. ${or('Trek af:')} (x<sup>3</sup>+0x<sup>2</sup>−3x+5) − (x<sup>3</sup>+x<sup>2</sup>) = −x<sup>2</sup>−3x+5.`,
            `${bl('Deel:')} −x<sup>2</sup> ÷ x = ${bl('−x')}. Skryf ${bl('−x')} as die volgende term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('−x')}(x+1) = −x<sup>2</sup>−x. ${or('Trek af:')} (−x<sup>2</sup>−3x+5) − (−x<sup>2</sup>−x) = −2x+5.`,
            `${bl('Deel:')} −2x ÷ x = ${bl('−2')}. Skryf ${bl('−2')} as die volgende term van die kwosiënt.`,
            `${or('Vermenigvuldig:')} ${bl('−2')}(x+1) = −2x−2. ${or('Trek af:')} (−2x+5) − (−2x−2) = ${gr('7')}.`,
            `<strong>Resultaat:</strong> Kwosiënt = ${bl('x²−x−2')}, ${gr('Res = 7')}. Dus x<sup>3</sup>−3x+5 = (x+1)(x<sup>2</sup>−x−2) + 7.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Deel x² + 8x + 15 deur (x + 3) deur polinoom-langdeling te gebruik. Gee die kwosiënt en die res.',
          answer: 'Kwosiënt: x + 5, Res: 0\n\nStappe:\nx²÷x = x. Vermenigvuldig: x(x+3)=x²+3x. Trek af: 5x+15.\n5x÷x = 5. Vermenigvuldig: 5(x+3)=5x+15. Trek af: 0.\nKwosiënt: x+5, Res: 0 ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken elk van die volgende deur polinoom-langdeling te gebruik.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (x³ + 5x² + 8x + 4) ÷ (x + 1) =',
              correctAnswer: 'x²+4x+4',
              correctAnswers: ['x²+4x+4', 'x^2+4x+4'],
              explanation: 'Deel: x³÷x=x². Vermenigvuldig: x²(x+1)=x³+x². Trek af: 4x²+8x+4.\nDeel: 4x²÷x=4x. Vermenigvuldig: 4x(x+1)=4x²+4x. Trek af: 4x+4.\nDeel: 4x÷x=4. Vermenigvuldig: 4(x+1)=4x+4. Trek af: 0.\nKwosiënt: x²+4x+4, Res: 0 ✓',
            },
            {
              label: 'b) (x³ − 2x² − 5x + 6) ÷ (x − 3) =',
              correctAnswer: 'x²+x-2',
              correctAnswers: ['x²+x-2', 'x^2+x-2'],
              explanation: 'Deel: x³÷x=x². Vermenigvuldig: x²(x-3)=x³-3x². Trek af: x²-5x+6.\nDeel: x²÷x=x. Vermenigvuldig: x(x-3)=x²-3x. Trek af: -2x+6.\nDeel: -2x÷x=-2. Vermenigvuldig: -2(x-3)=-2x+6. Trek af: 0.\nKwosiënt: x²+x-2, Res: 0 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Gegee p(x) = 2x³ + x² − 13x + 6:\n\na) Deel p(x) deur (x − 2) en gee die kwosiënt.\nb) Faktoriseer p(x) dus volledig.\nc) Los p(x) = 0 op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kwosiënt wanneer gedeel deur (x − 2)',
              correctAnswer: '2x²+5x-3',
              correctAnswers: ['2x²+5x-3', '2x^2+5x-3'],
              explanation: 'Deel: 2x³÷x=2x². Vermenigvuldig: 2x²(x-2)=2x³-4x². Trek af: 5x²-13x+6.\nDeel: 5x²÷x=5x. Vermenigvuldig: 5x(x-2)=5x²-10x. Trek af: -3x+6.\nDeel: -3x÷x=-3. Vermenigvuldig: -3(x-2)=-3x+6. Trek af: 0.\nKwosiënt: 2x²+5x-3 ✓',
            },
            {
              label: 'b) Volledige faktorisering van p(x)',
              correctAnswer: '(x-2)(2x-1)(x+3)',
              correctAnswers: ['(x-2)(2x-1)(x+3)', '(x-2)(x+3)(2x-1)'],
              explanation: 'Faktoriseer die kwosiënt: 2x²+5x-3 = (2x-1)(x+3).\nVolledige faktorisering: p(x) = (x-2)(2x-1)(x+3) ✓',
            },
            {
              label: 'c) Oplossings van p(x) = 0',
              correctAnswer: 'x=2, x=1/2, x=-3',
              correctAnswers: ['x=2, x=1/2, x=-3', 'x=2 x=1/2 x=-3', '2; 1/2; -3'],
              explanation: 'Stel elke faktor gelyk aan nul:\nx−2=0 → x=2\n2x−1=0 → x=½\nx+3=0 → x=−3 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn kubieke polinoom deur ʼn lineêre faktor te deel deur polinoom-langdeling te gebruik, met kleurgekodeerde kwosiëntterme en aftrekkingstappe" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE REMAINDER AND FACTOR THEOREMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'remainder-factor-theorems',
      title: 'Die Resttelling en Faktorstelling',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>Resttelling</strong> sê dat wanneer ʼn polinoom p(x) deur (x−a) gedeel word, die res gelyk is aan <strong>p(a)</strong> — dit beteken ons kan die res vind sonder om die volledige langdeling uit te voer. Die <strong>Faktorstelling</strong> (ʼn direkte gevolg) sê dat (x−a) ʼn faktor van p(x) is <strong>as en slegs as p(a)=0</strong>. Ons gebruik die Faktorstelling om faktore van polinome te identifiseer deur waardes van a te toets wat p(a)=0 maak.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('toetswaarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vervangingsresultaat')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('faktorgevolgtrekking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee stellings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Resttelling</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer p(x) deur (x−a) gedeel word, is die res = ${bl('p(a)')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Let wel: vir (x+a), vervang x = ${bl('−a')} aangesien x+a = x−(−a).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Faktorstelling</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">(x−a) is ʼn faktor van p(x) ${gr('as en slegs as p(a)=0')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Dit beteken nul res ↔ presiese faktor.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Toetsstrategie — watter waardes om te probeer?</p>` +
        `<p style="margin:0;color:#78350f;">Vir ʼn polinoom met heelgetal-koëffisiënte, probeer faktore van die konstante term (die getal sonder x). Byvoorbeeld, as die konstante term 6 is, probeer x = ±1, ±2, ±3, ±6 totdat jy een vind wat p(a)=0 maak.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-top:12px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wat CAPS werklik hier eksamineer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die <strong>Faktorstelling</strong> — die gebruik van p(a)=0 om faktore te identifiseer — is die eksamineerbare vaardigheid, aangesien dit die instrument is wat jy dwarsdeur derdegraadse faktorisering sal gebruik. Die Resttelling word hier hoofsaaklik ingevoer om te verduidelik <em>waarom</em> die Faktorstelling werk; jy sal nie gevra word om ʼn geïsoleerde, nie-nul res as ʼn selfstandige eksamenvraag te bereken nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die Resttelling om die res te vind wanneer p(x)=x³−4x²+x+6 deur (x−3) gedeel word.',
          answer: `${gr('Res = 0')}. Aangesien p(3)=0, is (x−3) ook ʼn faktor van p(x) volgens die Faktorstelling.`,
          steps: [
            `Die Resttelling sê: vervang x = ${bl('3')} in p(x).`,
            `${or('p(3)')} = (3)<sup>3</sup> − 4(3)<sup>2</sup> + (3) + 6 = ${or('27 − 36 + 3 + 6')} = ${or('0')}.`,
            `${gr('Die res is 0.')} Aangesien die res nul is, sê die Faktorstelling ook dat ${gr('(x−3) ʼn faktor van p(x) is')}.`,
          ],
        },
        {
          question: 'Toon dat (x+2) ʼn faktor van p(x)=x³+3x²−4x−12 is.',
          answer: `${gr('(x+2) is ʼn faktor omdat p(−2)=0.')}`,
          steps: [
            `Vir die faktor (x+2), vervang x = ${bl('−2')} (aangesien x+2 = x−(−2)).`,
            `${or('p(−2)')} = (−2)<sup>3</sup> + 3(−2)<sup>2</sup> − 4(−2) − 12 = ${or('−8 + 12 + 8 − 12')} = ${or('0')}.`,
            `Aangesien ${or('p(−2) = 0')}, is ${gr('(x+2) ʼn faktor van p(x)')} volgens die Faktorstelling. ✓`,
          ],
        },
        {
          question: 'Lerato vind ʼn waarde van k sodat (x−2) ʼn faktor van p(x)=x³−kx²+x+2 is. Vind k.',
          answer: `${gr('k = 3')}`,
          steps: [
            `As (x−2) ʼn faktor is, dan is p(${bl('2')}) = 0 volgens die Faktorstelling.`,
            `${or('p(2)')} = (2)<sup>3</sup> − k(2)<sup>2</sup> + (2) + 2 = ${or('8 − 4k + 2 + 2')} = ${or('12 − 4k')}.`,
            `Stel gelyk aan nul: ${or('12 − 4k')} = 0 → 4k = 12 → ${gr('k = 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Bepaal of (x−1) ʼn faktor van p(x)=x³+x²−2x+4 is deur p(1) te bereken. Gee jou gevolgtrekking.',
          answer: 'Nee, (x−1) is nie ʼn faktor nie.',
          checkMode: 'auto',
          correctAnswer: 'Nee',
          correctAnswers: ['Nee', 'nee', 'Nie \'n faktor nie', 'nie \'n faktor nie'],
          explanation: 'Vervang x=1: p(1)=1+1-2+4=4.\nAangesien p(1)=4≠0, is (x−1) volgens die Faktorstelling NIE ʼn faktor van p(x) nie ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Toon dat (x−2) ʼn faktor van p(x)=x³−4x²+x+6 is deur p(2) te bereken.',
              correctAnswer: '0',
              explanation: 'p(2)=8-16+2+6=0.\nAangesien p(2)=0, is (x-2) ʼn faktor van p(x) volgens die Faktorstelling ✓',
            },
            {
              label: 'b) Vind die waarde van k as (x−1) ʼn faktor van p(x)=2x³−kx²+3x−4 is.',
              correctAnswer: '1',
              explanation: 'As (x-1) ʼn faktor is, dan is p(1)=0.\np(1)=2-k+3-4=1-k=0 → k=1 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'p(x) = x³+ax²+bx+c. Gegee dat p(0)=−6, p(1)=0, en p(−2)=0:\n\na) Vind die waardes van a, b, en c.\nb) Faktoriseer p(x) volledig.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Waardes van a, b, en c',
              correctAnswer: 'a=4, b=1, c=-6',
              correctAnswers: ['a=4, b=1, c=-6', 'a=4 b=1 c=-6'],
              explanation: 'p(0)=c=-6.\np(1)=1+a+b-6=0 → a+b=5.\np(-2)=-8+4a-2b-6=0 → 4a-2b=14 → 2a-b=7.\nTel die twee vergelykings op: 3a=12 → a=4, b=1 ✓',
            },
            {
              label: 'b) Volledige faktorisering van p(x)=x³+4x²+x−6',
              correctAnswer: '(x-1)(x+2)(x+3)',
              correctAnswers: ['(x-1)(x+2)(x+3)', '(x-1)(x+3)(x+2)'],
              explanation: 'Aangesien p(1)=0, is (x-1) ʼn faktor. Aangesien p(-2)=0, is (x+2) ʼn faktor.\nDeel x³+4x²+x-6 deur (x-1): kwosiënt = x²+5x+6 = (x+2)(x+3).\nVolledige faktorisering: (x-1)(x+2)(x+3) ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die Resttheorema en Faktorstelling verduidelik met kleurgekodeerde toetswaarde-vervangings en faktorgevolgtrekkings vir kubieke polinome" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING THIRD DEGREE POLYNOMIALS FULLY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-cubic-polynomials',
      title: 'Derdegraadse Polinome Volledig Faktoriseer',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn <strong>derdegraadse polinoom</strong> (graad 3) volledig te faktoriseer, volg ons drie stappe: gebruik eers die <strong>Faktorstelling</strong> om een lineêre faktor (x−a) te vind deur waardes te toets totdat p(a)=0, <strong>deel</strong> dan die polinoom deur daardie faktor (deur langdeling of inspeksie) om die kwadratiese kwosiënt te kry, en <strong>faktoriseer</strong> laastens die kwadratiese uitdrukking (indien moontlik).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('getoetste waarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('lineêre faktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadratiese kwosiënt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Driestapmetode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind ʼn faktor</strong> — Toets waardes x = ${bl('±1, ±2, ±3, …')} (faktore van die konstante term) totdat p(a)=0. Dan is (x−a) ʼn ${or('lineêre faktor')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Deel</strong> — Deel die derdegraadse polinoom deur die ${or('lineêre faktor')} deur langdeling te gebruik om die ${gr('kwadratiese kwosiënt')} te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Faktoriseer die kwadratiese uitdrukking</strong> — Faktoriseer die ${gr('kwadratiese kwosiënt')} in twee lineêre faktore waar moontlik.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Watter waardes om eerste te toets?</p>` +
        `<p style="margin:0;color:#78350f;">Begin altyd met x = 1 en x = −1 aangesien hulle die vinnigste is om te vervang. Probeer dan x = 2, x = −2, x = 3, x = −3, ensovoorts. Probeer eers faktore van die konstante term — die antwoord sal altyd daaronder wees vir ʼn polinoom met heelgetal-koëffisiënte.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer p(x)=x³+2x²−5x−6 volledig.',
          answer: `p(x) = ${or('(x−2)')}${gr('(x+1)(x+3)')}`,
          steps: [
            `<strong>Stap 1 — Vind ʼn faktor:</strong> Toets x = ${bl('1')}: p(1) = 1+2−5−6 = −8 (nie nul nie). Toets x = ${bl('2')}: p(2) = 8+8−10−6 = 0 ✓. Dus is ${or('(x−2) ʼn faktor')}.`,
            `<strong>Stap 2 — Deel:</strong> (x<sup>3</sup>+2x<sup>2</sup>−5x−6) ÷ (x−2).<br>x<sup>3</sup>÷x=x², x²(x−2)=x³−2x², trek af: 4x²−5x−6.<br>4x²÷x=4x, 4x(x−2)=4x²−8x, trek af: 3x−6.<br>3x÷x=3, 3(x−2)=3x−6, trek af: 0.<br>${gr('Kwosiënt: x²+4x+3')}.`,
            `<strong>Stap 3 — Faktoriseer die kwadratiese uitdrukking:</strong> ${gr('x²+4x+3')} = ${gr('(x+1)(x+3)')}.`,
            `<strong>Volledige faktorisering:</strong> p(x) = ${or('(x−2)')}${gr('(x+1)(x+3)')} ✓`,
          ],
        },
        {
          question: 'Faktoriseer p(x)=x³−3x²−4x+12 volledig.',
          answer: `p(x) = ${or('(x−2)')}${gr('(x−3)(x+2)')}`,
          steps: [
            `<strong>Stap 1 — Vind ʼn faktor:</strong> Toets x = ${bl('2')}: p(2) = 8−12−8+12 = 0 ✓. Dus is ${or('(x−2) ʼn faktor')}.`,
            `<strong>Stap 2 — Deel:</strong> (x<sup>3</sup>−3x<sup>2</sup>−4x+12) ÷ (x−2).<br>x<sup>3</sup>÷x=x², x²(x−2)=x³−2x², trek af: −x²−4x+12.<br>−x²÷x=−x, −x(x−2)=−x²+2x, trek af: −6x+12.<br>−6x÷x=−6, −6(x−2)=−6x+12, trek af: 0.<br>${gr('Kwosiënt: x²−x−6')}.`,
            `<strong>Stap 3 — Faktoriseer die kwadratiese uitdrukking:</strong> ${gr('x²−x−6')} = ${gr('(x−3)(x+2)')}.`,
            `<strong>Volledige faktorisering:</strong> p(x) = ${or('(x−2)')}${gr('(x−3)(x+2)')} ✓`,
          ],
        },
        {
          question: 'Thabo faktoriseer p(x)=2x³+3x²−11x−6. Vind die volledige faktorisering.',
          answer: `p(x) = ${or('(x−2)')}${gr('(2x+1)(x+3)')}`,
          steps: [
            `<strong>Stap 1 — Vind ʼn faktor:</strong> Toets x = ${bl('2')}: p(2) = 2(8)+3(4)−11(2)−6 = 16+12−22−6 = 0 ✓. Dus is ${or('(x−2) ʼn faktor')}.`,
            `<strong>Stap 2 — Deel:</strong> (2x<sup>3</sup>+3x<sup>2</sup>−11x−6) ÷ (x−2).<br>2x<sup>3</sup>÷x=2x², 2x²(x−2)=2x³−4x², trek af: 7x²−11x−6.<br>7x²÷x=7x, 7x(x−2)=7x²−14x, trek af: 3x−6.<br>3x÷x=3, 3(x−2)=3x−6, trek af: 0.<br>${gr('Kwosiënt: 2x²+7x+3')}.`,
            `<strong>Stap 3 — Faktoriseer die kwadratiese uitdrukking:</strong> ${gr('2x²+7x+3')} = ${gr('(2x+1)(x+3)')}.`,
            `<strong>Volledige faktorisering:</strong> p(x) = ${or('(x−2)')}${gr('(2x+1)(x+3)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Faktoriseer p(x) = x³ − x² − 4x + 4 volledig.',
          answer: '(x-1)(x-2)(x+2)',
          checkMode: 'auto',
          correctAnswer: '(x-1)(x-2)(x+2)',
          correctAnswers: ['(x-1)(x-2)(x+2)', '(x-1)(x+2)(x-2)', '(x-2)(x+2)(x-1)'],
          explanation: 'Toets x=1: 1-1-4+4=0 ✓. Dus is (x-1) ʼn faktor.\nDeel: x³-x²-4x+4 ÷ (x-1).\nx³÷x=x², x²(x-1)=x³-x², trek af: -4x+4.\n-4x÷x=-4, -4(x-1)=-4x+4, trek af: 0.\nKwosiënt: x²-4=(x-2)(x+2).\nVolledige faktorisering: (x-1)(x-2)(x+2) ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Faktoriseer elk van die volgende polinome volledig.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) p(x) = x³ + x² − 10x + 8',
              correctAnswer: '(x-1)(x-2)(x+4)',
              correctAnswers: ['(x-1)(x-2)(x+4)', '(x-1)(x+4)(x-2)', '(x-2)(x+4)(x-1)'],
              explanation: 'Toets x=1: 1+1-10+8=0 ✓. (x-1) is ʼn faktor.\nDeel: kwosiënt = x²+2x-8 = (x-2)(x+4).\nVolledig: (x-1)(x-2)(x+4) ✓',
            },
            {
              label: 'b) p(x) = 2x³ − 9x² + 7x + 6',
              correctAnswer: '(x-3)(2x+1)(x-2)',
              correctAnswers: ['(x-3)(2x+1)(x-2)', '(x-3)(x-2)(2x+1)', '(x-2)(x-3)(2x+1)'],
              explanation: 'Toets x=3: 2(27)-9(9)+7(3)+6=54-81+21+6=0 ✓. (x-3) is ʼn faktor.\nDeel: 2x³-9x²+7x+6 ÷ (x-3).\n2x³÷x=2x², 2x²(x-3)=2x³-6x², trek af: -3x²+7x+6.\n-3x²÷x=-3x, -3x(x-3)=-3x²+9x, trek af: -2x+6.\n-2x÷x=-2, -2(x-3)=-2x+6, trek af: 0.\nKwosiënt: 2x²-3x-2=(2x+1)(x-2).\nVolledig: (x-3)(2x+1)(x-2) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Gegee p(x) = 2x³ − 3x² − 11x + 6:\n\na) Toon dat (x − 3) ʼn faktor van p(x) is.\nb) Faktoriseer p(x) volledig.\nc) Los dus 2x³ − 3x² − 11x + 6 = 0 op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Toon (x − 3) is ʼn faktor',
              correctAnswer: '0',
              explanation: 'p(3)=2(27)-3(9)-11(3)+6=54-27-33+6=0.\nAangesien p(3)=0, is (x-3) ʼn faktor volgens die Faktorstelling ✓',
            },
            {
              label: 'b) Volledige faktorisering van p(x)',
              correctAnswer: '(x-3)(2x-1)(x+2)',
              correctAnswers: ['(x-3)(2x-1)(x+2)', '(x-3)(x+2)(2x-1)', '(x+2)(x-3)(2x-1)'],
              explanation: 'Deel 2x³-3x²-11x+6 deur (x-3).\n2x³÷x=2x², 2x²(x-3)=2x³-6x², trek af: 3x²-11x+6.\n3x²÷x=3x, 3x(x-3)=3x²-9x, trek af: -2x+6.\n-2x÷x=-2, -2(x-3)=-2x+6, trek af: 0.\nKwosiënt: 2x²+3x-2=(2x-1)(x+2).\nVolledig: (x-3)(2x-1)(x+2) ✓',
            },
            {
              label: 'c) Oplossings van p(x) = 0',
              correctAnswer: 'x=3, x=1/2, x=-2',
              correctAnswers: ['x=3, x=1/2, x=-2', 'x=3 x=1/2 x=-2', '3; 1/2; -2'],
              explanation: 'Stel elke faktor gelyk aan nul:\nx-3=0 → x=3\n2x-1=0 → x=½\nx+2=0 → x=-2 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn kubieke polinoom volledig te faktoriseer deur eers ʼn lineêre faktor met die Faktorstelling te vind, en dan die kwadratiese kwosiënt te deel en te faktoriseer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING CUBIC EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-cubic-equations',
      title: 'Derdegraadse Vergelykings Oplos',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn derdegraadse vergelyking p(x)=0 op te los, faktoriseer ons die polinoom <strong>volledig</strong> (deur die Faktorstelling en langdeling soos in Afdeling 3 te gebruik), en pas dan die <strong>nulproduk-eienskap</strong> op elke faktor toe — deur elkeen gelyk aan nul te stel en op te los om al drie wortels te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gevonde wortels')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gefaktoriseerde vorm')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los x³+2x²−5x−6=0 op.',
          answer: `${bl('x=2')}, ${bl('x=−1')}, ${bl('x=−3')}`,
          steps: [
            `Vanaf Afdeling 3 is die volledige faktorisering ${or('(x−2)(x+1)(x+3)')} = 0.`,
            `Pas die nulproduk-eienskap toe — stel elke faktor gelyk aan nul: x−2=0 → ${bl('x=2')}; x+1=0 → ${bl('x=−1')}; x+3=0 → ${bl('x=−3')}.`,
            `Die drie wortels is ${bl('x=2')}, ${bl('x=−1')}, ${bl('x=−3')}.`,
          ],
        },
        {
          question: 'Los 2x³+x²−5x+2=0 op.',
          answer: `${bl('x=1')}, ${bl('x=½')}, ${bl('x=−2')}`,
          steps: [
            `Toets x=${bl('1')}: 2(1)+1−5+2=0 ✓. Dus is (x−1) ʼn faktor.`,
            `Deel 2x³+x²−5x+2 deur (x−1):<br>2x³÷x=2x², 2x²(x−1)=2x³−2x², trek af: 3x²−5x+2.<br>3x²÷x=3x, 3x(x−1)=3x²−3x, trek af: −2x+2.<br>−2x÷x=−2, −2(x−1)=−2x+2, trek af: 0.<br>Kwosiënt: 2x²+3x−2.`,
            `Faktoriseer die kwosiënt: 2x²+3x−2 = (2x−1)(x+2).`,
            `Volledige faktorisering: ${or('(x−1)(2x−1)(x+2)')} = 0.`,
            `Stel elke faktor gelyk aan nul: x−1=0 → ${bl('x=1')}; 2x−1=0 → ${bl('x=½')}; x+2=0 → ${bl('x=−2')}.`,
          ],
        },
        {
          question: 'Lerato los x³−6x²+11x−6=0 op. Vind al drie wortels.',
          answer: `${bl('x=1')}, ${bl('x=2')}, ${bl('x=3')}`,
          steps: [
            `Toets x=${bl('1')}: 1−6+11−6=0 ✓. Dus is (x−1) ʼn faktor.`,
            `Deel x³−6x²+11x−6 deur (x−1):<br>x³÷x=x², x²(x−1)=x³−x², trek af: −5x²+11x−6.<br>−5x²÷x=−5x, −5x(x−1)=−5x²+5x, trek af: 6x−6.<br>6x÷x=6, 6(x−1)=6x−6, trek af: 0.<br>Kwosiënt: x²−5x+6.`,
            `Faktoriseer die kwosiënt: x²−5x+6 = (x−2)(x−3).`,
            `Volledige faktorisering: ${or('(x−1)(x−2)(x−3)')} = 0.`,
            `Stel elke faktor gelyk aan nul: ${bl('x=1')}, ${bl('x=2')}, ${bl('x=3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'Zanele wil x³ − 9x = 0 oplos. Toon twee verskillende maniere om dit op te los — (1) deur die Faktorstelling te gebruik om ʼn wortel te vind deur waardes te toets, en dan te deel; en (2) deur eers ʼn gemeenskaplike faktor uit te haal. Verduidelik dan watter metode vir hierdie spesifieke vergelyking doeltreffender is, en waarom.',
          answer: 'Metode 1 (Faktorstelling + deling): toets x=1: 1−9=−8≠0. Toets x=−1: −1+9=8≠0. Toets x=2: 8−18=−10≠0. Toets x=−2: −8+18=10≠0. Toets x=3: 27−27=0 ✓, dus is (x−3) ʼn faktor.\nDeel x³−9x deur (x−3): x³÷x=x², x²(x−3)=x³−3x², trek af: 3x²−9x. 3x²÷x=3x, 3x(x−3)=3x²−9x, trek af: 0. Kwosiënt: x²+3x=x(x+3).\nDus x³−9x=(x−3)(x)(x+3)=0, wat x=3, x=0, x=−3 gee.\n\nMetode 2 (eers gemeenskaplike faktor): x³−9x=x(x²−9)=x(x−3)(x+3)=0, wat direk x=0, x=3, x=−3 gee.\n\nMetode 2 is hier doeltreffender: x³−9x het reeds ʼn gemeenskaplike faktor van x wat dadelik raakgesien kan word, terwyl die Faktorstelling-benadering vier onsuksesvolle toetswaardes (x=1,−1,2,−2) benodig voordat die werkende wortel x=3 gevind word, en dan steeds ʼn volledige deling verg. Kyk altyd eers vir ʼn gemeenskaplike faktor voordat jy die Faktorstelling gebruik.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn kubieke vergelyking op te los deur dit volledig te faktoriseer met die Faktorstelling en langdeling, en dan die nul-produk-eienskap toe te pas om al drie wortels te vind" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SKETCHING CUBIC GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sketching-cubic-graphs',
      title: 'Derdegraadse Grafieke Teken',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn derdegraadse funksie y=p(x) te teken, gebruik ons die <strong>gefaktoriseerde vorm</strong> om die x-afsnitte (wortels) te vind, vind die <strong>y-afsnit</strong> deur x=0 te stel, bepaal die <strong>algemene vorm</strong> (ʼn positiewe voorste koëffisiënt styg van onder-links na bo-regs; ʼn negatiewe voorste koëffisiënt doen die teenoorgestelde), en identifiseer die draaipunte indien nodig (deur differensiaalrekene in die volgende onderwerp te gebruik).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-afsnitte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('y-afsnit')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kurwerigting')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Teken y=x³+2x²−5x−6=(x−2)(x+1)(x+3).',
          answer: `${bl('x-afsnitte: x=2, x=−1, x=−3')}; ${or('y-afsnit: y=−6')}; ${gr('positiewe voorste koëffisiënt — styg van links na regs')}.`,
          steps: [
            `${bl('x-afsnitte:')} stel elke faktor gelyk aan nul: (x−2)=0 → ${bl('x=2')}; (x+1)=0 → ${bl('x=−1')}; (x+3)=0 → ${bl('x=−3')}.`,
            `${or('y-afsnit:')} vervang x=0: y=(0−2)(0+1)(0+3) = (−2)(1)(3) = ${or('−6')}.`,
            `${gr('Vorm:')} die voorste term is x³ (positiewe koëffisiënt), dus ${gr('styg die grafiek van onder-links na bo-regs')}.`,
            `Merk die afsnitte by (${bl('−3')},0), (${bl('−1')},0), (${bl('2')},0) en (0,${or('−6')}), en teken dan ʼn gladde S-vormige kurwe daardeur.`,
          ],
        },
        {
          question: 'Sipho teken y=(x−1)(x−2)(x−3). Hy sê die grafiek raak die x-as by x=2 en sny dit by x=1 en x=3. Is hy korrek?',
          answer: `Nee — die grafiek ${bl('sny')} die x-as by al drie afsnitte: ${bl('x=1')}, ${bl('x=2')}, en ${bl('x=3')}.`,
          steps: [
            `ʼn Grafiek <strong>raak</strong> die x-as (sonder om te sny) by ʼn wortel slegs as daardie wortel <strong>herhaal</strong> is — dit beteken die ooreenstemmende faktor kom meer as een keer voor (multiplisiteit ≥ 2).`,
            `In y=(x−1)(x−2)(x−3) is al drie faktore verskillend en elkeen kom presies een keer voor (multiplisiteit 1).`,
            `Daarom ${bl('sny')} die grafiek die x-as by al drie afsnitte: ${bl('x=1')}, ${bl('x=2')}, en ${bl('x=3')}. Sipho is verkeerd oor x=2.`,
            `${or('y-afsnit:')} vervang x=0: y=(−1)(−2)(−3) = ${or('−6')}.`,
            `${gr('Vorm:')} positiewe voorste koëffisiënt (x³-term) — die grafiek ${gr('styg van onder-links na bo-regs')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'ʼn Derdegraadse funksie f(x) = ax³ + bx² + cx + d raak die x-as by x = 1 en sny die x-as by x = −4. Gegee dat f(0) = 4:\n\na) Verduidelik waarom f(x) geskryf kan word as f(x) = a(x−1)²(x+4), en bepaal dan die waarde van a.\nb) Bepaal dus die waardes van b, c en d.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Waarde van a',
              correctAnswer: 'a=1',
              correctAnswers: ['a=1', '1'],
              explanation: 'Om die x-as by x=1 te raak beteken x=1 is ʼn herhaalde (dubbele) wortel, dus is (x−1)² ʼn faktor. Om die x-as by x=−4 te sny beteken x=−4 is ʼn enkele wortel, dus is (x+4) ʼn faktor. Dus is f(x) = a(x−1)²(x+4) vir ʼn sekere konstante a.\nVervang x=0: f(0) = a(0−1)²(0+4) = a(1)(4) = 4a.\nAangesien f(0) = 4: 4a = 4, dus a = 1 ✓',
            },
            {
              label: 'b) Waardes van b, c en d',
              correctAnswer: 'b=2, c=-7, d=4',
              correctAnswers: ['b=2, c=-7, d=4', 'b=2 c=-7 d=4'],
              explanation: 'Met a=1: f(x) = (x−1)²(x+4) = (x²−2x+1)(x+4) = x³+4x²−2x²−8x+x+4 = x³+2x²−7x+4.\nDus b=2, c=−7, d=4 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn kubieke grafiek te skets deur die x-afsnitte uit die gefaktoriseerde vorm te vind, die y-afsnit deur x=0 te vervang, en die rigting van die kurwe uit die teken van die leidende koëffisiënt" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — Factor Theorem: testing whether (x-1) is a factor ──────────
    {
      difficulty: 'Easy',
      question: 'Bepaal of (x−1) ʼn faktor van p(x)=x³−2x²+3x−1 is deur p(1) te bereken. Gee jou gevolgtrekking.',
      answer: 'Nee, (x−1) is nie ʼn faktor nie.',
      checkMode: 'auto',
      correctAnswer: 'Nee',
      correctAnswers: ['Nee', 'nee', 'Nie \'n faktor nie', 'nie \'n faktor nie'],
      explanation: 'Vervang x=1: p(1)=1−2+3−1=1.\nAangesien p(1)=1≠0, is (x−1) volgens die Faktorstelling NIE ʼn faktor van p(x) nie ✓',
    },

    // ── Q2 Medium — Factor Theorem: show a factor ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Toon dat (x−3) ʼn faktor van p(x)=x³−6x²+11x−6 is. Wat is die waarde van p(3)?',
      answer: '0',
      checkMode: 'auto',
      correctAnswer: '0',
      explanation: 'p(3)=27−54+33−6=0. Aangesien p(3)=0, is (x−3) ʼn faktor van p(x) volgens die Faktorstelling ✓',
    },

    // ── Q3 Hard — find k using Factor Theorem ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die waarde van k as (x+1) ʼn faktor van p(x)=x³+kx²−4x−4 is.',
      answer: 'p(−1)=−1+k+4−4=k−1=0. k=1.',
      checkMode: 'self',
    },

    // ── Q4 Medium — polynomial long division ──────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Deel x³+x²−10x+8 deur (x−2) deur langdeling te gebruik.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Kwosiënt',
          correctAnswer: 'x²+3x-4',
          correctAnswers: ['x²+3x-4', 'x^2+3x-4'],
          explanation: 'x³÷x=x². x²(x−2)=x³−2x². Trek af: 3x²−10x+8.\n3x²÷x=3x. 3x(x−2)=3x²−6x. Trek af: −4x+8.\n−4x÷x=−4. −4(x−2)=−4x+8. Trek af: 0.\nKwosiënt: x²+3x−4 ✓',
        },
        {
          label: 'b) Res',
          correctAnswer: '0',
          explanation: 'Die res is 0, wat bevestig dat (x−2) ʼn faktor van x³+x²−10x+8 is.',
        },
      ],
    },

    // ── Q5 Medium — full factorisation given one factor ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer p(x)=x³+x²−10x+8 volledig, gegee dat (x−2) ʼn faktor is.',
      answer: '(x−2)(x−1)(x+4)',
      checkMode: 'auto',
      correctAnswer: '(x-2)(x-1)(x+4)',
      correctAnswers: ['(x-2)(x-1)(x+4)', '(x-2)(x+4)(x-1)', '(x-1)(x-2)(x+4)'],
      explanation: 'Vanaf V4, gee deling deur (x−2) die kwosiënt x²+3x−4=(x−1)(x+4).\nVolledige faktorisering: (x−2)(x−1)(x+4) ✓',
    },

    // ── Q6 Hard — Factor Theorem then full factorisation ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer p(x)=x³−7x+6 volledig, deur die Faktorstelling te gebruik om die eerste faktor te vind.',
      answer: 'Toets x=1: 1−7+6=0 ✓. Deel: x³−7x+6÷(x−1)=x²+x−6=(x+3)(x−2). Volledige faktorisering: (x−1)(x+3)(x−2).',
      checkMode: 'self',
    },

    // ── Q7 Easy — solve cubic using factorised form ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los x³−7x+6=0 op deur die gefaktoriseerde vorm van V6 te gebruik.',
      answer: 'x=1, x=−3, x=2',
      checkMode: 'auto',
      correctAnswer: 'x=1, x=-3, x=2',
      correctAnswers: ['x=1, x=-3, x=2', 'x=1, x=2, x=-3', '1; -3; 2', '1, -3, 2'],
      explanation: '(x−1)(x+3)(x−2)=0.\nx−1=0 → x=1; x+3=0 → x=−3; x−2=0 → x=2 ✓',
    },

    // ── Q8 Medium — solve cubic using factorised form ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los x³+x²−10x+8=0 op deur die gefaktoriseerde vorm van V5 te gebruik.',
      answer: 'x=2, x=1, x=−4',
      checkMode: 'auto',
      correctAnswer: 'x=2, x=1, x=-4',
      correctAnswers: ['x=2, x=1, x=-4', 'x=1, x=2, x=-4', '2; 1; -4', '1, 2, -4'],
      explanation: '(x−2)(x−1)(x+4)=0.\nx−2=0 → x=2; x−1=0 → x=1; x+4=0 → x=−4 ✓',
    },

    // ── Q9 Hard — solve cubic, showing Factor Theorem step ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los x³−3x²−4x+12=0 volledig op, en toon die Faktorstelling-stap.',
      answer: 'Toets x=2: 8−12−8+12=0 ✓. Deel: kwosiënt=x²−x−6=(x−3)(x+2). Oplossings: x=2, x=3, x=−2.',
      checkMode: 'self',
    },

    // ── Q10 Hard — critical reasoning about number of real solutions ──────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn derdegraadse vergelyking het altyd presies drie reële oplossings. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn derdegraadse vergelyking het altyd minstens een reële oplossing, maar die ander twee kan nie-reëel (kompleks) wees as die kwadratiese faktor ʼn negatiewe diskriminant het.',
      checkMode: 'self',
    },

    // ── Q11 Medium — x-intercepts and y-intercept from factorised form ────────
    {
      difficulty: 'Medium',
      question: 'Gee die x-afsnitte en y-afsnit van y=(x+1)(x−3)(x−5).',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) x-afsnitte (lys al drie waardes, geskei deur kommas)',
          correctAnswer: '-1, 3, 5',
          correctAnswers: ['-1, 3, 5', '-1,3,5', 'x=-1, x=3, x=5', '-1; 3; 5'],
          explanation: 'Stel elke faktor gelyk aan nul: x+1=0 → x=−1; x−3=0 → x=3; x−5=0 → x=5.',
        },
        {
          label: 'b) y-afsnit',
          correctAnswer: '15',
          explanation: 'Vervang x=0: y=(0+1)(0−3)(0−5)=(1)(−3)(−5)=15.',
        },
      ],
    },

    // ── Q12 Hard — repeated root and graph behaviour ──────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho sê as ʼn derdegraadse polinoom ʼn herhaalde wortel by x=2 het, raak die grafiek die x-as daar sonder om dit te sny. Is hy korrek? Verduidelik.",
      answer: 'Ja — ʼn herhaalde (dubbele) wortel beteken die faktor (x−2)² kom voor, wat veroorsaak dat die grafiek by x=2 die x-as raak en terugbons in plaas daarvan om deur te sny.',
      checkMode: 'self',
    },

    // ── Q13 Medium — y-intercept by substitution ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die y-afsnit van y=x³−6x²+11x−6.',
      answer: '−6',
      checkMode: 'auto',
      correctAnswer: '-6',
      correctAnswers: ['-6', '−6'],
      explanation: 'Vervang x=0: y=0−0+0−6=−6. Die y-afsnit is −6 ✓',
    },

    // ── Q14 Hard — full factorisation with leading coefficient ────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer p(x)=2x³−3x²−11x+6 volledig.',
      answer: 'Toets x=3: 54−27−33+6=0 ✓. Deel: 2x³−3x²−11x+6÷(x−3)=2x²+3x−2=(2x−1)(x+2). Volledige faktorisering: (x−3)(2x−1)(x+2).',
      checkMode: 'self',
    },

    // ── Q15 Hard — solve using factorised form from Q14 ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Los 2x³−3x²−11x+6=0 op deur jou antwoord van V14 te gebruik.',
      answer: 'x=3, x=1/2, x=−2',
      checkMode: 'auto',
      correctAnswer: 'x=3, x=1/2, x=-2',
      correctAnswers: ['x=3, x=1/2, x=-2', 'x=3, x=0,5, x=-2', '3; 1/2; -2', '3, 1/2, -2'],
      explanation: '(x−3)(2x−1)(x+2)=0.\nx−3=0 → x=3; 2x−1=0 → x=½; x+2=0 → x=−2 ✓',
    },

    // ── Q16 Hard — critical reasoning about the Remainder Theorem ────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die res wanneer enige polinoom deur (x−a) gedeel word, is altyd nul as a ʼn heelgetal is. Is hy korrek? Verduidelik.',
      answer: 'Nee — die res is slegs nul as (x−a) ʼn faktor van die polinoom is. Vir die meeste waardes van a sal die res nie nul wees nie.',
      checkMode: 'self',
    },

    // ── Q17 Hard — find k from a given remainder ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind k as die res wanneer p(x)=x³+kx−4 deur (x−2) gedeel word, 8 is.',
      answer: 'p(2)=8+2k−4=4+2k=8. 2k=4. k=2.',
      checkMode: 'self',
    },

    // ── Q18 Hard — equation from a cubic graph diagram ────────────────────────
    {
      difficulty: 'Hard',
      question: '[DIAGRAM: ʼn Derdegraadse grafiek met x-afsnitte by x=−2, x=1, x=4 en ʼn positiewe voorste koëffisiënt, wat deur die y-as by ʼn negatiewe y-waarde gaan] Gebruik die diagram en skryf die vergelyking van die derdegraadse funksie in gefaktoriseerde vorm.',
      answer: 'y=a(x+2)(x−1)(x−4). y-afsnit: y=a(2)(−1)(−4)=8a. Die y-afsnit hang dus van a af — as die grafiek blyk om die y-as by −8 te sny, dan is a=1 en y=(x+2)(x−1)(x−4).',
      checkMode: 'self',
    },

    // ── Q19 Hard — find a, b and third root from two known roots ─────────────
    {
      difficulty: 'Hard',
      question: 'Amahle het die derdegraadse polinoom p(x)=x³+ax²+bx−8, wat wortels by x=1 en x=−2 het. Vind a en b, en bepaal dan die derde wortel.',
      answer: 'p(1)=1+a+b−8=a+b−7=0, dus a+b=7. p(−2)=−8+4a−2b−8=4a−2b−16=0, dus 4a−2b=16, 2a−b=8. Optel: 3a=15, a=5. b=2. p(x)=x³+5x²+2x−8. Derde wortel: deel p(x) deur (x−1): kwosiënt = x²+6x+8 = (x+2)(x+4). Dus p(x)=(x−1)(x+2)(x+4), wat ʼn produk van wortels = 1×(−2)×(−4) = 8 gee, wat ooreenstem met −(−8)=8 ✓. Derde wortel: x=−4.',
      checkMode: 'self',
    },

    // ── Q20 Hard — critical reasoning about two known roots ──────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê as p(a)=0 en p(b)=0, dan moet (x−a)(x−b) ʼn faktor van p(x) wees. Is dit altyd waar vir ʼn derdegraadse polinoom? Verduidelik.',
      answer: 'Ja — as beide a en b wortels van die derdegraadse polinoom is, dan is beide (x−a) en (x−b) faktore; aangesien hulle produk (x−a)(x−b) ʼn graad-2-polinoom is wat ʼn graad-3-polinoom deel, en die derdegraadse polinoom presies drie wortels het (multiplisiteit ingereken), moet die oorblywende faktor lineêr wees, wat bevestig dat (x−a)(x−b) inderdaad deel is van die volledige faktorisering.',
      checkMode: 'self',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-2 Faktorstelling-toets (Maklik) | 3-6 Deling/kwosiënt gegee ʼn faktor (Maklik-Medium) |
    // 7-9 Volledige faktorisering, heelgetal voorste koëffisiënt (Medium) | 10-12 Volledige faktorisering, voorste koëffisiënt 2 (Medium) |
    // 13-16 Derdegraadse vergelykings oplos (Medium-Moeilik) | 17-19 Derdegraadse afsnitte/vorm (Moeilik, party gemerk vir diagramme)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Bepaal of (x+1) ʼn faktor van p(x)=x³−6x²+5x+12 is deur p(−1) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: '0, ja dit is ʼn faktor', correctAnswers: ['0, ja dit is ʼn faktor', 'ja', 'Ja', '0', 'ja, dit is ʼn faktor'], explanation: 'p(−1)=(−1)³−6(−1)²+5(−1)+12=−1−6−5+12=0.\nAangesien p(−1)=0, is (x+1) volgens die Faktorstelling WEL ʼn faktor van p(x) ✓' },
        { difficulty: 'Easy', question: 'Bepaal of (x−1) ʼn faktor van p(x)=x³+2x²−5x−6 is deur p(1) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'Nie ʼn faktor nie', 'nie ʼn faktor nie'], explanation: 'p(1)=1+2−5−6=−8.\nAangesien p(1)=−8≠0, is (x−1) volgens die Faktorstelling NIE ʼn faktor van p(x) nie ✓' },
        { difficulty: 'Easy', question: 'Toon dat (x−1) ʼn faktor van p(x)=x³+6x²+3x−10 is deur p(1) te bereken.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(1)=1+6+3−10=0.\nAangesien p(1)=0, is (x−1) ʼn faktor van p(x) volgens die Faktorstelling ✓' },

        { difficulty: 'Easy-Medium', question: 'Deel x³−2x²−5x+6 deur (x−3) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²+x-2', correctAnswers: ['x²+x-2', 'x^2+x-2'], explanation: 'x³÷x=x². x²(x−3)=x³−3x². Trek af: x²−5x+6.\nx²÷x=x. x(x−3)=x²−3x. Trek af: −2x+6.\n−2x÷x=−2. −2(x−3)=−2x+6. Trek af: 0.\nKwosiënt: x²+x−2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Deel x³−31x−30 deur (x+1) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'Herskryf as x³+0x²−31x−30 sodat die kolomme belyn bly.\nx³÷x=x². x²(x+1)=x³+x². Trek af: −x²−31x−30.\n−x²÷x=−x. −x(x+1)=−x²−x. Trek af: −30x−30.\n−30x÷x=−30. −30(x+1)=−30x−30. Trek af: 0.\nKwosiënt: x²−x−30 ✓' },
        { difficulty: 'Medium', question: 'Deel x³+x²−14x−24 deur (x+2) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²-x-12', correctAnswers: ['x²-x-12', 'x^2-x-12'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Trek af: −x²−14x−24.\n−x²÷x=−x. −x(x+2)=−x²−2x. Trek af: −12x−24.\n−12x÷x=−12. −12(x+2)=−12x−24. Trek af: 0.\nKwosiënt: x²−x−12 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x+2) ʼn faktor van x³+x²−14x−24 is.' },
        ]},
        { difficulty: 'Medium', question: 'Deel x³−2x²−29x+30 deur (x−1) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Trek af: −x²−29x+30.\n−x²÷x=−x. −x(x−1)=−x²+x. Trek af: −30x+30.\n−30x÷x=−30. −30(x−1)=−30x+30. Trek af: 0.\nKwosiënt: x²−x−30 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x−1) ʼn faktor van x³−2x²−29x+30 is.' },
        ]},

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 6x² + 11x − 6 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x-1)(x-2)(x-3)', correctAnswers: ['(x-1)(x-2)(x-3)', '(x-1)(x-3)(x-2)', '(x-2)(x-3)(x-1)'], explanation: 'Toets x=1: 1−6+11−6=0 ✓. Dus is (x−1) ʼn faktor.\nDeel: kwosiënt = x²−5x+6 = (x−2)(x−3).\nVolledige faktorisering: (x−1)(x−2)(x−3) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ + 3x² − 6x − 8 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x+1)(x-2)(x+4)', correctAnswers: ['(x+1)(x-2)(x+4)', '(x+1)(x+4)(x-2)', '(x-2)(x+4)(x+1)'], explanation: 'Toets x=−1: −1+3+6−8=0 ✓. Dus is (x+1) ʼn faktor.\nDeel: kwosiënt = x²+2x−8 = (x−2)(x+4).\nVolledige faktorisering: (x+1)(x−2)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 4x² − 15x + 18 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x-1)(x+3)', correctAnswers: ['(x-6)(x-1)(x+3)', '(x-6)(x+3)(x-1)', '(x-1)(x+3)(x-6)'], explanation: 'Toets x=6: 216−144−90+18=0 ✓. Dus is (x−6) ʼn faktor.\nDeel: kwosiënt = x²+2x−3 = (x−1)(x+3).\nVolledige faktorisering: (x−6)(x−1)(x+3) ✓' },

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = 2x³ − 3x² − 11x + 6 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(2x-1)(x+2)(x-3)', correctAnswers: ['(2x-1)(x+2)(x-3)', '(2x-1)(x-3)(x+2)', '(x+2)(x-3)(2x-1)'], explanation: 'Toets x=½: 2(⅛)−3(¼)−11(½)+6=¼−¾−5½+6=0 ✓. Dus is (2x−1) ʼn faktor.\nDeel: kwosiënt = x²−x−6 = (x−3)(x+2).\nVolledige faktorisering: (2x−1)(x−3)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 3x² − 22x + 24 volledig, gegee dat (x+4) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: '(x+4)(x-1)(x-6)', correctAnswers: ['(x+4)(x-1)(x-6)', '(x+4)(x-6)(x-1)', '(x-1)(x-6)(x+4)'], explanation: 'Deel x³−3x²−22x+24 deur (x+4): kwosiënt = x²−7x+6 = (x−1)(x−6).\nVolledige faktorisering: (x+4)(x−1)(x−6) ✓' },
        { difficulty: 'Medium-Hard', question: 'Gegee p(x) = x³ − 4x² − 11x − 6:\n\na) Toon dat (x−6) ʼn faktor van p(x) is.\nb) Faktoriseer p(x) volledig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Toon (x − 6) is ʼn faktor', correctAnswer: '0', explanation: 'p(6)=216−144−66−6=0.\nAangesien p(6)=0, is (x−6) ʼn faktor volgens die Faktorstelling ✓' },
          { label: 'b) Volledige faktorisering van p(x)', correctAnswer: '(x-6)(x+1)²', correctAnswers: ['(x-6)(x+1)²', '(x-6)(x+1)^2', '(x-6)(x+1)(x+1)'], explanation: 'Deel x³−4x²−11x−6 deur (x−6): kwosiënt = x²+2x+1 = (x+1)².\nVolledige faktorisering: (x−6)(x+1)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Los op vir x: x³ − 3x² − 22x + 24 = 0, gegee dat (x+4) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: 'x=-4, x=1, x=6', correctAnswers: ['x=-4, x=1, x=6', 'x=1, x=6, x=-4', '-4; 1; 6', '-4, 1, 6'], explanation: '(x+4)(x²−7x+6)=0 → (x+4)(x−1)(x−6)=0.\nx+4=0 → x=−4; x−1=0 → x=1; x−6=0 → x=6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: x³ − 4x² − 11x − 6 = 0, deur jou faktorisering van die vorige vraag te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=6, x=-1', correctAnswers: ['x=6, x=-1', 'x=-1, x=6', '6; -1', '6, -1'], explanation: '(x−6)(x+1)²=0.\nx−6=0 → x=6; (x+1)²=0 → x=−1 (ʼn herhaalde wortel, dus slegs twee verskillende oplossings) ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x³ − 3x² − 11x + 6 = 0, deur jou faktorisering van V11 te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=1/2, x=-2, x=3', correctAnswers: ['x=1/2, x=-2, x=3', 'x=-2, x=1/2, x=3', '1/2; -2; 3', '0,5, -2, 3'], explanation: '(2x−1)(x−3)(x+2)=0.\n2x−1=0 → x=½; x−3=0 → x=3; x+2=0 → x=−2 ✓' },
        { difficulty: 'Hard', question: 'Gegee p(x)=x³+ax²+bx+18, en dat p(1)=0 en p(−3)=0, vind a en b, en los dan p(x)=0 volledig op.', answer: '', checkMode: 'auto', correctAnswer: 'a=-4, b=-15; x=1, x=-3, x=6', correctAnswers: ['a=-4, b=-15; x=1, x=-3, x=6', 'a=-4 b=-15 x=1 x=-3 x=6'], explanation: 'p(1)=1+a+b+18=0 → a+b=−19.\np(−3)=−27+9a−3b+18=0 → 9a−3b=9 → 3a−b=3.\nTel die twee vergelykings op (a+b=−19) en (3a−b=3): 4a=−16 → a=−4, dus b=−15.\np(x)=x³−4x²−15x+18=(x−1)(x+3)(x−6). Oplossings: x=1, x=−3, x=6 ✓' },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek word beskryf deur y=x³+4x²−15x−18=(x+6)(x−3)(x+1). Gee die x-afsnitte, die y-afsnit, en die algemene vorm (stygend of dalend van links na regs).', answer: '', checkMode: 'auto', correctAnswer: 'x=-6, x=3, x=-1; y=-18; styg van links na regs', correctAnswers: ['x=-6, x=3, x=-1; y=-18; styg van links na regs', 'x=-6,x=-1,x=3; y-afsnit=-18; styg'], explanation: 'x-afsnitte: (x+6)=0 → x=−6; (x−3)=0 → x=3; (x+1)=0 → x=−1.\ny-afsnit: y=(6)(−3)(1)=−18.\nAangesien die voorste koëffisiënt positief is (x³-term), styg die grafiek van onder-links na bo-regs ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: ʼn Derdegraadse grafiek sny die x-as by x=−2, x=1 en x=5, het ʼn positiewe voorste koëffisiënt, en sny die y-as by y=10] Gebruik die sketch om die vergelyking van die derdegraadse funksie in gefaktoriseerde vorm y=(x+2)(x−1)(x−5) te skryf, en verifieer dan dat die y-afsnit met die diagram ooreenstem.', answer: '', checkMode: 'auto', correctAnswer: 'y=10, stem ooreen', correctAnswers: ['y=10, stem ooreen', '10', 'y-afsnit is 10, wat met die diagram ooreenstem'], explanation: 'Vervang x=0 in y=(x+2)(x−1)(x−5): y=(2)(−1)(−5)=10.\nDit stem ooreen met die y-afsnit van 10 wat in die diagram getoon word, wat die vergelyking bevestig ✓' },
        { difficulty: 'Hard', question: 'Sipho teken y=(x−4)(x+2)(x+1) en beweer dat die grafiek die x-as by x=−1 raak (maar nie sny nie). Is hy korrek? Verduidelik, en gee dan al drie x-afsnitte en die y-afsnit.', answer: '', checkMode: 'auto', correctAnswer: 'Nee, sny by al drie; x=4,-2,-1; y=-8', correctAnswers: ['Nee, sny by al drie; x=4,-2,-1; y=-8', 'Nee; x=4, x=-2, x=-1; y-afsnit=-8'], explanation: 'Sipho is verkeerd — al drie faktore (x−4), (x+2) en (x+1) is verskillend met multiplisiteit 1, dus SNY die grafiek die x-as by al drie afsnitte, ook by x=−1.\nx-afsnitte: x=4, x=−2, x=−1.\ny-afsnit: y=(−4)(2)(1)=−8 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die Faktorstelling, derdegraadse faktorisering, vergelykings oplos en derdegraadse grafieke teken bemeester.' },
        { minScore: 14, message: 'Puik werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde bloklegging as Stel 1, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Bepaal of (x−2) ʼn faktor van p(x)=x³+4x²−7x−10 is deur p(2) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: '0, ja dit is ʼn faktor', correctAnswers: ['0, ja dit is ʼn faktor', 'ja', 'Ja', '0', 'ja, dit is ʼn faktor'], explanation: 'p(2)=8+16−14−10=0.\nAangesien p(2)=0, is (x−2) volgens die Faktorstelling WEL ʼn faktor van p(x) ✓' },
        { difficulty: 'Easy', question: 'Bepaal of (x−1) ʼn faktor van p(x)=x³+4x²+x−6 is deur p(1) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: '0, ja dit is ʼn faktor', correctAnswers: ['0, ja dit is ʼn faktor', 'ja', 'Ja', '0', 'ja, dit is ʼn faktor'], explanation: 'p(1)=1+4+1−6=0.\nAangesien p(1)=0, is (x−1) volgens die Faktorstelling WEL ʼn faktor van p(x) ✓' },
        { difficulty: 'Easy', question: 'Toon dat (x+3) ʼn faktor van p(x)=x³+4x²+x−6 is deur p(−3) te bereken.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(−3)=−27+36−3−6=0.\nAangesien p(−3)=0, is (x+3) ʼn faktor van p(x) volgens die Faktorstelling ✓' },

        { difficulty: 'Easy-Medium', question: 'Deel x³+x²−14x−24 deur (x+2) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-12', correctAnswers: ['x²-x-12', 'x^2-x-12'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Trek af: −x²−14x−24.\n−x²÷x=−x. −x(x+2)=−x²−2x. Trek af: −12x−24.\n−12x÷x=−12. −12(x+2)=−12x−24. Trek af: 0.\nKwosiënt: x²−x−12 ✓' },
        { difficulty: 'Easy-Medium', question: 'Deel x³−2x²−29x+30 deur (x−1) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²-x-30', correctAnswers: ['x²-x-30', 'x^2-x-30'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Trek af: −x²−29x+30.\n−x²÷x=−x. −x(x−1)=−x²+x. Trek af: −30x+30.\n−30x÷x=−30. −30(x−1)=−30x+30. Trek af: 0.\nKwosiënt: x²−x−30 ✓' },
        { difficulty: 'Medium', question: 'Deel x³+5x²−2x−24 deur (x+3) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²+2x-8', correctAnswers: ['x²+2x-8', 'x^2+2x-8'], explanation: 'x³÷x=x². x²(x+3)=x³+3x². Trek af: 2x²−2x−24.\n2x²÷x=2x. 2x(x+3)=2x²+6x. Trek af: −8x−24.\n−8x÷x=−8. −8(x+3)=−8x−24. Trek af: 0.\nKwosiënt: x²+2x−8 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x+3) ʼn faktor van x³+5x²−2x−24 is.' },
        ]},
        { difficulty: 'Medium', question: 'Deel x³−2x²−13x−10 deur (x−5) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²+3x+2', correctAnswers: ['x²+3x+2', 'x^2+3x+2'], explanation: 'x³÷x=x². x²(x−5)=x³−5x². Trek af: 3x²−13x−10.\n3x²÷x=3x. 3x(x−5)=3x²−15x. Trek af: 2x−10.\n2x÷x=2. 2(x−5)=2x−10. Trek af: 0.\nKwosiënt: x²+3x+2 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x−5) ʼn faktor van x³−2x²−13x−10 is.' },
        ]},

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ + 4x² − 11x − 30 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x+5)(x-3)(x+2)', correctAnswers: ['(x+5)(x-3)(x+2)', '(x+5)(x+2)(x-3)', '(x-3)(x+2)(x+5)'], explanation: 'Toets x=−5: −125+100+55−30=0 ✓. Dus is (x+5) ʼn faktor.\nDeel: kwosiënt = x²−x−6 = (x−3)(x+2).\nVolledige faktorisering: (x+5)(x−3)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 13x − 12 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x+1)(x+3)(x-4)', correctAnswers: ['(x+1)(x+3)(x-4)', '(x+1)(x-4)(x+3)', '(x-4)(x+3)(x+1)'], explanation: 'Toets x=−1: −1+13−12=0 ✓. Dus is (x+1) ʼn faktor.\nDeel: kwosiënt = x²−x−12 = (x−4)(x+3).\nVolledige faktorisering: (x+1)(x−4)(x+3) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ + 2x² − 11x − 12 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x-3)(x+1)(x+4)', correctAnswers: ['(x-3)(x+1)(x+4)', '(x-3)(x+4)(x+1)', '(x+1)(x+4)(x-3)'], explanation: 'Toets x=3: 27+18−33−12=0 ✓. Dus is (x−3) ʼn faktor.\nDeel: kwosiënt = x²+5x+4 = (x+1)(x+4).\nVolledige faktorisering: (x−3)(x+1)(x+4) ✓' },

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = 2x³ + 3x² − 11x − 6 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(2x+1)(x-2)(x+3)', correctAnswers: ['(2x+1)(x-2)(x+3)', '(2x+1)(x+3)(x-2)', '(x-2)(x+3)(2x+1)'], explanation: 'Toets x=−½: 2(−⅛)+3(¼)−11(−½)−6=−¼+¾+5½−6=0 ✓. Dus is (2x+1) ʼn faktor.\nDeel: kwosiënt = x²+x−6 = (x+3)(x−2).\nVolledige faktorisering: (2x+1)(x+3)(x−2) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 4x² − 15x + 18 volledig, gegee dat (x−6) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x-1)(x+3)', correctAnswers: ['(x-6)(x-1)(x+3)', '(x-6)(x+3)(x-1)', '(x-1)(x+3)(x-6)'], explanation: 'Deel x³−4x²−15x+18 deur (x−6): kwosiënt = x²+2x−3 = (x−1)(x+3).\nVolledige faktorisering: (x−6)(x−1)(x+3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Gegee p(x) = x³ − 12x − 16:\n\na) Toon dat (x−4) ʼn faktor van p(x) is.\nb) Faktoriseer p(x) volledig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Toon (x − 4) is ʼn faktor', correctAnswer: '0', explanation: 'p(4)=64−48−16=0.\nAangesien p(4)=0, is (x−4) ʼn faktor volgens die Faktorstelling ✓' },
          { label: 'b) Volledige faktorisering van p(x)', correctAnswer: '(x-4)(x+2)²', correctAnswers: ['(x-4)(x+2)²', '(x-4)(x+2)^2', '(x-4)(x+2)(x+2)'], explanation: 'Deel x³−12x−16 deur (x−4): kwosiënt = x²+4x+4 = (x+2)².\nVolledige faktorisering: (x−4)(x+2)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Los op vir x: 2x³ + 7x² − 5x − 4 = 0, gegee dat (2x+1) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1/2, x=1, x=-4', correctAnswers: ['x=-1/2, x=1, x=-4', 'x=1, x=-4, x=-1/2', '-1/2; 1; -4', '-0,5, 1, -4'], explanation: '(2x+1)(x²+3x−4)=0 → (2x+1)(x−1)(x+4)=0.\n2x+1=0 → x=−½; x−1=0 → x=1; x+4=0 → x=−4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: x³ − 12x − 16 = 0, deur jou faktorisering van die vorige vraag te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=4, x=-2', correctAnswers: ['x=4, x=-2', 'x=-2, x=4', '4; -2', '4, -2'], explanation: '(x−4)(x+2)²=0.\nx−4=0 → x=4; (x+2)²=0 → x=−2 (ʼn herhaalde wortel, dus slegs twee verskillende oplossings) ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x³ + 3x² − 11x − 6 = 0, deur jou faktorisering van V11 te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1/2, x=2, x=-3', correctAnswers: ['x=-1/2, x=2, x=-3', 'x=2, x=-3, x=-1/2', '-1/2; 2; -3', '-0,5, 2, -3'], explanation: '(2x+1)(x−2)(x+3)=0.\n2x+1=0 → x=−½; x−2=0 → x=2; x+3=0 → x=−3 ✓' },
        { difficulty: 'Hard', question: 'Gegee p(x)=x³+ax²+bx−24, en dat p(−1)=0 en p(6)=0, vind a en b, en los dan p(x)=0 volledig op.', answer: '', checkMode: 'auto', correctAnswer: 'a=-1, b=-26; x=-1, x=6, x=-4', correctAnswers: ['a=-1, b=-26; x=-1, x=6, x=-4', 'a=-1 b=-26 x=-1 x=6 x=-4'], explanation: 'p(−1)=−1+a−b−24=0 → a−b=25.\np(6)=216+36a+6b−24=0 → 36a+6b=−192 → 6a+b=−32.\nTel die twee vergelykings op (a−b=25) en (6a+b=−32): 7a=−7 → a=−1, dus b=−26.\np(x)=x³−x²−26x−24=(x+1)(x−6)(x+4). Oplossings: x=−1, x=6, x=−4 ✓' },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek word beskryf deur y=x³+2x²−11x−12=(x−3)(x+1)(x+4). Gee die x-afsnitte, die y-afsnit, en die algemene vorm (stygend of dalend van links na regs).', answer: '', checkMode: 'auto', correctAnswer: 'x=3, x=-1, x=-4; y=-12; styg van links na regs', correctAnswers: ['x=3, x=-1, x=-4; y=-12; styg van links na regs', 'x=3,x=-1,x=-4; y-afsnit=-12; styg'], explanation: 'x-afsnitte: (x−3)=0 → x=3; (x+1)=0 → x=−1; (x+4)=0 → x=−4.\ny-afsnit: y=(−3)(1)(4)=−12.\nAangesien die voorste koëffisiënt positief is (x³-term), styg die grafiek van onder-links na bo-regs ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: ʼn Derdegraadse grafiek sny die x-as by x=1, x=−6 en x=2, het ʼn positiewe voorste koëffisiënt, en sny die y-as by y=12] Gebruik die sketch om die vergelyking van die derdegraadse funksie in gefaktoriseerde vorm y=(x−1)(x+6)(x−2) te skryf, en verifieer dan dat die y-afsnit met die diagram ooreenstem.', answer: '', checkMode: 'auto', correctAnswer: 'y=12, stem ooreen', correctAnswers: ['y=12, stem ooreen', '12', 'y-afsnit is 12, wat met die diagram ooreenstem'], explanation: 'Vervang x=0 in y=(x−1)(x+6)(x−2): y=(−1)(6)(−2)=12.\nDit stem ooreen met die y-afsnit van 12 wat in die diagram getoon word, wat die vergelyking bevestig ✓' },
        { difficulty: 'Hard', question: 'Lerato teken y=(x+1)(x−6)(x+2) en beweer dat die grafiek die x-as by x=−1 raak (maar nie sny nie). Is sy korrek? Verduidelik, en gee dan al drie x-afsnitte en die y-afsnit.', answer: '', checkMode: 'auto', correctAnswer: 'Nee, sny by al drie; x=-1,6,-2; y=-12', correctAnswers: ['Nee, sny by al drie; x=-1,6,-2; y=-12', 'Nee; x=-1, x=6, x=-2; y-afsnit=-12'], explanation: 'Lerato is verkeerd — al drie faktore (x+1), (x−6) en (x+2) is verskillend met multiplisiteit 1, dus SNY die grafiek die x-as by al drie afsnitte, ook by x=−1.\nx-afsnitte: x=−1, x=6, x=−2.\ny-afsnit: y=(1)(−6)(2)=−12 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan die Faktorstelling, derdegraadse faktorisering, vergelykings oplos en grafieklees met selfvertroue toepas.' },
        { minScore: 14, message: 'Puik werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde bloklegging, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Bepaal of (x−4) ʼn faktor van p(x)=x³−4x²−20x+48 is deur p(4) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'Nie ʼn faktor nie', 'nie ʼn faktor nie'], explanation: 'p(4)=64−64−80+48=−32.\nAangesien p(4)=−32≠0, is (x−4) volgens die Faktorstelling NIE ʼn faktor van p(x) nie ✓' },
        { difficulty: 'Easy', question: 'Toon dat (x+4) ʼn faktor van p(x)=x³−4x²−20x+48 is deur p(−4) te bereken.', answer: '0', checkMode: 'auto', correctAnswer: '0', explanation: 'p(−4)=−64−64+80+48=0.\nAangesien p(−4)=0, is (x+4) ʼn faktor van p(x) volgens die Faktorstelling ✓' },
        { difficulty: 'Easy', question: 'Bepaal of (x−3) ʼn faktor van p(x)=x³−7x−6 is deur p(3) te bereken. Gee jou gevolgtrekking.', answer: '', checkMode: 'auto', correctAnswer: '0, ja dit is ʼn faktor', correctAnswers: ['0, ja dit is ʼn faktor', 'ja', 'Ja', '0', 'ja, dit is ʼn faktor'], explanation: 'p(3)=27−21−6=0.\nAangesien p(3)=0, is (x−3) volgens die Faktorstelling WEL ʼn faktor van p(x) ✓' },

        { difficulty: 'Easy-Medium', question: 'Deel x³−2x²−13x−10 deur (x−5) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²+3x+2', correctAnswers: ['x²+3x+2', 'x^2+3x+2'], explanation: 'x³÷x=x². x²(x−5)=x³−5x². Trek af: 3x²−13x−10.\n3x²÷x=3x. 3x(x−5)=3x²−15x. Trek af: 2x−10.\n2x÷x=2. 2(x−5)=2x−10. Trek af: 0.\nKwosiënt: x²+3x+2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Deel x³+5x²−2x−24 deur (x+3) deur langdeling te gebruik. Gee die kwosiënt.', answer: '', checkMode: 'auto', correctAnswer: 'x²+2x-8', correctAnswers: ['x²+2x-8', 'x^2+2x-8'], explanation: 'x³÷x=x². x²(x+3)=x³+3x². Trek af: 2x²−2x−24.\n2x²÷x=2x. 2x(x+3)=2x²+6x. Trek af: −8x−24.\n−8x÷x=−8. −8(x+3)=−8x−24. Trek af: 0.\nKwosiënt: x²+2x−8 ✓' },
        { difficulty: 'Medium', question: 'Deel x³+6x²+3x−10 deur (x−1) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²+7x+10', correctAnswers: ['x²+7x+10', 'x^2+7x+10'], explanation: 'x³÷x=x². x²(x−1)=x³−x². Trek af: 7x²+3x−10.\n7x²÷x=7x. 7x(x−1)=7x²−7x. Trek af: 10x−10.\n10x÷x=10. 10(x−1)=10x−10. Trek af: 0.\nKwosiënt: x²+7x+10 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x−1) ʼn faktor van x³+6x²+3x−10 is.' },
        ]},
        { difficulty: 'Medium', question: 'Deel x³+x²−22x−40 deur (x+2) deur langdeling te gebruik. Gee die kwosiënt en die res.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt', correctAnswer: 'x²-x-20', correctAnswers: ['x²-x-20', 'x^2-x-20'], explanation: 'x³÷x=x². x²(x+2)=x³+2x². Trek af: −x²−22x−40.\n−x²÷x=−x. −x(x+2)=−x²−2x. Trek af: −20x−40.\n−20x÷x=−20. −20(x+2)=−20x−40. Trek af: 0.\nKwosiënt: x²−x−20 ✓' },
          { label: 'b) Res', correctAnswer: '0', explanation: 'Die res is 0, wat bevestig dat (x+2) ʼn faktor van x³+x²−22x−40 is.' },
        ]},

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 4x² − 19x − 14 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x-7)(x+2)(x+1)', correctAnswers: ['(x-7)(x+2)(x+1)', '(x-7)(x+1)(x+2)', '(x+2)(x+1)(x-7)'], explanation: 'Toets x=7: 343−196−133−14=0 ✓. Dus is (x−7) ʼn faktor.\nDeel: kwosiënt = x²+3x+2 = (x+1)(x+2).\nVolledige faktorisering: (x−7)(x+1)(x+2) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ + x² − 22x − 40 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x+2)(x-5)(x+4)', correctAnswers: ['(x+2)(x-5)(x+4)', '(x+2)(x+4)(x-5)', '(x-5)(x+4)(x+2)'], explanation: 'Toets x=−2: −8+4+44−40=0 ✓. Dus is (x+2) ʼn faktor.\nDeel: kwosiënt = x²−x−20 = (x−5)(x+4).\nVolledige faktorisering: (x+2)(x−5)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 4x² − 7x + 10 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(x+2)(x-1)(x-5)', correctAnswers: ['(x+2)(x-1)(x-5)', '(x+2)(x-5)(x-1)', '(x-1)(x-5)(x+2)'], explanation: 'Toets x=−2: −8−16+14+10=0 ✓. Dus is (x+2) ʼn faktor.\nDeel: kwosiënt = x²−6x+5 = (x−1)(x−5).\nVolledige faktorisering: (x+2)(x−1)(x−5) ✓' },

        { difficulty: 'Medium', question: 'Faktoriseer p(x) = 2x³ + 7x² − 7x − 12 volledig.', answer: '', checkMode: 'auto', correctAnswer: '(2x-3)(x+1)(x+4)', correctAnswers: ['(2x-3)(x+1)(x+4)', '(2x-3)(x+4)(x+1)', '(x+1)(x+4)(2x-3)'], explanation: 'Toets x=1½: 2(1½)³+7(1½)²−7(1½)−12=2(3⅜)+7(2¼)−10½−12=6¾+15¾−10½−12=0 ✓. Dus is (2x−3) ʼn faktor.\nDeel: kwosiënt = x²+5x+4 = (x+1)(x+4).\nVolledige faktorisering: (2x−3)(x+1)(x+4) ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer p(x) = x³ − 2x² − 21x − 18 volledig, gegee dat (x−6) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: '(x-6)(x+3)(x+1)', correctAnswers: ['(x-6)(x+3)(x+1)', '(x-6)(x+1)(x+3)', '(x+3)(x+1)(x-6)'], explanation: 'Deel x³−2x²−21x−18 deur (x−6): kwosiënt = x²+4x+3 = (x+1)(x+3).\nVolledige faktorisering: (x−6)(x+1)(x+3) ✓' },
        { difficulty: 'Medium-Hard', question: 'Gegee p(x) = x³ − 5x² + 3x + 9:\n\na) Toon dat (x+1) ʼn faktor van p(x) is.\nb) Faktoriseer p(x) volledig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Toon (x + 1) is ʼn faktor', correctAnswer: '0', explanation: 'p(−1)=−1−5−3+9=0.\nAangesien p(−1)=0, is (x+1) ʼn faktor volgens die Faktorstelling ✓' },
          { label: 'b) Volledige faktorisering van p(x)', correctAnswer: '(x+1)(x-3)²', correctAnswers: ['(x+1)(x-3)²', '(x+1)(x-3)^2', '(x+1)(x-3)(x-3)'], explanation: 'Deel x³−5x²+3x+9 deur (x+1): kwosiënt = x²−6x+9 = (x−3)².\nVolledige faktorisering: (x+1)(x−3)² ✓' },
        ]},

        { difficulty: 'Medium-Hard', question: 'Los op vir x: x³ − 5x² − 8x + 12 = 0, gegee dat (x−6) ʼn faktor is.', answer: '', checkMode: 'auto', correctAnswer: 'x=6, x=1, x=-2', correctAnswers: ['x=6, x=1, x=-2', 'x=1, x=-2, x=6', '6; 1; -2', '6, 1, -2'], explanation: '(x−6)(x²+x−2)=0 → (x−6)(x−1)(x+2)=0.\nx−6=0 → x=6; x−1=0 → x=1; x+2=0 → x=−2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: x³ − 5x² + 3x + 9 = 0, deur jou faktorisering van die vorige vraag te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=-1, x=3', correctAnswers: ['x=-1, x=3', 'x=3, x=-1', '-1; 3', '-1, 3'], explanation: '(x+1)(x−3)²=0.\nx+1=0 → x=−1; (x−3)²=0 → x=3 (ʼn herhaalde wortel, dus slegs twee verskillende oplossings) ✓' },
        { difficulty: 'Hard', question: 'Los op vir x: 2x³ + 7x² − 7x − 12 = 0, deur jou faktorisering van V11 te gebruik.', answer: '', checkMode: 'auto', correctAnswer: 'x=3/2, x=-1, x=-4', correctAnswers: ['x=3/2, x=-1, x=-4', 'x=-1, x=-4, x=3/2', '3/2; -1; -4', '1,5, -1, -4'], explanation: '(2x−3)(x+1)(x+4)=0.\n2x−3=0 → x=1½; x+1=0 → x=−1; x+4=0 → x=−4 ✓' },
        { difficulty: 'Hard', question: 'Gegee p(x)=x³+ax²+bx−18, en dat p(2)=0 en p(−1)=0, vind a en b, en los dan p(x)=0 volledig op.', answer: '', checkMode: 'auto', correctAnswer: 'a=8, b=-11; x=2, x=-1, x=-9', correctAnswers: ['a=8, b=-11; x=2, x=-1, x=-9', 'a=8 b=-11 x=2 x=-1 x=-9'], explanation: 'p(2)=8+4a+2b−18=0 → 4a+2b=10 → 2a+b=5.\np(−1)=−1+a−b−18=0 → a−b=19.\nTel die twee vergelykings op (2a+b=5) en (a−b=19): 3a=24 → a=8, dus b=−11.\np(x)=x³+8x²−11x−18=(x−2)(x+1)(x+9). Oplossings: x=2, x=−1, x=−9 ✓' },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek word beskryf deur y=x³−4x²−7x+10=(x+2)(x−1)(x−5). Gee die x-afsnitte, die y-afsnit, en die algemene vorm (stygend of dalend van links na regs).', answer: '', checkMode: 'auto', correctAnswer: 'x=-2, x=1, x=5; y=10; styg van links na regs', correctAnswers: ['x=-2, x=1, x=5; y=10; styg van links na regs', 'x=-2,x=1,x=5; y-afsnit=10; styg'], explanation: 'x-afsnitte: (x+2)=0 → x=−2; (x−1)=0 → x=1; (x−5)=0 → x=5.\ny-afsnit: y=(2)(−1)(−5)=10.\nAangesien die voorste koëffisiënt positief is (x³-term), styg die grafiek van onder-links na bo-regs ✓' },
        { difficulty: 'Hard', question: '[DIAGRAM: ʼn Derdegraadse grafiek sny die x-as by x=6, x=−3 en x=−1, het ʼn positiewe voorste koëffisiënt, en sny die y-as by y=−18] Gebruik die sketch om die vergelyking van die derdegraadse funksie in gefaktoriseerde vorm y=(x−6)(x+3)(x+1) te skryf, en verifieer dan dat die y-afsnit met die diagram ooreenstem.', answer: '', checkMode: 'auto', correctAnswer: 'y=-18, stem ooreen', correctAnswers: ['y=-18, stem ooreen', '-18', 'y-afsnit is -18, wat met die diagram ooreenstem'], explanation: 'Vervang x=0 in y=(x−6)(x+3)(x+1): y=(−6)(3)(1)=−18.\nDit stem ooreen met die y-afsnit van −18 wat in die diagram getoon word, wat die vergelyking bevestig ✓' },
        { difficulty: 'Hard', question: 'Thabo teken y=(x−4)(x+1)(x−1) en beweer dat die grafiek die x-as by x=−1 raak (maar nie sny nie). Is hy korrek? Verduidelik, en gee dan al drie x-afsnitte en die y-afsnit.', answer: '', checkMode: 'auto', correctAnswer: 'Nee, sny by al drie; x=4,-1,1; y=4', correctAnswers: ['Nee, sny by al drie; x=4,-1,1; y=4', 'Nee; x=4, x=-1, x=1; y-afsnit=4'], explanation: 'Thabo is verkeerd — al drie faktore (x−4), (x+1) en (x−1) is verskillend met multiplisiteit 1, dus SNY die grafiek die x-as by al drie afsnitte, ook by x=−1.\nx-afsnitte: x=4, x=−1, x=1.\ny-afsnit: y=(−4)(1)(−1)=4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy kan die Faktorstelling, derdegraadse faktorisering, vergelykings oplos en grafieksketse met selfvertroue toepas.' },
        { minScore: 14, message: 'Puik werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het funksies — polinome bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 25, message: 'Uitstekend! ʼn Volmaakte telling — jy het polinome vir Graad 12 heeltemal bemeester. Uitstekende werk!' },
    { minScore: 20, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van polinoomteorie en langdeling. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 14, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling noukeurig, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — polinoommetodes verg oefening! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
