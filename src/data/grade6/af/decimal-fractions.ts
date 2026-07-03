import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (place value roles) ───────────────────────────────────────
// units        → blue    (#2563eb)
// tenths       → green   (#16a34a)
// hundredths   → orange  (#ea580c)
// thousandths  → red     (#dc2626)
// carried digit→ purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Desimale Breuke',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PLEKWAARDE VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-decimal-fractions',
      title: 'Plekwaarde van Desimale Breuke',
      icon: '·',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 werk ons met desimale breuke tot <strong>3 desimale plekke</strong>. Die syfers na die desimale komma verteenwoordig <strong>tiendes</strong>, <strong>honderdstes</strong> en <strong>duisendstes</strong>. Die syfer direk na die desimale komma is in die <strong>tiendes</strong>-plek — dit verteenwoordig dele van 10. Die tweede syfer is in die <strong>honderdstes</strong>-plek — dit verteenwoordig dele van 100. Die derde syfer is in die <strong>duisendstes</strong>-plek — dit verteenwoordig dele van 1 000. Ons kan desimale breuke in <strong>uitgebreide notasie</strong> skryf net soos heelgetalle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ene')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiendes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('honderdstes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('duisendstes')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Plekwaardeposisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ene</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die heelgetaldeel — aan die linkerkant van die desimale komma. Elke eenheid het ʼn waarde van 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tiendes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die eerste syfer na die desimale komma. Elke tiende het ʼn waarde van 1/10 of 0,1.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Honderdstes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die tweede syfer na die desimale komma. Elke honderdste het ʼn waarde van 1/100 of 0,01.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Duisendstes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die derde syfer na die desimale komma. Elke duisendste het ʼn waarde van 1/1 000 of 0,001.</p>` +
        `</div>` +

        `</div>` +

        // ── Place value table ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Plekwaardetabel vir 4,375</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:15px;text-align:center;">` +
        `<thead><tr>` +
        `<th style="padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;color:#2563eb;font-weight:700;">Ene</th>` +
        `<th style="padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;color:#374151;font-weight:600;width:40px;"></th>` +
        `<th style="padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;color:#16a34a;font-weight:700;">Tiendes</th>` +
        `<th style="padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;color:#ea580c;font-weight:700;">Honderdstes</th>` +
        `<th style="padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;color:#dc2626;font-weight:700;">Duisendstes</th>` +
        `</tr></thead>` +
        `<tbody><tr>` +
        `<td style="padding:12px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;font-size:1.5em;font-weight:700;color:#2563eb;">4</td>` +
        `<td style="padding:12px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;font-size:1.5em;font-weight:700;color:#374151;">,</td>` +
        `<td style="padding:12px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;font-size:1.5em;font-weight:700;color:#16a34a;">3</td>` +
        `<td style="padding:12px 14px;background:#fff7ed;border:1.5px solid #fed7aa;font-size:1.5em;font-weight:700;color:#ea580c;">7</td>` +
        `<td style="padding:12px 14px;background:#fef2f2;border:1.5px solid #fecaca;font-size:1.5em;font-weight:700;color:#dc2626;">5</td>` +
        `</tr></tbody>` +
        `</table>` +
        `</div>` +

        // ── Expanded notation ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Uitgebreide notasie</p>` +
        `<p style="margin-bottom:12px;">Ons kan ʼn desimale breuk opbreek in die waarde van elke syfer — dit word <strong>uitgebreide notasie</strong> genoem.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Breuke</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('4')} + ${gr('3/10')} + ${or('7/100')} + ${re('5/1 000')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Desimale</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('4')} + ${gr('0,3')} + ${or('0,07')} + ${re('0,005')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: nulle as plekhouers</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Nul in ʼn desimale breuk is ʼn <strong>plekhouer</strong> — dit hou die plekwaardeposisie vas sodat die ander syfers in die regte plek is. In 3,069 beteken die nul in die ${gr('tiendes')}-plek dat daar geen tiendes is nie. Sonder dit sou 3,69 ʼn heeltemal ander getal wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf die plekwaarde van elke syfer in 4,375.',
          answer: `${bl('4')} ene · ${gr('3')} tiendes · ${or('7')} honderdstes · ${re('5')} duisendstes`,
          steps: [
            `${bl('4')} is in die <strong>ene-plek</strong> = ${bl('4')}`,
            `${gr('3')} is in die <strong>tiendes-plek</strong> = ${gr('3/10')} of ${gr('0,3')}`,
            `${or('7')} is in die <strong>honderdstes-plek</strong> = ${or('7/100')} of ${or('0,07')}`,
            `${re('5')} is in die <strong>duisendstes-plek</strong> = ${re('5/1 000')} of ${re('0,005')}`,
          ],
        },
        {
          question: 'Skryf 12,408 in uitgebreide notasie.',
          answer: `10 + ${bl('2')} + ${gr('4/10')} + ${or('0/100')} + ${re('8/1 000')}`,
          steps: [
            `Identifiseer elke syfer en sy plekwaarde: <strong>1</strong> tien · ${bl('2')} ene · ${gr('4')} tiendes · ${or('0')} honderdstes · ${re('8')} duisendstes.`,
            `Skryf in uitgebreide vorm met breuke: 10 + ${bl('2')} + ${gr('4/10')} + ${or('0/100')} + ${re('8/1 000')}`,
            `Of geskryf as desimale: 10 + ${bl('2')} + ${gr('0,4')} + ${re('0,008')}`,
            `<strong>Let wel:</strong> Die ${or('0')} in die honderdstes-plek is ʼn plekhouer — ons sluit dit in die breukvorm in om te wys daar is geen honderdstes nie, sodat ${re('8')} in die korrekte duisendstes-posisie bly.`,
          ],
        },
        {
          question: 'Wat is die waarde van die syfer 6 in 3,069?',
          answer: `Die waarde van ${or('6')} in 3,069 is ${or('6/100')} of ${or('0,06')}`,
          steps: [
            `Vind die syfer ${or('6')} in 3,069. Tel die posisies na die desimale komma: die eerste syfer (0) is in die ${gr('tiendes')}-plek, die tweede syfer (6) is in die ${or('honderdstes')}-plek.`,
            `So ${or('6')} is in die <strong>honderdstes-plek</strong>.`,
            `Die waarde van ${or('6')} in 3,069 is ${or('6/100')} of ${or('0,06')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — place value name ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die plekwaarde van die syfer 7 in 3,074?',
          answer: 'honderdstes',
          checkMode: 'auto',
          correctAnswer: 'hundredths',
          correctAnswers: ['hundredths', 'honderdstes'],
          explanation: 'In 3,074 is die syfers na die desimale komma: 0 (tiendes), 7 (honderdstes), 4 (duisendstes). Die syfer 7 is in die honderdstes-plek.',
        },

        // ── V2 Easy — expanded notation ─────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 5,308 in uitgebreide notasie.',
          answer: '5 + 3/10 + 0/100 + 8/1 000\nof 5 + 0,3 + 0,008',
          checkMode: 'self',
        },

        // ── V3 Medium — value of a digit ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Wat is die waarde van die syfer 4 in 12,043?',
          answer: '0,04',
          checkMode: 'auto',
          correctAnswer: '0.04',
          correctAnswers: ['0.04', '0,04', '4/100'],
          explanation: 'In 12,043 is die syfers na die desimale komma: 0 (tiendes), 4 (honderdstes), 3 (duisendstes). Die syfer 4 is in die honderdstes-plek. Sy waarde is 4/100 = 0,04.',
        },

        // ── V4 Hard — same digit different value ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die syfer 5 in 3,505 kom twee keer voor en het albei dieselfde waarde. Is hy korrek? Verduidelik.',
          answer: 'Nee — die eerste 5 is in die tiendes-plek met waarde 0,5 en die tweede 5 is in die duisendstes-plek met waarde 0,005. Hulle het verskillende waardes omdat hulle verskillende plekwaardeposisies beset.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat plekwaarde van desimale breuke tot 3 desimale plekke verduidelik met uitgewerkte voorbeelde wat tiendes honderdstes en duisendstes gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Plekwaardetabel vir desimale breuke wat ene tiendes honderdstes en duisendstes kolomme toon kleurgekodeer blou groen oranje rooi met voorbeeld 4.375" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-decimal-fractions',
      title: 'Vergelyk en Orden Desimale Breuke',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">Om desimale breuke te vergelyk, vergelyk ons syfer vir syfer van links na regs, beginnende by die <strong>grootste plekwaarde</strong>. As die heelgetaldele gelyk is, vergelyk ons die ${gr('tiendes')}-syfers, dan die ${or('honderdstes')} en dan die ${re('duisendstes')}. Wanneer desimale georden word, help dit om hulle met dieselfde aantal desimale plekke te skryf deur nulle by te voeg — dit verander nie die waarde nie. Onthou dat 0,5 en 0,500 gelyk is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiendes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('honderdstes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('duisendstes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sleutel-vergelykingsyfer')}</span>` +
        `</div>` +

        // ── How to compare ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om desimale breuke te vergelyk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk eers die heelgetaldele.</strong> Die groter heelgetal beteken die groter desimaal. As hulle gelyk is, gaan na die volgende stap.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die ${gr('tiendes')}-syfers.</strong> Die groter tiendes-syfer beteken die groter desimaal. As hulle gelyk is, gaan voort.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die ${or('honderdstes')}-syfers.</strong> Die groter honderdstes-syfer beteken die groter desimaal. As hulle gelyk is, gaan voort.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die ${re('duisendstes')}-syfers.</strong> Die groter duisendstes-syfer beteken die groter desimaal.</p>` +
        `</div>` +

        `</div>` +

        // ── Writing with same decimal places ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Desimale met dieselfde aantal plekke skryf</p>` +
        `<p style="margin-bottom:12px;">Wanneer verskeie desimale georden word, help dit om <strong>almal met dieselfde aantal desimale plekke te skryf</strong> deur nulle by te voeg. Om nulle na die laaste desimale syfer by te voeg, verander <em>nie</em> die waarde nie.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Oorspronklik</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">0,${gr('5')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Drie plekke</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">0,${gr('5')}${or('0')}${re('0')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:160px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Gelyke waardes</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">0,5 = 0,500 ✓</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algemene fout: syfers as heelgetalle vergelyk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vergelyk nooit desimale syfers asof hulle heelgetalle is nie. 0,8 is <strong>groter</strong> as 0,75 omdat die ${gr('tiendes')}-syfer 8 &gt; 7 — jy vergelyk nie 8 teenoor 75 nie. Vergelyk altyd ${bl('een plekwaarde op ʼn slag')} van links na regs.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Watter is groter — 3,45 of 3,452?',
          answer: `3,${gr('4')}${or('5')}${bl('2')} &gt; 3,${gr('4')}${or('5')}`,
          steps: [
            `Vergelyk heelgetalle: albei is <strong>3</strong> — gelyk. Gaan na ${gr('tiendes')}.`,
            `Vergelyk ${gr('tiendes')}: albei het ${gr('4')} — gelyk. Gaan na ${or('honderdstes')}.`,
            `Vergelyk ${or('honderdstes')}: albei het ${or('5')} — gelyk. Gaan na ${re('duisendstes')}.`,
            `Vergelyk ${re('duisendstes')}: 3,45 het ${re('0')} duisendstes en 3,452 het ${bl('2')} duisendstes. Aangesien ${bl('2')} &gt; ${re('0')}, het ons <strong>3,452 &gt; 3,45</strong>.`,
          ],
        },
        {
          question: 'Orden van kleinste na grootste: 2,3,  2,034,  2,34,  2,304.',
          answer: `2,034 &lt; 2,3 &lt; 2,304 &lt; 2,34`,
          steps: [
            `Skryf elke getal met dieselfde aantal desimale plekke (3 plekke): 2,${gr('3')}${or('0')}${re('0')},  2,${gr('0')}${or('3')}${re('4')},  2,${gr('3')}${or('4')}${re('0')},  2,${gr('3')}${or('0')}${re('4')}.`,
            `Al die heelgetalle is gelyk (almal is 2). Vergelyk ${gr('tiendes')}: 2,${bl('0')}34 het die kleinste tiendes-syfer — <strong>2,034 is die kleinste</strong>.`,
            `Die oorblywende drie het almal ${gr('tiendes')}-syfer 3. Vergelyk ${or('honderdstes')}: 2,3${bl('0')}0 en 2,3${bl('0')}4 het ${or('0')} honderdstes; 2,3${or('4')}0 het ${or('4')} honderdstes — dus is <strong>2,34 die grootste</strong>.`,
            `Tussen 2,300 en 2,304: vergelyk ${re('duisendstes')}: 2,30${re('0')} teenoor 2,30${bl('4')} — aangesien ${bl('4')} &gt; ${re('0')}, kry ons 2,304 &gt; 2,3.`,
            `<strong>Opklimmende volgorde: 2,034,  2,3,  2,304,  2,34.</strong>`,
          ],
        },
        {
          question: 'Sipho sê 0,8 is kleiner as 0,75 omdat 8 kleiner as 75 is. Is hy korrek?',
          answer: `Sipho is <strong>verkeerd</strong> — 0,8 &gt; 0,75`,
          steps: [
            `Skryf albei getalle met dieselfde desimale plekke: 0,${gr('8')}${or('0')} en 0,${gr('7')}${or('5')}.`,
            `Vergelyk ${gr('tiendes')}: ${bl('8')} &gt; ${gr('7')}, dus <strong>0,8 &gt; 0,75</strong>.`,
            `Sipho is <strong>verkeerd</strong>. Hy het die syfers 8 en 75 as heelgetalle vergelyk — maar 8 is in die ${gr('tiendes')}-plek en 7 is in die ${gr('tiendes')}-plek van 0,75. Om ${bl('een plekwaarde op ʼn slag')} van links na regs te vergelyk, gee die korrekte antwoord.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V5 Easy — which is greater ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter is groter — 4,5 of 4,49?',
          answer: '4,5',
          checkMode: 'auto',
          correctAnswer: '4.5',
          correctAnswers: ['4.5', '4,5'],
          explanation: 'Skryf albei met dieselfde desimale plekke: 4,50 en 4,49. Vergelyk tiendes: 5 > 4, dus 4,5 > 4,49.',
        },

        // ── V6 Medium — ordering decimals ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Orden van kleinste na grootste — 1,2, 1,023, 1,302, 1,23.',
          answer: '1,023, 1,2, 1,23, 1,302',
          checkMode: 'self',
        },

        // ── V7 Hard — trailing zero misconception ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê 0,750 is groter as 0,75 omdat dit meer syfers het. Is sy korrek? Verduidelik.',
          answer: 'Nee — 0,750 en 0,75 is gelyk. Om ʼn nul aan die einde van ʼn desimaal by te voeg, verander nie sy waarde nie. Die slot-nul is ʼn plekhouer wat nie die hoeveelheid beïnvloed nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe om desimale breuke te vergelyk en te orden deur syfer vir syfer van links na regs te vergelyk met plekwaarde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Vergelykingstabel wat 3.45 en 3.452 langs mekaar toon met tiendes groen honderdstes oranje duisendstes rooi en die sleutel-vergelykingsyfer blou uitgelig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPTEL EN AFTREK VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-decimal-fractions',
      title: 'Optel en Aftrek van Desimale Breuke',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Om desimale breuke op te tel of af te trek, lyn ons die ${bl('desimale kommas')} op en voeg ${or('nulle')} by waar nodig sodat alle getalle dieselfde aantal desimale plekke het. Dan tel ons op of trek af soos ons met heelgetalle sou doen, deur van <strong>regs na links</strong> te werk. Die ${bl('desimale komma')} in die antwoord kom direk onder die ${bl('desimale kommas')} in die vraag. <strong>Skat altyd eers</strong> om te kyk of jou antwoord redelik is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale komma')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('oorgedraagde syfer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nul bygevoeg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skat eers</strong> — Rond elke getal af tot die naaste heelgetal en tel op of trek af. Dit gee jou ʼn growwe kontrole vir jou antwoord.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lyn die ${bl('desimale kommas')} op</strong> — Skryf die getalle een onder die ander sodat alle ${bl('desimale kommas')} in dieselfde kolom is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Voeg ${or('nulle')} by</strong> — Vul ${or('nulle')} in na die laaste desimale syfer sodat alle getalle dieselfde aantal desimale plekke het. Slot-nulle byvoeg verander nie die waarde nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel op of trek af van regs na links</strong> — Werk kolom vir kolom vanaf die syfer heel regs. Wanneer jy optel, ${pu('dra')} enige tiene oor na die volgende kolom. Wanneer jy aftrek, leen van die volgende kolom waar nodig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skryf die ${bl('desimale komma')}</strong> — Plaas die ${bl('desimale komma')} in die ${gr('antwoord')} direk onder die ${bl('desimale kommas')} in die vraag.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skat altyd eers</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jou ${gr('antwoord')} baie verskil van jou skatting, gaan terug en kontroleer. Die algemeenste foute is om te vergeet om die ${bl('desimale kommas')} op te lyn en om te vergeet om ${or('nulle')} by te voeg sodat alle getalle dieselfde aantal desimale plekke het.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 7: 3.45 + 2.368 = 5.818 ────────────────────────────────
        {
          question: 'Bereken 3,45 + 2,368.',
          answer: `${gr('5,818')}`,
          steps: [
            `<strong>Skat:</strong> 3 + 2 = 5. Ons antwoord moet naby aan 5 wees.`,
            `<strong>Lyn die ${bl('desimale kommas')} op:</strong> Skryf 3,45 en 2,368 met hul ${bl('desimale kommas')} vertikaal belyn.`,
            `<strong>Voeg ʼn ${or('nul')} by:</strong> Skryf 3,45 as 3,45${or('0')} sodat albei getalle 3 desimale plekke het.`,
            `<strong>Duisendstes:</strong> ${or('0')} + 8 = 8. Skryf 8.`,
            `<strong>Honderdstes:</strong> 5 + 6 = 11 — skryf 1, ${pu('dra 1 oor')}.`,
            `<strong>Tiendes:</strong> 4 + 3 + ${pu('1')} (oorgedra) = 8. Skryf 8.`,
            `<strong>Skryf die ${bl('desimale komma')}.</strong> Dan ene: 3 + 2 = 5.`,
            `<strong>${gr('Antwoord: 3,450 + 2,368 = 5,818')}</strong> — naby aan ons skatting van 5 ✓`,
          ],
        },

        // ── Voorbeeld 8: 7.2 - 3.485 = 3.715 ─────────────────────────────────
        {
          question: 'Bereken 7,2 − 3,485.',
          answer: `${gr('3,715')}`,
          steps: [
            `<strong>Skat:</strong> 7 − 3 = 4. Ons antwoord moet naby aan 4 wees.`,
            `<strong>Lyn die ${bl('desimale kommas')} op:</strong> Skryf 7,2 en 3,485 met hul ${bl('desimale kommas')} vertikaal belyn.`,
            `<strong>Voeg ${or('nulle')} by:</strong> Skryf 7,2 as 7,2${or('00')} sodat albei getalle 3 desimale plekke het.`,
            `<strong>Duisendstes:</strong> ${or('0')} − 5 — moet leen. Aangesien beide die duisendstes- en honderdstes-syfers ${or('0')} is, leen ʼn tiende: duisendstes word 10, honderdstes word 9. 10 − 5 = 5. Skryf 5.`,
            `<strong>Honderdstes:</strong> 9 − 8 = 1. Skryf 1.`,
            `<strong>Tiendes:</strong> 1 − 4 — moet leen van ene. Tiendes word 11. 11 − 4 = 7. Skryf 7. (Ene word verminder na 6.)`,
            `<strong>Skryf die ${bl('desimale komma')}.</strong> Dan ene: 6 − 3 = 3. Skryf 3.`,
            `<strong>${gr('Antwoord: 7,200 − 3,485 = 3,715')}</strong> — naby aan ons skatting van 4 ✓`,
          ],
        },

        // ── Voorbeeld 9: Lerato word problem ───────────────────────────────────
        {
          question: 'Lerato hardloop 4,75 km in die oggend en 3,825 km in die middag. Hoe ver hardloop sy in totaal?',
          answer: `${gr('8,575 km')}`,
          steps: [
            `<strong>Skat:</strong> 5 + 4 = 9 km. Ons antwoord moet naby aan 9 wees.`,
            `<strong>Lyn die ${bl('desimale kommas')} op:</strong> Skryf 4,75 en 3,825 met hul ${bl('desimale kommas')} vertikaal belyn.`,
            `<strong>Voeg ʼn ${or('nul')} by:</strong> Skryf 4,75 as 4,75${or('0')} sodat albei getalle 3 desimale plekke het.`,
            `<strong>Duisendstes:</strong> ${or('0')} + 5 = 5. Skryf 5.`,
            `<strong>Honderdstes:</strong> 5 + 2 = 7. Skryf 7.`,
            `<strong>Tiendes:</strong> 7 + 8 = 15 — skryf 5, ${pu('dra 1 oor')}.`,
            `<strong>Skryf die ${bl('desimale komma')}.</strong> Dan ene: 4 + 3 + ${pu('1')} (oorgedra) = 8. Skryf 8.`,
            `<strong>${gr('Antwoord: Lerato hardloop in totaal 8,575 km.')}</strong> — naby aan ons skatting van 9 km ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V8 Easy — addition ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 3,45 + 2,3.',
          answer: '5,75',
          checkMode: 'auto',
          correctAnswer: '5.75',
          correctAnswers: ['5.75', '5,75'],
          explanation: 'Lyn desimale kommas op. Skryf 2,3 as 2,30 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 5 + 0 = 5.\nTiendes: 4 + 3 = 7.\nEne: 3 + 2 = 5.\nAntwoord: 5,75 ✓',
        },

        // ── V9 Medium — subtraction ──────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 8,4 − 3,625.',
          answer: '4,775',
          checkMode: 'auto',
          correctAnswer: '4.775',
          correctAnswers: ['4.775', '4,775'],
          explanation: 'Skryf 8,4 as 8,400 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 − 5 → leen. Honderdstes word 9, duisendstes word 10. 10 − 5 = 5.\nHonderdstes: 9 − 2 = 7.\nTiendes: 3 − 6 → leen van ene. Tiendes word 13. 13 − 6 = 7. Ene word verminder na 7.\nEne: 7 − 3 = 4.\nAntwoord: 4,775 ✓',
        },

        // ── V10 Hard — multi-step word problem ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle hardloop 3,475 km op Maandag, 4,8 km op Woensdag en 2,925 km op Vrydag. Hoe ver hardloop sy in totaal?',
          answer: '11,2',
          checkMode: 'auto',
          correctAnswer: '11.2',
          correctAnswers: ['11.2', '11.2km', '11.2 km', '11.200', '11,2', '11,2km', '11,2 km', '11,200'],
          explanation: 'Skryf al die afstande met 3 desimale plekke: 3,475 + 4,800 + 2,925.\nDuisendstes: 5 + 0 + 5 = 10 → skryf 0, dra 1 oor.\nHonderdstes: 7 + 0 + 2 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor.\nTiendes: 4 + 8 + 9 + 1 (oorgedra) = 22 → skryf 2, dra 2 oor.\nEne: 3 + 4 + 2 + 2 (oorgedra) = 11.\nAntwoord: 11,200 = 11,2 km ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale breuke op te tel en af te trek deur desimale kommas op te lyn en nulle by te voeg om gelyke desimale plekke te maak" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Kolomoptellinguitleg wat wys 3.450 plus 2.368 is gelyk aan 5.818 met desimale komma blou oorgedraagde syfer pers nul bygevoeg oranje en antwoord groen kleurgekodeer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VERMENIGVULDIGING VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-decimal-fractions',
      title: 'Vermenigvuldiging van Desimale Breuke',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn desimale breuk met ʼn heelgetal te vermenigvuldig, vermenigvuldig ons asof daar geen desimale komma is nie en tel dan die totale aantal ${or('desimale plekke')} in die vraag. Ons plaas die ${bl('desimale komma')} in die antwoord sodat dit dieselfde aantal ${or('desimale plekke')} het. Om ʼn desimaal met 10 te vermenigvuldig, skuif ons die ${bl('desimale komma')} een plek na regs. Om met 100 te vermenigvuldig, skuif ons dit twee plekke na regs. Om met 1 000 te vermenigvuldig, skuif ons dit drie plekke na regs.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('desimale plekke getel')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale komma-posisie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('antwoord')}</span>` +
        `</div>` +

        // ── Steps ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vermenigvuldig met ʼn heelgetal</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vermenigvuldig')} — Ignoreer die desimale komma en ${gr('vermenigvuldig')} die syfers asof dit ʼn heelgetal is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Tel desimale plekke')} — Tel die totale aantal ${or('desimale plekke')} in die vraag. Net die desimale getal tel — nie die heelgetal-vermenigvuldiger nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Plaas die ${bl('desimale komma')}</strong> — Tel dieselfde aantal syfers van regs af in jou produk en plaas die ${bl('desimale komma')} daar. Die ${re('antwoord')} sal dieselfde aantal ${or('desimale plekke')} as die vraag hê.</p>` +
        `</div>` +

        `</div>` +

        // ── Multiplying by 10, 100, 1 000 ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vermenigvuldig met 10, 100 en 1 000</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>1 plek</strong> na regs.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2,${bl('3')}75 × 10 = ${re('23,75')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>2 plekke</strong> na regs.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2,3${bl('7')}5 × 100 = ${re('237,5')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">× 1 000</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>3 plekke</strong> na regs.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">2,37${bl('5')} × 1 000 = ${re('2 375')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tel, dan plaas</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Tel')} die ${or('desimale plekke')} in die vraag <em>voordat</em> jy bereken — dan weet jy presies waar die ${bl('desimale komma')} in die ${re('antwoord')} gaan. Skryf die ${bl('desimale komma')} voordat jy slot-nulle skryf sodat jy nie daarvan wegraak nie.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 10: 3.45 × 6 = 20.7 ─────────────────────────────────────
        {
          question: 'Bereken 3,45 × 6.',
          answer: `3,45 × 6 = ${re('20,7')}`,
          steps: [
            `${gr('Vermenigvuldig')} sonder die desimale komma: ${gr('345 × 6 = 2 070')}.`,
            `${or('Tel desimale plekke')} in die vraag: 3,45 het ${or('2 desimale plekke')}. Die heelgetal 6 het geen desimale plekke nie.`,
            `Plaas die ${bl('desimale komma')} ${bl('2 plekke van regs af')} in die produk 2 070 → 20,70.`,
            `<strong>${re('Antwoord: 20,70 = 20,7')}</strong> ✓`,
          ],
        },

        // ── Voorbeeld 11: 2.375 × 100 = 237.5 ─────────────────────────────────
        {
          question: 'Bereken 2,375 × 100.',
          answer: `2,375 × 100 = ${re('237,5')}`,
          steps: [
            `Vermenigvuldig met 100 skuif die ${bl('desimale komma')} ${bl('2 plekke na regs')}.`,
            `${gr('2,375 × 100:')} skuif die ${bl('desimale komma')} twee plekke na regs → 237,5.`,
            `<strong>${re('Antwoord: 237,5')}</strong> ✓`,
          ],
        },

        // ── Voorbeeld 12: Amahle — R12.75 × 4 = R51.00 ───────────────────────
        {
          question: 'Amahle koop 4 bottels vrugtesap wat elk R12,75 kos. Wat is die totale koste?',
          answer: `Die totale koste is ${re('R51,00')}`,
          steps: [
            `Skryf die getalsin: R12,75 × 4 = ?`,
            `${gr('Vermenigvuldig')} sonder die desimale komma: ${gr('1 275 × 4 = 5 100')}.`,
            `${or('Tel desimale plekke')} in die vraag: R12,75 het ${or('2 desimale plekke')}.`,
            `Plaas die ${bl('desimale komma')} ${bl('2 plekke van regs af')} in 5 100 → 51,00.`,
            `<strong>${re('Antwoord: Die totale koste is R51,00.')}</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V11 Easy — multiply by 10 ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 4,35 × 10.',
          answer: '43,5',
          checkMode: 'auto',
          correctAnswer: '43.5',
          correctAnswers: ['43.5', '43,5'],
          explanation: 'Vermenigvuldig met 10 skuif die desimale komma 1 plek na regs.\n4,35 × 10 = 43,5 ✓',
        },

        // ── V12 Medium — multiply by a whole number ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 3,25 × 8.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Vermenigvuldig sonder die desimale komma: 325 × 8 = 2 600.\nTel desimale plekke in die vraag: 3,25 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 2 600 → 26,00 = 26.\nAntwoord: 26 ✓',
        },

        // ── V13 Hard — verify a multiplication result ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho vermenigvuldig 2,375 × 4 en kry 9,5. Is hy korrek? Wys jou werk.',
          answer: 'Vermenigvuldig sonder die desimale komma: 2 375 × 4 = 9 500.\n2,375 het 3 desimale plekke, dus plaas die desimale komma 3 plekke van regs af in 9 500 → 9,500 = 9,5.\nJa, Sipho is korrek.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale breuke met ʼn heelgetal en met 10 100 en 1000 te vermenigvuldig met uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat wys 3.45 vermenigvuldig met 6 met desimale plekke getel oranje desimale komma-posisie blou vermenigvuldiging groen en antwoord rooi kleurgekodeer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — DELING VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-decimal-fractions',
      title: 'Deling van Desimale Breuke',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn desimale breuk deur ʼn heelgetal te deel, deel ons normaalweg en hou die ${bl('desimale komma')} in dieselfde posisie. Om ʼn desimaal deur 10 te deel, skuif ons die ${bl('desimale komma')} een plek na links. Om deur 100 te deel, skuif ons dit twee plekke na links. Om deur 1 000 te deel, skuif ons dit drie plekke na links. Kontroleer altyd jou antwoord deur te vermenigvuldig — as jy korrek deel, behoort die antwoord vermenigvuldig met die deler die oorspronklike getal terug te gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale komma-beweging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('delingstappe')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('res')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('antwoord')}</span>` +
        `</div>` +

        // ── Dividing by a whole number ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Deel deur ʼn heelgetal</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Deel normaalweg')} — Deel syfer vir syfer van links na regs, presies soos jy met ʼn heelgetal sou doen.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hou die ${bl('desimale komma')}</strong> — Wanneer jy by die ${bl('desimale komma')} in die deeltal kom, skryf die ${bl('desimale komma')} in dieselfde kolom in die antwoord direk daarbo.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer die ${re('antwoord')}</strong> — Vermenigvuldig die ${re('antwoord')} met die deler. Die resultaat moet gelyk wees aan die oorspronklike deeltal.</p>` +
        `</div>` +

        `</div>` +

        // ── Dividing by 10, 100, 1 000 ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Deel deur 10, 100 en 1 000</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>1 plek</strong> na links.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">4${bl('7')},5 ÷ 10 = ${re('4,75')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>2 plekke</strong> na links.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('47')},5 ÷ 100 = ${re('0,475')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">÷ 1 000</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die ${bl('desimale komma')} <strong>3 plekke</strong> na links.</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('475')},0 ÷ 1 000 = ${re('0,475')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd deur te vermenigvuldig</p>` +
        `<p style="margin:0;color:#1e3a8a;">Na deling, ${gr('vermenigvuldig')} jou ${re('antwoord')} met die deler. Die resultaat moet gelyk wees aan die oorspronklike getal. As dit nie is nie, kontroleer waar jy die ${bl('desimale komma')} geplaas het of of jy die ${or('res')} korrek oorgedra het.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 13: 8.46 ÷ 3 = 2.82 ─────────────────────────────────────
        {
          question: 'Bereken 8,46 ÷ 3.',
          answer: `8,46 ÷ 3 = ${re('2,82')}`,
          steps: [
            `${gr('Deel normaalweg:')} ${gr('8 ÷ 3 = 2')} res ${or('2')}. Skryf ${gr('2')} in die kwosiënt.`,
            `${gr('Bring 4 af')} om by die ${or('res')} 2 te voeg → ons het nou ${or('2')}4. ${gr('24 ÷ 3 = 8')}. Skryf ${gr('8')} in die kwosiënt.`,
            `${gr('Bring 6 af.')} ${gr('6 ÷ 3 = 2')}. Skryf ${gr('2')} in die kwosiënt. Geen res nie.`,
            `<strong>Hou die ${bl('desimale komma')} in dieselfde posisie</strong> — die ${bl('desimale komma')} in die antwoord sit direk bo die ${bl('desimale komma')} in 8,46.`,
            `<strong>${re('Antwoord: 2,82')}</strong>`,
            `<strong>Kontroleer:</strong> ${re('2,82')} × 3 = ${re('8,46')} ✓`,
          ],
        },

        // ── Voorbeeld 14: 47.5 ÷ 100 = 0.475 ──────────────────────────────────
        {
          question: 'Bereken 47,5 ÷ 100.',
          answer: `47,5 ÷ 100 = ${re('0,475')}`,
          steps: [
            `Deel deur 100 skuif die ${bl('desimale komma')} ${bl('2 plekke na links')}.`,
            `${bl('Skuif die desimale komma:')} 47,5 → 4,75 → ${re('0,475')}.`,
            `<strong>${re('Antwoord: 0,475')}</strong>`,
          ],
        },

        // ── Voorbeeld 15: R245.80 ÷ 4 = R61.45 ────────────────────────────────
        {
          question: 'Thabo deel R245,80 gelykop tussen 4 mense. Hoeveel kry elke persoon?',
          answer: `Elke persoon kry ${re('R61,45')}`,
          steps: [
            `Skryf die getalsin: R245,80 ÷ 4 = ?`,
            `${gr('Deel:')} ${gr('24 ÷ 4 = 6')}. Skryf ${gr('6')} in die kwosiënt.`,
            `${gr('Deel:')} ${gr('5 ÷ 4 = 1')} res ${or('1')}. Skryf ${gr('1')} in die kwosiënt.`,
            `Hou die ${bl('desimale komma')} — skryf die ${bl('desimale komma')} in die antwoord bo die ${bl('desimale komma')} in 245,80.`,
            `${gr('Bring 8 af')} om by die ${or('res')} 1 te voeg → ons het nou ${or('1')}8. ${gr('18 ÷ 4 = 4')} res ${or('2')}. Skryf ${gr('4')} in die kwosiënt.`,
            `${gr('Bring 0 af')} om by die ${or('res')} 2 te voeg → ons het nou ${or('2')}0. ${gr('20 ÷ 4 = 5')}. Skryf ${gr('5')} in die kwosiënt. Geen res nie.`,
            `<strong>${re('Antwoord: Elke persoon kry R61,45.')}</strong>`,
            `<strong>Kontroleer:</strong> ${re('61,45')} × 4 = ${re('245,80')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V14 Medium — divide by 100 ──────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 36,9 ÷ 100.',
          answer: '0,369',
          checkMode: 'auto',
          correctAnswer: '0.369',
          correctAnswers: ['0.369', '0,369'],
          explanation: 'Deel deur 100 skuif die desimale komma 2 plekke na links.\n36,9 → 3,69 → 0,369.\nAntwoord: 0,369 ✓',
        },

        // ── V15 Hard — sharing money word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato deel R184,50 gelykop tussen 6 mense. Hoeveel kry elke persoon?',
          answer: 'R30,75',
          checkMode: 'auto',
          correctAnswer: 'R30.75',
          correctAnswers: ['R30.75', '30.75', 'R30,75', '30,75'],
          explanation: 'Deel R184,50 deur 6:\n1 < 6 — neem 18. 18 ÷ 6 = 3. 3 × 6 = 18. 18 − 18 = 0. Bring 4 af → 04.\n04 ÷ 6 = 0 res 4. Skryf 0. Hou die desimale komma. Bring 5 af → 45.\n45 ÷ 6 = 7 res 3. 7 × 6 = 42. 45 − 42 = 3. Bring 0 af → 30.\n30 ÷ 6 = 5. 5 × 6 = 30. 30 − 30 = 0. Geen res nie.\nAntwoord: R30,75. Kontroleer: 30,75 × 6 = 184,50 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om desimale breuke deur ʼn heelgetal te deel deur die desimale komma in posisie te hou en hoe deling deur 10 100 en 1000 die desimale komma na links skuif" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Delinguitleg wat wys 8.46 gedeel deur 3 is gelyk aan 2.82 met delingstappe groen res oranje desimale komma-posisie blou en antwoord rooi kleurgekodeer saam met pyle wat wys hoe die desimale komma na links skuif wanneer daar deur 10 100 en 1000 gedeel word" />',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het desimale breuke volkome bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van desimale breuke.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte laat val het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou so aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}

