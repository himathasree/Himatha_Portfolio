import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { hero } from "../data/siteContent";

export default function Hero() {
  const [firstName, lastName] = hero.name.split(" ");
  const [typedChars, setTypedChars] = useState(0);
  const [tiltRotate, setTiltRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const cardRef = useRef(null);
  const easing = [0.22, 1, 0.36, 1];
  const entranceDuration = 0.5;

  const codeLines = useMemo(
    () => [
      [{ text: "// Software Engineer", className: "text-muted/90" }],
      [
        { text: "const ", className: "text-brandAlt" },
        { text: "developer", className: "text-brand" },
        { text: " = {", className: "text-muted" },
      ],
      [
        { text: "  name", className: "text-brandAlt" },
        { text: ": ", className: "text-muted" },
        { text: `'${hero.name} Vadlamudi',`, className: "text-text" },
      ],
      [
        { text: "  role", className: "text-brandAlt" },
        { text: ": ", className: "text-muted" },
        { text: `'${hero.role}',`, className: "text-text" },
      ],
      [
        { text: "  experience", className: "text-brandAlt" },
        { text: ": ", className: "text-muted" },
        { text: `'${hero.codeCard.experience}',`, className: "text-text" },
      ],
      [{ text: "};", className: "text-muted" }],
    ],
    [hero.codeCard.experience, hero.role, hero.name]
  );

  const totalTypingChars = useMemo(() => {
    const charCount = codeLines.reduce(
      (sum, line) => sum + line.reduce((lineSum, segment) => lineSum + segment.text.length, 0),
      0
    );
    return charCount + Math.max(0, codeLines.length - 1);
  }, [codeLines]);

  useEffect(() => {
    setTypedChars(0);
    const timer = window.setInterval(() => {
      setTypedChars((current) => (current >= totalTypingChars ? totalTypingChars : current + 1));
    }, 26);

    return () => window.clearInterval(timer);
  }, [totalTypingChars]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardMouseMove = (event) => {
    if (isMobile || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    const rotationIntensity = 8;
    setTiltRotate({
      x: -normalizedY * rotationIntensity,
      y: normalizedX * rotationIntensity,
    });
  };

  const handleCardMouseLeave = () => {
    if (isMobile) return;
    setTiltRotate({ x: 0, y: 0 });
  };

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
    <section id="home" className="scroll-mt-24 pt-10 md:pt-16">
      <div className="container-base flex min-h-[calc(100vh-5rem)] items-center py-8 md:py-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            variants={textGroupVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={textItemVariants}>
              <p className="text-base font-semibold text-brand font-sora">
                {hero.greeting}
              </p>
            </motion.div>

            <motion.div variants={textItemVariants}>
              <h1 className="mt-3 text-[2.5rem] md:text-[3rem] font-extrabold leading-tight text-text font-sora">
                <span className="text-text">{firstName}</span>
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
                  className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 font-sora"
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

          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="relative w-full max-w-[480px] min-h-[300px] justify-self-center lg:min-h-[340px] lg:justify-self-end"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: easing }}
              className="relative w-full h-full"
              style={{
                rotateX: tiltRotate.x,
                rotateY: tiltRotate.y,
                transformStyle: "preserve-3d",
                transition: "rotateX 0.15s cubic-bezier(0.23, 1, 0.320, 1), rotateY 0.15s cubic-bezier(0.23, 1, 0.320, 1)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-gradient-to-tr from-brand/35 via-brandAlt/35 to-brand/20 blur-3xl"
              />

              <motion.div
                aria-hidden="true"
                animate={{ x: [0, -6, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 z-0 translate-x-[-40px] translate-y-[35px] rotate-[-10deg] scale-95 rounded-2xl border border-brand/15 bg-gradient-to-tr from-brand/25 to-brandAlt/20"
              />

              <motion.div
                whileHover={{ y: isMobile ? -6 : 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative z-10 h-full rounded-2xl border border-brand/20 bg-panel/55 p-6 backdrop-blur-xl shadow-[0_16px_44px_rgba(77,89,182,0.22)] md:p-8"
                style={{
                  boxShadow: `${Math.sin(tiltRotate.y * (Math.PI / 180)) * 12}px ${Math.sin(tiltRotate.x * (Math.PI / 180)) * 12}px 44px rgba(77, 89, 182, ${0.22 + Math.abs(tiltRotate.x + tiltRotate.y) * 0.01})`,
                }}
              >
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

                <div className="space-y-1.5 font-mono text-sm">
                  {(() => {
                    let consumed = 0;

                    return codeLines.map((line, index) => {
                      const lineChars = line.reduce((sum, segment) => sum + segment.text.length, 0);
                      const visibleChars = Math.max(0, Math.min(lineChars, typedChars - consumed));
                      const isLastLine = index === codeLines.length - 1;
                      const available = typedChars - consumed;
                      const showCursor = (available >= 0 && available <= lineChars) || (typedChars >= totalTypingChars && isLastLine);
                      let remaining = visibleChars;

                      const segments = line.map((segment, segmentIndex) => {
                        const content = remaining > 0 ? segment.text.slice(0, remaining) : "";
                        remaining = Math.max(0, remaining - segment.text.length);

                        return (
                          <span key={`${index}-${segmentIndex}`} className={segment.className}>
                            {content}
                          </span>
                        );
                      });

                      consumed += lineChars + (isLastLine ? 0 : 1);

                      return (
                        <p key={index} className="min-h-[1.35rem]">
                          {segments}
                          {showCursor ? <span className="typing-cursor" aria-hidden="true" /> : null}
                        </p>
                      );
                    });
                  })()}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
