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
          correctAnswer: '0,04',
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
        'Kort video wat plekwaarde van desimale breuke tot 3 desimale plekke verduidelik met uitgewerkte voorbeelde wat tiendes honderdstes en duisendstes gebruik',
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
          correctAnswer: '4,5',
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
        'Kort video wat verduidelik hoe om desimale breuke te vergelyk en te orden deur syfer vir syfer van links na regs te vergelyk met plekwaarde',

      diagramPlaceholder: 'Kolomtabel wat 3,450 en 3,452 syfer vir syfer vergelyk, met die duisendstesyfer — die eerste verskilpunt — blou uitgelig',
      diagramSvg: '<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="25" height="26" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><text x="27.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="46" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">,</text><rect x="52" y="15" width="25" height="26" fill="#f0fdf4" stroke="#0f1f3d" stroke-width="1.5"/><text x="64.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">4</text><rect x="77" y="15" width="25" height="26" fill="#fff7ed" stroke="#0f1f3d" stroke-width="1.5"/><text x="89.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">5</text><rect x="102" y="15" width="25" height="26" fill="#fef2f2" stroke="#2563eb" stroke-width="3"/><text x="114.5" y="33" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">0</text><rect x="15" y="48" width="25" height="26" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><text x="27.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="46" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">,</text><rect x="52" y="48" width="25" height="26" fill="#f0fdf4" stroke="#0f1f3d" stroke-width="1.5"/><text x="64.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">4</text><rect x="77" y="48" width="25" height="26" fill="#fff7ed" stroke="#0f1f3d" stroke-width="1.5"/><text x="89.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">5</text><rect x="102" y="48" width="25" height="26" fill="#fef2f2" stroke="#2563eb" stroke-width="3"/><text x="114.5" y="66" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">2</text><text x="100" y="90" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a"><tspan x="100">Duisendstes: 0 &lt; 2,</tspan><tspan x="100" dy="14">dus 3,452 &gt; 3,45</tspan></text></svg>',
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
          correctAnswer: '5,75',
          correctAnswers: ['5.75', '5,75'],
          explanation: 'Lyn desimale kommas op. Skryf 2,3 as 2,30 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 5 + 0 = 5.\nTiendes: 4 + 3 = 7.\nEne: 3 + 2 = 5.\nAntwoord: 5,75 ✓',
        },

        // ── V9 Medium — subtraction ──────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 8,4 − 3,625.',
          answer: '4,775',
          checkMode: 'auto',
          correctAnswer: '4,775',
          correctAnswers: ['4.775', '4,775'],
          explanation: 'Skryf 8,4 as 8,400 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 − 5 → leen. Honderdstes word 9, duisendstes word 10. 10 − 5 = 5.\nHonderdstes: 9 − 2 = 7.\nTiendes: 3 − 6 → leen van ene. Tiendes word 13. 13 − 6 = 7. Ene word verminder na 7.\nEne: 7 − 3 = 4.\nAntwoord: 4,775 ✓',
        },

        // ── V10 Hard — multi-step word problem ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle hardloop 3,475 km op Maandag, 4,8 km op Woensdag en 2,925 km op Vrydag. Hoe ver hardloop sy in totaal?',
          answer: '11,2',
          checkMode: 'auto',
          correctAnswer: '11,2',
          correctAnswers: ['11.2', '11.2km', '11.2 km', '11.200', '11,2', '11,2km', '11,2 km', '11,200'],
          explanation: 'Skryf al die afstande met 3 desimale plekke: 3,475 + 4,800 + 2,925.\nDuisendstes: 5 + 0 + 5 = 10 → skryf 0, dra 1 oor.\nHonderdstes: 7 + 0 + 2 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor.\nTiendes: 4 + 8 + 9 + 1 (oorgedra) = 22 → skryf 2, dra 2 oor.\nEne: 3 + 4 + 2 + 2 (oorgedra) = 11.\nAntwoord: 11,200 = 11,2 km ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om desimale breuke op te tel en af te trek deur desimale kommas op te lyn en nulle by te voeg om gelyke desimale plekke te maak',

      diagramPlaceholder: 'Kolomoptelling wat wys 3,450 + 2,368 = 5,818, met die oorgedraagde syfer van die honderdstekolom bo die tiendekolom getoon',
      diagramSvg: '<svg viewBox="0 0 210 140" xmlns="http://www.w3.org/2000/svg"><circle cx="64.5" cy="16" r="8" fill="#7c3aed"/><text x="64.5" y="20.5" font-weight="700" font-size="11" text-anchor="middle" fill="white">1</text><text x="27.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="52" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">,</text><text x="64.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="89.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">5</text><text x="114.5" y="38" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">0</text><text x="8" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">+</text><text x="27.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">2</text><text x="52" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">,</text><text x="64.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="89.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="114.5" y="62" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">8</text><line x1="10" y1="70" x2="130" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><text x="27.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">5</text><text x="52" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">,</text><text x="64.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">8</text><text x="89.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">1</text><text x="114.5" y="94" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">8</text><text x="105" y="118" font-size="11" text-anchor="middle" fill="#7c3aed">pers = oorgedraagde syfer</text><text x="105" y="132" font-size="11" text-anchor="middle" fill="#ea580c">oranje = nul bygevoeg</text></svg>',
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
          correctAnswer: '43,5',
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
        'Kort video wat wys hoe om desimale breuke met ʼn heelgetal en met 10 100 en 1000 te vermenigvuldig met uitgewerkte voorbeelde',

      diagramPlaceholder: 'Diagram wat wys hoe om 2 desimale plekke van regs af in die produk 2070 te tel om die korrek geplaaste antwoord 20,7 vir 3,45 × 6 te kry',
      diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><text x="110" y="18" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">345 × 6 = 2070</text><rect x="40" y="35" width="35" height="40" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="57.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#0f1f3d">2</text><rect x="75" y="35" width="35" height="40" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#0f1f3d">0</text><rect x="110" y="35" width="35" height="40" fill="#fef2f2" stroke="#2563eb" stroke-width="2.5"/><text x="127.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#dc2626">7</text><rect x="145" y="35" width="35" height="40" fill="#fef2f2" stroke="#2563eb" stroke-width="2.5"/><text x="162.5" y="61" font-weight="700" font-size="20" text-anchor="middle" fill="#dc2626">0</text><line x1="110" y1="28" x2="110" y2="82" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/><path d="M110 90 L110 98 L180 98 L180 90" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="112" font-weight="700" font-size="12" text-anchor="middle" fill="#ea580c">2 desimale plekke</text><text x="110" y="135" font-weight="700" font-size="14" text-anchor="middle" fill="#16a34a">Komma kom hier → 20,70 = 20,7</text></svg>',
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
          correctAnswer: '0,369',
          correctAnswers: ['0.369', '0,369'],
          explanation: 'Deel deur 100 skuif die desimale komma 2 plekke na links.\n36,9 → 3,69 → 0,369.\nAntwoord: 0,369 ✓',
        },

        // ── V15 Hard — sharing money word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato deel R184,50 gelykop tussen 6 mense. Hoeveel kry elke persoon?',
          answer: 'R30,75',
          checkMode: 'auto',
          correctAnswer: 'R30,75',
          correctAnswers: ['R30.75', '30.75', 'R30,75', '30,75'],
          explanation: 'Deel R184,50 deur 6:\n1 < 6 — neem 18. 18 ÷ 6 = 3. 3 × 6 = 18. 18 − 18 = 0. Bring 4 af → 04.\n04 ÷ 6 = 0 res 4. Skryf 0. Hou die desimale komma. Bring 5 af → 45.\n45 ÷ 6 = 7 res 3. 7 × 6 = 42. 45 − 42 = 3. Bring 0 af → 30.\n30 ÷ 6 = 5. 5 × 6 = 30. 30 − 30 = 0. Geen res nie.\nAntwoord: R30,75. Kontroleer: 30,75 × 6 = 184,50 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om desimale breuke deur ʼn heelgetal te deel deur die desimale komma in posisie te hou en hoe deling deur 10 100 en 1000 die desimale komma na links skuif',

      diagramPlaceholder: 'Lang delinguitleg wat wys 8,46 gedeel deur 3 = 2,82, met die desimale komma wat in dieselfde kolom in die kwosiënt bly',
      diagramSvg: '<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg"><text x="50" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">2</text><text x="65" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#2563eb">,</text><text x="80" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">8</text><text x="95" y="35" font-weight="700" font-size="18" text-anchor="middle" fill="#16a34a">2</text><line x1="40" y1="42" x2="112" y2="42" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="42" x2="40" y2="95" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">3</text><text x="50" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">8</text><text x="65" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#2563eb">,</text><text x="80" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">4</text><text x="95" y="72" font-weight="700" font-size="18" text-anchor="middle" fill="#0f1f3d">6</text><line x1="65" y1="20" x2="65" y2="95" stroke="#2563eb" stroke-width="1" stroke-dasharray="2,2"/><text x="150" y="66" font-size="11" text-anchor="middle" fill="#2563eb">komma bly</text><text x="150" y="79" font-size="11" text-anchor="middle" fill="#2563eb">in lyn</text><text x="100" y="115" font-weight="700" font-size="14" text-anchor="middle" fill="#dc2626">8,46 ÷ 3 = 2,82</text></svg>',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Bloklegplan per stel: 0-3 plekwaarde/uitgebreide notasie | 4-7 vergelyk/orden |
  // 8-11 optel/aftrek | 12-15 vermenigvuldig | 16-19 deel
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die plekwaarde van die syfer 8 in 5,284?', answer: 'honderdstes', checkMode: 'auto', correctAnswer: 'hundredths', correctAnswers: ['hundredths', 'honderdstes'], explanation: 'In 5,284 is die syfers na die desimale komma 2 (tiendes), 8 (honderdstes), 4 (duisendstes). Die syfer 8 is in die honderdstes-plek.' },
        { difficulty: 'Easy', question: 'ʼn Resep benodig 0,375 kg botter. Wat is die waarde van die syfer 5 in 0,375?', answer: '0,005', checkMode: 'auto', correctAnswer: '0,005', correctAnswers: ['0.005', '0,005', '5/1000', '5/1 000'], explanation: 'Die syfer 5 is die derde syfer na die desimale komma, dus is dit in die duisendstes-plek. Sy waarde is 5/1 000 = 0,005.' },
        { difficulty: 'Easy', question: 'Skryf 6,429 in uitgebreide notasie.', answer: '6 + 4/10 + 2/100 + 9/1 000\nof 6 + 0,4 + 0,02 + 0,009', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Draffer se tyd is 14,637 sekondes. Wat is die waarde van die syfer 3 in 14,637?', answer: '0,03', checkMode: 'auto', correctAnswer: '0,03', correctAnswers: ['0.03', '0,03', '3/100'], explanation: 'Die syfer 3 is die tweede syfer na die desimale komma, in die honderdstes-plek. Sy waarde is 3/100 = 0,03.' },
        { difficulty: 'Easy', question: 'Watter is groter — 6,4 of 6,38?', answer: '6,4', checkMode: 'auto', correctAnswer: '6,4', correctAnswers: ['6.4', '6,4'], explanation: 'Skryf albei met dieselfde desimale plekke: 6,40 en 6,38. Vergelyk tiendes: albei het 4 — gelyk. Vergelyk honderdstes: 0 < 8, dus is 6,40 (dieselfde as 6,4) groter as 6,38.' },
        { difficulty: 'Medium', question: 'Orden hierdie lintlengtes van kortste na langste: 2,4 m, 2,045 m, 2,45 m, 2,405 m.', answer: '2,045 m, 2,4 m, 2,405 m, 2,45 m', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo sê 0,6 is kleiner as 0,45 omdat 6 tiendes na ʼn klein breukdeel klink terwyl 45 honderdstes na baie klink. Is hy korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Skryf albei met dieselfde desimale plekke: 0,60 en 0,45. Vergelyk tiendes: 6 > 4, dus is 0,6 groter as 0,45, nie kleiner nie. Thabo is verkeerd.' },
        { difficulty: 'Medium', question: 'Zanele sê 0,30 is groter as 0,3 omdat dit ʼn ekstra syfer het. Is sy korrek? Verduidelik.', answer: 'Nee — 0,30 en 0,3 is gelyk in waarde. Om ʼn slot-nul na die laaste desimale syfer by te voeg, verander nie die waarde nie, dit is net ʼn plekhouer.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 4,65 + 3,28.', answer: '7,93', checkMode: 'auto', correctAnswer: '7,93', correctAnswers: ['7.93', '7,93'], explanation: 'Lyn desimale kommas op.\nHonderdstes: 5 + 8 = 13 — skryf 3, dra 1 oor.\nTiendes: 6 + 2 + 1 (oorgedra) = 9.\nEne: 4 + 3 = 7.\nAntwoord: 7,93 ✓' },
        { difficulty: 'Medium', question: 'Bereken 12,4 − 5,875.', answer: '6,525', checkMode: 'auto', correctAnswer: '6,525', correctAnswers: ['6.525', '6,525'], explanation: 'Skryf 12,4 as 12,400 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 − 5 → leen. Honderdstes word 9, duisendstes word 10. 10 − 5 = 5.\nHonderdstes: 9 − 7 = 2.\nTiendes: 3 − 8 → leen van ene. Tiendes word 13. 13 − 8 = 5. Ene word verminder na 11.\nEne: 11 − 5 = 6.\nAntwoord: 6,525 ✓' },
        { difficulty: 'Medium', question: 'Lindiwe draf 5,4 km voor ontbyt en 3,75 km in die aand. Skat haar totale afstand eers, en bereken dan die presiese totaal.', answer: 'Skatting: 5 + 4 = 9 km. Presies: 5,4 + 3,75 = 9,15 km, naby aan die skatting.', checkMode: 'auto', correctAnswer: '9,15', correctAnswers: ['9.15', '9,15', '9.15km', '9,15km', '9.15 km', '9,15 km'], explanation: 'Skatting: 5 + 4 = 9 km.\nPresies: skryf 5,4 as 5,40. Honderdstes: 0 + 5 = 5. Tiendes: 4 + 7 = 11 — skryf 1, dra 1 oor. Ene: 5 + 3 + 1 (oorgedra) = 9.\nAntwoord: 9,15 km, naby aan die skatting van 9 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Kliënt koop goedere ter waarde van R12,50 en R18,75 en betaal met ʼn R50-noot. Hoeveel kleingeld kry sy terug?', answer: 'R18,75', checkMode: 'auto', correctAnswer: 'R18,75', correctAnswers: ['R18.75', '18.75', 'R18,75', '18,75'], explanation: 'Totaal spandeer: 12,50 + 18,75 = 31,25.\nKleingeld: 50,00 − 31,25 = 18,75.\nAntwoord: R18,75 ✓' },
        { difficulty: 'Medium', question: 'Sipho werk 6,4 + 2,35 uit deur die getalle so op te lyn en kry 6,75:\n6,4\n+2,35\n——\nWatter fout het hy gemaak, en wat is die korrekte antwoord?', answer: 'Hy het nie die desimale kommas opgelyn nie — hy het die syfers in die verkeerde kolomme opgetel. Die korrekte antwoord is 8,75.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Tenk hou 3,25 liter. Amahle voeg 4,5 liter by, en gooi dan 2,875 liter uit om plante nat te maak. Hoeveel vloeistof bly oor in die tenk?', answer: '4,875', checkMode: 'auto', correctAnswer: '4,875', correctAnswers: ['4.875', '4,875', '4.875L', '4,875L', '4.875 L', '4,875 L', '4.875 liter', '4,875 liter'], explanation: '3,25 + 4,5 = 7,75. Dan 7,75 − 2,875 = 4,875.\nAntwoord: 4,875 liter ✓' },
        { difficulty: 'Easy', question: 'Bereken 3,15 × 10.', answer: '31,5', checkMode: 'auto', correctAnswer: '31,5', correctAnswers: ['31.5', '31,5'], explanation: 'Vermenigvuldig met 10 skuif die desimale komma 1 plek na regs.\n3,15 × 10 = 31,5 ✓' },
        { difficulty: 'Medium', question: 'Bereken 4,25 × 6.', answer: '25,5', checkMode: 'auto', correctAnswer: '25,5', correctAnswers: ['25.5', '25,5'], explanation: 'Vermenigvuldig sonder die desimale komma: 425 × 6 = 2 550.\nTel desimale plekke in die vraag: 4,25 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 2 550 → 25,50 = 25,5.\nAntwoord: 25,5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Markstalletjie verkoop lemoene teen R6,75 per kg. Wat kos 4 kg lemoene?', answer: 'R27', checkMode: 'auto', correctAnswer: 'R27', correctAnswers: ['R27', '27', 'R27.00', 'R27,00'], explanation: 'Vermenigvuldig sonder die desimale komma: 675 × 4 = 2 700.\nTel desimale plekke: 6,75 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 2 700 → 27,00 = R27.\nAntwoord: R27 ✓' },
        { difficulty: 'Medium', question: 'Verduidelik in jou eie woorde waarom die vermenigvuldiging van 3,6 met 7 ʼn antwoord met presies 1 desimale plek gee.', answer: '3,6 het 1 desimale plek, en wanneer ʼn desimaal met ʼn heelgetal vermenigvuldig word, het die antwoord dieselfde aantal desimale plekke as die desimale getal in die vraag, omdat die heelgetal geen ekstra desimale plekke bydra nie.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Bereken 9,6 ÷ 4.', answer: '2,4', checkMode: 'auto', correctAnswer: '2,4', correctAnswers: ['2.4', '2,4'], explanation: '9 ÷ 4 = 2 res 1. Bring 6 af om by die res te voeg → 16. 16 ÷ 4 = 4. Hou die desimale komma in dieselfde posisie.\nAntwoord: 2,4 ✓' },
        { difficulty: 'Hard', question: 'Lerato deel R126 gelykop tussen 8 vriende, en elke vriend spandeer dan R2,50 aan ʼn peuselhappie. Hoeveel het elke vriend oor?', answer: '13,25', checkMode: 'auto', correctAnswer: '13,25', correctAnswers: ['R13.25', '13.25', 'R13,25', '13,25'], explanation: '126 ÷ 8 = 15,75. Elke vriend kry R15,75.\n15,75 − 2,50 = 13,25.\nAntwoord: R13,25 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het desimale breuke volkome bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegplan as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'In die afstand 8,417 km, watter syfer is in die duisendstes-plek?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Vanaf die desimale komma: 4 (tiendes), 1 (honderdstes), 7 (duisendstes). Die syfer 7 is in die duisendstes-plek.' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 9 in 3,194?', answer: '0,09', checkMode: 'auto', correctAnswer: '0,09', correctAnswers: ['0.09', '0,09', '9/100'], explanation: 'Die syfer 9 is die tweede syfer na die desimale komma, in die honderdstes-plek. Sy waarde is 9/100 = 0,09.' },
        { difficulty: 'Easy', question: 'ʼn Stuk draad is 8,026 m lank. Skryf 8,026 in uitgebreide notasie.', answer: '8 + 0/10 + 2/100 + 6/1 000\nof 8 + 0,02 + 0,006', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Skryf die desimale breuk wat bestaan uit 5 ene, 0 tiendes, 7 honderdstes en 3 duisendstes.', answer: '5,073', checkMode: 'auto', correctAnswer: '5,073', correctAnswers: ['5.073', '5,073'], explanation: 'Plaas elke syfer in sy kolom: 5 ene, 0 tiendes, 7 honderdstes, 3 duisendstes → 5,073.' },
        { difficulty: 'Medium', question: 'Kagiso sê die twee 4s in die getal 6,454 het presies dieselfde waarde omdat hulle altwee die syfer 4 is. Is hy korrek? Verduidelik.', answer: 'Nee — die eerste 4 is in die tiendes-plek met waarde 0,4, en die tweede 4 is in die duisendstes-plek met waarde 0,004. Hulle het verskillende waardes omdat hulle in verskillende plekwaardeposisies is.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Twee atlete hardloop 100 m in 12,8 sekondes en 12,79 sekondes. Watter tyd is vinniger (kleiner)?', answer: '12,79 sekondes', checkMode: 'auto', correctAnswer: '12,79', correctAnswers: ['12.79', '12,79', '12.79 seconds', '12,79 sekondes', '12.79s'], explanation: 'Skryf albei met dieselfde desimale plekke: 12,80 en 12,79. Vergelyk tiendes: albei het 8 — gelyk. Vergelyk honderdstes: 0 < 9, dus 12,79 < 12,80. Die vinniger tyd is 12,79 sekondes.' },
        { difficulty: 'Medium', question: 'Orden hierdie massas van ligste na swaarste: 0,6 kg, 0,55 kg, 0,605 kg, 0,65 kg.', answer: '0,55 kg, 0,6 kg, 0,605 kg, 0,65 kg', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder vergelyk 0,9 en 0,89 deur te sê: "0,89 moet groter wees, want 89 is groter as 9." Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Vergelyk plekwaarde een syfer op ʼn slag, nie as heelgetalle nie. Skryf albei met 2 desimale plekke: 0,90 en 0,89. Vergelyk tiendes: 9 > 8, dus 0,9 > 0,89. Die leerder is verkeerd.' },
        { difficulty: 'Easy', question: 'Bereken 5,6 + 2,375.', answer: '7,975', checkMode: 'auto', correctAnswer: '7,975', correctAnswers: ['7.975', '7,975'], explanation: 'Skryf 5,6 as 5,600 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 + 5 = 5.\nHonderdstes: 0 + 7 = 7.\nTiendes: 6 + 3 = 9.\nEne: 5 + 2 = 7.\nAntwoord: 7,975 ✓' },
        { difficulty: 'Medium', question: 'Bereken 9,3 − 4,625.', answer: '4,675', checkMode: 'auto', correctAnswer: '4,675', correctAnswers: ['4.675', '4,675'], explanation: 'Skryf 9,3 as 9,300 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 − 5 → leen. Honderdstes word 9, duisendstes word 10. 10 − 5 = 5.\nHonderdstes: 9 − 2 = 7.\nTiendes: 2 − 6 → leen van ene. Tiendes word 12. 12 − 6 = 6. Ene word verminder na 8.\nEne: 8 − 4 = 4.\nAntwoord: 4,675 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakker gebruik 2,75 kg meel, 3,125 kg suiker en 1,6 kg botter vir ʼn groot bestelling. Skat die totale massa eers, en bereken dan die presiese totaal.', answer: 'Skatting: 3 + 3 + 2 = 8 kg. Presies: 2,75 + 3,125 + 1,6 = 7,475 kg, naby aan die skatting.', checkMode: 'auto', correctAnswer: '7,475', correctAnswers: ['7.475', '7,475', '7.475kg', '7,475kg', '7.475 kg', '7,475 kg'], explanation: 'Skatting: 3 + 3 + 2 = 8 kg.\nPresies: skryf almal met 3 desimale plekke: 2,750 + 3,125 + 1,600.\nDuisendstes: 0+5+0=5. Honderdstes: 5+2+0=7. Tiendes: 7+1+6=14 → skryf 4, dra 1 oor. Ene: 2+3+1+1(oorgedra)=7.\nAntwoord: 7,475 kg, naby aan die skatting van 8 kg ✓' },
        { difficulty: 'Medium', question: 'ʼn Gesin koop lugtyd ter waarde van R15,90 en ʼn brood vir R22,85. Hoeveel spandeer hulle in totaal?', answer: 'R38,75', checkMode: 'auto', correctAnswer: 'R38,75', correctAnswers: ['R38.75', '38.75', 'R38,75', '38,75'], explanation: '15,90 + 22,85 = 38,75.\nAntwoord: R38,75 ✓' },
        { difficulty: 'Medium', question: 'Naledi bereken 8,3 − 2,45 deur te skryf:\n8,3\n−2,45\n——\nen die laaste syfers regs op te lyn in plaas van die desimale kommas, en kry ʼn verkeerde antwoord. Wat moes sy gedoen het, en wat is die korrekte antwoord?', answer: 'Sy moes die desimale kommas opgelyn het, nie die laaste syfers nie, deur 8,3 as 8,30 te skryf. Die korrekte antwoord is 5,85.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Waterbottel bevat 1,5 liter. Bongani drink 0,375 liter in die oggend en 0,6 liter in die middag. Hoeveel water bly oor in die bottel?', answer: '0,525', checkMode: 'auto', correctAnswer: '0,525', correctAnswers: ['0.525', '0,525', '0.525L', '0,525L', '0.525 L', '0,525 L', '0.525 liter', '0,525 liter'], explanation: 'Totaal gedrink: 0,375 + 0,6 = 0,975. Oorblywend: 1,5 − 0,975 = 0,525.\nAntwoord: 0,525 liter ✓' },
        { difficulty: 'Easy', question: 'Bereken 2,4 × 100.', answer: '240', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240'], explanation: 'Vermenigvuldig met 100 skuif die desimale komma 2 plekke na regs.\n2,4 × 100 = 240 ✓' },
        { difficulty: 'Medium', question: 'Bereken 6,75 × 4.', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Vermenigvuldig sonder die desimale komma: 675 × 4 = 2 700.\nTel desimale plekke: 6,75 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 2 700 → 27,00 = 27.\nAntwoord: 27 ✓' },
        { difficulty: 'Medium', question: 'ʼn Vrugteverkoper verkoop waatlemoene teen R12,50 elk. Wat kos 8 waatlemoene?', answer: 'R100', checkMode: 'auto', correctAnswer: 'R100', correctAnswers: ['R100', '100', 'R100.00', 'R100,00'], explanation: 'Vermenigvuldig sonder die desimale komma: 1 250 × 8 = 10 000.\nTel desimale plekke: 12,50 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 10 000 → 100,00 = R100.\nAntwoord: R100 ✓' },
        { difficulty: 'Hard', question: 'Amahle vermenigvuldig 9,2 × 5 en kry 4,6. Is sy korrek? Wys jou werk en verduidelik enige fout.', answer: 'Nee, sy is verkeerd. Vermenigvuldig sonder die desimale komma: 92 × 5 = 460. 9,2 het 1 desimale plek, dus plaas die desimale komma 1 plek van regs af in 460 → 46,0 = 46. Die korrekte antwoord is 46. Amahle het waarskynlik gedeel in plaas van vermenigvuldig.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Bereken 45,6 ÷ 100.', answer: '0,456', checkMode: 'auto', correctAnswer: '0,456', correctAnswers: ['0.456', '0,456'], explanation: 'Deel deur 100 skuif die desimale komma 2 plekke na links.\n45,6 → 4,56 → 0,456.\nAntwoord: 0,456 ✓' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheidsorganisasie deel R184,80 gelykop tussen 8 vrywilligers vir reiskoste. Elke vrywilliger spandeer dan R2,50 aan middagete. Hoeveel het elke vrywilliger oor?', answer: '20,60', checkMode: 'auto', correctAnswer: '20,60', correctAnswers: ['R20.60', '20.60', 'R20,60', '20,60', '20.6', 'R20.6', '20,6'], explanation: '184,80 ÷ 8 = 23,10. Elke vrywilliger kry R23,10.\n23,10 − 2,50 = 20,60.\nAntwoord: R20,60 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met desimale breuke in werklike-lewe kontekste werk.' },
        { minScore: 15, message: 'Puik werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegplan, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Pakkie weeg 7,936 kg. Watter syfer is in die tiendes-plek?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Die syfer direk na die desimale komma is in die tiendes-plek. In 7,936 is daardie syfer 9.' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 2 in 0,128?', answer: '0,02', checkMode: 'auto', correctAnswer: '0,02', correctAnswers: ['0.02', '0,02', '2/100'], explanation: 'Die syfer 2 is die tweede syfer na die desimale komma, in die honderdstes-plek. Sy waarde is 2/100 = 0,02.' },
        { difficulty: 'Easy', question: 'ʼn Padteken wys ʼn afstand van 25,308 km. Skryf 25,308 in uitgebreide notasie.', answer: '20 + 5 + 3/10 + 0/100 + 8/1 000\nof 20 + 5 + 0,3 + 0,008', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Skryf die desimale breuk wat bestaan uit 12 ene, 6 tiendes, 0 honderdstes en 4 duisendstes.', answer: '12,604', checkMode: 'auto', correctAnswer: '12,604', correctAnswers: ['12.604', '12,604'], explanation: 'Plaas elke syfer in sy kolom: 12 ene, 6 tiendes, 0 honderdstes, 4 duisendstes → 12,604.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat die twee 4s in 4,044 dieselfde waarde moet hê omdat "die getal albei kere dieselfde lyk." Is dit korrek? Verduidelik.', answer: 'Nee — die eerste 4 is in die ene-plek met waarde 4, en die derde 4 is in die duisendstes-plek met waarde 0,004. Al lyk die syfer dieselfde, hang sy waarde heeltemal af van sy plekwaardeposisie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Winkel verkoop kookolie in twee groottes: 1,75 liter en 1,705 liter. Watter bottel hou meer olie?', answer: '1,75 liter', checkMode: 'auto', correctAnswer: '1,75', correctAnswers: ['1.75', '1,75', '1.75 litres', '1,75 liter', '1.75L'], explanation: 'Skryf albei met dieselfde desimale plekke: 1,750 en 1,705. Vergelyk honderdstes: 5 > 0, dus 1,75 > 1,705. Die 1,75 liter-bottel hou meer.' },
        { difficulty: 'Medium', question: 'Orden hierdie wedlooptye van vinnigste na stadigste: 15,3 s, 15,09 s, 15,36 s, 15,093 s.', answer: '15,09 s, 15,093 s, 15,3 s, 15,36 s', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer 0,05 is groter as 0,2 omdat 0,05 meer desimale plekke het, so dit lyk na ʼn "meer presiese, groter" getal. Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Die aantal desimale plekke sê niks van die grootte nie. Skryf albei met 2 desimale plekke: 0,05 en 0,20. Vergelyk tiendes: 0 < 2, dus 0,05 < 0,2. Die leerder is verkeerd.' },
        { difficulty: 'Easy', question: 'Bereken 6,8 + 3,45.', answer: '10,25', checkMode: 'auto', correctAnswer: '10,25', correctAnswers: ['10.25', '10,25'], explanation: 'Skryf 6,8 as 6,80 sodat albei getalle 2 desimale plekke het.\nHonderdstes: 0 + 5 = 5.\nTiendes: 8 + 4 = 12 — skryf 2, dra 1 oor.\nEne: 6 + 3 + 1 (oorgedra) = 10.\nAntwoord: 10,25 ✓' },
        { difficulty: 'Medium', question: 'Bereken 20,5 − 13,275.', answer: '7,225', checkMode: 'auto', correctAnswer: '7,225', correctAnswers: ['7.225', '7,225'], explanation: 'Skryf 20,5 as 20,500 sodat albei getalle 3 desimale plekke het.\nDuisendstes: 0 − 5 → leen. Honderdstes word 9, duisendstes word 10. 10 − 5 = 5.\nHonderdstes: 9 − 7 = 2.\nTiendes: 4 − 2 = 2 (tiendes verminder na 4 na die eerste leen).\nEne: 19 − 13 = 7 (ene verminder na 19 nadat daar vir die tiendes-kolom geleen is).\nAntwoord: 7,225 ✓' },
        { difficulty: 'Medium', question: 'ʼn Stapklub stap 9,5 km in die oggend en 14,25 km in die middag op ʼn 40 km-borgtogroete. Skat eers hoeveel afstand oorbly, en bereken dan die presiese afstand.', answer: 'Skatting: 40 − (10 + 14) = 16 km. Presies: 40 − (9,5 + 14,25) = 16,25 km, naby aan die skatting.', checkMode: 'auto', correctAnswer: '16,25', correctAnswers: ['16.25', '16,25', '16.25km', '16,25km', '16.25 km', '16,25 km'], explanation: 'Skatting: 9,5 + 14,25 ≈ 10 + 14 = 24, dus 40 − 24 = 16 km.\nPresies: 9,5 + 14,25 = 23,75. Dan 40 − 23,75 = 16,25.\nAntwoord: 16,25 km, naby aan die skatting van 16 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Tuinier het 2,8 kg saad. Sy koop nog 5,375 kg, en gebruik dan 3,6 kg om te plant. Hoeveel kilogram saad het sy oor?', answer: '4,575', checkMode: 'auto', correctAnswer: '4,575', correctAnswers: ['4.575', '4,575', '4.575kg', '4,575kg', '4.575 kg', '4,575 kg'], explanation: '2,8 + 5,375 = 8,175. Dan 8,175 − 3,6 = 4,575.\nAntwoord: 4,575 kg ✓' },
        { difficulty: 'Hard', question: 'Kagiso tel 0,5 + 0,75 + 0,25 op deur die getalle se laaste syfers regs op te lyn (nie die desimale kommas nie) en kry ʼn antwoord van 0,6. Watter fout het hy gemaak, en wat is die korrekte totaal?', answer: 'Hy het die laaste syfers opgelyn in plaas van die desimale kommas, wat syfers in die verkeerde plekwaardekolomme geplaas het. Die korrekte totaal is 1,5.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 0,85 × 1 000.', answer: '850', checkMode: 'auto', correctAnswer: '850', correctAnswers: ['850'], explanation: 'Vermenigvuldig met 1 000 skuif die desimale komma 3 plekke na regs.\n0,85 × 1 000 = 850 ✓' },
        { difficulty: 'Medium', question: 'Bereken 12,5 × 8.', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: 'Vermenigvuldig sonder die desimale komma: 125 × 8 = 1 000.\nTel desimale plekke: 12,5 het 1 desimale plek.\nPlaas die desimale komma 1 plek van regs af in 1 000 → 100,0 = 100.\nAntwoord: 100 ✓' },
        { difficulty: 'Medium', question: 'ʼn Vrugteverkoper verkoop spanspek teen R15,50 elk. Wat kos 6 spanspekke?', answer: 'R93', checkMode: 'auto', correctAnswer: 'R93', correctAnswers: ['R93', '93', 'R93.00', 'R93,00'], explanation: 'Vermenigvuldig sonder die desimale komma: 1 550 × 6 = 9 300.\nTel desimale plekke: 15,50 het 2 desimale plekke.\nPlaas die desimale komma 2 plekke van regs af in 9 300 → 93,00 = R93.\nAntwoord: R93 ✓' },
        { difficulty: 'Medium', question: 'Verduidelik waarom jy, wanneer jy 4,125 met 4 vermenigvuldig, 3 desimale plekke in die antwoord moet tel, al is 4 ʼn heelgetal.', answer: 'Slegs die desimale getal in die vraag bepaal hoeveel desimale plekke die antwoord het — 4,125 het 3 desimale plekke, en vermenigvuldiging met ʼn heelgetal voeg of verwyder geen desimale plekke nie, dus moet die antwoord ook 3 desimale plekke hê (16,500 = 16,5).', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Bereken 78,3 ÷ 10.', answer: '7,83', checkMode: 'auto', correctAnswer: '7,83', correctAnswers: ['7.83', '7,83'], explanation: 'Deel deur 10 skuif die desimale komma 1 plek na links.\n78,3 → 7,83.\nAntwoord: 7,83 ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool deel 15,75 kg wandelmengsel gelykop tussen 5 stapgroepe. Kontroleer jou antwoord deur dit met 5 terug te vermenigvuldig — is dit gelyk aan 15,75 kg?', answer: '3,15 kg per groep. Kontroleer: 3,15 × 5 = 15,75 kg, wat ooreenstem, dus is die antwoord korrek.', checkMode: 'auto', correctAnswer: '3,15', correctAnswers: ['3.15', '3,15', '3.15kg', '3,15kg', '3.15 kg', '3,15 kg'], explanation: '15,75 ÷ 5 = 3,15. Kontroleer deur te vermenigvuldig: 3,15 × 5 = 15,75, wat ooreenstem met die oorspronklike hoeveelheid en bevestig dat die deling korrek is.' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 4,5 ÷ 9 en kry 5, en bereken dan 45 ÷ 9 en kry ook 5. Net een hiervan kan korrek wees. Watter berekening is werklik gelyk aan 5, en wat is die korrekte antwoord vir die ander een?', answer: '45 ÷ 9 = 5 is korrek. 4,5 ÷ 9 = 0,5, wat 10 keer kleiner is omdat 4,5 10 keer kleiner is as 45.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan desimale breuke met selfvertroue op werklike-lewe probleme toepas.' },
        { minScore: 15, message: 'Puik werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}

