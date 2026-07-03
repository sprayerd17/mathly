import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (patterns roles) ─────────────────────────────────────────
// differences     → red     (#dc2626)
// pattern terms   → blue    (#2563eb)
// missing terms   → green   (#16a34a)
// rule            → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patrone en Funksies',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NUMERIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'numeric-patterns',
      title: 'Getalpatrone',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Getalpatroon</strong> is ʼn reeks getalle wat ʼn reël volg. Om die reël te vind, kyk ons hoe die getalle van een term na die volgende verander. Die reël kan behels om ʼn vaste getal by te tel, af te trek, mee te vermenigvuldig of deur te deel. In Graad 6 werk ons ook met patrone wat twee bewerkings behels — byvoorbeeld <em>vermenigvuldig met 2 en tel dan 1 by</em>. Ons beskryf die reël in woorde en gebruik dit om die patroon uit te brei en ontbrekende terme te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('patroonterme')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ontbrekende terme')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verskille')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke getal in die reeks. Die eerste getal word die 1ste term genoem, die tweede is die 2de term, ensovoorts.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die bewerking (of bewerkings) wat toegepas word om van een term na die volgende te gaan. Beskryf dit in woorde, bv. "tel elke keer 4 by".</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat wanneer opeenvolgende terme van mekaar afgetrek word. ʼn Konstante verskil beteken die reël behels om ʼn vaste getal by te tel of af te trek.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Ontbrekende term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Term wat in die reeks uitgelaat is. Gebruik die reël om dit te bereken en in te vul.</p>` +
        `</div>` +

        `</div>` +

        // ── Types of rules ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Soorte reëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong>ʼn Vaste getal bytel</strong> — elke term neem met dieselfde hoeveelheid toe. Die ${re('verskille')} tussen opeenvolgende terme is almal gelyk. Voorbeeld: ${bl('2')}, ${bl('5')}, ${bl('8')}, ${bl('11')} — ${or('reël: tel 3 by')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong>ʼn Vaste getal aftrek</strong> — elke term neem met dieselfde hoeveelheid af. Voorbeeld: ${bl('20')}, ${bl('15')}, ${bl('10')}, ${bl('5')} — ${or('reël: trek 5 af')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Met ʼn vaste getal vermenigvuldig</strong> — elke term word met dieselfde getal vermenigvuldig. Deel opeenvolgende terme om te kontroleer: die resultaat is altyd dieselfde. Voorbeeld: ${bl('3')}, ${bl('9')}, ${bl('27')}, ${bl('81')} — ${or('reël: vermenigvuldig met 3')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Reëls met twee bewerkings (Graad 6)</strong> — die reël gebruik twee bewerkings agtermekaar. Voorbeeld: ${bl('1')}, ${bl('3')}, ${bl('7')}, ${bl('15')} — ${or('reël: vermenigvuldig met 2, tel dan 1 by')}. Toets jou reël altyd op twee of meer stappe voordat jy dit gebruik om die patroon uit te brei.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om die reël te vind</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Vind die ${re('verskille')} tussen opeenvolgende terme (trek elke term van die volgende af).<br><strong>Stap 2</strong> — As die ${re('verskille')} gelyk is, is die ${or('reël')} <em>tel by</em> of <em>trek af</em> met daardie getal. Indien nie, probeer opeenvolgende terme deel om te sien of die verhouding konstant is (vermenigvuldig-/delingsreël).<br><strong>Stap 3</strong> — Beskryf die ${or('reël')} in woorde en toets dit op al die gegewe terme voordat jy die patroon uitbrei.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Vind die reël en die volgende drie terme: ${bl('3')}, ${bl('7')}, ${bl('11')}, ${bl('15')}`,
          answer: `${or('Reël: tel elke keer 4 by.')} Volgende drie terme: ${bl('19')}, ${bl('23')}, ${bl('27')}`,
          steps: [
            `Vind die ${re('verskil')} tussen opeenvolgende terme: ${re('7 − 3 = 4')}, ${re('11 − 7 = 4')}, ${re('15 − 11 = 4')}.`,
            `Die ${re('verskille')} is almal gelyk aan 4. Die ${or('reël is: tel elke keer 4 by')}.`,
            `Brei die patroon uit deur die ${or('reël')} te gebruik:<br>${bl('15')} + 4 = ${bl('19')},&nbsp; ${bl('19')} + 4 = ${bl('23')},&nbsp; ${bl('23')} + 4 = ${bl('27')}.`,
            `<strong>Antwoord:</strong> Die volgende drie terme is ${bl('19')}, ${bl('23')}, ${bl('27')}. ✓`,
          ],
        },
        {
          question: `Vind die reël en die volgende drie terme: ${bl('2')}, ${bl('6')}, ${bl('18')}, ${bl('54')}`,
          answer: `${or('Reël: vermenigvuldig elke keer met 3.')} Volgende drie terme: ${bl('162')}, ${bl('486')}, ${bl('1 458')}`,
          steps: [
            `Vind die ${re('verskille')}: ${re('6 − 2 = 4')}, ${re('18 − 6 = 12')}, ${re('54 − 18 = 36')}. Die verskille is nie gelyk nie, dus is dit nie ʼn optelreël nie.`,
            `Probeer opeenvolgende terme deel: ${re('6 ÷ 2 = 3')}, ${re('18 ÷ 6 = 3')}, ${re('54 ÷ 18 = 3')}. Die verhouding is altyd 3. Die ${or('reël is: vermenigvuldig elke keer met 3')}.`,
            `Brei die patroon uit deur die ${or('reël')} te gebruik:<br>${bl('54')} × 3 = ${bl('162')},&nbsp; ${bl('162')} × 3 = ${bl('486')},&nbsp; ${bl('486')} × 3 = ${bl('1 458')}.`,
            `<strong>Antwoord:</strong> Die volgende drie terme is ${bl('162')}, ${bl('486')}, ${bl('1 458')}. ✓`,
          ],
        },
        {
          question: `Vind die ontbrekende terme: ${bl('5')}, ${bl('11')}, ${gr('?')}, ${bl('23')}, ${gr('?')}, ${bl('35')}`,
          answer: `${or('Reël: tel elke keer 6 by.')} Ontbrekende terme: ${gr('17')} en ${gr('29')}`,
          steps: [
            `Vind die ${re('verskil')} tussen die eerste twee bekende terme: ${re('11 − 5 = 6')}.`,
            `Pas die ${or('reël: tel 6 by')} toe: volgende term = ${bl('11')} + 6 = ${gr('17')}. Kontroleer: ${re('23 − 17 = 6')} ✓ — die verskil is steeds 6.`,
            `Vind die tweede ontbrekende term: ${bl('23')} + 6 = ${gr('29')}. Kontroleer: ${re('35 − 29 = 6')} ✓ — die verskil is steeds 6.`,
            `<strong>Antwoord:</strong> Die ${or('reël is: tel elke keer 6 by')}. Die ontbrekende terme is ${gr('17')} en ${gr('29')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line or table showing the three worked example patterns with differences marked in red between consecutive terms and missing terms highlighted in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the rule in a numeric pattern and use it to extend the sequence and fill in missing terms" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns',
      title: 'Geometriese Patrone',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Geometriese patroon</strong> gebruik vorms wat volgens ʼn reël groei of verander. Ons kan geometriese patrone voorstel deur <strong>tabelle van waardes</strong> te gebruik om te wys hoe die aantal vorms by elke stap verander. Uit die tabel kan ons die reël vind en dit gebruik om enige stap te voorspel sonder om al die vorms te teken. In Graad 6 verbind ons geometriese patrone met getalpatrone en begin ons reëls skryf deur <strong>veranderlikes</strong> te gebruik.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stapnommers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('patroonwaardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('voorspelling')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stapnommer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die posisie in die patroon — stap 1, stap 2, stap 3, ensovoorts. Dit is die insetwaarde in die reël.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Patroonwaarde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die aantal vorms by elke stap — die uitsetwaarde. Ons teken dit in ʼn tabel aan om die reël raak te sien.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die verband tussen die stapnommer en die patroonwaarde. Ons skryf dit met ʼn veranderlike, bv. <em>waarde = 2 × stap + 1</em>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Voorspelling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om die reël te gebruik om die waarde by enige stap te vind sonder om al die vorms te teken — selfs stap 100 of stap 1 000.</p>` +
        `</div>` +

        `</div>` +

        // ── How to work with geometric patterns ──────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn geometriese patroon te ontleed</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Teken ʼn tabel</strong> — Teken die ${bl('stapnommer')} in die boonste ry en die ${gr('patroonwaarde')} (aantal vorms) in die onderste ry aan vir elke gegewe stap.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind verskille</strong> — Trek opeenvolgende ${gr('patroonwaardes')} van mekaar af om te sien hoe die patroon groei. ʼn Konstante verskil beteken die ${or('reël')} behels om elke keer by te tel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skryf die reël</strong> — Druk die ${or('reël')} uit deur die ${bl('stapnommer')} as ʼn veranderlike te gebruik. Toets dit op ten minste twee stappe voordat jy dit gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Maak ʼn voorspelling</strong> — Vervang die verlangde ${bl('stapnommer')} in die ${or('reël')} om die ${re('voorspelde waarde')} te kry sonder om die vorms te teken.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Geometriese en getalpatrone verbind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke geometriese patroon lewer ʼn getalreeks. Sodra jy die ${gr('patroonwaardes')} in ʼn tabel het, pas jy dieselfde vaardighede toe wat jy vir getalpatrone gebruik het om die ${or('reël')} te vind — kontroleer verskille, kontroleer verhoudings, of soek ʼn verband tussen die ${bl('stapnommer')} en die ${gr('waarde')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Squares — quadratic pattern ───────────────────────────
        {
          question: 'ʼn Patroon van vierkante groei soos volg — stap 1 het 1 vierkant, stap 2 het 4 vierkante, stap 3 het 9 vierkante. Vind die reël en voorspel stap 5.',
          answer: `${or('Reël: aantal vierkante = stapnommer².')} ${re('Stap 5 = 25 vierkante.')}`,
          steps: [
            `Maak ʼn tabel van waardes:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Stapnommer</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Aantal vierkante</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('1')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('4')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('9')}</td></tr></table></div>`,
            `Soek na ʼn patroon: ${gr('1')} = ${bl('1')}², ${gr('4')} = ${bl('2')}², ${gr('9')} = ${bl('3')}². Elke ${gr('patroonwaarde')} is gelyk aan die ${bl('stapnommer')} met homself vermenigvuldig.`,
            `Skryf die ${or('reël')}: ${or('aantal vierkante = stapnommer × stapnommer')} — of met ʼn veranderlike: ${or('waarde = n²')} waar n die stapnommer is.`,
            `${re('Voorspel stap 5:')} Vervang ${bl('n = 5')} in die reël: ${re('5² = 5 × 5 = 25')}. ${re('Stap 5 het 25 vierkante.')} ✓`,
          ],
        },

        // ── Example 2: Triangles — linear pattern ─────────────────────────
        {
          question: 'ʼn Patroon van driehoeke — stap 1 het 3 driehoeke, stap 2 het 5, stap 3 het 7. Vind die reël en voorspel stap 10.',
          answer: `${or('Reël: aantal driehoeke = 2 × stap + 1.')} ${re('Stap 10 = 21 driehoeke.')}`,
          steps: [
            `Maak ʼn tabel van waardes:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Stapnommer</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Aantal driehoeke</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('3')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('5')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td></tr></table></div>`,
            `Vind die verskille tussen opeenvolgende ${gr('patroonwaardes')}: ${gr('5')} − ${gr('3')} = 2, ${gr('7')} − ${gr('5')} = 2. Die verskil is <strong>altyd 2</strong>, dus behels die reël om elke keer 2 by te tel (lineêre patroon).`,
            `Skryf die ${or('reël')}: begin by 3 en tel elke stap 2 by. Met ʼn veranderlike: ${or('waarde = 2 × n + 1')} waar n die stapnommer is. Kontroleer: ${bl('n = 1')} → ${gr('2 × 1 + 1 = 3')} ✓, ${bl('n = 2')} → ${gr('2 × 2 + 1 = 5')} ✓, ${bl('n = 3')} → ${gr('2 × 3 + 1 = 7')} ✓.`,
            `${re('Voorspel stap 10:')} Vervang ${bl('n = 10')} in die reël: ${re('2 × 10 + 1 = 21')}. ${re('Stap 10 het 21 driehoeke.')} ✓`,
          ],
        },

        // ── Example 3: Matches — linear pattern with real-world context ──────
        {
          question: 'Sipho bou ʼn patroon met vuurhoutjies — stap 1 het 4 vuurhoutjies nodig, stap 2 het 7 nodig, stap 3 het 10 nodig. Hoeveel vuurhoutjies is nodig vir stap 20?',
          answer: `${or('Reël: vuurhoutjies = 3 × stap + 1.')} ${re('Stap 20 = 61 vuurhoutjies.')}`,
          steps: [
            `Maak ʼn tabel van waardes:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Stapnommer</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Aantal vuurhoutjies</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('4')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('10')}</td></tr></table></div>`,
            `Vind die verskille: ${gr('7')} − ${gr('4')} = 3, ${gr('10')} − ${gr('7')} = 3. Die verskil is <strong>altyd 3</strong>, dus behels die reël om elke stap 3 by te tel.`,
            `Skryf die ${or('reël')}: die patroon tel elke stap 3 by en begin by 4 vir stap 1. Met ʼn veranderlike: ${or('vuurhoutjies = 3 × n + 1')} waar n die stapnommer is. Kontroleer: ${bl('n = 1')} → ${gr('3 × 1 + 1 = 4')} ✓, ${bl('n = 2')} → ${gr('3 × 2 + 1 = 7')} ✓, ${bl('n = 3')} → ${gr('3 × 3 + 1 = 10')} ✓.`,
            `${re('Voorspel stap 20:')} Vervang ${bl('n = 20')} in die reël: ${re('3 × 20 + 1 = 60 + 1 = 61')}. ${re('Sipho het 61 vuurhoutjies nodig vir stap 20.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three-column visual showing step 1 step 2 step 3 for each of the three geometric patterns — squares triangles and match shapes — with tables of values below each pattern and differences marked between the pattern values" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to build a table of values from a geometric pattern find the rule using differences and use the rule to predict any step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INPUT AND OUTPUT TABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-output-tables',
      title: 'Inset- en Uitsettabelle',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Funksiemasjien</strong> neem ʼn ${bl('inset')}-getal, pas ʼn ${or('reël')} toe en lewer ʼn ${gr('uitset')}-getal. Ons kan dit voorstel deur ʼn <strong>inset- en uitsettabel</strong> te gebruik. Die ${or('reël')} word op dieselfde manier op elke ${bl('inset')}-waarde toegepas. Om die ${or('reël')} te vind, kyk ons hoe die ${gr('uitset')} met die ${bl('inset')} verband hou — ons probeer bytel, aftrek, vermenigvuldig of deel. Sodra ons die ${or('reël')} ken, kan ons die ${gr('uitset')} vir enige ${bl('inset')} vind, en die ${bl('inset')} vir enige ${gr('uitset')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('inset')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitset')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Inset</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginggetal wat in die funksiemasjien ingaan. Jy kies die insetwaarde.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Uitset</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat wat uitkom nadat die reël op die inset toegepas is. Die uitset hang af van die inset en die reël.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die bewerking of kombinasie van bewerkings wat op elke inset toegepas word om die uitset te lewer. Dieselfde reël geld vir al die pare.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onbekende</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Ontbrekende inset- of uitsetwaarde wat jy met behulp van die reël moet bereken.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find the rule ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die reël te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Probeer eers eenvoudige bewerkings</strong> — Kontroleer of die ${or('reël')} bloot ʼn vaste getal bytel, aftrek, vermenigvuldig of deel. Trek die ${bl('inset')} van die ${gr('uitset')} af vir elke paar — as die resultaat altyd dieselfde is, is die ${or('reël')} <em>tel daardie getal by</em>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Probeer reëls met twee bewerkings</strong> — As ʼn enkele bewerking nie werk nie, probeer <em>vermenigvuldig die inset met ʼn getal, tel of trek dan ʼn vaste getal by of af</em>. Skryf dit as: ${or('uitset = a × inset + b')} en los op vir a en b.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Toets op elke paar</strong> — Sodra jy ʼn ${or('reël')} het, kontroleer dit teen <em>elke</em> inset-uitset-paar in die tabel. As dit vir almal werk, is die ${or('reël')} korrek.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Gebruik die reël om onbekendes te vind</strong> — Vervang ʼn bekende ${bl('inset')} om die ${re('onbekende')} ${gr('uitset')} te vind, of werk terugwaarts vanaf ʼn bekende ${gr('uitset')} om die ${re('onbekende')} ${bl('inset')} te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Funksiemasjiene en patrone</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Inset-uitsettabel is eintlik ʼn manier om ʼn funksiereël in werking te wys. Elke ${bl('inset')}-waarde word deur die ${or('reël')} gekoppel aan presies een ${gr('uitset')}-waarde — dit is wat dit ʼn <strong>funksie</strong> maak. Dieselfde vaardighede wat jy gebruik het om reëls in getal- en geometriese patrone te vind, geld ook hier.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find the rule ─────────────────────────────────────────
        {
          question: `Vind die reël vir hierdie inset-uitsettabel:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:300px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Inset</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('4')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('6')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('8')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Uitset</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('13')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('19')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('25')}</td></tr></table></div>`,
          answer: `${or('Reël: uitset = 3 × inset + 1')}`,
          steps: [
            `Kyk na die verband tussen ${bl('inset')} en ${gr('uitset')}. Probeer konstante aftrekking: ${gr('7')} − ${bl('2')} = 5, ${gr('13')} − ${bl('4')} = 9 — nie konstant nie. Probeer deel: ${gr('7')} ÷ ${bl('2')} = 3,5 — nie ʼn skoon getal nie.`,
            `Probeer ${or('2 × inset + iets')}: 2 × ${bl('2')} = 4, ${gr('7')} − 4 = 3. Kontroleer: 2 × ${bl('4')} = 8, 8 + 3 = 11 — nie ${gr('13')} nie. Hierdie reël werk nie.`,
            `Probeer ${or('3 × inset')}: 3 × ${bl('2')} = 6, ${gr('7')} − 6 = 1. Toets die konstante: ${or('uitset = 3 × inset + 1')}.`,
            `Kontroleer: 3 × ${bl('4')} = 12, 12 + 1 = ${gr('13')} ✓. Kontroleer: 3 × ${bl('6')} = 18, 18 + 1 = ${gr('19')} ✓. Kontroleer: 3 × ${bl('8')} = 24, 24 + 1 = ${gr('25')} ✓.`,
            `<strong>Antwoord:</strong> ${or('Reël: uitset = 3 × inset + 1')} ✓`,
          ],
        },

        // ── Example 2: Complete the table ────────────────────────────────────
        {
          question: `Voltooi die tabel vir insette ${bl('3')}, ${bl('5')}, ${bl('7')}, ${bl('10')} deur die ${or('reël: uitset = 4 × inset − 2')} te gebruik.`,
          answer: `${bl('3')} → ${gr('10')}, &nbsp; ${bl('5')} → ${gr('18')}, &nbsp; ${bl('7')} → ${gr('26')}, &nbsp; ${bl('10')} → ${gr('38')}`,
          steps: [
            `${bl('Inset 3')}: 4 × ${bl('3')} − 2 = 12 − 2 = ${gr('10')}.`,
            `${bl('Inset 5')}: 4 × ${bl('5')} − 2 = 20 − 2 = ${gr('18')}.`,
            `${bl('Inset 7')}: 4 × ${bl('7')} − 2 = 28 − 2 = ${gr('26')}.`,
            `${bl('Inset 10')}: 4 × ${bl('10')} − 2 = 40 − 2 = ${gr('38')}.`,
            `<strong>Voltooide tabel:</strong><br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:340px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Inset</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('5')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('7')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('10')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Uitset</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('10')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('18')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('26')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('38')}</td></tr></table></div>`,
          ],
        },

        // ── Example 3: Find the input ─────────────────────────────────────────
        {
          question: `Lerato gebruik die ${or('reël: uitset = 5 × inset + 3')}. Watter ${bl('inset')} gee ʼn ${gr('uitset')} van ${gr('48')}?`,
          answer: `Die ${bl('inset')} is ${bl('9')}`,
          steps: [
            `Stel die vergelyking op met die ${or('reël')}: 5 × ${re('inset')} + 3 = ${gr('48')}.`,
            `Trek 3 van albei kante af: 5 × ${re('inset')} = ${gr('48')} − 3 = 45.`,
            `Deel albei kante deur 5: ${re('inset')} = 45 ÷ 5 = ${bl('9')}.`,
            `<strong>Kontroleer:</strong> 5 × ${bl('9')} + 3 = 45 + 3 = ${gr('48')} ✓`,
            `<strong>Antwoord:</strong> Die ${bl('inset')} is ${bl('9')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Function machine diagram showing an input entering a box labelled with the rule and an output coming out the other side, alongside a colour-coded input-output table with blue input values and green output values" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the rule for an input-output table by testing different operations and how to use the rule to find unknown inputs and outputs" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — next term in an adding pattern ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volgende term in die patroon: 4, 9, 14, 19, ?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: 'Die reël is tel elke keer 5 by.\n4 + 5 = 9, 9 + 5 = 14, 14 + 5 = 19, 19 + 5 = 24 ✓',
    },

    // ── Q2 Easy — find the rule for a dividing pattern ───────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die reël vir die patroon: 80, 40, 20, 10.',
      answer: 'Die reël is deel elke keer deur 2 of vermenigvuldig elke keer met 1/2.',
      checkMode: 'self',
    },

    // ── Q3 Medium — find two missing terms ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die ontbrekende terme in die patroon: 3, ?, 15, ?, 27.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Eerste ontbrekende term',
          correctAnswer: '9',
          explanation: 'Die reël is tel elke keer 6 by.\n3 + 6 = 9 ✓',
        },
        {
          label: 'b) Tweede ontbrekende term',
          correctAnswer: '21',
          explanation: '15 + 6 = 21. Kontroleer: 21 + 6 = 27 ✓',
        },
      ],
    },

    // ── Q4 Medium — next three terms in a multiplying pattern ────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die volgende drie terme in die patroon: 1, 3, 9, 27.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 5de term',
          correctAnswer: '81',
          explanation: 'Die reël is vermenigvuldig elke keer met 3.\n27 × 3 = 81 ✓',
        },
        {
          label: 'b) 6de term',
          correctAnswer: '243',
          explanation: '81 × 3 = 243 ✓',
        },
        {
          label: 'c) 7de term',
          correctAnswer: '729',
          explanation: '243 × 3 = 729 ✓',
        },
      ],
    },

    // ── Q5 Hard — verify a term using an nth-term rule ───────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Patroon het terme 7, 12, 17, 22. Sipho sê die 20ste term is 102. Is hy korrek? Wys al die stappe.',
      answer: 'Die reël is tel 5 by. Die nde term = 5n + 2. 20ste term = 5 × 20 + 2 = 100 + 2 = 102. Ja, Sipho is korrek.',
      checkMode: 'self',
    },

    // ── Q6 Easy — geometric pattern: dots ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Patroon van kolletjies — stap 1 het 2 kolletjies, stap 2 het 4, stap 3 het 6. Hoeveel kolletjies is in stap 8?',
      answer: '16',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'Die reël is tel elke stap 2 by, of kolletjies = 2 × stapnommer.\nStap 8 = 2 × 8 = 16 ✓',
    },

    // ── Q7 Medium — geometric pattern: squares, find rule and predict ─────────
    {
      difficulty: 'Medium',
      question: 'ʼn Patroon van vierkante — stap 1 het 5 vierkante, stap 2 het 8, stap 3 het 11. Skryf die reël en vind die aantal vierkante by stap 15.',
      answer: 'Reël: tel elke keer 3 by of vierkante = 3 × stap + 2. Stap 15 = 3 × 15 + 2 = 45 + 2 = 47 vierkante.',
      checkMode: 'self',
    },

    // ── Q8 Hard — geometric pattern: poles and rails ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bou ʼn heining met pale en rale. Vir 1 gedeelte: 2 pale en 3 rale. Vir 2 gedeeltes: 3 pale en 6 rale. Vir 3 gedeeltes: 4 pale en 9 rale. Hoeveel pale en rale word benodig vir 10 gedeeltes?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Aantal pale vir 10 gedeeltes',
          correctAnswer: '11',
          explanation: 'Palereël: pale = gedeeltes + 1.\n10 + 1 = 11 pale ✓',
        },
        {
          label: 'b) Aantal rale vir 10 gedeeltes',
          correctAnswer: '30',
          explanation: 'Ralereël: rale = 3 × gedeeltes.\n3 × 10 = 30 rale ✓',
        },
      ],
    },

    // ── Q9 Easy — complete a table using a given rule ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Voltooi die tabel deur die reël te gebruik: uitset = inset × 3.\n\nInset: 4, 7, 9\nUitset: ?, ?, ?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Uitset wanneer inset = 4',
          correctAnswer: '12',
          explanation: '4 × 3 = 12 ✓',
        },
        {
          label: 'b) Uitset wanneer inset = 7',
          correctAnswer: '21',
          explanation: '7 × 3 = 21 ✓',
        },
        {
          label: 'c) Uitset wanneer inset = 9',
          correctAnswer: '27',
          explanation: '9 × 3 = 27 ✓',
        },
      ],
    },

    // ── Q10 Medium — find the rule for an input-output table ─────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  1,  2,  3,  4\nUitset: 5,  8, 11, 14',
      answer: 'uitset = 3 × inset + 2',
      checkMode: 'auto',
      correctAnswer: 'uitset = 3 × inset + 2',
      correctAnswers: [
        'uitset = 3 × inset + 2',
        'uitset = 3 x inset + 2',
        'uitset=3×inset+2',
        'uitset=3xinset+2',
        '3 × inset + 2',
        '3 x inset + 2',
        '3n + 2',
      ],
      explanation: 'Kontroleer verskille: 8 − 5 = 3, 11 − 8 = 3, 14 − 11 = 3. Konstante verskil van 3.\nProbeer uitset = 3 × inset + b: 3 × 1 = 3, 5 − 3 = 2. Dus b = 2.\nReël: uitset = 3 × inset + 2.\nKontroleer: 3 × 2 + 2 = 8 ✓, 3 × 3 + 2 = 11 ✓, 3 × 4 + 2 = 14 ✓',
    },

    // ── Q11 Hard — find the input given the output ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die reël: uitset = 6 × inset − 4. Watter inset gee ʼn uitset van 50?',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: 'Stel op: 6 × inset − 4 = 50.\nTel 4 by albei kante: 6 × inset = 54.\nDeel deur 6: inset = 54 ÷ 6 = 9.\nKontroleer: 6 × 9 − 4 = 54 − 4 = 50 ✓',
    },

    // ── Q12 Hard — verify a rule against a table ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die reël vir hierdie tabel is uitset = 2 × inset + 5.\n\nInset:  3,  5,  7\nUitset: 11, 15, 19\n\nIs sy korrek? Verduidelik.',
      answer: 'Kontroleer: 2 × 3 + 5 = 6 + 5 = 11 ✓. 2 × 5 + 5 = 10 + 5 = 15 ✓. 2 × 7 + 5 = 14 + 5 = 19 ✓. Ja, Lerato is korrek.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het patrone en funksies bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte laat val het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt — jy het getalpatrone vir Graad 6 volkome bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van getalpatrone. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde weer deur, en probeer dan weer." },
  ],
}
