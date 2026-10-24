// EDIT THIS FILE to update your personal details, project links, skills and experience.
// Replace every placeholder URL before publishing your portfolio.

export const profile = {
  name: 'Khushal Agarwal',
  initials: 'KA',
  role: 'Full Stack Developer · AI Product Builder',
  location: 'Noida, India',
  email: 'your.email@example.com', // TODO: add your professional email
  intro:
    'I combine web development, AI, and product thinking to build useful digital experiences — from solving user problems to creating scalable products.',
  about:
    'CSE (AI/ML) student passionate about full-stack development, AI-powered products, product strategy, and business growth.',
  aboutDetail:
    'I enjoy turning ideas into practical solutions through technology, user-focused thinking, and data-driven decisions.',
  aboutSectionP1:
    "I'm a B.Tech CSE (AI/ML) student passionate about full-stack development, AI-powered products, product management, and business growth.",
  aboutSectionP2:
    'I enjoy turning ideas into practical digital solutions by combining technology, user-focused thinking, and data-driven decision-making. My goal is to build products that solve real problems, create meaningful user experiences, and deliver measurable impact.',
  resumeUrl: '#', // TODO: replace with your resume PDF URL
  githubUrl: 'https://github.com/khushalagarwal496',
  linkedinUrl: 'https://www.linkedin.com/in/khushal-agarwal-172406353/',
  portfolioUrl: 'https://khushalprofile.vercel.app/',
  avatar: '/khushal-profile.png',
}

export const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  specialization: 'AI & Machine Learning',
  institution: 'PW Institute of Innovation',
  period: '2025 — 2029',
  location: 'Noida, India',
}

export const projects = [
  {
    number: '01',
    name: 'Campus Bridge — Built for PW Institute of Innovation',
    category: 'Campus Management · EdTech · Student Performance Analytics',
    description:
      'Designed as a campus collaboration and management platform concept for Physics Wallah Institute of Innovation (PWIOI). The platform aims to bring student networking, coding practice, daily challenges, campus operations, and student performance analytics into one unified ecosystem, helping institutions streamline processes and track student progress.',
    stack: ['React', 'Web Development', 'EdTech', 'Product Thinking'],
    liveUrl: 'https://campus-bridge-khushal.vercel.app/',
    githubUrl: 'https://github.com/khushalagarwal496',
    accent: 'violet',
    visual: 'campus',
  },
  {
    number: '02',
    name: 'JEE Main Rank Predictor — Built for Physics Wallah',
    category: 'EdTech · Rank Prediction · SEO & Student Engagement',
    description:
      'Built from the ground up for Physics Wallah (PW) to help JEE aspirants estimate their potential JEE Main ranks and make more informed academic decisions. The platform gained significant organic search visibility and student engagement.',
    metric:
      'Google Search Console Performance: 97.7K impressions · 9.12K clicks · 9.3% CTR · 4.4 average search position over the selected 16-month period.',
    stack: ['React', 'JavaScript', 'Responsive UI', 'SEO & Analytics'],
    liveUrl: 'https://www.jeemains-rank-predicator-pwioi.live/',
    githubUrl: 'https://github.com/khushalagarwal496',
    accent: 'lime',
    visual: 'rank',
  },
  {
    number: '03',
    name: 'Career Compass — Next-Generation Job Platform',
    category: 'CareerTech · Job Discovery · Resume Optimization',
    description:
      'An all-in-one career platform designed to simplify the job search journey. From ATS-friendly resume building and career exploration to job discovery, Career Compass aims to help users find relevant opportunities without switching between multiple platforms.',
    stack: ['Web Development', 'CareerTech', 'UI/UX', 'Product Architecture'],
    liveUrl: 'https://interview-khushal.vercel.app/',
    githubUrl: 'https://github.com/khushalagarwal496',
    accent: 'blue',
    visual: 'career',
  },
  {
    number: '04',
    name: 'Student Placement Prediction & Employability Analytics — IBM SkillsBuild',
    category: 'AI & Machine Learning · Data Analytics · Predictive Modeling',
    description:
      'Developed as part of the IBM SkillsBuild Data Analytics with AI Internship. Analyzed student academic records and employability factors to identify placement trends and predict placement outcomes using machine learning. The project transforms educational data into actionable insights to support data-driven placement analysis and decision-making.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: 'https://github.com/khushalagarwal496/khushal-ibm-.git',
    accent: 'orange',
    visual: 'analytics',
  },
]

