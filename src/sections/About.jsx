import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/siteContent";

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-base">
        <SectionHeading title="About Me" subtitle={about.bio} />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3 text-brand">
                <GraduationCap size={18} />
                <h3 className="text-lg font-bold text-text">Education</h3>
              </div>
              <p className="text-base font-semibold text-text">{about.education.title}</p>
              <p className="mt-1.5 text-sm text-muted">{about.education.institute}</p>
              <p className="mt-1 text-sm text-muted">{about.education.period}</p>
              <p className="mt-2 text-sm text-brandAlt">{about.education.highlight}</p>
            </article>

            <article className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3 text-brand">
                <BriefcaseBusiness size={18} />
                <h3 className="text-lg font-bold text-text">Experience</h3>
              </div>
              <div className="space-y-4">
                {about.experience.map((item) => (
                  <div key={item.role}>
                    <p className="text-base font-semibold text-text">{item.role}</p>
                    <p className="text-sm text-muted">{item.company}</p>
                    <p className="text-sm text-muted">{item.period}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="glass rounded-2xl p-8">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-brand/50 bg-[#12224a] text-3xl font-bold text-brand">
              YN
            </div>
            <div className="mx-auto -mt-4 w-fit rounded-full bg-brand px-4 py-1 text-sm font-semibold text-white">
              {about.profile.gpa}
            </div>

            <h3 className="mt-5 text-center text-xl font-bold text-text">{about.profile.name}</h3>
            <p className="mt-1.5 text-center text-sm text-muted">{about.profile.title}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {about.profile.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-borderSoft bg-panelSoft px-3 py-1 text-sm text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={about.profile.resumeLink}
              className="mt-7 block rounded-xl bg-brand py-3 text-center text-base font-semibold text-white shadow-glow"
            >
              Download Resume
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
