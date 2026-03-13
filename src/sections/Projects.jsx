import { Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/siteContent";

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-base">
        <SectionHeading
          title="Projects"
          subtitle="Highlight selected work and add links to repositories, demos, or case studies."
        />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass group overflow-hidden rounded-2xl">
              <div className="h-40 bg-gradient-to-br from-brand to-brandAlt/70" />

              <div className="p-6">
                <h3 className="text-3xl font-bold text-text">{project.title}</h3>
                <p className="mt-4 text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-borderSoft bg-panelSoft px-3 py-1 text-sm text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-borderSoft bg-panelSoft px-4 py-2 font-semibold text-text transition group-hover:border-brand"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
