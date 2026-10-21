// Gurobi's open modeling examples (Apache 2.0), sorted by the business decision they make.
// Source: https://gurobi.github.io/modeling-examples/ — each link opens the notebook in Colab.
// `session` is the course session whose pattern the example uses; `note` flags license or setup caveats.

const COLAB = 'https://colab.research.google.com/github/Gurobi/modeling-examples/blob/master/';

export interface GurobiExample {
  title: string;
  path: string;        // folder/notebook.ipynb inside the repo
  decision: string;    // one line: the decision the model makes
  session: string;     // where in the course the pattern lives
  level: 'Starter' | 'Intermediate' | 'Advanced';
  note?: string;
}

export interface GurobiDomain {
  domain: string;
  examples: GurobiExample[];
}

export const colabUrl = (e: GurobiExample) => COLAB + e.path;

export const gurobiExamples: GurobiDomain[] = [
  {
    domain: 'Operations & Supply Chain',
    examples: [
      { title: 'Facility Location', path: 'facility_location/facility_location.ipynb', decision: 'Which warehouses to open to serve a supermarket chain at least cost.', session: 'Session 6', level: 'Starter' },
      { title: 'Supply Network Design', path: 'supply_network_design/supply_network_design_1.ipynb', decision: 'Route product from factories through depots to customers; Part 2 decides which depots to open or close.', session: 'Sessions 5–6', level: 'Starter' },
      { title: 'UN World Food Programme', path: 'food_program/food_supply.ipynb', decision: 'Build a food-aid supply chain on real WFP data: what to source, where, and how to ship it.', session: 'Session 5', level: 'Starter' },
      { title: 'COVID-19 Care Sites', path: 'covid19_facility_location/covid19_facility_location.ipynb', decision: 'Where to open temporary care facilities, and how much capacity each one needs.', session: 'Session 6', level: 'Starter' },
      { title: 'Customer Assignment', path: 'customer_assignment/customer_assignment.ipynb', decision: 'Cluster 50,000 customers with K-means, then pick up to 8 of 20 sites to serve them.', session: 'Session 11', level: 'Intermediate' },
      { title: 'Decentralization Planning', path: 'decentralization_planning/decentralization_planning.ipynb', decision: 'Which city each department moves to, trading location benefits against communication costs.', session: 'Session 6', level: 'Advanced' },
      { title: 'Pooling', path: 'pooling/std_pooling.ipynb', decision: 'Blend streams through shared tanks to meet quality specs — flow and blending in one nonlinear model.', session: 'Session 8', level: 'Advanced' },
    ],
  },
  {
    domain: 'Production & Planning',
    examples: [
      { title: 'Factory Planning', path: 'factory_planning/factory_planning_1.ipynb', decision: 'What to make, sell and store each month; Part 2 also schedules machine maintenance.', session: 'Midterm case shape', level: 'Intermediate' },
      { title: 'Food Manufacturing', path: 'food_manufacturing/food_manufacture_1.ipynb', decision: 'Buy, store and blend oils month by month; Part 2 adds yes/no recipe rules.', session: 'Sessions 2 → 6', level: 'Intermediate' },
      { title: 'Refinery', path: 'refinery/refinery.ipynb', decision: 'Turn crude oil into fuels for maximum profit under unit capacities and quality rules.', session: 'Session 2', level: 'Intermediate' },
      { title: 'Mining', path: 'mining/mining.ipynb', decision: 'Which mines to operate each year for five years, blending ore to a target quality.', session: 'Session 6', level: 'Intermediate' },
      { title: 'Opencast Mining', path: 'opencast_mining/opencast_mining.ipynb', decision: 'Which blocks of earth to dig to maximize ore margin, respecting which blocks must come out first.', session: 'Session 6', level: 'Intermediate' },
      { title: 'Farm Planning', path: 'farm_planning/farm_planning.ipynb', decision: 'A multi-year plan for crops, herd size, labor and borrowing.', session: 'Session 2', level: 'Advanced' },
      { title: 'Economic Planning', path: 'economic_planning/economic_planning.ipynb', decision: 'How a three-industry economy should invest to grow over several years.', session: 'Session 2', level: 'Intermediate' },
      { title: 'Cutting Stock', path: 'colgen-cutting_stock/colgen-cutting_stock.ipynb', decision: 'Cut large rolls into customer widths with the least waste, using column generation.', session: 'Session 6', level: 'Advanced' },
    ],
  },
  {
    domain: 'Workforce & Scheduling',
    examples: [
      { title: 'Workforce Scheduling', path: 'workforce/workforce_scheduling.ipynb', decision: 'Fewest temporary hires first, then the fairest spread of shifts.', session: 'Session 7', level: 'Advanced' },
      { title: 'Technician Routing & Scheduling', path: 'technician_routing_scheduling/technician_routing_scheduling.ipynb', decision: 'Which technician takes which job, in what order, inside customer time windows.', session: 'Session 7', level: 'Intermediate' },
      { title: 'Airline Planning After Disruption', path: 'aviation_planning/airlineplanning.ipynb', decision: 'Rebuild the flight plan step by step after a disruption.', session: 'Session 7', level: 'Starter' },
      { title: 'Railway Dispatching', path: 'railway_dispatching/railway_dispatching.ipynb', decision: 'Reschedule trains on shared tracks and stations to minimize delays.', session: 'Session 7', level: 'Advanced' },
      { title: 'Manpower Planning', path: 'manpower_planning/manpower_planning.ipynb', decision: 'Recruit, retrain, or let go of workers over several years to meet staffing needs.', session: 'Sessions 2 → 6', level: 'Advanced' },
      { title: 'Power Plant Schedule', path: 'power_generation/optimize_power_schedule.ipynb', decision: 'Which plants to switch on each hour, and how much each one produces.', session: 'Session 6', level: 'Starter' },
      { title: 'Unit Commitment', path: 'electrical_power_generation/electrical_power_1.ipynb', decision: '24 hours of generator on/off and output decisions; Part 2 adds hydro plants.', session: 'Session 6', level: 'Intermediate' },
      { title: 'Battery Scheduling', path: 'battery_scheduling/battery_scheduling.ipynb', decision: 'When to charge and discharge a battery as electricity prices move through the day.', session: 'Session 10', level: 'Starter' },
    ],
  },
  {
    domain: 'Logistics & Routing',
    examples: [
      { title: 'Cell Tower Coverage', path: 'cell_tower_coverage/cell_tower.ipynb', decision: 'Which towers to build, on a budget, to reach the most people.', session: 'Session 7', level: 'Starter' },
      { title: 'Car Rental Fleet', path: 'car_rental/car_rental_1.ipynb', decision: 'How many cars to own and where to position them each day; Part 2 adds repair capacity.', session: 'Sessions 5–6', level: 'Intermediate' },
      { title: 'Offshore Wind Cables', path: 'offshore_wind_farming/offshore_wind_farming.ipynb', decision: 'Which underwater cables connect a wind farm to shore at least cost.', session: 'Session 5', level: 'Starter' },
      { title: 'Drones for Cardiac Arrests', path: 'drone_network/drone_network.ipynb', decision: 'Where to base drones so a defibrillator arrives in time, on real research data.', session: 'Session 6', level: 'Advanced' },
      { title: 'Traveling Salesman', path: 'traveling_salesman/tsp.ipynb', decision: 'The shortest tour through every city, adding constraints only when they are violated.', session: 'Session 6', level: 'Advanced' },
      { title: 'Milk Collection', path: 'milk_collection/milk_collection.ipynb', decision: 'Route one tanker truck to collect milk from farms with a capacity limit.', session: 'Session 6', level: 'Advanced' },
      { title: 'Lost Luggage Delivery', path: 'lost_luggage_distribution/lost_luggage_distribution.ipynb', decision: 'Deliver delayed bags with a fleet of vans inside customer time windows.', session: 'Session 6', level: 'Advanced' },
    ],
  },
  {
    domain: 'Pricing & Revenue',
    examples: [
      { title: 'Avocado Pricing and Supply', path: 'price_optimization/price_optimization.ipynb', decision: 'Fit demand from sales data, then set avocado prices and supply by region.', session: 'Sessions 8 & 11', level: 'Starter' },
      { title: 'Pricing Competing Products', path: 'pricing_competing_products/price_optimization_with_competing_products.ipynb', decision: 'Price a product line when products steal demand from each other.', session: 'Session 8', level: 'Intermediate' },
      { title: 'Agricultural Pricing', path: 'agricultural_pricing/agricultural_pricing.ipynb', decision: 'Dairy prices when demand falls as price rises — revenue becomes a curve.', session: 'Session 8', level: 'Intermediate' },
      { title: 'Yield Management', path: 'yield_management/yield_management.ipynb', decision: 'Airline seat prices across three booking periods under uncertain demand.', session: 'Session 10', level: 'Advanced', note: 'Needs your free academic license — too large for the pip trial license.' },
    ],
  },
  {
    domain: 'Finance & Performance',
    examples: [
      { title: 'Portfolio Selection', path: 'portfolio_selection_optimization/portfolio_selection_optimization.ipynb', decision: 'Markowitz risk and return on real stock data, with the efficient frontier.', session: 'Session 8', level: 'Advanced' },
      { title: 'Index Tracking', path: 'index_tracking/index_tracking.ipynb', decision: 'Hold only a few stocks and still track the index closely.', session: 'Session 8', level: 'Advanced' },
      { title: 'Efficiency Analysis (DEA)', path: 'efficiency_analysis/efficiency_analysis.ipynb', decision: 'Which branches are efficient compared with their peers — one small LP per branch.', session: 'Session 3', level: 'Intermediate' },
    ],
  },
  {
    domain: 'Marketing, Customers & Machine Learning',
    examples: [
      { title: 'Marketing Campaign', path: 'marketing_campaign_optimization/marketing_campaign_optimization.ipynb', decision: 'Which offer each bank customer gets to maximize expected profit under a budget.', session: 'Sessions 6 & 11', level: 'Starter' },
      { title: 'Market Sharing', path: 'market_sharing/market_sharing.ipynb', decision: 'Split retailers between two divisions while hitting several share targets at once.', session: 'Session 6', level: 'Starter' },
      { title: 'Fantasy Basketball', path: 'fantasy_basketball/fantasy_basketball_part1.ipynb', decision: 'Predict each player\'s points, then pick a salary-capped lineup (Part 2).', session: 'Session 11', level: 'Starter' },
      { title: 'Best-Subset Regression', path: 'linear_regression/l0_regression.ipynb', decision: 'Let binary variables choose which features enter a regression.', session: 'Session 11', level: 'Intermediate' },
      { title: 'Music Recommendation', path: 'music_recommendation/music_recommendation.ipynb', decision: 'Turn predicted song preferences into a playlist with variety rules.', session: 'Session 11', level: 'Starter', note: 'Uses a package that needs Python 3.11; it may fail in current Colab.' },
      { title: 'Curve Fitting', path: 'curve_fitting/curve_fitting.ipynb', decision: 'Fit a line by minimizing absolute error — regression written as an LP.', session: 'Session 2', level: 'Starter' },
    ],
  },
  {
    domain: 'Games, Puzzles & Science',
    examples: [
      { title: 'Burrito Optimization Game', path: 'burrito_optimization_game/burrito_optimization_game.ipynb', decision: 'Place burrito trucks on a city map for maximum profit — play the online game, then model it.', session: 'Session 6', level: 'Starter' },
      { title: '3D Tic-Tac-Toe', path: '3d_tic_tac_toe/3d_tic_tac_toe.ipynb', decision: 'Fill a 3×3×3 cube so as few lines as possible are all one symbol.', session: 'Session 6', level: 'Starter' },
      { title: 'Logical Design', path: 'logical_design/logical_design.ipynb', decision: 'Build a circuit with the fewest NOR gates for a given truth table.', session: 'Session 6', level: 'Intermediate' },
      { title: 'Text Dissimilarity', path: 'text_dissimilarity/text_dissimilarity.ipynb', decision: 'Measure how different two documents are with a transport-style LP.', session: 'Session 5', level: 'Starter' },
      { title: 'Protein Folding', path: 'protein_folding/protein_folding.ipynb', decision: 'Fold a chain of amino acids into its best-scoring shape.', session: 'Session 6', level: 'Advanced' },
    ],
  },
];

export const gurobiExampleCount = gurobiExamples.reduce((n, d) => n + d.examples.length, 0);
