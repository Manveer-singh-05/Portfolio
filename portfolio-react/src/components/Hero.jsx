const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* CENTER RADIAL GLOW */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full 
                        bg-sky-500/20 blur-[160px]" />
      </div>

      {/* HERO CARD */}
      <div className="relative w-full max-w-5xl rounded-3xl 
                      bg-white/[0.06] backdrop-blur-2xl 
                      border border-white/10
                      px-10 py-20 text-center
                      shadow-[0_0_120px_rgba(56,189,248,0.25)]">

        {/* AVATAR */}
        <div className="absolute left-1/2 -top-20 -translate-x-1/2">
          <div className="relative h-36 w-36 rounded-full 
                          bg-gradient-to-br from-sky-400 to-indigo-500
                          p-[6px]
                          shadow-[0_0_80px_rgba(56,189,248,1)]">
            <div className="h-full w-full rounded-full bg-slate-950" />

            {/* avatar glow ring */}
            <div className="absolute inset-0 rounded-full 
                            ring-2 ring-sky-400/40" />
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

        {/* SUBTITLE */}
        <h3 className="text-base md:text-lg text-slate-200 mb-6">
          Software Engineering Student
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto max-w-2xl text-sm md:text-base 
                      text-slate-400 leading-relaxed mb-12">
          I build clean, responsive web applications and enjoy solving
          real-world problems using modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-8 py-3
                       text-sm font-medium text-slate-950
                       shadow-[0_0_35px_rgba(56,189,248,0.9)]
                       hover:shadow-[0_0_55px_rgba(56,189,248,1)]
                       transition"
          >
            View My Work
          </a>

          <a
            href="#"
            className="rounded-full border border-sky-400/70 px-8 py-3
                       text-sm font-medium text-sky-300
                       hover:bg-sky-400 hover:text-slate-950
                       hover:shadow-[0_0_35px_rgba(56,189,248,0.8)]
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
