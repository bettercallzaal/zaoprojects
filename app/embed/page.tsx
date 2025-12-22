import { fetchProjects } from "@/lib/projectsLoader";
import { EmbedDashboard } from "@/components/EmbedDashboard";

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
        <>
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
            cursor: default;
        }
        .text-zao-accent { color: var(--zao-primary) !important; }
        .bg-zao-accent { background-color: var(--zao-primary) !important; }
        .border-zao-accent { border-color: var(--zao-primary) !important; }
        
        .glass-card { 
            background: rgba(5, 11, 20, 0.8) !important; 
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        [class*="bg-zao-accent"] { background-color: var(--zao-primary) !important; }

        /* Modal inside iframe adjustments */
        .fixed.inset-0 { 
            position: absolute !important;
            min-height: 100%;
        }
      `}} />

            <EmbedDashboard
                projects={projects}
                cols={cols}
                showBranding={showBranding}
                primaryColor={primaryColor}
            />
        </>
    );
}
