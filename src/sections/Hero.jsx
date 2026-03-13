import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { hero } from "../data/siteContent";

export default function Hero() {
  const [firstName, lastName] = hero.name.split(" ");
  const easing = [0.22, 1, 0.36, 1];
  const entranceDuration = 0.5;

  const textGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.18,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: entranceDuration,
        ease: easing,
      },
    },
  };

  return (
    <section id="home" className="pt-20 md:pt-22">
      <div className="container-base grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">

        {/* LEFT TEXT SECTION */}
        <motion.div
          className="w-full max-w-[540px] lg:pt-2"
          variants={textGroupVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div variants={textItemVariants}>
            <p className="text-base font-semibold text-brand font-sora">
              {hero.greeting}
            </p>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <h1 className="mt-3 text-[2.5rem] md:text-[3rem] font-extrabold leading-tight text-text font-sora">
              <span className="text-[#232e47] dark:text-text">{firstName}</span>
              <span className="text-brand"> {lastName}</span>
            </h1>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <p className="mt-3 text-xl font-medium text-muted font-sora">
              {hero.role}
            </p>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <p className="mt-5 max-w-2xl text-base font-sora text-muted">
              {hero.summary}
            </p>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href="#contact"
                className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px] font-sora"
              >
                {hero.primaryCta}
              </a>

              <a
                href="#projects"
                className="glass rounded-xl px-5 py-2.5 text-sm font-semibold text-text transition hover:border-brand/60 font-sora"
              >
                {hero.secondaryCta}
              </a>

              <div className="flex items-center gap-5 text-muted">

                <a
                  className="transition hover:text-text"
                  href={hero.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>

                <a
                  className="transition hover:text-text"
                  href={hero.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  className="transition hover:text-text"
                  href={hero.social.email}
                >
                  <Mail size={20} />
                </a>

              </div>
            </div>
          </motion.div>

        </motion.div>


        {/* RIGHT CARD SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: easing }}
          className="relative w-full max-w-[480px] min-h-[300px] justify-self-center lg:min-h-[340px] lg:justify-self-end lg:-translate-y-1"
        >

          {/* BLUR GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-blue-400/40 blur-3xl"
          />

          {/* BACK STACKED CARD */}
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -6, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 z-0 translate-x-[-40px] translate-y-[35px] rotate-[-10deg] scale-95 rounded-2xl border border-[#dce8fb]/30 bg-blue-400/40 dark:border-[#1e2b50]/30 dark:bg-blue-500/30"
          />

          {/* MAIN CARD */}
          <div className="relative z-10 h-full rounded-2xl border border-[#dce8fb] bg-white p-6 shadow-[0_12px_36px_rgba(99,120,200,0.16)] md:p-8 dark:border-[#1e2b50] dark:bg-[#0d1530]">

            {/* WINDOW BAR */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <p className="text-sm text-muted font-sora">
                {hero.codeCard.filename}
              </p>
            </div>

            {/* CODE */}
            <div className="space-y-1.5 font-mono text-sm">

              <p className="text-[#9ca3af]">// Software Engineer</p>

              <p>
                <span className="text-[#3b82f6]">const</span>{" "}
                <span className="text-[#10b981]">developer</span>{" "}
                <span className="text-[#9ca3af]">= {"{"}</span>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#8b5cf6]">name</span>
                <span className="text-[#9ca3af]">:</span>{" "}
                <span className="text-[#f97316]">
                  'Himatha Sree Vadlamudi'
                </span>
                <span className="text-[#9ca3af]">,</span>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#8b5cf6]">focus</span>
                <span className="text-[#9ca3af]">:</span>{" "}
                <span className="text-[#9ca3af]">[</span>
                <span className="text-[#f97316]">'Full-Stack'</span>
                <span className="text-[#9ca3af]">,</span>{" "}
                <span className="text-[#f97316]">'UI/UX'</span>
                <span className="text-[#9ca3af]">],</span>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#8b5cf6]">stack</span>
                <span className="text-[#9ca3af]">:</span>{" "}
                <span className="text-[#9ca3af]">[</span>
                <span className="text-[#f97316]">'React'</span>
                <span className="text-[#9ca3af]">,</span>{" "}
                <span className="text-[#f97316]">'Node.js'</span>
                <span className="text-[#9ca3af]">,</span>{" "}
                <span className="text-[#f97316]">'Python'</span>
                <span className="text-[#9ca3af]">],</span>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#8b5cf6]">mindset</span>
                <span className="text-[#9ca3af]">:</span>{" "}
                <span className="text-[#f97316]">'Always learning'</span>
              </p>

              <p>
                <span className="text-[#9ca3af]">{"}"}</span>
                <span className="text-[#9ca3af]">;</span>
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}