import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D object parts) ────────────────────────────────────────
// faces / prism  → blue   (#2563eb)
// edges / apex   → orange (#ea580c)
// vertices / base→ green  (#16a34a)
// pyramid        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D-voorwerpe',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 3D-VOORWERPE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-3d-objects',
      title: 'Wat is 3D-voorwerpe?',
      icon: '□',
      explanation:
        `<p style="margin-bottom:16px;">3D-voorwerpe is <strong>soliede vorms</strong> met <strong>lengte</strong>, <strong>breedte</strong> en <strong>hoogte</strong>. 3D staan vir <strong>drie-dimensioneel</strong>. Anders as 2D-vorms wat plat is, neem 3D-voorwerpe <strong>ruimte in beslag</strong>. Ons beskryf 3D-voorwerpe deur hul ${bl('vlakke')}, ${or('rande')} en ${gr('hoekpunte')} te tel. ʼn ${bl('Vlak')} is ʼn plat oppervlak. ʼn ${or('Rand')} is waar twee vlakke ontmoet. ʼn ${gr('Hoekpunt')} is ʼn hoek waar rande ontmoet.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rande')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoekpunte')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vlak</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Plat oppervlak van ʼn 3D-voorwerp.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rand</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Waar twee vlakke van ʼn 3D-voorwerp ontmoet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hoekpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Hoek waar rande ontmoet. Meer as een hoekpunt word hoekpunte genoem.</p>` +
        `</div>` +

        `</div>` +

        // ── 2D vs 3D comparison ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">2D-vorms vs 3D-voorwerpe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">2D-vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Plat — het slegs <strong>lengte</strong> en <strong>breedte</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Beskryf deur <strong>sye</strong> en <strong>hoeke</strong>.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">3D-voorwerp</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Soliede — het <strong>lengte</strong>, <strong>breedte</strong> en <strong>hoogte</strong>. Neem ruimte in beslag.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Beskryf deur ${bl('vlakke')}, ${or('rande')} en ${gr('hoekpunte')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel altyd ${bl('vlakke')}, ${or('rande')} en ${gr('hoekpunte')} noukeurig en in volgorde. ʼn ${bl('Vlak')} is ʼn <strong>plat oppervlak</strong>, ʼn ${or('rand')} is waar <strong>twee vlakke ontmoet</strong>, en ʼn ${gr('hoekpunt')} is ʼn <strong>hoek</strong> waar rande ontmoet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf ʼn kubus.',
          answer: `ʼn Kubus het ${bl('6 vlakke')}, ${or('12 rande')} en ${gr('8 hoekpunte')}`,
          steps: [
            `Tel die ${bl('vlakke')} — ʼn kubus het <strong>${bl('6')}</strong> plat vierkantige vlakke.`,
            `Tel die ${or('rande')} — ʼn kubus het <strong>${or('12')}</strong> rande.`,
            `Tel die ${gr('hoekpunte')} — ʼn kubus het <strong>${gr('8')}</strong> hoekpunte.`,
            `Al die vlakke is gelyke vierkante.`,
            `<strong>Antwoord:</strong> ʼn Kubus is ʼn 3D-voorwerp met ${bl('6 vlakke')}, ${or('12 rande')} en ${gr('8 hoekpunte')}.`,
          ],
        },
        {
          question: 'Wat is die verskil tussen ʼn 2D-vorm en ʼn 3D-voorwerp?',
          answer: `ʼn 2D-vorm is plat met sye en hoeke. ʼn 3D-voorwerp het ${bl('vlakke')}, ${or('rande')} en ${gr('hoekpunte')} en neem ruimte in beslag.`,
          steps: [
            `ʼn Vierkant is ʼn 2D-vorm — dit is plat met slegs <strong>lengte</strong> en <strong>breedte</strong>.`,
            `ʼn Kubus is ʼn 3D-voorwerp — dit het <strong>lengte</strong>, <strong>breedte</strong> en <strong>hoogte</strong> en neem ruimte in beslag.`,
            `ʼn 2D-vorm het <strong>sye</strong> en <strong>hoeke</strong>.`,
            `ʼn 3D-voorwerp het ${bl('vlakke')}, ${or('rande')} en ${gr('hoekpunte')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — vlakke op ʼn kubus ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel vlakke het ʼn kubus?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Kubus het 6 plat vierkantige vlakke — een aan elke kant (bo, onder, voor, agter, links, regs).',
        },

        // ── V2 Medium — vlakke, rande, hoekpunte van ʼn kubus ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn kubus?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel vlakke?',
              correctAnswer: '6',
              explanation: 'ʼn Kubus het 6 plat vierkantige vlakke.',
            },
            {
              label: 'b) Hoeveel rande?',
              correctAnswer: '12',
              explanation: 'ʼn Kubus het 12 rande — 4 langs die bokant, 4 langs die onderkant en 4 vertikale rande.',
            },
            {
              label: 'c) Hoeveel hoekpunte?',
              correctAnswer: '8',
              explanation: 'ʼn Kubus het 8 hoekpunte — 4 bo en 4 onder.',
            },
          ],
        },

        // ── V3 Moeilik — kubus vs reghoekige prisma ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn kubus en ʼn reghoekige prisma is presies dieselfde. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn kubus het 6 gelyke vierkantige vlakke, maar ʼn reghoekige prisma het reghoekige vlakke waar nie al die sye gelyk is nie. ʼn Kubus is ʼn spesiale soort reghoekige prisma.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn kubus met vlakke geëtiketteer in blou, rande in oranje en hoekpunte in groen om elke deel duidelik te wys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen 2D-vorms en 3D-voorwerpe verduidelik en wys hoe om vlakke, rande en hoekpunte op ʼn kubus te tel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — PRISMAS EN PIRAMIDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prisms-and-pyramids',
      title: 'Prismas en Piramides',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Prisma')} is ʼn 3D-voorwerp met twee identiese plat eindvlakke genoem ${gr('basisse')} en plat reghoekige sye. Die ${gr('basisse')} gee die ${bl('prisma')} sy naam — ʼn reghoekige ${bl('prisma')} het reghoek-${gr('basisse')} en ʼn driehoekige ${bl('prisma')} het driehoek-${gr('basisse')}. ʼn ${re('Piramide')} het een plat ${gr('basis')} en driehoekige sye wat by ʼn punt genoem die ${or('apeks')} ontmoet. Die ${gr('basis')} gee die ${re('piramide')} sy naam — ʼn vierkantige ${re('piramide')} het ʼn vierkantige ${gr('basis')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('prisma')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('piramide')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apeks')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('basis')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prisma</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn 3D-voorwerp met twee identiese plat ${gr('basisse')} en plat reghoekige sye. Vernoem na sy ${gr('basis')}vorm.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn 3D-voorwerp met een plat ${gr('basis')} en driehoekige sye wat by ʼn ${or('apeks')} ontmoet. Vernoem na sy ${gr('basis')}vorm.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die punt bo-aan ʼn ${re('piramide')} waar al die driehoekige vlakke ontmoet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Basis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die plat vlak wat ʼn ${bl('prisma')} of ${re('piramide')} sy naam gee. ʼn ${bl('Prisma')} het twee ${gr('basisse')}; ʼn ${re('piramide')} het een ${gr('basis')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Types ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Soorte ${bl('prismas')} en ${re('piramides')}</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Reghoekige prisma</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Basis')}vorm: reghoek. Het <strong>6 vlakke</strong>, <strong>12 rande</strong> en <strong>8 hoekpunte</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: ʼn baksteen of ʼn graanboks.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Driehoekige prisma</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Basis')}vorm: driehoek. Het <strong>5 vlakke</strong>, <strong>9 rande</strong> en <strong>6 hoekpunte</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: ʼn driehoekige sjokoladeboks.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Vierkantige piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Basis')}vorm: vierkant. Het <strong>5 vlakke</strong>, <strong>8 rande</strong> en <strong>5 hoekpunte</strong>. Het een ${or('apeks')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: die Egiptiese piramides.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Driehoekige piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Basis')}vorm: driehoek. Het <strong>4 vlakke</strong>, <strong>6 rande</strong> en <strong>4 hoekpunte</strong>. Het een ${or('apeks')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Ook genoem ʼn tetraëder.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om die verskil te onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${bl('Prisma')} het <strong>twee</strong> identiese ${gr('basisse')} — een aan elke kant — dus het dit geen ${or('apeks')} nie. ʼn ${re('Piramide')} het <strong>een</strong> ${gr('basis')} en kom tot ʼn punt by die ${or('apeks')} bo-aan. Albei word vernoem na die vorm van hul ${gr('basis')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn driehoekige prisma?',
          answer: `ʼn ${bl('Driehoekige prisma')} het <strong>5 vlakke</strong>, <strong>9 rande</strong> en <strong>6 hoekpunte</strong>`,
          steps: [
            `ʼn ${bl('Driehoekige prisma')} het 2 driehoekvlakke aan elke kant en 3 reghoekige vlakke aan die sye. Totale vlakke = 2 + 3 = <strong>5 vlakke</strong>.`,
            `Tel die rande — 3 aan elke driehoekkant plus 3 verbindende rande = <strong>9 rande</strong>.`,
            `Tel die hoekpunte — 3 aan elke driehoekkant = <strong>6 hoekpunte</strong>.`,
            `<strong>Antwoord:</strong> ʼn ${bl('Driehoekige prisma')} het <strong>5 vlakke</strong>, <strong>9 rande</strong> en <strong>6 hoekpunte</strong>.`,
          ],
        },
        {
          question: 'Hoe verskil ʼn vierkantige piramide van ʼn kubus?',
          answer: `ʼn Kubus het <strong>6 vlakke</strong>, <strong>12 rande</strong> en <strong>8 hoekpunte</strong>. ʼn ${re('Vierkantige piramide')} het <strong>5 vlakke</strong>, <strong>8 rande</strong> en <strong>5 hoekpunte</strong> met ʼn ${or('apeks')}.`,
          steps: [
            `ʼn Kubus het 6 vierkantige vlakke, 12 rande en 8 hoekpunte. ʼn Kubus het geen ${or('apeks')} nie.`,
            `ʼn ${re('Vierkantige piramide')} het 1 vierkantige ${gr('basis')} en 4 driehoekige vlakke = <strong>5 vlakke in totaal</strong>, <strong>8 rande</strong> en <strong>5 hoekpunte</strong>.`,
            `ʼn Kubus het geen ${or('apeks')} nie, maar ʼn ${re('piramide')} kom tot ʼn punt bo-aan genoem die ${or('apeks')}.`,
            `<strong>Antwoord:</strong> Die belangrikste verskil is dat ʼn ${re('vierkantige piramide')} ʼn ${or('apeks')} en slegs 5 vlakke het, terwyl ʼn kubus 6 gelyke vierkantige vlakke en geen ${or('apeks')} het nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Maklik — basis van ʼn piramide ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat word die plat onderkant van ʼn piramide genoem?',
          answer: 'basis',
          checkMode: 'auto',
          correctAnswer: 'basis',
          explanation: 'Die plat onderste vlak van ʼn piramide word die basis genoem. Die basis gee die piramide sy naam — byvoorbeeld, ʼn vierkantige piramide het ʼn vierkantige basis.',
        },

        // ── V5 Medium — vlakke van ʼn driehoekige prisma ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Hoeveel vlakke het ʼn driehoekige prisma?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'ʼn Driehoekige prisma het 2 driehoekige vlakke (een aan elke kant) en 3 reghoekige vlakke aan die sye — 5 vlakke in totaal.',
        },

        // ── V6 Moeilik — driehoekige prisma vs driehoekige piramide ──────────────────
        {
          difficulty: 'Hard',
          question: 'Vergelyk ʼn driehoekige prisma en ʼn driehoekige piramide. Hoe verskil hulle?',
          answer: 'ʼn Driehoekige prisma het 2 driehoekvlakke en 3 reghoekige vlakke met 5 vlakke in totaal. ʼn Driehoekige piramide het 1 driehoekbasis en 3 driehoekige vlakke met 4 vlakke in totaal en kom tot ʼn punt by die apeks.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn driehoekige prisma en ʼn vierkantige piramide langs mekaar wys met prisma in blou, piramide in rooi, apeks in oranje en basis in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen prismas en piramides verduidelik en wys hoe om vlakke, rande en hoekpunte op ʼn driehoekige prisma en ʼn vierkantige piramide te tel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SILINDERS, KEËLS EN BOLLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cylinders-cones-and-spheres',
      title: 'Silinders, Keëls en Bolle',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">Sommige 3D-voorwerpe het <strong>geboë oppervlakke</strong>. ʼn ${bl('Silinder')} het 2 plat sirkelvormige vlakke en 1 geboë oppervlak — soos ʼn blik. ʼn ${re('Keël')} het 1 plat sirkelvormige vlak, 1 geboë oppervlak en kom tot ʼn punt bo-aan genoem die ${or('apeks')} — soos ʼn roomysgetjie. ʼn ${gr('Bol')} is perfek rond met slegs 1 geboë oppervlak en geen plat vlakke, geen rande en geen hoekpunte nie — soos ʼn bal.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('silinder')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('keël')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bol')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('apeks')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Silinder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn 3D-voorwerp met 2 plat sirkelvormige vlakke en 1 geboë oppervlak. Dit het 2 rande en geen hoekpunte nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Keël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn 3D-voorwerp met 1 plat sirkelvormige vlak, 1 geboë oppervlak en ʼn punt bo-aan genoem die ${or('apeks')}. Dit het 1 rand en geen hoekpunte nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Bol</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Perfek ronde 3D-voorwerp met slegs 1 geboë oppervlak. Dit het geen plat vlakke, geen rande en geen hoekpunte nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Apeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die punt bo-aan ʼn ${re('keël')} waar die geboë oppervlak tot ʼn punt kom.</p>` +
        `</div>` +

        `</div>` +

        // ── Comparison table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vergelyking van geboë 3D-voorwerpe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Silinder</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Plat vlakke:</strong> 2 sirkelvormige vlakke.<br><strong>Geboë oppervlak:</strong> 1.<br><strong>Rande:</strong> 2. <strong>Hoekpunte:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: ʼn blik of ʼn tromp.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Keël</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Plat vlakke:</strong> 1 sirkelvormige vlak.<br><strong>Geboë oppervlak:</strong> 1. <strong>${or('Apeks')}:</strong> 1 punt.<br><strong>Rande:</strong> 1. <strong>Hoekpunte:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: ʼn roomysgetjie of ʼn partytjiehoed.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Bol</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;"><strong>Plat vlakke:</strong> 0.<br><strong>Geboë oppervlak:</strong> 1.<br><strong>Rande:</strong> 0. <strong>Hoekpunte:</strong> 0.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeeld: ʼn bal of ʼn wêreldbol.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${bl('Silinder')} het <strong>2</strong> plat vlakke en ʼn ${re('keël')} het <strong>1</strong> plat vlak — albei het ʼn geboë oppervlak. ʼn ${gr('Bol')} het <strong>geen</strong> plat vlakke nie — dit is heeltemal geboë. Slegs ʼn ${re('keël')} het ʼn ${or('apeks')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo hou ʼn blik boontjies vas. Watter 3D-voorwerp is dit en wat is sy eienskappe?',
          answer: `ʼn Blik boontjies het die vorm van ʼn ${bl('silinder')}. Dit het 2 plat sirkelvormige vlakke, 1 geboë oppervlak, 2 rande en geen hoekpunte nie.`,
          steps: [
            `ʼn Blik boontjies het die vorm van ʼn ${bl('silinder')}.`,
            `Dit het <strong>2 plat sirkelvormige vlakke</strong> — een bo en een onder.`,
            `Dit het <strong>1 geboë oppervlak</strong> aan die sykant.`,
            `Dit het <strong>2 rande</strong> waar die plat vlakke die geboë oppervlak ontmoet.`,
            `Dit het <strong>geen hoekpunte nie</strong>.`,
            `<strong>Antwoord:</strong> Die blik is ʼn ${bl('silinder')} met 2 plat sirkelvormige vlakke, 1 geboë oppervlak, 2 rande en geen hoekpunte nie.`,
          ],
        },
        {
          question: 'Vergelyk ʼn keël en ʼn piramide.',
          answer: `Beide ʼn ${re('keël')} en ʼn piramide kom tot ʼn punt genoem die ${or('apeks')}, maar ʼn piramide het plat driehoekige vlakke terwyl ʼn ${re('keël')} ʼn geboë oppervlak het.`,
          steps: [
            `Beide ʼn ${re('keël')} en ʼn piramide kom tot ʼn punt bo-aan genoem die ${or('apeks')}.`,
            `ʼn Piramide het <strong>plat driehoekige vlakke</strong> en <strong>reguit rande</strong>.`,
            `ʼn ${re('Keël')} het ʼn <strong>geboë oppervlak</strong> en ʼn <strong>sirkelvormige basis</strong> met geen reguit rande nie.`,
            `ʼn Piramide het <strong>hoekpunte</strong> maar ʼn ${re('keël')} het nie.`,
            `<strong>Antwoord:</strong> Albei het ʼn ${or('apeks')}, maar ʼn piramide gebruik plat vlakke en reguit rande terwyl ʼn ${re('keël')} ʼn geboë oppervlak en ʼn sirkelvormige basis gebruik.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Maklik — bol ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter 3D-voorwerp lyk soos ʼn bal?',
          answer: 'bol',
          checkMode: 'auto',
          correctAnswer: 'bol',
          explanation: 'ʼn Bol is perfek rond met slegs 1 geboë oppervlak en geen plat vlakke nie — net soos ʼn bal.',
        },

        // ── V8 Medium — plat vlakke van ʼn silinder ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Hoeveel plat vlakke het ʼn silinder?',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke — een bo en een onder — en 1 geboë oppervlak aan die sykant.',
        },

        // ── V9 Moeilik — keël vs silinder ─────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê ʼn keël en ʼn silinder is soortgelyk omdat albei ʼn sirkelvormige vlak het. Is sy korrek? Verduidelik.',
          answer: 'Gedeeltelik korrek — albei het ʼn sirkelvormige basis. Maar ʼn silinder het 2 sirkelvormige vlakke en ʼn keël het slegs 1. ʼn Keël het ook ʼn apeks en ʼn silinder nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn silinder in blou, ʼn keël in rooi en ʼn bol in groen langs mekaar wys met etikette vir plat vlakke, geboë oppervlak en apeks" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die eienskappe van silinders, keëls en bolle verduidelik en ʼn keël met ʼn piramide vergelyk om die verskil tussen geboë oppervlakke en plat vlakke te wys" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SORTEER EN VERGELYK 3D-VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-and-comparing-3d-objects',
      title: 'Sorteer en Vergelyk 3D-voorwerpe',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan <strong>3D-voorwerpe sorteer</strong> volgens hul eienskappe — of hulle geboë of plat oppervlakke het, hoeveel vlakke hulle het, en of hulle kan ${gr('rol')}, ${bl('stapel')} of gly. Voorwerpe met plat vlakke kan gly en ${bl('stapel')}. Voorwerpe met geboë oppervlakke kan ${gr('rol')}. Sommige voorwerpe soos ʼn silinder kan beide ${gr('rol')} en ${bl('stapel')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kan rol')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kan nie rol nie')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kan stapel')}</span>` +
        `</div>` +

        // ── Properties table ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe oppervlakke beweging beïnvloed</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Kan rol</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Voorwerpe met ʼn <strong>geboë oppervlak</strong> kan rol.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeelde: bol, silinder, keël.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Kan nie rol nie</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Voorwerpe met <strong>slegs plat vlakke</strong> kan nie rol nie.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeelde: kubus, reghoekige prisma, piramide.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Kan stapel</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Voorwerpe met <strong>plat vlakke</strong> bo en onder kan stapel.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Voorbeelde: kubus, reghoekige prisma, silinder.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sommige voorwerpe kan meer as een ding doen</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Silinder kan beide ${gr('rol')} (geboë sykant) en ${bl('stapel')} (plat sirkelvormige eindes). ʼn Keël kan ${gr('rol')} maar is moeilik om te ${bl('stapel')} omdat sy ${or('apeks')} dit onstabiel maak. ʼn Bol kan ${gr('rol')} maar kan glad nie ${bl('stapel')} nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sorteer hierdie voorwerpe in kan rol en kan nie rol nie — bol, kubus, silinder, piramide, keël.',
          answer: `${gr('Kan rol')}: bol, silinder, keël. ${re('Kan nie rol nie')}: kubus, piramide.`,
          steps: [
            `${gr('Kan rol:')}`,
            `${gr('Bol')} — ʼn bol het ʼn geboë oppervlak, dus rol dit.`,
            `${gr('Silinder')} — ʼn silinder het ʼn geboë oppervlak, dus rol dit.`,
            `${gr('Keël')} — ʼn keël het ʼn geboë oppervlak, dus rol dit.`,
            `${re('Kan nie rol nie:')}`,
            `${re('Kubus')} — ʼn kubus het slegs plat vlakke, dus kan dit nie rol nie.`,
            `${re('Piramide')} — ʼn piramide het slegs plat vlakke, dus kan dit nie rol nie.`,
          ],
        },
        {
          question: 'Amahle wil haar vorms stapel. Watter van hierdie kan gestapel word — bol, reghoekige prisma, keël, silinder?',
          answer: `${bl('Kan stapel')}: reghoekige prisma, silinder. Keël — moeilik. Bol — kan nie stapel nie.`,
          steps: [
            `${bl('Reghoekige prisma')} — ja, plat vlakke stapel maklik.`,
            `${bl('Silinder')} — ja, plat sirkelvormige eindes laat stapeling toe.`,
            `Keël — moeilik, die ${or('apeks')} maak dit onstabiel.`,
            `Bol — nee, geboë oppervlak maak dit onmoontlik om te stapel.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V10 Maklik — bol rol ────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Kan ʼn bol rol?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja', 'JA'],
          explanation: 'Ja — ʼn bol het ʼn geboë oppervlak, dus kan dit in enige rigting rol.',
        },

        // ── V11 Medium — rol en stapel ────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Noem een 3D-voorwerp wat kan beide rol en stapel.',
          answer: 'silinder',
          checkMode: 'auto',
          correctAnswer: 'silinder',
          correctAnswers: ['silinder', 'Silinder', 'ʼn silinder'],
          explanation: 'ʼn Silinder kan rol (geboë sykant) en stapel (plat sirkelvormige vlakke bo en onder).',
        },

        // ── V12 Moeilik — geboë oppervlakke en rol ─────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sorteer sy vorms en sê slegs voorwerpe met geboë oppervlakke kan rol. Is hy korrek? Gee voorbeelde om jou antwoord te ondersteun.',
          answer: 'Ja — bol, silinder en keël het almal geboë oppervlakke en kan rol. Kubusse, prismas en piramides het slegs plat vlakke en kan nie rol nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat 3D-voorwerpe in twee groepe sorteer — kan rol in groen en kan nie rol nie in rooi — met ʼn silinder in blou gewys as ʼn voorwerp wat beide kan rol en stapel" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 3D-voorwerpe volgens hul eienskappe te sorteer, insluitend rol, stapel en gly, en verduidelik waarom geboë oppervlakke rol toelaat terwyl plat vlakke stapeling toelaat" />',
    },
  ],
  scoreMessages: [
    { minScore: 5, message: 'Uitstekend! ʼn Perfekte telling — jy het 3D-voorwerpe vir Graad 5 heeltemal onder die knie. Hou so aan!' },
    { minScore: 4, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van 3D-voorwerpe. Gaan enige dele wat jy verkeerd gehad het weer deur en jy sal dit perfek hê.' },
    { minScore: 3, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 2, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
}
