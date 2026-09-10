// ISOM 839 — Practice Question Bank
// Recovered from past ISOM linear programming homework and exam pools
// (Blackboard exports, 2020-2021 semesters), cleaned, verified by re-solving
// every model, and annotated with misconception-tagged distractors.

export type DomainId =
  | 'lp-fundamentals'
  | 'formulation'
  | 'graphical'
  | 'sensitivity'
  | 'solver-applications';

export interface Domain {
  id: DomainId;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}

export const domains: Domain[] = [
  {
    id: 'lp-fundamentals',
    number: '01',
    title: 'LP Foundations',
    shortTitle: 'Foundations',
    description: 'What makes a function linear, what feasible and infeasible mean, and why the optimum always lives at a corner.',
    icon: 'box',
  },
  {
    id: 'formulation',
    number: '02',
    title: 'The Art of Formulation',
    shortTitle: 'Formulation',
    description: 'Translating business language into variables, objectives, and constraints — make-or-buy, investment rules, network sizing.',
    icon: 'type',
  },
  {
    id: 'graphical',
    number: '03',
    title: 'Graphical Method & Geometry',
    shortTitle: 'Graphical',
    description: 'Feasible regions, iso-profit lines, and reading the optimum off a two-variable picture.',
    icon: 'eye',
  },
  {
    id: 'sensitivity',
    number: '04',
    title: 'Slack, Binding & Interpretation',
    shortTitle: 'Sensitivity',
    description: 'Which constraints bite, which have room to spare, and how to read a solver report like an economist.',
    icon: 'search',
  },
  {
    id: 'solver-applications',
    number: '05',
    title: 'Solver Applications',
    shortTitle: 'Applications',
    description: 'Full business cases solved end-to-end — product mix, course planning, portfolio funds, workforce scheduling, media mix.',
    icon: 'terminal',
  },
];

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface DistractorExplanation {
  misconception: string;
  explanation: string;
}

