// The full syllabus — everything a student needs to know in week one.

export const description = {
  catalog:
    'This course introduces prescriptive analytics: providing organizations with optimal decisions to achieve key business objectives such as customer satisfaction, profits, and cost savings. You will model use cases spanning strategic, operational, and tactical decisions in operations, supply chain, marketing, and finance, and use optimization technology to solve complex decisions with many variables, constraints, and tradeoffs. Topics include linear optimization, nonlinear optimization, integer optimization, network optimization, Markov chains, deep learning, and reinforcement learning.',
  plain:
    "Predictive analytics tells you what will happen. This course teaches the step that creates value: deciding what to DO about it. Every week follows the same rhythm — a real business story, the modeling idea behind it, and hands-on Python that solves it. By December you will have built models that tell organizations what to build, ship, schedule, price, and invest — and you will be able to defend every constraint in them.",
};

export const objectives = [
  { icon: 'type', text: 'Formulate real business problems as optimization models — decision variables, objective, constraints — from messy prose, not clean textbook setups.' },
  { icon: 'terminal', text: 'Solve models with the industry-standard stack: gurobipy, CVXPY, and OR-Tools in Google Colab, with a free full-power Gurobi academic license.' },
  { icon: 'search', text: 'Interrogate solutions like an economist: shadow prices, reduced costs, binding constraints, and what-if analysis — the questions executives actually ask.' },
  { icon: 'network', text: 'Choose the right model class for the decision: linear, network, integer, nonlinear, Markov, or reinforcement learning — and know why.' },
  { icon: 'brain', text: 'Connect optimization to modern AI: predict-then-optimize pipelines, decision-focused learning, deployed RL, and LLM modeling copilots — and verify what AI generates.' },
  { icon: 'presentation', text: 'Communicate a model as a decision: translate solver output into a plain-English recommendation with dollars attached and assumptions exposed.' },
];

export const materials = [
  {
    title: 'No required textbook',
    detail: 'Everything you need is free: this site (session pages, interactive explorers, practice bank), the Colab notebooks, and open resources linked from every session.',
    badge: 'Free',
  },
  {
    title: 'Gurobi academic license',
    detail: 'Full-power, size-unlimited, free with your suffolk.edu email at gurobi.com/academics. Claim it in week 1 — it is required from Homework #1 on. PuLP + HiGHS is the zero-cost fallback.',
    badge: 'Required',
  },
  {
    title: 'A laptop, every session',
    detail: 'Every class includes a hands-on lab in Google Colab (free, browser-based, nothing to install). Bring a charged laptop; a tablet with a keyboard works in a pinch.',
    badge: 'Required',
  },
  {
    title: 'Optional deeper reading',
    detail: 'Camm et al., Business Analytics (5th ed.) for the classic treatment; Warren Powell, Sequential Decision Analytics (free at castle.princeton.edu) for the Markov/RL arc; Winston, Operations Research, as the encyclopedic reference.',
    badge: 'Optional',
  },
];

export const grading = [
  { component: 'Participation & In-Class Labs', weight: 15 },
  { component: 'Homework Assignments (Python + Modeling)', weight: 25 },
  { component: 'Midterm Case Competition (Team)', weight: 25 },
  { component: 'Final Project & Presentation', weight: 35 },
];

export const gradingDetail = [
  {
    component: 'Participation & In-Class Labs',
    weight: 15,
    icon: 'users',
    detail: 'Every session has a hands-on lab. Credit is for honest attempts and engaged questions, not correct answers — the lab is where you are allowed to be wrong cheaply. Show up, open the notebook, try.',
  },
  {
    component: 'Homework Assignments',
    weight: 25,
    icon: 'code',
    detail: 'Roughly nine assignments, due Wednesdays by 7:40 PM on Canvas. Each is one modeling problem: formulate on paper, solve in Python, interpret in plain English. Your lowest homework score is dropped. AI tools allowed with disclosure — and you must be able to defend every constraint.',
  },
  {
    component: 'Midterm Case Competition',
    weight: 25,
    icon: 'award',
    detail: 'Teams of 2–3. A retail replenishment optimization case launches Oct 21 (Session 7) and is due Nov 4 (Session 9), where each team gives a five-minute results briefing. Graded on model correctness, business insight, and clarity — the best model that no one understands loses to a good model everyone does.',
  },
  {
    component: 'Final Project & Presentation',
    weight: 35,
    icon: 'rocket',
    detail: 'Your optimization story: a real decision, modeled and solved end-to-end. One-paragraph proposal due Nov 4; notebook + two-page decision memo due Dec 15 at 11:59 PM; presentations in class Dec 16. Graded on the five beats of every great prescriptive story: a real decision, an honest model, a solved answer, a dollar figure, and a sensitivity story. Each presentation ends with a short individual model defense — two questions about your own constraints ("why is this here?", "what happens if I relax that one?"), answered live, without the AI.',
  },
];

