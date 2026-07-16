import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (time units) ─────────────────────────────────────────────
// seconds  → blue   (#2563eb)
// minutes  → green  (#16a34a)
// hours    → orange (#ea580c)
// days     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Time',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time',
      title: 'Units of Time',
      icon: '⏱',
      explanation:
        `<p style="margin-bottom:16px;">We measure time using different units depending on how long something takes. The main units of time are ${bl('seconds')} (s), ${gr('minutes')} (min), ${or('hours')} (h), ${re('days')}, weeks, months and years. Knowing how to convert between these units is an important skill.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('seconds')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minutes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hours')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('days')}</span>` +
        `</div>` +

        // ── Conversion facts ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key conversion facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Seconds → Minutes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('60 seconds')} = ${gr('1 minute')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minutes → Hours</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('60 minutes')} = ${or('1 hour')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Hours → Days</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('24 hours')} = ${re('1 day')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Days → Weeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('7 days')} = 1 week</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Months → Years</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 months = 1 year<br>${re('365 days')} = 1 year</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Leap year</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('366 days')} — happens every 4 years</p>` +
        `</div>` +

        `</div>` +

        // ── Converting tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting between units</p>` +
        `<p style="margin:0;color:#1e3a8a;">When converting from a <strong>larger unit to a smaller unit</strong> (e.g. ${gr('minutes')} → ${bl('seconds')}), <strong>multiply</strong> by the conversion number.<br>When converting from a <strong>smaller unit to a larger unit</strong> (e.g. ${bl('seconds')} → ${gr('minutes')}), <strong>divide</strong> by the conversion number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho brushes his teeth for 2 minutes. How many seconds is that?',
          answer: `2 ${gr('minutes')} = 120 ${bl('seconds')}`,
          steps: [
            `We are converting from a larger unit (${gr('minutes')}) to a smaller unit (${bl('seconds')}). When going from larger to smaller, we <strong>multiply</strong>.`,
            `Use the conversion fact: 1 ${gr('minute')} = ${bl('60 seconds')}.`,
            `2 ${gr('minutes')} = 2 × ${bl('60')} = ${bl('120 seconds')}.`,
            `<strong>Answer:</strong> Sipho brushes his teeth for ${bl('120 seconds')}.`,
          ],
        },
        {
          question: 'A movie is 150 minutes long. How long is that in hours and minutes?',
          answer: `150 ${gr('minutes')} = 2 ${or('hours')} and 30 ${gr('minutes')}`,
          steps: [
            `We are converting ${gr('minutes')} into ${or('hours')} and ${gr('minutes')}. Use the conversion fact: 1 ${or('hour')} = ${gr('60 minutes')}.`,
            `Divide 150 by 60 to find the number of full hours: 150 ÷ 60 = <strong>2 remainder 30</strong>.`,
            `The quotient 2 tells us there are 2 full ${or('hours')}. The remainder 30 tells us there are 30 ${gr('minutes')} left over.`,
            `<strong>Answer:</strong> The movie is ${or('2 hours')} and ${gr('30 minutes')} long.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'The units of time in order from smallest to largest — seconds (blue), minutes (green), hours (orange), days (red) — with the conversion numbers between each unit',
      diagramSvg:
        '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="80" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">seconds</text><rect x="140" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="80" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">minutes</text><rect x="270" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="310" y="80" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">hours</text><rect x="400" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="440" y="80" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">days</text><line x1="95" y1="48" x2="135" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="139,48 131,43 131,53" fill="#dc2626"/><text x="115" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷60</text><line x1="225" y1="48" x2="265" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="269,48 261,43 261,53" fill="#dc2626"/><text x="245" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷60</text><line x1="355" y1="48" x2="395" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="399,48 391,43 391,53" fill="#dc2626"/><text x="375" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷24</text><line x1="135" y1="105" x2="95" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="91,105 99,100 99,110" fill="#16a34a"/><text x="115" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×60</text><line x1="265" y1="105" x2="225" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="221,105 229,100 229,110" fill="#16a34a"/><text x="245" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×60</text><line x1="395" y1="105" x2="355" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="351,105 359,100 359,110" fill="#16a34a"/><text x="375" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×24</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the units of time and how to convert between them by multiplying or dividing with colour coded units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING THE TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-the-time',
      title: 'Reading the Time',
      icon: '🕐',
      explanation:
        `<p style="margin-bottom:16px;">We can read time on an <strong>analogue clock</strong> or a <strong>digital clock</strong>. An analogue clock has two hands — the short ${bl('hour hand')} and the long ${gr('minute hand')}. The ${gr('minute hand')} takes 60 minutes to go all the way around. Each number on the clock represents 5 minutes. A digital clock shows the time using numbers separated by a colon — for example 3:45 means 3 hours and 45 minutes. We also use ${or('am')} for times between midnight and midday and ${re('pm')} for times between midday and midnight.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hour hand')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minute hand')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('am')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('pm')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hour hand (short)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('hour hand')} points to the current hour. It moves slowly — one full turn every 12 hours.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minute hand (long)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('minute hand')} points to the minutes. Each number it points to represents 5 minutes. One full turn = 60 minutes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">am — before midday</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('am')} covers midnight (12:00 am) through to just before midday (11:59 am). Morning times use ${or('am')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">pm — after midday</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('pm')} covers midday (12:00 pm) through to just before midnight (11:59 pm). Afternoon and evening times use ${re('pm')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading the minute hand</p>` +
        `<p style="margin:0;color:#1e3a8a;">Multiply the number the ${gr('minute hand')} points to by <strong>5</strong> to get the minutes. For example: ${gr('minute hand')} at 9 → 9 × 5 = 45 minutes past the hour.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The hour hand points to 4 and the minute hand points to 6 on an analogue clock. What time is it?',
          answer: `The time is ${bl('4')}:${gr('30')} or half past four`,
          steps: [
            `The ${bl('hour hand')} at 4 means it is ${bl('4')} hours.`,
            `The ${gr('minute hand')} at 6 means 6 × 5 = ${gr('30')} minutes past the hour.`,
            `<strong>Answer:</strong> The time is ${bl('4')}:${gr('30')} or half past four.`,
          ],
        },
        {
          question: 'Write 7:15 am in words.',
          answer: `Quarter past seven in the morning`,
          steps: [
            `7:15 ${or('am')} means 15 minutes past 7 in the morning — ${or('am')} tells us it is before midday.`,
            `15 minutes past the hour is called <strong>quarter past</strong> (because 15 minutes is a quarter of 60 minutes).`,
            `<strong>Answer:</strong> Quarter past seven in the morning.`,
          ],
        },
        {
          question: 'What is the difference between 6:20 am and 6:20 pm?',
          answer: `They are 12 hours apart`,
          steps: [
            `${or('am')} means before midday — 6:20 ${or('am')} is in the early morning.`,
            `${re('pm')} means after midday — 6:20 ${re('pm')} is in the evening.`,
            `<strong>Answer:</strong> They are 12 hours apart even though the digits look the same.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'An analogue clock showing the short hour hand in blue pointing to 4 and the long minute hand in green pointing to 6, with the time 4:30 labelled',
      diagramSvg:
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="90" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="49" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">12</text><text x="123" y="55" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="140" y="72" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">2</text><text x="146" y="95" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">3</text><text x="140" y="118" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">4</text><text x="123" y="135" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">5</text><text x="100" y="145" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">6</text><text x="77" y="135" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">7</text><text x="60" y="118" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">8</text><text x="54" y="95" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">9</text><text x="60" y="72" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">10</text><text x="77" y="55" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">11</text><line x1="100" y1="90" x2="126" y2="105" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><line x1="100" y1="90" x2="100" y2="135" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="90" r="3.5" fill="#0f1f3d"/><text x="100" y="182" font-size="18" font-weight="700" fill="#0f1f3d" text-anchor="middle">4:30</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read time on an analogue clock using the blue hour hand and the green minute hand, and how am and pm are used" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-time',
      title: 'Calculating Time',
      icon: '⏰',
      explanation:
        `<p style="margin-bottom:16px;">We can calculate how much time has passed between two times or find the ${re('end time')} when we know the ${bl('start time')} and the ${gr('duration')}. When calculating time always work in the same units. A useful method is to count up from the ${bl('start time')} to the ${re('end time')} in steps. Remember that time does not work in base 10 — there are 60 minutes in an hour, not 100.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('start time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('end time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('duration')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Start time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('start time')} is when the event begins. We count forward from here.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">End time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('end time')} is when the event finishes. We count up to this time.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Duration</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('duration')} is how long something takes — the difference between the ${bl('start')} and ${re('end')} times.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Total time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('total')} is the combined time when you add two or more ${gr('durations')} together.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Time is not base 10</p>` +
        `<p style="margin:0;color:#1e3a8a;">When adding or subtracting time, remember there are <strong>60 minutes in an hour</strong>, not 100. If your minutes total 60 or more, convert the extra minutes into hours. For example: 45 minutes + 20 minutes = 65 minutes = 1 hour 5 minutes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato starts her homework at 3:30 pm and finishes at 5:10 pm. How long did she take?',
          answer: `Lerato took ${or('1 hour 40 minutes')}`,
          steps: [
            `Count up from the ${bl('start time')} (${bl('3:30 pm')}) to the ${re('end time')} (${re('5:10 pm')}) in steps.`,
            `From ${bl('3:30')} to ${bl('4:30')} is ${gr('1 hour')}.`,
            `From ${bl('4:30')} to ${re('5:10')} is ${gr('40 minutes')}.`,
            `<strong>Answer:</strong> ${or('Total time')} = ${gr('1 hour')} + ${gr('40 minutes')} = ${or('1 hour 40 minutes')}.`,
          ],
        },
        {
          question: 'A train leaves at 8:45 am and the journey takes 2 hours 30 minutes. What time does it arrive?',
          answer: `The train arrives at ${re('11:15 am')}`,
          steps: [
            `${bl('Start time')}: ${bl('8:45 am')}. Add the ${gr('duration')}: ${gr('2 hours 30 minutes')}.`,
            `Add the hours first: ${bl('8:45')} + ${gr('2 hours')} = <strong>10:45</strong>.`,
            `Add the minutes: <strong>10:45</strong> + ${gr('30 minutes')} = ${re('11:15')}.`,
            `<strong>Answer:</strong> The train arrives at ${re('11:15 am')}.`,
          ],
        },
        {
          question: 'Sipho watches two movies. The first is 1 hour 45 minutes long and the second is 2 hours 20 minutes long. How long does he watch movies in total?',
          answer: `Sipho watches movies for ${or('4 hours 5 minutes')} in total`,
          steps: [
            `Add the hours: ${gr('1 hour')} + ${gr('2 hours')} = <strong>3 hours</strong>.`,
            `Add the minutes: ${gr('45 minutes')} + ${gr('20 minutes')} = <strong>65 minutes</strong>.`,
            `Convert 65 minutes: 65 = 60 + 5 = ${gr('1 hour')} 5 minutes.`,
            `Add the converted hour to the hours total: <strong>3 hours</strong> + ${gr('1 hour')} 5 minutes = ${or('4 hours 5 minutes')}.`,
            `<strong>Answer:</strong> Sipho watches movies for ${or('4 hours 5 minutes')} in total.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate elapsed time by counting up from the start time in blue to the end time in red using hour and minute steps in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — READING CALENDARS AND TIMETABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-calendars-and-timetables',
      title: 'Reading Calendars and Timetables',
      icon: '📅',
      explanation:
        `<p style="margin-bottom:16px;">A calendar shows all the ${bl('days')}, weeks and months in a year. We use calendars to plan events and find out on which ${bl('day')} a ${or('date')} falls. A timetable shows when events happen in order. We use timetables for school schedules, bus times and train times. When reading a timetable always find the correct row and column to get the right information.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('days')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('dates')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('times')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('duration')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Calendar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A calendar shows all the ${bl('days')}, weeks and months in a year. Use it to find which ${bl('day')} a ${or('date')} falls on or to plan ahead.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dates</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${or('date')} tells us the exact day in a month. To find a ${or('date')} on a calendar, use the column for the ${bl('day')} and the row for the week.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Timetable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A timetable shows events in ${gr('time')} order. Find the correct row and column where a subject and a ${gr('time')} meet to get the right information.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Duration</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('duration')} tells us how long a lesson or event lasts. Add the ${re('duration')} to the start ${gr('time')} to find the end ${gr('time')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading a timetable</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always find the correct <strong>row</strong> (the subject or event) and the correct <strong>column</strong> (the ${bl('day')} or ${gr('time')}) to get the right information. Double-check both before writing your answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A calendar shows that the 1st of March is a Monday. On what day is the 15th of March?',
          answer: `The ${or('15th of March')} falls on a ${bl('Monday')}`,
          steps: [
            `Count from the ${or('1st')} to the ${or('15th')} — that is <strong>14 ${bl('days')} later</strong>.`,
            `14 ${bl('days')} = 2 full weeks (7 + 7 = 14).`,
            `Two weeks after ${bl('Monday')} is also ${bl('Monday')} — adding a full number of weeks always lands on the same ${bl('day')}.`,
            `<strong>Answer:</strong> The ${or('15th of March')} falls on a ${bl('Monday')}.`,
          ],
        },
        {
          question: 'A school timetable shows that Maths starts at 8:00 am and lasts 45 minutes. English starts right after Maths. What time does English start?',
          answer: `English starts at ${gr('8:45 am')}`,
          steps: [
            `Maths starts at ${gr('8:00 am')} and lasts ${re('45 minutes')}.`,
            `Add the ${re('duration')} to the start ${gr('time')}: ${gr('8:00')} + ${re('45 minutes')}.`,
            `${gr('8:00')} + ${re('45 minutes')} = ${gr('8:45 am')}.`,
            `<strong>Answer:</strong> English starts at ${gr('8:45 am')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'A March calendar with the 1st highlighted in blue as Monday and the 15th highlighted in orange, alongside a school timetable showing Maths starting at 8:00 am and English starting at 8:45 am (both in green) with the 45 minute duration marked in red',
      diagramSvg:
        '<svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg"><text x="99" y="16" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">March</text><text x="27" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">M</text><text x="51" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">T</text><text x="75" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">W</text><text x="99" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">T</text><text x="123" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">F</text><text x="147" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">S</text><text x="171" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">S</text><rect x="15" y="48" width="168" height="66" fill="none" stroke="#cbd5e1" stroke-width="1"/><line x1="39" y1="48" x2="39" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="63" y1="48" x2="63" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="87" y1="48" x2="87" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="111" y1="48" x2="111" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="135" y1="48" x2="135" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="159" y1="48" x2="159" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="70" x2="183" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="92" x2="183" y2="92" stroke="#cbd5e1" stroke-width="1"/><rect x="15" y="48" width="24" height="22" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/><rect x="15" y="92" width="24" height="22" fill="#ea580c" fill-opacity="0.15" stroke="#ea580c" stroke-width="2"/><text x="27" y="63" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="51" y="63" font-size="10" fill="#374151" text-anchor="middle">2</text><text x="75" y="63" font-size="10" fill="#374151" text-anchor="middle">3</text><text x="99" y="63" font-size="10" fill="#374151" text-anchor="middle">4</text><text x="123" y="63" font-size="10" fill="#374151" text-anchor="middle">5</text><text x="147" y="63" font-size="10" fill="#374151" text-anchor="middle">6</text><text x="171" y="63" font-size="10" fill="#374151" text-anchor="middle">7</text><text x="27" y="85" font-size="10" fill="#374151" text-anchor="middle">8</text><text x="51" y="85" font-size="10" fill="#374151" text-anchor="middle">9</text><text x="75" y="85" font-size="10" fill="#374151" text-anchor="middle">10</text><text x="99" y="85" font-size="10" fill="#374151" text-anchor="middle">11</text><text x="123" y="85" font-size="10" fill="#374151" text-anchor="middle">12</text><text x="147" y="85" font-size="10" fill="#374151" text-anchor="middle">13</text><text x="171" y="85" font-size="10" fill="#374151" text-anchor="middle">14</text><text x="27" y="107" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><text x="51" y="107" font-size="10" fill="#374151" text-anchor="middle">16</text><text x="75" y="107" font-size="10" fill="#374151" text-anchor="middle">17</text><text x="99" y="107" font-size="10" fill="#374151" text-anchor="middle">18</text><text x="123" y="107" font-size="10" fill="#374151" text-anchor="middle">19</text><text x="147" y="107" font-size="10" fill="#374151" text-anchor="middle">20</text><text x="171" y="107" font-size="10" fill="#374151" text-anchor="middle">21</text><text x="285" y="16" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">School Timetable</text><rect x="220" y="50" width="120" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="230" y="66" font-size="11" font-weight="700" fill="#0f1f3d">Maths</text><text x="295" y="66" font-size="10" font-weight="700" fill="#16a34a">8:00 am</text><rect x="220" y="98" width="120" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="230" y="114" font-size="11" font-weight="700" fill="#0f1f3d">English</text><text x="292" y="114" font-size="10" font-weight="700" fill="#16a34a">8:45 am</text><line x1="280" y1="74" x2="280" y2="98" stroke="#dc2626" stroke-width="2"/><text x="292" y="90" font-size="10" font-weight="700" fill="#dc2626">45 min</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a calendar to find the day a date falls on and how to use a timetable to find start and end times using colour coded days blue dates orange times green and duration red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TIME PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-problems-in-context',
      title: 'Time Problems in Context',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">We use time every day to plan, organise and solve problems. When solving time problems read the question carefully to decide what you need to find — a ${bl('start time')}, an ${re('end time')} or a ${gr('duration')}. Write your answer clearly with the correct unit. Remember that 60 minutes make 1 hour so when your minutes add up to more than 60 you need to convert.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('start time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('end time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('each step')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Start time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('start time')} is when the event begins. Count forward from here to find the end time or total time.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">End time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('end time')} is when the event finishes. Add all the ${gr('steps')} to the ${bl('start time')} to reach the ${re('end time')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Each step</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Each ${gr('step')} is an individual time amount you add. Work through the ${gr('steps')} one at a time to avoid mistakes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Total</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('total')} is the combined time. If your minutes add up to 60 or more, convert the extra minutes into hours.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">60 minutes = 1 hour</p>` +
        `<p style="margin:0;color:#1e3a8a;">When your minutes add up to more than 60, convert the extra minutes into hours. Work in small ${gr('steps')} — add the hours first, then the minutes — to keep track of each part clearly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle leaves home at 7:15 am. She walks for 25 minutes to the bus stop and then waits 10 minutes for the bus. The bus ride takes 35 minutes. What time does she arrive at school?',
          answer: `Amahle arrives at school at ${re('8:25 am')}`,
          steps: [
            `${bl('Start time:')} Amahle leaves home at ${bl('7:15 am')}.`,
            `${gr('Step 1 — Walking:')} ${bl('7:15')} + ${gr('25 minutes')} = <strong>7:40</strong>.`,
            `${gr('Step 2 — Waiting:')} <strong>7:40</strong> + ${gr('10 minutes')} = <strong>7:50</strong>.`,
            `${gr('Step 3 — Bus ride:')} <strong>7:50</strong> + ${gr('35 minutes')} = ${re('8:25')}. (7:50 + 10 = 8:00, then 8:00 + 25 = 8:25)`,
            `<strong>Answer:</strong> Amahle arrives at school at ${re('8:25 am')}.`,
          ],
        },
        {
          question: 'A sports day starts at 9:00 am and ends at 2:30 pm. How long is the sports day?',
          answer: `The sports day lasts ${or('5 hours 30 minutes')}`,
          steps: [
            `Count from the ${bl('start time')} (${bl('9:00 am')}) to the ${re('end time')} (${re('2:30 pm')}).`,
            `${gr('Step 1:')} From ${bl('9:00 am')} to ${re('2:00 pm')} is ${gr('5 hours')}.`,
            `${gr('Step 2:')} From ${re('2:00 pm')} to ${re('2:30 pm')} is ${gr('30 minutes')}.`,
            `<strong>Answer:</strong> The sports day lasts ${or('5 hours')} + ${or('30 minutes')} = ${or('5 hours 30 minutes')}.`,
          ],
        },
        {
          question: 'Thabo practises guitar for 40 minutes every day. How many hours and minutes does he practise in one week?',
          answer: `Thabo practises for ${or('4 hours 40 minutes')} per week`,
          steps: [
            `${gr('Step 1:')} Multiply the daily practice by the number of days: 7 × ${gr('40 minutes')} = ${gr('280 minutes')}.`,
            `${gr('Step 2:')} Convert ${gr('280 minutes')} to hours and minutes: 280 ÷ 60 = <strong>4 remainder 40</strong> — that is 4 full hours and 40 minutes left over.`,
            `<strong>Answer:</strong> Thabo practises for ${or('4 hours 40 minutes')} per week.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve time problems in context by counting forward from the start time in blue through each step in green to reach the end time in red and reading off the total in orange" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many seconds are in 1 minute?',
      answer: '60',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: '1 minute = 60 seconds.',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many hours are in 1 day?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: '1 day = 24 hours.',
    },

    // ── Q3 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A movie is 120 minutes long. How long is that in hours?',
      answer: '2 hours',
      checkMode: 'auto',
      correctAnswer: '2 hours',
      correctAnswers: ['2 hours', '2'],
      explanation: '120 minutes ÷ 60 = 2 hours.',
    },

    // ── Q4 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says there are 400 minutes in a day. Is he correct? Explain.',
      answer: 'No — there are 24 hours in a day and 60 minutes in an hour. 24 × 60 = 1 440 minutes in a day.',
      checkMode: 'self',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'The minute hand points to 9 on a clock. How many minutes past the hour is it?',
      answer: '45',
      checkMode: 'auto',
      correctAnswer: '45',
      explanation: '9 × 5 = 45 minutes past the hour.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write 2:30 pm in words.',
      answer: 'half past two in the afternoon',
      checkMode: 'auto',
      correctAnswer: 'half past two in the afternoon',
      explanation: '2:30 pm — 30 minutes past 2 in the afternoon is half past two in the afternoon.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato wakes up at 6:15 am. Her clock shows the hour hand pointing between 6 and 7 and the minute hand pointing to 3. Is her clock correct? Explain.',
      answer: 'Yes — the minute hand at 3 means 15 minutes past. The hour hand between 6 and 7 means it is after 6 but before 7. The clock shows 6:15 which is correct.',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Amahle starts reading at 4:00 pm and reads for 45 minutes. What time does she finish?',
      answer: '4:45 pm',
      checkMode: 'auto',
      correctAnswer: '4:45 pm',
      explanation: '4:00 pm + 45 minutes = 4:45 pm.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bus leaves at 9:20 am and arrives 1 hour 50 minutes later. What time does it arrive?',
      answer: '11:10 am',
      checkMode: 'auto',
      correctAnswer: '11:10 am',
      explanation: '9:20 am + 1 hour = 10:20 am. 10:20 am + 50 minutes = 11:10 am.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo starts cooking at 5:45 pm. The meal takes 1 hour 30 minutes. What time will the meal be ready?',
      answer: '7:15 pm',
      checkMode: 'auto',
      correctAnswer: '7:15 pm',
      explanation: '5:45 pm + 1 hour = 6:45 pm. 6:45 pm + 30 minutes = 7:15 pm.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'The 1st of June is a Wednesday. What day is the 8th of June?',
      answer: 'Wednesday',
      checkMode: 'auto',
      correctAnswer: 'Wednesday',
      explanation: 'The 8th is 7 days after the 1st. 7 days = 1 full week, so the day is the same — Wednesday.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho has Maths from 8:00 to 8:45, English from 8:45 to 9:30 and Science from 9:45 to 10:30. How much time does he spend in class in total?',
      answer: '2 hours 15 minutes',
      checkMode: 'auto',
      correctAnswer: '2 hours 15 minutes',
      explanation: 'Maths: 8:00 to 8:45 = 45 minutes. English: 8:45 to 9:30 = 45 minutes. Science: 9:45 to 10:30 = 45 minutes. Total: 45 + 45 + 45 = 135 minutes = 2 hours 15 minutes.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato practises piano for 30 minutes every day. How many hours does she practise in 2 weeks?',
      answer: '7 hours',
      checkMode: 'auto',
      correctAnswer: '7 hours',
      correctAnswers: ['7 hours', '7'],
      explanation: '2 weeks = 14 days. 14 × 30 minutes = 420 minutes. 420 ÷ 60 = 7 hours.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A school event starts at 10:15 am and each of the 4 acts takes 25 minutes with a 10 minute break between each act. What time does the event end?',
      answer: '4 acts × 25 minutes = 100 minutes. 3 breaks × 10 minutes = 30 minutes. Total = 130 minutes = 2 hours 10 minutes. 10:15 am + 2 hours 10 minutes = 12:25 pm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle leaves home at 7:20 am. She walks 15 minutes to the taxi rank, waits 20 minutes and the taxi ride takes 40 minutes. She then walks 5 minutes to school. What time does she arrive?',
      answer: '8:40 am',
      checkMode: 'auto',
      correctAnswer: '8:40 am',
      explanation: '7:20 am + 15 minutes = 7:35 am. 7:35 am + 20 minutes = 7:55 am. 7:55 am + 40 minutes = 8:35 am. 8:35 am + 5 minutes = 8:40 am.',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered time.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of time.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Units & Conversions | 4-7 Reading Clocks |
    // 8-12 Elapsed Time & Durations | 13-15 Calendars & Timetables |
    // 16-17 Multi-Step Real-World | 18-19 Reasoning & Error-Spotting
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'How many seconds are there in 1 minute?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 seconds', '60 s'], explanation: 'By definition, 1 minute = 60 seconds.' },
        { difficulty: 'Easy', question: 'How many days are there in 1 week?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 days'], explanation: 'By definition, 1 week = 7 days.' },
        { difficulty: 'Easy-Medium', question: 'A movie runs for 195 minutes. How long is that in hours and minutes?', checkMode: 'auto', correctAnswer: '3 hours 15 minutes', correctAnswers: ['3 hours 15 minutes', '3h15min', '3 h 15 min', '3 hours and 15 minutes'], explanation: '195 ÷ 60 = 3 remainder 15. So 195 minutes = 3 hours and 15 minutes.' },
        { difficulty: 'Medium', question: 'A road trip lasts 3 days and 5 hours. How many hours is that in total?', checkMode: 'auto', correctAnswer: '77 hours', correctAnswers: ['77 hours', '77h', '77'], explanation: '3 days = 3 × 24 = 72 hours. Add the extra 5 hours: 72 + 5 = 77 hours.' },
        { difficulty: 'Medium', question: 'Katlego says, "There are 400 minutes in a day." Is she correct? Explain your reasoning and give the correct number if not.', checkMode: 'self', answer: 'No, Katlego is not correct. There are 24 hours in a day and 60 minutes in each hour, so the correct calculation is 24 × 60 = 1 440 minutes in a day. She may have confused this with a smaller, unrelated number — 400 minutes is only about 6 hours and 40 minutes, far less than a full day.' },
        { difficulty: 'Easy', question: 'On an analogue clock the hour hand points exactly to 8 and the minute hand points exactly to 12. What time is shown?', checkMode: 'auto', correctAnswer: '8:00', correctAnswers: ['8:00', '8 o\'clock', 'eight o\'clock'], explanation: 'The minute hand at 12 means it is exactly on the hour. The hour hand at 8 means the time is 8 o\'clock.' },
        { difficulty: 'Easy-Medium', question: 'Write 9:45 in words, using "quarter to" language.', checkMode: 'auto', correctAnswer: 'quarter to ten', correctAnswers: ['quarter to ten', 'a quarter to ten', 'quarter to 10'], explanation: '45 minutes past 9 is the same as 15 minutes before 10, which we say as "quarter to ten".' },
        { difficulty: 'Medium', question: 'A digital clock shows 12:20. Boitumelo says this must be during the day because "12 always means midday." Is her reasoning correct? Explain.', checkMode: 'self', answer: 'No, her reasoning is flawed. The number 12 alone does not tell us whether it is day or night — we need the am or pm label. 12:20 am is just after midnight (very early morning/night), while 12:20 pm is just after midday. Without the am/pm label, we cannot know which one it is.' },
        { difficulty: 'Medium', question: 'Nomsa\'s watch shows the hour hand pointing between 5 and 6, and the minute hand pointing to the 4. Is it correct to read this watch as 5:20? Explain why or why not.', checkMode: 'self', answer: 'Yes, this reading is correct. The minute hand at the 4 means 4 × 5 = 20 minutes past the hour. The hour hand between 5 and 6 (not yet reaching 6) confirms the hour is still 5, since the hour hand only reaches 6 once a full 60 minutes have passed. So the time is 5:20.' },
        { difficulty: 'Easy-Medium', question: 'A cooking class starts at 2:50 pm and lasts 55 minutes. What time does it end?', checkMode: 'auto', correctAnswer: '3:45 pm', correctAnswers: ['3:45 pm', '3:45pm', '15:45'], explanation: '2:50 pm + 55 minutes: first add 10 minutes to reach 3:00 pm, then add the remaining 45 minutes to reach 3:45 pm.' },
        { difficulty: 'Medium', question: 'Palesa\'s art lesson starts at 4:40 pm. She checks the clock when she finishes and it reads 6:05 pm. How long did the lesson last?', checkMode: 'auto', correctAnswer: '1 hour 25 minutes', correctAnswers: ['1 hour 25 minutes', '1h25min', '1 h 25 min', '85 minutes'], explanation: 'From 4:40 pm to 5:40 pm is 1 hour. From 5:40 pm to 6:05 pm is 25 minutes. Total: 1 hour + 25 minutes = 1 hour 25 minutes.' },
        { difficulty: 'Medium', question: 'Sibusiso spends 25 minutes tidying his room and then 50 minutes doing homework, one after the other. What is the total time he spends on both tasks, in hours and minutes?', checkMode: 'auto', correctAnswer: '1 hour 15 minutes', correctAnswers: ['1 hour 15 minutes', '1h15min', '1 h 15 min', '75 minutes'], explanation: '25 + 50 = 75 minutes. Since 75 minutes is more than 60, regroup: 75 minutes = 60 minutes + 15 minutes = 1 hour 15 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A school lesson block starts at 9:15 am. First there is Reading for 20 minutes, then a break of 10 minutes, then Writing for 35 minutes. What time does the block end?', checkMode: 'auto', correctAnswer: '10:20 am', correctAnswers: ['10:20 am', '10:20am', '10:20'], explanation: 'Total duration: 20 + 10 + 35 = 65 minutes = 1 hour 5 minutes. Starting at 9:15 am and adding 1 hour gives 10:15 am, then adding the remaining 5 minutes gives 10:20 am.' },
        { difficulty: 'Medium', question: 'A calendar shows that the 1st of a month is a Tuesday. What day of the week is the 22nd of that month?', checkMode: 'auto', correctAnswer: 'Tuesday', correctAnswers: ['Tuesday'], explanation: 'From the 1st to the 22nd is 21 days later. 21 ÷ 7 = 3 exactly, so 21 days is exactly 3 whole weeks. Adding a whole number of weeks always lands on the same day, so the 22nd is also a Tuesday.' },
        { difficulty: 'Medium', question: 'A weekend market is open every Saturday. If the market is open on the 4th of a month, will it also be open on the 25th of the same month? Explain using the number of days between the two dates.', checkMode: 'self', answer: 'Yes. From the 4th to the 25th is 21 days. 21 ÷ 7 = 3, so this is exactly 3 whole weeks. Since adding a whole number of weeks always lands on the same day of the week, the 25th falls on the same day as the 4th — a Saturday — so the market will also be open on the 25th.' },
        { difficulty: 'Medium', question: 'A school timetable shows that the Music lesson starts at 1:15 pm and lasts 50 minutes. What time does the Music lesson end?', checkMode: 'auto', correctAnswer: '2:05 pm', correctAnswers: ['2:05 pm', '2:05pm', '2:05'], explanation: '1:15 pm + 50 minutes: add 45 minutes to reach 2:00 pm, then add the remaining 5 minutes to reach 2:05 pm.' },
        { difficulty: 'Hard', question: 'Lindiwe catches a bus that takes 18 minutes and then walks 12 minutes to reach work. She travels this same route to work and back home again, 5 days a week. How many hours does she spend travelling in total that week?', checkMode: 'auto', correctAnswer: '5 hours', correctAnswers: ['5 hours', '5h', '5'], explanation: 'One way trip: 18 + 12 = 30 minutes. A return trip (there and back) is 30 × 2 = 60 minutes = 1 hour per day. Over 5 days: 1 × 5 = 5 hours.' },
        { difficulty: 'Hard', question: 'Tumi practises the violin for 25 minutes every day. How many hours and minutes does she practise over 6 days?', checkMode: 'auto', correctAnswer: '2 hours 30 minutes', correctAnswers: ['2 hours 30 minutes', '2h30min', '2 h 30 min', '150 minutes'], explanation: '25 × 6 = 150 minutes. Convert to hours and minutes: 150 ÷ 60 = 2 remainder 30, so 150 minutes = 2 hours 30 minutes.' },
        { difficulty: 'Hard', question: 'Two taxi routes go from home to town. Route A takes 25 minutes to the taxi rank plus a 40 minute ride. Route B takes a 1 hour ride plus a 10 minute walk at the end. Which route is faster, and by how many minutes?', checkMode: 'auto', correctAnswer: 'Route A by 5 minutes', correctAnswers: ['Route A by 5 minutes', 'Route A, 5 minutes', 'A by 5 minutes', 'route a 5 minutes'], explanation: 'Route A: 25 + 40 = 65 minutes. Route B: 60 + 10 = 70 minutes. Comparing: 65 minutes is less than 70 minutes, so Route A is faster, by 70 − 65 = 5 minutes.' },
        { difficulty: 'Hard', question: 'A student works out how long a school assembly lasted. It started at 3 hours 50 minutes (as elapsed time from midnight) and lasted 2 hours 25 minutes more of activities, and the student writes the total as "5 hours 75 minutes." Explain what is wrong with this answer and give the correctly regrouped total.', checkMode: 'self', answer: 'The student added the hours and minutes correctly (3 + 2 = 5 hours, and 50 + 25 = 75 minutes) but forgot to regroup, because a valid time total cannot have 75 minutes — minutes must always be less than 60. Since 75 minutes = 60 minutes + 15 minutes = 1 hour 15 minutes, this extra hour must be added to the hours total: 5 hours + 1 hour 15 minutes = 6 hours 15 minutes. The correctly regrouped answer is 6 hours 15 minutes.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered units, clock reading, elapsed time and calendars.' },
        { minScore: 15, message: 'Great work! You have a strong understanding of time — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on elapsed time and regrouping, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'How many minutes are there in 1 hour?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 minutes', '60 min'], explanation: 'By definition, 1 hour = 60 minutes.' },
        { difficulty: 'Easy', question: 'How many months are there in 1 year?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 months'], explanation: 'By definition, 1 year = 12 months.' },
        { difficulty: 'Easy-Medium', question: 'A flight takes 175 minutes. Express this length of time in hours and minutes.', checkMode: 'auto', correctAnswer: '2 hours 55 minutes', correctAnswers: ['2 hours 55 minutes', '2h55min', '2 h 55 min', '2 hours and 55 minutes'], explanation: '175 ÷ 60 = 2 remainder 55. So 175 minutes = 2 hours and 55 minutes.' },
        { difficulty: 'Medium', question: 'A construction project will take 2 weeks and 3 days to complete. How many days is that in total?', checkMode: 'auto', correctAnswer: '17 days', correctAnswers: ['17 days', '17'], explanation: '2 weeks = 2 × 7 = 14 days. Add the extra 3 days: 14 + 3 = 17 days.' },
        { difficulty: 'Medium', question: 'Karabo says, "There are 800 seconds in a day." Is he correct? Explain your reasoning and give the correct number if not.', checkMode: 'self', answer: 'No, Karabo is not correct. There are 24 hours in a day, 60 minutes in each hour, and 60 seconds in each minute, so the correct calculation is 24 × 60 × 60 = 86 400 seconds in a day. 800 seconds is only about 13 minutes, nowhere near a full day.' },
        { difficulty: 'Easy', question: 'On an analogue clock the hour hand points exactly to 3 and the minute hand points exactly to 12. What time is shown?', checkMode: 'auto', correctAnswer: '3:00', correctAnswers: ['3:00', '3 o\'clock', 'three o\'clock'], explanation: 'The minute hand at 12 means it is exactly on the hour. The hour hand at 3 means the time is 3 o\'clock.' },
        { difficulty: 'Easy-Medium', question: 'Write 4:15 in words, using "quarter past" language.', checkMode: 'auto', correctAnswer: 'quarter past four', correctAnswers: ['quarter past four', 'a quarter past four', 'quarter past 4'], explanation: '15 minutes past 4 is one quarter of the way around the clock, so we say "quarter past four".' },
        { difficulty: 'Medium', question: 'A digital clock reads 6:10. Given that it is described as "just after sunset", should this most likely be written as 6:10 am or 6:10 pm? Explain your reasoning.', checkMode: 'self', answer: 'It should most likely be written as 6:10 pm. Sunset happens in the evening, well after midday, and pm covers all times from midday (12:00 pm) until just before midnight. 6:10 am would be early morning, before sunrise in most cases, so it does not match "just after sunset".' },
        { difficulty: 'Medium', question: 'Given an hour hand pointing between 10 and 11, and a minute hand pointing to the 8, a student reads this clock as 10:40. Is this correct? Explain why or why not.', checkMode: 'self', answer: 'Yes, this reading is correct. The minute hand at the 8 means 8 × 5 = 40 minutes past the hour. The hour hand between 10 and 11 (not yet reaching 11) confirms the hour is still 10, because the hour hand only reaches the next number once a full 60 minutes have passed. So the time is 10:40.' },
        { difficulty: 'Easy-Medium', question: 'A swimming lesson starts at 11:20 am and lasts 40 minutes. What time does it end?', checkMode: 'auto', correctAnswer: '12:00 pm', correctAnswers: ['12:00 pm', '12:00pm', 'noon', '12 pm'], explanation: '11:20 am + 40 minutes: first add 40 minutes directly, since 20 + 40 = 60 exactly, reaching 12:00 pm (midday).' },
        { difficulty: 'Medium', question: 'Mpho\'s soccer practice starts at 5:30 pm. She checks the clock when it ends and it reads 7:15 pm. How long did practice last?', checkMode: 'auto', correctAnswer: '1 hour 45 minutes', correctAnswers: ['1 hour 45 minutes', '1h45min', '1 h 45 min', '105 minutes'], explanation: 'From 5:30 pm to 6:30 pm is 1 hour. From 6:30 pm to 7:15 pm is 45 minutes. Total: 1 hour + 45 minutes = 1 hour 45 minutes.' },
        { difficulty: 'Medium', question: 'Andile spends 45 minutes washing the car and then 35 minutes mowing the lawn, one after the other. What is the total time he spends on both chores, in hours and minutes?', checkMode: 'auto', correctAnswer: '1 hour 20 minutes', correctAnswers: ['1 hour 20 minutes', '1h20min', '1 h 20 min', '80 minutes'], explanation: '45 + 35 = 80 minutes. Since 80 minutes is more than 60, regroup: 80 minutes = 60 minutes + 20 minutes = 1 hour 20 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A school lesson block starts at 10:00 am. First there is Art for 30 minutes, then a break of 15 minutes, then PE for 40 minutes. What time does the block end?', checkMode: 'auto', correctAnswer: '11:25 am', correctAnswers: ['11:25 am', '11:25am', '11:25'], explanation: 'Total duration: 30 + 15 + 40 = 85 minutes = 1 hour 25 minutes. Starting at 10:00 am and adding 1 hour gives 11:00 am, then adding the remaining 25 minutes gives 11:25 am.' },
        { difficulty: 'Medium', question: 'A calendar shows that the 1st of a month is a Friday. What day of the week is the 29th of that month?', checkMode: 'auto', correctAnswer: 'Friday', correctAnswers: ['Friday'], explanation: 'From the 1st to the 29th is 28 days later. 28 ÷ 7 = 4 exactly, so 28 days is exactly 4 whole weeks. Adding a whole number of weeks always lands on the same day, so the 29th is also a Friday.' },
        { difficulty: 'Medium', question: 'A library holds a story-telling session every Wednesday. If a session happens on the 3rd of a month, will there also be one on the 24th of the same month? Explain using the number of days between the two dates.', checkMode: 'self', answer: 'Yes. From the 3rd to the 24th is 21 days. 21 ÷ 7 = 3, so this is exactly 3 whole weeks. Since adding a whole number of weeks always lands on the same day of the week, the 24th falls on the same day as the 3rd — a Wednesday — so there will also be a session on the 24th.' },
        { difficulty: 'Medium', question: 'A school timetable shows that the morning Assembly starts at 8:30 am and lasts 20 minutes. What time does Assembly end?', checkMode: 'auto', correctAnswer: '8:50 am', correctAnswers: ['8:50 am', '8:50am', '8:50'], explanation: '8:30 am + 20 minutes = 8:50 am, since 30 + 20 = 50 minutes, which is still within the same hour.' },
        { difficulty: 'Hard', question: 'Zanele practises her recorder for 20 minutes every day. How many hours and minutes does she practise over 5 days?', checkMode: 'auto', correctAnswer: '1 hour 40 minutes', correctAnswers: ['1 hour 40 minutes', '1h40min', '1 h 40 min', '100 minutes'], explanation: '20 × 5 = 100 minutes. Convert to hours and minutes: 100 ÷ 60 = 1 remainder 40, so 100 minutes = 1 hour 40 minutes.' },
        { difficulty: 'Hard', question: 'A journey has three parts: a 45 minute train ride, a 15 minute wait, and a 20 minute bus ride. What is the total travel time, in hours and minutes?', checkMode: 'auto', correctAnswer: '1 hour 20 minutes', correctAnswers: ['1 hour 20 minutes', '1h20min', '1 h 20 min', '80 minutes'], explanation: '45 + 15 + 20 = 80 minutes. Since 80 minutes is more than 60, regroup: 80 minutes = 60 minutes + 20 minutes = 1 hour 20 minutes.' },
        { difficulty: 'Hard', question: 'Two students plan how to practise spelling words for a test. Plan A is 3 sessions of 20 minutes each. Plan B is 2 sessions of 35 minutes each. Which plan gives more total practice time, and by how many minutes?', checkMode: 'auto', correctAnswer: 'Plan B by 10 minutes', correctAnswers: ['Plan B by 10 minutes', 'Plan B, 10 minutes', 'B by 10 minutes', 'plan b 10 minutes'], explanation: 'Plan A: 3 × 20 = 60 minutes. Plan B: 2 × 35 = 70 minutes. Comparing: 70 minutes is more than 60 minutes, so Plan B gives more practice time, by 70 − 60 = 10 minutes.' },
        { difficulty: 'Hard', question: 'A student calculates 4 hours 10 minutes minus 1 hour 45 minutes by subtracting the hours and minutes separately: 4 − 1 = 3 hours, and since 10 is less than 45, they simply write "3 hours" and ignore the minutes, giving a final answer of "3 hours." Explain what is wrong with this method and give the correct answer.', checkMode: 'self', answer: 'The student cannot subtract 45 minutes from 10 minutes directly because 10 is smaller than 45, so simply ignoring the minutes is incorrect — you cannot skip part of the subtraction. Instead, you must borrow 1 hour from the hours column and convert it into 60 minutes: 4 hours 10 minutes becomes 3 hours 70 minutes. Now subtract: 3 − 1 = 2 hours, and 70 − 45 = 25 minutes. The correct answer is 2 hours 25 minutes, not 3 hours.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently convert units, read clocks and calculate elapsed time.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on regrouping minutes into hours, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'How many hours are there in 1 day?', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 hours'], explanation: 'By definition, 1 day = 24 hours.' },
        { difficulty: 'Easy', question: 'How many days does a leap year have?', checkMode: 'auto', correctAnswer: '366', correctAnswers: ['366', '366 days'], explanation: 'A normal year has 365 days, but a leap year has one extra day, giving 366 days.' },
        { difficulty: 'Easy-Medium', question: 'A documentary runs for 210 minutes. Express this length of time in hours and minutes.', checkMode: 'auto', correctAnswer: '3 hours 30 minutes', correctAnswers: ['3 hours 30 minutes', '3h30min', '3 h 30 min', '3 hours and 30 minutes'], explanation: '210 ÷ 60 = 3 remainder 30. So 210 minutes = 3 hours and 30 minutes.' },
        { difficulty: 'Medium', question: 'A festival runs for exactly 4 weeks. How many days is that?', checkMode: 'auto', correctAnswer: '28 days', correctAnswers: ['28 days', '28'], explanation: '1 week = 7 days, so 4 weeks = 4 × 7 = 28 days.' },
        { difficulty: 'Medium', question: 'Themba says, "A normal year and a leap year both always have 365 days." Explain what is wrong with this statement.', checkMode: 'self', answer: 'This statement is incorrect. A normal year has 365 days, but a leap year has one extra day added (usually to February), giving it 366 days instead. Leap years happen roughly every 4 years, so not every year has the same number of days.' },
        { difficulty: 'Easy', question: 'On an analogue clock the hour hand points exactly to 11 and the minute hand points exactly to 12. What time is shown?', checkMode: 'auto', correctAnswer: '11:00', correctAnswers: ['11:00', '11 o\'clock', 'eleven o\'clock'], explanation: 'The minute hand at 12 means it is exactly on the hour. The hour hand at 11 means the time is 11 o\'clock.' },
        { difficulty: 'Easy-Medium', question: 'Write 7:30 in words, using "half past" language.', checkMode: 'auto', correctAnswer: 'half past seven', correctAnswers: ['half past seven', 'half past 7'], explanation: '30 minutes past 7 is exactly halfway around the clock, so we say "half past seven".' },
        { difficulty: 'Medium', question: 'A digital clock shows 12:05. Lebo says, "That must be 12:05 pm because 12 comes right after 11, and 11 is in the morning." Explain why her reasoning does not correctly determine am or pm.', checkMode: 'self', answer: 'Her reasoning is flawed. Although 11 am is in the morning, the hour after 11 am is 12 pm (midday) — this is one of the few places the numbering does not simply continue upward, because pm officially starts at 12:00 pm, not 1:00 pm. However, 12:05 could still be am or pm depending on context: 12:05 am is just after midnight, while 12:05 pm is just after midday. Her explanation happens to reach a common answer but for the wrong reason — the actual determination needs the am/pm label or extra context, not a pattern of "comes after 11".' },
        { difficulty: 'Medium', question: 'Given an hour hand pointing between 2 and 3, and a minute hand pointing to the 11, a student reads this clock as 2:55. Is this correct? Explain why or why not.', checkMode: 'self', answer: 'Yes, this reading is correct. The minute hand at the 11 means 11 × 5 = 55 minutes past the hour. The hour hand between 2 and 3 (not yet reaching 3) confirms the hour is still 2, because the hour hand only reaches the next number once a full 60 minutes have passed. So the time is 2:55.' },
        { difficulty: 'Easy-Medium', question: 'A drama rehearsal starts at 3:40 pm and lasts 50 minutes. What time does it end?', checkMode: 'auto', correctAnswer: '4:30 pm', correctAnswers: ['4:30 pm', '4:30pm', '16:30'], explanation: '3:40 pm + 50 minutes: first add 20 minutes to reach 4:00 pm, then add the remaining 30 minutes to reach 4:30 pm.' },
        { difficulty: 'Medium', question: 'Sipho starts his chess match at 9:05 am. He checks the clock when the match ends and it reads 12:40 pm. How long did the match last?', checkMode: 'auto', correctAnswer: '3 hours 35 minutes', correctAnswers: ['3 hours 35 minutes', '3h35min', '3 h 35 min', '215 minutes'], explanation: 'From 9:05 am to 12:05 pm is 3 hours. From 12:05 pm to 12:40 pm is 35 minutes. Total: 3 hours + 35 minutes = 3 hours 35 minutes.' },
        { difficulty: 'Medium', question: 'Ayanda spends 20 minutes setting up a stall and then 45 minutes and 30 minutes on two more tasks, one after the other. What is the total time she spends on all three tasks, in hours and minutes?', checkMode: 'auto', correctAnswer: '1 hour 35 minutes', correctAnswers: ['1 hour 35 minutes', '1h35min', '1 h 35 min', '95 minutes'], explanation: '20 + 45 + 30 = 95 minutes. Since 95 minutes is more than 60, regroup: 95 minutes = 60 minutes + 35 minutes = 1 hour 35 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A school lesson block starts at 1:40 pm. First there is Geography for 25 minutes, then a break of 5 minutes, then History for 40 minutes. What time does the block end?', checkMode: 'auto', correctAnswer: '2:50 pm', correctAnswers: ['2:50 pm', '2:50pm', '2:50'], explanation: 'Total duration: 25 + 5 + 40 = 70 minutes = 1 hour 10 minutes. Starting at 1:40 pm and adding 1 hour gives 2:40 pm, then adding the remaining 10 minutes gives 2:50 pm.' },
        { difficulty: 'Medium', question: 'A calendar shows that the 1st of a month is a Sunday. What day of the week is the 30th of that month?', checkMode: 'auto', correctAnswer: 'Monday', correctAnswers: ['Monday'], explanation: 'From the 1st to the 30th is 29 days later. 29 ÷ 7 = 4 remainder 1, so 29 days is 4 whole weeks plus 1 extra day. Four whole weeks land back on Sunday, and 1 extra day after Sunday is Monday, so the 30th is a Monday.' },
        { difficulty: 'Medium', question: 'A clinic runs a check-up day every Thursday. If a check-up day happens on the 6th of a month, will there also be one on the 27th of the same month? Explain using the number of days between the two dates.', checkMode: 'self', answer: 'Yes. From the 6th to the 27th is 21 days. 21 ÷ 7 = 3, so this is exactly 3 whole weeks. Since adding a whole number of weeks always lands on the same day of the week, the 27th falls on the same day as the 6th — a Thursday — so there will also be a check-up day on the 27th.' },
        { difficulty: 'Medium', question: 'A school timetable shows that the after-school Swimming session starts at 3:50 pm and lasts 25 minutes. What time does the Swimming session end?', checkMode: 'auto', correctAnswer: '4:15 pm', correctAnswers: ['4:15 pm', '4:15pm', '4:15'], explanation: '3:50 pm + 25 minutes: add 10 minutes to reach 4:00 pm, then add the remaining 15 minutes to reach 4:15 pm.' },
        { difficulty: 'Hard', question: 'Kagiso reads for 15 minutes every day for 12 days straight. How many hours did she read in total?', checkMode: 'auto', correctAnswer: '3 hours', correctAnswers: ['3 hours', '3h', '3'], explanation: '15 × 12 = 180 minutes. Convert to hours: 180 ÷ 60 = 3 hours exactly.' },
        { difficulty: 'Hard', question: 'A multi-leg flight has three parts: a 2 hour 20 minute flight, a 1 hour 35 minute layover, and a 1 hour 50 minute flight. What is the total travel time, in hours and minutes?', checkMode: 'auto', correctAnswer: '5 hours 45 minutes', correctAnswers: ['5 hours 45 minutes', '5h45min', '5 h 45 min', '345 minutes'], explanation: 'Add the hours: 2 + 1 + 1 = 4 hours. Add the minutes: 20 + 35 + 50 = 105 minutes. Regroup 105 minutes = 1 hour 45 minutes. Total: 4 hours + 1 hour 45 minutes = 5 hours 45 minutes.' },
        { difficulty: 'Hard', question: 'To get to a friend\'s house, one option is a direct bus that takes 50 minutes. The other option is to walk 15 minutes, wait 8 minutes for a train, and ride the train for 30 minutes. Which option is faster, and by how many minutes?', checkMode: 'auto', correctAnswer: 'the direct bus by 3 minutes', correctAnswers: ['the direct bus by 3 minutes', 'direct bus by 3 minutes', 'bus by 3 minutes', 'the bus, 3 minutes'], explanation: 'Direct bus: 50 minutes. Walk + wait + train: 15 + 8 + 30 = 53 minutes. Comparing: 50 minutes is less than 53 minutes, so the direct bus is faster, by 53 − 50 = 3 minutes.' },
        { difficulty: 'Hard', question: 'A student adds 2 hours 50 minutes and 1 hour 35 minutes. They add the hours (2 + 1 = 3) and the minutes (50 + 35 = 85), then write the final answer as "3 hours 85 minutes." Explain what is wrong with this answer and give the correctly regrouped total.', checkMode: 'self', answer: 'The hours and minutes were added correctly (3 hours and 85 minutes), but the answer was not regrouped, and a valid time total cannot have 85 minutes since minutes must always be less than 60. Since 85 minutes = 60 minutes + 25 minutes = 1 hour 25 minutes, this extra hour must be moved into the hours total: 3 hours + 1 hour 25 minutes = 4 hours 25 minutes. The correctly regrouped answer is 4 hours 25 minutes.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Superb! You have a deep, flexible understanding of time across every skill area.' },
        { minScore: 15, message: 'Great work! You handle most time problems confidently — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Go back over elapsed time, calendars and multi-step problems, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ],
}
