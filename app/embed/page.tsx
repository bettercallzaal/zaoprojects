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
        bg?: string;
        deepdive?: string;
    };
}) {
    let projects = await fetchProjects();

    const limit = searchParams.limit ? parseInt(searchParams.limit) : 20; // Default to 20 (All available)
    const category = searchParams.category || "All";
    const cols = searchParams.cols ? parseInt(searchParams.cols) : 1;
    const showBranding = searchParams.branding !== "false";
    const showDeepDive = searchParams.deepdive === "true"; // Default to false now

    // Theme logic
    let primaryColor = "#e0ddaa"; // Default to ZAO Yellow for branding consistency
    let accentColor = "#141e27";  // Default to Dark Blue
    let bgColor = "#050b14";      // Default to Deep Space Dark

    if (searchParams.theme === "zao") {
        primaryColor = "#e0ddaa"; // Yellow
        accentColor = "#141e27";  // Dark Blue
        bgColor = "#141e27";      // Matches the ZAO site background
    }

    // Override with custom hex if provided
    if (searchParams.primary) primaryColor = `#${searchParams.primary.replace("#", "")}`;
    if (searchParams.accent) accentColor = `#${searchParams.accent.replace("#", "")}`;
    if (searchParams.bg) {
        if (searchParams.bg === "none") bgColor = "transparent";
        else bgColor = `#${searchParams.bg.replace("#", "")}`;
    }

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
            --zao-bg: ${bgColor};
        }
        html, body { 
            background: var(--zao-bg) !important; 
            background-color: var(--zao-bg) !important;
            margin: 0;
            padding: 0;
            cursor: default;
            transition: background 0.3s ease;
            overflow: hidden;
        }
        
        .text-zao-accent { color: var(--zao-primary) !important; }
        .bg-zao-accent { background-color: var(--zao-primary) !important; }
        .border-zao-accent { border-color: var(--zao-primary) !important; }
        
        .glass-card { 
            background: rgba(255, 255, 255, 0.02) !important; 
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
            border-radius: 12px;
        }
        
        [class*="bg-zao-accent"] { 
            background-color: var(--zao-primary) !important; 
            box-shadow: 0 0 15px var(--zao-primary);
        }

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
                showDeepDive={showDeepDive}
            />
        </>
    );
}
