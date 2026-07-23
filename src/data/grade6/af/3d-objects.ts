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
        'ʼn Driehoekige prisma (5 vlakke, 9 rande, 6 hoekpunte) en ʼn reghoekige prisma (6 vlakke, 12 rande, 8 hoekpunte), voorgestel as 3D-draadraamwerke.',

      diagramSvg:
        '<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="77" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Driehoekige prisma</text>' +
        '<polygon points="35,130 85,130 60,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M35,130 L70,108 M85,130 L120,108 M60,80 L95,58" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M70,108 L120,108 M120,108 L95,58 M95,58 L70,108" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<text x="77" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 vlakke, 9 rande,</text>' +
        '<text x="77" y="161" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">6 hoekpunte</text>' +
        '<text x="190" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Reghoekige prisma</text>' +
        '<polygon points="150,80 200,80 200,130 150,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M150,80 L180,60 M200,80 L230,60 M200,130 L230,110 M150,130 L180,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<path d="M180,60 L230,60 M230,60 L230,110 M230,110 L180,110 M180,110 L180,60" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<text x="190" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">6 vlakke, 12 rande,</text>' +
        '<text x="190" y="161" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">8 hoekpunte</text>' +
        '</svg>',

      videoPlaceholder:
        'Kort video wat die eienskappe van prismas verduidelik — vlakke, rande en hoekpunte — met behulp van die basissye-formules en Euler se formule om te bevestig',
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
        'ʼn Vierkantige piramide (5 vlakke, 8 rande, 5 hoekpunte) en ʼn driehoekige piramide (4 vlakke, 6 rande, 4 hoekpunte), met die apeks in rooi aangedui waar die driehoekige vlakke bymekaarkom.',

      diagramSvg:
        '<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="60" y="15" text-anchor="middle" font-size="9" font-weight="700" fill="#0f1f3d">Vierkantige piramide</text>' +
        '<line x1="60" y1="145" x2="15" y2="125" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="60" y1="145" x2="105" y2="125" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="15" y1="125" x2="60" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="105" y1="125" x2="60" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="60" y1="145" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="15" y1="125" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="105" y1="125" x2="60" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="60" y1="105" x2="60" y2="55" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<circle cx="60" cy="55" r="3" fill="#dc2626"/>' +
        '<text x="60" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">apeks</text>' +
        '<text x="60" y="153" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 vlakke, 8 rande,</text>' +
        '<text x="60" y="166" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">5 hoekpunte</text>' +
        '<text x="202" y="15" text-anchor="middle" font-size="9" font-weight="700" fill="#0f1f3d">Driehoekige piramide</text>' +
        '<line x1="175" y1="140" x2="230" y2="140" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="175" y1="140" x2="202" y2="112" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="230" y1="140" x2="202" y2="112" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<line x1="175" y1="140" x2="202" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="230" y1="140" x2="202" y2="55" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="202" y1="112" x2="202" y2="55" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
        '<circle cx="202" cy="55" r="3" fill="#dc2626"/>' +
        '<text x="202" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">apeks</text>' +
        '<text x="202" y="153" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">4 vlakke, 6 rande,</text>' +
        '<text x="202" y="166" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">4 hoekpunte</text>' +
        '</svg>',

      videoPlaceholder:
        'Kort video wat die eienskappe van piramides verduidelik — vlakke, rande, hoekpunte en die apeks — met die basissye-formules en ʼn vergelyking met prismas',
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
        'Die net van ʼn kubus (ses vierkante in ʼn kruisvorm) en die net van ʼn vierkantige piramide (een vierkantige basis met vier driehoeke aangeheg), plat uitgevou gewys.',

      diagramSvg:
        '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="110" y="10" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="66" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="110" y="94" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="82" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<rect x="138" y="38" width="28" height="28" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="124" y="137" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Kubus-net</text>' +
        '<rect x="230" y="55" width="40" height="40" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="230,55 270,55 250,25" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="230,95 270,95 250,125" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="230,55 230,95 200,75" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="270,55 270,95 300,75" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="250" y="137" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Vierkantige piramide-net</text>' +
        '</svg>',

      videoPlaceholder:
        'Kort video wat wys hoe die nette van ʼn kubus, driehoekige prisma en vierkantige piramide gevou word om die 3D-voorwerpe te vorm, met basisvorms uitgelig in blou, sy-vlakke in groen en driehoekige vlakke in oranje',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Prisma-eienskappe | 4-7 Piramide-eienskappe | 8-11 Euler se formule |
    // 12-15 Prisma vs piramide vergelyking | 16-19 Nette
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn heksagonale prisma?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Heksagoon het 6 sye.\nVlakke = basissye + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'ʼn Tetra Pak-sapboksie is in die vorm van ʼn reghoekige prisma. Hoeveel rande het dit?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Reghoekige prisma het 4 basissye.\nRande = basissye × 3 = 4 × 3 = 12 ✓' },
        { difficulty: 'Easy', question: 'ʼn Prisma het 12 hoekpunte. Hoeveel sye het sy basis, en wat word die basisvorm genoem?', answer: '6 sye, heksagoon', checkMode: 'auto', correctAnswer: 'heksagoon', correctAnswers: ['heksagoon', '6heksagoon', '6syeheksagoon'], explanation: 'Hoekpunte = basissye × 2, dus is basissye = 12 ÷ 2 = 6.\nʼn Veelhoek met 6 sye is ʼn heksagoon ✓' },
        { difficulty: 'Easy', question: 'Hoeveel meer rande as hoekpunte het ʼn driehoekige prisma?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'ʼn Driehoekige prisma het 3 basissye.\nRande = 3 × 3 = 9. Hoekpunte = 3 × 2 = 6.\n9 − 6 = 3 meer rande as hoekpunte ✓' },
        { difficulty: 'Easy', question: 'Die Groot Piramide van Gizeh het ʼn vierkantige basis. Hoeveel vlakke het dit?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Vierkantige basis het 4 sye.\nVlakke = basissye + 1 = 4 + 1 = 5 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kampeertent is in die vorm van ʼn driehoekige piramide. Hoeveel rande het dit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Driehoekige piramide het 3 basissye.\nRande = basissye × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'ʼn Piramide het 7 hoekpunte. Wat is die vorm van sy basis?', answer: 'heksagoon', checkMode: 'auto', correctAnswer: 'heksagoon', correctAnswers: ['heksagoon'], explanation: 'Hoekpunte = basissye + 1, dus is basissye = 7 − 1 = 6.\nʼn Veelhoek met 6 sye is ʼn heksagoon ✓' },
        { difficulty: 'Easy', question: 'ʼn Vyfhoekige piramide se basis het op sy eie 5 hoekpunte. Hoeveel hoekpunte het die hele piramide, die apeks ingesluit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Die basis het 5 hoekpunte. Die apeks voeg presies 1 hoekpunt by.\nHele piramide se hoekpunte = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule (V + H − R = 2) vir ʼn reghoekige prisma. Gee V, H en R.', answer: 'V = 6, H = 8, R = 12. V + H − R = 6 + 8 − 12 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn heksagonale piramide het V = 7, H = 6, R = 12. Gebruik Euler se formule om dit te toets. Is die leerder korrek? Indien nie, wat moet H wees?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'H=7', 'h7'], explanation: 'ʼn Heksagonale piramide het 6 basissye.\nV = 6 + 1 = 7, R = 6 × 2 = 12, H = 6 + 1 = 7.\nDie leerder se syfers gee 7 + 6 − 12 = 1, nie 2 nie — verkeerd.\nDie apeks is vergeet: H moet 7 wees, nie 6 nie.\nToets: 7 + 7 − 12 = 2 ✓' },
        { difficulty: 'Medium', question: 'ʼn Agthoekige prisma het V = 10 en R = 24. Gebruik Euler se formule om H te vind.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'V + H − R = 2\n10 + H − 24 = 2\nH − 14 = 2\nH = 16 ✓\nToets teen die formule: ʼn agthoek-basis het 8 sye, dus H = 8 × 2 = 16 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule vir ʼn vyfhoekige prisma en ʼn vyfhoekige piramide (dieselfde basis met 5 sye). Stem die V-, H- en R-waardes tussen die twee voorwerpe ooreen?', answer: 'Vyfhoekige prisma: V = 7, H = 10, R = 15, en 7 + 10 − 15 = 2 ✓. Vyfhoekige piramide: V = 6, H = 6, R = 10, en 6 + 6 − 10 = 2 ✓. Euler se formule geld vir albei, maar die werklike V-, H- en R-waardes verskil — die prisma het meer vlakke, rande en hoekpunte as die piramide.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vyfhoekige prisma en ʼn vyfhoekige piramide het albei ʼn basis met 5 sye. Het hulle dieselfde aantal vlakke?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Vyfhoekige prisma: V = 5 + 2 = 7.\nVyfhoekige piramide: V = 5 + 1 = 6.\n7 ≠ 6, dus het hulle nie dieselfde aantal vlakke nie ✓' },
        { difficulty: 'Medium-Hard', question: 'Naledi beweer ʼn vierkantige prisma en ʼn vierkantige piramide het dieselfde aantal rande, "want hulle het albei ʼn vierkantige basis." Is Naledi korrek? Verduidelik.', answer: 'Nee, Naledi is verkeerd. ʼn Vierkantige prisma het Rande = 4 × 3 = 12. ʼn Vierkantige piramide het Rande = 4 × 2 = 8. Al deel albei vorms ʼn vierkantige basis, het ʼn prisma ekstra rande wat twee basisse verbind, terwyl ʼn piramide se rande net na een apeks toe opgaan — dus verskil die randtallle (12 teenoor 8).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Geskenkwinkel verkoop ʼn boks in die vorm van ʼn heksagonale prisma en ʼn boks in die vorm van ʼn heksagonale piramide, albei met ʼn basis van 6 sye. Minder plat panele beteken goedkoper om te vervaardig. Watter boks benodig minder panele (vlakke), en hoeveel benodig dit?', answer: 'heksagonale piramide, 7', checkMode: 'auto', correctAnswer: 'heksagonalepiramide7', correctAnswers: ['heksagonalepiramide7', 'heksagonalepiramide', 'piramide7'], explanation: 'Heksagonale prisma: V = 6 + 2 = 8.\nHeksagonale piramide: V = 6 + 1 = 7.\n7 < 8, dus benodig die piramide minder panele — 7 in totaal ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee voorwerpe — een ʼn prisma, een ʼn piramide — het elk presies 9 hoekpunte. Vind die basisvorm van elke voorwerp (of verduidelik as dit nie moontlik is nie).', answer: 'Prisma: hoekpunte = basissye × 2, dus is basissye = 9 ÷ 2 = 4,5, nie ʼn heelgetal nie — geen prisma kan presies 9 hoekpunte hê nie. Piramide: hoekpunte = basissye + 1, dus is basissye = 9 − 1 = 8, ʼn agthoek. Dus werk net die piramide — dit is ʼn agthoekige piramide.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Graankosboks is in die vorm van ʼn reghoekige prisma. Hoeveel reghoeke is nodig vir sy volledige net?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Reghoekige prisma het 6 vlakke, almal reghoeke (ʼn graankosboks het geen driehoekige vlakke nie).\nSy net benodig dus 6 reghoeke ✓' },
        { difficulty: 'Hard', question: 'Beskryf die net van ʼn driehoekige prisma — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 5 vorms in totaal: 2 driehoeke (die twee basisse) en 3 reghoeke (die sy-vlakke). Die twee driehoeke sit aan weerskante van ʼn ry van 3 reghoeke wat rand-aan-rand aanmekaar sit — wanneer dit gevou word, vou die reghoeke om die twee driehoeke as die bo- en onderkant te word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn vierkantige piramide met 1 vierkant en 3 driehoeke. Is hierdie net geldig?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Vierkantige piramide het V = 4 + 1 = 5 vlakke: 1 vierkantige basis en 4 driehoekige sy-vlakke.\nDie leerder se net het slegs 1 + 3 = 4 vorms, een driehoek kort.\nDie net is ongeldig — dit benodig 4 driehoeke, nie 3 nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Drukker ontwerp die plat kartonuitleg vir ʼn sjokoladeboksie in die vorm van ʼn driehoekige prisma. Hoeveel plat vorms (panele) in totaal moet die drukker uitsny vir een volledige boksie, en watter vorms is dit?', answer: '5 panele: 2 driehoeke en 3 reghoeke', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '2driehoeke3reghoeke'], explanation: 'ʼn Driehoekige prisma het V = 3 + 2 = 5 vlakke.\nDit is 2 driehoekige basisse en 3 reghoekige sy-vlakke.\nDie drukker moet 5 panele in totaal uitsny ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die eienskappe van prismas, piramides, Euler se formule en nette volkome onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiout, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn agthoekige prisma?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'ʼn Agthoek het 8 sye.\nRande = basissye × 3 = 8 × 3 = 24 ✓' },
        { difficulty: 'Easy', question: 'ʼn Sjokoladeboksie in die vorm van ʼn reghoekige prisma word verpak. Hoeveel vlakke het dit in totaal?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Reghoekige prisma het 4 basissye.\nVlakke = basissye + 2 = 4 + 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'ʼn Prisma het 21 rande. Hoeveel sye het sy basis, en wat word die basisvorm genoem?', answer: '7 sye, sewehoek', checkMode: 'auto', correctAnswer: 'sewehoek', correctAnswers: ['sewehoek', '7sewehoek'], explanation: 'Rande = basissye × 3, dus is basissye = 21 ÷ 3 = 7.\nʼn Veelhoek met 7 sye is ʼn sewehoek ✓' },
        { difficulty: 'Easy', question: 'Hoeveel meer hoekpunte het ʼn heksagonale prisma as ʼn driehoekige prisma?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Heksagonale prisma: hoekpunte = 6 × 2 = 12.\nDriehoekige prisma: hoekpunte = 3 × 2 = 6.\n12 − 6 = 6 meer hoekpunte ✓' },
        { difficulty: 'Easy', question: 'ʼn Papiergewig is in die vorm van ʼn vierkantige piramide. Hoeveel hoekpunte het dit?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Vierkantige piramide het 4 basissye.\nHoekpunte = basissye + 1 = 4 + 1 = 5 ✓' },
        { difficulty: 'Easy', question: 'ʼn Tent in die vorm van ʼn heksagonale piramide benodig ʼn paal langs elke rand. Hoeveel pale (rande) benodig dit?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'ʼn Heksagonale piramide het 6 basissye.\nRande = basissye × 2 = 6 × 2 = 12 ✓' },
        { difficulty: 'Easy', question: 'ʼn Piramide het 14 rande. Wat is die vorm van sy basis?', answer: 'sewehoek', checkMode: 'auto', correctAnswer: 'sewehoek', correctAnswers: ['sewehoek'], explanation: 'Rande = basissye × 2, dus is basissye = 14 ÷ 2 = 7.\nʼn Veelhoek met 7 sye is ʼn sewehoek ✓' },
        { difficulty: 'Easy', question: 'ʼn Agthoekige piramide se basis het op sy eie 8 hoekpunte. Hoeveel hoekpunte het die hele piramide, die apeks ingesluit?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Die basis het 8 hoekpunte. Die apeks voeg presies 1 hoekpunt by.\nHele piramide se hoekpunte = 8 + 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule (V + H − R = 2) vir ʼn heksagonale prisma. Gee V, H en R.', answer: 'V = 8, H = 12, R = 18. V + H − R = 8 + 12 − 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn vyfhoekige prisma het V = 7, H = 10, R = 16. Gebruik Euler se formule om dit te toets. Is die leerder korrek? Indien nie, wat moet R wees?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'R=15', 'r15'], explanation: 'ʼn Vyfhoekige prisma het 5 basissye.\nV = 5 + 2 = 7, R = 5 × 3 = 15, H = 5 × 2 = 10.\nDie leerder se syfers gee 7 + 10 − 16 = 1, nie 2 nie — verkeerd.\nR moet 15 wees, nie 16 nie.\nToets: 7 + 10 − 15 = 2 ✓' },
        { difficulty: 'Medium', question: 'ʼn Agthoekige piramide het H = 9 en R = 16. Gebruik Euler se formule om V te vind.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'V + H − R = 2\nV + 9 − 16 = 2\nV − 7 = 2\nV = 9 ✓\nToets teen die formule: ʼn agthoek-basis het 8 sye, dus V = 8 + 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule vir ʼn heksagonale prisma en ʼn heksagonale piramide (dieselfde basis met 6 sye). Stem die V-, H- en R-waardes tussen die twee voorwerpe ooreen?', answer: 'Heksagonale prisma: V = 8, H = 12, R = 18, en 8 + 12 − 18 = 2 ✓. Heksagonale piramide: V = 7, H = 7, R = 12, en 7 + 7 − 12 = 2 ✓. Euler se formule geld vir albei, maar die werklike V-, H- en R-waardes verskil — die prisma het meer vlakke, rande en hoekpunte as die piramide.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Heksagonale prisma en ʼn heksagonale piramide het albei ʼn basis met 6 sye. Het hulle dieselfde aantal hoekpunte?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Heksagonale prisma: H = 6 × 2 = 12.\nHeksagonale piramide: H = 6 + 1 = 7.\n12 ≠ 7, dus het hulle nie dieselfde aantal hoekpunte nie ✓' },
        { difficulty: 'Medium-Hard', question: 'Kagiso beweer ʼn agthoekige prisma en ʼn agthoekige piramide het dieselfde aantal vlakke, "want hulle het albei ʼn agthoek-basis." Is Kagiso korrek? Verduidelik.', answer: 'Nee, Kagiso is verkeerd. ʼn Agthoekige prisma het Vlakke = 8 + 2 = 10. ʼn Agthoekige piramide het Vlakke = 8 + 1 = 9. Al deel albei vorms ʼn agthoek-basis, het die prisma twee basisvlakke (bo en onder) terwyl die piramide net een basis het — dus verskil die vlaktalle (10 teenoor 9).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Verpakkingsontwerper moet kies tussen ʼn boks in die vorm van ʼn vyfhoekige prisma en een in die vorm van ʼn vyfhoekige piramide — minder plat panele beteken goedkoper vervaardiging. Watter vorm benodig minder panele (vlakke), en hoeveel benodig dit?', answer: 'vyfhoekige piramide, 6', checkMode: 'auto', correctAnswer: 'vyfhoekigepiramide6', correctAnswers: ['vyfhoekigepiramide6', 'vyfhoekigepiramide', 'piramide6'], explanation: 'Vyfhoekige prisma: V = 5 + 2 = 7.\nVyfhoekige piramide: V = 5 + 1 = 6.\n6 < 7, dus benodig die piramide minder panele — 6 in totaal ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee voorwerpe — een ʼn prisma, een ʼn piramide — het elk presies 20 rande. Vind die basisvorm van elke voorwerp (of verduidelik as dit nie moontlik is nie).', answer: 'Prisma: rande = basissye × 3, dus is basissye = 20 ÷ 3 = 6,67, nie ʼn heelgetal nie — geen prisma kan presies 20 rande hê nie. Piramide: rande = basissye × 2, dus is basissye = 20 ÷ 2 = 10, ʼn tienhoek. Dus werk net die piramide — dit is ʼn tienhoekige piramide.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Tissueboks is in die vorm van ʼn reghoekige prisma. Hoeveel vorms (panele) in totaal is nodig vir sy volledige net?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Reghoekige prisma het 6 vlakke, almal reghoeke.\nSy net benodig dus 6 panele in totaal ✓' },
        { difficulty: 'Hard', question: 'Beskryf die net van ʼn vierkantige piramide — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 5 vorms in totaal: 1 vierkant (die basis) en 4 driehoeke (die sy-vlakke). Die vierkant sit in die middel met een driehoek aan elk van sy vier kante vas — wanneer dit gevou word, styg die driehoeke op en ontmoet by die apeks.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn driehoekige prisma met 3 driehoeke en 2 reghoeke. Is hierdie net geldig?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Driehoekige prisma het V = 3 + 2 = 5 vlakke: 2 driehoekige basisse en 3 reghoekige sy-vlakke.\nDie leerder se net het 3 driehoeke en 2 reghoeke — die verkeerde telling vir albei vorms.\nDie net is ongeldig — dit benodig 2 driehoeke en 3 reghoeke, nie 3 driehoeke en 2 reghoeke nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Fabriek ontwerp die plat kartonuitleg vir ʼn uitstalstaander in die vorm van ʼn vierkantige piramide. Hoeveel plat vorms (panele) in totaal moet uitgesny word vir een volledige staander, en watter vorms is dit?', answer: '5 panele: 1 vierkant en 4 driehoeke', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '1vierkant4driehoeke'], explanation: 'ʼn Vierkantige piramide het V = 4 + 1 = 5 vlakke.\nDit is 1 vierkantige basis en 4 driehoekige sy-vlakke.\nDie fabriek moet 5 panele in totaal uitsny ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue werk met prisma- en piramide-eienskappe, Euler se formule en nette.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiout, meer werklike-wêreld kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sewehoekige prisma?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'ʼn Sewehoek het 7 sye.\nHoekpunte = basissye × 2 = 7 × 2 = 14 ✓' },
        { difficulty: 'Easy', question: 'ʼn Sonskermblikkie is in die vorm van ʼn driehoekige prisma. Hoeveel vlakke het dit?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Driehoekige prisma het 3 basissye.\nVlakke = basissye + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Easy', question: 'ʼn Prisma het 16 hoekpunte. Hoeveel sye het sy basis, en wat word die basisvorm genoem?', answer: '8 sye, agthoek', checkMode: 'auto', correctAnswer: 'agthoek', correctAnswers: ['agthoek', '8agthoek'], explanation: 'Hoekpunte = basissye × 2, dus is basissye = 16 ÷ 2 = 8.\nʼn Veelhoek met 8 sye is ʼn agthoek ✓' },
        { difficulty: 'Easy', question: 'Hoeveel meer rande het ʼn reghoekige prisma as ʼn driehoekige prisma?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Reghoekige prisma: rande = 4 × 3 = 12.\nDriehoekige prisma: rande = 3 × 3 = 9.\n12 − 9 = 3 meer rande ✓' },
        { difficulty: 'Easy', question: 'ʼn Kristalversiering is in die vorm van ʼn vyfhoekige piramide. Hoeveel vlakke het dit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Vyfhoekige piramide het 5 basissye.\nVlakke = basissye + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Easy', question: 'ʼn Gedenkteken in die vorm van ʼn driehoekige piramide benodig ʼn steunbalk langs elke rand. Hoeveel balke (rande) benodig dit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Driehoekige piramide het 3 basissye.\nRande = basissye × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Easy', question: 'ʼn Piramide het 10 hoekpunte. Wat is die vorm van sy basis?', answer: 'negehoek', checkMode: 'auto', correctAnswer: 'negehoek', correctAnswers: ['negehoek'], explanation: 'Hoekpunte = basissye + 1, dus is basissye = 10 − 1 = 9.\nʼn Veelhoek met 9 sye is ʼn negehoek ✓' },
        { difficulty: 'Easy', question: 'ʼn Heksagonale piramide se basis het op sy eie 6 hoekpunte. Hoeveel hoekpunte het die hele piramide, die apeks ingesluit?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Die basis het 6 hoekpunte. Die apeks voeg presies 1 hoekpunt by.\nHele piramide se hoekpunte = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule (V + H − R = 2) vir ʼn driehoekige piramide. Gee V, H en R.', answer: 'V = 4, H = 4, R = 6. V + H − R = 4 + 4 − 6 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn reghoekige prisma het V = 6, H = 8, R = 10. Gebruik Euler se formule om dit te toets. Is die leerder korrek? Indien nie, wat moet R wees?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'R=12', 'r12'], explanation: 'ʼn Reghoekige prisma het 4 basissye.\nV = 4 + 2 = 6, R = 4 × 3 = 12, H = 4 × 2 = 8.\nDie leerder se syfers gee 6 + 8 − 10 = 4, nie 2 nie — verkeerd.\nR moet 12 wees, nie 10 nie.\nToets: 6 + 8 − 12 = 2 ✓' },
        { difficulty: 'Medium', question: 'ʼn Agthoekige prisma het V = 10 en H = 16. Gebruik Euler se formule om R te vind.', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'V + H − R = 2\n10 + 16 − R = 2\n26 − R = 2\nR = 24 ✓\nToets teen die formule: ʼn agthoek-basis het 8 sye, dus R = 8 × 3 = 24 ✓' },
        { difficulty: 'Medium', question: 'Toets Euler se formule vir ʼn agthoekige prisma en ʼn agthoekige piramide (dieselfde basis met 8 sye). Stem die V-, H- en R-waardes tussen die twee voorwerpe ooreen?', answer: 'Agthoekige prisma: V = 10, H = 16, R = 24, en 10 + 16 − 24 = 2 ✓. Agthoekige piramide: V = 9, H = 9, R = 16, en 9 + 9 − 16 = 2 ✓. Euler se formule geld vir albei, maar die werklike V-, H- en R-waardes verskil — die prisma het meer vlakke, rande en hoekpunte as die piramide.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Driehoekige prisma en ʼn driehoekige piramide het albei ʼn basis met 3 sye. Het hulle dieselfde aantal rande?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Driehoekige prisma: R = 3 × 3 = 9.\nDriehoekige piramide: R = 3 × 2 = 6.\n9 ≠ 6, dus het hulle nie dieselfde aantal rande nie ✓' },
        { difficulty: 'Medium-Hard', question: 'Thabo beweer ʼn vyfhoekige prisma en ʼn vyfhoekige piramide het dieselfde aantal rande, "want hulle het albei ʼn vyfhoek-basis." Is Thabo korrek? Verduidelik.', answer: 'Nee, Thabo is verkeerd. ʼn Vyfhoekige prisma het Rande = 5 × 3 = 15. ʼn Vyfhoekige piramide het Rande = 5 × 2 = 10. Al deel albei vorms ʼn vyfhoek-basis, het ʼn prisma ekstra rande wat twee basisse verbind, terwyl ʼn piramide se rande net na een apeks toe opgaan — dus verskil die randtalle (15 teenoor 10).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skryfbehoeftemaatskappy moet kies tussen ʼn pennehouer in die vorm van ʼn heksagonale prisma en een in die vorm van ʼn heksagonale piramide — minder plat panele beteken goedkoper vervaardiging. Watter vorm benodig minder panele (vlakke), en hoeveel benodig dit?', answer: 'heksagonale piramide, 7', checkMode: 'auto', correctAnswer: 'heksagonalepiramide7', correctAnswers: ['heksagonalepiramide7', 'heksagonalepiramide', 'piramide7'], explanation: 'Heksagonale prisma: V = 6 + 2 = 8.\nHeksagonale piramide: V = 6 + 1 = 7.\n7 < 8, dus benodig die piramide minder panele — 7 in totaal ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee voorwerpe — een ʼn prisma, een ʼn piramide — het elk presies 15 hoekpunte. Vind die basisvorm van elke voorwerp (of verduidelik as dit nie moontlik is nie).', answer: 'Prisma: hoekpunte = basissye × 2, dus is basissye = 15 ÷ 2 = 7,5, nie ʼn heelgetal nie — geen prisma kan presies 15 hoekpunte hê nie. Piramide: hoekpunte = basissye + 1, dus is basissye = 15 − 1 = 14, ʼn veelhoek met 14 sye. Dus werk net die piramide — dit is ʼn piramide met ʼn 14-sydige basis.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Partytjiehoedjie is in die vorm van ʼn heksagonale piramide. Hoeveel driehoekige sy-vlakke benodig sy net, sonder om die basis te tel?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Heksagonale piramide het 6 basissye.\nSy-vlakke (driehoeke) = basissye = 6.\nDus word 6 driehoeke benodig, plus 1 heksagoon vir die basis ✓' },
        { difficulty: 'Hard', question: 'Beskryf die net van ʼn reghoekige prisma — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 6 vorms in totaal, almal reghoeke (vierkante ingesluit, wat spesiale reghoeke is) — 2 vir bo en onder, 2 vir voor en agter, en 2 vir die linker- en regterkant. Teenoorstaande vlakke is dieselfde grootte en word gewoonlik in ʼn ry of kruispatroon geteken sodat vou passende pare bymekaar bring.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn kubus-net met 5 vierkante en 1 driehoek. Is hierdie net geldig?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Kubus het V = 6 identiese vierkantige vlakke — geen driehoekige vlakke nie.\nDie leerder se net het 5 vierkante en 1 driehoek, die verkeerde vorm vir die sesde vlak.\nDie net is ongeldig — dit benodig 6 vierkante, nie 5 vierkante en 1 driehoek nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Graankosfabriek vou ʼn graankosboks in die vorm van ʼn reghoekige prisma oop om die gedrukte kunswerk te ontwerp. Hoeveel plat vorms (panele) in totaal moet die drukker uitlê vir een volledige boks, en watter vorm is dit?', answer: '6 panele, almal reghoeke', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6reghoeke'], explanation: 'ʼn Reghoekige prisma het V = 4 + 2 = 6 vlakke.\nAl 6 vlakke is reghoeke (bo, onder, voor, agter, links, regs).\nDie drukker moet 6 panele in totaal uitlê ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het 3D-voorwerp-eienskappe, Euler se formule, vergelykings en nette volkome onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
