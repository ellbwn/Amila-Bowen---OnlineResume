export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  role: string;
  period: string;
  duration?: string;
  companyDescription?: string;
  awards?: string[];
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  honors?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeColor?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  aboutMe: string;
}

export interface ProjectOrHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics?: string;
  tags: string[];
}
