import { useEffect, useState } from "react";
import { motion as m} from "framer-motion";

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
      {/* LOGO / AVATAR */}
      <div className="sidebar-logo">
        {/* Option A: Initials */}
        <span>M</span>

        {/* Option B: Image (uncomment if you want) */}
        {/* <img src="/profile.png" alt="Manveer" /> */}
      </div>

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
