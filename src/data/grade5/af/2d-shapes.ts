import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ────────────────────────────────────────
// shape names       → blue   (#2563eb)
// number of sides   → orange (#ea580c)
// number of corners → green  (#16a34a)
// different sides   → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 2D-VORMS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-introduction',
      title: 'Wat is 2D-vorms?',
      icon: '⬜',
      explanation:
        `<p style="margin-bottom:16px;">2D-vorms is <strong>plat vorms</strong> met slegs lengte en breedte — geen dikte nie. 2D staan vir <strong>twee-dimensioneel</strong>. Elke 2D-vorm het ${or('sye')} en ${gr('hoeke')} (ook genoem hoekpunte). Ons beskryf 2D-vorms deur hul ${or('sye')} en ${gr('hoeke')} te tel en te kyk of hul ${or('sye')} reguit of geboë is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aantal sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal hoeke')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">2D-vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Plat vorm met slegs lengte en breedte — geen dikte nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sy</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reguit of geboë lyn wat die rand van ʼn vorm vorm.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hoek (Hoekpunt)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die punt waar twee sye van ʼn vorm ontmoet.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Regte hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Vierkantige hoek wat presies 90 grade meet.</p>` +
        `</div>` +

        `</div>` +

        // ── Common 2D shapes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene 2D-vorms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vierkant')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 gelyke sye')} · ${gr('4 hoeke')} · almal regte hoeke</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 sye')} · ${gr('4 hoeke')} · oorstaande sye gelyk</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('3 sye')} · ${gr('3 hoeke')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Sirkel')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('1 geboë sy')} · ${gr('0 hoeke')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om enige 2D-vorm te beskryf</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel altyd eers die ${or('sye')}, dan die ${gr('hoeke')}. Kyk of die ${or('sye')} reguit of geboë is, en of enige hoeke regte hoeke is. Hierdie drie waarnemings beskryf enige 2D-vorm volledig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf ʼn reghoek.',
          answer: `ʼn ${bl('Reghoek')} is ʼn 2D-vorm met ${or('4 sye')} en ${gr('4 hoeke')} (regte hoeke)`,
          steps: [
            `Tel die ${or('sye')} — ʼn ${bl('reghoek')} het ${or('4 sye')}.`,
            `Tel die ${gr('hoeke')} — ʼn ${bl('reghoek')} het ${gr('4 hoeke')}.`,
            `Kyk na die ${or('sye')} — oorstaande ${or('sye')} is gelyk in lengte.`,
            `Al die ${gr('hoeke')} is regte hoeke (90 grade).`,
            `ʼn ${bl('Reghoek')} is ʼn 2D-vorm met ${or('4 sye')} en ${gr('4 hoeke')} — almal regte hoeke. ✓`,
          ],
        },
        {
          question: 'Wat is die verskil tussen ʼn vierkant en ʼn reghoek?',
          answer: `ʼn ${bl('Vierkant')} het ${or('4 gelyke sye')}; ʼn ${bl('reghoek')} het ${or('4 sye')} waar slegs oorstaande sye gelyk is`,
          steps: [
            `ʼn ${bl('Vierkant')} het ${or('4 gelyke sye')} en ${gr('4 regte hoeke')}.`,
            `ʼn ${bl('Reghoek')} het ${or('4 sye')} maar slegs oorstaande ${or('sye')} is gelyk.`,
            `Al die hoeke in beide ʼn ${bl('vierkant')} en ʼn ${bl('reghoek')} is regte hoeke (${gr('4 hoeke')} van 90 grade elk).`,
            `Die verskil is dat ʼn ${bl('vierkant')} al ${or('4 sye')} gelyk het, terwyl ʼn ${bl('reghoek')} dit nie het nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing common 2D shapes — square rectangle triangle and circle — each labelled with the number of sides in orange and corners in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing 2D shapes showing how to identify sides and corners and describe common shapes like squares rectangles triangles and circles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — DRIEHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles',
      title: 'Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Driehoek')} is ʼn 2D-vorm met ${or('3 sye')} en ${gr('3 hoeke')}. Driehoeke word benoem en gesorteer volgens die lengtes van hul ${or('sye')}. Daar is drie tipes driehoeke.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('driehoektipes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke sye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verskillende sye')}</span>` +
        `</div>` +

        // ── Three types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie tipes driehoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Gelyksydige driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('3 gelyke sye')} en ${gr('3 gelyke hoeke')} van 60° elk.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Gelykbenige driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('2 gelyke sye')} en ${gr('2 gelyke hoeke')}. Die derde sy is ${re('verskillend')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Skalene driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Geen gelyke sye')} en ${re('geen gelyke hoeke')} nie — al drie sye is ${re('verskillend')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn driehoektipe te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel die ${gr('gelyke sye')}. As al ${or('3 sye')} gelyk is → ${bl('gelyksydig')}. As ${gr('2 sye')} gelyk is → ${bl('gelykbenig')}. As ${re('geen sye')} gelyk is nie → ${bl('skaleen')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho teken ʼn driehoek met sye van 5 cm, 5 cm en 3 cm. Watter tipe driehoek is dit?',
          answer: `Dit is ʼn ${bl('gelykbenige driehoek')}`,
          steps: [
            `Tel die ${gr('gelyke sye')} — twee sye is ${gr('5 cm')} en een sy is ${re('3 cm')}.`,
            `Twee sye is gelyk, dus is dit ʼn ${bl('gelykbenige driehoek')}.`,
            `Dit het ook ${gr('twee gelyke hoeke')} by die basis.`,
          ],
        },
        {
          question: 'ʼn Driehoek het al drie sye wat 4 cm meet. Watter tipe is dit en hoeveel simmetrielyne het dit?',
          answer: `Dit is ʼn ${bl('gelyksydige driehoek')} met ${gr('3 simmetrielyne')}`,
          steps: [
            `Al drie sye is ${gr('gelyk')} (${gr('4 cm')}, ${gr('4 cm')}, ${gr('4 cm')}), dus is dit ʼn ${bl('gelyksydige driehoek')}.`,
            `ʼn ${bl('Gelyksydige driehoek')} het ${gr('3 simmetrielyne')} — een van elke hoek na die middel van die oorstaande sy.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the three types of triangles — equilateral with 3 equal sides in green isosceles with 2 equal sides in green and 1 different side in red scalene with all sides in red — each labelled with side lengths" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the three types of triangles — equilateral isosceles and scalene — and how to identify each by counting equal sides" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VIERHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadrilaterals',
      title: 'Vierhoeke',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>vierhoek</strong> is enige 2D-vorm met ${or('4 sye')} en ${or('4 hoeke')}. Daar is verskeie tipes vierhoeke, elkeen met sy eie spesiale eienskappe.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('regte hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke sye')}</span>` +
        `</div>` +

        // ── Types of quadrilaterals ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes vierhoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vierkant')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 gelyke sye')} en ${or('4 regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oorstaande ${gr('sye gelyk')} en ${or('4 regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Ruit')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 gelyke sye')} maar geen ${or('regte hoeke')} nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Parallelogram')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oorstaande ${gr('sye gelyk')} en parallel — geen ${or('regte hoeke')} nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Trapesium')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Slegs een paar parallelle sye.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn vierhoek te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel eers die sye — as daar ${or('4 sye')} en ${or('4 hoeke')} is, is dit ʼn vierhoek. Kyk dan of die sye ${gr('gelyk')} is en of die hoeke ${or('regte hoeke')} is om die spesifieke tipe te bepaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoe verskil ʼn ruit van ʼn vierkant?',
          answer: `ʼn ${bl('Ruit')} het ${gr('4 gelyke sye')} maar geen ${or('regte hoeke')} nie; ʼn ${bl('vierkant')} het ${gr('4 gelyke sye')} ÉN ${or('4 regte hoeke')}`,
          steps: [
            `ʼn ${bl('Ruit')} het ${gr('4 gelyke sye')} net soos ʼn ${bl('vierkant')}.`,
            `Maar ʼn ${bl('ruit')} het nie ${or('regte hoeke')} nie — sy hoeke is nie ${or('90 grade')} nie.`,
            `ʼn ${bl('Vierkant')} het ${gr('4 gelyke sye')} ÉN ${or('4 regte hoeke')}.`,
            `Dus is ʼn ${bl('vierkant')} ʼn spesiale tipe ${bl('ruit')}.`,
          ],
        },
        {
          question: 'Lerato sê alle vierkante is reghoeke maar nie alle reghoeke is vierkante nie. Is sy korrek?',
          answer: `Ja — ʼn ${bl('vierkant')} voldoen aan al die vereistes van ʼn ${bl('reghoek')}, maar ʼn ${bl('reghoek')} hoef nie ${gr('al 4 sye gelyk')} te hê nie`,
          steps: [
            `ʼn ${bl('Reghoek')} het ${or('4 sye')} en ${or('4 regte hoeke')} nodig met oorstaande ${gr('sye gelyk')}.`,
            `ʼn ${bl('Vierkant')} het al hierdie plus al ${gr('4 sye gelyk')}.`,
            `Dus ja — ʼn ${bl('vierkant')} voldoen aan al die vereistes van ʼn ${bl('reghoek')}.`,
            `Maar ʼn ${bl('reghoek')} hoef nie al ${gr('4 sye gelyk')} te hê nie, dus is dit nie altyd ʼn ${bl('vierkant')} nie.`,
            `Lerato is korrek. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing five types of quadrilaterals — square rectangle rhombus parallelogram and trapezium — with equal sides marked in green and right angles marked in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the five types of quadrilaterals and how to identify each by checking equal sides and right angles" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SIRKELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circles',
      title: 'Sirkels',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Sirkel')} is ʼn perfek ronde 2D-vorm met geen reguit sye en geen hoeke nie. Elke punt op die rand van ʼn ${bl('sirkel')} is dieselfde afstand van die ${or('middelpunt')}. Die ${bl('radius')} is die afstand van die ${or('middelpunt')} na die rand. Die ${re('deursnee')} is die afstand oor die ${bl('sirkel')} deur die ${or('middelpunt')} — dit is altyd dubbel die ${bl('radius')}. Die ${gr('omtrek')} is die afstand heeltemal om die buitekant van die ${bl('sirkel')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deursnee')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omtrek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste punt van ʼn sirkel — elke punt op die rand is dieselfde afstand van die ${or('middelpunt')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand van die ${or('middelpunt')} na enige punt op die rand. Die ${bl('radius')} is altyd die helfte van die ${re('deursnee')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Deursnee</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand oor die sirkel deur die ${or('middelpunt')}. Die ${re('deursnee')} is altyd dubbel die ${bl('radius')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Omtrek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand heeltemal om die buitekant van die sirkel — die omtrek van ʼn sirkel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Verwantskap tussen radius en deursnee</p>` +
        `<p style="margin:0;color:#1e3a8a;">${re('Deursnee')} = ${bl('radius')} × 2 &nbsp;·&nbsp; ${bl('Radius')} = ${re('deursnee')} ÷ 2. Hierdie twee feite is al wat jy nodig het — as jy een ken, ken jy altyd die ander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkel het ʼn radius van 5 cm. Wat is sy deursnee?',
          answer: `Die ${re('deursnee')} is ${re('10 cm')}`,
          steps: [
            `Die ${re('deursnee')} is altyd dubbel die ${bl('radius')}.`,
            `${re('Deursnee')} = ${bl('radius')} × 2`,
            `${re('Deursnee')} = ${bl('5')} × 2 = ${re('10 cm')} ✓`,
          ],
        },
        {
          question: 'Amahle meet die deursnee van ʼn sirkel as 12 cm. Wat is die radius?',
          answer: `Die ${bl('radius')} is ${bl('6 cm')}`,
          steps: [
            `Die ${bl('radius')} is altyd die helfte van die ${re('deursnee')}.`,
            `${bl('Radius')} = ${re('deursnee')} ÷ 2`,
            `${bl('Radius')} = ${re('12')} ÷ 2 = ${bl('6 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with the centre marked in orange the radius labelled in blue the diameter labelled in red and the circumference labelled in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing circles and explaining the centre radius diameter and circumference with examples of finding the diameter from the radius and vice versa" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — 2D-VORMS SORTEER EN VERGELYK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-comparing-2d-shapes',
      title: '2D-vorms Sorteer en Vergelyk',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan ${bl('2D-vorms')} sorteer deur na hul eienskappe te kyk — die ${gr('aantal sye')}, of sye gelyk is, of hoeke ${or('regte hoeke')} is, en of die vorm enige simmetrielyne het. Wanneer jy vorms vergelyk, kyk altyd na meer as een eienskap. Twee vorms kan in sommige opsigte eenders wees maar in ander verskil.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('regte hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal sye')}</span>` +
        `</div>` +

        // ── Sorting properties ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eienskappe wat gebruik word om vorms te sorteer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Aantal sye')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die sye. Vorms met dieselfde ${gr('aantal sye')} gaan in dieselfde groep.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gelyke sye</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of al die sye gelyk is, sommige sye gelyk is, of geen sye gelyk is nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Regte hoeke')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of die vorm enige ${or('regte hoeke')} het (vierkantige hoeke van 90°).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Simmetrielyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of die vorm in helftes gevou kan word sodat albei helftes presies pas.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gebruik altyd meer as een eienskap</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moet nooit net volgens een eienskap sorteer nie. ʼn ${bl('Vierkant')} en ʼn ${bl('ruit')} het albei ${gr('4 sye')} — maar slegs die ${bl('vierkant')} het ${or('regte hoeke')}. Om na meer as een eienskap te kyk, gee ʼn meer volledige vergelyking.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sorteer hierdie vorms in twee groepe — driehoek, vierkant, reghoek, ruit, vyfhoek.',
          answer: `${gr('Groep 1 (4 sye):')} ${bl('vierkant')}, ${bl('reghoek')}, ${bl('ruit')} · ${gr('Groep 2 (ander sye):')} ${bl('driehoek')} (${gr('3 sye')}), ${bl('vyfhoek')} (${gr('5 sye')})`,
          steps: [
            `Kyk na die ${gr('aantal sye')} vir elke vorm: ${bl('driehoek')} → ${gr('3 sye')}, ${bl('vierkant')} → ${gr('4 sye')}, ${bl('reghoek')} → ${gr('4 sye')}, ${bl('ruit')} → ${gr('4 sye')}, ${bl('vyfhoek')} → ${gr('5 sye')}.`,
            `<strong>Groep 1 — vorms met ${gr('4 sye')}:</strong> ${bl('vierkant')}, ${bl('reghoek')}, ${bl('ruit')}.`,
            `<strong>Groep 2 — vorms met ander ${gr('aantal sye')}:</strong> ${bl('driehoek')} het ${gr('3 sye')}, ${bl('vyfhoek')} het ${gr('5 sye')}.`,
            `Ons het volgens ${gr('aantal sye')} gesorteer. ✓`,
          ],
        },
        {
          question: 'Thabo wil al die vorms met ten minste een regte hoek uit hierdie lys vind — vierkant, ruit, reghoek, gelyksydige driehoek, trapesium.',
          answer: `Vorms met ${or('regte hoeke')}: ${bl('vierkant')} en ${bl('reghoek')}`,
          steps: [
            `${bl('Vierkant')} — ja, ${or('4 regte hoeke')} ✓`,
            `${bl('Ruit')} — geen ${or('regte hoeke')} nie — sy hoeke is nie 90° nie.`,
            `${bl('Reghoek')} — ja, ${or('4 regte hoeke')} ✓`,
            `${bl('Gelyksydige driehoek')} — geen ${or('regte hoeke')} nie — al die hoeke is 60°.`,
            `${bl('Trapesium')} — soms, hang af van die tipe — ʼn regte trapesium het ${or('regte hoeke')} maar die meeste nie.`,
            `<strong>Vorms met ten minste een ${or('regte hoek')}:</strong> ${bl('vierkant')} en ${bl('reghoek')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing five 2D shapes — triangle square rectangle rhombus and pentagon — sorted into groups by number of sides with right angles marked in orange and side counts in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sort and compare 2D shapes by their properties — number of sides right angles equal sides and lines of symmetry" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sye het ʼn driehoek?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
    },

    // ── V2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Noem die 2D-vorm met 4 gelyke sye en 4 regte hoeke.',
      answer: 'vierkant',
      checkMode: 'auto',
      correctAnswer: 'vierkant',
    },

    // ── V3 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Wat is die verskil tussen ʼn 2D-vorm en ʼn 3D-voorwerp?',
      answer: 'ʼn 2D-vorm is plat en het slegs lengte en breedte. ʼn 3D-voorwerp het lengte, breedte en hoogte en neem plek in.',
      checkMode: 'self',
    },

    // ── V4 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter tipe driehoek het 3 gelyke sye?',
      answer: 'gelyksydige driehoek',
      checkMode: 'auto',
      correctAnswer: 'gelyksydige driehoek',
    },

    // ── V5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het sye van 3cm, 4cm en 5cm. Watter tipe driehoek is dit?',
      answer: 'skalene driehoek',
      checkMode: 'auto',
      correctAnswer: 'skalene driehoek',
    },

    // ── V6 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn gelykbenige driehoek het altyd ʼn simmetrielyn. Is hy korrek? Verduidelik.',
      answer: 'Ja — ʼn gelykbenige driehoek het 2 gelyke sye en 1 simmetrielyn wat van die boonste hoek na die middel van die basis loop.',
      checkMode: 'self',
    },

    // ── V7 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sye het ʼn vierhoek?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── V8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Wat is die verskil tussen ʼn vierkant en ʼn ruit?',
      answer: 'Albei het 4 gelyke sye maar ʼn vierkant het 4 regte hoeke en ʼn ruit nie.',
      checkMode: 'self',
    },

    // ── V9 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê alle vierkante is ruite maar nie alle ruite is vierkante nie. Is sy korrek? Verduidelik.',
      answer: 'Ja — ʼn ruit het 4 gelyke sye en so ook ʼn vierkant, maar ʼn vierkant het ook regte hoeke wat ʼn ruit nie altyd het nie.',
      checkMode: 'self',
    },

    // ── V10 Maklik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat word die afstand van die middelpunt van ʼn sirkel na sy rand genoem?',
      answer: 'radius',
      checkMode: 'auto',
      correctAnswer: 'radius',
    },

    // ── V11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sirkel het ʼn deursnee van 16cm. Wat is die radius?',
      answer: '8cm',
      checkMode: 'auto',
      correctAnswer: '8cm',
    },

    // ── V12 Moeilik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die deursnee van ʼn sirkel is altyd dubbel die radius. Is sy korrek? Gee ʼn voorbeeld.',
      answer: 'Ja — as die radius 5cm is, is die deursnee 10cm. Deursnee = radius x 2 altyd.',
      checkMode: 'self',
    },

    // ── V13 Maklik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel regte hoeke het ʼn reghoek?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── V14 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sorteer hierdie vorms volgens aantal sye van min na meer — vyfhoek, driehoek, vierkant, seshoek.',
      answer: 'driehoek, vierkant, vyfhoek, seshoek',
      checkMode: 'auto',
      correctAnswer: 'driehoek, vierkant, vyfhoek, seshoek',
    },

    // ── V15 Moeilik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Noem twee maniere waarop ʼn vierkant en ʼn reghoek dieselfde is en een manier waarop hulle verskil.',
      answer: 'Eenders — albei het 4 sye en 4 regte hoeke. Verskillend — ʼn vierkant het al 4 sye gelyk maar ʼn reghoek het slegs oorstaande sye gelyk.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het 2D-vorms bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van 2D-vorms.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het 2D-vorms vir Graad 5 heeltemal bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van 2D-vorms. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
}
