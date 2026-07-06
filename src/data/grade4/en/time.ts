import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Time',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — READING AND TELLING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-telling-time',
      title: 'Reading and Telling Time',
      icon: '🕐',
      explanation: `
<p style="margin-bottom:14px;">We use clocks to measure and tell the time. There are two main types of clock — <strong>analogue</strong> and <strong>digital</strong>. Both show the same time in different ways. The time is made up of <strong style="color:#1e40af;">hours</strong>, <strong style="color:#dc2626;">minutes</strong>, and <strong style="color:#16a34a;">seconds</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Analogue clocks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">An analogue clock has a round face with numbers 1 to 12 and two hands that move around the face.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Short hand<br/><span style="font-weight:400;font-size:12px;">(hour hand)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong>short hand</strong> points to the <strong style="color:#1e40af;">hour</strong>. It moves slowly — it takes 12 hours to go all the way around the clock face.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Long hand<br/><span style="font-weight:400;font-size:12px;">(minute hand)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">The <strong>long hand</strong> points to the <strong style="color:#dc2626;">minutes</strong>. Each number on the clock face represents <strong>5 minutes</strong>. It takes 60 minutes (1 hour) to go all the way around.</span>
    </div>

  </div>
  <div style="margin-top:12px;background:#dbeafe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:6px;">Minute counting on an analogue clock</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">12 → 0 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">1 → 5 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">2 → 10 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">3 → 15 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">4 → 20 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">5 → 25 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">6 → 30 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">7 → 35 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">8 → 40 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">9 → 45 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">10 → 50 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">11 → 55 min</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Digital clocks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:10px;">A digital clock shows the time as numbers using a <strong>colon (:)</strong> to separate hours and minutes.</p>
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px;">
    <span style="background:#0f1f3d;color:#fff;border-radius:8px;padding:8px 20px;font-size:22px;font-weight:700;letter-spacing:2px;"><span style="color:#60a5fa;">3</span><span style="color:#fff;">:</span><span style="color:#f87171;">45</span></span>
    <span style="font-size:15px;color:#1e3a8a;"><strong style="color:#1e40af;">3 hours</strong> and <strong style="color:#dc2626;">45 minutes</strong></span>
  </div>
  <div style="font-size:14px;color:#1e3a8a;">The number before the colon is the <strong style="color:#1e40af;">hour</strong>. The number after the colon is the <strong style="color:#dc2626;">minutes</strong>. Minutes always show two digits — so 5 minutes is written as <strong style="color:#dc2626;">:05</strong>.</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">a.m. and p.m.</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">The day has 24 hours but a clock only shows 12. We use <strong>a.m.</strong> and <strong>p.m.</strong> to show which half of the day we mean.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">a.m.</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Midnight to midday</strong> — the morning hours (12:00 midnight up to 11:59 in the morning).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">p.m.</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Midday to midnight</strong> — the afternoon and evening hours (12:00 midday up to 11:59 at night).</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Time vocabulary 📖</span>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px;font-size:14px;color:#78350f;">
    <div><strong>O'clock</strong> — the minute hand is on 12 (e.g. 3:00 = three o'clock)</div>
    <div><strong>Quarter past</strong> — 15 minutes past the hour (e.g. 3:15)</div>
    <div><strong>Half past</strong> — 30 minutes past the hour (e.g. 3:30)</div>
    <div><strong>Quarter to</strong> — 15 minutes before the next hour (e.g. 3:45 = quarter to four)</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'The short hand points to 4 and the long hand points to 6. What time is it?',
          steps: [
            'The <strong style="color:#1e40af;">short hand</strong> at <strong>4</strong> means it is <strong style="color:#1e40af;">4 hours</strong>.',
            'The <strong style="color:#dc2626;">long hand</strong> at <strong>6</strong> means <strong>6 × 5</strong> = <strong style="color:#dc2626;">30 minutes</strong>.',
          ],
          answer: '4:30, or half past four.',
        },
        {
          question: 'Write 7:15 a.m. in words.',
          steps: [
            'The <strong style="color:#1e40af;">hour</strong> is <strong>7</strong> and the <strong style="color:#dc2626;">minutes</strong> are <strong>15</strong>.',
            '15 minutes past the hour is called <strong>quarter past</strong>.',
            'a.m. means it is in the <strong>morning</strong>.',
          ],
          answer: 'Quarter past seven in the morning.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Two clocks side by side — an analogue clock showing 4:30 with the hour and minute hands labelled, and a digital clock showing 4:30',
      videoPlaceholder:
        'Short video showing how to read analogue and digital clocks and explain the difference between am and pm',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — UNITS OF TIME AND CONVERSION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time-conversion',
      title: 'Units of Time and Conversion',
      icon: '⏱️',
      explanation: `
<p style="margin-bottom:14px;">Time is measured in different units — from tiny <strong style="color:#16a34a;">seconds</strong> to long stretches like years. Knowing how to convert between units helps you solve problems involving time.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion facts</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 seconds</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">1 minute</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 minutes</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#dc2626;">1 hour</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">24 hours</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#ea580c;">1 day</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">7 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 week</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">28–31 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 month</strong> (depends on the month)</span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">12 months</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 year</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">365 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 year</strong> (366 days in a leap year)</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion rules</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Bigger → Smaller</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Converting from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply</strong>. The number gets bigger. (e.g. hours → minutes: × 60)</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Smaller → Bigger</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Converting from a <strong>smaller unit</strong> to a <strong>bigger unit</strong> — <strong style="color:#dc2626;">divide</strong>. The number gets smaller. (e.g. minutes → hours: ÷ 60)</span>
    </div>

  </div>
