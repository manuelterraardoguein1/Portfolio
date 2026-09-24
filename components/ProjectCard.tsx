import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-black/10 dark:border-white/15 transition-colors hover:border-black/30 dark:hover:border-white/30">
      {project.screenshot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.screenshot}
          alt={`Screenshot de ${project.nombre}`}
          className="aspect-video w-full object-cover"
        />
      ) : (
        // Same size as the screenshot so cards stay aligned in the grid.
        <div aria-hidden className="aspect-video w-full bg-black/5 dark:bg-white/5" />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-lg font-medium">{project.nombre}</h2>
        <p className="text-sm text-black/70 dark:text-white/70">
          {project.descripcion}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-black/10 dark:border-white/15 px-2.5 py-0.5 text-xs text-black/60 dark:text-white/60"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-2 text-sm">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline"
          >
            Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
