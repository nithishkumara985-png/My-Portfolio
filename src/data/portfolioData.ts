import { TechItem, Project, SportClass } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Nithish Kumar A',
  title: 'Builder, Lead Developer & Designer',
  subtitle: 'Shaping autonomous software and modern web experiences.',
  quote: '“Where code acquires intent, design finds purpose, and ideas become systems that run.”',
  university: 'REVA University',
  degree: 'Computer Science & Engineering',
  location: 'Bengaluru, India',
  email: 'nithishkumara985@gmail.com',
  github: 'https://github.com/nithishkumara985-png',
  linkedin: 'https://www.linkedin.com/in/nithish-kumar-a-b86350384',
  taglines: [
    'Curious by nature. Builder by execution.',
    'Bridging hardware, full-stack web, and agentic AI.',
    'Designing products that look exceptional and run without friction.',
  ],
  summary:
    'I build systems where creative software engineering, physical hardware, and autonomous AI converge. As a Computer Science & Engineering undergrad at REVA University, I specialize in web development, Python programming, and modern architectural systems, while actively mastering Data Structures & Algorithms.',
  footerPunchline:
    '“Don’t leave it as a bookmark. Drop a message—I promise I reply faster than your local server builds.”',
};

export const TECH_STACK: TechItem[] = [
  // Languages
  {
    name: 'Python',
    category: 'languages',
    description: 'Primary computational language for AI/ML, automation pipelines, and algorithmic problem solving.',
    proficiency: 'Advanced',
    highlight: 'Data processing, scripting, and autonomous agents',
  },
  {
    name: 'C & C++',
    category: 'languages',
    description: 'Low-level systems programming, memory-constrained environments, and hardware interfacing.',
    proficiency: 'Intermediate',
    highlight: 'GCC toolchains, pointer mechanics, systems performance',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    description: 'Modern asynchronous web standards, event-loop mastery, and dynamic interfaces.',
    proficiency: 'Advanced',
    highlight: 'ESNext, promises, modern DOM, modules',
  },
  {
    name: 'Java',
    category: 'languages',
    description: 'Object-oriented software architecture, enterprise logic, and algorithmic foundation.',
    proficiency: 'Intermediate',
    highlight: 'OOP principles, robust class hierarchies',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'languages',
    description: 'Semantic markup, layout mathematics, responsive design, and CSS architecture.',
    proficiency: 'Advanced',
    highlight: 'Semantic web, accessibility, modern styling',
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    description: 'Component-driven state architecture, reactive hooks, and high-performance SPAs.',
    proficiency: 'Advanced',
    highlight: 'Custom hooks, declarative UI, component state',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first layout design, custom theme engines, and high-speed responsive styling.',
    proficiency: 'Advanced',
    highlight: 'Design systems, micro-interactions, responsive grids',
  },

  // Backend & Cloud
  {
    name: 'Supabase',
    category: 'backend',
    description: 'Relational PostgreSQL database management, row-level security, auth & real-time sync.',
    proficiency: 'Intermediate',
    highlight: 'PostgreSQL schemas, real-time subscriptions, auth',
  },
  {
    name: 'Node.js & Express',
    category: 'backend',
    description: 'Server-side API architecture, routing middleware, and asynchronous microservices.',
    proficiency: 'Intermediate',
    highlight: 'RESTful endpoints, JSON pipelines',
  },

  // Developer Tools
  {
    name: 'VS Code',
    category: 'tools',
    description: 'Tailored development environment with specialized linter configurations and debuggers.',
    proficiency: 'Daily Driver',
    highlight: 'Productivity workflows, extensions, workspace tuning',
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    description: 'Distributed version control, branch management, collaborative workflows, and CI/CD.',
    proficiency: 'Advanced',
    highlight: 'Feature branching, code review, repo hygiene',
  },
  {
    name: 'GCC Toolchains',
    category: 'tools',
    description: 'Compiler optimizations, binary generation, and debugging for low-level source builds.',
    proficiency: 'Intermediate',
    highlight: 'Compilation flags, linkers, execution debugging',
  },
  {
    name: 'Custom UI/UX Suites',
    category: 'tools',
    description: 'Minimalist visual architecture, typography pairing, wireframing, and interactive design.',
    proficiency: 'Advanced',
    highlight: 'Obsidian cybernetic aesthetics, design tokens',
  },

  // AI & Process
  {
    name: 'Agentic AI & LLMs',
    category: 'ai',
    description: 'Prompt engineering, LLM integration, autonomous tool invocation, and cognitive agent flows.',
    proficiency: 'Intermediate',
    highlight: 'Agentic loops, structured JSON outputs, context engineering',
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'ai',
    description: 'Currently deep-diving into trees, graphs, dynamic programming, and complexity optimization.',
    proficiency: 'Actively Learning',
    highlight: 'Time & space complexity (Big-O), search/sort algorithms',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sports-club',
    title: 'Sports Club Management System',
    subtitle: 'Multi-Sport Training Booking & Facility Scheduling Platform',
    category: 'Full-Stack Web Application',
    description:
      'A comprehensive web platform engineered for sports enthusiasts, coaches, and facility managers. Enables seamless multi-sport class bookings, court and pitch reservations, coach allocations, and real-time training schedules across diverse disciplines.',
    extendedDescription:
      'Engineered with an intuitive high-speed booking flow, the Sports Club Management System eliminates double-booking conflicts and streamlines athlete registration. Built with modular component architecture, real-time availability checking, and flexible scheduling for tennis, football, badminton, basketball, and aquatic training sessions.',
    image: '/src/assets/images/project_sports_club_1793342837269.jpg',
    tags: ['React', 'JavaScript', 'Supabase', 'Tailwind CSS', 'State Management'],
    features: [
      'Multi-sport event catalog (Tennis, Football, Badminton, Basketball, Swimming)',
      'Real-time court and pitch slot reservation engine',
      'Coach roster and training class booking with skill-level filtering',
      'Instant interactive booking confirmation and ticket receipt modal',
      'Responsive dark-mode UI with high-legibility tabular schedules',
    ],
    metrics: [
      { label: 'Sports Disciplines', value: '5+ Core Sports' },
      { label: 'Booking Latency', value: '< 150ms' },
      { label: 'Slot Conflict Rate', value: '0.00%' },
      { label: 'Architecture', value: 'Full-Stack SPA' },
    ],
    githubUrl: 'https://github.com/nithishkumara985-png',
    liveDemoAvailable: true,
  },
  {
    id: 'hardware-convergence',
    title: 'Hardware & Autonomous Systems Lab',
    subtitle: 'Physical Microcontrollers & Autonomous Code Pipeline',
    category: 'Embedded & Systems Research',
    description:
      'Prototyping the convergence of physical hardware, sensor buses, and autonomous agent loops. Integrating C/C++ embedded code with Python automation to drive hardware responsiveness and telemetry reporting.',
    extendedDescription:
      'Exploring how low-level systems logic on microcontrollers can interface directly with agentic software models. Implements GCC toolchains, serial communication protocols, and real-time state feedback for autonomous decision loops.',
    image: '/src/assets/images/hardware_embedded_lab_1793342838526.jpg',
    tags: ['C / C++', 'Python', 'GCC Toolchain', 'Hardware Interfacing', 'Telemetry'],
    features: [
      'Low-level hardware bus interfacing and register configuration',
      'Python bridge script for serial packet serialization and telemetry',
      'Real-time feedback control loops with sensor sampling',
      'Autonomous alert triggers and hardware state synchronization',
    ],
    metrics: [
      { label: 'Control Loop Rate', value: '100 Hz' },
      { label: 'Execution Stack', value: 'C / C++ & Python' },
      { label: 'Toolchain', value: 'GCC / Make' },
      { label: 'Domain', value: 'Hardware + AI' },
    ],
    githubUrl: 'https://github.com/nithishkumara985-png',
    liveDemoAvailable: false,
  },
  {
    id: 'dsa-computational-engine',
    title: 'Algorithmic Data Structures Lab',
    subtitle: 'Foundational Complexity & Structure Optimization',
    category: 'Computer Science Research',
    description:
      'An interactive algorithmic exploration suite focusing on binary trees, graph traversals, divide-and-conquer strategies, and asymptotic time complexity optimization.',
    extendedDescription:
      'Built as part of continuous computer science mastery at REVA University. Demonstrates practical implementations of search trees, shortest-path traversals, dynamic programming tables, and empirical latency benchmarking.',
    image: '/src/assets/images/dsa_algorithmic_diagram_1793342837832.jpg',
    tags: ['Data Structures', 'Algorithms', 'Python', 'Java', 'Complexity Analysis'],
    features: [
      'Interactive visualizer for Binary Search vs Linear Search',
      'Tree traversal state machine (In-Order, Pre-Order, Post-Order)',
      'Empirical step-counter comparison and Big-O verification',
      'Dynamic graph node representation with adjacency matrix notes',
    ],
    metrics: [
      { label: 'Search Complexity', value: 'O(log n)' },
      { label: 'Active Topics', value: 'Trees & Graphs' },
      { label: 'Problem Sets', value: 'Core DSA' },
      { label: 'Curriculum', value: 'REVA CSE' },
    ],
    githubUrl: 'https://github.com/nithishkumara985-png',
    liveDemoAvailable: false,
  },
];

