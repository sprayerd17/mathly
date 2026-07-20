import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

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

      diagramSvg:
        `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><circle cx="80" cy="75" r="55" fill="none" stroke="#2563eb" stroke-width="2.5" /><circle cx="140" cy="75" r="55" fill="none" stroke="#2563eb" stroke-width="2.5" /><path d="M110,28.9 A55,55 0 0,1 110,121.1 A55,55 0 0,1 110,28.9 Z" fill="#ea580c" fill-opacity="0.55" stroke="#ea580c" stroke-width="1.5" /><text x="50" y="50" font-weight="700" font-size="16" fill="#2563eb" text-anchor="middle">A</text><text x="170" y="50" font-weight="700" font-size="16" fill="#2563eb" text-anchor="middle">B</text><text x="110" y="150" font-weight="700" font-size="12" fill="#ea580c" text-anchor="middle">A en B (een keer getel)</text></svg>`,
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

      diagramSvg:
        `<svg viewBox="0 0 260 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="20" y1="90" x2="100" y2="40" stroke="#2563eb" stroke-width="2.5" /><line x1="20" y1="90" x2="100" y2="140" stroke="#2563eb" stroke-width="2.5" /><line x1="100" y1="40" x2="200" y2="15" stroke="#ea580c" stroke-width="2" /><line x1="100" y1="40" x2="200" y2="40" stroke="#ea580c" stroke-width="2" /><line x1="100" y1="40" x2="200" y2="65" stroke="#ea580c" stroke-width="2" /><line x1="100" y1="140" x2="200" y2="115" stroke="#ea580c" stroke-width="2" /><line x1="100" y1="140" x2="200" y2="140" stroke="#ea580c" stroke-width="2" /><line x1="100" y1="140" x2="200" y2="165" stroke="#ea580c" stroke-width="2" /><circle cx="20" cy="90" r="4" fill="#0f1f3d" /><circle cx="100" cy="40" r="4" fill="#2563eb" /><circle cx="100" cy="140" r="4" fill="#2563eb" /><circle cx="200" cy="15" r="3.5" fill="#ea580c" /><circle cx="200" cy="40" r="3.5" fill="#ea580c" /><circle cx="200" cy="65" r="3.5" fill="#ea580c" /><circle cx="200" cy="115" r="3.5" fill="#ea580c" /><circle cx="200" cy="140" r="3.5" fill="#ea580c" /><circle cx="200" cy="165" r="3.5" fill="#ea580c" /><text x="10" y="94" font-weight="700" font-size="11" fill="#0f1f3d" text-anchor="end">Begin</text><text x="90" y="35" font-weight="700" font-size="10" fill="#2563eb" text-anchor="end">Keuse 1</text><text x="90" y="125" font-weight="700" font-size="10" fill="#2563eb" text-anchor="end">Keuse 2</text><text x="208" y="18" font-size="9" fill="#374151">1</text><text x="208" y="43" font-size="9" fill="#374151">2</text><text x="208" y="68" font-size="9" fill="#374151">3</text><text x="208" y="118" font-size="9" fill="#374151">4</text><text x="208" y="143" font-size="9" fill="#374151">5</text><text x="208" y="168" font-size="9" fill="#374151">6</text><text x="130" y="188" font-weight="700" font-size="12" fill="#16a34a" text-anchor="middle">2 × 3 = 6 uitkomste</text></svg>`,
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

      diagramSvg:
        `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="78" y="24" width="112" height="52" rx="8" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6 4" /><rect x="10" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="46" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="82" y="30" width="30" height="40" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2" /><rect x="118" y="30" width="30" height="40" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2" /><rect x="154" y="30" width="30" height="40" rx="4" fill="#fff7ed" stroke="#ea580c" stroke-width="2" /><rect x="190" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="226" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><text x="25" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">1</text><text x="61" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">2</text><text x="97" y="55" font-weight="700" font-size="14" fill="#ea580c" text-anchor="middle">P₁</text><text x="133" y="55" font-weight="700" font-size="14" fill="#ea580c" text-anchor="middle">P₂</text><text x="169" y="55" font-weight="700" font-size="14" fill="#ea580c" text-anchor="middle">P₃</text><text x="205" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">3</text><text x="241" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">4</text><text x="134" y="18" font-weight="700" font-size="12" fill="#16a34a" text-anchor="middle">blok (as 1 eenheid behandel)</text><text x="140" y="95" font-weight="700" font-size="11" fill="#0f1f3d" text-anchor="middle">5 items om te rangskik: blok + 4 mense</text></svg>`,
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

      diagramSvg:
        `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="46" y="30" width="30" height="40" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" /><rect x="82" y="30" width="30" height="40" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" /><rect x="118" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="154" y="30" width="30" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2" /><rect x="42" y="24" width="78" height="52" rx="8" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6 4" /><text x="25" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">1</text><text x="61" y="55" font-weight="700" font-size="14" fill="#16a34a" text-anchor="middle">S</text><text x="97" y="55" font-weight="700" font-size="14" fill="#16a34a" text-anchor="middle">T</text><text x="133" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">4</text><text x="169" y="55" font-weight="700" font-size="14" fill="#2563eb" text-anchor="middle">5</text><text x="82" y="15" font-weight="700" font-size="11" fill="#16a34a" text-anchor="middle">blok</text><text x="235" y="42" font-weight="700" font-size="16" fill="#16a34a" text-anchor="middle">48</text><line x1="208" y1="52" x2="262" y2="52" stroke="#94a3b8" stroke-width="2" /><text x="235" y="72" font-weight="700" font-size="16" fill="#2563eb" text-anchor="middle">120</text><text x="235" y="100" font-weight="700" font-size="15" fill="#ea580c" text-anchor="middle">= 2/5</text><text x="235" y="18" font-size="11" fill="#374151" text-anchor="middle">P(saam)</text></svg>`,
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

    // ── Q21 Hard — problem-solving: addition rule with a conditional-probability-derived overlap
    {
      difficulty: 'Hard',
      question: "By 'n skool is gebeurtenis A 'ʼn leerder neem Wiskunde' en gebeurtenis B 'ʼn leerder neem Fisiese Wetenskap'. Dit is bekend dat P(A) = 0,6 en P(A of B) = 0,75. Van die leerders wat Fisiese Wetenskap neem, neem presies 'n kwart ook Wiskunde. Laat P(B) = x. Stel 'n vergelyking in x op deur die optellingsreël te gebruik, los op vir x, en bepaal dus P(B).",
      checkMode: 'auto',
      correctAnswer: '0.2',
      correctAnswers: ['0.2', '0,2'],
      explanation: "Aangesien presies 'n kwart van die Fisiese Wetenskap-leerders ook Wiskunde neem, is P(A en B) = ¼ × P(B) = x/4. Optellingsreël: P(A of B) = P(A) + P(B) − P(A en B), dus 0,75 = 0,6 + x − x/4 = 0,6 + 0,75x. Los op: 0,75x = 0,15, dus x = 0,2. P(B) = 0,2 ✓",
    },

    // ── Q22 Hard — problem-solving: combinations combined with conditional probability
    {
      difficulty: 'Hard',
      question: "'n Komitee van 4 mense word lukraak gekies uit 'n groep van 6 mans en 5 vrouens. Gegewe dat die komitee ten minste 3 vrouens bevat, bepaal die waarskynlikheid dat die komitee heeltemal uit vrouens bestaan (al 4 lede is vrouens).",
      checkMode: 'auto',
      correctAnswer: '1/13',
      correctAnswers: ['1/13', '≈0.0769', '≈0,0769', '0.0769', '0,0769'],
      explanation: 'Aantal komitees met presies 3 vrouens en 1 man: C(5,3) × C(6,1) = 10 × 6 = 60. Aantal komitees met presies 4 vrouens (0 mans): C(5,4) × C(6,0) = 5 × 1 = 5. Dus is die aantal komitees met ten minste 3 vrouens = 60 + 5 = 65. "Almal vrouens" is een van die maniere om "ten minste 3 vrouens" te kry, dus P(almal vrouens | ten minste 3 vrouens) = 5 ÷ 65 = 1/13 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 22,
    messages: [
      { minScore: 22, message: 'Uitstekend! Jy het waarskynlikheid bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 22, message: 'Uitstekend! Jy het waarskynlikheid bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae) — telbeginsel → permutasies → beperkings →
    // herhaalde items → kombinasies → gekombineerde tel-en-waarskynlikheid
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Fundamentele telbeginsel (V1–V3, Maklik)
        { difficulty: 'Easy', question: "'n Klerewinkel verkoop 4 baadjies, 5 hemde en 3 pare skoene. Hoeveel verskillende baadjie-hemp-skoen-drag-kombinasies kan saamgestel word?", checkMode: 'auto', correctAnswer: '60', explanation: 'Pas die telbeginsel toe: 4 × 5 × 3 = 60 drag-kombinasies ✓' },
        { difficulty: 'Easy', question: "'n 3-syferkode word gevorm deur syfers van 1 tot 7 te kies, sonder om enige syfer te herhaal. Hoeveel verskillende kodes is moontlik?", checkMode: 'auto', correctAnswer: '210', explanation: 'Eerste syfer: 7 keuses. Tweede syfer: 6 oorblywende. Derde syfer: 5 oorblywende. 7 × 6 × 5 = 210 ✓' },
        { difficulty: 'Easy', question: "'n Nommerplaat het die vorm: 2 letters (A–Z, geen herhaling nie) gevolg deur 4 syfers (0–9, geen herhaling nie). Hoeveel nommerplate is moontlik?", checkMode: 'self', answer: 'Letters: 26 × 25 = 650. Syfers: 10 × 9 × 8 × 7 = 5040. Totaal = 650 × 5040 = 3 276 000.' },

        // Blok 2 — Permutasies, alles verskillende voorwerpe (V4–V6, Maklik/Matig)
        { difficulty: 'Easy', question: "Op hoeveel verskillende maniere kan 7 verskillende skilderye in 'n ry aan 'n galerymuur gehang word?", checkMode: 'auto', correctAnswer: '5040', explanation: '7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040 ✓' },
        { difficulty: 'Medium', question: "'n Wedloop het 9 hardlopers. Op hoeveel verskillende maniere kan 1ste, 2de, 3de en 4de plek toegeken word (met die aanname van geen gelykop-eindes nie)?", checkMode: 'auto', correctAnswer: '3024', explanation: '1ste plek: 9 keuses. 2de: 8 oorblywende. 3de: 7 oorblywende. 4de: 6 oorblywende. 9 × 8 × 7 × 6 = 3024 ✓' },
        { difficulty: 'Medium', question: "Op hoeveel verskillende maniere kan 8 verskillende boeke op 'n rak gerangskik word?", checkMode: 'auto', correctAnswer: '40320', correctAnswers: ['40320', '40 320'], explanation: '8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40 320 ✓' },

        // Blok 3 — Permutasies met beperkings (V7–V10, Matig)
        { difficulty: 'Medium', question: "6 mense, insluitend Zanele en Bongani, word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as Zanele en Bongani saam moet sit?", checkMode: 'auto', correctAnswer: '240', explanation: 'Behandel Zanele en Bongani as een blok: nou is daar 5 "items" (blok + 4 ander) om te rangskik = 5! = 120. Vermenigvuldig met die 2! = 2 maniere om hulle binne die blok te rangskik. Totaal = 120 × 2 = 240 ✓' },
        { difficulty: 'Medium', question: "7 mense word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as twee spesifieke mense, Xolani en Palesa, NIE langs mekaar sit nie?", checkMode: 'auto', correctAnswer: '3600', explanation: 'Totale rangskikkings van 7 mense: 7! = 5040. Rangskikkings met Xolani en Palesa saam: behandel as een blok, 6! × 2! = 720 × 2 = 1440. Rangskikkings uitmekaar = totaal − saam = 5040 − 1440 = 3600 ✓' },
        { difficulty: 'Medium', question: "6 mense word in 'n ry gerangskik. Een spesifieke persoon, Thabo, mag slegs aan een van die punte van die ry sit. Op hoeveel maniere kan die groep gerangskik word?", checkMode: 'auto', correctAnswer: '240', explanation: 'Thabo het 2 keuses (linkerkantste of regterkantste punt). Die oorblywende 5 mense vul die ander 5 sitplekke op 5! = 120 maniere. Totaal = 2 × 120 = 240 ✓' },
        { difficulty: 'Medium', question: "'n Groep van 3 dokters en 4 verpleegsters word in 'n ry vir 'n foto gerangskik. Op hoeveel maniere kan hulle gerangskik word as al die dokters saam moet staan EN al die verpleegsters saam moet staan?", checkMode: 'self', answer: 'Behandel die dokters as een blok en die verpleegsters as een blok: 2 blokke kan op 2! = 2 maniere gerangskik word. Binne die dokterblok: 3! = 6 maniere. Binne die verpleegsterblok: 4! = 24 maniere. Totaal = 2 × 6 × 24 = 288.' },

        // Blok 4 — Permutasies met herhaalde items (V11–V13, Matig/Moeilik)
        { difficulty: 'Medium', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "PENCIL".', checkMode: 'auto', correctAnswer: '720', explanation: 'Al 6 letters van PENCIL is verskillend, so rangskikkings = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "GEOMETRY".', checkMode: 'auto', correctAnswer: '20160', explanation: 'GEOMETRY het 8 letters met E wat twee keer herhaal (al die ander kom net een keer voor). Rangskikkings = 8! ÷ 2! = 40 320 ÷ 2 = 20 160 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "STATISTICS".', checkMode: 'self', answer: 'STATISTICS het 10 letters: S(3), T(3), A(1), I(2), C(1). Rangskikkings = 10! ÷ (3! × 3! × 2!) = 3 628 800 ÷ (6 × 6 × 2) = 3 628 800 ÷ 72 = 50 400.' },

        // Blok 5 — Kombinasies (V14–V17, Moeilik)
        { difficulty: 'Hard', question: "'n Span moet 4 lede kies uit 'n groep van 11 kandidate, waar die volgorde van keuse nie saak maak nie. Op hoeveel maniere kan die span gekies word?", checkMode: 'auto', correctAnswer: '330', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(11,4) = 11! ÷ (4! × 7!) = 330 ✓' },
        { difficulty: 'Hard', question: "'n Skoolkomitee benodig 3 seuns gekies uit 6 seuns EN 2 meisies gekies uit 5 meisies. Op hoeveel maniere kan die komitee gevorm word?", checkMode: 'auto', correctAnswer: '200', explanation: 'C(6,3) = 20 maniere om die seuns te kies. C(5,2) = 10 maniere om die meisies te kies. Volgens die telbeginsel, totaal = 20 × 10 = 200 ✓' },
        { difficulty: 'Hard', question: "Op hoeveel maniere kan 'n stel van 6 kaarte uit 'n stel van 14 verskillende kaarte gekies word?", checkMode: 'auto', correctAnswer: '3003', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(14,6) = 14! ÷ (6! × 8!) = 3003 ✓' },
        { difficulty: 'Hard', question: "'n Komitee van 4 mense word gekies uit 'n groep van 8 mans en 6 vrouens (14 mense in totaal). Bepaal die aantal maniere om die komitee te kies as dit TEN MINSTE een vrou moet insluit.", checkMode: 'self', answer: 'Totale maniere om enige 4 uit 14 te kies: C(14,4) = 1001. Maniere om 4 met geen vrouens (almal mans) te kies: C(8,4) = 70. Ten minste een vrou = totaal − geen vrouens = 1001 − 70 = 931.' },

        // Blok 6 — Gekombineerde telbeginsel en waarskynlikheid (V18–V20, Moeilik)
        { difficulty: 'Hard', question: "5 mense, insluitend 'n getroude paar, sit lukraak in 'n ry van 5 stoele. Bepaal die waarskynlikheid dat die getroude paar saam sit.", checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '0,4', '0.4'], explanation: 'Totale rangskikkings: 5! = 120. Gunstige (paar saam): behandel as een blok, 4! × 2! = 24 × 2 = 48. P = 48 ÷ 120 = 2/5 ✓' },
        { difficulty: 'Hard', question: 'Die letters van die woord "LEVEL" word in \'n lukrake volgorde gerangskik. Bepaal die waarskynlikheid dat die rangskikking met die letter L begin ÉN eindig.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '3/30', '0,1', '0.1'], explanation: 'LEVEL het 5 letters met L wat twee keer herhaal en E wat twee keer herhaal, so totale rangskikkings = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30. Gunstige: vas L in die eerste en laaste posisie, rangskik dan E, V, E (3 letters, E herhaal twee keer) in die middelste 3 posisies: 3! ÷ 2! = 3. P = 3 ÷ 30 = 1/10 ✓' },
        { difficulty: 'Hard', question: "'n Wagwoord word gevorm deur 4 verskillende letters uit A–Z te rangskik, sonder om enige letter te herhaal. Bepaal die waarskynlikheid dat die wagwoord met 'n vokaal (A, E, I, O of U) begin.", checkMode: 'self', answer: 'Totale wagwoorde: 26 × 25 × 24 × 23 = 358 800. Gunstige (begin met \'n vokaal): eerste letter het 5 keuses (vokale), dan 25 × 24 × 23 oorblywende letters = 5 × 25 × 24 × 23 = 69 000. P = 69 000 ÷ 358 800 = 5/26 ≈ 0,192.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het teltegnieke en permutasies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die telbeginsel- en permutasie-afdelings, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Fundamentele telbeginsel (V1–V3, Maklik)
        { difficulty: 'Easy', question: "'n Restaurant bied 3 soppe, 4 hoofgeregte en 5 nageregte aan. Hoeveel verskillende sop-hoofgereg-nagereg-etes kan gemaak word?", checkMode: 'auto', correctAnswer: '60', explanation: 'Pas die telbeginsel toe: 3 × 4 × 5 = 60 etes ✓' },
        { difficulty: 'Easy', question: "'n 4-syferkode word gevorm deur syfers van 1 tot 9 te kies, sonder om enige syfer te herhaal. Hoeveel verskillende kodes is moontlik?", checkMode: 'auto', correctAnswer: '3024', explanation: 'Eerste syfer: 9 keuses. Tweede: 8 oorblywende. Derde: 7 oorblywende. Vierde: 6 oorblywende. 9 × 8 × 7 × 6 = 3024 ✓' },
        { difficulty: 'Easy', question: "'n Nommerplaat het die vorm: 3 letters (A–Z, geen herhaling nie) gevolg deur 3 syfers (0–9, geen herhaling nie). Hoeveel nommerplate is moontlik?", checkMode: 'self', answer: 'Letters: 26 × 25 × 24 = 15 600. Syfers: 10 × 9 × 8 = 720. Totaal = 15 600 × 720 = 11 232 000.' },

        // Blok 2 — Permutasies, alles verskillende voorwerpe (V4–V6, Maklik/Matig)
        { difficulty: 'Easy', question: "Op hoeveel verskillende maniere kan 6 verskillende versierings in 'n ry op 'n kaggelrak gerangskik word?", checkMode: 'auto', correctAnswer: '720', explanation: '6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 ✓' },
        { difficulty: 'Medium', question: "'n Wedloop het 10 spurters. Op hoeveel verskillende maniere kan 1ste, 2de en 3de plek (die podium) toegeken word, met die aanname van geen gelykop-eindes nie?", checkMode: 'auto', correctAnswer: '720', explanation: '1ste plek: 10 keuses. 2de: 9 oorblywende. 3de: 8 oorblywende. 10 × 9 × 8 = 720 ✓' },
        { difficulty: 'Medium', question: "Op hoeveel verskillende maniere kan 9 verskillende lêers in 'n stapel gepak word?", checkMode: 'auto', correctAnswer: '362880', correctAnswers: ['362880', '362 880'], explanation: '9! = 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 362 880 ✓' },

        // Blok 3 — Permutasies met beperkings (V7–V10, Matig)
        { difficulty: 'Medium', question: "7 mense word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as 3 spesifieke mense saam moet sit?", checkMode: 'auto', correctAnswer: '720', explanation: 'Behandel die 3 spesifieke mense as een blok: nou is daar 5 "items" (blok + 4 ander) om te rangskik = 5! = 120. Vermenigvuldig met die 3! = 6 maniere om hulle binne die blok te rangskik. Totaal = 120 × 6 = 720 ✓' },
        { difficulty: 'Medium', question: "6 mense word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as twee spesifieke mense, Karabo en Naledi, NIE langs mekaar sit nie?", checkMode: 'auto', correctAnswer: '480', explanation: 'Totale rangskikkings van 6 mense: 6! = 720. Rangskikkings met Karabo en Naledi saam: behandel as een blok, 5! × 2! = 120 × 2 = 240. Rangskikkings uitmekaar = totaal − saam = 720 − 240 = 480 ✓' },
        { difficulty: 'Medium', question: "7 mense word in 'n ry gerangskik. Een spesifieke persoon, Lindiwe, mag slegs aan een van die punte van die ry sit. Op hoeveel maniere kan die groep gerangskik word?", checkMode: 'auto', correctAnswer: '1440', explanation: 'Lindiwe het 2 keuses (linkerkantste of regterkantste punt). Die oorblywende 6 mense vul die ander 6 sitplekke op 6! = 720 maniere. Totaal = 2 × 720 = 1440 ✓' },
        { difficulty: 'Medium', question: "'n Groep van 4 Zoeloe-dansers en 3 Sotho-dansers word in 'n ry vir 'n foto gerangskik. Op hoeveel maniere kan hulle gerangskik word as al die Zoeloe-dansers saam moet staan EN al die Sotho-dansers saam moet staan?", checkMode: 'self', answer: 'Behandel die Zoeloe-dansers as een blok en die Sotho-dansers as een blok: 2 blokke kan op 2! = 2 maniere gerangskik word. Binne die Zoeloe-blok: 4! = 24 maniere. Binne die Sotho-blok: 3! = 6 maniere. Totaal = 2 × 24 × 6 = 288.' },

        // Blok 4 — Permutasies met herhaalde items (V11–V13, Matig/Moeilik)
        { difficulty: 'Medium', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "NUMBER".', checkMode: 'auto', correctAnswer: '720', explanation: 'Al 6 letters van NUMBER is verskillend, so rangskikkings = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "CHEESE".', checkMode: 'auto', correctAnswer: '120', explanation: 'CHEESE het 6 letters met E wat 3 keer herhaal (al die ander kom net een keer voor). Rangskikkings = 6! ÷ 3! = 720 ÷ 6 = 120 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "ENGINEERING".', checkMode: 'self', answer: 'ENGINEERING het 11 letters: E(3), N(3), G(2), I(2), R(1). Rangskikkings = 11! ÷ (3! × 3! × 2! × 2!) = 39 916 800 ÷ (6 × 6 × 2 × 2) = 39 916 800 ÷ 144 = 277 200.' },

        // Blok 5 — Kombinasies (V14–V17, Moeilik)
        { difficulty: 'Hard', question: "'n Span moet 5 lede kies uit 'n groep van 12 kandidate, waar die volgorde van keuse nie saak maak nie. Op hoeveel maniere kan die span gekies word?", checkMode: 'auto', correctAnswer: '792', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(12,5) = 12! ÷ (5! × 7!) = 792 ✓' },
        { difficulty: 'Hard', question: "'n Stapklub benodig 2 leiers gekies uit 5 senior lede EN 3 helpers gekies uit 6 junior lede. Op hoeveel maniere kan hierdie groep gevorm word?", checkMode: 'auto', correctAnswer: '200', explanation: 'C(5,2) = 10 maniere om die leiers te kies. C(6,3) = 20 maniere om die helpers te kies. Volgens die telbeginsel, totaal = 10 × 20 = 200 ✓' },
        { difficulty: 'Hard', question: "Op hoeveel maniere kan 'n stel van 4 kaarte uit 'n stel van 13 verskillende kaarte gekies word?", checkMode: 'auto', correctAnswer: '715', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(13,4) = 13! ÷ (4! × 9!) = 715 ✓' },
        { difficulty: 'Hard', question: "'n Sportspan van 5 spelers word gekies uit 'n groep van 7 seuns en 5 meisies (12 mense in totaal). Bepaal die aantal maniere om die span te kies as dit TEN MINSTE een seun moet insluit.", checkMode: 'self', answer: 'Totale maniere om enige 5 uit 12 te kies: C(12,5) = 792. Maniere om 5 met geen seuns (almal meisies) te kies: C(5,5) = 1. Ten minste een seun = totaal − geen seuns = 792 − 1 = 791.' },

        // Blok 6 — Gekombineerde telbeginsel en waarskynlikheid (V18–V20, Moeilik)
        { difficulty: 'Hard', question: "6 mense, insluitend twee vriende, sit lukraak in 'n ry van 6 stoele. Bepaal die waarskynlikheid dat die twee vriende NIE saam sit nie.", checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '480/720', '0,667', '0.667', '≈2/3', '≈0,667', '≈0.667'], explanation: 'Totale rangskikkings: 6! = 720. Saam (as een blok): 5! × 2! = 120 × 2 = 240. Uitmekaar = 720 − 240 = 480. P(uitmekaar) = 480 ÷ 720 = 2/3 ✓' },
        { difficulty: 'Hard', question: 'Die letters van die woord "NOON" word in \'n lukrake volgorde gerangskik. Bepaal die waarskynlikheid dat die rangskikking met die letter N begin.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6', '0,5', '0.5'], explanation: 'NOON het 4 letters met N wat twee keer herhaal en O wat twee keer herhaal, so totale rangskikkings = 4! ÷ (2! × 2!) = 24 ÷ 4 = 6. Gunstige: vas N in die eerste posisie, rangskik dan O, O, N (3 letters, O herhaal twee keer) in die oorblywende posisies: 3! ÷ 2! = 3. P = 3 ÷ 6 = 1/2 ✓' },
        { difficulty: 'Hard', question: "'n PIN word gevorm deur 5 verskillende syfers uit 0–9 te rangskik, sonder om enige syfer te herhaal. Bepaal die waarskynlikheid dat die PIN met die syfer 0 eindig.", checkMode: 'self', answer: 'Totale PIN\'s: 10 × 9 × 8 × 7 × 6 = 30 240. Gunstige (eindig met 0): laaste syfer is vas as 0 (1 manier), dan word die eerste 4 syfers uit die oorblywende 9 syfers sonder herhaling gekies = 9 × 8 × 7 × 6 = 3024. P = 3024 ÷ 30 240 = 1/10 = 0,1.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het teltegnieke en permutasies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die telbeginsel- en permutasie-afdelings, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Fundamentele telbeginsel (V1–V3, Maklik)
        { difficulty: 'Easy', question: "'n Kafee bied 5 voorgeregte, 3 hoofgeregte en 4 drankies aan. Hoeveel verskillende voorgereg-hoofgereg-drankie-kombinasies kan gemaak word?", checkMode: 'auto', correctAnswer: '60', explanation: 'Pas die telbeginsel toe: 5 × 3 × 4 = 60 kombinasies ✓' },
        { difficulty: 'Easy', question: "'n 3-letterkode word gevorm deur letters uit 'n stel van 8 verskillende letters te kies, sonder om enige letter te herhaal. Hoeveel verskillende kodes is moontlik?", checkMode: 'auto', correctAnswer: '336', explanation: 'Eerste letter: 8 keuses. Tweede: 7 oorblywende. Derde: 6 oorblywende. 8 × 7 × 6 = 336 ✓' },
        { difficulty: 'Easy', question: "'n Nommerplaat het die vorm: 2 letters (A–Z, geen herhaling nie) gevolg deur 5 syfers (0–9, geen herhaling nie). Hoeveel nommerplate is moontlik?", checkMode: 'self', answer: 'Letters: 26 × 25 = 650. Syfers: 10 × 9 × 8 × 7 × 6 = 30 240. Totaal = 650 × 30 240 = 19 656 000.' },

        // Blok 2 — Permutasies, alles verskillende voorwerpe (V4–V6, Maklik/Matig)
        { difficulty: 'Easy', question: "Op hoeveel verskillende maniere kan 8 verskillende trofeë in 'n ry op 'n rak gerangskik word?", checkMode: 'auto', correctAnswer: '40320', correctAnswers: ['40320', '40 320'], explanation: '8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40 320 ✓' },
        { difficulty: 'Medium', question: "'n Krieketspan van 11 spelers moet 'n kolfvolgorde kies vir slegs die eerste 5 posisies. Op hoeveel verskillende maniere kan dit gedoen word?", checkMode: 'auto', correctAnswer: '55440', correctAnswers: ['55440', '55 440'], explanation: '1ste posisie: 11 keuses. 2de: 10 oorblywende. 3de: 9 oorblywende. 4de: 8 oorblywende. 5de: 7 oorblywende. 11 × 10 × 9 × 8 × 7 = 55 440 ✓' },
        { difficulty: 'Medium', question: "Op hoeveel verskillende maniere kan 10 verskillende speelkaarte in 'n ry gerangskik word?", checkMode: 'auto', correctAnswer: '3628800', correctAnswers: ['3628800', '3 628 800'], explanation: '10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 3 628 800 ✓' },

        // Blok 3 — Permutasies met beperkings (V7–V10, Matig)
        { difficulty: 'Medium', question: "8 mense word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as twee spesifieke mense, Musa en Refilwe, saam moet sit?", checkMode: 'auto', correctAnswer: '10080', correctAnswers: ['10080', '10 080'], explanation: 'Behandel Musa en Refilwe as een blok: nou is daar 7 "items" (blok + 6 ander) om te rangskik = 7! = 5040. Vermenigvuldig met die 2! = 2 maniere om hulle binne die blok te rangskik. Totaal = 5040 × 2 = 10 080 ✓' },
        { difficulty: 'Medium', question: "8 mense word in 'n ry gerangskik. Op hoeveel maniere kan dit gedoen word as twee spesifieke mense, Tumi en Sibongile, NIE langs mekaar sit nie?", checkMode: 'auto', correctAnswer: '30240', correctAnswers: ['30240', '30 240'], explanation: 'Totale rangskikkings van 8 mense: 8! = 40 320. Rangskikkings met Tumi en Sibongile saam: behandel as een blok, 7! × 2! = 5040 × 2 = 10 080. Rangskikkings uitmekaar = totaal − saam = 40 320 − 10 080 = 30 240 ✓' },
        { difficulty: 'Medium', question: "5 mense word in 'n ry gerangskik. Een spesifieke persoon, Katlego, mag slegs aan een van die punte van die ry sit. Op hoeveel maniere kan die groep gerangskik word?", checkMode: 'auto', correctAnswer: '48', explanation: 'Katlego het 2 keuses (linkerkantste of regterkantste punt). Die oorblywende 4 mense vul die ander 4 sitplekke op 4! = 24 maniere. Totaal = 2 × 24 = 48 ✓' },
        { difficulty: 'Medium', question: "'n Koor van 5 sopraanstemme en 4 altstemme word in 'n ry vir 'n foto gerangskik. Op hoeveel maniere kan hulle gerangskik word as al die sopraanstemme saam moet staan EN al die altstemme saam moet staan?", checkMode: 'self', answer: 'Behandel die sopraanstemme as een blok en die altstemme as een blok: 2 blokke kan op 2! = 2 maniere gerangskik word. Binne die sopraanblok: 5! = 120 maniere. Binne die altblok: 4! = 24 maniere. Totaal = 2 × 120 × 24 = 5760.' },

        // Blok 4 — Permutasies met herhaalde items (V11–V13, Matig/Moeilik)
        { difficulty: 'Medium', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "FILTER".', checkMode: 'auto', correctAnswer: '720', explanation: 'Al 6 letters van FILTER is verskillend, so rangskikkings = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "BUBBLE".', checkMode: 'auto', correctAnswer: '120', explanation: 'BUBBLE het 6 letters met B wat 3 keer herhaal (al die ander kom net een keer voor). Rangskikkings = 6! ÷ 3! = 720 ÷ 6 = 120 ✓' },
        { difficulty: 'Hard', question: 'Bepaal die aantal verskillende rangskikkings van die letters in die woord "ASSASSIN".', checkMode: 'self', answer: 'ASSASSIN het 8 letters: S(4), A(2), I(1), N(1). Rangskikkings = 8! ÷ (4! × 2!) = 40 320 ÷ (24 × 2) = 40 320 ÷ 48 = 840.' },

        // Blok 5 — Kombinasies (V14–V17, Moeilik)
        { difficulty: 'Hard', question: "'n Span moet 6 lede kies uit 'n groep van 13 kandidate, waar die volgorde van keuse nie saak maak nie. Op hoeveel maniere kan die span gekies word?", checkMode: 'auto', correctAnswer: '1716', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(13,6) = 13! ÷ (6! × 7!) = 1716 ✓' },
        { difficulty: 'Hard', question: "'n Fles bevat 7 rooi albasters en 4 blou albasters, almal verskillend in grootte. 'n Steekproef van 4 rooi albasters EN 2 blou albasters moet gekies word. Op hoeveel maniere kan hierdie steekproef gekies word?", checkMode: 'auto', correctAnswer: '210', explanation: 'C(7,4) = 35 maniere om die rooi albasters te kies. C(4,2) = 6 maniere om die blou albasters te kies. Volgens die telbeginsel, totaal = 35 × 6 = 210 ✓' },
        { difficulty: 'Hard', question: "Op hoeveel maniere kan 'n groep van 5 vrywilligers uit 15 verskillende aansoekers gekies word?", checkMode: 'auto', correctAnswer: '3003', explanation: 'Volgorde maak nie saak nie, so gebruik kombinasies: C(15,5) = 15! ÷ (5! × 10!) = 3003 ✓' },
        { difficulty: 'Hard', question: "'n Besprekingspaneel van 4 mense word gekies uit 'n groep van 6 onderwysers en 5 ouers (11 mense in totaal). Bepaal die aantal maniere om die paneel te kies as dit TEN MINSTE een onderwyser moet insluit.", checkMode: 'self', answer: 'Totale maniere om enige 4 uit 11 te kies: C(11,4) = 330. Maniere om 4 met geen onderwysers (almal ouers) te kies: C(5,4) = 5. Ten minste een onderwyser = totaal − geen onderwysers = 330 − 5 = 325.' },

        // Blok 6 — Gekombineerde telbeginsel en waarskynlikheid (V18–V20, Moeilik)
        { difficulty: 'Hard', question: "7 mense, insluitend 'n getroude paar, sit lukraak in 'n ry van 7 stoele. Bepaal die waarskynlikheid dat die getroude paar saam sit.", checkMode: 'auto', correctAnswer: '2/7', correctAnswers: ['2/7', '1440/5040', '0,286', '0.286', '≈2/7', '≈0,286', '≈0.286'], explanation: 'Totale rangskikkings: 7! = 5040. Gunstige (paar saam): behandel as een blok, 6! × 2! = 720 × 2 = 1440. P = 1440 ÷ 5040 = 2/7 ✓' },
        { difficulty: 'Hard', question: 'Die letters van die woord "RADAR" word in \'n lukrake volgorde gerangskik. Bepaal die waarskynlikheid dat die rangskikking met die letter D begin.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30', '0,2', '0.2'], explanation: 'RADAR het 5 letters met R wat twee keer herhaal en A wat twee keer herhaal, so totale rangskikkings = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30. Gunstige: vas D in die eerste posisie, rangskik dan R, A, A, R (4 letters, R herhaal twee keer en A herhaal twee keer) in die oorblywende posisies: 4! ÷ (2! × 2!) = 6. P = 6 ÷ 30 = 1/5 ✓' },
        { difficulty: 'Hard', question: "'n Slotkode word gevorm deur 4 verskillende syfers uit 0–9 te rangskik, sonder om enige syfer te herhaal. Bepaal die waarskynlikheid dat die kode met 'n ewe syfer eindig.", checkMode: 'self', answer: 'Totale kodes: 10 × 9 × 8 × 7 = 5040. Gunstige (eindig met \'n ewe syfer): die laaste syfer het 5 keuses (0, 2, 4, 6 of 8), dan word die eerste 3 syfers uit die oorblywende 9 syfers sonder herhaling gekies = 9 × 8 × 7 = 504, wat 5 × 504 = 2520 gee. P = 2520 ÷ 5040 = 1/2 = 0,5.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het teltegnieke en permutasies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Hersien die telbeginsel- en permutasie-afdelings, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },
  ] satisfies PracticeSet[],
}
