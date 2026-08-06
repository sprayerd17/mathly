import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Posisie en Beweging',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DESCRIBING POSITION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'describing-position',
      title: 'Posisie Beskryf',
      icon: '📍',
      explanation: `
<p style="margin-bottom:14px;"><strong>Posisie</strong> beskryf <strong>waar iets is</strong> in verhouding tot ander voorwerpe rondom dit. In plaas daarvan om te sê "die boek is daar," gebruik ons posisiewoorde om meer presies te wees — sodat iemand anders presies kan vind waarvan ons praat.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Alledaagse voorbeelde 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>Die boek is <strong>bo-op</strong> die lessenaar</li>
    <li>Die kat is <strong>agter</strong> die stoel</li>
    <li>Die winkel is <strong>langsaan</strong> die skool</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Posisiewoorde</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Bo</span>
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Onder</span>
      </span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Word gebruik om iets te beskryf wat <strong style="color:#dc2626;">hoër op of laer af</strong> as 'n ander voorwerp is. Die lamp is <em>bo</em> die tafel. Die mat is <em>onder</em> die stoel.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Links</span>
        <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Regs</span>
      </span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Word gebruik om iets te beskryf wat aan die <strong style="color:#1e40af;">linkerkant of regterkant</strong> van 'n verwysingspunt is. Die venster is aan die <em>linkerkant</em>. Die deur is aan die <em>regterkant</em>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Voor</span>
        <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Agter</span>
      </span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Word gebruik om iets te beskryf wat <strong style="color:#16a34a;">na jou toe kyk of aan die ander kant</strong> is. Die onderwyser staan <em>voor</em> die klas. Die bord is <em>agter</em> die onderwyser.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Langsaan</span>
        <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Tussen</span>
      </span>
      <span style="color:#7c2d12;font-size:15px;padding-top:1px;"><em>Langsaan</em> beteken <strong style="color:#ea580c;">direk langs</strong> iets. <em>Tussen</em> beteken <strong style="color:#ea580c;">in die middel van twee dinge</strong>. Die potlood is <em>langsaan</em> die liniaal. Die uitveër is <em>tussen</em> die potlood en die pen.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="display:flex;gap:6px;flex-shrink:0;">
        <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Naby</span>
        <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Ver</span>
      </span>
      <span style="color:#3b0764;font-size:15px;padding-top:1px;">Word gebruik om <strong style="color:#7c3aed;">afstand</strong> vanaf 'n verwysingspunt te beskryf. Die winkel is <em>naby</em> die skool. Die hospitaal is <em>ver</em> van die skool.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: "Kyk na 'n klaskamer. Beskryf waar die onderwyser se lessenaar is deur posisiewoorde te gebruik.",
          steps: [
            'Die onderwyser se lessenaar is <strong style="color:#16a34a;">voor</strong> die klas — leerders kyk daarna.',
            'Die bord is <strong style="color:#16a34a;">agter</strong> die onderwyser — die onderwyser staan tussen die klas en die bord.',
            'Die vensters is aan die <strong style="color:#1e40af;">linkerkant</strong> van die onderwyser wanneer sy/hy na die klas kyk.',
            'Die deur is aan die <strong style="color:#1e40af;">regterkant</strong> van die onderwyser wanneer sy/hy na die klas kyk.',
          ],
          answer:
            'Die onderwyser se lessenaar is voor die klas. Die bord is agter die onderwyser. Die vensters is aan die linkerkant en die deur is aan die regterkant.',
        },
        {
          question:
            "'n Kat sit tussen twee honde. 'n Voël is bo die kat. 'n Vistenk is onder die voël en aan die regterkant van die kat. Beskryf die posisie van elke dier.",
          steps: [
            '<strong>Kat:</strong> <strong style="color:#ea580c;">tussen</strong> die twee honde — daar is een hond aan elke kant.',
            '<strong>Voël:</strong> <strong style="color:#dc2626;">bo</strong> die kat — dit is hoër op as die kat.',
            '<strong>Vistenk:</strong> <strong style="color:#dc2626;">onder</strong> die voël EN <strong style="color:#1e40af;">aan die regterkant</strong> van die kat — twee posisiewoorde word saam gebruik om meer presies te wees.',
          ],
          answer:
            'Kat: tussen die twee honde.\nVoël: bo die kat.\nVistenk: onder die voël en aan die regterkant van die kat.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        "Eenvoudige klaskameruitleg van bo af gesien, met 'n lessenaar voor, bord agter, vensters links, deur regs met posisiewoordetikette",
      videoPlaceholder:
        'Kort video wat posisiewoorde soos bo, onder, links, regs, voor, agter, langsaan en tussen wys deur alledaagse voorwerpe te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING A GRID TO LOCATE OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'using-a-grid-to-locate-objects',
      title: "'n Rooster Gebruik om Voorwerpe te Vind",
      icon: '🗺️',
      explanation: `
<p style="margin-bottom:14px;">'n <strong>Rooster</strong> is 'n stel lyne wat mekaar kruis om vierkante te vorm. Ons gebruik roosters om posisies <strong>presies</strong> te beskryf — in plaas daarvan om te sê "die boom is êrens naby die bokant," kan ons presies sê waar dit is deur 'n <strong>roosterverwysing</strong> te gebruik.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe 'n rooster werk</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Kolomme</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Kolomme loop <strong style="color:#1e40af;">van links na regs</strong> oor die rooster. Hulle word gewoonlik met <strong style="color:#1e40af;">letters — A, B, C, D …</strong> gemerk, beginnend van links.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Rye</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Rye loop <strong style="color:#dc2626;">van onder na bo</strong> in die rooster op. Hulle word gewoonlik met <strong style="color:#dc2626;">syfers — 1, 2, 3, 4 …</strong> gemerk, beginnend van onder.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Roosterverwysing</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">'n Roosterverwysing gee eers die <strong style="color:#1e40af;">kolomletter</strong>, dan die <strong style="color:#dc2626;">rynommer</strong>. Gaan altyd <strong>eers oor, dan op</strong> — net soos wanneer jy 'n gebou binnegaan en dan die hyser neem.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Onthou-truuk 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;"><strong>Eers met die gang langs, dan met die trappe op.</strong> Lees altyd eers die <strong style="color:#1e40af;">kolom (letter)</strong> — dit is soos om met die gang langs te loop. Lees dan die <strong style="color:#dc2626;">ry (syfer)</strong> — dit is soos om met die trappe op te gaan. So beteken <strong style="color:#16a34a;">B3</strong> <strong style="color:#1e40af;">kolom B</strong> en dan <strong style="color:#dc2626;">ry 3</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">'n Roosterverwysing lees</div>
  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:4px 14px;font-weight:700;font-size:20px;letter-spacing:.05em;">A1</span>
    <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">Kolom A</strong> (eerste kolom van links) + <strong style="color:#dc2626;">Ry 1</strong> (eerste ry van onder)</span>
  </div>
  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:4px 14px;font-weight:700;font-size:20px;letter-spacing:.05em;">C4</span>
    <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">Kolom C</strong> (derde kolom van links) + <strong style="color:#dc2626;">Ry 4</strong> (vierde ry van onder)</span>
  </div>