export const INITIAL_SPORT_CLASSES: SportClass[] = [
  {
    id: 'cls-1',
    name: 'Advanced Top-Spin & Serve Clinic',
    sport: 'Tennis',
    coach: 'Coach Vikram Rao',
    duration: '60 mins',
    slotsAvailable: 4,
    court: 'Center Court 01',
    time: '07:00 AM - 08:00 AM',
    intensity: 'Advanced',
  },
  {
    id: 'cls-2',
    name: 'Tactical High-Press & Match Drills',
    sport: 'Football',
    coach: 'Coach Sarah Mendes',
    duration: '90 mins',
    slotsAvailable: 8,
    court: 'Turf Pitch Alpha',
    time: '04:30 PM - 06:00 PM',
    intensity: 'Intermediate',
  },
  {
    id: 'cls-3',
    name: 'Smash Footwork & Deceptive Drop Shots',
    sport: 'Badminton',
    coach: 'Coach Aruna Sharma',
    duration: '45 mins',
    slotsAvailable: 2,
    court: 'Indoor Court B',
    time: '06:00 PM - 06:45 PM',
    intensity: 'Intermediate',
  },
  {
    id: 'cls-4',
    name: 'Transition Offense & Perimeter Shooting',
    sport: 'Basketball',
    coach: 'Coach Kevin Peters',
    duration: '60 mins',
    slotsAvailable: 6,
    court: 'Hardwood Court 02',
    time: '05:00 PM - 06:00 PM',
    intensity: 'Beginner',
  },
  {
    id: 'cls-5',
    name: 'Freestyle Aerobic Endurance & Flip-Turns',
    sport: 'Swimming',
    coach: 'Coach Meera Joshi',
    duration: '60 mins',
    slotsAvailable: 5,
    court: 'Olympic Pool Lane 3-4',
    time: '06:30 AM - 07:30 AM',
    intensity: 'Intermediate',
  },
];