export const noExams =
  'This course has no exams. You are assessed entirely on what you build — and on your ability to defend it. The individual accountability an exam would provide lives in the model defense: on presentation night, every student answers questions about their own model, live.';

export const gradeScale = [
  { grade: 'A', range: '93–100' },
  { grade: 'A−', range: '90–92.9' },
  { grade: 'B+', range: '87–89.9' },
  { grade: 'B', range: '83–86.9' },
  { grade: 'B−', range: '80–82.9' },
  { grade: 'C+', range: '77–79.9' },
  { grade: 'C', range: '73–76.9' },
  { grade: 'F', range: 'below 73' },
];

export const keyDates = [
  { date: 'Sep 9', label: 'First class · Homework #0 assigned', type: 'session' },
  { date: 'Sep 16', label: 'Claim your Gurobi academic license by tonight', type: 'deadline' },
  { date: 'Oct 21', label: 'Midterm case launches (teams of 2–3)', type: 'milestone' },
  { date: 'Nov 4', label: 'Midterm case due + team briefings · Final project proposal due', type: 'deadline' },
  { date: 'Nov 11', label: 'No class — Veterans Day', type: 'break' },
  { date: 'Nov 25', label: 'No class — Thanksgiving', type: 'break' },
  { date: 'Dec 15', label: 'Final notebook + decision memo due, 11:59 PM', type: 'deadline' },
  { date: 'Dec 16', label: 'Final presentations · The Edelman of ISOM-839', type: 'milestone' },
];

export const howItWorks = [
  {
    icon: 'play-circle',
    title: 'Story → Model → Code',
    detail: 'Every session opens with a real organization (USA Cycling, Microsoft, Google, India\'s food system), extracts the modeling idea, then builds it in Python. You never learn a technique without seeing who got rich or won gold with it.',
  },
  {
    icon: 'zap',
    title: 'Explorers: theory you can touch',
    detail: 'Each big idea has a living, draggable version — the feasible region, min-cost flow, branch & bound, the efficient frontier. If you can predict what the picture will do before you drag, you understand the concept.',
  },
  {
    icon: 'check',
    title: 'Practice bank with real exam questions',
    detail: 'A growing bank of questions from past exams, each wrong answer tagged with the specific misconception behind it. You type your reasoning before seeing the answer — that is where the judgment builds.',
  },
  {
    icon: 'bot',
    title: 'AI-native, defense-required',
    detail: 'Professional modelers use ChatGPT, Claude, and Gurobi AI Modeling daily — so will you. The bar: disclose what you used and defend every constraint. The optimizer is only as good as the person who can verify it.',
  },
];

export const policies = [
  {
    title: 'Attendance',
    description: 'This is an evening seminar that meets once a week — every session matters. More than two unexcused absences will result in a grade reduction. Please notify the instructor in advance if you need to miss a class.',
  },
  {
    title: 'AI Tool Usage',
    description: 'AI tools (ChatGPT, Claude, Gurobi AI Modeling, Copilot) are encouraged — professional modelers use them daily. You must disclose which tools you used, and you must be able to explain and defend every model you submit. The optimizer is only as good as the person who can verify it.',
  },
  {
    title: 'Academic Integrity',
    description: 'All submitted work must be your own or properly attributed. Collaboration is encouraged on labs and the team case, but individual homework must reflect individual effort. Suffolk University\'s academic integrity policies apply in full.',
  },
  {
    title: 'Late Submissions',
    description: 'Assignments are due by the start of class on Canvas. Late submissions receive a 10% penalty per day, up to 3 days. After 3 days, assignments receive zero credit. Your lowest homework score is dropped — that is the built-in grace.',
  },
  {
    title: 'Accommodations',
    description: 'Suffolk University is committed to equal access. If you have a documented disability, contact the Office of Disability Services to arrange accommodations — and let the instructor know early so the course works for you from week one.',
  },
  {
    title: 'Getting Help',
    description: 'Email harslan@suffolk.edu anytime, catch the instructor after class, or book office hours by appointment. For modeling questions, post on the Canvas discussion board — if you are stuck, three classmates are stuck in the same place.',
  },
];
