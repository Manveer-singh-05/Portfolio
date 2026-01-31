import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", icon: "fa-house" },
  { id: "skills", icon: "fa-code" },
  { id: "projects", icon: "fa-briefcase" },
  { id: "languages", icon: "fa-globe" },
  { id: "contact", icon: "fa-envelope" },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = active;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2;

        if (rect.top <= middle && rect.bottom >= middle) {
          current = id;
        }
      });

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <nav className="sidebar">
      <ul>
        {sections.map(({ id, icon }) => (
          <li key={id}>
            <motion.a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className={`fas ${icon}`}></i>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
