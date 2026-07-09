import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Die regte eenheid kies | 4-8 Eenhede omskakel |
    // 9-12 Skale lees en vergelyk | 13-15 Foute uitken & regverdig |
    // 16-17 Woordprobleme (optel/aftrek) | 18-19 Multi-stap toepassings
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn enkele vitamientablet te meet: mg, g, kg of t?', checkMode: 'auto', correctAnswer: 'mg', correctAnswers: ['mg', 'milligram'], explanation: 'ʼn Vitamientablet is uiters lig, dus is milligram (mg) die sinvolle eenheid. Gram of kilogram sou ʼn ongemaklike, baie klein desimale getal gee.' },
        { difficulty: 'Easy', question: 'Nomsa weeg ʼn brood op ʼn winkelskaal. Watter eenheid gee die sinvolste aflesing vir die massa daarvan — gram of kilogram?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Brood het ʼn massa van ʼn paar honderd gram, dus gee gram (g) ʼn sinvolle aflesing soos 700 g. Kilogram sou ʼn ongemaklike desimale getal gee (0,7 kg).' },
        { difficulty: 'Easy', question: 'ʼn Bouer kies ʼn eenheid om sakke sement op ʼn afleweringslys te merk. Hy kies ton omdat "groter werke groter eenhede benodig." Is hy korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, hy is nie korrek nie. Een sak sement het ʼn massa van ongeveer 25 tot 50 kg, wat ʼn sinvolle getal in kilogram is. In ton sou dit ʼn baie klein, ongemaklike desimale getal soos 0,03 t wees. Kilogram is die regte eenheid vir een sak — ton sou eers sin maak vir ʼn baie groot voorraad van baie sakke saam.' },
        { difficulty: 'Easy', question: 'ʼn Fiets het ʼn massa van ongeveer 12 kg en ʼn vragskip-houer het ʼn massa van ongeveer 4 t wanneer dit leeg is. As jy albei massas met DIESELFDE eenheid moes beskryf sodat die getalle maklik bly om te lees, watter eenheid sou jy kies, en waarom?', checkMode: 'self', answer: 'Kilogram sou redelik goed vir albei werk (12 kg en ongeveer 4 000 kg), maar ton maak die houer maklik om te lees (4 t) terwyl die fiets ʼn ongemaklike desimale getal word (0,012 t). In die praktyk word elke voorwerp gewoonlik in sy eie beste eenheid beskryf — kg vir die fiets en t vir die houer — eerder as om een eenheid op albei af te dwing, want geen enkele eenheid hou albei getalle sinvol nie.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 4,2 kg om na gram.', checkMode: 'auto', correctAnswer: '4200g', correctAnswers: ['4200g', '4200 g', '4 200 g', '4200'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 4,2 × 1 000 = 4 200 g.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Padstal verkoop ʼn pampoen met ʼn massa van 6 kg. Hoeveel gram is dit?', checkMode: 'auto', correctAnswer: '6000g', correctAnswers: ['6000g', '6000 g', '6 000 g', '6000'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 6 × 1 000 = 6 000 g.' },
        { difficulty: 'Medium', question: 'Skakel 3 750 g om na kilogram.', checkMode: 'auto', correctAnswer: '3.75kg', correctAnswers: ['3.75kg', '3.75 kg', '3.75', '3,75kg', '3,75 kg'], explanation: 'Om gram na kilogram om te skakel, deel deur 1 000. 3 750 ÷ 1 000 = 3,75 kg.' },
        { difficulty: 'Medium', question: 'ʼn Pakkie spykers is gemerk "0,65 kg". ʼn Yswinkelklerk moet dit in gram vir die prysplakkertjie skryf. Wat moet die plakkertjie sê?', checkMode: 'auto', correctAnswer: '650g', correctAnswers: ['650g', '650 g', '650'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 0,65 × 1 000 = 650 g.' },
        { difficulty: 'Medium', question: 'ʼn Vragmotor se vrag het ʼn massa van 5 250 000 mg. Wat is hierdie massa in kilogram? (Wenk: skakel eers om na gram, dan na kilogram.)', checkMode: 'auto', correctAnswer: '5.25kg', correctAnswers: ['5.25kg', '5.25 kg', '5.25', '5,25kg', '5,25 kg'], explanation: 'Skakel eers mg om na g deur deur 1 000 te deel: 5 250 000 ÷ 1 000 = 5 250 g. Skakel dan g om na kg deur weer deur 1 000 te deel: 5 250 ÷ 1 000 = 5,25 kg.' },
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal se wyser wys presies halfpad tussen die 350 g-merk en die 450 g-merk. Watter massa word getoon?', checkMode: 'auto', correctAnswer: '400g', correctAnswers: ['400g', '400 g', '400'], explanation: 'Die verskil tussen die merke is 450 − 350 = 100. Die helfte van 100 is 50. Tel dit by die laer merk: 350 + 50 = 400 g.' },
        { difficulty: 'Medium', question: 'ʼn Badkamerskaal het merke elke 5 kg. Die wyser wys by die 9de merk bo 0 kg. Wat is die aflesing?', checkMode: 'auto', correctAnswer: '45kg', correctAnswers: ['45kg', '45 kg', '45'], explanation: 'Tel 9 merke van 5 kg elk op vanaf 0: 9 × 5 = 45 kg.' },
        { difficulty: 'Medium', question: 'Drie pakkies word twee-twee op ʼn balansskaal vergelyk. Pakkie A is swaarder as Pakkie B. Pakkie B is swaarder as Pakkie C. Lys die pakkies van swaarste na ligste, en verduidelik jou redenasie.', checkMode: 'self', answer: 'Van swaarste na ligste: A, B, C. Aangesien A swaarder is as B, moet A voor B kom. Aangesien B swaarder is as C, moet B voor C kom. As ons hierdie leidrade saamvoeg, is A die swaarste, B is in die middel, en C is die ligste.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn vol waterbottel behoort in ton gemeet te word omdat "ton die regte wetenskaplike eenheid is." Is hierdie redenasie geldig? Verduidelik wat verkeerd is daarmee.', checkMode: 'self', answer: 'Nee, hierdie redenasie is nie geldig nie. Daar is nie ʼn enkele "regte" eenheid vir elke meting nie — die beste eenheid is watter een ook al ʼn sinvolle, maklik-leesbare getal vir daardie spesifieke voorwerp gee. ʼn Vol waterbottel het ʼn massa van ongeveer 1 kg (of 1 000 g), dus sou ton ʼn baie klein, ongemaklike desimale getal soos 0,001 t gee. Kilogram of gram is die sinvolle keuse hier, nie ton nie.' },
        { difficulty: 'Medium', question: 'Kagiso sê om 2,8 kg na gram om te skakel, deel jy deur 1 000, wat 0,0028 g gee. Is Kagiso korrek? Verduidelik die fout.', checkMode: 'self', answer: 'Nee, Kagiso is verkeerd. Om van kilogram (ʼn groter eenheid) na gram (ʼn kleiner eenheid) om te skakel, moet jy met 1 000 vermenigvuldig, nie deel nie. Die korrekte berekening is 2,8 × 1 000 = 2 800 g. Kagiso het die verkeerde bewerking gebruik, en deling het ook die desimale punt in die verkeerde rigting geskuif — om na ʼn kleiner eenheid om te skakel, behoort die getal groter te maak, nie kleiner nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Resep vra vir 900 g meel. Zanele sê sy kan haar kombuisskaal op kilogram stel en net "0,9" aflees sonder om ʼn eenheid by te voeg, want "almal sal weet dit beteken kilogram." Verduidelik waarom dit ʼn probleem kan wees.', checkMode: 'self', answer: 'Om die eenheid weg te laat is riskant omdat ʼn getal op sy eie niksseggend is — "0,9" kan gelees word as 0,9 kg, 0,9 g, of selfs heeltemal verkeerd verstaan word. As iemand aanneem dit beteken gram in plaas van kilogram, sal hulle heelwat te min meel gebruik. Om altyd die eenheid neer te skryf (0,9 kg) verwyder enige twyfel oor wat die meting werklik beteken.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Posparsel het ʼn massa van 2 350 g. Sipho rond dit af na "2 kg" op die koerier-vorm omdat hy dink om af te rond na die naaste hele kilogram is altyd reg vir posgeld. Verduidelik waarom dit ʼn probleem kan wees, met die werklike omskakeling.', checkMode: 'self', answer: '2 350 g skakel om na 2,35 kg (2 350 ÷ 1 000 = 2,35 kg), nie presies 2 kg nie. Om so af te rond onderskat die werklike massa met 350 g, wat saak maak vir posgeld omdat koeriers dikwels volgens gewigskategorieë hef — die onderskatting van die massa kan beteken die pakkie word verkeerd gehef of geweier. Dit is veiliger om die presiese massa, 2,35 kg, neer te skryf eerder as om af te rond.' },
        { difficulty: 'Medium-Hard', question: 'Lindiwe koop 1,4 kg aartappels en 650 g uie. Wat is die totale massa van haar groente, in kilogram?', checkMode: 'auto', correctAnswer: '2.05kg', correctAnswers: ['2.05kg', '2.05 kg', '2.05', '2,05kg', '2,05 kg'], explanation: 'Skakel 1,4 kg om na gram: 1,4 × 1 000 = 1 400 g. Tel op: 1 400 g + 650 g = 2 050 g. Skakel terug om na kilogram: 2 050 ÷ 1 000 = 2,05 kg.' },
        { difficulty: 'Medium-Hard', question: 'ʼn 5 kg-sak mieliemeel het 2 350 g gebruik om ʼn groot pot pap vir ʼn familie-byeenkoms te kook. Hoeveel mieliemeel bly oor, in gram?', checkMode: 'auto', correctAnswer: '2650g', correctAnswers: ['2650g', '2650 g', '2 650 g', '2650'], explanation: 'Skakel 5 kg om na gram: 5 × 1 000 = 5 000 g. Trek die gebruikte hoeveelheid af: 5 000 − 2 350 = 2 650 g oor.' },
        { difficulty: 'Hard', question: 'ʼn Krat bevat 6 identiese blikkies verf, elk met ʼn massa van 225 g, plus een leë kwasbak met ʼn massa van 800 g. Wat is die totale massa van die krat se inhoud, in kilogram?', checkMode: 'auto', correctAnswer: '2.15kg', correctAnswers: ['2.15kg', '2.15 kg', '2.15', '2,15kg', '2,15 kg'], explanation: 'Massa van 6 blikkies: 6 × 225 g = 1 350 g. Tel die kwasbak by: 1 350 + 800 = 2 150 g. Skakel om na kilogram: 2 150 ÷ 1 000 = 2,15 kg.' },
        { difficulty: 'Hard', question: 'ʼn Waatlemoen het ʼn massa van 3,6 kg. Dit word in 4 gelyke stukke gesny om onder vriende te deel. Wat is die massa van een stuk, in gram? Wys jou volledige berekening.', checkMode: 'self', answer: 'Skakel 3,6 kg om na gram: 3,6 × 1 000 = 3 600 g. Deel deur die aantal stukke: 3 600 ÷ 4 = 900 g. Elke stuk het ʼn massa van 900 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenhede, omskakelings, skale en berekeninge met massa baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van massa — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor omskakelings en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn korrel rys te meet: mg, g, kg of t?', checkMode: 'auto', correctAnswer: 'mg', correctAnswers: ['mg', 'milligram'], explanation: 'ʼn Enkele korrel rys is uiters lig, dus is milligram (mg) die sinvolle eenheid. Gram of kilogram sou ʼn ongemaklike, baie klein desimale getal gee.' },
        { difficulty: 'Easy', question: 'Thabo tel ʼn mango op en wil dit weeg. Watter eenheid gee die sinvolste aflesing vir die massa daarvan — gram of milligram?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Mango het ʼn massa van ʼn paar honderd gram, dus gee gram (g) ʼn sinvolle aflesing. Milligram sou ʼn baie groot, onhanteerbare getal gee.' },
        { difficulty: 'Easy', question: 'ʼn Reisiger kies ʼn eenheid om die massa van haar gepakte tas vir die lugredery aan te teken. Sy kies ton omdat "swaarder bagasie ʼn groter eenheid nodig het." Is sy korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, sy is nie korrek nie. ʼn Gepakte tas het ʼn massa van ongeveer 15 tot 25 kg, wat ʼn sinvolle getal in kilogram is. In ton sou dit ʼn baie klein, ongemaklike desimale getal soos 0,02 t wees. Kilogram is die regte eenheid vir bagasie — ton word gereserveer vir baie swaarder dinge soos vragmotors of houers.' },
        { difficulty: 'Easy', question: 'ʼn Skooltas het ʼn massa van ongeveer 5 kg en ʼn walvis het ʼn massa van ongeveer 8 t. As ʼn onderwyser albei massas met dieselfde eenheid wou vergelyk sonder om by simplistiese getalle uit te kom, sou kilogram of ton beter vir die walvis werk, en waarom?', checkMode: 'self', answer: 'Ton werk baie beter vir die walvis. In kilogram sou die walvis ongeveer 8 000 kg wees, wat ʼn onhanteerbare getal is om te skryf en te vergelyk, terwyl dit in ton eenvoudig 8 t is. Die skooltas is beter geskik vir kilogram (5 kg), aangesien dit in ton ʼn ongemaklike desimale getal sou wees (0,005 t) — dit wys dat elke voorwerp gewoonlik sy eie natuurlike eenheid behou eerder as om gedwing te word om een met iets baie anders in grootte te deel.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 3,8 kg om na gram.', checkMode: 'auto', correctAnswer: '3800g', correctAnswers: ['3800g', '3800 g', '3 800 g', '3800'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 3,8 × 1 000 = 3 800 g.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Veearts teken die massa van ʼn groot hond as 9 kg aan op ʼn vorm wat net gram aanvaar. Watter waarde moet die veearts invoer?', checkMode: 'auto', correctAnswer: '9000g', correctAnswers: ['9000g', '9000 g', '9 000 g', '9000'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 9 × 1 000 = 9 000 g.' },
        { difficulty: 'Medium', question: 'Skakel 4 250 g om na kilogram.', checkMode: 'auto', correctAnswer: '4.25kg', correctAnswers: ['4.25kg', '4.25 kg', '4.25', '4,25kg', '4,25 kg'], explanation: 'Om gram na kilogram om te skakel, deel deur 1 000. 4 250 ÷ 1 000 = 4,25 kg.' },
        { difficulty: 'Medium', question: 'ʼn Sak biltong is gemerk "0,35 kg". ʼn Winkelier moet dit in gram vir die tikkasstelsel invoer. Wat moet ingevoer word?', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350 g', '350'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 0,35 × 1 000 = 350 g.' },
        { difficulty: 'Medium', question: 'ʼn Aflewering skroewe het ʼn massa van 8 400 000 mg. Wat is hierdie massa in kilogram? (Wenk: skakel eers om na gram, dan na kilogram.)', checkMode: 'auto', correctAnswer: '8.4kg', correctAnswers: ['8.4kg', '8.4 kg', '8.4', '8.40kg', '8.40 kg', '8,4kg', '8,4 kg', '8,40kg', '8,40 kg'], explanation: 'Skakel eers mg om na g deur deur 1 000 te deel: 8 400 000 ÷ 1 000 = 8 400 g. Skakel dan g om na kg deur weer deur 1 000 te deel: 8 400 ÷ 1 000 = 8,4 kg.' },
        { difficulty: 'Medium', question: 'ʼn Bagasieskaal se skerm wys presies halfpad tussen die 12 kg-merk en die 14 kg-merk. Watter massa word getoon?', checkMode: 'auto', correctAnswer: '13kg', correctAnswers: ['13kg', '13 kg', '13'], explanation: 'Die verskil tussen die merke is 14 − 12 = 2. Die helfte van 2 is 1. Tel dit by die laer merk: 12 + 1 = 13 kg.' },
        { difficulty: 'Medium', question: 'ʼn Pakkieskaal het merke elke 2 kg. Die wyser wys by die 6de merk bo 0 kg. Wat is die aflesing?', checkMode: 'auto', correctAnswer: '12kg', correctAnswers: ['12kg', '12 kg', '12'], explanation: 'Tel 6 merke van 2 kg elk op vanaf 0: 6 × 2 = 12 kg.' },
        { difficulty: 'Medium', question: 'Drie diere word twee-twee op ʼn balansskaal vergelyk. Die hond is ligter as die bok. Die bok is ligter as die koei. Lys die diere van ligste na swaarste, en verduidelik jou redenasie.', checkMode: 'self', answer: 'Van ligste na swaarste: hond, bok, koei. Aangesien die hond ligter is as die bok, kom die hond eerste. Aangesien die bok ligter is as die koei, kom die bok voor die koei. As ons hierdie leidrade saamvoeg, is die hond die ligste, die bok is in die middel, en die koei is die swaarste.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn enkele amandel behoort in kilogram gemeet te word omdat "kilogram die alledaagse eenheid is wat mense gebruik." Is hierdie redenasie geldig? Verduidelik wat verkeerd is daarmee.', checkMode: 'self', answer: 'Nee, hierdie redenasie is nie geldig nie. Die eenheidskeuse behoort af te hang van die werklike grootte van die voorwerp, nie van watter eenheid die bekendste voel nie. ʼn Enkele amandel het ʼn massa van slegs ʼn paar gram, dus sou dit in kilogram gemeet ʼn baie klein, ongemaklike desimale getal soos 0,005 kg gee. Gram is die sinvolle eenheid hier, al voel kilogram dalk soos die meer algemene alledaagse eenheid vir ander voorwerpe.' },
        { difficulty: 'Medium', question: 'Thandiwe sê om 1 600 g na kilogram om te skakel, vermenigvuldig jy met 1 000, wat 1 600 000 kg gee. Is Thandiwe korrek? Verduidelik die fout.', checkMode: 'self', answer: 'Nee, Thandiwe is verkeerd. Om van gram (ʼn kleiner eenheid) na kilogram (ʼn groter eenheid) om te skakel, moet jy deur 1 000 deel, nie vermenigvuldig nie. Die korrekte berekening is 1 600 ÷ 1 000 = 1,6 kg. Thandiwe het die verkeerde bewerking gebruik, wat die getal ook in die verkeerde rigting laat beweeg het — om na ʼn groter eenheid om te skakel, behoort die getal kleiner te maak, nie baie groter nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Voorskrif vra vir 250 mg medisyne per dosis. Bongani sê hy kan sy kombuisskaal op gram stel en net "0,25" aflees sonder om ʼn eenheid by te voeg, aangesien "die dokter sal weet wat dit beteken." Verduidelik waarom dit ʼn probleem kan wees.', checkMode: 'self', answer: 'Om die eenheid weg te laat is gevaarlik omdat "0,25" alleen geen aanduiding gee of dit 0,25 g, 0,25 kg, of iets heeltemal anders beteken nie. Vir medisyne veral kan verwarring tussen gram en milligram beteken dat ʼn dosis 1 000 keer te sterk of te swak is. Om altyd die volledige meting met sy eenheid neer te skryf (0,25 g, wat gelyk is aan 250 mg) verwyder hierdie risiko.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Doos teëls het ʼn massa van 4 650 g. Ayesha rond dit af na "4 kg" op die afleweringsnota omdat sy dink om na die naaste kilogram af te rond is altyd aanvaarbaar. Verduidelik waarom dit ʼn probleem kan wees, met die werklike omskakeling.', checkMode: 'self', answer: '4 650 g skakel om na 4,65 kg (4 650 ÷ 1 000 = 4,65 kg), nie presies 4 kg nie. Om so af te rond onderskat die werklike massa met 650 g, wat saak maak vir afleweringsnotas omdat voertuie en hanteerders dikwels gewigsbeperkings het — die onderskatting van die massa kan lei tot oorlading of verkeerde hefings. Dit is veiliger om die presiese massa, 4,65 kg, neer te skryf eerder as om af te rond.' },
        { difficulty: 'Medium-Hard', question: 'Nomvula koop 2,1 kg tamaties en 480 g rissies. Wat is die totale massa van haar groente, in kilogram?', checkMode: 'auto', correctAnswer: '2.58kg', correctAnswers: ['2.58kg', '2.58 kg', '2.58', '2,58kg', '2,58 kg'], explanation: 'Skakel 2,1 kg om na gram: 2,1 × 1 000 = 2 100 g. Tel op: 2 100 g + 480 g = 2 580 g. Skakel terug om na kilogram: 2 580 ÷ 1 000 = 2,58 kg.' },
        { difficulty: 'Medium-Hard', question: 'ʼn 4 kg-sak hondekos het 1 750 g gebruik om ʼn werpsel hondjies oor ʼn naweek te voer. Hoeveel hondekos bly oor, in gram?', checkMode: 'auto', correctAnswer: '2250g', correctAnswers: ['2250g', '2250 g', '2 250 g', '2250'], explanation: 'Skakel 4 kg om na gram: 4 × 1 000 = 4 000 g. Trek die gebruikte hoeveelheid af: 4 000 − 1 750 = 2 250 g oor.' },
        { difficulty: 'Hard', question: 'ʼn Geskenkmandjie bevat 5 identiese konfytpotte, elk met ʼn massa van 340 g, plus een houtboks met ʼn massa van 900 g. Wat is die totale massa van die mandjie se inhoud, in kilogram?', checkMode: 'auto', correctAnswer: '2.6kg', correctAnswers: ['2.6kg', '2.6 kg', '2.60kg', '2.60 kg', '2,6kg', '2,6 kg', '2,60kg', '2,60 kg'], explanation: 'Massa van 5 potte: 5 × 340 g = 1 700 g. Tel die houtboks by: 1 700 + 900 = 2 600 g. Skakel om na kilogram: 2 600 ÷ 1 000 = 2,6 kg.' },
        { difficulty: 'Hard', question: 'ʼn Blok kaas het ʼn massa van 2,8 kg. Dit word in 7 gelyke stukke gesny vir ʼn markstalletjie. Wat is die massa van een stuk, in gram? Wys jou volledige berekening.', checkMode: 'self', answer: 'Skakel 2,8 kg om na gram: 2,8 × 1 000 = 2 800 g. Deel deur die aantal stukke: 2 800 ÷ 7 = 400 g. Elke stuk het ʼn massa van 400 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met eenhede, omskakelings en skale van massa werk.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip — gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor omskakelings en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike konteks + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die massa van ʼn enkele knoop te meet: mg, g, kg of t?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'gram'], explanation: 'ʼn Knoop is ʼn ligte voorwerp, dus is gram (g) die sinvolle eenheid. Milligram sou ʼn onnodig groot getal gee vir so ʼn klein voorwerp, aangesien ʼn knoop steeds ʼn massa van ʼn paar gram het.' },
        { difficulty: 'Easy', question: 'ʼn Kliënt tel ʼn sak uie by die supermark op. Watter eenheid gee die sinvolste aflesing vir die massa daarvan — gram of kilogram?', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilogram'], explanation: 'ʼn Sak uie is redelik swaar, dus gee kilogram (kg) ʼn sinvolle aflesing. Gram sou ʼn onnodig groot getal gee.' },
        { difficulty: 'Easy', question: 'ʼn Hawewerker kies ʼn eenheid om die massa van ʼn vragskip se volle lading aan te teken. Hy kies kilogram omdat "kilogram meer presies as ton is." Is dit ʼn sinvolle keuse? Verduidelik.', checkMode: 'self', answer: 'Nee, dit is nie ʼn sinvolle keuse nie. ʼn Vragskip se lading kan ʼn massa van duisende of miljoene kilogram hê, dus sou dit in kilogram aangeteken ʼn enorme, onleesbare getal gee. Ton (t) is die sinvolle eenheid vir iets so swaar — "meer presies" maak nie saak as die getal te onhanteerbaar is om te lees of te vergelyk nie.' },
        { difficulty: 'Easy', question: 'ʼn Potlood het ʼn massa van ongeveer 5 g en ʼn klein motor het ʼn massa van ongeveer 1,2 t. Verduidelik waarom dit nie sin sou maak om albei voorwerpe met dieselfde eenheid van massa te beskryf nie.', checkMode: 'self', answer: 'Om dieselfde eenheid vir albei te gebruik, sou minstens een getal baie ongemaklik maak om te lees. As gram vir albei gebruik word, sou die motor ongeveer 1 200 000 g wees, ʼn enorme getal. As ton vir albei gebruik word, sou die potlood ongeveer 0,000005 t wees, ʼn onmoontlik klein desimale getal. Omdat die potlood en die motor so baie in grootte verskil, benodig elkeen sy eie sinvolle eenheid — gram vir die potlood en ton vir die motor — eerder as om een te deel.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 7,5 kg om na gram.', checkMode: 'auto', correctAnswer: '7500g', correctAnswers: ['7500g', '7500 g', '7 500 g', '7500'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 7,5 × 1 000 = 7 500 g.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gimnasium teken ʼn stang se massa as 12 kg aan op toerusting wat net in gram gemerk is. Watter waarde moet neergeskryf word?', checkMode: 'auto', correctAnswer: '12000g', correctAnswers: ['12000g', '12000 g', '12 000 g', '12000'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 12 × 1 000 = 12 000 g.' },
        { difficulty: 'Medium', question: 'Skakel 6 300 g om na kilogram.', checkMode: 'auto', correctAnswer: '6.3kg', correctAnswers: ['6.3kg', '6.3 kg', '6.3', '6.30kg', '6.30 kg', '6,3kg', '6,3 kg', '6,30kg', '6,30 kg'], explanation: 'Om gram na kilogram om te skakel, deel deur 1 000. 6 300 ÷ 1 000 = 6,3 kg.' },
        { difficulty: 'Medium', question: 'ʼn Boks skryfbehoeftes is gemerk "0,08 kg". ʼn Klerk moet dit in gram vir die voorraadlys skryf. Wat moet ingevoer word?', checkMode: 'auto', correctAnswer: '80g', correctAnswers: ['80g', '80 g', '80'], explanation: 'Om kilogram na gram om te skakel, vermenigvuldig met 1 000. 0,08 × 1 000 = 80 g.' },
        { difficulty: 'Medium', question: 'ʼn Groep pille het ʼn totale massa van 3 600 000 mg. Wat is hierdie massa in kilogram? (Wenk: skakel eers om na gram, dan na kilogram.)', checkMode: 'auto', correctAnswer: '3.6kg', correctAnswers: ['3.6kg', '3.6 kg', '3.60kg', '3.60 kg', '3,6kg', '3,6 kg', '3,60kg', '3,60 kg'], explanation: 'Skakel eers mg om na g deur deur 1 000 te deel: 3 600 000 ÷ 1 000 = 3 600 g. Skakel dan g om na kg deur weer deur 1 000 te deel: 3 600 ÷ 1 000 = 3,6 kg.' },
        { difficulty: 'Medium', question: 'ʼn Kombuisskaal se wyser wys presies halfpad tussen die 700 g-merk en die 900 g-merk. Watter massa word getoon?', checkMode: 'auto', correctAnswer: '800g', correctAnswers: ['800g', '800 g', '800'], explanation: 'Die verskil tussen die merke is 900 − 700 = 200. Die helfte van 200 is 100. Tel dit by die laer merk: 700 + 100 = 800 g.' },
        { difficulty: 'Medium', question: 'ʼn Badkamerskaal het merke elke 4 kg. Die wyser wys by die 7de merk bo 0 kg. Wat is die aflesing?', checkMode: 'auto', correctAnswer: '28kg', correctAnswers: ['28kg', '28 kg', '28'], explanation: 'Tel 7 merke van 4 kg elk op vanaf 0: 7 × 4 = 28 kg.' },
        { difficulty: 'Medium', question: 'Drie tasse word twee-twee op ʼn balansskaal vergelyk. Tas X is swaarder as Tas Y. Tas Z is ligter as Tas Y. Lys die tasse van swaarste na ligste, en verduidelik jou redenasie.', checkMode: 'self', answer: 'Van swaarste na ligste: X, Y, Z. Aangesien X swaarder is as Y, kom X eerste. Aangesien Z ligter is as Y, moet Z ná Y kom. As ons hierdie leidrade saamvoeg, is X die swaarste, Y is in die middel, en Z is die ligste.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê ʼn sak sement behoort in milligram gemeet te word omdat "kleiner eenhede altyd meer akkuraat is." Is hierdie redenasie geldig? Verduidelik wat verkeerd is daarmee.', checkMode: 'self', answer: 'Nee, hierdie redenasie is nie geldig nie. ʼn Kleiner eenheid maak ʼn meting nie outomaties meer akkuraat nie — dit verander net hoe groot die getal lyk. ʼn Sak sement het ʼn massa van etlike kilogram, dus sou dit in milligram gemeet ʼn enorme, onhanteerbare getal met te veel syfers gee, soos 25 000 000 mg in plaas van 25 kg. Kilogram is die sinvolle eenheid vir ʼn voorwerp van hierdie grootte.' },
        { difficulty: 'Medium', question: 'Palesa sê om 4,5 t na kilogram om te skakel, deel jy deur 1 000, wat 0,0045 kg gee. Is Palesa korrek? Verduidelik die fout.', checkMode: 'self', answer: 'Nee, Palesa is verkeerd. Om van ton (ʼn groter eenheid) na kilogram (ʼn kleiner eenheid) om te skakel, moet jy met 1 000 vermenigvuldig, nie deel nie. Die korrekte berekening is 4,5 × 1 000 = 4 500 kg. Palesa het die verkeerde bewerking gebruik, en deling het ook die getal in die verkeerde rigting laat beweeg — om na ʼn kleiner eenheid om te skakel, behoort die getal groter te maak, nie kleiner nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Baba benodig 120 mg van ʼn aanvulling daagliks. ʼn Ouer sê hulle kan net "0,12" op ʼn gramskaal meet en die eenheid weglaat, want "dit is voor die hand liggend gram." Verduidelik waarom dit riskant is om die eenheid weg te laat.', checkMode: 'self', answer: 'Om die eenheid weg te laat is riskant omdat "0,12" alleen geen aanduiding gee of dit 0,12 g, 0,12 kg, of iets anders beteken nie. Vir ʼn baba se dosis kan verwarring tussen gram en kilogram (of omgekeerd) beteken ʼn dosis wat 1 000 keer te veel of te min is, wat gevaarlik kan wees. Om altyd die volledige meting met sy eenheid neer te skryf (0,12 g, wat gelyk is aan 120 mg) vermy hierdie verwarring.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Krat groente het ʼn massa van 8 250 g. Themba rond dit af na "8 kg" op die markstrokie omdat hy dink om na die naaste kilogram af te rond is altyd reg. Verduidelik waarom dit ʼn probleem kan wees, met die werklike omskakeling.', checkMode: 'self', answer: '8 250 g skakel om na 8,25 kg (8 250 ÷ 1 000 = 8,25 kg), nie presies 8 kg nie. Om so af te rond onderskat die werklike massa met 250 g, wat saak maak wanneer goedere volgens massa geprys of gehef word — die verkoper kan geld verloor, of ʼn afleweringsvoertuig se lading kan onderberaam word. Dit is veiliger om die presiese massa, 8,25 kg, neer te skryf eerder as om af te rond.' },
        { difficulty: 'Medium-Hard', question: 'Owethu koop 1,75 kg beesvleis en 620 g boerewors. Wat is die totale massa van sy vleis, in kilogram?', checkMode: 'auto', correctAnswer: '2.37kg', correctAnswers: ['2.37kg', '2.37 kg', '2.37', '2,37kg', '2,37 kg'], explanation: 'Skakel 1,75 kg om na gram: 1,75 × 1 000 = 1 750 g. Tel op: 1 750 g + 620 g = 2 370 g. Skakel terug om na kilogram: 2 370 ÷ 1 000 = 2,37 kg.' },
        { difficulty: 'Medium-Hard', question: 'ʼn 6 kg-sak aartappels het 2 875 g gebruik om skyfies vir ʼn skoolinsamelingsaksie te maak. Hoeveel bly oor, in gram?', checkMode: 'auto', correctAnswer: '3125g', correctAnswers: ['3125g', '3125 g', '3 125 g', '3125'], explanation: 'Skakel 6 kg om na gram: 6 × 1 000 = 6 000 g. Trek die gebruikte hoeveelheid af: 6 000 − 2 875 = 3 125 g oor.' },
        { difficulty: 'Hard', question: 'ʼn Geskenkboks bevat 8 identiese seep, elk met ʼn massa van 85 g, plus een dekoratiewe lint met ʼn massa van 20 g. Wat is die totale massa van die geskenkboks se inhoud, in kilogram?', checkMode: 'auto', correctAnswer: '0.7kg', correctAnswers: ['0.7kg', '0.7 kg', '0.70kg', '0.70 kg', '0,7kg', '0,7 kg', '0,70kg', '0,70 kg'], explanation: 'Massa van 8 seep: 8 × 85 g = 680 g. Tel die lint by: 680 + 20 = 700 g. Skakel om na kilogram: 700 ÷ 1 000 = 0,7 kg.' },
        { difficulty: 'Hard', question: 'ʼn Groot pampoen het ʼn massa van 4,8 kg. Dit word in 6 gelyke stukke gesny om by ʼn soepkombuis te deel. Wat is die massa van een stuk, in gram? Wys jou volledige berekening.', checkMode: 'self', answer: 'Skakel 4,8 kg om na gram: 4,8 × 1 000 = 4 800 g. Deel deur die aantal stukke: 4 800 ÷ 6 = 800 g. Elke stuk het ʼn massa van 800 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan eenhede, omskakelings en berekeninge van massa op werklike probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor woordprobleme en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ] as PracticeSet[],
}
