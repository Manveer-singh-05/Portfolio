import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const trainingInternshipData = [
  {
    title: "Internship Title",
    company: "Company Name",
    duration: "MM/YYYY - MM/YYYY",
    description: "Add your internship description here",
    type: "Internship",
    skills: ["Tech 1", "Tech 2", "Tech 3"],
  },
  {
    title: "Training Program Title",
    company: "Organization Name",
    duration: "MM/YYYY - MM/YYYY",
    description: "Add your training description here",
    type: "Training",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  {
    title: "Training Program Title",
    company: "Organization Name",
    duration: "MM/YYYY - MM/YYYY",
    description: "Add your training description here",
    type: "Training",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
];

const TrainingAndInternship = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-3 text-white">
        Training & Internships
      </h2>

      <p className="text-center text-sm text-slate-400 mb-12">
        Professional development and practical experience that shaped my career
      </p>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-400 to-transparent"></div>

        {/* Training & Internship items */}
        <div className="space-y-12">
          {trainingInternshipData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Connecting line to timeline */}
              {index % 2 === 0 ? (
                // Left side - line goes from card to center
                <svg
                  className="hidden md:block absolute w-16 h-0.5 left-auto right-[-4rem] top-1/2 transform -translate-y-1/2"
                  viewBox="0 0 64 2"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="64"
                    y2="1"
                    stroke="url(#gradientLeft)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradientLeft"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#0ea5e9"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                // Right side - line goes from center to card
                <svg
                  className="hidden md:block absolute w-16 h-0.5 left-[-4rem] right-auto top-1/2 transform -translate-y-1/2"
                  viewBox="0 0 64 2"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="64"
                    y2="1"
                    stroke="url(#gradientRight)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradientRight"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {/* Timeline dot with Briefcase Icon */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-sky-400/40 to-indigo-400/40 border-2 border-sky-400 rounded-full z-20 items-center justify-center">
                <div className="w-10 h-10 bg-sky-500/30 rounded-full flex items-center justify-center border border-sky-400">
                  <FaBriefcase className="w-5 h-5 text-sky-300" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full md:w-5/12 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl 
                           border-2 border-sky-400/40 hover:border-sky-400/70
                           p-6 shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300">{item.company}</p>
                  </div>
                  <span className="inline-block text-xs font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
                    {item.type}
                  </span>
                </div>

                {/* Duration */}
                <p className="text-xs text-slate-400 mb-3">{item.duration}</p>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700/50">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block text-xs px-2.5 py-1 rounded-md bg-sky-400/10 text-sky-300 border border-sky-400/30 hover:border-sky-400/60 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingAndInternship;
