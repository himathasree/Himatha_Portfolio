import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-borderSoft/40 bg-panel/60 py-12 backdrop-blur-sm">
      <div className="container-base flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:items-center lg:text-left">
        <div className="max-w-xl">
          <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold leading-tight text-transparent">Himatha Sree.</p>
          <p className="mt-3 text-base text-muted/90">
            Crafting scalable and user-friendly digital experiences with a focus on performance, usability, and clean design.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 lg:items-end">
          <div className="flex items-center gap-4">
            <a
              className="glass rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text"
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              className="glass rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text"
              href={contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              className="glass rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text"
              href={contact.socials.email}
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs text-muted">© 2026 Himatha Sree Vadlamudi. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
