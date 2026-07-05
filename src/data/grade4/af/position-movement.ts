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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
    // SET 1 — FOUNDATIONS: position words, simple grid references, turns
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Posisiewoorde, Roosterbasiese Beginsels en Draaie',
      questions: [
        { difficulty: 'Easy', question: 'Die lamp is hoër op as die tafel. Watter posisiewoord beskryf die lamp?', checkMode: 'auto', answer: 'Bo', correctAnswer: 'bo', correctAnswers: ['bo'], explanation: '"Bo" beteken in \'n hoër posisie as \'n ander voorwerp.' },
        { difficulty: 'Easy', question: 'Die mat is laer af as die stoel. Watter posisiewoord beskryf die mat?', checkMode: 'auto', answer: 'Onder', correctAnswer: 'onder', correctAnswers: ['onder'], explanation: '"Onder" beteken in \'n laer posisie as \'n ander voorwerp.' },
        { difficulty: 'Easy', question: 'Die venster is aan die linkerkant van die muur en die deur is aan die ander kant. Watter posisiewoord beskryf die deur?', checkMode: 'auto', answer: 'Regterkant', correctAnswer: 'regterkant', correctAnswers: ['regterkant', 'regs', 'aan die regterkant'], explanation: 'As die venster aan die linkerkant is, is die deur aan die ander kant aan die regterkant.' },
        { difficulty: 'Easy', question: '\'n Onderwyser staan en kyk na die klas. Watter posisiewoord beskryf waar die klas is in verhouding tot die onderwyser?', checkMode: 'auto', answer: 'Voor', correctAnswer: 'voor', correctAnswers: ['voor'], explanation: 'Die klas is voor die onderwyser, want die onderwyser kyk na hulle.' },
        { difficulty: 'Easy', question: 'Die bord is aan die ander kant van die onderwyser, weg van die klas. Watter posisiewoord beskryf die bord?', checkMode: 'auto', answer: 'Agter', correctAnswer: 'agter', correctAnswers: ['agter'], explanation: 'Die bord is agter die onderwyser — aan die teenoorgestelde kant van die klas.' },
        { difficulty: 'Easy', question: 'Die potlood is direk langs die liniaal. Watter posisiewoord beskryf dit?', checkMode: 'auto', answer: 'Langsaan', correctAnswer: 'langsaan', correctAnswers: ['langsaan'], explanation: '"Langsaan" beteken direk langs iets.' },
        { difficulty: 'Easy', question: 'Die uitveër het die potlood aan die een kant en die pen aan die ander kant. Watter posisiewoord beskryf die uitveër?', checkMode: 'auto', answer: 'Tussen', correctAnswer: 'tussen', correctAnswers: ['tussen'], explanation: '"Tussen" beteken in die middel van twee dinge.' },
        { difficulty: 'Easy', question: 'Die winkel is \'n kort afstand van die skool. Watter posisiewoord beskryf dit die beste?', checkMode: 'auto', answer: 'Naby', correctAnswer: 'naby', correctAnswers: ['naby'], explanation: '"Naby" beskryf iets wat \'n kort afstand weg is.' },
        { difficulty: 'Easy', question: 'Die hospitaal is \'n lang afstand van die skool. Watter posisiewoord beskryf dit die beste?', checkMode: 'auto', answer: 'Ver', correctAnswer: 'ver', correctAnswers: ['ver'], explanation: '"Ver" beskryf iets wat \'n lang afstand weg is.' },
        { difficulty: 'Easy', question: '\'n Bal lê direk op die oppervlak van \'n tafel. Watter posisiewoord beskryf die bal?', checkMode: 'auto', answer: 'Bo-op', correctAnswer: 'bo-op', correctAnswers: ['bo-op', 'boop', 'bo op'], explanation: '"Bo-op" beteken direk op die oppervlak van iets.' },
        { difficulty: 'Easy', question: 'Op \'n rooster, in watter rigting loop kolomme?', checkMode: 'auto', answer: 'Van links na regs', correctAnswer: 'van links na regs', correctAnswers: ['van links na regs', 'links na regs', 'linksnaregs'], explanation: 'Kolomme loop van links na regs oor \'n rooster en word gewoonlik met letters gemerk.' },
        { difficulty: 'Easy', question: 'Op \'n rooster, in watter rigting loop rye?', checkMode: 'auto', answer: 'Van onder na bo', correctAnswer: 'van onder na bo', correctAnswers: ['van onder na bo', 'onder na bo', 'ondernabo'], explanation: 'Rye loop van onder na bo in \'n rooster op en word gewoonlik met syfers gemerk.' },
        { difficulty: 'Easy', question: 'In \'n roosterverwysing soos B3, watter deel kom eerste — die letter of die syfer?', checkMode: 'auto', answer: 'Letter', correctAnswer: 'letter', correctAnswers: ['letter', 'die letter'], explanation: '\'n Roosterverwysing gee altyd eers die kolomletter, dan die rynommer.' },
        { difficulty: 'Easy', question: 'Op \'n rooster is \'n stoel by kolom B, ry 2. Wat is die roosterverwysing?', checkMode: 'auto', answer: 'B2', correctAnswer: 'B2', correctAnswers: ['B2', 'b2'], explanation: 'Die kolomletter kom eerste (B), dan die rynommer (2), wat B2 gee.' },
        { difficulty: 'Easy', question: 'Op \'n rooster is \'n tafel by D1. In watter kolom is dit?', checkMode: 'auto', answer: 'Kolom D', correctAnswer: 'D', correctAnswers: ['D', 'd', 'kolom D'], explanation: 'In D1 kom die letter D altyd eerste en gee jou die kolom.' },
        { difficulty: 'Easy', question: 'Op \'n rooster is \'n lamp by A4. In watter ry is dit?', checkMode: 'auto', answer: 'Ry 4', correctAnswer: '4', correctAnswers: ['4', 'vier', 'ry 4'], explanation: 'In A4 kom die syfer 4 altyd tweede en gee jou die ry.' },
        { difficulty: 'Easy', question: 'Op \'n rooster gemerk A tot D oor die onderkant, watter kolom is die verste links?', checkMode: 'auto', answer: 'Kolom A', correctAnswer: 'A', correctAnswers: ['A', 'a', 'kolom A'], explanation: 'Kolomme word gemerk beginnend van links, so A is die linkerste kolom.' },
        { difficulty: 'Easy', question: 'Op \'n rooster gemerk 1 tot 4 op teen die kant, watter ry is die laagste?', checkMode: 'auto', answer: 'Ry 1', correctAnswer: '1', correctAnswers: ['1', 'een', 'ry 1'], explanation: 'Rye word gemerk beginnend van onder, so ry 1 is die laagste ry.' },
        { difficulty: 'Easy', question: '\'n Volledige draai is hoeveel grade?', checkMode: 'auto', answer: '360°', correctAnswer: '360', correctAnswers: ['360', '360 grade', '360°'], explanation: '\'n Volledige draai gaan heeltemal om, wat 360° is.' },
        { difficulty: 'Easy', question: '\'n Halfdraai is hoeveel grade?', checkMode: 'auto', answer: '180°', correctAnswer: '180', correctAnswers: ['180', '180 grade', '180°'], explanation: '\'n Halfdraai is halfpad om \'n volledige draai: 360° ÷ 2 = 180°.' },
        { difficulty: 'Easy', question: '\'n Kwartdraai is hoeveel grade?', checkMode: 'auto', answer: '90°', correctAnswer: '90', correctAnswers: ['90', '90 grade', '90°'], explanation: '\'n Kwartdraai is \'n kwart van \'n volledige draai: 360° ÷ 4 = 90°.' },
        { difficulty: 'Easy', question: 'Na \'n volledige draai (360°), kyk jy in dieselfde rigting of \'n ander rigting as waar jy begin het?', checkMode: 'auto', answer: 'Dieselfde rigting', correctAnswer: 'dieselfde rigting', correctAnswers: ['dieselfde rigting', 'dieselfderigting', 'dieselfde'], explanation: '\'n Volledige draai bring jou heeltemal terug om in dieselfde rigting te kyk waarin jy begin het.' },
        { difficulty: 'Easy', question: 'Na \'n halfdraai (180°), kyk jy in dieselfde rigting of die teenoorgestelde rigting as waar jy begin het?', checkMode: 'auto', answer: 'Teenoorgestelde rigting', correctAnswer: 'teenoorgestelde rigting', correctAnswers: ['teenoorgestelde rigting', 'teenoorgesteldeRigting', 'die teenoorgestelde rigting', 'teenoorgestelde'], explanation: '\'n Halfdraai bring jou altyd om in die presiese teenoorgestelde rigting te kyk.' },
        { difficulty: 'Easy', question: 'Jy kyk na die noorde. Jy maak \'n halfdraai. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: '\'n Halfdraai laat jou die teenoorgestelde kant toe kyk. Die teenoorgestelde van noord is suid.' },
        { difficulty: 'Easy', question: 'Jy kyk na die ooste. Jy maak \'n halfdraai. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: '\'n Halfdraai laat jou die teenoorgestelde kant toe kyk. Die teenoorgestelde van oos is wes.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het posisiewoorde, roosterbasiese beginsels en eenvoudige draaie baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy ken jou posisiewoorde en roosterverwysings goed — gaan enige verkeerde vrae na.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug oor die posisiewoord- en roosterverwysingsafdelings en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER VARIANT: multi-step grid movement, clockwise vs
    // anticlockwise turn direction
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Multi-Stap Roosterbeweging en Draairigting',
      questions: [
        { difficulty: 'Medium', question: 'Op \'n rooster is die biblioteek by kolom C, ry 3. Die park is 2 kolomme na regs en 1 ry op. Wat is die park se roosterverwysing?', checkMode: 'auto', answer: 'E4', correctAnswer: 'E4', correctAnswers: ['E4', 'e4'], explanation: '2 kolomme regs vanaf C: D (1), E (2). 1 ry op vanaf 3 is 4. Die park is by E4.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n winkel by B2. \'n Hek is 3 kolomme na regs en 2 rye op vanaf die winkel. Wat is die hek se roosterverwysing?', checkMode: 'auto', answer: 'E4', correctAnswer: 'E4', correctAnswers: ['E4', 'e4'], explanation: '3 kolomme regs vanaf B: C (1), D (2), E (3). 2 rye op vanaf 2: 3 (1), 4 (2). Die hek is by E4.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n huis by D3. Wat is die roosterverwysing 1 kolom na links en 1 ry af vanaf die huis?', checkMode: 'auto', answer: 'C2', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: '1 kolom links vanaf D is C. 1 ry af vanaf 3 is 2. Die antwoord is C2.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n boom by A1. Wat is die roosterverwysing 2 kolomme na regs en 3 rye op vanaf die boom?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: '2 kolomme regs vanaf A: B (1), C (2). 3 rye op vanaf 1: 2 (1), 3 (2), 4 (3). Die antwoord is C4.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n put by E5. Wat is die roosterverwysing 4 kolomme na links en 4 rye af vanaf die put?', checkMode: 'auto', answer: 'A1', correctAnswer: 'A1', correctAnswers: ['A1', 'a1'], explanation: '4 kolomme links vanaf E: D, C, B, A. 4 rye af vanaf 5: 4, 3, 2, 1. Die antwoord is A1.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n brug by C2. Vanaf die brug beweeg jy 1 kolom regs, dan 2 rye op. Wat is jou nuwe roosterverwysing?', checkMode: 'auto', answer: 'D4', correctAnswer: 'D4', correctAnswers: ['D4', 'd4'], explanation: '1 kolom regs vanaf C is D. 2 rye op vanaf 2: 3, 4. Die antwoord is D4.' },
        { difficulty: 'Medium', question: '\'n Hek by roosterverwysing B1 beweeg 2 kolomme regs en dan 1 ry op. Wat is die nuwe posisie?', checkMode: 'auto', answer: 'D2', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: '2 kolomme regs vanaf B: C, D. 1 ry op vanaf 1 is 2. Die antwoord is D2.' },
        { difficulty: 'Medium', question: 'Vergelyk D4 en B2 op \'n rooster — is D4 aan die regterkant van B2, aan die linkerkant van B2, of in dieselfde kolom?', checkMode: 'auto', answer: 'Aan die regterkant van B2', correctAnswer: 'aan die regterkant van B2', correctAnswers: ['aan die regterkant van b2', 'regterkant', 'aan die regterkant'], explanation: 'D kom na B wanneer kolomme van links na regs getel word, so D4 is aan die regterkant van B2.' },
        { difficulty: 'Medium', question: 'Vergelyk A3 en A1 op \'n rooster — is A3 hoër op, laer af, of in dieselfde ry as A1?', checkMode: 'auto', answer: 'Hoër op', correctAnswer: 'hoër op', correctAnswers: ['hoer op', 'hoër op', 'hoer', 'hoër'], explanation: 'Ry 3 is bo ry 1 aangesien rye toeneem soos jy opgaan, so A3 is hoër op as A1.' },
        { difficulty: 'Medium', question: '\'n Draai na regs vanaf \'n rigting is dieselfde as draai in watter rigting — kloksgewys of antikloksgewys?', checkMode: 'auto', answer: 'Kloksgewys', correctAnswer: 'kloksgewys', correctAnswers: ['kloksgewys'], explanation: '\'n Draai na regs is altyd dieselfde as \'n draai kloksgewys.' },
        { difficulty: 'Medium', question: '\'n Draai na links vanaf \'n rigting is dieselfde as draai in watter rigting — kloksgewys of antikloksgewys?', checkMode: 'auto', answer: 'Antikloksgewys', correctAnswer: 'antikloksgewys', correctAnswers: ['antikloksgewys'], explanation: '\'n Draai na links is altyd dieselfde as \'n draai antikloksgewys.' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde. Jy maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'Kloksgewys vanaf noord: Noord → Oos. \'n Kwartdraai kloksgewys eindig op Oos.' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde. Jy maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'Antikloksgewys vanaf noord: Noord → Wes. \'n Kwartdraai antikloksgewys eindig op Wes.' },
        { difficulty: 'Medium', question: 'Jy kyk na die ooste. Jy maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Kloksgewys: Noord → Oos → Suid. \'n Kwartdraai kloksgewys vanaf Oos eindig op Suid.' },
        { difficulty: 'Medium', question: 'Jy kyk na die ooste. Jy maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Noord', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: 'Antikloksgewys vanaf oos keer die kloksgewyse volgorde om, so Oos → Noord.' },
        { difficulty: 'Medium', question: 'Jy kyk na die suide. Jy maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'Kloksgewys: Oos → Suid → Wes. \'n Kwartdraai kloksgewys vanaf Suid eindig op Wes.' },
        { difficulty: 'Medium', question: 'Jy kyk na die suide. Jy maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'Antikloksgewys vanaf suid keer die kloksgewyse volgorde om, so Suid → Oos.' },
        { difficulty: 'Medium', question: 'Jy kyk na die weste. Jy maak \'n kwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Noord', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: 'Kloksgewys: Suid → Wes → Noord. \'n Kwartdraai kloksgewys vanaf Wes eindig op Noord.' },
        { difficulty: 'Medium', question: 'Jy kyk na die weste. Jy maak \'n kwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Antikloksgewys vanaf wes keer die kloksgewyse volgorde om, so Wes → Suid.' },
        { difficulty: 'Medium', question: '\'n Horlosie se minuutwyser maak \'n kwartdraai kloksgewys. Hoeveel grade het dit gedraai?', checkMode: 'auto', answer: '90°', correctAnswer: '90', correctAnswers: ['90', '90 grade', '90°'], explanation: '\'n Kwartdraai is altyd 90°, ongeag die rigting.' },
        { difficulty: 'Medium', question: '\'n Deurhandvatsel maak \'n driekwartdraai. Hoeveel grade is dit?', checkMode: 'auto', answer: '270°', correctAnswer: '270', correctAnswers: ['270', '270 grade', '270°'], explanation: '\'n Driekwartdraai is drie kwarte van 360°: 360° × ¾ = 270°.' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde. Jy maak \'n driekwartdraai kloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: '\'n Driekwartdraai kloksgewys (270°) vanaf Noord: Noord → Oos → Suid → Wes.' },
        { difficulty: 'Medium', question: 'Jy kyk na die noorde. Jy maak \'n driekwartdraai antikloksgewys. In watter rigting kyk jy nou?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: '\'n Driekwartdraai antikloksgewys (270°) vanaf Noord: Noord → Wes → Suid → Oos.' },
        { difficulty: 'Medium', question: 'Watter draai eindig met jou wat presies dieselfde rigting toe kyk as waar jy begin het — \'n volledige draai, \'n halfdraai of \'n kwartdraai?', checkMode: 'auto', answer: 'Volledige draai', correctAnswer: 'volledige draai', correctAnswers: ['volledige draai', 'volledigedraai', '\'n volledige draai'], explanation: 'Net \'n volledige draai (360°) bring jou heeltemal terug om in dieselfde rigting te kyk.' },
        { difficulty: 'Medium', question: 'Op \'n rooster, is beweeg "2 kolomme regs" dieselfde as beweeg "2 rye op"?', checkMode: 'auto', answer: 'Nee', correctAnswer: 'nee', correctAnswers: ['nee', 'nie dieselfde nie'], explanation: 'Kolomme beweeg links-regs terwyl rye op-af beweeg — dit is verskillende rigtings op die rooster.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap roosterbeweging en draairigting baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan kloksgewys teenoor antikloksgewys goed — gaan enige verkeerde vrae na.' },
        { minScore: 13, message: 'Goeie poging! Oefen multi-stap roosterbewegings en draairigting, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — FOLLOWING/GIVING DIRECTIONS word problems, real-world position
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Rigtings en Werklike-Wêreld Posisie',
      questions: [
        { difficulty: 'Medium', question: 'Jy kyk na die noorde. Jy word vertel om "reguit vorentoe te gaan." In watter rigting stap jy?', checkMode: 'auto', answer: 'Noord', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: '"Gaan reguit vorentoe" beteken beweeg voort in dieselfde rigting waarin jy reeds kyk — noord.' },
        { difficulty: 'Medium', question: 'Thabo staan by die skoolhek en kyk na die ooste. Hy draai regs. In watter rigting kyk hy nou?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: '\'n Draai na regs is \'n kwartdraai kloksgewys. Oos → kloksgewys → Suid.' },
        { difficulty: 'Medium', question: 'Sipho staan by die winkel en kyk na die suide. Hy draai links. In watter rigting kyk hy nou?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: '\'n Draai na links is \'n kwartdraai antikloksgewys. Suid → antikloksgewys → Oos.' },
        { difficulty: 'Medium', question: 'Lerato stap van haar huis af, kyk na die noorde vir 3 blokke, en draai dan regs en stap 2 blokke. In watter rigting kyk sy na die draai?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: '\'n Draai na regs vanaf noord is \'n kwartdraai kloksgewys: Noord → Oos.' },
        { difficulty: 'Medium', question: 'Amahle stap van die park af, kyk na die weste vir 4 blokke, en draai dan links. In watter rigting kyk sy na die draai?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: '\'n Draai na links vanaf wes is \'n kwartdraai antikloksgewys: Wes → Suid.' },
        { difficulty: 'Medium', question: 'Rigtings sê: "Begin by die winkel en kyk na die noorde. Gaan reguit 2 blokke. Draai regs. Gaan reguit 1 blok." Hoeveel blokke is altesaam gestap?', checkMode: 'auto', answer: '3', correctAnswer: '3', correctAnswers: ['3', 'drie', '3 blokke'], explanation: '2 blokke + 1 blok = 3 blokke altesaam.' },
        { difficulty: 'Medium', question: 'Rigtings sê: "Begin deur suid te kyk. Gaan reguit 3 blokke. Draai om. Gaan reguit 3 blokke." In watter rigting kyk jy aan die einde?', checkMode: 'auto', answer: 'Noord', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: '"Draai om" is \'n halfdraai — die teenoorgestelde van suid is noord.' },
        { difficulty: 'Medium', question: 'Rigtings sê: "Begin deur suid te kyk. Gaan reguit 3 blokke. Draai om. Gaan reguit 3 blokke." Hoe ver is jy van jou beginpunt af?', checkMode: 'auto', answer: '0', correctAnswer: '0', correctAnswers: ['0', 'nul', 'terug by die begin', 'by die beginpunt'], explanation: 'Om 3 blokke suid te stap en dan om te draai en 3 blokke noord te stap, bring jou terug waar jy begin het.' },
        { difficulty: 'Medium', question: 'Op \'n werklike kaart is die kliniek langsaan die skool en die winkel is tussen die skool en die kliniek. Watter gebou is in die middel?', checkMode: 'auto', answer: 'Winkel', correctAnswer: 'winkel', correctAnswers: ['winkel', 'die winkel'], explanation: '"Tussen" beteken in die middel van twee dinge — die winkel is tussen die skool en die kliniek.' },
        { difficulty: 'Medium', question: '\'n Taxistaanplek is ver van die skool en \'n spaza-winkel is naby die skool. Watter een sal jy eerste bereik as jy van die skool af stap?', checkMode: 'auto', answer: 'Spaza-winkel', correctAnswer: 'spaza-winkel', correctAnswers: ['spaza-winkel', 'die spaza-winkel', 'spaza', 'winkel'], explanation: '"Naby" beteken \'n kort afstand weg, so die spaza-winkel sal eerste bereik word.' },
        { difficulty: 'Medium', question: 'Jy gee rigtings: "Stap reguit vorentoe 2 blokke, draai dan regs, stap dan nog 1 blok." Iemand volg dit terwyl hulle na die weste kyk. In watter rigting kyk hulle na die draai?', checkMode: 'auto', answer: 'Noord', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: '\'n Draai na regs vanaf wes is \'n kwartdraai kloksgewys: Wes → Noord.' },
        { difficulty: 'Medium', question: 'Jy gee rigtings: "Stap reguit vorentoe 2 blokke, draai dan links, stap dan nog 1 blok." Iemand volg dit terwyl hulle na die weste kyk. In watter rigting kyk hulle na die draai?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: '\'n Draai na links vanaf wes is \'n kwartdraai antikloksgewys: Wes → Suid.' },
        { difficulty: 'Medium', question: 'Op \'n rooster-kaart is die kliniek by kolom B, ry 4 en die skool is by kolom B, ry 1. Is hulle in dieselfde kolom of dieselfde ry?', checkMode: 'auto', answer: 'Dieselfde kolom', correctAnswer: 'dieselfde kolom', correctAnswers: ['dieselfde kolom', 'dieselfdekolom', 'kolom'], explanation: 'Albei roosterverwysings deel die letter B, so hulle is in dieselfde kolom.' },
        { difficulty: 'Medium', question: 'Op \'n rooster-kaart is die winkel by C2 en die park is by E2. Is hulle in dieselfde kolom of dieselfde ry?', checkMode: 'auto', answer: 'Dieselfde ry', correctAnswer: 'dieselfde ry', correctAnswers: ['dieselfde ry', 'dieselfdery', 'ry'], explanation: 'Albei roosterverwysings deel die syfer 2, so hulle is in dieselfde ry.' },
        { difficulty: 'Medium', question: 'Rigtings van die kliniek na die mark: "Gaan reguit 4 blokke, draai regs, gaan reguit 2 blokke." As jy begin het deur noord te kyk, in watter rigting eindig jy?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: '\'n Draai na regs vanaf noord is \'n kwartdraai kloksgewys: Noord → Oos.' },
        { difficulty: 'Medium', question: 'Om \'n stel rigtings om te keer en terug na die begin te stap, wat moet jy met links- en regsdraaie doen?', checkMode: 'auto', answer: 'Ruil hulle om', correctAnswer: 'ruil hulle om', correctAnswers: ['ruil hulle om', 'ruil om', 'keer hulle om', 'verwissel hulle'], explanation: 'Wanneer jy jou spore terugvolg, word elke linksdraai \'n regsdraai en elke regsdraai \'n linksdraai.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is die klaskamer by A2 en die kantoor is ook by A2. Wat kan jy oor hulle posisies sê?', checkMode: 'auto', answer: 'Hulle is op dieselfde plek', correctAnswer: 'hulle is op dieselfde plek', correctAnswers: ['hulle is op dieselfde plek', 'dieselfde plek', 'dieselfde posisie', 'identies'], explanation: 'Identiese roosterverwysings beteken die twee voorwerpe word beskryf as op dieselfde posisie.' },
        { difficulty: 'Medium', question: '\'n Tuin het \'n bank tussen twee bome, met \'n dam voor die bank. Watter posisiewoord vertel jou die dam se verhouding tot die bank?', checkMode: 'auto', answer: 'Voor', correctAnswer: 'voor', correctAnswers: ['voor'], explanation: 'Die dam word beskryf as voor die bank.' },
        { difficulty: 'Medium', question: 'Twee vriende staan rug-teen-rug. As Zanele na die noorde kyk, in watter rigting kyk die vriend agter haar?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Rug-teen-rug staan beteken om na teenoorgestelde rigtings te kyk — die teenoorgestelde van noord is suid.' },
        { difficulty: 'Medium', question: 'Volg \'n kaart: begin by die hek en kyk na die ooste, stap 2 blokke, draai regs, stap 2 blokke, draai weer regs, stap 2 blokke. In watter rigting kyk jy aan die einde?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'Oos → (draai regs) → Suid → (draai regs) → Wes. Twee kwartdraaie kloksgewys vanaf Oos eindig op Wes.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n put 3 kolomme regs en 0 rye op vanaf \'n hut by A2. Wat is die put se roosterverwysing?', checkMode: 'auto', answer: 'D2', correctAnswer: 'D2', correctAnswers: ['D2', 'd2'], explanation: '3 kolomme regs vanaf A: B, C, D. Met 0 rye op bly die ry op 2. Die antwoord is D2.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n bank 0 kolomme regs en 3 rye op vanaf \'n hek by C1. Wat is die bank se roosterverwysing?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'Met 0 kolomme beweeg, bly die kolom op C. 3 rye op vanaf 1: 2, 3, 4. Die antwoord is C4.' },
        { difficulty: 'Medium', question: '\'n Stel rigtings vertel jou om drie keer op \'n ry na regs te draai (drie kwartdraaie kloksgewys). As jy begin het deur noord te kyk, in watter rigting eindig jy?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'Drie kwartdraaie kloksgewys = 270°. Noord → Oos → Suid → Wes.' },
        { difficulty: 'Medium', question: '\'n Stel rigtings vertel jou om twee keer op \'n ry na links te draai (twee kwartdraaie antikloksgewys). As jy begin het deur oos te kyk, in watter rigting eindig jy?', checkMode: 'auto', answer: 'Wes', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'Twee kwartdraaie antikloksgewys = 180° (\'n halfdraai). Die teenoorgestelde van oos is wes.' },
        { difficulty: 'Medium', question: 'Waarom is dit belangrik om te sê in watter rigting jy kyk aan die begin van \'n stel rigtings?', checkMode: 'self', answer: 'Omdat woorde soos "draai links" of "draai regs" slegs sin maak as jy weet in watter rigting die persoon reeds kyk — sonder \'n beginrigting kan die rigtings na die verkeerde plek lei.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het rigtings volg en gee in werklike-wêreld situasies baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy kan met selfvertroue deur rigting-woordvraagstukke werk — gaan enige verkeerde vrae na.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die rigtings-voorbeelde en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP / COMBINED PROBLEMS and explain-your-reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Multi-Stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n winkel by B1. As jy 2 kolomme regs en 2 rye op beweeg, kom jy by die mark. Vanaf die mark bring \'n beweging van 1 kolom links en 1 ry op jou by die biblioteek. Wat is die biblioteek se roosterverwysing?', checkMode: 'auto', answer: 'C4', correctAnswer: 'C4', correctAnswers: ['C4', 'c4'], explanation: 'Winkel B1 → 2 regs, 2 op → mark by D3. Mark D3 → 1 links, 1 op → biblioteek by C4.' },
        { difficulty: 'Medium', question: 'Op \'n rooster is \'n hut by A1. As jy 3 kolomme regs en 1 ry op beweeg, kom jy by \'n put. Vanaf die put bring \'n beweging van 1 kolom links en 3 rye op jou by \'n boom. Wat is die boom se roosterverwysing?', checkMode: 'auto', answer: 'C5', correctAnswer: 'C5', correctAnswers: ['C5', 'c5'], explanation: 'Hut A1 → 3 regs, 1 op → put by D2. Put D2 → 1 links, 3 op → boom by C5.' },
        { difficulty: 'Hard', question: 'Sipho begin deur noord te kyk. Hy maak hierdie draaie in volgorde: kwartdraai kloksgewys, kwartdraai kloksgewys. In watter rigting kyk hy na albei draaie?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Twee kwartdraaie kloksgewys = \'n halfdraai (180°). Noord → Suid.' },
        { difficulty: 'Hard', question: 'Zanele begin deur oos te kyk. Sy maak hierdie draaie in volgorde: halfdraai, kwartdraai antikloksgewys. In watter rigting kyk sy na albei draaie?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Halfdraai vanaf Oos → Wes. Kwartdraai antikloksgewys vanaf Wes → Suid.' },
        { difficulty: 'Hard', question: 'Amahle begin deur suid te kyk. Sy maak hierdie draaie in volgorde: kwartdraai kloksgewys, halfdraai, kwartdraai kloksgewys. In watter rigting kyk sy aan die einde?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Suid → (¼ kloksgewys) → Wes → (½ draai) → Oos → (¼ kloksgewys) → Suid.' },
        { difficulty: 'Hard', question: 'Thabo begin deur wes te kyk. Hy maak \'n driekwartdraai kloksgewys, dan \'n kwartdraai antikloksgewys. In watter rigting kyk hy aan die einde?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'Wes → (¾ kloksgewys, 270°) → Suid → (¼ antikloksgewys) → Oos.' },
        { difficulty: 'Hard', question: '\'n Stel draaie tel op tot 450° kloksgewys vanaf noord. Aangesien \'n volledige draai 360° is, in watter rigting kyk jy na \'n draai van 450° kloksgewys?', checkMode: 'auto', answer: 'Oos', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: '450° = 360° + 90°. Die eerste 360° is \'n volledige draai terug na noord, en die oorblywende 90° kloksgewys neem jou na oos.' },
        { difficulty: 'Hard', question: 'Op \'n rooster is die winkel by A1 en die skool by D4. As jy slegs regs of op kan beweeg, hoeveel tree (regs + op) altesaam vat dit om van die winkel na die skool te kom?', checkMode: 'auto', answer: '6', correctAnswer: '6', correctAnswers: ['6', 'ses', '6 tree'], explanation: '3 kolomme regs (A→D) + 3 rye op (1→4) = 6 tree altesaam.' },
        { difficulty: 'Hard', question: 'Op \'n rooster is die biblioteek by B1 en die park by E5. As jy slegs regs of op kan beweeg, hoeveel tree (regs + op) altesaam vat dit om van die biblioteek na die park te kom?', checkMode: 'auto', answer: '7', correctAnswer: '7', correctAnswers: ['7', 'sewe', '7 tree'], explanation: '3 kolomme regs (B→E) + 4 rye op (1→5) = 7 tree altesaam.' },
        { difficulty: 'Hard', question: '\'n Robot by roosterverwysing C2 volg hierdie instruksies: beweeg 2 regs, beweeg 1 op, beweeg 1 links, beweeg 2 op. Wat is sy finale roosterverwysing?', checkMode: 'auto', answer: 'D5', correctAnswer: 'D5', correctAnswers: ['D5', 'd5'], explanation: 'C2 → 2 regs → E2 → 1 op → E3 → 1 links → D3 → 2 op → D5.' },
        { difficulty: 'Hard', question: '\'n Robot by roosterverwysing A1 volg hierdie instruksies: beweeg 3 regs, beweeg 2 op, beweeg 1 links, beweeg 1 af. Wat is sy finale roosterverwysing?', checkMode: 'auto', answer: 'C2', correctAnswer: 'C2', correctAnswers: ['C2', 'c2'], explanation: 'A1 → 3 regs → D1 → 2 op → D3 → 1 links → C3 → 1 af → C2.' },
        { difficulty: 'Hard', question: 'Rigtings van die huis af: "Kyk na die noorde. Stap 3 blokke. Draai regs. Stap 2 blokke. Draai regs. Stap 3 blokke." In watter rigting kyk jy aan die einde?', checkMode: 'auto', answer: 'Suid', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'Noord → (draai regs) → Oos → (draai regs) → Suid. Twee kwartdraaie kloksgewys neem jou van Noord na Suid.' },
        { difficulty: 'Hard', question: 'Deur dieselfde rigtings te gebruik ("Kyk na die noorde. Stap 3 blokke. Draai regs. Stap 2 blokke. Draai regs. Stap 3 blokke."), hoe ver noord van die begin af is jy aan die einde (netto blokke noord)?', checkMode: 'auto', answer: '0', correctAnswer: '0', correctAnswers: ['0', 'nul'], explanation: 'Jy stap 3 blokke noord, dan 2 blokke oos (geen noord/suid-verandering nie), dan 3 blokke suid. 3 noord − 3 suid = 0 netto blokke noord.' },
        { difficulty: 'Hard', question: '\'n Vorm word \'n kwartdraai kloksgewys gedraai, dan nog \'n kwartdraai kloksgewys, dan nog \'n kwartdraai kloksgewys. Watter enkele draai het dieselfde algehele effek?', checkMode: 'auto', answer: 'Driekwartdraai kloksgewys', correctAnswer: 'driekwartdraai kloksgewys', correctAnswers: ['driekwartdraai kloksgewys', 'driekwartdraaikloksgewys', '270 graad-draai kloksgewys', '270° kloksgewys'], explanation: 'Drie kwartdraaie kloksgewys = 90° × 3 = 270°, wat dieselfde is as een driekwartdraai kloksgewys.' },
        { difficulty: 'Hard', question: '\'n Vorm word \'n halfdraai gedraai, dan nog \'n halfdraai. Watter enkele draai het dieselfde algehele effek?', checkMode: 'auto', answer: 'Volledige draai', correctAnswer: 'volledige draai', correctAnswers: ['volledige draai', 'volledigedraai', '\'n volledige draai', '360 graad-draai', '360°'], explanation: 'Twee halfdraaie = 180° + 180° = 360°, wat dieselfde is as een volledige draai (kyk weer in die oorspronklike rigting).' },
        { difficulty: 'Hard', question: 'Verduidelik, in jou eie woorde, waarom \'n kwartdraai kloksgewys vanaf noord oos gee, deur die horlosiegesig-idee te gebruik (12, 3, 6, 9-uur posisies).', checkMode: 'self', answer: 'As noord by die 12-uur posisie op \'n horlosiegesig is, beweeg jy deur kloksgewys (die rigting waarin horlosiewysers beweeg) \'n kwartdraai na die 3-uur posisie, wat oos is. Die kloksgewyse volgorde is Noord (12) → Oos (3) → Suid (6) → Wes (9) → terug na Noord (12).' },
        { difficulty: 'Hard', question: 'Verduidelik waarom om na regs te draai en dan weer na regs te draai dieselfde is as \'n halfdraai te maak.', checkMode: 'self', answer: 'Elke regsdraai is \'n kwartdraai kloksgewys, wat 90° is. Twee kwartdraaie kloksgewys agtermekaar tel op tot 90° + 90° = 180°, en 180° is presies wat \'n halfdraai is, so die twee gekombineerde draaie het dieselfde effek as een halfdraai.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy die roosterverwysing van \'n punt sou vind wat 2 kolomme regs en 3 rye op vanaf B2 is, deur jou stappe te wys.', checkMode: 'self', answer: 'Begin by kolom B en beweeg 2 kolomme na regs: B → C (1) → D (2), so die nuwe kolom is D. Begin by ry 2 en beweeg 3 rye op: 2 → 3 (1) → 4 (2) → 5 (3), so die nuwe ry is 5. Deur die nuwe kolom en ry te kombineer, kry jy die roosterverwysing D5.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom "draai links" en "draai regs" tot verskillende finale rigtings kan lei, al is albei kwartdraaie.', checkMode: 'self', answer: 'Albei draaie is 90°, maar hulle draai in teenoorgestelde rotasierigtings — draai regs is kloksgewys en draai links is antikloksgewys. Omdat kloksgewys en antikloksgewys in teenoorgestelde volgordes om die kompas beweeg (N→O→S→W teenoor N→W→S→O), eindig \'n kwartdraai links en \'n kwartdraai regs vanaf dieselfde beginrigting in verskillende, teenoorgestelde rigtings.' },
        { difficulty: 'Hard', question: 'Op \'n rooster is punt P by C3. Punt Q is 2 kolomme links en 2 rye af vanaf P. Is Q op \'n geldige posisie op \'n rooster gemerk A tot E en 1 tot 5? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Deur 2 kolomme na links vanaf C te beweeg, kry jy A (C → B → A), en deur 2 rye af vanaf 3 te beweeg, kry jy 1 (3 → 2 → 1). So Q is by A1, wat \'n geldige posisie is omdat A binne die A–E kolomreeks is en 1 binne die 1–5 ryreeks is.' },
        { difficulty: 'Hard', question: '\'n Duif vlieg vanaf D2, 3 kolomme links en 1 ry op, om by punt R te kom. Is R \'n geldige posisie op \'n rooster gemerk A tot D en 1 tot 4? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Deur 3 kolomme na links vanaf D te beweeg, kry jy A (D → C → B → A), en deur 1 ry op vanaf 2 te beweeg, kry jy 3. So R is by A3, wat geldig is omdat A binne die A–D reeks is en 3 binne die 1–4 reeks is.' },
        { difficulty: 'Hard', question: 'Lerato beweer dat \'n kwartdraai kloksgewys en \'n kwartdraai antikloksgewys altyd in dieselfde rigting eindig. Is sy reg? Verduidelik jou redenasie met \'n voorbeeld.', checkMode: 'self', answer: 'Lerato is nie reg nie. As jy noord toe begin kyk, gee \'n kwartdraai kloksgewys oos, maar \'n kwartdraai antikloksgewys gee wes — dit is verskillende (trouens teenoorgestelde) rigtings. Die twee draaie gee slegs dieselfde algehele resultaat as jy albei draaie een na die ander doen (kloksgewys dan antikloksgewys), want hulle sal mekaar ophef, maar as enkele, aparte draaie vanaf dieselfde begin wys hulle in verskillende rigtings.' },
        { difficulty: 'Hard', question: 'Thabo sê \'n halfdraai is altyd dieselfde as twee kwartdraaie in dieselfde rotasierigting. Is hy reg? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Thabo is reg. \'n Kwartdraai is 90°, so twee kwartdraaie in dieselfde rigting (albei kloksgewys of albei antikloksgewys) tel op tot 90° + 90° = 180°, wat presies die grootte van \'n halfdraai is. Die finale kykrigting sal ooreenstem met \'n halfdraai se resultaat — die presiese teenoorgestelde van die beginrigting.' },
        { difficulty: 'Hard', question: 'Beskryf op \'n rooster twee verskillende roetes (met slegs regs- en op-bewegings) vanaf A1 na C3, en verduidelik waarom albei dieselfde totale aantal tree gebruik.', checkMode: 'self', answer: '\'n Roete: beweeg eers 2 tree na regs (A1 → B1 → C1), dan 2 tree op (C1 → C2 → C3). \'n Ander roete: beweeg eers 2 tree op (A1 → A2 → A3), dan 2 tree na regs (A3 → B3 → C3). Albei roetes gebruik 2 regs-bewegings en 2 op-bewegings, wat 4 tree altesaam gee ongeag die volgorde, want die totale afstand regs en op wat nodig is, verander nie — slegs die volgorde van die bewegings verander.' },
        { difficulty: 'Hard', question: '\'n Speletjiekarakter wat noord toe kyk, beweeg deur hierdie volgorde: kwartdraai kloksgewys, kwartdraai kloksgewys, kwartdraai kloksgewys, kwartdraai kloksgewys. Verduidelik wat met die rigting gebeur waarin die karakter kyk en waarom.', checkMode: 'self', answer: 'Elke kwartdraai kloksgewys is 90°, so vier daarvan tel op tot 90° × 4 = 360°, wat \'n volledige draai is. Dit beteken die karakter eindig weer noord toe te kyk — dieselfde rigting waarin dit begin het — omdat \'n volledige draai jou altyd terugbring na jou oorspronklike rigting.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap en gekombineerde posisie- en bewegingsprobleme baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy kan met selfvertroue roosterbewegings en draaie kombineer — gaan enige verkeerde vrae na.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die multi-stap voorbeelde en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
