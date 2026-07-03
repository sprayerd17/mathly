import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D object roles) ────────────────────────────────────────
// faces          → blue   (#2563eb)
// edges          → orange (#ea580c)
// vertices       → green  (#16a34a)
// formula / apex → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D-voorwerpe',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — EIENSKAPPE VAN PRISMAS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-prisms',
      title: 'Eienskappe van Prismas',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Prisma</strong> is ʼn 3D-voorwerp met <strong>twee identiese parallelle basisse</strong> en plat reghoekige sye (sy-vlakke). Die vorm van die basis gee die prisma sy naam — ʼn driehoekige prisma het driehoekige basisse, ʼn reghoekige prisma het reghoekige basisse, en so meer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rande')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoekpunte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('formule')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Prisma-formules (gebaseer op die aantal basissye)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vlakke')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('basissye + 2')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Rande')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('basissye × 3')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Hoekpunte')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">${re('basissye × 2')}</p>` +
        `</div>` +

        `</div>` +

        // ── Common prisms ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene prismas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Reghoekige prisma (4 basissye)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Vlakke')} = 4 + 2 = ${bl('6')}<br>${or('Rande')} = 4 × 3 = ${or('12')}<br>${gr('Hoekpunte')} = 4 × 2 = ${gr('8')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Driehoekige prisma (3 basissye)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Vlakke')} = 3 + 2 = ${bl('5')}<br>${or('Rande')} = 3 × 3 = ${or('9')}<br>${gr('Hoekpunte')} = 3 × 2 = ${gr('6')}</p>` +
        `</div>` +

        `</div>` +

        // ── Euler's formula ──────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Euler se formule — werk vir alle prismas en piramides</p>` +
        `<p style="margin:0;color:#991b1b;font-size:1.05em;">${re('V + H − R = 2')}&nbsp;&nbsp;(${bl('Vlakke')} + ${gr('Hoekpunte')} − ${or('Rande')} = 2)</p>` +
        `<p style="margin:8px 0 0;color:#991b1b;font-size:14px;">Gebruik hierdie formule altyd om jou antwoorde te toets — as die uitkoms nie 2 is nie, is iets verkeerd.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn vyfhoekige prisma?',
          answer: `${bl('7 vlakke')}, ${or('15 rande')}, ${gr('10 hoekpunte')}`,
          steps: [
            `Identifiseer die basisvorm: ʼn <strong>vyfhoek</strong> het <strong>5 sye</strong>.`,
            `${bl('Vlakke')} = basissye + 2 = 5 + 2 = ${bl('7')}`,
            `${or('Rande')} = basissye × 3 = 5 × 3 = ${or('15')}`,
            `${gr('Hoekpunte')} = basissye × 2 = 5 × 2 = ${gr('10')}`,
            `<strong>Antwoord:</strong> ${bl('7 vlakke')}, ${or('15 rande')}, ${gr('10 hoekpunte')} ✓`,
          ],
        },
        {
          question: 'Toets Euler se formule (V + H − R = 2) vir ʼn driehoekige prisma.',
          answer: `${re('V + H − R = 5 + 6 − 9 = 2')} ✓ Bevestig`,
          steps: [
            `Vind die waardes vir ʼn driehoekige prisma (3 basissye):`,
            `${bl('V')} = 3 + 2 = ${bl('5')}&nbsp;&nbsp;&nbsp;${gr('H')} = 3 × 2 = ${gr('6')}&nbsp;&nbsp;&nbsp;${or('R')} = 3 × 3 = ${or('9')}`,
            `Vervang in Euler se formule: ${re('V + H − R')} = ${bl('5')} + ${gr('6')} − ${or('9')}`,
            `${bl('5')} + ${gr('6')} − ${or('9')} = ${re('2')} ✓`,
            `<strong>Uitkoms:</strong> Die formule gee 2, dus is die waardes ${re('bevestig')} korrek.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — vlakke van ʼn reghoekige prisma ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel vlakke het ʼn reghoekige prisma?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Reghoekige prisma het 4 basissye.\nVlakke = basissye + 2 = 4 + 2 = 6 ✓',
        },

        // ── V2 Maklik — hoekpunte van ʼn driehoekige prisma ──────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel hoekpunte het ʼn driehoekige prisma?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Driehoekige prisma het 3 basissye.\nHoekpunte = basissye × 2 = 3 × 2 = 6 ✓',
        },

        // ── V3 Medium — vlakke, rande, hoekpunte van ʼn vyfhoekige prisma ────
        {
          difficulty: 'Medium',
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn vyfhoekige prisma?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vlakke',
              correctAnswer: '7',
              explanation: 'ʼn Vyfhoek het 5 sye.\nVlakke = basissye + 2 = 5 + 2 = 7 ✓',
            },
            {
              label: 'b) Rande',
              correctAnswer: '15',
              explanation: 'ʼn Vyfhoek het 5 sye.\nRande = basissye × 3 = 5 × 3 = 15 ✓',
            },
            {
              label: 'c) Hoekpunte',
              correctAnswer: '10',
              explanation: 'ʼn Vyfhoek het 5 sye.\nHoekpunte = basissye × 2 = 5 × 2 = 10 ✓',
            },
          ],
        },

        // ── V4 Medium — vind basisvorm uit hoekpunttal ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho het ʼn prisma met 10 hoekpunte. Wat is sy basisvorm?',
          answer: 'vyfhoek',
          checkMode: 'auto',
          correctAnswer: 'vyfhoek',
          explanation: 'Hoekpunte = basissye × 2.\nDus is basissye = 10 ÷ 2 = 5.\nʼn Veelhoek met 5 sye is ʼn vyfhoek ✓',
        },

        // ── V5 Hard — toets Euler se formule vir ʼn reghoekige prisma ────────
        {
          difficulty: 'Hard',
          question: "Toets Euler se formule (V + H − R = 2) vir ʼn reghoekige prisma. Wys al die waardes en die volledige werk.",
          answer: 'V = 6, H = 8, R = 12.\nV + H − R = 6 + 8 − 12 = 2 ✓ Bevestig.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn driehoekige prisma en ʼn reghoekige prisma wys met vlakke uitgelig in blou, rande in oranje en hoekpunte in groen, geëtiketteer met tellings" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die eienskappe van prismas verduidelik — vlakke, rande en hoekpunte — met behulp van die basissye-formules en Euler se formule om te bevestig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — EIENSKAPPE VAN PIRAMIDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-pyramids',
      title: 'Eienskappe van Piramides',
      icon: '🔺',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Piramide</strong> het een basis en driehoekige vlakke wat by ʼn enkele punt genoem die <strong>${re('apeks')}</strong> ontmoet. Die vorm van die basis gee die piramide sy naam. Anders as ʼn prisma, het ʼn piramide slegs <strong>een basis</strong> — nie twee nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rande')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoekpunte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('apeks')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Piramide-formules (gebaseer op die aantal basissye)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vlakke')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">basissye + 1</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Rande')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">basissye × 2</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Hoekpunte')}</p>` +
        `<p style="color:#374151;font-size:15px;margin:0;">basissye + 1</p>` +
        `</div>` +

        `</div>` +

        // ── Common pyramids ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene piramides</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Vierkantige piramide (4 basissye)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Vlakke')} = 4 + 1 = ${bl('5')}<br>${or('Rande')} = 4 × 2 = ${or('8')}<br>${gr('Hoekpunte')} = 4 + 1 = ${gr('5')}<br>${re('Apeks')}: ${re('1')} punt bo-aan</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Driehoekige piramide (3 basissye)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${bl('Vlakke')} = 3 + 1 = ${bl('4')}<br>${or('Rande')} = 3 × 2 = ${or('6')}<br>${gr('Hoekpunte')} = 3 + 1 = ${gr('4')}<br>${re('Apeks')}: ${re('1')} punt bo-aan</p>` +
        `</div>` +

        `</div>` +

        // ── Prism vs pyramid tip ─────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Prisma vs piramide — sleutelverskil</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn <strong>Prisma</strong> het <strong>twee identiese basisse</strong> en reghoekige sy-vlakke. ʼn <strong>Piramide</strong> het <strong>een basis</strong>, driehoekige sy-vlakke, en ʼn enkele ${re('apeks')}. Die apeks is die bepalende kenmerk van elke piramide.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn heksagonale piramide?',
          answer: `${bl('7 vlakke')}, ${or('12 rande')}, ${gr('7 hoekpunte')}`,
          steps: [
            `Identifiseer die basisvorm: ʼn <strong>heksagoon</strong> het <strong>6 sye</strong>.`,
            `${bl('Vlakke')} = basissye + 1 = 6 + 1 = ${bl('7')}`,
            `${or('Rande')} = basissye × 2 = 6 × 2 = ${or('12')}`,
            `${gr('Hoekpunte')} = basissye + 1 = 6 + 1 = ${gr('7')}`,
            `<strong>Antwoord:</strong> ${bl('7 vlakke')}, ${or('12 rande')}, ${gr('7 hoekpunte')} ✓`,
          ],
        },
        {
          question: 'Hoe verskil ʼn vierkantige piramide van ʼn kubus?',
          answer: `ʼn Kubus het ${bl('6 gelyke vierkantige vlakke')}, ${or('12 rande')}, ${gr('8 hoekpunte')} en geen ${re('apeks')} nie. ʼn Vierkantige piramide het ${bl('5 vlakke')}, ${or('8 rande')}, ${gr('5 hoekpunte')} en een ${re('apeks')}.`,
          steps: [
            `<strong>Kubus:</strong> Al 6 vlakke is gelyke vierkante. ${bl('Vlakke')} = ${bl('6')}, ${or('Rande')} = ${or('12')}, ${gr('Hoekpunte')} = ${gr('8')}. Daar is geen ${re('apeks')} nie — teenoorstaande vlakke is parallel.`,
            `<strong>Vierkantige piramide:</strong> 1 vierkantige basis + 4 driehoekige sy-vlakke = ${bl('5 vlakke')}. ${or('Rande')} = 4 × 2 = ${or('8')}. ${gr('Hoekpunte')} = 4 + 1 = ${gr('5')}. Dit het een ${re('apeks')} bo-aan waar al die driehoekige vlakke ontmoet.`,
            `<strong>Sleutelverskil:</strong> Die kubus het geen ${re('apeks')} nie en al die vlakke is vierkante. Die piramide het ʼn enkele ${re('apeks')} en driehoekige sy-vlakke — dit gee dit sy puntige vorm.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V6 Maklik — vlakke van ʼn vierkantige piramide ───────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel vlakke het ʼn vierkantige piramide?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'ʼn Vierkantige piramide het 4 basissye.\nVlakke = basissye + 1 = 4 + 1 = 5 ✓',
        },

        // ── V7 Medium — vlakke, rande, hoekpunte van ʼn vyfhoekige piramide ──
        {
          difficulty: 'Medium',
          question: 'Hoeveel vlakke, rande en hoekpunte het ʼn vyfhoekige piramide?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vlakke',
              correctAnswer: '6',
              explanation: 'ʼn Vyfhoek het 5 sye.\nVlakke = basissye + 1 = 5 + 1 = 6 ✓',
            },
            {
              label: 'b) Rande',
              correctAnswer: '10',
              explanation: 'ʼn Vyfhoek het 5 sye.\nRande = basissye × 2 = 5 × 2 = 10 ✓',
            },
            {
              label: 'c) Hoekpunte',
              correctAnswer: '6',
              explanation: 'ʼn Vyfhoek het 5 sye.\nHoekpunte = basissye + 1 = 5 + 1 = 6 ✓',
            },
          ],
        },

        // ── V8 Hard — vind basisvorm uit randtal ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het ʼn piramide met 8 rande. Wat is sy basisvorm en wat word die piramide genoem?',
          answer: 'Rande = basissye × 2, dus is basissye = 8 ÷ 2 = 4.\nʼn Basis met 4 sye is ʼn vierkant, dus is dit ʼn vierkantige piramide.',
          checkMode: 'self',
        },

        // ── V9 Medium — vergelyk driehoekige prisma en driehoekige piramide ──
        {
          difficulty: 'Medium',
          question: 'Hoe verskil ʼn driehoekige prisma van ʼn driehoekige piramide?',
          answer: 'ʼn Driehoekige prisma het 2 driehoekige basisse en 3 reghoekige sy-vlakke — 5 vlakke in totaal. ʼn Driehoekige piramide het 1 driehoekige basis en 3 driehoekige sy-vlakke — 4 vlakke in totaal, met ʼn apeks bo-aan.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn vierkantige piramide en ʼn driehoekige piramide wys met vlakke uitgelig in blou, rande in oranje, hoekpunte in groen en die apeks uitgelig in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die eienskappe van piramides verduidelik — vlakke, rande, hoekpunte en die apeks — met die basissye-formules en ʼn vergelyking met prismas" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — NETTE VAN 3D-VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nets-of-3d-objects',
      title: 'Nette van 3D-voorwerpe',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Net</strong> is ʼn plat 2D-vorm wat langs sy rande gevou kan word om ʼn 3D-voorwerp te vorm. Elke vlak van die 3D-voorwerp verskyn as ʼn vorm in die net. Nette help ons om die oppervlakte van voorwerpe te verstaan en hoe verpakking ontwerp word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('basisvorms')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('sy-vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('driehoekige vlakke')}</span>` +
        `</div>` +

        // ── Common nets ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene nette</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Kubus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('6 identiese vierkante')} — algemeen gerangskik in ʼn kruis- of T-vorm. Elke vierkant vou om een vlak te word.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Driehoekige prisma</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('2 driehoeke')} (basisse) + ${gr('3 reghoeke')} (sy-vlakke).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:8px;">Vierkantige piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 vierkant')} (basis) + ${or('4 driehoeke')} (sy-vlakke wat op na die apeks vou).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om te toets of ʼn net geldig is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel die vorms in die net en pas hulle by die vlakke van die 3D-voorwerp. Die aantal vorms in die net moet gelyk wees aan die aantal vlakke van die 3D-voorwerp. Gedeelde rande in die net word voulyne.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die net van ʼn kubus.',
          answer: `Die net van ʼn kubus bestaan uit ${bl('6 identiese vierkante')}, algemeen gerangskik in ʼn kruisvorm`,
          steps: [
            `ʼn Kubus het ${bl('6 identiese vierkantige vlakke')}.`,
            `In die net word hierdie 6 vierkante plat neergelê en langs gedeelde rande verbind. Die algemeenste rangskikking is ʼn <strong>kruisvorm</strong> — 4 vierkante in ʼn kolom en 1 vierkant aan elke kant van die tweede vierkant vanaf die bokant vas.`,
            `Wanneer dit gevou word, word elke vierkant een vlak van die kubus: bo, onder, voor, agter, links en regs.`,
            `<strong>Antwoord:</strong> ${bl('6 identiese vierkante')}, algemeen gerangskik in ʼn kruisvorm, wat vou om die 6 vlakke van die kubus te vorm. ✓`,
          ],
        },
        {
          question: 'Beskryf die net van ʼn vierkantige piramide.',
          answer: `Die net van ʼn vierkantige piramide het ${bl('1 vierkantige basis')} in die middel met ${or('4 driehoeke')} aan elke kant vas`,
          steps: [
            `ʼn Vierkantige piramide het ${bl('1 vierkantige basis')} en ${or('4 driehoekige')} sy-vlakke.`,
            `In die net word die ${bl('vierkantige basis')} in die middel geplaas.`,
            `Een ${or('driehoek')} word aan elk van die vier kante van die vierkant vas gemaak — dit is die driehoekige vlakke wat die sye van die piramide vorm.`,
            `Wanneer dit gevou word, styg die vier ${or('driehoeke')} op en hul vrye hoekpunte ontmoet by die ${re('apeks')}.`,
            `<strong>Antwoord:</strong> ${bl('1 vierkant')} in die middel met ${or('4 driehoeke')} aan elke kant vas, wat opvou om by die apeks te ontmoet. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V10 Maklik — vierkante in ʼn kubus se net ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel vierkante is in die net van ʼn kubus?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Kubus het 6 identiese vierkantige vlakke, dus bevat sy net 6 vierkante ✓',
        },

        // ── V11 Medium — beskryf die net van ʼn vierkantige piramide ─────────
        {
          difficulty: 'Medium',
          question: 'Beskryf die net van ʼn vierkantige piramide.',
          answer: 'Die net het 1 vierkant in die middel met 4 driehoeke vas, een aan elke kant van die vierkant. Wanneer dit gevou word, styg die driehoeke op en hul vrye hoekpunte ontmoet by die apeks.',
          checkMode: 'self',
        },

        // ── V12 Hard — prisma vs piramide vlaktal (foutkorreksie) ─────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê ʼn driehoekige prisma en ʼn driehoekige piramide het dieselfde aantal vlakke. Is hy korrek? Verduidelik jou antwoord.',
          answer: 'Nee — Thabo is verkeerd. ʼn Driehoekige prisma het 5 vlakke (2 driehoekige basisse + 3 reghoekige sye). ʼn Driehoekige piramide het 4 vlakke (1 driehoekige basis + 3 driehoekige sye). Hulle het nie dieselfde aantal vlakke nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die nette van ʼn kubus en ʼn vierkantige piramide langs mekaar wys, met basisvorms uitgelig in blou, reghoekige sy-vlakke in groen en driehoekige vlakke in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe die nette van ʼn kubus, driehoekige prisma en vierkantige piramide gevou word om die 3D-voorwerpe te vorm, met basisvorms uitgelig in blou, sy-vlakke in groen en driehoekige vlakke in oranje" />',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het 3D-voorwerpe volkome onder die knie.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van 3D-voorwerpe.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
