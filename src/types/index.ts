export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  workflowNote: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  features: string[];
  mockupType: "academ-iq" | "jansetu" | "bhoomi-intel";
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: "Currently Learning" | "Familiar" | "Working Knowledge";
  }[];
}

export interface HackathonItem {
  name: string;
  year: string;
  project: string;
  organizer?: string;
  problem: string;
  description: string;
  team: string;
  role: string;
  contribution: string;
  result: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  department: string;
  period: string;
  status: string;
  summary: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  honors?: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  dateOrYear: string;
  description: string;
  tag: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  issueDate: string;
  topics: string[];
  credentialNote: string;
}

export interface NCCItem {
  title: string;
  rank: string;
  certificate: string;
  achievement: string;
  event: string;
  date: string;
  description: string;
}
