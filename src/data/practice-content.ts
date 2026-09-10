// Per-question teaser lines shown on domain pages — a hook, never a spoiler.

const teasers: Record<string, string> = {
  Q01: 'One tiny exponent decides whether your whole model is an LP.',
  Q02: 'The two most-used words in optimization — do you have them the right way round?',
  Q03: 'Four candidate plans, one broken constraint. Boundary points included.',
  Q04: 'The one theorem that makes the graphical method — and the simplex algorithm — possible.',
  Q05: 'Your compliance team adds a new rule to the cost model. What can happen to the optimum?',
  Q06: 'Make for $1.50 or buy for $2.50 — write the objective without swapping the coefficients.',
  Q07: '"At least 2,000 units" — units or dollars on the left-hand side?',
  Q08: 'Two mines, two metals, four coefficients. Keep the data table straight.',
  Q09: '"At most 20% of the total" — the total is made of variables. Now what?',
  Q10: 'A $200,000 inheritance and three funds. Which constraint is actually the budget?',
  Q11: 'A resource constraint with ≥? When contracts, not capacity, set the direction.',
  Q12: '2 factories, 3 DCs, 4 stores — how many decision variables? (It isn\'t 24.)',
  Q13: 'Spend-versus-spend: a constraint with decision variables on both sides.',
  Q14: 'Push toward the best corner — but which corner is best?',
  Q15: 'Minimization with a ≥ floor: stop the moment the requirement is met.',
  Q16: 'Three constraints, but one can never bind. Spot the redundant row.',
  Q17: 'Polygon, unbounded area, or line segment — the constraint types decide.',
  Q18: 'Slack or surplus? The vocabulary distinction solver reports assume you know.',
  Q19: 'Read the solver output: which department is the real bottleneck?',
  Q20: 'Used, available, unused — translate a solution back into a resource story.',
  Q21: 'Profits in the objective, capacities on the right — file every number where it belongs.',
  Q22: 'Cheapest way to satisfy three floors at once. Where does each number go?',
  Q23: 'Full employment turns a resource limit into an equality — and the region into a segment.',
  Q24: 'Minimize risk while clearing a return floor. How little stock can you hold?',
  Q25: 'Same funds, opposite objective — watch the binding constraint switch.',
  Q26: 'Six shifts, overlapping coverage. Why 55 waiters collapses to 30.',
  Q27: 'Best audience per ad vs best audience per dollar — the solver knows the difference.',
};

export function teaserFor(questionId: string): string {
  return teasers[questionId] || '';
}
