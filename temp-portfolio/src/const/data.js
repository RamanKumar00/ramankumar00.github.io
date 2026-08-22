import React from 'react';
import { 
  SiC, 
  SiCplusplus, 
  SiDart, 
  SiHtml5, 
  SiFlutter, 
  SiGithub, 
  SiNodedotjs, 
  SiJavascript, 
  SiPython, 
  SiDocker, 
  SiCss3,
  SiLinux,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiRedis
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

// ============================================
// PORTFOLIO DATA CONSTANTS
// ============================================

// ============ IMAGE URLS ============
export const IMAGES = {
  profile: `${process.env.PUBLIC_URL}/raman.png`,
  projects: {
    cybersecurity: `${process.env.PUBLIC_URL}/cybersecurity-scan-interface.jpg`,
    crypto: `${process.env.PUBLIC_URL}/crypto-dashboard.jpg`,
    messaging: `${process.env.PUBLIC_URL}/secure-messaging-app.jpg`,
    ai: `${process.env.PUBLIC_URL}/ai-sentiment-analysis.jpg`,
    portfolio: `${process.env.PUBLIC_URL}/minimalist-portfolio-design.jpg`,
    management: `${process.env.PUBLIC_URL}/project-management-interface.jpg`,
  },
  placeholder: `${process.env.PUBLIC_URL}/placeholder.svg`,
};

// ============ PERSONAL INFO ============
export const PERSONAL_INFO = {
  name: "Raman",
  fullName: "Raman Kumar",
  role: "Full Stack Developer",
  tagline: "SOFTWARE DEVELOPER | CS STUDENT",
  email: "ramankr7321@gmail.com",
  phone: "+91 7737892513",
  location: "Chandigarh, India",
  profileImage: `${process.env.PUBLIC_URL}/raman.png`,
  resumeLink: `${process.env.PUBLIC_URL}/Raman Kumar - Software Developer.pdf`,
  github: "https://github.com/RamanKumar00",
  linkedin: "https://www.linkedin.com/in/raman-kumar-b80913282/",
  instagram: "https://www.instagram.com/__.ramankumar__/",
};

// ============ HOME PAGE DATA ============
export const HOME_DATA = {
  greeting: "Hi, I'm",
  name: "Raman",
  tagline: "SOFTWARE DEVELOPER | CS STUDENT",
  description: "Architecting intelligent digital environments. Specialized in high-performance computing, neural networks, and premium user experiences.",
  systemBadge: "SYSTEM_ONLINE_V.03",
  cta: {
    primary: {
      text: "VIEW_PROJECTS",
      icon: "terminal",
      href: "#projects",
    },
    secondary: {
      text: "CONNECT",
      icon: "hub",
      href: "#contact",
    },
  },
};

// ============ ABOUT PAGE DATA ============
export const ABOUT_DATA = {
  name: "Raman Kumar",
  id: "ID: 8492-AX-29",
  avatar: `${process.env.PUBLIC_URL}/raman.png`,
  clearance: "LEVEL-5",
  location: "CHANDIGARH, IN",
  status: "AVAILABLE",
  systemInfo: "< System.Raman > v1.0.0",
  stats: {
    experience: { value: "2+", label: "Years Exp" },
    projects: { value: "2+", label: "Projects" },
  },
  bio: [
    {
      command: ">> INITIATING ORIGIN STORY...",
      text: "Full Stack Developer focused on user-centered, impactful products. Blending tech and design to solve real problems. Born in 2005 in India with a mission-driven approach to using code and tech for positive change and innovation."
    },
    {
      command: ">> ACCESSING ACADEMIC RECORDS...",
      text: "Currently building scalable web apps, automating digital workflows, and exploring AI-driven tooling. Passionate about product design, automation, and continuous learning."
    },
    {
      command: ">> CURRENT MISSION OBJECTIVES...",
      text: "Currently operating as a Software Developer specializing in Flutter and Node.js ecosystems. My objective is to engineer seamless user experiences that feel less like software and more like an extension of thought."
    }
  ],
  skills: [
    { name: 'PYTHON / AUTOMATION', level: 60, color: 'primary' },
    { name: 'FLUTTER / DART', level: 85, color: 'purple' },
    { name: 'NODE.JS / BACKEND', level: 80, color: 'green' },
    { name: 'UI / UX DESIGN', level: 85, color: 'orange' }
  ],
};

// ============ EXPERIENCE DATA ============
export const EXPERIENCES = [
  {
    title: "Backend Developer Intern",
    company: "LaFleur Tech Private Limited",
    period: "2026.06 - 2026.07",
    location: "Chandigarh, India",
    status: "Completed",
    description: [
      "Worked as a backend engineer on ExpoConnect, a mobile application, contributing from ideation through prototype development.",
      "Owned database management for the application, designing and maintaining the data layer to support core app features.",
      "Built the backend for a short-video streaming interface, handling upload, storage, and delivery flows.",
      "Implemented user management functionality, including JWT-based authentication and authorization.",
    ],
    skills: ["Node.js", "React Native", "MongoDB", "JWT Authentication", "Backend Development", "Database Management"],
    isActive: false,
    icon: "dns",
    bgIcon: "terminal",
  },
  {
    title: "Web Automation Intern",
    company: "ScorpTech Innovation PVT. LTD.",
    period: "2025.06 - 2025.08",
    location: "Kolkata, India",
    status: "Completed",
    description: [
      "Developed a Python script to pull emails from 100k+ CIN records in Excel, cutting 3 weeks of manual work down to about 2 hours.",
      "Built and iterated on 2 scraping pipelines (Selenium, BeautifulSoup) for static and JS-rendered sites, improving data collection time by ~70%.",
    ],
    skills: ["Python", "Pandas", "BeautifulSoup", "Selenium", "Playwright", "Multithreading"],
    isActive: false,
    icon: "work",
    bgIcon: "terminal",
  },
  {
    title: "Freelance Mobile App Developer",
    company: "Self-Employed",
    period: "2024.10 - 2024.11",
    location: "Remote",
    status: "Completed",
    description: [
      "Built a Blinkit-style delivery app in Flutter for a local business, covering product listing, cart, and order flow from scratch.",
      "Deployed the frontend on Vercel and the backend on a cloud server, shipping on time with no major bugs.",
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Postman", "Frontend", "Backend"],
    isActive: false,
    icon: "phone_android",
    bgIcon: "code",
  },
];

// ============ EDUCATION DATA ============
export const EDUCATION_DATA = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "University Of Engineering And Technology, Chandigarh",
    year: "2023 - 2027",
    status: "In Progress",
    icon: "apartment",
    bgIcon: "neurology",
    highlights: [
      "Focus on Full Stack Development, App Development, and Database Systems.",
      "Studying advanced algorithms, data structures, and computer networks."
    ],
    skills: ["Full Stack", "Data Structures", "OOPs", "DBMS"]
  },
  {
    degree: "12th - CBSE Board (PCM)",
    institution: "Maharishi Arvind Public School, Kota",
    year: "2023",
    status: "Completed",
    icon: "school",
    bgIcon: "code_blocks",
    highlights: [
      "Strong foundation in mathematics and physics.",
    ],
    skills: ["Math", "Physics", "Chemistry"],
  },
  {
    degree: "10th - CBSE Board",
    institution: "Maharishi Arvind Public School, Kota",
    year: "2021",
    status: "Completed",
    icon: "school",
    bgIcon: "code_blocks",
    highlights: [
      "Completed secondary education with focus on general sciences and mathematics.",
    ],
    skills: ["General Science", "Mathematics"],
  }
];

