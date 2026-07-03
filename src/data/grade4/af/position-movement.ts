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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
      diagramPlaceholder:
        "'n Kompas wat noord, suid, oos en wes wys met pyle wat 'n kwartdraai kloksgewys van noord na oos en 'n halfdraai van suid na noord wys",
      videoPlaceholder:
        'Kort video wat volledige, half- en kwartdraaie kloksgewys en antikloksgewys wys deur \'n kompas of horlosie te gebruik',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Describing Position ──────────────────────────────────────

    {
      difficulty: 'Easy',
      question:
        "'n Bal is ___ die tafel. 'n Kat is ___ die bal. 'n Boek is ___ die kat en die bal.",
      checkMode: 'auto',
      answer: 'a) bo-op   b) bo   c) tussen',
      parts: [
        {
          label: 'a) Die bal lê op die tafeloppervlak — watter posisiewoord pas?',
          correctAnswer: 'bo-op',
          correctAnswers: ['bo-op', 'boop', 'bo op'],
          explanation: '"Bo-op" beteken direk op die oppervlak van iets — die bal is bo-op die tafel.',
        },
        {
          label: 'b) Die kat sit bo-op die bal — waar is die kat in verhouding tot die bal?',
          correctAnswer: 'bo',
          correctAnswers: ['bo', 'bo-op', 'boop'],
          explanation: "\"Bo\" beteken in 'n hoër posisie — die kat wat op die bal sit, is bo dit.",
        },
        {
          label: 'c) Watter posisiewoord beskryf iets in die middel van twee voorwerpe?',
          correctAnswer: 'tussen',
          correctAnswers: ['tussen', 'in tussen', 'intussen'],
          explanation: '"Tussen" beteken in die middel van twee dinge — die boek is tussen die kat en die bal.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        "Beskryf die posisie van elke voorwerp deur ten minste twee posisiewoorde te gebruik.\na) 'n Voël wat op 'n tak sit met blare bo dit en die grond onder.\nb) 'n Toebroodjie tussen twee borde met 'n glas aan die regterkant daarvan.",
      checkMode: 'self',
      answer:
        'a) Die voël is op die tak, onder die blare en bo die grond.\nb) Die toebroodjie is tussen die twee borde met die glas aan die regterkant daarvan.',
    },

    {
      difficulty: 'Hard',
      question:
        "Verbeel jou 'n klaskamer met 'n bord voor, vensters aan die linkerkant, 'n deur aan die regterkant en lessenaars in die middel. Leerders sit en kyk na die bord.\na) Wat is agter die leerders?\nb) Wat is aan die regterkant van die leerders?\nc) Wat is tussen die bord en die leerders?",
      checkMode: 'self',
      answer:
        'a) Die agtermuur is agter die leerders (hulle kyk vorentoe, so die agtermuur is agter hulle).\nb) Die deur is aan die regterkant van die leerders.\nc) Die lessenaars (of oop vloerspasie) is tussen die bord en die leerders.',
    },

    // ── SECTION 2 — Using a Grid to Locate Objects ────────────────────────────

    {
      difficulty: 'Easy',
      question: "Op 'n rooster is 'n biblioteek by C3.",
      checkMode: 'auto',
      answer: 'a) Kolom C   b) Ry 3',
      parts: [
        {
          label: 'a) In watter kolom is dit?',
          correctAnswer: 'C',
          correctAnswers: ['C', 'c', 'kolom C', 'kolom c', 'kolomC', 'kolomc'],
          explanation: "In 'n roosterverwysing kom die letter altyd eerste en dit gee jou die kolom. C3 is in kolom C.",
        },
        {
          label: 'b) In watter ry is dit?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie', 'ry 3', 'ry3'],
          explanation: "In 'n roosterverwysing kom die syfer altyd tweede en dit gee jou die ry. C3 is in ry 3.",
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        "'n Rooster het hierdie voorwerpe: skool by B2, park by D4, winkel by A1.\na) Watter voorwerp is in die boonste-regse area van die rooster?\nb) Watter voorwerp is die naaste aan die onderste-linkerhoek?\nc) Watter roosterverwysing is een kolom na regs en een ry op vanaf die skool?",
      checkMode: 'auto',
      answer: 'a) Park by D4   b) Winkel by A1   c) C3',
      parts: [
        {
          label: 'a) Watter voorwerp is in die boonste-regse area?',
          correctAnswer: 'park',
          correctAnswers: [
            'park', 'Park', 'die park',
            'park by D4', 'parkbyD4', 'parkbyd4',
            'D4', 'd4',
          ],
          explanation: 'D is die regterste kolom en ry 4 is die hoogste ry — D4 is in die boonste-regse area. Die park is by D4.',
        },
        {
          label: 'b) Watter voorwerp is die naaste aan die onderste-linkerhoek?',
          correctAnswer: 'winkel',
          correctAnswers: [
            'winkel', 'Winkel', 'die winkel',
            'winkel by A1', 'winkelbyA1', 'winkelbya1',
            'A1', 'a1',
          ],
          explanation: 'A is die linkerste kolom en ry 1 is die laagste ry — A1 is die onderste-linkerhoek. Die winkel is by A1.',
        },
        {
          label: 'c) Roosterverwysing een kolom regs en een ry op vanaf die skool (B2)',
          correctAnswer: 'C3',
          correctAnswers: ['C3', 'c3'],
          explanation: 'Die skool is by B2. Een kolom regs vanaf B is C. Een ry op vanaf 2 is 3. So die antwoord is C3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        "Op 'n 5×5-rooster gemerk A tot E oor en 1 tot 5 op.",
      checkMode: 'auto',
      answer: 'a) C3   b) C4   c) D3',
      parts: [
        {
          label: 'a) Wat is die roosterverwysing van die middelblokkie?',
          correctAnswer: 'C3',
          correctAnswers: ['C3', 'c3'],
          explanation: "'n 5×5-rooster het kolomme A–E en rye 1–5. Die middelste kolom is C (3de van 5) en die middelste ry is 3 (3de van 5). Die middelblokkie is C3.",
        },
        {
          label: 'b) Begin by A1, beweeg 2 kolomme regs en 3 rye op — waar is jy?',
          correctAnswer: 'C4',
          correctAnswers: ['C4', 'c4'],
          explanation: 'Begin by A1. 2 kolomme regs vanaf A: B is 1 regs, C is 2 regs. 3 rye op vanaf 1: ry 2, dan 3, dan 4. Jy kom by C4 aan.',
        },
        {
          label: 'c) Watter roosterverwysing is direk bo D2?',
          correctAnswer: 'D3',
          correctAnswers: ['D3', 'd3'],
          explanation: '"Direk bo" beteken die kolom bly dieselfde (D) en die ry neem met 1 toe. Een ry bo ry 2 is ry 3. Die antwoord is D3.',
        },
      ],
    },

    // ── SECTION 3 — Giving and Following Directions ───────────────────────────

    {
      difficulty: 'Easy',
      question: "Jy staan by 'n winkel en kyk na die noorde. Jy draai regs. In watter rigting kyk jy nou?",
      checkMode: 'auto',
      answer: 'Oos',
      correctAnswer: 'Oos',
      correctAnswers: ['Oos', 'oos'],
      explanation: "'n Draai na regs vanaf noord is 'n kwartdraai kloksgewys. Noord → kloksgewys → Oos.",
    },

    {
      difficulty: 'Medium',
      question:
        'Volg hierdie rigtings vanaf die skool:\nBegin deur noord te kyk. Gaan reguit 3 blokke. Draai links. Gaan 2 blokke. Draai regs. Gaan 1 blok.',
      checkMode: 'auto',
      answer: 'a) 6 blokke   b) Noord   c) 4 blokke noord en 2 blokke wes van die skool',
      parts: [
        {
          label: 'a) Hoeveel blokke het jy altesaam gereis?',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses', '6 blokke', '6blokke'],
          explanation: '3 blokke noord + 2 blokke wes + 1 blok noord = 6 blokke altesaam.',
        },
        {
          label: 'b) In watter rigting kyk jy aan die einde?',
          correctAnswer: 'Noord',
          correctAnswers: ['Noord', 'noord'],
          explanation: 'Jy het begin deur noord te kyk. Draai links → kyk wes. Draai regs vanaf wes → kyk weer noord. Jy eindig deur noord te kyk.',
        },
        {
          label: 'c) Beskryf jou finale posisie in verhouding tot die skool',
          correctAnswer: '4 blokke noord en 2 blokke wes van die skool',
          correctAnswers: [
            '4 blokke noord en 2 blokke wes van die skool',
            '4blokkenoorden2blokkewesvandieskool',
            '2 blokke wes en 4 blokke noord van die skool',
            '2blokkewesen4blokkenoordvandieskool',
            '4 blokke noord, 2 blokke wes',
            '2 blokke wes, 4 blokke noord',
          ],
          explanation: 'Jy het 3 noord gegaan, dan 2 wes, dan 1 noord. Totaal: 4 blokke noord en 2 blokke wes van die skool.',
        },
      ],
    },

    // Q9a — self mark
    {
      difficulty: 'Hard',
      question:
        "Skryf stap-vir-stap-rigtings van 'n winkel by A1 na 'n park by D4 op 'n rooster. Jy mag slegs regs of op beweeg.\na) Skryf die rigtings neer.",
      checkMode: 'self',
      answer:
        'Enige geldige kombinasie van regs- en op-bewegings wat van A1 na D4 kom.\nKortste roete: beweeg 3 tree regs (A→B→C→D), dan 3 tree op (ry 1→2→3→4).\nOf enige mengsel soos: 1 regs, 2 op, 2 regs, 1 op, 0 regs, 2 op — solank die totaal 3 regs en 3 op is.',
    },

    // Q9b/c/d — auto checked
    {
      difficulty: 'Hard',
      question:
        "Om van 'n winkel by A1 na 'n park by D4 op 'n rooster te beweeg, slegs regs of op.",
      checkMode: 'auto',
      answer: 'b) 3 tree regs   c) 3 tree op   d) 6 tree altesaam',
      parts: [
        {
          label: 'b) Hoeveel tree na regs neem jy?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie', '3 tree', '3tree'],
          explanation: 'Kolom A na kolom D: A→B (1), B→C (2), C→D (3). Jy beweeg 3 kolomme na regs.',
        },
        {
          label: 'c) Hoeveel tree op neem jy?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie', '3 tree', '3tree'],
          explanation: 'Ry 1 na ry 4: 1→2 (1), 2→3 (2), 3→4 (3). Jy beweeg 3 rye op.',
        },
        {
          label: 'd) Wat is die totale aantal tree?',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses', '6 tree', '6tree'],
          explanation: '3 tree regs + 3 tree op = 6 tree altesaam.',
        },
      ],
    },

    // ── SECTION 4 — Turns and Movement ────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: "Thabo kyk na die noorde. Hy maak 'n halfdraai. In watter rigting kyk hy nou?",
      checkMode: 'auto',
      answer: 'Suid',
      correctAnswer: 'Suid',
      correctAnswers: ['Suid', 'suid'],
      explanation: "'n Halfdraai is 180°. Die teenoorgestelde van noord is suid. Thabo kyk nou na die suide.",
    },

    {
      difficulty: 'Medium',
      question: 'Lerato kyk na die ooste.',
      checkMode: 'auto',
      answer: 'a) Suid   b) Noord   c) Oos',
      parts: [
        {
          label: 'a) Na \'n kwartdraai kloksgewys, in watter rigting kyk sy?',
          correctAnswer: 'Suid',
          correctAnswers: ['Suid', 'suid'],
          explanation: 'Kwartdraai kloksgewys vanaf oos: Oos → kloksgewys 90° → Suid.',
        },
        {
          label: 'b) Na \'n kwartdraai antikloksgewys, in watter rigting kyk sy?',
          correctAnswer: 'Noord',
          correctAnswers: ['Noord', 'noord'],
          explanation: 'Kwartdraai antikloksgewys vanaf oos: Oos → antikloksgewys 90° → Noord.',
        },
        {
          label: 'c) Na \'n volledige draai, in watter rigting kyk sy?',
          correctAnswer: 'Oos',
          correctAnswers: ['Oos', 'oos'],
          explanation: "'n Volledige draai is 360° — jy eindig deur presies dieselfde rigting te kyk waarin jy begin het. Lerato kyk oos.",
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        'Sipho begin deur noord te kyk. Hy maak hierdie draaie in volgorde: kwartdraai kloksgewys, halfdraai, kwartdraai antikloksgewys.',
      checkMode: 'auto',
      answer: 'a) Oos   b) Wes   c) Suid   d) 360 grade',
      parts: [
        {
          label: 'a) Na die eerste draai (kwartdraai kloksgewys), in watter rigting kyk hy?',
          correctAnswer: 'Oos',
          correctAnswers: ['Oos', 'oos'],
          explanation: 'Kwartdraai kloksgewys vanaf noord: Noord → Oos.',
        },
        {
          label: 'b) Na die tweede draai (halfdraai vanaf oos), in watter rigting kyk hy?',
          correctAnswer: 'Wes',
          correctAnswers: ['Wes', 'wes'],
          explanation: 'Halfdraai (180°) vanaf oos: die teenoorgestelde van oos is wes.',
        },
        {
          label: 'c) Na die derde draai (kwartdraai antikloksgewys vanaf wes), in watter rigting kyk hy?',
          correctAnswer: 'Suid',
          correctAnswers: ['Suid', 'suid'],
          explanation: 'Kwartdraai antikloksgewys vanaf wes: Wes → antikloksgewys 90° → Suid.',
        },
        {
          label: 'd) Hoeveel grade het hy altesaam gedraai?',
          correctAnswer: '360',
          correctAnswers: ['360', '360 grade', '360grade', 'drie honderd en sestig', '360°'],
          explanation: 'Kwartdraai (90°) + halfdraai (180°) + kwartdraai (90°) = 90 + 180 + 90 = 360 grade altesaam.',
        },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 29, message: 'Volpunte! Jy het Posisie en Beweging baasgeraak.' },
    { minScore: 22, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het na en jy sal dit baasraak.' },
    { minScore: 15, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
