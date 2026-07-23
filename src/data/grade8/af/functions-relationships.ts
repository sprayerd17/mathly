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
        'Kort video wat wys hoe om insetwaardes in ʼn vergelyking te vervang om uitsetwaardes te vind, en hoe om inverse bewerkings te gebruik om insetwaardes vanaf ʼn gegewe uitset te vind',

      diagramPlaceholder:
        'Vloeidiagram wat insetwaarde x = 6 in blou, die bewerking ×4, −3 in oranje, en uitsetwaarde y = 21 in groen wys',

      diagramSvg:
        '<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg"><defs><marker id="fnarrow1af" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0f1f3d"/></marker></defs><rect x="10" y="35" width="60" height="50" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><text x="40" y="53" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">inset</text><text x="40" y="70" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">x = 6</text><line x1="70" y1="60" x2="100" y2="60" stroke="#0f1f3d" stroke-width="2.5" marker-end="url(#fnarrow1af)"/><rect x="105" y="35" width="60" height="50" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><text x="135" y="53" font-size="10.5" fill="#ea580c" font-weight="700" text-anchor="middle">×4, −3</text><text x="135" y="70" font-size="9" fill="#ea580c" text-anchor="middle">y = 4x−3</text><line x1="165" y1="60" x2="195" y2="60" stroke="#0f1f3d" stroke-width="2.5" marker-end="url(#fnarrow1af)"/><rect x="200" y="35" width="55" height="50" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/><text x="227" y="53" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">uitset</text><text x="227" y="70" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">y = 21</text></svg>',
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
        'Kort video wat wys hoe om ʼn verbale beskrywing van ʼn verwantskap na ʼn vergelyking om te skakel, en hoe om ʼn vergelyking uit ʼn tabel van waardes te vind',
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
        'Kort video wat wys hoe om x-waardes stap vir stap in ʼn vergelyking te vervang en die resultate as geordende pare in ʼn tabel te skryf',

      diagramPlaceholder:
        'Tabel van geordende pare vir y = 2x − 1 met x-waardes in blou en y-waardes in groen, en die resulterende geordende pare in oranje gestip op ʼn Cartesiese vlak',

      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">y = 2x − 1</text><text x="18" y="33" font-size="10" fill="#2563eb" font-weight="700">x:</text><text x="55" y="33" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">0</text><text x="95" y="33" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="135" y="33" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="175" y="33" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="18" y="49" font-size="10" fill="#16a34a" font-weight="700">y:</text><text x="55" y="49" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">−1</text><text x="95" y="49" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">1</text><text x="135" y="49" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">3</text><text x="175" y="49" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">5</text><line x1="30" y1="159" x2="200" y2="159" stroke="#0f1f3d" stroke-width="2"/><line x1="64" y1="65" x2="64" y2="190" stroke="#0f1f3d" stroke-width="2"/><circle cx="64" cy="175" r="4.5" fill="#ea580c"/><circle cx="98" cy="143" r="4.5" fill="#ea580c"/><circle cx="132" cy="112" r="4.5" fill="#ea580c"/><circle cx="166" cy="81" r="4.5" fill="#ea580c"/><text x="64" y="189" font-size="8" fill="#ea580c" text-anchor="middle">(0,−1)</text><text x="98" y="135" font-size="8" fill="#ea580c" text-anchor="middle">(1,1)</text><text x="132" y="104" font-size="8" fill="#ea580c" text-anchor="middle">(2,3)</text><text x="166" y="73" font-size="8" fill="#ea580c" text-anchor="middle">(3,5)</text><text x="204" y="163" font-size="9" fill="#374151">x</text><text x="58" y="62" font-size="9" fill="#374151">y</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-2 Vervang om y te vind gegewe x | 3-5 Los op vir x gegewe y
    // (inverse bewerkings) | 6-8 Verbaal <-> vergelyking vertaling | 9-11 Vind
    // vergelyking uit tabel van waardes | 12-14 Vloeidiagramme/funksiemasjiene
    // [DIAGRAM-FLAGGED] | 15-17 Geordende pare deur vervanging, ingesluit
    // negatiewe waardes en 'n nie-lineêre reël | 18-19 Foutopsporing +
    // multi-stap woordprobleem
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Vervang om y te vind gegewe x ─────────────────────────────
        { difficulty: 'Easy', question: 'Gebruik y = 6x − 4 om y te vind wanneer x = 5.', answer: '26', checkMode: 'auto', correctAnswer: '26', explanation: 'Vervang x = 5: y = 6(5) − 4 = 30 − 4 = 26 ✓' },
        { difficulty: 'Easy', question: 'Gebruik y = −3x + 10 om y te vind wanneer x = 4.', answer: '-2', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], explanation: 'Vervang x = 4: y = −3(4) + 10 = −12 + 10 = −2 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 2(x + 3) − 1 om y te vind wanneer x = 7.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Vervang x = 7: y = 2(7 + 3) − 1 = 2(10) − 1 = 20 − 1 = 19 ✓' },

        // ── Blok 2: Los op vir x gegewe y (inverse bewerkings) ────────────────
        { difficulty: 'Medium', question: 'Gebruik y = 3x + 8 om x te vind wanneer y = 29.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '29 = 3x + 8 → 3x = 29 − 8 = 21 → x = 21 ÷ 3 = 7 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 5x − 12 om x te vind wanneer y = 33.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '33 = 5x − 12 → 5x = 33 + 12 = 45 → x = 45 ÷ 5 = 9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik y = −2x + 7 om x te vind wanneer y = −11.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '−11 = −2x + 7 → −2x = −11 − 7 = −18 → x = −18 ÷ −2 = 9 ✓' },

        // ── Blok 3: Verbaal <-> vergelyking vertaling ─────────────────────────
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'vermenigvuldig die inset met 4, trek dan 6 af'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 9.", answer: 'y = 4x − 6, y = 30', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'tel 5 by die inset, vermenigvuldig dan met 3'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 2.", answer: 'y = 3(x + 5), y = 21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', 'y=3(x+5), y=21', 'y = 3(x + 5), y = 21'], explanation: "Laat x = inset, y = uitset. 'Tel 5 by': (x + 5). 'Vermenigvuldig met 3': y = 3(x + 5). By x = 2: y = 3(2 + 5) = 3(7) = 21 ✓" },
        { difficulty: 'Hard', question: "Bongani sê die vergelyking y = 2x + 9 beteken 'tel 9 by die inset, verdubbel dit dan'. Toets sy verbale beskrywing teen die vergelyking. Is hy korrek?", answer: "Nee — 'tel 9 by, verdubbel dan' gee 2(x + 9) = 2x + 18, wat ʼn ander vergelyking is. Die korrekte verbale beskrywing vir y = 2x + 9 is 'verdubbel die inset, tel dan 9 by'.", checkMode: 'self' },

        // ── Blok 4: Vind vergelyking uit tabel van waardes ────────────────────
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 8, 11, 14, 17. Vind die vergelyking.', answer: 'y = 3x + 5', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], explanation: 'Verskille in y: 11−8=3, 14−11=3, 17−14=3 — konstante verskil van 3. Probeer y = 3x + c: x=1, y=8 → 8 = 3(1) + c → c = 5. Vergelyking: y = 3x + 5. Kontroleer: x=4: y = 12 + 5 = 17 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tabel wys x: 2, 4, 6, 8 en y: 5, 9, 13, 17. Vind die vergelyking.', answer: 'y = 2x + 1', checkMode: 'auto', correctAnswer: 'y=2x+1', correctAnswers: ['y=2x+1', 'y = 2x + 1'], explanation: 'Die verskille is 4 vir elke toename van 2 in x, dus is die koers 4 ÷ 2 = 2 per eenheid. Probeer y = 2x + c: x=2, y=5 → 5 = 2(2) + c → c = 1. Vergelyking: y = 2x + 1. Kontroleer: x=8: y = 16 + 1 = 17 ✓' },
        { difficulty: 'Hard', question: 'ʼn Loodgieter vra ʼn uitroepfooi van R150 plus R80 per uur, deur die reël koste = 80h + 150 te gebruik. Die tabel wys ure: 1, 2, 3 en koste: R230, R310, R390. Gebruik die reël om die koste vir 5 ure te vind.', answer: '550', checkMode: 'auto', correctAnswer: '550', correctAnswers: ['550', 'R550'], explanation: 'koste = 80(5) + 150 = 400 + 150 = R550. Kontroleer teen die tabel: 80(1)+150=230 ✓, 80(2)+150=310 ✓, 80(3)+150=390 ✓' },

        // ── Blok 5: Vloeidiagramme/funksiemasjiene [DIAGRAM-FLAGGED] ──────────
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 5 → ×3 → +2 → uitset. Vind die uitset.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: '5 × 3 = 15, dan 15 + 2 = 17 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">5</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → −4 → ×2 → uitset 10. Vind die inset x.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '(x − 4) × 2 = 10 → x − 4 = 5 → x = 9. Kontroleer: (9 − 4) × 2 = 5 × 2 = 10 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">10</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×4 → −3 → uitset toe. Die tabel wys: inset 2 gee uitset 5, en inset 5 gee uitset 17. Vind die uitset vir inset 8.', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Reël: uitset = 4 × inset − 3. Kontroleer: 4(2)−3=5 ✓, 4(5)−3=17 ✓. Inset 8: 4(8) − 3 = 32 − 3 = 29 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">5</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">17</text></svg>' },

        // ── Blok 6: Geordende pare deur vervanging, ingesluit negatiewe ───────
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = 3x − 2 te gebruik vir x = 0, 1, 2, 3.', answer: '(0,-2),(1,1),(2,4),(3,7)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Genereer geordende pare deur y = −2x + 5 te gebruik vir x = −1, 0, 1, 2.', answer: '(-1,7),(0,5),(1,3),(2,1)', checkMode: 'auto', correctAnswer: '(-1,7),(0,5),(1,3),(2,1)', correctAnswers: ['(-1,7),(0,5),(1,3),(2,1)', '(−1,7),(0,5),(1,3),(2,1)', '(-1, 7), (0, 5), (1, 3), (2, 1)', '(−1, 7), (0, 5), (1, 3), (2, 1)'], explanation: 'x=−1: y=−2(−1)+5=2+5=7 → (−1,7). x=0: y=5 → (0,5). x=1: y=−2+5=3 → (1,3). x=2: y=−4+5=1 → (2,1) ✓' },
        { difficulty: 'Hard', question: 'Genereer geordende pare deur y = x² − 2 te gebruik vir x = −2, −1, 0, 1.', answer: '(-2,2),(-1,-1),(0,-2),(1,-1)', checkMode: 'self' },

        // ── Blok 7: Foutopsporing + multi-stap woordprobleem ──────────────────
        { difficulty: 'Hard', question: 'Thabo genereer geordende pare deur y = 2x + 3 te gebruik vir x = −1, 0, 1 en kry (−1, 1), (0, 3), (1, 6). Kontroleer sy tabel en verbeter enige foute.', answer: 'x=−1: y=2(−1)+3=1 ✓. x=0: y=3 ✓. x=1: y=2(1)+3=5, maar Thabo het 6 geskryf — hierdie paar is verkeerd. Die korrekte paar is (1, 5), nie (1, 6) nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Selfoonplan kos ʼn maandelikse basiese fooi van R60 plus R2 per minuut gebruik, deur die reël koste = 2m + 60 te gebruik. a) Vind die koste vir 45 minute. b) As Zanele R190 vir die maand gefaktureer is, hoeveel minute het sy gebruik?", answer: 'a) koste = 2(45) + 60 = 90 + 60 = R150. b) 190 = 2m + 60 → 2m = 130 → m = 65 minute.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vervanging, inverse bewerkings, ekwivalente vorme en geordende pare bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn goeie begrip van funksies en verwantskappe. Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor vergelykings en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, nuwe bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Vervang om y te vind gegewe x ─────────────────────────────
        { difficulty: 'Easy', question: 'Gebruik y = 7x − 5 om y te vind wanneer x = 4.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Vervang x = 4: y = 7(4) − 5 = 28 − 5 = 23 ✓' },
        { difficulty: 'Easy', question: 'Gebruik y = −4x + 15 om y te vind wanneer x = 3.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Vervang x = 3: y = −4(3) + 15 = −12 + 15 = 3 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 3(x + 2) − 4 om y te vind wanneer x = 6.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Vervang x = 6: y = 3(6 + 2) − 4 = 3(8) − 4 = 24 − 4 = 20 ✓' },

        // ── Blok 2: Los op vir x gegewe y (inverse bewerkings) ────────────────
        { difficulty: 'Medium', question: 'Gebruik y = 4x + 6 om x te vind wanneer y = 38.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '38 = 4x + 6 → 4x = 38 − 6 = 32 → x = 32 ÷ 4 = 8 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 6x − 15 om x te vind wanneer y = 45.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '45 = 6x − 15 → 6x = 45 + 15 = 60 → x = 60 ÷ 6 = 10 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik y = −3x + 9 om x te vind wanneer y = −15.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '−15 = −3x + 9 → −3x = −15 − 9 = −24 → x = −24 ÷ −3 = 8 ✓' },

        // ── Blok 3: Verbaal <-> vergelyking vertaling ─────────────────────────
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'vermenigvuldig die inset met 5, trek dan 8 af'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 7.", answer: 'y = 5x − 8, y = 27', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'tel 3 by die inset, vermenigvuldig dan met 4'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 5.", answer: 'y = 4(x + 3), y = 32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', 'y=4(x+3), y=32', 'y = 4(x + 3), y = 32'], explanation: "Laat x = inset, y = uitset. 'Tel 3 by': (x + 3). 'Vermenigvuldig met 4': y = 4(x + 3). By x = 5: y = 4(5 + 3) = 4(8) = 32 ✓" },
        { difficulty: 'Hard', question: "Amahle sê die vergelyking y = 3x + 7 beteken 'tel 7 by die inset, verdriedubbel dit dan'. Toets haar verbale beskrywing teen die vergelyking. Is sy korrek?", answer: "Nee — 'tel 7 by, verdriedubbel dan' gee 3(x + 7) = 3x + 21, wat ʼn ander vergelyking is. Die korrekte verbale beskrywing vir y = 3x + 7 is 'verdriedubbel die inset, tel dan 7 by'.", checkMode: 'self' },

        // ── Blok 4: Vind vergelyking uit tabel van waardes ────────────────────
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 6, 10, 14, 18. Vind die vergelyking.', answer: 'y = 4x + 2', checkMode: 'auto', correctAnswer: 'y=4x+2', correctAnswers: ['y=4x+2', 'y = 4x + 2'], explanation: 'Verskille in y: 10−6=4, 14−10=4, 18−14=4 — konstante verskil van 4. Probeer y = 4x + c: x=1, y=6 → 6 = 4(1) + c → c = 2. Vergelyking: y = 4x + 2. Kontroleer: x=4: y = 16 + 2 = 18 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tabel wys x: 2, 4, 6, 8 en y: 7, 13, 19, 25. Vind die vergelyking.', answer: 'y = 3x + 1', checkMode: 'auto', correctAnswer: 'y=3x+1', correctAnswers: ['y=3x+1', 'y = 3x + 1'], explanation: 'Die verskille is 6 vir elke toename van 2 in x, dus is die koers 6 ÷ 2 = 3 per eenheid. Probeer y = 3x + c: x=2, y=7 → 7 = 3(2) + c → c = 1. Vergelyking: y = 3x + 1. Kontroleer: x=8: y = 24 + 1 = 25 ✓' },
        { difficulty: 'Hard', question: 'ʼn Elektrisiën vra ʼn uitroepfooi van R120 plus R90 per uur, deur die reël koste = 90h + 120 te gebruik. Die tabel wys ure: 1, 2, 3 en koste: R210, R300, R390. Gebruik die reël om die koste vir 6 ure te vind.', answer: '660', checkMode: 'auto', correctAnswer: '660', correctAnswers: ['660', 'R660'], explanation: 'koste = 90(6) + 120 = 540 + 120 = R660. Kontroleer teen die tabel: 90(1)+120=210 ✓, 90(2)+120=300 ✓, 90(3)+120=390 ✓' },

        // ── Blok 5: Vloeidiagramme/funksiemasjiene [DIAGRAM-FLAGGED] ──────────
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 4 → ×5 → −3 → uitset. Vind die uitset.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: '4 × 5 = 20, dan 20 − 3 = 17 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">4</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → −6 → ×3 → uitset 21. Vind die inset x.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '(x − 6) × 3 = 21 → x − 6 = 7 → x = 13. Kontroleer: (13 − 6) × 3 = 7 × 3 = 21 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">−6</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">21</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×3 → +5 → uitset toe. Die tabel wys: inset 3 gee uitset 14, en inset 6 gee uitset 23. Vind die uitset vir inset 9.', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'Reël: uitset = 3 × inset + 5. Kontroleer: 3(3)+5=14 ✓, 3(6)+5=23 ✓. Inset 9: 3(9) + 5 = 27 + 5 = 32 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×3</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+5</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">14</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">6</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },

        // ── Blok 6: Geordende pare deur vervanging, ingesluit negatiewe ───────
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = 4x − 3 te gebruik vir x = 0, 1, 2, 3.', answer: '(0,-3),(1,1),(2,5),(3,9)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Genereer geordende pare deur y = −3x + 4 te gebruik vir x = −1, 0, 1, 2.', answer: '(-1,7),(0,4),(1,1),(2,-2)', checkMode: 'auto', correctAnswer: '(-1,7),(0,4),(1,1),(2,-2)', correctAnswers: ['(-1,7),(0,4),(1,1),(2,-2)', '(−1,7),(0,4),(1,1),(2,−2)', '(-1, 7), (0, 4), (1, 1), (2, -2)', '(−1, 7), (0, 4), (1, 1), (2, −2)'], explanation: 'x=−1: y=−3(−1)+4=3+4=7 → (−1,7). x=0: y=4 → (0,4). x=1: y=−3+4=1 → (1,1). x=2: y=−6+4=−2 → (2,−2) ✓' },
        { difficulty: 'Hard', question: 'Genereer geordende pare deur y = x² + 1 te gebruik vir x = −2, −1, 0, 1.', answer: '(-2,5),(-1,2),(0,1),(1,2)', checkMode: 'self' },

        // ── Blok 7: Foutopsporing + multi-stap woordprobleem ──────────────────
        { difficulty: 'Hard', question: 'Lerato genereer geordende pare deur y = 3x − 1 te gebruik vir x = −1, 0, 1 en kry (−1, −4), (0, 1), (1, 2). Kontroleer haar tabel en verbeter enige foute.', answer: 'x=−1: y=3(−1)−1=−4 ✓. x=0: y=3(0)−1=−1, maar Lerato het 1 geskryf — hierdie paar is verkeerd (tekenfout). Die korrekte paar is (0, −1), nie (0, 1) nie. x=1: y=3(1)−1=2 ✓.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Loodgietersoproep kos ʼn fooi van R90 plus R45 per uur, deur die reël koste = 45h + 90 te gebruik. a) Vind die koste vir 3 ure. b) As Sam R360 gefaktureer is, hoeveel ure se werk is gedoen?", answer: 'a) koste = 45(3) + 90 = 135 + 90 = R225. b) 360 = 45h + 90 → 45h = 270 → h = 6 ure.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vervanging, inverse bewerkings, ekwivalente vorme en geordende pare bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn goeie begrip van funksies en verwantskappe. Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor vergelykings en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit as Stel 1/2, nuwe bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Vervang om y te vind gegewe x ─────────────────────────────
        { difficulty: 'Easy', question: 'Gebruik y = 5x − 9 om y te vind wanneer x = 6.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Vervang x = 6: y = 5(6) − 9 = 30 − 9 = 21 ✓' },
        { difficulty: 'Easy', question: 'Gebruik y = −2x + 18 om y te vind wanneer x = 5.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Vervang x = 5: y = −2(5) + 18 = −10 + 18 = 8 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 4(x − 1) + 3 om y te vind wanneer x = 5.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: 'Vervang x = 5: y = 4(5 − 1) + 3 = 4(4) + 3 = 16 + 3 = 19 ✓' },

        // ── Blok 2: Los op vir x gegewe y (inverse bewerkings) ────────────────
        { difficulty: 'Medium', question: 'Gebruik y = 7x + 2 om x te vind wanneer y = 44.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '44 = 7x + 2 → 7x = 44 − 2 = 42 → x = 42 ÷ 7 = 6 ✓' },
        { difficulty: 'Medium', question: 'Gebruik y = 8x − 20 om x te vind wanneer y = 44.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '44 = 8x − 20 → 8x = 44 + 20 = 64 → x = 64 ÷ 8 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik y = −5x + 6 om x te vind wanneer y = −19.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '−19 = −5x + 6 → −5x = −19 − 6 = −25 → x = −25 ÷ −5 = 5 ✓' },

        // ── Blok 3: Verbaal <-> vergelyking vertaling ─────────────────────────
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'vermenigvuldig die inset met 6, trek dan 10 af'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 8.", answer: 'y = 6x − 10, y = 38', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Verwantskap word beskryf as 'tel 7 by die inset, vermenigvuldig dan met 2'. Skryf dit as ʼn vergelyking, en vind dan y wanneer x = 6.", answer: 'y = 2(x + 7), y = 26', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', 'y=2(x+7), y=26', 'y = 2(x + 7), y = 26'], explanation: "Laat x = inset, y = uitset. 'Tel 7 by': (x + 7). 'Vermenigvuldig met 2': y = 2(x + 7). By x = 6: y = 2(6 + 7) = 2(13) = 26 ✓" },
        { difficulty: 'Hard', question: "Sipho sê die vergelyking y = 4x + 5 beteken 'tel 5 by die inset, vermenigvuldig dan met 4'. Toets sy verbale beskrywing teen die vergelyking. Is hy korrek?", answer: "Nee — 'tel 5 by, vermenigvuldig dan met 4' gee 4(x + 5) = 4x + 20, wat ʼn ander vergelyking is. Die korrekte verbale beskrywing vir y = 4x + 5 is 'vermenigvuldig die inset met 4, tel dan 5 by'.", checkMode: 'self' },

        // ── Blok 4: Vind vergelyking uit tabel van waardes ────────────────────
        { difficulty: 'Medium', question: 'ʼn Tabel wys x: 1, 2, 3, 4 en y: 9, 13, 17, 21. Vind die vergelyking.', answer: 'y = 4x + 5', checkMode: 'auto', correctAnswer: 'y=4x+5', correctAnswers: ['y=4x+5', 'y = 4x + 5'], explanation: 'Verskille in y: 13−9=4, 17−13=4, 21−17=4 — konstante verskil van 4. Probeer y = 4x + c: x=1, y=9 → 9 = 4(1) + c → c = 5. Vergelyking: y = 4x + 5. Kontroleer: x=4: y = 16 + 5 = 21 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tabel wys x: 2, 4, 6, 8 en y: 11, 17, 23, 29. Vind die vergelyking.', answer: 'y = 3x + 5', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], explanation: 'Die verskille is 6 vir elke toename van 2 in x, dus is die koers 6 ÷ 2 = 3 per eenheid. Probeer y = 3x + c: x=2, y=11 → 11 = 3(2) + c → c = 5. Vergelyking: y = 3x + 5. Kontroleer: x=8: y = 24 + 5 = 29 ✓' },
        { difficulty: 'Hard', question: 'ʼn Huurmotor vra ʼn basiese tarief van R100 plus R70 per uur wagtyd, deur die reël koste = 70h + 100 te gebruik. Die tabel wys ure: 1, 2, 3 en koste: R170, R240, R310. Gebruik die reël om die koste vir 4 ure te vind.', answer: '380', checkMode: 'auto', correctAnswer: '380', correctAnswers: ['380', 'R380'], explanation: 'koste = 70(4) + 100 = 280 + 100 = R380. Kontroleer teen die tabel: 70(1)+100=170 ✓, 70(2)+100=240 ✓, 70(3)+100=310 ✓' },

        // ── Blok 5: Vloeidiagramme/funksiemasjiene [DIAGRAM-FLAGGED] ──────────
        { difficulty: 'Easy', question: 'ʼn Vloeidiagram, soos gewys, het inset 6 → ×2 → +7 → uitset. Vind die uitset.', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: '6 × 2 = 12, dan 12 + 7 = 19 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">6</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+7</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vloeidiagram, soos gewys, wys inset x → +5 → ×4 → uitset 48. Vind die inset x.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '(x + 5) × 4 = 48 → x + 5 = 12 → x = 7. Kontroleer: (7 + 5) × 4 = 12 × 4 = 48 ✓', diagramSvg: '<svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+5</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×4</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">48</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vloeidiagram, soos gewys, pas inset → ×2 → +9 → uitset toe. Die tabel wys: inset 4 gee uitset 17, en inset 7 gee uitset 23. Vind die uitset vir inset 10.', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Reël: uitset = 2 × inset + 9. Kontroleer: 2(4)+9=17 ✓, 2(7)+9=23 ✓. Inset 10: 2(10) + 9 = 20 + 9 = 29 ✓', diagramSvg: '<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg"><text x="25" y="12" text-anchor="middle" font-size="11" fill="#374151">inset</text><rect x="5" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="25" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><line x1="45" y1="40" x2="63" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="63,35 73,40 63,45" fill="#0f1f3d"/><rect x="75" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="95" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">×2</text><line x1="115" y1="40" x2="133" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="133,35 143,40 133,45" fill="#0f1f3d"/><rect x="145" y="20" width="40" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">+9</text><line x1="185" y1="40" x2="203" y2="40" stroke="#0f1f3d" stroke-width="2"/><polygon points="203,35 213,40 203,45" fill="#0f1f3d"/><text x="235" y="12" text-anchor="middle" font-size="11" fill="#374151">uitset</text><rect x="215" y="20" width="40" height="40" rx="6" fill="none" stroke="#ea580c" stroke-width="2"/><text x="235" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><text x="10" y="80" font-size="11" font-weight="700" fill="#374151">Bekende inset/uitset-pare:</text><rect x="30" y="88" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="75" y1="88" x2="75" y2="143" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="106" x2="120" y2="106" stroke="#0f1f3d" stroke-width="1"/><line x1="30" y1="124" x2="120" y2="124" stroke="#0f1f3d" stroke-width="1"/><text x="52" y="100" text-anchor="middle" font-size="10" fill="#374151">inset</text><text x="97" y="100" text-anchor="middle" font-size="10" fill="#374151">uitset</text><text x="52" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4</text><text x="97" y="119" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">17</text><text x="52" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">7</text><text x="97" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">23</text></svg>' },

        // ── Blok 6: Geordende pare deur vervanging, ingesluit negatiewe ───────
        { difficulty: 'Medium', question: 'Genereer ʼn tabel van geordende pare deur y = 5x − 4 te gebruik vir x = 0, 1, 2, 3.', answer: '(0,-4),(1,1),(2,6),(3,11)', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Genereer geordende pare deur y = −4x + 6 te gebruik vir x = −1, 0, 1, 2.', answer: '(-1,10),(0,6),(1,2),(2,-2)', checkMode: 'auto', correctAnswer: '(-1,10),(0,6),(1,2),(2,-2)', correctAnswers: ['(-1,10),(0,6),(1,2),(2,-2)', '(−1,10),(0,6),(1,2),(2,−2)', '(-1, 10), (0, 6), (1, 2), (2, -2)', '(−1, 10), (0, 6), (1, 2), (2, −2)'], explanation: 'x=−1: y=−4(−1)+6=4+6=10 → (−1,10). x=0: y=6 → (0,6). x=1: y=−4+6=2 → (1,2). x=2: y=−8+6=−2 → (2,−2) ✓' },
        { difficulty: 'Hard', question: 'Genereer geordende pare deur y = x² − 3 te gebruik vir x = −2, −1, 0, 1.', answer: '(-2,1),(-1,-2),(0,-3),(1,-2)', checkMode: 'self' },

        // ── Blok 7: Foutopsporing + multi-stap woordprobleem ──────────────────
        { difficulty: 'Hard', question: 'Sipho genereer geordende pare deur y = 4x + 2 te gebruik vir x = −1, 0, 1 en kry (−1, −2), (0, 2), (1, 7). Kontroleer sy tabel en verbeter enige foute.', answer: 'x=−1: y=4(−1)+2=−2 ✓. x=0: y=2 ✓. x=1: y=4(1)+2=6, maar Sipho het 7 geskryf — hierdie paar is verkeerd. Die korrekte paar is (1, 6), nie (1, 7) nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Motorhuur kos ʼn vaste fooi van R250 plus R120 per dag, deur die reël koste = 120d + 250 te gebruik. a) Vind die koste vir 4 dae. b) As Naledi R970 gefaktureer is, hoeveel dae het sy die motor gehuur?", answer: 'a) koste = 120(4) + 250 = 480 + 250 = R730. b) 970 = 120d + 250 → 120d = 720 → d = 6 dae.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vervanging, inverse bewerkings, ekwivalente vorme en geordende pare bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn goeie begrip van funksies en verwantskappe. Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor vergelykings en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },
  ],
}