// ============ EDUCATION STATS ============
export const EDUCATION_STATS = [
  { label: "Degrees", value: "1", suffix: "" },
  { label: "Years Learning", value: "5", suffix: "+" },
  { label: "Certifications", value: "10", suffix: "+" },
  { label: "Skills Acquired", value: "20", suffix: "+" },
];

// ============ CERTIFICATIONS DATA ============
export const CERTIFICATIONS = [
  {
    title: "AI & ML",
    issuer: "Great Learning",
    date: "2024",
    image: `${process.env.PUBLIC_URL}/placeholder.svg`,
    logo: null,
    link: `${process.env.PUBLIC_URL}/AI Certificate by Greate Learning.pdf`,
    skills: ["AI", "Machine Learning"],
    certIcon: "psychology"
  },
  {
    title: "C Programming",
    issuer: "SoloLearn",
    date: "2023",
    image: `${process.env.PUBLIC_URL}/placeholder.svg`,
    logo: null,
    link: `${process.env.PUBLIC_URL}/C by Solo learn.pdf`,
    skills: ["C", "Fundamentals"],
    certIcon: "code"
  },
  {
    title: "C++ Programming",
    issuer: "Scaler",
    date: "2024",
    image: `${process.env.PUBLIC_URL}/C++ scaler.png`,
    logo: null,
    link: `${process.env.PUBLIC_URL}/C++ scaler.png`,
    skills: ["C++", "DSA"],
    certIcon: "terminal"
  },
  {
    title: "Google Ads",
    issuer: "Coursera",
    date: "2023",
    image: `${process.env.PUBLIC_URL}/placeholder.svg`,
    logo: null,
    link: `${process.env.PUBLIC_URL}/Google Ads by Coursera.pdf`,
    skills: ["Marketing", "AdSense"],
    certIcon: "ads_click"
  }
];

