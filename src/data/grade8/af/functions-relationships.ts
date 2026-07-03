import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions and relationships roles) ───────────────────────
// input value        → blue   (#2563eb)
// output value       → green  (#16a34a)
// equation           → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies en Verwantskappe',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INPUT, OUTPUT VALUES AND EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-output-equations',
      title: 'Inset-, Uitsetwaardes en Vergelykings',
      icon: '⟶',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal <strong>insetwaardes</strong>, <strong>uitsetwaardes</strong> of reëls vir patrone en verwantskappe deur vloeidiagramme, tabelle, formules en nou ook <strong>vergelykings</strong> te gebruik. Gegewe ʼn vergelyking, <strong>vervang</strong> ons om inset- of uitsetwaardes te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('insetwaarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitsetwaarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Insetwaarde (x)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat ons in die vergelyking vervang — die beginwaarde.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Uitsetwaarde (y)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat ons kry nadat die reël toegepas is — die resultaat van vervanging.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Wiskundige stelling met ʼn gelykaanteken wat die verwantskap tussen inset en uitset beskryf.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find output and input ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Uitset- en insetwaardes vind</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Die uitset (y) vind</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vervang die ${bl('insetwaarde')} in die ${or('vergelyking')} en bereken die ${gr('uitsetwaarde')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: y = 4x − 3, ${bl('x = 6')} → y = 4(6) − 3 = ${gr('21')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Die inset (x) vind</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vervang die ${gr('uitsetwaarde')} in die ${or('vergelyking')}, en los dan op vir ${bl('x')} deur inverse bewerkings te gebruik.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: y = 2x + 7, ${gr('y = 19')} → los op vir ${bl('x')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vervanging teenoor oplos</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy ${bl('x')} ken en ${gr('y')} wil vind: <strong>vervang direk</strong> en bereken. Wanneer jy ${gr('y')} ken en ${bl('x')} wil vind: stel die ${or('vergelyking')} op met die bekende ${gr('y')}-waarde, en <strong>los dan op deur inverse bewerkings te gebruik</strong> (doen die teenoorgestelde van wat met x gedoen is).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Gebruik die vergelyking ${or('y = 4x − 3')} om y te vind wanneer ${bl('x = 6')}.`,
          answer: `${gr('y = 21')}`,
          steps: [
            `Skryf die ${or('vergelyking')}: ${or('y = 4x − 3')}.`,
            `Vervang ${bl('x = 6')}: y = 4(${bl('6')}) − 3.`,
            `Bereken: y = 24 − 3 = ${gr('21')}.`,
            `<strong>Antwoord:</strong> Wanneer ${bl('x = 6')}, is ${gr('y = 21')} ✓`,
          ],
        },
        {
          question: `Gebruik die vergelyking ${or('y = 2x + 7')} om x te vind wanneer ${gr('y = 19')}.`,
          answer: `${bl('x = 6')}`,
          steps: [
            `Skryf die ${or('vergelyking')} met die bekende ${gr('uitsetwaarde')}: ${or('19 = 2x + 7')}.`,
            `<strong>Trek 7 van albei kante af:</strong> 19 − 7 = 2x → 12 = 2x.`,
            `<strong>Deel albei kante deur 2:</strong> ${bl('x')} = 12 ÷ 2 = ${bl('6')}.`,
            `<strong>Kontroleer:</strong> y = 2(${bl('6')}) + 7 = 12 + 7 = ${gr('19')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute input values into an equation to find output values, and how to use inverse operations to find input values from a given output" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Flow diagram showing the equation y=4x-3 with input value x in blue, the equation operation in orange, and output value y in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENT FORMS OF A RELATIONSHIP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-forms',
      title: 'Ekwivalente Vorme van ʼn Verwantskap',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal, interpreteer en regverdig <strong>ekwivalensie</strong> van verskillende beskrywings van dieselfde verwantskap, voorgestel <strong>verbaal</strong>, in <strong>vloeidiagramme</strong>, in <strong>tabelle</strong>, deur <strong>formules</strong>, en nou ook deur <strong>vergelykings</strong>. Al hierdie vorme beskryf presies dieselfde reël.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('verbale beskrywing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tabelwaardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `</div>` +

        // ── Five forms ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vyf ekwivalente vorme van ʼn verwantskap</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verbale beskrywing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die reël in woorde geskryf, bv. "vermenigvuldig met 3 en tel dan 5 by."</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Vloeidiagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Diagram wat die inset, die toegepaste bewerking(s), en die uitset wys.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tabel van waardes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Tabel wat ooreenstemmende ${gr('x- en y-waardes')} vir die verwantskap wys.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Formule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Simboliese reël soos y = 3x + 5, wat algebraïese notasie gebruik.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('vergelyking')}-vorm noem albei veranderlikes eksplisiet: ${or('y = 3x + 5')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie: beweeg tussen vorme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Verbaal → Vergelyking:')} Laat x = inset en y = uitset. Vertaal elke bewerking in algebraïese notasie in volgorde.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Tabel → Vergelyking:')} Kyk na die ${gr('verskille')} in y-waardes. As dit konstant is, is die reël lineêr. Probeer y = (verskil)x + c en los op vir c deur enige ${gr('tabelwaarde')} te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Kontroleer:')} Verifieer altyd jou ${or('vergelyking')} deur twee of meer x-waardes uit die tabel te vervang en te bevestig dat die y-waardes ooreenstem.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Alle vorme is ewe geldig</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${bl('Verbale beskrywing')}, ʼn ${gr('tabel van waardes')}, en ʼn ${or('vergelyking')} kan almal <em>dieselfde</em> verwantskap beskryf. Om tussen hierdie vorme te kan beweeg — en te regverdig dat hulle ekwivalent is — is ʼn kernvaardigheid in hierdie afdeling.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `ʼn Verwantskap word ${bl('verbaal')} beskryf as "vermenigvuldig met 3 en tel 5 by". Skryf dit as ʼn ${or('vergelyking')}.`,
          answer: `${or('y = 3x + 5')}`,
          steps: [
            `Laat die ${bl('inset')} x wees en die uitset y.`,
            `Vertaal die ${bl('verbale beskrywing')} stap vir stap: "vermenigvuldig met 3" → 3x; "tel 5 by" → + 5.`,
            `Skryf die ${or('vergelyking')}: ${or('y = 3x + 5')}.`,
            `<strong>Kontroleer:</strong> As x = 2, y = 3(2) + 5 = 11. Verbaal: "vermenigvuldig 2 met 3 = 6, tel 5 by = 11" ✓`,
          ],
        },
        {
          question: `Sipho het ʼn ${gr('tabel')} wat x: 1, 2, 3, 4 en y: 6, 9, 12, 15 wys. Skryf die ${or('vergelyking')} wat hierdie verwantskap beskryf.`,
          answer: `${or('y = 3x + 3')}`,
          steps: [
            `Kyk na die ${gr('verskille')} in y: 9 − 6 = 3, 12 − 9 = 3, 15 − 12 = 3. Die verskille is konstant op ${gr('3')}, dus is die reël lineêr.`,
            `Probeer ${or('y = 3x + c')}: vervang ${gr('x = 1, y = 6')} → 6 = 3(1) + c → c = 3.`,
            `<strong>Vergelyking:</strong> ${or('y = 3x + 3')}.`,
            `<strong>Kontroleer:</strong> x = 1: y = 3 + 3 = ${gr('6')} ✓ · x = 2: y = 6 + 3 = ${gr('9')} ✓ · x = 4: y = 12 + 3 = ${gr('15')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert a verbal description of a relationship into an equation, and how to find an equation from a table of values" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side comparison of five equivalent forms of the relationship y=3x+5: verbal description in blue, flow diagram, table of values in green, formula, and equation in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GENERATING TABLES OF ORDERED PAIRS USING SUBSTITUTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ordered-pairs-substitution',
      title: 'Tabelle van Geordende Pare Genereer deur Vervanging',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik <strong>vervanging</strong> in vergelykings om <strong>tabelle van geordende pare</strong> te genereer. Elke geordende paar het die vorm (x, y). Hierdie pare kan later as <strong>punte</strong> op ʼn Cartesiese vlak <strong>gestip</strong> word, wat die grafiek van die verwantskap lewer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geordende pare')}</span>` +
        `</div>` +

        // ── What is an ordered pair ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Geordende pare</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:10px;">ʼn <strong>Geordende paar</strong> word geskryf as ${or('(x, y)')}, waar ${bl('x')} die insetwaarde is en ${gr('y')} die uitsetwaarde. Die volgorde is belangrik — ${bl('x')} kom altyd eerste.</p>` +
        `<p style="margin:0;color:#6b7280;font-size:14px;">Voorbeeld: Vir y = 2x − 1 met ${bl('x = 3')}: y = 2(3) − 1 = ${gr('5')}. Geordende paar: ${or('(3, 5)')}</p>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn tabel van geordende pare te genereer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Lys die x-waardes')} wat in die vraag gegee word.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vervang</strong> elke ${bl('x-waarde')} in die vergelyking en bereken die ooreenstemmende ${gr('y-waarde')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elke resultaat as ʼn ${or('geordende paar (x, y)')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Negatiewe x-waardes</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wees versigtig wanneer jy negatiewe ${bl('x-waardes')} vervang. Byvoorbeeld, as x = −1 en die vergelyking is y = −x + 4: y = −(−1) + 4 = 1 + 4 = ${gr('5')}. Om ʼn negatiewe teken van ʼn negatiewe waarde te verwyder, maak dit <strong>positief</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Gebruik ${or('y = 2x − 1')} om ʼn tabel van geordende pare te genereer vir ${bl('x = 0, 1, 2, 3')}.`,
          answer: `${or('(0, −1), (1, 1), (2, 3), (3, 5)')}`,
          steps: [
            `Skryf die vergelyking: ${or('y = 2x − 1')}.`,
            `${bl('x = 0')}: y = 2(0) − 1 = ${gr('−1')}. Geordende paar: ${or('(0, −1)')}.`,
            `${bl('x = 1')}: y = 2(1) − 1 = ${gr('1')}. Geordende paar: ${or('(1, 1)')}.`,
            `${bl('x = 2')}: y = 2(2) − 1 = ${gr('3')}. Geordende paar: ${or('(2, 3)')}.`,
            `${bl('x = 3')}: y = 2(3) − 1 = ${gr('5')}. Geordende paar: ${or('(3, 5)')}.`,
            `<strong>Antwoord:</strong> ${or('(0, −1), (1, 1), (2, 3), (3, 5)')} ✓`,
          ],
        },
        {
          question: `Lerato gebruik ${or('y = −x + 4')} vir ${bl('x = −1, 0, 1, 2')}. Genereer die geordende pare.`,
          answer: `${or('(−1, 5), (0, 4), (1, 3), (2, 2)')}`,
          steps: [
            `Skryf die vergelyking: ${or('y = −x + 4')}.`,
            `${bl('x = −1')}: y = −(−1) + 4 = 1 + 4 = ${gr('5')}. Geordende paar: ${or('(−1, 5)')}.`,
            `${bl('x = 0')}: y = −(0) + 4 = ${gr('4')}. Geordende paar: ${or('(0, 4)')}.`,
            `${bl('x = 1')}: y = −(1) + 4 = ${gr('3')}. Geordende paar: ${or('(1, 3)')}.`,
            `${bl('x = 2')}: y = −(2) + 4 = ${gr('2')}. Geordende paar: ${or('(2, 2)')}.`,
            `<strong>Antwoord:</strong> ${or('(−1, 5), (0, 4), (1, 3), (2, 2)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to substitute x-values into an equation step by step and write the results as ordered pairs in a table" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table of ordered pairs for y=2x-1 with x-values in blue and y-values in green, and the resulting ordered pairs in orange ready to be plotted on a Cartesian plane" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik y = 5x + 2 om y te vind wanneer x = 4.',
      answer: '22',
      checkMode: 'auto',
      correctAnswer: '22',
      explanation: 'Vervang x = 4: y = 5(4) + 2 = 20 + 2 = 22 ✓',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik y = 3x − 7 om x te vind wanneer y = 11.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: '11 = 3x − 7 → 3x = 11 + 7 = 18 → x = 18 ÷ 3 = 6 ✓',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê dat, met y = 2x + 9, wanneer y = 21, x = 15 is. Is hy korrek? Verduidelik.',
      answer: 'Nee — 21 = 2x + 9 gee 2x = 12, dus x = 6, nie 15 nie.',
      checkMode: 'self',
    },

    // ── Q4 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "ʼn Verwantskap word beskryf as 'trek 4 af en vermenigvuldig dan met 2'. Skryf dit as ʼn vergelyking.",
      answer: 'y = 2(x − 4)',
      checkMode: 'auto',
      correctAnswer: 'y=2(x-4)',
      correctAnswers: ['y=2(x-4)', 'y = 2(x - 4)', 'y=2(x−4)', 'y = 2(x − 4)'],
      explanation: 'Laat x = inset en y = uitset. "Trek 4 af": (x − 4). "Vermenigvuldig dan met 2": y = 2(x − 4) ✓',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 7, 10, 13, 16. Vind die vergelyking.',
      answer: 'y = 3x + 4',
      checkMode: 'auto',
      correctAnswer: 'y=3x+4',
      correctAnswers: ['y=3x+4', 'y = 3x + 4'],
      explanation: 'Verskille in y: 10−7=3, 13−10=3 — konstante verskil van 3. Probeer y = 3x + c: x=1, y=7 → 7 = 3(1) + c → c = 4. Vergelyking: y = 3x + 4. Kontroleer: x=4: y = 12 + 4 = 16 ✓',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het ʼn tabel wat x: 2, 4, 6, 8 en y: 9, 17, 25, 33 wys. Vind die vergelyking.',
      answer: 'Die verskille is 8 vir elke toename van 2 in x, wat beteken die koers is 4 per eenheid. Vergelyking: y = 4x + 1.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Genereer ʼn tabel van geordende pare deur y = 3x + 1 te gebruik vir x = 0, 1, 2, 3.',
      answer: '(0, 1), (1, 4), (2, 7), (3, 10).',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik y = −2x + 6 om y te vind wanneer x = 3.',
      answer: '0',
      checkMode: 'auto',
      correctAnswer: '0',
      explanation: 'Vervang x = 3: y = −2(3) + 6 = −6 + 6 = 0 ✓',
    },

    // ── Q9 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo genereer geordende pare deur y = x² + 1 te gebruik vir x = 0, 1, 2, 3 en kry (0, 1), (1, 2), (2, 5), (3, 10). Kontroleer sy tabel.',
      answer: 'Korrek — deur elke x-waarde in x² + 1 te vervang, kry jy die gelyste y-waardes.',
      checkMode: 'self',
    },

    // ── Q10 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik y = 4x − 9 om x te vind wanneer y = 15.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: '15 = 4x − 9 → 4x = 15 + 9 = 24 → x = 24 ÷ 4 = 6 ✓',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die vergelyking y = 5x − 2 en die tabel x: 1, 2, 3 — y: 3, 8, 13 beskryf dieselfde verwantskap. Is sy korrek? Verduidelik.',
      answer: 'Nee — deur x = 1 in y = 5x − 2 te vervang, kry jy y = 3 ✓, en x = 2 gee y = 8 ✓, en x = 3 gee y = 13 ✓. Al die waardes stem eintlik ooreen, dus is sy korrek.',
      checkMode: 'self',
    },

    // ── Q12 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Genereer geordende pare deur y = −x − 3 te gebruik vir x = −2, −1, 0, 1.',
      answer: '(-2,-1),(-1,-2),(0,-3),(1,-4)',
      checkMode: 'auto',
      correctAnswer: '(-2,-1),(-1,-2),(0,-3),(1,-4)',
      correctAnswers: [
        '(-2,-1),(-1,-2),(0,-3),(1,-4)',
        '(−2,−1),(−1,−2),(0,−3),(1,−4)',
        '(-2, -1), (-1, -2), (0, -3), (1, -4)',
        '(−2, −1), (−1, −2), (0, −3), (1, −4)',
      ],
      explanation: 'x=−2: y=−(−2)−3=2−3=−1 → (−2,−1). x=−1: y=−(−1)−3=1−3=−2 → (−1,−2). x=0: y=0−3=−3 → (0,−3). x=1: y=−1−3=−4 → (1,−4) ✓',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho se verwantskap word verbaal beskryf as 'verdubbel die inset, en trek dan 5 af'. Skryf die vergelyking en vind y wanneer x = 10.",
      answer: 'y = 2x − 5, y = 15',
      checkMode: 'self',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Tabel wys x: 0, 3, 6, 9 en y: 2, 11, 20, 29. Vind die vergelyking.',
      answer: 'y = 3x + 2',
      checkMode: 'auto',
      correctAnswer: 'y=3x+2',
      correctAnswers: ['y=3x+2', 'y = 3x + 2'],
      explanation: 'Verskille in y: 11−2=9, 20−11=9, 29−20=9 — maar x neem elke keer met 3 toe. Koers = 9÷3 = 3 per eenheid van x. Probeer y = 3x + c: x=0, y=2 → c=2. Vergelyking: y = 3x + 2. Kontroleer: x=9: y=27+2=29 ✓',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê enige tabel van waardes kan deur presies een vergelyking beskryf word. Is sy korrek? Verduidelik.',
      answer: 'Nee — verskillende vergelykings of reëls kan soms met ʼn beperkte stel gegewe punte ooreenstem, veral by nie-lineêre verwantskappe, tensy meer terme ʼn enkele konsekwente patroon bevestig.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het funksies en verwantskappe bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
