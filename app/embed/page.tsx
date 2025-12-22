import { fetchProjects } from "@/lib/projectsLoader";
import ProjectCard from "@/components/ProjectCard";
import { ResizeHandler } from "@/components/ResizeHandler";

export const dynamic = 'force-dynamic';

export default async function EmbedPage({
    searchParams,
}: {
    searchParams: {
        limit?: string;
        category?: string;
        cols?: string;
        primary?: string;
        accent?: string;
        branding?: string;
        theme?: string;
    };
}) {
    let projects = await fetchProjects();

    const limit = searchParams.limit ? parseInt(searchParams.limit) : 3;
    const category = searchParams.category || "All";
    const cols = searchParams.cols ? parseInt(searchParams.cols) : 1;
    const showBranding = searchParams.branding !== "false";

    // Theme logic
    let primaryColor = "#49f3c3"; // Default Teal
    let accentColor = "#00f0ff";  // Default Cyan

    if (searchParams.theme === "zao") {
        primaryColor = "#e0ddaa"; // Yellow
        accentColor = "#141e27";  // Dark Blue
    }

    // Override with custom hex if provided
    if (searchParams.primary) primaryColor = `#${searchParams.primary.replace("#", "")}`;
    if (searchParams.accent) accentColor = `#${searchParams.accent.replace("#", "")}`;

    if (category !== "All") {
        projects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    projects = projects.slice(0, limit);

    return (
        <div className="p-4 relative" role="region" aria-label="ZAO Projects Dashboard">
            <ResizeHandler />
            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
            --zao-primary: ${primaryColor};
            --zao-accent: ${accentColor};
        }
        html, body { 
            background: transparent !important; 
            background-color: transparent !important;
            margin: 0;
            padding: 0;
        }
        /* Override defaults with theme colors */
        .text-zao-accent { color: var(--zao-primary) !important; }
        .bg-zao-accent { background-color: var(--zao-primary) !important; }
        .border-zao-accent { border-color: var(--zao-primary) !important; }
        
        .glass-card { 
            background: rgba(5, 11, 20, 0.8) !important; 
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Progress bar overrides */
        [class*="bg-zao-accent"] { background-color: var(--zao-primary) !important; }
      `}} />

            <div className={`grid gap-6 grid-cols-1 ${cols > 1 ? `md:grid-cols-${cols}` : ''}`}>
                {projects.map((project) => (
                    <article key={project.id} className="w-full">
                        <ProjectCard project={project} />
                    </article>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-zao-muted text-xs italic text-center py-10 border border-dashed border-zao-border rounded-lg">
                    No projects found.
                </div>
            )}

            {showBranding && (
                <footer className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-zao-muted/70 font-bold px-2">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-zao-accent animate-pulse" style={{ backgroundColor: primaryColor }} />
                        ZAO Fractal Nodes
                    </span>
                    <a href="https://zaoprogress.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zao-accent transition-colors" style={{ color: primaryColor }}>
                        Full Hub &rarr;
                    </a>
                </footer>
            )}
        </div>
    );
}