// ============ PROJECTS DATA ============
export const PROJECTS = [
  {
    title: "RaaS (Recommendation-as-a-Service)",
    status: "ONGOING",
    statusType: "active",
    badge: "BACKEND SYSTEM",
    description: "A multi-tenant Recommendation-as-a-Service platform. Features strict tenant_id + project_id data isolation, async persistence, modular candidate pipelines, and YAML configuration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tech: ["Python", "FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Pydantic", "Alembic", "Pytest"],
    actionIcon: "code",
    actionText: "VIEW SOURCE",
    links: { live: "https://github.com/RamanKumar00", github: "https://github.com/RamanKumar00" },
    details: {
      problem: "Designing a backend that serves custom recommendation queries for multiple tenants while keeping data strictly isolated.",
      solution: "Built an async FastAPI application leveraging SQLAlchemy 2.0 with strict database-level filtering. Implemented modular pipelines for candidate generation, filtering, ranking, and post-processing.",
      challenges: [
        "Achieving sub-100ms response times for complex multi-tenant candidate queries",
        "Maintaining database migrations with dynamic schemas",
        "Configuring complex runtime validations"
      ],
      learnings: [
        "Advanced database modeling and JSONB with PostgreSQL",
        "Writing asynchronous test suites with Pytest",
        "Extensible data pipeline patterns"
      ],
      images: []
    }
  },
  {
    title: "PlaceMentor AI",
    status: "COMPLETED",
    statusType: "active",
    badge: "AI & DEVOPS",
    description: "AI-powered placement preparation platform. Parses resumes with PyMuPDF, scores relevance using TF-IDF and cosine similarity, and offloads evaluations to Celery/Redis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tech: ["FastAPI", "Streamlit", "PostgreSQL", "Celery", "Redis", "Docker", "PyMuPDF"],
    actionIcon: "visibility",
    actionText: "VIEW SOURCE",
    links: { live: "https://github.com/RamanKumar00", github: "https://github.com/RamanKumar00" },
    details: {
      problem: "Comparing large batches of PDF resumes against job descriptions synchronously, which blocked the main request thread.",
      solution: "Offloaded heavy PDF parsing and text scoring tasks to Celery workers with a Redis broker. Created a Streamlit & Plotly dashboard to present candidate insights.",
      challenges: [
        "Optimizing memory usage during concurrent document parsing",
        "Refining TF-IDF and cosine similarity calculations for custom resumes",
        "Orchestrating multi-container Docker deployments"
      ],
      learnings: [
        "Asynchronous task queues and workers (Celery/Redis)",
        "Text extraction and NLP scoring metrics",
        "Multi-container containerization with Docker Compose"
      ],
      images: []
    }
  },
  {
    title: "KalaaKriti",
    status: "BETA",
    statusType: "active",
    badge: "FEATURED",
    description: "Modern Android wallpaper app with glassmorphic UI. Features thousands of high-res images via Pexels API, offline access, and Supabase backend.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
    tech: ["Flutter", "Supabase", "Pexels API", "Hive"],
    actionIcon: "download",
    actionText: "DOWNLOAD APK",
    links: { live: `${process.env.PUBLIC_URL}/kalaakriti.apk`, github: "https://github.com/RamanKumar00/Kalaakirti" },
    details: {
      problem: "Need for a performant, aesthetically pleasing wallpaper app with cloud sync and offline features.",
      solution: "Engineered a glassmorphic UI with Flutter, using Supabase for auth/data and Hive for local caching.",
      challenges: ["Glassmorphism performance", "Efficient image caching"],
      learnings: ["Flutter Animation", "Clean Architecture", "Backend-as-a-Service"],
      images: []
    }
  },
  {
    title: "Sampark",
    status: "LIVE",
    statusType: "active",
    badge: "REAL-TIME",
    description: "Secure, real-time messaging platform built with Flutter & Firebase. Features BLoC state management, native performance across devices, and instant synchronization.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tech: ["Flutter", "Dart", "Firebase", "BLoC/Cubit", "Clean Arch"],
    actionIcon: "chat",
    actionText: "VIEW REPO",
    links: { live: "https://github.com/RamanKumar00/Sampark-App", github: "https://github.com/RamanKumar00/Sampark-App.git" },
    details: {
      problem: "Developing a single, high-performance codebase for Android, iOS, and Web with 100% feature parity.",
      solution: "Architected a crash-resistant app using Dart's strong typing and Clean Architecture. Integrated Firebase for millisecond-latency messaging and multi-provider auth.",
      challenges: ["Optimizing rich media (voice/image) sync", "Background notifications without backend", "Memory efficient dependency injection"],
      learnings: ["Advanced BLoC Patterns", "NoSQL Schema Design", "Cross-Platform Audio Handling"],
      images: []
    }
  }
];

