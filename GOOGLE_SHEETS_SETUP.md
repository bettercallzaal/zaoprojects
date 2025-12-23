# 📊 ZAO Dashboard: Google Sheets Setup

You can now manage all your project data directly from a Google Sheet. Follow these steps to connect your sheet to the dashboard.

## 1. Create your Sheet
Create a new Google Sheet with the following columns in the first row (Header):

| Column Name | Description | Example |
| :--- | :--- | :--- |
| `id` | Unique ID (no spaces) | `wavewarz` |
| `name` | Project Name | `WaveWarZ` |
| `category` | `Ecosystem` \| `Platforms` \| `Community` | `Platforms` |
| `description` | Short blurb | `Battle-style music platform...` |
| `milestone_title` | Name of the main goal | `Seeding Algorithm` |
| `milestone_timeline` | Expected date | `2 Weeks` |
| `milestone_progress` | Number 0-100 | `85` |
| `cta_primary_label` | Button text | `Enter Arena` |
| `cta_primary_href` | Button link | `https://...` |
| `cta_primary_helper` | Helper text below button | `Compete in battles` |
| `cta_secondary_label` | Second button text | `Learn More` |
| `cta_secondary_href` | Second button link | `https://...` |
| `cta_secondary_helper` | Helper text below button | `How it works` |

## 2. Publish to Web
1. Open your sheet.
2. Go to **File > Share > Publish to web**.
3. Select **Entire Document** (or just the specific tab).
4. Select **Comma-separated values (.csv)** as the format.
5. Click **Publish**.
6. Copy the generated URL.

## 3. Connect to Dashboard
Add the URL to your environment variables (or `.env.local` for local testing):

```bash
NEXT_PUBLIC_PROJECTS_CSV_URL="YOUR_PUBLISHED_CSV_URL_HERE"
```

## ❄️ Fallback Logic
If no URL is provided or the fetch fails, the dashboard will automatically fall back to the static data in `data/projects.ts`, so the site never breaks.
