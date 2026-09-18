import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

const projects = projectsData as Project[];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-12 px-6 py-20 sm:px-10">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">
          Manuel Terra Ardoguein
        </h1>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-black/60 dark:text-white/60">
          Proyectos próximamente.
        </p>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.nombre} project={project} />
          ))}
        </section>
      )}
    </main>
  );
}
