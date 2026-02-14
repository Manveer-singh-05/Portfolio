import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import studyfunhub from "/projects/study-fun-hub.png";
import proappoint from "/projects/proappoint.png";
import calendar from "/projects/calendar.png";
import flightchatbot from "/projects/flightchatbot.png";
import energyefficient from "/projects/energyefficient.png";
import portfolio from "/projects/portfolio.png";
import { useState } from "react";

const projectsData = [
  {
    title: "Proappoint - Appointment Management System",
    description:
      "A mern stack web application for managing appointments, built with React, Node.js, Express, and MongoDB.",
    tech: "MERN Stack • React • Node.js • Express • MongoDB",
    image: proappoint,
    liveLink: "https://proappoint.vercel.app/",
    githublink: "https://github.com/Manveer-singh-05/ointment-booking-system"
  },
   {
    title: "Basic Calendar Generator",
    description:
      "A C++ program that generates calendars for any given year using logical date calculations.",
    tech: "C++",
    image: calendar,
    liveLink: null,
    githublink: "https://github.com/Manveer-singh-05/calendar-event-generator"
  },
   
   {
    title: "Flight price tracker chatbot",
    description:
      "A C++ program that generates calendars for any given year using logical date calculations.",
    tech: "Html • Css • Js • Api",
    image: flightchatbot,
    liveLink: null,
    githublink: "https://github.com/Manveer-singh-05/Flight-Price-Tracker-chat-bot"
  },
   
  {
    title: "Knowledge Sharing Platform",
    description:
      "A web platform for sharing and managing knowledge using PHP and MySQL.",
    tech: "PHP • MySQL • HTML • CSS",
    image: studyfunhub,
    liveLink: "http://studyfunhub.wuaze.com/",
    githublink: "https://github.com/Manveer-singh-05/StudyFun-Hub"
  },
  {
    title: "Energy efficient cpu scheduling algorithm",
    description:
      "A java , js, html ,css  program that implements an energy-efficient CPU scheduling algorithm.",
    tech: "Java • JavaScript • HTML • CSS",
    image: energyefficient,
    liveLink: null,
    githublink: "https://github.com/Manveer-singh-05/CPU-energy-efficient-scheduling-algorithm"
  },
  {
    title: "Portfolio Website",
    description:
      "A modern dark-glass portfolio to showcase skills and projects.",
    tech: "React • Tailwind • JavaScript",
    image: portfolio,
    liveLink: null,
    githublink: "https://github.com/Manveer-singh-05/Portfolio"
  },
];

// const Projects = () => {
//   return (
//     <div className="w-full">
//       {/* Heading */}
//       <h2 className="text-center text-2xl font-semibold mb-2">
//         My Projects
//       </h2>

//       <p className="text-center text-sm text-slate-400 mb-12">
//         Some of the projects I’ve built to apply my skills.
//       </p>

//       {/* Projects grid */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {projectsData.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -8, scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="rounded-2xl bg-white/5 backdrop-blur-xl 
//                        border border-white/10 
//                        px-6 py-5
//                        shadow-[0_0_35px_rgba(56,189,248,0.15)]"
//           >
//             <h3 className="text-base font-semibold text-slate-200 mb-2">
//               {project.title}
//             </h3>

//             <p className="text-sm text-slate-400 mb-4 leading-relaxed">
//               {project.description}
//             </p>

//             <span className="inline-block text-xs font-medium text-sky-400">
//               {project.tech}
//             </span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only 4 projects initially, all projects when showAll is true
  const visibleProjects = showAll 
    ? projectsData 
    : projectsData.slice(0, 4);

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Some of the projects I've built to apply my skills and solve real-world problems.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-2xl bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       overflow-hidden
                       shadow-[0_0_35px_rgba(56,189,248,0.15)]
                       hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]
                       transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-center
                         group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay with links - Only visible on hover */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 flex items-center justify-center gap-4">
                
                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur
                           border border-white/20 text-white
                           hover:bg-sky-400 hover:text-slate-950
                           hover:border-sky-400
                           transition-all duration-300"
                  title="View Source Code"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* Live Demo Link - Only show if exists */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur
                           border border-white/20 text-white
                           hover:bg-sky-400 hover:text-slate-950
                           hover:border-sky-400
                           transition-all duration-300"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-100 mb-2 
                           group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* TECH STACK + LINKS - FLEX ROW */}
              <div className="flex items-center justify-between mt-2">
                {/* Tech Stack Tags - Left Side */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(' • ').map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                               bg-sky-400/10 text-sky-400
                               border border-sky-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Live Links - Right Side */}
                <div className="flex items-center gap-3">
                  {/* GitHub Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 
                             transition-colors duration-300"
                    title="GitHub Repository"
                  >
                    <FaGithub className="text-lg" />
                  </a>

                  {/* Live Demo Link - Only show if exists */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-400 
                               transition-colors duration-300"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE / SHOW LESS BUTTON */}
      {projectsData.length > 4 && (
        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full
                       bg-white/5 border border-white/10
                       text-slate-200 font-medium
                       hover:bg-sky-400 hover:text-slate-950
                       hover:border-sky-400/50
                       shadow-[0_0_30px_rgba(56,189,248,0.15)]
                       hover:shadow-[0_0_50px_rgba(56,189,248,0.3)]
                       transition-all duration-300
                       flex items-center gap-2 mx-auto"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <span className="text-lg">↑</span>
              </>
            ) : (
              <>
                <span>View All Projects</span>
                <span className="text-lg">→</span>
              </>
            )}
          </motion.button>
          
          {/* Projects count indicator */}
          <p className="text-sm text-slate-500 mt-4">
            {showAll 
              ? `Showing all ${projectsData.length} projects` 
              : `Showing 4 of ${projectsData.length} projects`}
          </p>
        </div>
      )}
    </div>
  );
};


export default Projects;
