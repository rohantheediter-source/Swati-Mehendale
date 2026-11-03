export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Product Owner' | 'Business Analyst' | 'Both';
  category: 'product' | 'ba' | 'regulatory' | 'all';
  responsibilities: string[];
  keyAchievement: string;
  domain: string;
  technologies: string[];
  regulations?: string[];
  caseStudyId?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  domain: string;
  overview: string;
  challenge: string;
  approach: string[];
  keyArtifacts: string[];
  technologies: string[];
  measurableOutcomes: string[];
}

export interface CompetencyGroup {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    detail: string;
  }[];
}

