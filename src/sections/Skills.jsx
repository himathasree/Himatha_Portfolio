import { Code2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/siteContent";

export default function Skills() {
  return (
    <section id="skills" className="section-space scroll-mt-24">
      <div className="container-base">
        <SectionHeading
          title="Skills"
          subtitle="Showcase your technical stack across languages, frameworks, tools, and design expertise."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="glass rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-xl bg-brand/20 p-2 text-brand">
                  <Code2 size={18} />
                </span>
                <h3 className="text-2xl font-semibold text-text">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-borderSoft bg-panelSoft px-3 py-1 text-sm text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
