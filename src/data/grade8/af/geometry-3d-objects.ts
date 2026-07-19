import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry-3d-objects roles) ──────────────────────────────
// faces / base shape          → blue   (#2563eb)
// vertices / triangular faces → orange (#ea580c)
// edges / apex                → green  (#16a34a)
// formula                     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van 3D-voorwerpe',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE 5 PLATONIC SOLIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'platonic-solids',
      title: 'Die 5 Platoniese Vaste Liggame',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Platoniese vaste liggaam</strong> is ʼn 3D-vorm waar elke vlak dieselfde reëlmatige veelhoek is en dieselfde aantal vlakke by elke hoekpunt ontmoet. Daar is presies <strong>5 Platoniese vaste liggame</strong>. Ons vergelyk hulle volgens die vorm en aantal ${bl('vlakke')}, ${or('hoekpunte')} en ${gr('rande')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekpunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rande')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 5 Platoniese vaste liggame</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Vaste liggaam</th>` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Vlakvorm</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Vlakke</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Hoekpunte</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Rande</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#374151;">Per hoekpunt</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Tetraëder</td><td style="padding:10px 12px;color:#374151;">Driehoek</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">4</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Kubus</td><td style="padding:10px 12px;color:#374151;">Vierkant</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Oktaëder</td><td style="padding:10px 12px;color:#374151;">Driehoek</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#374151;">4</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodekaëder</td><td style="padding:10px 12px;color:#374151;">Vyfhoek</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">3</td></tr>` +
        `<tr><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Ikosaëder</td><td style="padding:10px 12px;color:#374151;">Driehoek</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#374151;">5</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom presies 5?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Dit is wiskundig bewys dat slegs <strong>5</strong> Platoniese vaste liggame bestaan. Jy kan elkeen verifieer deur ${re("Euler se formule")} te gebruik: ${bl('V')} + ${or('H')} − ${gr('R')} = 2 — dit werk vir almal van hulle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die kubus as ʼn Platoniese vaste liggaam.',
          answer: `ʼn Kubus het ${bl('6')} vierkantige ${bl('vlakke')}, ${or('8 hoekpunte')} en ${gr('12 rande')}, met 3 ${bl('vlakke')} wat by elke ${or('hoekpunt')} ontmoet.`,
          steps: [
            `<strong>Kontroleer die vlakke:</strong> ʼn Kubus het ${bl('6 vlakke')}, en elke vlak is ʼn vierkant — dieselfde reëlmatige veelhoek. Al 6 vlakke is identies. ✓`,
            `<strong>Kontroleer die hoekpunte:</strong> ʼn Kubus het ${or('8 hoekpunte')}. By elke hoekpunt ontmoet presies 3 vierkantige vlakke — dieselfde aantal by elke hoekpunt. ✓`,
            `<strong>Tel die rande:</strong> ʼn Kubus het ${gr('12 rande')}. ✓`,
            `<strong>Gevolgtrekking:</strong> ʼn Kubus het ${bl('6')} vierkantige ${bl('vlakke')}, ${or('8 hoekpunte')} en ${gr('12 rande')}, met 3 ${bl('vlakke')} wat by elke ${or('hoekpunt')} ontmoet. Sien die diagram hieronder wat al 5 Platoniese vaste liggame wys.`,
          ],
        },
        {
          question: 'Sipho sê ʼn oktaëder het dieselfde aantal vlakke as ʼn kubus. Is hy korrek?',
          answer: `Nee — ʼn oktaëder het ${bl('8')} driehoekige ${bl('vlakke')}, terwyl ʼn kubus ${bl('6')} vierkantige ${bl('vlakke')} het.`,
          steps: [
            `<strong>Tel die vlakke van ʼn kubus:</strong> ʼn Kubus het ${bl('6')} vierkantige ${bl('vlakke')}.`,
            `<strong>Tel die vlakke van ʼn oktaëder:</strong> ʼn Oktaëder het ${bl('8')} driehoekige ${bl('vlakke')}.`,
            `<strong>Gevolgtrekking:</strong> Sipho is <strong>verkeerd</strong> — 8 ≠ 6. ʼn Oktaëder het meer ${bl('vlakke')} as ʼn kubus, en sy vlakvorm (driehoek) verskil ook van ʼn kubus se vlakvorm (vierkant).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Hoeveel vlakke het ʼn kubus?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Kubus het 6 vierkantige vlakke. Dit is een van die 5 Platoniese vaste liggame.',
        },
        {
          difficulty: 'Easy',
          question: 'Noem die Platoniese vaste liggaam met 4 driehoekige vlakke.',
          answer: 'tetraëder',
          checkMode: 'auto',
          correctAnswer: 'tetraëder',
          explanation: 'Die tetraëder het 4 driehoekige vlakke, 4 hoekpunte en 6 rande.',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho sê ʼn dodekaëder het 12 driehoekige vlakke. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn dodekaëder het 12 vyfhoekige vlakke, nie driehoekige nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Hoeveel vlakke het ʼn ikosaëder?',
          answer: '20',
          checkMode: 'auto',
          correctAnswer: '20',
          explanation: 'ʼn Ikosaëder het 20 driehoekige vlakke, 12 hoekpunte en 30 rande.',
        },
        {
          difficulty: 'Hard',
          question: "Verifieer Euler se formule vir ʼn tetraëder, wat 4 vlakke, 4 hoekpunte en 6 rande het.",
          answer: 'V+H-R=4+4-6=2. Geverifieer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die 5 Platoniese vaste liggame bekendstel — tetraëder, kubus, oktaëder, dodekaëder en ikosaëder — en vlakke, hoekpunte en rande vergelyk" />',

      diagramPlaceholder:
        'Al 5 Platoniese vaste liggame saam gewys — tetraëder, kubus, oktaëder, dodekaëder, ikosaëder — elkeen geëtiketteer met vlak-, hoekpunt- en randtellings',

      diagramSvg:
        '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(55,85)">' +
        '<polygon points="-22,18 22,18 0,-24" fill="none" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="0" y1="4" x2="-22" y2="18" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="0" y1="4" x2="22" y2="18" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="0" y1="4" x2="0" y2="-24" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<circle cx="-22" cy="18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="22" cy="18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="0" cy="-24" r="2.2" fill="#ea580c"/>' +
        '<circle cx="0" cy="4" r="2.2" fill="#ea580c"/>' +
        '<text x="0" y="38" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Tetraëder</text>' +
        '<text x="0" y="50" font-size="8.5" text-anchor="middle" fill="#6b7280">V4 · H4 · R6</text>' +
        '</g>' +
        '<g transform="translate(165,85)">' +
        '<polygon points="-18,-18 18,-18 18,18 -18,18" fill="none" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="-8" y1="-28" x2="28" y2="-28" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="28" y1="-28" x2="28" y2="8" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="28" y1="8" x2="-8" y2="8" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-8" y1="8" x2="-8" y2="-28" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-18" y1="-18" x2="-8" y2="-28" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="18" y1="-18" x2="28" y2="-28" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="18" y1="18" x2="28" y2="8" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="-18" y1="18" x2="-8" y2="8" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<circle cx="-18" cy="-18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="18" cy="-18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="18" cy="18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="-18" cy="18" r="2.2" fill="#ea580c"/>' +
        '<circle cx="-8" cy="-28" r="2.2" fill="#ea580c"/>' +
        '<circle cx="28" cy="-28" r="2.2" fill="#ea580c"/>' +
        '<circle cx="28" cy="8" r="2.2" fill="#ea580c"/>' +
        '<circle cx="-8" cy="8" r="2.2" fill="#ea580c"/>' +
        '<text x="5" y="42" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Kubus</text>' +
        '<text x="5" y="54" font-size="8.5" text-anchor="middle" fill="#6b7280">V6 · H8 · R12</text>' +
        '</g>' +
        '<g transform="translate(275,85)">' +
        '<polygon points="0,-28 22,0 0,28 -22,0" fill="none" stroke="#16a34a" stroke-width="2.2"/>' +
        '<line x1="-22" y1="0" x2="22" y2="0" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<circle cx="0" cy="-28" r="2.2" fill="#ea580c"/>' +
        '<circle cx="0" cy="28" r="2.2" fill="#ea580c"/>' +
        '<circle cx="-22" cy="0" r="2.2" fill="#ea580c"/>' +
        '<circle cx="22" cy="0" r="2.2" fill="#ea580c"/>' +
        '<text x="0" y="42" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Oktaëder</text>' +
        '<text x="0" y="54" font-size="8.5" text-anchor="middle" fill="#6b7280">V8 · H6 · R12</text>' +
        '</g>' +
        '<g transform="translate(385,85)">' +
        '<polygon points="0,-26 15.28,-21.03 24.73,-8.03 24.73,8.03 15.28,21.03 0,26 -15.28,21.03 -24.73,8.03 -24.73,-8.03 -15.28,-21.03" fill="#eff6ff" fill-opacity="0.5" stroke="#16a34a" stroke-width="2"/>' +
        '<polygon points="0,-12 9.51,-5.09 5.88,6.09 -5.88,6.09 -9.51,-5.09" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<text x="0" y="42" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Dodekaëder</text>' +
        '<text x="0" y="54" font-size="8.5" text-anchor="middle" fill="#6b7280">V12 · H20 · R30</text>' +
        '</g>' +
        '<g transform="translate(495,85)">' +
        '<polygon points="0,-26 22.52,-13 22.52,13 0,26 -22.52,13 -22.52,-13" fill="#fff7ed" fill-opacity="0.5" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="0" y1="0" x2="0" y2="-26" stroke="#16a34a" stroke-width="1.2"/>' +
        '<line x1="0" y1="0" x2="22.52" y2="-13" stroke="#16a34a" stroke-width="1.2"/>' +
        '<line x1="0" y1="0" x2="22.52" y2="13" stroke="#16a34a" stroke-width="1.2"/>' +
        '<line x1="0" y1="0" x2="0" y2="26" stroke="#16a34a" stroke-width="1.2"/>' +
        '<line x1="0" y1="0" x2="-22.52" y2="13" stroke="#16a34a" stroke-width="1.2"/>' +
        '<line x1="0" y1="0" x2="-22.52" y2="-13" stroke="#16a34a" stroke-width="1.2"/>' +
        '<text x="0" y="42" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Ikosaëder</text>' +
        '<text x="0" y="54" font-size="8.5" text-anchor="middle" fill="#6b7280">V20 · H12 · R30</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BUILDING 3D MODELS USING NETS, INCLUDING PYRAMIDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-3d-models-nets',
      title: 'Bou van 3D-modelle deur Nette te Gebruik, Insluitend Piramides',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die gebruik van nette om modelle van kubusse en prismas te maak, en brei dit uit na die bou van piramides uit hul nette. ʼn Piramide se net bestaan uit een ${bl('basisvorm')} (die veelhoek onderaan) en ${or('driehoekige vlakke')} wat opvou om by die ${gr('apeks')} te ontmoet.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('basisvorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('driehoekige vlakke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('apeks')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Net</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Plat vorm wat opvou om ʼn 3D-voorwerp te vorm — soos die uitgevoude oppervlak van ʼn boks.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Basis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('basisvorm')} van ʼn piramide — die veelhoek onderaan. Dit gee die piramide sy naam.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Apeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('apeks')} is die boonste punt van ʼn piramide waar al die ${or('driehoekige vlakke')} ontmoet.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Soorte piramide-nette</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Vierkantige piramide</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 vierkantige basis')} + ${or('4 driehoekige vlakke')} = 5 vlakke in totaal. Die net het die ${bl('vierkant')} in die middel met ʼn ${or('driehoek')} aan elke kant.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Driehoekige piramide (tetraëder)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('1 driehoekige basis')} + ${or('3 driehoekige vlakke')} = 4 vlakke in totaal. Die net het die basisdriehoek met ʼn driehoek aan elk van sy 3 kante.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vouwenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy ʼn net kontroleer, verbeel jou hoe elke vlak vou. Die ${bl('basis')} bly plat; elke ${or('driehoekige vlak')} vou opwaarts totdat al die vrye rande by die ${gr('apeks')} ontmoet. Elke vrye rand moet in lengte ooreenstem met ʼn ander vrye rand.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die net van ʼn vierkantige piramide.',
          answer: `Die net het ${bl('1 vierkantige basis')} in die middel met ${or('4 driehoeke')} aan elke kant vas, wat opvou om by die ${gr('apeks')} te ontmoet.`,
          steps: [
            `<strong>Identifiseer die basis:</strong> ʼn Vierkantige piramide het ʼn ${bl('vierkantige basis')}. In die net verskyn hierdie ${bl('vierkant')} in die middel.`,
            `<strong>Identifiseer die driehoekige vlakke:</strong> Daar is ${or('4 driehoekige vlakke')} — een aan elke kant van die ${bl('vierkantige basis')} vas.`,
            `<strong>Beskryf die vou:</strong> Wanneer jy die net vou, styg die ${or('4 driehoeke')} op en hul vrye rande ontmoet by die ${gr('apeks')} bo die ${bl('vierkantige basis')}.`,
            `<strong>Gevolgtrekking:</strong> Die net het ${bl('1 vierkantige basis')} in die middel met ${or('4 driehoeke')} aan elke kant vas, wat opvou om by die ${gr('apeks')} te ontmoet. Sien die diagram hieronder wat hierdie net uitgevou en gevou wys.`,
          ],
        },
        {
          question: "Lerato bou ʼn driehoekige piramide (tetraëder) uit sy net. Beskryf die netvorm.",
          answer: `Die net bestaan uit ${or('4 gelyksydige driehoeke')} — ${bl('een basisdriehoek')} met ${or('3 driehoeke')} aan elke kant vas, wat opvou om die tetraëder te vorm.`,
          steps: [
            `<strong>Identifiseer die vlakke:</strong> ʼn Tetraëder het 4 driehoekige vlakke in totaal — ${bl('1 basisdriehoek')} en ${or('3 driehoekige sye')}.`,
            `<strong>Beskryf die netuitleg:</strong> In die plat net dien ${bl('een gelyksydige driehoek')} as die basis, met ${or('3 gelyksydige driehoeke')} aan elk van sy 3 kante vas.`,
            `<strong>Beskryf die vou:</strong> Die ${or('3 buitenste driehoeke')} vou opwaarts om by die ${gr('apeks')} te ontmoet, en vorm sodoende die tetraëder.`,
            `<strong>Gevolgtrekking:</strong> Die net bestaan uit ${or('4 gelyksydige driehoeke')}: ${bl('een basisdriehoek')} met ${or('3 driehoeke')} aan elke kant vas, wat opvou om die tetraëder te vorm.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Beskryf die basisvorm wat in die net van ʼn vierkantige piramide gebruik word.',
          answer: 'vierkant',
          checkMode: 'auto',
          correctAnswer: 'vierkant',
          explanation: 'ʼn Vierkantige piramide het ʼn vierkantige basis. Die net bevat een vierkant in die middel met 4 driehoeke aan sy kante vas.',
        },
        {
          difficulty: 'Medium',
          question: 'Hoeveel driehoekige vlakke is in die net van ʼn vierkantige piramide (uitgesluit die basis)?',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'ʼn Vierkantige piramide het 4 driehoekige vlakke (een aan elke kant van die vierkantige basis). Die basis self is ʼn vierkant, nie ʼn driehoek nie.',
        },
        {
          difficulty: 'Hard',
          question: "Lerato sê ʼn tetraëder se net het slegs driehoeke. Is sy korrek? Verduidelik.",
          answer: 'Ja — ʼn tetraëder bestaan heeltemal uit 4 gelyksydige driehoeke, insluitend sy basis.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om nette in piramides te vou — insluitend die vierkantige piramide en tetraëder — en die basisvorm, driehoekige vlakke en apeks identifiseer" />',

      diagramPlaceholder:
        'Net van ʼn vierkantige piramide plat en gevou gewys, en net van ʼn tetraëder plat en gevou gewys',

      diagramSvg:
        '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="125" y="18" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Vierkantige piramide</text>' +
        '<text x="365" y="18" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Tetraëder</text>' +
        '<g transform="translate(65,95)">' +
        '<polygon points="-20,-20 20,-20 20,20 -20,20" fill="#eff6ff" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="-20,-20 20,-20 0,-45" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="-20,20 20,20 0,45" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="-20,-20 -20,20 -45,0" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="20,-20 20,20 45,0" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="0" y="62" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Net (plat)</text>' +
        '</g>' +
        '<g transform="translate(185,100)">' +
        '<line x1="-24" y1="-4" x2="10" y2="-10" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="10" y1="-10" x2="24" y2="10" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="24" y1="10" x2="-10" y2="16" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-10" y1="16" x2="-24" y2="-4" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="2" y1="-40" x2="-24" y2="-4" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="2" y1="-40" x2="10" y2="-10" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="2" y1="-40" x2="24" y2="10" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="2" y1="-40" x2="-10" y2="16" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<circle cx="-24" cy="-4" r="2" fill="#2563eb"/>' +
        '<circle cx="10" cy="-10" r="2" fill="#2563eb"/>' +
        '<circle cx="24" cy="10" r="2" fill="#2563eb"/>' +
        '<circle cx="-10" cy="16" r="2" fill="#2563eb"/>' +
        '<circle cx="2" cy="-40" r="2.2" fill="#16a34a"/>' +
        '<text x="0" y="57" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Gevou</text>' +
        '</g>' +
        '<g transform="translate(305,100)">' +
        '<polygon points="-17.5,-5.3 17.5,-5.3 0,25" fill="#eff6ff" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="0,-35.6 -17.5,-5.3 17.5,-5.3" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="-35,25 -17.5,-5.3 0,25" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<polygon points="35,25 17.5,-5.3 0,25" fill="#fff7ed" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="0" y="45" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Net (plat)</text>' +
        '</g>' +
        '<g transform="translate(425,100)">' +
        '<polygon points="-20,16 20,16 0,-22" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="0" y1="4" x2="-20" y2="16" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="0" y1="4" x2="20" y2="16" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="0" y1="4" x2="0" y2="-22" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<circle cx="-20" cy="16" r="2.2" fill="#2563eb"/>' +
        '<circle cx="20" cy="16" r="2.2" fill="#2563eb"/>' +
        '<circle cx="0" cy="-22" r="2.2" fill="#16a34a"/>' +
        '<circle cx="0" cy="4" r="2.2" fill="#2563eb"/>' +
        '<text x="0" y="42" font-size="10" font-weight="700" text-anchor="middle" fill="#0f1f3d">Gevou</text>' +
        '</g>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING AND CLASSIFYING 3D OBJECTS BY PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-classifying-3d-objects',
      title: 'Vergelyking en Klassifisering van 3D-voorwerpe volgens Eienskappe',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons vergelyk en klassifiseer 3D-voorwerpe — insluitend die 5 Platoniese vaste liggame en ander vorms soos prismas en piramides — deur die vorm en aantal ${bl('vlakke')}, ${or('hoekpunte')} en ${gr('rande')} te ondersoek, en deur ${re("Euler se formule")} (${bl('V')} + ${or('H')} − ${gr('R')} = ${re('2')}) vir hierdie vaste liggame te verifieer.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vlakke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekpunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rande')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('formule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Euler se formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Euler se formule</p>` +
        `<p style="font-size:1.4em;font-weight:700;color:#374151;margin:0;">${bl('V')} + ${or('H')} − ${gr('R')} = ${re('2')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Geld vir alle konvekse veelvlakke</p>` +
        `<p style="font-size:1em;font-weight:600;color:#374151;margin:0;">${bl('Vlakke')} + ${or('Hoekpunte')} − ${gr('Rande')} is altyd = ${re('2')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vergelyking van 3D-voorwerpe</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:14px;">` +
        `<thead><tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">` +
        `<th style="text-align:left;padding:10px 12px;font-weight:700;color:#374151;">Vorm</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#2563eb;">Vlakke</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#ea580c;">Hoekpunte</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#16a34a;">Rande</th>` +
        `<th style="text-align:center;padding:10px 12px;font-weight:700;color:#dc2626;">V+H−R</th>` +
        `</tr></thead>` +
        `<tbody>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Vierkantige piramide</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Driehoekige prisma</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">5</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">9</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Kubus</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">6</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">8</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `<tr style="background:#fafafa;"><td style="padding:10px 12px;font-weight:600;color:#0f1f3d;">Dodekaëder</td><td style="text-align:center;padding:10px 12px;color:#2563eb;font-weight:700;">12</td><td style="text-align:center;padding:10px 12px;color:#ea580c;font-weight:700;">20</td><td style="text-align:center;padding:10px 12px;color:#16a34a;font-weight:700;">30</td><td style="text-align:center;padding:10px 12px;color:#dc2626;font-weight:700;">2</td></tr>` +
        `</tbody></table></div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Verifieer altyd met Euler se formule</p>` +
        `<p style="margin:0;color:#991b1b;">Nadat jy ${bl('V')}, ${or('H')} en ${gr('R')} vir enige konvekse veelvlak geïdentifiseer het, vervang dit in ${re("Euler se formule")}: ${bl('V')} + ${or('H')} − ${gr('R')} = ${re('2')}. As jou antwoord nie 2 is nie, tel jou vlakke, hoekpunte en rande weer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Verifieer Euler se formule vir ʼn dodekaëder, wat 12 vlakke, 20 hoekpunte en 30 rande het.",
          answer: `${re('V+H−R')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. Euler se formule is geverifieer.`,
          steps: [
            `<strong>Identifiseer die waardes:</strong> ${bl('V')} = ${bl('12')}, ${or('H')} = ${or('20')}, ${gr('R')} = ${gr('30')}.`,
            `<strong>Pas Euler se formule toe:</strong> ${re('V + H − R')} = ${bl('12')} + ${or('20')} − ${gr('30')} = ${re('2')}. ✓`,
            `<strong>Gevolgtrekking:</strong> Die resultaat is ${re('2')}, dus is Euler se formule vir die dodekaëder geverifieer.`,
          ],
        },
        {
          question: 'Thabo vergelyk ʼn tetraëder en ʼn vierkantige piramide. Albei het ʼn apeks, maar hoe verskil hulle?',
          answer: `ʼn Tetraëder het ${bl('4')} driehoekige ${bl('vlakke')} in totaal (insluitend basis), terwyl ʼn vierkantige piramide ${bl('1')} vierkantige basis en ${bl('4')} driehoekige sye het, wat ${bl('5 vlakke')} in totaal beloop.`,
          steps: [
            `<strong>Tetraëder:</strong> ʼn Tetraëder het ${bl('4 vlakke')} in totaal — almal is gelyksydige driehoeke, insluitend die basis. Dit het ${or('4 hoekpunte')} en ${gr('6 rande')}.`,
            `<strong>Vierkantige piramide:</strong> ʼn Vierkantige piramide het ${bl('5 vlakke')} — ${bl('1 vierkantige basis')} en ${bl('4 driehoekige sye')}. Dit het ${or('5 hoekpunte')} en ${gr('8 rande')}.`,
            `<strong>Sleutelverskil:</strong> Hulle verskil in basisvorm (driehoek teenoor vierkant) en totale vlaktal (4 teenoor 5). Albei het ʼn ${gr('apeks')}, maar die tetraëder se basis is ook ʼn driehoek terwyl die vierkantige piramide se basis ʼn vierkant is.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Hoeveel hoekpunte het ʼn oktaëder?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Oktaëder het 8 vlakke, 6 hoekpunte en 12 rande. Kontroleer: V+H-R = 8+6-12 = 2 ✓',
        },
        {
          difficulty: 'Hard',
          question: "Verifieer Euler se formule vir ʼn oktaëder, wat 8 vlakke, 6 hoekpunte en 12 rande het.",
          answer: 'V+H-R=8+6-12=2. Geverifieer.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'Noem die Platoniese vaste liggaam met 8 driehoekige vlakke.',
          answer: 'oktaëder',
          checkMode: 'auto',
          correctAnswer: 'oktaëder',
          explanation: 'Die oktaëder het 8 driehoekige vlakke, 6 hoekpunte en 12 rande.',
        },
        {
          difficulty: 'Medium',
          question: 'Thabo sê ʼn kubus en ʼn vierkantige piramide het dieselfde aantal vlakke. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn kubus het 6 vlakke, terwyl ʼn vierkantige piramide 5 vlakke het.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "ʼn Dodekaëder het 12 vlakke en 30 rande. Gebruik Euler se formule om die aantal hoekpunte te vind.",
          answer: 'V+H-R=2. 12+H-30=2. H=20.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê al 5 Platoniese vaste liggame het driehoekige vlakke. Is sy korrek? Verduidelik.',
          answer: 'Nee — die kubus het vierkantige vlakke en die dodekaëder het vyfhoekige vlakke; slegs die tetraëder, oktaëder en ikosaëder het driehoekige vlakke.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "ʼn Ikosaëder het 20 vlakke en 12 hoekpunte. Gebruik Euler se formule om die aantal rande te vind.",
          answer: '30',
          checkMode: 'auto',
          correctAnswer: '30',
          explanation: "V+H-R=2 → 20+12-R=2 → 32-R=2 → R=30. ʼn Ikosaëder het 30 rande.",
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 3D-voorwerpe te vergelyk en te klassifiseer aan die hand van vlakke, hoekpunte en rande, en hoe om Euler se formule te verifieer" />',

    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 Benoem/klassifiseer (prisma/piramide/silinder/keël/sfeer) |
    // 4-7 Tel V/R/H van benoemde veelvlakke | 8-11 Euler se formule (ingesluit geboë vaste liggame) |
    // 12-15 Nette (12,14 diagram-gemerk) | 16-18 Dwarssnitte | 19-20 Multi-stap vergelyking
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het een plat sirkelvormige basis, een geboë oppervlak wat na ʼn enkele punt toe smaller word, en geen ander plat vlakke nie. Wat word hierdie vaste liggaam genoem?', answer: 'keël', checkMode: 'auto', correctAnswer: 'keël', correctAnswers: ['keël', 'ʼn keël', 'n keël', 'keel', 'ʼn keel'], explanation: 'ʼn Vaste liggaam met een sirkelvormige basis en ʼn geboë oppervlak wat na ʼn enkele apeks toe smaller word, is ʼn keël ✓' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het twee identiese, parallelle sirkelvormige basisse wat deur een geboë oppervlak verbind word. Wat word hierdie vaste liggaam genoem?', answer: 'silinder', checkMode: 'auto', correctAnswer: 'silinder', correctAnswers: ['silinder', 'ʼn silinder', 'n silinder'], explanation: 'ʼn Vaste liggaam met twee parallelle identiese sirkelvormige basisse wat deur ʼn geboë oppervlak verbind word, is ʼn silinder ✓' },
        { difficulty: 'Medium', question: 'Zanele klassifiseer drie vaste liggame vir ʼn projek. Vaste liggaam A het 2 parallelle vyfhoekige basisse en reghoekige sy-vlakke. Vaste liggaam B het 1 vyfhoekige basis en driehoekige sy-vlakke wat by ʼn apeks ontmoet. Vaste liggaam C is heeltemal rond met een geboë oppervlak en glad geen plat vlakke nie. Benoem elke vaste liggaam.', answer: 'Vaste liggaam A: vyfhoekige prisma. Vaste liggaam B: vyfhoekige piramide. Vaste liggaam C: sfeer.', checkMode: 'auto', correctAnswer: 'vyfhoekigeprismavyfhoekigepiramidesfeer', correctAnswers: ['vyfhoekigeprismavyfhoekigepiramidesfeer', 'prismapiramidesfeer', 'vyfhoekige prisma, vyfhoekige piramide, sfeer'], explanation: 'Twee parallelle identiese basisse + reghoekige sy-vlakke = prisma, benoem volgens sy basis (vyfhoek) → vyfhoekige prisma.\nEen basis + driehoekige sy-vlakke wat by ʼn apeks ontmoet = piramide → vyfhoekige piramide.\nHeeltemal rond met een geboë oppervlak en geen plat vlakke nie = sfeer ✓' },

        // Blok B: tel V/R/H van benoemde veelvlakke (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn seshoekige prisma?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Seshoekige prisma het ʼn basis met 6 sye.\nVlakke = basissye + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vyfhoekige piramide?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Vyfhoekige piramide het ʼn basis met 5 sye.\nHoekpunte = basissye + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Geskenkdosie is in die vorm van ʼn driehoekige prisma. Hoeveel rande het dit?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nRande = basissye × 3 = 3 × 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn vierkantige piramide het 6 vlakke, want "ʼn vierkant het 4 kante plus ʼn bo- en onderkant." Is die leerder korrek? Gee die werklike aantal vlakke.', answer: 'Nee, die leerder is verkeerd. ʼn Vierkantige piramide het slegs 5 vlakke: 1 vierkantige basis en 4 driehoekige sy-vlakke. Daar is geen "bokant" vlak nie — die driehoeke ontmoet direk by die apeks, so daar is nie ʼn tweede basis soos in ʼn prisma nie.', checkMode: 'self' },

        // Blok C: Euler se formule, ingesluit geboë vaste liggame (8-11)
        { difficulty: 'Medium', question: "Verifieer Euler se formule (V − R + H = 2) vir ʼn agthoekige prisma. Gee V, R en H.", answer: 'V = 10, R = 24, H = 16. V − R + H = 10 − 24 + 16 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Seshoekige piramide het V = 7 en H = 7. Gebruik Euler se formule om R te vind.", answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: "V − R + H = 2\n7 − R + 7 = 2\n14 − R = 2\nR = 12 ✓\nToets: ʼn seshoek-basis het 6 sye, dus R = 6 × 2 = 12 ✓" },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder beweer dat ʼn neghoekige prisma V = 11, R = 27, H = 16 het. Gebruik Euler se formule om dit te toets. As dit verkeerd is, gee die korrekte waarde van H.', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'H=18', 'h18'], explanation: 'ʼn Neghoekige prisma het ʼn basis met 9 sye.\nV = 9 + 2 = 11, R = 9 × 3 = 27, H = 9 × 2 = 18.\nDie leerder se getalle gee 11 − 27 + 16 = 0, nie 2 nie — verkeerd.\nH behoort 18 te wees, nie 16 nie.\nToets: 11 − 27 + 18 = 2 ✓' },
        { difficulty: 'Hard', question: "Sipho probeer Euler se formule (V − R + H = 2) op ʼn silinder toepas, met V = 3 (2 sirkelvormige vlakke + 1 geboë oppervlak), R = 2 (2 sirkelvormige rande) en H = 0. Gee die formule 2? Verduidelik waarom Euler se formule nie op dieselfde manier vir ʼn silinder werk soos vir ʼn prisma nie.", answer: "V − R + H = 3 − 2 + 0 = 1, nie 2 nie, dus geld die formule nie. Euler se formule is bewys vir vaste liggame met plat veelhoekige vlakke en reguit rande wat by skerp hoekpunte ontmoet. ʼn Silinder het ʼn geboë oppervlak en geboë rande, nie reguit rande tussen plat veelhoeke nie, dus het dit nie dieselfde vlak-rand-hoekpunt-struktuur as ʼn veelvlak nie, en Euler se formule kan nie in die gewone sin daarop toegepas word nie.", checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 seshoeke en 6 reghoeke soos getoon, waar die twee seshoeke die teenoorgestelde punte vorm en die 6 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', answer: 'seshoekige prisma', checkMode: 'auto', correctAnswer: 'seshoekigeprisma', correctAnswers: ['seshoekigeprisma', 'seshoekige prisma'], explanation: 'Die net het 2 identiese seshoekige basisse en 6 reghoekige sy-vlakke, wat ooreenstem met ʼn seshoekige prisma (V = 6 + 2 = 8, gemaak van 2 seshoeke + 6 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg"><polygon points="57,80 40,90 23,80 23,60 40,50 57,60" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><rect x="57" y="50" width="144" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><line x1="81" y1="50" x2="81" y2="90" stroke="#0f1f3d" stroke-width="1.2"/><line x1="105" y1="50" x2="105" y2="90" stroke="#0f1f3d" stroke-width="1.2"/><line x1="129" y1="50" x2="129" y2="90" stroke="#0f1f3d" stroke-width="1.2"/><line x1="153" y1="50" x2="153" y2="90" stroke="#0f1f3d" stroke-width="1.2"/><line x1="177" y1="50" x2="177" y2="90" stroke="#0f1f3d" stroke-width="1.2"/><polygon points="235,80 218,90 201,80 201,60 218,50 235,60" fill="none" stroke="#0f1f3d" stroke-width="1.8"/></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn keël — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 2 vorms in totaal: 1 sirkel (die basis) en 1 sektor van ʼn groter sirkel (die geboë oppervlak plat uitgerol). Die sirkel lê langs die geboë rand van die sektor — wanneer die sektor opgerol word in ʼn keëlvorm, ontmoet sy reguit rande mekaar en sy geboë rand omvou die sirkel presies, wat die basis vorm.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 2 sirkels en 1 reghoek soos getoon, waar een sirkel die bo-rand van die reghoek raak, die ander sirkel die onder-rand van die reghoek raak, en die reghoek se breedte presies ooreenstem met die omtrek van die sirkels. In watter vaste liggaam vou hierdie net op?', answer: 'silinder', checkMode: 'auto', correctAnswer: 'silinder', correctAnswers: ['silinder', 'ʼn silinder', 'n silinder'], explanation: 'Die net het 2 identiese sirkelvormige basisse en 1 reghoek wat omvou om die geboë oppervlak te vorm, wat ooreenstem met ʼn silinder — die reghoek se breedte moet presies gelyk wees aan die sirkel se omtrek sodat die geboë oppervlak presies aansluit ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn seshoekige prisma met 2 seshoeke en 5 reghoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Seshoekige prisma het V = 6 + 2 = 8 vlakke: 2 seshoekige basisse en 6 reghoekige sy-vlakke. Die leerder se net het slegs 5 reghoeke in plaas van 6, dus is dit een reghoekige vlak kort en kan dit nie opvou tot ʼn geslote seshoekige prisma nie.', checkMode: 'self' },

        // Blok E: dwarssnitte (16-18)
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma word gesny deur ʼn plat vlak parallel aan sy reghoekige basis, wat reguit dwarsdeur die prisma sny. Watter vorm is die dwarssnit?', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek', 'n reghoek'], explanation: 'ʼn Dwarssnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn reghoek is, is die dwarssnit ʼn reghoek ✓' },
        { difficulty: 'Hard', question: 'ʼn Regop silinder word gesny deur ʼn plat vlak parallel aan sy sirkelvormige basis, wat reguit dwarsdeur sny, halfpad op. Watter vorm is die dwarssnit, en verander sy grootte na gelang van die hoogte van die snit?', answer: 'Die dwarssnit is ʼn sirkel, identies in grootte aan die sirkelvormige basis op elke hoogte, want ʼn silinder het dieselfde sirkelvormige dwarssnit dwarsdeur sy hele lengte — die hoogte van die snit verander nie die grootte van die sirkel nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Keël wat regop op sy sirkelvormige basis staan, word gesny deur ʼn plat vlak parallel aan sy basis, halfpad tussen die basis en die apeks. Watter vorm is die dwarssnit, en hoe vergelyk sy grootte met die basis?', answer: 'sirkel', checkMode: 'auto', correctAnswer: 'sirkel', correctAnswers: ['sirkel', 'ʼn sirkel', 'n sirkel'], explanation: 'Om ʼn keël parallel aan sy sirkelvormige basis te sny, gee altyd ʼn sirkelvormige dwarssnit, want elke horisontale snit van ʼn keël is ʼn sirkel. Anders as by ʼn silinder, is hierdie sirkel egter kleiner as die basis — die keël vernou, so dwarssnitte word kleiner hoe nader dit aan die apeks gesny word ✓' },

        // Blok F: multi-stap vergelyking (19-20)
        { difficulty: 'Hard', question: 'ʼn Sewehoekige prisma en ʼn sewehoekige piramide het albei ʼn basis met 7 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Sewehoekige prisma: V = 9, R = 21, H = 14. Sewehoekige piramide: V = 8, R = 14, H = 8. Die prisma het meer vlakke, rande en hoekpunte in elke kategorie, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide slegs een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte is wat die prisma se waardes groter maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo vergelyk ʼn silinder, ʼn keël en ʼn sfeer. Gee hoeveel plat vlakke, geboë oppervlaktes en hoekpunte (skerp punte) elk van die drie vaste liggame het.', answer: 'Silinder: 2 plat vlakke, 1 geboë oppervlak, 0 hoekpunte. Keël: 1 plat vlak, 1 geboë oppervlak, 1 hoekpunt. Sfeer: 0 plat vlakke, 1 geboë oppervlak, 0 hoekpunte.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het klassifisering van 3D-voorwerpe, Euler se formule, nette en dwarssnitte onder die knie.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die afdelings hierbo en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam is heeltemal rond, met elke punt op sy oppervlak dieselfde afstand van sy middelpunt, en het glad geen plat vlakke nie. Wat word hierdie vaste liggaam genoem?', answer: 'sfeer', checkMode: 'auto', correctAnswer: 'sfeer', correctAnswers: ['sfeer', 'ʼn sfeer', 'n sfeer'], explanation: 'ʼn Heeltemal ronde vaste liggaam waar elke oppervlakpunt ewe ver van die middelpunt is, met geen plat vlakke nie, is ʼn sfeer ✓' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het een sewehoekige (7-sydige) basis en 7 driehoekige vlakke wat almal by ʼn enkele apeks ontmoet. Wat word hierdie vaste liggaam genoem?', answer: 'sewehoekige piramide', checkMode: 'auto', correctAnswer: 'sewehoekigepiramide', correctAnswers: ['sewehoekigepiramide', 'sewehoekige piramide'], explanation: 'ʼn Vaste liggaam met een basis en driehoekige vlakke wat by ʼn enkele apeks ontmoet, is ʼn piramide. Die basis het 7 sye, dus is dit ʼn sewehoekige piramide ✓' },
        { difficulty: 'Medium', question: 'Kabelo klassifiseer drie vaste liggame vir ʼn vertoning. Vaste liggaam A het 2 parallelle agthoekige basisse en reghoekige sy-vlakke. Vaste liggaam B het 1 sirkelvormige basis en 1 geboë oppervlak wat na ʼn punt toe vernou. Vaste liggaam C het 2 parallelle sirkelvormige basisse wat deur 1 geboë oppervlak verbind word. Benoem elke vaste liggaam.', answer: 'Vaste liggaam A: agthoekige prisma. Vaste liggaam B: keël. Vaste liggaam C: silinder.', checkMode: 'auto', correctAnswer: 'agthoekigeprismakeëlsilinder', correctAnswers: ['agthoekigeprismakeëlsilinder', 'prismakeëlsilinder', 'agthoekige prisma, keël, silinder'], explanation: 'Twee parallelle identiese basisse + reghoekige sy-vlakke = prisma, benoem volgens sy basis (agthoek) → agthoekige prisma.\nEen sirkelvormige basis + geboë oppervlak wat na ʼn punt toe vernou = keël.\nTwee parallelle sirkelvormige basisse + geboë oppervlak = silinder ✓' },

        // Blok B: tel V/R/H van benoemde veelvlakke (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn sewehoekige prisma?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'ʼn Sewehoekige prisma het ʼn basis met 7 sye.\nVlakke = basissye + 2 = 7 + 2 = 9 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn seshoekige piramide?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'ʼn Seshoekige piramide het ʼn basis met 6 sye.\nHoekpunte = basissye + 1 = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Juweliersboksie is in die vorm van ʼn driehoekige prisma. Hoeveel hoekpunte het dit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nHoekpunte = basissye × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn driehoekige prisma het 4 vlakke, want "ʼn driehoek het 3 kante plus ʼn onderkant." Is die leerder korrek? Gee die werklike aantal vlakke.', answer: 'Nee, die leerder is verkeerd. ʼn Driehoekige prisma het 5 vlakke: 2 driehoekige basisse (nie net 1 nie) en 3 reghoekige sy-vlakke. Die leerder het vergeet dat ʼn prisma twee identiese basisse het — ʼn bo- en ʼn onder-driehoek — nie net een nie.', checkMode: 'self' },

        // Blok C: Euler se formule, ingesluit geboë vaste liggame (8-11)
        { difficulty: 'Medium', question: "Verifieer Euler se formule (V − R + H = 2) vir ʼn neghoekige prisma. Gee V, R en H.", answer: 'V = 11, R = 27, H = 18. V − R + H = 11 − 27 + 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Sewehoekige piramide het V = 8 en H = 8. Gebruik Euler se formule om R te vind.", answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: "V − R + H = 2\n8 − R + 8 = 2\n16 − R = 2\nR = 14 ✓\nToets: ʼn sewehoek-basis het 7 sye, dus R = 7 × 2 = 14 ✓" },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder beweer dat ʼn tienhoekige prisma V = 12, R = 30, H = 18 het. Gebruik Euler se formule om dit te toets. As dit verkeerd is, gee die korrekte waarde van H.', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'H=20', 'h20'], explanation: 'ʼn Tienhoekige prisma het ʼn basis met 10 sye.\nV = 10 + 2 = 12, R = 10 × 3 = 30, H = 10 × 2 = 20.\nDie leerder se getalle gee 12 − 30 + 18 = 0, nie 2 nie — verkeerd.\nH behoort 20 te wees, nie 18 nie.\nToets: 12 − 30 + 20 = 2 ✓' },
        { difficulty: 'Hard', question: "Lerato probeer Euler se formule (V − R + H = 2) op ʼn sfeer toepas, met V = 1 (die geboë oppervlak), R = 0 en H = 0. Gee die formule 2? Verduidelik waarom Euler se formule nie op dieselfde manier vir ʼn sfeer werk soos vir ʼn piramide nie.", answer: "V − R + H = 1 − 0 + 0 = 1, nie 2 nie, dus geld die formule nie. Euler se formule is bewys vir vaste liggame met plat veelhoekige vlakke, reguit rande en skerp hoekpunte waar vlakke ontmoet. ʼn Sfeer het een aaneenlopende geboë oppervlak met geen plat vlakke, geen reguit rande en glad geen hoekpunte nie, dus het dit nie dieselfde vlak-rand-hoekpunt-struktuur as ʼn veelvlak nie, en Euler se formule kan nie in die gewone sin daarop toegepas word nie.", checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 vyfhoeke en 5 reghoeke soos getoon, waar die twee vyfhoeke die teenoorgestelde punte vorm en die 5 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', answer: 'vyfhoekige prisma', checkMode: 'auto', correctAnswer: 'vyfhoekigeprisma', correctAnswers: ['vyfhoekigeprisma', 'vyfhoekige prisma'], explanation: 'Die net het 2 identiese vyfhoekige basisse en 5 reghoekige sy-vlakke, wat ooreenstem met ʼn vyfhoekige prisma (V = 5 + 2 = 7, gemaak van 2 vyfhoeke + 5 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg"><polygon points="56,83 31,91 16,70 31,49 56,57" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><rect x="56" y="57" width="148" height="26" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><line x1="86" y1="57" x2="86" y2="83" stroke="#0f1f3d" stroke-width="1.2"/><line x1="115" y1="57" x2="115" y2="83" stroke="#0f1f3d" stroke-width="1.2"/><line x1="145" y1="57" x2="145" y2="83" stroke="#0f1f3d" stroke-width="1.2"/><line x1="174" y1="57" x2="174" y2="83" stroke="#0f1f3d" stroke-width="1.2"/><polygon points="204,83 229,91 244,70 229,49 204,57" fill="none" stroke="#0f1f3d" stroke-width="1.8"/></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn silinder — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 3 vorms in totaal: 2 identiese sirkels (die bo- en onderbasisse) en 1 reghoek (die geboë oppervlak plat uitgerol). Een sirkel raak die bo-rand van die reghoek en die ander raak die onder-rand — wanneer dit opgerol word, omvou die reghoek om die geboë oppervlak te vorm, en sy breedte moet presies gelyk wees aan die omtrek van die sirkels sodat die rande sonder gapings ontmoet.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 sirkel en 1 sektor van ʼn groter sirkel soos getoon, waar die geboë rand van die sektor direk teen die sirkel lê sodat die twee geboë rande presies in lengte ooreenstem. In watter vaste liggaam vou hierdie net op?', answer: 'keël', checkMode: 'auto', correctAnswer: 'keël', correctAnswers: ['keël', 'ʼn keël', 'n keël', 'keel'], explanation: 'Die net het 1 sirkelvormige basis en 1 sektor wat oprol tot die geboë oppervlak van ʼn keël, wat by ʼn enkele apeks ontmoet wanneer die sektor se reguit rande saamgevoeg word — dit stem ooreen met ʼn keël, waar die sektor se geboë-randlengte gelyk moet wees aan die basissirkel se omtrek ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn vyfhoekige prisma met 2 vyfhoeke en 4 reghoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Vyfhoekige prisma het V = 5 + 2 = 7 vlakke: 2 vyfhoekige basisse en 5 reghoekige sy-vlakke. Die leerder se net het slegs 4 reghoeke in plaas van 5, dus is dit een reghoekige vlak kort en kan dit nie opvou tot ʼn geslote vyfhoekige prisma nie.', checkMode: 'self' },

        // Blok E: dwarssnitte (16-18)
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma word gesny deur ʼn plat vlak parallel aan sy driehoekige basis, wat reguit dwarsdeur die prisma sny. Watter vorm is die dwarssnit?', answer: 'driehoek', checkMode: 'auto', correctAnswer: 'driehoek', correctAnswers: ['driehoek', 'ʼn driehoek', 'n driehoek'], explanation: 'ʼn Dwarssnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn driehoek is, is die dwarssnit ʼn driehoek ✓' },
        { difficulty: 'Hard', question: 'ʼn Sfeer word presies deur sy middelpunt deur ʼn plat vlak gesny. Watter vorm is die dwarssnit, en hoe vergelyk sy grootte met ʼn dwarssnit wat nader aan die rand van die sfeer gesny word (nie deur die middelpunt nie)?', answer: 'Die dwarssnit is ʼn sirkel. ʼn Snit presies deur die middelpunt gee die grootste moontlike sirkel (met dieselfde radius as die sfeer self), terwyl ʼn snit nader aan die rand, verder van die middelpunt af, ʼn kleiner sirkel gee.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Silinder wat op sy geboë sykant lê, word gesny deur ʼn plat vlak loodreg op sy sirkelvormige basisse, wat oorlangs deur die middelpunt sny. Watter vorm is die dwarssnit?', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek', 'n reghoek'], explanation: 'Om ʼn silinder oorlangs deur sy as te sny, loodreg op die sirkelvormige basisse, gee ʼn reghoekige dwarssnit — die lengte daarvan is gelyk aan die silinder se hoogte en die breedte daarvan is gelyk aan die deursnee van die sirkelvormige basis ✓' },

        // Blok F: multi-stap vergelyking (19-20)
        { difficulty: 'Hard', question: 'ʼn Neghoekige prisma en ʼn neghoekige piramide het albei ʼn basis met 9 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Neghoekige prisma: V = 11, R = 27, H = 18. Neghoekige piramide: V = 10, R = 18, H = 10. Die prisma het meer vlakke, rande en hoekpunte in elke kategorie, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide slegs een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte is wat die prisma se waardes groter maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle vergelyk ʼn kubus, ʼn silinder en ʼn keël. Gee hoeveel plat vlakke, geboë oppervlaktes en hoekpunte (skerp punte) elk van die drie vaste liggame het.', answer: 'Kubus: 6 plat vlakke, 0 geboë oppervlaktes, 8 hoekpunte. Silinder: 2 plat vlakke, 1 geboë oppervlak, 0 hoekpunte. Keël: 1 plat vlak, 1 geboë oppervlak, 1 hoekpunt.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue 3D-voorwerpe klassifiseer en met Euler se formule, nette en dwarssnitte werk.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die afdelings hierbo en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-wêreld kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het twee identiese, parallelle tienhoekige (10-sydige) basisse wat deur 10 reghoekige vlakke verbind word. Wat word hierdie vaste liggaam genoem?', answer: 'tienhoekige prisma', checkMode: 'auto', correctAnswer: 'tienhoekigeprisma', correctAnswers: ['tienhoekigeprisma', 'tienhoekige prisma'], explanation: 'ʼn Vaste liggaam met twee identiese parallelle basisse en reghoekige sy-vlakke is ʼn prisma. Die basis het 10 sye, dus is dit ʼn tienhoekige prisma ✓' },
        { difficulty: 'Easy', question: 'ʼn Vaste liggaam het een plat sirkelvormige basis en een geboë oppervlak wat glad vernou na ʼn enkele apeks bo die basis. Wat word hierdie vaste liggaam genoem?', answer: 'keël', checkMode: 'auto', correctAnswer: 'keël', correctAnswers: ['keël', 'ʼn keël', 'n keël', 'keel'], explanation: 'ʼn Vaste liggaam met ʼn sirkelvormige basis en ʼn geboë oppervlak wat na ʼn enkele apeks toe vernou, is ʼn keël ✓' },
        { difficulty: 'Medium', question: 'Amahle klassifiseer drie vaste liggame vir ʼn wetenskapskou. Vaste liggaam A het 1 neghoekige basis en 9 driehoekige vlakke wat by ʼn apeks ontmoet. Vaste liggaam B het 2 parallelle sirkelvormige basisse wat deur ʼn geboë oppervlak verbind word. Vaste liggaam C is heeltemal rond met glad geen plat vlakke nie. Benoem elke vaste liggaam.', answer: 'Vaste liggaam A: neghoekige piramide. Vaste liggaam B: silinder. Vaste liggaam C: sfeer.', checkMode: 'auto', correctAnswer: 'neghoekigepiramidesilindersfeer', correctAnswers: ['neghoekigepiramidesilindersfeer', 'piramidesilindersfeer', 'neghoekige piramide, silinder, sfeer'], explanation: 'Een basis + driehoekige sy-vlakke wat by ʼn apeks ontmoet = piramide, benoem volgens sy basis (neghoek) → neghoekige piramide.\nTwee parallelle sirkelvormige basisse + geboë oppervlak = silinder.\nHeeltemal rond met geen plat vlakke nie = sfeer ✓' },

        // Blok B: tel V/R/H van benoemde veelvlakke (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn agthoekige prisma?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'ʼn Agthoekige prisma het ʼn basis met 8 sye.\nVlakke = basissye + 2 = 8 + 2 = 10 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sewehoekige piramide?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Sewehoekige piramide het ʼn basis met 7 sye.\nHoekpunte = basissye + 1 = 7 + 1 = 8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kampeertent is in die vorm van ʼn driehoekige prisma. Hoeveel vlakke het dit?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nVlakke = basissye + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn seshoekige piramide het 12 hoekpunte, "want ʼn seshoek het 6 hoekpunte en die piramide het dubbel nodig vir die sykante." Is die leerder korrek? Gee die werklike aantal hoekpunte.', answer: 'Nee, die leerder is verkeerd. ʼn Seshoekige piramide het 7 hoekpunte: die 6 hoekpunte van die seshoekige basis plus 1 enkele apeks waar al die driehoekige vlakke ontmoet. Die apeks voeg slegs 1 hoekpunt by, nie ʼn verdubbeling van die basis se hoekpunte nie.', checkMode: 'self' },

        // Blok C: Euler se formule, ingesluit geboë vaste liggame (8-11)
        { difficulty: 'Medium', question: "Verifieer Euler se formule (V − R + H = 2) vir ʼn tienhoekige prisma. Gee V, R en H.", answer: 'V = 12, R = 30, H = 20. V − R + H = 12 − 30 + 20 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: "ʼn Agthoekige piramide het V = 9 en H = 9. Gebruik Euler se formule om R te vind.", answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: "V − R + H = 2\n9 − R + 9 = 2\n18 − R = 2\nR = 16 ✓\nToets: ʼn agthoek-basis het 8 sye, dus R = 8 × 2 = 16 ✓" },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder beweer dat ʼn sewehoekige prisma V = 9, R = 21, H = 12 het. Gebruik Euler se formule om dit te toets. As dit verkeerd is, gee die korrekte waarde van H.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'H=14', 'h14'], explanation: 'ʼn Sewehoekige prisma het ʼn basis met 7 sye.\nV = 7 + 2 = 9, R = 7 × 3 = 21, H = 7 × 2 = 14.\nDie leerder se getalle gee 9 − 21 + 12 = 0, nie 2 nie — verkeerd.\nH behoort 14 te wees, nie 12 nie.\nToets: 9 − 21 + 14 = 2 ✓' },
        { difficulty: 'Hard', question: "Thabo probeer Euler se formule (V − R + H = 2) op ʼn keël toepas, met V = 2 (1 sirkelvormige basis + 1 geboë oppervlak), R = 1 (die sirkelvormige rand) en H = 1 (die apeks). Gee die formule hierdie keer 2? Verduidelik waarom hierdie resultaat nie beteken ʼn keël is ʼn ware veelvlak nie.", answer: "V − R + H = 2 − 1 + 1 = 2, dus gee die formule toevallig wel 2 vir ʼn keël. Dit maak ʼn keël egter nie ʼn ware veelvlak nie: Euler se formule geld eintlik vir vaste liggame met plat veelhoekige vlakke en reguit rande tussen skerp hoekpunte. ʼn Keël het ʼn geboë oppervlak en ʼn geboë (sirkelvormige) rand, nie reguit rande wat plat veelhoeke ontmoet nie, dus is sy 'apeks-hoekpunt' en 'sirkelvormige rand' nie dieselfde soort kenmerke as in ʼn ware veelvlak nie — dat die formule hier syfermatig werk, is toevallig, en nie bewys dat ʼn keël dieselfde strukturele reël as ʼn prisma of piramide volg nie.", checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 agthoeke en 8 reghoeke soos getoon, waar die twee agthoeke die teenoorgestelde punte vorm en die 8 reghoeke ʼn aaneenlopende strook vorm wat hulle rand-aan-rand verbind. In watter vaste liggaam vou hierdie net op?', answer: 'agthoekige prisma', checkMode: 'auto', correctAnswer: 'agthoekigeprisma', correctAnswers: ['agthoekigeprisma', 'agthoekige prisma'], explanation: 'Die net het 2 identiese agthoekige basisse en 8 reghoekige sy-vlakke, wat ooreenstem met ʼn agthoekige prisma (V = 8 + 2 = 10, gemaak van 2 agthoeke + 8 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg"><polygon points="66,79 53,92 35,92 22,79 22,61 35,48 53,48 66,61" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><rect x="66" y="61" width="128" height="18" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><line x1="82" y1="61" x2="82" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="98" y1="61" x2="98" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="114" y1="61" x2="114" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="61" x2="130" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="146" y1="61" x2="146" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="162" y1="61" x2="162" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><line x1="178" y1="61" x2="178" y2="79" stroke="#0f1f3d" stroke-width="1.2"/><polygon points="238,79 225,92 207,92 194,79 194,61 207,48 225,48 238,61" fill="none" stroke="#0f1f3d" stroke-width="1.8"/></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn neghoekige piramide — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 10 vorms in totaal: 1 neghoek (die basis) en 9 driehoeke (die sy-vlakke). Die neghoek sit in die middel met een driehoek aan elk van sy 9 kante vas — wanneer dit gevou word, styg die driehoeke op en ontmoet hulle vrye hoekpunte by die apeks.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 2 sirkels en 1 reghoek soos getoon, waar die reghoek se breedte baie korter is as die sirkels se omtrek — die reghoek reik net halfpad om elke sirkel se rand. As hierdie net gevou word, sou dit toevou tot ʼn behoorlike silinder? Verduidelik.', answer: 'Nee — die net sou nie tot ʼn behoorlike silinder toevou nie. Vir ʼn silinder-net moet die reghoek (geboë oppervlak) ʼn breedte hê wat presies gelyk is aan die omtrek van die sirkelvormige basisse sodat sy twee kort rande perfek ontmoet wanneer dit opgerol word. As die reghoek te kort is, bly daar ʼn gaping onbedek rondom die sirkelvormige rande, en die vaste liggaam sal nie toevou tot ʼn volledige silinder nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn vierkantige piramide met 1 vierkant en 3 driehoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Vierkantige piramide het V = 4 + 1 = 5 vlakke: 1 vierkantige basis en 4 driehoekige sy-vlakke. Die leerder se net het slegs 3 driehoeke in plaas van 4, dus het een kant van die vierkant geen driehoek vas nie en kan die net nie opvou tot ʼn geslote vierkantige piramide nie.', checkMode: 'self' },

        // Blok E: dwarssnitte (16-18)
        { difficulty: 'Hard', question: 'ʼn Seshoekige prisma word gesny deur ʼn plat vlak parallel aan sy seshoekige basis, wat reguit dwarsdeur die prisma sny. Watter vorm is die dwarssnit?', answer: 'seshoek', checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'ʼn seshoek', 'n seshoek'], explanation: 'ʼn Dwarssnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn seshoek is, is die dwarssnit ʼn seshoek ✓' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige piramide wat op sy vierkantige basis staan, word gesny deur ʼn plat vlak parallel aan die basis, halfpad na die apeks toe. Watter vorm is die dwarssnit, en hoe vergelyk sy grootte met die basis?', answer: 'Die dwarssnit is ʼn vierkant, maar dit is kleiner as die basisvierkant. ʼn Piramide vernou eweredig van sy basis na sy apeks, so enige dwarssnit wat parallel aan die basis gesny word, is ʼn kleiner weergawe van dieselfde vorm as die basis — hoe nader die snit aan die apeks gemaak word, hoe kleiner word die vierkant, wat krimp tot ʼn enkele punt presies by die apeks.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Keël wat op sy geboë sykant lê (op sy kant, nie regop nie), word vertikaal gesny deur sy apeks en die middelpunt van sy sirkelvormige basis. Watter vorm is die dwarssnit?', answer: 'driehoek', checkMode: 'auto', correctAnswer: 'driehoek', correctAnswers: ['driehoek', 'ʼn driehoek', 'n driehoek'], explanation: 'Om ʼn keël deur sy apeks en deur die middelpunt van sy basis te sny, gee ʼn driehoekige dwarssnit — een kant is die deursnee van die basis, en die ander twee kante loop van die uiteindes van daardie deursnee op na die apeks ✓' },

        // Blok F: multi-stap vergelyking (19-20)
        { difficulty: 'Hard', question: 'ʼn Tienhoekige prisma en ʼn tienhoekige piramide het albei ʼn basis met 10 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Tienhoekige prisma: V = 12, R = 30, H = 20. Tienhoekige piramide: V = 11, R = 20, H = 11. Die prisma het meer vlakke, rande en hoekpunte in elke kategorie, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide slegs een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte is wat die prisma se waardes groter maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho vergelyk ʼn vierkantige piramide, ʼn sfeer en ʼn silinder. Gee hoeveel plat vlakke, geboë oppervlaktes en hoekpunte (skerp punte) elk van die drie vaste liggame het.', answer: 'Vierkantige piramide: 5 plat vlakke (1 vierkant + 4 driehoeke), 0 geboë oppervlaktes, 5 hoekpunte (4 basis + 1 apeks). Sfeer: 0 plat vlakke, 1 geboë oppervlak, 0 hoekpunte. Silinder: 2 plat vlakke, 1 geboë oppervlak, 0 hoekpunte.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het klassifisering van 3D-voorwerpe, Euler se formule, nette en dwarssnitte ten volle onder die knie.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan weer deur die afdelings hierbo en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het meetkunde van 3D-voorwerpe onder die knie.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
