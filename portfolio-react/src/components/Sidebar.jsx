import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGlobe,
  FaGraduationCap,
  FaEnvelope,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

const sections = [
  { id: "home", Icon: FaHome },
  { id: "skills", Icon: FaCode },
  { id: "competitive", Icon: FaTrophy },
  { id: "certificates", Icon: FaCertificate },
  { id: "languages", Icon: FaGlobe },
  { id: "education", Icon: FaGraduationCap },
  { id: "projects", Icon: FaBriefcase },
  { id: "contact", Icon: FaEnvelope },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
  let ticking = false;
  let rafId;

  const handleScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(() => {
        const middle = window.innerHeight / 2;
        
        sections.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (!section) return;
          
          const rect = section.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            setActive(id);
          }
        });
        
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(rafId);
  };
}, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const middle = window.innerHeight / 2;

  //     sections.forEach(({ id }) => {
  //       const section = document.getElementById(id);
  //       if (!section) return;

  //       const rect = section.getBoundingClientRect();
  //       if (rect.top <= middle && rect.bottom >= middle) {
  //         setActive(id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <nav
    //   className="fixed left-6 top-1/2 z-50 hidden md:flex
    //              flex-col items-center gap-6
    //              rounded-[30px] bg-white/5 backdrop-blur-2xl
    //              px-3 py-5
    //              shadow-[0_0_60px_rgba(56,189,248,0.25)]"
    //   style={{
    //     transform: "translateY(-50%)",
    //     animation: "floatSlow 4s ease-in-out infinite",
    //   }}
    // >
    <nav
  className="fixed left-6 top-1/2 z-50 hidden md:flex
             flex-col items-center gap-6
             rounded-[30px]
            //  bg-transparent backdrop-blur-none  // ← FULLY TRANSPARENT
             bg-white/5 backdrop-blur-[1px]  // ← SEMI-TRANSPARENT WITH BLUR
             px-3 py-5
             shadow-[0_0_60px_rgba(56,189,248,0.25)]"
  style={{
    transform: "translateY(-50%)",
    animation: "floatSlow 4s ease-in-out infinite",
  }}
>
      <ul className="mt-4 flex flex-col gap-5">
        {sections.map(({ id, Icon }) => {
          const isActive = active === id;

          return (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className="relative flex h-10 w-10 items-center justify-center"
              >
                {/* ACTIVE INDICATOR (MAGIC) */}
                {isActive && (
                  <m.div
                    layoutId="sidebar-indicator"
                    className="absolute inset-0 rounded-full
                               bg-sky-400/20
                               shadow-[0_0_25px_rgba(56,189,248,1)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* ICON */}
                <m.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative z-10 flex items-center justify-center
                    ${isActive
                      ? "text-sky-400 scale-110"
                      : "text-slate-400 hover:text-sky-400"
                    }`}
                >
                  <Icon className="text-sm" />
                </m.div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