export interface Question {
  id: string;
  number: number;
  domain: DomainId;
  scenario: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  correctExplanation: string;
  distractors: Partial<Record<'A' | 'B' | 'C' | 'D', DistractorExplanation>>;
  tags: string[];
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // DOMAIN 1: LP Foundations
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'Q01',
    number: 1,
    domain: 'lp-fundamentals',
    scenario: 'Linear programming requires every expression in the model — the objective and every constraint — to be linear in the decision variables.',
    question: 'The expression x + 2y² is ___ and the expression 3x + 4y is ___.',
    options: [
      { id: 'A', text: 'linear, linear' },
      { id: 'B', text: 'nonlinear, linear' },
      { id: 'C', text: 'linear, nonlinear' },
      { id: 'D', text: 'nonlinear, nonlinear' },
    ],
    correctAnswer: 'B',
    correctExplanation: 'Linear means every variable appears to the first power, multiplied only by a constant. The y² term makes x + 2y² nonlinear. In 3x + 4y both variables are first-power with constant coefficients — a textbook linear expression.',
    distractors: {
      A: { misconception: 'Squint-test linearity', explanation: 'It looks like a short, simple sum — but the exponent on y² breaks linearity no matter how simple the rest is.' },
      C: { misconception: 'Coefficient confusion', explanation: 'Coefficients like 3 and 4 never make an expression nonlinear. Only what happens to the variables (powers, products, functions) matters.' },
      D: { misconception: 'Over-caution', explanation: '3x + 4y is exactly the shape LP is built for. Declaring everything nonlinear surrenders the tools this course gives you.' },
    },
    tags: ['linearity', 'definitions'],
  },
  {
    id: 'Q02',
    number: 2,
    domain: 'lp-fundamentals',
    scenario: 'Two of the most-used words in optimization describe whether a proposed solution respects the constraints.',
    question: 'An LP solution satisfying some constraints (but not all) is ___. An LP solution satisfying all constraints is ___.',
    options: [
      { id: 'A', text: 'infeasible, feasible' },
      { id: 'B', text: 'feasible, infeasible' },
      { id: 'C', text: 'feasible, feasible' },
      { id: 'D', text: 'infeasible, infeasible' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Feasibility is all-or-nothing: a solution is feasible only if it satisfies every constraint simultaneously. Violate even one and the plan is infeasible — the factory schedule that overbooks a single machine can\'t be executed, no matter how many other constraints it respects.',
    distractors: {
      B: { misconception: 'Reversed vocabulary', explanation: 'This is exactly backwards. Feasible = satisfies all the rules; infeasible = breaks at least one.' },
      C: { misconception: 'Partial credit thinking', explanation: 'Constraints are not graded on a curve. "Mostly satisfied" is still infeasible.' },
      D: { misconception: 'Nothing is ever right', explanation: 'A solution that satisfies every constraint is the definition of feasible.' },
    },
    tags: ['feasibility', 'definitions'],
  },
  {
    id: 'Q03',
    number: 3,
    domain: 'lp-fundamentals',
    scenario: 'Consider the constraint set:\n\n(1) 2X + 4Y ≤ 16\n(2) X, Y ≥ 0',
    question: 'Which of the following solutions is NOT feasible?',
    options: [
      { id: 'A', text: '(X = 4, Y = 2)' },
      { id: 'B', text: '(X = 1, Y = 4)' },
      { id: 'C', text: '(X = 2, Y = 3)' },
      { id: 'D', text: '(X = 2, Y = 2)' },
    ],
    correctAnswer: 'B',
    correctExplanation: 'Plug each point into 2X + 4Y: (1, 4) gives 2 + 16 = 18 > 16, violating constraint (1). Every other point stays within the limit: (4, 2) → 16 ✓ (exactly on the boundary — still feasible), (2, 3) → 16 ✓, (2, 2) → 12 ✓.',
    distractors: {
      A: { misconception: 'Boundary means infeasible', explanation: '2(4) + 4(2) = 16 exactly. Points ON the boundary of a ≤ constraint are feasible — in fact, optima usually live there.' },
      C: { misconception: 'Boundary means infeasible', explanation: '2(2) + 4(3) = 16 exactly satisfies the constraint. Equality is allowed by ≤.' },
      D: { misconception: 'Arithmetic slip', explanation: '2(2) + 4(2) = 12, comfortably inside the limit of 16.' },
    },
    tags: ['feasibility', 'checking solutions'],
  },
  {
    id: 'Q04',
    number: 4,
    domain: 'lp-fundamentals',
    scenario: 'This single theorem is why the graphical method works — and why the simplex algorithm only needs to visit vertices instead of searching an infinite region.',
    question: 'The mathematical theory behind linear optimization states that an optimal solution will lie at a(n) ________ of the feasible region.',
    options: [
      { id: 'A', text: 'corner point' },
      { id: 'B', text: 'interior point or corner point' },
      { id: 'C', text: 'interior point' },
      { id: 'D', text: 'interior point or center' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Because the objective is linear, sliding the iso-profit line in the improving direction always pushes the optimum to the boundary, and along a linear boundary to a corner (extreme point). That is why in Session 1 the bakery\'s optimum landed exactly where the oven and labor lines crossed — and why solvers only search corners.',
    distractors: {
      B: { misconception: 'Hedged answer', explanation: 'An interior point always has feasible neighbors in every direction, so a linear objective can always be improved by moving — the interior can never be uniquely optimal.' },
      C: { misconception: 'Nonlinear intuition', explanation: 'Interior optima are a nonlinear phenomenon (think of a bowl\'s minimum). Linear objectives have no interior "bottom of the bowl."' },
      D: { misconception: 'Averaging instinct', explanation: 'The center of the feasible region is the safest-looking point and essentially never the most profitable one. Optimization pushes to extremes.' },
    },
    tags: ['corner point', 'theory'],
  },
  {
    id: 'Q05',
    number: 5,
    domain: 'lp-fundamentals',
    scenario: 'A planning team is debating whether adding a new regulatory requirement to their cost-minimization model will hurt their optimized costs.',
    question: 'Adding a new constraint to a linear minimization problem may result in:',
    options: [
      { id: 'A', text: 'Either an increase or no change in the optimal value of the objective function' },
      { id: 'B', text: 'Either a decrease or no change in the optimal value of the objective function' },
      { id: 'C', text: 'A decrease in the optimal value of the objective function' },
      { id: 'D', text: 'An increase in the optimal value of the objective function (always)' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'A new constraint can only shrink (or leave unchanged) the feasible region — it never adds options. With fewer options, the minimum cost can only get worse (increase) or stay the same (if the old optimum still satisfies the new rule). This is the formal version of "regulation is never free, but it isn\'t always costly."',
    distractors: {
      B: { misconception: 'Constraints as help', explanation: 'Constraints remove candidate solutions; they cannot reveal cheaper ones that were already feasible. A minimum never improves when options shrink.' },
      C: { misconception: 'Constraints as help', explanation: 'Strictly decreasing is impossible — the previous optimum was already the best over a larger set.' },
      D: { misconception: 'Overcorrection', explanation: 'If the current optimal plan already satisfies the new constraint, nothing changes at all. "May increase" is not "must increase."' },
    },
    tags: ['constraints', 'theory', 'intuition'],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DOMAIN 2: The Art of Formulation
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'Q06',
    number: 6,
    domain: 'formulation',
    scenario: 'Let M be the number of units to MAKE and B be the number of units to BUY. It costs $1.50 to make a unit and $2.50 to buy a unit, and the total number of units for sale must be at least 2,000. You are formulating an LP to minimize total cost.',
    question: 'The objective function is ___.',
    options: [
      { id: 'A', text: 'min 1.5M + 2.5B' },
      { id: 'B', text: 'min 2.5M + 1.5B' },
      { id: 'C', text: 'min 2M + 3B' },
      { id: 'D', text: 'max 1.5M + 2.5B' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Each unit made costs $1.50, so making M units costs 1.5M; each unit bought costs $2.50, so buying B units costs 2.5B. Total cost 1.5M + 2.5B, minimized. Match each coefficient to its own variable and check the direction of optimization — the two most common formulation slips in one line.',
    distractors: {
      B: { misconception: 'Swapped coefficients', explanation: 'This attaches the buy cost to the make variable and vice versa. Always read coefficients as "cost per unit OF THIS variable."' },
      C: { misconception: 'Rounded data', explanation: 'The model must use the actual costs ($1.50, $2.50), not convenient round numbers. Solvers don\'t mind decimals.' },
      D: { misconception: 'Wrong direction', explanation: 'Maximizing cost would tell the firm to make everything as expensively as possible. Cost objectives are minimized.' },
    },
    tags: ['make or buy', 'objective'],
  },
  {
    id: 'Q07',
    number: 7,
    domain: 'formulation',
    scenario: 'Same make-or-buy setting: M = units made ($1.50 each), B = units bought ($2.50 each), and the total number of units for sale must be AT LEAST 2,000.',
    question: 'The demand constraint is ___.',
    options: [
      { id: 'A', text: 'M + B ≤ 2000' },
      { id: 'B', text: 'M + B ≥ 2000' },
      { id: 'C', text: '1.5M + 2.5B ≥ 2000' },
      { id: 'D', text: '1.5M + 2.5B ≤ 2000' },
    ],
    correctAnswer: 'B',
    correctExplanation: '"At least 2,000 units" is a statement about unit counts, so the left side is M + B (units), and "at least" means ≥. Units on both sides must match: units ≥ units.',
    distractors: {
      A: { misconception: 'Flipped inequality', explanation: '≤ would cap sales at 2,000 — the opposite of the requirement. Translate "at least" → ≥, "at most" → ≤, every time.' },
      C: { misconception: 'Unit mismatch', explanation: '1.5M + 2.5B is measured in dollars; 2,000 is measured in units. A constraint must compare like with like.' },
      D: { misconception: 'Unit mismatch + flipped inequality', explanation: 'Dollars on the left, units on the right, and the wrong direction — the cost expression belongs in the objective, not this constraint.' },
    },
    tags: ['make or buy', 'constraints', 'units'],
  },
  {
    id: 'Q08',
    number: 8,
    domain: 'formulation',
    scenario: 'Goldilocks needs at least 10 lbs of gold and at least 20 lbs of silver to pay the rent. Each day in mine 1 she finds 4 lbs of gold and 2 lbs of silver. Each day in mine 2 she finds 3 lbs of gold and 5 lbs of silver. The model minimizes total days worked:\n\nmin X₁ + X₂\ns.t.  aX₁ + bX₂ ≥ 10  (Gold)\n      cX₁ + dX₂ ≥ 20  (Silver)\n      X₁, X₂ ≥ 0',
    question: 'The left-hand-side coefficients are ___.',
    options: [
      { id: 'A', text: 'a = 4, b = 3, c = 2, d = 5' },
      { id: 'B', text: 'a = 4, b = 3, c = 5, d = 2' },
      { id: 'C', text: 'a = 4, b = 2, c = 3, d = 5' },
      { id: 'D', text: 'a = 2, b = 4, c = 5, d = 3' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Each coefficient answers: "how much of THIS row\'s resource does one unit of THIS column\'s variable produce?" Gold row: mine 1 yields 4, mine 2 yields 3 → a = 4, b = 3. Silver row: mine 1 yields 2, mine 2 yields 5 → c = 2, d = 5. Reading the data as a mines × metals table makes this mechanical.',
    distractors: {
      B: { misconception: 'Swapped within a row', explanation: 'This gives mine 1\'s silver yield to mine 2 and vice versa. Each column must stay loyal to its own mine.' },
      C: { misconception: 'Swapped within a column', explanation: 'This mixes mine 1\'s gold and silver yields across rows — the 2 lbs of silver ended up in the gold constraint.' },
      D: { misconception: 'Transposed table', explanation: 'The entire data table has been flipped. When formulations go wrong, it\'s usually here: rows are resources, columns are activities.' },
    },
    tags: ['formulation', 'coefficients'],
  },
  {
    id: 'Q09',
    number: 9,
    domain: 'formulation',
    scenario: 'Let X, Y, and Z be the dollars invested in companies X, Y, and Z. Policy: at most 20% of the total investment can be in company Y.',
    question: 'The correct constraint is ___.',
    options: [
      { id: 'A', text: '0 ≤ 0.2X + 0.8Y + 0.2Z' },
      { id: 'B', text: 'Y ≤ 0.8X + 0.2Y + 0.2Z' },
      { id: 'C', text: '−0.2X + 0.8Y − 0.2Z ≤ 0' },
      { id: 'D', text: '−0.2X + 0.8Y − 0.2Z ≥ 0' },
    ],
    correctAnswer: 'C',
    correctExplanation: 'The trap: "20% of the total investment" means 20% of (X + Y + Z), which is itself made of decision variables. Y ≤ 0.2(X + Y + Z) → Y − 0.2X − 0.2Y − 0.2Z ≤ 0 → −0.2X + 0.8Y − 0.2Z ≤ 0. Percentage-of-total constraints must always be rearranged so all variables sit on one side.',
    distractors: {
      A: { misconception: 'Sign salad', explanation: 'All-positive coefficients ≥ 0 is trivially true for any investment and constrains nothing.' },
      B: { misconception: 'Botched algebra', explanation: 'Starting from Y ≤ 0.2(X + Y + Z), the Y on the right becomes 0.2Y, not 0.2Y with X getting 0.8. The rearrangement was done to the wrong variable.' },
      D: { misconception: 'Flipped inequality', explanation: 'This ≥ version says Y must be AT LEAST 20% of the portfolio — a floor instead of the required cap.' },
    },
    tags: ['investment', 'percentage constraints'],
  },
  {
    id: 'Q10',
    number: 10,
    domain: 'formulation',
    scenario: 'Ivana wishes to invest her inheritance of $200,000 to maximize return while keeping risk relatively low. Options: CDs paying a guaranteed 6%, stocks with expected return 13%, and a money market fund expected to return 8%. Any or all of the $200,000 may be invested; she may hold any mix of the three. Define C, S, M = dollars invested in CDs, stocks, and the money market fund.',
    question: 'Which of the following is the most appropriate constraint?',
    options: [
      { id: 'A', text: '0.06C + 0.13S + 0.08M ≤ 200000' },
      { id: 'B', text: 'C + S + M ≥ 200000' },
      { id: 'C', text: 'C + S + M ≤ 200000' },
      { id: 'D', text: '0.06C + 0.13S + 0.08M ≥ 200000' },
    ],
    correctAnswer: 'C',
    correctExplanation: 'The budget is what limits her: total dollars placed cannot exceed the $200,000 she has, and since "any or all may be invested," the constraint is ≤ rather than =. The return rates belong in the objective (max 0.06C + 0.13S + 0.08M), not in the budget row.',
    distractors: {
      A: { misconception: 'Objective leaked into constraint', explanation: 'This caps her RETURN at $200,000 — a bizarre rule. Return coefficients belong in the objective function.' },
      B: { misconception: 'Flipped inequality', explanation: '≥ would force her to invest at least $200,000 — money she may not want to (or be able to) commit. "Any or all" means up to.' },
      D: { misconception: 'Objective leaked in + flipped', explanation: 'Requiring return ≥ $200,000 on a $200,000 portfolio demands a 100% yield. No constraint should encode a wish.' },
    },
    tags: ['investment', 'budget constraint'],
  },
  {
    id: 'Q11',
    number: 11,
    domain: 'formulation',
    scenario: 'JP Inc. produces regular (R) and high-speed (H) printers monthly. Each regular printer uses 2 units of plastic; each high-speed uses 1 unit. JP is committed to using AT LEAST 5,000 units of plastic per month. Each regular printer needs 5 units of machine time, each high-speed 3 units, and AT MOST 15,000 units of machine time are available. Profits: $50 per regular, $100 per high-speed.',
    question: 'The constraints are ___.',
    options: [
      { id: 'A', text: '2R + H ≥ 5000 (plastic);  5R + 3H ≤ 15000 (machine time);  R, H ≥ 0' },
      { id: 'B', text: '2R + H ≤ 5000 (plastic);  5R + 3H ≥ 15000 (machine time);  R, H ≥ 0' },
      { id: 'C', text: '2R + 5H ≥ 5000 (plastic);  R + 3H ≤ 15000 (machine time);  R, H ≥ 0' },
      { id: 'D', text: 'R + 2H ≥ 5000 (plastic);  3R + 5H ≤ 15000 (machine time);  R, H ≥ 0' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Two readings decide everything. Direction: "committed to using at least" → ≥ for plastic; "total time available is at most" → ≤ for machine. Coefficients: plastic per printer is (2, 1); machine time per printer is (5, 3). Note the unusual ≥ on a resource — a contractual minimum, not an availability cap. Real formulations mix directions.',
    distractors: {
      B: { misconception: 'Resource rows are always ≤', explanation: 'The plastic row is a commitment (use at least), not an availability limit. Pattern-matching "resource → ≤" fails exactly when the business rule is unusual.' },
      C: { misconception: 'Coefficient scramble', explanation: 'The machine-time coefficient of R (5) wandered into the plastic row. Each row must draw its numbers from its own resource.' },
      D: { misconception: 'Variables swapped', explanation: 'These coefficients belong to the other printer: regular uses 2 plastic and 5 machine units, not 1 and 3.' },
    },
    tags: ['product mix', 'inequality direction'],
  },
  {
    id: 'Q12',
    number: 12,
    domain: 'formulation',
    scenario: 'In a transshipment problem, each of 2 factories can ship to any of 3 intermediate distribution centers, and each of the 3 distribution centers can ship to any of 4 stores.',
    question: 'The resulting LP has ___ decision variables.',
    options: [
      { id: 'A', text: '24' },
      { id: 'B', text: '9' },
      { id: 'C', text: '15' },
      { id: 'D', text: '18' },
    ],
    correctAnswer: 'D',
    correctExplanation: 'One decision variable per arc (shipping lane). Factories → DCs: 2 × 3 = 6 arcs. DCs → stores: 3 × 4 = 12 arcs. Total 6 + 12 = 18. Count connections stage by stage, then add.',
    distractors: {
      A: { misconception: 'Multiplied through the network', explanation: '2 × 3 × 4 = 24 counts factory-to-store PATHS. But in a transshipment model, decisions live on individual arcs — flow through a DC is not committed to one final destination when it leaves the factory.' },
      B: { misconception: 'Counted nodes', explanation: '2 + 3 + 4 = 9 is the number of locations. Variables measure flow between locations, not the locations themselves.' },
      C: { misconception: 'Partial count', explanation: 'This misses some arcs — check both stages: 6 in the first, 12 in the second.' },
    },
    tags: ['transshipment', 'network', 'counting variables'],
  },
  {
    id: 'Q13',
    number: 13,
    domain: 'formulation',
    scenario: 'Eddie Kelly is running for reelection as mayor. His campaign manager plans advertising with four media options. Costs and reach per ad: TV $800 / 30,000 people, radio $400 / 22,000, billboards $500 / 24,000, newspapers $100 / 8,000 (max 10 ads of each type). At least six ads must run on TV or radio combined. The amount SPENT on billboards and newspapers together must not exceed the amount SPENT on TV ads. Monthly budget: $15,000. Let T, R, B, N be the number of ads of each type.',
    question: 'Which constraint correctly models "the amount spent on billboards and newspapers together must not exceed the amount spent on TV ads"?',
    options: [
      { id: 'A', text: '500B + 100N ≤ 800T' },
      { id: 'B', text: 'B + N ≤ T' },
      { id: 'C', text: '500B + 100N ≥ 800T' },
      { id: 'D', text: '500B + 100N ≤ 800' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'The rule compares dollars, so each variable must be converted to spend: billboards cost 500B, newspapers 100N, TV 800T. Spend-vs-spend, with ≤ for "must not exceed." Constraints with variables on both sides are perfectly legal — solvers just rearrange them to 500B + 100N − 800T ≤ 0.',
    distractors: {
      B: { misconception: 'Counting ads instead of dollars', explanation: 'Ten newspaper ads cost $1,000 while two TV ads cost $1,600 — comparing counts wildly misrepresents spend. Read what quantity the business rule is about.' },
      C: { misconception: 'Flipped inequality', explanation: 'This forces billboard + newspaper spend to be AT LEAST the TV spend — the reverse of the campaign\'s rule.' },
      D: { misconception: 'Dropped the variable', explanation: 'The right side is the spend on T television ads (800T), not the price of one ad. A constraint against a constant caps the wrong thing.' },
    },
    tags: ['media mix', 'spend constraints', 'both-sides constraints'],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DOMAIN 3: Graphical Method & Geometry
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'Q14',
    number: 14,
    domain: 'graphical',
    scenario: 'Consider the LP maximization problem:\n\nmax 4X + Y\ns.t.  X + 2Y ≤ 4   (1)\n      Y ≤ 1        (2)\n      X, Y ≥ 0',
    question: 'The optimal objective value is ___.',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '16' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'B',
    correctExplanation: 'Check the corners. X is worth 4 per unit versus 1 for Y, and constraint (1) charges X only one unit of capacity versus two for Y — so push X. At Y = 0, constraint (1) allows X = 4, giving 4(4) + 0 = 16. Other corners: (0,1) → 1; (2,1) → 9; (0,0) → 0. The best corner wins: 16.',
    distractors: {
      A: { misconception: 'Stopped short', explanation: 'Likely evaluated X = 3. The binding constraint X + 2Y ≤ 4 allows X = 4 when Y = 0 — always push to the boundary.' },
      C: { misconception: 'Split the difference', explanation: 'An interior-ish point like (2, 0) gives 8, but linear objectives always improve toward a corner. Check corners, not compromises.' },
      D: { misconception: 'Wrong corner', explanation: '(2, 1) — the intersection of the two constraints — gives 4(2) + 1 = 9. It\'s A corner, but corner-point optimality means checking ALL corners and taking the best.' },
    },
    tags: ['corner points', 'solving'],
  },
  {
    id: 'Q15',
    number: 15,
    domain: 'graphical',
    scenario: 'Consider the LP minimization problem:\n\nmin 20X + 30Y\ns.t.  2X + 4Y ≤ 800\n      6X + 3Y ≥ 300\n      X, Y ≥ 0',
    question: 'What is the optimal solution (X, Y)?',
    options: [
      { id: 'A', text: '(50, 0)' },
      { id: 'B', text: '(400, 0)' },
      { id: 'C', text: '(0, 50)' },
      { id: 'D', text: '(0, 100)' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Minimization pushes DOWN against the ≥ constraint, 6X + 3Y ≥ 300. Cheapest way to cover it: X provides 6 units of coverage per $20 (0.30/$) versus Y\'s 3 per $30 (0.10/$) — X dominates. Set Y = 0: 6X = 300 → X = 50, cost $1,000. Compare corner (0, 100): cost $3,000. The ≤ constraint isn\'t even close to binding.',
    distractors: {
      B: { misconception: 'Maximized by accident', explanation: '(400, 0) drives X to the ≤ capacity limit — that\'s what a MAXIMIZER would do. A minimizer stops the moment the ≥ requirement is met.' },
      C: { misconception: 'Infeasibility missed', explanation: '(0, 50) gives 6(0) + 3(50) = 150 < 300 — it violates the requirement constraint. Feasibility check comes before cost check.' },
      D: { misconception: 'Wrong corner', explanation: '(0, 100) is feasible (3 × 100 = 300 ✓) but costs $3,000 — three times the cost of covering the requirement with X instead.' },
    },
    tags: ['minimization', 'corner points'],
  },
  {
    id: 'Q16',
    number: 16,
    domain: 'graphical',
    scenario: 'Two models of a product — Regular (X) and Deluxe (Y) — are produced. The formulation is:\n\nMaximize profit 50X + 60Y\ns.t.  8X + 10Y ≤ 800   (labor hours)\n      X + Y ≤ 120      (total units demanded)\n      4X + 5Y ≤ 500    (raw materials)\n      X, Y ≥ 0',
    question: 'What is the optimal number of Regular (X) models to produce?',
    options: [
      { id: 'A', text: '50' },
      { id: 'B', text: '100' },
      { id: 'C', text: '80' },
      { id: 'D', text: '120' },
    ],
    correctAnswer: 'B',
    correctExplanation: 'Sneaky structure: the labor row (8X + 10Y ≤ 800) and materials row (4X + 5Y ≤ 500) are proportional — labor is exactly 2× materials but with a tighter limit (800 < 2 × 500), so materials can never bind. Per labor hour, X earns 50/8 = 6.25 versus Y\'s 60/10 = 6.00 — X wins. Push X: 8X = 800 → X = 100 (demand 100 ≤ 120 ✓). Profit $5,000.',
    distractors: {
      A: { misconception: 'Ratio guess', explanation: 'A plausible-looking half-capacity answer, but no binding constraint stops X at 50. Solve the binding row: 8X = 800.' },
      C: { misconception: 'Wrong binding constraint', explanation: '80 comes from treating Y\'s labor limit or a blend as binding. Compare profit per labor hour first: X\'s 6.25 beats Y\'s 6.00.' },
      D: { misconception: 'Demand cap as target', explanation: '120 satisfies demand but needs 960 labor hours — only 800 exist. Feasibility trumps demand.' },
    },
    tags: ['product mix', 'binding constraints', 'solving'],
  },
  {
    id: 'Q17',
    number: 17,
    domain: 'graphical',
    scenario: 'Three LPs were formulated earlier: Electro Corporation (two ≤ resource constraints plus non-negativity), Western College (all ≥ requirement constraints), and MSA Corporation (an equality labor constraint 20X₁ + 25X₂ = 800 plus minimum-production floors).',
    question: 'The feasible regions of the three LPs — Electro, Western College, and MSA — are ___, ___, and ___, respectively.',
    options: [
      { id: 'A', text: 'polygon, unbounded area, line segment' },
      { id: 'B', text: 'line segment, polygon, unbounded area' },
      { id: 'C', text: 'unbounded area, line segment, polygon' },
      { id: 'D', text: 'polygon, line segment, unbounded area' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'The constraint types dictate the geometry. Electro: ≤ caps in every direction close the region into a bounded polygon. Western: only ≥ floors — you can always offer MORE courses, so the region runs off to infinity (unbounded). MSA: the equality 20X₁ + 25X₂ = 800 collapses the region onto a line, and the floors X₁ ≥ 10, X₂ ≥ 15 trim it to a segment.',
    distractors: {
      B: { misconception: 'Shuffled matching', explanation: 'Ceilings (≤) bound a polygon, floors-only (≥) leave it unbounded, an equality collapses to a line. Match the geometry to the constraint types, not the company names.' },
      C: { misconception: 'Reversed logic', explanation: 'Exactly backwards: ≤ constraints CLOSE a region; ≥-only constraints leave it OPEN.' },
      D: { misconception: 'Equality overlooked', explanation: 'MSA\'s full-employment equality is what creates the line segment — it\'s the strongest geometric restriction of the three.' },
    },
    tags: ['feasible region', 'geometry'],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DOMAIN 4: Slack, Binding & Interpretation
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'Q18',
    number: 18,
    domain: 'sensitivity',
    scenario: 'Same LP as before:\n\nmax 4X + Y\ns.t.  X + 2Y ≤ 4   (1)\n      Y ≤ 1        (2)\n      X, Y ≥ 0\n\nThe optimal solution is (X, Y) = (4, 0).',
    question: 'With the optimal solution given, ___.',
    options: [
      { id: 'A', text: 'constraint (1) has a positive slack' },
      { id: 'B', text: 'constraint (2) has a positive slack' },
      { id: 'C', text: 'constraint (2) has a positive surplus' },
      { id: 'D', text: 'constraint (1) has a positive surplus' },
    ],
    correctAnswer: 'B',
    correctExplanation: 'At (4, 0): constraint (1) → 4 + 0 = 4 = RHS, binding, zero slack. Constraint (2) → 0 ≤ 1, with 1 unit of unused room = positive slack. Vocabulary matters: SLACK is unused room in a ≤ constraint; SURPLUS is the overshoot beyond a ≥ constraint. Both here are ≤, so "surplus" doesn\'t apply.',
    distractors: {
      A: { misconception: 'Binding vs slack confusion', explanation: 'Constraint (1) is used to the hilt (4 = 4) — that\'s binding, the opposite of slack. Slack is what\'s left over.' },
      C: { misconception: 'Slack/surplus vocabulary swap', explanation: 'The quantity is right (1 unit of room) but the word is wrong: surplus belongs to ≥ constraints only.' },
      D: { misconception: 'Everything scrambled', explanation: 'Constraint (1) is a binding ≤ constraint: no slack, and surplus isn\'t even the right species of leftover.' },
    },
    tags: ['slack', 'surplus', 'binding'],
  },
  {
    id: 'Q19',
    number: 19,
    domain: 'sensitivity',
    scenario: 'High Note Sound Co. produces CD players (X₁, $100 unit profit) and receivers (X₂, $50). The solver output shows optimal values X₁ = 20, X₂ = 0, total profit $2,000, with:\n\n(1) Electrician hours: coefficients (2, 4), LHS value 40, RHS 80\n(2) Audio technician hours: coefficients (3, 1), LHS value 60, RHS 60',
    question: 'Constraint (1) is ___ and constraint (2) is ___.',
    options: [
      { id: 'A', text: 'nonbinding, nonbinding' },
      { id: 'B', text: 'binding, nonbinding' },
      { id: 'C', text: 'nonbinding, binding' },
      { id: 'D', text: 'binding, binding' },
    ],
    correctAnswer: 'C',
    correctExplanation: 'Read LHS against RHS. Constraint (1): 40 of 80 electrician hours used — 40 hours of slack, nonbinding. Constraint (2): 60 of 60 technician hours used — binding; this is the bottleneck. Managerial payoff: hiring more electricians is worthless (their shadow price is zero); audio technician time is what limits profit.',
    distractors: {
      A: { misconception: 'Didn\'t compare LHS to RHS', explanation: 'Constraint (2) uses every available hour (60 = 60) — the definition of binding.' },
      B: { misconception: 'Rows swapped', explanation: 'It\'s the technician constraint that\'s exhausted, not the electricians — half their hours sit unused.' },
      D: { misconception: 'Everything binds at optimum', explanation: 'Optima frequently leave some resources idle. Only the constraints that actually cross the optimal corner bind — here, one of the two.' },
    },
    tags: ['binding', 'solver output', 'bottleneck'],
  },
  {
    id: 'Q20',
    number: 20,
    domain: 'sensitivity',
    scenario: 'Laker Steel has a product-mix LP:\n\nmax 30X₁ + 10X₂ + 20X₃\ns.t.  2X₁ + 2X₂ + X₃ ≤ 60    (1) Labor hours\n      3X₁ + 3X₂ + 2X₃ ≤ 120  (2) Pounds of material\n      X₂ ≥ 10                (3) Product-2 minimum\n      X₁, X₂, X₃ ≥ 0\n\nThe optimal solution is (X₁* = 0, X₂* = 10, X₃* = 40).',
    question: 'For constraint (1): the labor hours used, hours available, and hours unused are ___, ___, and ___.',
    options: [
      { id: 'A', text: '60, 60, 0' },
      { id: 'B', text: '110, 120, 10' },
      { id: 'C', text: '60, 120, 60' },
      { id: 'D', text: '40, 60, 20' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Plug the optimum into row (1): 2(0) + 2(10) + 1(40) = 60 hours used, against 60 available — slack 0, binding. (For contrast, the materials row uses 3(0) + 3(10) + 2(40) = 110 of 120, slack 10.) "Used, available, unused" is exactly "LHS value, RHS, slack" — learn to read a model like a solver report.',
    distractors: {
      B: { misconception: 'Read the wrong row', explanation: '110/120/10 is constraint (2), the materials row. The question asks about labor.' },
      C: { misconception: 'Mixed rows', explanation: 'Labor\'s usage (60) paired with materials\' availability (120) — each number must come from the same constraint row.' },
      D: { misconception: 'Dropped a term', explanation: 'Forgetting X₃\'s 40 hours (coefficient 1) gives 20 used — but every variable in the row contributes to the LHS.' },
    },
    tags: ['slack', 'LHS-RHS', 'interpretation'],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DOMAIN 5: Solver Applications
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'Q21',
    number: 21,
    domain: 'solver-applications',
    scenario: 'Electro Corporation manufactures air conditioners (X₁) and fans (X₂). Each air conditioner takes 3 hours of wiring and 2 hours of drilling; each fan takes 2 hours of wiring and 1 hour of drilling. At most 240 wiring hours and 140 drilling hours are available. Profits: $25 per air conditioner, $15 per fan. The model skeleton is:\n\nmax pX₁ + qX₂\ns.t.  aX₁ + bX₂ ≤ u  (Wiring)\n      cX₁ + dX₂ ≤ v  (Drilling)\n      X₁, X₂ ≥ 0',
    question: 'The objective coefficients (p, q) and right-hand sides (u, v) are ___.',
    options: [
      { id: 'A', text: 'p = 25, q = 15, u = 240, v = 140' },
      { id: 'B', text: 'p = 15, q = 25, u = 240, v = 140' },
      { id: 'C', text: 'p = 25, q = 15, u = 140, v = 240' },
      { id: 'D', text: 'p = 3, q = 2, u = 240, v = 140' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Objective coefficients are profits per unit of each variable: air conditioners $25 (p), fans $15 (q). RHS values are the resource availabilities in row order: wiring 240 (u), drilling 140 (v). Money in the objective, capacity on the right-hand side — that separation is the discipline of formulation.',
    distractors: {
      B: { misconception: 'Swapped profits', explanation: 'This pays the fan\'s profit to the air conditioner. p multiplies X₁, so it must be X₁\'s own profit: $25.' },
      C: { misconception: 'Swapped RHS', explanation: 'Wiring availability (240) must sit on the wiring row. Swapping RHS values quietly makes the drilling shop bigger than it is.' },
      D: { misconception: 'Hours in the objective', explanation: '3 and 2 are wiring hours — technology data that belongs in the constraint matrix, not profit data for the objective.' },
    },
    tags: ['product mix', 'formulation', 'Electro'],
  },
  {
    id: 'Q22',
    number: 22,
    domain: 'solver-applications',
    scenario: 'The dean of Western College must plan course offerings. At least 30 undergraduate and 20 graduate courses must be offered, and contracts require at least 60 courses in total. Each undergraduate course costs $2,500 in faculty wages; each graduate course costs $3,000. The model skeleton is:\n\nmin pX₁ + qX₂\ns.t.  X₁ ≥ u        (Undergraduate)\n      X₂ ≥ v        (Graduate)\n      X₁ + X₂ ≥ w   (Total courses)\n      X₁, X₂ ≥ 0',
    question: 'The values (p, q, u, v, w) are ___.',
    options: [
      { id: 'A', text: 'p = 2500, q = 3000, u = 30, v = 20, w = 60' },
      { id: 'B', text: 'p = 3000, q = 2500, u = 30, v = 20, w = 60' },
      { id: 'C', text: 'p = 2500, q = 3000, u = 20, v = 30, w = 60' },
      { id: 'D', text: 'p = 2500, q = 3000, u = 60, v = 30, w = 20' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Costs to the objective: undergrad $2,500 (p), grad $3,000 (q). Floors to the right-hand sides in row order: 30 undergrad (u), 20 grad (v), 60 total (w). Bonus insight: at the optimum the college offers 40 undergrad + 20 grad = 60 courses for $160,000 — the total-courses floor forces 10 extra undergrad sections because they\'re the cheaper way to reach 60.',
    distractors: {
      B: { misconception: 'Swapped costs', explanation: 'p belongs to X₁ (undergraduate), which costs $2,500 — not the graduate rate.' },
      C: { misconception: 'Swapped floors', explanation: 'The 30-course floor is the UNDERGRADUATE requirement (u). Swapping floors changes which program the dean over-staffs.' },
      D: { misconception: 'RHS shuffle', explanation: 'This puts the total-courses floor (60) on the undergraduate row, demanding twice the required undergrad sections.' },
    },
    tags: ['course planning', 'minimization', 'Western College'],
  },
  {
    id: 'Q23',
    number: 23,
    domain: 'solver-applications',
    scenario: 'MSA Corporation makes Alpha ($1,200 profit) and Beta ($1,800 profit) minicomputers. At least 10 Alphas and at least 15 Betas must be produced next month. Five technicians work 160 hours each, and management insists on FULL employment of all 800 hours. Assembly takes 20 labor hours per Alpha and 25 per Beta. The model skeleton is:\n\nmax pX₁ + qX₂\ns.t.  X₁ ≥ u                 (Alphas)\n      X₂ ≥ v                 (Betas)\n      20X₁ + 25X₂ = 800      (Total labor hours)\n      X₁, X₂ ≥ 0',
    question: 'The values (p, q, u, v) are ___.',
    options: [
      { id: 'A', text: 'p = 1200, q = 1800, u = 10, v = 15' },
      { id: 'B', text: 'p = 1800, q = 1200, u = 10, v = 15' },
      { id: 'C', text: 'p = 1200, q = 1800, u = 15, v = 10' },
      { id: 'D', text: 'p = 20, q = 25, u = 10, v = 15' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Profits to the objective: Alpha $1,200 (p), Beta $1,800 (q). Minimum-production floors to the RHS: 10 Alphas (u), 15 Betas (v). The distinctive feature is the EQUALITY labor constraint — full employment means exactly 800 hours, which (with the floors) collapses the feasible region to a line segment.',
    distractors: {
      B: { misconception: 'Swapped profits', explanation: 'Alpha earns $1,200; giving it Beta\'s $1,800 rewards the wrong product.' },
      C: { misconception: 'Swapped floors', explanation: 'The 10-unit floor is Alpha\'s, the 15-unit floor is Beta\'s. Swapped floors quietly change which product the plan protects.' },
      D: { misconception: 'Hours in the objective', explanation: '20 and 25 are labor hours per unit — they belong in the labor constraint (where they already appear), not the objective.' },
    },
    tags: ['product mix', 'equality constraint', 'MSA'],
  },
  {
    id: 'Q24',
    number: 24,
    domain: 'solver-applications',
    scenario: 'Bavika Funds must invest $200,000 for a client. Funds available: a stock fund (risk score 12, return 10%) and a money market fund (risk score 5, return 5%). The client requires a total return of at least $14,000 and at least $40,000 in the money market fund. The LP minimizes total risk:\n\nmin 12S + 5M\ns.t.  S + M = 200000          (1) Full investment\n      0.1S + 0.05M ≥ 14000    (2) Return floor\n      M ≥ 40000               (3) Money market minimum\n      S, M ≥ 0',
    question: 'At the optimum, the dollars in the stock fund and money market fund are ___.',
    options: [
      { id: 'A', text: 'S = $80,000, M = $120,000' },
      { id: 'B', text: 'S = $120,000, M = $80,000' },
      { id: 'C', text: 'S = $160,000, M = $40,000' },
      { id: 'D', text: 'S = $200,000, M = $0' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'To minimize risk, hold as little of the risky stock fund as the return floor allows. Substitute M = 200000 − S into the return constraint: 0.1S + 0.05(200000 − S) ≥ 14000 → 0.05S ≥ 4000 → S ≥ 80000. Take the minimum: S = 80,000, M = 120,000, total risk 1,560,000, return exactly $14,000 (binding).',
    distractors: {
      B: { misconception: 'Swapped the answer', explanation: 'With S = 120,000 the return is $16,000 — more return than required, bought with unnecessary risk. A risk-minimizer never overshoots the return floor.' },
      C: { misconception: 'Solved the wrong objective', explanation: 'This is the optimum of the MAX-return version of this problem (Q25). Under min-risk, pushing S to 160,000 is exactly wrong.' },
      D: { misconception: 'Ignored constraints', explanation: 'All-stock violates the $40,000 money market minimum — and maximizes risk rather than minimizing it.' },
    },
    tags: ['portfolio', 'minimization', 'Bavika'],
  },
  {
    id: 'Q25',
    number: 25,
    domain: 'solver-applications',
    scenario: 'Bavika Funds reversed the objective: now MAXIMIZE total return, subject to a risk budget. Total risk score must be at most 2,200,000 (an average of 11 per dollar):\n\nmax 0.1S + 0.05M\ns.t.  S + M = 200000          (1) Full investment\n      12S + 5M ≤ 2200000      (2) Risk cap\n      M ≥ 40000               (3) Money market minimum\n      S, M ≥ 0',
    question: 'At the optimum, the dollars in the stock fund and money market fund are ___.',
    options: [
      { id: 'A', text: 'S = $160,000, M = $40,000' },
      { id: 'B', text: 'S = $80,000, M = $120,000' },
      { id: 'C', text: 'S = $171,429, M = $28,571' },
      { id: 'D', text: 'S = $200,000, M = $0' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Now the stock fund is the return engine, so push S as high as the constraints allow. The money market minimum caps S at 200000 − 40000 = 160,000. Risk check: 12(160000) + 5(40000) = 2,120,000 ≤ 2,200,000 ✓ — the risk cap has slack; constraint (3) is what binds. Return: $18,000. Notice how flipping the objective flips which constraint binds.',
    distractors: {
      B: { misconception: 'Solved the wrong objective', explanation: 'This is the MIN-risk answer (Q24). Under max-return it leaves $4,000 of achievable return on the table.' },
      C: { misconception: 'Wrong binding constraint', explanation: 'S = 171,429 comes from making the risk cap bind (7S ≤ 1,200,000) — but the money market floor cuts in first at S = 160,000. Always check WHICH constraint binds.' },
      D: { misconception: 'Ignored constraints', explanation: 'All-stock violates both the $40,000 money market minimum and the risk cap (2,400,000 > 2,200,000).' },
    },
    tags: ['portfolio', 'binding constraints', 'Bavika'],
  },
  {
    id: 'Q26',
    number: 26,
    domain: 'solver-applications',
    scenario: 'Chang Restaurant is open 24 hours. Waiters start at 3 AM, 7 AM, 11 AM, 3 PM, 7 PM, or 11 PM and work 8-hour shifts (each covers two consecutive 4-hour periods). Minimum staff needed: 3 AM–7 AM: 3, 7 AM–11 AM: 12, 11 AM–3 PM: 16, 3 PM–7 PM: 9, 7 PM–11 PM: 11, 11 PM–3 AM: 4. Let Xᵢ = waiters starting in period i. The LP minimizes total waiters hired subject to covering every period.',
    question: 'The minimum total number of waiters needed for one day\'s operation is ___.',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '28' },
      { id: 'C', text: '30' },
      { id: 'D', text: '55' },
    ],
    correctAnswer: 'C',
    correctExplanation: 'Each period is covered by starters in that period plus starters from the previous one: Xᵢ₋₁ + Xᵢ ≥ requirement. A lower bound: periods 2, 4, 6 are covered by disjoint pairs (X₁+X₂) + (X₃+X₄) + (X₅+X₆)… but the tighter grouping (X₂+X₃) + (X₄+X₅) + (X₆+X₁) ≥ 16 + 11 + 3 = 30 proves at least 30 are needed — and a schedule like (0, 12, 4, 5, 6, 3) achieves exactly 30. Covering models like this run every hospital, call center, and restaurant chain.',
    distractors: {
      A: { misconception: 'Loose lower bound', explanation: '25 comes from the weaker period grouping (12 + 9 + 4). The binding grouping — through the 16-waiter lunch rush — forces 30.' },
      B: { misconception: 'Near miss', explanation: 'No feasible schedule covers the lunch peak and evening rush with 28. The overlapping-shift structure forces 30.' },
      D: { misconception: 'Summed all requirements', explanation: '3+12+16+9+11+4 = 55 ignores that one waiter covers TWO periods. Shift overlap is the entire point of the scheduling model.' },
    },
    tags: ['workforce scheduling', 'covering', 'Chang'],
  },
  {
    id: 'Q27',
    number: 27,
    domain: 'solver-applications',
    scenario: 'The Westchester Chamber of Commerce promotes its seminar program to maximize total audience. Media data — TV: 100,000 audience per ad, $2,000 per ad; radio: 18,000 per ad, $300; newspaper: 40,000 per ad, $600. Rules: (1) total cost at most $18,200; (2) at most 10 TV ads; (3) at most 20 radio ads; (4) at most 10 newspaper ads; (5) radio ads at most 50% of the total number of ads; (6) TV at least 10% of the total number of ads.',
    question: 'At the optimum, the number of TV, radio, and newspaper ads is ___.',
    options: [
      { id: 'A', text: 'TV = 4, radio = 14, newspaper = 10' },
      { id: 'B', text: 'TV = 10, radio = 20, newspaper = 10' },
      { id: 'C', text: 'TV = 9, radio = 0, newspaper = 0' },
      { id: 'D', text: 'TV = 0, radio = 20, newspaper = 10' },
    ],
    correctAnswer: 'A',
    correctExplanation: 'Audience per dollar: radio 60/$ and newspaper 66.7/$ beat TV\'s 50/$ — so the solver fills newspaper to its cap (10), buys radio up to the 50%-of-total policy limit (14 of 28 ads), and spends the rest on TV (4 ads). Budget exactly exhausted: 8,000 + 4,200 + 6,000 = $18,200. Total audience 1,052,000. The interesting economics: TV ads appear only because the balance rules force them.',
    distractors: {
      B: { misconception: 'Ignored the budget', explanation: 'Maxing every cap costs 20,000 + 6,000 + 6,000 = $32,000 — nearly double the $18,200 budget.' },
      C: { misconception: 'Best per-ad, not per-dollar', explanation: 'TV reaches the most people PER AD but the fewest PER DOLLAR (50 vs radio\'s 60 and newspaper\'s 66.7). $18,200 of TV-only reaches ~910,000 — and violates the radio-balance intent anyway.' },
      D: { misconception: 'Ignored the TV floor', explanation: 'Zero TV violates rule (6): TV must be at least 10% of all ads. Policy constraints bind even when they cost audience.' },
    },
    tags: ['media mix', 'per-dollar reasoning', 'Westchester'],
  },
];

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

export function getDomainQuestions(domainId: DomainId): Question[] {
  return questions.filter((q) => q.domain === domainId);
}

export function getDomain(id: DomainId): Domain | undefined {
  return domains.find((d) => d.id === id);
}
