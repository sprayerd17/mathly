import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometric pattern roles) ─────────────────────────────────
// pattern rule → orange  (#ea580c)
// shape names  → blue    (#2563eb)
// answer       → green   (#16a34a)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometriese Patrone',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN GEOMETRIESE PATROON?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-intro',
      title: "Wat is ʼn Geometriese Patroon?",
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Geometriese patroon is ʼn patroon wat met vorms gemaak word. Die vorms herhaal of groei op ʼn gereelde manier. Elke patroon het ʼn ${or('reël')} wat ons vertel wat volgende kom. Om die ${or('reël')} te vind, kyk hoe die vorms van een stap na die volgende verander — word meer vorms bygevoeg, verander hulle ${bl('kleur')}, of verander hulle ${bl('posisie')}?</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('patroonreël')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoorde')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: `Kyk na hierdie patroon — ${bl('driehoek')}, ${bl('sirkel')}, ${bl('driehoek')}, ${bl('sirkel')}. Wat kom volgende?`,
          answer: gr('ʼn Driehoek kom volgende.'),
          steps: [
            `Kyk na die ${bl('vorms')}. Hulle wissel af tussen ${bl('driehoek')} en ${bl('sirkel')}.`,
            `Die ${or('reël')} is: ${or('wissel af tussen driehoek en sirkel')}.`,
            `Die volgende vorm is ʼn ${gr('driehoek')}.`,
          ],
        },
        {
          question: 'ʼn Patroon begin met 1 vierkant in stap 1, 3 vierkante in stap 2, 5 vierkante in stap 3. Hoeveel vierkante is in stap 4?',
          answer: gr('7 vierkante'),
          steps: [
            `Kyk hoe die aantal ${bl('vierkante')} verander.`,
            `Van stap 1 na 2 tel ons 2 by. Van stap 2 na 3 tel ons 2 by.`,
            `Die ${or('reël')} is: ${or('tel elke keer 2 by')}.`,
            `Stap 4 = 5 + 2 = ${gr('7 vierkante')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — alternating shapes ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Patroon gaan: sirkel, vierkant, sirkel, vierkant. Watter vorm kom volgende?',
          answer: 'sirkel',
          checkMode: 'auto',
          correctAnswer: 'sirkel',
          explanation: 'Die patroon wissel af tussen sirkel en vierkant.\nPatroon: sirkel, vierkant, sirkel, vierkant, …\nNa vierkant kom sirkel ✓',
        },

        // ── Q2 Medium — growing triangles ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Patroon het 2 driehoeke in stap 1, 4 in stap 2, 6 in stap 3. Hoeveel driehoeke is in stap 4?',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Van stap 1 na 2: 4 − 2 = 2. Van stap 2 na 3: 6 − 4 = 2. Die reël is: tel elke keer 2 by.\nStap 4 = 6 + 2 = 8 driehoeke ✓',
        },

        // ── Q3 Hard — describe rule and extend ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon het 3 vorms in stap 1, 6 in stap 2, 9 in stap 3. Beskryf die reël en vind stap 6.',
          answer: 'Die reël is tel elke keer 3 by. Stap 4 = 12, stap 5 = 15, stap 6 = 18.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee geometriese patrone wys — ʼn afwisselende driehoek-sirkel-patroon en ʼn groeiende vierkantpatroon met die reël in oranje geëtiketteer" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn geometriese patroon is en hoe om die reël te vind deur te kyk hoe vorms van stap tot stap verander" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — PATRONE BESKRYF EN UITBREI
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-describing-extending',
      title: 'Patrone Beskryf en Uitbrei',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn patroon te <strong>beskryf</strong> verduidelik ons die ${or('reël')} in woorde. Byvoorbeeld: die ${or('reël')} is ${or('tel elke keer 2 vierkante by')}. Om ʼn patroon te <strong>verleng</strong> gebruik ons die ${or('reël')} om te teken of te skryf wat volgende kom. Kontroleer altyd dat jou ${or('reël')} werk van ${bl('stap 1')} na ${bl('stap 2')} voordat jy verder verleng.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('patroonreël')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stapnommers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoorde')}</span>` +
        `</div>` +

        // ── Two key skills ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee sleutelvaardighede</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Beskryf die patroon</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vind hoe die patroon van een stap na die volgende verander en stel die ${or('reël')} in woorde.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: "${or('Die reël is: tel elke keer 2 sirkels by.')}"</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Verleng die patroon</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Pas die ${or('reël')} herhaaldelik toe om te vind wat volgende kom — hou aan om stap vir stap by te tel.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: "${gr('Stap 4 = 6 + 2 = 8.')} ${gr('Stap 5 = 8 + 2 = 10.')}"</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd jou reël eerste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy verleng, bevestig dat die ${or('reël')} werk van ${bl('stap 1')} na ${bl('stap 2')} <strong>en</strong> van ${bl('stap 2')} na ${bl('stap 3')}. As dieselfde getal elke keer bygetel (of afgetrek) word, is jou ${or('reël')} korrek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `ʼn Patroon het ${bl('2')} sirkels in ${bl('stap 1')}, ${bl('4')} sirkels in ${bl('stap 2')}, ${bl('6')} sirkels in ${bl('stap 3')}. Beskryf die reël en vind ${bl('stap 5')}.`,
          answer: gr('Stap 5 het 10 sirkels.'),
          steps: [
            `Van ${bl('stap 1')} na ${bl('stap 2')}: 4 − 2 = 2. Ons tel 2 by.`,
            `Van ${bl('stap 2')} na ${bl('stap 3')}: 6 − 4 = 2. Ons tel 2 by.`,
            `Die ${or('reël')} is: ${or('tel elke keer 2 sirkels by')}.`,
            `${bl('Stap 4')} = 6 + 2 = ${gr('8')}.`,
            `${bl('Stap 5')} = 8 + 2 = ${gr('10 sirkels')}.`,
          ],
        },
        {
          question: `Sipho teken driehoeke in ʼn ry. ${bl('Ry 1')} het 3 driehoeke, ${bl('ry 2')} het 6, ${bl('ry 3')} het 9. Wat is die reël? Hoeveel driehoeke is in ${bl('ry 5')}?`,
          answer: gr('Ry 5 het 15 driehoeke.'),
          steps: [
            `Van ${bl('ry 1')} na ${bl('ry 2')}: 6 − 3 = 3. Ons tel 3 by.`,
            `Van ${bl('ry 2')} na ${bl('ry 3')}: 9 − 6 = 3. Ons tel 3 by.`,
            `Die ${or('reël')} is: ${or('tel elke keer 3 driehoeke by')}.`,
            `${bl('Ry 4')} = 9 + 3 = ${gr('12')}.`,
            `${bl('Ry 5')} = 12 + 3 = ${gr('15 driehoeke')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — step 2 of a growing square pattern ─────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Patroon begin by 5 vierkante en tel elke keer 2 by. Hoeveel vierkante is in stap 2?',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Stap 1 = 5 vierkante. Die reël is: tel elke keer 2 by.\nStap 2 = 5 + 2 = 7 vierkante ✓',
        },

        // ── Q5 Medium — Lerato's circles ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Lerato se patroon het 4 sirkels in stap 1, 7 in stap 2, 10 in stap 3.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Wat is die reël?',
              correctAnswer: 'tel elke keer 3 by',
              explanation: 'Van stap 1 na 2: 7 − 4 = 3. Van stap 2 na 3: 10 − 7 = 3. Die reël is: tel elke keer 3 by ✓',
            },
            {
              label: 'b) Hoeveel sirkels is in stap 5?',
              correctAnswer: '16',
              explanation: 'Stap 4 = 10 + 3 = 13. Stap 5 = 13 + 3 = 16 sirkels ✓',
            },
          ],
        },

        // ── Q6 Hard — doubling pattern ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon begin met 2 vorms en verdubbel elke keer. Skryf die aantal vorms vir stappe 1 tot 5.',
          answer: '2, 4, 8, 16, 32',
          checkMode: 'auto',
          correctAnswer: '2, 4, 8, 16, 32',
          explanation: 'Die reël is: verdubbel elke keer (vermenigvuldig met 2).\nStap 1 = 2. Stap 2 = 2 × 2 = 4. Stap 3 = 4 × 2 = 8. Stap 4 = 8 × 2 = 16. Stap 5 = 16 × 2 = 32 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee groeiende patrone wys — sirkels wat elke stap met 2 toeneem en driehoeke wat elke ry met 3 toeneem, met die reël in oranje en stapnommers in blou geëtiketteer" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe om die reël van ʼn geometriese patroon in woorde te beskryf en dit stap vir stap met die reël te verleng" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SKEP JOU EIE PATRONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-creating-own',
      title: 'Skep Jou Eie Patrone',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">Jy kan jou eie geometriese patroon skep deur ʼn vorm en ʼn ${or('reël')} te kies. Kies eers jou beginvorm en hoeveel. Besluit dan op jou ${or('reël')} — byvoorbeeld ${or('tel elke keer 2 by')} of ${or('verdubbel elke keer')}. Pas dan jou ${or('reël')} toe om elke stap te bou. Kontroleer altyd dat jou ${or('reël')} konsekwent werk van een ${bl('stap')} na die volgende.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('patroonreël')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stapnommers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoorde')}</span>` +
        `</div>` +

        // ── 4 steps to create your own pattern ──────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om jou eie patroon te skep</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Kies jou beginvorm</strong> — besluit watter ${bl('vorm')} om te gebruik en hoeveel om mee te begin by ${bl('stap 1')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Besluit op jou reël</strong> — stel jou ${or('reël')} duidelik, byvoorbeeld ${or('tel elke keer 2 by')} of ${or('verdubbel elke keer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Pas jou reël toe</strong> — gebruik die ${or('reël')} om elke stap uit te werk en teken die ${gr('antwoord')} vir elke ${bl('stap')} aan.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer jou reël</strong> — bevestig altyd dat jou ${or('reël')} konsekwent werk van een ${bl('stap')} na die volgende voordat jy verder gaan.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Stel jou reël duidelik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skryf jou ${or('reël')} altyd in ʼn volledige sin voordat jy die patroon begin bou — byvoorbeeld: "${or('Begin by 2 en tel elke keer 3 by.')}" Dit maak dit maklik om elke stap te kontroleer en foute vroeg raak te sien.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Skep ʼn patroon wat met ${bl('1')} driehoek begin en elke keer ${or('verdubbel')}. Wys die eerste ${bl('4')} stappe.`,
          answer: gr('Stap 4 het 8 driehoeke.'),
          steps: [
            `${bl('Stap 1')} = ${gr('1 driehoek')}. Dit is ons beginhoeveelheid.`,
            `Die ${or('reël')} is: ${or('verdubbel elke keer')} (vermenigvuldig met 2).`,
            `${bl('Stap 2')} = 1 × 2 = ${gr('2 driehoeke')}.`,
            `${bl('Stap 3')} = 2 × 2 = ${gr('4 driehoeke')}.`,
            `${bl('Stap 4')} = 4 × 2 = ${gr('8 driehoeke')}.`,
          ],
        },
        {
          question: `Amahle skep ʼn patroon met ${bl('vierkante')}. Sy begin met ${bl('2')} vierkante en ${or('tel 3 by')} elke keer. Teken die eerste ${bl('4')} stappe.`,
          answer: gr('Stap 4 het 11 vierkante.'),
          steps: [
            `${bl('Stap 1')} = ${gr('2 vierkante')}. Dit is ons beginhoeveelheid.`,
            `${bl('Stap 2')} = 2 + 3 = ${gr('5 vierkante')}.`,
            `${bl('Stap 3')} = 5 + 3 = ${gr('8 vierkante')}.`,
            `${bl('Stap 4')} = 8 + 3 = ${gr('11 vierkante')}.`,
            `Die ${or('reël')} is: ${or('begin by 2 en tel elke keer 3 by')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — Thabo's triangles ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo begin met 1 driehoek en tel elke keer 4 by. Hoeveel driehoeke is in stap 3?',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Stap 1 = 1 driehoek. Die reël is: tel elke keer 4 by.\nStap 2 = 1 + 4 = 5. Stap 3 = 5 + 4 = 9 driehoeke ✓',
        },

        // ── Q8 Medium — create a pattern ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skep ʼn patroon wat met 3 vierkante begin en elke keer 5 bytel. Skryf die eerste 4 stappe.',
          answer: '3, 8, 13, 18',
          checkMode: 'auto',
          correctAnswer: '3, 8, 13, 18',
          explanation: 'Die reël is: begin by 3 en tel elke keer 5 by.\nStap 1 = 3. Stap 2 = 3 + 5 = 8. Stap 3 = 8 + 5 = 13. Stap 4 = 13 + 5 = 18 ✓',
        },

        // ── Q9 Hard — identify error in pattern ──────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho sê sy patroonreël is tel elke keer 4 by. Sy stappe is 2, 6, 10, 15. Is hy korrek? Verduidelik.",
          answer: 'Nee — van 10 na 15 is slegs 5, nie 4 nie. Die reël breek by stap 4, dus is die patroon verkeerd.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee geskepte patrone wys — driehoeke wat elke stap verdubbel (1 2 4 8) en vierkante wat elke stap met 3 groei (2 5 8 11), met die reël in oranje en stapnommers in blou geëtiketteer" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om jou eie geometriese patroon te skep deur ʼn beginvorm en ʼn reël te kies en dan die reël stap vir stap toe te pas" />',
    },
  ],
  scoreMessages: [
    { minScore: 7, message: 'Uitstekend! ʼn Perfekte telling — jy het geometriese patrone vir Graad 5 heeltemal bemeester. Hou so aan!' },
    { minScore: 5, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van geometriese patrone. Gaan die gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 3, message: 'Goed gedoen! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde weer deur, en probeer dan weer.' },
  ],
}

export const resultsConfig = {
  totalMarks: 9,
  messages: [
    { minPct: 100, message: 'Uitstekend! Jy het geometriese patrone bemeester.' },
    { minPct: 75, message: 'Goeie werk! Jy verstaan patrone goed.' },
    { minPct: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
    { minPct: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
  ],
}
