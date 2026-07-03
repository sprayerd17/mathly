import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// decimal point   → blue    (#2563eb)
// carried digits  → purple  (#7c3aed)
// zeros added     → orange  (#ea580c)
// answer          → green   (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Desimale Breuke',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — ALLE BEWERKINGE MET DESIMALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'all-operations-with-decimals',
      title: 'Alle Bewerkinge met Desimale',
      icon: '·',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 7 tel ons op, trek af, vermenigvuldig en deel desimale breuke met selfvertroue. Om op te tel of af te trek, lyn ons desimale kommas op en voeg nulle by waar nodig. Om te vermenigvuldig, ignoreer ons die desimale komma, vermenigvuldig soos heelgetalle, en tel dan die totale aantal desimale plekke om die komma korrek te plaas. Om te deel, hou ons die desimale komma in dieselfde posisie wanneer ons deur ʼn heelgetal deel, of skuif dit wanneer ons deur magte van 10 deel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale komma')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('oorgedraagde syfers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nulle bygevoeg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Adding and Subtracting ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Optel en Aftrek van Desimale</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Lyn die ${bl('desimale kommas')} vertikaal op sodat tiendes onder tiendes, honderdstes onder honderdstes, ensovoorts, is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Voeg ${or('nulle')} aan die einde van korter desimale by sodat elke getal dieselfde aantal desimale plekke het.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Tel op of trek af kolom vir kolom van regs na links, deur ${pu('syfers')} oor te dra of te leen presies soos met heelgetalle.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Plaas die ${bl('desimale komma')} in die ${gr('antwoord')} direk onder die ander desimale kommas.</p>` +
        `</div>` +

        `</div>` +

        // ── Multiplying ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vermenigvuldiging van Desimale</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Ignoreer die ${bl('desimale kommas')} heeltemal en vermenigvuldig die getalle asof dit heelgetalle is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Tel die <strong>totale</strong> aantal desimale plekke in albei getalle saam.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Plaas die ${bl('desimale komma')} in die ${gr('antwoord')} sodat daar presies soveel desimale plekke van regs af is.</p>` +
        `</div>` +

        `</div>` +

        // ── Dividing ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Deling van Desimale</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Deling deur ʼn heelgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hou die ${bl('desimale komma')} in dieselfde posisie in die ${gr('antwoord')} as in die deeltal. Deel soos gewoonlik.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Deling deur ʼn mag van 10</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skuif die ${bl('desimale komma')} een plek na links vir elke nul in die mag van 10 (bv. ÷ 100 skuif dit twee plekke na links).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skat altyd eers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy bereken, rond elke getal af tot die naaste heelgetal en skat die ${gr('antwoord')}. Dit help jou om te kontroleer dat die ${bl('desimale komma')} in die regte plek is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 14,85 + 6,347.',
          answer: `14${bl(',')}${or('850')} + 6${bl(',')}347 = ${gr('21,197')}`,
          steps: [
            `Lyn die ${bl('desimale kommas')} vertikaal op: 14${bl(',')}85 en 6${bl(',')}347.`,
            `Voeg ʼn ${or('nul')} by 14${bl(',')}85 om 14${bl(',')}${or('850')} te maak sodat albei getalle 3 desimale plekke het.`,
            `Tel op: 14${bl(',')}${or('850')} + 6${bl(',')}347 = ${gr('21,197')}.`,
          ],
        },
        {
          question: 'Bereken 5,6 × 3,4.',
          answer: `5${bl(',')}6 × 3${bl(',')}4 = ${gr('19,04')}`,
          steps: [
            `Vermenigvuldig sonder die ${bl('desimale kommas')}: 56 × 34 = ${pu('1 904')}.`,
            `Tel desimale plekke: 5${bl(',')}6 het 1 desimale plek, 3${bl(',')}4 het 1 desimale plek. Totaal = 1 + 1 = 2 desimale plekke.`,
            `Plaas die ${bl('desimale komma')} 2 plekke van regs af in ${pu('1 904')}: ${gr('19,04')}.`,
          ],
        },
        {
          question: 'Bereken 78,4 ÷ 8.',
          answer: `78${bl(',')}4 ÷ 8 = ${gr('9,8')}`,
          steps: [
            `Deel soos gewoonlik, terwyl die ${bl('desimale komma')} in dieselfde posisie in die ${gr('antwoord')} gehou word.`,
            `78 ÷ 8 = 9 res 6. Bring 4 af → 64. 64 ÷ 8 = 8.`,
            `Plaas die ${bl('desimale komma')} in die ${gr('antwoord')} direk bo die ${bl('desimale komma')} in die deeltal: ${gr('9,8')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — decimal addition ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 4,35 + 2,8.',
          answer: '7,15',
          checkMode: 'auto',
          correctAnswer: '7.15',
          correctAnswers: ['7.15', '7,15'],
          explanation: 'Lyn desimale kommas op: 4,35 + 2,80 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n4,35 + 2,80 = 7,15 ✓',
        },

        // ── V2 Easy — decimal subtraction ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 9,6 - 3,45.',
          answer: '6,15',
          checkMode: 'auto',
          correctAnswer: '6.15',
          correctAnswers: ['6.15', '6,15'],
          explanation: 'Lyn desimale kommas op: 9,60 - 3,45 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n9,60 - 3,45 = 6,15 ✓',
        },

        // ── V3 Medium — decimal multiplication ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 6,7 × 2,3.',
          answer: '15,41',
          checkMode: 'auto',
          correctAnswer: '15.41',
          correctAnswers: ['15.41', '15,41'],
          explanation: 'Ignoreer desimale kommas: 67 × 23 = 1 541.\nTel desimale plekke: 6,7 het 1, 2,3 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 1 541: 15,41 ✓',
        },

        // ── V4 Medium — decimal division by whole number ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 84,6 ÷ 6.',
          answer: '14,1',
          checkMode: 'auto',
          correctAnswer: '14.1',
          correctAnswers: ['14.1', '14,1'],
          explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n84 ÷ 6 = 14. Bring 6 af → 6 ÷ 6 = 1.\nPlaas desimale komma direk bo: 14,1. Kontroleer: 14,1 × 6 = 84,6 ✓',
        },

        // ── V5 Hard — check and explain decimal multiplication ────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken 3,45 × 2 en kry 6,9. Kontroleer sy antwoord en verduidelik of hy korrek is.',
          answer: 'Korrek — ignoreer die desimale komma: 345 × 2 = 690. Tel desimale plekke: 3,45 het 2. Plaas desimale komma 2 plekke van regs af: 6,90 = 6,9. Sipho is korrek.',
          checkMode: 'self',
        },

        // ── V6 Hard — multi-step money word problem ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het R250,75. Sy spandeer R86,40 en verdien dan R34,65. Hoeveel geld het sy nou?',
          answer: 'R199,00',
          checkMode: 'auto',
          correctAnswer: 'R199.00',
          correctAnswers: ['R199.00', '199.00', 'R199', '199', 'R199,00', '199,00'],
          explanation: 'Stap 1: R250,75 − R86,40 = R164,35\nStap 2: R164,35 + R34,65 = R199,00 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column layout showing decimal addition of 14.850 and 6.347 with decimal points aligned in blue and zeros added highlighted in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add subtract multiply and divide decimal fractions with colour coded decimal points carried digits and worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — AFRONDING VAN DESIMALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-decimals',
      title: 'Afronding van Desimale',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Ons rond desimale af tot ʼn vereiste aantal desimale plekke deur na die syfer onmiddellik na die plek waartoe ons afrond, te kyk. As daardie syfer 5 of meer is, rond ons op. As dit 4 of minder is, rond ons af. Afronding tot 2 desimale plekke kom algemeen voor wanneer met geld gewerk word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('syfer wat afgerond word')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('beslissende syfer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('afgeronde antwoord')}</span>` +
        `</div>` +

        // ── Rounding rule ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die afrondingsreël</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Beslissende syfer is 5 of meer → rond op</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die ${or('beslissende syfer')} is die syfer onmiddellik na die ${bl('syfer wat afgerond word')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">As ${or('beslissende syfer')} ≥ 5: tel 1 by die ${bl('syfer wat afgerond word')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Beslissende syfer is 4 of minder → rond af</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die ${or('beslissende syfer')} is steeds die syfer onmiddellik na die ${bl('syfer wat afgerond word')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">As ${or('beslissende syfer')} ≤ 4: los die ${bl('syfer wat afgerond word')} onveranderd.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om stap vir stap af te rond</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die ${bl('syfer wat afgerond word')} — die syfer in die plek waartoe jy afrond.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Kyk na die ${or('beslissende syfer')} — die heel volgende syfer na regs.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Pas die reël toe en skryf die ${gr('afgeronde antwoord')}, en laat al die syfers na die afgeronde plek weg.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Geld afrond</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ons tot die naaste sent afrond, rond ons altyd tot <strong>2 desimale plekke</strong> af. Die ${or('beslissende syfer')} is die derde desimale syfer (duisendstes). Pas dieselfde reël toe: 5 of meer → rond op; 4 of minder → rond af.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Rond 7,6482 af tot 2 desimale plekke.',
          answer: `7,6${bl('4')}82 → ${gr('7,65')}`,
          steps: [
            `Identifiseer die ${bl('syfer wat afgerond word')}: die tweede desimale syfer is ${bl('4')} (honderdstes).`,
            `Kyk na die ${or('beslissende syfer')}: die derde desimale syfer is ${or('8')}. Aangesien ${or('8')} ≥ 5, rond ons op.`,
            `Tel 1 by die ${bl('4')}: dit word 5. Laat al die syfers daarna weg. ${gr('Antwoord: 7,65')}.`,
          ],
        },
        {
          question: 'Rond R45,567 af tot die naaste sent (2 desimale plekke).',
          answer: `R45,5${bl('6')}7 → ${gr('R45,57')}`,
          steps: [
            `Identifiseer die ${bl('syfer wat afgerond word')}: die tweede desimale syfer is ${bl('6')} (honderdstes / sente).`,
            `Kyk na die ${or('beslissende syfer')}: die derde desimale syfer is ${or('7')}. Aangesien ${or('7')} ≥ 5, rond ons op.`,
            `Tel 1 by die ${bl('6')}: dit word 7. Laat al die syfers daarna weg. ${gr('Antwoord: R45,57')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Easy — round to 2 decimal places ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Rond 3,456 af tot 2 desimale plekke.',
          answer: '3,46',
          checkMode: 'auto',
          correctAnswer: '3.46',
          correctAnswers: ['3.46', '3,46'],
          explanation: 'Syfer wat afgerond word: 5 (honderdstes).\nBeslissende syfer: 6 (duisendstes). Aangesien 6 ≥ 5, rond ons op.\n5 word 6. Antwoord: 3,46 ✓',
        },

        // ── V8 Easy — round to 1 decimal place ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Rond 8,234 af tot 1 desimale plek.',
          answer: '8,2',
          checkMode: 'auto',
          correctAnswer: '8.2',
          correctAnswers: ['8.2', '8,2'],
          explanation: 'Syfer wat afgerond word: 2 (tiendes).\nBeslissende syfer: 3 (honderdstes). Aangesien 3 ≤ 4, rond ons af.\n2 bly 2. Antwoord: 8,2 ✓',
        },

        // ── V9 Medium — round money to the nearest cent ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Rond R67,895 af tot die naaste sent.',
          answer: 'R67,90',
          checkMode: 'auto',
          correctAnswer: 'R67.90',
          correctAnswers: ['R67.90', '67.90', 'R67.9', '67.9', 'R67,90', '67,90', 'R67,9', '67,9'],
          explanation: 'Afronding tot 2 desimale plekke (naaste sent).\nSyfer wat afgerond word: 9 (honderdstes).\nBeslissende syfer: 5 (duisendstes). Aangesien 5 ≥ 5, rond ons op.\n9 + 1 = 10 — skryf 0, dra 1 oor na tiendes: 8 + 1 = 9.\nAntwoord: R67,90 ✓',
        },

        // ── V10 Hard — check and explain rounding ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo rond 12,345 af tot 2 desimale plekke en kry 12,35. Is hy korrek? Verduidelik jou redenasie.',
          answer: 'Ja — die syfer wat afgerond word, is 4 (honderdstes). Die beslissende syfer is 5 (duisendstes). Aangesien 5 ≥ 5 rond ons op: 4 word 5, wat 12,35 gee. Thabo is korrek.',
          checkMode: 'self',
        },

        // ── V11 Medium — divide by a power of 10 ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 15,8 ÷ 100.',
          answer: '0,158',
          checkMode: 'auto',
          correctAnswer: '0.158',
          correctAnswers: ['0.158', '0,158'],
          explanation: 'Deling deur 100 skuif die desimale komma 2 plekke na links.\n15,8 ÷ 100: skuif die desimale komma 2 plekke na links → 0,158 ✓',
        },

        // ── V12 Hard — multiply then round to nearest cent ───────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle koop 3,5 kg vrugte teen R12,80 per kg. Hoeveel betaal sy, afgerond tot die naaste sent?',
          answer: 'R44,80',
          checkMode: 'auto',
          correctAnswer: 'R44.80',
          correctAnswers: ['R44.80', '44.80', 'R44.8', '44.8', 'R44,80', '44,80', 'R44,8', '44,8'],
          explanation: 'Vermenigvuldig: 3,5 × R12,80.\nIgnoreer desimale kommas: 35 × 1 280 = 44 800.\nDesimale plekke: 3,5 het 1, 12,80 het 2. Totaal = 3.\nPlaas desimale komma 3 plekke van regs af: 44,800 = R44,80.\nAfgerond tot die naaste sent: R44,80 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing 7.6482 positioned between 7.64 and 7.65 with the deciding digit highlighted in orange and the rounded answer marked in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to round decimals to a given number of decimal places including rounding money to the nearest cent" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 9, message: 'Uitstekende werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],
}
