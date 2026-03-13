import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-borderSoft bg-[#060b17] py-16">
      <div className="container-base flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="text-5xl font-extrabold text-brand">YN.</p>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Building elegant digital products with a strong focus on usability, performance, and long-term
            maintainability.
          </p>
        </div>

        <div className="text-left lg:text-right">
          <div className="mb-4 flex gap-3 lg:justify-end">
            <a className="glass rounded-full p-2 text-muted hover:text-text" href={contact.socials.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a className="glass rounded-full p-2 text-muted hover:text-text" href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a className="glass rounded-full p-2 text-muted hover:text-text" href={contact.socials.email}>
              <Mail size={20} />
            </a>
          </div>
          <p className="text-muted">© {new Date().getFullYear()} Your Name | Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
