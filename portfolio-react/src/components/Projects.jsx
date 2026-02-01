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
    tech: "React • Tailwind • JavaScript",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold mb-2">
        My Projects
      </h2>

      <p className="text-center text-sm text-slate-400 mb-12">
        Some of the projects I’ve built to apply my skills.
      </p>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       px-6 py-5
                       shadow-[0_0_35px_rgba(56,189,248,0.15)]"
          >
            <h3 className="text-base font-semibold text-slate-200 mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <span className="inline-block text-xs font-medium text-sky-400">
              {project.tech}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