// ============ PROJECT FILTERS ============
export const PROJECT_FILTERS = [
  { id: "all", label: "ALL_PROJECTS" },
  { id: "full-stack", label: "FULL_STACK" },
  { id: "automation", label: "AUTOMATION" },
  { id: "ui-ux", label: "UI/UX" },
];

// ============ SKILLS DATA ============
export const SKILLS_DATA = [
  {
    name: "C",
    icon: <SiC size={40} />,
    version: "C17",
    category: "languages",
    description: "Low-level systems programming and memory management.",
    proficiency: 85
  },
  {
    name: "C++",
    icon: <SiCplusplus size={40} />,
    version: "C++20",
    category: "languages",
    description: "Object-oriented programming and high-performance applications.",
    proficiency: 80
  },
  {
    name: "Python",
    icon: <SiPython size={40} />,
    version: "v3.11",
    category: "languages",
    description: "Automation, scripting, and data processing.",
    proficiency: 70
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={40} />,
    version: "LTS",
    category: "frameworks",
    description: "Server-side JavaScript runtime for backend development.",
    proficiency: 75
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={40} />,
    version: "Latest",
    category: "tools",
    description: "Backend framework for building efficient and scalable APIs.",
    proficiency: 10
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
    version: "ES6+",
    category: "languages",
    description: "Dynamic interface logic and web interactivity.",
    proficiency: 70
  },
  {
    name: "Dart",
    icon: <SiDart size={40} />,
    version: "v3",
    category: "languages",
    description: "Modern language for cross-platform mobile development.",
    proficiency: 80
  },
  {
    name: "SQL",
    icon: <FaDatabase size={40} />,
    version: "Standard",
    category: "languages",
    description: "Relational database queries and data manipulation.",
    proficiency: 80
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={40} />,
    version: "HTML5",
    category: "languages",
    description: "Semantic markup and web page structure.",
    proficiency: 75
  },
  {
    name: "CSS",
    icon: <SiCss3 size={40} />,
    version: "CSS3",
    category: "languages",
    description: "Styling, layouts, and responsive web design.",
    proficiency: 75
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={40} />,
    version: "v3",
    category: "frameworks",
    description: "Cross-platform mobile app development framework.",
    proficiency: 75
  },
  {
    name: "Git & GitHub",
    icon: <SiGithub size={40} />,
    version: "Latest",
    category: "tools",
    description: "Version control and collaborative code management.",
    proficiency: 75
  },
  {
    name: "Linux",
    icon: <SiLinux size={40} />,
    version: "Latest",
    category: "tools",
    description: "Linux environment for programming and tooling.",
    proficiency: 65
  },
  {
    name: "Docker",
    icon: <SiDocker size={40} />,
    version: "Stable",
    category: "tools",
    description: "Containerization and isolated deployment environments.",
    proficiency: 60
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={40} />,
    version: "Latest",
    category: "frameworks",
    description: "Modern, high-performance web framework for building APIs with Python.",
    proficiency: 80
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} />,
    version: "v15+",
    category: "tools",
    description: "Powerful, open-source object-relational database system.",
    proficiency: 75
  },
  {
    name: "Redis",
    icon: <SiRedis size={40} />,
    version: "Latest",
    category: "tools",
    description: "In-memory data structure store used as a database, cache, and message broker.",
    proficiency: 70
  }
];

