import { Project } from "@/lib/types";

/**
 * ZAO PROJECTS DATA
 * ==================
 * Single source of truth.
 * Now includes categories for filtering.
 */
export const projects: Project[] = [
  {
    id: "wavewarz",
    name: "WaveWarZ",
    category: "Platforms",
    shortDescription:
      "Battle-style music competition platform where artists compete for community votes.",
    milestone: {
      title: "Bracket Seeding Algorithm",
      timeline: "2 Weeks",
      progress: 85,
    },
    ctas: {
      primary: {
        label: "Enter Arena",
        href: "https://www.wavyfans.net/wavewarz",
        helperText: "Compete in battles",
      },
      secondary: {
        label: "About",
        href: "https://thezao.com",
        helperText: "How it works",
      },
    },
  },
  {
    id: "zao-fractal",
    name: "ZAO Fractal",
    category: "Ecosystem",
    shortDescription:
      "Decentralized governance and decision-making framework.",
    milestone: {
      title: "Governance Dashboard v1",
      timeline: "3 Weeks",
      progress: 75,
    },
    ctas: {
      primary: {
        label: "Governance",
        href: "https://nexus.thezao.com",
        helperText: "Vote on proposals",
      },
      secondary: {
        label: "Docs",
        href: "https://thezao.com",
        helperText: "Read the whitepaper",
      },
    },
  },
  {
    id: "zao-festivals",
    name: "ZAO Festivals",
    category: "Community",
    shortDescription:
      "IRL and virtual festival experiences connecting artists globally.",
    milestone: {
      title: "Venue Partnerships",
      timeline: "Ongoing",
      progress: 90,
    },
    ctas: {
      primary: {
        label: "Get Updates",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Join the list",
      },
      secondary: {
        label: "Archives",
        href: "https://thezao.com",
        helperText: "Past events",
      },
    },
  },
  {
    id: "zao-cards",
    name: "ZAO Cards",
    category: "Ecosystem",
    shortDescription:
      "Collectible artist cards unlocking exclusive content.",
    milestone: {
      title: "Metadata Standard",
      timeline: "Done",
      progress: 100,
    },
    ctas: {
      primary: {
        label: "Collect",
        href: "https://zao.cards",
        helperText: "Browse cards",
      },
      secondary: {
        label: "Create",
        href: "https://nexus.thezao.com",
        helperText: "For artists",
      },
    },
  },
  {
    id: "coc-concertz",
    name: "COC Concertz",
    category: "Community",
    shortDescription:
      "Curated concert series for emerging independent artists.",
    milestone: {
      title: "Spring Season Booking",
      timeline: "1 Month",
      progress: 40,
    },
    ctas: {
      primary: {
        label: "Apply",
        href: "https://nexus.thezao.com",
        helperText: "Perform live",
      },
      secondary: {
        label: "Calendar",
        href: "https://thezao.com",
        helperText: "Upcoming shows",
      },
    },
  },
  {
    id: "zao-newsletter",
    name: "ZAO Newsletter",
    category: "Community",
    shortDescription:
      "Weekly ecosystem updates and artist spotlights.",
    milestone: {
      title: "Subscriber Growth",
      timeline: "Continuous",
      progress: 78,
    },
    ctas: {
      primary: {
        label: "Read",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Latest issue",
      },
      secondary: {
        label: "Subscribe",
        href: "https://paragraph.xyz/@thezao",
        helperText: "Get updates",
      },
    },
  },
  {
    id: "student-loanz",
    name: "Student $LOANZ",
    category: "Platforms",
    shortDescription:
      "Financial support for music education and equipment.",
    milestone: {
      title: "Eligibility Checker",
      timeline: "3 Weeks",
      progress: 55,
    },
    ctas: {
      primary: {
        label: "Apply",
        href: "https://nexus.thezao.com",
        helperText: "Get funded",
      },
      secondary: {
        label: "Support",
        href: "https://thezao.com",
        helperText: "Donate",
      },
    },
  },
  {
    id: "zao-calendar",
    name: "ZAO Calendar",
    category: "Ecosystem",
    shortDescription:
      "Unified event calendar for the ecosystem.",
    milestone: {
      title: "Google Cal Sync",
      timeline: "1 Week",
      progress: 85,
    },
    ctas: {
      primary: {
        label: "View",
        href: "https://nexus.thezao.com",
        helperText: "All events",
      },
      secondary: {
        label: "Submit",
        href: "https://nexus.thezao.com",
        helperText: "Add event",
      },
    },
  },
  {
    id: "lets-talk-web3",
    name: "Let's Talk About Web3",
    category: "Community",
    shortDescription:
      "Educational series demystifying blockchain.",
    milestone: {
      title: "Episode 10 Production",
      timeline: "This Week",
      progress: 95,
    },
    ctas: {
      primary: {
        label: "Watch",
        href: "https://thezao.com",
        helperText: "Start learning",
      },
      secondary: {
        label: "Suggest",
        href: "https://nexus.thezao.com",
        helperText: "Topic ideas",
      },
    },
  },
  {
    id: "midi-zao-nkz",
    name: "Midi-ZAO-NKZ",
    category: "Platforms",
    shortDescription:
      "MIDI-powered creative tools for producers.",
    milestone: {
      title: "Core Audio Engine",
      timeline: "1 Month",
      progress: 40,
    },
    ctas: {
      primary: {
        label: "Beta Access",
        href: "https://nexus.thezao.com",
        helperText: "Try it out",
      },
      secondary: {
        label: "Learn",
        href: "https://thezao.com",
        helperText: "More info",
      },
    },
  },
];
