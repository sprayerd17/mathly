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
        '<DiagramPlaceholder label="Kolomuitleg wat die desimale optelling van 14,850 en 6,347 wys, met desimale kommas in blou belyn en bygevoegde nulle uitgelig in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale breuke op te tel, af te trek, te vermenigvuldig en te deel, met kleurgekodeerde desimale kommas, oorgedraagde syfers en uitgewerkte voorbeelde" />',
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
        '<DiagramPlaceholder label="Getallelyn wat 7,6482 tussen 7,64 en 7,65 posisioneer, met die beslissende syfer uitgelig in oranje en die afgeronde antwoord gemerk in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale af te rond tot ʼn gegewe aantal desimale plekke, insluitend die afrond van geld tot die naaste sent" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 9, message: 'Uitstekende werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Afdelings: 1-4 Optel & aftrek | 5-8 Vermenigvuldiging | 9-11 Deling
    // | 12-15 Omskakeling desimale/breuke/persentasies | 16-17 Afronding
    // | 18-20 Woordprobleme, foutopsporing & multi-stap redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Afdeling 1 — Optel & aftrek van desimale (1-4)
        { difficulty: 'Easy', question: 'Bereken 8,45 + 3,72.', answer: '12,17', checkMode: 'auto', correctAnswer: '12.17', correctAnswers: ['12.17', '12,17'], explanation: 'Lyn desimale kommas op: 8,45 + 3,72.\n8,45 + 3,72 = 12,17 ✓' },
        { difficulty: 'Easy', question: 'Bereken 12,6 - 4,85.', answer: '7,75', checkMode: 'auto', correctAnswer: '7.75', correctAnswers: ['7.75', '7,75'], explanation: 'Lyn desimale kommas op: 12,60 - 4,85 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n12,60 - 4,85 = 7,75 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Plank hout is 23,75 m lank. ʼn Ander plank is 8,4 m lank. Wat is die totale lengte as die twee planke punt-aan-punt saamgevoeg word?', answer: '32,15 m', checkMode: 'auto', correctAnswer: '32.15', correctAnswers: ['32.15', '32.15m', '32.15 m', '32,15', '32,15m', '32,15 m'], explanation: 'Lyn desimale kommas op: 23,75 + 8,40 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n23,75 + 8,40 = 32,15 m ✓' },
        { difficulty: 'Medium', question: 'Bereken 15,3 - 2,678.', answer: '12,622', checkMode: 'auto', correctAnswer: '12.622', correctAnswers: ['12.622', '12,622'], explanation: 'Lyn desimale kommas op: 15,300 - 2,678 (voeg nulle by sodat albei 3 desimale plekke het).\n15,300 - 2,678 = 12,622 ✓' },

        // Afdeling 2 — Vermenigvuldiging van desimale (5-8)
        { difficulty: 'Medium', question: 'Bereken 4,6 × 3,2.', answer: '14,72', checkMode: 'auto', correctAnswer: '14.72', correctAnswers: ['14.72', '14,72'], explanation: 'Ignoreer desimale kommas: 46 × 32 = 1 472.\nTel desimale plekke: 4,6 het 1, 3,2 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 1 472: 14,72 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,7 × 0,8.', answer: '0,56', checkMode: 'auto', correctAnswer: '0.56', correctAnswers: ['0.56', '0,56'], explanation: 'Ignoreer desimale kommas: 7 × 8 = 56.\nTel desimale plekke: 0,7 het 1, 0,8 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 56: 0,56 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Lint kos R12,50 per meter. Wat is die koste van 4 meter lint?', answer: 'R50,00', checkMode: 'auto', correctAnswer: 'R50.00', correctAnswers: ['R50.00', '50.00', 'R50', '50', 'R50,00', '50,00'], explanation: 'Vermenigvuldig: R12,50 × 4.\nIgnoreer die desimale komma: 1 250 × 4 = 5 000.\nDesimale plekke: 12,50 het 2. Plaas desimale komma 2 plekke van regs af: 50,00 = R50,00 ✓' },
        { difficulty: 'Medium', question: 'Bereken 2,34 × 1,5.', answer: '3,51', checkMode: 'auto', correctAnswer: '3.51', correctAnswers: ['3.51', '3,51'], explanation: 'Ignoreer desimale kommas: 234 × 15 = 3 510.\nTel desimale plekke: 2,34 het 2, 1,5 het 1. Totaal = 3.\nPlaas desimale komma 3 plekke van regs af in 3 510: 3,510 = 3,51 ✓' },

        // Afdeling 3 — Deling van desimale (9-11)
        { difficulty: 'Medium', question: 'Bereken 96,3 ÷ 3.', answer: '32,1', checkMode: 'auto', correctAnswer: '32.1', correctAnswers: ['32.1', '32,1'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n96 ÷ 3 = 32. Bring 3 af → 3 ÷ 3 = 1.\nAntwoord: 32,1. Kontroleer: 32,1 × 3 = 96,3 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,72 ÷ 8.', answer: '0,09', checkMode: 'auto', correctAnswer: '0.09', correctAnswers: ['0.09', '0,09'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n0,72 ÷ 8: 72 ÷ 8 = 9, en 0,72 het 2 desimale plekke, dus het die antwoord 2 desimale plekke.\nAntwoord: 0,09. Kontroleer: 0,09 × 8 = 0,72 ✓' },
        { difficulty: 'Medium', question: 'Bereken 6,4 ÷ 100.', answer: '0,064', checkMode: 'auto', correctAnswer: '0.064', correctAnswers: ['0.064', '0,064'], explanation: 'Deling deur 100 skuif die desimale komma 2 plekke na links.\n6,4 ÷ 100: skuif die desimale komma 2 plekke na links → 0,064 ✓' },

        // Afdeling 4 — Omskakeling van desimale, breuke & persentasies (12-15)
        { difficulty: 'Medium', question: 'Skryf 0,75 as ʼn breuk in eenvoudigste vorm en as ʼn persentasie.', answer: '3/4 en 75%', checkMode: 'auto', correctAnswer: '3/475%', correctAnswers: ['3/475%', '3/4,75%', '3/4 75%'], explanation: '0,75 = 75/100. Vereenvoudig deur bo en onder deur 25 te deel: 75/100 = 3/4.\nAs ʼn persentasie, vermenigvuldig met 100: 0,75 × 100 = 75% ✓' },
        { difficulty: 'Medium', question: 'Skryf 3/5 as ʼn desimaal en as ʼn persentasie.', answer: '0,6 en 60%', checkMode: 'auto', correctAnswer: '0.660%', correctAnswers: ['0.660%', '0.6,60%', '0.6 60%', '0,660%', '0,6,60%', '0,6 60%'], explanation: 'Skakel om na tiendes: 3/5 = 6/10 = 0,6.\nAs ʼn persentasie, vermenigvuldig met 100: 0,6 × 100 = 60% ✓' },
        { difficulty: 'Medium', question: 'Skryf 42% as ʼn desimaal en as ʼn breuk in eenvoudigste vorm.', answer: '0,42 en 21/50', checkMode: 'auto', correctAnswer: '0.4221/50', correctAnswers: ['0.4221/50', '0.42,21/50', '0.42 21/50', '0,4221/50', '0,42,21/50', '0,42 21/50'], explanation: 'Om ʼn persentasie as ʼn desimaal te skryf, deel deur 100: 42% = 0,42.\nAs ʼn breuk: 42/100. Vereenvoudig deur bo en onder deur 2 te deel: 42/100 = 21/50 ✓' },
        { difficulty: 'Medium', question: 'Rangskik hierdie desimale van kleinste na grootste: 0,6, 0,09, 0,45, 0,3', answer: '0,09, 0,3, 0,45, 0,6', checkMode: 'auto', correctAnswer: '0.09,0.3,0.45,0.6', correctAnswers: ['0.09,0.3,0.45,0.6', '0.09, 0.3, 0.45, 0.6', '0,09,0,3,0,45,0,6', '0,09, 0,3, 0,45, 0,6'], explanation: 'Vergelyk eers tiendes: 0,09 het 0 tiendes (kleinste). Dan 0,3 (3 tiendes), 0,45 (4 tiendes), 0,6 (6 tiendes).\nVolgorde: 0,09, 0,3, 0,45, 0,6 ✓' },

        // Afdeling 5 — Afronding tot ʼn gegewe aantal desimale plekke (16-17)
        { difficulty: 'Medium', question: 'Rond 5,678 af tot 2 desimale plekke.', answer: '5,68', checkMode: 'auto', correctAnswer: '5.68', correctAnswers: ['5.68', '5,68'], explanation: 'Syfer wat afgerond word: 7 (honderdstes).\nBeslissende syfer: 8 (duisendstes). Aangesien 8 ≥ 5, rond ons op.\n7 word 8. Antwoord: 5,68 ✓' },
        { difficulty: 'Medium-Hard', question: 'Rond 12,045 af tot 2 desimale plekke.', answer: '12,05', checkMode: 'auto', correctAnswer: '12.05', correctAnswers: ['12.05', '12,05'], explanation: 'Syfer wat afgerond word: 4 (honderdstes).\nBeslissende syfer: 5 (duisendstes). Aangesien 5 ≥ 5, rond ons op.\n4 word 5. Antwoord: 12,05 ✓' },

        // Afdeling 6 — Woordprobleme, foutopsporing & multi-stap redenasie (18-20)
        { difficulty: 'Hard', question: 'Thabo koop 2,5 kg appels teen R18,60 per kg en 1,2 kg piesangs teen R14,50 per kg. Wat is die totale koste van die vrugte?', answer: 'R63,90', checkMode: 'auto', correctAnswer: 'R63.90', correctAnswers: ['R63.90', '63.90', 'R63.9', '63.9', 'R63,90', '63,90', 'R63,9', '63,9'], explanation: 'Appels: 2,5 × R18,60 = R46,50.\nPiesangs: 1,2 × R14,50 = R17,40.\nTotaal: R46,50 + R17,40 = R63,90 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 4,2 × 3 en skryf die antwoord as 1,26. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het die desimale komma verkeerd geplaas. As die desimale komma geïgnoreer word, is 42 × 3 = 126. Aangesien 4,2 1 desimale plek het en 3 0 desimale plekke het, is die totaal 1 desimale plek, so die desimale komma gaan 1 plek van regs af: 12,6, nie 1,26 nie.', checkMode: 'self', explanation: '42 × 3 = 126. Totale desimale plekke = 1. Korrekte antwoord: 12,6.' },
        { difficulty: 'Hard', question: 'Naledi verdien R450,80 met naweekwerk. Sy spandeer ʼn kwart daarvan aan ʼn geskenk en spaar die res. Hoeveel spaar sy?', answer: 'R338,10', checkMode: 'auto', correctAnswer: 'R338.10', correctAnswers: ['R338.10', '338.10', 'R338.1', '338.1', 'R338,10', '338,10', 'R338,1', '338,1'], explanation: 'ʼn Kwart van R450,80: R450,80 ÷ 4 = R112,70.\nBedrag gespaar: R450,80 − R112,70 = R338,10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het alle bewerkinge met desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is redelik seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die desimale-komma-reëls, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Afdeling 1 — Optel & aftrek van desimale (1-4)
        { difficulty: 'Easy', question: 'Bereken 6,28 + 5,9.', answer: '12,18', checkMode: 'auto', correctAnswer: '12.18', correctAnswers: ['12.18', '12,18'], explanation: 'Lyn desimale kommas op: 6,28 + 5,90 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n6,28 + 5,90 = 12,18 ✓' },
        { difficulty: 'Easy', question: 'Bereken 18,4 - 6,75.', answer: '11,65', checkMode: 'auto', correctAnswer: '11.65', correctAnswers: ['11.65', '11,65'], explanation: 'Lyn desimale kommas op: 18,40 - 6,75 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n18,40 - 6,75 = 11,65 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wandelroete het twee gedeeltes: een is 14,6 km lank en die ander is 9,35 km lank. Wat is die totale lengte van die roete?', answer: '23,95 km', checkMode: 'auto', correctAnswer: '23.95', correctAnswers: ['23.95', '23.95km', '23.95 km', '23,95', '23,95km', '23,95 km'], explanation: 'Lyn desimale kommas op: 14,60 + 9,35 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n14,60 + 9,35 = 23,95 km ✓' },
        { difficulty: 'Medium', question: 'Bereken 20,5 - 8,436.', answer: '12,064', checkMode: 'auto', correctAnswer: '12.064', correctAnswers: ['12.064', '12,064'], explanation: 'Lyn desimale kommas op: 20,500 - 8,436 (voeg nulle by sodat albei 3 desimale plekke het).\n20,500 - 8,436 = 12,064 ✓' },

        // Afdeling 2 — Vermenigvuldiging van desimale (5-8)
        { difficulty: 'Medium', question: 'Bereken 3,8 × 2,6.', answer: '9,88', checkMode: 'auto', correctAnswer: '9.88', correctAnswers: ['9.88', '9,88'], explanation: 'Ignoreer desimale kommas: 38 × 26 = 988.\nTel desimale plekke: 3,8 het 1, 2,6 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 988: 9,88 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,6 × 0,9.', answer: '0,54', checkMode: 'auto', correctAnswer: '0.54', correctAnswers: ['0.54', '0,54'], explanation: 'Ignoreer desimale kommas: 6 × 9 = 54.\nTel desimale plekke: 0,6 het 1, 0,9 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 54: 0,54 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Skryfboek kos R15,50. Wat is die koste van 3 skryfboeke?', answer: 'R46,50', checkMode: 'auto', correctAnswer: 'R46.50', correctAnswers: ['R46.50', '46.50', 'R46.5', '46.5', 'R46,50', '46,50', 'R46,5', '46,5'], explanation: 'Vermenigvuldig: R15,50 × 3.\nIgnoreer die desimale komma: 1 550 × 3 = 4 650.\nDesimale plekke: 15,50 het 2. Plaas desimale komma 2 plekke van regs af: 46,50 = R46,50 ✓' },
        { difficulty: 'Medium', question: 'Bereken 4,12 × 2,5.', answer: '10,3', checkMode: 'auto', correctAnswer: '10.3', correctAnswers: ['10.3', '10.30', '10,3', '10,30'], explanation: 'Ignoreer desimale kommas: 412 × 25 = 10 300.\nTel desimale plekke: 4,12 het 2, 2,5 het 1. Totaal = 3.\nPlaas desimale komma 3 plekke van regs af in 10 300: 10,300 = 10,3 ✓' },

        // Afdeling 3 — Deling van desimale (9-11)
        { difficulty: 'Medium', question: 'Bereken 84,5 ÷ 5.', answer: '16,9', checkMode: 'auto', correctAnswer: '16.9', correctAnswers: ['16.9', '16,9'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n84 ÷ 5 = 16 res 4. Bring 5 af → 45 ÷ 5 = 9.\nAntwoord: 16,9. Kontroleer: 16,9 × 5 = 84,5 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,64 ÷ 8.', answer: '0,08', checkMode: 'auto', correctAnswer: '0.08', correctAnswers: ['0.08', '0,08'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n0,64 ÷ 8: 64 ÷ 8 = 8, en 0,64 het 2 desimale plekke, dus het die antwoord 2 desimale plekke.\nAntwoord: 0,08. Kontroleer: 0,08 × 8 = 0,64 ✓' },
        { difficulty: 'Medium', question: 'Bereken 8,3 ÷ 1 000.', answer: '0,0083', checkMode: 'auto', correctAnswer: '0.0083', correctAnswers: ['0.0083', '0,0083'], explanation: 'Deling deur 1 000 skuif die desimale komma 3 plekke na links.\n8,3 ÷ 1 000: skuif die desimale komma 3 plekke na links → 0,0083 ✓' },

        // Afdeling 4 — Omskakeling van desimale, breuke & persentasies (12-15)
        { difficulty: 'Medium', question: 'Skryf 0,25 as ʼn breuk in eenvoudigste vorm en as ʼn persentasie.', answer: '1/4 en 25%', checkMode: 'auto', correctAnswer: '1/425%', correctAnswers: ['1/425%', '1/4,25%', '1/4 25%'], explanation: '0,25 = 25/100. Vereenvoudig deur bo en onder deur 25 te deel: 25/100 = 1/4.\nAs ʼn persentasie, vermenigvuldig met 100: 0,25 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'Skryf 7/10 as ʼn desimaal en as ʼn persentasie.', answer: '0,7 en 70%', checkMode: 'auto', correctAnswer: '0.770%', correctAnswers: ['0.770%', '0.7,70%', '0.7 70%', '0,770%', '0,7,70%', '0,7 70%'], explanation: '7/10 beteken 7 tiendes, so 7/10 = 0,7.\nAs ʼn persentasie, vermenigvuldig met 100: 0,7 × 100 = 70% ✓' },
        { difficulty: 'Medium', question: 'Skryf 65% as ʼn desimaal en as ʼn breuk in eenvoudigste vorm.', answer: '0,65 en 13/20', checkMode: 'auto', correctAnswer: '0.6513/20', correctAnswers: ['0.6513/20', '0.65,13/20', '0.65 13/20', '0,6513/20', '0,65,13/20', '0,65 13/20'], explanation: 'Om ʼn persentasie as ʼn desimaal te skryf, deel deur 100: 65% = 0,65.\nAs ʼn breuk: 65/100. Vereenvoudig deur bo en onder deur 5 te deel: 65/100 = 13/20 ✓' },
        { difficulty: 'Medium', question: 'Rangskik hierdie desimale van kleinste na grootste: 0,8, 0,15, 0,55, 0,4', answer: '0,15, 0,4, 0,55, 0,8', checkMode: 'auto', correctAnswer: '0.15,0.4,0.55,0.8', correctAnswers: ['0.15,0.4,0.55,0.8', '0.15, 0.4, 0.55, 0.8', '0,15,0,4,0,55,0,8', '0,15, 0,4, 0,55, 0,8'], explanation: 'Vergelyk eers tiendes: 0,15 het 1 tiende (kleinste). Dan 0,4 (4 tiendes), 0,55 (5 tiendes), 0,8 (8 tiendes).\nVolgorde: 0,15, 0,4, 0,55, 0,8 ✓' },

        // Afdeling 5 — Afronding tot ʼn gegewe aantal desimale plekke (16-17)
        { difficulty: 'Medium', question: 'Rond 6,783 af tot 2 desimale plekke.', answer: '6,78', checkMode: 'auto', correctAnswer: '6.78', correctAnswers: ['6.78', '6,78'], explanation: 'Syfer wat afgerond word: 8 (honderdstes).\nBeslissende syfer: 3 (duisendstes). Aangesien 3 ≤ 4, rond ons af.\n8 bly 8. Antwoord: 6,78 ✓' },
        { difficulty: 'Medium-Hard', question: 'Rond 9,076 af tot 2 desimale plekke.', answer: '9,08', checkMode: 'auto', correctAnswer: '9.08', correctAnswers: ['9.08', '9,08'], explanation: 'Syfer wat afgerond word: 7 (honderdstes).\nBeslissende syfer: 6 (duisendstes). Aangesien 6 ≥ 5, rond ons op.\n7 word 8. Antwoord: 9,08 ✓' },

        // Afdeling 6 — Woordprobleme, foutopsporing & multi-stap redenasie (18-20)
        { difficulty: 'Hard', question: 'Zanele koop 3,5 kg lemoene teen R16,40 per kg en 0,8 kg druiwe teen R32,50 per kg. Wat is die totale koste van die vrugte?', answer: 'R83,40', checkMode: 'auto', correctAnswer: 'R83.40', correctAnswers: ['R83.40', '83.40', 'R83.4', '83.4', 'R83,40', '83,40', 'R83,4', '83,4'], explanation: 'Lemoene: 3,5 × R16,40 = R57,40.\nDruiwe: 0,8 × R32,50 = R26,00.\nTotaal: R57,40 + R26,00 = R83,40 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 5,3 × 4 en skryf die antwoord as 2,12. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het die desimale komma verkeerd geplaas. As die desimale komma geïgnoreer word, is 53 × 4 = 212. Aangesien 5,3 1 desimale plek het en 4 0 desimale plekke het, is die totaal 1 desimale plek, so die desimale komma gaan 1 plek van regs af: 21,2, nie 2,12 nie.', checkMode: 'self', explanation: '53 × 4 = 212. Totale desimale plekke = 1. Korrekte antwoord: 21,2.' },
        { difficulty: 'Hard', question: 'Sipho verdien R360,40 met ʼn deeltydse werk. Hy spandeer ʼn vyfde daarvan aan data en spaar die res. Hoeveel spaar hy?', answer: 'R288,32', checkMode: 'auto', correctAnswer: 'R288.32', correctAnswers: ['R288.32', '288.32', 'R288,32', '288,32'], explanation: 'ʼn Vyfde van R360,40: R360,40 ÷ 5 = R72,08.\nBedrag gespaar: R360,40 − R72,08 = R288,32 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het alle bewerkinge met desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is redelik seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die desimale-komma-reëls, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Afdeling 1 — Optel & aftrek van desimale (1-4)
        { difficulty: 'Easy', question: 'Bereken 9,36 + 4,8.', answer: '14,16', checkMode: 'auto', correctAnswer: '14.16', correctAnswers: ['14.16', '14,16'], explanation: 'Lyn desimale kommas op: 9,36 + 4,80 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n9,36 + 4,80 = 14,16 ✓' },
        { difficulty: 'Easy', question: 'Bereken 15,7 - 5,65.', answer: '10,05', checkMode: 'auto', correctAnswer: '10.05', correctAnswers: ['10.05', '10,05'], explanation: 'Lyn desimale kommas op: 15,70 - 5,65 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n15,70 - 5,65 = 10,05 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Heining word in twee gedeeltes gebou: een is 21,4 m lank en die ander is 6,85 m lank. Wat is die totale lengte van die heining?', answer: '28,25 m', checkMode: 'auto', correctAnswer: '28.25', correctAnswers: ['28.25', '28.25m', '28.25 m', '28,25', '28,25m', '28,25 m'], explanation: 'Lyn desimale kommas op: 21,40 + 6,85 (voeg ʼn nul by sodat albei 2 desimale plekke het).\n21,40 + 6,85 = 28,25 m ✓' },
        { difficulty: 'Medium', question: 'Bereken 18,2 - 3,549.', answer: '14,651', checkMode: 'auto', correctAnswer: '14.651', correctAnswers: ['14.651', '14,651'], explanation: 'Lyn desimale kommas op: 18,200 - 3,549 (voeg nulle by sodat albei 3 desimale plekke het).\n18,200 - 3,549 = 14,651 ✓' },

        // Afdeling 2 — Vermenigvuldiging van desimale (5-8)
        { difficulty: 'Medium', question: 'Bereken 5,4 × 3,3.', answer: '17,82', checkMode: 'auto', correctAnswer: '17.82', correctAnswers: ['17.82', '17,82'], explanation: 'Ignoreer desimale kommas: 54 × 33 = 1 782.\nTel desimale plekke: 5,4 het 1, 3,3 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 1 782: 17,82 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,5 × 0,7.', answer: '0,35', checkMode: 'auto', correctAnswer: '0.35', correctAnswers: ['0.35', '0,35'], explanation: 'Ignoreer desimale kommas: 5 × 7 = 35.\nTel desimale plekke: 0,5 het 1, 0,7 het 1. Totaal = 2.\nPlaas desimale komma 2 plekke van regs af in 35: 0,35 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Meter lap kos R22,50. Wat is die koste van 4 meter lap?', answer: 'R90,00', checkMode: 'auto', correctAnswer: 'R90.00', correctAnswers: ['R90.00', '90.00', 'R90', '90', 'R90,00', '90,00'], explanation: 'Vermenigvuldig: R22,50 × 4.\nIgnoreer die desimale komma: 2 250 × 4 = 9 000.\nDesimale plekke: 22,50 het 2. Plaas desimale komma 2 plekke van regs af: 90,00 = R90,00 ✓' },
        { difficulty: 'Medium', question: 'Bereken 3,16 × 1,5.', answer: '4,74', checkMode: 'auto', correctAnswer: '4.74', correctAnswers: ['4.74', '4.740', '4,74', '4,740'], explanation: 'Ignoreer desimale kommas: 316 × 15 = 4 740.\nTel desimale plekke: 3,16 het 2, 1,5 het 1. Totaal = 3.\nPlaas desimale komma 3 plekke van regs af in 4 740: 4,740 = 4,74 ✓' },

        // Afdeling 3 — Deling van desimale (9-11)
        { difficulty: 'Medium', question: 'Bereken 63,6 ÷ 4.', answer: '15,9', checkMode: 'auto', correctAnswer: '15.9', correctAnswers: ['15.9', '15,9'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n63 ÷ 4 = 15 res 3. Bring 6 af → 36 ÷ 4 = 9.\nAntwoord: 15,9. Kontroleer: 15,9 × 4 = 63,6 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,81 ÷ 9.', answer: '0,09', checkMode: 'auto', correctAnswer: '0.09', correctAnswers: ['0.09', '0,09'], explanation: 'Deel, terwyl die desimale komma in posisie gehou word.\n0,81 ÷ 9: 81 ÷ 9 = 9, en 0,81 het 2 desimale plekke, dus het die antwoord 2 desimale plekke.\nAntwoord: 0,09. Kontroleer: 0,09 × 9 = 0,81 ✓' },
        { difficulty: 'Medium', question: 'Bereken 9,2 ÷ 100.', answer: '0,092', checkMode: 'auto', correctAnswer: '0.092', correctAnswers: ['0.092', '0,092'], explanation: 'Deling deur 100 skuif die desimale komma 2 plekke na links.\n9,2 ÷ 100: skuif die desimale komma 2 plekke na links → 0,092 ✓' },

        // Afdeling 4 — Omskakeling van desimale, breuke & persentasies (12-15)
        { difficulty: 'Medium', question: 'Skryf 0,6 as ʼn breuk in eenvoudigste vorm en as ʼn persentasie.', answer: '3/5 en 60%', checkMode: 'auto', correctAnswer: '3/560%', correctAnswers: ['3/560%', '3/5,60%', '3/5 60%'], explanation: '0,6 = 6/10. Vereenvoudig deur bo en onder deur 2 te deel: 6/10 = 3/5.\nAs ʼn persentasie, vermenigvuldig met 100: 0,6 × 100 = 60% ✓' },
        { difficulty: 'Medium', question: 'Skryf 9/20 as ʼn desimaal en as ʼn persentasie.', answer: '0,45 en 45%', checkMode: 'auto', correctAnswer: '0.4545%', correctAnswers: ['0.4545%', '0.45,45%', '0.45 45%', '0,4545%', '0,45,45%', '0,45 45%'], explanation: 'Skakel om na honderdstes: 9/20 = 45/100 = 0,45.\nAs ʼn persentasie, vermenigvuldig met 100: 0,45 × 100 = 45% ✓' },
        { difficulty: 'Medium', question: 'Skryf 8% as ʼn desimaal en as ʼn breuk in eenvoudigste vorm.', answer: '0,08 en 2/25', checkMode: 'auto', correctAnswer: '0.082/25', correctAnswers: ['0.082/25', '0.08,2/25', '0.08 2/25', '0,082/25', '0,08,2/25', '0,08 2/25'], explanation: 'Om ʼn persentasie as ʼn desimaal te skryf, deel deur 100: 8% = 0,08.\nAs ʼn breuk: 8/100. Vereenvoudig deur bo en onder deur 4 te deel: 8/100 = 2/25 ✓' },
        { difficulty: 'Medium', question: 'Rangskik hierdie desimale van kleinste na grootste: 0,72, 0,07, 0,5, 0,35', answer: '0,07, 0,35, 0,5, 0,72', checkMode: 'auto', correctAnswer: '0.07,0.35,0.5,0.72', correctAnswers: ['0.07,0.35,0.5,0.72', '0.07, 0.35, 0.5, 0.72', '0,07,0,35,0,5,0,72', '0,07, 0,35, 0,5, 0,72'], explanation: 'Vergelyk eers tiendes: 0,07 het 0 tiendes (kleinste). Dan 0,35 (3 tiendes), 0,5 (5 tiendes), 0,72 (7 tiendes).\nVolgorde: 0,07, 0,35, 0,5, 0,72 ✓' },

        // Afdeling 5 — Afronding tot ʼn gegewe aantal desimale plekke (16-17)
        { difficulty: 'Medium', question: 'Rond 8,347 af tot 2 desimale plekke.', answer: '8,35', checkMode: 'auto', correctAnswer: '8.35', correctAnswers: ['8.35', '8,35'], explanation: 'Syfer wat afgerond word: 4 (honderdstes).\nBeslissende syfer: 7 (duisendstes). Aangesien 7 ≥ 5, rond ons op.\n4 word 5. Antwoord: 8,35 ✓' },
        { difficulty: 'Medium-Hard', question: 'Rond 14,095 af tot 2 desimale plekke.', answer: '14,10', checkMode: 'auto', correctAnswer: '14.10', correctAnswers: ['14.10', '14.1', '14,10', '14,1'], explanation: 'Syfer wat afgerond word: 9 (honderdstes).\nBeslissende syfer: 5 (duisendstes). Aangesien 5 ≥ 5, rond ons op.\n9 + 1 = 10 — skryf 0, dra 1 oor na tiendes: 0 + 1 = 1.\nAntwoord: 14,10 ✓' },

        // Afdeling 6 — Woordprobleme, foutopsporing & multi-stap redenasie (18-20)
        { difficulty: 'Hard', question: 'Bongani koop 4,5 kg aartappels teen R11,20 per kg en 1,5 kg uie teen R19,60 per kg. Wat is die totale koste van die groente?', answer: 'R79,80', checkMode: 'auto', correctAnswer: 'R79.80', correctAnswers: ['R79.80', '79.80', 'R79.8', '79.8', 'R79,80', '79,80', 'R79,8', '79,8'], explanation: 'Aartappels: 4,5 × R11,20 = R50,40.\nUie: 1,5 × R19,60 = R29,40.\nTotaal: R50,40 + R29,40 = R79,80 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 6,4 × 3 en skryf die antwoord as 1,92. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het die desimale komma verkeerd geplaas. As die desimale komma geïgnoreer word, is 64 × 3 = 192. Aangesien 6,4 1 desimale plek het en 3 0 desimale plekke het, is die totaal 1 desimale plek, so die desimale komma gaan 1 plek van regs af: 19,2, nie 1,92 nie.', checkMode: 'self', explanation: '64 × 3 = 192. Totale desimale plekke = 1. Korrekte antwoord: 19,2.' },
        { difficulty: 'Hard', question: 'Amahle verdien R520,50 deur handwerk te verkoop. Sy spandeer ʼn tiende daarvan aan materiaal vir die volgende bondel en spaar die res. Hoeveel spaar sy?', answer: 'R468,45', checkMode: 'auto', correctAnswer: 'R468.45', correctAnswers: ['R468.45', '468.45', 'R468,45', '468,45'], explanation: 'ʼn Tiende van R520,50: R520,50 ÷ 10 = R52,05.\nBedrag gespaar: R520,50 − R52,05 = R468,45 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het alle bewerkinge met desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is redelik seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die desimale-komma-reëls, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
