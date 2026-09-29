export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  description: string;
  iconName: 'layout' | 'database' | 'code' | 'sparkles';
  tag: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'Data & Research';
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  steps?: {
    label: string;
    description: string;
    icon: string;
  }[];
  analysisMetrics?: {
    label: string;
    score: number;
    insight: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    initials: string;
    avatarSubtitle: string;
    statusText: string;
  };
  contact: ContactInfo;
  about: {
    paragraphs: string[];
    whatImDoing: ActivityCard[];
  };
  resume: {
    education: EducationItem[];
    skills: string[];
    skillCategories: {
      category: string;
      items: { name: string; level: number }[];
    }[];
  };
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Naagasree Govindula',
    role: 'Data science student',
    initials: 'NG',
    avatarSubtitle: 'Future Data Scientist & Web Developer',
    statusText: 'Open to internships & collaborative projects',
  },
  contact: {
    email: 'naagasree777@gmail.com',
    phone: '8790787824',
    location: 'Chengicherla, Boduppal',
    linkedin: 'https://www.linkedin.com/in/naagasree-govindula-657184438',
    github: 'https://github.com/',
  },
  about: {
    paragraphs: [
      "I'm a data science student who enjoys building projects, learning new technologies, and turning ideas into practical solutions. I'm currently developing my skills in web development.",
      "I like exploring new tools, solving problems, and improving my technical and creative skills. Through my projects, I aim to create simple, useful, and user-friendly digital experiences.",
      "I'm always excited to learn, collaborate, and take on new challenges that help me grow.",
    ],
    whatImDoing: [
      {
        id: 'web-pages',
        title: 'Building web pages',
        description: 'Interactive, responsive pages crafted with modern web standards and clean user-centric layouts.',
        iconName: 'layout',
        tag: 'Frontend Dev',
      },
      {
        id: 'data-work',
        title: 'Working with data',
        description: 'Writing SQL queries, transforming datasets, and extracting actionable patterns from structured information.',
        iconName: 'database',
        tag: 'Data Science',
      },
      {
        id: 'learning-in-public',
        title: 'Learning in public',
        description: 'Picking up new tools, documenting learnings, and keeping code and progress versioned on GitHub.',
        iconName: 'code',
        tag: 'Open Source',
      },
      {
        id: 'curious-creative',
        title: 'Curious and creative',
        description: 'Always excited to learn, explore new problem spaces, and cultivate continuous personal and technical growth.',
        iconName: 'sparkles',
        tag: 'Growth Mindset',
      },
    ],
  },
  resume: {
    education: [
      {
        id: 'btech',
        degree: 'B.Tech in Data Science',
        institution: 'Nalla Narsimha Reddy Group of Institutions',
        period: 'Currently Pursuing',
        badge: 'In Progress',
        description: 'Deep diving into data structures, algorithms, database management systems, probability, and exploratory data analytics.',
      },
      {
        id: 'intermediate',
        degree: 'Intermediate (11th & 12th)',
        institution: 'Residential College',
        period: 'Completed',
        badge: 'Higher Secondary',
        description: 'Focused on Mathematics, Physics, and Chemistry (MPC), building analytical rigor and foundational problem-solving discipline.',
      },
      {
        id: 'schooling',
        degree: 'Schooling up to 10th (CBSE)',
        institution: 'Sage School',
        period: 'Completed',
        badge: 'CBSE Board',
        description: 'Strong academic foundation with active participation in science exhibitions, mathematics olympiads, and school computer science clubs.',
      },
    ],
    skills: ['GitHub', 'SQL', 'C language', 'Responsive web pages'],
    skillCategories: [
      {
        category: 'Core Competencies',
        items: [
          { name: 'SQL & Database Queries', level: 85 },
          { name: 'Responsive Web Pages', level: 88 },
          { name: 'GitHub & Version Control', level: 82 },
          { name: 'C Language', level: 80 },
        ],
      },
    ],
  },
  projects: [
    {
      id: 'civicsfix',
      title: 'CivicsFix',
      subtitle: 'Civic Issue Reporting Platform',
      category: 'Web Development',
      description: 'A small web project that helps people report and track civic issues in their local community. Empowering citizens to bridge the gap with municipal teams through transparent issue tracking.',
      liveUrl: 'https://civicfix-1103.ai.studio',
      githubUrl: 'https://github.com/',
      features: [
        'Geo-tagged issue submission with category tags',
        'Transparent status lifecycle: Submitted → In Progress → Resolved',
        'Community validation and status notifications for residents',
        'Mobile-friendly responsive UI for on-the-go reporting',
      ],
      steps: [
        {
          label: 'Report it',
          description: 'Snap a photo, choose the category, and submit the neighborhood issue in seconds.',
          icon: 'camera-alert',
        },
        {
          label: 'Track it',
          description: 'Follow live progress updates as local maintenance teams review and address the report.',
          icon: 'radar-timeline',
        },
        {
          label: 'Fix it',
          description: 'Receive verified resolution photos and close out the community ticket with confidence.',
          icon: 'check-badge',
        },
      ],
    },
    {
      id: 'job-website-analysis',
      title: 'Job Website Analysis',
      subtitle: 'Job Portal Evaluation & Insights',
      category: 'Data & Research',
      description: "A study of a job website's features, user experience, and overall functionality. Evaluates applicant search journeys, resume filtering efficacy, and candidate interaction pipelines through data-driven observations.",
      githubUrl: 'https://github.com/',
      features: [
        'Heuristic evaluation of applicant search & filter workflows',
        'Comparison of UX friction points across desktop and mobile',
        'Data-backed recommendations for job recommendation relevance',
        'Synthesized UX audit report with benchmarked charts',
      ],
      analysisMetrics: [
        { label: 'Search Relevancy', score: 84, insight: 'Keyword filters perform strongly but semantic matching has opportunities.' },
        { label: 'Application Flow', score: 76, insight: 'Multi-step forms caused minor drop-offs compared to 1-click apply.' },
        { label: 'Mobile Usability', score: 90, insight: 'Responsive card layouts and sticky apply buttons scored high marks.' },
        { label: 'Information Architecture', score: 88, insight: 'Clear salary bands and location tags improved user retention.' },
      ],
    },
  ],
};
