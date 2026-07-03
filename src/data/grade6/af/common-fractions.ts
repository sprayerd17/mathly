import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (fraction roles) ─────────────────────────────────────────
// subject            → Mathematics
// numerator          → blue   (#2563eb)
// denominator        → red    (#dc2626)
// HCF                → orange (#ea580c)
// simplified fraction→ green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — EKWIVALENTE BREUKE EN VEREENVOUDIGING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions-simplifying',
      title: 'Ekwivalente Breuke en Vereenvoudiging',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Ekwivalente breuke is breuke wat <strong>anders lyk maar dieselfde waarde het</strong>. Ons maak ekwivalente breuke deur die teller en noemer met dieselfde getal te vermenigvuldig of te deel. Om ʼn breuk te vereenvoudig, deel ons die teller en noemer deur hul <strong>Grootste Gemene Faktor</strong> totdat geen gemene faktor behalwe 1 oorbly nie. ʼn Breuk in sy eenvoudigste vorm word ʼn breuk in <strong>laagste terme</strong> genoem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde breuk')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Teller</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die boonste getal van ʼn breuk — hoeveel gelyke dele ons het.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Noemer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die onderste getal van ʼn breuk — in hoeveel gelyke dele die geheel verdeel is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">GGF (Grootste Gemene Faktor)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste faktor wat deur twee getalle gedeel word — ons deel hierdeur om in een stap te vereenvoudig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Laagste terme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Breuk is in laagste terme wanneer die enigste gemene faktor van die teller en noemer 1 is.</p>` +
        `</div>` +

        `</div>` +

        // ── Making equivalent fractions ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Maak van ekwivalente breuke</p>` +
        `<p style="margin-bottom:12px;">Vermenigvuldig <strong>of</strong> deel beide die ${bl('teller')} en die ${re('noemer')} deur die <strong>dieselfde getal</strong>. Die waarde van die breuk verander nie, want jy vermenigvuldig met ʼn vorm van 1.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Oorspronklik</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('2')}/${re('3')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×2 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 2</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('4')}/${re('6')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×3 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 3</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('6')}/${re('9')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.3em;font-weight:300;">⟶ ×4 ⟶</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">× 4</p>` +
        `<p style="font-size:1.25em;font-weight:700;color:#374151;margin:0;">${bl('8')}/${re('12')}</p>` +
        `</div>` +
        `</div>` +

        // ── Simplifying tip box ──────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig: deel altyd deur die GGF</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vind die ${or('GGF')} van die ${bl('teller')} en ${re('noemer')}. Deel beide deur die ${or('GGF')} en jy bereik die ${gr('vereenvoudigde breuk')} in een stap — geen behoefte om herhaaldelik met kleiner faktore te vereenvoudig nie.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Write three equivalent fractions for 2/3 ──────────────
        {
          question: 'Skryf drie breuke wat ekwivalent is aan 2/3.',
          answer: `${bl('2')}/${re('3')} = ${bl('4')}/${re('6')} = ${bl('6')}/${re('9')} = ${bl('8')}/${re('12')}`,
          steps: [
            `Vermenigvuldig beide die ${bl('teller')} en ${re('noemer')} met 2: ${bl('2')} × 2 = ${bl('4')}, ${re('3')} × 2 = ${re('6')}. Eerste ekwivalente breuk: ${bl('4')}/${re('6')}.`,
            `Vermenigvuldig beide met 3: ${bl('2')} × 3 = ${bl('6')}, ${re('3')} × 3 = ${re('9')}. Tweede ekwivalente breuk: ${bl('6')}/${re('9')}.`,
            `Vermenigvuldig beide met 4: ${bl('2')} × 4 = ${bl('8')}, ${re('3')} × 4 = ${re('12')}. Derde ekwivalente breuk: ${bl('8')}/${re('12')}.`,
            `Die breuke ${bl('2')}/${re('3')}, ${bl('4')}/${re('6')}, ${bl('6')}/${re('9')} en ${bl('8')}/${re('12')} is almal ekwivalent. ✓`,
          ],
        },
        // ── Example 2: Simplify 36/48 ────────────────────────────────────────
        {
          question: 'Vereenvoudig 36/48.',
          answer: `${bl('36')}/${re('48')} vereenvoudig = ${gr('3')}/${gr('4')}`,
          steps: [
            `Vind die ${or('GGF')} van ${bl('36')} en ${re('48')}. Lys die faktore van elke getal.`,
            `Faktore van ${bl('36')}: 1, 2, 3, 4, 6, 9, 12, 18, 36.`,
            `Faktore van ${re('48')}: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.`,
            `${or('GGF')} = ${or('12')} (die grootste faktor wat in albei lyste voorkom).`,
            `Deel beide deur ${or('12')}: ${bl('36')} ÷ ${or('12')} = ${bl('3')}, ${re('48')} ÷ ${or('12')} = ${re('4')}.`,
            `Vereenvoudigde breuk = ${gr('3')}/${gr('4')}. ✓`,
          ],
        },
        // ── Example 3: Sipho says 15/25 simplified is 3/5. Is he correct? ────
        {
          question: 'Sipho sê 15/25 vereenvoudig is 3/5. Is hy korrek?',
          answer: `Ja, Sipho is korrek — ${bl('15')}/${re('25')} = ${gr('3')}/${gr('5')}`,
          steps: [
            `Vind die ${or('GGF')} van ${bl('15')} en ${re('25')}. Lys die faktore van elke getal.`,
            `Faktore van ${bl('15')}: 1, 3, 5, 15.`,
            `Faktore van ${re('25')}: 1, 5, 25.`,
            `${or('GGF')} = ${or('5')} (die grootste gedeelde faktor).`,
            `Deel beide deur ${or('5')}: ${bl('15')} ÷ ${or('5')} = ${bl('3')}, ${re('25')} ÷ ${or('5')} = ${re('5')}.`,
            `Vereenvoudigde breuk = ${gr('3')}/${gr('5')}. Ja, Sipho is korrek. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat breukstrokies vir 2/3, 4/6, 6/9 en 8/12 langs mekaar as gelyke lengtes wys, saam met ʼn faktorlys vir 36 en 48 met die GGF in oranje uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ekwivalente breuke te genereer deur te vermenigvuldig en hoe om ʼn breuk tot laagste terme te vereenvoudig deur die Grootste Gemene Faktor te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions',
      title: 'Vergelyk en Orden Breuke',
      icon: '<',
      explanation:
        `<p style="margin-bottom:16px;">Om breuke te vergelyk het ons ʼn <strong>gemene noemer</strong> nodig. Die gemene noemer is die <strong>LGV</strong> van die noemers. Sodra breuke dieselfde noemer het, vergelyk ons die tellers — ʼn groter teller beteken ʼn groter breuk. Om breuke te orden, skakel ons hulle almal om na ekwivalente breuke met dieselfde noemer en orden dan die tellers. Ons kan breuke ook na desimale omskakel om hulle te vergelyk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LGV')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omgeskakelde breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Gemene Noemer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Gedeelde ${re('noemer')} vir twee of meer breuke. Ons het een nodig voordat ons die tellers regverdig kan vergelyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">LGV (Laagste Gemene Veelvoud)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste getal wat ʼn veelvoud van al die ${re('noemers')} is. Dit word die ${or('gemene noemer')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ekwivalente Omskakeling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die teller en noemer met dieselfde getal sodat die breuk sy waarde behou maar nou die ${or('LGV')} as sy ${re('noemer')} het.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vergelyk tellers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sodra al die breuke dieselfde ${re('noemer')} deel, is die breuk met die groter teller die ${gr('groter breuk')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Step-by-step method ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: vergelyk en orden breuke</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind die ${or('LGV')}</strong> van al die ${re('noemers')} — dit is jou gemene noemer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skakel om</strong> elke breuk na ʼn ${bl('ekwivalente breuk')} met die ${or('LGV')} as sy ${re('noemer')}. Vermenigvuldig die bo- en onderkant met dieselfde getal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die tellers</strong> en skryf jou ${gr('antwoord')} met die oorspronklike breuke.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige wenk: desimale metode</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy kan breuke ook vergelyk deur die teller deur die ${re('noemer')} te deel om ʼn desimaal te kry. Die breuk met die groter desimale waarde is die groter breuk. Dit is nuttig vir ʼn vinnige toets, maar wys altyd die ${or('LGV')}-metode in jou werk.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: Which is greater — 3/4 or 5/7? ────────────────────────
        {
          question: 'Watter is groter — 3/4 of 5/7?',
          answer: `${gr('3/4 > 5/7')}`,
          steps: [
            `Vind die ${or('LGV')} van ${re('4')} en ${re('7')}. Aangesien 4 en 7 geen gemene faktore deel nie, ${or('LGV')} = ${or('4 × 7')} = ${or('28')}.`,
            `Skakel ${bl('3/4')} om: vermenigvuldig bo en onder met 7 → ${bl('3 × 7')} / ${re('4 × 7')} = ${bl('21')}/${bl('28')}.`,
            `Skakel ${bl('5/7')} om: vermenigvuldig bo en onder met 4 → ${bl('5 × 4')} / ${re('7 × 4')} = ${bl('20')}/${bl('28')}.`,
            `Vergelyk die tellers: ${bl('21')} > ${bl('20')}, dus ${bl('21/28')} > ${bl('20/28')}.`,
            `<strong>${gr('Antwoord:')} 3/4 > 5/7</strong> ✓`,
          ],
        },
        // ── Example 5: Order fractions from smallest to biggest ───────────────
        {
          question: 'Orden hierdie breuke van kleinste na grootste — 2/3, 3/4, 5/6, 1/2.',
          answer: `${gr('1/2 < 2/3 < 3/4 < 5/6')}`,
          steps: [
            `Vind die ${or('LGV')} van ${re('3')}, ${re('4')}, ${re('6')} en ${re('2')}. Veelvoude van 6: 6, 12, 18 … ${or('LGV')} = ${or('12')}.`,
            `Skakel elke breuk om na ʼn ekwivalente breuk met ${re('noemer')} ${re('12')}:`,
            `${bl('2/3')} = ${bl('2 × 4')} / ${re('3 × 4')} = ${bl('8/12')}. &nbsp; ${bl('3/4')} = ${bl('3 × 3')} / ${re('4 × 3')} = ${bl('9/12')}. &nbsp; ${bl('5/6')} = ${bl('5 × 2')} / ${re('6 × 2')} = ${bl('10/12')}. &nbsp; ${bl('1/2')} = ${bl('1 × 6')} / ${re('2 × 6')} = ${bl('6/12')}.`,
            `Orden die tellers van kleinste na grootste: 6, 8, 9, 10.`,
            `<strong>${gr('Antwoord:')} 1/2 &lt; 2/3 &lt; 3/4 &lt; 5/6</strong> ✓`,
          ],
        },
        // ── Example 6: Lerato and Amahle pizza ───────────────────────────────
        {
          question: 'Lerato het 2/5 van ʼn pizza geëet en Amahle 3/8. Wie het meer geëet?',
          answer: `${gr('Lerato het meer geëet')}`,
          steps: [
            `Vind die ${or('LGV')} van ${re('5')} en ${re('8')}. Aangesien 5 en 8 geen gemene faktore deel nie, ${or('LGV')} = ${or('5 × 8')} = ${or('40')}.`,
            `Skakel ${bl('2/5')} om: vermenigvuldig bo en onder met 8 → ${bl('2 × 8')} / ${re('5 × 8')} = ${bl('16/40')}.`,
            `Skakel ${bl('3/8')} om: vermenigvuldig bo en onder met 5 → ${bl('3 × 5')} / ${re('8 × 5')} = ${bl('15/40')}.`,
            `Vergelyk: ${bl('16/40')} > ${bl('15/40')}, dus 2/5 > 3/8.`,
            `<strong>${gr('Antwoord:')} Lerato het meer geëet.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn van 0 tot 1 wat 1/2, 2/3, 3/4 en 5/6 in volgorde toon met hul ekwivalente twaalfdes onder elke breuk aangedui" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om breuke te vergelyk en te orden deur die LGV van die noemers te vind en na ekwivalente breuke om te skakel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPTEL EN AFTREK VAN BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-fractions',
      title: 'Optel en Aftrek van Breuke',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">Om breuke op te tel of af te trek het ons ʼn <strong>gemene noemer</strong> nodig. Vind die <strong>LGV</strong> van die noemers en skakel elke breuk om na ʼn ekwivalente breuk met daardie noemer. Tel dan die tellers op of trek hulle af en hou die noemer dieselfde. As die antwoord ʼn onegte breuk is, skakel dit om na ʼn gemengde getal. Vereenvoudig jou antwoord altyd waar moontlik.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LGV')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omgeskakelde breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tellerberekening')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale antwoord')}</span>` +
        `</div>` +

        // ── Method steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: optel en aftrek van breuke</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind die ${or('LGV')}</strong> van die noemers — dit word jou gemene noemer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skakel om</strong> elke breuk na ʼn ${bl('ekwivalente breuk')} met die ${or('LGV')} as noemer. Vermenigvuldig die teller en noemer met dieselfde getal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Tel die tellers op of trek hulle af')}</strong> — hou die noemer dieselfde. Moet nooit die noemers optel nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Skryf jou finale antwoord')}</strong>. As dit ʼn onegte breuk is, skakel dit om na ʼn gemengde getal. Vereenvoudig altyd waar moontlik.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onegte breuke en gemengde getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jou antwoord ʼn teller groter as die noemer het, is dit ʼn <strong>onegte breuk</strong>. Deel die teller deur die noemer: die kwosiënt is die heelgetaldeel en die res oor die noemer is die breukdeel. Byvoorbeeld: 19/12 = 1 res 7 → <strong>1 en 7/12</strong>.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Calculate 1/4 + 2/3 ───────────────────────────────────
        {
          question: 'Bereken 1/4 + 2/3.',
          answer: `${re('1/4 + 2/3 = 11/12')}`,
          steps: [
            `Vind die ${or('LGV')} van ${or('4')} en ${or('3')}. Die ${or('LGV')} = ${or('12')}.`,
            `Skakel ${bl('1/4')} om: vermenigvuldig bo en onder met 3 → ${bl('1 × 3')}/${bl('4 × 3')} = ${bl('3/12')}.`,
            `Skakel ${bl('2/3')} om: vermenigvuldig bo en onder met 4 → ${bl('2 × 4')}/${bl('3 × 4')} = ${bl('8/12')}.`,
            `${gr('Tel die tellers op:')} ${gr('3 + 8')} = ${gr('11')}. Hou die noemer: ${gr('11')}/12.`,
            `<strong>${re('Antwoord:')} ${re('11/12')}</strong> (reeds in eenvoudigste vorm) ✓`,
          ],
        },
        // ── Example 8: Calculate 5/6 − 1/4 ───────────────────────────────────
        {
          question: 'Bereken 5/6 − 1/4.',
          answer: `${re('5/6 − 1/4 = 7/12')}`,
          steps: [
            `Vind die ${or('LGV')} van ${or('6')} en ${or('4')}. Veelvoude van 6: 6, 12 … Veelvoude van 4: 4, 8, 12 … ${or('LGV')} = ${or('12')}.`,
            `Skakel ${bl('5/6')} om: vermenigvuldig bo en onder met 2 → ${bl('5 × 2')}/${bl('6 × 2')} = ${bl('10/12')}.`,
            `Skakel ${bl('1/4')} om: vermenigvuldig bo en onder met 3 → ${bl('1 × 3')}/${bl('4 × 3')} = ${bl('3/12')}.`,
            `${gr('Trek die tellers af:')} ${gr('10 − 3')} = ${gr('7')}. Hou die noemer: ${gr('7')}/12.`,
            `<strong>${re('Antwoord:')} ${re('7/12')}</strong> (reeds in eenvoudigste vorm) ✓`,
          ],
        },
        // ── Example 9: Calculate 3/4 + 5/6 ───────────────────────────────────
        {
          question: 'Bereken 3/4 + 5/6.',
          answer: `${re('3/4 + 5/6 = 19/12 = 1 en 7/12')}`,
          steps: [
            `Vind die ${or('LGV')} van ${or('4')} en ${or('6')}. Veelvoude van 4: 4, 8, 12 … Veelvoude van 6: 6, 12 … ${or('LGV')} = ${or('12')}.`,
            `Skakel ${bl('3/4')} om: vermenigvuldig bo en onder met 3 → ${bl('3 × 3')}/${bl('4 × 3')} = ${bl('9/12')}.`,
            `Skakel ${bl('5/6')} om: vermenigvuldig bo en onder met 2 → ${bl('5 × 2')}/${bl('6 × 2')} = ${bl('10/12')}.`,
            `${gr('Tel die tellers op:')} ${gr('9 + 10')} = ${gr('19')}. Hou die noemer: ${gr('19')}/12.`,
            `19/12 is ʼn onegte breuk. Skakel om na ʼn gemengde getal: 19 ÷ 12 = 1 res 7. Dus 19/12 = 1 en 7/12.`,
            `<strong>${re('Antwoord:')} ${re('1 en 7/12')}</strong> ✓`,
          ],
        },
        // ── Example 10: Sipho's water bottles ────────────────────────────────
        {
          question: 'Sipho drink 2/3 van ʼn bottel water in die oggend en 3/8 van ʼn bottel in die middag. Hoeveel drink hy altesaam?',
          answer: `${re('Sipho drink 1 en 1/24 bottels water altesaam')}`,
          steps: [
            `Vind die ${or('LGV')} van ${or('3')} en ${or('8')}. Aangesien 3 en 8 geen gemene faktore deel nie, ${or('LGV')} = ${or('3 × 8')} = ${or('24')}.`,
            `Skakel ${bl('2/3')} om: vermenigvuldig bo en onder met 8 → ${bl('2 × 8')}/${bl('3 × 8')} = ${bl('16/24')}.`,
            `Skakel ${bl('3/8')} om: vermenigvuldig bo en onder met 3 → ${bl('3 × 3')}/${bl('8 × 3')} = ${bl('9/24')}.`,
            `${gr('Tel die tellers op:')} ${gr('16 + 9')} = ${gr('25')}. Hou die noemer: ${gr('25')}/24.`,
            `25/24 is ʼn onegte breuk. Skakel om: 25 ÷ 24 = 1 res 1. Dus 25/24 = 1 en 1/24.`,
            `<strong>${re('Antwoord:')} Sipho drink ${re('1 en 1/24')} bottels water altesaam.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat breukstawe vir 1/4 en 2/3 omgeskakel na twaalfdes en gekombineer wys om 11/12 te gee met LGV in oranje uitgelig omgeskakelde breuke in blou en resultaat in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap vir stap wys hoe om breuke op te tel en af te trek deur die LGV te vind na ekwivalente breuke om te skakel en tellers op te tel of af te trek" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — GEMENGDE GETALLE EN ONEGTE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-numbers-improper-fractions',
      title: 'Gemengde Getalle en Onegte Breuke',
      icon: '⅔',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Gemengde getal</strong> het ʼn ${bl('heelgetal')}deel en ʼn breukdeel — byvoorbeeld ${bl('2')} en ${or('3')}/${re('4')}. ʼn <strong>Onegte breuk</strong> het ʼn ${or('teller')} groter as die ${re('noemer')} — byvoorbeeld ${gr('11')}/${re('4')}. Om ʼn gemengde getal na ʼn onegte breuk om te skakel, vermenigvuldig die ${bl('heelgetal')} met die ${re('noemer')} en tel die ${or('teller')} by — hou dieselfde ${re('noemer')}. Om ʼn onegte breuk na ʼn gemengde getal om te skakel, deel die ${or('teller')} deur die ${re('noemer')} — die kwosiënt is die ${bl('heelgetal')} en die res is die nuwe ${or('teller')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('heelgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teller')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('onegte breuk')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gemengde Getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met ʼn ${bl('heelgetal')}deel en ʼn breukdeel — byvoorbeeld ${bl('2')} en ${or('3')}/${re('4')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Onegte Breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Breuk waar die ${or('teller')} groter as of gelyk aan die ${re('noemer')} is — byvoorbeeld ${gr('11')}/${re('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: mixed number → improper fraction ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: gemengde getal → onegte breuk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vermenigvuldig</strong> die ${bl('heelgetal')} met die ${re('noemer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel</strong> die ${or('teller')} by daardie produk.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hou</strong> dieselfde ${re('noemer')} — dit is die ${re('noemer')} van die ${gr('onegte breuk')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: improper fraction → mixed number ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: onegte breuk → gemengde getal</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Deel</strong> die ${or('teller')} deur die ${re('noemer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Die <strong>kwosiënt</strong> is die ${bl('heelgetal')}deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die <strong>res</strong> word die nuwe ${or('teller')} — hou dieselfde ${re('noemer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Optel van gemengde getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy gemengde getalle optel of aftrek, skakel hulle eers om na ${gr('onegte breuke')}, vind ʼn gemene ${re('noemer')}, tel die ${or('tellers')} op of trek hulle af, en skakel dan die resultaat terug na ʼn gemengde getal.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 11: Convert 3 and 2/5 to an improper fraction ────────────
        {
          question: 'Skakel 3 en 2/5 om na ʼn onegte breuk.',
          answer: `${bl('3')} en ${or('2')}/${re('5')} = ${gr('17')}/${re('5')}`,
          steps: [
            `Vermenigvuldig die ${bl('heelgetal')} met die ${re('noemer')}: ${bl('3')} × ${re('5')} = ${bl('15')}.`,
            `Tel die ${or('teller')} by: ${bl('15')} + ${or('2')} = ${gr('17')}.`,
            `Hou dieselfde ${re('noemer')}: ${re('5')}.`,
            `<strong>Antwoord: ${gr('17')}/${re('5')}</strong> ✓`,
          ],
        },

        // ── Example 12: Convert 23/6 to a mixed number ───────────────────────
        {
          question: 'Skakel 23/6 om na ʼn gemengde getal.',
          answer: `${gr('23')}/${re('6')} = ${bl('3')} en ${or('5')}/${re('6')}`,
          steps: [
            `Deel ${or('23')} deur ${re('6')}.`,
            `${re('6')} gaan drie keer in ${or('23')}: ${bl('3')} × ${re('6')} = 18.`,
            `Res: ${or('23')} − 18 = ${or('5')}.`,
            `<strong>Antwoord: ${bl('3')} en ${or('5')}/${re('6')}</strong> ✓`,
          ],
        },

        // ── Example 13: Calculate 2 and 1/3 + 1 and 3/4 ─────────────────────
        {
          question: 'Bereken 2 en 1/3 + 1 en 3/4.',
          answer: `${bl('2')} en ${or('1')}/${re('3')} + ${bl('1')} en ${or('3')}/${re('4')} = ${bl('4')} en ${or('1')}/${re('12')}`,
          steps: [
            `Skakel om na ${gr('onegte breuke')}: ${bl('2')} en ${or('1')}/${re('3')} = (${bl('2')} × ${re('3')} + ${or('1')})/${re('3')} = ${gr('7')}/${re('3')}. &nbsp; ${bl('1')} en ${or('3')}/${re('4')} = (${bl('1')} × ${re('4')} + ${or('3')})/${re('4')} = ${gr('7')}/${re('4')}.`,
            `LGV van ${re('3')} en ${re('4')} = ${re('12')}.`,
            `${gr('7')}/${re('3')} = ${or('28')}/${re('12')}. &nbsp; ${gr('7')}/${re('4')} = ${or('21')}/${re('12')}.`,
            `Tel op: ${or('28')} + ${or('21')} = ${or('49')}. &nbsp; Resultaat: ${gr('49')}/${re('12')}.`,
            `Skakel terug om: ${or('49')} ÷ ${re('12')} = ${bl('4')} res ${or('1')}.`,
            `<strong>Antwoord: ${bl('4')} en ${or('1')}/${re('12')}</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — mixed number to improper fraction ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 2 en 3/4 om na ʼn onegte breuk.',
          answer: '11/4',
          checkMode: 'auto',
          correctAnswer: '11/4',
          explanation: 'Stap 1: Vermenigvuldig die heelgetal met die noemer: 2 × 4 = 8.\nStap 2: Tel die teller by: 8 + 3 = 11.\nStap 3: Hou dieselfde noemer: 4.\nAntwoord: 11/4 ✓',
        },

        // ── Q2 Medium — convert both directions ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel elk van die volgende om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel 17/5 om na ʼn gemengde getal',
              correctAnswer: '3 and 2/5',
              correctAnswers: ['3 and 2/5', '3 2/5'],
              explanation: 'Deel 17 deur 5: 5 gaan drie keer in 17 (3 × 5 = 15). Res: 17 − 15 = 2.\nAntwoord: 3 en 2/5 ✓',
            },
            {
              label: 'b) Skakel 3 en 5/6 om na ʼn onegte breuk',
              correctAnswer: '23/6',
              explanation: 'Vermenigvuldig: 3 × 6 = 18. Tel die teller by: 18 + 5 = 23. Hou die noemer: 6.\nAntwoord: 23/6 ✓',
            },
          ],
        },

        // ── Q3 Hard — add mixed numbers ──────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 3 en 1/2 + 2 en 2/3. Skryf jou antwoord as ʼn gemengde getal.',
          answer: '6 and 1/6',
          checkMode: 'auto',
          correctAnswer: '6 and 1/6',
          correctAnswers: ['6 and 1/6', '6 1/6'],
          explanation: 'Skakel om: 3 en 1/2 = 7/2. 2 en 2/3 = 8/3.\nLGV van 2 en 3 = 6.\n7/2 = 21/6. 8/3 = 16/6.\nTel op: 21 + 16 = 37/6.\nSkakel terug om: 37 ÷ 6 = 6 res 1.\nAntwoord: 6 en 1/6 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat die omskakeling van 3 en 2/5 na 17/5 wys met heelgetal in blou teller in oranje noemer in rooi en onegte breuk in groen saam met die omgekeerde omskakeling van 23/6 na 3 en 5/6" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen gemengde getalle en onegte breuke om te skakel en hoe om gemengde getalle op te tel deur eers na onegte breuke om te skakel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VERMENIGVULDIGING VAN BREUKE EN BREUKE VAN HEELGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-fractions',
      title: 'Vermenigvuldiging van Breuke en Breuke van Heelgetalle',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Om <strong>ʼn breuk met ʼn heelgetal te vermenigvuldig</strong>, vermenigvuldig ons die ${bl('teller')} met die heelgetal en hou die ${re('noemer')} dieselfde. Om <strong>ʼn breuk van ʼn heelgetal te vind</strong>, vermenigvuldig ons die breuk met die heelgetal — dit is dieselfde as om deur die ${re('noemer')} te deel en met die ${bl('teller')} te vermenigvuldig. Om <strong>ʼn breuk met ʼn breuk te vermenigvuldig</strong>, vermenigvuldig ons die ${bl('tellers')} saam en vermenigvuldig die ${re('noemers')} saam, en ${or('vereenvoudig')} dan.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tellervermenigvuldiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('noemer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vereenvoudiging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Three methods ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie metodes om breuke te vermenigvuldig</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Breuk × Heelgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Vermenigvuldig die teller')} met die heelgetal. Hou die ${re('noemer')} dieselfde. ${or('Vereenvoudig')} die resultaat.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 3/4 × 8 = ${bl('24')}/${re('4')} = ${gr('6')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Breuk van ʼn Heelgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">"Van" beteken vermenigvuldig. Deel eers deur die ${re('noemer')}, ${bl('vermenigvuldig dan met die teller')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 2/5 van 45 → 45 ÷ ${re('5')} = 9, ${bl('9 × 2')} = ${gr('18')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Breuk × Breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Vermenigvuldig tellers')} saam. ${re('Vermenigvuldig noemers')} saam. ${or('Vereenvoudig')} die resultaat.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 2/3 × 3/4 = ${bl('6')}/${re('12')} = ${gr('1/2')}</p>` +
        `</div>` +

        `</div>` +

        // ── Method steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode: breuk × breuk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig die tellers')} — die boonste getalle wat saam vermenigvuldig word, word die nuwe teller.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Vermenigvuldig die noemers')} — die onderste getalle wat saam vermenigvuldig word, word die nuwe noemer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vereenvoudig')} die resulterende breuk deur die teller en noemer deur hul GGF te deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Skryf die finale antwoord')}</strong> in sy eenvoudigste vorm.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">"Van" beteken altyd vermenigvuldig</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy die woord <strong>"van"</strong> tussen ʼn breuk en ʼn getal sien, vervang dit met ʼn vermenigvuldigingsteken. Om <strong>2/5 van 45</strong> te vind is presies dieselfde as om <strong>2/5 × 45</strong> te bereken. Jy kan ook eers deur die ${re('noemer')} deel en dan ${bl('met die teller vermenigvuldig')} — albei metodes gee dieselfde antwoord.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 14: 3/4 × 8 ──────────────────────────────────────────────
        {
          question: 'Bereken 3/4 × 8.',
          answer: `3/${re('4')} × 8 = ${gr('6')}`,
          steps: [
            `${bl('Vermenigvuldig die teller met 8:')} ${bl('3')} × 8 = ${bl('24')}.`,
            `Hou die ${re('noemer:')} ${bl('24')}/${re('4')}.`,
            `${or('Vereenvoudig:')} ${bl('24')} ÷ ${re('4')} = ${or('6')}.`,
            `<strong>${gr('Antwoord:')} ${gr('6')}</strong> ✓`,
          ],
        },

        // ── Example 15: 2/5 of 45 ────────────────────────────────────────────
        {
          question: 'Vind 2/5 van 45.',
          answer: `${bl('2')}/${re('5')} van 45 = ${gr('18')}`,
          steps: [
            `"Van" beteken vermenigvuldig: ${bl('2')}/${re('5')} × 45.`,
            `${bl('Vermenigvuldig die teller met 45:')} ${bl('2')} × 45 = ${bl('90')}.`,
            `Deel deur die ${re('noemer:')} ${bl('90')} ÷ ${re('5')} = ${or('18')}.`,
            `<strong>${gr('Antwoord:')} ${gr('18')}</strong> ✓`,
          ],
        },

        // ── Example 16: 2/3 × 3/4 ────────────────────────────────────────────
        {
          question: 'Bereken 2/3 × 3/4.',
          answer: `${bl('2')}/${re('3')} × ${bl('3')}/${re('4')} = ${gr('1/2')}`,
          steps: [
            `${bl('Vermenigvuldig die tellers:')} ${bl('2')} × ${bl('3')} = ${bl('6')}.`,
            `${re('Vermenigvuldig die noemers:')} ${re('3')} × ${re('4')} = ${re('12')}.`,
            `Resultaat: ${bl('6')}/${re('12')}.`,
            `${or('Vereenvoudig')} deur deur die GGF van ${or('6')} te deel: ${bl('6')} ÷ ${or('6')} = 1, ${re('12')} ÷ ${or('6')} = 2.`,
            `<strong>${gr('Antwoord:')} ${gr('1/2')}</strong> ✓`,
          ],
        },

        // ── Example 17: Lerato's beads ────────────────────────────────────────
        {
          question: 'Lerato het 360 krale. Sy gebruik 5/8 daarvan vir ʼn halssnoer. Hoeveel krale gebruik sy?',
          answer: `${gr('Lerato gebruik 225 krale')}`,
          steps: [
            `Vind ${bl('5')}/${re('8')} van 360.`,
            `Deel deur die ${re('noemer:')} 360 ÷ ${re('8')} = ${or('45')}.`,
            `${bl('Vermenigvuldig met die teller:')} ${or('45')} × ${bl('5')} = ${gr('225')}.`,
            `<strong>${gr('Antwoord:')} Lerato gebruik ${gr('225')} krale.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat breukvermenigvuldiging vir 2/3 maal 3/4 wys met tellers vermenigvuldig in blou noemers vermenigvuldig in rooi die onvereenvoudigde resultaat 6/12 en die vereenvoudigde antwoord 1/2 in groen met GGF in oranje uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn breuk met ʼn heelgetal te vermenigvuldig ʼn breuk van ʼn heelgetal te vind en ʼn breuk met ʼn breuk te vermenigvuldig met vereenvoudiging" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — simplify 12/16 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig 12/16.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'GGF van 12 en 16 is 4.\n12 ÷ 4 = 3. 16 ÷ 4 = 4.\nAntwoord: 3/4 ✓',
    },

    // ── Q2 Easy — simplify 24/36 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig 24/36.',
      answer: '2/3',
      checkMode: 'auto',
      correctAnswer: '2/3',
      explanation: 'GGF van 24 en 36 is 12.\n24 ÷ 12 = 2. 36 ÷ 12 = 3.\nAntwoord: 2/3 ✓',
    },

    // ── Q3 Medium — three equivalent fractions for 3/5 ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf drie breuke wat ekwivalent is aan 3/5.',
      answer: 'Enige drie korrekte ekwivalente breuke soos 6/10, 9/15, 12/20.',
      checkMode: 'self',
    },

    // ── Q4 Hard — Sipho's simplification check ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho vereenvoudig 42/56 en kry 6/8. Is dit ten volle vereenvoudig? Verduidelik.',
      answer: 'Nee — 6/8 kan verder vereenvoudig word. GGF van 6 en 8 is 2. 6/8 = 3/4. Die ten volle vereenvoudigde antwoord is 3/4.',
      checkMode: 'self',
    },

    // ── Q5 Easy — compare 3/5 and 5/8 ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter is groter — 3/5 of 5/8?',
      answer: '3/5',
      checkMode: 'auto',
      correctAnswer: '3/5',
      explanation: 'LGV van 5 en 8 = 40.\n3/5 = 24/40. 5/8 = 25/40.\nAangesien 24 < 25, 3/5 < 5/8.',
    },

    // ── Q6 Medium — order four fractions ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Orden van kleinste na grootste — 1/2, 2/5, 3/4, 7/10.',
      answer: 'LGV = 20. 1/2 = 10/20, 2/5 = 8/20, 3/4 = 15/20, 7/10 = 14/20. Volgorde: 2/5, 1/2, 7/10, 3/4.',
      checkMode: 'self',
    },

    // ── Q7 Easy — 1/3 + 1/4 ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 1/3 + 1/4.',
      answer: '7/12',
      checkMode: 'auto',
      correctAnswer: '7/12',
      explanation: 'LGV van 3 en 4 = 12.\n1/3 = 4/12. 1/4 = 3/12.\n4/12 + 3/12 = 7/12 ✓',
    },

    // ── Q8 Medium — 5/6 − 3/8 ────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 5/6 − 3/8.',
      answer: '11/24',
      checkMode: 'auto',
      correctAnswer: '11/24',
      explanation: 'LGV van 6 en 8 = 24.\n5/6 = 20/24. 3/8 = 9/24.\n20/24 − 9/24 = 11/24 ✓',
    },

    // ── Q9 Hard — fraction addition word problem ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle spandeer 1/3 van haar sakgeld aan lekkers en 2/5 aan ʼn boek. Watter breuk het sy altesaam spandeer?',
      answer: '11/15',
      checkMode: 'auto',
      correctAnswer: '11/15',
      explanation: 'LGV van 3 en 5 = 15.\n1/3 = 5/15. 2/5 = 6/15.\n5/15 + 6/15 = 11/15 ✓',
    },

    // ── Q10 Easy — mixed number to improper fraction ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skakel 2 en 3/4 om na ʼn onegte breuk.',
      answer: '11/4',
      checkMode: 'auto',
      correctAnswer: '11/4',
      explanation: 'Vermenigvuldig die heelgetal met die noemer: 2 × 4 = 8.\nTel die teller by: 8 + 3 = 11.\nHou die noemer: 4.\nAntwoord: 11/4 ✓',
    },

    // ── Q11 Medium — improper fraction to mixed number ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skakel 31/7 om na ʼn gemengde getal.',
      answer: '4 en 3/7',
      checkMode: 'auto',
      correctAnswer: '4 and 3/7',
      correctAnswers: ['4 and 3/7', '4 3/7'],
      explanation: 'Deel 31 deur 7: 7 × 4 = 28. Res: 31 − 28 = 3.\nAntwoord: 4 en 3/7 ✓',
    },

    // ── Q12 Hard — add mixed numbers ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 1 en 2/3 + 2 en 3/4.',
      answer: '4 en 5/12',
      checkMode: 'auto',
      correctAnswer: '4 and 5/12',
      correctAnswers: ['4 and 5/12', '4 5/12'],
      explanation: 'Skakel om: 1 en 2/3 = 5/3. 2 en 3/4 = 11/4.\nLGV van 3 en 4 = 12.\n5/3 = 20/12. 11/4 = 33/12.\n20/12 + 33/12 = 53/12.\n53 ÷ 12 = 4 res 5.\nAntwoord: 4 en 5/12 ✓',
    },

    // ── Q13 Easy — fraction × whole number ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 3/5 × 10.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Vermenigvuldig die teller: 3 × 10 = 30.\nDeel deur die noemer: 30 ÷ 5 = 6.\nAntwoord: 6 ✓',
    },

    // ── Q14 Medium — fraction of a whole number ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind 3/4 van 96.',
      answer: '72',
      checkMode: 'auto',
      correctAnswer: '72',
      explanation: 'Deel deur die noemer: 96 ÷ 4 = 24.\nVermenigvuldig met die teller: 24 × 3 = 72.\nAntwoord: 72 ✓',
    },

    // ── Q15 Hard — fractions of a whole word problem ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo het 480 albasters. Hy gee 3/8 vir Sipho en 1/4 vir Lerato. Hoeveel albasters het hy oor?',
      answer: '3/8 van 480 = 180. 1/4 van 480 = 120. Totaal weggegee = 180 + 120 = 300. Oor = 480 − 300 = 180 albasters.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van breuke.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
