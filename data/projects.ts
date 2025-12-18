import { Project } from "@/lib/types";

/**
 * ZAO PROJECTS DATA
 * ==================
 * This is the single source of truth for all project data.
 *
 * To update progress, milestones, or CTAs:
 * Simply edit the relevant project object below.
 *
 * Progress semantics:
 * - 0-100% represents progress toward the CURRENT milestone
 * - 100% means the current milestone is complete
 * - After completion, reset progress and update nextMilestone
 */
export const projects: Project[] = [
  {
    id: "wavewarz",
    name: "WaveWarZ",
    shortDescription:
      "Battle-style music competition platform where artists compete for community votes and prizes.",
    nextMilestone: "Launch Season 2 with expanded voting mechanics",
    nextTodo: "Finalize bracket seeding algorithm and test voting flow",
    progress: 65,
    ctas: {
      primary: {
        label: "Enter the arena",
        href: "https://www.wavyfans.net/wavewarz",
        helperText: "Compete or vote in live music battles",
      },
      secondary: {
        label: "Learn more",
        href: "https://thezao.com",
        helperText: "Discover how WaveWarZ works",
      },
    },
  },
  {
    id: "zao-fractal",
    name: "ZAO Fractal",
    shortDescription:
      "Decentralized governance and decision-making framework for the ZAO ecosystem.",
    nextMilestone: "Deploy governance dashboard v1",
    nextTodo: "Complete smart contract audit review",
    progress: 40,
    ctas: {
      primary: {
        label: "Join governance",
        href: "https://nexus.thezao.com",
        helperText: "Participate in ecosystem decisions",
      },
      secondary: {
        label: "Read the docs",
        href: "https://thezao.com",
        helperText: "Understand the fractal model",
      },
    },
  },
  {
    id: "zao-festivals",
    name: "ZAO Festivals",
    shortDescription:
      "IRL and virtual festival experiences connecting artists with global audiences.",
    nextMilestone: "Announce Q1 2025 festival lineup",
    nextTodo: "Confirm venue partnerships and artist roster",
    progress: 55,
    ctas: {
      primary: {
        label: "Get notified",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Be first to know about upcoming events",
      },
      secondary: {
        label: "Past events",
        href: "https://thezao.com",
        helperText: "See what we've done before",
      },
    },
  },
  {
    id: "zao-cards",
    name: "ZAO Cards",
    shortDescription:
      "Collectible artist cards that unlock exclusive content and community access.",
    nextMilestone: "Ship public minting interface",
    nextTodo: "Integrate payment processing and metadata storage",
    progress: 70,
    ctas: {
      primary: {
        label: "Explore cards",
        href: "https://zao.cards",
        helperText: "Browse and collect artist cards",
      },
      secondary: {
        label: "For artists",
        href: "https://nexus.thezao.com",
        helperText: "Create your own card collection",
      },
    },
  },
  {
    id: "coc-concertz",
    name: "COC Concertz",
    shortDescription:
      "Curated concert series showcasing emerging independent artists.",
    nextMilestone: "Book 5 shows for Spring 2025 season",
    nextTodo: "Finalize venue contracts in 3 target cities",
    progress: 35,
    ctas: {
      primary: {
        label: "Apply to perform",
        href: "https://nexus.thezao.com",
        helperText: "Submit your artist application",
      },
      secondary: {
        label: "Upcoming shows",
        href: "https://thezao.com",
        helperText: "See the concert calendar",
      },
    },
  },
  {
    id: "zao-newsletter",
    name: "ZAO Newsletter",
    shortDescription:
      "Weekly updates on ecosystem progress, artist spotlights, and industry insights.",
    nextMilestone: "Reach 1,000 active subscribers",
    nextTodo: "Publish next edition with project updates",
    progress: 80,
    ctas: {
      primary: {
        label: "Subscribe now",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Get updates in your inbox",
      },
      secondary: {
        label: "Read archives",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Catch up on past editions",
      },
    },
  },
  {
    id: "student-loanz",
    name: "Student $LOANZ",
    shortDescription:
      "Financial support program helping music students access education and equipment.",
    nextMilestone: "Launch application portal for Spring cohort",
    nextTodo: "Build eligibility checker and application form",
    progress: 45,
    ctas: {
      primary: {
        label: "Apply for support",
        href: "https://nexus.thezao.com",
        helperText: "Check your eligibility",
      },
      secondary: {
        label: "Donate",
        href: "https://thezao.com",
        helperText: "Support the next generation",
      },
    },
  },
  {
    id: "zao-calendar",
    name: "ZAO Calendar",
    shortDescription:
      "Unified event calendar for all ZAO ecosystem activities and community meetups.",
    nextMilestone: "Integrate with major calendar platforms",
    nextTodo: "Add Google Calendar and iCal export functionality",
    progress: 50,
    ctas: {
      primary: {
        label: "View calendar",
        href: "https://nexus.thezao.com",
        helperText: "See all upcoming events",
      },
      secondary: {
        label: "Submit event",
        href: "https://nexus.thezao.com",
        helperText: "Add your community event",
      },
    },
  },
  {
    id: "lets-talk-web3",
    name: "Let's Talk About Web3",
    shortDescription:
      "Educational content series demystifying blockchain and web3 for musicians.",
    nextMilestone: "Release Episode 10 with guest artist interview",
    nextTodo: "Edit and publish next episode",
    progress: 60,
    ctas: {
      primary: {
        label: "Watch episodes",
        href: "https://thezao.com",
        helperText: "Learn at your own pace",
      },
      secondary: {
        label: "Suggest topics",
        href: "https://nexus.thezao.com",
        helperText: "Tell us what to cover next",
      },
    },
  },
  {
    id: "midi-zao-nkz",
    name: "Midi-ZAO-NKZ",
    shortDescription:
      "MIDI-powered creative tools and instruments for music production.",
    nextMilestone: "Beta release of first instrument plugin",
    nextTodo: "Complete cross-platform compatibility testing",
    progress: 30,
    ctas: {
      primary: {
        label: "Join beta",
        href: "https://nexus.thezao.com",
        helperText: "Test early builds",
      },
      secondary: {
        label: "Learn more",
        href: "https://thezao.com",
        helperText: "See what we're building",
      },
    },
  },
];
