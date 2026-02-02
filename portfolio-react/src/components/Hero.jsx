import { useEffect, useState } from "react";
import profile from "../assets/manveer.jpeg";

const roles = [
  "Software Engineering Student ",
  "Frontend Developer ",
  "Problem Solver ",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex === roles[index].length) {
        setTimeout(() => setDeleting(true), 1000);
        return;
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* HORIZONTAL HERO GLOW (KEY DIFFERENCE) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[1200px] h-[420px] rounded-full 
                      blur-[220px]"
        />
      </div>

      {/* CONTENT (NO CARD, NO BOX, NO MASK) */}
      <div className="relative z-10 text-center">
        {/* AVATAR */}
        <div className="relative mx-auto mb-8 h-36 w-36 rounded-full">
          <div className="absolute inset-0 rounded-full  blur-[55px]" />
          <img
            src={profile}
            alt="Manveer Singh"
            className="relative h-full w-full rounded-full object-cover
                       shadow-[0_0_80px_rgba(56,189,248,1)] animate-float"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-3">
          Hi, I&apos;m{" "}
          <span
            className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400
                           bg-clip-text text-transparent"
          >
            Manveer Singh
          </span>
        </h1>

        {/* DYNAMIC ROLE */}
        <h3 className="text-base md:text-lg text-slate-200 mb-6 h-6">
          I&apos;m a{" "}
          <span className="text-sky-400 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h3>

        {/* DESCRIPTION */}
        <p
          className="mx-auto max-w-2xl text-sm md:text-base
                      text-slate-300 leading-relaxed mb-10"
        >
          I build clean, responsive web applications and enjoy solving
          real-world problems using modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-10 py-3.5
                       text-sm font-medium text-slate-950
                       shadow-[0_0_45px_rgba(56,189,248,1)]
                       hover:shadow-[0_0_80px_rgba(56,189,248,1)]
                       transition-all"
          >
            View My Work
          </a>

          <a
            href="/manveer-cv-final.pdf"
            download
            className="rounded-full bg-white/5 px-10 py-3.5
                       text-sm font-medium text-sky-300
                       hover:bg-sky-400 hover:text-slate-950
                       transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