</div>
`,
      workedExamples: [
        {
          question: "Op 'n rooster is 'n boom by B3. Waar is B3?",
          steps: [
            '<strong style="color:#1e40af;">Vind kolom B</strong> — begin by die linkerkant en tel oor: A is eerste, <strong>B is tweede</strong>.',
            '<strong style="color:#dc2626;">Vind ry 3</strong> — begin by die onderkant en tel op: 1 is eerste, 2 is tweede, <strong>3 is derde</strong>.',
            '<strong style="color:#16a34a;">B3 is waar kolom B en ry 3 ontmoet</strong> — gaan oor na kolom B, dan op na ry 3.',
          ],
          answer: 'B3 is in die tweede kolom en die derde ry van onder af.',
        },
        {
          question:
            "'n Rooster wys 'n skool by C2, 'n winkel by A4 en 'n park by D1.\na) Watter voorwerp is die verste na regs?\nb) Watter voorwerp is die hoogste op op die rooster?\nc) Wat is by B3 as niks daar gelys is nie?",
          steps: [
            '<strong style="color:#1e40af;">Kolomme loop van links na regs</strong> — A is heel links, dan B, C, D is heel regs. Die park is by <strong>D1</strong>, so dit is die verste na regs.',
            '<strong style="color:#dc2626;">Rye loop van onder na bo</strong> — ry 1 is die laagste, ry 4 is die hoogste. Die winkel is by <strong>A4</strong> (ry 4), so dit is die hoogste op.',
            "<strong style=\"color:#16a34a;\">B3</strong> word nie in die vraag gelys nie, so <strong>niks is daar geplaas nie</strong> — dit is 'n leë blokkie op die rooster.",
          ],
          answer:
            'a) D1 — die park is die verste na regs (kolom D is die regterste kolom).\nb) A4 — die winkel is die hoogste op (ry 4 is die hoogste ry).\nc) B3 is leeg — geen voorwerp is daar geplaas nie.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        "'n 4×4 rooster gemerk A tot D oor die onderkant en 1 tot 4 op teen die linkerkant, met 'n skoolikoon by C2, 'n winkelikoon by A4 en 'n parkikoon by D1",
      videoPlaceholder:
        'Kort video wat wys hoe om kolom- en ry-etikette te gebruik om posisies op \'n rooster te vind en te beskryf',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — GIVING AND FOLLOWING DIRECTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'giving-and-following-directions',
      title: 'Rigtings Gee en Volg',
      icon: '🧭',
      explanation: `
<p style="margin-bottom:14px;"><strong>Rigtings</strong> vertel ons hoe om van een plek na 'n ander te kom. Goeie rigtings is duidelik, gebruik posisiewoorde en vertel ons presies waar om te draai en hoe ver om te gaan. Enigiemand wat die rigtings lees, behoort dit te kan volg en by die regte plek uit te kom.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Rigtingwoorde</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Gaan reguit vorentoe</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Beweeg steeds in <strong style="color:#1e40af;">dieselfde rigting</strong> waarin jy reeds kyk — moenie draai nie.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Draai links</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Maak 'n <strong style="color:#dc2626;">kwartdraai na links</strong> (antikloksgewys) en beweeg dan voort.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Draai regs</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Maak 'n <strong style="color:#dc2626;">kwartdraai na regs</strong> (kloksgewys) en beweeg dan voort.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Draai om</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Maak 'n <strong style="color:#dc2626;">halfdraai (180°)</strong> sodat jy nou in die teenoorgestelde rigting kyk.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Beweeg vorentoe … tree</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Loop 'n <strong style="color:#16a34a;">spesifieke aantal tree of blokke</strong> in die rigting waarin jy kyk voordat jy enigiets anders doen.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Wenke vir goeie rigtings 💡</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li>Sê altyd <strong>waar om te begin</strong> en in watter rigting jy kyk.</li>
    <li>Sê <strong>hoe ver</strong> om te gaan voor elke draai.</li>
    <li>Gebruik <strong>landmerke</strong> soos "verby die winkel" of "totdat jy by die hek kom."</li>
    <li>Beskryf die <strong>bestemming</strong> duidelik sodat die persoon weet wanneer hulle daar aangekom het.</li>
  </ul>
