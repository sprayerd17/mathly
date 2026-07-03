import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mass units) ─────────────────────────────────────────────
// mg (milligrams) → blue   (#2563eb)
// g  (grams)      → green  (#16a34a)
// kg (kilograms)  → orange (#ea580c)
// t  (tonnes)     → red    (#dc2626)
const bl = (s: string) => `<span style="color:#2563eb;font-weight:700">${s}</span>`
const gr = (s: string) => `<span style="color:#16a34a;font-weight:700">${s}</span>`
const or = (s: string) => `<span style="color:#ea580c;font-weight:700">${s}</span>`
const re = (s: string) => `<span style="color:#dc2626;font-weight:700">${s}</span>`

export const topicData: TopicData = {
  title: 'Massa',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-mass',
      title: 'Eenhede van Massa',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Massa vertel ons hoe swaar iets is. Ons meet massa met behulp van <strong>standaardeenhede</strong>. Die vernaamste eenhede van massa is ${bl('milligram (mg)')}, ${gr('gram (g)')}, ${or('kilogram (kg)')} en ${re('ton (t)')}. ${bl('Milligram')} word gebruik vir baie ligte dinge soos medisynetablette. ${gr('Gram')} word gebruik vir ligter voorwerpe soos ʼn snytjie brood. ${or('Kilogram')} word gebruik vir swaarder voorwerpe soos ʼn sak meel of ʼn persoon. ${re('Ton')} word gebruik vir baie swaar dinge soos ʼn vragmotor of ʼn olifant.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('g')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kg')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('t')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eenhede van massa</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Milligram (mg)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir baie ligte dinge soos medisynetablette. Daar is 1 000 mg in 1 g.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gram (g)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir ligter voorwerpe soos ʼn snytjie brood. Daar is 1 000 g in 1 kg.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kilogram (kg)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir swaarder voorwerpe soos ʼn sak meel of ʼn persoon. Daar is 1 000 kg in 1 t.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Ton (t)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik vir baie swaar dinge soos ʼn vragmotor of ʼn olifant.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die regte eenheid kies</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kies altyd die eenheid wat ʼn sinvolle aantal syfers gee. As ʼn eenheid jou miljoene syfers gee, is dit te klein. As dit jou ʼn baie klein desimale getal gee, is dit te groot. Die beste eenheid gee ʼn getal wat maklik is om te lees en mee te werk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle wil die massa van ʼn appel meet. Watter eenheid moet sy gebruik?',
          answer: `Amahle moet ${gr('gram (g)')} gebruik`,
          steps: [
            `ʼn Appel is ʼn ligte voorwerp, maar nie uiters lig nie.`,
            `${bl('Milligram')} sou te veel syfers gee — ʼn appel het ʼn massa van ongeveer 150 000 mg, wat ʼn onnodig groot getal is.`,
            `${re('Ton')} en ${or('kilogram')} is te swaar vir ʼn appel — ʼn tipiese appel het ʼn massa van minder as 1 kg.`,
            `${gr('Gram')} is die beste eenheid om ʼn appel te meet — dit het ʼn massa van ongeveer 150 ${gr('g')}, wat ʼn sinvolle getal is.`,
            `<strong>Antwoord:</strong> Amahle moet ${gr('gram (g)')} gebruik.`,
          ],
        },
        {
          question: 'Thabo wil die massa van ʼn motor meet. Watter eenheid moet hy gebruik?',
          answer: `Thabo moet ${re('ton (t)')} gebruik`,
          steps: [
            `ʼn Motor is ʼn baie swaar voorwerp.`,
            `${bl('Milligram')} en ${gr('gram')} is heeltemal te klein — ʼn motor het ʼn massa van ongeveer 1 500 000 000 mg, wat onprakties is.`,
            `${or('Kilogram')} sou ʼn baie groot getal gee — ʼn tipiese motor het ʼn massa van ongeveer 1 500 ${or('kg')}, wat hanteerbaar is maar nie die standaardeenheid vir voertuie nie.`,
            `${re('Ton')} is die beste eenheid vir baie swaar voorwerpe soos motors — ʼn tipiese motor het ʼn massa van ongeveer 1,5 ${re('t')}, wat ʼn sinvolle getal is.`,
            `<strong>Antwoord:</strong> Thabo moet ${re('ton (t)')} gebruik.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — choosing the correct unit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter eenheid sal jy gebruik om die massa van ʼn persoon te meet?',
          answer: 'kilogram',
          checkMode: 'auto',
          correctAnswer: 'kilogram',
          correctAnswers: ['kilogram', 'kilograms', 'kg'],
          explanation: 'ʼn Persoon het ʼn massa wat sinvol in kilogram gemeet word. Gram sou ʼn onprakties groot getal gee (bv. 60 000 g) en ton sou ʼn baie klein desimale getal gee (bv. 0,06 t). Die beste eenheid is kilogram.',
        },

        // ── Q2 Easy — choosing the correct unit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter eenheid sal jy gebruik om die massa van ʼn vragmotor te meet?',
          answer: 'ton',
          checkMode: 'auto',
          correctAnswer: 'ton',
          correctAnswers: ['ton', 'tonne', 't'],
          explanation: 'ʼn Vragmotor is ʼn baie swaar voertuig. Gram en kilogram sou onprakties groot getalle gee. Ton gee ʼn sinvolle getal — ʼn tipiese vragmotor het ʼn massa van etlike ton.',
        },

        // ── Q3 Medium — evaluating a unit choice ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho sê hy sal die massa van ʼn druiwekorrel in kilogram meet. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn druiwekorrel is baie lig. Gram sou die beste eenheid wees om die massa van ʼn druiwekorrel te meet.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual scale showing the four units of mass from smallest to largest — mg in blue, g in green, kg in orange, t in red — with everyday examples for each unit" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four units of mass — milligrams, grams, kilograms and tonnes — and how to choose the correct unit for everyday objects" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-mass',
      title: 'Omskakeling van Eenhede van Massa',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan tussen eenhede van massa omskakel deur hierdie verwantskappe te gebruik — ${or('1 000 mg = 1 g')}, ${or('1 000 g = 1 kg')}, ${or('1 000 kg = 1 t')}. Om van ʼn <strong>groter eenheid</strong> na ʼn <strong>kleiner eenheid</strong> om te skakel, ${gr('vermenigvuldig')} ons met 1 000. Om van ʼn <strong>kleiner eenheid</strong> na ʼn <strong>groter eenheid</strong> om te skakel, ${re('deel')} ons deur 1 000. Kyk altyd of jou antwoord sinvol is — om na ʼn kleiner eenheid om te skakel behoort ʼn groter getal te gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldig')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omskakelingsfeite')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('antwoorde')}</span>` +
        `</div>` +

        // ── Conversion relationships ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsverwantskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 mg = 1 g')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Daar is duisend milligram in een gram.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 g = 1 kg')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Daar is duisend gram in een kilogram.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 kg = 1 t')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Daar is duisend kilogram in een ton.</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakelingsreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Groter eenheid → kleiner eenheid: vermenigvuldig met 1 000')}</strong><br>Voorbeeld: kg → g &nbsp; ${gr('× 1 000')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Kleiner eenheid → groter eenheid: deel deur 1 000')}</strong><br>Voorbeeld: g → kg &nbsp; ${re('÷ 1 000')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kyk altyd of jou antwoord sinvol is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om na ʼn <strong>kleiner eenheid</strong> om te skakel behoort ʼn <strong>groter getal</strong> te gee. Om na ʼn <strong>groter eenheid</strong> om te skakel behoort ʼn <strong>kleiner getal</strong> te gee. As jou antwoord in die verkeerde rigting gaan, gaan na of jy moes vermenigvuldig of gedeel het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 3 kg om na gram.',
          answer: `3 ${or('kg')} = ${bl('3 000 g')}`,
          steps: [
            `Ons skakel om van ʼn <strong>groter eenheid</strong> (${or('kg')}) na ʼn <strong>kleiner eenheid</strong> (g). Ons ${gr('vermenigvuldig')}.`,
            `${or('Omskakelingsfeit:')} ${or('1 kg = 1 000 g')}`,
            `3 ${or('kg')} = 3 ${gr('× 1 000')} = ${bl('3 000 g')}`,
          ],
        },
        {
          question: 'Skakel 5 000 g om na kilogram.',
          answer: `5 000 g = ${bl('5 kg')}`,
          steps: [
            `Ons skakel om van ʼn <strong>kleiner eenheid</strong> (g) na ʼn <strong>groter eenheid</strong> (${or('kg')}). Ons ${re('deel')}.`,
            `${or('Omskakelingsfeit:')} ${or('1 000 g = 1 kg')}`,
            `5 000 g = 5 000 ${re('÷ 1 000')} = ${bl('5 kg')}`,
          ],
        },
        {
          question: 'Skakel 2,5 kg om na gram.',
          answer: `2,5 ${or('kg')} = ${bl('2 500 g')}`,
          steps: [
            `Ons skakel om van ʼn <strong>groter eenheid</strong> (${or('kg')}) na ʼn <strong>kleiner eenheid</strong> (g). Ons ${gr('vermenigvuldig')}.`,
            `${or('Omskakelingsfeit:')} ${or('1 kg = 1 000 g')}`,
            `2,5 ${or('kg')} = 2,5 ${gr('× 1 000')} = ${bl('2 500 g')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — converting kg to g ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 4 kg om na gram.',
          answer: '4 000 g',
          checkMode: 'auto',
          correctAnswer: '4000g',
          correctAnswers: ['4000g', '4 000 g', '4000 g'],
          explanation: 'Ons skakel om van ʼn groter eenheid (kg) na ʼn kleiner eenheid (g), dus vermenigvuldig ons met 1 000.\n4 kg × 1 000 = 4 000 g ✓',
        },

        // ── Q5 Medium — converting g to kg ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 3 500 g om na kilogram.',
          answer: '3,5 kg',
          checkMode: 'auto',
          correctAnswer: '3.5kg',
          correctAnswers: ['3.5kg', '3.5 kg', '3,5kg', '3,5 kg'],
          explanation: 'Ons skakel om van ʼn kleiner eenheid (g) na ʼn groter eenheid (kg), dus deel ons deur 1 000.\n3 500 g ÷ 1 000 = 3,5 kg ✓',
        },

        // ── Q6 Hard — identifying a conversion error ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato skakel 2,4 kg om na gram en kry 240 g. Is sy korrek? Verduidelik.',
          answer: 'Nee — om kg na g om te skakel, vermenigvuldig ons met 1 000. 2,4 × 1 000 = 2 400 g, nie 240 g nie. Sy het gedeel in plaas van vermenigvuldig.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Conversion diagram showing the four units of mass — mg g kg t — with arrows indicating multiply by 1000 going right in green and divide by 1000 going left in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between units of mass by multiplying or dividing by 1000 with worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MEASURING MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-mass',
      title: 'Massa Meet',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Ons meet massa met behulp van ʼn <strong>skaal</strong>. Daar is verskillende tipes skale — ʼn <strong>kombuisskaal</strong> vir kos, ʼn <strong>badkamerskaal</strong> vir mense en ʼn <strong>balansskaal</strong> wat twee massas vergelyk. Wanneer jy ʼn skaal lees, vind die naaste gemerkte getal en tel die spasies tussen die merke om uit te werk wat elke klein merk verteenwoordig. Skryf jou meting altyd met die korrekte eenheid neer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skaalmerke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('massa-aflesing')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('swaarder')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ligter')}</span>` +
        `</div>` +

        // ── Types of scales ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes skale</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kombuisskaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik om kos te meet. Die ${bl('skaalmerke')} is gewoonlik in gram of kilogram. Lees die ${or('massa-aflesing')} waar die wyser of skerm wys.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Badkamerskaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Word gebruik om die massa van ʼn persoon te meet. Die ${bl('skaalmerke')} is gewoonlik in kilogram. Staan daarop en lees die ${or('massa-aflesing')} op die skerm.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Balansskaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk twee massas. Die kant met die ${re('swaarder')} voorwerp gaan af. Die kant met die ${gr('ligter')} voorwerp gaan op. Wanneer albei kante gelyk is, is die massas gelyk.</p>` +
        `</div>` +

        `</div>` +

        // ── Reading a scale ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn skaal te lees</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind die ${bl('gemerkte getalle')}</strong> — Vind die naaste genommerde ${bl('skaalmerk')} onder die wyser of aanwyser.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die spasies</strong> — Tel die aantal spasies tussen twee opeenvolgende genommerde ${bl('skaalmerke')} om die waarde van elke klein merk te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lees die ${or('massa-aflesing')}</strong> — Tel op vanaf die naaste genommerde merk tot waar die wyser wys en skryf die ${or('massa-aflesing')} saam met sy eenheid neer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skryf altyd die eenheid neer</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${or('massa-aflesing')} sonder ʼn eenheid is onvolledig. Om "450" te skryf in plaas van "450 g" kan enigiets beteken. Skryf altyd die volledige meting neer, insluitend die korrekte eenheid van massa.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kombuisskaal het merke elke 100 g. Die wyser wys presies halfpad tussen 400 g en 500 g. Wat is die massa?',
          answer: `Die ${or('massa-aflesing')} is ${or('450 g')}`,
          steps: [
            `Vind die naaste genommerde ${bl('skaalmerke')}: ${bl('400 g')} en ${bl('500 g')}.`,
            `Die wyser wys <strong>presies halfpad</strong> tussen ${bl('400 g')} en ${bl('500 g')}.`,
            `Halfpad tussen ${bl('400 g')} en ${bl('500 g')} is ${or('450 g')}.`,
            `<strong>Antwoord:</strong> Die ${or('massa-aflesing')} wat op die skaal getoon word, is ${or('450 g')}.`,
          ],
        },
        {
          question: 'Sipho plaas twee voorwerpe op ʼn balansskaal. Die linkerkant gaan af. Wat vertel dit ons?',
          answer: `Die voorwerp aan die linkerkant is ${re('swaarder')} as die voorwerp aan die regterkant`,
          steps: [
            `ʼn Balansskaal kantel na die ${re('swaarder')} kant toe.`,
            `Die linkerkant het afgegaan, dus is die voorwerp aan die linkerkant ${re('swaarder')} as die voorwerp aan die regterkant.`,
            `Die voorwerp aan die regterkant is ${gr('ligter')} as die voorwerp aan die linkerkant.`,
            `As albei kante gelyk was, sou die skaal gelyk wees — geen kant sou afgaan nie.`,
            `<strong>Antwoord:</strong> Die feit dat die linkerkant afgaan, vertel ons dat die voorwerp aan die linkerkant ${re('swaarder')} is as die voorwerp aan die regterkant.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — reading a scale ─────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Skaal se wyser wys halfpad tussen 200 g en 300 g. Wat is die massa?',
          answer: '250 g',
          checkMode: 'auto',
          correctAnswer: '250g',
          correctAnswers: ['250g', '250 g'],
          explanation: 'Die wyser wys halfpad tussen 200 g en 300 g.\nHalfpad: (200 + 300) ÷ 2 = 250.\nAntwoord: 250 g ✓',
        },

        // ── Q8 Medium — reading a balance scale ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee voorwerpe word op ʼn balansskaal geplaas. Die regterkant gaan af. Watter kant is swaarder?',
          answer: 'regter',
          checkMode: 'auto',
          correctAnswer: 'regter',
          correctAnswers: ['regter', 'die regterkant', 'regterkant', 'regs', 'right'],
          explanation: 'ʼn Balansskaal kantel na die swaarder kant toe. Die regterkant gaan af, dus is die voorwerp aan die regterkant swaarder.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing three types of scales — kitchen scale with scale markings in blue and mass reading in orange, bathroom scale, and balance scale with heavier side in red going down and lighter side in green going up" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a kitchen scale by identifying scale markings and counting spaces, and how a balance scale indicates which object is heavier" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-mass',
      title: 'Berekeninge met Massa',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan massa ${gr('optel')} en ${re('aftrek')} om probleme op te los. Maak altyd seker dat alle metings in <strong>dieselfde eenheid</strong> is voordat jy bereken. As die eenhede verskil, ${bl('skakel')} hulle eers om, en bereken dan. Skryf ná die berekening altyd die korrekte eenheid langs jou antwoord.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('aftrekking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('antwoord')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir berekeninge met massa</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Skakel om')}</strong> — As die metings in verskillende eenhede is, skakel hulle eers om na dieselfde eenheid voordat jy bereken.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Bereken')}</strong> — Tel op, trek af of vermenigvuldig die metings sodra hulle in dieselfde eenheid is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Skryf die eenheid neer')}</strong> — Sluit altyd die korrekte eenheid van massa langs jou ${or('antwoord')} in.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skakel eers om, bereken dan</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moet nooit metings in verskillende eenhede optel of aftrek nie — ${bl('skakel')} altyd eers om na dieselfde eenheid. Jy kan jou ${or('antwoord')} in gram of kilogram gee — albei is korrek solank die eenheid duidelik geskryf is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato koop 1,5 kg appels en 800 g lemoene. Wat is die totale massa van haar vrugte?',
          answer: `Die totale massa is ${or('2 300 g')} of ${or('2,3 kg')}`,
          steps: [
            `${bl('Skakel om')} na dieselfde eenheid: ${bl('1,5 kg = 1 500 g')} (vermenigvuldig met 1 000).`,
            `${gr('Tel op:')} ${gr('1 500 g + 800 g = 2 300 g')}`,
            `${bl('Skakel om')} na kilogram: ${bl('2 300 g = 2,3 kg')} (deel deur 1 000).`,
            `<strong>${or('Antwoord:')} Die totale massa is ${or('2 300 g')} of ${or('2,3 kg')}.</strong>`,
          ],
        },
        {
          question: 'ʼn Sak rys het ʼn massa van 2 kg. Amahle gebruik 650 g. Hoeveel rys bly oor?',
          answer: `Daar bly ${or('1 350 g')} of ${or('1,35 kg')} rys oor`,
          steps: [
            `${bl('Skakel')} 2 kg om na gram: ${bl('2 × 1 000 = 2 000 g')}`,
            `${re('Trek af:')} ${re('2 000 g − 650 g = 1 350 g')}`,
            `${bl('Skakel')} terug om na kilogram: ${bl('1 350 g = 1,35 kg')} (deel deur 1 000).`,
            `<strong>${or('Antwoord:')} Daar bly ${or('1 350 g')} of ${or('1,35 kg')} rys oor.</strong>`,
          ],
        },
        {
          question: 'Thabo pak 3 boeke in ʼn sak. Elke boek het ʼn massa van 450 g. Wat is die totale massa van die boeke?',
          answer: `Die totale massa van die boeke is ${or('1 350 g')} of ${or('1,35 kg')}`,
          steps: [
            `${gr('Vermenigvuldig:')} ${gr('3 × 450 g = 1 350 g')}`,
            `${bl('Skakel om')} na kilogram: ${bl('1 350 g = 1,35 kg')} (deel deur 1 000).`,
            `<strong>${or('Antwoord:')} Die totale massa van die boeke is ${or('1 350 g')} of ${or('1,35 kg')}.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Hard — subtracting mass after use ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle het ʼn 1 kg-sak suiker. Sy gebruik 3 koppies suiker en elke koppie hou 125 g. Hoeveel suiker bly oor?',
          answer: '625 g',
          checkMode: 'auto',
          correctAnswer: '625g',
          correctAnswers: ['625g', '625 g'],
          explanation: 'Totale suiker gebruik: 3 × 125 g = 375 g\nSkakel 1 kg om na gram: 1 kg = 1 000 g\nSuiker oor: 1 000 g − 375 g = 625 g ✓',
        },

        // ── Q10 Medium — adding mass with unit conversion ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho koop 1,2 kg hoender en 850 g beesvleis. Wat is die totale massa van die vleis in gram?',
          answer: '2 050 g',
          checkMode: 'auto',
          correctAnswer: '2050g',
          correctAnswers: ['2050g', '2 050 g', '2050 g'],
          explanation: 'Skakel 1,2 kg om na gram: 1,2 × 1 000 = 1 200 g\nTotaal: 1 200 g + 850 g = 2 050 g ✓',
        },

        // ── Q11 Hard — finding a fraction of a mass ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Boks sjokolade het ʼn massa van 500 g. Thabo eet ʼn kwart van die sjokolade. Hoeveel massa bly in die boks oor?',
          answer: '375 g',
          checkMode: 'auto',
          correctAnswer: '375g',
          correctAnswers: ['375g', '375 g'],
          explanation: 'ʼn Kwart van 500 g: 500 ÷ 4 = 125 g geëet\nMassa oor: 500 g − 125 g = 375 g ✓',
        },

        // ── Q12 Hard — total mass converted to kilograms ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato pak 4 boeke, elk met ʼn massa van 350 g, en ʼn kosblik met ʼn massa van 450 g in haar skooltas. Wat is die totale massa wat sy dra, in kilogram?',
          answer: '1,85 kg',
          checkMode: 'auto',
          correctAnswer: '1.85kg',
          correctAnswers: ['1.85kg', '1.85 kg', '1,85kg', '1,85 kg'],
          explanation: 'Massa van 4 boeke: 4 × 350 g = 1 400 g\nMassa van kosblik: 450 g\nTotaal: 1 400 g + 450 g = 1 850 g\nSkakel om na kilogram: 1 850 ÷ 1 000 = 1,85 kg ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing three calculating with mass examples — addition with unit conversion in blue and green, subtraction with unit conversion in blue and red, multiplication with conversion to kilograms in blue and green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add, subtract and multiply mass measurements by first converting to the same unit and then calculating with colour coded steps" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het massa baasgeraak.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van massa.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
