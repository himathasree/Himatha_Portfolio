import {
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/siteContent";

export default function About() {
  const educationItems = Array.isArray(about.education)
    ? about.education
    : about.education
      ? [about.education]
      : [];

  const experienceItems = Array.isArray(about.experience)
    ? about.experience
    : about.experience
      ? [about.experience]
      : [];

  const strengthIcons = {
    "problem-solving": Lightbulb,
    communication: MessageSquare,
    adaptability: RefreshCcw,
    "continuous-learning": BookOpenCheck,
  };

  const renderHighlightedDeloitte = (text) => {
    return text.split(/(Deloitte)/g).map((part, index) =>
      part === "Deloitte" ? (
        <span key={`${part}-${index}`} className="font-semibold text-text underline decoration-borderSoft/80 underline-offset-4">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section id="about" className="scroll-mt-24">
      <div className="container-base flex min-h-screen items-center">
        <div className="w-full py-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-10">
            <div className="flex flex-col space-y-5">
              <SectionHeading title="About Me" compact />

              <div className="space-y-3 text-base leading-7 text-muted">
                {(about.bioParts ?? [about.bio]).map((paragraph) => (
                  <p key={paragraph}>{renderHighlightedDeloitte(paragraph)}</p>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="glass rounded-2xl p-4">
                  <div className="mb-3 flex items-center gap-2.5 text-brand">
                    <GraduationCap size={18} />
                    <h3 className="text-base font-semibold text-text">Education</h3>
                  </div>
                  <div className="space-y-2.5">
                    {educationItems.map((item) => (
                      <div key={`${item.title}-${item.period}`}>
                        <p className="text-sm font-semibold text-text">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">{item.institute}</p>
                        <p className="mt-1 text-sm text-muted">{item.period}</p>
                        {item.highlight ? <p className="mt-2 text-sm text-brandAlt">{item.highlight}</p> : null}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="glass rounded-2xl p-4">
                  <div className="mb-3 flex items-center gap-2.5 text-brand">
                    <BriefcaseBusiness size={18} />
                    <h3 className="text-base font-semibold text-text">Experience</h3>
                  </div>
                  <div className="space-y-2.5">
                    {experienceItems.map((item) => (
                      <div key={item.role}>
                        <p className="text-sm font-semibold text-text">{item.role}</p>
                        <p className="text-sm text-muted">
                          {item.company === "Deloitte" ? (
                            <span className="font-semibold text-text underline decoration-borderSoft/80 underline-offset-4">
                              {item.company}
                            </span>
                          ) : (
                            item.company
                          )}
                        </p>
                        <p className="text-sm text-muted">{item.period}</p>
                        {item.company === "Deloitte" ? (
                          <ul className="mt-2 space-y-1.5 pl-4 text-xs text-muted marker:text-muted/80 list-disc">
                            <li>Worked on real-world enterprise applications</li>
                            <li>Solved production issues and improved system stability</li>
                            <li>Collaborated with teams to deliver reliable solutions</li>
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

            </div>

            <div className="h-full">
              <aside className="glass flex h-full flex-col rounded-2xl p-6">
                <div>
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border border-brand/40 bg-panelSoft shadow-[0_12px_28px_rgba(36,56,120,0.2)] md:h-44 md:w-44">
                    <img
                      src="/Himatha_Photo1.jpg"
                      alt={about.profile.name}
                      className="h-full w-full object-cover [object-position:50%_35%] [image-rendering:auto] [backface-visibility:hidden]"
                      loading="eager"
                      decoding="async"
                      width="176"
                      height="176"
                      fetchPriority="high"
                      draggable={false}
                    />
                  </div>

                  <h3 className="mt-5 text-center text-xl font-bold text-text">{about.profile.name}</h3>
                  <p className="mt-1.5 text-center text-sm font-medium text-muted">{about.profile.title}</p>

                  <div className="mt-4 space-y-2.5 rounded-xl border border-borderSoft/70 bg-panelSoft/50 p-4">
                    <p className="flex items-center justify-center gap-2 text-sm text-muted">
                      <MapPin size={15} className="text-brand" />
                      <span>{about.profile.location}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2 text-sm text-muted">
                      <Mail size={15} className="text-brand" />
                      <a href={`mailto:${about.profile.email}`} className="transition hover:text-text">
                        {about.profile.email}
                      </a>
                    </p>
                    <p className="text-center text-sm font-medium text-brand">{about.profile.availability}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3 text-muted">
                  <a
                    className="glass rounded-full p-2.5 transition hover:text-text"
                    href={about.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github size={17} />
                  </a>
                  <a
                    className="glass rounded-full p-2.5 transition hover:text-text"
                    href={about.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={17} />
                  </a>
                </div>

                <a
                  href={about.profile.resumeLink}
                  download
                  className="btn-primary mt-5 block rounded-xl py-3 text-center text-base font-semibold text-white shadow-glow"
                >
                  Download Resume
                </a>
              </aside>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-lg font-semibold text-text">Highlights</h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {about.strengths.map((strength) => {
                const Icon = strengthIcons[strength.icon] ?? Lightbulb;

                return (
                  <div
                    key={strength.title}
                    className="glass flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
                  >
                    <span className="rounded-lg bg-brand/15 p-2 text-brand">
                      <Icon size={16} />
                    </span>
                    <p className="text-sm font-medium text-text">{strength.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
