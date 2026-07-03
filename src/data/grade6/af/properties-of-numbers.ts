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
}
