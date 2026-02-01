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
    <nav className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 
                    flex-col items-center gap-6 
                    rounded-3xl bg-white/5 backdrop-blur-2xl 
                    border border-white/10 
                    px-3 py-4
                    shadow-[0_0_50px_rgba(56,189,248,0.25)]
                    md:flex">

      {/* LOGO */}
      <m.div
        className="flex h-12 w-12 items-center justify-center 
                   rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 
                   text-lg font-bold text-white
                   shadow-[0_0_30px_rgba(56,189,248,0.9)]"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        M
      </m.div>

      {/* NAV ICONS */}
      <ul className="mt-4 flex flex-col gap-5">
        {sections.map(({ id, icon }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <m.a
                href={`#${id}`}
                className={`flex h-10 w-10 items-center justify-center 
                            rounded-full text-sm transition
                            ${
                              isActive
                                ? "bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.9)]"
                                : "text-slate-400 hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                            }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fas ${icon}`} />
              </m.a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
