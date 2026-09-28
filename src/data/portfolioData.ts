import {
  ProjectItem,
  SkillCategory,
  HackathonItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  CertificationItem,
  NCCItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Shivam Singh",
  title: "BCA Student • Aspiring Web Developer",
  headline: "Building my path into Web Development.",
  subheadline:
    "BCA student at the University of Allahabad, exploring web development through real projects, hackathons, and AI-assisted development.",
  location: "Prayagraj, India",
  college: "University of Allahabad",
  degree: "Bachelor of Computer Applications (BCA)",
  academicYears: "2024–2027",
  cgpa: "7.5",
  availability: "Open to Internship Opportunities",
  phone: "7880236266",
  email: "singhshivamop36@gmail.com",
  github: "https://github.com/Shivam3635",
  linkedin: "https://www.linkedin.com/in/shivam-singh-5147a1285",
  resumePath: "/resume.pdf",
};

export const CODE_SNIPPET = `const shivam = {
  education: "BCA",
  focus: "Web Development",
  learning: ["Python", "JavaScript", "Web"],
  building: true
};`;

export const ABOUT_DETAILS = {
  paragraphs: [
    "I am an undergraduate BCA student at the University of Allahabad with a strong curiosity for web technologies and practical software development. Rather than relying solely on textbook theory, I focus on project-based learning—taking ideas and developing them into usable, hosted web applications.",
    "My current workflow embraces modern AI-assisted development tools alongside hands-on problem solving, prompting, environment configuration, Git version control, and real-world deployments. I actively participate in hackathons and campus tech events to learn collaborative software engineering and fast iteration under constraints.",
    "I am actively seeking a Web Developer internship where I can learn under experienced developers, contribute to real production codebases, and continue growing my frontend and engineering foundations.",
  ],
  stats: [
    { label: "Education", value: "BCA — Univ. of Allahabad" },
    { label: "Location", value: "Prayagraj, India" },
    { label: "Current Focus", value: "Web Development" },
    { label: "Availability", value: "Open to Internships" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Working Knowledge" },
      { name: "JavaScript", level: "Working Knowledge" },
      { name: "C", level: "Working Knowledge" },
      { name: "Java", level: "Familiar" },
      { name: "C#", level: "Familiar" },
      { name: "SQL", level: "Working Knowledge" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: "Working Knowledge" },
      { name: "CSS", level: "Working Knowledge" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Flask", level: "Working Knowledge" },
    ],
  },
  {
    title: "Database & Backend Services",
    skills: [
      { name: "MySQL", level: "Working Knowledge" },
      { name: "Firebase (Auth & Firestore)", level: "Working Knowledge" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", level: "Working Knowledge" },
      { name: "GitHub", level: "Working Knowledge" },
      { name: "Linux", level: "Familiar" },
    ],
  },
  {
    title: "Development Workflow",
    skills: [
      { name: "AI-Assisted Development", level: "Working Knowledge" },
      { name: "Prompt Engineering", level: "Working Knowledge" },
      { name: "Environment Configuration", level: "Working Knowledge" },
      { name: "Deployment (Vercel/Hosting)", level: "Working Knowledge" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: "Working Knowledge" },
      { name: "Leadership", level: "Working Knowledge" },
      { name: "Teamwork", level: "Working Knowledge" },
      { name: "Problem Solving", level: "Working Knowledge" },
      { name: "Critical Thinking", level: "Working Knowledge" },
      { name: "Time Management", level: "Working Knowledge" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English", level: "Working Knowledge" },
      { name: "Hindi", level: "Working Knowledge" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "academiq",
    title: "AcademIQ",
    category: "Academic Portal",
    description:
      "A centralized academic information platform designed to bring college notices, academic calendars, exam-related information, and student resources into one single mobile-friendly digital hub.",
    workflowNote:
      "Developed through an AI-assisted development workflow with hands-on configuration, Firebase integration, and Vercel deployment.",
    githubUrl: "https://github.com/Shivam3635/AcademIQ",
    liveUrl: "https://academ-iq-sigma.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
    features: [
      "Student Dashboard with quick-access navigation",
      "Real-time campus notice board eliminating fragmented chat alerts",
      "Official academic calendar with color-coded instruction and holiday tracking",
      "College administrator functionality for managing announcements",
    ],
    mockupType: "academ-iq",
  },
  {
    id: "jansetu",
    title: "JanSetu AI",
    category: "Civic Tech Platform",
    description:
      "An AI-powered civic platform designed to transform multilingual citizen infrastructure complaints (Hindi & English) into structured data and actionable geographic insights for municipal planning.",
    workflowNote:
      "Created for Code for Community Hackathon 2026. Contributed to research, solution ideation, prompting, AI-assisted development, configuration, Git/GitHub, and deployment. Received judge appreciation.",
    githubUrl: "https://github.com/Shivam3635/JanSetuAI",
    liveUrl: "https://jan-setu-ai-phi.vercel.app/",
    tags: ["Flask", "Gemini AI NLU", "Firebase Firestore", "Google Maps", "Web Speech API"],
    features: [
      "Multilingual reporting in Hindi and English via speech-to-text and text",
      "Google Gemini NLU extraction into structured severity and category parameters",
      "Automated coordinate detection and grievance clustering",
      "Hotspot visualization map to direct public works resource allocation",
    ],
    mockupType: "jansetu",
  },
  {
    id: "bhoomi-intel",
    title: "Bhoomi Intel",
    category: "Evidence Intelligence Layer",
    description:
      "An evidence intelligence platform for land governance connecting fragmented research papers, cadastral maps, and remote-sensing datasets into traceable policy insights and automated decision briefs.",
    workflowNote:
      "Developed through an AI-assisted development workflow with hands-on architecture configuration, prompt engineering, Git version control, and deployment.",
    githubUrl: "https://github.com/Shivam3635/Bhoomi_Intel",
    liveUrl: "https://bhoomi-intel.vercel.app/",
    tags: ["Next.js", "Python FastAPI", "PostGIS / Leaflet", "RAG / AI Layer", "Recharts"],
    features: [
      "100% Traceability connecting insights directly to source land documents",
      "Multi-stage semantic retrieval and evidence graph synthesis",
      "GIS spatial indicators and interactive map layer visualization",
      "Automated policy scenario model and brief generator",
    ],
    mockupType: "bhoomi-intel",
  },
];

export const HACKATHONS: HackathonItem[] = [
  {
    name: "Smart India Hackathon 2026",
    year: "2026",
    project: "Vaidrith",
    problem: "IP-SAKTI Sahayak",
    description:
      "A multilingual, RAG-based AI assistant for Intellectual Property and regulatory guidance in Ayurveda across national and international regimes.",
    team: "6 members",
    role: "Presenter",
    contribution:
      "Designed the presentation deck (PPT) and delivered the live pitch on stage representing the team.",
    result:
      "Qualified through university internal selection and progressed to the next official evaluation stage.",
  },
  {
    name: "Code for Community Hackathon 2026",
    year: "2026",
    organizer: "CMP Degree College in collaboration with GDG Prayagraj",
    project: "JanSetu AI",
    problem: "Civic Infrastructure Grievance Intelligence",
    description:
      "An AI-powered civic platform bridging grassroots citizen infrastructure issues with data-driven public planning.",
    team: "2 members",
    role: "Research & Prompting",
    contribution:
      "Conducted problem research, structured prompts for multilingual NLU, and handled AI-assisted application setup and deployment.",
    result:
      "Received special appreciation from judges for practical applicability to local civic governance.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Event Management Volunteer",
    organization: "Quantum Quirks Coding Club",
    department:
      "Centre of Computer Education and Training, University of Allahabad",
    period: "March 2026 – Present",
    status: "Active",
    summary:
      "Actively supporting the technical community and student-led hackathons within the university campus.",
    responsibilities: [
      "Assisted with organizing coding competitions and collegiate hackathons",
      "Supported campus-wide event outreach and technical promotion",
      "Helped with venue preparation, attendee registration, and participant coordination",
      "Collaborated closely with the core student organizing team across 3–4 technical events",
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Allahabad",
    period: "2024 – 2027",
    score: "7.5",
    scoreLabel: "CGPA",
    details: "Focusing on computer science fundamentals, web development, and database systems.",
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "Govt. Sr. Sec. School, Shahjahanpur (RBSE)",
    period: "2023",
    score: "87.4%",
    scoreLabel: "Percentage",
    honors: "School Topper",
    details: "Graduated with highest marks in school cohort.",
  },
  {
    degree: "Class X (Secondary)",
    institution: "Govt. Sr. Sec. School, Shahjahanpur (RBSE)",
    period: "2021",
    score: "95.83%",
    scoreLabel: "Percentage",
    details: "Achieved top academic distinction.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "95.83% in Class X",
    category: "Academic Excellence",
    dateOrYear: "2021",
    description: "Ranked among the top performers in the state secondary board examinations.",
    tag: "Distinction",
  },
  {
    title: "87.4% & School Topper — Class XII",
    category: "Academic Honors",
    dateOrYear: "2023",
    description: "Secured top position in senior secondary school board examinations.",
    tag: "Topper",
  },
  {
    title: "Smart India Hackathon 2026 Internal Selection Qualified",
    category: "Hackathon",
    dateOrYear: "2026",
    description: "Qualified institutional screening with team project 'Vaidrith' for IP-SAKTI Sahayak.",
    tag: "Qualified",
  },
  {
    title: "Best Drill Cadet — Army Attachment Camp",
    category: "NCC Discipline",
    dateOrYear: "November 2025",
    description: "Awarded Best Drill Cadet distinction during national Army Attachment training.",
    tag: "Excellence",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "TCS iON Career Edge – Young Professional",
    provider: "Tata Consultancy Services (TCS iON)",
    issueDate: "25 February 2026",
    credentialNote: "Verified completion of foundational corporate, technical, and communication training.",
    topics: [
      "Communication Skills & Presentation Skills",
      "Career Guidance & Resume Writing",
      "Group Discussion & Interview Preparation",
      "IT Foundational Skills",
      "Overview of Artificial Intelligence",
    ],
  },
];

export const NCC_INFO: NCCItem = {
  title: "National Cadet Corps (NCC)",
  rank: "CQMS (Company Quarter Master Sergeant)",
  certificate: "NCC 'B' Certificate",
  achievement: "Best Drill Cadet",
  event: "Army Attachment Camp",
  date: "November 2025",
  description:
    "Developed leadership, operational discipline, and teamwork through rigorous drill, field training, and camp administration duties.",
};
