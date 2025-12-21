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
    milestones: [
      {
        title: "Bracket Seeding Algorithm",
        timeline: "2 Weeks",
        progress: 85,
      },
      {
        title: "Community Voting Mechanics",
        timeline: "1 Month",
        progress: 60,
      },
      {
        title: "Season 2 Launch",
        timeline: "Q1 2025",
        progress: 20,
      },
    ],
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
    milestones: [
      {
        title: "Governance Dashboard v1",
        timeline: "3 Weeks",
        progress: 75,
      },
      {
        title: "Smart Contract Audit",
        timeline: "1 Month",
        progress: 40,
      },
      {
        title: "Community DAO Vote",
        timeline: "Q2 2025",
        progress: 0,
      },
    ],
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
    milestones: [
      {
        title: "Venue Partnerships",
        timeline: "Ongoing",
        progress: 90,
      },
      {
        title: "Artist Lineup curation",
        timeline: "Feb 2025",
        progress: 50,
      },
      {
        title: "Ticket Sales Launch",
        timeline: "Mar 2025",
        progress: 10,
      },
    ],
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
    milestones: [
      {
        title: "Metadata Standard",
        timeline: "Done",
        progress: 100,
      },
      {
        title: "Public Minting UI",
        timeline: "2 Weeks",
        progress: 65,
      },
      {
        title: "Marketplace Integration",
        timeline: "Q2 2025",
        progress: 25,
      },
    ],
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
    milestones: [
      {
        title: "Spring Season Booking",
        timeline: "1 Month",
        progress: 40,
      },
      {
        title: "City Selection",
        timeline: "2 Weeks",
        progress: 80,
      },
      {
        title: "Promo Campaign",
        timeline: "Mar 2025",
        progress: 15,
      },
    ],
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
    milestones: [
      {
        title: "Subscriber Growth",
        timeline: "Continuous",
        progress: 78,
      },
      {
        title: "Content Automation",
        timeline: "1 Week",
        progress: 90,
      },
      {
        title: "Sponsorship Deck",
        timeline: "Q1 2025",
        progress: 30,
      },
    ],
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
    milestones: [
      {
        title: "Eligibility Checker",
        timeline: "3 Weeks",
        progress: 55,
      },
      {
        title: "Application Portal",
        timeline: "1 Month",
        progress: 40,
      },
      {
        title: "Fundraising Round",
        timeline: "Q2 2025",
        progress: 10,
      },
    ],
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
    milestones: [
      {
        title: "Google Cal Sync",
        timeline: "1 Week",
        progress: 85,
      },
      {
        title: "Event Submission Form",
        timeline: "2 Weeks",
        progress: 60,
      },
      {
        title: "Mobile Widget",
        timeline: "1 Month",
        progress: 20,
      },
    ],
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
    milestones: [
      {
        title: "Episode 10 Production",
        timeline: "This Week",
        progress: 95,
      },
      {
        title: "Guest Booking",
        timeline: "Ongoing",
        progress: 70,
      },
      {
        title: "Interactive Quizzes",
        timeline: "2 Months",
        progress: 10,
      },
    ],
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
    milestones: [
      {
        title: "Core Audio Engine",
        timeline: "1 Month",
        progress: 40,
      },
      {
        title: "VST3 Wrapper",
        timeline: "2 Months",
        progress: 20,
      },
      {
        title: "UI Implementation",
        timeline: "Q2 2025",
        progress: 5,
      },
    ],
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
