import { motion } from "framer-motion";
const projectsData = [
  {
    title: "Basic Calendar Generator",
    description:
      "A C++ program that generates calendars for any given year using logical date calculations.",
    tech: "C++",
    link: "#",
  },
  {
    title: "Knowledge Sharing Platform",
    description:
      "A web platform for sharing and managing knowledge using PHP and MySQL.",
    tech: "PHP • MySQL • HTML • CSS",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern dark-glass portfolio to showcase skills and projects.",
    tech: "React • CSS • JavaScript",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-desc">
        Some of the projects I’ve built to apply my skills.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
