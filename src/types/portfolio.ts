export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  featured?: boolean;
  badge?: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  profileImage: string;
  heroImage?: string;
  aboutImage?: string;
  projects: Project[];
  skills: Skill[];
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}
