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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-3 Identifiseer/verleng eenvoudige patrone | 4-7 Beskryf die
    // reël in woorde | 8-11 Werklike-lewe woordprobleme | 12-15 Vergelyk twee
    // patrone | 16-17 Foutopsporing | 18-19 Skep-jou-eie / omgekeerde redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Patroon gaan: ster, maan, ster, maan, ster. Wat kom volgende?', answer: 'maan', checkMode: 'auto', correctAnswer: 'maan', correctAnswers: ['maan', 'ʼn maan'], explanation: 'Die patroon wissel af tussen ster en maan.\nPatroon: ster, maan, ster, maan, ster, …\nNa ster kom maan ✓' },
        { difficulty: 'Easy', question: 'Stap 1 het 3 kolletjies, stap 2 het 5 kolletjies, stap 3 het 7 kolletjies. Hoeveel kolletjies is in stap 4?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 kolletjies'], explanation: 'Van stap 1 na 2: 5 − 3 = 2. Van stap 2 na 3: 7 − 5 = 2. Die patroon tel elke keer 2 by.\nStap 4 = 7 + 2 = 9 kolletjies ✓' },
        { difficulty: 'Easy', question: 'Kyk na hierdie vormpatroon: seshoek, seshoek, vyfhoek, seshoek, seshoek, vyfhoek. Watter vorm kom volgende?', answer: 'seshoek', checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'ʼn seshoek'], explanation: 'Die herhalende eenheid is seshoek, seshoek, vyfhoek (3 vorms). Na die vyfhoek begin die eenheid weer.\nDie volgende vorm is ʼn seshoek ✓' },
        { difficulty: 'Easy', question: 'ʼn Patroon van vierkante het 4 vierkante in stap 1, 7 vierkante in stap 2, 10 vierkante in stap 3. Hoeveel vierkante is in stap 4?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 vierkante'], explanation: 'Van stap 1 na 2: 7 − 4 = 3. Van stap 2 na 3: 10 − 7 = 3. Die patroon tel elke keer 3 by.\nStap 4 = 10 + 3 = 13 vierkante ✓' },
        { difficulty: 'Easy-Medium', question: 'Stap 1 het 6 driehoeke, stap 2 het 10 driehoeke, stap 3 het 14 driehoeke. Stel die reël, en vind dan stap 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 4 by', explanation: 'Van stap 1 na 2: 10 − 6 = 4. Van stap 2 na 3: 14 − 10 = 4. Die reël is: tel elke keer 4 by ✓' },
          { label: 'b) Hoeveel driehoeke is in stap 5?', correctAnswer: '22', explanation: 'Stap 4 = 14 + 4 = 18. Stap 5 = 18 + 4 = 22 driehoeke ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon begin by 20 en verminder: 20, 17, 14. Beskryf die reël in ʼn volledige sin, en vind dan stap 6.', answer: 'Die reël is: begin by 20 en trek elke keer 3 af. Stap 6 = 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Ry 1 het 5 fiches, ry 2 het 9 fiches, ry 3 het 13 fiches. Vind die reël en gebruik dit om ry 6 uit te werk.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 4 by', explanation: 'Van ry 1 na 2: 9 − 5 = 4. Van ry 2 na 3: 13 − 9 = 4. Die reël is: tel elke keer 4 by ✓' },
          { label: 'b) Hoeveel fiches is in ry 6?', correctAnswer: '25', explanation: 'Ry 4 = 13 + 4 = 17. Ry 5 = 17 + 4 = 21. Ry 6 = 21 + 4 = 25 fiches ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi sê haar patroon 8, 13, 18, 23 het die reël "tel elke keer 5 by". Verduidelik in woorde waarom sy korrek is, en gee die volgende term.', answer: 'Sy is korrek omdat elke opeenvolgende paar met presies 5 toeneem: 13 − 8 = 5, 18 − 13 = 5, 23 − 18 = 5. Die volgende term is 23 + 5 = 28.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Paadjie word met plaveisteen belê. Ry 1 gebruik 3 stene, ry 2 gebruik 6 stene, ry 3 gebruik 9 stene. As hierdie patroon voortduur, hoeveel stene word vir ry 5 benodig?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 stene'], explanation: 'Van ry 1 na 2: 6 − 3 = 3. Van ry 2 na 3: 9 − 6 = 3. Die reël is tel elke keer 3 stene by.\nRy 4 = 9 + 3 = 12. Ry 5 = 12 + 3 = 15 stene ✓' },
        { difficulty: 'Medium', question: 'By ʼn skoolsaal word stoele in rye vir ʼn saalbyeenkoms uitgesit. 1 ry huisves 8 stoele, 2 rye huisves 16 stoele, 3 rye huisves 24 stoele. Hoeveel stoele word vir 5 rye benodig?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 stoele'], explanation: 'Elke ekstra ry tel 8 stoele by (16 − 8 = 8, 24 − 16 = 8). Die reël is tel elke keer 8 stoele per ry by.\n4 rye = 24 + 8 = 32. 5 rye = 32 + 8 = 40 stoele ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer plant saailinge in tuinbeddings. Bedding 1 het 6 saailinge, bedding 2 het 10 saailinge, bedding 3 het 14 saailinge, en volg elke keer dieselfde reël. Hoeveel saailinge word altesaam in die eerste 4 beddings geplant?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 saailinge'], explanation: 'Die reël is tel elke keer 4 saailinge by (10 − 6 = 4, 14 − 10 = 4). Bedding 4 = 14 + 4 = 18.\nTotaal = 6 + 10 + 14 + 18 = 48 saailinge ✓' },
        { difficulty: 'Medium', question: 'Palesa ryg krale aan ʼn armband. Armband 1 het 5 krale, armband 2 het 9 krale, armband 3 het 13 krale. As die patroon voortduur, hoeveel krale is op armband 6?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 krale'], explanation: 'Die reël is tel elke keer 4 krale by (9 − 5 = 4, 13 − 9 = 4).\nArmband 4 = 17, armband 5 = 21, armband 6 = 25 krale ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee fietsryers begin op dieselfde dag oefen. Fietsryer A fiets 3 km op dag 1 en verhoog haar afstand elke dag met 4 km. Fietsryer B fiets 9 km op dag 1 en verhoog sy afstand elke dag met 2 km. Op watter dag fiets hulle presies dieselfde afstand?', answer: 'dag 4', checkMode: 'auto', correctAnswer: 'dag4', correctAnswers: ['dag 4', 'Dag 4', '4'], explanation: 'Fietsryer A: 3, 7, 11, 15, … Fietsryer B: 9, 11, 13, 15, …\nDag 1: 3 teenoor 9. Dag 2: 7 teenoor 11. Dag 3: 11 teenoor 13. Dag 4: 15 teenoor 15 — gelyk!\nHulle fiets dieselfde afstand op dag 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Speletjieklub hou twee hoëtelling-patrone dop. Patroon A begin by 1 punt en verdubbel elke rondte. Patroon B begin by 4 punte en tel elke rondte 4 punte by. Speel albei patrone uit van rondte 1 tot rondte 6, en verduidelik by watter rondte Patroon A Patroon B verbysteek.', answer: 'Patroon A: 1, 2, 4, 8, 16, 32. Patroon B: 4, 8, 12, 16, 20, 24. By rondte 5 is A = 16 steeds minder as B = 20. By rondte 6 is A = 32 meer as B = 24, dus steek Patroon A Patroon B by rondte 6 verby.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Twee klein besighede hou hul weeklikse verkope dop. Winkel A verkoop 5 items in week 1 en daarna elke week nog 3 meer. Winkel B verkoop 2 items in week 1 en daarna elke week nog 5 meer. Watter winkel bereik 32 items verkoop eerste?', answer: 'Winkel B', checkMode: 'auto', correctAnswer: 'WinkelB', correctAnswers: ['WinkelB', 'Winkel B', 'B'], explanation: 'Winkel A: 5, 8, 11, 14, 17, 20, 23, 26, 29, 32 (bereik 32 by week 10).\nWinkel B: 2, 7, 12, 17, 22, 27, 32 (bereik 32 by week 7).\nWinkel B bereik 32 items eerste, by week 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee watertenks word gevul. Tenk A begin met 10 liter en kry elke uur 5 liter by. Tenk B begin met 4 liter en kry elke uur 7 liter by. Na 6 ure, watter tenk bevat meer water, en met hoeveel?', answer: 'Tenk A: 10, 15, 20, 25, 30, 35 → 35 liter na 6 ure. Tenk B: 4, 11, 18, 25, 32, 39 → 39 liter na 6 ure. Tenk B bevat meer, met 4 liter.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho lewer sy huiswerk in met die patroon 4, 9, 14, 18, 23, en skryf daaronder: "My reël is tel elke keer 5 by." Merk sy werk — is hy reg? Indien nie, wys presies by watter stap die reël breek.', answer: 'Hy is nie heeltemal reg nie. Die reël breek tussen stap 3 en stap 4: 14 na 18 is slegs +4, nie +5 nie. Elke ander paar (4→9, 9→14, 18→23) tel wel 5 by, so die patroon is slegs op daardie een plek onkonsekwent.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê haar patroon verdubbel elke keer: 3, 6, 12, 20, 40. Is hierdie bewering waar vir elke stap? Verduidelik jou redenasie deur elke paar opeenvolgende terme te kontroleer.', answer: 'Nee — van 12 na 20 is nie verdubbeling nie (12 × 2 = 24, nie 20 nie), so die reël breek tussen stap 3 en stap 4. Die ander pare (3→6, 6→12, 20→40) verdubbel wel korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Jy stel ʼn getalpatroon vir ʼn klaskompetisie op. Dit moet by 4 begin en elke stap 6 bytel. Skryf die eerste 5 waardes neer wat die klas sal sien, en skryf die reël wat jy gebruik het as ʼn volledige sin sodat die klas hul werk kan nagaan.', answer: 'Waardes: 4, 10, 16, 22, 28. Die reël is: begin by 4 en tel elke keer 6 by.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Bladsy is uit Zinhle se patroonboek geskeur. Al wat oorbly is: die reël was "tel elke keer 7 by", en stap 5 was 44. Herwin die ontbrekende waarde by stap 1.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Om van stap 5 na stap 1 terug te werk, trek ons 4 keer 7 af: 44 − 7 = 37 (stap 4), 37 − 7 = 30 (stap 3), 30 − 7 = 23 (stap 2), 23 − 7 = 16 (stap 1).\nKontroleer: 16, 23, 30, 37, 44 — elke term tel 7 by ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die identifisering, beskrywing en verlenging van geometriese patrone bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Patroon gaan: son, wolk, son, wolk, son. Wat kom volgende?', answer: 'wolk', checkMode: 'auto', correctAnswer: 'wolk', correctAnswers: ['wolk', 'ʼn wolk'], explanation: 'Die patroon wissel af tussen son en wolk.\nPatroon: son, wolk, son, wolk, son, …\nNa son kom wolk ✓' },
        { difficulty: 'Easy', question: 'Stap 1 het 2 vierkante, stap 2 het 5 vierkante, stap 3 het 8 vierkante. Hoeveel vierkante is in stap 4?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 vierkante'], explanation: 'Van stap 1 na 2: 5 − 2 = 3. Van stap 2 na 3: 8 − 5 = 3. Die patroon tel elke keer 3 by.\nStap 4 = 8 + 3 = 11 vierkante ✓' },
        { difficulty: 'Easy', question: 'Kyk na hierdie vormpatroon: ruit, ruit, sirkel, ruit, ruit, sirkel. Watter vorm kom volgende?', answer: 'ruit', checkMode: 'auto', correctAnswer: 'ruit', correctAnswers: ['ruit', 'ʼn ruit'], explanation: 'Die herhalende eenheid is ruit, ruit, sirkel (3 vorms). Na die sirkel begin die eenheid weer.\nDie volgende vorm is ʼn ruit ✓' },
        { difficulty: 'Easy', question: 'ʼn Patroon van sterre het 5 sterre in stap 1, 9 sterre in stap 2, 13 sterre in stap 3. Hoeveel sterre is in stap 4?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 sterre'], explanation: 'Van stap 1 na 2: 9 − 5 = 4. Van stap 2 na 3: 13 − 9 = 4. Die patroon tel elke keer 4 by.\nStap 4 = 13 + 4 = 17 sterre ✓' },
        { difficulty: 'Easy-Medium', question: 'Stap 1 het 4 sirkels, stap 2 het 9 sirkels, stap 3 het 14 sirkels. Stel die reël, en vind dan stap 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 5 by', explanation: 'Van stap 1 na 2: 9 − 4 = 5. Van stap 2 na 3: 14 − 9 = 5. Die reël is: tel elke keer 5 by ✓' },
          { label: 'b) Hoeveel sirkels is in stap 5?', correctAnswer: '24', explanation: 'Stap 4 = 14 + 5 = 19. Stap 5 = 19 + 5 = 24 sirkels ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon begin by 30 en verminder: 30, 25, 20. Beskryf die reël in ʼn volledige sin, en vind dan stap 6.', answer: 'Die reël is: begin by 30 en trek elke keer 5 af. Stap 6 = 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Ry 1 het 7 blokke, ry 2 het 12 blokke, ry 3 het 17 blokke. Vind die reël en gebruik dit om ry 6 uit te werk.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 5 by', explanation: 'Van ry 1 na 2: 12 − 7 = 5. Van ry 2 na 3: 17 − 12 = 5. Die reël is: tel elke keer 5 by ✓' },
          { label: 'b) Hoeveel blokke is in ry 6?', correctAnswer: '32', explanation: 'Ry 4 = 17 + 5 = 22. Ry 5 = 22 + 5 = 27. Ry 6 = 27 + 5 = 32 blokke ✓' },
        ] },
        { difficulty: 'Medium', question: 'Bongani sê sy patroon 6, 11, 16, 21 het die reël "tel elke keer 5 by". Verduidelik in woorde waarom hy korrek is, en gee die volgende term.', answer: 'Hy is korrek omdat elke opeenvolgende paar met presies 5 toeneem: 11 − 6 = 5, 16 − 11 = 5, 21 − 16 = 5. Die volgende term is 21 + 5 = 26.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Paadjie word met plaveisteen belê. Ry 1 gebruik 4 stene, ry 2 gebruik 8 stene, ry 3 gebruik 12 stene. As hierdie patroon voortduur, hoeveel stene word vir ry 5 benodig?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 stene'], explanation: 'Van ry 1 na 2: 8 − 4 = 4. Van ry 2 na 3: 12 − 8 = 4. Die reël is tel elke keer 4 stene by.\nRy 4 = 12 + 4 = 16. Ry 5 = 16 + 4 = 20 stene ✓' },
        { difficulty: 'Medium', question: 'By ʼn troue-lokaal word stoele in rye uitgesit. 1 ry huisves 6 stoele, 2 rye huisves 12 stoele, 3 rye huisves 18 stoele. Hoeveel stoele word vir 5 rye benodig?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 stoele'], explanation: 'Elke ekstra ry tel 6 stoele by (12 − 6 = 6, 18 − 12 = 6). Die reël is tel elke keer 6 stoele per ry by.\n4 rye = 18 + 6 = 24. 5 rye = 24 + 6 = 30 stoele ✓' },
        { difficulty: 'Medium', question: 'ʼn Tuinier plant saailinge in tuinbeddings. Bedding 1 het 8 saailinge, bedding 2 het 13 saailinge, bedding 3 het 18 saailinge, en volg elke keer dieselfde reël. Hoeveel saailinge word altesaam in die eerste 4 beddings geplant?', answer: '62', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62 saailinge'], explanation: 'Die reël is tel elke keer 5 saailinge by (13 − 8 = 5, 18 − 13 = 5). Bedding 4 = 18 + 5 = 23.\nTotaal = 8 + 13 + 18 + 23 = 62 saailinge ✓' },
        { difficulty: 'Medium', question: 'Amahle ryg krale aan ʼn armband. Armband 1 het 6 krale, armband 2 het 11 krale, armband 3 het 16 krale. As die patroon voortduur, hoeveel krale is op armband 6?', answer: '31', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31 krale'], explanation: 'Die reël is tel elke keer 5 krale by (11 − 6 = 5, 16 − 11 = 5).\nArmband 4 = 21, armband 5 = 26, armband 6 = 31 krale ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee plante word in sentimeter gemeet. Plant A is 4 cm lank en groei elke week 5 cm. Plant B is 14 cm lank en groei elke week 2 cm. Volg albei plante van week 1 tot week 5 — in watter week word Plant A eerste langer as Plant B?', answer: 'Plant A: 4, 9, 14, 19, 24. Plant B: 14, 16, 18, 20, 22. By week 4 is A = 19 steeds korter as B = 20. By week 5 is A = 24 langer as B = 22, dus word Plant A eerste langer in week 5.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Patroon A begin by 3 en verdubbel elke keer. Patroon B begin by 9 en tel elke keer 9 by. By watter stap haal Patroon A eerste Patroon B in?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'stap 5'], explanation: 'Patroon A: 3, 6, 12, 24, 48, … Patroon B: 9, 18, 27, 36, 45, …\nStap 4: A = 24, B = 36 (A steeds kleiner). Stap 5: A = 48, B = 45 (A nou groter).\nPatroon A haal Patroon B eerste in by stap 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee biblioteke laat hul boekversamelings groei. Biblioteek A het 6 boeke en tel elke maand 4 boeke by. Biblioteek B het 3 boeke en tel elke maand 7 boeke by. Watter biblioteek bereik 45 boeke eerste?', answer: 'Biblioteek B', checkMode: 'auto', correctAnswer: 'BiblioteekB', correctAnswers: ['BiblioteekB', 'Biblioteek B', 'B'], explanation: 'Biblioteek A: 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46 (verby 45 by maand 11, op 46).\nBiblioteek B: 3, 10, 17, 24, 31, 38, 45 (bereik presies 45 by maand 7).\nBiblioteek B bereik 45 boeke eerste, by maand 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee spaarblikkies word volgens ʼn weeklikse skedule gevul. Blikkie A begin met R12 en R4 word elke week bygevoeg. Blikkie B begin met R3 en R8 word elke week bygevoeg. Na 4 weke, watter blikkie het meer geld, en met hoeveel?', answer: 'Blikkie A: 12, 16, 20, 24 → R24 na week 4. Blikkie B: 3, 11, 19, 27 → R27 na week 4. Blikkie B het meer, met R3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo lewer sy huiswerk in met die patroon 5, 11, 17, 22, 28, en skryf daaronder: "My reël is tel elke keer 6 by." Merk sy werk — is hy reg? Indien nie, wys presies by watter stap die reël breek.', answer: 'Hy is nie heeltemal reg nie. Die reël breek tussen stap 3 en stap 4: 17 na 22 is slegs +5, nie +6 nie. Elke ander paar (5→11, 11→17, 22→28) tel wel 6 by, so die patroon is slegs op daardie een plek onkonsekwent.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê haar patroon verdriedubbel elke keer: 2, 6, 18, 48, 144. Is hierdie bewering waar vir elke stap? Verduidelik jou redenasie deur elke paar opeenvolgende terme te kontroleer.', answer: 'Nee — van 18 na 48 is nie verdriedubbeling nie (18 × 3 = 54, nie 48 nie), so die reël breek tussen stap 3 en stap 4. Die ander pare (2→6, 6→18, 48→144) verdriedubbel wel korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Jy stel ʼn getalpatroon vir ʼn klaskompetisie op. Dit moet by 7 begin en elke stap 4 bytel. Skryf die eerste 5 waardes neer wat die klas sal sien, en skryf die reël wat jy gebruik het as ʼn volledige sin sodat die klas hul werk kan nagaan.', answer: 'Waardes: 7, 11, 15, 19, 23. Die reël is: begin by 7 en tel elke keer 4 by.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Bladsy is uit Kabelo se patroonboek geskeur. Al wat oorbly is: die reël was "tel elke keer 6 by", en stap 5 was 38. Herwin die ontbrekende waarde by stap 1.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'Om van stap 5 na stap 1 terug te werk, trek ons 4 keer 6 af: 38 − 6 = 32 (stap 4), 32 − 6 = 26 (stap 3), 26 − 6 = 20 (stap 2), 20 − 6 = 14 (stap 1).\nKontroleer: 14, 20, 26, 32, 38 — elke term tel 6 by ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan geometriese patrone met selfvertroue beskryf, verleng en vergelyk.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde bloklaaiuit, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Patroon gaan: blaar, blom, blaar, blom, blaar. Wat kom volgende?', answer: 'blom', checkMode: 'auto', correctAnswer: 'blom', correctAnswers: ['blom', 'ʼn blom'], explanation: 'Die patroon wissel af tussen blaar en blom.\nPatroon: blaar, blom, blaar, blom, blaar, …\nNa blaar kom blom ✓' },
        { difficulty: 'Easy', question: 'Stap 1 het 3 driehoeke, stap 2 het 6 driehoeke, stap 3 het 9 driehoeke. Hoeveel driehoeke is in stap 4?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 driehoeke'], explanation: 'Van stap 1 na 2: 6 − 3 = 3. Van stap 2 na 3: 9 − 6 = 3. Die patroon tel elke keer 3 by.\nStap 4 = 9 + 3 = 12 driehoeke ✓' },
        { difficulty: 'Easy', question: 'Kyk na hierdie vormpatroon: vierkant, sirkel, sirkel, vierkant, sirkel, sirkel. Watter vorm kom volgende?', answer: 'vierkant', checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'ʼn vierkant'], explanation: 'Die herhalende eenheid is vierkant, sirkel, sirkel (3 vorms). Na die tweede sirkel begin die eenheid weer.\nDie volgende vorm is ʼn vierkant ✓' },
        { difficulty: 'Easy', question: 'ʼn Patroon van vyfhoeke het 7 vyfhoeke in stap 1, 10 vyfhoeke in stap 2, 13 vyfhoeke in stap 3. Hoeveel vyfhoeke is in stap 4?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 vyfhoeke'], explanation: 'Van stap 1 na 2: 10 − 7 = 3. Van stap 2 na 3: 13 − 10 = 3. Die patroon tel elke keer 3 by.\nStap 4 = 13 + 3 = 16 vyfhoeke ✓' },
        { difficulty: 'Easy-Medium', question: 'Stap 1 het 9 kolletjies, stap 2 het 15 kolletjies, stap 3 het 21 kolletjies. Stel die reël, en vind dan stap 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 6 by', explanation: 'Van stap 1 na 2: 15 − 9 = 6. Van stap 2 na 3: 21 − 15 = 6. Die reël is: tel elke keer 6 by ✓' },
          { label: 'b) Hoeveel kolletjies is in stap 5?', correctAnswer: '33', explanation: 'Stap 4 = 21 + 6 = 27. Stap 5 = 27 + 6 = 33 kolletjies ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon begin by 40 en verminder: 40, 34, 28. Beskryf die reël in ʼn volledige sin, en vind dan stap 6.', answer: 'Die reël is: begin by 40 en trek elke keer 6 af. Stap 6 = 10.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Ry 1 het 4 blokke, ry 2 het 10 blokke, ry 3 het 16 blokke. Vind die reël en gebruik dit om ry 6 uit te werk.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'tel elke keer 6 by', explanation: 'Van ry 1 na 2: 10 − 4 = 6. Van ry 2 na 3: 16 − 10 = 6. Die reël is: tel elke keer 6 by ✓' },
          { label: 'b) Hoeveel blokke is in ry 6?', correctAnswer: '34', explanation: 'Ry 4 = 16 + 6 = 22. Ry 5 = 22 + 6 = 28. Ry 6 = 28 + 6 = 34 blokke ✓' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe sê haar patroon 10, 17, 24, 31 het die reël "tel elke keer 7 by". Verduidelik in woorde waarom sy korrek is, en gee die volgende term.', answer: 'Sy is korrek omdat elke opeenvolgende paar met presies 7 toeneem: 17 − 10 = 7, 24 − 17 = 7, 31 − 24 = 7. Die volgende term is 31 + 7 = 38.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Paadjie word met plaveisteen belê. Ry 1 gebruik 5 stene, ry 2 gebruik 9 stene, ry 3 gebruik 13 stene. As hierdie patroon voortduur, hoeveel stene word vir ry 5 benodig?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21 stene'], explanation: 'Van ry 1 na 2: 9 − 5 = 4. Van ry 2 na 3: 13 − 9 = 4. Die reël is tel elke keer 4 stene by.\nRy 4 = 13 + 4 = 17. Ry 5 = 17 + 4 = 21 stene ✓' },
        { difficulty: 'Medium', question: 'By ʼn konferensiesentrum word stoele in rye uitgesit. 1 ry huisves 7 stoele, 2 rye huisves 14 stoele, 3 rye huisves 21 stoele. Hoeveel stoele word vir 5 rye benodig?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 stoele'], explanation: 'Elke ekstra ry tel 7 stoele by (14 − 7 = 7, 21 − 14 = 7). Die reël is tel elke keer 7 stoele per ry by.\n4 rye = 21 + 7 = 28. 5 rye = 28 + 7 = 35 stoele ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer plant saailinge in tuinbeddings. Bedding 1 het 9 saailinge, bedding 2 het 15 saailinge, bedding 3 het 21 saailinge, en volg elke keer dieselfde reël. Hoeveel saailinge word altesaam in die eerste 4 beddings geplant?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 saailinge'], explanation: 'Die reël is tel elke keer 6 saailinge by (15 − 9 = 6, 21 − 15 = 6). Bedding 4 = 21 + 6 = 27.\nTotaal = 9 + 15 + 21 + 27 = 72 saailinge ✓' },
        { difficulty: 'Medium', question: 'Zanele ryg krale aan ʼn armband. Armband 1 het 8 krale, armband 2 het 13 krale, armband 3 het 18 krale. As die patroon voortduur, hoeveel krale is op armband 6?', answer: '33', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33 krale'], explanation: 'Die reël is tel elke keer 5 krale by (13 − 8 = 5, 18 − 13 = 5).\nArmband 4 = 23, armband 5 = 28, armband 6 = 33 krale ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee hardlopers hou hul totale afstand in kilometer dop. Hardloper A het reeds 6 km gehardloop en tel elke sessie 4 km by. Hardloper B het reeds 20 km gehardloop en tel elke sessie 1 km by. Volg albei hardlopers van sessie 1 tot sessie 6 — in watter sessie hardloop Hardloper A eerste verder as Hardloper B?', answer: 'Hardloper A: 6, 10, 14, 18, 22, 26. Hardloper B: 20, 21, 22, 23, 24, 25. By sessie 5 is A = 22 steeds minder as B = 24. By sessie 6 is A = 26 meer as B = 25, dus hardloop Hardloper A eerste verder in sessie 6.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Patroon A begin by 5 en verdubbel elke keer. Patroon B begin by 15 en tel elke keer 15 by. By watter stap haal Patroon A eerste Patroon B in?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'stap 5'], explanation: 'Patroon A: 5, 10, 20, 40, 80, … Patroon B: 15, 30, 45, 60, 75, …\nStap 4: A = 40, B = 60 (A steeds kleiner). Stap 5: A = 80, B = 75 (A nou groter).\nPatroon A haal Patroon B eerste in by stap 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee groentetuine hou hul totale oes in kilogram dop. Tuin A het reeds 10 kg gepluk en tel elke week 6 kg by. Tuin B het reeds 4 kg gepluk en tel elke week 9 kg by. Watter tuin bereik ʼn totaal van 58 kg eerste?', answer: 'Tuin B', checkMode: 'auto', correctAnswer: 'TuinB', correctAnswers: ['TuinB', 'Tuin B', 'B'], explanation: 'Tuin A: 10, 16, 22, 28, 34, 40, 46, 52, 58 (bereik 58 kg by week 9).\nTuin B: 4, 13, 22, 31, 40, 49, 58 (bereik 58 kg by week 7).\nTuin B bereik 58 kg eerste, by week 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee watertenks word gevul. Tenk A begin met 8 liter en kry elke uur 6 liter by. Tenk B begin met 2 liter en kry elke uur 9 liter by. Na 3 ure, vergelyk die twee tenks — is een groter, of is hulle gelyk?', answer: 'Tenk A: 8, 14, 20 → 20 liter na 3 ure. Tenk B: 2, 11, 20 → 20 liter na 3 ure. Die twee tenks bevat presies dieselfde hoeveelheid na 3 ure — hulle is gelyk.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso lewer sy huiswerk in met die patroon 6, 13, 20, 26, 33, en skryf daaronder: "My reël is tel elke keer 7 by." Merk sy werk — is hy reg? Indien nie, wys presies by watter stap die reël breek.', answer: 'Hy is nie heeltemal reg nie. Die reël breek tussen stap 3 en stap 4: 20 na 26 is slegs +6, nie +7 nie. Elke ander paar (6→13, 13→20, 26→33) tel wel 7 by, so die patroon is slegs op daardie een plek onkonsekwent.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê haar patroon verdubbel elke keer: 4, 8, 16, 30, 60. Is hierdie bewering waar vir elke stap? Verduidelik jou redenasie deur elke paar opeenvolgende terme te kontroleer.', answer: 'Nee — van 16 na 30 is nie verdubbeling nie (16 × 2 = 32, nie 30 nie), so die reël breek tussen stap 3 en stap 4. Die ander pare (4→8, 8→16, 30→60) verdubbel wel korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Jy stel ʼn getalpatroon vir ʼn klaskompetisie op. Dit moet by 9 begin en elke stap 5 bytel. Skryf die eerste 5 waardes neer wat die klas sal sien, en skryf die reël wat jy gebruik het as ʼn volledige sin sodat die klas hul werk kan nagaan.', answer: 'Waardes: 9, 14, 19, 24, 29. Die reël is: begin by 9 en tel elke keer 5 by.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Bladsy is uit Amahle se patroonboek geskeur. Al wat oorbly is: die reël was "tel elke keer 8 by", en stap 5 was 51. Herwin die ontbrekende waarde by stap 1.', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19'], explanation: 'Om van stap 5 na stap 1 terug te werk, trek ons 4 keer 8 af: 51 − 8 = 43 (stap 4), 43 − 8 = 35 (stap 3), 35 − 8 = 27 (stap 2), 27 − 8 = 19 (stap 1).\nKontroleer: 19, 27, 35, 43, 51 — elke term tel 8 by ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan patroonreëls met selfvertroue op werklike-lewe probleme en vergelykings toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
