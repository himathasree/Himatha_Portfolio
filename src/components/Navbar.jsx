import { Menu, MoonStar, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark") {
      return true;
    }
    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-[1540px] items-center px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-brand font-sora ml-8 shrink-0">
          HS.
        </a>

        <div className="hidden flex-1 items-center justify-end gap-7 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted font-sora">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`relative inline-flex pb-1 transition hover:text-text after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-brand after:transition-all after:duration-300 after:content-[''] ${
                    activeHref === link.href
                      ? "text-text after:w-full"
                      : "text-muted after:w-0"
                  }`}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveHref(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDark((prev) => !prev)}
              className="glass rounded-full p-2.5 text-muted transition hover:text-text"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <MoonStar size={16} />}
            </button>
            <a
              href="#"
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px] font-sora"
            >
              Resume
            </a>
          </div>
        </div>

        <button
          type="button"
          className="glass rounded-lg p-2 text-muted md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-borderSoft/60 bg-panel/95 md:hidden">
          <ul className="container-base flex flex-col gap-4 py-6 text-base font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`relative inline-flex pb-1 transition hover:text-text after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-brand after:transition-all after:duration-300 after:content-[''] ${
                    activeHref === link.href ? "text-text after:w-full" : "text-muted after:w-0"
                  }`}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveHref(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="mt-2 inline-flex rounded-xl bg-brand px-4 py-2 font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
