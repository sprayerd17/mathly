import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → independent events / first event / individual probabilities (#2563eb)
// orange → dependent events / second event / combined rule applied     (#ea580c)
// green  → product rule / combined probability / final answer          (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DEPENDENT AND INDEPENDENT EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dependent-independent-events',
      title: 'Afhanklike en Onafhanklike Gebeurtenisse',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Twee gebeurtenisse is ${bl('onafhanklik')} as die uitkoms van die een <strong>nie</strong> die waarskynlikheid van die ander beïnvloed nie (bv. om ʼn muntstuk twee keer op te gooi). Twee gebeurtenisse is ${or('afhanklik')} as die uitkoms van die een <strong>wel</strong> die waarskynlikheid van die ander beïnvloed (bv. om kaarte sonder vervanging te trek). Die ${gr('produkreël')} vir onafhanklike gebeurtenisse stel ${gr('W(A en B) = W(A) × W(B)')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onafhanklike gebeurtenisse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afhanklike gebeurtenisse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('produkreël')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteldefinisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onafhanklike Gebeurtenisse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die uitkoms van die eerste gebeurtenis het <strong>geen uitwerking</strong> op die waarskynlikheid van die tweede gebeurtenis nie. Om te weet dat die een gebeur het, vertel jou niks ekstra oor die ander nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Afhanklike Gebeurtenisse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die uitkoms van die eerste gebeurtenis <strong>verander</strong> die waarskynlikheid van die tweede gebeurtenis — gewoonlik omdat die steekproefruimte verklein word (bv. geen vervanging nie).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Produkreël (slegs onafhanklike gebeurtenisse)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As A en B onafhanklik is: ${gr('W(A en B) = W(A) × W(B)')}. Hierdie reël geld <strong>nie</strong> vir afhanklike gebeurtenisse nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om te besluit: onafhanklik of afhanklik?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vra jouself: <em>"Verander die uitkoms van die eerste proefneming wat beskikbaar of moontlik is vir die tweede proefneming?"</em> As ja → ${or('afhanklik')}. As nee → ${bl('onafhanklik')}. Die sleutelfrase wat afhanklike gebeurtenisse aandui, is <strong>"sonder vervanging"</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi. Is hierdie onafhanklike gebeurtenisse? Vind W(kop en ʼn 6 gooi).',
          answer: `${bl('Onafhanklike')} gebeurtenisse — ${gr('W(kop en 6) = 1/12')}`,
          steps: [
            `<strong>Is hierdie onafhanklik?</strong> Ja — die muntstukgooi beïnvloed nie die dobbelsteengooi nie, en die dobbelsteengooi beïnvloed nie die muntstukgooi nie. Die twee proefnemings is heeltemal apart. Dit is ${bl('onafhanklike gebeurtenisse')}.`,
            `Vind die individuele waarskynlikhede: ${bl('W(kop) = 1/2')} en ${bl('W(6) = 1/6')}.`,
            `Pas die ${gr('produkreël')} vir onafhanklike gebeurtenisse toe: ${gr('W(kop en 6) = W(kop) × W(6) = 1/2 × 1/6 = 1/12')}.`,
            `<strong>Antwoord:</strong> Die gebeurtenisse is ${bl('onafhanklik')} en ${gr('W(kop en 6) = 1/12')}.`,
          ],
        },
        {
          question: 'ʼn Sak het 5 rooi en 3 blou balle. Sipho kies een bal, sit dit NIE terug nie, en kies dan weer. Is hierdie gebeurtenisse onafhanklik?',
          answer: `${or('Afhanklike')} gebeurtenisse — om die eerste bal te verwyder verander die waarskynlikhede vir die tweede keuse`,
          steps: [
            `<strong>Is hierdie onafhanklik?</strong> Nee — dit is ${or('afhanklike gebeurtenisse')}. Wanneer Sipho die eerste bal verwyder sonder om dit terug te sit, verminder die totale aantal balle in die sak van 8 na 7.`,
            `Die waarskynlikheid vir die tweede keuse verander afhangende van wat eerste getrek is. As die eerste bal byvoorbeeld rooi was, is daar nou slegs 4 rooi balle uit 7 oorblywende balle (nie 5 uit 8 nie).`,
            `Omdat die uitkoms van die eerste keuse die steekproefruimte vir die tweede keuse <strong>direk verander</strong>, kan ons nie die eenvoudige produkreël gebruik nie — ons moet die ${or('afhanklikheid')} in ag neem.`,
            `<strong>Antwoord:</strong> Die gebeurtenisse is ${or('afhanklik')}. Die ${gr('produkreël W(A en B) = W(A) × W(B)')} geld <strong>nie</strong> hier nie.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen afhanklike en onafhanklike gebeurtenisse verduidelik met muntstuk-, dobbelsteen- en bal-trek-voorbeelde, en die produkreël demonstreer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VENN DIAGRAMS, CONTINGENCY TABLES AND TREE DIAGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'venn-contingency-tree',
      title: 'Venndiagramme, Tweerigting-tabelle en Boomdiagramme vir Gebeurtenisse Wat Nie Noodwendig Onafhanklik Is Nie',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei ons gebruik van <strong>Venndiagramme</strong>, <strong>tweerigting-tabelle</strong> (kontingensietabelle) en <strong>boomdiagramme</strong> uit om waarskynlikheidsprobleme op te los waar gebeurtenisse afhanklik of onafhanklik kan wees. Hierdie visuele hulpmiddels is noodsaaklik om saamgestelde-gebeurtenis-inligting duidelik te organiseer voordat daar bereken word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste gebeurtenis')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede gebeurtenis')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde waarskynlikheid')}</span>` +
        `</div>` +

        // ── Three tools overview ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie organisatoriese hulpmiddels</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Venndiagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wys oorvleuelende versamelings. Die <strong>oorvleueling</strong> is W(A en B). Gebruik die formule: W(A of B) = W(A) + W(B) − W(A en B) om dubbeltelling te vermy.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Tweerigting-tabel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Tabel wat uitkomste volgens twee kategorieë organiseer. Ry- en kolomtotale help jou om waarskynlikhede vinnig af te lees en vir onafhanklikheid te toets.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Boomdiagram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wys opeenvolgende proefnemings as takke. Vermenigvuldig langs die takke om ${gr('gesamentlike waarskynlikhede')} te kry. Veral nuttig wanneer waarskynlikhede tussen proefnemings verander (afhanklike gebeurtenisse).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Organiseer altyd voordat jy bereken</p>` +
        `<p style="margin:0;color:#14532d;">Teken die diagram of vul die tabel in <em>voordat</em> jy enige waarskynlikheid neerskryf. Foute gebeur byna altyd wanneer leerders probeer bereken sonder om eers die volledige prentjie te sien.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '[DIAGRAM: Venn diagram with two overlapping circles labelled "Plays Sport" and "Plays Music", showing 15 in Sport only, 10 in Music only, 8 in the overlap, and 7 outside both, total 40 students] In ʼn klas van 40 leerders speel 23 sport, 18 speel musiek, en 8 speel albei. Gebruik ʼn Venndiagram om te vind hoeveel geen van die twee speel nie.',
          answer: `${gr('7 leerders')} speel geen sport of musiek nie`,
          steps: [
            `Stel die ${bl('Venndiagram')} op met twee oorvleuelende sirkels: ${bl('"Speel Sport"')} en ${or('"Speel Musiek"')}.`,
            `Plaas eers die ${bl('oorvleueling')}: 8 leerders speel albei sport en musiek. Skryf 8 in die snyding.`,
            `Slegs sport (nie musiek nie): 23 − 8 = ${bl('15')}. Slegs musiek (nie sport nie): 18 − 8 = ${or('10')}.`,
            `Tel almal in minstens een sirkel: ${bl('15')} + 8 + ${or('10')} = 33 leerders.`,
            `Geen van beide = Totaal − Minstens een = 40 − 33 = ${gr('7')}.`,
            `<strong>Antwoord:</strong> ${gr('7 leerders')} speel geen sport of musiek nie.`,
          ],
        },
        {
          question: '[DIAGRAM: A tree diagram showing two draws from a bag of 5 red and 3 blue balls without replacement, with branches for Red/Blue on the first draw and the adjusted probabilities for Red/Blue on the second draw] ʼn Sak het 5 rooi en 3 blou balle. Lerato trek twee balle sonder vervanging. Vind W(albei rooi) met behulp van ʼn boomdiagram-benadering.',
          answer: `${gr('W(albei rooi) = 5/14')}`,
          steps: [
            `Teken die ${bl('eerste tak')}: ${bl('W(rooi eerste) = 5/8')} en W(blou eerste) = 3/8.`,
            `Nadat ʼn rooi bal sonder vervanging getrek is, bly 4 rooi en 3 blou balle oor (7 in totaal). Teken die ${or('tweede tak')} vanaf "rooi eerste": ${or('W(rooi tweede | rooi eerste) = 4/7')}.`,
            `Vermenigvuldig langs die "rooi dan rooi"-pad om die ${gr('gekombineerde waarskynlikheid')} te kry: ${gr('W(albei rooi) = 5/8 × 4/7 = 20/56 = 5/14')}.`,
            `<strong>Antwoord:</strong> ${gr('W(albei rooi) = 5/14')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Venndiagram met twee oorvleuelende sirkels (Speel Sport 15, oorvleueling 8, Speel Musiek 10, geen 7) en ʼn boomdiagram wat twee trekkings sonder vervanging uit ʼn sak van 5 rooi en 3 blou balle wys met aangepaste tweede-tak-waarskynlikhede',

      diagramSvg:
        '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="310" y1="10" x2="310" y2="250" stroke="#e2e8f0" stroke-width="1.5"/><rect x="15" y="15" width="270" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="150" y="10" font-size="12" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 40</text><circle cx="110" cy="100" r="65" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="175" cy="100" r="65" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="70" y="45" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">Sport</text><text x="215" y="45" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">Musiek</text><text x="75" y="105" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="142" y="105" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">8</text><text x="210" y="105" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">10</text><text x="150" y="172" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">7 (geen)</text><circle cx="340" cy="130" r="3" fill="#0f1f3d"/><line x1="340" y1="130" x2="430" y2="70" stroke="#dc2626" stroke-width="2"/><line x1="340" y1="130" x2="430" y2="190" stroke="#2563eb" stroke-width="2"/><text x="385" y="93" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">W(Rooi) = 5/8</text><text x="385" y="167" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">W(Blou) = 3/8</text><circle cx="430" cy="70" r="3" fill="#dc2626"/><circle cx="430" cy="190" r="3" fill="#2563eb"/><line x1="430" y1="70" x2="560" y2="45" stroke="#16a34a" stroke-width="2"/><line x1="430" y1="70" x2="560" y2="95" stroke="#16a34a" stroke-width="2"/><text x="495" y="52" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">W(R|R) = 4/7</text><text x="495" y="88" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">W(B|R) = 3/7</text><line x1="430" y1="190" x2="560" y2="165" stroke="#16a34a" stroke-width="2"/><line x1="430" y1="190" x2="560" y2="215" stroke="#16a34a" stroke-width="2"/><text x="495" y="172" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">W(R|B) = 5/7</text><text x="495" y="208" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">W(B|B) = 2/7</text><circle cx="560" cy="45" r="3" fill="#dc2626"/><circle cx="560" cy="95" r="3" fill="#2563eb"/><circle cx="560" cy="165" r="3" fill="#dc2626"/><circle cx="560" cy="215" r="3" fill="#2563eb"/><text x="568" y="42" font-size="10" fill="#0f1f3d" text-anchor="start">RR</text><text x="568" y="92" font-size="10" fill="#0f1f3d" text-anchor="start">RB</text><text x="568" y="162" font-size="10" fill="#0f1f3d" text-anchor="start">BR</text><text x="568" y="212" font-size="10" fill="#0f1f3d" text-anchor="start">BB</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om ʼn Venndiagram en ʼn boomdiagram te gebruik om waarskynlikheidsprobleme met afhanklike gebeurtenisse te organiseer en op te los" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE PRODUCT RULE FOR INDEPENDENT EVENTS AND COMBINING WITH OTHER RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-rule-combined',
      title: 'Die Produkreël vir Onafhanklike Gebeurtenisse en Kombinasie met Ander Reëls',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">Ons kombineer die ${bl('produkreël')} vir onafhanklike gebeurtenisse (${bl('W(A en B) = W(A) × W(B)')}) met die ${or('optellingsreël')} (${or('W(A of B) = W(A) + W(B) − W(A en B)')}) en die ${or('komplementêre reël')} (${or('W(nie A nie) = 1 − W(A)')}) om meer komplekse, meerstap-waarskynlikheidsprobleme op te los.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individuele waarskynlikhede')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gekombineerde reël toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── The three rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie reëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Produkreël')} (onafhanklike gebeurtenisse): ${bl('W(A en B) = W(A) × W(B)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Optellingsreël')}: ${or('W(A of B) = W(A) + W(B) − W(A en B)')}. Trek die oorvleueling af om dubbeltelling te vermy.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Komplementêre Reël')}: ${or('W(nie A nie) = 1 − W(A)')}. Nuttig wanneer dit makliker is om die waarskynlikheid te vind dat ʼn gebeurtenis <em>nie</em> plaasvind nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Strategie: die komplement is dikwels makliker</p>` +
        `<p style="margin:0;color:#14532d;">Wanneer ʼn vraag vra vir "minstens een", is dit byna altyd eenvoudiger om die ${or('komplementêre reël')} te gebruik: vind die waarskynlikheid dat <strong>geen</strong> van die gebeurtenis plaasvind nie, en trek dan van 1 af. Dit vermy die opnoem van baie afsonderlike gevalle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'W(A) = 0,4, W(B) = 0,5, en A en B is onafhanklik. Vind W(A en B), en dan W(A of B).',
          answer: `${gr('W(A en B) = 0,2')} en ${gr('W(A of B) = 0,7')}`,
          steps: [
            `Identifiseer die ${bl('individuele waarskynlikhede')}: ${bl('W(A) = 0,4')} en ${bl('W(B) = 0,5')}.`,
            `Aangesien A en B ${bl('onafhanklik')} is, pas die ${bl('produkreël')} toe: ${or('W(A en B) = W(A) × W(B) = 0,4 × 0,5 = 0,2')}.`,
            `Pas die ${or('optellingsreël')} toe: ${or('W(A of B) = W(A) + W(B) − W(A en B) = 0,4 + 0,5 − 0,2 = 0,7')}.`,
            `<strong>Antwoorde:</strong> ${gr('W(A en B) = 0,2')} en ${gr('W(A of B) = 0,7')}.`,
          ],
        },
        {
          question: 'Thabo gooi ʼn muntstuk 3 keer op. Vind die waarskynlikheid om minstens een kop te kry.',
          answer: `${gr('W(minstens een kop) = 7/8')}`,
          steps: [
            `${or('Strategie — gebruik die komplement:')} "Minstens een kop" sluit baie uitkomste in (K, KK, KKK, ens.). Dit is makliker om W(geen kop nie) te vind en van 1 af te trek.`,
            `${bl('W(stert op een gooi) = 1/2')}. Die drie gooie is ${bl('onafhanklik')}, dus ${or('W(SSS) = 1/2 × 1/2 × 1/2 = 1/8')}.`,
            `Pas die ${or('komplementêre reël')} toe: ${or('W(minstens een kop) = 1 − W(geen kop nie) = 1 − 1/8 = 7/8')}.`,
            `<strong>Antwoord:</strong> ${gr('W(minstens een kop) = 7/8')}.`,
          ],
        },
        {
          question: '[DIAGRAM: A two-way contingency table showing gender (male/female) against pass/fail status for 100 students, with totals: 40 males (30 passed, 10 failed) and 60 females (39 passed, 21 failed)] Gebruik die tweerigting-tabel om W(geslaag | manlik) en W(geslaag | vroulik) te vind, en bepaal dan of slaagstatus onafhanklik van geslag is.',
          answer: `Slaagstatus is ${gr('NIE onafhanklik')} van geslag nie`,
          steps: [
            `Lees die ${bl('individuele waarskynlikhede')} van die tabel: 30 uit 40 mans het geslaag, en 39 uit 60 vrouens het geslaag.`,
            `Bereken voorwaardelike waarskynlikhede: ${bl('W(geslaag | manlik) = 30/40 = 0,75')} en ${bl('W(geslaag | vroulik) = 39/60 = 0,65')}.`,
            `${or('Toets vir onafhanklikheid:')} As slaagstatus onafhanklik van geslag was, sou W(geslaag | manlik) gelyk wees aan W(geslaag | vroulik). Hier is ${or('0,75 ≠ 0,65')}, dus verskil die voorwaardelike waarskynlikhede.`,
            `<strong>Antwoord:</strong> Aangesien die voorwaardelike waarskynlikhede verskil, is slaagstatus ${gr('NIE onafhanklik')} van geslag nie.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Tweerigting-tabel: rye is Manlik (30 geslaag, 10 gedruip, totaal 40) en Vroulik (39 geslaag, 21 gedruip, totaal 60), kolomme is Geslaag en Gedruip, met groottotaal 100',

      diagramSvg:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="20" y1="20" x2="20" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="180" y1="20" x2="180" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="250" y1="20" x2="250" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="320" y1="20" x2="320" y2="180" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="320" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="60" x2="320" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="100" x2="320" y2="100" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="140" x2="320" y2="140" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="180" x2="320" y2="180" stroke="#0f1f3d" stroke-width="2"/><text x="145" y="44" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="215" y="44" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="285" y="44" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Totaal</text><text x="65" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="145" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><text x="215" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="285" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="65" y="124" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="145" y="124" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">39</text><text x="215" y="124" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">21</text><text x="285" y="124" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">60</text><text x="65" y="164" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">Totaal</text><text x="145" y="164" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">69</text><text x="215" y="164" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">31</text><text x="285" y="164" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">100</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die produkreël, optellingsreël en komplementêre reël te kombineer om meerstap-waarskynlikheidsprobleme op te los, insluitend die lees van ʼn tweerigting-tabel om vir onafhanklikheid te toets" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — coin and dice: independent? ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi. Is hierdie onafhanklike gebeurtenisse?',
      answer: 'ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      correctAnswers: ['yes', 'Yes', 'ja', 'Ja'],
      explanation: 'Die uitkoms van die muntstukgooi het geen uitwerking op die dobbelsteengooi nie — dit is heeltemal aparte proefnemings. Dit is onafhanklike gebeurtenisse.',
    },

    // ── Q2 Medium — drawing without replacement: dependent? ──────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 6 rooi en 4 blou balle. Twee word sonder vervanging getrek. Is die trekkings onafhanklik?',
      answer: 'nee',
      checkMode: 'auto',
      correctAnswer: 'nee',
      correctAnswers: ['no', 'No', 'nee', 'Nee'],
      explanation: 'Om sonder vervanging te trek verminder die totale aantal balle, dus hang die waarskynlikheid van die tweede trekking af van wat eerste getrek is — die gebeurtenisse is afhanklik.',
    },

    // ── Q3 Hard — concept: two actions do not guarantee independence ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê alle waarskynlikheidsgebeurtenisse wat twee aksies behels, is outomaties onafhanklik. Is hy korrek? Verduidelik.',
      answer: 'Nee — onafhanklikheid hang af van of die uitkoms van die een gebeurtenis die waarskynlikheid van die ander beïnvloed, nie bloot of daar twee aksies plaasvind nie; om sonder vervanging te trek is ʼn duidelike voorbeeld van afhanklike gebeurtenisse.',
      checkMode: 'self',
    },

    // ── Q4 Easy — product rule for independent events ────────────────────────
    {
      difficulty: 'Easy',
      question: 'W(A) = 0,3, W(B) = 0,4, en A en B is onafhanklik. Vind W(A en B).',
      answer: '0,12',
      checkMode: 'auto',
      correctAnswer: '0,12',
      explanation: 'Pas die produkreël vir onafhanklike gebeurtenisse toe: W(A en B) = W(A) × W(B) = 0,3 × 0,4 = 0,12.',
    },

    // ── Q5 Easy — Venn diagram: how many like neither ────────────────────────
    {
      difficulty: 'Easy',
      question: '[DIAGRAM: Venn diagram with two overlapping circles labelled \'Tea\' and \'Coffee\', showing 12 in Tea only, 9 in Coffee only, 6 in the overlap, and an unlabelled region outside both, total 35 surveyed] Gebruik die diagram om te vind hoeveel geen van tee of koffie hou nie.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Totaal in minstens een sirkel: 12 + 6 + 9 = 27. Geen van beide = 35 − 27 = 8.',
    },

    // ── Q6 Medium — Venn diagram: P(tea only) ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik dieselfde diagram (Tee 12 slegs, Koffie 9 slegs, oorvleueling 6, totaal 35 ondervra), vind W(hou slegs van tee).',
      answer: '12/35',
      checkMode: 'auto',
      correctAnswer: '12/35',
      explanation: 'Slegs tee beteken in die Tee-sirkel maar nie in die oorvleueling nie: 12 mense. W(slegs tee) = 12/35.',
    },

    // ── Q7 Hard — Venn diagram: P(tea or coffee) ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde diagram (Tee 12 slegs, Koffie 9 slegs, oorvleueling 6, totaal 35 ondervra), vind W(hou van tee of koffie).',
      answer: '(12+9+6)/35 = 27/35.',
      checkMode: 'self',
    },

    // ── Q8 Hard — Venn diagram: test independence ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde diagram (Tee 12 slegs, Koffie 9 slegs, oorvleueling 6, totaal 35 ondervra), bepaal of om van tee en van koffie te hou onafhanklike gebeurtenisse is, en toon jou redenasie.',
      answer: 'W(tee) = 18/35. W(koffie) = 15/35. W(tee) × W(koffie) = 18/35 × 15/35 ≈ 0,220. W(tee en koffie) = 6/35 ≈ 0,171. Aangesien hierdie nie gelyk is nie, is die gebeurtenisse nie onafhanklik nie.',
      checkMode: 'self',
    },

    // ── Q9 Medium — tree diagram: P(at least one head) ───────────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: A tree diagram for two coin flips, showing all four branch outcomes HH, HT, TH, TT with probability 1/2 labelled on each branch] Gebruik die boomdiagram om W(minstens een kop) in twee muntstukgooie te vind.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'Uitkomste met minstens een kop: KK, KS, SK — dit is 3 uit 4 ewe waarskynlike uitkomste. W(minstens een kop) = 3/4. Alternatiewelik, W(SS) = 1/4, dus W(minstens een kop) = 1 − 1/4 = 3/4.',
    },

    // ── Q10 Hard — tree diagram: P(exactly one head) ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde boomdiagram (twee muntstukgooie; uitkomste KK, KS, SK, SS elk met waarskynlikheid 1/4), vind W(presies een kop).',
      answer: 'KS en SK gee albei presies een kop: 1/4 + 1/4 = 1/2.',
      checkMode: 'self',
    },

    // ── Q11 Medium — without replacement: P(both white) ──────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 4 wit en 6 swart balle. Twee word sonder vervanging getrek. Vind W(albei wit).',
      answer: '2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      explanation: 'W(wit eerste) = 4/10. W(wit tweede | wit eerste) = 3/9. Gekombineer = 4/10 × 3/9 = 12/90 = 2/15.',
    },

    // ── Q12 Hard — without replacement: P(both black) ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde sak (4 wit, 6 swart, sonder vervanging getrek), vind W(albei swart).',
      answer: 'W(swart eerste) = 6/10. W(swart tweede) = 5/9. Gekombineer = 6/10 × 5/9 = 30/90 = 1/3.',
      checkMode: 'self',
    },

    // ── Q13 Medium — addition rule ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'W(A) = 0,5, W(B) = 0,3, W(A en B) = 0,15. Vind W(A of B).',
      answer: '0,65',
      checkMode: 'auto',
      correctAnswer: '0,65',
      explanation: 'W(A of B) = W(A) + W(B) − W(A en B) = 0,5 + 0,3 − 0,15 = 0,65.',
    },

    // ── Q14 Hard — complementary rule: at least one head in 4 flips ──────────
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 4 keer op. Vind die waarskynlikheid om minstens een kop te kry, deur die komplementêre reël te gebruik.',
      answer: 'W(geen kop nie) = (1/2)⁴ = 1/16. W(minstens een kop) = 1 − 1/16 = 15/16.',
      checkMode: 'self',
    },

    // ── Q15 Medium — contingency table: P(Maths | male) ──────────────────────
    {
      difficulty: 'Medium',
      question: '[DIAGRAM: A two-way contingency table for 80 students showing gender against subject preference — 45 males with 28 preferring Maths and 17 preferring Science; 35 females with 15 preferring Maths and 20 preferring Science] Gebruik die tabel om W(verkies Wiskunde | manlik) te vind.',
      answer: '28/45',
      checkMode: 'auto',
      correctAnswer: '28/45',
      explanation: 'W(verkies Wiskunde | manlik) = 28/45. Daar is 28 mans wat Wiskunde verkies uit 45 mans in totaal.',
    },

    // ── Q16 Hard — contingency table: P(Maths | female) ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde tabel (45 mans: 28 Wiskunde, 17 Wetenskap; 35 vrouens: 15 Wiskunde, 20 Wetenskap), vind W(verkies Wiskunde | vroulik).',
      answer: '15/35 = 3/7.',
      checkMode: 'self',
    },

    // ── Q17 Hard — contingency table: test independence ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde tabel (45 mans: 28 Wiskunde, 17 Wetenskap; 35 vrouens: 15 Wiskunde, 20 Wetenskap), bepaal of vakvoorkeur onafhanklik van geslag is, en toon jou redenasie.',
      answer: 'W(Wiskunde|manlik) = 28/45 ≈ 0,622. W(Wiskunde|vroulik) = 15/35 ≈ 0,429. Aangesien hierdie aansienlik verskil, is vakvoorkeur nie onafhanklik van geslag nie.',
      checkMode: 'self',
    },

    // ── Q18 Hard — at least one defective: complement ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Boks het 3 defektiewe en 7 werkende items. Twee items word sonder vervanging gekies. Vind W(minstens een defektief).',
      answer: 'W(geen defektief nie) = 7/10 × 6/9 = 42/90 = 7/15. W(minstens een defektief) = 1 − 7/15 = 8/15.',
      checkMode: 'self',
    },

    // ── Q19 Hard — combined rules: mutually exclusive vs independent ──────────
    {
      difficulty: 'Hard',
      question: 'Amahle het gebeurtenisse A en B waar W(A) = 0,45, W(B) = 0,35, en W(A of B) = 0,7. Bepaal of A en B onafhanklik, wedersyds uitsluitend, of nie een van die twee is nie.',
      answer: 'W(A en B) = W(A) + W(B) − W(A of B) = 0,45 + 0,35 − 0,7 = 0,1. Aangesien W(A en B) ≠ 0, is hulle nie wedersyds uitsluitend nie. Toets onafhanklikheid: W(A) × W(B) = 0,45 × 0,35 = 0,1575 ≠ 0,1, dus is hulle ook nie onafhanklik nie — die gebeurtenisse is nie wedersyds uitsluitend of onafhanklik nie.',
      checkMode: 'self',
    },

    // ── Q20 Hard — without replacement: two hearts from a standard deck ───────
    {
      difficulty: 'Hard',
      question: 'Thabo trek 2 kaarte uit ʼn standaardpak sonder vervanging. Vind W(albei is harte).',
      answer: 'W(hart eerste) = 13/52. W(hart tweede) = 12/51. Gekombineer = 13/52 × 12/51 = 156/2652 = 1/17.',
      checkMode: 'self',
    },

    // ── Q21 Hard — problem-solving: Venn/addition rule with an unknown overlap ─
    {
      difficulty: 'Hard',
      question: 'Gebeurtenisse A en B is sodanig dat W(A) = 0,4. Dit is bekend dat W(A en B) een derde van W(B) is, d.w.s. W(A en B) = ⅓ × W(B). As W(A of B) = 0,64, stel ʼn vergelyking in W(B) op, los dit op, en bepaal dus W(A en B).',
      answer: 'Laat W(B) = y, sodat W(A en B) = y/3. Optellingsreël: W(A of B) = W(A) + W(B) − W(A en B), dus 0,64 = 0,4 + y − y/3 = 0,4 + (2/3)y. Los op: (2/3)y = 0,24, dus y = 0,36. Daarom is W(B) = 0,36 en W(A en B) = 0,36 ÷ 3 = 0,12. Toets: 0,4 + 0,36 − 0,12 = 0,64 ✓.',
      checkMode: 'self',
    },

    // ── Q22 Hard — problem-solving: tree diagram + addition rule, two branches ─
    {
      difficulty: 'Hard',
      question: 'ʼn Boks bevat 5 rooi penne en 3 blou penne. Naledi trek twee penne uit die boks, een na die ander, sonder vervanging. Teken ʼn boomdiagram en gebruik dit om die waarskynlikheid te vind dat die twee penne wat getrek word, van verskillende kleure is.',
      answer: 'Daar is twee takke wat verskillende kleure gee: rooi-dan-blou en blou-dan-rooi. W(rooi dan blou) = 5/8 × 3/7 = 15/56. W(blou dan rooi) = 3/8 × 5/7 = 15/56. Hierdie twee uitkomste kan nie albei gebeur nie, so tel hulle bymekaar: W(verskillende kleure) = 15/56 + 15/56 = 30/56 = 15/28.',
      checkMode: 'self',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // PRACTICE SETS — 3 stelle van 20 vrae elk (Fase 1: slegs inhoud, nog geen diagramme nie)
  // Blok 1 (0-2):   Afhanklike vs onafhanklike gebeurtenisse — identifiseer en verduidelik
  // Blok 2 (3-5):   Produkreël vir onafhanklike gebeurtenisse
  // Blok 3 (6-9):   Venndiagram met algebraïese versamelingsnotasie [DIAGRAM LATER]
  // Blok 4 (10-12): Tweerigting-tabel — voorwaardelike waarskynlikheid & onafhanklikheidstoets [DIAGRAM LATER]
  // Blok 5 (13-16): Boomdiagram vir opeenvolgende afhanklike gebeurtenisse [DIAGRAM LATER]
  // Blok 6 (17-19): Gekombineerde meerstap-probleme (produk-, optellings- en komplementêre reël)
  // ─────────────────────────────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Afhanklike vs onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'ʼn Wieletjie word gedraai en ʼn muntstuk word opgegooi. Is hierdie onafhanklike gebeurtenisse?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['yes', 'Yes', 'ja', 'Ja'], answer: 'ja', explanation: 'Die uitkoms van die wieletjie het geen uitwerking op die muntstukgooi nie — die twee proefnemings is heeltemal apart. Dit is onafhanklike gebeurtenisse.' },
        { difficulty: 'Easy', question: 'ʼn Boks het 10 sjokolades. Zanele eet een sjokolade, en eet dan ʼn tweede sjokolade sonder om die eerste terug te sit. Is hierdie twee keuses onafhanklik?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['no', 'No', 'nee', 'Nee'], answer: 'nee', explanation: 'Om die eerste sjokolade te eet verminder die totale aantal sjokolades beskikbaar, dus hang die waarskynlikheid van die tipe van die tweede sjokolade af van wat eerste geëet is — die gebeurtenisse is afhanklik.' },
        { difficulty: 'Medium', question: 'Kagiso sê as twee gebeurtenisse na mekaar in tyd plaasvind, moet hulle afhanklik wees. Is hy korrek? Verduidelik met behulp van ʼn voorbeeld.', answer: 'Nee — die volgorde waarin gebeurtenisse plaasvind het niks te doen met of hulle afhanklik is nie. Wat werklik bepaal of gebeurtenisse afhanklik is, is of die uitkoms van die eerste gebeurtenis die waarskynlikheid van die tweede verander. ʼn Muntstuk word byvoorbeeld opgegooi en dan word ʼn dobbelsteen gegooi — hulle vind na mekaar plaas, maar die muntstukuitkoms beïnvloed die dobbelsteenwaarskynlikhede glad nie, dus is hulle steeds onafhanklik al vind hulle in volgorde plaas.', checkMode: 'self' },

        // Blok 2 — Produkreël vir onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'W(A) = 0,6, W(B) = 0,35, en A en B is onafhanklik. Vind W(A en B).', checkMode: 'auto', correctAnswer: '0,21', answer: '0,21', explanation: 'Pas die produkreël vir onafhanklike gebeurtenisse toe: W(A en B) = W(A) × W(B) = 0,6 × 0,35 = 0,21.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 5 rooi en 7 blou albasters. Palesa trek ʼn albaster, noteer die kleur, sit dit terug, en trek dan weer. Vind W(albei trekkings is rooi).', checkMode: 'auto', correctAnswer: '25/144', answer: '25/144', explanation: 'Omdat die albaster teruggesit word, is die twee trekkings onafhanklik, elk met W(rooi) = 5/12. W(albei rooi) = 5/12 × 5/12 = 25/144.' },
        { difficulty: 'Medium', question: 'ʼn Fabrieksmasjien het ʼn waarskynlikheid van 0,9 om ʼn nie-defektiewe item op enige lopie te vervaardig, onafhanklik van ander lopies. Vind die waarskynlikheid dat die volgende 2 items albei nie-defektief is.', checkMode: 'auto', correctAnswer: '0,81', answer: '0,81', explanation: 'Aangesien die lopies onafhanklik is: W(albei nie-defektief) = 0,9 × 0,9 = 0,81.' },

        // Blok 3 — Venndiagram met algebraïese versamelingsnotasie (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Venndiagram wys versamelings A en B binne ʼn steekproefruimte S van 45 leerders: n(A) = 26 leerders speel sport, n(B) = 17 leerders speel musiek, n(A ∩ B) = 9 doen albei. Vind n(A slegs), die aantal wat sport speel maar nie musiek nie.', checkMode: 'auto', correctAnswer: '17', answer: '17', explanation: 'n(A slegs) = n(A) − n(A ∩ B) = 26 − 9 = 17.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 45</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Sport)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Musiek)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 9</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 26</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 17</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde Venndiagram (S = 45, n(A) = 26, n(B) = 17, n(A ∩ B) = 9), vind n(A ∪ B), die aantal wat sport of musiek speel (of albei).', checkMode: 'auto', correctAnswer: '34', answer: '34', explanation: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 26 + 17 − 9 = 34.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 45</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Sport)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Musiek)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 9</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 26</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 17</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde Venndiagram (S = 45, n(A) = 26, n(B) = 17, n(A ∩ B) = 9), vind W(A′ ∩ B′), die waarskynlikheid dat ʼn leerder geen van die twee doen nie.', checkMode: 'auto', correctAnswer: '11/45', answer: '11/45', explanation: 'n(A ∪ B) = 34 (vanaf die vorige vraag). n(A′ ∩ B′) = 45 − 34 = 11 (hierdie gebied is buite albei sirkels — die komplement van A ∪ B). W(A′ ∩ B′) = 11/45.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 45</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Sport)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Musiek)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 9</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 26</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 17</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde Venndiagram (S = 45, n(A) = 26, n(B) = 17, n(A ∩ B) = 9), bepaal of gebeurtenisse A en B onafhanklik is, en toon jou redenasie met W(A), W(B), en W(A ∩ B).', answer: 'W(A) = 26/45. W(B) = 17/45. W(A) × W(B) = 26/45 × 17/45 = 442/2025 ≈ 0,218. W(A ∩ B) = 9/45 = 1/5 = 0,2. Aangesien W(A) × W(B) ≈ 0,218 ≠ 0,2 = W(A ∩ B), is gebeurtenisse A en B NIE onafhanklik nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 45</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Sport)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Musiek)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 9</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 26</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 17</text></svg>' },

        // Blok 4 — Tweerigting-tabel: voorwaardelike waarskynlikheid & onafhanklikheidstoets (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Tweerigting-tabel vir 100 studente wys: 50 mans (35 geslaag, 15 gedruip) en 50 vrouens (30 geslaag, 20 gedruip). Vind W(geslaag | manlik).', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '0.7', '35/50'], answer: '7/10', explanation: 'W(geslaag | manlik) = 35/50 = 7/10. Daar is 35 mans wat geslaag het uit 50 mans in totaal.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">30</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">20</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde tabel (50 mans: 35 geslaag, 15 gedruip; 50 vrouens: 30 geslaag, 20 gedruip), vind W(geslaag | vroulik).', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '0.6', '30/50'], answer: '3/5', explanation: 'W(geslaag | vroulik) = 30/50 = 3/5.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">30</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">20</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde tabel (50 mans: 35 geslaag, 15 gedruip; 50 vrouens: 30 geslaag, 20 gedruip), bepaal of slaagstatus onafhanklik van geslag is, en toon jou redenasie.', answer: 'W(geslaag | manlik) = 35/50 = 0,7. W(geslaag | vroulik) = 30/50 = 0,6. Aangesien hierdie voorwaardelike waarskynlikhede verskil (0,7 ≠ 0,6), is slaagstatus NIE onafhanklik van geslag nie — om manlik of vroulik te wees verander die waarskynlikheid om te slaag.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">30</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">20</text></svg>' },

        // Blok 5 — Boomdiagram vir opeenvolgende afhanklike gebeurtenisse (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Sak het 6 rooi en 4 blou fiches. Sibongile trek twee fiches sonder vervanging. Op ʼn boomdiagram gee die eerste tak W(rooi eerste) = 6/10 en W(blou eerste) = 4/10. Vind W(rooi tweede | rooi eerste), die waarskynlikheid getoon op die tweede tak nadat ʼn rooi fiche eerste getrek is.', checkMode: 'auto', correctAnswer: '5/9', answer: '5/9', explanation: 'Nadat een rooi fiche sonder vervanging verwyder is, bly 5 rooi en 4 blou fiches oor (9 in totaal). W(rooi tweede | rooi eerste) = 5/9.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 6/10</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 4/10</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 5/9</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 4/9</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 6/9</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 3/9</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde boomdiagram (sak van 6 rooi en 4 blou fiches, sonder vervanging getrek; W(rooi eerste) = 6/10, W(rooi tweede | rooi eerste) = 5/9), vind W(albei fiches is rooi).', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '30/90'], answer: '1/3', explanation: 'Vermenigvuldig langs die "rooi dan rooi"-tak: W(albei rooi) = 6/10 × 5/9 = 30/90 = 1/3.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 6/10</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 4/10</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 5/9</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 4/9</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 6/9</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 3/9</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 6 rooi en 4 blou fiches, sonder vervanging getrek), vind W(albei fiches is blou).', answer: 'W(blou eerste) = 4/10. Nadat ʼn blou fiche verwyder is, bly 6 rooi en 3 blou oor (9 in totaal), dus W(blou tweede | blou eerste) = 3/9. W(albei blou) = 4/10 × 3/9 = 12/90 = 2/15.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 6/10</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 4/10</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 5/9</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 4/9</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 6/9</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 3/9</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 6 rooi en 4 blou fiches, sonder vervanging getrek), vind W(minstens een fiche is rooi) deur die komplementêre reël te gebruik.', answer: 'W(geen rooi nie) = W(albei blou) = 2/15 (vanaf die vorige vraag). W(minstens een rooi) = 1 − 2/15 = 13/15.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 6/10</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 4/10</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 5/9</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 4/9</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 6/9</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 3/9</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },

        // Blok 6 — Gekombineerde meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'W(A) = 0,5, W(B) = 0,4, en A en B is onafhanklik. Vind W(A en B) deur die produkreël te gebruik, en dan W(A of B) deur die optellingsreël te gebruik.', answer: 'W(A en B) = W(A) × W(B) = 0,5 × 0,4 = 0,2 (produkreël, aangesien onafhanklik). W(A of B) = W(A) + W(B) − W(A en B) = 0,5 + 0,4 − 0,2 = 0,7 (optellingsreël).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 3 keer gegooi. Vind, deur die komplementêre reël te gebruik, die waarskynlikheid om minstens een 6 te gooi.', answer: 'W(geen 6 op een gooi nie) = 5/6. Die drie gooie is onafhanklik, dus W(geen 6 in 3 gooie nie) = (5/6)³ = 125/216. W(minstens een 6) = 1 − 125/216 = 91/216.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boks het 12 items, waarvan 4 defektief is. Twee items word sonder vervanging gekies. Vind W(minstens een is defektief).', answer: 'W(geen defektief nie) = W(albei nie-defektief) = 8/12 × 7/11 = 56/132 = 14/33. W(minstens een defektief) = 1 − 14/33 = 19/33.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het afhanklike en onafhanklike gebeurtenisse, Venndiagramme, tweerigting-tabelle, boomdiagramme, en die kombinering van die produk-, optellings- en komplementêre reël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor boomdiagramme of die kombinering van die waarskynlikheidsreëls, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor Venndiagramme en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Afhanklike vs onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word gegooi en ʼn wieletjie word gedraai. Is hierdie onafhanklike gebeurtenisse?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['yes', 'Yes', 'ja', 'Ja'], answer: 'ja', explanation: 'Die uitkoms van die dobbelsteengooi het geen uitwerking op die wieletjie nie — die twee proefnemings is heeltemal apart. Dit is onafhanklike gebeurtenisse.' },
        { difficulty: 'Easy', question: 'ʼn Laai het 12 sokkies. Thabo haal een sokkie uit, en haal dan ʼn tweede sokkie uit sonder om die eerste terug te sit. Is hierdie twee keuses onafhanklik?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['no', 'No', 'nee', 'Nee'], answer: 'nee', explanation: 'Om die eerste sokkie te verwyder verminder die totale aantal sokkies beskikbaar, dus hang die waarskynlikheid van die kleur van die tweede sokkie af van wat eerste verwyder is — die gebeurtenisse is afhanklik.' },
        { difficulty: 'Medium', question: 'Naledi sê as twee gebeurtenisse verskillende voorwerpe behels (soos ʼn muntstuk en ʼn dobbelsteen), moet hulle onafhanklik wees. Is sy korrek? Verduidelik met behulp van ʼn voorbeeld.', answer: 'Nie noodwendig nie — die gebruik van verskillende voorwerpe maak onafhanklikheid waarskynlik in eenvoudige gevalle, maar wat werklik onafhanklikheid bepaal, is of die uitkoms van die een gebeurtenis die waarskynlikheid van die ander verander, nie bloot of verskillende voorwerpe betrokke is nie. As twee leerders byvoorbeeld elkeen ʼn naam uit DIESELFDE hoed trek sonder vervanging, trek verskillende mense, maar die gebeurtenisse is steeds afhanklik omdat die eerste trekking verander wat oorbly vir die tweede.', checkMode: 'self' },

        // Blok 2 — Produkreël vir onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'W(A) = 0,7, W(B) = 0,25, en A en B is onafhanklik. Vind W(A en B).', checkMode: 'auto', correctAnswer: '0,175', answer: '0,175', explanation: 'Pas die produkreël vir onafhanklike gebeurtenisse toe: W(A en B) = W(A) × W(B) = 0,7 × 0,25 = 0,175.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 6 groen en 4 geel albasters. Amahle trek ʼn albaster, noteer die kleur, sit dit terug, en trek dan weer. Vind W(albei trekkings is groen).', checkMode: 'auto', correctAnswer: '9/25', answer: '9/25', explanation: 'Omdat die albaster teruggesit word, is die twee trekkings onafhanklik, elk met W(groen) = 6/10 = 3/5. W(albei groen) = 3/5 × 3/5 = 9/25.' },
        { difficulty: 'Medium', question: 'ʼn Masjien het ʼn waarskynlikheid van 0,8 om ʼn nie-defektiewe item op enige lopie te vervaardig, onafhanklik van ander lopies. Vind die waarskynlikheid dat die volgende 2 items albei nie-defektief is.', checkMode: 'auto', correctAnswer: '0,64', answer: '0,64', explanation: 'Aangesien die lopies onafhanklik is: W(albei nie-defektief) = 0,8 × 0,8 = 0,64.' },

        // Blok 3 — Venndiagram met algebraïese versamelingsnotasie (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Venndiagram wys versamelings A en B binne ʼn steekproefruimte S van 50 leerders: n(A) = 24 leerders lees boeke, n(B) = 19 leerders speel videospeletjies, n(A ∩ B) = 11 doen albei. Vind n(A slegs), die aantal wat boeke lees maar nie videospeletjies speel nie.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'n(A slegs) = n(A) − n(A ∩ B) = 24 − 11 = 13.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 50</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Lees)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Speletjies)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 11</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 24</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 19</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde Venndiagram (S = 50, n(A) = 24, n(B) = 19, n(A ∩ B) = 11), vind n(A ∪ B), die aantal wat boeke lees of videospeletjies speel (of albei).', checkMode: 'auto', correctAnswer: '32', answer: '32', explanation: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 24 + 19 − 11 = 32.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 50</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Lees)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Speletjies)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 11</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 24</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 19</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde Venndiagram (S = 50, n(A) = 24, n(B) = 19, n(A ∩ B) = 11), vind W(A′ ∩ B′), die waarskynlikheid dat ʼn leerder geen van die twee aktiwiteite doen nie.', checkMode: 'auto', correctAnswer: '9/25', correctAnswers: ['9/25', '18/50'], answer: '9/25', explanation: 'n(A ∪ B) = 32 (vanaf die vorige vraag). n(A′ ∩ B′) = 50 − 32 = 18 (hierdie gebied is buite albei sirkels — die komplement van A ∪ B). W(A′ ∩ B′) = 18/50 = 9/25.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 50</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Lees)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Speletjies)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 11</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 24</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 19</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde Venndiagram (S = 50, n(A) = 24, n(B) = 19, n(A ∩ B) = 11), bepaal of gebeurtenisse A en B onafhanklik is, en toon jou redenasie met W(A), W(B), en W(A ∩ B).', answer: 'W(A) = 24/50 = 12/25. W(B) = 19/50. W(A) × W(B) = 12/25 × 19/50 = 228/1250 = 114/625 ≈ 0,182. W(A ∩ B) = 11/50 = 0,22. Aangesien W(A) × W(B) ≈ 0,182 ≠ 0,22 = W(A ∩ B), is gebeurtenisse A en B NIE onafhanklik nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 50</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Lees)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Speletjies)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 11</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 24</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 19</text></svg>' },

        // Blok 4 — Tweerigting-tabel: voorwaardelike waarskynlikheid & onafhanklikheidstoets (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Tweerigting-tabel vir 100 studente wys: 60 mans (42 geslaag, 18 gedruip) en 40 vrouens (22 geslaag, 18 gedruip). Vind W(geslaag | manlik).', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '0.7', '42/60'], answer: '7/10', explanation: 'W(geslaag | manlik) = 42/60 = 7/10. Daar is 42 mans wat geslaag het uit 60 mans in totaal.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">42</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">22</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">18</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde tabel (60 mans: 42 geslaag, 18 gedruip; 40 vrouens: 22 geslaag, 18 gedruip), vind W(geslaag | vroulik).', checkMode: 'auto', correctAnswer: '11/20', correctAnswers: ['11/20', '0.55', '22/40'], answer: '11/20', explanation: 'W(geslaag | vroulik) = 22/40 = 11/20.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">42</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">22</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">18</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde tabel (60 mans: 42 geslaag, 18 gedruip; 40 vrouens: 22 geslaag, 18 gedruip), bepaal of slaagstatus onafhanklik van geslag is, en toon jou redenasie.', answer: 'W(geslaag | manlik) = 42/60 = 0,7. W(geslaag | vroulik) = 22/40 = 0,55. Aangesien hierdie voorwaardelike waarskynlikhede verskil (0,7 ≠ 0,55), is slaagstatus NIE onafhanklik van geslag nie — om manlik of vroulik te wees verander die waarskynlikheid om te slaag.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">42</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">22</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">18</text></svg>' },

        // Blok 5 — Boomdiagram vir opeenvolgende afhanklike gebeurtenisse (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Sak het 7 rooi en 5 blou fiches. Lerato trek twee fiches sonder vervanging. Op ʼn boomdiagram gee die eerste tak W(rooi eerste) = 7/12 en W(blou eerste) = 5/12. Vind W(rooi tweede | rooi eerste), die waarskynlikheid getoon op die tweede tak nadat ʼn rooi fiche eerste getrek is.', checkMode: 'auto', correctAnswer: '6/11', answer: '6/11', explanation: 'Nadat een rooi fiche sonder vervanging verwyder is, bly 6 rooi en 5 blou fiches oor (11 in totaal). W(rooi tweede | rooi eerste) = 6/11.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 7/12</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 5/12</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 6/11</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 5/11</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 7/11</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 4/11</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde boomdiagram (sak van 7 rooi en 5 blou fiches, sonder vervanging getrek; W(rooi eerste) = 7/12, W(rooi tweede | rooi eerste) = 6/11), vind W(albei fiches is rooi).', checkMode: 'auto', correctAnswer: '7/22', answer: '7/22', explanation: 'Vermenigvuldig langs die "rooi dan rooi"-tak: W(albei rooi) = 7/12 × 6/11 = 42/132 = 7/22.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 7/12</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 5/12</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 6/11</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 5/11</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 7/11</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 4/11</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 7 rooi en 5 blou fiches, sonder vervanging getrek), vind W(albei fiches is blou).', answer: 'W(blou eerste) = 5/12. Nadat ʼn blou fiche verwyder is, bly 7 rooi en 4 blou oor (11 in totaal), dus W(blou tweede | blou eerste) = 4/11. W(albei blou) = 5/12 × 4/11 = 20/132 = 5/33.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 7/12</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 5/12</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 6/11</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 5/11</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 7/11</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 4/11</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 7 rooi en 5 blou fiches, sonder vervanging getrek), vind W(minstens een fiche is rooi) deur die komplementêre reël te gebruik.', answer: 'W(geen rooi nie) = W(albei blou) = 5/33 (vanaf die vorige vraag). W(minstens een rooi) = 1 − 5/33 = 28/33.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 7/12</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 5/12</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 6/11</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 5/11</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 7/11</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 4/11</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },

        // Blok 6 — Gekombineerde meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'W(A) = 0,6, W(B) = 0,3, en A en B is onafhanklik. Vind W(A en B) deur die produkreël te gebruik, en dan W(A of B) deur die optellingsreël te gebruik.', answer: 'W(A en B) = W(A) × W(B) = 0,6 × 0,3 = 0,18 (produkreël, aangesien onafhanklik). W(A of B) = W(A) + W(B) − W(A en B) = 0,6 + 0,3 − 0,18 = 0,72 (optellingsreël).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Muntstuk word 4 keer opgegooi. Vind, deur die komplementêre reël te gebruik, die waarskynlikheid om minstens een kop te kry.', answer: 'W(stert op een gooi) = 1/2. Die vier gooie is onafhanklik, dus W(geen koppe in 4 gooie nie) = (1/2)⁴ = 1/16. W(minstens een kop) = 1 − 1/16 = 15/16.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boks het 15 items, waarvan 5 defektief is. Twee items word sonder vervanging gekies. Vind W(minstens een is defektief).', answer: 'W(geen defektief nie) = W(albei nie-defektief) = 10/15 × 9/14 = 90/210 = 3/7. W(minstens een defektief) = 1 − 3/7 = 4/7.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het afhanklike en onafhanklike gebeurtenisse, Venndiagramme, tweerigting-tabelle, boomdiagramme, en die kombinering van die produk-, optellings- en komplementêre reël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor boomdiagramme of die kombinering van die waarskynlikheidsreëls, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor Venndiagramme en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Afhanklike vs onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie word gedraai. Is hierdie onafhanklike gebeurtenisse?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['yes', 'Yes', 'ja', 'Ja'], answer: 'ja', explanation: 'Die uitkoms van die muntstukgooi het geen uitwerking op die wieletjie nie — die twee proefnemings is heeltemal apart. Dit is onafhanklike gebeurtenisse.' },
        { difficulty: 'Easy', question: 'ʼn Fles het 15 lekkers. Bongani haal een lekker uit, en haal dan ʼn tweede lekker uit sonder om die eerste terug te sit. Is hierdie twee keuses onafhanklik?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['no', 'No', 'nee', 'Nee'], answer: 'nee', explanation: 'Om die eerste lekker te verwyder verminder die totale aantal lekkers beskikbaar, dus hang die waarskynlikheid van die geur van die tweede lekker af van wat eerste verwyder is — die gebeurtenisse is afhanklik.' },
        { difficulty: 'Medium', question: 'Sipho sê om ʼn item terug te sit nadat dit getrek is, maak twee trekkings altyd onafhanklik. Is hy korrek? Verduidelik.', answer: 'Ja — as ʼn item na elke trekking teruggesit word, is die steekproefruimte presies dieselfde vir elke trekking, dus kan die uitkoms van die eerste trekking nie die waarskynlikhede van die tweede trekking beïnvloed nie. Vervanging is presies wat onafhanklikheid herstel; dit is die gebrek aan vervanging wat afhanklike gebeurtenisse skep deur die steekproefruimte te verander.', checkMode: 'self' },

        // Blok 2 — Produkreël vir onafhanklike gebeurtenisse (Easy-Medium)
        { difficulty: 'Easy', question: 'W(A) = 0,45, W(B) = 0,8, en A en B is onafhanklik. Vind W(A en B).', checkMode: 'auto', correctAnswer: '0,36', answer: '0,36', explanation: 'Pas die produkreël vir onafhanklike gebeurtenisse toe: W(A en B) = W(A) × W(B) = 0,45 × 0,8 = 0,36.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 4 oranje en 5 pers albasters. Kagiso trek ʼn albaster, noteer die kleur, sit dit terug, en trek dan weer. Vind W(albei trekkings is oranje).', checkMode: 'auto', correctAnswer: '16/81', answer: '16/81', explanation: 'Omdat die albaster teruggesit word, is die twee trekkings onafhanklik, elk met W(oranje) = 4/9. W(albei oranje) = 4/9 × 4/9 = 16/81.' },
        { difficulty: 'Medium', question: 'ʼn Masjien het ʼn waarskynlikheid van 0,85 om ʼn nie-defektiewe item op enige lopie te vervaardig, onafhanklik van ander lopies. Vind die waarskynlikheid dat die volgende 2 items albei nie-defektief is.', checkMode: 'auto', correctAnswer: '0,7225', answer: '0,7225', explanation: 'Aangesien die lopies onafhanklik is: W(albei nie-defektief) = 0,85 × 0,85 = 0,7225.' },

        // Blok 3 — Venndiagram met algebraïese versamelingsnotasie (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Venndiagram wys versamelings A en B binne ʼn steekproefruimte S van 40 leerders: n(A) = 20 leerders studeer Kuns, n(B) = 15 leerders studeer Drama, n(A ∩ B) = 7 doen albei. Vind n(A slegs), die aantal wat Kuns studeer maar nie Drama nie.', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'n(A slegs) = n(A) − n(A ∩ B) = 20 − 7 = 13.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 40</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Kuns)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Drama)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 7</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 20</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 15</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde Venndiagram (S = 40, n(A) = 20, n(B) = 15, n(A ∩ B) = 7), vind n(A ∪ B), die aantal wat Kuns of Drama studeer (of albei).', checkMode: 'auto', correctAnswer: '28', answer: '28', explanation: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 20 + 15 − 7 = 28.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 40</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Kuns)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Drama)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 7</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 20</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 15</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde Venndiagram (S = 40, n(A) = 20, n(B) = 15, n(A ∩ B) = 7), vind W(A′ ∩ B′), die waarskynlikheid dat ʼn leerder geen van die twee vakke studeer nie.', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '12/40'], answer: '3/10', explanation: 'n(A ∪ B) = 28 (vanaf die vorige vraag). n(A′ ∩ B′) = 40 − 28 = 12 (hierdie gebied is buite albei sirkels — die komplement van A ∪ B). W(A′ ∩ B′) = 12/40 = 3/10.', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 40</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Kuns)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Drama)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 7</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 20</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 15</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde Venndiagram (S = 40, n(A) = 20, n(B) = 15, n(A ∩ B) = 7), bepaal of gebeurtenisse A en B onafhanklik is, en toon jou redenasie met W(A), W(B), en W(A ∩ B).', answer: 'W(A) = 20/40 = 1/2. W(B) = 15/40 = 3/8. W(A) × W(B) = 1/2 × 3/8 = 3/16 = 0,1875. W(A ∩ B) = 7/40 = 0,175. Aangesien W(A) × W(B) = 0,1875 ≠ 0,175 = W(A ∩ B), is gebeurtenisse A en B NIE onafhanklik nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="290" height="170" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="160" y="12" font-size="13" fill="#0f1f3d" text-anchor="middle" font-weight="700">S = 40</text><circle cx="130" cy="105" r="75" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="205" cy="105" r="75" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="85" y="45" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">A (Kuns)</text><text x="250" y="45" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">B (Drama)</text><text x="167" y="110" font-size="15" fill="#16a34a" font-weight="700" text-anchor="middle">n(A∩B) = 7</text><text x="160" y="218" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">n(A) = 20</text><text x="160" y="238" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">n(B) = 15</text></svg>' },

        // Blok 4 — Tweerigting-tabel: voorwaardelike waarskynlikheid & onafhanklikheidstoets (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Tweerigting-tabel vir 100 studente wys: 45 mans (33 geslaag, 12 gedruip) en 55 vrouens (34 geslaag, 21 gedruip). Vind W(geslaag | manlik).', checkMode: 'auto', correctAnswer: '11/15', correctAnswers: ['11/15', '33/45'], answer: '11/15', explanation: 'W(geslaag | manlik) = 33/45 = 11/15. Daar is 33 mans wat geslaag het uit 45 mans in totaal.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">33</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">34</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">21</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde tabel (45 mans: 33 geslaag, 12 gedruip; 55 vrouens: 34 geslaag, 21 gedruip), vind W(geslaag | vroulik).', checkMode: 'auto', correctAnswer: '34/55', answer: '34/55', explanation: 'W(geslaag | vroulik) = 34/55.', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">33</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">34</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">21</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde tabel (45 mans: 33 geslaag, 12 gedruip; 55 vrouens: 34 geslaag, 21 gedruip), bepaal of slaagstatus onafhanklik van geslag is, en toon jou redenasie.', answer: 'W(geslaag | manlik) = 33/45 ≈ 0,733. W(geslaag | vroulik) = 34/55 ≈ 0,618. Aangesien hierdie voorwaardelike waarskynlikhede verskil (0,733 ≠ 0,618), is slaagstatus NIE onafhanklik van geslag nie — om manlik of vroulik te wees verander die waarskynlikheid om te slaag.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="290" y1="20" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="20" x2="290" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="70" x2="290" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="120" x2="290" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="170" x2="290" y2="170" stroke="#0f1f3d" stroke-width="2"/><text x="65" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle"></text><text x="155" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Geslaag</text><text x="245" y="50" font-size="14" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gedruip</text><text x="65" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">Manlik</text><text x="155" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">33</text><text x="245" y="100" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="65" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">Vroulik</text><text x="155" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">34</text><text x="245" y="150" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">21</text></svg>' },

        // Blok 5 — Boomdiagram vir opeenvolgende afhanklike gebeurtenisse (Medium-Hard) [DIAGRAM LATER]
        { difficulty: 'Medium', question: 'ʼn Sak het 5 rooi en 3 blou fiches. Palesa trek twee fiches sonder vervanging. Op ʼn boomdiagram gee die eerste tak W(rooi eerste) = 5/8 en W(blou eerste) = 3/8. Vind W(rooi tweede | rooi eerste), die waarskynlikheid getoon op die tweede tak nadat ʼn rooi fiche eerste getrek is.', checkMode: 'auto', correctAnswer: '4/7', answer: '4/7', explanation: 'Nadat een rooi fiche sonder vervanging verwyder is, bly 4 rooi en 3 blou fiches oor (7 in totaal). W(rooi tweede | rooi eerste) = 4/7.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 5/8</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 3/8</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 4/7</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 3/7</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 5/7</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 2/7</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde boomdiagram (sak van 5 rooi en 3 blou fiches, sonder vervanging getrek; W(rooi eerste) = 5/8, W(rooi tweede | rooi eerste) = 4/7), vind W(albei fiches is rooi).', checkMode: 'auto', correctAnswer: '5/14', answer: '5/14', explanation: 'Vermenigvuldig langs die "rooi dan rooi"-tak: W(albei rooi) = 5/8 × 4/7 = 20/56 = 5/14.', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 5/8</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 3/8</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 4/7</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 3/7</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 5/7</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 2/7</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 5 rooi en 3 blou fiches, sonder vervanging getrek), vind W(albei fiches is blou).', answer: 'W(blou eerste) = 3/8. Nadat ʼn blou fiche verwyder is, bly 5 rooi en 2 blou oor (7 in totaal), dus W(blou tweede | blou eerste) = 2/7. W(albei blou) = 3/8 × 2/7 = 6/56 = 3/28.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 5/8</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 3/8</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 4/7</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 3/7</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 5/7</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 2/7</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde boomdiagram (sak van 5 rooi en 3 blou fiches, sonder vervanging getrek), vind W(minstens een fiche is rooi) deur die komplementêre reël te gebruik.', answer: 'W(geen rooi nie) = W(albei blou) = 3/28 (vanaf die vorige vraag). W(minstens een rooi) = 1 − 3/28 = 25/28.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="140" r="4" fill="#0f1f3d"/><line x1="20" y1="140" x2="170" y2="70" stroke="#2563eb" stroke-width="2"/><line x1="20" y1="140" x2="170" y2="210" stroke="#ea580c" stroke-width="2"/><text x="90" y="97" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">P(Rooi) = 5/8</text><text x="90" y="191" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">P(Blou) = 3/8</text><circle cx="170" cy="70" r="4" fill="#2563eb"/><circle cx="170" cy="210" r="4" fill="#ea580c"/><text x="170" y="58" font-size="12" fill="#2563eb" text-anchor="middle">Rooi</text><text x="170" y="232" font-size="12" fill="#ea580c" text-anchor="middle">Blou</text><line x1="170" y1="70" x2="400" y2="35" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="70" x2="400" y2="105" stroke="#16a34a" stroke-width="2"/><text x="285" y="44.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Rooi) = 4/7</text><text x="285" y="101.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Rooi) = 3/7</text><line x1="170" y1="210" x2="400" y2="175" stroke="#16a34a" stroke-width="2"/><line x1="170" y1="210" x2="400" y2="245" stroke="#16a34a" stroke-width="2"/><text x="285" y="184.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Rooi|Blou) = 5/7</text><text x="285" y="241.5" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">P(Blou|Blou) = 2/7</text><circle cx="400" cy="35" r="4" fill="#0f1f3d"/><circle cx="400" cy="105" r="4" fill="#0f1f3d"/><circle cx="400" cy="175" r="4" fill="#0f1f3d"/><circle cx="400" cy="245" r="4" fill="#0f1f3d"/><text x="400" y="25" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Rooi</text><text x="400" y="123" font-size="11" fill="#0f1f3d" text-anchor="middle">Rooi, Blou</text><text x="400" y="165" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Rooi</text><text x="400" y="263" font-size="11" fill="#0f1f3d" text-anchor="middle">Blou, Blou</text></svg>' },

        // Blok 6 — Gekombineerde meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'W(A) = 0,45, W(B) = 0,5, en A en B is onafhanklik. Vind W(A en B) deur die produkreël te gebruik, en dan W(A of B) deur die optellingsreël te gebruik.', answer: 'W(A en B) = W(A) × W(B) = 0,45 × 0,5 = 0,225 (produkreël, aangesien onafhanklik). W(A of B) = W(A) + W(B) − W(A en B) = 0,45 + 0,5 − 0,225 = 0,725 (optellingsreël).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi en 7 blou albasters. Amahle trek ʼn albaster, noteer die kleur, sit dit terug, en trek dan weer — sy herhaal dit ʼn totaal van 3 keer. Vind, deur die komplementêre reël te gebruik, die waarskynlikheid dat minstens een van die 3 trekkings rooi is.', answer: 'W(nie rooi op een trekking nie) = 7/10. Aangesien die albaster elke keer teruggesit word, is die drie trekkings onafhanklik, dus W(geen rooi in 3 trekkings nie) = (7/10)³ = 343/1000. W(minstens een rooi) = 1 − 343/1000 = 657/1000.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boks het 10 items, waarvan 3 defektief is. Twee items word sonder vervanging gekies. Vind W(minstens een is defektief).', answer: 'W(geen defektief nie) = W(albei nie-defektief) = 7/10 × 6/9 = 42/90 = 7/15. W(minstens een defektief) = 1 − 7/15 = 8/15.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het afhanklike en onafhanklike gebeurtenisse, Venndiagramme, tweerigting-tabelle, boomdiagramme, en die kombinering van die produk-, optellings- en komplementêre reël onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor boomdiagramme of die kombinering van die waarskynlikheidsreëls, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor Venndiagramme en tweerigting-tabelle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 22,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
