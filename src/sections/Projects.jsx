import { Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/siteContent";

export default function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-24">
      <div className="container-base">
        <SectionHeading
          title="Projects"
          subtitle="Highlight selected work and add links to repositories, demos, or case studies."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass group flex min-h-[340px] flex-col overflow-hidden rounded-2xl p-0"
            >
              {/* Compact header gradient */}
              <div className="h-24 bg-gradient-to-br from-brand to-brandAlt/70" />

              {/* Card content */}
              <div className="flex flex-1 flex-col p-4 pb-3">
                <h3 className="text-xl font-bold text-text leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-borderSoft bg-panelSoft px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub button pinned to bottom */}
                <div className="flex-1 flex items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-borderSoft bg-panelSoft px-3 py-1.5 text-sm font-semibold text-text transition group-hover:border-brand"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
