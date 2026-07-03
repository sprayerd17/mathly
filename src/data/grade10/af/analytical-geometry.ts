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
          answer: `${or('afstand')} = √41 ≈ ${or('6.40 eenhede')}`,
          steps: [
            `Skryf die koördinate neer: ${bl('x₁')} = ${bl('2')}, ${gr('y₁')} = ${gr('5')}, ${bl('x₂')} = ${bl('7')}, ${gr('y₂')} = ${gr('1')}.`,
            `Pas die formule toe: ${or('afstand')} = √[(${bl('x₂')}−${bl('x₁')})² + (${gr('y₂')}−${gr('y₁')})²]`,
            `Vervang: ${or('afstand')} = √[(${bl('7')}−${bl('2')})² + (${gr('1')}−${gr('5')})²]`,
            `Bereken die verskille: = √[(${bl('5')})² + (${gr('−4')})²]`,
            `Kwadreer die verskille: = √[${bl('25')} + ${gr('16')}]`,
            `Tel op: = √41`,
            `<strong>Antwoord:</strong> ${or('afstand')} = √41 ≈ ${or('6.40 eenhede')} ✓`,
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
        '<DiagramPlaceholder label="Cartesian plane showing points P(2,5) and Q(7,1) with the right-angled triangle formed by the horizontal and vertical differences colour coded blue and green, hypotenuse labelled as distance √41 in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how the distance formula is derived from the Theorem of Pythagoras, with a worked example on the Cartesian plane colour coding x-coordinates blue y-coordinates green and the final distance orange" />',
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
        '<DiagramPlaceholder label="Cartesian plane showing two parallel lines with equal gradients labelled in green and two perpendicular lines with gradients multiplying to −1 labelled in orange, gradient calculation shown in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the gradient of a line and how to identify parallel lines by equal gradients and perpendicular lines by negative reciprocal gradients" />',
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
        '<DiagramPlaceholder label="Cartesian plane showing segment CD with C(4,6) and D(10,2) and midpoint M(7,4) marked halfway between them, averaged x-coordinate shown in blue and averaged y-coordinate in green, midpoint result in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the midpoint formula and how to work backwards to find an unknown endpoint when the midpoint is given" />',
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
        '<DiagramPlaceholder label="Cartesian plane showing quadrilateral PQRS with P(2,5) Q(3,1) R(0,-5) S(-1,-1), diagonals PR and QS drawn with their lengths labelled in orange to show PQRS is a parallelogram but not a rectangle, midpoints shown in blue and conclusion in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine the distance midpoint and gradient formulas to prove geometric properties of quadrilaterals on the Cartesian plane" />',
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
      answer: '(3,2.5)',
      checkMode: 'auto',
      correctAnswer: '(3,2.5)',
      correctAnswers: ['(3,2.5)', '(3, 2.5)', '3,2.5'],
      explanation: 'Middelpunt van PR = ((1 + 5) / 2 , (1 + 4) / 2) = (3, 2.5) ✓',
    },

    // ── Q17 Hard — midpoints of both diagonals to prove parallelogram ─────────
    {
      difficulty: 'Hard',
      question: 'Gebruik PQRS van V16 met P(1,1), Q(5,1), R(5,4), S(1,4), bepaal die middelpunt van diagonaal QS en bepaal of PQRS ʼn parallelogram is.',
      answer: 'Middelpunt van QS=((5+1)/2,(1+4)/2)=(3,2.5). Aangesien beide diagonale dieselfde middelpunt deel, is PQRS ʼn parallelogram.',
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
}