</div>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> → <strong style="color:#16a34a;">multiply</strong> → the number gets <strong>bigger</strong>.<br/>Going to a <strong>bigger unit</strong> → <strong style="color:#dc2626;">divide</strong> → the number gets <strong>smaller</strong>.</div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 3 hours to minutes.',
          steps: [
            'Hours → minutes: going from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply by 60</strong>.',
            '<strong style="color:#dc2626;">3</strong> × <strong style="color:#16a34a;">60</strong> = <strong style="color:#1e40af;">180</strong>.',
          ],
          answer: '3 hours = 180 minutes.',
        },
        {
          question: 'Convert 150 minutes to hours and minutes.',
          steps: [
            'Minutes → hours: going from a <strong>smaller unit</strong> to a <strong>bigger unit</strong> — <strong style="color:#dc2626;">divide by 60</strong>.',
            '<strong style="color:#1e40af;">150</strong> ÷ <strong style="color:#dc2626;">60</strong> = <strong>2</strong> remainder <strong>30</strong>.',
            '<strong>2</strong> full hours with <strong>30</strong> minutes remaining.',
          ],
          answer: '150 minutes = 2 hours 30 minutes.',
        },
        {
          question: 'How many days are in 4 weeks?',
          steps: [
            'Weeks → days: going from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply by 7</strong>.',
            '<strong style="color:#ea580c;">4</strong> × <strong style="color:#16a34a;">7</strong> = <strong style="color:#ea580c;">28</strong>.',
          ],
          answer: '4 weeks = 28 days.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A time conversion ladder showing seconds minutes hours days weeks months and years with multiplication and division arrows between each unit',
      videoPlaceholder:
        'Short video showing how to convert between units of time using multiplication and division',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING DURATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-duration',
      title: 'Calculating Duration',
      icon: '⏳',
      explanation: `
<p style="margin-bottom:14px;"><strong>Duration</strong> means <strong>how long something takes</strong> from start to finish. To find the duration, you count on from the <strong style="color:#1e40af;">start time</strong> to the <strong style="color:#dc2626;">end time</strong> and add up the total time passed.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Method for calculating duration</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Write down the <strong style="color:#1e40af;">start time</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Write down the <strong style="color:#dc2626;">end time</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count on</strong> from the <strong style="color:#1e40af;">start time</strong> to the <strong style="color:#dc2626;">end time</strong> — first count full hours, then the remaining minutes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Add up</strong> the hours and minutes counted to find the <strong style="color:#16a34a;">duration</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Tip: cross midday carefully 🕛</div>
  <div style="color:#14532d;font-size:15px;">When the <strong style="color:#1e40af;">start time</strong> is a.m. and the <strong style="color:#dc2626;">end time</strong> is p.m., break the calculation at <strong>12:00 midday</strong> — count to midday first, then count from midday to the end time.</div>
</div>
`,
      workedExamples: [
        {
          question: 'A movie starts at 2:15 p.m. and ends at 4:45 p.m. How long is the movie?',
          steps: [
            '<strong style="color:#1e40af;">Start time:</strong> 2:15 p.m. &nbsp; <strong style="color:#dc2626;">End time:</strong> 4:45 p.m.',
            'From <strong style="color:#1e40af;">2:15</strong> to <strong>4:15</strong> = <strong>2 hours</strong>.',
            'From <strong>4:15</strong> to <strong style="color:#dc2626;">4:45</strong> = <strong>30 minutes</strong>.',
            'Total: <strong>2 hours</strong> + <strong>30 minutes</strong> = <strong style="color:#16a34a;">2 hours 30 minutes</strong>.',
          ],
          answer: 'The movie is 2 hours 30 minutes long.',
        },
        {
          question: 'School starts at 7:30 a.m. and ends at 2:00 p.m. How long is the school day?',
          steps: [
            '<strong style="color:#1e40af;">Start time:</strong> 7:30 a.m. &nbsp; <strong style="color:#dc2626;">End time:</strong> 2:00 p.m.',
            'Cross midday: from <strong style="color:#1e40af;">7:30</strong> to <strong>12:00</strong> = <strong>4 hours 30 minutes</strong>.',
            'From <strong>12:00</strong> to <strong style="color:#dc2626;">2:00</strong> p.m. = <strong>2 hours</strong>.',
            'Total: <strong>4 hours 30 minutes</strong> + <strong>2 hours</strong> = <strong style="color:#16a34a;">6 hours 30 minutes</strong>.',
          ],
          answer: 'The school day is 6 hours 30 minutes long.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to calculate duration between two times and use a calendar to count days between dates',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALENDARS AND TIME WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calendars-time-word-problems',
      title: 'Calendars and Time Word Problems',
      icon: '📅',
      explanation: `
<p style="margin-bottom:14px;">A <strong>calendar</strong> shows the days, weeks and months of the year. We use it to find dates, count days between events and solve time problems. Always look for <strong style="color:#ea580c;">key words</strong> in a problem — they tell you what to calculate.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Days in each month</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">31 days</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">January</strong>, <strong style="color:#ea580c;">March</strong>, <strong style="color:#ea580c;">May</strong>, <strong style="color:#ea580c;">July</strong>, <strong style="color:#ea580c;">August</strong>, <strong style="color:#ea580c;">October</strong>, <strong style="color:#ea580c;">December</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">30 days</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">April</strong>, <strong style="color:#ea580c;">June</strong>, <strong style="color:#ea580c;">September</strong>, <strong style="color:#ea580c;">November</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">28/29 days</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">February</strong> — 28 days in a normal year, 29 days in a leap year.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick — knuckle method 🤜</div>
  <div style="color:#78350f;font-size:15px;">Make a fist and count your knuckles and the dips between them from left to right. <strong>Knuckles = 31 days. Dips = 30 days (or 28/29 for February).</strong> When you reach the last knuckle (July), start again from the first knuckle (August).</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key words in time word problems</div>
  <div style="display:flex;flex-direction:column;gap:6px;font-size:15px;color:#1e3a8a;">
    <div><strong style="color:#ea580c;">How long</strong>, <strong style="color:#ea580c;">duration</strong>, <strong style="color:#ea580c;">how many hours/minutes</strong> — calculate duration between two times.</div>
    <div><strong style="color:#ea580c;">How many days until</strong>, <strong style="color:#ea580c;">days between</strong> — count days on a calendar.</div>
    <div><strong style="color:#ea580c;">What time does it finish</strong> — add the duration to the start time.</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'How many days are there from 5 March to 20 March?',
          steps: [
            'Both dates are in <strong style="color:#ea580c;">March</strong> — count days within the same month.',
            'Subtract: <strong>20 − 5</strong> = <strong style="color:#16a34a;">15 days</strong>.',
          ],
          answer: '15 days.',
        },
        {
          question: "Thabo's birthday is on 15 June. Today is 28 May. How many days until his birthday?",
          steps: [
            'Days remaining in <strong style="color:#ea580c;">May</strong>: <strong>31 − 28</strong> = <strong>3 days</strong>.',
            'Days in <strong style="color:#ea580c;">June</strong> up to the 15th: <strong>15 days</strong>.',
            'Total: <strong>3</strong> + <strong>15</strong> = <strong style="color:#16a34a;">18 days</strong>.',
          ],
          answer: "18 days until Thabo's birthday.",
        },
        {
          question: 'A bus leaves at 9:45 a.m. and arrives at 1:15 p.m. How long is the journey?',
          steps: [
            '<strong style="color:#1e40af;">Start:</strong> 9:45 a.m. &nbsp; <strong style="color:#dc2626;">End:</strong> 1:15 p.m.',
            'From <strong style="color:#1e40af;">9:45</strong> to <strong>1:45</strong> p.m. would be exactly <strong>4 hours</strong>.',
            'But the end time is <strong style="color:#dc2626;">1:15</strong>, which is <strong>30 minutes earlier</strong> than 1:45.',
            '4 hours − 30 minutes = <strong style="color:#16a34a;">3 hours 30 minutes</strong>.',
          ],
          answer: 'The journey takes 3 hours 30 minutes.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to calculate duration between two times and use a calendar to count days between dates',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONAL TIME-TELLING AND UNIT CONVERSIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Telling Time and Unit Conversions',
      questions: [
        { difficulty: 'Easy', question: 'The short hand points to 6 and the long hand points to 12. What time is it?', answer: '6:00', checkMode: 'auto', correctAnswer: '6:00', correctAnswers: ['6:00', '600', '6oclock', '6 oclock'], explanation: 'Short hand at 6 = 6 hours. Long hand at 12 = 0 minutes. Time: 6:00, or six o\'clock.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"44\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 3 and 4, and the long hand points to 6. What time is it?', answer: '3:30', checkMode: 'auto', correctAnswer: '3:30', correctAnswers: ['3:30', '330', '3:30pm', '3:30am'], explanation: 'Short hand between 3 and 4 = 3 hours. Long hand at 6 = 6 × 5 = 30 minutes. Time: 3:30, or half past three.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"115.9\" y2=\"93.3\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"133\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 8 and 9, and the long hand points to 3. What time is it?', answer: '8:15', checkMode: 'auto', correctAnswer: '8:15', correctAnswers: ['8:15', '815'], explanation: 'Short hand between 8 and 9 = 8 hours. Long hand at 3 = 3 × 5 = 15 minutes. Time: 8:15, or quarter past eight.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"55.4\" y2=\"97.2\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"133\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "half past nine" in digital format.', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Half past means 30 minutes past the hour. Half past nine = 9:30.' },
        { difficulty: 'Easy', question: 'Write "quarter to six" in digital format.', answer: '5:45', checkMode: 'auto', correctAnswer: '5:45', correctAnswers: ['5:45', '545'], explanation: 'Quarter to means 15 minutes before the hour. Quarter to six = 60 − 15 = 45 minutes past five = 5:45.' },
        { difficulty: 'Easy', question: 'Write "quarter past eleven" in digital format.', answer: '11:15', checkMode: 'auto', correctAnswer: '11:15', correctAnswers: ['11:15', '1115'], explanation: 'Quarter past means 15 minutes past the hour. Quarter past eleven = 11:15.' },
        { difficulty: 'Easy', question: 'Write "quarter to six in the evening" in digital format with am/pm.', answer: '5:45 pm', checkMode: 'auto', correctAnswer: '5:45pm', correctAnswers: ['5:45pm', '5:45 pm', '545pm'], explanation: 'Quarter to six = 45 minutes past five = 5:45. Evening = p.m. Digital: 5:45 pm.' },
        { difficulty: 'Easy', question: 'Write "twenty five to nine" in digital format.', answer: '8:35', checkMode: 'auto', correctAnswer: '8:35', correctAnswers: ['8:35', '835'], explanation: 'Twenty five to nine means 60 − 25 = 35 minutes past eight = 8:35.' },
        { difficulty: 'Easy', question: 'Write "ten to twelve" in digital format.', answer: '11:50', checkMode: 'auto', correctAnswer: '11:50', correctAnswers: ['11:50', '1150'], explanation: 'Ten to twelve means 60 − 10 = 50 minutes past eleven = 11:50.' },
        { difficulty: 'Easy', question: 'Write "twenty past two" in digital format.', answer: '2:20', checkMode: 'auto', correctAnswer: '2:20', correctAnswers: ['2:20', '220'], explanation: 'Twenty past two means 20 minutes past the hour = 2:20.' },
        { difficulty: 'Medium', question: 'On a digital clock, does 7:05 come before or after midday if it is a.m.?', answer: 'before midday', checkMode: 'auto', correctAnswer: 'before midday', correctAnswers: ['before midday', 'beforemidday', 'before', 'am', 'a.m.'], explanation: 'a.m. means the time is between midnight and midday, so 7:05 a.m. is before midday.' },
        { difficulty: 'Medium', question: 'On a digital clock, does 9:40 come before or after midday if it is p.m.?', answer: 'after midday', checkMode: 'auto', correctAnswer: 'after midday', correctAnswers: ['after midday', 'aftermidday', 'after', 'pm', 'p.m.'], explanation: 'p.m. means the time is between midday and midnight, so 9:40 p.m. is after midday.' },
        { difficulty: 'Medium', question: 'What number does the long hand point to at "twenty past" any hour?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'Twenty past = 20 minutes. 20 ÷ 5 = 4, so the long hand points to the number 4.' },
        { difficulty: 'Medium', question: 'Convert 5 hours to minutes.', answer: '300 minutes', checkMode: 'auto', correctAnswer: '300minutes', correctAnswers: ['300minutes', '300', '300 minutes', '300mins'], explanation: 'Hours → minutes: multiply by 60. 5 × 60 = 300 minutes.' },
        { difficulty: 'Medium', question: 'Convert 240 minutes to hours.', answer: '4 hours', checkMode: 'auto', correctAnswer: '4hours', correctAnswers: ['4hours', '4', '4 hours', '4hrs'], explanation: 'Minutes → hours: divide by 60. 240 ÷ 60 = 4 hours.' },
        { difficulty: 'Medium', question: 'Convert 4 minutes to seconds.', answer: '240 seconds', checkMode: 'auto', correctAnswer: '240seconds', correctAnswers: ['240seconds', '240', '240 seconds', '240secs'], explanation: 'Minutes → seconds: multiply by 60. 4 × 60 = 240 seconds.' },
        { difficulty: 'Medium', question: 'Convert 300 seconds to minutes.', answer: '5 minutes', checkMode: 'auto', correctAnswer: '5minutes', correctAnswers: ['5minutes', '5', '5 minutes', '5mins'], explanation: 'Seconds → minutes: divide by 60. 300 ÷ 60 = 5 minutes.' },
        { difficulty: 'Medium', question: 'Convert 2 days to hours.', answer: '48 hours', checkMode: 'auto', correctAnswer: '48hours', correctAnswers: ['48hours', '48', '48 hours', '48hrs'], explanation: 'Days → hours: multiply by 24. 2 × 24 = 48 hours.' },
        { difficulty: 'Medium', question: 'Convert 72 hours to days.', answer: '3 days', checkMode: 'auto', correctAnswer: '3days', correctAnswers: ['3days', '3', '3 days'], explanation: 'Hours → days: divide by 24. 72 ÷ 24 = 3 days.' },
        { difficulty: 'Medium', question: 'Convert 3 weeks to days.', answer: '21 days', checkMode: 'auto', correctAnswer: '21days', correctAnswers: ['21days', '21', '21 days'], explanation: 'Weeks → days: multiply by 7. 3 × 7 = 21 days.' },
        { difficulty: 'Medium', question: 'Convert 21 days to weeks.', answer: '3 weeks', checkMode: 'auto', correctAnswer: '3weeks', correctAnswers: ['3weeks', '3', '3 weeks'], explanation: 'Days → weeks: divide by 7. 21 ÷ 7 = 3 weeks.' },
        { difficulty: 'Medium', question: 'Convert 90 minutes to hours and minutes.', answer: '1 hour 30 minutes', checkMode: 'auto', correctAnswer: '1hour30minutes', correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90mins', '90'], explanation: '90 ÷ 60 = 1 remainder 30. So 90 minutes = 1 hour 30 minutes.' },
        { difficulty: 'Medium', question: 'Convert 200 minutes to hours and minutes.', answer: '3 hours 20 minutes', checkMode: 'auto', correctAnswer: '3hours20minutes', correctAnswers: ['3hours20minutes', '3 hours 20 minutes', '3hr20min', '200minutes', '200mins', '200'], explanation: '200 ÷ 60 = 3 remainder 20. So 200 minutes = 3 hours 20 minutes.' },
        { difficulty: 'Hard', question: 'Amahle says 6 weeks is the same as 42 days. Is she correct? Show your working.', answer: 'Yes, Amahle is correct. 6 weeks = 6 × 7 = 42 days.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Convert 100 hours to days and hours.', answer: '4 days 4 hours', checkMode: 'auto', correctAnswer: '4days4hours', correctAnswers: ['4days4hours', '4 days 4 hours', '100hours', '100'], explanation: '100 ÷ 24 = 4 remainder 4. So 100 hours = 4 days and 4 hours.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You can confidently tell the time and convert between units of time.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the clock reading and conversion worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — ELAPSED TIME / DURATION CALCULATIONS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Elapsed Time and Duration',
      questions: [
        { difficulty: 'Easy', question: 'A lesson starts at 9:00 am and ends at 11:00 am. How long is the lesson?', answer: '2 hours', checkMode: 'auto', correctAnswer: '2hours', correctAnswers: ['2hours', '2 hours', '2hr', '120minutes', '120'], explanation: 'From 9:00 to 11:00 is exactly 2 hours.' },
        { difficulty: 'Easy', question: 'A game starts at 6:20 am and ends at 6:50 am. How long does the game last?', answer: '30 minutes', checkMode: 'auto', correctAnswer: '30minutes', correctAnswers: ['30minutes', '30 minutes', '30mins', '30'], explanation: 'From 6:20 to 6:50 is 30 minutes.' },
        { difficulty: 'Easy', question: 'A phone call starts at 9:50 am and ends at 10:20 am. How long is the call?', answer: '30 minutes', checkMode: 'auto', correctAnswer: '30minutes', correctAnswers: ['30minutes', '30 minutes', '30mins', '30'], explanation: 'From 9:50 to 10:00 is 10 minutes, then 10:00 to 10:20 is 20 minutes. Total: 30 minutes.' },
        { difficulty: 'Easy', question: 'A test starts at 11:30 am and ends at 12:30 pm. How long is the test?', answer: '1 hour', checkMode: 'auto', correctAnswer: '1hour', correctAnswers: ['1hour', '1 hour', '1hr', '60minutes', '60'], explanation: 'From 11:30 am to 12:30 pm is exactly 1 hour.' },
        { difficulty: 'Medium', question: 'A cricket match starts at 10:15 am and ends at 1:45 pm. How long does it last?', answer: '3 hours 30 minutes', checkMode: 'auto', correctAnswer: '3hours30minutes', correctAnswers: ['3hours30minutes', '3 hours 30 minutes', '3hr30min', '210minutes', '210'], explanation: 'From 10:15 am to 1:15 pm = 3 hours. From 1:15 pm to 1:45 pm = 30 minutes. Total: 3 hours 30 minutes.' },
        { difficulty: 'Medium', question: 'A play starts at 11:40 am and ends at 1:10 pm. How long is the play?', answer: '1 hour 30 minutes', checkMode: 'auto', correctAnswer: '1hour30minutes', correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90'], explanation: 'From 11:40 am to 12:40 pm = 1 hour. From 12:40 pm to 1:10 pm = 30 minutes. Total: 1 hour 30 minutes.' },
        { difficulty: 'Medium', question: 'A radio show starts at 2:50 pm and ends at 4:05 pm. How long is the show?', answer: '1 hour 15 minutes', checkMode: 'auto', correctAnswer: '1hour15minutes', correctAnswers: ['1hour15minutes', '1 hour 15 minutes', '1hr15min', '75minutes', '75'], explanation: 'From 2:50 pm to 3:50 pm = 1 hour. From 3:50 pm to 4:05 pm = 15 minutes. Total: 1 hour 15 minutes.' },
        { difficulty: 'Medium', question: 'A workshop starts at 8:00 am and ends at 3:30 pm. How long does it last?', answer: '7 hours 30 minutes', checkMode: 'auto', correctAnswer: '7hours30minutes', correctAnswers: ['7hours30minutes', '7 hours 30 minutes', '7hr30min', '450minutes', '450'], explanation: 'From 8:00 am to 12:00 pm = 4 hours. From 12:00 pm to 3:30 pm = 3 hours 30 minutes. Total: 7 hours 30 minutes.' },
        { difficulty: 'Medium', question: 'A concert starts at 7:15 pm and ends at 9:00 pm. How long does it last?', answer: '1 hour 45 minutes', checkMode: 'auto', correctAnswer: '1hour45minutes', correctAnswers: ['1hour45minutes', '1 hour 45 minutes', '1hr45min', '105minutes', '105'], explanation: 'From 7:15 pm to 8:15 pm = 1 hour. From 8:15 pm to 9:00 pm = 45 minutes. Total: 1 hour 45 minutes.' },
        { difficulty: 'Medium', question: 'A meeting starts at 12:00 pm and ends at 3:15 pm. How long is the meeting?', answer: '3 hours 15 minutes', checkMode: 'auto', correctAnswer: '3hours15minutes', correctAnswers: ['3hours15minutes', '3 hours 15 minutes', '3hr15min', '195minutes', '195'], explanation: 'From 12:00 pm to 3:00 pm = 3 hours. From 3:00 pm to 3:15 pm = 15 minutes. Total: 3 hours 15 minutes.' },
        { difficulty: 'Medium', question: 'A dance class starts at 4:45 pm and ends at 6:00 pm. How long is the class?', answer: '1 hour 15 minutes', checkMode: 'auto', correctAnswer: '1hour15minutes', correctAnswers: ['1hour15minutes', '1 hour 15 minutes', '1hr15min', '75minutes', '75'], explanation: 'From 4:45 pm to 5:45 pm = 1 hour. From 5:45 pm to 6:00 pm = 15 minutes. Total: 1 hour 15 minutes.' },
        { difficulty: 'Medium', question: 'A short break starts at 7:40 am and ends at 8:05 am. How long is the break?', answer: '25 minutes', checkMode: 'auto', correctAnswer: '25minutes', correctAnswers: ['25minutes', '25 minutes', '25mins', '25'], explanation: 'From 7:40 to 8:00 = 20 minutes. From 8:00 to 8:05 = 5 minutes. Total: 25 minutes.' },
        { difficulty: 'Medium', question: 'A hike starts at 1:20 pm and ends at 5:50 pm. How long is the hike?', answer: '4 hours 30 minutes', checkMode: 'auto', correctAnswer: '4hours30minutes', correctAnswers: ['4hours30minutes', '4 hours 30 minutes', '4hr30min', '270minutes', '270'], explanation: 'From 1:20 pm to 5:20 pm = 4 hours. From 5:20 pm to 5:50 pm = 30 minutes. Total: 4 hours 30 minutes.' },
        { difficulty: 'Medium', question: 'A quiz starts at 9:05 am and ends at 9:55 am. How long is the quiz?', answer: '50 minutes', checkMode: 'auto', correctAnswer: '50minutes', correctAnswers: ['50minutes', '50 minutes', '50mins', '50'], explanation: 'From 9:05 to 9:55 is 50 minutes.' },
        { difficulty: 'Hard', question: 'A late movie starts at 10:30 pm and ends at 12:15 am the next day. How long is the movie?', answer: '1 hour 45 minutes', checkMode: 'auto', correctAnswer: '1hour45minutes', correctAnswers: ['1hour45minutes', '1 hour 45 minutes', '1hr45min', '105minutes', '105'], explanation: 'From 10:30 pm to 12:00 midnight = 1 hour 30 minutes. From midnight to 12:15 am = 15 minutes. Total: 1 hour 45 minutes.' },
        { difficulty: 'Hard', question: 'An overnight train leaves at 11:00 pm and arrives at 6:00 am the next day. How long is the journey?', answer: '7 hours', checkMode: 'auto', correctAnswer: '7hours', correctAnswers: ['7hours', '7 hours', '7hr', '420minutes', '420'], explanation: 'From 11:00 pm to midnight = 1 hour. From midnight to 6:00 am = 6 hours. Total: 7 hours.' },
        { difficulty: 'Hard', question: 'A film ends at 2:30 pm. It was 1 hour 45 minutes long. What time did it start?', answer: '12:45 pm', checkMode: 'auto', correctAnswer: '12:45pm', correctAnswers: ['12:45pm', '12:45 pm', '1245pm'], explanation: 'Count back from the end time: 2:30 pm − 1 hour 45 minutes = 12:45 pm.' },
        { difficulty: 'Hard', question: 'A bus journey ends at 9:55 am. It took 1 hour 20 minutes. What time did it start?', answer: '8:35 am', checkMode: 'auto', correctAnswer: '8:35am', correctAnswers: ['8:35am', '8:35 am', '835am'], explanation: 'Count back from the end time: 9:55 am − 1 hour 20 minutes = 8:35 am.' },
        { difficulty: 'Hard', question: 'A swim starts at 7:20 am. It lasts 2 hours 35 minutes. What time does it end?', answer: '9:55 am', checkMode: 'auto', correctAnswer: '9:55am', correctAnswers: ['9:55am', '9:55 am', '955am'], explanation: 'Count on from the start time: 7:20 am + 2 hours 35 minutes = 9:55 am.' },
        { difficulty: 'Hard', question: 'A road trip starts at 3:40 pm. It lasts 3 hours 50 minutes. What time does it end?', answer: '7:30 pm', checkMode: 'auto', correctAnswer: '7:30pm', correctAnswers: ['7:30pm', '7:30 pm', '730pm'], explanation: 'Count on from the start time: 3:40 pm + 3 hours 50 minutes = 7:30 pm.' },
        { difficulty: 'Hard', question: 'A camping trip starts at 11:10 am. It lasts 4 hours 20 minutes. What time does it end?', answer: '3:30 pm', checkMode: 'auto', correctAnswer: '3:30pm', correctAnswers: ['3:30pm', '3:30 pm', '330pm'], explanation: 'Count on from the start time: 11:10 am + 4 hours 20 minutes = 3:30 pm.' },
        { difficulty: 'Hard', question: 'Sipho says the time from 8:45 am to 1:20 pm is 4 hours 20 minutes. Is he correct? Show your working.', answer: 'No, Sipho is incorrect. From 8:45 am to 12:45 pm is 4 hours. From 12:45 pm to 1:20 pm is 35 minutes. Total: 4 hours 35 minutes, not 4 hours 20 minutes.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A study session starts at 9:55 am. It lasts 1 hour 20 minutes. What time does it end?', answer: '11:15 am', checkMode: 'auto', correctAnswer: '11:15am', correctAnswers: ['11:15am', '11:15 am', '1115am'], explanation: 'Count on from the start time: 9:55 am + 1 hour 20 minutes = 11:15 am.' },
        { difficulty: 'Hard', question: 'Two lessons run one after another: Lesson A takes 1 hour 30 minutes and Lesson B takes 55 minutes. What is the total time for both lessons in hours and minutes?', answer: '2 hours 25 minutes', checkMode: 'auto', correctAnswer: '2hours25minutes', correctAnswers: ['2hours25minutes', '2 hours 25 minutes', '2hr25min', '145minutes', '145'], explanation: '1 hour 30 minutes = 90 minutes. 90 + 55 = 145 minutes. 145 ÷ 60 = 2 remainder 25. Total: 2 hours 25 minutes.' },
        { difficulty: 'Hard', question: 'A relay race is run in two parts. Part 1 takes 8 minutes and Part 2 takes 5 minutes 20 seconds less than Part 1. What is the duration of Part 2? Give your answer in minutes and seconds.', answer: '2 minutes 40 seconds', checkMode: 'auto', correctAnswer: '2minutes40seconds', correctAnswers: ['2minutes40seconds', '2 minutes 40 seconds', '2min40sec', '160seconds', '160'], explanation: 'Part 1 = 8 minutes = 8 min 0 sec. Part 2 = Part 1 − 5 minutes 20 seconds = 8 min 0 sec − 5 min 20 sec = 2 minutes 40 seconds.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Excellent! You can confidently calculate elapsed time and duration.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the duration-calculation worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD TIME WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Real-World Time Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'Lerato leaves home at 7:15 am. It takes her 20 minutes to walk to school. What time does she arrive?', answer: '7:35 am', checkMode: 'auto', correctAnswer: '7:35am', correctAnswers: ['7:35am', '7:35 am', '735am'], explanation: 'Add the walking time to the start time: 7:15 am + 20 minutes = 7:35 am.' },
        { difficulty: 'Easy', question: 'A bus ride starts at 8:05 am and ends at 8:47 am. How long is the bus ride?', answer: '42 minutes', checkMode: 'auto', correctAnswer: '42minutes', correctAnswers: ['42minutes', '42 minutes', '42mins', '42'], explanation: 'From 8:05 to 8:47 is 42 minutes.' },
        { difficulty: 'Easy', question: 'A soccer match kicks off at 3:00 pm and ends at 4:30 pm. How long does the match last?', answer: '1 hour 30 minutes', checkMode: 'auto', correctAnswer: '1hour30minutes', correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90'], explanation: 'From 3:00 pm to 4:30 pm is 1 hour 30 minutes.' },
        { difficulty: 'Easy', question: 'A shop opens at 8 am and closes at 5 pm. How many hours is the shop open?', answer: '9 hours', checkMode: 'auto', correctAnswer: '9hours', correctAnswers: ['9hours', '9 hours', '9hr', '540minutes', '540'], explanation: 'From 8 am to 5 pm is 9 hours.' },
        { difficulty: 'Easy', question: 'A swimming lesson starts at 4:15 pm and lasts 45 minutes. What time does it end?', answer: '5:00 pm', checkMode: 'auto', correctAnswer: '5:00pm', correctAnswers: ['5:00pm', '5:00 pm', '500pm'], explanation: 'Add the lesson length to the start time: 4:15 pm + 45 minutes = 5:00 pm.' },
        { difficulty: 'Medium', question: 'A movie starts at 6:30 pm and lasts 1 hour 50 minutes. What time does it end?', answer: '8:20 pm', checkMode: 'auto', correctAnswer: '8:20pm', correctAnswers: ['8:20pm', '8:20 pm', '820pm'], explanation: 'Add the movie length to the start time: 6:30 pm + 1 hour 50 minutes = 8:20 pm.' },
        { difficulty: 'Medium', question: 'A flight departs at 10:40 am and arrives at 1:25 pm. How long is the flight?', answer: '2 hours 45 minutes', checkMode: 'auto', correctAnswer: '2hours45minutes', correctAnswers: ['2hours45minutes', '2 hours 45 minutes', '2hr45min', '165minutes', '165'], explanation: 'From 10:40 am to 1:40 pm = 3 hours. But the flight arrives 15 minutes earlier at 1:25 pm, so 3 hours − 15 minutes = 2 hours 45 minutes.' },
        { difficulty: 'Medium', question: "Thabo's homework takes 25 minutes of reading and 40 minutes of maths. What is the total homework time in minutes?", answer: '65 minutes', checkMode: 'auto', correctAnswer: '65minutes', correctAnswers: ['65minutes', '65 minutes', '65mins', '65', '1hour5minutes', '1 hour 5 minutes'], explanation: '25 + 40 = 65 minutes, which is the same as 1 hour 5 minutes.' },
        { difficulty: 'Medium', question: 'A birthday party starts at 2:00 pm and lasts 3 hours. What time does it end?', answer: '5:00 pm', checkMode: 'auto', correctAnswer: '5:00pm', correctAnswers: ['5:00pm', '5:00 pm', '500pm'], explanation: 'Add the party length to the start time: 2:00 pm + 3 hours = 5:00 pm.' },
        { difficulty: 'Medium', question: 'A train departs at 6:55 am. The journey takes 2 hours 40 minutes. What time does it arrive?', answer: '9:35 am', checkMode: 'auto', correctAnswer: '9:35am', correctAnswers: ['9:35am', '9:35 am', '935am'], explanation: 'Add the journey time to the departure time: 6:55 am + 2 hours 40 minutes = 9:35 am.' },
        { difficulty: 'Medium', question: 'Sipho attends 3 classes at school today, each lasting 45 minutes. What is the total class time in hours and minutes?', answer: '2 hours 15 minutes', checkMode: 'auto', correctAnswer: '2hours15minutes', correctAnswers: ['2hours15minutes', '2 hours 15 minutes', '2hr15min', '135minutes', '135'], explanation: '3 × 45 = 135 minutes. 135 ÷ 60 = 2 remainder 15. Total: 2 hours 15 minutes.' },
        { difficulty: 'Medium', question: 'A recipe needs the oven to preheat for 12 minutes, then bake the food for 35 minutes. How long does the whole process take?', answer: '47 minutes', checkMode: 'auto', correctAnswer: '47minutes', correctAnswers: ['47minutes', '47 minutes', '47mins', '47'], explanation: '12 + 35 = 47 minutes.' },
        { difficulty: 'Medium', question: 'A two-part car trip takes 1 hour 20 minutes for the first part and 55 minutes for the second part. What is the total travel time in hours and minutes?', answer: '2 hours 15 minutes', checkMode: 'auto', correctAnswer: '2hours15minutes', correctAnswers: ['2hours15minutes', '2 hours 15 minutes', '2hr15min', '135minutes', '135'], explanation: '1 hour 20 minutes = 80 minutes. 80 + 55 = 135 minutes = 2 hours 15 minutes.' },
        { difficulty: 'Medium', question: 'Lerato needs to catch a bus that leaves in 90 minutes. If it is now 2:10 pm, at what time does the bus leave?', answer: '3:40 pm', checkMode: 'auto', correctAnswer: '3:40pm', correctAnswers: ['3:40pm', '3:40 pm', '340pm'], explanation: '90 minutes = 1 hour 30 minutes. 2:10 pm + 1 hour 30 minutes = 3:40 pm.' },
        { difficulty: 'Medium', question: 'A netball tournament runs from 9:00 am to 12:30 pm, with a 20-minute break in the middle. How much time is spent actually playing?', answer: '3 hours 10 minutes', checkMode: 'auto', correctAnswer: '3hours10minutes', correctAnswers: ['3hours10minutes', '3 hours 10 minutes', '3hr10min', '190minutes', '190'], explanation: 'Total time from 9:00 am to 12:30 pm = 3 hours 30 minutes = 210 minutes. Subtract the 20-minute break: 210 − 20 = 190 minutes = 3 hours 10 minutes.' },
        { difficulty: 'Medium', question: "Amahle's piano lesson is 30 minutes long. If it starts at 4:50 pm, what time does it end?", answer: '5:20 pm', checkMode: 'auto', correctAnswer: '5:20pm', correctAnswers: ['5:20pm', '5:20 pm', '520pm'], explanation: 'Add the lesson length to the start time: 4:50 pm + 30 minutes = 5:20 pm.' },
        { difficulty: 'Hard', question: "Thabo's holiday travel takes 2 days and 5 hours. How many hours is this in total?", answer: '53 hours', checkMode: 'auto', correctAnswer: '53hours', correctAnswers: ['53hours', '53 hours', '53hr', '53'], explanation: '2 days = 2 × 24 = 48 hours. 48 + 5 = 53 hours.' },
        { difficulty: 'Hard', question: 'A school camp lasts 3 weeks and 2 days. How many days is this in total?', answer: '23 days', checkMode: 'auto', correctAnswer: '23days', correctAnswers: ['23days', '23 days', '23'], explanation: '3 weeks = 3 × 7 = 21 days. 21 + 2 = 23 days.' },
        { difficulty: 'Hard', question: 'Train A travels from 8:10 am to 11:40 am. Train B travels from 9:00 am to 12:15 pm. Which train journey is longer?', answer: 'Train A', checkMode: 'auto', correctAnswer: 'TrainA', correctAnswers: ['TrainA', 'Train A', 'traina', 'A', 'a'], explanation: 'Train A: 8:10 am to 11:40 am = 3 hours 30 minutes (210 minutes). Train B: 9:00 am to 12:15 pm = 3 hours 15 minutes (195 minutes). Since 210 > 195, Train A is longer.' },
        { difficulty: 'Hard', question: "Thabo practices soccer from 4:00 pm to 5:30 pm, rests, then does homework from 6:20 pm to 7:10 pm. How long is the rest gap between soccer and homework?", answer: '50 minutes', checkMode: 'auto', correctAnswer: '50minutes', correctAnswers: ['50minutes', '50 minutes', '50mins', '50'], explanation: 'Soccer ends at 5:30 pm. Homework starts at 6:20 pm. From 5:30 pm to 6:20 pm is 50 minutes.' },
        { difficulty: 'Hard', question: "Thabo practices soccer from 4:00 pm to 5:30 pm, then later does homework from 6:20 pm to 7:10 pm. What is his total activity time (soccer plus homework), not counting the rest gap?", answer: '2 hours 20 minutes', checkMode: 'auto', correctAnswer: '2hours20minutes', correctAnswers: ['2hours20minutes', '2 hours 20 minutes', '2hr20min', '140minutes', '140'], explanation: 'Soccer = 4:00 pm to 5:30 pm = 90 minutes. Homework = 6:20 pm to 7:10 pm = 50 minutes. Total: 90 + 50 = 140 minutes = 2 hours 20 minutes.' },
        { difficulty: 'Hard', question: 'A shop is open 9 hours a day, 6 days a week. How many hours is the shop open in total for the week?', answer: '54 hours', checkMode: 'auto', correctAnswer: '54hours', correctAnswers: ['54hours', '54 hours', '54hr', '54'], explanation: '9 hours × 6 days = 54 hours.' },
        { difficulty: 'Hard', question: 'A library is open from 8:30 am to 4:00 pm each day. It is closed for 30 minutes at lunch. How many hours is the library actually open each day?', answer: '7 hours', checkMode: 'auto', correctAnswer: '7hours', correctAnswers: ['7hours', '7 hours', '7hr', '420minutes', '420'], explanation: 'Total time from 8:30 am to 4:00 pm = 7 hours 30 minutes = 450 minutes. Subtract the 30-minute lunch break: 450 − 30 = 420 minutes = 7 hours.' },
        { difficulty: 'Hard', question: "Lerato's family drives to the coast. They leave at 5:45 am and the trip normally takes 6 hours, but roadworks add 35 minutes. What time do they arrive?", answer: '12:20 pm', checkMode: 'auto', correctAnswer: '12:20pm', correctAnswers: ['12:20pm', '12:20 pm', '1220pm'], explanation: 'Total travel time = 6 hours + 35 minutes = 6 hours 35 minutes. 5:45 am + 6 hours 35 minutes = 12:20 pm.' },
        { difficulty: 'Hard', question: 'Explain why it is important to know whether a time is a.m. or p.m. when solving word problems about duration.', answer: 'a.m. and p.m. tell you whether a time is in the first half or second half of the day. Without knowing this, you could calculate the wrong duration — for example, mixing up 7:00 am and 7:00 pm would give a completely different (and incorrect) answer for how long an activity lasted.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantastic! You can apply time calculations to real-world problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP / COMBINED PROBLEMS AND SELF-CHECK REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step Time Problems',
      questions: [
        { difficulty: 'Easy', question: 'Sipho wakes up at 6:15 am. It takes him 40 minutes to get ready. What time is he ready?', answer: '6:55 am', checkMode: 'auto', correctAnswer: '6:55am', correctAnswers: ['6:55am', '6:55 am', '655am'], explanation: 'Add the time to get ready to the wake-up time: 6:15 am + 40 minutes = 6:55 am.' },
        { difficulty: 'Easy', question: 'After Sipho is ready at 6:55 am, it takes him 15 minutes to walk to the bus stop. What time does he arrive at the bus stop?', answer: '7:10 am', checkMode: 'auto', correctAnswer: '7:10am', correctAnswers: ['7:10am', '7:10 am', '710am'], explanation: 'Add the walking time: 6:55 am + 15 minutes = 7:10 am.' },
        { difficulty: 'Easy', question: 'From when Sipho wakes up (6:15 am) to when he reaches the bus stop (7:10 am), how many minutes pass in total?', answer: '55 minutes', checkMode: 'auto', correctAnswer: '55minutes', correctAnswers: ['55minutes', '55 minutes', '55mins', '55'], explanation: 'Getting ready (40 minutes) plus walking (15 minutes) = 40 + 15 = 55 minutes.' },
        { difficulty: 'Medium', question: "Lerato's school day runs from 7:45 am to 2:15 pm. How long is the total school day?", answer: '6 hours 30 minutes', checkMode: 'auto', correctAnswer: '6hours30minutes', correctAnswers: ['6hours30minutes', '6 hours 30 minutes', '6hr30min', '390minutes', '390'], explanation: 'From 7:45 am to 2:15 pm is 6 hours 30 minutes.' },
        { difficulty: 'Medium', question: "Lerato's school day (6 hours 30 minutes) includes a 30-minute lunch break and a 20-minute morning break. How much actual lesson time is there?", answer: '5 hours 40 minutes', checkMode: 'auto', correctAnswer: '5hours40minutes', correctAnswers: ['5hours40minutes', '5 hours 40 minutes', '5hr40min', '340minutes', '340'], explanation: '6 hours 30 minutes = 390 minutes. Subtract the breaks: 390 − 30 − 20 = 340 minutes = 5 hours 40 minutes.' },
        { difficulty: 'Medium', question: 'A double-feature movie night starts at 5:00 pm. The first movie is 1 hour 35 minutes long, there is a 15-minute break, then the second movie is 1 hour 50 minutes long. What time does the movie night finish?', answer: '8:40 pm', checkMode: 'auto', correctAnswer: '8:40pm', correctAnswers: ['8:40pm', '8:40 pm', '840pm'], explanation: 'Total time = 95 + 15 + 110 = 220 minutes = 3 hours 40 minutes. 5:00 pm + 3 hours 40 minutes = 8:40 pm.' },
        { difficulty: 'Medium', question: 'Using the movie night from the previous question, how long in total (in hours and minutes) are the two movies, not counting the break?', answer: '3 hours 25 minutes', checkMode: 'auto', correctAnswer: '3hours25minutes', correctAnswers: ['3hours25minutes', '3 hours 25 minutes', '3hr25min', '205minutes', '205'], explanation: '1 hour 35 minutes = 95 minutes. 1 hour 50 minutes = 110 minutes. 95 + 110 = 205 minutes = 3 hours 25 minutes.' },
        { difficulty: 'Medium', question: "Amahle's family trip has 2 driving parts. Part 1 takes 3 hours 45 minutes. Part 2 takes 2 hours 50 minutes. What is the total driving time?", answer: '6 hours 35 minutes', checkMode: 'auto', correctAnswer: '6hours35minutes', correctAnswers: ['6hours35minutes', '6 hours 35 minutes', '6hr35min', '395minutes', '395'], explanation: '3 hours 45 minutes = 225 minutes. 2 hours 50 minutes = 170 minutes. 225 + 170 = 395 minutes = 6 hours 35 minutes.' },
        { difficulty: 'Medium', question: 'If the family trip in the previous question starts at 6:30 am, and they stop for a 25-minute break partway, what time do they arrive (including the break)?', answer: '1:30 pm', checkMode: 'auto', correctAnswer: '1:30pm', correctAnswers: ['1:30pm', '1:30 pm', '130pm'], explanation: 'Total time with break = 6 hours 35 minutes + 25 minutes = 7 hours. 6:30 am + 7 hours = 1:30 pm.' },
        { difficulty: 'Hard', question: 'A school tuck shop is open for 45 minutes each break, twice a day, 5 days a week. How many minutes is the tuck shop open in total for the week?', answer: '450 minutes', checkMode: 'auto', correctAnswer: '450minutes', correctAnswers: ['450minutes', '450 minutes', '450mins', '450', '7hours30minutes', '7 hours 30 minutes'], explanation: '45 minutes × 2 breaks = 90 minutes per day. 90 minutes × 5 days = 450 minutes (which is 7 hours 30 minutes).' },
        { difficulty: 'Hard', question: 'Convert your answer to the previous question (450 minutes) into hours and minutes.', answer: '7 hours 30 minutes', checkMode: 'auto', correctAnswer: '7hours30minutes', correctAnswers: ['7hours30minutes', '7 hours 30 minutes', '7hr30min', '450minutes', '450'], explanation: '450 ÷ 60 = 7 remainder 30. So 450 minutes = 7 hours 30 minutes.' },
        { difficulty: 'Hard', question: "Thabo's holiday starts on 28 June and ends on 21 July. How many days of holiday does he have in total?", answer: '24 days', checkMode: 'auto', correctAnswer: '24days', correctAnswers: ['24days', '24', '24 days'], explanation: 'Days left in June from the 28th: 28, 29, 30 = 3 days. Days in July up to the 21st = 21 days. Total: 3 + 21 = 24 days.' },
        { difficulty: 'Hard', question: 'Using the holiday from the previous question (24 days total), how many full weeks and extra days is that?', answer: '3 weeks and 3 days', checkMode: 'auto', correctAnswer: '3weeks3days', correctAnswers: ['3weeks3days', '3 weeks 3 days', '3weeks and 3days', '3 weeks and 3 days'], explanation: '24 ÷ 7 = 3 remainder 3. So 24 days = 3 weeks and 3 days.' },
        { difficulty: 'Hard', question: 'A train departs at 8:45 am and arrives at 1:20 pm, with a 15-minute stop along the way. How long is the actual travelling time (excluding the stop)?', answer: '4 hours 20 minutes', checkMode: 'auto', correctAnswer: '4hours20minutes', correctAnswers: ['4hours20minutes', '4 hours 20 minutes', '4hr20min', '260minutes', '260'], explanation: 'Total journey: 8:45 am to 1:20 pm = 4 hours 35 minutes. Subtract the 15-minute stop: 4 hours 35 minutes − 15 minutes = 4 hours 20 minutes.' },
        { difficulty: 'Hard', question: 'The train from the previous question makes a return journey that takes 30 minutes longer than the original 4 hours 35 minute journey. If it leaves at 2:00 pm, what time does it arrive?', answer: '7:05 pm', checkMode: 'auto', correctAnswer: '7:05pm', correctAnswers: ['7:05pm', '7:05 pm', '705pm'], explanation: 'Return journey = 4 hours 35 minutes + 30 minutes = 5 hours 5 minutes. 2:00 pm + 5 hours 5 minutes = 7:05 pm.' },
        { difficulty: 'Hard', question: 'A relay race has 4 runners. Each runner takes about 3 minutes 15 seconds to complete their leg. About how long does the whole race take, in minutes and seconds?', answer: '13 minutes 0 seconds', checkMode: 'auto', correctAnswer: '13minutes', correctAnswers: ['13minutes', '13 minutes', '13min', '780seconds', '780'], explanation: '3 minutes 15 seconds = 195 seconds. 195 × 4 = 780 seconds. 780 ÷ 60 = 13 minutes exactly.' },
        { difficulty: 'Hard', question: 'Two friends compare their weekend reading time. Amahle reads for 1 hour 20 minutes on Saturday and 55 minutes on Sunday. Sipho reads for 45 minutes on Saturday and 1 hour 35 minutes on Sunday. What is each friend\'s total reading time for the weekend? Give Amahle\'s total first, then Sipho\'s, separated by a comma (in minutes).', answer: '135 minutes, 140 minutes', checkMode: 'auto', correctAnswer: '135140', correctAnswers: ['135140', '135, 140', '135 minutes, 140 minutes'], explanation: 'Amahle: 1 hour 20 minutes + 55 minutes = 80 + 55 = 135 minutes. Sipho: 45 minutes + 1 hour 35 minutes = 45 + 95 = 140 minutes.' },
        { difficulty: 'Hard', question: 'Using the previous question, who read for longer over the weekend, and by how many minutes?', answer: 'Sipho read 5 minutes longer.', checkMode: 'auto', correctAnswer: '5minutes', correctAnswers: ['5minutes', '5 minutes', '5mins', '5', 'sipho5minutes', 'sipho'], explanation: 'Sipho: 140 minutes. Amahle: 135 minutes. Difference: 140 − 135 = 5 minutes. Sipho read longer.' },
        { difficulty: 'Hard', question: 'A school assembly happens once a week and lasts 25 minutes. How many minutes of assembly time are there in a school term of 10 weeks?', answer: '250 minutes', checkMode: 'auto', correctAnswer: '250minutes', correctAnswers: ['250minutes', '250 minutes', '250mins', '250', '4hours10minutes', '4 hours 10 minutes'], explanation: '25 minutes × 10 weeks = 250 minutes.' },
        { difficulty: 'Hard', question: 'Convert the total assembly time from the previous question (250 minutes) into hours and minutes.', answer: '4 hours 10 minutes', checkMode: 'auto', correctAnswer: '4hours10minutes', correctAnswers: ['4hours10minutes', '4 hours 10 minutes', '4hr10min', '250minutes', '250'], explanation: '250 ÷ 60 = 4 remainder 10. So 250 minutes = 4 hours 10 minutes.' },
        { difficulty: 'Hard', question: 'A farmer starts milking cows at 5:15 am. It takes 1 hour 50 minutes. Then after a 40-minute breakfast break, he starts feeding the animals, which takes another 1 hour 10 minutes. What time does he finish feeding the animals?', answer: '8:55 am', checkMode: 'auto', correctAnswer: '8:55am', correctAnswers: ['8:55am', '8:55 am', '855am'], explanation: 'Milking: 5:15 am + 1 hour 50 minutes = 7:05 am. Breakfast: 7:05 am + 40 minutes = 7:45 am. Feeding: 7:45 am + 1 hour 10 minutes = 8:55 am.' },
        { difficulty: 'Hard', question: 'Using the farmer from the previous question, what is his total working time from 5:15 am to 8:55 am, not counting the 40-minute breakfast break?', answer: '3 hours', checkMode: 'auto', correctAnswer: '3hours', correctAnswers: ['3hours', '3 hours', '3hr', '180minutes', '180'], explanation: 'Total time from 5:15 am to 8:55 am = 3 hours 40 minutes = 220 minutes. Subtract the 40-minute break: 220 − 40 = 180 minutes = 3 hours.' },
        { difficulty: 'Hard', question: 'Explain how you would work out the finishing time of an activity if you are given the start time and the duration, using a step-by-step method.', answer: 'First add the whole hours from the duration to the start time. Then add the remaining minutes to that result. If the minutes go past 60, carry 1 hour over and keep the leftover minutes. Remember to check whether the answer crosses over from a.m. to p.m. (or past midnight) and adjust accordingly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain why converting all times to minutes (or hours) before adding or subtracting can help avoid mistakes when solving multi-step time problems.', answer: 'Converting everything into the same unit (like minutes) means you can add or subtract the numbers directly, just like normal numbers, without worrying about hours and minutes separately. Once you have the total in one unit, you convert back into hours and minutes at the end, which reduces the chance of making an error partway through the calculation.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A weekly sports schedule has training on 3 days, each lasting 1 hour 15 minutes. How much total training time is there in the week, in hours and minutes?', answer: '3 hours 45 minutes', checkMode: 'auto', correctAnswer: '3hours45minutes', correctAnswers: ['3hours45minutes', '3 hours 45 minutes', '3hr45min', '225minutes', '225'], explanation: '1 hour 15 minutes = 75 minutes. 75 × 3 = 225 minutes = 3 hours 45 minutes.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Superb! You can solve multi-step time problems with confidence.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
