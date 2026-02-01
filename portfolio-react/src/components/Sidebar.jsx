import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const sections = [
  { id: "home", icon: "fa-house" },
  { id: "skills", icon: "fa-code" },
  { id: "projects", icon: "fa-briefcase" },
  { id: "languages", icon: "fa-globe" },
  { id: "education", icon: "fa-graduation-cap" },
  { id: "contact", icon: "fa-envelope" },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= middle && rect.bottom >= middle) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="
        fixed left-6 top-1/2 z-50 hidden -translate-y-1/2
        md:flex flex-col items-center gap-6
      "
    >
      {/* SOFT GLOW BACKPLATE (NO RECTANGLE) */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-sky-400/10 blur-[60px]
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative flex flex-col items-center gap-6
          rounded-full px-3 py-4
          backdrop-blur-xl
          bg-white/5
        "
      >
        {/* LOGO */}
        <m.div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            bg-gradient-to-br from-sky-400 to-indigo-500
            text-lg font-bold text-white
            shadow-[0_0_30px_rgba(56,189,248,0.9)]
          "
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          M
        </m.div>

        {/* NAV ICONS */}
        <ul className="mt-2 flex flex-col gap-5">
          {sections.map(({ id, icon }) => {
            const isActive = active === id;

            return (
              <li key={id}>
                <m.a
                  href={`#${id}`}
                  className={`
                    relative flex h-10 w-10 items-center justify-center
                    rounded-full text-sm transition-all
                    ${
                      isActive
                        ? "text-slate-950 bg-sky-400"
                        : "text-slate-400"
                    }
                  `}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-sky-400
                        blur-[14px]
                        opacity-80
                        -z-10
                      "
                    />
                  )}

                  {/* HOVER GLOW */}
                  {!isActive && (
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-sky-400/0
                        hover:bg-sky-400/20
                        hover:blur-[12px]
                        transition-all
                        -z-10
                      "
                    />
                  )}

                  <i className={`fas ${icon}`} />
                </m.a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
