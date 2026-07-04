import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → individual events / given probabilities / known values      (#2563eb)
// orange → the rule or formula being applied                          (#ea580c)
// green  → combined result / final answer                             (#16a34a)
// red    → the complement / the "not" case / restricted item          (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE ADDITION RULE AND COMPLEMENTARY EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'addition-rule-complementary-events',
      title: 'Die Optellingsreël en Komplementêre Gebeurtenisse',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Jy weet reeds hoe om Venn-diagramme, boomdiagramme en gebeurlikheidstabelle vir afhanklike en onafhanklike gebeurtenisse uit Graad 11 te gebruik. In Graad 12 formaliseer ons die reël vir die kombinasie van "of"-gebeurtenisse in een identiteit, en hersien ons die komplementêre reël wat jy dwarsdeur hierdie onderwerp sal gebruik:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('P(A of B) = P(A) + P(B) − P(A en B)')}</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individuele gebeurtenisse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde resultaat')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('komplement')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Die Optellingsreël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir ENIGE twee gebeurtenisse: ${gr('P(A of B) = P(A) + P(B) − P(A en B)')}. Jy trek P(A en B) af omdat dit anders twee keer getel sou word — een keer in P(A) en een keer in P(B).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Wedersyds Uitsluitende Gebeurtenisse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebeurtenisse wat <strong>nie gelyktydig kan plaasvind nie</strong> (geen oorvleueling nie). Dan is ${bl('P(A en B) = 0')}, so die reël vereenvoudig na ${bl('P(A of B) = P(A) + P(B)')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Komplementêre Gebeurtenisse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A en A' (nie-A) is komplementêr as hulle wedersyds uitsluitend is EN elke moontlike uitkoms dek. Dan is ${re("P(A') = 1 − P(A)")}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wanneer om die komplement te gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer 'n vraag vra vir die waarskynlikheid van <strong>"ten minste een"</strong> van iets, is dit byna altyd vinniger om ${re("P(geen) te vind en P(ten minste een) = 1 − P(geen) te gebruik")} in plaas daarvan om elke individuele geval bymekaar te tel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "'n Kaart word uit 'n standaard pak van 52 kaarte getrek. Bepaal P('n hart of 'n heer).",
          answer: `${gr('P(hart of heer) = 16/52 = 4/13')}`,
          steps: [
            `Bepaal die individuele waarskynlikhede: ${bl('P(hart) = 13/52')} en ${bl('P(heer) = 4/52')}.`,
            `Hierdie gebeurtenisse ${or('oorvleuel')} — die heer van harte is beide 'n hart ÉN 'n heer, so hulle is nie wedersyds uitsluitend nie. Bepaal ${or('P(hart en heer) = 1/52')} (net een kaart is albei).`,
            `Pas die ${gr('optellingsreël')} toe: ${gr('P(hart of heer) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13')}.`,
            `<strong>Antwoord:</strong> ${gr('P(hart of heer) = 4/13')}. Sonder om die oorvleueling af te trek, sou die heer van harte twee keer getel gewees het.`,
          ],
        },
        {
          question: "Die waarskynlikheid dat dit môre reën is 0,3. Bepaal die waarskynlikheid dat dit NIE môre reën nie.",
          answer: `${re("P(nie reën nie) = 0,7")}`,
          steps: [
            `Reën en geen reën is ${bl('komplementêre gebeurtenisse')} — presies een daarvan moet plaasvind, en hulle kan nie albei plaasvind nie.`,
            `Pas die ${re('komplementêre reël')} toe: ${re("P(nie reën nie) = 1 − P(reën) = 1 − 0,3 = 0,7")}.`,
            `<strong>Antwoord:</strong> ${re('P(nie reën nie) = 0,7')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die optellingsreël P(A of B) = P(A) + P(B) min P(A en B) afy met \'n oorvleuelende Venn-diagram, en dan die komplementêre reël vir ten-minste-een-probleme wys" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee oorvleuelende sirkels in \'n Venn-diagram gemerk A en B wys, met die oorvleuelingsarea in oranje uitgelig om te wys waarom dit net een keer afgetrek moet word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE FUNDAMENTAL COUNTING PRINCIPLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fundamental-counting-principle',
      title: 'Die Fundamentele Telbeginsel',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons die waarskynlikheid van 'n spesifieke rangskikking kan bereken, moet ons eers kan <strong>tel</strong> hoeveel rangskikkings moontlik is. Die ${gr('fundamentele telbeginsel')} (ook die vermenigvuldigingsbeginsel genoem) is die hulpmiddel hiervoor:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">As een keuse op ${bl('m')} maniere gemaak kan word en 'n tweede keuse op ${or('n')} maniere, kan die twee keuses saam op ${gr('m × n')} maniere gemaak word.</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste keuse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('latere keuses')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('totale telling')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Strek Uit na Baie Keuses</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginsel is nie beperk tot twee keuses nie — vir drie of meer onafhanklike keuses, vermenigvuldig al die tellings saam: ${bl('m × n × p × ...')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Keuses Kan Verminder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As 'n item nie herbruik kan word nie (bv. mense rangskik, of letters sonder herhaling), verminder die aantal beskikbare opsies met een by elke stap.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Boomdiagramme Illustreer Dit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">'n Boomdiagram is eintlik die telbeginsel wat tak vir tak uitgeteken word — die finale takke tel gee dieselfde antwoord as vermenigvuldig.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Herken 'n telbeginsel-vraag</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk vir frases soos <em>"hoeveel verskillende maniere"</em>, <em>"hoeveel moontlike uitkomste"</em>, of <em>"hoeveel kodes/wagwoorde/nommerplate kan gevorm word"</em> — hierdie word byna altyd opgelos deur die aantal opsies by elke stap te vermenigvuldig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "'n Restaurant bied 'n ete-aanbod: 4 voorgeregte, 6 hoofgeregte en 3 nagereg. Hoeveel verskillende 3-gang-etes kan gemaak word?",
          answer: `${gr('4 × 6 × 3 = 72 verskillende etes')}`,
          steps: [
            `Identifiseer die aantal keuses by elke stap: ${bl('4 voorgeregte')}, ${bl('6 hoofgeregte')}, ${bl('3 nageregte')}.`,
            `Elke keuse word onafhanklik van die ander gemaak, so pas die ${or('fundamentele telbeginsel')} toe.`,
            `Vermenigvuldig al die keuses saam: ${gr('4 × 6 × 3 = 72')}.`,
            `<strong>Antwoord:</strong> Daar is ${gr('72 verskillende moontlike etes')}.`,
          ],
        },
        {
          question: "'n Nommerplaat het die vorm: 3 letters gevolg deur 3 syfers (bv. ABC 123), sonder herhaling van letters of syfers. Hoeveel nommerplate is moontlik?",
          answer: `${gr('26 × 25 × 24 × 10 × 9 × 8 = 11 232 000')}`,
          steps: [
            `Vir die letters (geen herhaling nie): die eerste letter het ${bl('26')} opsies, die tweede het net ${or('25')} oor, die derde het net ${or('24')} oor.`,
            `Vir die syfers (geen herhaling nie): die eerste syfer het ${bl('10')} opsies, die tweede het net ${or('9')} oor, die derde het net ${or('8')} oor.`,
            `Pas die ${gr('telbeginsel')} toe oor al ses posisies: ${gr('26 × 25 × 24 × 10 × 9 × 8')}.`,
            `Bereken: 26 × 25 × 24 = 15 600, en 10 × 9 × 8 = 720. Dan 15 600 × 720 = ${gr('11 232 000')}.`,
            `<strong>Antwoord:</strong> ${gr('11 232 000')} verskillende nommerplate is moontlik.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die fundamentele telbeginsel demonstreer met \'n spyskaart-voorbeeld en \'n nommerplaat-voorbeeld, en wys hoe die aantal beskikbare opsies verminder wanneer herhaling nie toegelaat word nie" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat \'n boomdiagram met 2 eerste-vlak takke en 3 tweede-vlak takke per eerste tak wys, met die 6 finale uitkomste getel en gepas by 2 maal 3 is gelyk aan 6" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PERMUTATIONS: ARRANGING OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'permutations-arranging-objects',
      title: 'Permutasies — Rangskik van Voorwerpe, met Beperkings en Herhaalde Items',
      icon: '🔀',
      explanation:
        `<p style="margin-bottom:16px;">'n ${bl('Permutasie')} is 'n rangskikking van voorwerpe in 'n spesifieke volgorde. Die aantal maniere om <strong>n verskillende voorwerpe</strong> in 'n reguit lyn te rangskik, met elke voorwerp presies een keer gebruik, is:</p>` +

        `<div style="text-align:center;font-size:1.3em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('n! = n × (n − 1) × (n − 2) × ... × 2 × 1')}</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('alle voorwerpe verskillend')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('beperking toegepas')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('herhaalde items')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie situasies wat jy moet herken</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Alle Voorwerpe Is Verskillend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">n verskillende voorwerpe in 'n lyn: ${bl('n!')} rangskikkings. Onthou ${bl('0! = 1')} en ${bl('1! = 1')} per definisie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Beperkings (Saam / Uitmekaar / Vaste Posisie)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As spesifieke items ${or('saam')} moet bly, plak hulle eers in een "blok" vas, rangskik die blokke, en vermenigvuldig dan met die maniere om <strong>binne</strong> die blok te rangskik. Vir items wat ${or('uitmekaar')} moet bly, is dit dikwels makliker om die totale rangskikkings te bepaal en die rangskikkings waar hulle WEL saam is af te trek.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Herhaalde (Identiese) Items</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As sommige voorwerpe identies is (bv. herhaalde letters in 'n woord), deel die herhalings uit: vir 'n stel van n items waar een item p keer herhaal en 'n ander q keer herhaal, is rangskikkings = ${re('n! ÷ (p! × q!)')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Werk met die "saam"-truuk</p>` +
        `<p style="margin:0;color:#1e3a8a;">As 3 spesifieke mense uit 7 saam moet sit, behandel daardie 3 as EEN blok. Jy het nou 5 "items" om te rangskik (die blok + die ander 4 mense): ${or('5!')} maniere. Vermenigvuldig dan met die ${or('3!')} maniere om die 3 mense <strong>binne</strong> die blok te rangskik: totaal = ${gr('5! × 3!')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Op hoeveel verskillende maniere kan 6 verskillende boeke op \'n rak gerangskik word?',
          answer: `${gr('6! = 720')} maniere`,
          steps: [
            `Al ${bl('6 boeke is verskillend')}, en ons rangskik almal van hulle in 'n lyn.`,
            `Pas die permutasieformule toe: ${gr('6! = 6 × 5 × 4 × 3 × 2 × 1')}.`,
            `Bereken: 6 × 5 = 30, × 4 = 120, × 3 = 360, × 2 = 720, × 1 = ${gr('720')}.`,
            `<strong>Antwoord:</strong> Daar is ${gr('720')} verskillende rangskikkings.`,
          ],
        },
        {
          question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "ASSESS".',
          answer: `${re('6! ÷ 4! = 30')} rangskikkings`,
          steps: [
            `Tel die letters: A, S, S, E, S, S — dit is ${bl('6 letters in totaal')}.`,
            `Identifiseer die herhalings: die letter S ${re('herhaal 4 keer')} (A en E kom elk net een keer voor, so hulle hoef nie uitgedeel te word nie).`,
            `Pas die herhaalde-items-formule toe: ${re('6! ÷ 4!')} — deel die herhaalde S's uit.`,
            `Bereken: 6! = 720 en 4! = 24, so ${re('720 ÷ 24 = 30')}.`,
            `<strong>Antwoord:</strong> Daar is ${re('30')} verskillende rangskikkings van die letters in "ASSESS".`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om n faktoriaal te bereken vir die rangskik van verskillende voorwerpe, en dan die saam-blok-truuk vir beperkings en die deel-deur-herhaalde-faktoriaal-reël vir woorde met herhaalde letters demonstreer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat 3 spesifieke mense in een uitgeligte blok tussen 7 mense in totaal wys, om te illustreer waarom die blok as een eenheid behandel word voordat dit met die interne rangskikkings van die blok vermenigvuldig word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — USING COUNTING TECHNIQUES TO SOLVE PROBABILITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-techniques-probability',
      title: 'Teltegnieke Gebruik om Waarskynlikheidsprobleme Op te Los',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:16px;">Sodra jy rangskikkings kan tel, kan jy die waarskynlikheid van 'n spesifieke rangskikking bepaal met dieselfde idee as enige ander waarskynlikheidsberekening:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('P(spesifieke rangskikking) = aantal gunstige rangskikkings ÷ totale aantal rangskikkings')}</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige rangskikkings')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('totale rangskikkings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('finale waarskynlikheid')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om hierdie probleme te benader</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stap 1 — Tel die Totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Bepaal die ${bl('totale aantal rangskikkings')} moontlik, sonder om enige spesiale voorwaarde in ag te neem — dit is jou noemer.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Stap 2 — Tel die Gunstige</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Bepaal die aantal rangskikkings wat aan die ${gr('spesifieke voorwaarde')} in die vraag voldoen (met die "saam"-blok-truuk, of deur die "uitmekaar"-geval af te trek) — dit is jou teller.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Stap 3 — Deel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('P(voorwaarde) = gunstige ÷ totaal')}. Vereenvoudig die breuk, of skryf as 'n desimaal indien gevra.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Moenie van voor af herbereken nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hierdie probleme kombineer alles van hierdie onderwerp — hergebruik jou werk van die telbeginsel- en permutasie-afdelings eerder as om van voor af te begin. Die <strong>totale rangskikkings</strong> is gewoonlik 'n eenvoudige ${bl('n!')}, terwyl die <strong>gunstige rangskikkings</strong> byna altyd die ${gr('saam-blok')}- of ${gr('herhaalde-items')}-tegniek benodig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '5 vriende, insluitend Sipho en Thandi, sit lukraak in \'n ry van 5 stoele. Bepaal die waarskynlikheid dat Sipho en Thandi langs mekaar sit.',
          answer: `${or('P = 2/5')}`,
          steps: [
            `${bl('Totale rangskikkings:')} 5 verskillende mense in 'n ry = ${bl('5! = 120')}.`,
            `${gr('Gunstige rangskikkings:')} behandel Sipho en Thandi as een blok. Dit gee 4 "items" om te rangskik (die blok + 3 ander vriende) = 4! maniere, dan × 2! vir die 2 maniere om Sipho en Thandi binne die blok te orden.`,
            `Bereken gunstige: ${gr('4! × 2! = 24 × 2 = 48')}.`,
            `Pas die waarskynlikheidsformule toe: ${or('P = 48 ÷ 120 = 2/5')}.`,
            `<strong>Antwoord:</strong> ${or('P(Sipho en Thandi saam) = 2/5')}.`,
          ],
        },
        {
          question: 'Die letters van die woord "BANANA" word in \'n lukrake volgorde gerangskik. Bepaal die waarskynlikheid dat die rangskikking met die letter B begin.',
          answer: `${or('P = 1/6')}`,
          steps: [
            `Tel die letters: B, A, N, A, N, A — dit is 6 letters, met ${re('A wat 3 keer herhaal')} en ${re('N wat 2 keer herhaal')}.`,
            `${bl('Totale rangskikkings:')} ${bl('6! ÷ (3! × 2!) = 720 ÷ (6 × 2) = 60')}.`,
            `${gr('Gunstige rangskikkings:')} vas B in die eerste posisie, rangskik dan die oorblywende letters A, N, A, N, A (5 letters, A herhaal 3 keer, N herhaal 2 keer) in die ander 5 posisies: ${gr('5! ÷ (3! × 2!) = 120 ÷ 12 = 10')}.`,
            `Pas die waarskynlikheidsformule toe: ${or('P = 10 ÷ 60 = 1/6')}.`,
            `<strong>Antwoord:</strong> ${or('P(begin met B) = 1/6')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat \'n sitplek-rangskikking-waarskynlikheidsprobleem stap vir stap oplos, deur eers totale rangskikkings te bepaal en dan gunstige rangskikkings met die saam-blok-truuk voor daar gedeel word" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat \'n ry van 5 stoele wys met twee stoele uitgelig en saam gegroepeer om die saam-blok voor te stel, langs \'n breukstreep wat gunstige rangskikkings oor totale rangskikkings wys" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — addition rule ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'P(A) = 0,4, P(B) = 0,3 en P(A en B) = 0,1. Bepaal P(A of B).',
      checkMode: 'auto',
      correctAnswer: '0,6',
      correctAnswers: ['0,6', '0.6'],
      explanation: 'P(A of B) = P(A) + P(B) − P(A en B) = 0,4 + 0,3 − 0,1 = 0,6 ✓',
    },

    // ── Q2 Easy — mutually exclusive ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A en B is wedersyds uitsluitende gebeurtenisse met P(A) = 0,25 en P(B) = 0,45. Bepaal P(A of B).',
      checkMode: 'auto',
      correctAnswer: '0,7',
      correctAnswers: ['0,7', '0.7'],
      explanation: 'Wedersyds uitsluitend beteken P(A en B) = 0, so P(A of B) = P(A) + P(B) = 0,25 + 0,45 = 0,7 ✓',
    },

    // ── Q3 Easy — complementary rule ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: "P(A) = 0,65. Bepaal P(A').",
      checkMode: 'auto',
      correctAnswer: '0,35',
      correctAnswers: ['0,35', '0.35'],
      explanation: "P(A') = 1 − P(A) = 1 − 0,65 = 0,35 ✓",
    },

    // ── Q4 Medium — addition rule with cards ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: "'n Kaart word uit 'n standaard pak van 52 kaarte getrek. Bepaal P('n skoppie of 'n rooi kaart). (Let wel: skoppies is swart, so 'n kaart kan nie albei wees nie.)",
      checkMode: 'auto',
      correctAnswer: '3/4',
      correctAnswers: ['3/4', '0,75', '0.75'],
      explanation: 'P(skoppie) = 13/52, P(rooi) = 26/52. Skoppies en rooi kaarte kan nie oorvleuel nie, so P(A en B) = 0. P(skoppie of rooi) = 13/52 + 26/52 = 39/52 = 3/4 ✓',
    },

    // ── Q5 Medium — at least one via complement ──────────────────────────────
    {
      difficulty: 'Medium',
      question: "Die waarskynlikheid dat 'n sekere masjienonderdeel 'n toets faal, is 0,05. As 3 onderdele onafhanklik getoets word, bepaal die waarskynlikheid dat ten minste een faal.",
      checkMode: 'auto',
      correctAnswer: '0,142625',
      correctAnswers: ['0,142625', '0.142625', '≈0,1426', '≈0.1426', '0,1426', '0.1426'],
      explanation: "P(geen faal nie) = 0,95 × 0,95 × 0,95 = 0,857375. P(ten minste een faal) = 1 − 0,857375 = 0,142625 ✓",
    },

    // ── Q6 Easy — fundamental counting principle ─────────────────────────────
    {
      difficulty: 'Easy',
      question: "'n Student het 5 hemde en 4 langbroeke. Hoeveel verskillende drag-kombinasies (hemp en langbroek) kan gemaak word?",
      checkMode: 'auto',
      correctAnswer: '20',
      explanation: 'Pas die telbeginsel toe: 5 × 4 = 20 kombinasies ✓',
    },

    // ── Q7 Medium — counting principle, three choices ────────────────────────
    {
      difficulty: 'Medium',
      question: "'n PIN-kode het 4 syfers, elk van 0–9, en syfers MAG herhaal. Hoeveel verskillende PIN-kodes is moontlik?",
      checkMode: 'auto',
      correctAnswer: '10000',
      correctAnswers: ['10000', '10 000'],
      explanation: 'Elk van die 4 posisies het 10 moontlike syfers (herhaling toegelaat), so 10 × 10 × 10 × 10 = 10 000 ✓',
    },

    // ── Q8 Medium — counting principle, no repetition ────────────────────────
    {
      difficulty: 'Medium',
      question: "'n Komitee moet 'n voorsitter, 'n sekretaris en 'n tesourier uit 8 kandidate kies. Niemand kan twee posisies beklee nie. Op hoeveel maniere kan dit gedoen word?",
      checkMode: 'auto',
      correctAnswer: '336',
      explanation: 'Voorsitter: 8 keuses. Sekretaris: 7 oorblywende keuses. Tesourier: 6 oorblywende keuses. 8 × 7 × 6 = 336 ✓',
    },

    // ── Q9 Easy — factorial ───────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: "Op hoeveel maniere kan 5 verskillende sleutels op 'n sleutelring gerangskik word wat in 'n reguit lyn uitgelê is (nie 'n sirkel nie)?",
      checkMode: 'auto',
      correctAnswer: '120',
      explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 ✓',
    },

    // ── Q10 Medium — factorial, larger n ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "In hoeveel verskillende volgordes kan 7 hardlopers 'n wedloop voltooi, met die aanname van geen gelykop-eindes nie?",
      checkMode: 'auto',
      correctAnswer: '5040',
      explanation: '7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040 ✓',
    },

    // ── Q11 Hard — permutations with a together restriction ─────────────────
    {
      difficulty: 'Hard',
      question: "Op hoeveel maniere kan 4 seuns en 3 meisies in 'n ry gerangskik word as al 3 meisies saam moet sit?",
      checkMode: 'auto',
      correctAnswer: '720',
      explanation: 'Behandel die 3 meisies as een blok: nou is daar 5 "items" (blok + 4 seuns) om te rangskik = 5! = 120. Vermenigvuldig met die 3! = 6 maniere om die meisies binne die blok te rangskik. Totaal = 120 × 6 = 720 ✓',
    },

    // ── Q12 Hard — permutations with an apart restriction ────────────────────
    {
      difficulty: 'Hard',
      question: "5 mense, insluitend Amahle en Kagiso, word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as Amahle en Kagiso NIE langs mekaar sit nie?",
      checkMode: 'auto',
      correctAnswer: '72',
      explanation: 'Totale rangskikkings van 5 mense: 5! = 120. Rangskikkings met Amahle en Kagiso saam: behandel as een blok, 4! × 2! = 24 × 2 = 48. Rangskikkings uitmekaar = totaal − saam = 120 − 48 = 72 ✓',
    },

    // ── Q13 Medium — repeated items ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "LETTER".',
      checkMode: 'auto',
      correctAnswer: '180',
      explanation: 'Daar is 6 letters (L, E, T, T, E, R) met E wat twee keer herhaal en T wat twee keer herhaal. Rangskikkings = 6! ÷ (2! × 2!) = 720 ÷ 4 = 180 ✓',
    },

    // ── Q14 Medium — repeated items, single repeat ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "MISSISSIPPI".',
      checkMode: 'self',
      answer: 'Daar is 11 letters: M(1), I(4), S(4), P(2). Rangskikkings = 11! ÷ (4! × 4! × 2!) = 39 916 800 ÷ (24 × 24 × 2) = 39 916 800 ÷ 1152 = 34 650.',
    },

    // ── Q15 Hard — probability using permutations, together ──────────────────
    {
      difficulty: 'Hard',
      question: "6 mense, insluitend 'n getroude paar, sit lukraak in 'n ry van 6 stoele. Bepaal die waarskynlikheid dat die getroude paar saam sit.",
      checkMode: 'auto',
      correctAnswer: '1/3',
      correctAnswers: ['1/3', '0,333', '0.333', '≈1/3', '≈0,333', '≈0.333'],
      explanation: 'Totale rangskikkings: 6! = 720. Gunstige (paar saam): behandel as een blok, 5! × 2! = 120 × 2 = 240. P = 240 ÷ 720 = 1/3 ✓',
    },

    // ── Q16 Hard — probability using permutations, repeated items ────────────
    {
      difficulty: 'Hard',
      question: 'Die letters van die woord "APPLE" word lukraak gerangskik. Bepaal die waarskynlikheid dat die rangskikking met die letter E eindig.',
      checkMode: 'auto',
      correctAnswer: '1/5',
      correctAnswers: ['1/5', '0,2', '0.2'],
      explanation: 'Totale rangskikkings: 5 letters met P wat twee keer herhaal, so 5! ÷ 2! = 120 ÷ 2 = 60. Gunstige: vas E in die laaste posisie, rangskik A, P, P, L (4 letters, P herhaal twee keer) in die oorblywende posisies: 4! ÷ 2! = 12. P = 12 ÷ 60 = 1/5 ✓',
    },

    // ── Q17 Hard — combining addition rule and counting ──────────────────────
    {
      difficulty: 'Hard',
      question: "'n Wagwoord bestaan uit 3 letters (A–Z, geen herhaling nie) gevolg deur 2 syfers (0–9, geen herhaling nie). Hoeveel wagwoorde is moontlik as die wagwoord met 'n vokaal (A, E, I, O of U) moet begin?",
      checkMode: 'self',
      answer: 'Eerste letter (vokaal): 5 keuses. Tweede letter: 25 oorblywende. Derde letter: 24 oorblywende. Eerste syfer: 10 keuses. Tweede syfer: 9 oorblywende. Totaal = 5 × 25 × 24 × 10 × 9 = 270 000.',
    },

    // ── Q18 Medium — mutually exclusive vs not ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'n Dobbelsteen word een keer gegooi. Laat A "\'n ewe getal gooi" wees en B "\'n getal groter as 4 gooi". Is A en B wedersyds uitsluitend? Bepaal P(A of B).',
      checkMode: 'self',
      answer: 'A = {2,4,6}, B = {5,6}. Hulle oorvleuel by 6, so A en B is NIE wedersyds uitsluitend nie. P(A) = 3/6, P(B) = 2/6, P(A en B) = 1/6 (\'n 6 gooi). P(A of B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.',
    },

    // ── Q19 Hard — restriction: specific person NOT at an end ─────────────────
    {
      difficulty: 'Hard',
      question: "Op hoeveel maniere kan 5 mense in 'n ry gerangskik word as een spesifieke persoon NIE aan enige van die punte van die ry mag wees nie?",
      checkMode: 'self',
      answer: 'Totale rangskikkings: 5! = 120. Rangskikkings met die spesifieke persoon aan \'n punt: 2 keuses vir watter punt, dan 4! = 24 maniere om die res te rangskik, wat 2 × 24 = 48 gee. Rangskikkings met daardie persoon NIE aan \'n punt nie = 120 − 48 = 72.',
    },

    // ── Q20 Hard — multi-step: counting principle then probability ───────────
    {
      difficulty: 'Hard',
      question: "'n Sak bevat teëltjies genommer 1 tot 9. Twee teëltjies word een na die ander getrek, sonder vervanging, en in die volgorde van trek geplaas om 'n 2-syfergetal te vorm. Hoeveel verskillende 2-syfergetalle kan gevorm word, en wat is die waarskynlikheid dat die getal wat gevorm word groter as 90 is?",
      checkMode: 'self',
      answer: 'Totale 2-syfergetalle: 9 keuses vir die eerste teël, 8 oorblywende vir die tweede teël = 9 × 8 = 72 verskillende getalle. Getalle groter as 90 moet met 9 begin: die tiene-syfer is vas as 9 (1 keuse), en enige van die oorblywende 8 teëls kan die eenhede-syfer wees, wat 8 gunstige uitkomste gee. P(groter as 90) = 8 ÷ 72 = 1/9.',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheid bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheid bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
  ],
}