// ============ SKILL CATEGORIES ============
export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All', icon: 'apps' },
  { id: 'languages', label: 'Languages', icon: 'code' },
  { id: 'frameworks', label: 'Frameworks', icon: 'grid_view' },
  { id: 'tools', label: 'Tools', icon: 'build' }
];

// ============ SOCIAL LINKS ============
export const SOCIAL_LINKS = {
  github: "https://github.com/RamanKumar00",
  linkedin: "https://www.linkedin.com/in/raman-kumar-b80913282/",
  instagram: "https://www.instagram.com/__.ramankumar__/",
  twitter: "https://x.com/ramanku27623148",
  stackoverflow: "https://stackoverflow.com/users/28973253/raman-kumar"
};

export const SOCIAL_LINKS_LIST = [
  {
    icon: "fa-brands fa-github",
    materialIcon: "code",
    title: "GitHub",
    desc: "github.com/RamanKumar00",
    link: "https://github.com/RamanKumar00",
  },
  {
    icon: "fa-brands fa-linkedin",
    materialIcon: "work",
    title: "LinkedIn",
    desc: "in/raman-kumar",
    link: "https://www.linkedin.com/in/raman-kumar-b80913282/",
  },
  {
    icon: "fa-brands fa-instagram",
    materialIcon: "photo_camera",
    title: "Instagram",
    desc: "@__.ramankumar__",
    link: "https://www.instagram.com/__.ramankumar__/",
  },
  {
    icon: "fa-brands fa-stack-overflow",
    materialIcon: "layers",
    title: "Stack Overflow",
    desc: "raman-kumar",
    link: "https://stackoverflow.com/users/28973253/raman-kumar",
  },
];

// ============ CONTACT DATA ============
export const CONTACT_DATA = {
  title: "Let's Build Something Amazing",
  subtitle: "Ready to collaborate on your next project? Drop me a message and let's discuss how we can work together.",
  description: "Need a Hero? Let's build the future. Currently available for freelance missions and full-time deployment. Secure channel is open.",
  email: "ramankr7321@gmail.com",
  phone: "+91 7737892513",
  location: "Chandigarh, India",
  availability: "Available for freelance work",
};

// ============ NAVBAR DATA ============
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'experience', label: 'Experience', icon: 'work_history' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'projects', label: 'Projects', icon: 'work' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

// ============ FOOTER DATA ============
export const FOOTER_DATA = {
  copyright: `© ${new Date().getFullYear()} Raman Kumar. All rights reserved.`,
  tagline: "Built with React & Passion",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============ STATS DATA ============
export const STATS = {
  linesOfCode: 1.5,
  missions: 4,
  bugsFix: 99.9,
  experience: { years: 2, label: "months" },
  projects: { count: "4+", label: "deployed" },
  contributions: { default: "20+", label: "approx" },
  skillMatrix: [
    { name: "Flutter / Mobile", percent: 85 },
    { name: "Python / Automation", percent: 95 },
    { name: "System Architecture", percent: 90 },
  ],
};
