import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS, FOOTER_MISSION } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: "ZAO Progress — See What We're Building",
    description: "ZAO is a live ecosystem of creators, communities, and tools. Track real progress across 10+ projects building infrastructure for independent artists.",
    url: "https://zaoprojects.vercel.app",
    siteName: "ZAO Progress",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAO Progress — See What We're Building",
    description: "ZAO is a live ecosystem of creators, communities, and tools. Track real progress across 10+ projects.",
  },
  metadataBase: new URL("https://zaoprojects.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
