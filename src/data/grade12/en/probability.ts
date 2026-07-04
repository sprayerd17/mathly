import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

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
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered probability.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered probability.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
