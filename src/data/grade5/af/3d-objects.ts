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
        'Diagram van ʼn kubus met vlakke geëtiketteer in blou, rande in oranje en hoekpunte in groen om elke deel duidelik te wys',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="105" y="18" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">Kubus</text><polygon points="50,60 130,60 155,35 75,35" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="130,60 155,35 155,115 130,140" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="50,60 130,60 130,140 50,140" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.5"/><line x1="130" y1="60" x2="130" y2="140" stroke="#ea580c" stroke-width="3.5"/><circle cx="130" cy="60" r="4.5" fill="#16a34a"/><rect x="25" y="168" width="10" height="10" fill="#2563eb"/><text x="40" y="177" font-size="11" fill="#0f1f3d">Vlak</text><rect x="85" y="168" width="10" height="10" fill="#ea580c"/><text x="100" y="177" font-size="11" fill="#0f1f3d">Rand</text><rect x="145" y="168" width="10" height="10" fill="#16a34a"/><text x="160" y="177" font-size="11" fill="#0f1f3d">Hoekpunt</text></svg>',

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
        'Diagram wat ʼn driehoekige prisma en ʼn vierkantige piramide langs mekaar wys met prisma in blou, piramide in rooi, apeks in oranje en basis in groen',
      diagramSvg:
        '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,120 90,120 115,102 55,102" fill="none" stroke="none"/><line x1="55" y1="102" x2="115" y2="102" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="30" y1="120" x2="55" y2="102" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="90" y1="120" x2="115" y2="102" stroke="#2563eb" stroke-width="2.5"/><line x1="60" y1="60" x2="85" y2="42" stroke="#2563eb" stroke-width="2.5"/><polygon points="30,120 90,120 60,60" fill="#dcfce7" stroke="#2563eb" stroke-width="2.5"/><polygon points="55,102 115,102 85,42" fill="none" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="3,3"/><text x="60" y="135" font-weight="700" font-size="10.5" text-anchor="middle" fill="#16a34a">Basis</text><text x="60" y="178" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Driehoekige prisma</text><polygon points="150,120 210,120 230,100 170,100" fill="#dcfce7" stroke="none"/><line x1="170" y1="100" x2="230" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="150" y1="120" x2="170" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="210" y1="120" x2="230" y2="100" stroke="#dc2626" stroke-width="2.5"/><line x1="150" y1="120" x2="210" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="150" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="210" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="230" y2="100" stroke="#dc2626" stroke-width="2.5"/><line x1="190" y1="55" x2="170" y2="100" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,3"/><circle cx="190" cy="55" r="4.5" fill="#ea580c"/><text x="190" y="45" font-weight="700" font-size="10.5" text-anchor="middle" fill="#ea580c">Apeks</text><text x="190" y="135" font-weight="700" font-size="10.5" text-anchor="middle" fill="#16a34a">Basis</text><text x="190" y="178" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Vierkantige piramide</text></svg>',

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
        'Diagram wat ʼn silinder in blou, ʼn keël in rooi en ʼn bol in groen langs mekaar wys met etikette vir plat vlakke, geboë oppervlak en apeks',
      diagramSvg:
        '<svg viewBox="0 0 400 205" xmlns="http://www.w3.org/2000/svg"><ellipse cx="70" cy="60" rx="28" ry="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><ellipse cx="70" cy="120" rx="28" ry="9" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="42" y1="60" x2="42" y2="120" stroke="#2563eb" stroke-width="2.5"/><line x1="98" y1="60" x2="98" y2="120" stroke="#2563eb" stroke-width="2.5"/><text x="70" y="45" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">plat vlak</text><text x="70" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#2563eb">Silinder</text><text x="70" y="190" font-size="9" text-anchor="middle" fill="#2563eb">geboë oppervlak</text><ellipse cx="210" cy="120" rx="26" ry="8" fill="none" stroke="#dc2626" stroke-width="2.5"/><line x1="210" y1="50" x2="184" y2="120" stroke="#dc2626" stroke-width="2.5"/><line x1="210" y1="50" x2="236" y2="120" stroke="#dc2626" stroke-width="2.5"/><circle cx="210" cy="50" r="4" fill="#ea580c"/><text x="210" y="38" font-weight="700" font-size="10" text-anchor="middle" fill="#ea580c">apeks</text><text x="210" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#dc2626">Keël</text><text x="210" y="190" font-size="9" text-anchor="middle" fill="#dc2626">geboë oppervlak</text><circle cx="330" cy="85" r="33" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 297 85 Q 330 100 363 85" fill="none" stroke="#16a34a" stroke-width="1.3"/><text x="330" y="175" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">Bol</text><text x="330" y="190" font-size="9" text-anchor="middle" fill="#16a34a">geboë oppervlak</text></svg>',

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
        'Diagram wat 3D-voorwerpe in twee groepe sorteer — kan rol in groen en kan nie rol nie in rooi — met ʼn silinder in blou gewys as ʼn voorwerp wat beide kan rol en stapel',
      diagramSvg:
        '<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg"><line x1="230" y1="15" x2="230" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="20" y1="150" x2="440" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/><text x="120" y="25" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">Kan rol ✓</text><text x="340" y="25" font-weight="700" font-size="13" text-anchor="middle" fill="#dc2626">Kan nie rol nie ✗</text><circle cx="70" cy="70" r="18" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 52 70 Q 70 78 88 70" fill="none" stroke="#16a34a" stroke-width="1.2"/><text x="70" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#14532d">Bol</text><ellipse cx="170" cy="95" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="170" y1="45" x2="152" y2="95" stroke="#16a34a" stroke-width="2.5"/><line x1="170" y1="45" x2="188" y2="95" stroke="#16a34a" stroke-width="2.5"/><text x="170" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#14532d">Keël</text><polygon points="270,65 300,65 300,95 270,95" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="270,65 300,65 310,55 280,55" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="300,65 310,55 310,85 300,95" fill="none" stroke="#dc2626" stroke-width="2"/><text x="290" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#7f1d1d">Kubus</text><line x1="370" y1="95" x2="410" y2="95" stroke="#dc2626" stroke-width="2.5"/><line x1="390" y1="50" x2="370" y2="95" stroke="#dc2626" stroke-width="2.5"/><line x1="390" y1="50" x2="410" y2="95" stroke="#dc2626" stroke-width="2.5"/><text x="390" y="112" font-weight="700" font-size="11" text-anchor="middle" fill="#7f1d1d">Piramide</text><text x="230" y="164" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">Silinder — kan rol ÉN stapel</text><ellipse cx="230" cy="175" rx="24" ry="7" fill="none" stroke="#2563eb" stroke-width="2.5"/><ellipse cx="230" cy="212" rx="24" ry="7" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="206" y1="175" x2="206" y2="212" stroke="#2563eb" stroke-width="2.5"/><line x1="254" y1="175" x2="254" y2="212" stroke="#2563eb" stroke-width="2.5"/><text x="230" y="232" font-weight="700" font-size="12" text-anchor="middle" fill="#2563eb">Silinder</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 3D-voorwerpe volgens hul eienskappe te sorteer, insluitend rol, stapel en gly, en verduidelik waarom geboë oppervlakke rol toelaat terwyl plat vlakke stapeling toelaat" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Benoem/identifiseer | 4-8 Tel V/R/H | 9-11 Geboë oppervlakke |
    // 12-15 Sorteer/vergelyk | 16-17 Foutopsporing | 18-19 Multi-stap toepassing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen het 6 identiese vierkantige vlakke. Watter 3D-voorwerp is dit?', answer: 'kubus', checkMode: 'auto', correctAnswer: 'kubus', correctAnswers: ['kubus', 'ʼn kubus'], explanation: 'ʼn Kubus het 6 identiese vierkantige vlakke, 12 rande en 8 hoekpunte — net soos ʼn dobbelsteen.' },
        { difficulty: 'Easy', question: 'ʼn Graanboks is langer as wat dit wyd is, met reghoekige vlakke. Watter 3D-voorwerp is dit?', answer: 'reghoekige prisma', checkMode: 'auto', correctAnswer: 'reghoekigeprisma', correctAnswers: ['reghoekigeprisma', 'ʼn reghoekige prisma'], explanation: 'ʼn Graanboks het 6 reghoekige vlakke waar teenoorstaande vlakke gelyk is — dit is ʼn reghoekige prisma.' },
        { difficulty: 'Easy', question: 'ʼn Blik boontjies is rond met reguit sye en plat sirkelvormige eindes. Noem hierdie 3D-voorwerp.', answer: 'silinder', checkMode: 'auto', correctAnswer: 'silinder', correctAnswers: ['silinder', 'ʼn silinder'], explanation: 'ʼn Blik het 2 plat sirkelvormige vlakke verbind deur 1 geboë oppervlak — dit is ʼn silinder.' },
        { difficulty: 'Easy', question: 'ʼn Roomysgetjie het een plat sirkelvormige bokant en kom tot ʼn punt onderaan. Noem hierdie 3D-voorwerp.', answer: 'keël', checkMode: 'auto', correctAnswer: 'keël', correctAnswers: ['keël', 'ʼn keël', 'keel', 'ʼn keel'], explanation: 'ʼn Keël het 1 plat sirkelvormige vlak, 1 geboë oppervlak en kom tot ʼn punt genoem die apeks.' },
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn kubus?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Kubus het 6 plat vierkantige vlakke — bo, onder, voor, agter, links en regs.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel rande het ʼn reghoekige prisma?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Reghoekige prisma het 12 rande — 4 op die bo-vlak, 4 op die onder-vlak en 4 vertikale rande wat hulle verbind.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke, rande en hoekpunte het ʼn driehoekige prisma?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vlakke', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Driehoekige prisma het 2 driehoekige eindvlakke en 3 reghoekige sy-vlakke: 2 + 3 = 5 vlakke.' },
          { label: 'b) Rande', correctAnswer: '9', correctAnswers: ['9'], explanation: '3 rande op elke driehoekkant (3 + 3 = 6) plus 3 rande wat die twee eindes verbind = 9 rande.' },
          { label: 'c) Hoekpunte', correctAnswer: '6', correctAnswers: ['6'], explanation: '3 hoekpunte op elke driehoekkant: 3 + 3 = 6 hoekpunte.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel vlakke, rande en hoekpunte het ʼn vierkantige piramide?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vlakke', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Vierkantige piramide het 1 vierkantige basis en 4 driehoekige vlakke: 1 + 4 = 5 vlakke.' },
          { label: 'b) Rande', correctAnswer: '8', correctAnswers: ['8'], explanation: '4 rande rondom die vierkantige basis plus 4 rande wat opgaan na die apeks = 8 rande.' },
          { label: 'c) Hoekpunte', correctAnswer: '5', correctAnswers: ['5'], explanation: '4 hoekpunte rondom die basis plus 1 hoekpunt by die apeks = 5 hoekpunte.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel hoekpunte het ʼn driehoekige piramide?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'ʼn Driehoekige piramide het 3 hoekpunte rondom sy driehoekige basis plus 1 by die apeks: 3 + 1 = 4 hoekpunte.' },
        { difficulty: 'Medium', question: 'ʼn Pakkassie is gevorm soos ʼn reghoekige prisma. Hoeveel hoekpunte het die kassie?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Reghoekige prisma het 8 hoekpunte — 4 hoeke op die bo-vlak en 4 hoeke op die onder-vlak.' },
        { difficulty: 'Medium', question: 'ʼn Silinder (soos ʼn blik) het hoeveel plat vlakke en hoeveel rande?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Plat vlakke', correctAnswer: '2', correctAnswers: ['2'], explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke, een bo en een onder.' },
          { label: 'b) Rande', correctAnswer: '2', correctAnswers: ['2'], explanation: 'ʼn Silinder het 2 rande — die sirkels waar elke plat vlak die geboë oppervlak ontmoet.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel geboë oppervlakke het ʼn keël, en hoeveel plat vlakke?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Geboë oppervlakke', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het presies 1 geboë oppervlak wat vanaf die basis tot by die apeks skuins loop.' },
          { label: 'b) Plat vlakke', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het 1 plat sirkelvormige vlak by sy basis.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Bol, soos ʼn sokkerbal, het hoeveel plat vlakke?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'geen', 'geen plat vlakke nie'], explanation: 'ʼn Bol is perfek rond met slegs ʼn geboë oppervlak — dit het 0 plat vlakke, 0 rande en 0 hoekpunte.' },
        { difficulty: 'Medium', question: 'Kyk na ʼn kubus en ʼn reghoekige prisma langs mekaar. Verduidelik een eienskap wat hulle deel en een manier waarop hulle verskil.', answer: 'Gedeel: albei het 6 vlakke, 12 rande en 8 hoekpunte, en albei se vlakke ontmoet teen regte hoeke. Verskil: ʼn kubus het 6 identiese vierkantige vlakke, terwyl ʼn reghoekige prisma reghoekige vlakke het wat nie almal dieselfde grootte is nie — teenoorstaande vlakke is gelyk in pare, nie al ses nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie: bol, kubus, keël, reghoekige prisma, silinder.', answer: 'Kan rol: bol, keël, silinder (hulle het ʼn geboë oppervlak). Kan nie rol nie: kubus, reghoekige prisma (hulle het slegs plat vlakke).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Winkelassistent stapel bokse. Watter van hierdie kan maklik gestapel word en watter nie — reghoekige prisma, bol, vierkantige piramide, silinder? Verduidelik hoekom.', answer: 'Die reghoekige prisma en silinder kan maklik gestapel word omdat hulle plat vlakke bo en onder het. Die vierkantige piramide is moeilik om te stapel omdat dit tot ʼn punt by die apeks kom. Die bol kan glad nie stapel nie omdat sy hele oppervlak geboë is.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Karabo sê: 'ʼn Keël en ʼn silinder is dieselfde vorm omdat albei ʼn sirkelvormige vlak en ʼn geboë oppervlak het.' Is Karabo korrek? Verduidelik deur die aantal plat vlakke te gebruik en of elke voorwerp ʼn apeks het.", answer: 'Karabo is slegs gedeeltelik korrek. Dit is waar dat albei ʼn keël en ʼn silinder ʼn geboë oppervlak en ten minste een sirkelvormige plat vlak het. Maar ʼn silinder het 2 sirkelvormige plat vlakke terwyl ʼn keël slegs 1 het. ʼn Keël kom ook tot ʼn punt genoem die apeks, maar ʼn silinder het geen apeks nie — sy twee sirkelvormige vlakke is dieselfde grootte regdeur. Die twee vorms is dus verwant, maar nie dieselfde nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Leerder beweer: 'ʼn Vierkantige piramide en ʼn kubus het albei 8 hoekpunte, dus moet hulle ook dieselfde aantal rande hê.' Is hierdie bewering korrek? Verduidelik met die werklike randgetalle.", answer: 'Hierdie bewering is verkeerd. ʼn Vierkantige piramide het nie 8 hoekpunte nie — dit het slegs 5 (4 rondom die basis plus die apeks). ʼn Kubus het 8 hoekpunte en 12 rande, terwyl ʼn vierkantige piramide 5 hoekpunte en slegs 8 rande het. Die feit dat hulle ʼn verskillende aantal hoekpunte het, wys reeds dat die twee vorms nie dieselfde gebou is nie, en hul randgetalle (12 teenoor 8) verskil ook.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zinhle bou ʼn model van ʼn huis met ʼn reghoekige prisma vir die mure en ʼn vierkantige piramide vir die dak. Hoeveel hoekpunte is daar altesaam oor albei dele, en hoeveel van daardie hoekpunte raak waar die dak die mure ontmoet?', answer: 'Die reghoekige prisma het 8 hoekpunte en die vierkantige piramide het 5 hoekpunte, dus is daar 8 + 5 = 13 hoekpunte altesaam oor die twee vorms. Waar die dak op die mure sit, lê die 4 basis-hoekpunte van die piramide op een lyn met die 4 boonste hoekpunte van die prisma, dus raak 4 hoekpunte by die aansluiting (die piramide se apeks raak nie die mure nie).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Geskenkwinkel verkoop items gevorm soos ʼn silinder (blik lekkers) en ʼn keël (partytjiehoed). Die winkeleienaar wil hulle in ʼn vertoning stapel, maar slegs die blik kan veilig gestapel word. Verduidelik waarom die silinder kan stapel maar die keël nie, deur na hul vlakke en apeks te verwys.', answer: 'Die silinder het 2 plat sirkelvormige vlakke van gelyke grootte — een bo en een onder — sodat nog ʼn silinder of plat voorwerp stewig bo-op kan sit. Die keël het slegs 1 plat sirkelvormige vlak by sy basis, en die teenoorgestelde punt is die apeks, ʼn enkele punt. Omdat ʼn punt nie gewig kan dra of ʼn plat rusoppervlak kan bied nie, kan niks stabiel bo-op ʼn keël wat op sy basis staan, gestapel word nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het benoeming, telling en vergelyking van 3D-voorwerpe soos ʼn kenner onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Sjokoladeboks het twee driehoekige eindes en drie reghoekige sye. Watter 3D-voorwerp is dit?', answer: 'driehoekige prisma', checkMode: 'auto', correctAnswer: 'driehoekigeprisma', correctAnswers: ['driehoekigeprisma', 'ʼn driehoekige prisma'], explanation: 'ʼn Driehoekige prisma het 2 identiese driehoekige vlakke aan elke kant en 3 reghoekige vlakke wat hulle verbind.' },
        { difficulty: 'Easy', question: 'Die Egiptiese piramides het ʼn vierkantige basis en vier driehoekige sye wat by ʼn punt ontmoet. Noem hierdie 3D-voorwerp.', answer: 'vierkantige piramide', checkMode: 'auto', correctAnswer: 'vierkantigepiramide', correctAnswers: ['vierkantigepiramide', 'ʼn vierkantige piramide'], explanation: 'ʼn Vierkantige piramide het ʼn vierkantige basis en 4 driehoekige vlakke wat by die apeks ontmoet, net soos die Egiptiese piramides.' },
        { difficulty: 'Easy', question: 'ʼn Sokkerbal is perfek rond met geen plat vlakke nie. Noem hierdie 3D-voorwerp.', answer: 'bol', checkMode: 'auto', correctAnswer: 'bol', correctAnswers: ['bol', 'ʼn bol'], explanation: 'ʼn Bol is perfek rond met slegs 1 geboë oppervlak en geen plat vlakke, rande of hoekpunte nie.' },
        { difficulty: 'Easy', question: 'ʼn Tetraëder-speelding het 4 driehoekige vlakke, sy basis ingesluit. Noem hierdie 3D-voorwerp.', answer: 'driehoekige piramide', checkMode: 'auto', correctAnswer: 'driehoekigepiramide', correctAnswers: ['driehoekigepiramide', 'ʼn driehoekige piramide', 'tetraëder', 'ʼn tetraëder', 'tetraeder'], explanation: 'ʼn Driehoekige piramide (ook ʼn tetraëder genoem) het ʼn driehoekige basis en 3 driehoekige sy-vlakke wat by die apeks ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn kubus?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Kubus het 8 hoekpunte — 4 op die bo-vlak en 4 op die onder-vlak.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel vlakke het ʼn reghoekige prisma?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Reghoekige prisma het 6 reghoekige vlakke — bo, onder, voor, agter, links en regs.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke, rande en hoekpunte het ʼn kubus?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vlakke', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Kubus het 6 identiese vierkantige vlakke.' },
          { label: 'b) Rande', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Kubus het 12 rande — 4 bo, 4 onder en 4 vertikale rande.' },
          { label: 'c) Hoekpunte', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Kubus het 8 hoekpunte — 4 bo en 4 onder.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel vlakke, rande en hoekpunte het ʼn driehoekige piramide?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vlakke', correctAnswer: '4', correctAnswers: ['4'], explanation: 'ʼn Driehoekige piramide het 1 driehoekige basis en 3 driehoekige sy-vlakke: 1 + 3 = 4 vlakke.' },
          { label: 'b) Rande', correctAnswer: '6', correctAnswers: ['6'], explanation: '3 rande rondom die basis plus 3 rande wat opgaan na die apeks = 6 rande.' },
          { label: 'c) Hoekpunte', correctAnswer: '4', correctAnswers: ['4'], explanation: '3 hoekpunte rondom die basis plus 1 hoekpunt by die apeks = 4 hoekpunte.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel rande het ʼn driehoekige prisma?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'ʼn Driehoekige prisma het 3 rande op elke driehoekkant (3 + 3 = 6) plus 3 rande wat die twee eindes verbind: 6 + 3 = 9 rande.' },
        { difficulty: 'Medium', question: 'ʼn Skoenboks is gevorm soos ʼn reghoekige prisma. Hoeveel rande het die skoenboks?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Reghoekige prisma het 12 rande — 4 bo, 4 onder en 4 vertikale rande wat hulle verbind.' },
        { difficulty: 'Medium', question: 'ʼn Partytjiehoed is gevorm soos ʼn keël. Hoeveel hoekpunte het dit, en hoeveel rande?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Hoekpunte', correctAnswer: '0', correctAnswers: ['0', 'geen', 'geen hoekpunte nie'], explanation: 'ʼn Keël het geen ware hoekpunte nie — sy apeks is ʼn punt, maar dit word nie deur reguit rande wat ontmoet gevorm nie, dus word dit nie as ʼn hoekpunt getel nie.' },
          { label: 'b) Rande', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het 1 geboë rand — die sirkel waar die plat basis die geboë oppervlak ontmoet.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel sirkelvormige plat vlakke het ʼn silinder, vergeleke met ʼn keël?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Silinder', correctAnswer: '2', correctAnswers: ['2'], explanation: 'ʼn Silinder het 2 sirkelvormige plat vlakke, een aan elke kant.' },
          { label: 'b) Keël', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het slegs 1 sirkelvormige plat vlak, by sy basis.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Wêreldbol is ʼn model van ʼn bol. Hoeveel rande het ʼn bol?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'geen', 'geen rande nie'], explanation: 'ʼn Bol het geen plat vlakke nie, dus is daar geen rande waar vlakke kan ontmoet nie — dit het 0 rande.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn driehoekige prisma en ʼn driehoekige piramide. Verduidelik hoe hul aantal vlakke verskil, en hoekom.', answer: 'ʼn Driehoekige prisma het 5 vlakke (2 driehoekige eindes en 3 reghoekige sye), terwyl ʼn driehoekige piramide slegs 4 vlakke het (1 driehoekige basis en 3 driehoekige sye). Die prisma het ʼn ekstra vlak omdat dit twee identiese driehoekige eindes het wat deur reghoeke verbind word, terwyl die piramide net een driehoekige basis het en sy sye vernou tot ʼn enkele punt by die apeks in plaas van ʼn tweede basis.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan maklik stapel en kan nie maklik stapel nie: silinder, bol, keël, reghoekige prisma.', answer: 'Kan stapel: silinder en reghoekige prisma, omdat hulle albei plat vlakke bo en onder het wat nog ʼn voorwerp kan ondersteun. Kan nie maklik stapel nie: bol (heeltemal geboë, niks om op te balanseer nie) en keël (kom tot ʼn punt by die apeks, dus baie onstabiel om op te stapel).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Speelgoedmaatskappy ontwerp boublokkies. Watter vorms sou die beste werk vir stapeling — kubus, bol, keël, silinder? Verduidelik jou keuse.', answer: 'Die kubus en silinder werk die beste vir stapeling omdat hulle albei plat vlakke bo en onder het wat gelykop bo-op mekaar sit. Die bol sou wegrol en kan nie stapel nie omdat sy hele oppervlak geboë is. Die keël is onstabiel omdat dit slegs een plat vlak het — sy apeks kan niks wat daarop geplaas word, ondersteun nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Thandi sê: 'ʼn Reghoekige prisma en ʼn kubus is heeltemal verskillende vorms omdat ʼn kubus ʼn vierkant is en ʼn reghoekige prisma ʼn reghoek is.' Is Thandi korrek? Verduidelik deur die eienskappe van elke 3D-voorwerp te gebruik.", answer: 'Thandi is nie heeltemal korrek nie. Eerstens is ʼn kubus en ʼn reghoekige prisma albei 3D-voorwerpe, nie 2D-vorms soos ʼn vierkant of reghoek nie. Belangriker nog, ʼn kubus is eintlik ʼn spesiale soort reghoekige prisma — dit het 6 vlakke, 12 rande en 8 hoekpunte, net soos ʼn reghoekige prisma, maar al sy vlakke is toevallig gelyke vierkante in plaas van algemene reghoeke. Hulle deel dus dieselfde vlak-, rand- en hoekpunt-getalle; die enigste verskil is dat ʼn kubus se vlakke almal identiese vierkante is.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Leerder beweer: 'Elke 3D-voorwerp met ʼn apeks is ʼn piramide.' Is hierdie bewering waar? Gebruik ʼn keël as ʼn teenvoorbeeld in jou verduideliking.", answer: 'Hierdie bewering is vals. ʼn Keël het ook ʼn apeks — die punt waar sy geboë oppervlak tot ʼn punt kom — maar ʼn keël is nie ʼn piramide nie. ʼn Piramide word gemaak van plat driehoekige vlakke en reguit rande wat by die apeks ontmoet, terwyl ʼn keël ʼn geboë oppervlak het en glad geen reguit rande nie. Om ʼn apeks te hê, is dus nie genoeg om iets ʼn piramide te maak nie; die vlakke moet ook plat en driehoekig wees.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Markstalletjie sorteer vrugte in ʼn keël-gevormde papiersak en stapel blikke gevorm soos silinders daaragter. As een silinderblik 2 rande het en die keël-sak 1 rand het, hoeveel rande is daar altesaam vir 3 identiese silinderblikke en 1 keël-sak, en watter vorm dra meer rande by in totaal?', answer: 'Elke silinder het 2 rande, dus dra 3 silinders 3 × 2 = 6 rande by. Die keël-sak dra 1 rand by. Altesaam is daar 6 + 1 = 7 rande. Die silinders dra meer rande in totaal by (6 rande) vergeleke met die enkele keël (1 rand).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Bakkery pak ʼn boks gebak wat soos ʼn driehoekige prisma gevorm is, en sit ʼn bol-gevormde lemoen bo-op vir die vertoning. Verduidelik, deur eienskappe van vlakke te gebruik, waarom die lemoen nie gebalanseerd bo-op die boks sal bly nie.', answer: 'Die driehoekige-prisma-boks het plat reghoekige en driehoekige vlakke, dus is sy bo-oppervlak plat en kan ʼn plat-vlak voorwerp ondersteun. ʼn Bol het egter glad geen plat vlakke nie — sy hele oppervlak is geboë. Sonder ʼn plat area om kontak met die boks te maak, het die ronde lemoen niks om eweredig op te rus nie, dus sal dit afrol in plaas daarvan om gebalanseerd te bly.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue elke soort 3D-voorwerp benoem en beskryf.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Baksteen wat vir ʼn muur gebruik word, het 6 plat reghoekige vlakke, en teenoorstaande vlakke is in pare gelyk. Watter 3D-voorwerp is dit?', answer: 'reghoekige prisma', checkMode: 'auto', correctAnswer: 'reghoekigeprisma', correctAnswers: ['reghoekigeprisma', 'ʼn reghoekige prisma'], explanation: 'ʼn Baksteen het 6 reghoekige vlakke met teenoorstaande vlakke gelyk in pare — dit is ʼn reghoekige prisma.' },
        { difficulty: 'Easy', question: 'ʼn Tromp wat in ʼn skoolorkes gebruik word, is rond, met reguit sye en twee plat sirkelvormige eindes. Noem hierdie 3D-voorwerp.', answer: 'silinder', checkMode: 'auto', correctAnswer: 'silinder', correctAnswers: ['silinder', 'ʼn silinder'], explanation: 'ʼn Tromp het 2 plat sirkelvormige vlakke verbind deur 1 geboë oppervlak — dit is ʼn silinder.' },
        { difficulty: 'Easy', question: 'ʼn Towenaar se hoed het ʼn sirkelvormige rand-area en vernou tot ʼn skerp punt. Noem hierdie 3D-voorwerp.', answer: 'keël', checkMode: 'auto', correctAnswer: 'keël', correctAnswers: ['keël', 'ʼn keël', 'keel', 'ʼn keel'], explanation: 'ʼn Keël het 1 plat sirkelvormige vlak, 1 geboë oppervlak en kom tot ʼn punt by die apeks.' },
        { difficulty: 'Easy', question: 'ʼn Rubik se kubus het 6 identiese vierkantige vlakke wat kan draai. Watter 3D-voorwerp is dit?', answer: 'kubus', checkMode: 'auto', correctAnswer: 'kubus', correctAnswers: ['kubus', 'ʼn kubus'], explanation: 'ʼn Rubik se kubus het 6 identiese vierkantige vlakke, 12 rande en 8 hoekpunte — dit is ʼn kubus.' },
        { difficulty: 'Easy', question: 'Hoeveel plat vlakke het ʼn bol?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'geen', 'geen plat vlakke nie'], explanation: 'ʼn Bol is perfek rond met slegs ʼn geboë oppervlak, dus het dit 0 plat vlakke.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel rande het ʼn vierkantige piramide?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Vierkantige piramide het 4 rande rondom sy vierkantige basis plus 4 rande wat opgaan na die apeks: 4 + 4 = 8 rande.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke, rande en hoekpunte het ʼn reghoekige prisma?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vlakke', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Reghoekige prisma het 6 reghoekige vlakke.' },
          { label: 'b) Rande', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Reghoekige prisma het 12 rande — 4 bo, 4 onder en 4 vertikale rande.' },
          { label: 'c) Hoekpunte', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Reghoekige prisma het 8 hoekpunte — 4 op die bo-vlak en 4 op die onder-vlak.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Vierkantige-piramide-model het hoeveel hoekpunte, en hoeveel daarvan is die apeks?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale hoekpunte', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Vierkantige piramide het 4 hoekpunte rondom die vierkantige basis plus 1 apeks: 4 + 1 = 5 hoekpunte.' },
          { label: 'b) Apeks-hoekpunte', correctAnswer: '1', correctAnswers: ['1'], explanation: 'Daar is presies 1 apeks — die enkele punt waar al 4 driehoekige vlakke ontmoet.' },
        ] },
        { difficulty: 'Medium', question: 'Hoeveel vlakke het ʼn driehoekige piramide altesaam, die basis ingesluit?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'ʼn Driehoekige piramide het 1 driehoekige basis plus 3 driehoekige sy-vlakke: 1 + 3 = 4 vlakke.' },
        { difficulty: 'Medium', question: 'ʼn Sjokoladeboks gevorm soos ʼn driehoekige prisma het hoeveel hoekpunte?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Driehoekige prisma het 3 hoekpunte op elke driehoekkant: 3 + 3 = 6 hoekpunte.' },
        { difficulty: 'Medium', question: 'ʼn Verjaardagpartytjiehoed (ʼn keël) het hoeveel rande altesaam?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het slegs 1 geboë rand — die sirkel waar sy plat sirkelvormige basis die geboë oppervlak ontmoet wat opgaan na die apeks.' },
        { difficulty: 'Medium', question: 'ʼn Blik verf (ʼn silinder) en ʼn roomysgetjie word vergelyk. Hoeveel geboë oppervlakke het elke voorwerp?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Silinder', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Silinder het presies 1 geboë oppervlak wat sy twee sirkelvormige vlakke verbind.' },
          { label: 'b) Keël', correctAnswer: '1', correctAnswers: ['1'], explanation: 'ʼn Keël het ook presies 1 geboë oppervlak wat skuins van sy basis na die apeks loop.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Basketbal is gevorm soos ʼn bol. Hoeveel hoekpunte en hoeveel rande het dit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Hoekpunte', correctAnswer: '0', correctAnswers: ['0', 'geen'], explanation: 'ʼn Bol het geen plat vlakke of reguit rande nie, dus het dit 0 hoekpunte.' },
          { label: 'b) Rande', correctAnswer: '0', correctAnswers: ['0', 'geen'], explanation: 'ʼn Bol het geen plat vlakke wat ontmoet nie, dus het dit 0 rande.' },
        ] },
        { difficulty: 'Medium', question: 'Vergelyk ʼn keël en ʼn vierkantige piramide. Verduidelik wat hulle in gemeen het en wat hulle verskillend maak.', answer: 'Albei ʼn keël en ʼn vierkantige piramide kom tot ʼn enkele punt bo-aan genoem die apeks, en albei het presies een basis. ʼn Vierkantige piramide word egter heeltemal uit plat vlakke gemaak (1 vierkantige basis en 4 plat driehoekige sye) wat deur reguit rande verbind word, terwyl ʼn keël ʼn geboë oppervlak het wat sy 1 sirkelvormige basis met die apeks verbind, sonder enige reguit rande.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sorteer hierdie winkelitems in kan rol en kan nie rol nie: ʼn blik (silinder), ʼn graanboks (reghoekige prisma), ʼn bal (bol), ʼn tent-vorm (driehoekige prisma).', answer: 'Kan rol: die blik (silinder) en die bal (bol), omdat albei ʼn geboë oppervlak het. Kan nie rol nie: die graanboks (reghoekige prisma) en die tent-vorm (driehoekige prisma), omdat albei slegs uit plat vlakke gemaak is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Markverkoper wil vrugte vertoon. Sal ʼn bol-gevormde spanspek of ʼn keël-gevormde papiersakkie makliker wees om in ʼn hoop te stapel? Verduidelik jou redenasie deur na hul vlakke te verwys.', answer: 'Die keël-gevormde papiersakkie sou effens makliker wees om neer te sit (dit het 1 plat sirkelvormige vlak om op te rus), maar dit kan steeds nie bo-op nog ʼn keël gestapel word nie omdat sy apeks ʼn enkele punt is. Die bol-gevormde spanspek het glad geen plat vlakke nie, dus kan dit nie gestapel of teen enigiets gerus word sonder om weg te rol nie. Oor die algemeen stapel geeneen goed nie, maar die keël kan ten minste regop op sy plat basis staan, terwyl die bol nie op sy eie stil kan bly nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Bongani beweer: 'ʼn Driehoekige prisma het meer hoekpunte as ʼn vierkantige piramide, dus moet dit ook meer vlakke hê.' Is Bongani korrek? Gebruik die werklike vlak- en hoekpuntgetalle om te verduidelik.", answer: 'Bongani is slegs half korrek. ʼn Driehoekige prisma het inderdaad meer hoekpunte (6) as ʼn vierkantige piramide (5), so die eerste deel is waar. Die tweede deel is egter vals: ʼn driehoekige prisma het 5 vlakke, en ʼn vierkantige piramide het ook 5 vlakke — hulle is gelyk, nie verskillend nie. Om meer hoekpunte te hê, beteken nie outomaties dat ʼn vorm meer vlakke het nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Leerder sê: 'ʼn Silinder kan nie ʼn prisma wees nie, want prismas het slegs plat vlakke en ʼn silinder het ʼn geboë oppervlak.' Is hierdie stelling korrek? Verduidelik deur die definisie van ʼn prisma te gebruik.", answer: 'Hierdie stelling is korrek. ʼn Prisma is, per definisie, ʼn 3D-voorwerp met twee identiese plat basisse en plat reghoekige sy-vlakke wat deur reguit rande verbind word. ʼn Silinder het 2 plat sirkelvormige basisse, maar in plaas van plat reghoekige sye het dit 1 aaneenlopende geboë oppervlak sonder enige reguit rande wat die basisse verbind. Omdat ʼn ware prisma heeltemal uit plat vlakke moet bestaan, voldoen ʼn silinder nie aan die definisie van ʼn prisma nie, al het dit wel twee identiese plat eindes soos ʼn prisma.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Fabriek pak 2 vierkantige piramides en 1 driehoekige piramide in ʼn boks vir ʼn meetkunde-stel. Wat is die totale aantal hoekpunte in die boks, en hoeveel van daardie hoekpunte is apeks-punte?', answer: 'Elke vierkantige piramide het 5 hoekpunte, dus dra 2 vierkantige piramides 2 × 5 = 10 hoekpunte by. Die driehoekige piramide het 4 hoekpunte, wat nog 4 bydra. Altesaam is daar 10 + 4 = 14 hoekpunte in die boks. Van hierdie dra elke piramide presies 1 apeks-hoekpunt by, dus is daar 2 + 1 = 3 apeks-punte altesaam.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Konstruksiewerker kies ʼn vorm vir ʼn watertenk: ʼn silinder of ʼn keël, albei oop by een plat sirkelvormige vlak vir vulling. Verduidelik, deur die aantal plat vlakke en geboë oppervlakke van elke vorm te gebruik, waarom die silinder die praktieser keuse is om ʼn groot hoeveelheid water te stoor.', answer: 'ʼn Silinder het 2 plat sirkelvormige vlakke van gelyke grootte verbind deur 1 geboë oppervlak, wat dit dieselfde breedte van bo tot onder gee — dit beteken dit hou ʼn groot, eweredig verspreide volume water en bly stabiel op sy plat basis. ʼn Keël het slegs 1 plat sirkelvormige vlak en vernou tot ʼn enkele punt by die apeks, dus is die meeste van sy volume naby die wye opening gekonsentreer, en dit word onstabiel en onprakties om groot hoeveelhede water te stoor terwyl dit na niks vernou onderaan (of bo-aan, indien omgekeer). Die silinder se twee gelyke plat vlakke maak dit veel praktieser vir konstante waterstoor.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan jou kennis van 3D-voorwerpe met selfvertroue op werklike situasies toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
