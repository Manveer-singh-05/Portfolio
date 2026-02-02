import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGlobe,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "home", Icon: FaHome },
  { id: "skills", Icon: FaCode },
  { id: "projects", Icon: FaBriefcase },
  { id: "languages", Icon: FaGlobe },
  { id: "education", Icon: FaGraduationCap },
  { id: "contact", Icon: FaEnvelope },
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
    // <nav
    //   className="fixed left-6 top-1/2 z-50 hidden md:flex
    //              -translate-y-1/2 flex-col items-center gap-6
    //              rounded-[30px] bg-white/5 backdrop-blur-2xl
    //              px-3 py-5
    //              shadow-[0_0_60px_rgba(56,189,248,0.25)]"
    //   style={{ animation: "floatSlow 6s ease-in-out infinite" }}
    // >
    <nav
  className="fixed left-6 top-1/2 z-50 hidden md:flex
             flex-col items-center gap-6
             rounded-[30px] bg-white/5 backdrop-blur-2xl
             px-3 py-5
             shadow-[0_0_60px_rgba(56,189,248,0.25)]"
  style={{
    transform: "translateY(-50%)",
    animation: "floatSlow 6s ease-in-out infinite",
  }}
>

      {/* LOGO */}
      <div
        className="flex h-12 w-12 items-center justify-center
                   rounded-full bg-gradient-to-br from-sky-400 to-indigo-500
                   text-lg font-bold text-white
                   shadow-[0_0_35px_rgba(56,189,248,1)]"
      >
        M
      </div>

      {/* ICONS */}
      <ul className="mt-4 flex flex-col gap-5">
        {sections.map(({ id, Icon }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <m.a
                href={`#${id}`}
                className={`flex h-10 w-10 items-center justify-center
                            rounded-full transition-all duration-300
                            ${
                              isActive
                                ? "bg-sky-400 text-slate-950 shadow-[0_0_25px_rgba(56,189,248,1)]"
                                : "text-slate-400 hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.8)]"
                            }`}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="text-sm" />
              </m.a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
