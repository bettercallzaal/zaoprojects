# ZAO Progress Timeline Dashboard

A production-ready, single-page progress timeline showing the real progress of the ZAO ecosystem.

**Version:** v0.1 — Living Document

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deploy Target:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Local Development

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build

## How to Update Progress

All project data lives in a single file: **`/data/projects.ts`**

### To update a project's progress:

1. Open `/data/projects.ts`
2. Find the project by its `id`
3. Update the relevant fields:

```typescript
{
  id: "wavewarz",
  name: "WaveWarZ",
  shortDescription: "...",
  nextMilestone: "Your new milestone here",
  nextTodo: "Your next action item here",
  progress: 75, // Update percentage (0-100)
  ctas: {
    primary: {
      label: "Button text",
      href: "https://...",
      helperText: "Why click this"
    },
    secondary: {
      // ...
    }
  }
}
```

### Progress Semantics

- **0-100%** represents progress toward the **current milestone**
- **100%** means the current milestone is complete
- After completion, reset progress and update `nextMilestone`

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   └── page.tsx        # Main page (composition only)
├── components/
│   ├── ProjectCard.tsx # Individual project display
│   ├── ProgressBar.tsx # Animated progress indicator
│   └── CTAButtons.tsx  # Call-to-action buttons
├── data/
│   └── projects.ts     # ⭐ SINGLE SOURCE OF TRUTH
├── lib/
│   ├── types.ts        # TypeScript interfaces
│   └── constants.ts    # Site config, links, content
└── styles/
    └── globals.css     # Global styles + Tailwind
```

## Design Principles

- **Data-driven UI:** One source of truth
- **Readable over clever:** Simple, maintainable code
- **Shallow abstraction:** No unnecessary complexity
- **Every file answers one question**

## Links

- **ZAO Nexus:** https://nexus.thezao.com
- **Main Site:** https://thezao.com
- **Newsletter:** https://paragraph.xyz/@thezao

---

Built with ❤️ for independent artists.
