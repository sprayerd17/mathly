import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ───────────────────────────────────────
// rows / first branch / predicted frequency → blue   (#2563eb)
// columns / second branch / explanation     → green  (#16a34a)
// favourable outcomes / combined prob / actual frequency → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TWO-WAY TABLES FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'two-way-tables-compound-events',
      title: 'Tweerigting-tabelle vir Saamgestelde Gebeurtenisse',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Saamgestelde gebeurtenis</strong> behels twee of meer gebeurtenisse wat saam plaasvind. ʼn <strong>Tweerigting-tabel</strong> orden die uitkomste van twee gebeurtenisse in ${bl('rye')} en ${gr('kolomme')}, wat dit maklik maak om ${or('gunstige uitkomste')} te tel en die waarskynlikheid vir gekombineerde gebeurtenisse te bereken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kolomme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gunstige uitkomste')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn tweerigting-tabel te gebruik</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Merk die rye')} met die uitkomste van die eerste gebeurtenis en ${gr('merk die kolomme')} met die uitkomste van die tweede gebeurtenis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vul elke sel in')} met die gekombineerde uitkoms. Die totale aantal selle is die totale aantal uitkomste in die steekproefruimte.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Tel die gunstige uitkomste')} — die selle wat ooreenstem met die gebeurtenis wat jy soek — en deel deur die totale aantal uitkomste.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarskynlikheidsformule</p>` +
        `<p style="margin:0;color:#1e3a8a;">W(gebeurtenis) = ${or('aantal gunstige uitkomste')} ÷ totale aantal uitkomste. Die tweerigting-tabel maak dit maklik om albei hierdie waardes direk af te lees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Gebruik ʼn tweerigting-tabel om die waarskynlikheid te vind om kop EN ʼn getal groter as 4 te kry.',
          answer: `W(kop EN >4) = ${or('2')} ÷ 12 = ${or('1/6')}`,
          steps: [
            `Stel die tweerigting-tabel op met ${bl('2 rye')} (kop, stert) en ${gr('6 kolomme')} (1, 2, 3, 4, 5, 6). Dit gee ʼn totaal van 2 × 6 = <strong>12 uitkomste</strong> in die steekproefruimte.`,
            `${or('Gunstige uitkomste')} is die selle waar kop verskyn EN die dobbelsteen ʼn getal groter as 4 wys. Die getalle groter as 4 is 5 en 6, dus is die gunstige selle (kop, 5) en (kop, 6). Dit gee ${or('2 gunstige uitkomste')}.`,
            `W(kop EN >4) = ${or('2')} ÷ 12 = <strong>1/6</strong>.`,
            `Sien die diagram hieronder wat hierdie tweerigting-tabel wys.`,
          ],
        },
        {
          question: 'ʼn Tweerigting-tabel wys 30 leerders volgens geslag (manlik/vroulik) en gunsteling-vak (Wiskunde/Engels). 12 seuns verkies Wiskunde, 8 seuns verkies Engels, 6 meisies verkies Wiskunde, 4 meisies verkies Engels. Vind die waarskynlikheid dat ʼn lukraak gekose leerder vroulik is EN Wiskunde verkies.',
          answer: `W(vroulik EN Wiskunde) = ${or('6')} ÷ 30 = ${or('1/5')}`,
          steps: [
            `Lees die totaal van die tabel af: ${bl('rye')} is manlik en vroulik, ${gr('kolomme')} is Wiskunde en Engels. Totale leerders = 12 + 8 + 6 + 4 = <strong>30</strong>.`,
            `${or('Gunstige uitkomste')} = die sel vir vroulik EN Wiskunde = <strong>6</strong> leerders.`,
            `W(vroulik EN Wiskunde) = ${or('6')} ÷ 30 = <strong>1/5</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn tweerigtingtabel op te stel en te gebruik om al die uitkomste van ʼn saamgestelde gebeurtenis te lys en waarskynlikheid te bereken',

      diagramPlaceholder:
        'ʼn Tweerigting-tabel met muntgooi-uitkomste (kop/stert) as rye en dobbelsteen-uitkomste (1-6) as kolomme, met al 12 kombinasies in die rooster getoon en die twee gunstige (kop, >4) selle uitgelig',

      diagramSvg:
        '<svg viewBox="0 0 230 102" xmlns="http://www.w3.org/2000/svg"><text x="110" y="12" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Munt × dobbelsteen: 2 rye × 6 kolomme = 12 uitkomste</text><rect x="155" y="42" width="30" height="20" fill="#fff7ed"/><rect x="185" y="42" width="30" height="20" fill="#fff7ed"/><rect x="5" y="22" width="210" height="60" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="5" y1="42" x2="215" y2="42" stroke="#0f1f3d" stroke-width="1.2"/><line x1="5" y1="62" x2="215" y2="62" stroke="#0f1f3d" stroke-width="1.2"/><line x1="35" y1="22" x2="35" y2="82" stroke="#0f1f3d" stroke-width="1.5"/><line x1="65" y1="22" x2="65" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="95" y1="22" x2="95" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="125" y1="22" x2="125" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="155" y1="22" x2="155" y2="82" stroke="#0f1f3d" stroke-width="1"/><line x1="185" y1="22" x2="185" y2="82" stroke="#0f1f3d" stroke-width="1"/><rect x="155" y="42" width="30" height="20" fill="none" stroke="#ea580c" stroke-width="2"/><rect x="185" y="42" width="30" height="20" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">1</text><text x="80" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">2</text><text x="110" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">3</text><text x="140" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">4</text><text x="170" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">5</text><text x="200" y="36" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">6</text><text x="20" y="56" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="20" y="76" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">S</text><text x="50" y="56" font-size="9" fill="#374151" text-anchor="middle">K,1</text><text x="80" y="56" font-size="9" fill="#374151" text-anchor="middle">K,2</text><text x="110" y="56" font-size="9" fill="#374151" text-anchor="middle">K,3</text><text x="140" y="56" font-size="9" fill="#374151" text-anchor="middle">K,4</text><text x="170" y="56" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">K,5</text><text x="200" y="56" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">K,6</text><text x="50" y="76" font-size="9" fill="#374151" text-anchor="middle">S,1</text><text x="80" y="76" font-size="9" fill="#374151" text-anchor="middle">S,2</text><text x="110" y="76" font-size="9" fill="#374151" text-anchor="middle">S,3</text><text x="140" y="76" font-size="9" fill="#374151" text-anchor="middle">S,4</text><text x="170" y="76" font-size="9" fill="#374151" text-anchor="middle">S,5</text><text x="200" y="76" font-size="9" fill="#374151" text-anchor="middle">S,6</text><text x="110" y="97" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">W(kop EN &gt;4) = 2 ÷ 12 = 1/6</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TREE DIAGRAMS FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tree-diagrams-compound-events',
      title: 'Boomdiagramme vir Saamgestelde Gebeurtenisse',
      icon: '🌳',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Boomdiagram</strong> stel al die moontlike uitkomste van twee of meer gebeurtenisse visueel voor deur middel van vertakkende paaie. Elke ${bl('tak')} stel ʼn moontlike uitkoms voor, en ons vermenigvuldig waarskynlikhede langs elke tak-pad om die waarskynlikheid van ʼn spesifieke gekombineerde uitkoms te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste tak')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tweede tak')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gekombineerde waarskynlikheid')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn boomdiagram te teken en te gebruik</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Teken die eerste stel takke')} — een tak vir elke moontlike uitkoms van die eerste gebeurtenis. Skryf die waarskynlikheid op elke tak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Teken die tweede stel takke')} vanaf die einde van elke eerste tak — een vir elke moontlike uitkoms van die tweede gebeurtenis. Skryf die waarskynlikheid op elke tak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig langs die pad')} — om die waarskynlikheid van ʼn spesifieke gekombineerde uitkoms te vind, vermenigvuldig die waarskynlikhede op elke tak langs daardie pad.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelreël: vermenigvuldig langs takke, tel oor paaie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vermenigvuldig waarskynlikhede ${bl('langs')} ʼn enkele pad om die waarskynlikheid van daardie gekombineerde uitkoms te kry. As die gebeurtenis op meer as een pad kan gebeur, ${or('tel')} die waarskynlikhede van daardie paaie bymekaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato gooi ʼn muntstuk twee keer op. Gebruik ʼn boomdiagram om die waarskynlikheid te vind om albei kere kop te kry.',
          answer: `W(kop albei kere) = ${or('1/2 × 1/2')} = ${or('1/4')}`,
          steps: [
            `${bl('Eerste tak:')} Die muntstuk kan kop (K) of stert (S) wys, elk met waarskynlikheid ${bl('1/2')}.`,
            `${gr('Tweede tak:')} Van elke eerste uitkoms af kan die muntstuk weer kop of stert wys, elk met waarskynlikheid ${gr('1/2')}.`,
            `Volg die kop-dan-kop-pad: ${or('1/2 × 1/2')} = ${or('1/4')}.`,
            `Daar is 4 finale uitkomste (KK, KS, SK, SS), elk met waarskynlikheid 1/4, wat ons antwoord bevestig.`,
            `Sien die diagram hieronder wat hierdie boomdiagram wys.`,
          ],
        },
        {
          question: 'ʼn Sak het 3 rooi en 2 blou balle. Thabo kies een bal, sit dit terug, en kies weer. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om albei kere rooi te kies.',
          answer: `W(rooi albei kere) = ${or('3/5 × 3/5')} = ${or('9/25')}`,
          steps: [
            `${bl('Eerste tak:')} W(rooi) = ${bl('3/5')}, W(blou) = ${bl('2/5')}. (3 rooi uit 5 in totaal.)`,
            `${gr('Tweede tak:')} Aangesien die bal teruggesit word, is die waarskynlikhede dieselfde as voorheen. W(rooi) = ${gr('3/5')}, W(blou) = ${gr('2/5')}.`,
            `Volg die rooi-dan-rooi-pad: ${or('3/5 × 3/5')} = ${or('9/25')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn boomdiagram vir ʼn saamgestelde gebeurtenis te teken en waarskynlikhede langs taklane te vermenigvuldig',

      diagramPlaceholder:
        'ʼn Boomdiagram wat twee muntgooie wys, met takke vir kop en stert by elke stadium, en waarskynlikhede op elke tak gemerk wat na vier finale uitkomste lei, elk met gekombineerde waarskynlikheid 1/4',

      diagramSvg:
        '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg"><text x="130" y="12" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Twee muntgooie</text><line x1="20" y1="90" x2="100" y2="40" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="90" x2="100" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="40" x2="190" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="40" x2="190" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="140" x2="190" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="100" y1="140" x2="190" y2="160" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="90" r="3.5" fill="#0f1f3d"/><circle cx="100" cy="40" r="3.5" fill="#0f1f3d"/><circle cx="100" cy="140" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="20" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="60" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="120" r="3.5" fill="#0f1f3d"/><circle cx="190" cy="160" r="3.5" fill="#0f1f3d"/><text x="52" y="58" font-size="9" font-weight="700" fill="#2563eb">K, 1/2</text><text x="52" y="122" font-size="9" font-weight="700" fill="#2563eb">S, 1/2</text><text x="140" y="24" font-size="9" font-weight="700" fill="#16a34a">K, 1/2</text><text x="140" y="58" font-size="9" font-weight="700" fill="#16a34a">S, 1/2</text><text x="140" y="118" font-size="9" font-weight="700" fill="#16a34a">K, 1/2</text><text x="140" y="152" font-size="9" font-weight="700" fill="#16a34a">S, 1/2</text><text x="196" y="17" font-size="10" font-weight="700" fill="#ea580c">KK = 1/4</text><text x="196" y="57" font-size="10" font-weight="700" fill="#ea580c">KS = 1/4</text><text x="196" y="117" font-size="10" font-weight="700" fill="#ea580c">SK = 1/4</text><text x="196" y="157" font-size="10" font-weight="700" fill="#ea580c">SS = 1/4</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PREDICTING RELATIVE FREQUENCY AND COMPARING WITH THEORETICAL
    //             PROBABILITY FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'predicting-relative-frequency',
      title: 'Relatiewe Frekwensie Voorspel en Vergelyk met Teoretiese Waarskynlikheid vir Saamgestelde Gebeurtenisse',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal die waarskynlikhede vir uitkomste van saamgestelde gebeurtenisse en <strong>voorspel hulle relatiewe frekwensie</strong> in eenvoudige eksperimente, en vergelyk dan die ${bl('relatiewe frekwensie')} met die berekende ${or('teoretiese waarskynlikheid')} en ${gr('verduidelik enige moontlike verskille')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('voorspelde frekwensie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('werklike frekwensie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verduideliking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Voorspelde (verwagte) frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Teoretiese waarskynlikheid × aantal proewe. Dit is die aantal kere wat ons <em>verwag</em> dat ʼn uitkoms sal voorkom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Werklike (relatiewe) frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die aantal kere wat die uitkoms <em>werklik</em> in die eksperiment voorgekom het. Dit mag van die voorspelde frekwensie verskil.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Waarom hulle verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Toevallige variasie in ʼn beperkte aantal proewe beteken werklike resultate stem selde presies met voorspellings ooreen. Met meer proewe neig resultate om nader aan die teoretiese waarde te kom.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die wet van groot getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hoe meer proewe jy uitvoer, hoe nader sal die ${or('werklike frekwensie')} aan die ${bl('voorspelde frekwensie')} wees. Klein verskille is verwag en normaal — dit beteken nie dat die teoretiese waarskynlikheid verkeerd is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle voorspel dat twee muntstukke 80 keer opgooi ongeveer 20 keer kop-kop behoort te gee (aangesien waarskynlikheid = 1/4). Sy kry 23. Verduidelik die verskil.',
          answer: `${bl('Verwag: 20')}. ${or('Werklik: 23')}. ${gr('Klein variasie is normaal weens toevalligheid oor ʼn beperkte aantal proewe.')}`,
          steps: [
            `Bereken die ${bl('voorspelde frekwensie')}: 80 × 1/4 = ${bl('20')}. Ons verwag kop-kop ongeveer 20 keer.`,
            `${or('Werklike frekwensie')}: Amahle het ${or('23')} kop-kop-resultate gekry.`,
            `${gr('Verduidelik die verskil')}: ${gr('Om 23 te kry is naby die verwagte 20 maar nie presies nie — hierdie klein variasie is normaal weens toevalligheid oor ʼn beperkte aantal proewe.')} Met meer opgooie sal die resultaat waarskynlik nader aan 20 beweeg.`,
          ],
        },
        {
          question: 'Sipho gebruik ʼn tweerigting-tabel vir die gooi van twee dobbelstene, en voorspel dat om ʼn som van 7 te kry ongeveer 1/6 van die tyd oor 180 worpe (30 keer) behoort te gebeur. Hy kry 35. Is dit verbasend?',
          answer: `${bl('Verwag: 30')}. ${or('Werklik: 35')}. ${gr('Nie verbasend nie — natuurlike variasie kan met beperkte proewe voorkom.')}`,
          steps: [
            `Bereken die ${bl('voorspelde frekwensie')}: 180 × 1/6 = ${bl('30')}. Ons verwag ʼn som van 7 ongeveer 30 keer.`,
            `${or('Werklike frekwensie')}: Sipho het op ${or('35')} worpe ʼn som van 7 gekry.`,
            `${gr('Is dit verbasend?')} ${gr('Om 35 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie soort variasie natuurlik voorkom. Meer worpe sal die resultaat waarskynlik nader aan 30 bring.')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om relatiewe frekwensie vir saamgestelde gebeurtenisse te voorspel en met teoretiese waarskynlikheid te vergelyk, en natuurlike variasie te verduidelik',

      diagramPlaceholder:
        'ʼn Vergelyking wat voorspelde frekwensie teenoor werklike frekwensie vir ʼn twee-muntgooi-eksperiment (80 gooie) wys, plus ʼn grafiek wat illustreer hoe die relatiewe frekwensie na die teoretiese waarskynlikheid van 1/4 konvergeer soos die aantal proewe toeneem',

      diagramSvg:
        '<svg viewBox="0 0 270 125" xmlns="http://www.w3.org/2000/svg"><text x="62" y="12" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">80 muntgooie (KK)</text><line x1="20" y1="100" x2="105" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="25" y1="44" x2="95" y2="44" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/><rect x="35" y="44" width="18" height="56" fill="#2563eb"/><rect x="65" y="36" width="18" height="64" fill="#ea580c"/><text x="44" y="112" font-size="7" fill="#2563eb" text-anchor="middle">Verwag</text><text x="44" y="121" font-size="9" font-weight="700" fill="#2563eb" text-anchor="middle">20</text><text x="74" y="112" font-size="7" fill="#ea580c" text-anchor="middle">Werklik</text><text x="74" y="121" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">23</text><text x="205" y="12" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Meer proewe → nader aan 1/4</text><line x1="150" y1="100" x2="255" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="150" y1="100" x2="150" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><line x1="150" y1="60" x2="255" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><text x="258" y="63" font-size="8" font-weight="700" fill="#16a34a">1/4</text><polyline points="160,30 175,85 190,45 205,72 220,55 235,64 248,58" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="160" cy="30" r="2" fill="#ea580c"/><circle cx="175" cy="85" r="2" fill="#ea580c"/><circle cx="190" cy="45" r="2" fill="#ea580c"/><circle cx="205" cy="72" r="2" fill="#ea580c"/><circle cx="220" cy="55" r="2" fill="#ea580c"/><circle cx="235" cy="64" r="2" fill="#ea580c"/><circle cx="248" cy="58" r="2" fill="#ea580c"/><text x="202" y="112" font-size="7" fill="#6b7280" text-anchor="middle">proewe →</text></svg>',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // TOPIC PRACTICE — Q1 through Q15
  // ─────────────────────────────────────────────────────────────────────────
  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi. Hoeveel uitkomste is daar in totaal?',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'ʼn Muntstuk het 2 uitkomste (kop, stert) en ʼn dobbelsteen het 6 uitkomste (1–6). Totale uitkomste = 2 × 6 = 12.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik ʼn tweerigting-tabel vir ʼn muntstuk-opgooi en dobbelsteen-worp, en vind die waarskynlikheid om stert EN ʼn ewe getal te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'Totale uitkomste = 12. Ewe getalle op ʼn dobbelsteen is 2, 4, 6. Gunstige uitkomste (stert EN ewe) = 3. W = 3/12 = 1/4.',
    },

    // ── Q3 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho se tweerigting-tabel wys 40 leerders: 15 seuns hou van sport, 5 seuns hou van kuns, 12 meisies hou van sport, 8 meisies hou van kuns. Vind die waarskynlikheid dat ʼn leerder ʼn seun is wat van kuns hou.",
      answer: 'Totaal = 40. Gunstig (seun en kuns) = 5. Waarskynlikheid = 5/40 = 1/8.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word twee keer opgegooi. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om albei kere stert te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'W(stert eerste) = 1/2. W(stert tweede) = 1/2. Gekombineerd: 1/2 × 1/2 = 1/4.',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 4 rooi en 6 blou balle. Lerato kies een, sit dit terug, en kies weer. Vind die waarskynlikheid om albei kere blou te kies.',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: 'W(blou) = 6/10 = 3/5. Aangesien dit teruggesit word, is W(blou weer) = 3/5. Gekombineerd: 3/5 × 3/5 = 9/25.',
    },

    // ── Q6 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn boomdiagram vir 3 muntstuk-opgooie sal 8 finale takke hê. Is hy korrek? Verduidelik.',
      answer: 'Ja — elke opgooi verdubbel die aantal takke (2 × 2 × 2 = 8), aangesien elke opgooi 2 moontlike uitkomste het.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 4 gelyke afdelings (1, 2, 3, 4) en word twee keer gedraai. Vind die waarskynlikheid om albei kere ʼn 2 te kry deur ʼn boomdiagram-benadering te gebruik.',
      answer: '1/16',
      checkMode: 'auto',
      correctAnswer: '1/16',
      explanation: 'W(2 op eerste draai) = 1/4. W(2 op tweede draai) = 1/4. Gekombineerd: 1/4 × 1/4 = 1/16.',
    },

    // ── Q8 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se tweerigting-tabel wys 50 mense: 18 mans verkies tee, 12 mans verkies koffie, 14 vrouens verkies tee, 6 vrouens verkies koffie. Vind die waarskynlikheid dat iemand ʼn vrou is wat koffie verkies.",
      answer: 'Totaal = 50. Gunstig = 6. Waarskynlikheid = 6/50 = 3/25.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee dobbelstene word gegooi. Gebruik ʼn tweerigting-tabel-benadering om die waarskynlikheid te vind om ʼn som van 9 te kry.',
      answer: '1/9',
      checkMode: 'auto',
      correctAnswer: '1/9',
      correctAnswers: ['1/9', '4/36'],
      explanation: 'Totale uitkomste = 36. Pare wat tot 9 optel: (3,6), (4,5), (5,4), (6,3) = 4 gunstige uitkomste. W = 4/36 = 1/9.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho voorspel dat twee muntstukke 60 keer opgooi ongeveer 30 keer kop-stert (in enige volgorde) behoort te gee. Hy kry 27. Is dit redelik? Verduidelik.',
      answer: 'Verwag = 60 × 1/2 = 30 (aangesien W(kop-stert of stert-kop) = 1/2). Om 27 te kry is naby, wat normale variasie van beperkte proewe wys.',
      checkMode: 'self',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 5 groen en 3 geel albasters. Lerato kies een, sit dit terug, en kies weer. Vind die waarskynlikheid om een groen en een geel te kies (in enige volgorde).',
      answer: '15/32',
      checkMode: 'auto',
      correctAnswer: '15/32',
      explanation: 'W(groen dan geel) = 5/8 × 3/8 = 15/64. W(geel dan groen) = 3/8 × 5/8 = 15/64. Gekombineerd (enige volgorde) = 15/64 + 15/64 = 30/64 = 15/32.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gebruik ʼn boomdiagram vir die kies van 2 balle (sonder vervanging) uit ʼn sak van 3 rooi en 2 blou. Vind die waarskynlikheid om albei kere rooi te kies.',
      answer: 'W(rooi eerste) = 3/5. W(rooi tweede, sonder vervanging) = 2/4 = 1/2. Gekombineerd: 3/5 × 1/2 = 3/10.',
      checkMode: 'self',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se tweerigting-tabel vir 2 dobbelsteen-worpe voorspel ʼn som van 7 ongeveer 1/6 van die tyd oor 120 worpe (20 keer). Sy kry 24. Is dit verbasend? Verduidelik.",
      answer: 'Verwag = 120 × 1/6 = 20. Om 24 te kry is heelwat hoër maar aanneemlik met natuurlike variasie; meer worpe sal die resultate waarskynlik nader aan 20 bring.',
      checkMode: 'self',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om ʼn tweerigting-tabel en ʼn boomdiagram vir dieselfde saamgestelde gebeurtenis te gebruik, sal altyd dieselfde waarskynlikheidsantwoord gee. Is hy korrek? Verduidelik.',
      answer: 'Ja — albei metodes orden dieselfde onderliggende steekproefruimte en waarskynlikhede, net in verskillende visuele formate, dus behoort hulle altyd konsekwente resultate te lewer.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sak het 4 rooi en 6 blou balle. Twee balle word sonder vervanging gekies. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om een rooi en een blou te kry (in enige volgorde).',
      answer: 'W(rooi dan blou) = 4/10 × 6/9 = 24/90. W(blou dan rooi) = 6/10 × 4/9 = 24/90. Gekombineerd (enige volgorde) = 24/90 + 24/90 = 48/90 = 8/15.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 9 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // OEFENSTELLE — 3 stelle van 20 vrae elk (Fase 1: net inhoud, geen diagramme nie)
  // Blok 1 (0-2):   Relatiewe frekwensie — voorspel vs werklik, verduidelik verskil
  // Blok 2 (3-5):   Enkelgebeurtenis-waarskynlikheid uit ʼn sak/wieletjie [DIAGRAM LATER]
  // Blok 3 (6-9):   Komplementêre gebeurtenisse W(nie A) = 1 − W(A)
  // Blok 4 (10-13): Steekproefruimte — twee dobbelstene / muntstuk+dobbelsteen rooster [DIAGRAM LATER]
  // Blok 5 (14-17): Venn-diagram — waarskynlikheid met twee versamelings [DIAGRAM LATER]
  // Blok 6 (18-19): Gekombineerde multi-stap waarskynlikheidsprobleem
  // ─────────────────────────────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Relatiewe frekwensie (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 60 keer gegooi. Gebaseer op teoretiese waarskynlikheid, hoeveel keer sou jy voorspel dat die dobbelsteen ʼn 3 sal wys?', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'W(3) = 1/6. Voorspelde frekwensie = 1/6 × 60 = 10.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 50 keer opgegooi en land 28 keer op kop. Vind die relatiewe frekwensie van kop as ʼn breuk.', checkMode: 'auto', correctAnswer: '14/25', correctAnswers: ['14/25', '28/50'], answer: '14/25', explanation: 'Relatiewe frekwensie = aantal kere kop ÷ totale opgooie = 28/50 = 14/25.' },
        { difficulty: 'Easy', question: 'Zanele voorspel dat om ʼn dobbelsteen 120 keer te gooi ongeveer 20 keer ʼn 5 behoort te gee (aangesien W(5) = 1/6). Sy kry werklik 24. Verduidelik die verskil.', answer: 'Verwag = 120 × 1/6 = 20. Om 24 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie soort variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 20 bring.', checkMode: 'self' },

        // Blok 2 — Enkelgebeurtenis-waarskynlikheid uit ʼn sak/wieletjie (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 5 rooi fiches, 3 blou fiches en 2 groen fiches. Een fiche word lukraak getrek. Vind W(blou).', checkMode: 'auto', correctAnswer: '3/10', answer: '3/10', explanation: 'Totale fiches = 5 + 3 + 2 = 10. W(blou) = 3/10.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#dc2626" font-weight="700">5 rooi</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">3 blou</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#16a34a" font-weight="700">2 groen</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie is in 8 gelyke sektore verdeel: 4 geel, 3 pers en 1 oranje. Die wieletjie word een keer gedraai. Vind W(pers).', checkMode: 'auto', correctAnswer: '3/8', answer: '3/8', explanation: 'Totale sektore = 8. Gunstig (pers) = 3. W(pers) = 3/8.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 0 1 130.00,183.00 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 130.00,183.00 A 78,78 0 0 1 74.85,49.85 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 74.85,49.85 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="178.36" y="105.00" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">geel (4)</text><text x="85.32" y="123.51" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">pers (3)</text><text x="111.49" y="60.32" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">oranje (1)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Houer bevat 6 wit balle, 4 swart balle en 5 oranje balle. Een bal word lukraak getrek. Vind W(wit) as ʼn persentasie.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], answer: '40%', explanation: 'Totale balle = 6 + 4 + 5 = 15. W(wit) = 6/15 = 2/5 = 40%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#9ca3af" font-weight="700">6 wit</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#1f2937" font-weight="700">4 swart</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#ea580c" font-weight="700">5 oranje</text></svg>' },

        // Blok 3 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(dit reën môre) = 0,35. Vind W(dit reën nie môre nie).', checkMode: 'auto', correctAnswer: '0,65', correctAnswers: ['0,65', '0.65'], answer: '0,65', explanation: 'Komplementêre gebeurtenisse: W(nie A) = 1 − W(A) = 1 − 0,35 = 0,65.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 12 albasters, waarvan 5 rooi is. Een albaster word lukraak getrek. Vind W(nie rooi).', checkMode: 'auto', correctAnswer: '7/12', answer: '7/12', explanation: 'W(rooi) = 5/12. W(nie rooi) = 1 − 5/12 = 7/12.' },
        { difficulty: 'Medium', question: 'Die waarskynlikheid dat Thabo sy bestuurstoets met sy eerste poging slaag, is 3/8. Vind die waarskynlikheid dat hy nie met sy eerste poging slaag nie.', checkMode: 'auto', correctAnswer: '5/8', answer: '5/8', explanation: 'W(nie slaag) = 1 − W(slaag) = 1 − 3/8 = 5/8.' },
        { difficulty: 'Medium', question: 'Lindiwe sê as W(gebeurtenis A) = 0,4, moet W(nie A) ook 0,4 wees, "aangesien hulle teenoorgesteldes is." Verduidelik waarom sy verkeerd is en gee die korrekte waarde.', answer: 'Sy is verkeerd — komplementêre waarskynlikhede tel op tot 1, hulle is nie outomaties gelyk nie. W(nie A) = 1 − W(A) = 1 − 0,4 = 0,6, nie 0,4 nie.', checkMode: 'self' },

        // Blok 4 — Steekproefruimte (twee dobbelstene / muntstuk+dobbelsteen rooster) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi, en die steekproefruimte-rooster van 12 uitkomste word gewys. Vind W(stert en ʼn getal groter as 3).', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], answer: '1/4', explanation: 'Totale uitkomste = 12. Getalle groter as 3 is 4, 5, 6, dus gunstige uitkomste (stert, 4), (stert, 5), (stert, 6) = 3. W = 3/12 = 1/4.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">K</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">S</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(die som is 8).', checkMode: 'auto', correctAnswer: '5/36', answer: '5/36', explanation: 'Totale uitkomste = 36. Pare wat tot 8 optel: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 gunstige uitkomste. W = 5/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(albei dobbelstene wys dieselfde getal).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '6/36'], answer: '1/6', explanation: 'Totale uitkomste = 36. Passende pare: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 gunstige uitkomste. W = 6/36 = 1/6.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Sipho gebruik ʼn steekproefruimte-rooster vir twee dobbelsteen-worpe en voorspel ʼn som van 8 behoort ongeveer 5/36 van die tyd oor 180 worpe (25 keer) voor te kom. Hy kry werklik 30. Is dit verbasend? Verduidelik.', answer: 'Verwag = 180 × 5/36 = 25. Om 30 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 25 bring.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Blok 5 — Venn-diagram waarskynlikheid met twee versamelings (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 30 leerders: 12 studeer net Wiskunde, 8 studeer net Wetenskap, 6 studeer beide Wiskunde en Wetenskap, en 4 studeer geen van die twee nie. Vind W(ʼn leerder studeer beide Wiskunde en Wetenskap).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30'], answer: '1/5', explanation: 'Totale leerders = 30. Gunstig (beide) = 6. W(beide) = 6/30 = 1/5.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 30 leerders: 12 studeer net Wiskunde, 8 studeer net Wetenskap, 6 studeer beide, en 4 studeer geen van die twee nie. Vind W(ʼn leerder studeer Wiskunde of Wetenskap, of beide).', checkMode: 'auto', correctAnswer: '13/15', correctAnswers: ['13/15', '26/30'], answer: '13/15', explanation: 'Wiskunde of Wetenskap (of beide) = net Wiskunde + net Wetenskap + beide = 12 + 8 + 6 = 26. W = 26/30 = 13/15.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">4</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 40 mense: 15 besit net ʼn motor, 10 besit net ʼn fiets, 9 besit beide, en 6 besit geen van die twee nie. Vind W(ʼn persoon besit presies een van die twee, motor of fiets).', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '25/40'], answer: '5/8', explanation: 'Presies een = net motor + net fiets = 15 + 10 = 25. W = 25/40 = 5/8.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Motor</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Fiets</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'Amahle se Venn-diagram wys 50 kopers: 20 koop net vrugte, 14 koop net groente, 10 koop beide, en 6 koop geeneen nie. Sy beweer W(koop geeneen) = 6/44 omdat 44 kopers wel iets gekoop het. Verduidelik haar fout en gee die korrekte waarskynlikheid.', answer: 'Sy het die verkeerde totaal gebruik. Die waarskynlikheid moet altyd met die totale steekproefgrootte (al 50 kopers) bereken word, nie net dié wat iets gekoop het nie. W(koop geeneen) = 6/50 = 3/25, nie 6/44 nie.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vrugte</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Groente</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },

        // Blok 6 — Gekombineerde multi-stap waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Houer het 8 penne: 5 blou en 3 swart. Thabo kies ʼn pen, hou dit, en kies dan ʼn tweede pen. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '5/14', answer: '5/14', explanation: 'W(blou eerste) = 5/8. Sonder vervanging, W(blou tweede) = 4/7. Gekombineerd: 5/8 × 4/7 = 20/56 = 5/14.' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 45 atlete: 18 speel net sokker, 12 speel net netbal, 9 speel beide, en 6 speel geen van die twee nie. As ʼn atleet wat sokker speel lukraak gekies word, vind die waarskynlikheid dat hy/sy ook netbal speel.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '9/27'], answer: '1/3', explanation: 'Atlete wat sokker speel = net sokker + beide = 18 + 9 = 27. Van hierdie speel 9 ook netbal. W = 9/27 = 1/3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, enkel- en saamgestelde gebeurtenis-waarskynlikheid, en Venn-diagramme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor steekproefruimte-roosters of Venn-diagramme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor komplementêre gebeurtenisse en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Relatiewe frekwensie (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 90 keer gegooi. Gebaseer op teoretiese waarskynlikheid, hoeveel keer sou jy voorspel dat die dobbelsteen ʼn 6 sal wys?', checkMode: 'auto', correctAnswer: '15', answer: '15', explanation: 'W(6) = 1/6. Voorspelde frekwensie = 1/6 × 90 = 15.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 80 keer opgegooi en land 34 keer op kop. Vind die relatiewe frekwensie van kop as ʼn breuk.', checkMode: 'auto', correctAnswer: '17/40', correctAnswers: ['17/40', '34/80'], answer: '17/40', explanation: 'Relatiewe frekwensie = aantal kere kop ÷ totale opgooie = 34/80 = 17/40.' },
        { difficulty: 'Easy', question: 'Bongani voorspel dat om ʼn dobbelsteen 90 keer te gooi ongeveer 15 keer ʼn 2 behoort te gee (aangesien W(2) = 1/6). Hy kry werklik 19. Verduidelik die verskil.', answer: 'Verwag = 90 × 1/6 = 15. Om 19 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie soort variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 15 bring.', checkMode: 'self' },

        // Blok 2 — Enkelgebeurtenis-waarskynlikheid uit ʼn sak/wieletjie (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 4 rooi fiches, 6 blou fiches en 2 groen fiches. Een fiche word lukraak getrek. Vind W(groen).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], answer: '1/6', explanation: 'Totale fiches = 4 + 6 + 2 = 12. W(groen) = 2/12 = 1/6.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#dc2626" font-weight="700">4 rooi</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">6 blou</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#16a34a" font-weight="700">2 groen</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie is in 10 gelyke sektore verdeel: 6 geel, 3 pers en 1 oranje. Die wieletjie word een keer gedraai. Vind W(geel).', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '6/10'], answer: '3/5', explanation: 'Totale sektore = 10. Gunstig (geel) = 6. W(geel) = 6/10 = 3/5.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 1 1 84.15,168.10 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 84.15,168.10 A 78,78 0 0 1 84.15,41.90 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 84.15,41.90 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="175.99" y="119.94" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">geel (6)</text><text x="81.64" y="105.00" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">pers (3)</text><text x="115.06" y="59.01" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">oranje (1)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Houer bevat 9 wit balle, 3 swart balle en 8 oranje balle. Een bal word lukraak getrek. Vind W(swart) as ʼn persentasie.', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], answer: '15%', explanation: 'Totale balle = 9 + 3 + 8 = 20. W(swart) = 3/20 = 15%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#9ca3af" font-weight="700">9 wit</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#1f2937" font-weight="700">3 swart</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#ea580c" font-weight="700">8 oranje</text></svg>' },

        // Blok 3 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(ʼn bus kom laat aan) = 0,28. Vind W(die bus kom nie laat aan nie).', checkMode: 'auto', correctAnswer: '0,72', correctAnswers: ['0,72', '0.72'], answer: '0,72', explanation: 'Komplementêre gebeurtenisse: W(nie A) = 1 − W(A) = 1 − 0,28 = 0,72.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 20 albasters, waarvan 7 rooi is. Een albaster word lukraak getrek. Vind W(nie rooi).', checkMode: 'auto', correctAnswer: '13/20', answer: '13/20', explanation: 'W(rooi) = 7/20. W(nie rooi) = 1 − 7/20 = 13/20.' },
        { difficulty: 'Medium', question: 'Die waarskynlikheid dat Naledi ʼn skaakspel wen, is 5/9. Vind die waarskynlikheid dat sy nie wen nie.', checkMode: 'auto', correctAnswer: '4/9', answer: '4/9', explanation: 'W(nie wen) = 1 − W(wen) = 1 − 5/9 = 4/9.' },
        { difficulty: 'Medium', question: 'Kagiso sê as W(gebeurtenis A) = 0,7, moet W(nie A) ook 0,7 wees, "aangesien waarskynlikhede simmetries is." Verduidelik waarom hy verkeerd is en gee die korrekte waarde.', answer: 'Hy is verkeerd — komplementêre waarskynlikhede tel op tot 1, hulle is nie outomaties gelyk nie. W(nie A) = 1 − W(A) = 1 − 0,7 = 0,3, nie 0,7 nie.', checkMode: 'self' },

        // Blok 4 — Steekproefruimte (twee dobbelstene / muntstuk+dobbelsteen rooster) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi, en die steekproefruimte-rooster van 12 uitkomste word gewys. Vind W(kop en ʼn getal kleiner as 3).', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], answer: '1/6', explanation: 'Totale uitkomste = 12. Getalle kleiner as 3 is 1, 2, dus gunstige uitkomste (kop, 1), (kop, 2) = 2. W = 2/12 = 1/6.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">K</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">S</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(die som is 6).', checkMode: 'auto', correctAnswer: '5/36', answer: '5/36', explanation: 'Totale uitkomste = 36. Pare wat tot 6 optel: (1,5), (2,4), (3,3), (4,2), (5,1) = 5 gunstige uitkomste. W = 5/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(die twee dobbelstene verskil met presies 1).', checkMode: 'auto', correctAnswer: '5/18', correctAnswers: ['5/18', '10/36'], answer: '5/18', explanation: 'Totale uitkomste = 36. Pare wat met 1 verskil: (1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(4,5),(5,4),(5,6),(6,5) = 10 gunstige uitkomste. W = 10/36 = 5/18.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Lerato gebruik ʼn steekproefruimte-rooster vir twee dobbelsteen-worpe en voorspel ʼn som van 6 behoort ongeveer 5/36 van die tyd oor 144 worpe (20 keer) voor te kom. Sy kry werklik 24. Is dit verbasend? Verduidelik.', answer: 'Verwag = 144 × 5/36 = 20. Om 24 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 20 bring.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Blok 5 — Venn-diagram waarskynlikheid met twee versamelings (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 40 leerders: 16 studeer net Wiskunde, 10 studeer net Wetenskap, 8 studeer beide Wiskunde en Wetenskap, en 6 studeer geen van die twee nie. Vind W(ʼn leerder studeer beide Wiskunde en Wetenskap).', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '8/40'], answer: '1/5', explanation: 'Totale leerders = 40. Gunstig (beide) = 8. W(beide) = 8/40 = 1/5.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 40 leerders: 16 studeer net Wiskunde, 10 studeer net Wetenskap, 8 studeer beide, en 6 studeer geen van die twee nie. Vind W(ʼn leerder studeer Wiskunde of Wetenskap, of beide).', checkMode: 'auto', correctAnswer: '17/20', correctAnswers: ['17/20', '34/40'], answer: '17/20', explanation: 'Wiskunde of Wetenskap (of beide) = net Wiskunde + net Wetenskap + beide = 16 + 10 + 8 = 34. W = 34/40 = 17/20.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 50 mense: 18 besit net ʼn motor, 14 besit net ʼn fiets, 10 besit beide, en 8 besit geen van die twee nie. Vind W(ʼn persoon besit presies een van die twee, motor of fiets).', checkMode: 'auto', correctAnswer: '16/25', correctAnswers: ['16/25', '32/50'], answer: '16/25', explanation: 'Presies een = net motor + net fiets = 18 + 14 = 32. W = 32/50 = 16/25.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Motor</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Fiets</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Hard', question: 'Sipho se Venn-diagram wys 60 kopers: 24 koop net vrugte, 18 koop net groente, 12 koop beide, en 6 koop geeneen nie. Hy beweer W(koop geeneen) = 6/54 omdat 54 kopers wel iets gekoop het. Verduidelik sy fout en gee die korrekte waarskynlikheid.', answer: 'Hy het die verkeerde totaal gebruik. Die waarskynlikheid moet altyd met die totale steekproefgrootte (al 60 kopers) bereken word, nie net dié wat iets gekoop het nie. W(koop geeneen) = 6/60 = 1/10, nie 6/54 nie.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vrugte</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Groente</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },

        // Blok 6 — Gekombineerde multi-stap waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Houer het 9 penne: 6 blou en 3 swart. Lerato kies ʼn pen, hou dit, en kies dan ʼn tweede pen. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '5/12', answer: '5/12', explanation: 'W(blou eerste) = 6/9 = 2/3. Sonder vervanging, W(blou tweede) = 5/8. Gekombineerd: 2/3 × 5/8 = 10/24 = 5/12.' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 50 atlete: 20 speel net sokker, 14 speel net netbal, 10 speel beide, en 6 speel geen van die twee nie. As ʼn atleet wat sokker speel lukraak gekies word, vind die waarskynlikheid dat hy/sy ook netbal speel.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '10/30'], answer: '1/3', explanation: 'Atlete wat sokker speel = net sokker + beide = 20 + 10 = 30. Van hierdie speel 10 ook netbal. W = 10/30 = 1/3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, enkel- en saamgestelde gebeurtenis-waarskynlikheid, en Venn-diagramme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor steekproefruimte-roosters of Venn-diagramme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor komplementêre gebeurtenisse en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Relatiewe frekwensie (Easy)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 150 keer gegooi. Gebaseer op teoretiese waarskynlikheid, hoeveel keer sou jy voorspel dat die dobbelsteen ʼn 4 sal wys?', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: 'W(4) = 1/6. Voorspelde frekwensie = 1/6 × 150 = 25.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 40 keer opgegooi en land 23 keer op kop. Vind die relatiewe frekwensie van kop as ʼn breuk.', checkMode: 'auto', correctAnswer: '23/40', answer: '23/40', explanation: 'Relatiewe frekwensie = aantal kere kop ÷ totale opgooie = 23/40.' },
        { difficulty: 'Easy', question: 'Amahle voorspel dat om ʼn dobbelsteen 72 keer te gooi ongeveer 12 keer ʼn 1 behoort te gee (aangesien W(1) = 1/6). Sy kry werklik 15. Verduidelik die verskil.', answer: 'Verwag = 72 × 1/6 = 12. Om 15 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie soort variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 12 bring.', checkMode: 'self' },

        // Blok 2 — Enkelgebeurtenis-waarskynlikheid uit ʼn sak/wieletjie (Easy-Medium) [DIAGRAM LATER]
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 7 rooi fiches, 2 blou fiches en 3 groen fiches. Een fiche word lukraak getrek. Vind W(rooi).', checkMode: 'auto', correctAnswer: '7/12', answer: '7/12', explanation: 'Totale fiches = 7 + 2 + 3 = 12. W(rooi) = 7/12.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><path d="M 95,60 L 95,40 Q 95,25 140,25 Q 185,25 185,40 L 185,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 70,60 L 60,180 Q 60,190 70,190 L 210,190 Q 220,190 220,180 L 210,60 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="90" cy="86" r="6" fill="#dc2626"/><text x="104" y="90" font-size="13" fill="#dc2626" font-weight="700">7 rooi</text><circle cx="90" cy="114" r="6" fill="#2563eb"/><text x="104" y="118" font-size="13" fill="#2563eb" font-weight="700">2 blou</text><circle cx="90" cy="142" r="6" fill="#16a34a"/><text x="104" y="146" font-size="13" fill="#16a34a" font-weight="700">3 groen</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie is in 6 gelyke sektore verdeel: 1 geel, 2 pers en 3 oranje. Die wieletjie word een keer gedraai. Vind W(oranje).', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], answer: '1/2', explanation: 'Totale sektore = 6. Gunstig (oranje) = 3. W(oranje) = 3/6 = 1/2.' , diagramSvg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="105" r="78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 130,105 L 130.00,27.00 A 78,78 0 0 1 197.55,66.00 Z" fill="#ca8a04" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 197.55,66.00 A 78,78 0 0 1 130.00,183.00 Z" fill="#7c3aed" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><path d="M 130,105 L 130.00,183.00 A 78,78 0 0 1 130.00,27.00 Z" fill="#ea580c" fill-opacity="0.18" stroke="#0f1f3d" stroke-width="2"/><text x="154.18" y="63.12" font-size="12" fill="#ca8a04" font-weight="700" text-anchor="middle">geel (1)</text><text x="171.88" y="129.18" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">pers (2)</text><text x="81.64" y="105.00" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">oranje (3)</text><circle cx="130" cy="105" r="2.5" fill="#0f1f3d"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Houer bevat 5 wit balle, 10 swart balle en 5 oranje balle. Een bal word lukraak getrek. Vind W(oranje) as ʼn persentasie.', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], answer: '25%', explanation: 'Totale balle = 5 + 10 + 5 = 20. W(oranje) = 5/20 = 1/4 = 25%.' , diagramSvg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="30" width="210" height="115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="30" x2="60" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="245" y1="30" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="10" x2="270" y2="10" stroke="#0f1f3d" stroke-width="2.5"/><line x1="270" y1="10" x2="270" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="10" x2="60" y2="125" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="70" cy="56" r="6" fill="#9ca3af"/><text x="84" y="60" font-size="13" fill="#9ca3af" font-weight="700">5 wit</text><circle cx="70" cy="82" r="6" fill="#1f2937"/><text x="84" y="86" font-size="13" fill="#1f2937" font-weight="700">10 swart</text><circle cx="70" cy="108" r="6" fill="#ea580c"/><text x="84" y="112" font-size="13" fill="#ea580c" font-weight="700">5 oranje</text></svg>' },

        // Blok 3 — Komplementêre gebeurtenisse (Medium)
        { difficulty: 'Medium', question: 'W(ʼn winkel is oop op ʼn openbare vakansiedag) = 0,45. Vind W(die winkel is nie oop op ʼn openbare vakansiedag nie).', checkMode: 'auto', correctAnswer: '0,55', correctAnswers: ['0,55', '0.55'], answer: '0,55', explanation: 'Komplementêre gebeurtenisse: W(nie A) = 1 − W(A) = 1 − 0,45 = 0,55.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 15 albasters, waarvan 4 rooi is. Een albaster word lukraak getrek. Vind W(nie rooi).', checkMode: 'auto', correctAnswer: '11/15', answer: '11/15', explanation: 'W(rooi) = 4/15. W(nie rooi) = 1 − 4/15 = 11/15.' },
        { difficulty: 'Medium', question: 'Die waarskynlikheid dat Zanele voor 7:30 by die skool aankom, is 7/10. Vind die waarskynlikheid dat sy nie voor 7:30 aankom nie.', checkMode: 'auto', correctAnswer: '3/10', answer: '3/10', explanation: 'W(nie voor 7:30) = 1 − W(voor 7:30) = 1 − 7/10 = 3/10.' },
        { difficulty: 'Medium', question: 'Thabo sê as W(gebeurtenis A) = 0,15, moet W(nie A) ook klein wees, "aangesien A self onwaarskynlik is." Verduidelik waarom hierdie redenasie verkeerd is en gee die korrekte waarde.', answer: 'Hy is verkeerd — ʼn klein W(A) beteken W(nie A) is eintlik groot, aangesien die twee saam tot 1 moet optel. W(nie A) = 1 − 0,15 = 0,85, wat groot is, nie klein nie.', checkMode: 'self' },

        // Blok 4 — Steekproefruimte (twee dobbelstene / muntstuk+dobbelsteen rooster) (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium-Hard', question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi, en die steekproefruimte-rooster van 12 uitkomste word gewys. Vind W(stert en ʼn ewe getal).', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], answer: '1/4', explanation: 'Totale uitkomste = 12. Ewe getalle is 2, 4, 6, dus gunstige uitkomste (stert, 2), (stert, 4), (stert, 6) = 3. W = 3/12 = 1/4.' , diagramSvg: '<svg viewBox="0 0 304 124" xmlns="http://www.w3.org/2000/svg"><text x="188" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die</text><text x="108" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="140" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="204" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="236" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="268" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="46" y="93" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">K</text><text x="46" y="125" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">S</text><line x1="92" y1="40" x2="92" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="124" y1="40" x2="124" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="188" y1="40" x2="188" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="220" y1="40" x2="220" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="252" y1="40" x2="252" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="284" y1="40" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="40" x2="284" y2="40" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="72" x2="284" y2="72" stroke="#0f1f3d" stroke-width="1.5"/><line x1="92" y1="104" x2="284" y2="104" stroke="#0f1f3d" stroke-width="1.5"/><rect x="92" y="40" width="192" height="64" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(die som is 10).', checkMode: 'auto', correctAnswer: '1/12', correctAnswers: ['1/12', '3/36'], answer: '1/12', explanation: 'Totale uitkomste = 36. Pare wat tot 10 optel: (4,6), (5,5), (6,4) = 3 gunstige uitkomste. W = 3/36 = 1/12.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'Twee dobbelstene word gegooi en die steekproefruimte-rooster van 36 uitkomste word gewys. Vind W(minstens een dobbelsteen wys ʼn 6).', checkMode: 'auto', correctAnswer: '11/36', answer: '11/36', explanation: 'Totale uitkomste = 36. Uitkomste met minstens een 6: alle pare (6, x) en (x, 6) vir x = 1 tot 6, minus die dubbel-getelde (6,6) = 6 + 6 − 1 = 11. W = 11/36.' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Hard', question: 'Buhle gebruik ʼn steekproefruimte-rooster vir twee dobbelsteen-worpe en voorspel ʼn som van 10 behoort ongeveer 1/12 van die tyd oor 96 worpe (8 keer) voor te kom. Sy kry werklik 11. Is dit verbasend? Verduidelik.', answer: 'Verwag = 96 × 1/12 = 8. Om 11 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie variasie natuurlik voorkom weens toevalligheid. Meer worpe sal die resultaat waarskynlik nader aan 8 bring.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 258 224" xmlns="http://www.w3.org/2000/svg"><text x="158" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Die 2</text><text x="88" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="116" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="144" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="172" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="200" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="228" y="28" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="32" y="87" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">1</text><text x="32" y="115" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">2</text><text x="32" y="143" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3</text><text x="32" y="171" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4</text><text x="32" y="199" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">5</text><text x="32" y="227" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6</text><line x1="74" y1="40" x2="74" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="102" y1="40" x2="102" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="130" y1="40" x2="130" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="158" y1="40" x2="158" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="186" y1="40" x2="186" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="214" y1="40" x2="214" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="242" y1="40" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="40" x2="242" y2="40" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="68" x2="242" y2="68" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="96" x2="242" y2="96" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="124" x2="242" y2="124" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="152" x2="242" y2="152" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="180" x2="242" y2="180" stroke="#0f1f3d" stroke-width="1.2"/><line x1="74" y1="208" x2="242" y2="208" stroke="#0f1f3d" stroke-width="1.2"/><rect x="74" y="40" width="168" height="168" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },

        // Blok 5 — Venn-diagram waarskynlikheid met twee versamelings (Hard) [DIAGRAM LATER]
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 36 leerders: 14 studeer net Wiskunde, 9 studeer net Wetenskap, 7 studeer beide Wiskunde en Wetenskap, en 6 studeer geen van die twee nie. Vind W(ʼn leerder studeer beide Wiskunde en Wetenskap).', checkMode: 'auto', correctAnswer: '7/36', answer: '7/36', explanation: 'Totale leerders = 36. Gunstig (beide) = 7. W(beide) = 7/36.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 36 leerders: 14 studeer net Wiskunde, 9 studeer net Wetenskap, 7 studeer beide, en 6 studeer geen van die twee nie. Vind W(ʼn leerder studeer Wiskunde of Wetenskap, of beide).', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6', '30/36'], answer: '5/6', explanation: 'Wiskunde of Wetenskap (of beide) = net Wiskunde + net Wetenskap + beide = 14 + 9 + 7 = 30. W = 30/36 = 5/6.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wiskunde</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskap</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">6</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 45 mense: 16 besit net ʼn motor, 13 besit net ʼn fiets, 8 besit beide, en 8 besit geen van die twee nie. Vind W(ʼn persoon besit presies een van die twee, motor of fiets).', checkMode: 'auto', correctAnswer: '29/45', answer: '29/45', explanation: 'Presies een = net motor + net fiets = 16 + 13 = 29. W = 29/45.' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Motor</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Fiets</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">8</text></svg>' },
        { difficulty: 'Hard', question: 'Lindiwe se Venn-diagram wys 55 kopers: 22 koop net vrugte, 17 koop net groente, 11 koop beide, en 5 koop geeneen nie. Sy beweer W(koop geeneen) = 5/50 omdat 50 kopers wel iets gekoop het. Verduidelik haar fout en gee die korrekte waarskynlikheid.', answer: 'Sy het die verkeerde totaal gebruik. Die waarskynlikheid moet altyd met die totale steekproefgrootte (al 55 kopers) bereken word, nie net dié wat iets gekoop het nie. W(koop geeneen) = 5/55 = 1/11, nie 5/50 nie.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="270" height="160" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="115" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="185" cy="100" r="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vrugte</text><text x="225" y="35" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Groente</text><text x="85" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="150" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">11</text><text x="215" y="105" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="30" y="35" font-size="16" fill="#2563eb" font-weight="700" text-anchor="middle">5</text></svg>' },

        // Blok 6 — Gekombineerde multi-stap waarskynlikheid (Hard)
        { difficulty: 'Hard', question: 'ʼn Houer het 10 penne: 7 blou en 3 swart. Sipho kies ʼn pen, hou dit, en kies dan ʼn tweede pen. Vind W(albei penne is blou).', checkMode: 'auto', correctAnswer: '7/15', answer: '7/15', explanation: 'W(blou eerste) = 7/10. Sonder vervanging, W(blou tweede) = 6/9 = 2/3. Gekombineerd: 7/10 × 2/3 = 14/30 = 7/15.' },
        { difficulty: 'Hard', question: 'ʼn Venn-diagram wys 42 atlete: 15 speel net sokker, 12 speel net netbal, 9 speel beide, en 6 speel geen van die twee nie. As ʼn atleet wat sokker speel lukraak gekies word, vind die waarskynlikheid dat hy/sy ook netbal speel.', checkMode: 'auto', correctAnswer: '3/8', answer: '3/8', explanation: 'Atlete wat sokker speel = net sokker + beide = 15 + 9 = 24. Van hierdie speel 9 ook netbal. W = 9/24 = 3/8.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het relatiewe frekwensie, enkel- en saamgestelde gebeurtenis-waarskynlikheid, en Venn-diagramme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor steekproefruimte-roosters of Venn-diagramme na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor komplementêre gebeurtenisse en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
