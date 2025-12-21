import { NavLink, SocialLink } from "./types";

export const SITE_CONFIG = {
  title: "ZAO Progress",
  version: "v0.2 — Infrastructure Hub",
  description:
    "ZAO is a live ecosystem of creators, communities, and tools — showing what's happening now and what's coming next.",
} as const;

export const HERO_CONTENT = {
  headline: "ZAO is shipping.",
  subhead:
    "ZAO is a live ecosystem of creators, communities, and tools. This dashboard shows what's happening now and what's coming next. Join us as we build infrastructure for independent artists.",
  primaryCta: {
    label: "Join the ecosystem",
    href: "https://nexus.thezao.com",
  },
  secondaryCta: {
    label: "Read updates",
    href: "https://paragraph.xyz/@thezao",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Explore Projects", href: "#projects", isExternal: false },
  { label: "Nexus", href: "https://nexus.thezao.com", isExternal: true },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Nexus", href: "https://nexus.thezao.com" },
  { label: "Website", href: "https://thezao.com" },
  { label: "Newsletter", href: "https://paragraph.xyz/@thezao" },
];

export const FOOTER_MISSION =
  "THE ZAO demystifies emerging technology for musicians to empower independent artists to bring the profit margin, the data, and IP rights back to independents.";

export const DEFAULT_LINKS = {
  hub: "https://nexus.thezao.com",
  main: "https://thezao.com",
  newsletter: "https://paragraph.xyz/@thezao",
  wavewarz: "https://www.wavyfans.net/wavewarz",
  zaoCards: "https://zao.cards",
  zalora: "https://zalora.thezao.com",
} as const;
