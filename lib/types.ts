export interface CTA {
  label: string;
  href: string;
  helperText: string;
}

export interface Milestone {
  title: string;
  timeline: string;
  progress: number;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  milestones: Milestone[];
  ctas: {
    primary: CTA;
    secondary: CTA;
  };
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}
