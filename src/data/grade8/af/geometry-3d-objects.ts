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
        '<DiagramPlaceholder label="Diagram nodig: al 5 Platoniese vaste liggame saam gewys — tetraëder, kubus, oktaëder, dodekaëder, ikosaëder — elkeen geëtiketteer met vlakvorm en telling" />',
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
        '<DiagramPlaceholder label="Diagram nodig: net van ʼn vierkantige piramide plat en gevou gewys; net van ʼn tetraëder plat en gevou gewys" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: vergelykingstabel wat vlakke, hoekpunte en rande vir Platoniese vaste liggame en ander 3D-vorms wys, met Euler se formule vir elkeen geverifieer" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het meetkunde van 3D-voorwerpe onder die knie.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
