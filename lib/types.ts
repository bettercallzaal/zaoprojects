export interface CTA {
  label: string;
  href: string;
  helperText: string;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  nextMilestone: string;
  nextTodo: string;
  progress: number;
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
