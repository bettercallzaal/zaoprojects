import { fetchProjects } from "@/lib/projectsLoader";
import ProjectCard from "@/components/ProjectCard";

export const dynamic = 'force-dynamic';

export default async function EmbedPage({
    searchParams,
}: {
    searchParams: { limit?: string; category?: string; cols?: string };
}) {
    let projects = await fetchProjects();

    const limit = searchParams.limit ? parseInt(searchParams.limit) : 3;
    const category = searchParams.category || "All";
    const cols = searchParams.cols ? parseInt(searchParams.cols) : 1;

    if (category !== "All") {
        projects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    projects = projects.slice(0, limit);

    return (
        <div className="p-4 bg-transparent min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
        body { background: transparent !important; }
        .glass-card { background: rgba(5, 11, 20, 0.8) !important; }
      `}} />
            <div className={`grid gap-6 grid-cols-1 ${cols > 1 ? `md:grid-cols-${cols}` : ''}`}>
                {projects.map((project) => (
                    <div key={project.id} className="w-full">
                        {/* Using a simplified card would be better, but we'll use ProjectCard for consistency */}
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-zao-muted text-xs italic text-center py-10 border border-dashed border-zao-border rounded-lg">
                    No projects found.
                </div>
            )}

            <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-zao-muted/50 font-bold px-2">
                <span>Powered by ZAO Fractal</span>
                <a href="https://zaoprogress.vercel.app" target="_blank" className="hover:text-zao-accent transition-colors">
                    View All &rarr;
                </a>
            </div>
        </div>
    );
}
