import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ─────────────────────────────────────────────────────────
// object                 → blue    (#2563eb)
// enlarged image         → green   (#16a34a)
// reduced image          → red     (#dc2626)
// scale factor           → orange  (#ea580c)
// centre of enlargement  → purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const rd = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Gedeelde "Onthou van Graad 5"-banier (blou) ────────────────────────────
// Koppel hierdie jaar se Vergroting en Verkleining-inhoud terug aan Graad 5
// se Refleksie, Translasie en Rotasie, sodat leerders sien hoe die twee
// grade verband hou: Graad 5 = dieselfde grootte, ander posisie/oriëntasie
// (kongruent); Graad 6 = dieselfde vorm, ander grootte (eenvormig).
const priorKnowledge = (title: string, body: string) =>
  `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">📘 Onthou van Graad 5: ${title}</p>` +
  `<p style="margin:0;color:#1e3a8a;">${body}</p>` +
  `</div>`

// ─── Gedeelde "Kyk vorentoe"-verrykingsbanier (pers) ────────────────────────
// CAPS Graad 6 teken vergrotings/verkleinings deur vierkantjies op
// vierkantige papier te tel vanaf ʼn gemerkte middelpunt van vergroting —
// nie ʼn formele (x, y)-koördinaatvlak nie. Graad 7 se "Transformasie-
// meetkunde"-onderwerp formaliseer dit met (x, y)-koördinate gemeet vanaf
// die oorsprong, en stel negatiewe skaalfaktore bekend. Hier behou as
// duidelik gemerkte verryking.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Kyk vorentoe: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