export const skillCategories = [
  {
    id: 'web-dev',
    number: '01',
    name: 'Web Development',
    icon: 'code',
    skills: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'REST APIs',
      'Git & GitHub',
    ],
  },
  {
    id: 'ai-tech',
    number: '02',
    name: 'AI & Product Technology',
    icon: 'ai',
    skills: [
      'AI/ML Fundamentals',
      'Generative AI',
      'Prompt Engineering',
      'AI API Integration',
      'Python',
      'Rapid Prototyping',
      'AI Product Ideation',
    ],
  },
  {
    id: 'data-analytics',
    number: '03',
    name: 'Data Analytics & Business Intelligence',
    icon: 'analytics',
    skills: [
      'SQL',
      'Microsoft Excel',
      'Power BI',
      'Python for Data Analysis',
      'Pandas',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Data Visualization',
      'KPI Tracking',
      'Dashboard Development',
      'Statistical Analysis',
    ],
  },
  {
    id: 'product-mgmt',
    number: '04',
    name: 'Product Management, Strategy & Growth',
    icon: 'product',
    skills: [
      'Product Strategy',
      'Product Roadmapping',
      'User Research',
      'PRDs & User Stories',
      'MVP Development',
      'Feature Prioritization',
      'Competitive Analysis',
      'Market Research',
      'Product Analytics',
      'A/B Testing',
      'Growth Strategy',
      'Funnel Analysis',
      'Conversion Optimization',
      'Go-to-Market Strategy',
      'Stakeholder Management',
    ],
  },
]

export const skills = skillCategories.flatMap((c) => c.skills)

export const experience = [
  {
    id: 'ibm',
    role: 'Data Analytics with AI Intern',
    organization: 'IBM SkillsBuild',
    period: 'Aug 2026 – Oct 2026',
    icon: 'analytics',
    isCurrent: false,
    description:
      'Analyzed student placement data using Python and Pandas, evaluated machine learning models, and developed a Streamlit application to generate employability insights.',
    tags: ['Python', 'Pandas', 'Machine Learning', 'Streamlit', 'Employability Insights'],
  },
  {
    id: 'pwioi-ecell',
    role: 'Content & Growth Team Member',
    organization: 'PWIOI E-Cell',
    period: 'Apr 2026 – Present',
    icon: 'growth',
    isCurrent: true,
    description:
      'Contribute to content creation, research, audience engagement, and startup event operations. Supported Investor’s Dilemma, involving 21 selected teams and 8 shortlisted teams.',
    tags: ['Startup Operations', "Investor's Dilemma", 'Audience Engagement', 'Content & Research'],
  },
  {
    id: 'sakaarweb',
    role: 'Founder',
    organization: 'SakaarWeb',
    period: 'Jan 2026 – Present · 5+ Client Projects',
    icon: 'rocket',
    isCurrent: true,
    isFeatured: true,
    highlightBadge: 'VENTURE INITIATIVE',
    description:
      'Founded a web services initiative focused on delivering digital solutions for businesses. Manage client requirements, project execution, and delivery from initial planning to deployment.',
    tags: ['Web Services', 'Client Management', 'End-to-End Delivery', 'Business Strategy', '5+ Client Projects'],
  },
  {
    id: 'bluestock',
    role: 'Software Engineer Intern',
    organization: 'Bluestock Fintech',
    period: 'Mar 2026 – Apr 2026',
    icon: 'code',
    isCurrent: false,
    description:
      'Contributed to software and backend development for fintech solutions while collaborating with the engineering team.',
    tags: ['Software Engineering', 'Backend Development', 'Fintech Solutions', 'Team Collaboration'],
  },
  {
    id: 'inamigos',
    role: 'AI Web Development Intern',
    organization: 'InAmigos Foundation (IAF)',
    period: 'May 2026 – Jun 2026',
    icon: 'ai',
    isCurrent: false,
    description:
      'Worked on AI-focused web development, applying technical skills to practical digital projects.',
    tags: ['AI Web Development', 'Frontend Systems', 'Practical AI Tools', 'Digital Projects'],
  },
  {
    id: 'iit-ambassador',
    role: 'Campus Ambassador',
    organization: 'IIT Delhi EDC & Techkriti, IIT Kanpur',
    period: 'Apr 2025 – Sep 2025',
    icon: 'award',
    isCurrent: false,
    description:
      'Supported student outreach, campus engagement, and awareness of student-focused initiatives and opportunities.',
    tags: ['Campus Leadership', 'Student Outreach', 'Techkriti', 'Event Promotion'],
  },
  {
    id: 'earth5r',
    role: 'Content Writing Intern',
    organization: 'Earth5R',
    period: 'Sep 2025 – Dec 2025',
    icon: 'pen',
    isCurrent: false,
    description:
      'Created sustainability-focused content, communicating environmental ideas clearly and engaging audiences through written content.',
    tags: ['Sustainability', 'Content Strategy', 'Environmental Research', 'Public Engagement'],
  },
]
