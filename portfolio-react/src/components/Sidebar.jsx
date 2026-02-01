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
    <nav className="sidebar">
      {/* LOGO */}
      <m.div
        className="sidebar-logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        M
      </m.div>

      {/* NAV ICONS */}
      <ul>
        {sections.map(({ id, icon }) => (
          <li key={id}>
            <m.a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fas ${icon}`}></i>
            </m.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