</div>
`,
      workedExamples: [
        {
          question: "Gee rigtings van die skool na die park op 'n eenvoudige kaart.",
          steps: [
            '<strong style="color:#1e40af;">Begin by die skool</strong> en kyk na die noorde.',
            '<strong style="color:#16a34a;">Gaan reguit vorentoe 2 blokke</strong> — stap noord aan sonder om te draai.',
            "<strong style=\"color:#dc2626;\">Draai regs</strong> — maak 'n kwartdraai kloksgewys; jy kyk nou na die ooste.",
            '<strong style="color:#16a34a;">Gaan reguit vorentoe 1 blok</strong> — stap oos een blok.',
            'Die <strong>park is aan jou linkerkant</strong> — dit is aan die noordekant terwyl jy oos stap.',
          ],
          answer:
            'Van die skool af, gaan reguit vorentoe 2 blokke, draai regs, gaan 1 blok, en die park is aan jou linkerkant.',
        },
      ],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — TURNS AND MOVEMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'turns-and-movement',
      title: 'Draaie en Beweging',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;">Wanneer ons beweging beskryf, moet ons dikwels sê hoeveel iemand of iets <strong>gedraai</strong> het. Draaie word in <strong>grade</strong> gemeet en beskryf met woorde soos <em>volledige draai</em>, <em>halfdraai</em> en <em>kwartdraai</em>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Soorte draaie</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Volledige draai</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Draai heeltemal om <strong style="color:#dc2626;">360°</strong> en eindig deur weer in <strong>dieselfde rigting</strong> te kyk waarin jy begin het. Soos om in 'n volledige sirkel te draai.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Halfdraai</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Draai halfpad om <strong style="color:#1e40af;">180°</strong> en eindig deur in die <strong>teenoorgestelde rigting</strong> te kyk. As jy noord begin kyk, eindig jy suid te kyk.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Kwartdraai</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Draai 'n kwart van die pad om <strong style="color:#16a34a;">90°</strong>, óf kloksgewys óf antikloksgewys. As jy noord begin kyk en kloksgewys draai, eindig jy oos te kyk.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Kloksgewys en antikloksgewys</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Kloksgewys</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Draai in <strong style="color:#1e40af;">dieselfde rigting as die horlosiewysers</strong> — van 12 na 3 na 6 na 9 en terug na 12. Noord → Oos → Suid → Wes → Noord.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Antikloksgewys</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Draai in die <strong style="color:#1e40af;">teenoorgestelde rigting van die horlosiewysers</strong> — van 12 na 9 na 6 na 3 en terug na 12. Noord → Wes → Suid → Oos → Noord.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Kompasrigtings na 'n kwartdraai 🧭</span>
  <div style="overflow-x:auto;margin-top:10px;">
    <table style="border-collapse:collapse;font-size:14px;width:100%;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Beginrigting</th>
          <th style="padding:8px 14px;text-align:center;color:#1e40af;font-weight:700;">Kwartdraai kloksgewys →</th>
          <th style="padding:8px 14px;text-align:center;color:#1e40af;font-weight:700;">Kwartdraai antikloksgewys ←</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">Noord</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">Oos</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">Wes</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">Oos</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">Suid</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">Noord</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">Suid</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">Wes</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">Oos</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:600;color:#0f1f3d;">Wes</td>
          <td style="padding:8px 14px;text-align:center;color:#16a34a;font-weight:700;">Noord</td>
          <td style="padding:8px 14px;text-align:center;color:#dc2626;font-weight:700;">Suid</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "Thabo kyk na die noorde. Hy maak 'n kwartdraai kloksgewys. In watter rigting kyk hy nou?",
          steps: [
            '<strong style="color:#1e40af;">Begin deur noord te kyk.</strong>',
            "<strong style=\"color:#16a34a;\">Kwartdraai kloksgewys</strong> = draai 90° in die rigting van die horlosiewysers — dit is 'n draai na regs.",
            'Noord → kloksgewys 90° → <strong>Oos</strong>.',
          ],
          answer: 'Thabo kyk nou na die ooste.',
        },
        {
          question:
            "Lerato kyk na die suide. Sy maak 'n halfdraai. In watter rigting kyk sy nou?",
          steps: [
            '<strong style="color:#1e40af;">Begin deur suid te kyk.</strong>',
            '<strong style="color:#1e40af;">Halfdraai</strong> = draai 180° — dit laat jou altyd in die <strong>teenoorgestelde rigting</strong> kyk.',
            'Die teenoorgestelde van suid is <strong>noord</strong>.',
          ],
          answer: 'Lerato kyk nou na die noorde.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        "'n Kompas wat noord, suid, oos en wes wys met pyle wat 'n kwartdraai kloksgewys van noord na oos en 'n halfdraai van suid na noord wys",
      videoPlaceholder:
        'Kort video wat volledige, half- en kwartdraaie kloksgewys en antikloksgewys wys deur \'n kompas of horlosie te gebruik',
    },
  ],
  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 (0-3) Posisiewoorde — Maklik
        { difficulty: 'Easy', question: 'Die lamp is hoër op as die tafel. Watter posisiewoord beskryf die lamp?', checkMode: 'auto', options: ['Bo', 'Onder', 'Tussen', 'Langsaan'], correctIndex: 0, explanation: '"Bo" beteken in \'n hoër posisie as \'n ander voorwerp — net soos die lamp in vergelyking met die tafel. "Onder" is die teenoorgestelde rigting, "Tussen" het twee voorwerpe aan weerskante nodig, en "Langsaan" beskryf iets wat langs iets anders is, nie hoër op nie.' },
        { difficulty: 'Easy', question: '\'n Onderwyser staan en kyk na die klas, met die bord aan die ander kant van die onderwyser. Watter posisiewoord beskryf die bord, in verhouding tot die klas?', checkMode: 'auto', options: ['Voor', 'Agter', 'Bo', 'Langsaan'], correctIndex: 1, explanation: 'Die bord is agter die onderwyser — aan die verste kant, weg van die klas. "Voor" draai die verhouding om, "Bo" verwar hoogte met kant, en "Langsaan" is nie direk langs die klas nie.' },
        { difficulty: 'Easy', question: 'Die hospitaal is \'n lang ent van die skool af, maar die spazawinkel is net \'n kort afstand weg. Watter twee posisiewoorde beskryf die hospitaal en die spazawinkel korrek?', checkMode: 'auto', options: ['Naby en ver', 'Links en regs', 'Ver en naby', 'Bo en onder'], correctIndex: 2, explanation: 'Die hospitaal is ver (\'n lang afstand weg) en die spazawinkel is naby (\'n kort afstand weg) — in daardie volgorde. "Naby en ver" verwissel watter gebou watter woord kry, en "Links en regs" en "Bo en onder" beskryf rigting, nie afstand nie.' },
        { difficulty: 'Easy', question: '\'n Kat sit tussen twee honde, met \'n voël bo die kat. Watter van hierdie woorde sou NIE die voël se posisie korrek beskryf nie — bo, tussen, of hoër op?', checkMode: 'auto', options: ['Bo', 'Hoër op', 'Langsaan', 'Tussen'], correctIndex: 3, explanation: 'Die voël is bo (hoër op as) die kat, nie tussen twee dinge nie — "tussen" beskryf die kat se posisie, nie die voël s\'n nie, so dit is die woord wat NIE van toepassing is nie. "Langsaan" was nooit een van die drie gelyste woorde nie, maar dit sou ook nie die voël beskryf nie.' },

        // Blok 2 (4-7) Roosterverwysings — Maklik — gedeelde roosterdiagram (SET1_GRID)
        { difficulty: 'Easy', question: 'Op \'n rooster, in watter rigting loop kolomme?', checkMode: 'auto', options: ['Van links na regs', 'Van bo na onder', 'Van onder na bo', 'Van regs na links'], correctIndex: 0, explanation: 'Kolomme loop van links na regs oor \'n rooster en word gewoonlik met letters gemerk. "Van bo na onder" en "Van onder na bo" beskryf rye, nie kolomme nie, en "Van regs na links" keer die leesrigting om.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: wat is die roosterverwysing van die skoolikoon?', checkMode: 'auto', options: ['B3', 'C3', 'C4', 'D3'], correctIndex: 1, explanation: 'Die skool is in kolom C, ry 3, so die roosterverwysing is C3 — kolomletter eerste, dan rynommer. B3 lees een kolom te ver links, C4 lees een ry te hoog, en D3 lees een kolom te ver regs.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: watter ikoon is die verste na links?', checkMode: 'auto', options: ['Boom', 'Skool', 'Winkel', 'Hulle is almal ewe ver links'], correctIndex: 2, explanation: 'Die winkel is in kolom A, die linkerste kolom, so dit is die verste na links. Om die boom (kolom D) te kies beteken jy lees die rooster per ongeluk van regs na links, en die skool (kolom C) is in die middel, nie op die rand nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },
        { difficulty: 'Easy', question: 'Op \'n rooster gemerk 1 tot 4 op teen die kant, watter ry is die laagste?', checkMode: 'auto', options: ['Ry 4', 'Ry 3', 'Ry 2', 'Ry 1'], correctIndex: 3, explanation: 'Rye word gemerk beginnend van onder, so ry 1 is die laagste ry. Om ry 4 te kies verwar die hoogste-genommerde ry met die laagste, asof jy van bo af aftel in plaas van van onder af optel.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="127" y="80" text-anchor="middle" font-size="22">🏫</text><text x="57" y="115" text-anchor="middle" font-size="22">🏪</text><text x="162" y="150" text-anchor="middle" font-size="22">🌳</text></svg>' },

        // Blok 3 (8-9) Draaie en grade — Maklik-Medium
        { difficulty: 'Easy-Medium', question: '\'n Volledige draai is 360°, \'n halfdraai is 180°, en \'n kwartdraai is 90°. Watter van hierdie drie draaie bring jou terug om in dieselfde rigting te kyk waarin jy begin het?', checkMode: 'auto', options: ['Volledige draai', 'Halfdraai', 'Kwartdraai', 'Nie een van hulle nie'], correctIndex: 0, explanation: 'Slegs \'n volledige draai (360°) bring jou heeltemal terug om in dieselfde rigting te kyk waarin jy begin het. \'n Halfdraai laat jou in die teenoorgestelde rigting kyk, en \'n kwartdraai laat jou eenkant toe kyk.' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde en maak \'n halfdraai. Kyk jy nou in dieselfde rigting, die teenoorgestelde rigting, of \'n rigting reghoekig tot noord?', checkMode: 'auto', options: ['Dieselfde rigting', 'Teenoorgestelde rigting', '\'n Regte hoek tot noord', 'Kan nie bepaal word nie'], correctIndex: 1, explanation: '\'n Halfdraai (180°) bring jou altyd om in die presiese teenoorgestelde rigting te kyk — noord word suid. "\'n Regte hoek tot noord" beskryf wat \'n kwartdraai doen, nie \'n halfdraai nie.' },

        // Blok 4 (10-13) Multi-stap roosterbeweging — Medium
        { difficulty: 'Medium', question: 'Op \'n rooster is die kliniek by kolom B, ry 1. Die mark is 2 kolomme na regs en 3 rye op vanaf die kliniek. Wat is die mark se roosterverwysing?', checkMode: 'auto', options: ['C4', 'D3', 'D4', 'E4'], correctIndex: 2, explanation: '2 kolomme regs vanaf B: C (1), D (2). 3 rye op vanaf 1: 2 (1), 3 (2), 4 (3). Die mark is by D4. C4 beweeg slegs 1 kolom in plaas van 2, D3 beweeg slegs 2 rye in plaas van 3, en E4 oorskiet deur 3 kolomme in plaas van 2 te beweeg.' },
        { difficulty: 'Medium', question: 'Vergelyk die roosterverwysings C1 en A4: is C1 na regs van A4, na links van A4, of in dieselfde kolom as A4?', checkMode: 'auto', options: ['Na links van A4', 'In dieselfde kolom as A4', 'Bo A4', 'Na regs van A4'], correctIndex: 3, explanation: 'C kom na A wanneer jy kolomme van links na regs tel, so C1 is na regs van A4, ongeag die ry. \'n Vergelyking van slegs kolomme ignoreer die rynommers heeltemal, en dis waarom "Bo A4" (\'n ry-vergelyking) hier nie van toepassing is nie.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n put by A1 en \'n hut by D4. As jy slegs regs of op kan beweeg, hoeveel treë in totaal neem dit om van die put na die hut te kom?', checkMode: 'auto', options: ['6', '4', '8', '3'], correctIndex: 0, explanation: '3 kolomme regs (A→D) + 3 rye op (1→4) = 6 treë in totaal. Om 4 te tel verwar die aantal kolomme waardeur jy beweeg (A, B, C, D) met die aantal treë, en 8 maak dieselfde fout in albei rigtings.' },
        { difficulty: 'Medium', question: '\'n Robot by roosterverwysing B2 beweeg 2 kolomme regs, dan 1 ry op. Wat is sy nuwe roosterverwysing?', checkMode: 'auto', options: ['D2', 'D3', 'C3', 'E3'], correctIndex: 1, explanation: '2 kolomme regs vanaf B: C, D. 1 ry op vanaf 2 is 3. Die nuwe posisie is D3. D2 vergeet die ry-beweging heeltemal, en C3 en E3 tel die kolom-beweging verkeerd.' },

        // Blok 5 (14-15) Kloksgewys/antikloksgewys — Medium — gedeelde kompasdiagram
        { difficulty: 'Medium', question: 'Jy kyk na die noorde en maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Wes', 'Suid', 'Oos', 'Noord'], correctIndex: 2, explanation: 'Kloksgewys vanaf noord: Noord → Oos. \'n Kwartdraai kloksgewys eindig by Oos. Wes is die antikloksgewyse antwoord, Suid is wat \'n halfdraai sou gee, en Noord sou beteken dat geen draai plaasgevind het nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },
        { difficulty: 'Medium', question: 'Jy kyk na die suide en maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Wes', 'Noord', 'Suid', 'Oos'], correctIndex: 3, explanation: 'Antikloksgewys keer die kloksgewyse volgorde om (N→O→S→W), so Suid → Oos. Wes sou die kloksgewyse antwoord wees, Noord oorskiet met \'n halfdraai, en Suid sou beteken dat geen draai plaasgevind het nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },

        // Blok 6 (16-19) Woordprobleme / foutopsporing / multi-stap / redenering — Moeilik
        { difficulty: 'Hard', question: 'Jy begin by die skool en kyk na die noorde. Jy stap 2 blokke, draai dan regs, en stap nog 1 blok, en kom by die kliniek aan. In watter rigting kyk jy wanneer jy by die kliniek aankom?', checkMode: 'auto', options: ['Oos', 'Noord', 'Suid', 'Wes'], correctIndex: 0, explanation: 'Om regs te draai vanaf noord is \'n kwartdraai kloksgewys: Noord → Oos. Jy kyk oos wanneer jy aankom. Noord neem verkeerdelik aan dat die draai jou kykrigting nie verander het nie, Suid oorskiet met \'n halfdraai, en Wes is die antikloksgewyse antwoord.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="140" r="6" fill="#0f1f3d"/><text x="60" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Skool</text><line x1="60" y1="140" x2="60" y2="60" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r1a)"/><text x="48" y="100" text-anchor="end" font-size="12" font-weight="700" fill="#2563eb">2 blokke N</text><line x1="60" y1="60" x2="150" y2="60" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r1b)"/><text x="105" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">1 blok O</text><circle cx="150" cy="60" r="6" fill="#dc2626"/><text x="150" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Kliniek</text><defs><marker id="r1a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r1b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Lerato beweer dat "langsaan" en "tussen" presies dieselfde beteken, aangesien beide woorde dinge beskryf wat naby mekaar is. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Sy is korrek — albei woorde beteken eenvoudig "naby mekaar," so hulle kan uitruilbaar gebruik word.', 'Sy is verkeerd — "langsaan" beteken direk langs net een voorwerp, maar "tussen" beteken in die middel van twee voorwerpe, met een aan elke kant.', 'Sy is korrek, maar slegs wanneer daar presies twee voorwerpe naby is.', 'Sy is verkeerd — "langsaan" beteken ver weg en "tussen" beteken naby.'], correctIndex: 1, explanation: 'Lerato is nie korrek nie. "Langsaan" beteken direk langs net een ander voorwerp, maar "tussen" beteken in die middel van twee voorwerpe, met een aan elke kant — \'n potlood kan byvoorbeeld langsaan \'n liniaal wees (een voorwerp), maar \'n uitveër tussen \'n potlood en \'n pen moet iets aan albei kante hê. Dit is verskillende verhoudings, nie dieselfde ding nie.' },
        { difficulty: 'Hard', question: '\'n Robot by roosterverwysing A1 volg hierdie instruksies: beweeg 2 regs, beweeg 2 op, beweeg 1 links, beweeg 1 af. Wat is sy finale roosterverwysing?', checkMode: 'auto', options: ['B3', 'C2', 'B2', 'A2'], correctIndex: 2, explanation: 'A1 → 2 regs → C1 → 2 op → C3 → 1 links → B3 → 1 af → B2. Om B3 te kies slaan die finale "1 af"-stap oor, C2 slaan die "1 links"-stap oor, en A2 tel die beweging na links verkeerdelik as 2 in plaas van 1.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom "draai links" en "draai regs" tot verskillende finale rigtings kan lei, alhoewel albei kwartdraaie van dieselfde grootte is. Watter stelling verduidelik dit korrek?', checkMode: 'auto', options: ['Hulle verskil eintlik nie — "links" en "regs" kwartdraaie eindig altyd deur in dieselfde rigting te kyk.', 'Hulle verskil net omdat "regs" \'n groter hoek is as "links."', 'Hulle verskil omdat "draai links" \'n halfdraai beteken terwyl "draai regs" \'n kwartdraai beteken.', 'Hulle verskil omdat draai regs kloksgewys is en draai links antikloksgewys is, sodat hulle vanaf dieselfde beginpunt na teenoorgestelde kante van die kompas draai.'], correctIndex: 3, explanation: 'Albei draaie is 90°, maar hulle draai in teenoorgestelde rigtings — draai regs is kloksgewys en draai links is antikloksgewys. Omdat die kloksgewyse volgorde (N→O→S→W) en die antikloksgewyse volgorde (N→W→S→O) in teenoorgestelde volgordes om die kompas gaan, eindig \'n kwartdraai links en \'n kwartdraai regs vanaf dieselfde beginrigting om in verskillende, teenoorgestelde rigtings te kyk.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het posisie en beweging baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan posisiewoorde, roosters, draaie en rigtings goed — gaan enige verkeerde vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die posisie- en bewegingsafdelings en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 (0-3) Posisiewoorde — Maklik
        { difficulty: 'Easy', question: 'Die mat is laer af as die stoel. Watter posisiewoord beskryf die mat?', checkMode: 'auto', options: ['Onder', 'Bo', 'Tussen', 'Langsaan'], correctIndex: 0, explanation: '"Onder" beteken in \'n laer posisie as \'n ander voorwerp — net soos die mat in vergelyking met die stoel. "Bo" is die teenoorgestelde rigting, "Tussen" het twee voorwerpe aan weerskante nodig, en "Langsaan" beskryf iets wat langs iets anders is, nie laer af nie.' },
        { difficulty: 'Easy', question: 'Die uitveër het die potlood aan die een kant en die pen aan die ander kant. Watter posisiewoord beskryf die uitveër?', checkMode: 'auto', options: ['Langsaan', 'Tussen', 'Bo', 'Agter'], correctIndex: 1, explanation: '"Tussen" beteken in die middel van twee dinge, met een aan elke kant — net soos die uitveër tussen die potlood en die pen. "Langsaan" beskryf slegs een voorwerp aan een kant, en "Bo" en "Agter" beskryf heeltemal ander verhoudings.' },
        { difficulty: 'Easy', question: '\'n Bal lê direk op die oppervlak van \'n tafel, met die tafel self op die vloer. Watter posisiewoord beskryf die bal se verhouding tot die tafel?', checkMode: 'auto', options: ['Bo', 'Langsaan', 'Bo-op', 'Onder'], correctIndex: 2, explanation: '"Bo-op" beteken direk op die oppervlak van iets rus, soos die bal op die tafel. "Bo" beskryf slegs hoër wees sonder om te raak, "Langsaan" is die verkeerde verhouding, en "Onder" is die teenoorgestelde.' },
        { difficulty: 'Easy', question: '\'n Hond sit langsaan \'n hek, en \'n kat sit ver van albei, naby die heining agter in die werf. Beskryf die kat se posisie deur twee posisiewoorde saam te gebruik.', checkMode: 'auto', options: ['Naby en ver', 'Bo en onder', 'Links en regs', 'Ver en naby'], correctIndex: 3, explanation: 'Die kat is ver van die hond en hek af, maar naby die heining — twee posisiewoorde word benodig om dit presies te beskryf, in daardie volgorde: ver en naby. "Naby en ver" verwissel die volgorde om, en "Bo en onder" en "Links en regs" beskryf rigting, nie afstand nie.' },

        // Blok 2 (4-7) Roosterverwysings — Maklik — gedeelde roosterdiagram (SET2_GRID)
        { difficulty: 'Easy', question: 'Op \'n rooster, in watter rigting loop rye?', checkMode: 'auto', options: ['Van onder na bo', 'Van links na regs', 'Van bo na onder', 'Van regs na links'], correctIndex: 0, explanation: 'Rye loop van onder na bo in \'n rooster op en word gewoonlik met syfers gemerk. "Van links na regs" en "Van regs na links" beskryf kolomme, nie rye nie, en "Van bo na onder" keer die telrigting om.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: wat is die roosterverwysing van die huisikoon?', checkMode: 'auto', options: ['B3', 'B4', 'A4', 'C4'], correctIndex: 1, explanation: 'Die huis is in kolom B, ry 4, so die roosterverwysing is B4 — kolomletter eerste, dan rynommer. B3 lees een ry te laag, A4 lees een kolom te ver links, en C4 lees een kolom te ver regs.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: watter ikoon is in die hoogste ry?', checkMode: 'auto', options: ['Emmer', 'Stoel', 'Huis', 'Hulle is almal in dieselfde ry'], correctIndex: 2, explanation: 'Die huis is in ry 4, die hoogste ry op hierdie rooster, so dit is die hoogste op. Om die emmer (ry 2) of stoel (ry 1) te kies verwar kolomposisie met ryhoogte, en hulle deel nie dieselfde ry nie — elke ikoon is in \'n ander ry.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },
        { difficulty: 'Easy', question: 'In \'n roosterverwysing soos D2, watter deel gee jou die kolom — die letter of die syfer?', checkMode: 'auto', options: ['Die syfer', 'Albei ewe veel', 'Nie een nie', 'Die letter'], correctIndex: 3, explanation: '\'n Roosterverwysing gee altyd eers die kolomletter, dan die rynommer — die letter gee jou die kolom. Die syfer gee eerder die ry, en dit is nooit "albei ewe veel" of "nie een nie" — elke deel het \'n vaste rol.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="92" y="45" text-anchor="middle" font-size="22">🏠</text><text x="162" y="115" text-anchor="middle" font-size="22">🪣</text><text x="57" y="150" text-anchor="middle" font-size="22">🪑</text></svg>' },

        // Blok 3 (8-9) Draaie en grade — Maklik-Medium
        { difficulty: 'Easy-Medium', question: '\'n Volledige draai is 360°, \'n halfdraai is die helfte daarvan, en \'n kwartdraai is die helfte van \'n halfdraai. Wat is \'n kwartdraai in grade?', checkMode: 'auto', options: ['90°', '180°', '45°', '360°'], correctIndex: 0, explanation: '\'n Halfdraai is 360° ÷ 2 = 180°. \'n Kwartdraai is die helfte daarvan: 180° ÷ 2 = 90°. 180° verwar die kwartdraai met die halfdraai, 45° halveer dit een keer te veel, en 360° verwar dit met \'n volledige draai.' },
        { difficulty: 'Medium', question: 'Jy kyk na die ooste en maak \'n halfdraai. Kyk jy nou in dieselfde rigting, die teenoorgestelde rigting, of \'n rigting reghoekig tot oos?', checkMode: 'auto', options: ['Dieselfde rigting', 'Teenoorgestelde rigting', '\'n Regte hoek tot oos', 'Kan nie bepaal word nie'], correctIndex: 1, explanation: '\'n Halfdraai (180°) bring jou altyd om in die presiese teenoorgestelde rigting te kyk — oos word wes. "\'n Regte hoek tot oos" beskryf wat \'n kwartdraai doen, nie \'n halfdraai nie.' },

        // Blok 4 (10-13) Multi-stap roosterbeweging — Medium
        { difficulty: 'Medium', question: 'Op \'n rooster is die biblioteek by kolom A, ry 2. Die hek is 3 kolomme na regs en 1 ry op vanaf die biblioteek. Wat is die hek se roosterverwysing?', checkMode: 'auto', options: ['C3', 'D2', 'D3', 'D4'], correctIndex: 2, explanation: '3 kolomme regs vanaf A: B (1), C (2), D (3). 1 ry op vanaf 2 is 3. Die hek is by D3. C3 beweeg slegs 2 kolomme in plaas van 3, D2 vergeet die ry-beweging heeltemal, en D4 tel die ry-beweging as 2 in plaas van 1.' },
        { difficulty: 'Medium', question: 'Vergelyk die roosterverwysings B3 en B1: is B3 hoër op, laer af, of in dieselfde ry as B1?', checkMode: 'auto', options: ['Laer af', 'In dieselfde ry as B1', 'Na regs van B1', 'Hoër op'], correctIndex: 3, explanation: 'Ry 3 is bo ry 1, aangesien rye toeneem soos jy opgaan, so B3 is hoër op as B1. \'n Ry-vergelyking ignoreer kolomme heeltemal, en dis waarom "Na regs van B1" (\'n kolom-vergelyking) hier nie van toepassing is nie.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n spazawinkel by B1 en \'n taxistaanplek by D4. As jy slegs regs of op kan beweeg, hoeveel treë in totaal neem dit om van die spazawinkel na die taxistaanplek te kom?', checkMode: 'auto', options: ['5', '7', '6', '4'], correctIndex: 0, explanation: '2 kolomme regs (B→D) + 3 rye op (1→4) = 5 treë in totaal. Om 7 te tel, tel jy elke kolom en ry waardeur jy beweeg inklusief (B, C, D en 1, 2, 3, 4) in plaas van net die treë, en 6 en 4 tel een van die twee rigtings verkeerd.' },
        { difficulty: 'Medium', question: '\'n Robot by roosterverwysing C1 beweeg 1 kolom links, dan 3 rye op. Wat is sy nuwe roosterverwysing?', checkMode: 'auto', options: ['A4', 'B4', 'C4', 'B3'], correctIndex: 1, explanation: '1 kolom links vanaf C is B. 3 rye op vanaf 1: 2, 3, 4. Die nuwe posisie is B4. A4 beweeg 2 kolomme links in plaas van 1, C4 vergeet die kolom-beweging heeltemal, en B3 tel die ry-beweging as 2 in plaas van 3.' },

        // Blok 5 (14-15) Kloksgewys/antikloksgewys — Medium — gedeelde kompasdiagram
        { difficulty: 'Medium', question: 'Jy kyk na die weste en maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Suid', 'Oos', 'Noord', 'Wes'], correctIndex: 2, explanation: 'Kloksgewys: Suid → Wes → Noord. \'n Kwartdraai kloksgewys vanaf Wes eindig by Noord. Suid sou die antikloksgewyse antwoord hiervandaan wees, Oos oorskiet met \'n halfdraai, en Wes sou beteken dat geen draai plaasgevind het nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },
        { difficulty: 'Medium', question: 'Jy kyk na die ooste en maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Suid', 'Wes', 'Oos', 'Noord'], correctIndex: 3, explanation: 'Antikloksgewys keer die kloksgewyse volgorde om, so Oos → Noord. Suid sou die kloksgewyse antwoord wees, Wes oorskiet met \'n halfdraai, en Oos sou beteken dat geen draai plaasgevind het nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },

        // Blok 6 (16-19) Woordprobleme / foutopsporing / multi-stap / redenering — Moeilik
        { difficulty: 'Hard', question: 'Jy begin by die huis en kyk na die ooste. Jy stap 3 blokke, draai dan regs, en stap nog 2 blokke, en kom by die spazawinkel aan. In watter rigting kyk jy wanneer jy by die spazawinkel aankom?', checkMode: 'auto', options: ['Suid', 'Oos', 'Noord', 'Wes'], correctIndex: 0, explanation: 'Om regs te draai vanaf oos is \'n kwartdraai kloksgewys: Oos → Suid. Jy kyk suid wanneer jy aankom. Oos neem verkeerdelik aan dat die draai jou kykrigting nie verander het nie, Noord verwar die draairigting, en Wes oorskiet met \'n halfdraai.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="50" r="6" fill="#0f1f3d"/><text x="40" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Huis</text><line x1="40" y1="50" x2="160" y2="50" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r2a)"/><text x="100" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">3 blokke O</text><line x1="160" y1="50" x2="160" y2="130" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r2b)"/><text x="172" y="95" text-anchor="start" font-size="12" font-weight="700" fill="#16a34a">2 blokke S</text><circle cx="160" cy="130" r="6" fill="#dc2626"/><text x="160" y="148" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Spaza-winkel</text><defs><marker id="r2a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r2b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Thabo beweer dat twee keer regs draai jou altyd na die noorde laat kyk, ongeag in watter rigting jy begin het. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is korrek — twee regsdraaie eindig altyd deur noord te kyk.', 'Hy is verkeerd — twee regsdraaie vorm \'n halfdraai (180°), wat jou altyd die presiese teenoorgestelde van jou beginrigting laat kyk, nie altyd noord nie.', 'Hy is korrek, maar slegs omdat draai regs dieselfde is as draai links.', 'Hy is verkeerd — twee regsdraaie vorm \'n volledige draai (360°), sodat jy in dieselfde rigting eindig as waarin jy begin het.'], correctIndex: 1, explanation: 'Thabo is nie korrek nie. Twee keer regs draai is twee kwartdraaie kloksgewys, wat saam \'n halfdraai (180°) vorm — dit laat jou altyd die presiese teenoorgestelde van jou beginrigting kyk, nie altyd spesifiek noord nie. As jy byvoorbeeld oos begin kyk het en twee keer regs draai, eindig jy wes kyk, nie noord nie. Dit gee slegs noord as jy suid begin het.' },
        { difficulty: 'Hard', question: '\'n Robot by roosterverwysing B1 volg hierdie instruksies: beweeg 1 regs, beweeg 3 op, beweeg 2 links, beweeg 1 af. Wat is sy finale roosterverwysing?', checkMode: 'auto', options: ['A4', 'B3', 'A3', 'C3'], correctIndex: 2, explanation: 'B1 → 1 regs → C1 → 3 op → C4 → 2 links → A4 → 1 af → A3. Om A4 te kies slaan die finale "1 af"-stap oor, B3 tel die beweging na links as 1 in plaas van 2, en C3 maak \'n ander teloutjie.' },
        { difficulty: 'Hard', question: '\'n Punt is 3 kolomme regs en 2 rye op vanaf A1. Wat is sy roosterverwysing?', checkMode: 'auto', options: ['C3', 'D2', 'C2', 'D3'], correctIndex: 3, explanation: 'Begin by kolom A en beweeg 3 kolomme na regs: A → B (1) → C (2) → D (3), so die nuwe kolom is D. Begin by ry 1 en beweeg 2 rye op: 1 → 2 (1) → 3 (2), so die nuwe ry is 3. Die roosterverwysing is D3. C3 beweeg slegs 2 kolomme in plaas van 3, D2 beweeg slegs 1 ry in plaas van 2, en C2 maak albei foute.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het posisie en beweging baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan posisiewoorde, roosters, draaie en rigtings goed — gaan enige verkeerde vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die posisie- en bewegingsafdelings en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 (0-3) Posisiewoorde — Maklik
        { difficulty: 'Easy', question: 'Die venster is aan die linkerkant van die muur en die deur is aan die ander kant. Watter posisiewoord beskryf die deur?', checkMode: 'auto', options: ['Regterkant', 'Linkerkant', 'Bo', 'Tussen'], correctIndex: 0, explanation: 'As die venster aan die linkerkant is, moet die deur aan die ander kant aan die regterkant wees. "Linkerkant" herhaal per ongeluk die venster se kant in plaas van die deur s\'n, en "Bo" en "Tussen" beskryf heeltemal ander verhoudings — hoogte en die behoefte aan twee verwysingspunte, waarvan geen een hier van toepassing is nie.' },
        { difficulty: 'Easy', question: 'Die potlood is direk langs die liniaal, met niks tussen hulle nie. Watter posisiewoord beskryf dit?', checkMode: 'auto', options: ['Tussen', 'Langsaan', 'Bo', 'Ver'], correctIndex: 1, explanation: '"Langsaan" beteken direk langs iets, sonder \'n gaping of voorwerp tussenin — net soos die potlood en die liniaal. "Tussen" sou twee voorwerpe vereis met die potlood in die middel, "Bo" beskryf hoogte, nie nabyheid nie, en "Ver" is die teenoorgestelde van wat beskryf word.' },
        { difficulty: 'Easy', question: '\'n Winkel is \'n kort afstand van \'n skool af, en \'n taxistaanplek is \'n lang afstand van die skool af. Watter twee posisiewoorde beskryf die winkel en die taxistaanplek korrek?', checkMode: 'auto', options: ['Ver en naby', 'Links en regs', 'Naby en ver', 'Bo en onder'], correctIndex: 2, explanation: 'Die winkel is naby (\'n kort afstand) en die taxistaanplek is ver (\'n lang afstand) — in daardie volgorde: naby en ver. "Ver en naby" verwissel watter plek watter woord kry, en "Links en regs" en "Bo en onder" beskryf rigting, nie afstand nie.' },
        { difficulty: 'Easy', question: '\'n Vaas staan bo-op \'n tafel, met \'n lamp bo die vaas en \'n mat onder die tafel. Watter van hierdie woorde sou NIE die lamp se posisie korrek beskryf nie — bo, hoër op, of bo-op?', checkMode: 'auto', options: ['Bo', 'Hoër op', 'Langsaan', 'Bo-op'], correctIndex: 3, explanation: 'Die lamp is bo (hoër op as) die vaas, maar dit rus nie bo-op dit nie — "bo-op" beskryf die vaas se verhouding tot die tafel, nie die lamp se posisie nie, so dit is die woord wat NIE van toepassing is nie. "Langsaan" was ook nooit een van die drie woorde wat gebruik is om die lamp se posisie te beskryf nie, maar die vraag gaan spesifiek oor bo, hoër op en bo-op.' },

        // Blok 2 (4-7) Roosterverwysings — Maklik — gedeelde roosterdiagram (SET3_GRID)
        { difficulty: 'Easy', question: 'Op \'n rooster is \'n stoel by kolom C, ry 1. Wat is die roosterverwysing?', checkMode: 'auto', options: ['C1', 'B1', 'C2', '1C'], correctIndex: 0, explanation: 'Die kolomletter kom eerste (C), dan die rynommer (1), wat C1 gee. B1 lees een kolom te ver links, C2 lees een ry te hoog, en "1C" keer die korrekte kolom-dan-ry-volgorde om.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: wat is die roosterverwysing van die hekikoon?', checkMode: 'auto', options: ['A2', 'A3', 'B3', 'A4'], correctIndex: 1, explanation: 'Die hek is in kolom A, ry 3, so die roosterverwysing is A3 — kolomletter eerste, dan rynommer. A2 lees een ry te laag, B3 lees een kolom te ver regs, en A4 lees een ry te hoog.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die rooster: watter ikoon is die verste na regs?', checkMode: 'auto', options: ['Hek', 'Stoel', 'Voël', 'Hulle is almal ewe ver regs'], correctIndex: 2, explanation: 'Die voël is in kolom D, die regterste kolom, so dit is die verste na regs. Om die hek (kolom A) te kies beteken jy lees die rooster per ongeluk van regs na links, en die stoel (kolom C) is ook nie die regterste kolom nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },
        { difficulty: 'Easy', question: 'Op \'n rooster gemerk A tot D oor die onderkant, watter kolom is die verste links?', checkMode: 'auto', options: ['Kolom D', 'Kolom B', 'Kolom C', 'Kolom A'], correctIndex: 3, explanation: 'Kolomme word gemerk beginnend van links, so A is die linkerste kolom. Kolom D is eintlik die regterste kolom, en kolomme B en C is tussenin — geen van die twee is op die rand nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="140" height="140" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="20" x2="75" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="145" y1="20" x2="145" y2="160" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="55" x2="180" y2="55" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="90" x2="180" y2="90" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="125" x2="180" y2="125" stroke="#9ca3af" stroke-width="1.5"/><text x="57" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">A</text><text x="92" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">B</text><text x="127" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">C</text><text x="162" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">D</text><text x="30" y="146" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">1</text><text x="30" y="111" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">2</text><text x="30" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">3</text><text x="30" y="41" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">4</text><text x="57" y="80" text-anchor="middle" font-size="22">🚧</text><text x="127" y="150" text-anchor="middle" font-size="22">🪑</text><text x="162" y="45" text-anchor="middle" font-size="22">🐦</text></svg>' },

        // Blok 3 (8-9) Draaie en grade — Maklik-Medium
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie draaie van kleinste na grootste: halfdraai, kwartdraai, volledige draai.', checkMode: 'auto', options: ['Kwartdraai, halfdraai, volledige draai', 'Halfdraai, kwartdraai, volledige draai', 'Volledige draai, halfdraai, kwartdraai', 'Kwartdraai, volledige draai, halfdraai'], correctIndex: 0, explanation: '\'n Kwartdraai is 90°, \'n halfdraai is 180°, en \'n volledige draai is 360°, so van kleinste na grootste: kwart, half, volledig. Om kwart en half om te ruil plaas \'n groter draai voor \'n kleiner een, en om die hele volgorde om te keer lys hulle van grootste na kleinste in plaas daarvan.' },
        { difficulty: 'Medium', question: 'Jy kyk na die weste en maak \'n halfdraai. Kyk jy nou in dieselfde rigting, die teenoorgestelde rigting, of \'n rigting reghoekig tot wes?', checkMode: 'auto', options: ['Dieselfde rigting', 'Teenoorgestelde rigting', '\'n Regte hoek tot wes', 'Kan nie bepaal word nie'], correctIndex: 1, explanation: '\'n Halfdraai (180°) bring jou altyd om in die presiese teenoorgestelde rigting te kyk — wes word oos. "\'n Regte hoek tot wes" beskryf wat \'n kwartdraai doen, nie \'n halfdraai nie, en \'n halfdraai kan altyd bepaal word.' },

        // Blok 4 (10-13) Multi-stap roosterbeweging — Medium
        { difficulty: 'Medium', question: 'Op \'n rooster is die bank by kolom A, ry 3. Die dam is 2 kolomme na regs en 2 rye af vanaf die bank. Wat is die dam se roosterverwysing?', checkMode: 'auto', options: ['B1', 'C2', 'C1', 'D1'], correctIndex: 2, explanation: '2 kolomme regs vanaf A: B (1), C (2). 2 rye af vanaf 3: 2 (1), 1 (2). Die dam is by C1. B1 beweeg slegs 1 kolom in plaas van 2, C2 beweeg slegs 1 ry in plaas van 2, en D1 oorskiet deur 3 kolomme in plaas van 2 te beweeg.' },
        { difficulty: 'Medium', question: 'Vergelyk die roosterverwysings D2 en D4: is hierdie twee roosterverwysings dieselfde posisie, verskillende kolomme, of verskillende rye?', checkMode: 'auto', options: ['Dieselfde posisie', 'Verskillende kolomme', 'Verskillende kolomme en rye', 'Verskillende rye'], correctIndex: 3, explanation: 'D2 en D4 deel dieselfde kolom (D) maar het verskillende rynommers (2 en 4), so hulle is verskillende rye. Hulle is nie dieselfde posisie nie aangesien die rynommers verskil, en "verskillende kolomme" is verkeerd omdat die kolomletter (D) in albei identies is.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n hek by A1 en \'n dam by C4. As jy slegs regs of op kan beweeg, hoeveel treë in totaal neem dit om van die hek na die dam te kom?', checkMode: 'auto', options: ['5', '7', '6', '4'], correctIndex: 0, explanation: '2 kolomme regs (A→C) + 3 rye op (1→4) = 5 treë in totaal. Om 7 te tel, tel jy elke kolom en ry waardeur jy beweeg inklusief (A, B, C en 1, 2, 3, 4) in plaas van net die treë, en 6 en 4 tel een van die twee rigtings verkeerd.' },
        { difficulty: 'Medium', question: '\'n Robot by roosterverwysing D1 beweeg 2 kolomme links, dan 2 rye op. Wat is sy nuwe roosterverwysing?', checkMode: 'auto', options: ['C3', 'B3', 'B2', 'A3'], correctIndex: 1, explanation: '2 kolomme links vanaf D: C, B. 2 rye op vanaf 1: 2, 3. Die nuwe posisie is B3. C3 beweeg slegs 1 kolom links in plaas van 2, B2 beweeg slegs 1 ry op in plaas van 2, en A3 oorskiet deur 3 kolomme links in plaas van 2 te beweeg.' },

        // Blok 5 (14-15) Kloksgewys/antikloksgewys — Medium — gedeelde kompasdiagram
        { difficulty: 'Medium', question: 'Jy kyk na die suide en maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Suid', 'Oos', 'Wes', 'Noord'], correctIndex: 2, explanation: 'Kloksgewys: Oos → Suid → Wes. \'n Kwartdraai kloksgewys vanaf Suid eindig by Wes. Suid sou beteken dat geen draai plaasgevind het nie, Oos is die antikloksgewyse antwoord, en Noord oorskiet met \'n halfdraai.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde en maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', options: ['Noord', 'Oos', 'Suid', 'Wes'], correctIndex: 3, explanation: 'Antikloksgewys vanaf noord: Noord → Wes. \'n Kwartdraai antikloksgewys eindig by Wes. Noord sou beteken dat geen draai plaasgevind het nie, Oos is die kloksgewyse antwoord, en Suid oorskiet met \'n halfdraai.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="70" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="165" stroke="#9ca3af" stroke-width="1.5"/><line x1="40" y1="95" x2="180" y2="95" stroke="#9ca3af" stroke-width="1.5"/><text x="110" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">N</text><text x="110" y="180" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">S</text><text x="195" y="100" text-anchor="start" font-size="15" font-weight="700" fill="#0f1f3d">O</text><text x="25" y="100" text-anchor="end" font-size="15" font-weight="700" fill="#0f1f3d">W</text><path d="M 110 40 A 55 55 0 0 1 165 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 165 95 A 55 55 0 0 1 110 150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cwArrow)"/><path d="M 110 40 A 55 55 0 0 0 55 95" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><path d="M 55 95 A 55 55 0 0 0 110 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#acwArrow)"/><defs><marker id="cwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb"/></marker><marker id="acwArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs><text x="110" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Kloksgewys: N&#8594;O&#8594;S&#8594;W</text><rect x="4" y="4" width="14" height="14" fill="#dc2626"/><text x="22" y="15" font-size="11" font-weight="700" fill="#dc2626">Antikloksgewys: N&#8594;W&#8594;S&#8594;O</text></svg>' },

        // Blok 6 (16-19) Woordprobleme / foutopsporing / multi-stap / redenering — Moeilik
        { difficulty: 'Hard', question: 'Jy begin by die biblioteek en kyk na die suide. Jy stap 2 blokke, draai dan links, en stap nog 3 blokke, en kom by die park aan. In watter rigting kyk jy wanneer jy by die park aankom?', checkMode: 'auto', options: ['Oos', 'Suid', 'Wes', 'Noord'], correctIndex: 0, explanation: 'Om links te draai vanaf suid is \'n kwartdraai antikloksgewys: Suid → Oos. Jy kyk oos wanneer jy aankom. Suid neem verkeerdelik aan dat die draai jou kykrigting nie verander het nie, Wes is die kloksgewyse (draai regs) antwoord, en Noord oorskiet met \'n halfdraai.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="30" r="6" fill="#0f1f3d"/><text x="50" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">Biblioteek</text><line x1="50" y1="30" x2="50" y2="110" stroke="#2563eb" stroke-width="2.5" marker-end="url(#r3a)"/><text x="38" y="75" text-anchor="end" font-size="12" font-weight="700" fill="#2563eb">2 blokke S</text><line x1="50" y1="110" x2="170" y2="110" stroke="#16a34a" stroke-width="2.5" marker-end="url(#r3b)"/><text x="110" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">3 blokke O</text><circle cx="170" cy="110" r="6" fill="#dc2626"/><text x="170" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Park</text><defs><marker id="r3a" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb"/></marker><marker id="r3b" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#16a34a"/></marker></defs></svg>' },
        { difficulty: 'Hard', question: 'Sipho beweer dat in \'n roosterverwysing soos B3, die syfer altyd voor die letter kom wanneer jy dit neerskryf. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is korrek — roosterverwysings lys altyd eers die rynommer, dan die kolomletter.', 'Hy is verkeerd — \'n roosterverwysing gee altyd eers die kolomletter en dan die rynommer, so B3 beteken kolom B dan ry 3, nie "3B" nie.', 'Hy is korrek, maar slegs vir roosters met meer as 4 kolomme.', 'Hy is verkeerd — roosterverwysings bevat nooit beide \'n letter en \'n syfer saam nie.'], correctIndex: 1, explanation: 'Sipho is nie korrek nie. \'n Roosterverwysing gee altyd eers die kolomletter en dan die rynommer — B3 beteken kolom B, dan ry 3, nie andersom nie. Om "3B" te skryf in plaas van "B3" sou die korrekte leesvolgorde omkeer. Die bewering is nie beperk tot sekere roostergroottes nie, en roosterverwysings kombineer altyd \'n letter en \'n syfer saam.' },
        { difficulty: 'Hard', question: '\'n Robot by roosterverwysing C2 volg hierdie instruksies: beweeg 1 regs, beweeg 2 op, beweeg 2 links, beweeg 1 af. Wat is sy finale roosterverwysing?', checkMode: 'auto', options: ['B4', 'C3', 'B3', 'A3'], correctIndex: 2, explanation: 'C2 → 1 regs → D2 → 2 op → D4 → 2 links → B4 → 1 af → B3. Om B4 te kies slaan die finale "1 af"-stap oor, C3 tel die beweging na links as 1 in plaas van 2, en A3 tel die beweging na links as 3 in plaas van 2.' },
        { difficulty: 'Hard', question: 'Watter verduideliking wys korrek waarom \'n kwartdraai kloksgewys vanaf noord oos gee, deur die horlosie-idee te gebruik (12, 3, 6, 9 uur-posisies)?', checkMode: 'auto', options: ['Om \'n kwartdraai antikloksgewys vanaf die 12-uur-posisie te maak, bereik jy die 3-uur-posisie, wat oos is.', 'Om \'n halfdraai kloksgewys vanaf die 12-uur-posisie te maak, bereik jy die 3-uur-posisie, wat oos is.', 'Om \'n kwartdraai kloksgewys vanaf die 12-uur-posisie te maak, bereik jy die 9-uur-posisie, wat oos is.', 'Om \'n kwartdraai kloksgewys vanaf die 12-uur-posisie te maak, bereik jy die 3-uur-posisie, wat oos is.'], correctIndex: 3, explanation: 'As noord by die 12-uur-posisie is, beweeg \'n kwartdraai kloksgewys (die rigting waarin horlosiewysers beweeg) jou na die 3-uur-posisie, wat oos is — dit stem ooreen met die kompasvolgorde Noord (12) → Oos (3) → Suid (6) → Wes (9) → terug na Noord (12). \'n Antikloksgewyse beweging vanaf 12 sou eerder by 9-uur (wes) uitkom, \'n halfdraai kloksgewys sou by 6-uur (suid) uitkom, en 9-uur is wes, nie oos nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het posisie en beweging baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan posisiewoorde, roosters, draaie en rigtings goed — gaan enige verkeerde vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die posisie- en bewegingsafdelings en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],

}
