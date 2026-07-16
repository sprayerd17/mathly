import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → individual events / given probabilities / known values      (#2563eb)
// orange → the rule or formula being applied                          (#ea580c)
// green  → combined result / final answer                             (#16a34a)
// red    → the complement / the "not" case / restricted item          (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Probability',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE ADDITION RULE AND COMPLEMENTARY EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'addition-rule-complementary-events',
      title: 'The Addition Rule and Complementary Events',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">You already know how to use Venn diagrams, tree diagrams and contingency tables for dependent and independent events from Grade 11. In Grade 12 we formalise the rule for combining "or" events into one identity, and revise the complementary rule you'll use throughout this topic:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('P(A or B) = P(A) + P(B) − P(A and B)')}</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('individual events')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('combined result')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('complement')}</span>` +
        `</div>` +

        // ── Key definitions ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key definitions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">The Addition Rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For ANY two events: ${gr('P(A or B) = P(A) + P(B) − P(A and B)')}. You subtract P(A and B) because it would otherwise be counted twice — once in P(A) and once in P(B).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Mutually Exclusive Events</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Events that <strong>cannot happen at the same time</strong> (no overlap). Then ${bl('P(A and B) = 0')}, so the rule simplifies to ${bl('P(A or B) = P(A) + P(B)')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Complementary Events</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A and A' (not A) are complementary if they are mutually exclusive AND cover every possible outcome. Then ${re("P(A') = 1 − P(A)")}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">When to use the complement</p>` +
        `<p style="margin:0;color:#1e3a8a;">Whenever a question asks for the probability of <strong>"at least one"</strong> of something, it is almost always faster to find ${re("P(none) and use P(at least one) = 1 − P(none)")} instead of adding up every individual case.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A card is drawn from a standard deck of 52 cards. Find P(a heart or a king).',
          answer: `${gr('P(heart or king) = 16/52 = 4/13')}`,
          steps: [
            `Find the individual probabilities: ${bl('P(heart) = 13/52')} and ${bl('P(king) = 4/52')}.`,
            `These events ${or('overlap')} — the king of hearts is both a heart AND a king, so they are not mutually exclusive. Find ${or('P(heart and king) = 1/52')} (only one card is both).`,
            `Apply the ${gr('addition rule')}: ${gr('P(heart or king) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13')}.`,
            `<strong>Answer:</strong> ${gr('P(heart or king) = 4/13')}. Without subtracting the overlap, the king of hearts would have been counted twice.`,
          ],
        },
        {
          question: 'The probability that it rains tomorrow is 0,3. Find the probability that it does NOT rain tomorrow.',
          answer: `${re("P(not rain) = 0,7")}`,
          steps: [
            `Rain and no rain are ${bl('complementary events')} — exactly one of them must happen, and they cannot both happen.`,
            `Apply the ${re('complementary rule')}: ${re("P(not rain) = 1 − P(rain) = 1 − 0,3 = 0,7")}.`,
            `<strong>Answer:</strong> ${re('P(not rain) = 0,7')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video deriving the addition rule P(A or B) = P(A) + P(B) minus P(A and B) using an overlapping Venn diagram, then showing the complementary rule for at-least-one problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two overlapping circles in a Venn diagram labelled A and B with the overlap region highlighted in orange to show why it must be subtracted once" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THE FUNDAMENTAL COUNTING PRINCIPLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fundamental-counting-principle',
      title: 'The Fundamental Counting Principle',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Before we can calculate the probability of a specific arrangement, we first need to be able to <strong>count</strong> how many arrangements are possible. The ${gr('fundamental counting principle')} (also called the multiplication principle) is the tool for this:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">If one choice can be made in ${bl('m')} ways and a second choice in ${or('n')} ways, the two choices together can be made in ${gr('m × n')} ways.</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first choice')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('later choices')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('total count')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Extends to Many Choices</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The principle isn't limited to two choices — for three or more independent choices, multiply all the counts together: ${bl('m × n × p × ...')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Choices Can Shrink</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If an item can't be reused (e.g. arranging people, or letters without repetition), the number of options available <strong>decreases by one</strong> at each step.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tree Diagrams Illustrate It</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A tree diagram is really the counting principle drawn out branch by branch — counting the final branches gives the same answer as multiplying.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spot the counting-principle question</p>` +
        `<p style="margin:0;color:#1e3a8a;">Look for phrases like <em>"how many different ways"</em>, <em>"how many possible outcomes"</em>, or <em>"how many codes/passwords/number plates can be formed"</em> — these are almost always solved by multiplying the number of options at each step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A restaurant offers a meal deal: 4 starters, 6 mains and 3 desserts. How many different 3-course meals can be made?',
          answer: `${gr('4 × 6 × 3 = 72 different meals')}`,
          steps: [
            `Identify the number of choices at each step: ${bl('4 starters')}, ${bl('6 mains')}, ${bl('3 desserts')}.`,
            `Each choice is made independently of the others, so apply the ${or('fundamental counting principle')}.`,
            `Multiply all the choices together: ${gr('4 × 6 × 3 = 72')}.`,
            `<strong>Answer:</strong> There are ${gr('72 different possible meals')}.`,
          ],
        },
        {
          question: 'A car number plate has the form: 3 letters followed by 3 digits (e.g. ABC 123), with no repetition of letters or digits allowed. How many number plates are possible?',
          answer: `${gr('26 × 25 × 24 × 10 × 9 × 8 = 11 232 000')}`,
          steps: [
            `For the letters (no repetition): the first letter has ${bl('26')} options, the second has only ${or('25')} left, the third has only ${or('24')} left.`,
            `For the digits (no repetition): the first digit has ${bl('10')} options, the second has only ${or('9')} left, the third has only ${or('8')} left.`,
            `Apply the ${gr('counting principle')} across all six positions: ${gr('26 × 25 × 24 × 10 × 9 × 8')}.`,
            `Calculate: 26 × 25 × 24 = 15 600, and 10 × 9 × 8 = 720. Then 15 600 × 720 = ${gr('11 232 000')}.`,
            `<strong>Answer:</strong> ${gr('11 232 000')} different number plates are possible.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating the fundamental counting principle with a menu example and a number-plate example, showing how the number of available options shrinks when repetition is not allowed" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a tree diagram with 2 first-level branches and 3 second-level branches per first branch, with the 6 final outcomes counted and matched to 2 times 3 equals 6" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PERMUTATIONS: ARRANGING OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'permutations-arranging-objects',
      title: 'Permutations — Arranging Objects, With Restrictions and Repeated Items',
      icon: '🔀',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('permutation')} is an arrangement of objects in a specific order. The number of ways to arrange <strong>n different objects</strong> in a straight line, using each object exactly once, is:</p>` +

        `<div style="text-align:center;font-size:1.3em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('n! = n × (n − 1) × (n − 2) × ... × 2 × 1')}</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('all different objects')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('restriction applied')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('repeated items')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three situations you must recognise</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">All Objects Are Different</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">n different objects in a line: ${bl('n!')} arrangements. Remember ${bl('0! = 1')} and ${bl('1! = 1')} by definition.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Restrictions (Together / Apart / Fixed Position)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If specific items must stay ${or('together')}, glue them into a single "block" first, arrange the blocks, then multiply by the ways to arrange <strong>inside</strong> the block. For items that must stay ${or('apart')}, it is often easier to find the total arrangements and subtract the arrangements where they ARE together.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Repeated (Identical) Items</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If some objects are identical (e.g. repeated letters in a word), divide out the repeats: for a set of n items where one item repeats p times and another repeats q times, arrangements = ${re('n! ÷ (p! × q!)')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Working with the "together" trick</p>` +
        `<p style="margin:0;color:#1e3a8a;">If 3 specific people out of 7 must sit together, treat those 3 as ONE block. You now have 5 "items" to arrange (the block + the other 4 people): ${or('5!')} ways. Then multiply by the ${or('3!')} ways to arrange the 3 people <strong>within</strong> the block: total = ${gr('5! × 3!')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In how many different ways can 6 different books be arranged on a shelf?',
          answer: `${gr('6! = 720')} ways`,
          steps: [
            `All ${bl('6 books are different')}, and we are arranging all of them in a line.`,
            `Apply the permutation formula: ${gr('6! = 6 × 5 × 4 × 3 × 2 × 1')}.`,
            `Calculate: 6 × 5 = 30, × 4 = 120, × 3 = 360, × 2 = 720, × 1 = ${gr('720')}.`,
            `<strong>Answer:</strong> There are ${gr('720')} different arrangements.`,
          ],
        },
        {
          question: 'Find the number of different arrangements of the letters in the word "ASSESS".',
          answer: `${re('6! ÷ (4! ) = 30')} arrangements`,
          steps: [
            `Count the letters: A, S, S, E, S, S — that's ${bl('6 letters total')}.`,
            `Identify the repeats: the letter S ${re('repeats 4 times')} (A and E each appear once, so they don't need dividing out).`,
            `Apply the repeated-items formula: ${re('6! ÷ 4!')} — divide out the repeated S's.`,
            `Calculate: 6! = 720 and 4! = 24, so ${re('720 ÷ 24 = 30')}.`,
            `<strong>Answer:</strong> There are ${re('30')} different arrangements of the letters in "ASSESS".`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate n factorial for arranging different objects, then demonstrating the together block trick for restrictions and the divide by repeated factorial rule for words with repeated letters" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 3 specific people grouped into one highlighted block among 7 total people, illustrating why the block is treated as a single unit before multiplying by the internal arrangements of the block" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — USING COUNTING TECHNIQUES TO SOLVE PROBABILITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-techniques-probability',
      title: 'Using Counting Techniques to Solve Probability Problems',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:16px;">Once you can count arrangements, you can find the probability of a specific arrangement using the same idea as any other probability calculation:</p>` +

        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${gr('P(specific arrangement) = number of favourable arrangements ÷ total number of arrangements')}</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('favourable arrangements')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('total arrangements')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('final probability')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to approach these problems</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step 1 — Count the Total</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the ${bl('total number of arrangements')} possible, ignoring any special condition — this is your denominator.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Step 2 — Count the Favourable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Find the number of arrangements that satisfy the ${gr('specific condition')} in the question (using the "together" block trick, or subtracting the "apart" case) — this is your numerator.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Step 3 — Divide</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('P(condition) = favourable ÷ total')}. Simplify the fraction, or write as a decimal if asked.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Don't recalculate from scratch</p>` +
        `<p style="margin:0;color:#1e3a8a;">These problems combine everything from this topic — reuse your work from the counting-principle and permutation sections rather than starting over. The <strong>total arrangements</strong> is usually a plain ${bl('n!')}, while the <strong>favourable arrangements</strong> almost always needs the ${gr('together-block')} or ${gr('repeated-items')} technique.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '5 friends, including Sipho and Thandi, sit randomly in a row of 5 seats. Find the probability that Sipho and Thandi sit next to each other.',
          answer: `${or('P = 2/5')}`,
          steps: [
            `${bl('Total arrangements:')} 5 different people in a row = ${bl('5! = 120')}.`,
            `${gr('Favourable arrangements:')} treat Sipho and Thandi as one block. That gives 4 "items" to arrange (the block + 3 other friends) = 4! ways, then × 2! for the 2 ways to order Sipho and Thandi within the block.`,
            `Calculate favourable: ${gr('4! × 2! = 24 × 2 = 48')}.`,
            `Apply the probability formula: ${or('P = 48 ÷ 120 = 2/5')}.`,
            `<strong>Answer:</strong> ${or('P(Sipho and Thandi together) = 2/5')}.`,
          ],
        },
        {
          question: 'The letters of the word "BANANA" are arranged in a random order. Find the probability that the arrangement starts with the letter B.',
          answer: `${or('P = 1/6')}`,
          steps: [
            `Count the letters: B, A, N, A, N, A — that's 6 letters, with ${re('A repeated 3 times')} and ${re('N repeated 2 times')}.`,
            `${bl('Total arrangements:')} ${bl('6! ÷ (3! × 2!) = 720 ÷ (6 × 2) = 60')}.`,
            `${gr('Favourable arrangements:')} fix B in the first position, then arrange the remaining letters A, N, A, N, A (5 letters, A repeated 3 times, N repeated 2 times) in the other 5 spots: ${gr('5! ÷ (3! × 2!) = 120 ÷ 12 = 10')}.`,
            `Apply the probability formula: ${or('P = 10 ÷ 60 = 1/6')}.`,
            `<strong>Answer:</strong> ${or('P(starts with B) = 1/6')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving a seating-arrangement probability problem step by step, finding total arrangements then favourable arrangements using the together block trick before dividing" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a row of 5 seats with two seats highlighted and joined together to represent the together block, next to a fraction bar showing favourable arrangements over total arrangements" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — addition rule ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'P(A) = 0,4, P(B) = 0,3 and P(A and B) = 0,1. Find P(A or B).',
      checkMode: 'auto',
      correctAnswer: '0.6',
      correctAnswers: ['0.6', '0,6'],
      explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0,4 + 0,3 − 0,1 = 0,6 ✓',
    },

    // ── Q2 Easy — mutually exclusive ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A and B are mutually exclusive events with P(A) = 0,25 and P(B) = 0,45. Find P(A or B).',
      checkMode: 'auto',
      correctAnswer: '0.7',
      correctAnswers: ['0.7', '0,7'],
      explanation: 'Mutually exclusive means P(A and B) = 0, so P(A or B) = P(A) + P(B) = 0,25 + 0,45 = 0,7 ✓',
    },

    // ── Q3 Easy — complementary rule ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: "P(A) = 0,65. Find P(A').",
      checkMode: 'auto',
      correctAnswer: '0.35',
      correctAnswers: ['0.35', '0,35'],
      explanation: "P(A') = 1 − P(A) = 1 − 0,65 = 0,35 ✓",
    },

    // ── Q4 Medium — addition rule with cards ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A card is drawn from a standard deck of 52 cards. Find P(a spade or a red card). (Note: spades are black, so a card cannot be both.)',
      checkMode: 'auto',
      correctAnswer: '3/4',
      correctAnswers: ['3/4', '0.75', '0,75'],
      explanation: 'P(spade) = 13/52, P(red) = 26/52. Spades and red cards cannot overlap, so P(A and B) = 0. P(spade or red) = 13/52 + 26/52 = 39/52 = 3/4 ✓',
    },

    // ── Q5 Medium — at least one via complement ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'The probability that a certain machine part fails a test is 0,05. If 3 parts are tested independently, find the probability that at least one fails.',
      checkMode: 'auto',
      correctAnswer: '0.142625',
      correctAnswers: ['0.142625', '0,142625', '≈0.1426', '≈0,1426', '0.1426', '0,1426'],
      explanation: "P(none fail) = 0,95 × 0,95 × 0,95 = 0,857375. P(at least one fails) = 1 − 0,857375 = 0,142625 ✓",
    },

    // ── Q6 Easy — fundamental counting principle ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A student has 5 shirts and 4 pairs of trousers. How many different outfits (shirt and trousers) can be made?',
      checkMode: 'auto',
      correctAnswer: '20',
      explanation: 'Apply the counting principle: 5 × 4 = 20 outfits ✓',
    },

    // ── Q7 Medium — counting principle, three choices ────────────────────────
    {
      difficulty: 'Medium',
      question: 'A PIN code has 4 digits, each from 0–9, and digits MAY repeat. How many different PIN codes are possible?',
      checkMode: 'auto',
      correctAnswer: '10000',
      correctAnswers: ['10000', '10 000'],
      explanation: 'Each of the 4 positions has 10 possible digits (repetition allowed), so 10 × 10 × 10 × 10 = 10 000 ✓',
    },

    // ── Q8 Medium — counting principle, no repetition ────────────────────────
    {
      difficulty: 'Medium',
      question: 'A committee must elect a chairperson, a secretary and a treasurer from 8 candidates. No person can hold two positions. In how many ways can this be done?',
      checkMode: 'auto',
      correctAnswer: '336',
      explanation: 'Chairperson: 8 choices. Secretary: 7 remaining choices. Treasurer: 6 remaining choices. 8 × 7 × 6 = 336 ✓',
    },

    // ── Q9 Easy — factorial ───────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In how many ways can 5 different keys be arranged on a keyring that is laid out in a straight line (not a circle)?',
      checkMode: 'auto',
      correctAnswer: '120',
      explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 ✓',
    },

    // ── Q10 Medium — factorial, larger n ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In how many different orders can 7 runners finish a race, assuming no ties?',
      checkMode: 'auto',
      correctAnswer: '5040',
      explanation: '7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040 ✓',
    },

    // ── Q11 Hard — permutations with a together restriction ─────────────────
    {
      difficulty: 'Hard',
      question: 'In how many ways can 4 boys and 3 girls be arranged in a row if all 3 girls must sit together?',
      checkMode: 'auto',
      correctAnswer: '720',
      explanation: 'Treat the 3 girls as one block: now there are 5 "items" (block + 4 boys) to arrange = 5! = 120. Multiply by the 3! = 6 ways to arrange the girls within the block. Total = 120 × 6 = 720 ✓',
    },

    // ── Q12 Hard — permutations with an apart restriction ────────────────────
    {
      difficulty: 'Hard',
      question: '5 people, including Amahle and Kagiso, are arranged in a row. In how many ways can this be done if Amahle and Kagiso do NOT sit next to each other?',
      checkMode: 'auto',
      correctAnswer: '72',
      explanation: 'Total arrangements of 5 people: 5! = 120. Arrangements with Amahle and Kagiso together: treat as one block, 4! × 2! = 24 × 2 = 48. Arrangements apart = total − together = 120 − 48 = 72 ✓',
    },

    // ── Q13 Medium — repeated items ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the number of different arrangements of the letters in the word "LETTER".',
      checkMode: 'auto',
      correctAnswer: '180',
      explanation: 'There are 6 letters (L, E, T, T, E, R) with E repeated twice and T repeated twice. Arrangements = 6! ÷ (2! × 2!) = 720 ÷ 4 = 180 ✓',
    },

    // ── Q14 Medium — repeated items, single repeat ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the number of different arrangements of the letters in the word "MISSISSIPPI".',
      checkMode: 'self',
      answer: 'There are 11 letters: M(1), I(4), S(4), P(2). Arrangements = 11! ÷ (4! × 4! × 2!) = 39 916 800 ÷ (24 × 24 × 2) = 39 916 800 ÷ 1152 = 34 650.',
    },

    // ── Q15 Hard — probability using permutations, together ──────────────────
    {
      difficulty: 'Hard',
      question: '6 people, including a married couple, sit randomly in a row of 6 seats. Find the probability that the married couple sits together.',
      checkMode: 'auto',
      correctAnswer: '1/3',
      correctAnswers: ['1/3', '0.333', '0,333', '≈1/3', '≈0.333', '≈0,333'],
      explanation: 'Total arrangements: 6! = 720. Favourable (couple together): treat as one block, 5! × 2! = 120 × 2 = 240. P = 240 ÷ 720 = 1/3 ✓',
    },

    // ── Q16 Hard — probability using permutations, repeated items ────────────
    {
      difficulty: 'Hard',
      question: 'The letters of the word "APPLE" are arranged randomly. Find the probability that the arrangement ends with the letter E.',
      checkMode: 'auto',
      correctAnswer: '1/5',
      correctAnswers: ['1/5', '0.2', '0,2'],
      explanation: 'Total arrangements: 5 letters with P repeated twice, so 5! ÷ 2! = 120 ÷ 2 = 60. Favourable: fix E in the last position, arrange A, P, P, L (4 letters, P repeated twice) in the remaining spots: 4! ÷ 2! = 12. P = 12 ÷ 60 = 1/5 ✓',
    },

    // ── Q17 Hard — combining addition rule and counting ──────────────────────
    {
      difficulty: 'Hard',
      question: 'A password consists of 3 letters (A–Z, no repetition) followed by 2 digits (0–9, no repetition). How many passwords are possible if the password must start with a vowel (A, E, I, O or U)?',
      checkMode: 'self',
      answer: 'First letter (vowel): 5 choices. Second letter: 25 remaining. Third letter: 24 remaining. First digit: 10 choices. Second digit: 9 remaining. Total = 5 × 25 × 24 × 10 × 9 = 270 000.',
    },

    // ── Q18 Medium — mutually exclusive vs not ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A die is rolled once. Let A be "rolling an even number" and B be "rolling a number greater than 4". Are A and B mutually exclusive? Find P(A or B).',
      checkMode: 'self',
      answer: 'A = {2,4,6}, B = {5,6}. They overlap at 6, so A and B are NOT mutually exclusive. P(A) = 3/6, P(B) = 2/6, P(A and B) = 1/6 (rolling a 6). P(A or B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.',
    },

    // ── Q19 Hard — restriction: specific person NOT at an end ─────────────────
    {
      difficulty: 'Hard',
      question: 'In how many ways can 5 people be arranged in a row if one specific person may NOT be at either end of the row?',
      checkMode: 'self',
      answer: 'Total arrangements: 5! = 120. Arrangements with the specific person at an end: 2 choices for which end, then 4! = 24 ways to arrange the rest, giving 2 × 24 = 48. Arrangements with that person NOT at an end = 120 − 48 = 72.',
    },

    // ── Q20 Hard — multi-step: counting principle then probability ───────────
    {
      difficulty: 'Hard',
      question: 'A bag contains tiles numbered 1 to 9. Two tiles are drawn one after another, without replacement, and placed in the order drawn to form a 2-digit number. How many different 2-digit numbers can be formed, and what is the probability that the number formed is greater than 90?',
      checkMode: 'self',
      answer: 'Total 2-digit numbers: 9 choices for the first tile, 8 remaining for the second tile = 9 × 8 = 72 different numbers. Numbers greater than 90 must start with 9: the tens digit is fixed as 9 (1 choice), and any of the remaining 8 tiles can be the units digit, giving 8 favourable outcomes. P(greater than 90) = 8 ÷ 72 = 1/9.',
    },

    // ── Q21 Hard — problem-solving: addition rule with a conditional-probability-derived overlap
    {
      difficulty: 'Hard',
      question: 'At a school, event A is "a learner takes Mathematics" and event B is "a learner takes Physical Science". It is known that P(A) = 0,6 and P(A or B) = 0,75. Of the learners who take Physical Science, exactly one quarter also take Mathematics. Let P(B) = x. Form an equation in x using the addition rule, solve for x, and hence state P(B).',
      checkMode: 'auto',
      correctAnswer: '0.2',
      correctAnswers: ['0.2', '0,2'],
      explanation: 'Since exactly one quarter of Physical Science learners also take Mathematics, P(A and B) = ¼ × P(B) = x/4. Addition rule: P(A or B) = P(A) + P(B) − P(A and B), so 0,75 = 0,6 + x − x/4 = 0,6 + 0,75x. Solving: 0,75x = 0,15, so x = 0,2. P(B) = 0,2 ✓',
    },

    // ── Q22 Hard — problem-solving: combinations combined with conditional probability
    {
      difficulty: 'Hard',
      question: 'A committee of 4 people is chosen at random from a group of 6 men and 5 women. Given that the committee contains at least 3 women, find the probability that the committee consists entirely of women (all 4 members are women).',
      checkMode: 'auto',
      correctAnswer: '1/13',
      correctAnswers: ['1/13', '≈0.0769', '≈0,0769', '0.0769', '0,0769'],
      explanation: 'Number of committees with exactly 3 women and 1 man: C(5,3) × C(6,1) = 10 × 6 = 60. Number of committees with exactly 4 women (0 men): C(5,4) × C(6,0) = 5 × 1 = 5. So the number of committees with at least 3 women = 60 + 5 = 65. "All women" is one of the ways to get "at least 3 women", so P(all women | at least 3 women) = 5 ÷ 65 = 1/13 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 22,
    messages: [
      { minScore: 22, message: 'Outstanding! You have mastered probability.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 22, message: 'Outstanding! You have mastered probability.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — counting principle → permutations → restrictions →
    // repeated items → combinations → combined counting-and-probability
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Fundamental counting principle (Q1–Q3, Easy)
        { difficulty: 'Easy', question: 'A clothing shop sells 4 jackets, 5 shirts and 3 pairs of shoes. How many different jacket-shirt-shoe outfits can be put together?', checkMode: 'auto', correctAnswer: '60', explanation: 'Apply the counting principle: 4 × 5 × 3 = 60 outfits ✓' },
        { difficulty: 'Easy', question: 'A 3-digit code is formed by choosing digits from 1 to 7, with no digit repeated. How many different codes are possible?', checkMode: 'auto', correctAnswer: '210', explanation: 'First digit: 7 choices. Second digit: 6 remaining. Third digit: 5 remaining. 7 × 6 × 5 = 210 ✓' },
        { difficulty: 'Easy', question: 'A number plate has the form: 2 letters (A–Z, no repetition) followed by 4 digits (0–9, no repetition). How many number plates are possible?', checkMode: 'self', answer: 'Letters: 26 × 25 = 650. Digits: 10 × 9 × 8 × 7 = 5040. Total = 650 × 5040 = 3 276 000.' },

        // Block 2 — Permutations, all different objects (Q4–Q6, Easy/Medium)
        { difficulty: 'Easy', question: 'In how many different ways can 7 different paintings be hung in a row on a gallery wall?', checkMode: 'auto', correctAnswer: '5040', explanation: '7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040 ✓' },
        { difficulty: 'Medium', question: 'A race has 9 runners. In how many different ways can 1st, 2nd, 3rd and 4th place be awarded (assuming no ties)?', checkMode: 'auto', correctAnswer: '3024', explanation: '1st place: 9 choices. 2nd: 8 remaining. 3rd: 7 remaining. 4th: 6 remaining. 9 × 8 × 7 × 6 = 3024 ✓' },
        { difficulty: 'Medium', question: 'In how many different ways can 8 different books be arranged on a shelf?', checkMode: 'auto', correctAnswer: '40320', explanation: '8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40 320 ✓' },

        // Block 3 — Permutations with restrictions (Q7–Q10, Medium)
        { difficulty: 'Medium', question: '6 people, including Zanele and Bongani, are arranged in a row. In how many ways can this be done if Zanele and Bongani must sit together?', checkMode: 'auto', correctAnswer: '240', explanation: 'Treat Zanele and Bongani as one block: now there are 5 "items" (block + 4 others) to arrange = 5! = 120. Multiply by the 2! = 2 ways to arrange them within the block. Total = 120 × 2 = 240 ✓' },
        { difficulty: 'Medium', question: '7 people are arranged in a row. In how many ways can this be done if two specific people, Xolani and Palesa, do NOT sit next to each other?', checkMode: 'auto', correctAnswer: '3600', explanation: 'Total arrangements of 7 people: 7! = 5040. Arrangements with Xolani and Palesa together: treat as one block, 6! × 2! = 720 × 2 = 1440. Arrangements apart = total − together = 5040 − 1440 = 3600 ✓' },
        { difficulty: 'Medium', question: '6 people are arranged in a row. One specific person, Thabo, may only sit at either end of the row. In how many ways can the group be arranged?', checkMode: 'auto', correctAnswer: '240', explanation: 'Thabo has 2 choices (left end or right end). The remaining 5 people fill the other 5 seats in 5! = 120 ways. Total = 2 × 120 = 240 ✓' },
        { difficulty: 'Medium', question: 'A group of 3 doctors and 4 nurses is arranged in a row for a photo. In how many ways can they be arranged if all the doctors must stand together AND all the nurses must stand together?', checkMode: 'self', answer: 'Treat the doctors as one block and the nurses as one block: 2 blocks can be arranged in 2! = 2 ways. Within the doctor block: 3! = 6 ways. Within the nurse block: 4! = 24 ways. Total = 2 × 6 × 24 = 288.' },

        // Block 4 — Permutations with repeated items (Q11–Q13, Medium/Hard)
        { difficulty: 'Medium', question: 'Find the number of different arrangements of the letters in the word "PENCIL".', checkMode: 'auto', correctAnswer: '720', explanation: 'All 6 letters of PENCIL are different, so arrangements = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "GEOMETRY".', checkMode: 'auto', correctAnswer: '20160', explanation: 'GEOMETRY has 8 letters with E repeated twice (all others appear once). Arrangements = 8! ÷ 2! = 40 320 ÷ 2 = 20 160 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "STATISTICS".', checkMode: 'self', answer: 'STATISTICS has 10 letters: S(3), T(3), A(1), I(2), C(1). Arrangements = 10! ÷ (3! × 3! × 2!) = 3 628 800 ÷ (6 × 6 × 2) = 3 628 800 ÷ 72 = 50 400.' },

        // Block 5 — Combinations (Q14–Q17, Hard)
        { difficulty: 'Hard', question: 'A team must choose 4 members from a group of 11 candidates, where the order of selection does not matter. In how many ways can the team be chosen?', checkMode: 'auto', correctAnswer: '330', explanation: 'Order does not matter, so use combinations: C(11,4) = 11! ÷ (4! × 7!) = 330 ✓' },
        { difficulty: 'Hard', question: 'A school committee needs 3 boys chosen from 6 boys AND 2 girls chosen from 5 girls. In how many ways can the committee be formed?', checkMode: 'auto', correctAnswer: '200', explanation: 'C(6,3) = 20 ways to choose the boys. C(5,2) = 10 ways to choose the girls. By the counting principle, total = 20 × 10 = 200 ✓' },
        { difficulty: 'Hard', question: 'In how many ways can a hand of 6 cards be chosen from a set of 14 different cards?', checkMode: 'auto', correctAnswer: '3003', explanation: 'Order does not matter, so use combinations: C(14,6) = 14! ÷ (6! × 8!) = 3003 ✓' },
        { difficulty: 'Hard', question: 'A committee of 4 people is chosen from a group of 8 men and 6 women (14 people in total). Find the number of ways to choose the committee if it must include AT LEAST one woman.', checkMode: 'self', answer: 'Total ways to choose any 4 from 14: C(14,4) = 1001. Ways to choose 4 with no women (all men): C(8,4) = 70. At least one woman = total − no women = 1001 − 70 = 931.' },

        // Block 6 — Combined counting and probability (Q18–Q20, Hard)
        { difficulty: 'Hard', question: '5 people, including a married couple, sit randomly in a row of 5 seats. Find the probability that the married couple sits together.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '0.4', '0,4'], explanation: 'Total arrangements: 5! = 120. Favourable (couple together): treat as one block, 4! × 2! = 24 × 2 = 48. P = 48 ÷ 120 = 2/5 ✓' },
        { difficulty: 'Hard', question: 'The letters of the word "LEVEL" are arranged in a random order. Find the probability that the arrangement starts AND ends with the letter L.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10', '3/30', '0.1', '0,1'], explanation: 'LEVEL has 5 letters with L repeated twice and E repeated twice, so total arrangements = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30. Favourable: fix L in the first and last position, then arrange E, V, E (3 letters, E repeated twice) in the middle 3 spots: 3! ÷ 2! = 3. P = 3 ÷ 30 = 1/10 ✓' },
        { difficulty: 'Hard', question: 'A password is formed by arranging 4 different letters chosen from A–Z, with no letter repeated. Find the probability that the password starts with a vowel (A, E, I, O or U).', checkMode: 'self', answer: 'Total passwords: 26 × 25 × 24 × 23 = 358 800. Favourable (starts with a vowel): first letter has 5 choices (vowels), then 25 × 24 × 23 remaining letters = 5 × 25 × 24 × 23 = 69 000. P = 69 000 ÷ 358 800 = 5/26 ≈ 0,192.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered counting techniques and permutations.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the counting principle and permutation sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Fundamental counting principle (Q1–Q3, Easy)
        { difficulty: 'Easy', question: 'A restaurant offers 3 soups, 4 mains and 5 desserts. How many different soup-main-dessert meals can be made?', checkMode: 'auto', correctAnswer: '60', explanation: 'Apply the counting principle: 3 × 4 × 5 = 60 meals ✓' },
        { difficulty: 'Easy', question: 'A 4-digit code is formed by choosing digits from 1 to 9, with no digit repeated. How many different codes are possible?', checkMode: 'auto', correctAnswer: '3024', explanation: 'First digit: 9 choices. Second: 8 remaining. Third: 7 remaining. Fourth: 6 remaining. 9 × 8 × 7 × 6 = 3024 ✓' },
        { difficulty: 'Easy', question: 'A number plate has the form: 3 letters (A–Z, no repetition) followed by 3 digits (0–9, no repetition). How many number plates are possible?', checkMode: 'self', answer: 'Letters: 26 × 25 × 24 = 15 600. Digits: 10 × 9 × 8 = 720. Total = 15 600 × 720 = 11 232 000.' },

        // Block 2 — Permutations, all different objects (Q4–Q6, Easy/Medium)
        { difficulty: 'Easy', question: 'In how many different ways can 6 different ornaments be arranged in a row on a mantelpiece?', checkMode: 'auto', correctAnswer: '720', explanation: '6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 ✓' },
        { difficulty: 'Medium', question: 'A race has 10 sprinters. In how many different ways can 1st, 2nd and 3rd place (the podium) be awarded, assuming no ties?', checkMode: 'auto', correctAnswer: '720', explanation: '1st place: 10 choices. 2nd: 9 remaining. 3rd: 8 remaining. 10 × 9 × 8 = 720 ✓' },
        { difficulty: 'Medium', question: 'In how many different ways can 9 different files be stacked in a pile?', checkMode: 'auto', correctAnswer: '362880', correctAnswers: ['362880', '362 880'], explanation: '9! = 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 362 880 ✓' },

        // Block 3 — Permutations with restrictions (Q7–Q10, Medium)
        { difficulty: 'Medium', question: '7 people are arranged in a row. In how many ways can this be done if 3 specific people must sit together?', checkMode: 'auto', correctAnswer: '720', explanation: 'Treat the 3 specific people as one block: now there are 5 "items" (block + 4 others) to arrange = 5! = 120. Multiply by the 3! = 6 ways to arrange them within the block. Total = 120 × 6 = 720 ✓' },
        { difficulty: 'Medium', question: '6 people are arranged in a row. In how many ways can this be done if two specific people, Karabo and Naledi, do NOT sit next to each other?', checkMode: 'auto', correctAnswer: '480', explanation: 'Total arrangements of 6 people: 6! = 720. Arrangements with Karabo and Naledi together: treat as one block, 5! × 2! = 120 × 2 = 240. Arrangements apart = total − together = 720 − 240 = 480 ✓' },
        { difficulty: 'Medium', question: '7 people are arranged in a row. One specific person, Lindiwe, may only sit at either end of the row. In how many ways can the group be arranged?', checkMode: 'auto', correctAnswer: '1440', explanation: 'Lindiwe has 2 choices (left end or right end). The remaining 6 people fill the other 6 seats in 6! = 720 ways. Total = 2 × 720 = 1440 ✓' },
        { difficulty: 'Medium', question: 'A group of 4 Zulu dancers and 3 Sotho dancers is arranged in a row for a photo. In how many ways can they be arranged if all the Zulu dancers must stand together AND all the Sotho dancers must stand together?', checkMode: 'self', answer: 'Treat the Zulu dancers as one block and the Sotho dancers as one block: 2 blocks can be arranged in 2! = 2 ways. Within the Zulu block: 4! = 24 ways. Within the Sotho block: 3! = 6 ways. Total = 2 × 24 × 6 = 288.' },

        // Block 4 — Permutations with repeated items (Q11–Q13, Medium/Hard)
        { difficulty: 'Medium', question: 'Find the number of different arrangements of the letters in the word "NUMBER".', checkMode: 'auto', correctAnswer: '720', explanation: 'All 6 letters of NUMBER are different, so arrangements = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "CHEESE".', checkMode: 'auto', correctAnswer: '120', explanation: 'CHEESE has 6 letters with E repeated 3 times (all others appear once). Arrangements = 6! ÷ 3! = 720 ÷ 6 = 120 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "ENGINEERING".', checkMode: 'self', answer: 'ENGINEERING has 11 letters: E(3), N(3), G(2), I(2), R(1). Arrangements = 11! ÷ (3! × 3! × 2! × 2!) = 39 916 800 ÷ (6 × 6 × 2 × 2) = 39 916 800 ÷ 144 = 277 200.' },

        // Block 5 — Combinations (Q14–Q17, Hard)
        { difficulty: 'Hard', question: 'A team must choose 5 members from a group of 12 candidates, where the order of selection does not matter. In how many ways can the team be chosen?', checkMode: 'auto', correctAnswer: '792', explanation: 'Order does not matter, so use combinations: C(12,5) = 12! ÷ (5! × 7!) = 792 ✓' },
        { difficulty: 'Hard', question: 'A hiking club needs 2 leaders chosen from 5 senior members AND 3 helpers chosen from 6 junior members. In how many ways can this group be formed?', checkMode: 'auto', correctAnswer: '200', explanation: 'C(5,2) = 10 ways to choose the leaders. C(6,3) = 20 ways to choose the helpers. By the counting principle, total = 10 × 20 = 200 ✓' },
        { difficulty: 'Hard', question: 'In how many ways can a hand of 4 cards be chosen from a set of 13 different cards?', checkMode: 'auto', correctAnswer: '715', explanation: 'Order does not matter, so use combinations: C(13,4) = 13! ÷ (4! × 9!) = 715 ✓' },
        { difficulty: 'Hard', question: 'A sports team of 5 players is chosen from a group of 7 boys and 5 girls (12 people in total). Find the number of ways to choose the team if it must include AT LEAST one boy.', checkMode: 'self', answer: 'Total ways to choose any 5 from 12: C(12,5) = 792. Ways to choose 5 with no boys (all girls): C(5,5) = 1. At least one boy = total − no boys = 792 − 1 = 791.' },

        // Block 6 — Combined counting and probability (Q18–Q20, Hard)
        { difficulty: 'Hard', question: '6 people, including two friends, sit randomly in a row of 6 seats. Find the probability that the two friends do NOT sit together.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '480/720', '0.667', '0,667', '≈2/3', '≈0.667', '≈0,667'], explanation: 'Total arrangements: 6! = 720. Together (as one block): 5! × 2! = 120 × 2 = 240. Apart = 720 − 240 = 480. P(apart) = 480 ÷ 720 = 2/3 ✓' },
        { difficulty: 'Hard', question: 'The letters of the word "NOON" are arranged in a random order. Find the probability that the arrangement starts with the letter N.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6', '0.5', '0,5'], explanation: 'NOON has 4 letters with N repeated twice and O repeated twice, so total arrangements = 4! ÷ (2! × 2!) = 24 ÷ 4 = 6. Favourable: fix N in the first position, then arrange O, O, N (3 letters, O repeated twice) in the remaining spots: 3! ÷ 2! = 3. P = 3 ÷ 6 = 1/2 ✓' },
        { difficulty: 'Hard', question: 'A PIN is formed by arranging 5 different digits chosen from 0–9, with no digit repeated. Find the probability that the PIN ends in the digit 0.', checkMode: 'self', answer: 'Total PINs: 10 × 9 × 8 × 7 × 6 = 30 240. Favourable (ends in 0): last digit is fixed as 0 (1 way), then the first 4 digits are chosen from the remaining 9 digits with no repetition = 9 × 8 × 7 × 6 = 3024. P = 3024 ÷ 30 240 = 1/10 = 0,1.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered counting techniques and permutations.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the counting principle and permutation sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Fundamental counting principle (Q1–Q3, Easy)
        { difficulty: 'Easy', question: 'A café offers 5 starters, 3 mains and 4 drinks. How many different starter-main-drink combinations can be made?', checkMode: 'auto', correctAnswer: '60', explanation: 'Apply the counting principle: 5 × 3 × 4 = 60 combinations ✓' },
        { difficulty: 'Easy', question: 'A 3-letter code is formed by choosing letters from a set of 8 different letters, with no letter repeated. How many different codes are possible?', checkMode: 'auto', correctAnswer: '336', explanation: 'First letter: 8 choices. Second: 7 remaining. Third: 6 remaining. 8 × 7 × 6 = 336 ✓' },
        { difficulty: 'Easy', question: 'A number plate has the form: 2 letters (A–Z, no repetition) followed by 5 digits (0–9, no repetition). How many number plates are possible?', checkMode: 'self', answer: 'Letters: 26 × 25 = 650. Digits: 10 × 9 × 8 × 7 × 6 = 30 240. Total = 650 × 30 240 = 19 656 000.' },

        // Block 2 — Permutations, all different objects (Q4–Q6, Easy/Medium)
        { difficulty: 'Easy', question: 'In how many different ways can 8 different trophies be arranged in a row on a shelf?', checkMode: 'auto', correctAnswer: '40320', correctAnswers: ['40320', '40 320'], explanation: '8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40 320 ✓' },
        { difficulty: 'Medium', question: 'A cricket team of 11 players must select a batting order for the first 5 positions only. In how many different ways can this be done?', checkMode: 'auto', correctAnswer: '55440', correctAnswers: ['55440', '55 440'], explanation: '1st position: 11 choices. 2nd: 10 remaining. 3rd: 9 remaining. 4th: 8 remaining. 5th: 7 remaining. 11 × 10 × 9 × 8 × 7 = 55 440 ✓' },
        { difficulty: 'Medium', question: 'In how many different ways can 10 different playing cards be arranged in a row?', checkMode: 'auto', correctAnswer: '3628800', correctAnswers: ['3628800', '3 628 800'], explanation: '10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 3 628 800 ✓' },

        // Block 3 — Permutations with restrictions (Q7–Q10, Medium)
        { difficulty: 'Medium', question: '8 people are arranged in a row. In how many ways can this be done if two specific people, Musa and Refilwe, must sit together?', checkMode: 'auto', correctAnswer: '10080', correctAnswers: ['10080', '10 080'], explanation: 'Treat Musa and Refilwe as one block: now there are 7 "items" (block + 6 others) to arrange = 7! = 5040. Multiply by the 2! = 2 ways to arrange them within the block. Total = 5040 × 2 = 10 080 ✓' },
        { difficulty: 'Medium', question: '8 people are arranged in a row. In how many ways can this be done if two specific people, Tumi and Sibongile, do NOT sit next to each other?', checkMode: 'auto', correctAnswer: '30240', correctAnswers: ['30240', '30 240'], explanation: 'Total arrangements of 8 people: 8! = 40 320. Arrangements with Tumi and Sibongile together: treat as one block, 7! × 2! = 5040 × 2 = 10 080. Arrangements apart = total − together = 40 320 − 10 080 = 30 240 ✓' },
        { difficulty: 'Medium', question: '5 people are arranged in a row. One specific person, Katlego, may only sit at either end of the row. In how many ways can the group be arranged?', checkMode: 'auto', correctAnswer: '48', explanation: 'Katlego has 2 choices (left end or right end). The remaining 4 people fill the other 4 seats in 4! = 24 ways. Total = 2 × 24 = 48 ✓' },
        { difficulty: 'Medium', question: 'A choir of 5 sopranos and 4 altos is arranged in a row for a photo. In how many ways can they be arranged if all the sopranos must stand together AND all the altos must stand together?', checkMode: 'self', answer: 'Treat the sopranos as one block and the altos as one block: 2 blocks can be arranged in 2! = 2 ways. Within the soprano block: 5! = 120 ways. Within the alto block: 4! = 24 ways. Total = 2 × 120 × 24 = 5760.' },

        // Block 4 — Permutations with repeated items (Q11–Q13, Medium/Hard)
        { difficulty: 'Medium', question: 'Find the number of different arrangements of the letters in the word "FILTER".', checkMode: 'auto', correctAnswer: '720', explanation: 'All 6 letters of FILTER are different, so arrangements = 6! = 720 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "BUBBLE".', checkMode: 'auto', correctAnswer: '120', explanation: 'BUBBLE has 6 letters with B repeated 3 times (all others appear once). Arrangements = 6! ÷ 3! = 720 ÷ 6 = 120 ✓' },
        { difficulty: 'Hard', question: 'Find the number of different arrangements of the letters in the word "ASSASSIN".', checkMode: 'self', answer: 'ASSASSIN has 8 letters: S(4), A(2), I(1), N(1). Arrangements = 8! ÷ (4! × 2!) = 40 320 ÷ (24 × 2) = 40 320 ÷ 48 = 840.' },

        // Block 5 — Combinations (Q14–Q17, Hard)
        { difficulty: 'Hard', question: 'A team must choose 6 members from a group of 13 candidates, where the order of selection does not matter. In how many ways can the team be chosen?', checkMode: 'auto', correctAnswer: '1716', explanation: 'Order does not matter, so use combinations: C(13,6) = 13! ÷ (6! × 7!) = 1716 ✓' },
        { difficulty: 'Hard', question: 'A jar contains 7 red marbles and 4 blue marbles, all different in size. A sample of 4 red marbles AND 2 blue marbles must be selected. In how many ways can this sample be chosen?', checkMode: 'auto', correctAnswer: '210', explanation: 'C(7,4) = 35 ways to choose the red marbles. C(4,2) = 6 ways to choose the blue marbles. By the counting principle, total = 35 × 6 = 210 ✓' },
        { difficulty: 'Hard', question: 'In how many ways can a group of 5 volunteers be chosen from 15 different applicants?', checkMode: 'auto', correctAnswer: '3003', explanation: 'Order does not matter, so use combinations: C(15,5) = 15! ÷ (5! × 10!) = 3003 ✓' },
        { difficulty: 'Hard', question: 'A discussion panel of 4 people is chosen from a group of 6 teachers and 5 parents (11 people in total). Find the number of ways to choose the panel if it must include AT LEAST one teacher.', checkMode: 'self', answer: 'Total ways to choose any 4 from 11: C(11,4) = 330. Ways to choose 4 with no teachers (all parents): C(5,4) = 5. At least one teacher = total − no teachers = 330 − 5 = 325.' },

        // Block 6 — Combined counting and probability (Q18–Q20, Hard)
        { difficulty: 'Hard', question: '7 people, including a married couple, sit randomly in a row of 7 seats. Find the probability that the married couple sits together.', checkMode: 'auto', correctAnswer: '2/7', correctAnswers: ['2/7', '1440/5040', '0.286', '0,286', '≈2/7', '≈0.286', '≈0,286'], explanation: 'Total arrangements: 7! = 5040. Favourable (couple together): treat as one block, 6! × 2! = 720 × 2 = 1440. P = 1440 ÷ 5040 = 2/7 ✓' },
        { difficulty: 'Hard', question: 'The letters of the word "RADAR" are arranged in a random order. Find the probability that the arrangement starts with the letter D.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30', '0.2', '0,2'], explanation: 'RADAR has 5 letters with R repeated twice and A repeated twice, so total arrangements = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30. Favourable: fix D in the first position, then arrange R, A, A, R (4 letters, R repeated twice and A repeated twice) in the remaining spots: 4! ÷ (2! × 2!) = 6. P = 6 ÷ 30 = 1/5 ✓' },
        { difficulty: 'Hard', question: 'A lock code is formed by arranging 4 different digits chosen from 0–9, with no digit repeated. Find the probability that the code ends in an even digit.', checkMode: 'self', answer: 'Total codes: 10 × 9 × 8 × 7 = 5040. Favourable (ends in an even digit): the last digit has 5 choices (0, 2, 4, 6 or 8), then the first 3 digits are chosen from the remaining 9 digits with no repetition = 9 × 8 × 7 = 504, giving 5 × 504 = 2520. P = 2520 ÷ 5040 = 1/2 = 0,5.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered counting techniques and permutations.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the counting principle and permutation sections, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ] satisfies PracticeSet[],
}
