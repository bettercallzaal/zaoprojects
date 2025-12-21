import { fetchProjects } from "@/lib/projectsLoader";
import Dashboard from "@/components/Dashboard";

export default async function Home() {
  const projects = await fetchProjects();

  return <Dashboard initialProjects={projects} />;
}
