import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (prime factorisation roles) ───────────────────────────────
// prime numbers         → green   (#16a34a)
// composite (splitting) → blue    (#2563eb)
// exponents             → orange  (#ea580c)
// final factorisation   → red     (#dc2626)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eienskappe van Getalle',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — FAKTORBOME EN PRIEMFAKTORISERING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factor-trees-prime-factorisation',
      title: 'Faktorbome en Priemfaktorisering',
      icon: '🌳',
      explanation:
        `<p style="margin-bottom:16px;">Elke <strong>saamgestelde getal</strong> kan opgebreek word in <strong>priemfaktore</strong>. ʼn <strong>Faktorboom</strong> is ʼn diagram wat ons gebruik om priemfaktore stap vir stap te vind. Begin met die getal en verdeel dit in enige twee faktore. Hou aan om elke faktor te verdeel totdat al die takke eindig in priemgetalle. Die priemgetalle aan die punte van al die takke is die priemfaktore. Ons skryf die finale antwoord met vermenigvuldiging — dit word <strong>priemfaktorisering</strong> genoem. Ons kan ook herhaalde priemfaktore skryf met <strong>eksponente</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('priemgetalle')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('saamgestelde getalle wat verdeel word')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponente')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('finale faktorisering')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Priemgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met presies twee faktore: 1 en homself. Voorbeelde: 2, 3, 5, 7, 11, 13.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Saamgestelde getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met meer as twee faktore — dit kan in kleiner faktore verdeel word. Voorbeelde: 4, 6, 9, 12.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Eksponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verkorte manier om herhaalde vermenigvuldiging te skryf. 2³ beteken 2 × 2 × 2. Die klein verhoogde getal is die eksponent.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Priemfaktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om ʼn getal te skryf as die produk van sy priemfaktore. Elke saamgestelde getal het presies een priemfaktorisering.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps for building a factor tree ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn faktorboom te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('saamgestelde getal')} bo-aan die boom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Verdeel dit in enige twee faktore (nie 1 en homself nie). Teken twee takke en skryf ʼn faktor aan die punt van elke tak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">As ʼn tak eindig in ʼn ${bl('saamgestelde getal')}, hou aan om dit te verdeel. As ʼn tak eindig in ʼn ${gr('priemgetal')}, omkring dit — daardie tak is klaar.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Versamel al die ${gr('omkringde priemgetalle')} van elke tak. Dit is die priemfaktore.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${re('priemfaktorisering')}: lys die priemfaktore van kleinste na grootste met × tekens. Skryf herhaalde faktore met ${or('eksponente')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Enige beginverdeling gee dieselfde antwoord</p>` +
        `<p style="margin:0;color:#14532d;">Dit maak nie saak watter twee faktore jy eerste kies nie — jy sal altyd by dieselfde ${re('priemfaktorisering')} uitkom. Byvoorbeeld, om ${bl('36')} te verdeel as 4 × 9 of as 6 × 6 gee albei ${re('36 = 2² × 3²')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 36 ───────────────────────────────────────────────────
        {
          question: 'Gebruik ʼn faktorboom om die priemfaktore van 36 te vind.',
          answer: `${re('36 = 2 × 2 × 3 × 3 = 2')}${or('²')} ${re('× 3')}${or('²')}`,
          steps: [
            `Verdeel ${bl('36')} in ${bl('4')} × ${bl('9')}.`,
            `Verdeel ${bl('4')} in ${gr('2')} × ${gr('2')} — albei priem.`,
            `Verdeel ${bl('9')} in ${gr('3')} × ${gr('3')} — albei priem.`,
            `Priemfaktore is ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('3')}.`,
            `${re('Priemfaktorisering:')} ${re('36')} = ${re('2 × 2 × 3 × 3')} = ${re('2')}${or('²')} × ${re('3')}${or('²')} ✓`,
          ],
        },

        // ── Example 2: 120 ──────────────────────────────────────────────────
        {
          question: 'Gebruik ʼn faktorboom om die priemfaktore van 120 te vind.',
          answer: `${re('120 = 2')}${or('³')} ${re('× 3 × 5')}`,
          steps: [
            `Verdeel ${bl('120')} in ${bl('12')} × ${bl('10')}.`,
            `Verdeel ${bl('12')} in ${bl('4')} × ${gr('3')} — verdeel ${bl('4')} in ${gr('2')} × ${gr('2')}.`,
            `Verdeel ${bl('10')} in ${gr('2')} × ${gr('5')} — albei priem.`,
            `Priemfaktore: ${gr('2')}, ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('5')}.`,
            `${re('Priemfaktorisering:')} ${re('120')} = ${re('2 × 2 × 2 × 3 × 5')} = ${re('2')}${or('³')} × ${re('3')} × ${re('5')} ✓`,
          ],
        },

        // ── Example 3: 252 ──────────────────────────────────────────────────
        {
          question: 'Skryf 252 as ʼn produk van sy priemfaktore met eksponente.',
          answer: `${re('252 = 2')}${or('²')} ${re('× 3')}${or('²')} ${re('× 7')}`,
          steps: [
            `Verdeel ${bl('252')} in ${gr('2')} × ${bl('126')} — 2 is priem. Gaan voort met ${bl('126')}.`,
            `Verdeel ${bl('126')} in ${gr('2')} × ${bl('63')} — 2 is priem. Gaan voort met ${bl('63')}.`,
            `Verdeel ${bl('63')} in ${gr('7')} × ${bl('9')} — 7 is priem. Gaan voort met ${bl('9')}.`,
            `Verdeel ${bl('9')} in ${gr('3')} × ${gr('3')} — albei priem.`,
            `Priemfaktore: ${gr('2')}, ${gr('2')}, ${gr('3')}, ${gr('3')}, ${gr('7')}.`,
            `${re('Priemfaktorisering:')} ${re('252')} = ${re('2 × 2 × 3 × 3 × 7')} = ${re('2')}${or('²')} × ${re('3')}${or('²')} × ${re('7')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — product of prime factors ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 24 as ʼn produk van sy priemfaktore.',
          answer: '2 x 2 x 2 x 3',
          checkMode: 'auto',
          correctAnswer: '2 x 2 x 2 x 3',
          correctAnswers: ['2 x 2 x 2 x 3', '2 × 2 × 2 × 3', '2x2x2x3'],
          explanation: 'Faktorboom: 24 → 2 × 12 → 2 × 2 × 6 → 2 × 2 × 2 × 3\nAlle priemfaktore: 2, 2, 2, 3\nPriemfaktorisering: 24 = 2 × 2 × 2 × 3 ✓',
        },

        // ── Q2 Easy — prime factorisation with exponents ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 45 as ʼn produk van sy priemfaktore met eksponente.',
          answer: '3² x 5',
          checkMode: 'auto',
          correctAnswer: '3² x 5',
          correctAnswers: ['3² x 5', '3^2 x 5', '3² × 5', '3^2 × 5'],
          explanation: 'Faktorboom: 45 → 9 × 5 → 3 × 3 × 5\nPriemfaktore: 3, 3, 5\n3 verskyn twee keer → 3²\nPriemfaktorisering: 45 = 3² × 5 ✓',
        },

        // ── Q3 Medium — factor tree for 84 ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik ʼn faktorboom om die priemfaktorisering van 84 te vind.',
          answer: '2² x 3 x 7',
          checkMode: 'auto',
          correctAnswer: '2² x 3 x 7',
          correctAnswers: ['2² x 3 x 7', '2^2 x 3 x 7', '2² × 3 × 7', '2^2 × 3 × 7'],
          explanation: 'Faktorboom: 84 → 4 × 21 → 2 × 2 × 3 × 7\nPriemfaktore: 2, 2, 3, 7\n2 verskyn twee keer → 2²\nPriemfaktorisering: 84 = 2² × 3 × 7 ✓',
        },

        // ── Q4 Medium — prime factorisation of 180 ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skryf 180 as ʼn produk van sy priemfaktore met eksponente.',
          answer: '2² x 3² x 5',
          checkMode: 'auto',
          correctAnswer: '2² x 3² x 5',
          correctAnswers: ['2² x 3² x 5', '2^2 x 3^2 x 5', '2² × 3² × 5', '2^2 × 3^2 × 5'],
          explanation: 'Faktorboom: 180 → 4 × 45 → 2 × 2 × 9 × 5 → 2 × 2 × 3 × 3 × 5\nPriemfaktore: 2, 2, 3, 3, 5\n2 verskyn twee keer → 2², 3 verskyn twee keer → 3²\nPriemfaktorisering: 180 = 2² × 3² × 5 ✓',
        },

        // ── Q5 Hard — error spotting with explanation ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die priemfaktorisering van 60 is 2 × 3 × 5. Is hy korrek? Verduidelik.',
          answer: 'Nee — 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Hy het een faktor van 2 gemis.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Faktorboomdiagramme vir 36, 120 en 252 met saamgestelde getalle in blou, priemgetalle omkring in groen, eksponente in oranje, en die finale priemfaktorisering in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn faktorboom te teken en die priemfaktorisering van ʼn saamgestelde getal te skryf met eksponente vir herhaalde faktore" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — GROOTSTE GEMENE FAKTOR
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'highest-common-factor',
      title: 'Grootste Gemene Faktor',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>Grootste Gemene Faktor (GGF)</strong> van twee of meer getalle is die grootste getal wat presies in almal van hulle deel. Ons kan die GGF vind deur <strong>al die faktore</strong> van elke getal te lys en die grootste een te vind wat hulle deel. Ons kan ook <strong>priemfaktorisering</strong> gebruik om die GGF te vind — skryf elke getal as ʼn produk van priemfaktore, identifiseer die priemfaktore wat hulle deel en vermenigvuldig daardie gedeelde faktore saam. Die GGF is nuttig wanneer breuke vereenvoudig word en wanneer dinge gelyk verdeel word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('faktore')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gemene faktore')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGF')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gedeelde priemfaktore')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Faktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal wat presies in ʼn ander getal deel sonder ʼn res. Voorbeeld: die faktore van 12 is 1, 2, 3, 4, 6, 12.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gemene faktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Faktor wat deur twee of meer getalle gedeel word. Voorbeeld: 4 is ʼn gemene faktor van 8 en 12.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Grootste Gemene Faktor (GGF)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste faktor wat twee of meer getalle deel. Word ook die Hoogste Gemene Faktor (HGF) genoem.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Gedeelde priemfaktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Priemfaktor wat in die priemfaktorisering van twee of meer getalle verskyn. Word gebruik om die GGF deur priemfaktorisering te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 1: Listing factors ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 1: Lys faktore</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Lys al die ${bl('faktore')} van elke getal in volgorde van kleinste na grootste.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die ${gr('gemene faktore')} — getalle wat in albei lyste voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die grootste van die ${gr('gemene faktore')} is die ${or('GGF')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 2: Prime factorisation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 2: Priemfaktorisering</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elke getal as ʼn produk van sy priem${bl('faktore')} deur ʼn faktorboom te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die ${re('gedeelde priemfaktore')} — priemfaktore wat in albei faktoriserings voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Neem vir elke ${re('gedeelde priemfaktor')} die <strong>laagste mag</strong> wat in enige van die faktoriserings voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Vermenigvuldig daardie laagste magte saam — die resultaat is die ${or('GGF')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Wanneer om elke metode te gebruik</p>` +
        `<p style="margin:0;color:#7c2d12;">Gebruik <strong>lys faktore</strong> vir kleiner getalle — dit is eenvoudig en maklik om na te gaan. Gebruik <strong>priemfaktorisering</strong> vir groter getalle waar dit lank sou neem om al die faktore te lys. Albei metodes gee altyd dieselfde ${or('GGF')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: HCF of 48 and 60 by listing factors ──────────────────
        {
          question: 'Vind die GGF van 48 en 60 deur faktore te lys.',
          answer: `${or('GGF')} = ${or('12')}`,
          steps: [
            `Lys die ${bl('faktore')} van ${bl('48')}: ${bl('1, 2, 3, 4, 6, 8, 12, 16, 24, 48')}.`,
            `Lys die ${bl('faktore')} van ${bl('60')}: ${bl('1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60')}.`,
            `Identifiseer die ${gr('gemene faktore')} — getalle wat in albei lyste voorkom: ${gr('1, 2, 3, 4, 6, 12')}.`,
            `Die grootste ${gr('gemene faktor')} is die ${or('GGF')}: ${or('GGF = 12')} ✓`,
          ],
        },

        // ── Example 5: HCF of 72 and 90 using prime factorisation ───────────
        {
          question: 'Vind die GGF van 72 en 90 deur priemfaktorisering te gebruik.',
          answer: `${or('GGF')} = ${or('18')}`,
          steps: [
            `Skryf ${bl('72')} as ʼn produk van priem${bl('faktore')}: ${bl('72')} = ${re('2³ × 3²')}.`,
            `Skryf ${bl('90')} as ʼn produk van priem${bl('faktore')}: ${bl('90')} = ${re('2 × 3² × 5')}.`,
            `Identifiseer die ${re('gedeelde priemfaktore')}: ${re('2')} kom in albei voor — neem die laagste mag: ${re('2¹')}. ${re('3')} kom in albei voor — neem die laagste mag: ${re('3²')}.`,
            `${or('GGF')} = ${re('2')} × ${re('3²')} = ${re('2')} × ${re('9')} = ${or('18')} ✓`,
          ],
        },

        // ── Example 6: Lerato bracelets word problem ─────────────────────────
        {
          question: 'Lerato het 48 rooi krale en 60 blou krale. Sy wil identiese armbande maak met al die krale sonder dat enige krale oorbly. Wat is die maksimum aantal armbande wat sy kan maak?',
          answer: `Lerato kan ${or('12')} armbande maak — elk met ${bl('4')} rooi krale en ${bl('5')} blou krale`,
          steps: [
            `Om identiese armbande te maak met al die krale sonder dat enige oorbly, vind die ${or('GGF')} van ${bl('48')} en ${bl('60')}.`,
            `${bl('Faktore')} van ${bl('48')}: ${bl('1, 2, 3, 4, 6, 8, 12, 16, 24, 48')}.`,
            `${bl('Faktore')} van ${bl('60')}: ${bl('1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60')}.`,
            `${gr('Gemene faktore')}: ${gr('1, 2, 3, 4, 6, 12')}. Die ${or('GGF')} = ${or('12')}.`,
            `Sy kan ${or('12')} armbande maak — elke armband kry ${bl('48')} ÷ ${or('12')} = ${bl('4')} rooi krale en ${bl('60')} ÷ ${or('12')} = ${bl('5')} blou krale ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — HCF by listing factors ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die GGF van 12 en 18.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Faktore van 12: 1, 2, 3, 4, 6, 12\nFaktore van 18: 1, 2, 3, 6, 9, 18\nGemene faktore: 1, 2, 3, 6\nGrootste gemene faktor: GGF = 6 ✓',
        },

        // ── Q7 Medium — HCF using prime factorisation ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die GGF van 48 en 72 deur priemfaktorisering te gebruik.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: '48 = 2⁴ × 3\n72 = 2³ × 3²\nGedeelde priemfaktore: 2 (laagste mag 2³) en 3 (laagste mag 3¹)\nGGF = 2³ × 3 = 8 × 3 = 24 ✓',
        },

        // ── Q8 Hard — fruit bags word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het 60 appels en 84 lemoene. Sy wil identiese vrugtesakke maak met al die vrugte sonder dat enige oorbly. Wat is die maksimum aantal sakke wat sy kan maak en hoeveel van elke vrug sal in elke sak wees?',
          answer: 'GGF van 60 en 84 = 12. Sy kan 12 sakke maak, elk met 5 appels en 7 lemoene.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Faktorlyste vir 48 en 60 met faktore in blou, gemene faktore uitgelig in groen, en die GGF omkring in oranje; langs ʼn priemfaktoriseringsdiagram vir 72 en 90 met gedeelde priemfaktore in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die Grootste Gemene Faktor te vind deur faktore te lys en deur priemfaktorisering te gebruik, met kleur-gekodeerde faktore, gemene faktore, en GGF" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — KLEINSTE GEMENE VEELVOUD
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lowest-common-multiple',
      title: 'Kleinste Gemene Veelvoud',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>Kleinste Gemene Veelvoud (KGV)</strong> van twee of meer getalle is die kleinste getal wat ʼn veelvoud van almal van hulle is. Ons kan die KGV vind deur <strong>veelvoude te lys</strong> van elke getal totdat ons die kleinste een vind wat hulle deel. Ons kan ook <strong>priemfaktorisering</strong> gebruik — skryf elke getal as ʼn produk van priemfaktore, neem al die priemfaktore wat in enige van die getalle voorkom met die hoogste mag, en vermenigvuldig hulle saam. Die KGV is nuttig wanneer breuke met verskillende noemers bygetel word en wanneer tydsberekeningsprobleme opgelos word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veelvoude')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gedeelde veelvoude')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('KGV')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoogste priemmagte')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Veelvoud</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal wat jy kry wanneer jy ʼn gegewe getal met 1, 2, 3, 4, ensovoorts vermenigvuldig. Voorbeeld: veelvoude van 6 is 6, 12, 18, 24, …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gemene veelvoud</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Veelvoud wat deur twee of meer getalle gedeel word. Voorbeeld: 24 is ʼn gemene veelvoud van 6 en 8.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kleinste Gemene Veelvoud (KGV)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste veelvoud wat twee of meer getalle deel.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hoogste priemmag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer priemfaktorisering gebruik word om die KGV te vind, neem elke priemfaktor met die hoogste eksponent waarmee dit in enige van die getalle voorkom.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 1: Listing multiples ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 1: Lys veelvoude</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Lys die ${bl('veelvoude')} van elke getal in volgorde totdat jy een vind wat hulle deel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die ${gr('gedeelde veelvoude')} — getalle wat in al die lyste voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die kleinste van die ${gr('gedeelde veelvoude')} is die ${or('KGV')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method 2: Prime factorisation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 2: Priemfaktorisering</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elke getal as ʼn produk van sy priemfaktore deur ʼn faktorboom te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer al die priemfaktore wat in enige van die faktoriserings voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Neem vir elke priemfaktor die ${re('hoogste mag')} waarmee dit in enige van die getalle voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Vermenigvuldig daardie ${re('hoogste magte')} saam — die resultaat is die ${or('KGV')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Wanneer om elke metode te gebruik</p>` +
        `<p style="margin:0;color:#7c2d12;">Gebruik <strong>lys veelvoude</strong> vir kleiner getalle — dit is vinnig en maklik om na te gaan. Gebruik <strong>priemfaktorisering</strong> vir groter getalle waar dit lank sou neem om veelvoude te lys. Albei metodes gee altyd dieselfde ${or('KGV')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: LCM of 8 and 12 by listing multiples ─────────────────
        {
          question: 'Vind die KGV van 8 en 12 deur veelvoude te lys.',
          answer: `${or('KGV')} = ${or('24')}`,
          steps: [
            `Lys die ${bl('veelvoude')} van ${bl('8')}: ${bl('8, 16, 24, 32, 40')}.`,
            `Lys die ${bl('veelvoude')} van ${bl('12')}: ${bl('12, 24, 36, 48')}.`,
            `Identifiseer die ${gr('gedeelde veelvoude')} — getalle wat in albei lyste voorkom: ${gr('24')}.`,
            `Die kleinste ${gr('gedeelde veelvoud')} is die ${or('KGV')}: ${or('KGV = 24')} ✓`,
          ],
        },

        // ── Example 8: LCM of 12 and 18 using prime factorisation ───────────
        {
          question: 'Vind die KGV van 12 en 18 deur priemfaktorisering te gebruik.',
          answer: `${or('KGV')} = ${or('36')}`,
          steps: [
            `Skryf ${bl('12')} as ʼn produk van priemfaktore: ${bl('12')} = ${re('2² × 3')}.`,
            `Skryf ${bl('18')} as ʼn produk van priemfaktore: ${bl('18')} = ${re('2 × 3²')}.`,
            `Neem al die priemfaktore met die ${re('hoogste mag')}: ${re('2')} kom voor met hoogste mag ${re('2²')}. ${re('3')} kom voor met hoogste mag ${re('3²')}.`,
            `${or('KGV')} = ${re('2²')} × ${re('3²')} = ${re('4')} × ${re('9')} = ${or('36')} ✓`,
          ],
        },

        // ── Example 9: Sipho and Amahle library word problem ─────────────────
        {
          question: 'Sipho gaan elke 6 dae na die biblioteek. Amahle gaan elke 8 dae. Hulle gaan albei vandag. Na hoeveel dae sal hulle weer op dieselfde dag gaan?',
          answer: `Hulle sal weer op dieselfde dag gaan na ${or('24')} dae`,
          steps: [
            `Vind die ${or('KGV')} van ${bl('6')} en ${bl('8')}.`,
            `Lys die ${bl('veelvoude')} van ${bl('6')}: ${bl('6, 12, 18, 24')}.`,
            `Lys die ${bl('veelvoude')} van ${bl('8')}: ${bl('8, 16, 24')}.`,
            `Die kleinste ${gr('gedeelde veelvoud')} is ${gr('24')}: ${or('KGV = 24')}.`,
            `<strong>Antwoord:</strong> Hulle sal weer op dieselfde dag gaan na ${or('24')} dae ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — LCM by listing multiples ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die KGV van 6 en 9.',
          answer: '18',
          checkMode: 'auto',
          correctAnswer: '18',
          explanation: 'Veelvoude van 6: 6, 12, 18, 24\nVeelvoude van 9: 9, 18, 27\nKleinste gedeelde veelvoud: 18\nKGV = 18 ✓',
        },

        // ── Q10 Medium — LCM using prime factorisation ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die KGV van 15 en 20 deur priemfaktorisering te gebruik.',
          answer: '60',
          checkMode: 'auto',
          correctAnswer: '60',
          explanation: '15 = 3 × 5\n20 = 2² × 5\nAl die priemfaktore met hoogste magte: 2² × 3 × 5 = 4 × 3 × 5 = 60\nKGV = 60 ✓',
        },

        // ── Q11 Hard — bus timing word problem ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee busse vertrek gelyktydig van die stasie. Bus A vertrek elke 12 minute en Bus B vertrek elke 18 minute. Na hoeveel minute sal hulle weer gelyktydig vertrek?',
          answer: '36',
          checkMode: 'auto',
          correctAnswer: '36',
          explanation: 'Vind die KGV van 12 en 18.\n12 = 2² × 3\n18 = 2 × 3²\nAl die priemfaktore met hoogste magte: 2² × 3² = 4 × 9 = 36\nKGV = 36 minute ✓',
        },

        // ── Q12 Hard — HCF and LCM of 36 and 48 ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die GGF en KGV van 36 en 48.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) GGF van 36 en 48',
              correctAnswer: '12',
              explanation: '36 = 2² × 3²\n48 = 2⁴ × 3\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3¹)\nGGF = 2² × 3 = 4 × 3 = 12 ✓',
            },
            {
              label: 'b) KGV van 36 en 48',
              correctAnswer: '144',
              explanation: '36 = 2² × 3²\n48 = 2⁴ × 3\nAl die priemfaktore met hoogste magte: 2⁴ × 3² = 16 × 9 = 144\nKGV = 144 ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Veelvoudlyste vir 8 en 12 met veelvoude in blou, gedeelde veelvoude uitgelig in groen, en die KGV omkring in oranje; langs ʼn priemfaktoriseringsdiagram vir 12 en 18 met hoogste priemmagte in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die Kleinste Gemene Veelvoud te vind deur veelvoude te lys en deur priemfaktorisering te gebruik, met kleur-gekodeerde veelvoude, gedeelde veelvoude, KGV, en hoogste priemmagte" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het eienskappe van getalle bemeester.' },
      { minScore: 9, message: 'Goeie werk! Jy het ʼn sterk begrip van eienskappe van getalle.' },
      { minScore: 6, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het ʼn stewige begrip van priemfaktorisering, GGF en KGV. Hou so aan!' },
    { minScore: 15, message: 'Goeie werk! Jy verstaan eienskappe van getalle goed — hersien enige gemiste vrae en probeer weer.' },
    { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor priemfaktorisering, GGF en KGV weer deur, en probeer hierdie stel weer.' },
    { minScore: 0, message: 'Hou aan — elke wiskundige het iewers begin! Werk weer deur die studiegids en probeer hierdie stel weer.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Priem vs saamgesteld & basiese priemfaktorisering | 4-7
    // Priemfaktorisering met eksponente | 8-11 GGF | 12-15 KGV | 16-19
    // Integrasie van GGF, KGV & priemfaktorisering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Is 23 ʼn priemgetal of ʼn saamgestelde getal? Gee ʼn kort rede.', answer: 'Priem — sy enigste faktore is 1 en 23, so dit kan nie in kleiner faktore verdeel word nie.', checkMode: 'self', explanation: '23 kan nie presies deur 2, 3, 4 of 5 gedeel word nie, en om tot by die vierkantswortel (ongeveer 4,8) te toets is genoeg. Sy enigste faktore is 1 en 23, dus is dit priem.' },
        { difficulty: 'Easy', question: 'Lys al die faktore van 42.', answer: '1, 2, 3, 6, 7, 14, 21, 42', checkMode: 'auto', correctAnswer: '1, 2, 3, 6, 7, 14, 21, 42', correctAnswers: ['1, 2, 3, 6, 7, 14, 21, 42', '1,2,3,6,7,14,21,42'], explanation: 'Toets elke heelgetal van 1 af: 42 ÷ 1 = 42, ÷2 = 21, ÷3 = 14, ÷6 = 7, ÷7 = 6 (herhaal).\nFaktore van 42: 1, 2, 3, 6, 7, 14, 21, 42 ✓' },
        { difficulty: 'Easy', question: 'ʼn Faktorboom vir 40 begin deur dit in 4 × 10 te verdeel. Voltooi die boom deur elkeen daarvan in priemfaktore te verdeel, en gee dan die volledige lys priemfaktore.', answer: '2, 2, 2, 5', checkMode: 'auto', correctAnswer: '2, 2, 2, 5', correctAnswers: ['2, 2, 2, 5', '2,2,2,5', '2 2 2 5'], explanation: 'Verdeel 4 in 2 × 2 (albei priem). Verdeel 10 in 2 × 5 (albei priem).\nPriemfaktore van 40: 2, 2, 2, 5 ✓' },
        { difficulty: 'Easy', question: 'Karabo sê 21 is ʼn priemgetal omdat dit ʼn onewe getal is. Is sy korrek? Verduidelik met behulp van sy faktore.', answer: 'Nee — 21 is saamgesteld. Sy faktore is 1, 3, 7 en 21, so dit het meer as net 1 en homself as faktore. Om onewe te wees maak ʼn getal nie priem nie.', checkMode: 'self', explanation: '21 = 3 × 7, dus het 21 vier faktore: 1, 3, 7, 21. ʼn Priemgetal moet presies twee faktore hê. Aangesien 21 meer as twee het, is dit saamgesteld, nie priem nie — Karabo is verkeerd.' },
        { difficulty: 'Easy-Medium', question: 'Gebruik ʼn faktorboom om die priemfaktorisering van 40 te vind, en skryf jou antwoord met eksponente.', answer: '2³ x 5', checkMode: 'auto', correctAnswer: '2³ x 5', correctAnswers: ['2³ x 5', '2^3 x 5', '2³ × 5', '2^3 × 5'], explanation: 'Faktorboom: 40 → 4 × 10 → 2 × 2 × 2 × 5\nPriemfaktore: 2, 2, 2, 5\n2 verskyn drie keer → 2³\nPriemfaktorisering: 40 = 2³ × 5 ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken 2³ × 5² as ʼn heelgetal.', answer: '200', checkMode: 'auto', correctAnswer: '200', explanation: '2³ = 2 × 2 × 2 = 8\n5² = 5 × 5 = 25\n8 × 25 = 200 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder teken ʼn faktorboom vir 72: 72 → 8 × 9 → 2 × 2 × 2 × 3 × 3, en skryf toe die antwoord as 2³ × 3³. Vind die fout en gee die korrekte priemfaktorisering.', answer: '2³ x 3²', checkMode: 'auto', correctAnswer: '2³ x 3²', correctAnswers: ['2³ x 3²', '2^3 x 3^2', '2³ × 3²', '2^3 × 3^2'], explanation: 'Die faktorboom self is korrek: 2, 2, 2, 3, 3 is die priemfaktore. Maar 3 verskyn net TWEE keer, nie drie keer nie, dus moet die eksponent op 3 3² wees, nie 3³ nie.\nKorrekte priemfaktorisering: 72 = 2³ × 3² ✓ (die leerder het die eksponent verkeerd getel)' },
        { difficulty: 'Medium', question: 'Thabo verdeel 60 eers as 6 × 10, terwyl Ayesha 60 eers as 4 × 15 verdeel. Wys dat albei beginverdelings tot dieselfde priemfaktorisering lei.', answer: '2² x 3 x 5', checkMode: 'auto', correctAnswer: '2² x 3 x 5', correctAnswers: ['2² x 3 x 5', '2^2 x 3 x 5', '2² × 3 × 5', '2^2 × 3 × 5'], explanation: "Thabo: 60 → 6 × 10 → (2 × 3) × (2 × 5) = 2 × 2 × 3 × 5\nAyesha: 60 → 4 × 15 → (2 × 2) × (3 × 5) = 2 × 2 × 3 × 5\nAlbei gee dieselfde priemfaktore: 2, 2, 3, 5\nPriemfaktorisering: 60 = 2² × 3 × 5 ✓ — die beginverdeling verander nooit die finale antwoord nie." },
        { difficulty: 'Medium', question: 'Vind die GGF van 24 en 36 deur faktore te lys.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Faktore van 24: 1, 2, 3, 4, 6, 8, 12, 24\nFaktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nGemene faktore: 1, 2, 3, 4, 6, 12\nGGF = 12 ✓' },
        { difficulty: 'Medium', question: 'Vind die GGF van 84 en 126 deur priemfaktorisering te gebruik.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: '84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nGedeelde priemfaktore: 2 (laagste mag 2¹), 3 (laagste mag 3¹), 7 (laagste mag 7¹)\nGGF = 2 × 3 × 7 = 42 ✓' },
        { difficulty: 'Medium', question: 'ʼn Cateraar het 60 samoosas en 84 spring rolletjies. Sy wil identiese peuselsakkies pak met al die happies sonder dat iets oorbly. Wat is die maksimum aantal peuselsakkies wat sy kan maak?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Dit is ʼn GGF-probleem: vind die GGF van 60 en 84.\n60 = 2² × 3 × 5\n84 = 2² × 3 × 7\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3¹)\nGGF = 2² × 3 = 4 × 3 = 12\nSy kan 12 identiese peuselsakkies pak ✓' },
        { difficulty: 'Medium', question: 'Zanele soek die GGF van 30 en 45. Sy lys die gemene faktore as 1, 3, 5 en 15, en kies toe 5 as die GGF. Watter fout het sy gemaak, en wat is die korrekte GGF?', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Zanele het die gemene faktore korrek gevind (1, 3, 5, 15) maar die verkeerde een gekies — sy moet die HOOGSTE gemene faktor kies, nie sommer enige gemene faktor nie.\nDie hoogste van 1, 3, 5, 15 is 15.\nGGF van 30 en 45 = 15 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 4 en 6 deur veelvoude te lys.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Veelvoude van 4: 4, 8, 12, 16\nVeelvoude van 6: 6, 12, 18\nKleinste gedeelde veelvoud: 12\nKGV = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 18 en 24 deur priemfaktorisering te gebruik.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: '18 = 2 × 3²\n24 = 2³ × 3\nAl die priemfaktore met hoogste magte: 2³ (van 24) en 3² (van 18)\nKGV = 2³ × 3² = 8 × 9 = 72 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee flikkerligte by ʼn taxistaanplek flikker gelyktydig. Lig A flikker elke 12 sekondes en Lig B flikker elke 16 sekondes. Na hoeveel sekondes sal hulle weer gelyktydig flikker?', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'Vind die KGV van 12 en 16.\n12 = 2² × 3\n16 = 2⁴\nHoogste magte: 2⁴ (van 16) en 3¹ (van 12)\nKGV = 2⁴ × 3 = 16 × 3 = 48\nHulle sal weer gelyktydig flikker na 48 sekondes ✓' },
        { difficulty: 'Medium-Hard', question: 'Op soek na die KGV van 8 en 20, lys ʼn leerder veelvoude van 8 as 8, 16 en veelvoude van 20 as net 20, en sê toe daar is geen gemene veelvoud nie. Wat het verkeerd gegaan, en wat is die werklike KGV?', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Die leerder het veels te vroeg opgehou om veelvoude te lys — met net een of twee veelvoude van elke getal het ʼn gedeelde een dalk nog nie verskyn nie.\nVeelvoude van 8: 8, 16, 24, 32, 40\nVeelvoude van 20: 20, 40\nKleinste gedeelde veelvoud: 40\nKGV = 40 ✓' },
        { difficulty: 'Hard', question: 'Vind sowel die GGF as die KGV van 60 en 72.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGF van 60 en 72', correctAnswer: '12', explanation: '60 = 2² × 3 × 5\n72 = 2³ × 3²\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3¹)\nGGF = 2² × 3 = 4 × 3 = 12 ✓' }, { label: 'b) KGV van 60 en 72', correctAnswer: '360', explanation: '60 = 2² × 3 × 5\n72 = 2³ × 3²\nHoogste magte: 2³, 3², 5¹\nKGV = 2³ × 3² × 5 = 8 × 9 × 5 = 360 ✓' } ] },
        { difficulty: 'Hard', question: 'Twee rolle stof meet 90 cm en 150 cm. ʼn Kleremaakster wil albei rolle in die langste moontlike gelyke stukke sny sonder om stof te vermors. Vind daardie lengte, en sê dan hoeveel stukke sy altesaam sal kry.', answer: '8 stukke altesaam (30 cm elk)', checkMode: 'auto', correctAnswer: '8 stukke altesaam (30 cm elk)', correctAnswers: ['8 stukke altesaam', '8 stukke', '8'], explanation: 'Die langste gelyke stuklengte is die GGF van 90 en 150.\n90 = 2 × 3² × 5\n150 = 2 × 3 × 5²\nGedeelde priemfaktore: 2 (mag 1), 3 (laagste mag 1), 5 (laagste mag 1)\nGGF = 2 × 3 × 5 = 30 cm per stuk\nVan die 90 cm rol: 90 ÷ 30 = 3 stukke. Van die 150 cm rol: 150 ÷ 30 = 5 stukke.\nTotale stukke = 3 + 5 = 8 ✓' },
        { difficulty: 'Hard', question: 'Sibongile sê dat vir enige twee getalle die KGV altyd groter is as die GGF. Is sy korrek? Toets dit met 8 en 8, en verduidelik.', answer: 'Nee — as die twee getalle gelyk is (soos 8 en 8), is die GGF en KGV albei 8, so hulle is gelyk, nie een groter as die ander nie. Sibongile se stelling geld net wanneer die twee getalle verskillend is.', checkMode: 'self', explanation: 'GGF(8, 8) = 8 en KGV(8, 8) = 8 — hulle is presies gelyk, nie een groter as die ander nie. Oor die algemeen is die KGV groter as of gelyk aan die GGF, nooit kleiner nie, maar hulle is net streng ongelyk wanneer die twee getalle verskillend is. Sibongile is verkeerd as ʼn algemene stelling.' },
        { difficulty: 'Hard', question: 'ʼn Skool het 96 potlode en 120 liniale om in identiese skryfbehoeftesette te pak, met al die items en niks oor nie. Vind eers die priemfaktorisering van 96 en 120, vind dan die maksimum aantal sette, en sê laastens hoeveel potlode en liniale in elke stel gaan.', answer: '24 sette, elk met 4 potlode en 5 liniale', checkMode: 'auto', correctAnswer: '24 sette, elk met 4 potlode en 5 liniale', correctAnswers: ['24 sette, elk met 4 potlode en 5 liniale', '24 sette met 4 potlode en 5 liniale elk'], explanation: '96 = 2⁵ × 3\n120 = 2³ × 3 × 5\nGedeelde priemfaktore: 2 (laagste mag 2³) en 3 (laagste mag 3¹)\nGGF = 2³ × 3 = 8 × 3 = 24 sette\nPotlode per stel: 96 ÷ 24 = 4. Liniale per stel: 120 ÷ 24 = 5 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het priemfaktorisering, GGF en KGV in een stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Is 29 priem of saamgesteld? Gee ʼn kort rede.', answer: 'Priem — die enigste faktore van 29 is 1 en 29, so dit kan nie in kleiner heelgetal-faktore opgebreek word nie.', checkMode: 'self', explanation: '29 is nie deelbaar deur 2, 3 of 5 nie (om tot by die vierkantswortel, ongeveer 5,4, te toets is genoeg). Sy enigste faktore is 1 en 29, dus is 29 priem.' },
        { difficulty: 'Easy', question: 'Lys al die faktore van 36.', answer: '1, 2, 3, 4, 6, 9, 12, 18, 36', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 9, 12, 18, 36', correctAnswers: ['1, 2, 3, 4, 6, 9, 12, 18, 36', '1,2,3,4,6,9,12,18,36'], explanation: 'Toets elke heelgetal van 1 af: 36 ÷ 1 = 36, ÷2 = 18, ÷3 = 12, ÷4 = 9, ÷6 = 6 (kom in die middel bymekaar).\nFaktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 ✓' },
        { difficulty: 'Easy', question: 'ʼn Faktorboom vir 54 begin deur dit in 6 × 9 te verdeel. Voltooi die boom deur elke tak in priemfaktore te verdeel, en gee dan die volledige lys priemfaktore.', answer: '2, 3, 3, 3', checkMode: 'auto', correctAnswer: '2, 3, 3, 3', correctAnswers: ['2, 3, 3, 3', '2,3,3,3', '2 3 3 3'], explanation: 'Verdeel 6 in 2 × 3 (albei priem). Verdeel 9 in 3 × 3 (albei priem).\nPriemfaktore van 54: 2, 3, 3, 3 ✓' },
        { difficulty: 'Easy', question: 'Sipho sê 33 is priem omdat dit nie op ʼn ewe syfer of ʼn 5 eindig nie. Is hy korrek? Verduidelik met behulp van sy faktore.', answer: 'Nee — 33 is saamgesteld. Sy faktore is 1, 3, 11 en 33. Al eindig dit nie op ʼn ewe syfer of 5 nie, is dit steeds deelbaar deur 3 en 11.', checkMode: 'self', explanation: '33 = 3 × 11, dus het 33 vier faktore: 1, 3, 11, 33. ʼn Priemgetal het presies twee faktore nodig, dus is 33 saamgesteld, nie priem nie. Sipho se reël (net ewe syfers en 5 nagaan) mis deelbaarheid deur 3, 7, 11 en ander priemgetalle.' },
        { difficulty: 'Easy-Medium', question: 'Gebruik ʼn faktorboom om die priemfaktorisering van 54 te vind, en skryf jou antwoord met eksponente.', answer: '2 x 3³', checkMode: 'auto', correctAnswer: '2 x 3³', correctAnswers: ['2 x 3³', '2 x 3^3', '2 × 3³', '2 × 3^3'], explanation: 'Faktorboom: 54 → 6 × 9 → 2 × 3 × 3 × 3\nPriemfaktore: 2, 3, 3, 3\n3 verskyn drie keer → 3³\nPriemfaktorisering: 54 = 2 × 3³ ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken 2⁴ × 3² as ʼn heelgetal.', answer: '144', checkMode: 'auto', correctAnswer: '144', explanation: '2⁴ = 2 × 2 × 2 × 2 = 16\n3² = 3 × 3 = 9\n16 × 9 = 144 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder teken ʼn faktorboom vir 90: 90 → 9 × 10 → 3 × 3 × 2 × 5, en skryf toe die antwoord as 3³ × 2 × 5. Vind die fout en gee die korrekte priemfaktorisering.', answer: '2 x 3² x 5', checkMode: 'auto', correctAnswer: '2 x 3² x 5', correctAnswers: ['2 x 3² x 5', '2 x 3^2 x 5', '2 × 3² × 5', '2 × 3^2 × 5'], explanation: 'Die priemfaktore wat gevind is (3, 3, 2, 5) is korrek, maar 3 verskyn net TWEE keer, nie drie keer nie, dus moet die eksponent 3² wees, nie 3³ nie.\nKorrekte priemfaktorisering: 90 = 2 × 3² × 5 ✓ (die leerder het die eksponent verkeerd getel)' },
        { difficulty: 'Medium', question: 'Nomvula verdeel 96 eers as 8 × 12, terwyl haar vriendin 96 eers as 6 × 16 verdeel. Wys dat albei beginverdelings tot dieselfde priemfaktorisering lei.', answer: '2⁵ x 3', checkMode: 'auto', correctAnswer: '2⁵ x 3', correctAnswers: ['2⁵ x 3', '2^5 x 3', '2⁵ × 3', '2^5 × 3'], explanation: "Nomvula: 96 → 8 × 12 → (2 × 2 × 2) × (2 × 2 × 3) = 2 × 2 × 2 × 2 × 2 × 3\nVriendin: 96 → 6 × 16 → (2 × 3) × (2 × 2 × 2 × 2) = 2 × 2 × 2 × 2 × 2 × 3\nAlbei gee vyf 2's en een 3.\nPriemfaktorisering: 96 = 2⁵ × 3 ✓ — die beginverdeling verander nooit die finale antwoord nie." },
        { difficulty: 'Medium', question: 'Vind die GGF van 18 en 30 deur faktore te lys.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Faktore van 18: 1, 2, 3, 6, 9, 18\nFaktore van 30: 1, 2, 3, 5, 6, 10, 15, 30\nGemene faktore: 1, 2, 3, 6\nGGF = 6 ✓' },
        { difficulty: 'Medium', question: 'Vind die GGF van 90 en 120 deur priemfaktorisering te gebruik.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: '90 = 2 × 3² × 5\n120 = 2³ × 3 × 5\nGedeelde priemfaktore: 2 (laagste mag 2¹), 3 (laagste mag 3¹), 5 (laagste mag 5¹)\nGGF = 2 × 3 × 5 = 30 ✓' },
        { difficulty: 'Medium', question: 'ʼn Boekwinkel het 45 penne en 60 skryfboeke. Die eienaar wil dit in identiese geskenkbokse rangskik met al die voorraad en niks oor nie. Wat is die maksimum aantal geskenkbokse wat sy kan maak?', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Dit is ʼn GGF-probleem: vind die GGF van 45 en 60.\n45 = 3² × 5\n60 = 2² × 3 × 5\nGedeelde priemfaktore: 3 (laagste mag 3¹) en 5 (laagste mag 5¹)\nGGF = 3 × 5 = 15\nSy kan 15 identiese geskenkbokse maak ✓' },
        { difficulty: 'Medium', question: 'Vir die getalle 24 en 32 lys Bongani hulle gemene faktore as 1, 2, 4 en 8, en sê toe die GGF is 4. Watter fout het hy gemaak, en wat is die korrekte GGF?', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Bongani het die gemene faktore korrek gevind (1, 2, 4, 8) maar nie die hoogste een gekies nie — hy moet die grootste getal in daardie lys kies, nie die tweede grootste nie.\nDie hoogste van 1, 2, 4, 8 is 8.\nGGF van 24 en 32 = 8 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 5 en 6 deur veelvoude te lys.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Veelvoude van 5: 5, 10, 15, 20, 25, 30\nVeelvoude van 6: 6, 12, 18, 24, 30\nKleinste gedeelde veelvoud: 30\nKGV = 30 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 20 en 25 deur priemfaktorisering te gebruik.', answer: '100', checkMode: 'auto', correctAnswer: '100', explanation: '20 = 2² × 5\n25 = 5²\nAl die priemfaktore met hoogste magte: 2² (van 20) en 5² (van 25)\nKGV = 2² × 5² = 4 × 25 = 100 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Markstalletjie voorsien vrugte elke 15 dae van nuwe voorraad en groente elke 18 dae, en begin op dieselfde dag. Na hoeveel dae sal albei voorraadopgradering weer op dieselfde dag gebeur?', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: 'Vind die KGV van 15 en 18.\n15 = 3 × 5\n18 = 2 × 3²\nHoogste magte: 2¹ (van 18), 3² (van 18), 5¹ (van 15)\nKGV = 2 × 3² × 5 = 2 × 9 × 5 = 90\nAlbei voorraadopgraderings sal weer op dieselfde dag gebeur na 90 dae ✓' },
        { difficulty: 'Medium-Hard', question: 'Op soek na die KGV van 9 en 15, lys ʼn leerder net die eerste veelvoud van elkeen — 9 en 15 — en sê toe die KGV is 9 × 15 = 135. Is dit die werklike KGV? Verduidelik en gee die korrekte KGV.', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'Die leerder het te vroeg opgehou om veelvoude te lys en die twee getalle net saam vermenigvuldig, wat nie altyd die KGV gee nie.\nVeelvoude van 9: 9, 18, 27, 36, 45\nVeelvoude van 15: 15, 30, 45\nKleinste gedeelde veelvoud: 45, nie 135 nie.\nKGV = 45 ✓' },
        { difficulty: 'Hard', question: 'Vind sowel die GGF as die KGV van 45 en 75.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGF van 45 en 75', correctAnswer: '15', explanation: '45 = 3² × 5\n75 = 3 × 5²\nGedeelde priemfaktore: 3 (laagste mag 3¹) en 5 (laagste mag 5¹)\nGGF = 3 × 5 = 15 ✓' }, { label: 'b) KGV van 45 en 75', correctAnswer: '225', explanation: '45 = 3² × 5\n75 = 3 × 5²\nHoogste magte: 3² (van 45), 5² (van 75)\nKGV = 3² × 5² = 9 × 25 = 225 ✓' } ] },
        { difficulty: 'Hard', question: 'Twee toue meet 105 m en 140 m. ʼn Verkennerleier wil albei toue in die langste moontlike gelyke stukke sny sonder om iets te vermors. Vind daardie lengte, en sê dan hoeveel stukke sy altesaam sal kry.', answer: '7 stukke altesaam (35 m elk)', checkMode: 'auto', correctAnswer: '7 stukke altesaam (35 m elk)', correctAnswers: ['7 stukke altesaam', '7 stukke', '7'], explanation: 'Die langste gelyke stuklengte is die GGF van 105 en 140.\n105 = 3 × 5 × 7\n140 = 2² × 5 × 7\nGedeelde priemfaktore: 5 (mag 1) en 7 (mag 1)\nGGF = 5 × 7 = 35 m per stuk\nVan die 105 m tou: 105 ÷ 35 = 3 stukke. Van die 140 m tou: 140 ÷ 35 = 4 stukke.\nTotale stukke = 3 + 4 = 7 ✓' },
        { difficulty: 'Hard', question: 'Deon beweer dat die GGF van twee verskillende getalle nooit gelyk aan hulle KGV kan wees nie. Is hy korrek? Toets dit met 4 en 8, en verduidelik.', answer: 'Sy gevolgtrekking is korrek, alhoewel sy redenasie versigtig hersien moet word: vir 4 en 8 is die GGF 4 en die KGV 8, wat verskillend is. Oor die algemeen is die GGF en KGV van twee VERSKILLENDE getalle altyd verskillend — hulle kan net gelyk wees as die twee getalle self gelyk is.', checkMode: 'self', explanation: 'GGF(4, 8) = 4 en KGV(4, 8) = 8 — hierdie is verskillend omdat 4 ≠ 8. Trouens, die GGF en KGV van twee VERSKILLENDE getalle is altyd verskillend; hulle kan net gelyk wees wanneer die twee getalle dieselfde is (bv. GGF(6,6) = KGV(6,6) = 6). Deon se bewering is dus waar vir enige twee verskillende getalle, en hierdie voorbeeld bevestig dit.' },
        { difficulty: 'Hard', question: 'ʼn Geskenkwinkel het 84 sjokolades en 126 lekkers om in identiese geskenksakkies te pak, met al die items en niks oor nie. Vind eers die priemfaktorisering van 84 en 126, vind dan die maksimum aantal geskenksakkies, en sê laastens hoeveel van elke item in elke sakkie gaan.', answer: '42 geskenksakkies, elk met 2 sjokolades en 3 lekkers', checkMode: 'auto', correctAnswer: '42 geskenksakkies, elk met 2 sjokolades en 3 lekkers', correctAnswers: ['42 geskenksakkies, elk met 2 sjokolades en 3 lekkers', '42 sakkies met 2 sjokolades en 3 lekkers elk'], explanation: '84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nGedeelde priemfaktore: 2 (laagste mag 2¹), 3 (laagste mag 3¹), 7 (laagste mag 7¹)\nGGF = 2 × 3 × 7 = 42 geskenksakkies\nSjokolades per sakkie: 84 ÷ 42 = 2. Lekkers per sakkie: 126 ÷ 42 = 3 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan priemfaktorisering, GGF en KGV met selfvertroue op ʼn wye reeks probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Is 31 priem of saamgesteld? Gee ʼn kort rede.', answer: 'Priem — die enigste faktore van 31 is 1 en 31, so geen kleiner heelgetal deel presies daarin nie.', checkMode: 'self', explanation: '31 is nie deelbaar deur 2, 3 of 5 nie (om tot by die vierkantswortel, ongeveer 5,6, te toets is genoeg). Sy enigste faktore is 1 en 31, dus is 31 priem.' },
        { difficulty: 'Easy', question: 'Lys al die faktore van 48.', answer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', correctAnswers: ['1, 2, 3, 4, 6, 8, 12, 16, 24, 48', '1,2,3,4,6,8,12,16,24,48'], explanation: 'Toets elke heelgetal van 1 af: 48 ÷ 1 = 48, ÷2 = 24, ÷3 = 16, ÷4 = 12, ÷6 = 8 (kom in die middel bymekaar).\nFaktore van 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 ✓' },
        { difficulty: 'Easy', question: 'ʼn Faktorboom vir 63 begin deur dit in 7 × 9 te verdeel. Voltooi die boom deur elke tak in priemfaktore te verdeel, en gee dan die volledige lys priemfaktore.', answer: '7, 3, 3', checkMode: 'auto', correctAnswer: '7, 3, 3', correctAnswers: ['7, 3, 3', '3, 3, 7', '7,3,3', '3,3,7'], explanation: '7 is reeds priem, so daardie tak stop. Verdeel 9 in 3 × 3 (albei priem).\nPriemfaktore van 63: 7, 3, 3 ✓' },
        { difficulty: 'Easy', question: 'Amahle sê 39 is priem omdat dit nie in die tafels is wat sy vir 2, 4, 5, 6, 8 en 10 uit haar kop ken nie. Is sy korrek? Verduidelik met behulp van sy faktore.', answer: 'Nee — 39 is saamgesteld. Sy faktore is 1, 3, 13 en 39. Amahle het net sommige tafels nagegaan en gemis dat 39 deelbaar is deur 3 en 13.', checkMode: 'self', explanation: '39 = 3 × 13, dus het 39 vier faktore: 1, 3, 13, 39. ʼn Priemgetal het presies twee faktore nodig, dus is 39 saamgesteld. Om priemheid behoorlik te toets, moet jy ALLE priemgetalle tot by die vierkantswortel nagaan, nie net ʼn paar algemene tafels nie.' },
        { difficulty: 'Easy-Medium', question: 'Gebruik ʼn faktorboom om die priemfaktorisering van 63 te vind, en skryf jou antwoord met eksponente.', answer: '3² x 7', checkMode: 'auto', correctAnswer: '3² x 7', correctAnswers: ['3² x 7', '3^2 x 7', '3² × 7', '3^2 × 7'], explanation: 'Faktorboom: 63 → 7 × 9 → 7 × 3 × 3\nPriemfaktore: 3, 3, 7\n3 verskyn twee keer → 3²\nPriemfaktorisering: 63 = 3² × 7 ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken 3³ × 5² as ʼn heelgetal.', answer: '675', checkMode: 'auto', correctAnswer: '675', explanation: '3³ = 3 × 3 × 3 = 27\n5² = 5 × 5 = 25\n27 × 25 = 675 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder teken ʼn faktorboom vir 108: 108 → 12 × 9 → 2 × 2 × 3 × 3 × 3, en skryf toe die antwoord as 2² × 3⁴. Vind die fout en gee die korrekte priemfaktorisering.', answer: '2² x 3³', checkMode: 'auto', correctAnswer: '2² x 3³', correctAnswers: ['2² x 3³', '2^2 x 3^3', '2² × 3³', '2^2 × 3^3'], explanation: 'Die priemfaktore wat gevind is (2, 2, 3, 3, 3) is korrek, maar 3 verskyn DRIE keer, nie vier keer nie, dus moet die eksponent 3³ wees, nie 3⁴ nie.\nKorrekte priemfaktorisering: 108 = 2² × 3³ ✓ (die leerder het die eksponent verkeerd getel)' },
        { difficulty: 'Medium', question: 'Lindiwe verdeel 132 eers as 12 × 11, terwyl haar klasmaat 132 eers as 4 × 33 verdeel. Wys dat albei beginverdelings tot dieselfde priemfaktorisering lei.', answer: '2² x 3 x 11', checkMode: 'auto', correctAnswer: '2² x 3 x 11', correctAnswers: ['2² x 3 x 11', '2^2 x 3 x 11', '2² × 3 × 11', '2^2 × 3 × 11'], explanation: "Lindiwe: 132 → 12 × 11 → (2 × 2 × 3) × 11 = 2 × 2 × 3 × 11\nKlasmaat: 132 → 4 × 33 → (2 × 2) × (3 × 11) = 2 × 2 × 3 × 11\nAlbei gee twee 2's, een 3, en een 11.\nPriemfaktorisering: 132 = 2² × 3 × 11 ✓ — die beginverdeling verander nooit die finale antwoord nie." },
        { difficulty: 'Medium', question: 'Vind die GGF van 28 en 42 deur faktore te lys.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Faktore van 28: 1, 2, 4, 7, 14, 28\nFaktore van 42: 1, 2, 3, 6, 7, 14, 21, 42\nGemene faktore: 1, 2, 7, 14\nGGF = 14 ✓' },
        { difficulty: 'Medium', question: 'Vind die GGF van 108 en 144 deur priemfaktorisering te gebruik.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: '108 = 2² × 3³\n144 = 2⁴ × 3²\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3²)\nGGF = 2² × 3² = 4 × 9 = 36 ✓' },
        { difficulty: 'Medium', question: 'ʼn Saal het 60 stoele en 96 programboekies. Die organiseerder wil identiese rye opstel, elk met dieselfde aantal stoele en dieselfde aantal boekies, met alles gebruik en niks oor nie. Wat is die maksimum aantal rye wat sy kan opstel?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Dit is ʼn GGF-probleem: vind die GGF van 60 en 96.\n60 = 2² × 3 × 5\n96 = 2⁵ × 3\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3¹)\nGGF = 2² × 3 = 4 × 3 = 12\nSy kan 12 identiese rye opstel ✓' },
        { difficulty: 'Medium', question: 'Vir die getalle 36 en 48 lys Katlego die gemene faktore as 1, 2, 3, 4, 6 en 12, en sê toe die GGF is 6. Watter fout het hy gemaak, en wat is die korrekte GGF?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Katlego het die gemene faktore korrek gevind (1, 2, 3, 4, 6, 12) maar ʼn middelwaarde gekies in plaas van die grootste een.\nDie hoogste van 1, 2, 3, 4, 6, 12 is 12.\nGGF van 36 en 48 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 8 en 10 deur veelvoude te lys.', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Veelvoude van 8: 8, 16, 24, 32, 40\nVeelvoude van 10: 10, 20, 30, 40\nKleinste gedeelde veelvoud: 40\nKGV = 40 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 14 en 21 deur priemfaktorisering te gebruik.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: '14 = 2 × 7\n21 = 3 × 7\nAl die priemfaktore met hoogste magte: 2¹ (van 14), 3¹ (van 21), 7¹ (gedeel)\nKGV = 2 × 3 × 7 = 42 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee wekkers word gelyktydig gestel. Wekker A lui elke 20 minute en Wekker B lui elke 24 minute. Na hoeveel minute sal hulle weer presies gelyktydig lui?', answer: '120', checkMode: 'auto', correctAnswer: '120', explanation: 'Vind die KGV van 20 en 24.\n20 = 2² × 5\n24 = 2³ × 3\nHoogste magte: 2³ (van 24), 3¹ (van 24), 5¹ (van 20)\nKGV = 2³ × 3 × 5 = 8 × 3 × 5 = 120\nHulle sal weer gelyktydig lui na 120 minute ✓' },
        { difficulty: 'Medium-Hard', question: 'Op soek na die KGV van 6 en 16, lys ʼn leerder veelvoude van 6 as 6, 12 en veelvoude van 16 as net 16, en sê toe daar is geen KGV nie omdat die lyste nog nie oorvleuel nie. Wat het verkeerd gegaan, en wat is die werklike KGV?', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'Die leerder het veels te vroeg opgehou om veelvoude te lys — ʼn gedeelde veelvoud verskyn dikwels eers wanneer die lyste verder uitgebrei word.\nVeelvoude van 6: 6, 12, 18, 24, 30, 36, 42, 48\nVeelvoude van 16: 16, 32, 48\nKleinste gedeelde veelvoud: 48\nKGV = 48 ✓' },
        { difficulty: 'Hard', question: 'Vind sowel die GGF as die KGV van 56 en 84.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGF van 56 en 84', correctAnswer: '28', explanation: '56 = 2³ × 7\n84 = 2² × 3 × 7\nGedeelde priemfaktore: 2 (laagste mag 2²) en 7 (laagste mag 7¹)\nGGF = 2² × 7 = 4 × 7 = 28 ✓' }, { label: 'b) KGV van 56 en 84', correctAnswer: '168', explanation: '56 = 2³ × 7\n84 = 2² × 3 × 7\nHoogste magte: 2³ (van 56), 3¹ (van 84), 7¹ (gedeel)\nKGV = 2³ × 3 × 7 = 8 × 3 × 7 = 168 ✓' } ] },
        { difficulty: 'Hard', question: 'Twee houtplanke meet 126 cm en 210 cm. ʼn Skrynwerker wil albei in die langste moontlike gelyke stukke sny sonder om iets te vermors. Vind daardie lengte, en sê dan hoeveel stukke hy altesaam sal kry.', answer: '8 stukke altesaam (42 cm elk)', checkMode: 'auto', correctAnswer: '8 stukke altesaam (42 cm elk)', correctAnswers: ['8 stukke altesaam', '8 stukke', '8'], explanation: 'Die langste gelyke stuklengte is die GGF van 126 en 210.\n126 = 2 × 3² × 7\n210 = 2 × 3 × 5 × 7\nGedeelde priemfaktore: 2 (mag 1), 3 (laagste mag 1), 7 (mag 1)\nGGF = 2 × 3 × 7 = 42 cm per stuk\nVan die 126 cm plank: 126 ÷ 42 = 3 stukke. Van die 210 cm plank: 210 ÷ 42 = 5 stukke.\nTotale stukke = 3 + 5 = 8 ✓' },
        { difficulty: 'Hard', question: 'Kagiso beweer dat vir enige twee getalle, om hulle GGF met hulle KGV te vermenigvuldig altyd dieselfde resultaat gee as om die twee oorspronklike getalle met mekaar te vermenigvuldig. Toets sy bewering met 8 en 12, en sê of dit klop.', answer: 'Ja — GGF(8,12) × KGV(8,12) = 4 × 24 = 96, en 8 × 12 = 96. Die twee resultate stem ooreen, so Kagiso se bewering klop vir hierdie paar (en dit is trouens waar vir enige twee heelgetalle).', checkMode: 'self', explanation: 'GGF(8, 12) = 4 en KGV(8, 12) = 24, dus 4 × 24 = 96. Ook 8 × 12 = 96. Aangesien albei berekeninge 96 gee, word Kagiso se bewering vir hierdie voorbeeld bevestig — hierdie verhouding (GGF × KGV = produk van die twee getalle) geld altyd.' },
        { difficulty: 'Hard', question: 'ʼn Museumwinkel het 108 pamflette en 144 plakkers om in identiese welkomspakkies te pak, met al die items en niks oor nie. Vind eers die priemfaktorisering van 108 en 144, vind dan die maksimum aantal welkomspakkies, en sê laastens hoeveel van elke item in elke pakkie gaan.', answer: '36 welkomspakkies, elk met 3 pamflette en 4 plakkers', checkMode: 'auto', correctAnswer: '36 welkomspakkies, elk met 3 pamflette en 4 plakkers', correctAnswers: ['36 welkomspakkies, elk met 3 pamflette en 4 plakkers', '36 pakkies met 3 pamflette en 4 plakkers elk'], explanation: '108 = 2² × 3³\n144 = 2⁴ × 3²\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3²)\nGGF = 2² × 3² = 4 × 9 = 36 welkomspakkies\nPamflette per pakkie: 108 ÷ 36 = 3. Plakkers per pakkie: 144 ÷ 36 = 4 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan priemfaktorisering, GGF en KGV op werklike probleme en multi-stap-redenasie toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
