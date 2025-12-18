import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS, FOOTER_MISSION } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-zao-bg/95 backdrop-blur-sm border-b border-zao-border">
          <div className="container-main py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-zao-text">
                  {SITE_CONFIG.title}
                </h1>
                <span className="hidden sm:inline-block text-xs text-zao-muted bg-zao-card px-2 py-1 rounded">
                  {SITE_CONFIG.version}
                </span>
              </div>
              <nav className="flex items-center gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="text-sm text-zao-muted hover:text-zao-accent transition-colors duration-200"
                  >
                    {link.label}
                    {link.isExternal && (
                      <svg
                        className="inline-block ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zao-border mt-20">
          <div className="container-main py-12">
            <div className="max-w-3xl">
              <p className="text-zao-text text-sm leading-relaxed mb-6">
                {FOOTER_MISSION}
              </p>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zao-muted hover:text-zao-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-zao-border">
              <p className="text-xs text-zao-muted">
                © {new Date().getFullYear()} THE ZAO. Building infrastructure for creators.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
