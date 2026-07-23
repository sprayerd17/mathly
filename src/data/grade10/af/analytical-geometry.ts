import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (analytical geometry roles) ──────────────────────────────
// x-coordinates       → blue   (#2563eb)
// y-coordinates       → green  (#16a34a)
// result/distance     → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Analitiese Meetkunde',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE DISTANCE FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distance-formula',
      title: 'Die Afstandsformule',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Om die afstand tussen twee punte (${bl('x₁')},${gr('y₁')}) en (${bl('x₂')},${gr('y₂')}) op ʼn Cartesiese vlak te bepaal, gebruik ons die formule: ${or('afstand')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]. Dit kom van die toepassing van die <strong>Stelling van Pythagoras</strong> op die horisontale en vertikale verskille tussen die punte.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-koördinate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-koördinate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('finale afstand')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die afstandsformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${or('afstand')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Waar die formule vandaan kom</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horisontale verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('x₂')} − ${bl('x₁')} gee die horisontale afstand tussen die twee punte — die basis van die reghoekige driehoek.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertikale verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('y₂')} − ${gr('y₁')} gee die vertikale afstand tussen die twee punte — die hoogte van die reghoekige driehoek.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Pythagoras toegepas</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deur albei verskille te kwadreer, dit bymekaar te tel, en die vierkantswortel te neem, kry ons die skuinssy — die ${or('afstand')} tussen die twee punte.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk: die volgorde van aftrekking maak nie saak nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat ons die verskille kwadreer, is (${bl('x₂')}−${bl('x₁')})² = (${bl('x₁')}−${bl('x₂')})². Jy kan in enige volgorde aftrek en die ${or('afstand')} sal dieselfde wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die afstand tussen P(2,5) en Q(7,1).',
          answer: `${or('afstand')} = √41 ≈ ${or('6,40 eenhede')}`,
          steps: [
            `Skryf die koördinate neer: ${bl('x₁')} = ${bl('2')}, ${gr('y₁')} = ${gr('5')}, ${bl('x₂')} = ${bl('7')}, ${gr('y₂')} = ${gr('1')}.`,
            `Pas die formule toe: ${or('afstand')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]`,
            `Vervang: ${or('afstand')} = √[(${bl('7')}−${bl('2')})² + (${gr('1')}−${gr('5')})²]`,
            `Bereken die verskille: = √[(${bl('5')})² + (${gr('−4')})²]`,
            `Kwadreer die verskille: = √[${bl('25')} + ${gr('16')}]`,
            `Tel op: = √41`,
            `<strong>Antwoord:</strong> ${or('afstand')} = √41 ≈ ${or('6,40 eenhede')} ✓`,
          ],
        },
        {
          question: 'Sipho bepaal die afstand tussen A(−3,4) en B(2,−8).',
          answer: `${or('afstand')} = ${or('13 eenhede')}`,
          steps: [
            `Skryf die koördinate neer: ${bl('x₁')} = ${bl('−3')}, ${gr('y₁')} = ${gr('4')}, ${bl('x₂')} = ${bl('2')}, ${gr('y₂')} = ${gr('−8')}.`,
            `Pas die formule toe: ${or('afstand')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]`,
            `Vervang: ${or('afstand')} = √[(${bl('2')}−(${bl('−3')}))² + (${gr('−8')}−${gr('4')})²]`,
            `Vereenvoudig die verskille: = √[(${bl('5')})² + (${gr('−12')})²]`,
            `Kwadreer die verskille: = √[${bl('25')} + ${gr('144')}]`,
            `Tel op: = √169`,
            `<strong>Antwoord:</strong> ${or('afstand')} = ${or('13 eenhede')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat punte P(2,5) en Q(7,1) wys met die reghoekige driehoek gevorm deur die horisontale en vertikale verskille, kleurgekodeer in blou en groen, skuinssy gemerk as afstand √41 in oranje',
      diagramSvg:
        '<svg viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="90" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Afstandsformule: P(2,5) na Q(7,1)</text><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="64" x2="26" y2="188" /><line x1="42" y1="64" x2="42" y2="188" /><line x1="58" y1="64" x2="58" y2="188" /><line x1="74" y1="64" x2="74" y2="188" /><line x1="90" y1="64" x2="90" y2="188" /><line x1="106" y1="64" x2="106" y2="188" /><line x1="122" y1="64" x2="122" y2="188" /><line x1="138" y1="64" x2="138" y2="188" /><line x1="154" y1="64" x2="154" y2="188" /><line x1="26" y1="184" x2="154" y2="184" /><line x1="26" y1="168" x2="154" y2="168" /><line x1="26" y1="152" x2="154" y2="152" /><line x1="26" y1="136" x2="154" y2="136" /><line x1="26" y1="120" x2="154" y2="120" /><line x1="26" y1="104" x2="154" y2="104" /><line x1="26" y1="88" x2="154" y2="88" /><line x1="26" y1="72" x2="154" y2="72" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="168" x2="154" y2="168" /><line x1="42" y1="188" x2="42" y2="64" /></g><g fill="#374151" font-size="9"><text x="26" y="196" text-anchor="middle">-1</text><text x="58" y="196" text-anchor="middle">1</text><text x="74" y="196" text-anchor="middle">2</text><text x="90" y="196" text-anchor="middle">3</text><text x="106" y="196" text-anchor="middle">4</text><text x="122" y="196" text-anchor="middle">5</text><text x="138" y="196" text-anchor="middle">6</text><text x="154" y="196" text-anchor="middle">7</text><text x="34" y="187" text-anchor="end">-1</text><text x="34" y="155" text-anchor="end">1</text><text x="34" y="139" text-anchor="end">2</text><text x="34" y="123" text-anchor="end">3</text><text x="34" y="107" text-anchor="end">4</text><text x="34" y="91" text-anchor="end">5</text><text x="34" y="75" text-anchor="end">6</text><text x="34" y="171" text-anchor="end">0</text></g><line x1="74" y1="88" x2="154" y2="88" stroke="#2563eb" stroke-width="2"/><line x1="154" y1="88" x2="154" y2="152" stroke="#16a34a" stroke-width="2"/><path d="M 146,88 L 146,80 L 154,80" fill="none" stroke="#0f1f3d" stroke-width="1"/><line x1="74" y1="88" x2="154" y2="152" stroke="#ea580c" stroke-width="2.5"/><text x="112" y="82" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="163" y="122" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">4</text><text x="100" y="128" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">√41</text><circle cx="74" cy="88" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="154" cy="152" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="58" y="80" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">P(2,5)</text><text x="150" y="164" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">Q(7,1)</text></svg>',

      videoPlaceholder:
        'Kort video wat verduidelik hoe die afstandsformule van die Stelling van Pythagoras afgelei word, met ʼn uitgewerkte voorbeeld op die Cartesiese vlak, kleurgekodeer met x-koördinate in blou, y-koördinate in groen en die finale afstand in oranje',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE GRADIENT FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'gradient-formula',
      title: 'Die Gradiëntformule',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Om die gradiënt (helling) van die lynsegment wat twee punte (${bl('x₁')},${gr('y₁')}) en (${bl('x₂')},${gr('y₂')}) verbind te bepaal, gebruik ons: ${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')}). Dit vertel ons hoe steil die lyn is en in watter rigting dit hel. <strong>Parallelle lyne</strong> het ${gr('gelyke gradiënte')}; <strong>loodregte lyne</strong> het gradiënte wat ${or('negatiewe resiproke')} van mekaar is (hul produk is gelyk aan −1).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradiëntberekening')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('parallelvergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('loodregte verhouding')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die gradiëntformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')})</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Parallelle en loodregte lyne</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallelle lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee lyne is ${gr('parallel')} as hul gradiënte ${gr('gelyk')} is: ${gr('m₁ = m₂')}. Die lyne ontmoet mekaar nooit nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Loodregte lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee lyne is ${or('loodreg')} as hul gradiënte ${or('negatiewe resiproke')} is: ${or('m₁ × m₂ = −1')}, of ewe waar ${or('m₂ = −1/m₁')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die gradiënt interpreteer</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${bl('Positiewe')} gradiënt beteken die lyn hel opwaarts van links na regs. ʼn ${bl('Negatiewe')} gradiënt beteken dit hel afwaarts. ʼn Gradiënt van ${bl('nul')} beteken die lyn is horisontaal. ʼn ${bl('Onbepaalde')} gradiënt beteken die lyn is vertikaal (die noemer is nul).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die gradiënt van die lyn deur A(1,3) en B(5,11).',
          answer: `${bl('gradiënt')} = ${bl('2')}`,
          steps: [
            `Skryf die koördinate neer: ${bl('x₁')} = ${bl('1')}, ${gr('y₁')} = ${gr('3')}, ${bl('x₂')} = ${bl('5')}, ${gr('y₂')} = ${gr('11')}.`,
            `Pas die formule toe: ${bl('m')} = (${gr('y₂')}−${gr('y₁')}) ÷ (${bl('x₂')}−${bl('x₁')})`,
            `Vervang: ${bl('m')} = (${gr('11')}−${gr('3')}) ÷ (${bl('5')}−${bl('1')})`,
            `Bereken: ${bl('m')} = ${gr('8')} ÷ ${bl('4')}`,
            `<strong>Antwoord:</strong> ${bl('gradiënt')} = ${bl('2')} ✓`,
          ],
        },
        {
          question: 'Lerato het twee lyne: een deur (0,2) en (3,8), ʼn ander deur (1,5) en (4,11). Is hulle parallel?',
          answer: `Die lyne ${gr('is parallel')} — albei het ${gr('gradiënt = 2')}`,
          steps: [
            `Bereken die ${bl('gradiënt')} van die eerste lyn deur (${bl('0')},${gr('2')}) en (${bl('3')},${gr('8')}):`,
            `${bl('m₁')} = (${gr('8')}−${gr('2')}) ÷ (${bl('3')}−${bl('0')}) = ${gr('6')} ÷ ${bl('3')} = ${bl('2')}`,
            `Bereken die ${bl('gradiënt')} van die tweede lyn deur (${bl('1')},${gr('5')}) en (${bl('4')},${gr('11')}):`,
            `${bl('m₂')} = (${gr('11')}−${gr('5')}) ÷ (${bl('4')}−${bl('1')}) = ${gr('6')} ÷ ${bl('3')} = ${bl('2')}`,
            `${gr('Vergelyk:')} ${gr('m₁')} = ${gr('2')} en ${gr('m₂')} = ${gr('2')}. Aangesien ${gr('m₁ = m₂')}, is die lyne ${gr('parallel')}. ✓`,
          ],
        },
        {
          question: 'Thabo het ʼn lyn met gradiënt 3. Bepaal die gradiënt van ʼn lyn wat loodreg daarop is.',
          answer: `Loodregte gradiënt = ${or('−1/3')}`,
          steps: [
            `Die gegewe gradiënt is ${bl('m₁')} = ${bl('3')}.`,
            `Vir ${or('loodregte')} lyne: ${or('m₁ × m₂ = −1')}`,
            `Vervang: ${bl('3')} × ${or('m₂')} = −1`,
            `Los op vir ${or('m₂')}: ${or('m₂')} = −1 ÷ ${bl('3')} = ${or('−1/3')}`,
            `<strong>Antwoord:</strong> Die loodregte gradiënt is ${or('−1/3')} (die ${or('negatiewe resiprook')} van ${bl('3')}). ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat twee parallelle lyne met gelyke gradiënte in groen gemerk wys, en twee loodregte lyne waarvan die gradiënte vermenigvuldig tot −1 in oranje gemerk, gradiëntberekening in blou getoon',
      diagramSvg:
        '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="75" y="14" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Parallel: gelyke gradiënt</text><line x1="25" y1="145" x2="65" y2="85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="155" x2="125" y2="95" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 25,145 L 65,145 L 65,85" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/><text x="45" y="158" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">Δx</text><text x="73" y="118" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">Δy</text><text x="75" y="174" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">m₁ = m₂ (dieselfde helling)</text><line x1="160" y1="5" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1"/><text x="230" y="14" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">Loodreg: m₁×m₂ = −1</text><line x1="190" y1="144" x2="270" y2="96" stroke="#0f1f3d" stroke-width="2.5"/><line x1="206" y1="80" x2="254" y2="160" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 237,116 L 241,123 L 234,127" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="272" y="92" font-size="10" fill="#ea580c" font-weight="700" text-anchor="start">m₁</text><text x="256" y="166" font-size="10" fill="#ea580c" font-weight="700" text-anchor="start">m₂</text><text x="230" y="174" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">m₁ × m₂ = −1</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die gradiënt van ʼn lyn te bereken en hoe om parallelle lyne aan gelyke gradiënte en loodregte lyne aan negatiewe resiproke gradiënte te herken',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE MIDPOINT FORMULA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'midpoint-formula',
      title: 'Die Middelpuntformule',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">Om die koördinate van die middelpunt van ʼn lynsegment wat (${bl('x₁')},${gr('y₁')}) en (${bl('x₂')},${gr('y₂')}) verbind te bepaal, gemiddel ons die x-koördinate en gemiddel ons die y-koördinate: ${or('Middelpunt')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddelde x-koördinaat')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gemiddelde y-koördinaat')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpuntresultaat')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die middelpuntformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${or('M')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die middelpuntformule agteruit gebruik</p>` +
        `<p style="margin-bottom:12px;">As jy die middelpunt en een eindpunt ken, kan jy die ander eindpunt vind deur agteruit te werk:</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-size:1em;color:#374151;margin-bottom:8px;">As ${or('M')} = (${or('a')},${or('b')}) en een punt is (${bl('x₁')},${gr('y₁')}), dan is die ander punt:</p>` +
        `<p style="font-size:1em;font-weight:700;color:#374151;margin:0;">${bl('x₂')} = 2${or('a')} − ${bl('x₁')} &nbsp;&nbsp; en &nbsp;&nbsp; ${gr('y₂')} = 2${or('b')} − ${gr('y₁')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom gemiddelding werk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die middelpunt lê presies halfpad tussen die twee eindpunte. Om die ${bl('x-koördinate')} te gemiddel gee die presiese horisontale middelpunt, en om die ${gr('y-koördinate')} te gemiddel gee die presiese vertikale middelpunt.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die middelpunt van die segment wat C(4,6) en D(10,2) verbind.',
          answer: `${or('Middelpunt')} = ${or('(7, 4)')}`,
          steps: [
            `Skryf die koördinate neer: ${bl('x₁')} = ${bl('4')}, ${gr('y₁')} = ${gr('6')}, ${bl('x₂')} = ${bl('10')}, ${gr('y₂')} = ${gr('2')}.`,
            `Pas die formule toe: ${or('M')} = ((${bl('x₁')}+${bl('x₂')})÷2 , (${gr('y₁')}+${gr('y₂')})÷2)`,
            `Vervang: ${or('M')} = ((${bl('4')}+${bl('10')})÷2 , (${gr('6')}+${gr('2')})÷2)`,
            `Bereken die ${bl('x-koördinaat')}: ${bl('14')} ÷ 2 = ${bl('7')}`,
            `Bereken die ${gr('y-koördinaat')}: ${gr('8')} ÷ 2 = ${gr('4')}`,
            `<strong>Antwoord:</strong> ${or('Middelpunt')} = (${bl('7')}, ${gr('4')}) = ${or('(7, 4)')} ✓`,
          ],
        },
        {
          question: 'Amahle weet die middelpunt van segment EF is (5,3), en punt E is (2,1). Bepaal punt F.',
          answer: `Punt F = ${or('(8, 5)')}`,
          steps: [
            `Skryf neer wat bekend is: ${or('M')} = (${or('5')},${or('3')}), E = (${bl('2')},${gr('1')}), F = (${bl('x')},${gr('y')}).`,
            `Stel die vergelykings op met die middelpuntformule: (${bl('2')}+${bl('x')})÷2 = ${or('5')} en (${gr('1')}+${gr('y')})÷2 = ${or('3')}`,
            `Los op vir ${bl('x')}: ${bl('2')}+${bl('x')} = 2×${or('5')} = 10, dus ${bl('x')} = 10−${bl('2')} = ${bl('8')}`,
            `Los op vir ${gr('y')}: ${gr('1')}+${gr('y')} = 2×${or('3')} = 6, dus ${gr('y')} = 6−${gr('1')} = ${gr('5')}`,
            `<strong>Antwoord:</strong> Punt F = (${bl('8')},${gr('5')}) = ${or('(8, 5)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat segment CD met C(4,6) en D(10,2) wys, met middelpunt M(7,4) halfpad tussen hulle gemerk, gemiddelde x-koördinaat in blou en gemiddelde y-koördinaat in groen getoon, middelpuntresultaat in oranje',
      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="110" y="14" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Middelpunt van C(4,6) en D(10,2)</text><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="64" x2="26" y2="188" /><line x1="42" y1="64" x2="42" y2="188" /><line x1="58" y1="64" x2="58" y2="188" /><line x1="74" y1="64" x2="74" y2="188" /><line x1="90" y1="64" x2="90" y2="188" /><line x1="106" y1="64" x2="106" y2="188" /><line x1="122" y1="64" x2="122" y2="188" /><line x1="138" y1="64" x2="138" y2="188" /><line x1="154" y1="64" x2="154" y2="188" /><line x1="170" y1="64" x2="170" y2="188" /><line x1="186" y1="64" x2="186" y2="188" /><line x1="202" y1="64" x2="202" y2="188" /><line x1="26" y1="184" x2="202" y2="184" /><line x1="26" y1="168" x2="202" y2="168" /><line x1="26" y1="152" x2="202" y2="152" /><line x1="26" y1="136" x2="202" y2="136" /><line x1="26" y1="120" x2="202" y2="120" /><line x1="26" y1="104" x2="202" y2="104" /><line x1="26" y1="88" x2="202" y2="88" /><line x1="26" y1="72" x2="202" y2="72" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="168" x2="202" y2="168" /><line x1="42" y1="188" x2="42" y2="64" /></g><g fill="#374151" font-size="9"><text x="26" y="196" text-anchor="middle">-1</text><text x="106" y="196" text-anchor="middle">4</text><text x="154" y="196" text-anchor="middle">7</text><text x="202" y="196" text-anchor="middle">10</text><text x="34" y="75" text-anchor="end">6</text><text x="34" y="107" text-anchor="end">4</text><text x="34" y="139" text-anchor="end">2</text><text x="34" y="171" text-anchor="end">0</text></g><line x1="106" y1="72" x2="202" y2="136" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 124.2,92.2 L 129.8,83.8" stroke="#ea580c" stroke-width="1.5"/><path d="M 175.2,124.2 L 180.8,115.8" stroke="#ea580c" stroke-width="1.5"/><circle cx="106" cy="72" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="202" cy="136" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="154" cy="104" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="90" y="66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">C(4,6)</text><text x="198" y="150" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">D(10,2)</text><text x="158" y="98" font-size="11" fill="#ea580c" font-weight="700" text-anchor="start">M(7,4)</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die middelpuntformule toe te pas en hoe om agteruit te werk om ʼn onbekende eindpunt te vind wanneer die middelpunt gegee is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — COMBINING DISTANCE, GRADIENT AND MIDPOINT TO SOLVE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combining-formulae',
      title: 'Kombinering van Afstand, Gradiënt en Middelpunt om Probleme Op te Los',
      icon: '🔗',
      explanation:
        `<p style="margin-bottom:16px;">Ons kombineer die afstands-, gradiënt- en middelpuntformules om meer komplekse meetkundige figure op die Cartesiese koördinaatstelsel voor te stel en op te los, soos om te bewys dat vorms spesifieke tipes vierhoeke is, of om onbekende hoekpunte te bepaal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('middelpunt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afstandvergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolgtrekking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel meetkundige eienskappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Parallelogram</strong> — oorstaande sye is parallel (gelyke gradiënte) en die diagonale halveer mekaar (deel dieselfde ${bl('middelpunt')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Reghoek</strong> — ʼn parallelogram met gelyklengte-diagonale. Gebruik die ${or('afstandsformule')} om diagonaallengtes te vergelyk.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Ruit</strong> — ʼn parallelogram met al vier sye gelyk in lengte. Gebruik die ${gr('afstandsformule')} om sylengtes te vergelyk.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie: staaf altyd jou gevolgtrekking</p>` +
        `<p style="margin:0;color:#1e3a8a;">Ná berekening, skryf ʼn ${gr('duidelike gevolgtrekking')} wat die vraag direk beantwoord. Vir bewysvrae, wys die berekening ÉN die redenering — ʼn getal alleen is nie ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gegewe punte P(2,5) en Q(3,1), bepaal R as M(1;0) die middelpunt van PR is.',
          answer: `R = ${bl('(0, −5)')}`,
          steps: [
            `Die ${bl('middelpunt')} van PR is M(${bl('1')},${bl('0')}). Punt P = (${bl('2')},${gr('5')}). Laat R = (${bl('x')},${gr('y')}).`,
            `Stel vergelykings op met die middelpuntformule: (${bl('2')}+${bl('x')})÷2 = ${bl('1')} en (${gr('5')}+${gr('y')})÷2 = ${bl('0')}`,
            `Los op vir ${bl('x')}: ${bl('2')}+${bl('x')} = 2×${bl('1')} = 2, dus ${bl('x')} = 2−${bl('2')} = ${bl('0')}`,
            `Los op vir ${gr('y')}: ${gr('5')}+${gr('y')} = 2×${bl('0')} = 0, dus ${gr('y')} = 0−${gr('5')} = ${gr('−5')}`,
            `<strong>Antwoord:</strong> R = (${bl('0')},${gr('−5')}) ✓`,
          ],
        },
        {
          question: 'Bepaal of PQRS (met P(2,5), Q(3,1), R(0,−5), S om te bepaal) ʼn parallelogram vorm, deur S so te bepaal dat PQRS albei pare oorstaande sye parallel het.',
          answer: `S = ${bl('(−1, −1)')}`,
          steps: [
            `Vir ʼn parallelogram halveer die diagonale mekaar — hulle moet dieselfde ${bl('middelpunt')} deel.`,
            `Bepaal die ${bl('middelpunt')} van diagonaal PR: ${bl('M')} = ((${bl('2')}+${bl('0')})÷2 , (${gr('5')}+(${gr('−5')}))÷2) = (${bl('1')},${gr('0')})`,
            `Die ${bl('middelpunt')} van diagonaal QS moet ook gelyk wees aan (${bl('1')},${gr('0')}). Laat S = (${bl('x')},${gr('y')}).`,
            `Los op vir ${bl('x')}: (${bl('3')}+${bl('x')})÷2 = ${bl('1')}, dus ${bl('3')}+${bl('x')} = 2, wat ${bl('x')} = ${bl('−1')} gee`,
            `Los op vir ${gr('y')}: (${gr('1')}+${gr('y')})÷2 = ${gr('0')}, dus ${gr('1')}+${gr('y')} = 0, wat ${gr('y')} = ${gr('−1')} gee`,
            `<strong>Antwoord:</strong> S = (${bl('−1')},${gr('−1')}) ✓`,
          ],
        },
        {
          question: 'Is PQRS (met die punte hierbo bepaal: P(2,5), Q(3,1), R(0,−5), S(−1,−1)) ʼn reghoek? Motiveer jou antwoord.',
          answer: `${gr('PQRS is NIE ʼn reghoek nie')} — die diagonale is nie gelyk in lengte nie`,
          steps: [
            `ʼn Reghoek het gelyklengte-diagonale. ${or('Vergelyk die lengtes')} van diagonale PR en QS.`,
            `${or('Afstand')} PR = √[(${bl('0')}−${bl('2')})²+(${gr('−5')}−${gr('5')})²] = √[(${bl('−2')})²+(${gr('−10')})²] = √[${or('4')}+${or('100')}] = √${or('104')}`,
            `${or('Afstand')} QS = √[(${bl('−1')}−${bl('3')})²+(${gr('−1')}−${gr('1')})²] = √[(${bl('−4')})²+(${gr('−2')})²] = √[${or('16')}+${or('4')}] = √${or('20')}`,
            `${or('Vergelyk:')} √${or('104')} ≠ √${or('20')} — die diagonale is nie gelyk in lengte nie.`,
            `<strong>${gr('Gevolgtrekking:')} Aangesien die diagonale nie gelyk is nie, is PQRS ʼn parallelogram maar ${gr('nie ʼn reghoek nie')}.</strong> ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat vierhoek PQRS met P(2,5) Q(3,1) R(0,-5) S(-1,-1) wys, met diagonale PR en QS geteken en hul lengtes in oranje gemerk om te wys dat PQRS ʼn parallelogram maar nie ʼn reghoek is nie, middelpunte in blou en gevolgtrekking in groen getoon',
      diagramSvg:
        '<svg viewBox="0 0 130 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><text x="65" y="14" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vierhoek PQRS — is dit ʼn reghoek?</text><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="72" x2="10" y2="264" /><line x1="26" y1="72" x2="26" y2="264" /><line x1="42" y1="72" x2="42" y2="264" /><line x1="58" y1="72" x2="58" y2="264" /><line x1="74" y1="72" x2="74" y2="264" /><line x1="90" y1="72" x2="90" y2="264" /><line x1="106" y1="72" x2="106" y2="264" /><line x1="10" y1="248" x2="106" y2="248" /><line x1="10" y1="232" x2="106" y2="232" /><line x1="10" y1="216" x2="106" y2="216" /><line x1="10" y1="200" x2="106" y2="200" /><line x1="10" y1="184" x2="106" y2="184" /><line x1="10" y1="152" x2="106" y2="152" /><line x1="10" y1="136" x2="106" y2="136" /><line x1="10" y1="120" x2="106" y2="120" /><line x1="10" y1="104" x2="106" y2="104" /><line x1="10" y1="88" x2="106" y2="88" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="10" y1="168" x2="106" y2="168" /><line x1="42" y1="264" x2="42" y2="72" /></g><g fill="#374151" font-size="8"><text x="26" y="276" text-anchor="middle">-1</text><text x="74" y="276" text-anchor="middle">2</text><text x="90" y="276" text-anchor="middle">3</text><text x="0" y="251" text-anchor="end">-5</text><text x="0" y="187" text-anchor="end">-1</text><text x="0" y="171" text-anchor="end">0</text><text x="0" y="91" text-anchor="end">5</text></g><polygon points="74,88 90,152 42,248 26,184" fill="#eff6ff" fill-opacity="0.3" stroke="#0f1f3d" stroke-width="2.5"/><line x1="74" y1="88" x2="42" y2="248" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="90" y1="152" x2="26" y2="184" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="58" cy="168" r="4.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="74" cy="88" r="3.5" fill="#0f1f3d"/><circle cx="90" cy="152" r="3.5" fill="#0f1f3d"/><circle cx="42" cy="248" r="3.5" fill="#0f1f3d"/><circle cx="26" cy="184" r="3.5" fill="#0f1f3d"/><text x="80" y="82" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="start">P(2,5)</text><text x="96" y="150" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="start">Q(3,1)</text><text x="34" y="260" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="middle">R(0,-5)</text><text x="26" y="196" font-size="10" fill="#0f1f3d" font-weight="700" text-anchor="middle">S(-1,-1)</text><text x="66" y="164" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="start">M(1,0)</text><text x="66" y="130" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="start">PR = √104</text><text x="52" y="158" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">QS = √20</text><text x="65" y="282" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">Parallelogram,</text><text x="65" y="293" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">nie ʼn reghoek nie</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die afstands-, middelpunt- en gradiëntformules te kombineer om geometriese eienskappe van vierhoeke op die Cartesiese vlak te bewys',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — distance formula (integer answer) ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die afstand tussen A(1,2) en B(4,6).',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'afstand = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5 ✓',
    },

    // ── Q2 Medium — distance formula with negative coordinates ────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die afstand tussen C(−2,3) en D(4,−5).',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'afstand = √[(4−(−2))² + (−5−3)²] = √[36 + 64] = √100 = 10 ✓',
    },

    // ── Q3 Hard — verify a learner's distance calculation ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bereken die afstand tussen (0,0) en (6,8) en kry 10. Kontroleer sy antwoord.',
      answer: 'afstand=√(36+64)=√100=10. Hy is korrek.',
      checkMode: 'self',
    },

    // ── Q4 Easy — gradient formula (positive integer) ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die gradiënt van die lyn deur (2,4) en (5,13).',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'm = (13 − 4) / (5 − 2) = 9 / 3 = 3 ✓',
    },

    // ── Q5 Medium — gradient formula (negative result) ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die gradiënt van die lyn deur (−1,5) en (3,−3).',
      answer: '-2',
      checkMode: 'auto',
      correctAnswer: '-2',
      explanation: 'm = (−3 − 5) / (3 − (−1)) = −8 / 4 = −2 ✓',
    },

    // ── Q6 Hard — parallel lines from gradient comparison ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het twee lyne: een deur (0,1) en (2,9), ʼn ander deur (1,4) en (3,12). Is hulle parallel? Verduidelik.',
      answer: 'Gradiënt 1=(9-1)/2=4. Gradiënt 2=(12-4)/2=4. Ja, hulle is parallel aangesien die gradiënte gelyk is.',
      checkMode: 'self',
    },

    // ── Q7 Medium — perpendicular gradient ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Lyn het gradiënt 4. Bepaal die gradiënt van ʼn lyn wat loodreg daarop is.',
      answer: '-1/4',
      checkMode: 'auto',
      correctAnswer: '-1/4',
      correctAnswers: ['-1/4', '−1/4', '-0.25'],
      explanation: 'Loodregte gradiënt = −1 / m = −1 / 4 ✓',
    },

    // ── Q8 Hard — verify perpendicular claim ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê twee lyne met gradiënte 2/3 en −3/2 is loodreg. Is hy korrek? Verduidelik.',
      answer: 'Ja — deur die gradiënte te vermenigvuldig kry ons (2/3)×(-3/2)=-1, wat bevestig dat hulle loodreg is.',
      checkMode: 'self',
    },

    // ── Q9 Easy — midpoint formula (positive coordinates) ────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die middelpunt van die segment wat (2,8) en (6,4) verbind.',
      answer: '(4,6)',
      checkMode: 'auto',
      correctAnswer: '(4,6)',
      correctAnswers: ['(4,6)', '(4, 6)', '4,6'],
      explanation: 'M = ((2 + 6) / 2 , (8 + 4) / 2) = (4, 6) ✓',
    },

    // ── Q10 Medium — midpoint formula (mixed coordinates) ────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal die middelpunt van die segment wat (−3,5) en (7,−1) verbind.',
      answer: '(2,2)',
      checkMode: 'auto',
      correctAnswer: '(2,2)',
      correctAnswers: ['(2,2)', '(2, 2)', '2,2'],
      explanation: 'M = ((−3 + 7) / 2 , (5 + (−1)) / 2) = (4/2 , 4/2) = (2, 2) ✓',
    },

    // ── Q11 Hard — find unknown endpoint using midpoint ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Die middelpunt van segment AB is (4,3), en punt A is (1,7). Bepaal punt B.',
      answer: '4=(1+x)/2, x=7. 3=(7+y)/2, y=-1. B=(7,-1).',
      checkMode: 'self',
    },

    // ── Q12 Medium — find unknown endpoint R ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gegewe P(3,4) en Q(7,2), bepaal R as M(5,3) die middelpunt van PR is.',
      answer: '(7,2)',
      checkMode: 'auto',
      correctAnswer: '(7,2)',
      correctAnswers: ['(7,2)', '(7, 2)', '7,2'],
      explanation: '5 = (3 + x) / 2 → x = 7.\n3 = (4 + y) / 2 → y = 2.\nR = (7, 2) ✓',
    },

    // ── Q13 Hard — find C using midpoint of BC ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gegewe B(4,6), bepaal C as M(2,3) die middelpunt van BC is.',
      answer: '2=(4+x)/2, x=0. 3=(6+y)/2, y=0. C=(0,0).',
      checkMode: 'self',
    },

    // ── Q14 Hard — determine parallel lines from two pairs of points ──────────
    {
      difficulty: 'Hard',
      question: 'Bepaal of die lyn deur (1,2) en (5,10) parallel is aan die lyn deur (0,−3) en (3,3).',
      answer: 'Gradiënt 1=(10-2)/4=2. Gradiënt 2=(3-(-3))/3=2. Ja, hulle is parallel.',
      checkMode: 'self',
    },

    // ── Q15 Hard — distance and gradient in one question ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die afstand en gradiënt tussen (2,−1) en (8,7), en wys albei berekeninge.',
      answer: 'Afstand=√[(8-2)²+(7-(-1))²]=√[36+64]=√100=10. Gradiënt=(7-(-1))/(8-2)=8/6=4/3.',
      checkMode: 'self',
    },

    // ── Q16 Medium — midpoint of a diagonal in a quadrilateral ───────────────
    {
      difficulty: 'Medium',
      question: 'Vierhoek PQRS het P(1,1), Q(5,1), R(5,4), S(1,4). Bepaal die middelpunt van diagonaal PR.',
      answer: '(3;2,5)',
      checkMode: 'auto',
      correctAnswer: '(3;2,5)',
      correctAnswers: ['(3,2.5)', '(3, 2.5)', '3,2.5'],
      explanation: 'Middelpunt van PR = ((1 + 5) / 2 , (1 + 4) / 2) = (3; 2,5) ✓',
    },

    // ── Q17 Hard — midpoints of both diagonals to prove parallelogram ─────────
    {
      difficulty: 'Hard',
      question: 'Gebruik PQRS van V16 met P(1,1), Q(5,1), R(5,4), S(1,4), bepaal die middelpunt van diagonaal QS en bepaal of PQRS ʼn parallelogram is.',
      answer: 'Middelpunt van QS=((5+1)/2,(1+4)/2)=(3;2,5). Aangesien beide diagonale dieselfde middelpunt deel, is PQRS ʼn parallelogram.',
      checkMode: 'self',
    },

    // ── Q18 Hard — side length to determine rectangle ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die lengte van sy PQ in die vierhoek van V16, en bepaal dan of PQRS ʼn reghoek kan wees.',
      answer: 'PQ=√[(5-1)²+(1-1)²]=√16=4. Om alle hoeke te kontroleer sal bevestig dat regte hoeke bestaan (aangesien sye horisontaal/vertikaal is), wat PQRS ʼn reghoek maak.',
      checkMode: 'self',
    },

    // ── Q19 Hard — find D to complete a square ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gegewe A(2,3), B(6,3), C(6,7), bepaal D sodat ABCD ʼn vierkant vorm.',
      answer: 'Aangesien AB horisontaal is (lengte 4) en BC vertikaal is (lengte 4), moet D die vierkant voltooi: D=(2,7).',
      checkMode: 'self',
    },

    // ── Q20 Hard — verify ABCD is a square by all four side lengths ───────────
    {
      difficulty: 'Hard',
      question: 'Verifieer dat ABCD van V19 (A(2,3), B(6,3), C(6,7), D(2,7)) ʼn vierkant is deur al vier sylengtes te bereken en te vergelyk.',
      answer: 'AB=4, BC=4, CD=√[(2-6)²+(7-7)²]=4, DA=√[(2-2)²+(3-7)²]=4. Al vier sye is gelyk aan 4, wat ʼn vierkant bevestig (met die aanname van regte hoeke, wat die horisontale/vertikale sye waarborg).',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het analitiese meetkunde bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blok 1 (0-2):   Afstandsformule — Maklik, Maklik, Medium (diagram: V3)
    // Blok 2 (3-5):   Middelpuntformule — Maklik, Medium, Medium (diagram: V6)
    // Blok 3 (6-8):   Gradiëntformule — Maklik, Medium, Medium (diagram: V9)
    // Blok 4 (9-11):  Vergelyking van 'n lyn — Medium, Medium, Moeilik (diagram: V12)
    // Blok 5 (12-14): Kollinêriteit — Medium, Moeilik, Moeilik (diagram: V15)
    // Blok 6 (15-19): Parallel/loodreg & multi-stap gekombineer — Moeilik x5 (diagram: V20)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Afstandsformule
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen A(2,1) en B(5,5).', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'afstand = √[(5−2)² + (5−1)²] = √[9 + 16] = √25 = 5' },
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen C(−2,1) en D(3,13).', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'afstand = √[(3−(−2))² + (13−1)²] = √[25 + 144] = √169 = 13' },
        { difficulty: 'Medium', question: 'Die punte A(2,3) en B(6,7) word op die Cartesiese vlak getoon. Bepaal die afstand AB, en los jou antwoord in eenvoudigste wortelvorm.', checkMode: 'auto', correctAnswer: '4√2', correctAnswers: ['4√2', '4sqrt(2)', '4 wortel 2', '√32', 'sqrt(32)'], answer: '4√2', explanation: 'afstand = √[(6−2)² + (7−3)²] = √[16 + 16] = √32 = 4√2', diagramSvg: `<svg viewBox="0 0 180 196" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="170" x2="26" y2="26" /><line x1="42" y1="170" x2="42" y2="26" /><line x1="58" y1="170" x2="58" y2="26" /><line x1="74" y1="170" x2="74" y2="26" /><line x1="90" y1="170" x2="90" y2="26" /><line x1="106" y1="170" x2="106" y2="26" /><line x1="122" y1="170" x2="122" y2="26" /><line x1="138" y1="170" x2="138" y2="26" /><line x1="154" y1="170" x2="154" y2="26" /><line x1="26" y1="170" x2="154" y2="170" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="154" y2="154" /><line x1="42" y1="170" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-1</text><text x="58" y="166" text-anchor="middle">1</text><text x="74" y="166" text-anchor="middle">2</text><text x="90" y="166" text-anchor="middle">3</text><text x="106" y="166" text-anchor="middle">4</text><text x="122" y="166" text-anchor="middle">5</text><text x="138" y="166" text-anchor="middle">6</text><text x="154" y="166" text-anchor="middle">7</text><text x="34" y="173" text-anchor="end">-1</text><text x="34" y="141" text-anchor="end">1</text><text x="34" y="125" text-anchor="end">2</text><text x="34" y="109" text-anchor="end">3</text><text x="34" y="93" text-anchor="end">4</text><text x="34" y="77" text-anchor="end">5</text><text x="34" y="61" text-anchor="end">6</text><text x="34" y="45" text-anchor="end">7</text><text x="34" y="29" text-anchor="end">8</text><text x="34" y="166" text-anchor="end">0</text></g><circle cx="74" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="80" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(2,3)</text><text x="144" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(6,7)</text></svg>` },

        // Blok 2 — Middelpuntformule
        { difficulty: 'Easy', question: 'Bepaal die middelpunt van die segment wat (2,4) en (8,10) verbind.', checkMode: 'auto', correctAnswer: '(5,7)', correctAnswers: ['(5,7)', '(5, 7)', '5,7'], answer: '(5,7)', explanation: 'M = ((2 + 8)/2 , (4 + 10)/2) = (5, 7)' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt van die segment wat (−4,7) en (8,−1) verbind.', checkMode: 'auto', correctAnswer: '(2,3)', correctAnswers: ['(2,3)', '(2, 3)', '2,3'], answer: '(2,3)', explanation: 'M = ((−4 + 8)/2 , (7 + (−1))/2) = (4/2 , 6/2) = (2, 3)' },
        { difficulty: 'Medium', question: 'Die punte P(0,2) en Q(6,10) word op die Cartesiese vlak getoon. Bepaal die koördinate van die middelpunt van PQ.', checkMode: 'auto', correctAnswer: '(3,6)', correctAnswers: ['(3,6)', '(3, 6)', '3,6'], answer: '(3,6)', explanation: 'M = ((0 + 6)/2 , (2 + 10)/2) = (3, 6)', diagramSvg: `<svg viewBox="0 0 180 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="218" x2="26" y2="26" /><line x1="42" y1="218" x2="42" y2="26" /><line x1="58" y1="218" x2="58" y2="26" /><line x1="74" y1="218" x2="74" y2="26" /><line x1="90" y1="218" x2="90" y2="26" /><line x1="106" y1="218" x2="106" y2="26" /><line x1="122" y1="218" x2="122" y2="26" /><line x1="138" y1="218" x2="138" y2="26" /><line x1="154" y1="218" x2="154" y2="26" /><line x1="26" y1="218" x2="154" y2="218" /><line x1="26" y1="202" x2="154" y2="202" /><line x1="26" y1="186" x2="154" y2="186" /><line x1="26" y1="170" x2="154" y2="170" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="202" x2="154" y2="202" /><line x1="42" y1="218" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="214" text-anchor="middle">-1</text><text x="58" y="214" text-anchor="middle">1</text><text x="74" y="214" text-anchor="middle">2</text><text x="90" y="214" text-anchor="middle">3</text><text x="106" y="214" text-anchor="middle">4</text><text x="122" y="214" text-anchor="middle">5</text><text x="138" y="214" text-anchor="middle">6</text><text x="154" y="214" text-anchor="middle">7</text><text x="34" y="221" text-anchor="end">-1</text><text x="34" y="189" text-anchor="end">1</text><text x="34" y="173" text-anchor="end">2</text><text x="34" y="157" text-anchor="end">3</text><text x="34" y="141" text-anchor="end">4</text><text x="34" y="125" text-anchor="end">5</text><text x="34" y="109" text-anchor="end">6</text><text x="34" y="93" text-anchor="end">7</text><text x="34" y="77" text-anchor="end">8</text><text x="34" y="61" text-anchor="end">9</text><text x="34" y="45" text-anchor="end">10</text><text x="34" y="29" text-anchor="end">11</text><text x="34" y="214" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,2)</text><text x="134" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(6,10)</text></svg>` },

        // Blok 3 — Gradiëntformule
        { difficulty: 'Easy', question: 'Bepaal die gradiënt van die lyn deur (1,2) en (4,11).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'm = (11 − 2) / (4 − 1) = 9 / 3 = 3' },
        { difficulty: 'Medium', question: 'Bepaal die gradiënt van die lyn deur (−2,7) en (3,−3).', checkMode: 'auto', correctAnswer: '-2', answer: '-2', explanation: 'm = (−3 − 7) / (3 − (−2)) = −10 / 5 = −2' },
        { difficulty: 'Medium', question: 'Die punte A(−1,−2) en B(3,6) word op die Cartesiese vlak getoon. Bepaal die gradiënt van AB.', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'm = (6 − (−2)) / (3 − (−1)) = 8 / 4 = 2', diagramSvg: `<svg viewBox="0 0 148 212" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="186" x2="26" y2="26" /><line x1="42" y1="186" x2="42" y2="26" /><line x1="58" y1="186" x2="58" y2="26" /><line x1="74" y1="186" x2="74" y2="26" /><line x1="90" y1="186" x2="90" y2="26" /><line x1="106" y1="186" x2="106" y2="26" /><line x1="122" y1="186" x2="122" y2="26" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="122" y2="138" /><line x1="58" y1="186" x2="58" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-2</text><text x="42" y="150" text-anchor="middle">-1</text><text x="74" y="150" text-anchor="middle">1</text><text x="90" y="150" text-anchor="middle">2</text><text x="106" y="150" text-anchor="middle">3</text><text x="122" y="150" text-anchor="middle">4</text><text x="50" y="189" text-anchor="end">-3</text><text x="50" y="173" text-anchor="end">-2</text><text x="50" y="157" text-anchor="end">-1</text><text x="50" y="125" text-anchor="end">1</text><text x="50" y="109" text-anchor="end">2</text><text x="50" y="93" text-anchor="end">3</text><text x="50" y="77" text-anchor="end">4</text><text x="50" y="61" text-anchor="end">5</text><text x="50" y="45" text-anchor="end">6</text><text x="50" y="29" text-anchor="end">7</text><text x="50" y="150" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-1,-2)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(3,6)</text></svg>` },

        // Blok 4 — Vergelyking van 'n lyn
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (2,3) gaan met gradiënt 4.', checkMode: 'auto', correctAnswer: 'y=4x-5', correctAnswers: ['y=4x-5', 'y=4x−5', 'y = 4x - 5', 'y = 4x − 5'], answer: 'y = 4x − 5', explanation: 'Gebruik y − y₁ = m(x − x₁): y − 3 = 4(x − 2). Vermenigvuldig uit: y − 3 = 4x − 8. Dus y = 4x − 5.' },
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (1,5) en (3,9) gaan.', checkMode: 'auto', correctAnswer: 'y=2x+3', correctAnswers: ['y=2x+3', 'y = 2x + 3'], answer: 'y = 2x + 3', explanation: 'm = (9 − 5)/(3 − 1) = 4/2 = 2. Met y − 5 = 2(x − 1): y = 2x − 2 + 5 = 2x + 3.' },
        { difficulty: 'Hard', question: 'Die punte C(−2,1) en D(2,9) word op die Cartesiese vlak getoon. Bepaal die vergelyking van lyn CD.', checkMode: 'auto', correctAnswer: 'y=2x+5', correctAnswers: ['y=2x+5', 'y = 2x + 5'], answer: 'y = 2x + 5', explanation: 'm = (9 − 1)/(2 − (−2)) = 8/4 = 2. Met y − 1 = 2(x − (−2)): y − 1 = 2x + 4. Dus y = 2x + 5.', diagramSvg: `<svg viewBox="0 0 148 228" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="202" x2="26" y2="26" /><line x1="42" y1="202" x2="42" y2="26" /><line x1="58" y1="202" x2="58" y2="26" /><line x1="74" y1="202" x2="74" y2="26" /><line x1="90" y1="202" x2="90" y2="26" /><line x1="106" y1="202" x2="106" y2="26" /><line x1="122" y1="202" x2="122" y2="26" /><line x1="26" y1="202" x2="122" y2="202" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="186" x2="122" y2="186" /><line x1="74" y1="202" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="198" text-anchor="middle">-3</text><text x="42" y="198" text-anchor="middle">-2</text><text x="58" y="198" text-anchor="middle">-1</text><text x="90" y="198" text-anchor="middle">1</text><text x="106" y="198" text-anchor="middle">2</text><text x="122" y="198" text-anchor="middle">3</text><text x="66" y="205" text-anchor="end">-1</text><text x="66" y="173" text-anchor="end">1</text><text x="66" y="157" text-anchor="end">2</text><text x="66" y="141" text-anchor="end">3</text><text x="66" y="125" text-anchor="end">4</text><text x="66" y="109" text-anchor="end">5</text><text x="66" y="93" text-anchor="end">6</text><text x="66" y="77" text-anchor="end">7</text><text x="66" y="61" text-anchor="end">8</text><text x="66" y="45" text-anchor="end">9</text><text x="66" y="29" text-anchor="end">10</text><text x="66" y="198" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">C(-2,1)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(2,9)</text></svg>` },

        // Blok 5 — Kollinêriteit
        { difficulty: 'Medium', question: 'Bepaal of die punte (1,1), (3,5) en (5,9) kollineêr is.', answer: 'Gradiënt (1,1)-(3,5) = (5-1)/(3-1) = 4/2 = 2. Gradiënt (3,5)-(5,9) = (9-5)/(5-3) = 4/2 = 2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal of die punte (−1,4), (1,0) en (4,−6) kollineêr is.', answer: 'Gradiënt (-1,4)-(1,0) = (0-4)/(1-(-1)) = -4/2 = -2. Gradiënt (1,0)-(4,-6) = (-6-0)/(4-1) = -6/3 = -2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(−2,−3), Q(1,3) en R(3,7) word op die Cartesiese vlak getoon. Bepaal of P, Q en R kollineêr is, en wys jou werk.', answer: 'Gradiënt PQ = (3-(-3))/(1-(-2)) = 6/3 = 2. Gradiënt QR = (7-3)/(3-1) = 4/2 = 2. Aangesien gradiënt PQ = gradiënt QR, en Q ʼn gemeenskaplike punt is, is P, Q en R kollineêr.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 164 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="218" x2="26" y2="26" /><line x1="42" y1="218" x2="42" y2="26" /><line x1="58" y1="218" x2="58" y2="26" /><line x1="74" y1="218" x2="74" y2="26" /><line x1="90" y1="218" x2="90" y2="26" /><line x1="106" y1="218" x2="106" y2="26" /><line x1="122" y1="218" x2="122" y2="26" /><line x1="138" y1="218" x2="138" y2="26" /><line x1="26" y1="218" x2="138" y2="218" /><line x1="26" y1="202" x2="138" y2="202" /><line x1="26" y1="186" x2="138" y2="186" /><line x1="26" y1="170" x2="138" y2="170" /><line x1="26" y1="154" x2="138" y2="154" /><line x1="26" y1="138" x2="138" y2="138" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="138" y2="154" /><line x1="74" y1="218" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-3</text><text x="42" y="166" text-anchor="middle">-2</text><text x="58" y="166" text-anchor="middle">-1</text><text x="90" y="166" text-anchor="middle">1</text><text x="106" y="166" text-anchor="middle">2</text><text x="122" y="166" text-anchor="middle">3</text><text x="138" y="166" text-anchor="middle">4</text><text x="66" y="221" text-anchor="end">-4</text><text x="66" y="205" text-anchor="end">-3</text><text x="66" y="189" text-anchor="end">-2</text><text x="66" y="173" text-anchor="end">-1</text><text x="66" y="141" text-anchor="end">1</text><text x="66" y="125" text-anchor="end">2</text><text x="66" y="109" text-anchor="end">3</text><text x="66" y="93" text-anchor="end">4</text><text x="66" y="77" text-anchor="end">5</text><text x="66" y="61" text-anchor="end">6</text><text x="66" y="45" text-anchor="end">7</text><text x="66" y="29" text-anchor="end">8</text><text x="66" y="166" text-anchor="end">0</text></g><circle cx="42" cy="202" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="194" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(-2,-3)</text><text x="96" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(1,3)</text><text x="128" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(3,7)</text></svg>` },

        // Blok 6 — Parallel/loodreg en multi-stap gekombineer
        { difficulty: 'Hard', question: 'ʼn Lyn gaan deur (0,1) en (4,9). ʼn Tweede lyn gaan deur (−1,2) en (1,6). Bepaal of die twee lyne parallel is, en wys jou werk.', answer: 'Gradiënt 1 = (9-1)/(4-0) = 8/4 = 2. Gradiënt 2 = (6-2)/(1-(-1)) = 4/2 = 2. Aangesien die gradiënte gelyk is, is die lyne parallel.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Lyn het gradiënt 2/3. ʼn Tweede lyn gaan deur (0,0) en (2,−3). Bepaal of die twee lyne loodreg is, en wys jou werk.', answer: 'Gradiënt van tweede lyn = (-3-0)/(2-0) = -3/2. Produk van gradiënte = (2/3)×(-3/2) = -1. Aangesien die produk van die gradiënte -1 is, is die lyne loodreg.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gegewe A(1,2) en B(7,10), bereken die afstand AB en die middelpunt van AB, en wys albei berekeninge.', answer: 'Afstand AB = √[(7-1)²+(10-2)²] = √[36+64] = √100 = 10. Middelpunt = ((1+7)/2 , (2+10)/2) = (4,6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ABCD is ʼn parallelogram met A(1,1), B(5,1) en C(6,4). Bepaal die koördinate van D, en wys jou werk.', answer: 'In ʼn parallelogram deel die diagonale AC en BD dieselfde middelpunt. Middelpunt van AC = ((1+6)/2 , (1+4)/2) = (3,5; 2,5). Laat D=(x,y): (5+x)/2=3,5 gee x=2. (1+y)/2=2,5 gee y=4. Dus D=(2,4).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(0,0), Q(4,0), R(4,3) en S(0,3) word op die Cartesiese vlak getoon en vorm vierhoek PQRS. Bewys dat PQRS ʼn reghoek is deur die lengtes van sy diagonale te vergelyk.', answer: 'Diagonaal PR = √[(4-0)²+(3-0)²] = √[16+9] = √25 = 5. Diagonaal QS = √[(0-4)²+(3-0)²] = √[16+9] = √25 = 5. Aangesien PR = QS, is die diagonale gelyk in lengte, dus is PQRS ʼn reghoek.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 148 132" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="106" x2="26" y2="26" /><line x1="42" y1="106" x2="42" y2="26" /><line x1="58" y1="106" x2="58" y2="26" /><line x1="74" y1="106" x2="74" y2="26" /><line x1="90" y1="106" x2="90" y2="26" /><line x1="106" y1="106" x2="106" y2="26" /><line x1="122" y1="106" x2="122" y2="26" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="90" x2="122" y2="90" /><line x1="42" y1="106" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="102" text-anchor="middle">-1</text><text x="58" y="102" text-anchor="middle">1</text><text x="74" y="102" text-anchor="middle">2</text><text x="90" y="102" text-anchor="middle">3</text><text x="106" y="102" text-anchor="middle">4</text><text x="122" y="102" text-anchor="middle">5</text><text x="34" y="109" text-anchor="end">-1</text><text x="34" y="77" text-anchor="end">1</text><text x="34" y="61" text-anchor="end">2</text><text x="34" y="45" text-anchor="end">3</text><text x="34" y="29" text-anchor="end">4</text><text x="34" y="102" text-anchor="end">0</text></g><path d="M 42 90 L 106 90 L 106 42 L 42 42 Z" fill="none" stroke="#0f1f3d" stroke-width="2" /><line x1="42" y1="90" x2="106" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><line x1="106" y1="90" x2="42" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><circle cx="42" cy="90" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="90" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="82" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,0)</text><text x="112" y="82" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(4,0)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(4,3)</text><text x="48" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">S(0,3)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die afstands-, middelpunt- en gradiëntformules bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd het oor kollinêriteit of vergelykings van lyne en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor die drie formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Afstandsformule
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen A(2,3) en B(5,7).', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'afstand = √[(5−2)² + (7−3)²] = √[9 + 16] = √25 = 5' },
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen C(−1,2) en D(4,14).', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'afstand = √[(4−(−1))² + (14−2)²] = √[25 + 144] = √169 = 13' },
        { difficulty: 'Medium', question: 'Die punte A(1,1) en B(7,9) word op die Cartesiese vlak getoon. Bepaal die afstand AB.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'afstand = √[(7−1)² + (9−1)²] = √[36 + 64] = √100 = 10', diagramSvg: `<svg viewBox="0 0 196 228" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="202" x2="26" y2="26" /><line x1="42" y1="202" x2="42" y2="26" /><line x1="58" y1="202" x2="58" y2="26" /><line x1="74" y1="202" x2="74" y2="26" /><line x1="90" y1="202" x2="90" y2="26" /><line x1="106" y1="202" x2="106" y2="26" /><line x1="122" y1="202" x2="122" y2="26" /><line x1="138" y1="202" x2="138" y2="26" /><line x1="154" y1="202" x2="154" y2="26" /><line x1="170" y1="202" x2="170" y2="26" /><line x1="26" y1="202" x2="170" y2="202" /><line x1="26" y1="186" x2="170" y2="186" /><line x1="26" y1="170" x2="170" y2="170" /><line x1="26" y1="154" x2="170" y2="154" /><line x1="26" y1="138" x2="170" y2="138" /><line x1="26" y1="122" x2="170" y2="122" /><line x1="26" y1="106" x2="170" y2="106" /><line x1="26" y1="90" x2="170" y2="90" /><line x1="26" y1="74" x2="170" y2="74" /><line x1="26" y1="58" x2="170" y2="58" /><line x1="26" y1="42" x2="170" y2="42" /><line x1="26" y1="26" x2="170" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="186" x2="170" y2="186" /><line x1="42" y1="202" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="198" text-anchor="middle">-1</text><text x="58" y="198" text-anchor="middle">1</text><text x="74" y="198" text-anchor="middle">2</text><text x="90" y="198" text-anchor="middle">3</text><text x="106" y="198" text-anchor="middle">4</text><text x="122" y="198" text-anchor="middle">5</text><text x="138" y="198" text-anchor="middle">6</text><text x="154" y="198" text-anchor="middle">7</text><text x="170" y="198" text-anchor="middle">8</text><text x="34" y="205" text-anchor="end">-1</text><text x="34" y="173" text-anchor="end">1</text><text x="34" y="157" text-anchor="end">2</text><text x="34" y="141" text-anchor="end">3</text><text x="34" y="125" text-anchor="end">4</text><text x="34" y="109" text-anchor="end">5</text><text x="34" y="93" text-anchor="end">6</text><text x="34" y="77" text-anchor="end">7</text><text x="34" y="61" text-anchor="end">8</text><text x="34" y="45" text-anchor="end">9</text><text x="34" y="29" text-anchor="end">10</text><text x="34" y="198" text-anchor="end">0</text></g><circle cx="58" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="154" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="64" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(1,1)</text><text x="160" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(7,9)</text></svg>` },

        // Blok 2 — Middelpuntformule
        { difficulty: 'Easy', question: 'Bepaal die middelpunt van die segment wat (4,2) en (10,8) verbind.', checkMode: 'auto', correctAnswer: '(7,5)', correctAnswers: ['(7,5)', '(7, 5)', '7,5'], answer: '(7,5)', explanation: 'M = ((4 + 10)/2 , (2 + 8)/2) = (7, 5)' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt van die segment wat (−5,3) en (9,−7) verbind.', checkMode: 'auto', correctAnswer: '(2,-2)', correctAnswers: ['(2,-2)', '(2, -2)', '2,-2', '(2,−2)', '(2, −2)'], answer: '(2,−2)', explanation: 'M = ((−5 + 9)/2 , (3 + (−7))/2) = (4/2 , −4/2) = (2, −2)' },
        { difficulty: 'Medium', question: 'Die punte P(−2,4) en Q(6,−2) word op die Cartesiese vlak getoon. Bepaal die koördinate van die middelpunt van PQ.', checkMode: 'auto', correctAnswer: '(2,1)', correctAnswers: ['(2,1)', '(2, 1)', '2,1'], answer: '(2,1)', explanation: 'M = ((−2 + 6)/2 , (4 + (−2))/2) = (2, 1)', diagramSvg: `<svg viewBox="0 0 212 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="154" x2="26" y2="26" /><line x1="42" y1="154" x2="42" y2="26" /><line x1="58" y1="154" x2="58" y2="26" /><line x1="74" y1="154" x2="74" y2="26" /><line x1="90" y1="154" x2="90" y2="26" /><line x1="106" y1="154" x2="106" y2="26" /><line x1="122" y1="154" x2="122" y2="26" /><line x1="138" y1="154" x2="138" y2="26" /><line x1="154" y1="154" x2="154" y2="26" /><line x1="170" y1="154" x2="170" y2="26" /><line x1="186" y1="154" x2="186" y2="26" /><line x1="26" y1="154" x2="186" y2="154" /><line x1="26" y1="138" x2="186" y2="138" /><line x1="26" y1="122" x2="186" y2="122" /><line x1="26" y1="106" x2="186" y2="106" /><line x1="26" y1="90" x2="186" y2="90" /><line x1="26" y1="74" x2="186" y2="74" /><line x1="26" y1="58" x2="186" y2="58" /><line x1="26" y1="42" x2="186" y2="42" /><line x1="26" y1="26" x2="186" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="186" y2="106" /><line x1="74" y1="154" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-3</text><text x="42" y="118" text-anchor="middle">-2</text><text x="58" y="118" text-anchor="middle">-1</text><text x="90" y="118" text-anchor="middle">1</text><text x="106" y="118" text-anchor="middle">2</text><text x="122" y="118" text-anchor="middle">3</text><text x="138" y="118" text-anchor="middle">4</text><text x="154" y="118" text-anchor="middle">5</text><text x="170" y="118" text-anchor="middle">6</text><text x="186" y="118" text-anchor="middle">7</text><text x="66" y="157" text-anchor="end">-3</text><text x="66" y="141" text-anchor="end">-2</text><text x="66" y="125" text-anchor="end">-1</text><text x="66" y="93" text-anchor="end">1</text><text x="66" y="77" text-anchor="end">2</text><text x="66" y="61" text-anchor="end">3</text><text x="66" y="45" text-anchor="end">4</text><text x="66" y="29" text-anchor="end">5</text><text x="66" y="118" text-anchor="end">0</text></g><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="170" cy="138" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(-2,4)</text><text x="166" y="130" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(6,-2)</text></svg>` },

        // Blok 3 — Gradiëntformule
        { difficulty: 'Easy', question: 'Bepaal die gradiënt van die lyn deur (2,3) en (5,15).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'm = (15 − 3) / (5 − 2) = 12 / 3 = 4' },
        { difficulty: 'Medium', question: 'Bepaal die gradiënt van die lyn deur (−3,8) en (2,−2).', checkMode: 'auto', correctAnswer: '-2', answer: '-2', explanation: 'm = (−2 − 8) / (2 − (−3)) = −10 / 5 = −2' },
        { difficulty: 'Medium', question: 'Die punte A(−2,1) en B(2,9) word op die Cartesiese vlak getoon. Bepaal die gradiënt van AB.', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'm = (9 − 1) / (2 − (−2)) = 8 / 4 = 2', diagramSvg: `<svg viewBox="0 0 148 228" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="202" x2="26" y2="26" /><line x1="42" y1="202" x2="42" y2="26" /><line x1="58" y1="202" x2="58" y2="26" /><line x1="74" y1="202" x2="74" y2="26" /><line x1="90" y1="202" x2="90" y2="26" /><line x1="106" y1="202" x2="106" y2="26" /><line x1="122" y1="202" x2="122" y2="26" /><line x1="26" y1="202" x2="122" y2="202" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="186" x2="122" y2="186" /><line x1="74" y1="202" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="198" text-anchor="middle">-3</text><text x="42" y="198" text-anchor="middle">-2</text><text x="58" y="198" text-anchor="middle">-1</text><text x="90" y="198" text-anchor="middle">1</text><text x="106" y="198" text-anchor="middle">2</text><text x="122" y="198" text-anchor="middle">3</text><text x="66" y="205" text-anchor="end">-1</text><text x="66" y="173" text-anchor="end">1</text><text x="66" y="157" text-anchor="end">2</text><text x="66" y="141" text-anchor="end">3</text><text x="66" y="125" text-anchor="end">4</text><text x="66" y="109" text-anchor="end">5</text><text x="66" y="93" text-anchor="end">6</text><text x="66" y="77" text-anchor="end">7</text><text x="66" y="61" text-anchor="end">8</text><text x="66" y="45" text-anchor="end">9</text><text x="66" y="29" text-anchor="end">10</text><text x="66" y="198" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-2,1)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(2,9)</text></svg>` },

        // Blok 4 — Vergelyking van 'n lyn
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (1,4) gaan met gradiënt 3.', checkMode: 'auto', correctAnswer: 'y=3x+1', correctAnswers: ['y=3x+1', 'y = 3x + 1'], answer: 'y = 3x + 1', explanation: 'Gebruik y − y₁ = m(x − x₁): y − 4 = 3(x − 1). Vermenigvuldig uit: y − 4 = 3x − 3. Dus y = 3x + 1.' },
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (2,7) en (4,11) gaan.', checkMode: 'auto', correctAnswer: 'y=2x+3', correctAnswers: ['y=2x+3', 'y = 2x + 3'], answer: 'y = 2x + 3', explanation: 'm = (11 − 7)/(4 − 2) = 4/2 = 2. Met y − 7 = 2(x − 2): y = 2x − 4 + 7 = 2x + 3.' },
        { difficulty: 'Hard', question: 'Die punte C(−1,−1) en D(3,7) word op die Cartesiese vlak getoon. Bepaal die vergelyking van lyn CD.', checkMode: 'auto', correctAnswer: 'y=2x+1', correctAnswers: ['y=2x+1', 'y = 2x + 1'], answer: 'y = 2x + 1', explanation: 'm = (7 − (−1))/(3 − (−1)) = 8/4 = 2. Met y − (−1) = 2(x − (−1)): y + 1 = 2x + 2. Dus y = 2x + 1.', diagramSvg: `<svg viewBox="0 0 148 212" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="186" x2="26" y2="26" /><line x1="42" y1="186" x2="42" y2="26" /><line x1="58" y1="186" x2="58" y2="26" /><line x1="74" y1="186" x2="74" y2="26" /><line x1="90" y1="186" x2="90" y2="26" /><line x1="106" y1="186" x2="106" y2="26" /><line x1="122" y1="186" x2="122" y2="26" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="122" y2="154" /><line x1="58" y1="186" x2="58" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-2</text><text x="42" y="166" text-anchor="middle">-1</text><text x="74" y="166" text-anchor="middle">1</text><text x="90" y="166" text-anchor="middle">2</text><text x="106" y="166" text-anchor="middle">3</text><text x="122" y="166" text-anchor="middle">4</text><text x="50" y="189" text-anchor="end">-2</text><text x="50" y="173" text-anchor="end">-1</text><text x="50" y="141" text-anchor="end">1</text><text x="50" y="125" text-anchor="end">2</text><text x="50" y="109" text-anchor="end">3</text><text x="50" y="93" text-anchor="end">4</text><text x="50" y="77" text-anchor="end">5</text><text x="50" y="61" text-anchor="end">6</text><text x="50" y="45" text-anchor="end">7</text><text x="50" y="29" text-anchor="end">8</text><text x="50" y="166" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">C(-1,-1)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(3,7)</text></svg>` },

        // Blok 5 — Kollinêriteit
        { difficulty: 'Medium', question: 'Bepaal of die punte (2,2), (4,6) en (6,10) kollineêr is.', answer: 'Gradiënt (2,2)-(4,6) = (6-2)/(4-2) = 4/2 = 2. Gradiënt (4,6)-(6,10) = (10-6)/(6-4) = 4/2 = 2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal of die punte (−2,5), (0,1) en (3,−5) kollineêr is.', answer: 'Gradiënt (-2,5)-(0,1) = (1-5)/(0-(-2)) = -4/2 = -2. Gradiënt (0,1)-(3,-5) = (-5-1)/(3-0) = -6/3 = -2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(−3,−4), Q(0,2) en R(2,6) word op die Cartesiese vlak getoon. Bepaal of P, Q en R kollineêr is, en wys jou werk.', answer: 'Gradiënt PQ = (2-(-4))/(0-(-3)) = 6/3 = 2. Gradiënt QR = (6-2)/(2-0) = 4/2 = 2. Aangesien gradiënt PQ = gradiënt QR, en Q ʼn gemeenskaplike punt is, is P, Q en R kollineêr.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 164 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="218" x2="26" y2="26" /><line x1="42" y1="218" x2="42" y2="26" /><line x1="58" y1="218" x2="58" y2="26" /><line x1="74" y1="218" x2="74" y2="26" /><line x1="90" y1="218" x2="90" y2="26" /><line x1="106" y1="218" x2="106" y2="26" /><line x1="122" y1="218" x2="122" y2="26" /><line x1="138" y1="218" x2="138" y2="26" /><line x1="26" y1="218" x2="138" y2="218" /><line x1="26" y1="202" x2="138" y2="202" /><line x1="26" y1="186" x2="138" y2="186" /><line x1="26" y1="170" x2="138" y2="170" /><line x1="26" y1="154" x2="138" y2="154" /><line x1="26" y1="138" x2="138" y2="138" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="138" x2="138" y2="138" /><line x1="90" y1="218" x2="90" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="150" text-anchor="middle">-4</text><text x="42" y="150" text-anchor="middle">-3</text><text x="58" y="150" text-anchor="middle">-2</text><text x="74" y="150" text-anchor="middle">-1</text><text x="106" y="150" text-anchor="middle">1</text><text x="122" y="150" text-anchor="middle">2</text><text x="138" y="150" text-anchor="middle">3</text><text x="82" y="221" text-anchor="end">-5</text><text x="82" y="205" text-anchor="end">-4</text><text x="82" y="189" text-anchor="end">-3</text><text x="82" y="173" text-anchor="end">-2</text><text x="82" y="157" text-anchor="end">-1</text><text x="82" y="125" text-anchor="end">1</text><text x="82" y="109" text-anchor="end">2</text><text x="82" y="93" text-anchor="end">3</text><text x="82" y="77" text-anchor="end">4</text><text x="82" y="61" text-anchor="end">5</text><text x="82" y="45" text-anchor="end">6</text><text x="82" y="29" text-anchor="end">7</text><text x="82" y="150" text-anchor="end">0</text></g><circle cx="42" cy="202" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="194" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(-3,-4)</text><text x="96" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(0,2)</text><text x="128" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(2,6)</text></svg>` },

        // Blok 6 — Parallel/loodreg en multi-stap gekombineer
        { difficulty: 'Hard', question: 'ʼn Lyn gaan deur (1,2) en (5,10). ʼn Tweede lyn gaan deur (−2,0) en (0,4). Bepaal of die twee lyne parallel is, en wys jou werk.', answer: 'Gradiënt 1 = (10-2)/(5-1) = 8/4 = 2. Gradiënt 2 = (4-0)/(0-(-2)) = 4/2 = 2. Aangesien die gradiënte gelyk is, is die lyne parallel.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Lyn het gradiënt 3/4. ʼn Tweede lyn gaan deur (0,0) en (3,−4). Bepaal of die twee lyne loodreg is, en wys jou werk.', answer: 'Gradiënt van tweede lyn = (-4-0)/(3-0) = -4/3. Produk van gradiënte = (3/4)×(-4/3) = -1. Aangesien die produk van die gradiënte -1 is, is die lyne loodreg.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gegewe A(2,3) en B(8,11), bereken die afstand AB en die middelpunt van AB, en wys albei berekeninge.', answer: 'Afstand AB = √[(8-2)²+(11-3)²] = √[36+64] = √100 = 10. Middelpunt = ((2+8)/2 , (3+11)/2) = (5,7).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ABCD is ʼn parallelogram met A(2,2), B(6,2) en C(7,5). Bepaal die koördinate van D, en wys jou werk.', answer: 'In ʼn parallelogram deel die diagonale AC en BD dieselfde middelpunt. Middelpunt van AC = ((2+7)/2 , (2+5)/2) = (4,5; 3,5). Laat D=(x,y): (6+x)/2=4,5 gee x=3. (2+y)/2=3,5 gee y=5. Dus D=(3,5).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(0,0), Q(5,0), R(5,2) en S(0,2) word op die Cartesiese vlak getoon en vorm vierhoek PQRS. Bewys dat PQRS ʼn reghoek is deur die lengtes van sy diagonale te vergelyk.', answer: 'Diagonaal PR = √[(5-0)²+(2-0)²] = √[25+4] = √29. Diagonaal QS = √[(0-5)²+(2-0)²] = √[25+4] = √29. Aangesien PR = QS, is die diagonale gelyk in lengte, dus is PQRS ʼn reghoek.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 164 116" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="90" x2="26" y2="26" /><line x1="42" y1="90" x2="42" y2="26" /><line x1="58" y1="90" x2="58" y2="26" /><line x1="74" y1="90" x2="74" y2="26" /><line x1="90" y1="90" x2="90" y2="26" /><line x1="106" y1="90" x2="106" y2="26" /><line x1="122" y1="90" x2="122" y2="26" /><line x1="138" y1="90" x2="138" y2="26" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="74" x2="138" y2="74" /><line x1="42" y1="90" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="86" text-anchor="middle">-1</text><text x="58" y="86" text-anchor="middle">1</text><text x="74" y="86" text-anchor="middle">2</text><text x="90" y="86" text-anchor="middle">3</text><text x="106" y="86" text-anchor="middle">4</text><text x="122" y="86" text-anchor="middle">5</text><text x="138" y="86" text-anchor="middle">6</text><text x="34" y="93" text-anchor="end">-1</text><text x="34" y="61" text-anchor="end">1</text><text x="34" y="45" text-anchor="end">2</text><text x="34" y="29" text-anchor="end">3</text><text x="34" y="86" text-anchor="end">0</text></g><path d="M 42 74 L 122 74 L 122 42 L 42 42 Z" fill="none" stroke="#0f1f3d" stroke-width="2" /><line x1="42" y1="74" x2="122" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><line x1="122" y1="74" x2="42" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><circle cx="42" cy="74" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="74" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,0)</text><text x="128" y="66" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(5,0)</text><text x="128" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(5,2)</text><text x="48" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">S(0,2)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die afstands-, middelpunt- en gradiëntformules bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd het oor kollinêriteit of vergelykings van lyne en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor die drie formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Afstandsformule
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen A(3,1) en B(7,4).', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'afstand = √[(7−3)² + (4−1)²] = √[16 + 9] = √25 = 5' },
        { difficulty: 'Easy', question: 'Bepaal die afstand tussen C(−4,2) en D(1,14).', checkMode: 'auto', correctAnswer: '13', answer: '13', explanation: 'afstand = √[(1−(−4))² + (14−2)²] = √[25 + 144] = √169 = 13' },
        { difficulty: 'Medium', question: 'Die punte A(−1,2) en B(5,10) word op die Cartesiese vlak getoon. Bepaal die afstand AB.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: 'afstand = √[(5−(−1))² + (10−2)²] = √[36 + 64] = √100 = 10', diagramSvg: `<svg viewBox="0 0 180 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="218" x2="26" y2="26" /><line x1="42" y1="218" x2="42" y2="26" /><line x1="58" y1="218" x2="58" y2="26" /><line x1="74" y1="218" x2="74" y2="26" /><line x1="90" y1="218" x2="90" y2="26" /><line x1="106" y1="218" x2="106" y2="26" /><line x1="122" y1="218" x2="122" y2="26" /><line x1="138" y1="218" x2="138" y2="26" /><line x1="154" y1="218" x2="154" y2="26" /><line x1="26" y1="218" x2="154" y2="218" /><line x1="26" y1="202" x2="154" y2="202" /><line x1="26" y1="186" x2="154" y2="186" /><line x1="26" y1="170" x2="154" y2="170" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="202" x2="154" y2="202" /><line x1="58" y1="218" x2="58" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="214" text-anchor="middle">-2</text><text x="42" y="214" text-anchor="middle">-1</text><text x="74" y="214" text-anchor="middle">1</text><text x="90" y="214" text-anchor="middle">2</text><text x="106" y="214" text-anchor="middle">3</text><text x="122" y="214" text-anchor="middle">4</text><text x="138" y="214" text-anchor="middle">5</text><text x="154" y="214" text-anchor="middle">6</text><text x="50" y="221" text-anchor="end">-1</text><text x="50" y="189" text-anchor="end">1</text><text x="50" y="173" text-anchor="end">2</text><text x="50" y="157" text-anchor="end">3</text><text x="50" y="141" text-anchor="end">4</text><text x="50" y="125" text-anchor="end">5</text><text x="50" y="109" text-anchor="end">6</text><text x="50" y="93" text-anchor="end">7</text><text x="50" y="77" text-anchor="end">8</text><text x="50" y="61" text-anchor="end">9</text><text x="50" y="45" text-anchor="end">10</text><text x="50" y="29" text-anchor="end">11</text><text x="50" y="214" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-1,2)</text><text x="134" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(5,10)</text></svg>` },

        // Blok 2 — Middelpuntformule
        { difficulty: 'Easy', question: 'Bepaal die middelpunt van die segment wat (3,5) en (9,11) verbind.', checkMode: 'auto', correctAnswer: '(6,8)', correctAnswers: ['(6,8)', '(6, 8)', '6,8'], answer: '(6,8)', explanation: 'M = ((3 + 9)/2 , (5 + 11)/2) = (6, 8)' },
        { difficulty: 'Medium', question: 'Bepaal die middelpunt van die segment wat (−6,4) en (8,−2) verbind.', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '(1, 1)', '1,1'], answer: '(1,1)', explanation: 'M = ((−6 + 8)/2 , (4 + (−2))/2) = (2/2 , 2/2) = (1, 1)' },
        { difficulty: 'Medium', question: 'Die punte P(−4,−1) en Q(2,7) word op die Cartesiese vlak getoon. Bepaal die koördinate van die middelpunt van PQ.', checkMode: 'auto', correctAnswer: '(-1,3)', correctAnswers: ['(-1,3)', '(-1, 3)', '-1,3', '(−1,3)', '(−1, 3)'], answer: '(−1,3)', explanation: 'M = ((−4 + 2)/2 , (−1 + 7)/2) = (−2/2 , 6/2) = (−1, 3)', diagramSvg: `<svg viewBox="0 0 180 212" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="186" x2="26" y2="26" /><line x1="42" y1="186" x2="42" y2="26" /><line x1="58" y1="186" x2="58" y2="26" /><line x1="74" y1="186" x2="74" y2="26" /><line x1="90" y1="186" x2="90" y2="26" /><line x1="106" y1="186" x2="106" y2="26" /><line x1="122" y1="186" x2="122" y2="26" /><line x1="138" y1="186" x2="138" y2="26" /><line x1="154" y1="186" x2="154" y2="26" /><line x1="26" y1="186" x2="154" y2="186" /><line x1="26" y1="170" x2="154" y2="170" /><line x1="26" y1="154" x2="154" y2="154" /><line x1="26" y1="138" x2="154" y2="138" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="154" y2="154" /><line x1="106" y1="186" x2="106" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-5</text><text x="42" y="166" text-anchor="middle">-4</text><text x="58" y="166" text-anchor="middle">-3</text><text x="74" y="166" text-anchor="middle">-2</text><text x="90" y="166" text-anchor="middle">-1</text><text x="122" y="166" text-anchor="middle">1</text><text x="138" y="166" text-anchor="middle">2</text><text x="154" y="166" text-anchor="middle">3</text><text x="98" y="189" text-anchor="end">-2</text><text x="98" y="173" text-anchor="end">-1</text><text x="98" y="141" text-anchor="end">1</text><text x="98" y="125" text-anchor="end">2</text><text x="98" y="109" text-anchor="end">3</text><text x="98" y="93" text-anchor="end">4</text><text x="98" y="77" text-anchor="end">5</text><text x="98" y="61" text-anchor="end">6</text><text x="98" y="45" text-anchor="end">7</text><text x="98" y="29" text-anchor="end">8</text><text x="98" y="166" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(-4,-1)</text><text x="144" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(2,7)</text></svg>` },

        // Blok 3 — Gradiëntformule
        { difficulty: 'Easy', question: 'Bepaal die gradiënt van die lyn deur (3,2) en (6,14).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'm = (14 − 2) / (6 − 3) = 12 / 3 = 4' },
        { difficulty: 'Medium', question: 'Bepaal die gradiënt van die lyn deur (−4,9) en (1,−1).', checkMode: 'auto', correctAnswer: '-2', answer: '-2', explanation: 'm = (−1 − 9) / (1 − (−4)) = −10 / 5 = −2' },
        { difficulty: 'Medium', question: 'Die punte A(−3,−1) en B(1,7) word op die Cartesiese vlak getoon. Bepaal die gradiënt van AB.', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'm = (7 − (−1)) / (1 − (−3)) = 8 / 4 = 2', diagramSvg: `<svg viewBox="0 0 148 212" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="186" x2="26" y2="26" /><line x1="42" y1="186" x2="42" y2="26" /><line x1="58" y1="186" x2="58" y2="26" /><line x1="74" y1="186" x2="74" y2="26" /><line x1="90" y1="186" x2="90" y2="26" /><line x1="106" y1="186" x2="106" y2="26" /><line x1="122" y1="186" x2="122" y2="26" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="154" x2="122" y2="154" /><line x1="90" y1="186" x2="90" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="166" text-anchor="middle">-4</text><text x="42" y="166" text-anchor="middle">-3</text><text x="58" y="166" text-anchor="middle">-2</text><text x="74" y="166" text-anchor="middle">-1</text><text x="106" y="166" text-anchor="middle">1</text><text x="122" y="166" text-anchor="middle">2</text><text x="82" y="189" text-anchor="end">-2</text><text x="82" y="173" text-anchor="end">-1</text><text x="82" y="141" text-anchor="end">1</text><text x="82" y="125" text-anchor="end">2</text><text x="82" y="109" text-anchor="end">3</text><text x="82" y="93" text-anchor="end">4</text><text x="82" y="77" text-anchor="end">5</text><text x="82" y="61" text-anchor="end">6</text><text x="82" y="45" text-anchor="end">7</text><text x="82" y="29" text-anchor="end">8</text><text x="82" y="166" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">A(-3,-1)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">B(1,7)</text></svg>` },

        // Blok 4 — Vergelyking van 'n lyn
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (3,5) gaan met gradiënt 2.', checkMode: 'auto', correctAnswer: 'y=2x-1', correctAnswers: ['y=2x-1', 'y=2x−1', 'y = 2x - 1', 'y = 2x − 1'], answer: 'y = 2x − 1', explanation: 'Gebruik y − y₁ = m(x − x₁): y − 5 = 2(x − 3). Vermenigvuldig uit: y − 5 = 2x − 6. Dus y = 2x − 1.' },
        { difficulty: 'Medium', question: 'Bepaal die vergelyking van die lyn wat deur (0,3) en (2,7) gaan.', checkMode: 'auto', correctAnswer: 'y=2x+3', correctAnswers: ['y=2x+3', 'y = 2x + 3'], answer: 'y = 2x + 3', explanation: 'm = (7 − 3)/(2 − 0) = 4/2 = 2. Met y − 3 = 2(x − 0): y = 2x + 3.' },
        { difficulty: 'Hard', question: 'Die punte C(−2,−3) en D(2,5) word op die Cartesiese vlak getoon. Bepaal die vergelyking van lyn CD.', checkMode: 'auto', correctAnswer: 'y=2x+1', correctAnswers: ['y=2x+1', 'y = 2x + 1'], answer: 'y = 2x + 1', explanation: 'm = (5 − (−3))/(2 − (−2)) = 8/4 = 2. Met y − (−3) = 2(x − (−2)): y + 3 = 2x + 4. Dus y = 2x + 1.', diagramSvg: `<svg viewBox="0 0 148 212" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="186" x2="26" y2="26" /><line x1="42" y1="186" x2="42" y2="26" /><line x1="58" y1="186" x2="58" y2="26" /><line x1="74" y1="186" x2="74" y2="26" /><line x1="90" y1="186" x2="90" y2="26" /><line x1="106" y1="186" x2="106" y2="26" /><line x1="122" y1="186" x2="122" y2="26" /><line x1="26" y1="186" x2="122" y2="186" /><line x1="26" y1="170" x2="122" y2="170" /><line x1="26" y1="154" x2="122" y2="154" /><line x1="26" y1="138" x2="122" y2="138" /><line x1="26" y1="122" x2="122" y2="122" /><line x1="26" y1="106" x2="122" y2="106" /><line x1="26" y1="90" x2="122" y2="90" /><line x1="26" y1="74" x2="122" y2="74" /><line x1="26" y1="58" x2="122" y2="58" /><line x1="26" y1="42" x2="122" y2="42" /><line x1="26" y1="26" x2="122" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="122" x2="122" y2="122" /><line x1="74" y1="186" x2="74" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="134" text-anchor="middle">-3</text><text x="42" y="134" text-anchor="middle">-2</text><text x="58" y="134" text-anchor="middle">-1</text><text x="90" y="134" text-anchor="middle">1</text><text x="106" y="134" text-anchor="middle">2</text><text x="122" y="134" text-anchor="middle">3</text><text x="66" y="189" text-anchor="end">-4</text><text x="66" y="173" text-anchor="end">-3</text><text x="66" y="157" text-anchor="end">-2</text><text x="66" y="141" text-anchor="end">-1</text><text x="66" y="109" text-anchor="end">1</text><text x="66" y="93" text-anchor="end">2</text><text x="66" y="77" text-anchor="end">3</text><text x="66" y="61" text-anchor="end">4</text><text x="66" y="45" text-anchor="end">5</text><text x="66" y="29" text-anchor="end">6</text><text x="66" y="134" text-anchor="end">0</text></g><circle cx="42" cy="170" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="106" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="162" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">C(-2,-3)</text><text x="112" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">D(2,5)</text></svg>` },

        // Blok 5 — Kollinêriteit
        { difficulty: 'Medium', question: 'Bepaal of die punte (0,3), (2,7) en (4,11) kollineêr is.', answer: 'Gradiënt (0,3)-(2,7) = (7-3)/(2-0) = 4/2 = 2. Gradiënt (2,7)-(4,11) = (11-7)/(4-2) = 4/2 = 2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal of die punte (−3,6), (0,0) en (2,−4) kollineêr is.', answer: 'Gradiënt (-3,6)-(0,0) = (0-6)/(0-(-3)) = -6/3 = -2. Gradiënt (0,0)-(2,-4) = (-4-0)/(2-0) = -4/2 = -2. Aangesien albei gradiënte gelyk is, is die drie punte kollineêr.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(−4,−5), Q(−1,1) en R(1,5) word op die Cartesiese vlak getoon. Bepaal of P, Q en R kollineêr is, en wys jou werk.', answer: 'Gradiënt PQ = (1-(-5))/(-1-(-4)) = 6/3 = 2. Gradiënt QR = (5-1)/(1-(-1)) = 4/2 = 2. Aangesien gradiënt PQ = gradiënt QR, en Q ʼn gemeenskaplike punt is, is P, Q en R kollineêr.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 164 244" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="218" x2="26" y2="26" /><line x1="42" y1="218" x2="42" y2="26" /><line x1="58" y1="218" x2="58" y2="26" /><line x1="74" y1="218" x2="74" y2="26" /><line x1="90" y1="218" x2="90" y2="26" /><line x1="106" y1="218" x2="106" y2="26" /><line x1="122" y1="218" x2="122" y2="26" /><line x1="138" y1="218" x2="138" y2="26" /><line x1="26" y1="218" x2="138" y2="218" /><line x1="26" y1="202" x2="138" y2="202" /><line x1="26" y1="186" x2="138" y2="186" /><line x1="26" y1="170" x2="138" y2="170" /><line x1="26" y1="154" x2="138" y2="154" /><line x1="26" y1="138" x2="138" y2="138" /><line x1="26" y1="122" x2="138" y2="122" /><line x1="26" y1="106" x2="138" y2="106" /><line x1="26" y1="90" x2="138" y2="90" /><line x1="26" y1="74" x2="138" y2="74" /><line x1="26" y1="58" x2="138" y2="58" /><line x1="26" y1="42" x2="138" y2="42" /><line x1="26" y1="26" x2="138" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="122" x2="138" y2="122" /><line x1="106" y1="218" x2="106" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="134" text-anchor="middle">-5</text><text x="42" y="134" text-anchor="middle">-4</text><text x="58" y="134" text-anchor="middle">-3</text><text x="74" y="134" text-anchor="middle">-2</text><text x="90" y="134" text-anchor="middle">-1</text><text x="122" y="134" text-anchor="middle">1</text><text x="138" y="134" text-anchor="middle">2</text><text x="98" y="221" text-anchor="end">-6</text><text x="98" y="205" text-anchor="end">-5</text><text x="98" y="189" text-anchor="end">-4</text><text x="98" y="173" text-anchor="end">-3</text><text x="98" y="157" text-anchor="end">-2</text><text x="98" y="141" text-anchor="end">-1</text><text x="98" y="109" text-anchor="end">1</text><text x="98" y="93" text-anchor="end">2</text><text x="98" y="77" text-anchor="end">3</text><text x="98" y="61" text-anchor="end">4</text><text x="98" y="45" text-anchor="end">5</text><text x="98" y="29" text-anchor="end">6</text><text x="98" y="134" text-anchor="end">0</text></g><circle cx="42" cy="202" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="90" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="122" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="194" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(-4,-5)</text><text x="96" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(-1,1)</text><text x="128" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(1,5)</text></svg>` },

        // Blok 6 — Parallel/loodreg en multi-stap gekombineer
        { difficulty: 'Hard', question: 'ʼn Lyn gaan deur (2,1) en (6,9). ʼn Tweede lyn gaan deur (−1,−2) en (1,2). Bepaal of die twee lyne parallel is, en wys jou werk.', answer: 'Gradiënt 1 = (9-1)/(6-2) = 8/4 = 2. Gradiënt 2 = (2-(-2))/(1-(-1)) = 4/2 = 2. Aangesien die gradiënte gelyk is, is die lyne parallel.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Lyn het gradiënt 5/2. ʼn Tweede lyn gaan deur (0,0) en (5,−2). Bepaal of die twee lyne loodreg is, en wys jou werk.', answer: 'Gradiënt van tweede lyn = (-2-0)/(5-0) = -2/5. Produk van gradiënte = (5/2)×(-2/5) = -1. Aangesien die produk van die gradiënte -1 is, is die lyne loodreg.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gegewe A(3,4) en B(9,12), bereken die afstand AB en die middelpunt van AB, en wys albei berekeninge.', answer: 'Afstand AB = √[(9-3)²+(12-4)²] = √[36+64] = √100 = 10. Middelpunt = ((3+9)/2 , (4+12)/2) = (6,8).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ABCD is ʼn parallelogram met A(3,3), B(7,3) en C(8,6). Bepaal die koördinate van D, en wys jou werk.', answer: 'In ʼn parallelogram deel die diagonale AC en BD dieselfde middelpunt. Middelpunt van AC = ((3+8)/2 , (3+6)/2) = (5,5; 4,5). Laat D=(x,y): (7+x)/2=5,5 gee x=4. (3+y)/2=4,5 gee y=6. Dus D=(4,6).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Die punte P(0,0), Q(6,0), R(6,4) en S(0,4) word op die Cartesiese vlak getoon en vorm vierhoek PQRS. Bewys dat PQRS ʼn reghoek is deur die lengtes van sy diagonale te vergelyk.', answer: 'Diagonaal PR = √[(6-0)²+(4-0)²] = √[36+16] = √52 = 2√13. Diagonaal QS = √[(0-6)²+(4-0)²] = √[36+16] = √52 = 2√13. Aangesien PR = QS, is die diagonale gelyk in lengte, dus is PQRS ʼn reghoek.', checkMode: 'self', diagramSvg: `<svg viewBox="0 0 180 148" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><g stroke="#9ca3af" stroke-width="1"><line x1="26" y1="122" x2="26" y2="26" /><line x1="42" y1="122" x2="42" y2="26" /><line x1="58" y1="122" x2="58" y2="26" /><line x1="74" y1="122" x2="74" y2="26" /><line x1="90" y1="122" x2="90" y2="26" /><line x1="106" y1="122" x2="106" y2="26" /><line x1="122" y1="122" x2="122" y2="26" /><line x1="138" y1="122" x2="138" y2="26" /><line x1="154" y1="122" x2="154" y2="26" /><line x1="26" y1="122" x2="154" y2="122" /><line x1="26" y1="106" x2="154" y2="106" /><line x1="26" y1="90" x2="154" y2="90" /><line x1="26" y1="74" x2="154" y2="74" /><line x1="26" y1="58" x2="154" y2="58" /><line x1="26" y1="42" x2="154" y2="42" /><line x1="26" y1="26" x2="154" y2="26" /></g><g stroke="#0f1f3d" stroke-width="1.5"><line x1="26" y1="106" x2="154" y2="106" /><line x1="42" y1="122" x2="42" y2="26" /></g><g fill="#374151" font-size="9"><text x="26" y="118" text-anchor="middle">-1</text><text x="58" y="118" text-anchor="middle">1</text><text x="74" y="118" text-anchor="middle">2</text><text x="90" y="118" text-anchor="middle">3</text><text x="106" y="118" text-anchor="middle">4</text><text x="122" y="118" text-anchor="middle">5</text><text x="138" y="118" text-anchor="middle">6</text><text x="154" y="118" text-anchor="middle">7</text><text x="34" y="125" text-anchor="end">-1</text><text x="34" y="93" text-anchor="end">1</text><text x="34" y="77" text-anchor="end">2</text><text x="34" y="61" text-anchor="end">3</text><text x="34" y="45" text-anchor="end">4</text><text x="34" y="29" text-anchor="end">5</text><text x="34" y="118" text-anchor="end">0</text></g><path d="M 42 106 L 138 106 L 138 42 L 42 42 Z" fill="none" stroke="#0f1f3d" stroke-width="2" /><line x1="42" y1="106" x2="138" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><line x1="138" y1="106" x2="42" y2="42" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" /><circle cx="42" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="106" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="138" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><circle cx="42" cy="42" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1" /><text x="48" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">P(0,0)</text><text x="144" y="98" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">Q(6,0)</text><text x="144" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">R(6,4)</text><text x="48" y="34" fill="#2563eb" font-weight="700" font-size="11" text-anchor="start">S(0,4)</text></svg>` },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die afstands-, middelpunt- en gradiëntformules bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd het oor kollinêriteit of vergelykings van lyne en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor die drie formules weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