export const topicData: TopicData = {
  title: 'Transformasies',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS ENLARGEMENT AND REDUCTION?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-enlargement-and-reduction',
      title: 'Wat is Vergroting en Verkleining?',
      icon: '🔍',
      explanation:
        priorKnowledge(
          'refleksie, translasie en rotasie het dieselfde grootte behou',
          'In Graad 5 het jy geleer dat om ʼn vorm te reflekteer, te transleer of te draai nooit sy grootte verander nie — die beeld is altyd <strong>kongruent</strong> aan die objek (presies dieselfde grootte en vorm). Vanjaar ontmoet jy twee nuwe transformasies, vergroting en verkleining, wat die GROOTTE van ʼn vorm verander terwyl die VORM dieselfde bly.'
        ) +
        `<p style="margin-bottom:16px;">ʼn <strong>Vergroting</strong> maak ʼn vorm groter. ʼn <strong>Verkleining</strong> maak ʼn vorm kleiner. In albei gevalle is die ${bl('objek')} en sy beeld <strong>eenvormige</strong> vorms — elke hoek bly presies dieselfde, maar elke sylengte verander met dieselfde bedrag. Die getal wat vir ons sê hoeveel groter of kleiner die beeld is, word die <strong>${or('skaalfaktor')}</strong> genoem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vergrote beeld')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('verkleinde beeld')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor vergroting en verkleining</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Dieselfde vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke hoek in die beeld is presies dieselfde as die ooreenstemmende hoek in die ${bl('objek')}. Die vorms is <strong>eenvormig</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Verskillende grootte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke sylengte word met die ${or('skaalfaktor')} vermenigvuldig: beeldsy = objeksy &times; ${or('skaalfaktor')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vergroting</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('skaalfaktor')} is <strong>groter as 1</strong> (bv. 2, 3, 4). Die ${gr('beeld')} is groter as die ${bl('objek')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Verkleining</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('skaalfaktor')} is ʼn <strong>breuk tussen 0 en 1</strong> (bv. 1/2, 1/3). Die ${rd('beeld')} is kleiner as die ${bl('objek')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Die skaalfaktor vind</p>` +
        `<p style="margin:0;color:#78350f;">${or('skaalfaktor')} = beeldsylengte &divide; ooreenstemmende ${bl('objek')}sylengte. Kontroleer jou antwoord deur dit op <strong>twee verskillende sye</strong> te probeer — ʼn ware vergroting of verkleining gee elke keer <strong>dieselfde</strong> ${or('skaalfaktor')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek het sye van 3 cm en 5 cm. Dit word vergroot en die beeld het sye van 6 cm en 10 cm. Vind die skaalfaktor.',
          answer: `${or('Skaalfaktor = 2')}`,
          steps: [
            `Deel die beeldsy deur die ooreenstemmende ${bl('objek')}sy: 6 &divide; 3 = <strong>2</strong>.`,
            `Kontroleer met die ander paar sye: 10 &divide; 5 = <strong>2</strong> ook.`,
            `Albei pare gee dieselfde waarde, so dit is ʼn ware vergroting.`,
            `<strong>Antwoord:</strong> ${or('Skaalfaktor = 2')} ✓`,
          ],
        },
        {
          question: 'ʼn Driehoek het sye van 4 cm, 6 cm en 8 cm. Dit word verklein na ʼn eenvormige driehoek met sye van 2 cm, 3 cm en 4 cm. Vind die skaalfaktor.',
          answer: `${or('Skaalfaktor = 1/2')}`,
          steps: [
            `Deel elke beeldsy deur sy ooreenstemmende ${bl('objek')}sy: 2 &divide; 4 = <strong>1/2</strong>.`,
            `Kontroleer: 3 &divide; 6 = <strong>1/2</strong>, en 4 &divide; 8 = <strong>1/2</strong>.`,
            `Al drie pare gee dieselfde breuk, so die skaalfaktor is konsekwent.`,
            `<strong>Antwoord:</strong> ${or('Skaalfaktor = 1/2')} (ʼn verkleining, aangesien dit ʼn breuk kleiner as 1 is) ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Twee reghoekige driehoeke langs mekaar — ʼn kleiner objekdriehoek in blou met bene 3 en 4, en ʼn groter vergrote beelddriehoek in groen met bene 6 en 8 — wat dieselfde vorm maar ʼn verskillende grootte wys.',
      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><polygon points="20,120,44,120,20,88" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="120,150,168,150,120,86" fill="none" stroke="#16a34a" stroke-width="2.5"/><rect x="20" y="112" width="8" height="8" fill="none" stroke="#2563eb" stroke-width="1.5"/><rect x="120" y="142" width="8" height="8" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="32" y="133" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="11" y="104" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="144" y="163" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">6</text><text x="111" y="118" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">8</text><text x="32" y="146" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Objek</text><text x="144" y="176" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Beeld (&#215;2)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat vergroting en verkleining bekendstel, wat wys hoe die skaalfaktor ʼn objek en sy beeld verbind, met die objek in blou, ʼn vergrote beeld in groen en ʼn verkleinde beeld in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ENLARGING SHAPES ON A GRID
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlarging-shapes-on-a-grid',
      title: 'Vorms Vergroot op ʼn Rooster',
      icon: '📈',
      explanation:
        lookingAhead(
          'vergroot met (x, y)-koördinate vanaf die oorsprong',
          'CAPS Graad 6 vergroot vorms deur roosterblokkies vanaf ʼn gemerkte middelpunt van vergroting op vierkantige papier te tel. Om formele (x, y)-koördinate gemeet vanaf die oorsprong te gebruik, en negatiewe skaalfaktore, is Graad 7 se "Transformasiemeetkunde"-werk.'
        ) +
        `<p style="margin-bottom:16px;">Om ʼn vorm op vierkantige papier te vergroot, merk ʼn <strong>${pu('middelpunt van vergroting')}</strong> (ʼn vaste punt, dikwels O genoem). Tel vir elke hoekpunt van die ${bl('objek')} hoeveel blokkies regs/links en op/af dit vanaf O is. Vermenigvuldig <strong>albei</strong> tellings met die ${or('skaalfaktor')}. Teken die nuwe hoekpunt daardie aantal blokkies vanaf O in <strong>dieselfde rigting</strong>. Verbind die nuwe hoekpunte om die vergrote beeld te teken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('middelpunt van vergroting')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beeld')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor vergroot op ʼn rooster</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Middelpunt bly vas</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${pu('middelpunt van vergroting')} beweeg nie. Elke hoekpunt word gemeet, en herteken, vanaf hierdie selfde vaste punt.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vermenigvuldig, moenie optel nie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Beide die "regs/links"-telling en die "op/af"-telling word met die ${or('skaalfaktor')} <strong>vermenigvuldig</strong> — nooit bygetel nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoeke onveranderd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('beeld')} het presies dieselfde hoeke as die ${bl('objek')} — net die grootte verander.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reguit-lyn-reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${pu('middelpunt')}, ʼn ${bl('objek')}hoekpunt, en sy ooreenstemmende ${gr('beeld')}hoekpunt lê altyd op <strong>een reguit lyn</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Stap vir stap</p>` +
        `<p style="margin:0;color:#14532d;">1) Merk die ${pu('middelpunt')} O. 2) Tel blokkies regs/op (of links/af) vanaf O tot by elke ${bl('objek')}hoekpunt. 3) Vermenigvuldig albei tellings met die ${or('skaalfaktor')}. 4) Teken elke nuwe punt daardie aantal blokkies vanaf O. 5) Verbind die nuwe punte om die ${gr('beeld')} te voltooi.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoekpunt A is 1 blokkie regs en 2 blokkies op vanaf die middelpunt van vergroting O. Die vorm word met ʼn skaalfaktor van 3 vergroot. Vind die posisie van beeld-hoekpunt A′.',
          answer: `${gr('A′ is 3 regs, 6 op vanaf O')}`,
          steps: [
            `Begin met die ${bl('objek')}-hoekpunt A: 1 regs, 2 op vanaf O.`,
            `Vermenigvuldig die "regs"-telling met die ${or('skaalfaktor')}: 1 &times; 3 = <strong>3</strong>.`,
            `Vermenigvuldig die "op"-telling met die ${or('skaalfaktor')}: 2 &times; 3 = <strong>6</strong>.`,
            `<strong>Antwoord:</strong> ${gr('A′ is 3 regs, 6 op vanaf O')} ✓`,
          ],
        },
        {
          question: 'Driehoek XYZ het middelpunt van vergroting O. X is 1 regs, 1 op vanaf O; Y is 3 regs, 1 op; Z is 1 regs, 3 op. Vergroot die driehoek met ʼn skaalfaktor van 2. Vind die posisies van X′, Y′ en Z′.',
          answer: `${gr('X′ is 2 regs 2 op; Y′ is 6 regs 2 op; Z′ is 2 regs 6 op')}`,
          steps: [
            `Vermenigvuldig elke telling vir X met 2: (1 &times; 2, 1 &times; 2) = <strong>2 regs, 2 op</strong>.`,
            `Vermenigvuldig elke telling vir Y met 2: (3 &times; 2, 1 &times; 2) = <strong>6 regs, 2 op</strong>.`,
            `Vermenigvuldig elke telling vir Z met 2: (1 &times; 2, 3 &times; 2) = <strong>2 regs, 6 op</strong>.`,
            `Kontroleer: die basis XY was 3 &minus; 1 = 2 blokkies; die beeldbasis X′Y′ is 6 &minus; 2 = 4 blokkies, wat 2 &times; 2 is ✓.`,
            `<strong>Antwoord:</strong> ${gr('X′(2, 2), Y′(6, 2), Z′(2, 6) gemeet as blokkies regs en op vanaf O')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Vierkantige rooster wat ʼn klein blou objekdriehoek XYZ wys wat met skaalfaktor 2 vanaf ʼn pers middelpunt van vergroting O vergroot word, na ʼn groter groen beelddriehoek X′Y′Z′, met kolstreep-strale vanaf O deur elke paar ooreenstemmende hoekpunte.',
      diagramSvg:
        '<svg viewBox="0 0 215 169" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="49" y1="16" x2="49" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="68" y1="16" x2="68" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="87" y1="16" x2="87" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="106" y1="16" x2="106" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="125" y1="16" x2="125" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="16" x2="144" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="163" y1="16" x2="163" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="16" x2="182" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="201" y1="16" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="201" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="35" x2="201" y2="35" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="54" x2="201" y2="54" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73" x2="201" y2="73" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="92" x2="201" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="111" x2="201" y2="111" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="130" x2="201" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="149" x2="68" y2="111" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="111" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="68" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><polygon points="49,130 87,130 49,92" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="68,111 144,111 68,35" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="30" cy="149" r="3.6" fill="#7c3aed"/><text x="20" y="161" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="49" cy="130" r="3.2" fill="#2563eb"/><text x="40" y="127" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">X</text><circle cx="87" cy="130" r="3.2" fill="#2563eb"/><text x="78" y="127" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><circle cx="49" cy="92" r="3.2" fill="#2563eb"/><text x="40" y="96" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Z</text><circle cx="68" cy="111" r="3.2" fill="#16a34a"/><text x="77" y="108" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">X&#39;</text><circle cx="144" cy="111" r="3.2" fill="#16a34a"/><text x="153" y="108" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">Y&#39;</text><circle cx="68" cy="35" r="3.2" fill="#16a34a"/><text x="77" y="39" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">Z&#39;</text><text x="107.5" y="165" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Skaalfaktor 2 (vergroting)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn driehoek op vierkantige papier te vergroot vanaf ʼn gemerkte middelpunt van vergroting, deur blokkies te tel en met die skaalfaktor te vermenigvuldig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REDUCING SHAPES ON A GRID
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reducing-shapes-on-a-grid',
      title: 'Vorms Verklein op ʼn Rooster',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn vorm op vierkantige papier te verklein, gebruik <strong>presies dieselfde metode</strong> as vergroot — die enigste verskil is dat die ${or('skaalfaktor')} ʼn <strong>breuk tussen 0 en 1</strong> is (soos 1/2 of 1/3). Merk die ${pu('middelpunt van vergroting')} O, tel blokkies regs/links en op/af tot by elke ${bl('objek')}hoekpunt, vermenigvuldig albei tellings met die breuk-${or('skaalfaktor')}, en teken die kleiner ${rd('beeld')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('middelpunt van vergroting')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('verkleinde beeld')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor verklein op ʼn rooster</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Dieselfde middelpunt, dieselfde metode</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Alles werk presies soos ʼn vergroting — meet vanaf die ${pu('middelpunt')} O en vermenigvuldig met die ${or('skaalfaktor')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">ʼn Breuk-skaalfaktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om met ʼn breuk soos 1/2 of 1/3 te vermenigvuldig, maak elke getal <strong>kleiner</strong> — dit is wat die vorm laat krimp.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoeke onveranderd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${rd('beeld')} het steeds presies dieselfde hoeke as die ${bl('objek')} — net die grootte krimp.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Beeld sit nader aan O</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Omdat dit kleiner is, sit die ${rd('beeld')} altyd <strong>tussen</strong> die ${pu('middelpunt')} O en die ${bl('objek')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Met ʼn breuk vermenigvuldig</p>` +
        `<p style="margin:0;color:#7f1d1d;">Onthou jou breukfeite: om ʼn heelgetal met 1/2 te vermenigvuldig, beteken om dit deur 2 te deel. Om met 1/3 te vermenigvuldig, beteken om deur 3 te deel, ensovoorts. As ʼn roostertelling nie eweredig deel nie, gaan die ${or('skaalfaktor')} wat vir jou gegee is, weer na.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoekpunt B is 8 blokkies regs en 6 blokkies op vanaf die middelpunt van vergroting O. Die vorm word met ʼn skaalfaktor van 1/2 verklein. Vind die posisie van beeld-hoekpunt B′.',
          answer: `${rd('B′ is 4 regs, 3 op vanaf O')}`,
          steps: [
            `Begin met die ${bl('objek')}-hoekpunt B: 8 regs, 6 op vanaf O.`,
            `Vermenigvuldig die "regs"-telling met die ${or('skaalfaktor')}: 8 &times; 1/2 = <strong>4</strong>.`,
            `Vermenigvuldig die "op"-telling met die ${or('skaalfaktor')}: 6 &times; 1/2 = <strong>3</strong>.`,
            `<strong>Antwoord:</strong> ${rd('B′ is 4 regs, 3 op vanaf O')} ✓`,
          ],
        },
        {
          question: 'Vierhoek PQRS het middelpunt van vergroting O. P is 2 regs, 4 op vanaf O; Q is 6 regs, 4 op; R is 6 regs, 6 op; S is 2 regs, 6 op. Verklein die vierhoek met ʼn skaalfaktor van 1/2. Vind die posisies van P′, Q′, R′ en S′.',
          answer: `${rd('P′(1, 2), Q′(3, 2), R′(3, 3), S′(1, 3) gemeet as blokkies regs en op vanaf O')}`,
          steps: [
            `Vermenigvuldig elke telling vir P met 1/2: (2 &times; 1/2, 4 &times; 1/2) = <strong>1 regs, 2 op</strong>.`,
            `Vermenigvuldig elke telling vir Q met 1/2: (6 &times; 1/2, 4 &times; 1/2) = <strong>3 regs, 2 op</strong>.`,
            `Vermenigvuldig elke telling vir R met 1/2: (6 &times; 1/2, 6 &times; 1/2) = <strong>3 regs, 3 op</strong>.`,
            `Vermenigvuldig elke telling vir S met 1/2: (2 &times; 1/2, 6 &times; 1/2) = <strong>1 regs, 3 op</strong>.`,
            `Kontroleer: sy PQ was 6 &minus; 2 = 4 blokkies; beeldsy P′Q′ is 3 &minus; 1 = 2 blokkies, wat 4 &times; 1/2 is ✓.`,
            `<strong>Antwoord:</strong> ${rd('P′(1, 2), Q′(3, 2), R′(3, 3), S′(1, 3)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Vierkantige rooster wat ʼn groter blou objekreghoek PQRS wys wat met skaalfaktor 1/2 vanaf ʼn pers middelpunt van vergroting O verklein word, na ʼn kleiner rooi beeldreghoek P′Q′R′S′, met kolstreep-strale vanaf O deur elke paar ooreenstemmende hoekpunte.',
      diagramSvg:
        '<svg viewBox="0 0 215 169" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="49" y1="16" x2="49" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="68" y1="16" x2="68" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="87" y1="16" x2="87" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="106" y1="16" x2="106" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="125" y1="16" x2="125" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="16" x2="144" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="163" y1="16" x2="163" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="16" x2="182" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="201" y1="16" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="201" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="35" x2="201" y2="35" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="54" x2="201" y2="54" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73" x2="201" y2="73" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="92" x2="201" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="111" x2="201" y2="111" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="130" x2="201" y2="130" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="149" x2="201" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="149" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="149" x2="68" y2="73" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="73" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="144" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="30" y1="149" x2="68" y2="35" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><polygon points="68,73 144,73 144,35 68,35" fill="none" stroke="#2563eb" stroke-width="2.5"/><polygon points="49,111 87,111 87,92 49,92" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="30" cy="149" r="3.6" fill="#7c3aed"/><text x="20" y="161" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="68" cy="73" r="3.2" fill="#2563eb"/><text x="64" y="85" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><circle cx="144" cy="73" r="3.2" fill="#2563eb"/><text x="153" y="76" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Q</text><circle cx="144" cy="35" r="3.2" fill="#2563eb"/><text x="153" y="29" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><circle cx="68" cy="35" r="3.2" fill="#2563eb"/><text x="64" y="29" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">S</text><circle cx="49" cy="111" r="3.2" fill="#dc2626"/><text x="38" y="122" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">P&#39;</text><circle cx="87" cy="111" r="3.2" fill="#dc2626"/><text x="98" y="122" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Q&#39;</text><circle cx="87" cy="92" r="3.2" fill="#dc2626"/><text x="98" y="87" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">R&#39;</text><circle cx="49" cy="92" r="3.2" fill="#dc2626"/><text x="38" y="87" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">S&#39;</text><text x="107.5" y="165" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">Skaalfaktor 1/2 (verkleining)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn reghoek op vierkantige papier te verklein vanaf ʼn gemerkte middelpunt van vergroting, deur blokkies te tel en met ʼn breuk-skaalfaktor soos 1/2 te vermenigvuldig" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat noem ons die getal wat vir ons sê hoeveel groter of kleiner ʼn beeld is in vergelyking met die objek?',
      answer: 'skaalfaktor',
      checkMode: 'auto',
      correctAnswer: 'skaalfaktor',
      correctAnswers: ['skaalfaktor', 'die skaalfaktor'],
      explanation: 'Die skaalfaktor is die getal waarmee elke sylengte vermenigvuldig word om van die objek na die beeld te gaan.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'As ʼn beeld groter is as die objek, word die transformasie ʼn vergroting of ʼn verkleining genoem?',
      answer: 'vergroting',
      checkMode: 'auto',
      correctAnswer: 'vergroting',
      correctAnswers: ['vergroting', 'ʼn vergroting'],
      explanation: 'ʼn Vergroting maak ʼn vorm groter, met ʼn skaalfaktor groter as 1.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoek het sye van 4 cm en 7 cm. Dit word met ʼn skaalfaktor van 3 vergroot. Vind die nuwe sylengtes.',
      answer: '12 cm en 21 cm',
      checkMode: 'auto',
      correctAnswer: '12 cm en 21 cm',
      correctAnswers: ['12 cm en 21 cm', '12cm en 21cm', '12 en 21', '12, 21'],
      explanation: '4 × 3 = 12 cm.\n7 × 3 = 21 cm.\nAntwoord: 12 cm en 21 cm ✓',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Vierkant met sylengte 12 cm word met ʼn skaalfaktor van 1/4 verklein. Vind die nuwe sylengte.',
      answer: '3 cm',
      checkMode: 'auto',
      correctAnswer: '3 cm',
      correctAnswers: ['3 cm', '3cm', '3'],
      explanation: '12 × 1/4 = 3 cm.\nAntwoord: 3 cm ✓',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Verduidelik, deur die woorde "hoeke" en "sye" te gebruik, waarom ʼn vergrote vorm dieselfde vorm as die oorspronklike is, maar nie dieselfde grootte nie.',
      answer: 'Die hoeke in die vergrote vorm bly presies dieselfde as die hoeke in die oorspronklike — dit is wat dit dieselfde vorm hou. Maar die sye van die vergrote vorm word almal met die skaalfaktor vermenigvuldig, wat hulle langer maak — dit is wat dit ʼn verskillende grootte maak.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Waar of onwaar: In ʼn vergroting verander al die hoeke van die vorm.',
      answer: 'Onwaar',
      checkMode: 'auto',
      correctAnswer: 'Onwaar',
      correctAnswers: ['Onwaar', 'onwaar', 'O'],
      explanation: 'Onwaar. Die hoeke bly presies dieselfde in ʼn vergroting — net die sylengtes verander.',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Hoekpunt A is 3 blokkies regs en 2 blokkies op vanaf die middelpunt van vergroting O. Die vorm word met ʼn skaalfaktor van 2 vergroot. Hoeveel blokkies regs en op vanaf O is beeld-hoekpunt A′?',
      answer: '6 regs, 4 op',
      checkMode: 'auto',
      correctAnswer: '6 regs, 4 op',
      correctAnswers: ['6 regs, 4 op', '6 regs 4 op', '6, 4', '(6, 4)'],
      explanation: '3 × 2 = 6 (regs).\n2 × 2 = 4 (op).\nAntwoord: 6 regs, 4 op ✓',
      diagramSvg:
        '<svg viewBox="0 0 184 136" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="16" x2="50" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="70" y1="16" x2="70" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="90" y1="16" x2="90" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="16" x2="110" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="130" y1="16" x2="130" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="16" x2="150" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="16" x2="170" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="170" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="36" x2="170" y2="36" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56" x2="170" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="76" x2="170" y2="76" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="96" x2="170" y2="96" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="170" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="170" y2="116" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="116" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="116" x2="150" y2="36" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="30" cy="116" r="3.6" fill="#7c3aed"/><text x="20" y="128" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="90" cy="76" r="4" fill="#2563eb"/><text x="99" y="70" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="150" cy="36" r="4" fill="#16a34a"/><text x="159" y="30" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">A&#39;</text></svg>',
    },

    // ── Q8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Vorm se sy is 5 cm. Ná ʼn transformasie is die ooreenstemmende sy op die beeld 15 cm. Wat is die skaalfaktor?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      correctAnswers: ['3', 'x3', '×3'],
      explanation: '15 ÷ 5 = 3.\nAntwoord: 3 ✓',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Foto van 10 cm by 15 cm word verklein op ʼn kaart van 2 cm by 3 cm. Wat is die skaalfaktor (as ʼn breuk) wat vir die verkleining gebruik is?',
      answer: '1/5',
      checkMode: 'auto',
      correctAnswer: '1/5',
      correctAnswers: ['1/5', '1 / 5', '0.2'],
      explanation: '2 ÷ 10 = 1/5.\nKontroleer: 3 ÷ 15 = 1/5 ook.\nAntwoord: 1/5 ✓',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Block 1 — Naming and identifying concepts (0-3, Easy)
        { difficulty: 'Easy', question: 'Watter woord beskryf ʼn beeld wat groter is as die objek?', answer: 'vergroting', checkMode: 'auto', correctAnswer: 'vergroting', correctAnswers: ['vergroting', 'ʼn vergroting'], explanation: 'ʼn Vergroting maak ʼn vorm groter — die skaalfaktor is groter as 1.' },
        { difficulty: 'Easy', question: 'Watter woord beskryf ʼn beeld wat kleiner is as die objek?', answer: 'verkleining', checkMode: 'auto', correctAnswer: 'verkleining', correctAnswers: ['verkleining', 'ʼn verkleining'], explanation: 'ʼn Verkleining maak ʼn vorm kleiner — die skaalfaktor is ʼn breuk tussen 0 en 1.' },
        { difficulty: 'Easy', question: 'Waar of onwaar: In ʼn vergroting of verkleining is die objek en beeld altyd eenvormig (dieselfde vorm).', answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar', 'W'], explanation: 'Waar. Die hoeke verander nooit nie, so die objek en beeld is altyd eenvormig — dieselfde vorm, net ʼn ander grootte.' },
        { difficulty: 'Easy', question: 'Wat noem ons die getal wat gebruik word om ʼn vorm te vergroot of te verklein?', answer: 'skaalfaktor', checkMode: 'auto', correctAnswer: 'skaalfaktor', correctAnswers: ['skaalfaktor', 'die skaalfaktor'], explanation: 'Die skaalfaktor is die getal waarmee elke sylengte vermenigvuldig word.' },

        // Block 2 — Scale factor from side lengths (4-7, Easy-Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek se sy van 4 cm word vergroot sodat die ooreenstemmende sy op die beeld 12 cm is. Vind die skaalfaktor.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '12 ÷ 4 = 3.\nAntwoord: 3 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoek meet 6 cm by 9 cm. Dit word verklein na ʼn eenvormige reghoek wat 2 cm by 3 cm meet. Vind die skaalfaktor van die verkleining, as ʼn breuk.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '1 / 3'], explanation: '2 ÷ 6 = 1/3.\nKontroleer: 3 ÷ 9 = 1/3 ook.\nAntwoord: 1/3 ✓', diagramSvg: '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="67" width="42" height="63" fill="none" stroke="#2563eb" stroke-width="2.5"/><rect x="82" y="109" width="14" height="21" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="41" y="144" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="14" y="98.5" font-size="10" font-weight="700" fill="#2563eb" text-anchor="end">9 cm</text><text x="89" y="144" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">2 cm</text><text x="76" y="119.5" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">3 cm</text><text x="41" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Objek</text><text x="89" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Beeld (verklein)</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vorm se sy van 8 cm word 2 cm op die beeld. Vind die skaalfaktor as ʼn breuk.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '1 / 4'], explanation: '2 ÷ 8 = 1/4.\nAntwoord: 1/4 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê die skaalfaktor van ʼn vergroting vanaf ʼn sy van 5 cm na ʼn beeldsy van 20 cm is 15. Is die leerder korrek? Indien nie, vind die korrekte skaalfaktor.', answer: 'Nee, die korrekte skaalfaktor is 4.', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'Nee, 4', 'Nee, die korrekte skaalfaktor is 4.'], explanation: 'Die skaalfaktor word gevind deur te deel, nie af te trek nie: 20 ÷ 5 = 4, nie 20 − 5 = 15 nie.\nAntwoord: Nee, die korrekte skaalfaktor is 4 ✓' },

        // Block 3 — Enlarging/reducing vertices on a grid (8-11, Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Medium', question: 'Punt A is 3 blokkies regs en 1 blokkie op vanaf die middelpunt van vergroting O. Die vorm word met skaalfaktor 4 vergroot. Vind die posisie van beeldpunt A′.', answer: '12 regs, 4 op', checkMode: 'auto', correctAnswer: '12 regs, 4 op', correctAnswers: ['12 regs, 4 op', '12 regs 4 op', '12, 4', '(12, 4)'], explanation: '3 × 4 = 12 (regs).\n1 × 4 = 4 (op).\nAntwoord: 12 regs, 4 op ✓', diagramSvg: '<svg viewBox="0 0 219.5 103.5" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="43.5" y1="16" x2="43.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="57" y1="16" x2="57" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="70.5" y1="16" x2="70.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="84" y1="16" x2="84" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="97.5" y1="16" x2="97.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="111" y1="16" x2="111" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="124.5" y1="16" x2="124.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="138" y1="16" x2="138" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="151.5" y1="16" x2="151.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="165" y1="16" x2="165" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="178.5" y1="16" x2="178.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="192" y1="16" x2="192" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="205.5" y1="16" x2="205.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="205.5" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="29.5" x2="205.5" y2="29.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="43" x2="205.5" y2="43" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56.5" x2="205.5" y2="56.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="70" x2="205.5" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="83.5" x2="205.5" y2="83.5" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="83.5" x2="205.5" y2="83.5" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="83.5" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="83.5" r="3.6" fill="#7c3aed"/><text x="20" y="95.5" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="70.5" cy="70" r="4" fill="#2563eb"/><text x="79.5" y="64" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text></svg>' },
        { difficulty: 'Medium', question: 'Punt B is 8 blokkies regs en 6 blokkies op vanaf middelpunt van vergroting O. Die vorm word met skaalfaktor 1/2 verklein. Vind die posisie van beeldpunt B′.', answer: '4 regs, 3 op', checkMode: 'auto', correctAnswer: '4 regs, 3 op', correctAnswers: ['4 regs, 3 op', '4 regs 3 op', '4, 3', '(4, 3)'], explanation: '8 × 1/2 = 4 (regs).\n6 × 1/2 = 3 (op).\nAntwoord: 4 regs, 3 op ✓', diagramSvg: '<svg viewBox="0 0 211.4 166.2" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="48.6" y1="16" x2="48.6" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="67.2" y1="16" x2="67.2" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="85.8" y1="16" x2="85.8" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="104.4" y1="16" x2="104.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="123" y1="16" x2="123" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="141.6" y1="16" x2="141.6" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="160.2" y1="16" x2="160.2" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="178.8" y1="16" x2="178.8" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="197.4" y1="16" x2="197.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="197.4" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="34.6" x2="197.4" y2="34.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="53.2" x2="197.4" y2="53.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="71.8" x2="197.4" y2="71.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="90.4" x2="197.4" y2="90.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="109" x2="197.4" y2="109" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="127.6" x2="197.4" y2="127.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146.2" x2="197.4" y2="146.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146.2" x2="197.4" y2="146.2" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146.2" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="146.2" r="3.6" fill="#7c3aed"/><text x="20" y="158.2" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="178.8" cy="34.6" r="4" fill="#2563eb"/><text x="187.8" y="28.6" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'Punt C is 9 blokkies regs en 12 blokkies op vanaf middelpunt van vergroting O. Die vorm word met skaalfaktor 1/3 verklein. Vind die posisie van beeldpunt C′.', answer: '3 regs, 4 op', checkMode: 'auto', correctAnswer: '3 regs, 4 op', correctAnswers: ['3 regs, 4 op', '3 regs 4 op', '3, 4', '(3, 4)'], explanation: '9 × 1/3 = 3 (regs).\n12 × 1/3 = 4 (op).\nAntwoord: 3 regs, 4 op ✓', diagramSvg: '<svg viewBox="0 0 144 166" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="16" x2="40" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="16" x2="50" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="60" y1="16" x2="60" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="70" y1="16" x2="70" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="16" x2="80" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="90" y1="16" x2="90" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="16" x2="100" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="16" x2="110" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="16" x2="120" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="130" y1="16" x2="130" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="130" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="26" x2="130" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="36" x2="130" y2="36" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="46" x2="130" y2="46" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="56" x2="130" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="66" x2="130" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="76" x2="130" y2="76" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="86" x2="130" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="96" x2="130" y2="96" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="106" x2="130" y2="106" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116" x2="130" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="126" x2="130" y2="126" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="136" x2="130" y2="136" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="130" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="130" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="146" r="3.6" fill="#7c3aed"/><text x="20" y="158" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="120" cy="26" r="4" fill="#2563eb"/><text x="129" y="20" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn punt wat 4 blokkies regs en 2 blokkies op vanaf O is, wat met skaalfaktor 5 vergroot word, beweeg na ʼn punt 9 blokkies regs en 7 blokkies op vanaf O (deur 5 by elke getal op te tel). Is die leerder korrek? Indien nie, vind die korrekte posisie.', answer: 'Nee, die korrekte posisie is 20 regs, 10 op.', checkMode: 'auto', correctAnswer: '20 regs, 10 op', correctAnswers: ['20 regs, 10 op', '20 regs 10 op', '20, 10', '(20, 10)', 'Nee, 20 regs, 10 op'], explanation: 'Vergroot beteken om met die skaalfaktor te vermenigvuldig, nie om dit op te tel nie: 4 × 5 = 20 (regs) en 2 × 5 = 10 (op), nie 4 + 5 = 9 en 2 + 5 = 7 nie.\nAntwoord: Nee, die korrekte posisie is 20 regs, 10 op ✓' },

        // Block 4 — Comparing original and image, consistency of scale factor (12-15, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Reghoek het sye van 5 cm en 8 cm. Ná ʼn vergroting het die beeld sye van 15 cm en 24 cm. Vind die skaalfaktor, en kontroleer dat dit dieselfde is vir albei sye.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '15 ÷ 5 = 3.\nKontroleer: 24 ÷ 8 = 3 ook.\nAntwoord: 3 (konsekwent vir albei sye) ✓' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 10 cm, 6 cm en 8 cm. Dit word verklein na ʼn eenvormige driehoek met sye van 5 cm, 3 cm en 4 cm. Vind die skaalfaktor.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '1 / 2', '0.5'], explanation: '5 ÷ 10 = 1/2.\nKontroleer: 3 ÷ 6 = 1/2 en 4 ÷ 8 = 1/2 ook.\nAntwoord: 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vierkant het ʼn sy van 6 cm. Ná ʼn transformasie het die nuwe vierkant ook ʼn sy van 6 cm. Zanele sê dit moet óf ʼn vergroting óf ʼn verkleining wees, want die vorm is getransformeer. Is sy korrek? Verduidelik.', answer: 'Nee — die skaalfaktor is 6 ÷ 6 = 1, wat beteken die beeld is dieselfde grootte as die objek (kongruent). ʼn Vergroting het ʼn skaalfaktor groter as 1 nodig, en ʼn verkleining het ʼn skaalfaktor nodig wat ʼn breuk kleiner as 1 is, so ʼn skaalfaktor van 1 is nie een van die twee nie.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoek van 3 cm by 5 cm word getransformeer na ʼn reghoek van 3 cm by 15 cm. Karabo sê dit is ʼn vergroting met skaalfaktor 3. Is hy korrek? Verduidelik.', answer: 'Nee — 3 ÷ 3 = 1 vir een paar sye, maar 15 ÷ 5 = 3 vir die ander paar. Die sye is nie met dieselfde faktor geskaal nie, so die beeld is nie ʼn eenvormige vorm nie — dit is ʼn vervorming, nie ʼn ware vergroting nie.', checkMode: 'self' },

        // Block 5 — Reasoning, comparisons and word problems (16-19, Hard)
        { difficulty: 'Hard', question: 'Naledi sê ʼn vergrote vorm en sy objek is kongruent, aangesien hulle presies dieselfde lyk. Is sy korrek? Verduidelik.', answer: 'Nee — kongruente vorms is presies dieselfde grootte sowel as dieselfde vorm. ʼn Vergrote beeld is eenvormig aan die objek (dieselfde vorm, met gelyke hoeke) maar ʼn ander grootte, tensy die skaalfaktor toevallig 1 is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn refleksie (wat jy in Graad 5 geleer het) met ʼn vergroting: noem een eienskap wat in albei dieselfde bly, en een eienskap wat verskil.', answer: 'Dieselfde in albei: die hoeke van die vorm verander nooit nie — die beeld het altyd presies dieselfde hoeke as die objek. Verskillend: in ʼn refleksie is die beeld altyd presies dieselfde grootte as die objek (kongruent) en word dit gespieël om die teenoorgestelde kant te wys, terwyl die beeld in ʼn vergroting ʼn ander grootte as die objek is (eenvormig, nie kongruent nie) en nie gespieël word nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Foto van 4 cm by 6 cm word met ʼn skaalfaktor van 5 vergroot om ʼn plakkaat te maak. Vind die afmetings van die plakkaat.', answer: '20 cm by 30 cm', checkMode: 'auto', correctAnswer: '20 cm by 30 cm', correctAnswers: ['20 cm by 30 cm', '20cm by 30cm', '20 en 30', '20, 30'], explanation: '4 × 5 = 20 cm.\n6 × 5 = 30 cm.\nAntwoord: 20 cm by 30 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Tuinplan word met ʼn skaalfaktor van 1/200 geteken. Die werklike tuin is 40 m wyd. Hoe wyd, in sentimeter, is die tuin op die plan?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20 cm', correctAnswers: ['20 cm', '20cm', '20'], explanation: '40 m = 4 000 cm.\n4 000 × 1/200 = 20 cm.\nAntwoord: 20 cm ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vergroting, verkleining en die skaalfaktor onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die skaalfaktorreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Block 1 — Naming and identifying concepts (0-3, Easy)
        { difficulty: 'Easy', question: 'Wat noem ons ʼn beeld wat kleiner is as die objek?', answer: 'verkleining', checkMode: 'auto', correctAnswer: 'verkleining', correctAnswers: ['verkleining', 'ʼn verkleining'], explanation: 'ʼn Verkleining maak ʼn vorm kleiner — die skaalfaktor is ʼn breuk tussen 0 en 1.' },
        { difficulty: 'Easy', question: 'Wat noem ons ʼn beeld wat groter is as die objek?', answer: 'vergroting', checkMode: 'auto', correctAnswer: 'vergroting', correctAnswers: ['vergroting', 'ʼn vergroting'], explanation: 'ʼn Vergroting maak ʼn vorm groter — die skaalfaktor is groter as 1.' },
        { difficulty: 'Easy', question: 'Waar of onwaar: In ʼn vergroting of verkleining het die objek en beeld altyd presies dieselfde hoeke.', answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar', 'W'], explanation: 'Waar. Die hoeke verander nooit — net die sylengtes verander, met die skaalfaktor.' },
        { difficulty: 'Easy', question: 'Wat noem ons die vaste punt waarvandaan ʼn vorm op ʼn rooster vergroot of verklein word?', answer: 'middelpunt van vergroting', checkMode: 'auto', correctAnswer: 'middelpunt van vergroting', correctAnswers: ['middelpunt van vergroting', 'die middelpunt van vergroting'], explanation: 'Die vaste punt waarvandaan alles gemeet word, word die middelpunt van vergroting genoem.' },

        // Block 2 — Scale factor from side lengths (4-7, Easy-Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Easy-Medium', question: 'ʼn Sy van 3 cm word vergroot sodat die ooreenstemmende sy op die beeld 18 cm is. Vind die skaalfaktor.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'x6', '×6'], explanation: '18 ÷ 3 = 6.\nAntwoord: 6 ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoek meet 20 cm by 8 cm. Dit word verklein na ʼn eenvormige reghoek wat 5 cm by 2 cm meet. Vind die skaalfaktor van die verkleining, as ʼn breuk.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '1 / 4'], explanation: '5 ÷ 20 = 1/4.\nKontroleer: 2 ÷ 8 = 1/4 ook.\nAntwoord: 1/4 ✓', diagramSvg: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="78.8" width="128" height="51.2" fill="none" stroke="#2563eb" stroke-width="2.5"/><rect x="168" y="117.2" width="32" height="12.8" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="84" y="144" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">20 cm</text><text x="14" y="104.4" font-size="10" font-weight="700" fill="#2563eb" text-anchor="end">8 cm</text><text x="184" y="144" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">5 cm</text><text x="162" y="123.6" font-size="10" font-weight="700" fill="#dc2626" text-anchor="end">2 cm</text><text x="84" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Objek</text><text x="184" y="160" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Beeld (verklein)</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 5 cm, 7 cm en 9 cm. Dit word met ʼn skaalfaktor van 2 vergroot. Vind die nuwe sylengtes.', answer: '10 cm, 14 cm en 18 cm', checkMode: 'auto', correctAnswer: '10 cm, 14 cm en 18 cm', correctAnswers: ['10 cm, 14 cm en 18 cm', '10, 14, 18', '10cm, 14cm, 18cm'], explanation: '5 × 2 = 10 cm.\n7 × 2 = 14 cm.\n9 × 2 = 18 cm.\nAntwoord: 10 cm, 14 cm en 18 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê die skaalfaktor vanaf ʼn objeksy van 6 cm na ʼn beeldsy van 2 cm is 3. Is die leerder korrek? Indien nie, vind die korrekte skaalfaktor.', answer: 'Nee, die korrekte skaalfaktor is 1/3.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', 'Nee, 1/3', 'Nee, die korrekte skaalfaktor is 1/3.'], explanation: 'Die skaalfaktor is beeld ÷ objek, nie objek ÷ beeld nie: 2 ÷ 6 = 1/3, nie 6 ÷ 2 = 3 nie.\nAntwoord: Nee, die korrekte skaalfaktor is 1/3 ✓' },

        // Block 3 — Enlarging/reducing vertices on a grid (8-11, Medium, DIAGRAM-FLAGGED)
        { difficulty: 'Medium', question: 'Punt A is 4 blokkies regs en 5 blokkies op vanaf middelpunt van vergroting O. Die vorm word met skaalfaktor 2 vergroot. Vind die posisie van beeldpunt A′.', answer: '8 regs, 10 op', checkMode: 'auto', correctAnswer: '8 regs, 10 op', correctAnswers: ['8 regs, 10 op', '8 regs 10 op', '8, 10', '(8, 10)'], explanation: '4 × 2 = 8 (regs).\n5 × 2 = 10 (op).\nAntwoord: 8 regs, 10 op ✓', diagramSvg: '<svg viewBox="0 0 150.2 165.8" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="41.8" y1="16" x2="41.8" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="53.6" y1="16" x2="53.6" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="65.4" y1="16" x2="65.4" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="77.2" y1="16" x2="77.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="89" y1="16" x2="89" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="100.8" y1="16" x2="100.8" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="112.6" y1="16" x2="112.6" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="124.4" y1="16" x2="124.4" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="136.2" y1="16" x2="136.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="136.2" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="27.8" x2="136.2" y2="27.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="39.6" x2="136.2" y2="39.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="51.4" x2="136.2" y2="51.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="63.2" x2="136.2" y2="63.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="75" x2="136.2" y2="75" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="86.8" x2="136.2" y2="86.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="98.6" x2="136.2" y2="98.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="110.4" x2="136.2" y2="110.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="122.2" x2="136.2" y2="122.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="134" x2="136.2" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.8" x2="136.2" y2="145.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.8" x2="136.2" y2="145.8" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="145.8" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="145.8" r="3.6" fill="#7c3aed"/><text x="20" y="157.8" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="77.2" cy="86.8" r="4" fill="#2563eb"/><text x="86.2" y="80.8" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text></svg>' },
        { difficulty: 'Medium', question: 'Punt B is 10 blokkies regs en 8 blokkies op vanaf middelpunt van vergroting O. Die vorm word met skaalfaktor 1/2 verklein. Vind die posisie van beeldpunt B′.', answer: '5 regs, 4 op', checkMode: 'auto', correctAnswer: '5 regs, 4 op', correctAnswers: ['5 regs, 4 op', '5 regs 4 op', '5, 4', '(5, 4)'], explanation: '10 × 1/2 = 5 (regs).\n8 × 1/2 = 4 (op).\nAntwoord: 5 regs, 4 op ✓', diagramSvg: '<svg viewBox="0 0 202.4 165.6" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="16" x2="44.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="58.8" y1="16" x2="58.8" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="73.2" y1="16" x2="73.2" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="87.6" y1="16" x2="87.6" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="102" y1="16" x2="102" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="116.4" y1="16" x2="116.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="130.8" y1="16" x2="130.8" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="145.2" y1="16" x2="145.2" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="16" x2="159.6" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="174" y1="16" x2="174" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="188.4" y1="16" x2="188.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="188.4" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="30.4" x2="188.4" y2="30.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="44.8" x2="188.4" y2="44.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="59.2" x2="188.4" y2="59.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="73.6" x2="188.4" y2="73.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="88" x2="188.4" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="102.4" x2="188.4" y2="102.4" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="116.8" x2="188.4" y2="116.8" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="131.2" x2="188.4" y2="131.2" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.6" x2="188.4" y2="145.6" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="145.6" x2="188.4" y2="145.6" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="145.6" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="145.6" r="3.6" fill="#7c3aed"/><text x="20" y="157.6" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="174" cy="30.4" r="4" fill="#2563eb"/><text x="183" y="24.4" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'Punt C is 12 blokkies regs en 9 blokkies op vanaf middelpunt van vergroting O. Die vorm word met skaalfaktor 1/3 verklein. Vind die posisie van beeldpunt C′.', answer: '4 regs, 3 op', checkMode: 'auto', correctAnswer: '4 regs, 3 op', correctAnswers: ['4 regs, 3 op', '4 regs 3 op', '4, 3', '(4, 3)'], explanation: '12 × 1/3 = 4 (regs).\n9 × 1/3 = 3 (op).\nAntwoord: 4 regs, 3 op ✓', diagramSvg: '<svg viewBox="0 0 213 166" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="16" x2="30" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="43" y1="16" x2="43" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="56" y1="16" x2="56" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="69" y1="16" x2="69" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="82" y1="16" x2="82" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="95" y1="16" x2="95" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="108" y1="16" x2="108" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="121" y1="16" x2="121" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="16" x2="134" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="147" y1="16" x2="147" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="160" y1="16" x2="160" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="173" y1="16" x2="173" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="186" y1="16" x2="186" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="199" y1="16" x2="199" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="16" x2="199" y2="16" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="29" x2="199" y2="29" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="42" x2="199" y2="42" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="55" x2="199" y2="55" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="68" x2="199" y2="68" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="81" x2="199" y2="81" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="94" x2="199" y2="94" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="107" x2="199" y2="107" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="120" x2="199" y2="120" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="133" x2="199" y2="133" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="199" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="146" x2="199" y2="146" stroke="#9ca3af" stroke-width="1.3"/><line x1="30" y1="16" x2="30" y2="146" stroke="#9ca3af" stroke-width="1.3"/><circle cx="30" cy="146" r="3.6" fill="#7c3aed"/><text x="20" y="158" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">O</text><circle cx="186" cy="29" r="4" fill="#2563eb"/><text x="195" y="23" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leerder verklein ʼn punt wat 6 blokkies regs en 4 blokkies op vanaf O is, met skaalfaktor 1/2, en vind korrek die beeld by 3 blokkies regs en 2 blokkies op. Maar die leerder noem hierdie transformasie dan ʼn vergroting. Is die leerder korrek oor die tipe transformasie? Verduidelik.', answer: 'Nee — die posisie is korrek gevind, maar ʼn skaalfaktor van 1/2 is ʼn breuk kleiner as 1, wat die beeld altyd kleiner maak. Dit is ʼn verkleining, nie ʼn vergroting nie.', checkMode: 'self' },

        // Block 4 — Comparing original and image, consistency of scale factor (12-15, Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Reghoek het sye van 4 cm en 10 cm. Ná ʼn vergroting het die beeld sye van 12 cm en 30 cm. Vind die skaalfaktor, en kontroleer dat dit dieselfde is vir albei sye.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'x3', '×3'], explanation: '12 ÷ 4 = 3.\nKontroleer: 30 ÷ 10 = 3 ook.\nAntwoord: 3 (konsekwent vir albei sye) ✓' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 12 cm, 9 cm en 15 cm. Dit word verklein na ʼn eenvormige driehoek met sye van 4 cm, 3 cm en 5 cm. Vind die skaalfaktor.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '1 / 3'], explanation: '4 ÷ 12 = 1/3.\nKontroleer: 3 ÷ 9 = 1/3 en 5 ÷ 15 = 1/3 ook.\nAntwoord: 1/3 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoek wat 2 cm by 4 cm meet, word getransformeer na ʼn reghoek wat ook 2 cm by 4 cm meet. Sipho noem dit ʼn vergroting. Is hy korrek? Verduidelik.', answer: 'Nee — die skaalfaktor is 2 ÷ 2 = 1 (en 4 ÷ 4 = 1), wat beteken die beeld is dieselfde grootte as die objek (kongruent). ʼn Vergroting het ʼn skaalfaktor groter as 1 nodig.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vierkant het ʼn sy van 5 cm. Dit word getransformeer na ʼn reghoek wat 10 cm by 15 cm meet. Thandiwe sê dit is ʼn geldige vergroting met skaalfaktor 2. Is sy korrek? Verduidelik.', answer: 'Nee — ʼn vierkant het alle sye gelyk (5 cm), so ʼn ware vergroting met skaalfaktor 2 moet ʼn ander vierkant met sye van 10 cm gee. Aangesien die beeld ʼn reghoek van 10 cm by 15 cm is (nie ʼn vierkant nie), is die sye nie met dieselfde faktor geskaal nie, so dit is nie ʼn geldige vergroting nie.', checkMode: 'self' },

        // Block 5 — Reasoning, comparisons and word problems (16-19, Hard)
        { difficulty: 'Hard', question: 'Thabo sê ʼn verkleining kan nooit ʼn skaalfaktor groter as 1 hê nie. Is hy korrek? Verduidelik.', answer: 'Ja — per definisie het ʼn verkleining ʼn skaalfaktor wat ʼn breuk tussen 0 en 1 is. ʼn Skaalfaktor groter as 1 sou die beeld groter as die objek maak, wat ʼn vergroting is, nie ʼn verkleining nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn rotasie (wat jy in Graad 5 geleer het) met ʼn vergroting: noem een eienskap wat in albei dieselfde bly, en een eienskap wat verskil.', answer: 'Dieselfde in albei: die hoeke van die vorm verander nooit nie — die beeld het altyd presies dieselfde hoeke as die objek. Verskillend: in ʼn rotasie is die beeld altyd presies dieselfde grootte as die objek (kongruent), net die posisie en oriëntasie verander, terwyl die beeld in ʼn vergroting ʼn ander grootte as die objek is (eenvormig, nie kongruent nie).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Model-motor word gebou met ʼn skaalfaktor van 1/18 in vergelyking met die werklike motor. As die werklike motor 4,5 m lank is, hoe lank, in sentimeter, is die model?', answer: '25 cm', checkMode: 'auto', correctAnswer: '25 cm', correctAnswers: ['25 cm', '25cm', '25'], explanation: '4,5 m = 450 cm.\n450 × 1/18 = 25 cm.\nAntwoord: 25 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Bloudruk gebruik ʼn skaalfaktor van 1/50. ʼn Muur op die bloudruk meet 6 cm. Vind die werklike lengte van die muur, in meter.', answer: '3 m', checkMode: 'auto', correctAnswer: '3 m', correctAnswers: ['3 m', '3m', '3'], explanation: '6 cm ÷ 1/50 = 6 × 50 = 300 cm.\n300 cm = 3 m.\nAntwoord: 3 m ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het ʼn sterk, volledige begrip van vergroting en verkleining.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die skaalfaktorreëls en die roostermetode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ] satisfies PracticeSet[],

  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het vergroting en verkleining onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },
}
