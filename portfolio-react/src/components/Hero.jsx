const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Glass Card */}
      <div className="relative w-full max-w-5xl rounded-3xl 
                      bg-white/5 backdrop-blur-2xl 
                      border border-white/10 
                      shadow-[0_0_80px_rgba(56,189,248,0.18)]
                      px-10 py-20 text-center">

        {/* Floating Profile */}
        <div className="absolute left-1/2 -top-16 -translate-x-1/2
                        h-32 w-32 rounded-full 
                        bg-gradient-to-br from-sky-400 to-indigo-500 
                        p-[5px] 
                        shadow-[0_0_50px_rgba(56,189,248,0.9)]">
          <div className="h-full w-full rounded-full bg-slate-950" />
        </div>

        {/* Spacer for floating avatar */}
        <div className="h-10" />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-2">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 
                           bg-clip-text text-transparent">
            Manveer
          </span>
        </h1>

        {/* Subtitle */}
        <h3 className="text-base md:text-lg text-slate-300 mb-5">
          Software Engineering Student
        </h3>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-sm md:text-base 
                      text-slate-400 leading-relaxed mb-12">
          I build clean, responsive web applications and enjoy solving
          real-world problems using modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-7 py-3 
                       text-slate-950 font-medium transition 
                       hover:shadow-[0_0_30px_rgba(56,189,248,1)]"
          >
            View My Work
          </a>

          <a
            href="#"
            className="rounded-full border border-sky-400 px-7 py-3 
                       text-sky-400 transition 
                       hover:bg-sky-400 hover:text-slate-950"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
