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
  SiNestjs
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
    title: "Freelance App Developer",
    company: "Freelance Project",
    period: "2024.09 - 2024.10",
    location: "Remote",
    status: "Completed",
    description: [
      "Designed and developed a cross-platform mobile application using Flutter and Dart with clean, intuitive UI/UX.",
      "Integrated RESTful APIs using Postman for testing and Node.js backend services for seamless data communication.",
      "Conducted comprehensive software testing to ensure application reliability and performance across devices.",
      "Collaborated with client to translate requirements into a functional, visually appealing mobile application.",
    ],
    skills: ["Flutter", "Dart", "Node.js", "Postman", "API Integration"],
    isActive: false,
    icon: "phone_android",
    bgIcon: "code",
  },
  {
    
    title: "Python Automation Intern",
    company: "Scorptech Pvt Ltd",
    period: "2024.06 - 2024.08",
    location: "Remote",
    status: "Completed",
    description: [
      "Designed and developed Python-based automation scripts to streamline repetitive operational workflows.",
      "Built robust web scraping solutions using Selenium, BeautifulSoup, and Pandas to extract data from dynamic and static websites.",
      "Processed, cleaned, and transformed raw web data into structured formats for analysis and storage.",
      "Increased data collection efficiency by 70% through optimized automation and scraping pipelines.",
    ],
    skills: ["Python", "Selenium", "BeautifulSoup", "Automation", "Pandas"],
    isActive: false,
    icon: "work",
    bgIcon: "terminal",
  },
];

// ============ EDUCATION DATA ============
export const EDUCATION_DATA = [
  {
    degree: "B.E. in Computer Science",
    institution: "University Of Engineering And Technology, Chandigarh",
    year: "2023 - 2027",
    status: "In Progress",
    icon: "apartment",
    bgIcon: "neurology",
    highlights: [
      "Focus on Full Stack Development and App Development",
      "Studying advanced algorithms, web technologies, and distributed systems"
    ],
    skills: ["Full Stack", "App development", "Web Tech"]
  },
  {
    degree: "Secondary Education in PCM",
    institution: "Maharishi Arvind Public School, Kota",
    year: "2021 - 2023",
    status: "Completed",
    icon: "school",
    bgIcon: "code_blocks",
    highlights: [
      "Strong foundation in mathematics and physics",
    ],
    skills: [ "Math", "Physics", "Chemistry"],
  },

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
    title: "KalaaKriti",
    status: "BETA",
    statusType: "active",
    badge: "FEATURED",
    description: "Modern Android wallpaper app with glassmorphic UI. Features thousands of high-res images via Pexels API, offline access, and Supabase backend.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80",
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
