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
        '<VideoPlaceholder label="Short video explaining the difference between dependent and independent events with coin, dice and ball-drawing examples, and demonstrating the product rule" />',
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
        '<DiagramPlaceholder label="Venn diagram with two overlapping circles (Plays Sport 15, overlap 8, Plays Music 10, neither 7) and a tree diagram showing two draws without replacement from a bag of 5 red and 3 blue balls with adjusted second-branch probabilities" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to use a Venn diagram and a tree diagram to organise and solve probability problems involving dependent events" />',
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
        '<DiagramPlaceholder label="Two-way contingency table: rows are Male (30 passed, 10 failed, total 40) and Female (39 passed, 21 failed, total 60), columns are Passed and Failed, with grand total 100" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine the product rule, addition rule and complementary rule to solve multi-step probability problems, including reading a contingency table to test for independence" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — coin and dice: independent? ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi. Is hierdie onafhanklike gebeurtenisse?',
      answer: 'ja',
      checkMode: 'auto',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes', 'ja', 'Ja'],
      explanation: 'Die uitkoms van die muntstukgooi het geen uitwerking op die dobbelsteengooi nie — dit is heeltemal aparte proefnemings. Dit is onafhanklike gebeurtenisse.',
    },

    // ── Q2 Medium — drawing without replacement: dependent? ──────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 6 rooi en 4 blou balle. Twee word sonder vervanging getrek. Is die trekkings onafhanklik?',
      answer: 'nee',
      checkMode: 'auto',
      correctAnswer: 'no',
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
      answer: '0.12',
      checkMode: 'auto',
      correctAnswer: '0.12',
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
      answer: '0.65',
      checkMode: 'auto',
      correctAnswer: '0.65',
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
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
