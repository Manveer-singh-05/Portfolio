import { useEffect, useState } from "react";
import profile from "../assets/manveer.jpeg";

const roles = [
  "Software Engineering Student",
  "Frontend Developer",
  "Problem Solver",
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
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* CENTER RADIAL GLOW */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[520px] w-[520px] rounded-full 
                        bg-sky-400/30 blur-[180px]" />
      </div>

      {/* HERO CARD */}
      <div className="relative w-full max-w-5xl rounded-3xl 
                      bg-white/[0.06] backdrop-blur-2xl 
                      border border-transparent
                      px-10 py-20 text-center
                      shadow-[0_0_160px_rgba(56,189,248,0.35)]">

        {/* AVATAR */}
        <div className="absolute left-1/2 -top-20 -translate-x-1/2">
          <div className="relative h-36 w-36 rounded-full">

            {/* avatar glow */}
            <div className="absolute inset-0 rounded-full 
                            bg-sky-400/40 blur-[40px]" />

            <img
              src={profile}
              alt="Manveer Singh"
              className="relative h-full w-full rounded-full object-cover
                         shadow-[0_0_60px_rgba(56,189,248,0.9)]"
            />
          </div>
        </div>

        {/* SPACER */}
        <div className="h-14" />

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-3">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400
                           bg-clip-text text-transparent drop-shadow">
            Manveer Singh
          </span>
        </h1>

        {/* DYNAMIC SUBTITLE */}
        <h3 className="text-base md:text-lg text-slate-100 mb-6 h-6">
          I&apos;m a{" "}
          <span className="text-sky-400 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto max-w-2xl text-sm md:text-base 
                      text-slate-300 leading-relaxed mb-12">
          I build clean, responsive web applications and enjoy solving
          real-world problems using modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-10 py-3.5
                       text-sm font-medium text-slate-950
                       shadow-[inset_0_0_10px_rgba(255,255,255,0.4),
                               0_0_40px_rgba(56,189,248,1)]
                       hover:shadow-[0_0_70px_rgba(56,189,248,1)]
                       hover:-translate-y-[1px]
                       transition"
          >
            View My Work
          </a>

          <a
            href="/manveer-cv-final.pdf"
            download
            className="rounded-full bg-white/5 px-10 py-3.5
                       text-sm font-medium text-sky-300
                       hover:bg-sky-400 hover:text-slate-950
                       hover:-translate-y-[1px]
                       transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
