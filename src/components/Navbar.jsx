import { FileDown, Menu, MoonStar, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
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
    const updateScrolled = () => {
      setScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

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
        rootMargin: "-35% 0px -55% 0px",
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

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const section = document.querySelector(href);

    if (!section) {
      return;
    }

    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    window.history.replaceState(null, "", href);
    setOpen(false);
    setActiveHref(href);
  };

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-borderSoft/70 bg-bg/80 shadow-[0_10px_30px_rgba(20,28,58,0.22)] backdrop-blur-2xl"
          : "bg-bg/35"
      }`}
    >
      <nav className="container-base flex h-20 items-center">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="text-xl font-bold tracking-tight text-brand font-sora shrink-0"
        >
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
                  onClick={(event) => handleNavClick(event, link.href)}
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
            href="/Himatha_Resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 font-sora"
          >
            <FileDown size={16} />
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
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Himatha_Resume.pdf"
                download
                className="btn-primary mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <FileDown size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
