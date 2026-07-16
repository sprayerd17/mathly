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

      diagramPlaceholder: 'Termblokke verbind deur pyle wat die konstante verskil van +6 wys, met die twee ontbrekende terme wat met die reël gevind is as gestreepte groen blokke',
      diagramSvg: '<svg viewBox="0 0 230 90" xmlns="http://www.w3.org/2000/svg"><text x="115" y="10" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Reël: tel 6 elke keer by</text><rect x="10" y="25" width="24" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="22" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">5</text><rect x="48" y="25" width="24" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="60" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">11</text><rect x="86" y="25" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><text x="98" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">17</text><rect x="124" y="25" width="24" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="136" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">23</text><rect x="162" y="25" width="24" height="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,2"/><text x="174" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">29</text><rect x="200" y="25" width="24" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="212" y="42" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">35</text><line x1="34" y1="38" x2="48" y2="38" stroke="#dc2626" stroke-width="1.5"/><line x1="72" y1="38" x2="86" y2="38" stroke="#dc2626" stroke-width="1.5"/><line x1="110" y1="38" x2="124" y2="38" stroke="#dc2626" stroke-width="1.5"/><line x1="148" y1="38" x2="162" y2="38" stroke="#dc2626" stroke-width="1.5"/><line x1="186" y1="38" x2="200" y2="38" stroke="#dc2626" stroke-width="1.5"/><text x="41" y="22" font-weight="700" font-size="9" text-anchor="middle" fill="#dc2626">+6</text><text x="79" y="22" font-weight="700" font-size="9" text-anchor="middle" fill="#dc2626">+6</text><text x="117" y="22" font-weight="700" font-size="9" text-anchor="middle" fill="#dc2626">+6</text><text x="155" y="22" font-weight="700" font-size="9" text-anchor="middle" fill="#dc2626">+6</text><text x="193" y="22" font-weight="700" font-size="9" text-anchor="middle" fill="#dc2626">+6</text><text x="115" y="75" font-size="10" text-anchor="middle" fill="#16a34a">Gestreepte blokke = ontbrekende terme met die reël gevind</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die reël in ʼn numeriese patroon te vind en dit te gebruik om die ry uit te brei en ontbrekende terme in te vul" />',
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

      diagramPlaceholder: 'Drie groeiende vormpatrone by stap 1, 2 en 3 — ʼn vierkantrooster (1, 4, 9 vierkante), ʼn ry driehoeke (3, 5, 7) en vuurhoutjievierkante (4, 7, 10 vuurhoutjies)',
      diagramSvg: '<svg viewBox="0 0 250 190" xmlns="http://www.w3.org/2000/svg"><text x="55" y="12" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Stap 1</text><text x="130" y="12" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Stap 2</text><text x="205" y="12" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Stap 3</text><text x="4" y="47" font-size="9" fill="#0f1f3d">Vierkante</text><rect x="35" y="45" width="12" height="12" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><text x="41" y="70" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">1</text><rect x="115" y="38" width="18" height="18" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="38" x2="124" y2="56" stroke="#0f1f3d" stroke-width="1"/><line x1="115" y1="47" x2="133" y2="47" stroke="#0f1f3d" stroke-width="1"/><text x="124" y="70" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">4</text><rect x="190" y="33" width="21" height="21" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><line x1="197" y1="33" x2="197" y2="54" stroke="#0f1f3d" stroke-width="1"/><line x1="204" y1="33" x2="204" y2="54" stroke="#0f1f3d" stroke-width="1"/><line x1="190" y1="40" x2="211" y2="40" stroke="#0f1f3d" stroke-width="1"/><line x1="190" y1="47" x2="211" y2="47" stroke="#0f1f3d" stroke-width="1"/><text x="200" y="70" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">9</text><text x="4" y="102" font-size="9" fill="#0f1f3d">Driehoeke</text><polygon points="29,105 39,105 34,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="39,105 49,105 44,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="49,105 59,105 54,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><text x="44" y="118" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">3</text><polygon points="100,105 110,105 105,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="110,105 120,105 115,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="120,105 130,105 125,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="130,105 140,105 135,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="140,105 150,105 145,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><text x="125" y="118" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">5</text><polygon points="170,105 180,105 175,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="180,105 190,105 185,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="190,105 200,105 195,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="200,105 210,105 205,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="210,105 220,105 215,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="220,105 230,105 225,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><polygon points="230,105 240,105 235,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="1"/><text x="205" y="118" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">7</text><text x="4" y="152" font-size="9" fill="#0f1f3d">Vuurhoutjies</text><rect x="35" y="133" width="14" height="14" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="42" y="163" font-size="9" text-anchor="middle" fill="#16a34a">4 vuurhoutjies</text><rect x="100" y="133" width="28" height="14" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="114" y1="133" x2="114" y2="147" stroke="#0f1f3d" stroke-width="1.5"/><text x="114" y="163" font-size="9" text-anchor="middle" fill="#16a34a">7 vuurhoutjies</text><rect x="170" y="133" width="42" height="14" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="184" y1="133" x2="184" y2="147" stroke="#0f1f3d" stroke-width="1.5"/><line x1="198" y1="133" x2="198" y2="147" stroke="#0f1f3d" stroke-width="1.5"/><text x="191" y="163" font-size="9" text-anchor="middle" fill="#16a34a">10 vuurhoutjies</text><text x="125" y="184" font-size="9" text-anchor="middle" fill="#374151">Vierkante: n²  ·  Driehoeke: 2n+1  ·  Vuurhoutjies: 3n+1</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn waardetabel van ʼn geometriese patroon op te stel, die reël met verskille te vind, en die reël te gebruik om enige stap te voorspel" />',
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

      diagramPlaceholder: 'Funksiemasjien-diagram wat ʼn inset van 4 wys wat ʼn blok met die reël × 3 + 1 binnegaan en ʼn uitset van 13 wat uitkom, saam met die ooreenstemmende inset-uitsettabel',
      diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="40" x2="55" y2="40" stroke="#2563eb" stroke-width="2.5"/><polygon points="55,35 65,40 55,45" fill="#2563eb"/><text x="30" y="28" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">inset</text><text x="20" y="55" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">4</text><rect x="65" y="20" width="70" height="40" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><text x="100" y="44" font-weight="700" font-size="13" text-anchor="middle" fill="#ea580c">× 3 + 1</text><line x1="135" y1="40" x2="175" y2="40" stroke="#16a34a" stroke-width="2.5"/><polygon points="175,35 185,40 175,45" fill="#16a34a"/><text x="160" y="28" font-weight="700" font-size="10" text-anchor="middle" fill="#16a34a">uitset</text><text x="197" y="55" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">13</text><text x="100" y="78" font-weight="700" font-size="10" text-anchor="middle" fill="#0f1f3d">Inset → Uitset tabel</text><rect x="20" y="85" width="35" height="18" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/><text x="37.5" y="98" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">2</text><rect x="55" y="85" width="35" height="18" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/><text x="72.5" y="98" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">4</text><rect x="90" y="85" width="35" height="18" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/><text x="107.5" y="98" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">6</text><rect x="125" y="85" width="35" height="18" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/><text x="142.5" y="98" font-size="11" text-anchor="middle" fill="#2563eb" font-weight="700">8</text><rect x="20" y="103" width="35" height="18" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="37.5" y="116" font-size="11" text-anchor="middle" fill="#16a34a" font-weight="700">7</text><rect x="55" y="103" width="35" height="18" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="72.5" y="116" font-size="11" text-anchor="middle" fill="#16a34a" font-weight="700">13</text><rect x="90" y="103" width="35" height="18" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="107.5" y="116" font-size="11" text-anchor="middle" fill="#16a34a" font-weight="700">19</text><rect x="125" y="103" width="35" height="18" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="142.5" y="116" font-size="11" text-anchor="middle" fill="#16a34a" font-weight="700">25</text><text x="100" y="135" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Reël: uitset = 3 × inset + 1</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die reël vir ʼn inset-uitsettabel te vind deur verskillende bewerkings te toets, en hoe om die reël te gebruik om onbekende insette en uitsette te vind" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Getalpatrone enkelbewerking | 4-6 Getalpatrone twee bewerkings |
    // 7-10 Geometriese lineêre patrone (tabelle/verskille) | 11-13 Kwadratiese + verre stap |
    // 14-16 Inset-uitset vind reël/voltooi | 17-19 Inset-uitset terugwerk/topvraag
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 6, 11, 16, 21, 26, ?', answer: '31', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31'], explanation: 'Die reël is tel elke keer 5 by.\n26 + 5 = 31 ✓' },
        { difficulty: 'Easy', question: 'ʼn Watertenk begin met 200 liter en verloor 20 liter elke dag deur verdamping: 200, 180, 160, 140. Hoeveel liter sal daar die volgende dag oor wees?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120 liter', '120 l'], explanation: 'Die reël is trek elke keer 20 af.\n140 − 20 = 120 liter ✓' },
        { difficulty: 'Easy', question: 'Skryf die reël vir hierdie patroon in woorde: 5, 9, 13, 17.', answer: 'Tel elke keer 4 by.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Stuk materiaal 96 m lank word in 8 gelyke stukke gesny vir ʼn naaldwerkklas. Hoe lank is elke stuk?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m', '12m'], explanation: '96 ÷ 8 = 12. Elke stuk is 12 m lank ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 7, ?, 17, 22.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Kontroleer die bekende verskil: 22 − 17 = 5, dus is die reël tel elke keer 5 by.\n7 + 5 = 12. Kontroleer: 17 − 12 = 5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig met 2, tel dan 1 by", en begin by 2: 2, 5, 11, 23. Wat is die volgende term?', answer: '47', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47'], explanation: 'Pas die reël toe op 23: 23 × 2 = 46, tel dan 1 by: 46 + 1 = 47 ✓' },
        { difficulty: 'Medium', question: 'Vind die reël vir hierdie patroon, en beskryf albei bewerkings in volgorde: 4, 9, 19, 39.', answer: 'Vermenigvuldig elke keer met 2, tel dan 1 by.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Katlego sê die reël vir die patroon 3, 8, 18, 38 is "vermenigvuldig met 2" omdat 3 × 2 = 6 naby aan 8 is. Hy het net die eerste paar getoets. Is sy reël korrek? Gee die korrekte reël.', answer: 'Katlego is verkeerd — hy het net die eerste paar getoets, en 3 × 2 = 6, nie 8 nie, dus werk selfs daardie paar nie regtig met ʼn eenvoudige ×2-reël nie. As al die terme getoets word, sien ʼn mens die patroon verdubbel en tel dan 2 by elke keer: 3 × 2 + 2 = 8 ✓, 8 × 2 + 2 = 18 ✓, 18 × 2 + 2 = 38 ✓. Die korrekte reël is "vermenigvuldig met 2, tel dan 2 by".', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Teëlpatroon word in woorde beskryf: stap 1 het 3 teëls, stap 2 het 5 teëls, stap 3 het 7 teëls. Voltooi die tabel van waardes vir stappe 1 tot 4, en skryf dan die reël neer.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal teëls by stap 4', correctAnswer: '9', explanation: 'Die verskil tussen opeenvolgende waardes is altyd 2, dus is stap 4 = 7 + 2 = 9.' },
          { label: 'b) Reël (waarde = a × stap + b)', correctAnswer: 'waarde = 2 × stap + 1', correctAnswers: ['waarde = 2 × stap + 1', '2 x stap + 1', '2n+1', '2 × n + 1', '2n + 1'], explanation: 'ʼn Konstante verskil van 2 beteken die reël vermenigvuldig die stapnommer met 2. Kontroleer: 2 × 1 + 1 = 3 ✓, 2 × 2 + 1 = 5 ✓, 2 × 3 + 1 = 7 ✓. Reël: waarde = 2 × stap + 1.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Vuurhoutjiepatroon groei soos volg: stap 1 gebruik 6 vuurhoutjies, stap 2 gebruik 11 vuurhoutjies, stap 3 gebruik 16 vuurhoutjies. Hoeveel vuurhoutjies word vir stap 7 benodig?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 vuurhoutjies'], explanation: 'Die verskille is elke keer 5, dus is die reël waarde = 5 × stap + 1. Kontroleer: 5 × 1 + 1 = 6 ✓, 5 × 2 + 1 = 11 ✓.\nStap 7: 5 × 7 + 1 = 35 + 1 = 36 vuurhoutjies ✓' },
        { difficulty: 'Medium', question: 'ʼn Heining word met pale en rale gebou. Pale benodig: stap 1 = 2, stap 2 = 3, stap 3 = 4. Hoeveel pale word vir stap 12 benodig, en wat is die reël?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël', correctAnswer: 'pale = stap + 1', correctAnswers: ['pale = stap + 1', 'stap + 1', 'n + 1', 'pale = n + 1'], explanation: 'Elke stap voeg 1 meer paal by as die stapnommer. Kontroleer: 1 + 1 = 2 ✓, 2 + 1 = 3 ✓, 3 + 1 = 4 ✓.' },
          { label: 'b) Pale benodig vir stap 12', correctAnswer: '13', explanation: 'Vervang stap = 12: 12 + 1 = 13 pale.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante groei soos volg: stap 1 = 1 vierkant, stap 2 = 4 vierkante, stap 3 = 9 vierkante. Hoeveel vierkante is in stap 6?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Die patroon volg waarde = stap², aangesien 1 = 1², 4 = 2², 9 = 3².\nStap 6: 6² = 6 × 6 = 36 vierkante ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stapel stoele groei met 3 stoele per ry, en begin met 2 stoele in ry 1: ry 1 = 2, ry 2 = 5, ry 3 = 8. Sipho hou aan om 3 herhaaldelik by te tel om ry 50 te vind, wat lank vat. Wys ʼn vinniger manier om die aantal stoele in ry 50 te vind, en gee die antwoord.', answer: 'Sipho gebruik ʼn ondoeltreffende metode — om herhaaldelik 3 by te tel tot by ry 50 beteken hy moet 49 optellings met die hand doen. ʼn Vinniger manier is om die reël te vind en dit direk te vervang. Die reël is stoele = 3 × ry − 1 (kontroleer: 3 × 1 − 1 = 2 ✓, 3 × 2 − 1 = 5 ✓, 3 × 3 − 1 = 8 ✓). Vir ry 50: 3 × 50 − 1 = 150 − 1 = 149 stoele. Om die reël te gebruik is baie vinniger as om 3 nege-en-veertig keer by te tel.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon volg die reël waarde = 4 × stap + 3. Watter stapnommer bereik eerste ʼn waarde van minstens 95?', answer: '23', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23'], explanation: 'Stel op: 4 × stap + 3 ≥ 95, dus 4 × stap ≥ 92, wat stap ≥ 23 gee.\nKontroleer: stap 22 gee 4 × 22 + 3 = 91 (te klein). Stap 23 gee 4 × 23 + 3 = 95 ✓. Stap 23 is die eerste om minstens 95 te bereik.' },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  3,  5,  7,  9\nUitset: 13, 19, 25, 31', answer: 'uitset = 3 × inset + 4', checkMode: 'auto', correctAnswer: 'uitset = 3 × inset + 4', correctAnswers: ['uitset = 3 × inset + 4', 'uitset = 3 x inset + 4', '3 × inset + 4', '3 x inset + 4', '3n + 4'], explanation: 'Verskille in uitset: 19 − 13 = 6, 25 − 19 = 6, 6 ÷ (5−3) = 3, probeer dus uitset = 3 × inset + b.\n3 × 3 = 9, 13 − 9 = 4. Reël: uitset = 3 × inset + 4.\nKontroleer: 3 × 5 + 4 = 19 ✓, 3 × 7 + 4 = 25 ✓, 3 × 9 + 4 = 31 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Loodgieter vra ʼn uitroepfooi plus ʼn uurlikse tarief volgens die reël: koste = 12 × ure + 50. Voltooi die tabel vir 1, 2, 3 en 5 ure.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 1 uur', correctAnswer: '62', explanation: '12 × 1 + 50 = 12 + 50 = 62' },
          { label: 'b) Koste vir 3 ure', correctAnswer: '86', explanation: '12 × 3 + 50 = 36 + 50 = 86' },
          { label: 'c) Koste vir 5 ure', correctAnswer: '110', explanation: '12 × 5 + 50 = 60 + 50 = 110' },
        ] },
        { difficulty: 'Hard', question: 'Thandiwe beweer die reël vir hierdie tabel is uitset = 3 × inset + 1, omdat dit vir die eerste paar werk.\n\nInset:  2,  4,  6\nUitset: 7, 15, 23\n\nToets haar reël teen elke paar. Is sy korrek?', answer: 'Thandiwe is verkeerd. Kontroleer: 3 × 2 + 1 = 7 ✓ (werk vir die eerste paar), maar 3 × 4 + 1 = 13, nie 15 nie ✗. Die reël geld nie vir die tweede paar nie, dus is dit verkeerd al het dit eers reg gelyk. Die werklike reël is uitset = 4 × inset − 1 (kontroleer: 4 × 2 − 1 = 7 ✓, 4 × 4 − 1 = 15 ✓, 4 × 6 − 1 = 23 ✓). Dit wys waarom ʼn reël teen elke paar getoets moet word, nie net die eerste een nie, voordat dit vertrou kan word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die reël: uitset = 7 × inset − 5. Watter inset gee ʼn uitset van 58?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Stel op: 7 × inset − 5 = 58.\nTel 5 by albei kante: 7 × inset = 63.\nDeel deur 7: inset = 63 ÷ 7 = 9.\nKontroleer: 7 × 9 − 5 = 63 − 5 = 58 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tabel het insette 2, 4, 6 wat uitsette 11, 19, 27 gee. Vind eers die reël, en gebruik dit dan om die inset te vind wat ʼn uitset van 51 gee.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël', correctAnswer: 'uitset = 4 × inset + 3', correctAnswers: ['uitset = 4 × inset + 3', 'uitset = 4 x inset + 3', '4 × inset + 3', '4 x inset + 3', '4n + 3'], explanation: 'Verskille: 19 − 11 = 8 oor ʼn gaping van 2 insette, dus 8 ÷ 2 = 4. Probeer uitset = 4 × inset + b: 4 × 2 = 8, 11 − 8 = 3. Reël: uitset = 4 × inset + 3. Kontroleer: 4 × 4 + 3 = 19 ✓, 4 × 6 + 3 = 27 ✓.' },
          { label: 'b) Inset vir uitset 51', correctAnswer: '12', explanation: 'Stel op: 4 × inset + 3 = 51. Trek 3 af: 4 × inset = 48. Deel deur 4: inset = 12. Kontroleer: 4 × 12 + 3 = 51 ✓.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 6, 11, 16, 21 (reël: 5 × termnommer + 1).\n\na) Wat is die 30ste term?\nb) ʼn Verwante inset-uitsettabel gebruik dieselfde reël as ʼn "uitset = 5 × inset + 1"-masjien. Watter inset gee ʼn uitset van 91?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 30ste term', correctAnswer: '151', explanation: '5 × 30 + 1 = 150 + 1 = 151.' },
          { label: 'b) Inset vir uitset 91', correctAnswer: '18', explanation: 'Stel op: 5 × inset + 1 = 91. Trek 1 af: 5 × inset = 90. Deel deur 5: inset = 18. Kontroleer: 5 × 18 + 1 = 91 ✓.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone, geometriese patrone en inset-uitsettabelle bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegplan as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 8, 15, 22, 29, 36, ?', answer: '43', checkMode: 'auto', correctAnswer: '43', correctAnswers: ['43'], explanation: 'Die reël is tel elke keer 7 by.\n36 + 7 = 43 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kampeerterrein begin met 150 liter gas en gebruik elke dag 15 liter: 150, 135, 120, 105. Hoeveel liter sal die volgende dag oor wees?', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90 liter', '90 l'], explanation: 'Die reël is trek elke keer 15 af.\n105 − 15 = 90 liter ✓' },
        { difficulty: 'Easy', question: 'Skryf die reël vir hierdie patroon in woorde: 6, 14, 22, 30.', answer: 'Tel elke keer 8 by.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Rol lint 180 cm lank word in 4 gelyke stukke gesny vir geskenkverpakking. Hoe lank is elke stuk?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 cm', '45cm'], explanation: '180 ÷ 4 = 45. Elke stuk is 45 cm lank ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 9, ?, 21, 27.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Kontroleer die bekende verskil: 27 − 21 = 6, dus is die reël tel elke keer 6 by.\n9 + 6 = 15. Kontroleer: 21 − 15 = 6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig met 2, tel dan 2 by", en begin by 1: 1, 4, 10, 22. Wat is die volgende term?', answer: '46', checkMode: 'auto', correctAnswer: '46', correctAnswers: ['46'], explanation: 'Pas die reël toe op 22: 22 × 2 = 44, tel dan 2 by: 44 + 2 = 46 ✓' },
        { difficulty: 'Medium', question: 'Vind die reël vir hierdie patroon, en beskryf albei bewerkings in volgorde: 6, 15, 33, 69.', answer: 'Vermenigvuldig elke keer met 2, tel dan 3 by.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele sê die reël vir die patroon 2, 5, 14, 41 is "tel 3 by" omdat 2 + 3 = 5. Sy het net die eerste paar getoets. Is haar reël korrek? Gee die korrekte reël.', answer: 'Zanele is verkeerd — sy het net die eerste paar getoets. Wanneer die volgende paar getoets word, faal haar reël: 5 + 3 = 8, nie 14 nie. Die patroon vermenigvuldig eintlik elke keer met 3 en trek dan 1 af: 2 × 3 − 1 = 5 ✓, 5 × 3 − 1 = 14 ✓, 14 × 3 − 1 = 41 ✓. Die korrekte reël is "vermenigvuldig met 3, trek dan 1 af".', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Kolletjiepatroon word in woorde beskryf: stap 1 het 4 kolletjies, stap 2 het 7 kolletjies, stap 3 het 10 kolletjies. Voltooi die tabel van waardes vir stappe 1 tot 4, en skryf dan die reël neer.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal kolletjies by stap 4', correctAnswer: '13', explanation: 'Die verskil tussen opeenvolgende waardes is altyd 3, dus is stap 4 = 10 + 3 = 13.' },
          { label: 'b) Reël (waarde = a × stap + b)', correctAnswer: 'waarde = 3 × stap + 1', correctAnswers: ['waarde = 3 × stap + 1', '3 x stap + 1', '3n+1', '3 × n + 1', '3n + 1'], explanation: 'ʼn Konstante verskil van 3 beteken die reël vermenigvuldig die stapnommer met 3. Kontroleer: 3 × 1 + 1 = 4 ✓, 3 × 2 + 1 = 7 ✓, 3 × 3 + 1 = 10 ✓. Reël: waarde = 3 × stap + 1.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Heiningraalpatroon groei soos volg: stap 1 gebruik 5 rale, stap 2 gebruik 9 rale, stap 3 gebruik 13 rale. Hoeveel rale word vir stap 14 benodig?', answer: '57', checkMode: 'auto', correctAnswer: '57', correctAnswers: ['57', '57 rale'], explanation: 'Die verskille is elke keer 4, dus is die reël waarde = 4 × stap + 1. Kontroleer: 4 × 1 + 1 = 5 ✓, 4 × 2 + 1 = 9 ✓.\nStap 14: 4 × 14 + 1 = 56 + 1 = 57 rale ✓' },
        { difficulty: 'Medium', question: 'ʼn Geteëlde patio groei met dieselfde hoeveelheid elke stap. Teëls benodig: stap 7 = 19, stap 10 = 25. Wat is die konstante verskil per stap, en hoeveel teëls word vir stap 8 benodig?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Verskil per stap', correctAnswer: '2', explanation: 'Van stap 7 tot stap 10 is 3 stappe, en teëls styg van 19 na 25, ʼn toename van 6. 6 ÷ 3 = 2 teëls per stap.' },
          { label: 'b) Teëls benodig vir stap 8', correctAnswer: '21', explanation: 'Stap 8 is een stap na stap 7: 19 + 2 = 21 teëls.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante groei soos volg: stap 1 = 1 vierkant, stap 2 = 4 vierkante, stap 3 = 9 vierkante. Hoeveel vierkante is in stap 7?', answer: '49', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49'], explanation: 'Die patroon volg waarde = stap², aangesien 1 = 1², 4 = 2², 9 = 3².\nStap 7: 7² = 7 × 7 = 49 vierkante ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Ry tuinpaadklippe groei met 3 klippe per stap, en begin met 3 klippe by stap 1: stap 1 = 3, stap 2 = 6, stap 3 = 9. Bongani hou aan om 3 herhaaldelik by te tel om stap 40 te vind, wat lank vat. Wys ʼn vinniger manier om die aantal klippe in stap 40 te vind, en gee die antwoord.', answer: 'Bongani gebruik ʼn ondoeltreffende metode — om herhaaldelik 3 by te tel tot by stap 40 beteken hy moet 39 optellings met die hand doen. ʼn Vinniger manier is om die reël te vind en dit direk te vervang. Die reël is klippe = 3 × stap (kontroleer: 3 × 1 = 3 ✓, 3 × 2 = 6 ✓, 3 × 3 = 9 ✓). Vir stap 40: 3 × 40 = 120 klippe. Om die reël te gebruik is baie vinniger as om 3 nege-en-dertig keer by te tel.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon volg die reël waarde = 5 × stap + 2. Watter stapnommer bereik eerste ʼn waarde van minstens 127?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25'], explanation: 'Stel op: 5 × stap + 2 ≥ 127, dus 5 × stap ≥ 125, wat stap ≥ 25 gee.\nKontroleer: stap 24 gee 5 × 24 + 2 = 122 (te klein). Stap 25 gee 5 × 25 + 2 = 127 ✓. Stap 25 is die eerste om minstens 127 te bereik.' },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  1,  3,  5,  7\nUitset: 6, 16, 26, 36', answer: 'uitset = 5 × inset + 1', checkMode: 'auto', correctAnswer: 'uitset = 5 × inset + 1', correctAnswers: ['uitset = 5 × inset + 1', 'uitset = 5 x inset + 1', '5 × inset + 1', '5 x inset + 1', '5n + 1'], explanation: 'Verskille in uitset: 16 − 6 = 10, oor ʼn gaping van 2 insette, dus 10 ÷ 2 = 5. Probeer uitset = 5 × inset + b.\n5 × 1 = 5, 6 − 5 = 1. Reël: uitset = 5 × inset + 1.\nKontroleer: 5 × 3 + 1 = 16 ✓, 5 × 5 + 1 = 26 ✓, 5 × 7 + 1 = 36 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Taxi vra ʼn basiese tarief plus ʼn tarief per kilometer volgens die reël: fooi = 9 × km + 15. Voltooi die tabel vir 2, 4 en 7 km.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Fooi vir 2 km', correctAnswer: '33', explanation: '9 × 2 + 15 = 18 + 15 = 33' },
          { label: 'b) Fooi vir 4 km', correctAnswer: '51', explanation: '9 × 4 + 15 = 36 + 15 = 51' },
          { label: 'c) Fooi vir 7 km', correctAnswer: '78', explanation: '9 × 7 + 15 = 63 + 15 = 78' },
        ] },
        { difficulty: 'Hard', question: 'Mpho beweer die reël vir hierdie tabel is uitset = 4 × inset + 4, omdat dit vir die eerste paar werk.\n\nInset:  3,  5,  7\nUitset: 16, 26, 36\n\nToets sy reël teen elke paar. Is hy korrek?', answer: 'Mpho is verkeerd. Kontroleer: 4 × 3 + 4 = 16 ✓ (werk vir die eerste paar), maar 4 × 5 + 4 = 24, nie 26 nie ✗. Die reël geld nie vir die tweede paar nie, dus is dit verkeerd al het dit eers reg gelyk. Die werklike reël is uitset = 5 × inset + 1 (kontroleer: 5 × 3 + 1 = 16 ✓, 5 × 5 + 1 = 26 ✓, 5 × 7 + 1 = 36 ✓). Dit wys waarom ʼn reël teen elke paar in die tabel getoets moet word, nie net die eerste een nie, voordat dit vertrou kan word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die reël: uitset = 6 × inset − 4. Watter inset gee ʼn uitset van 44?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Stel op: 6 × inset − 4 = 44.\nTel 4 by albei kante: 6 × inset = 48.\nDeel deur 6: inset = 48 ÷ 6 = 8.\nKontroleer: 6 × 8 − 4 = 48 − 4 = 44 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tabel het insette 2, 4, 6 wat uitsette 9, 17, 25 gee. Vind eers die reël, en gebruik dit dan om die inset te vind wat ʼn uitset van 41 gee.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël', correctAnswer: 'uitset = 4 × inset + 1', correctAnswers: ['uitset = 4 × inset + 1', 'uitset = 4 x inset + 1', '4 × inset + 1', '4 x inset + 1', '4n + 1'], explanation: 'Verskille: 17 − 9 = 8 oor ʼn gaping van 2 insette, dus 8 ÷ 2 = 4. Probeer uitset = 4 × inset + b: 4 × 2 = 8, 9 − 8 = 1. Reël: uitset = 4 × inset + 1. Kontroleer: 4 × 4 + 1 = 17 ✓, 4 × 6 + 1 = 25 ✓.' },
          { label: 'b) Inset vir uitset 41', correctAnswer: '10', explanation: 'Stel op: 4 × inset + 1 = 41. Trek 1 af: 4 × inset = 40. Deel deur 4: inset = 10. Kontroleer: 4 × 10 + 1 = 41 ✓.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 8, 13, 18, 23 (reël: 5 × termnommer + 3).\n\na) Wat is die 25ste term?\nb) ʼn Verwante inset-uitsettabel gebruik dieselfde reël as ʼn "uitset = 5 × inset + 3"-masjien. Watter inset gee ʼn uitset van 78?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 25ste term', correctAnswer: '128', explanation: '5 × 25 + 3 = 125 + 3 = 128.' },
          { label: 'b) Inset vir uitset 78', correctAnswer: '15', explanation: 'Stel op: 5 × inset + 3 = 78. Trek 3 af: 5 × inset = 75. Deel deur 5: inset = 15. Kontroleer: 5 × 15 + 3 = 78 ✓.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone, geometriese patrone en inset-uitsettabelle bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegplan as Stel 1 en 2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 10, 17, 24, 31, 38, ?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: 'Die reël is tel elke keer 7 by.\n38 + 7 = 45 ✓' },
        { difficulty: 'Easy', question: 'ʼn Blok ys wat 120 g weeg, smelt teen ʼn tempo van 15 g elke uur: 120, 105, 90, 75. Hoeveel gram sal na die volgende uur oor wees?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 g', '60g'], explanation: 'Die reël is trek elke keer 15 af.\n75 − 15 = 60 gram ✓' },
        { difficulty: 'Easy', question: 'Skryf die reël vir hierdie patroon in woorde: 7, 13, 19, 25.', answer: 'Tel elke keer 6 by.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Stuk tou 144 m lank word in 6 gelyke stukke gesny vir ʼn skoolsportdag. Hoe lank is elke stuk?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 m', '24m'], explanation: '144 ÷ 6 = 24. Elke stuk is 24 m lank ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 4, ?, 20, 28.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Kontroleer die bekende verskil: 28 − 20 = 8, dus is die reël tel elke keer 8 by.\n4 + 8 = 12. Kontroleer: 20 − 12 = 8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig met 2, tel dan 2 by", en begin by 3: 3, 8, 18, 38. Wat is die volgende term?', answer: '78', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78'], explanation: 'Pas die reël toe op 38: 38 × 2 = 76, tel dan 2 by: 76 + 2 = 78 ✓' },
        { difficulty: 'Medium', question: 'Vind die reël vir hierdie patroon, en beskryf albei bewerkings in volgorde: 4, 11, 25, 53.', answer: 'Vermenigvuldig elke keer met 2, tel dan 3 by.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Given sê die reël vir die patroon 4, 10, 28, 82 is "tel 6 by" omdat 4 + 6 = 10. Hy het net die eerste paar getoets. Is sy reël korrek? Gee die korrekte reël.', answer: 'Given is verkeerd — hy het net die eerste paar getoets. Wanneer die volgende paar getoets word, faal sy reël: 10 + 6 = 16, nie 28 nie. Die patroon vermenigvuldig eintlik elke keer met 3 en trek dan 2 af: 4 × 3 − 2 = 10 ✓, 10 × 3 − 2 = 28 ✓, 28 × 3 − 2 = 82 ✓. Die korrekte reël is "vermenigvuldig met 3, trek dan 2 af".', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Kolletjiepatroon word in woorde beskryf: stap 1 het 3 kolletjies, stap 2 het 7 kolletjies, stap 3 het 11 kolletjies. Voltooi die tabel van waardes vir stappe 1 tot 4, en skryf dan die reël neer.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal kolletjies by stap 4', correctAnswer: '15', explanation: 'Die verskil tussen opeenvolgende waardes is altyd 4, dus is stap 4 = 11 + 4 = 15.' },
          { label: 'b) Reël (waarde = a × stap + b)', correctAnswer: 'waarde = 4 × stap − 1', correctAnswers: ['waarde = 4 × stap − 1', 'waarde = 4 x stap - 1', '4 × stap − 1', '4n-1', '4n − 1', '4 × n − 1'], explanation: 'ʼn Konstante verskil van 4 beteken die reël vermenigvuldig die stapnommer met 4. Kontroleer: 4 × 1 − 1 = 3 ✓, 4 × 2 − 1 = 7 ✓, 4 × 3 − 1 = 11 ✓. Reël: waarde = 4 × stap − 1.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Heiningraalpatroon groei soos volg: stap 1 gebruik 5 rale, stap 2 gebruik 8 rale, stap 3 gebruik 11 rale. Hoeveel rale word vir stap 16 benodig?', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 rale'], explanation: 'Die verskille is elke keer 3, dus is die reël waarde = 3 × stap + 2. Kontroleer: 3 × 1 + 2 = 5 ✓, 3 × 2 + 2 = 8 ✓.\nStap 16: 3 × 16 + 2 = 48 + 2 = 50 rale ✓' },
        { difficulty: 'Medium', question: 'ʼn Geteëlde patio groei met dieselfde hoeveelheid elke stap. Teëls benodig: stap 8 = 29, stap 13 = 49. Wat is die konstante verskil per stap, en hoeveel teëls word vir stap 9 benodig?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Verskil per stap', correctAnswer: '4', explanation: 'Van stap 8 tot stap 13 is 5 stappe, en teëls styg van 29 na 49, ʼn toename van 20. 20 ÷ 5 = 4 teëls per stap.' },
          { label: 'b) Teëls benodig vir stap 9', correctAnswer: '33', explanation: 'Stap 9 is een stap na stap 8: 29 + 4 = 33 teëls.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante groei soos volg: stap 1 = 1 vierkant, stap 2 = 4 vierkante, stap 3 = 9 vierkante. Hoeveel vierkante is in stap 8?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64'], explanation: 'Die patroon volg waarde = stap², aangesien 1 = 1², 4 = 2², 9 = 3².\nStap 8: 8² = 8 × 8 = 64 vierkante ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Ry tuinpaadklippe groei met 4 klippe per stap, en begin met 3 klippe by stap 1: stap 1 = 3, stap 2 = 7, stap 3 = 11. Palesa hou aan om 4 herhaaldelik by te tel om stap 60 te vind, wat lank vat. Wys ʼn vinniger manier om die aantal klippe in stap 60 te vind, en gee die antwoord.', answer: 'Palesa gebruik ʼn ondoeltreffende metode — om herhaaldelik 4 by te tel tot by stap 60 beteken sy moet 59 optellings met die hand doen. ʼn Vinniger manier is om die reël te vind en dit direk te vervang. Die reël is klippe = 4 × stap − 1 (kontroleer: 4 × 1 − 1 = 3 ✓, 4 × 2 − 1 = 7 ✓, 4 × 3 − 1 = 11 ✓). Vir stap 60: 4 × 60 − 1 = 240 − 1 = 239 klippe. Om die reël te gebruik is baie vinniger as om 4 nege-en-vyftig keer by te tel.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon volg die reël waarde = 6 × stap + 1. Watter stapnommer bereik eerste ʼn waarde van minstens 155?', answer: '26', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26'], explanation: 'Stel op: 6 × stap + 1 ≥ 155, dus 6 × stap ≥ 154, wat stap ≥ 25,67 gee, so stap moet 26 wees.\nKontroleer: stap 25 gee 6 × 25 + 1 = 151 (te klein). Stap 26 gee 6 × 26 + 1 = 157 ✓. Stap 26 is die eerste om minstens 155 te bereik.' },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  2,  4,  6,  8\nUitset: 11, 21, 31, 41', answer: 'uitset = 5 × inset + 1', checkMode: 'auto', correctAnswer: 'uitset = 5 × inset + 1', correctAnswers: ['uitset = 5 × inset + 1', 'uitset = 5 x inset + 1', '5 × inset + 1', '5 x inset + 1', '5n + 1'], explanation: 'Verskille in uitset: 21 − 11 = 10, oor ʼn gaping van 2 insette, dus 10 ÷ 2 = 5. Probeer uitset = 5 × inset + b.\n5 × 2 = 10, 11 − 10 = 1. Reël: uitset = 5 × inset + 1.\nKontroleer: 5 × 4 + 1 = 21 ✓, 5 × 6 + 1 = 31 ✓, 5 × 8 + 1 = 41 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Toergids vra ʼn basiese fooi plus ʼn tarief per persoon volgens die reël: koste = 10 × mense + 18. Voltooi die tabel vir 2, 5 en 9 mense.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 2 mense', correctAnswer: '38', explanation: '10 × 2 + 18 = 20 + 18 = 38' },
          { label: 'b) Koste vir 5 mense', correctAnswer: '68', explanation: '10 × 5 + 18 = 50 + 18 = 68' },
          { label: 'c) Koste vir 9 mense', correctAnswer: '108', explanation: '10 × 9 + 18 = 90 + 18 = 108' },
        ] },
        { difficulty: 'Hard', question: 'Refilwe beweer die reël vir hierdie tabel is uitset = 4 × inset + 1, omdat dit vir die eerste paar werk.\n\nInset:  2,  4,  6\nUitset: 9, 19, 29\n\nToets haar reël teen elke paar. Is sy korrek?', answer: 'Refilwe is verkeerd. Kontroleer: 4 × 2 + 1 = 9 ✓ (werk vir die eerste paar), maar 4 × 4 + 1 = 17, nie 19 nie ✗. Die reël geld nie vir die tweede of derde paar nie, dus is dit verkeerd al het dit eers reg gelyk. Die werklike reël is uitset = 5 × inset − 1 (kontroleer: 5 × 2 − 1 = 9 ✓, 5 × 4 − 1 = 19 ✓, 5 × 6 − 1 = 29 ✓). Dit wys waarom ʼn reël teen elke paar getoets moet word, nie net die eerste een nie, voordat dit vertrou kan word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik die reël: uitset = 4 × inset − 9. Watter inset gee ʼn uitset van 19?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Stel op: 4 × inset − 9 = 19.\nTel 9 by albei kante: 4 × inset = 28.\nDeel deur 4: inset = 28 ÷ 4 = 7.\nKontroleer: 4 × 7 − 9 = 28 − 9 = 19 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tabel het insette 3, 5, 7 wat uitsette 16, 26, 36 gee. Vind eers die reël, en gebruik dit dan om die inset te vind wat ʼn uitset van 56 gee.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël', correctAnswer: 'uitset = 5 × inset + 1', correctAnswers: ['uitset = 5 × inset + 1', 'uitset = 5 x inset + 1', '5 × inset + 1', '5 x inset + 1', '5n + 1'], explanation: 'Verskille: 26 − 16 = 10 oor ʼn gaping van 2 insette, dus 10 ÷ 2 = 5. Probeer uitset = 5 × inset + b: 5 × 3 = 15, 16 − 15 = 1. Reël: uitset = 5 × inset + 1. Kontroleer: 5 × 5 + 1 = 26 ✓, 5 × 7 + 1 = 36 ✓.' },
          { label: 'b) Inset vir uitset 56', correctAnswer: '11', explanation: 'Stel op: 5 × inset + 1 = 56. Trek 1 af: 5 × inset = 55. Deel deur 5: inset = 11. Kontroleer: 5 × 11 + 1 = 56 ✓.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 4, 10, 16, 22 (reël: 6 × termnommer − 2).\n\na) Wat is die 40ste term?\nb) ʼn Verwante inset-uitsettabel gebruik dieselfde reël as ʼn "uitset = 6 × inset − 2"-masjien. Watter inset gee ʼn uitset van 70?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 40ste term', correctAnswer: '238', explanation: '6 × 40 − 2 = 240 − 2 = 238.' },
          { label: 'b) Inset vir uitset 70', correctAnswer: '12', explanation: 'Stel op: 6 × inset − 2 = 70. Tel 2 by: 6 × inset = 72. Deel deur 6: inset = 12. Kontroleer: 6 × 12 − 2 = 70 ✓.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone, geometriese patrone en inset-uitsettabelle bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
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
