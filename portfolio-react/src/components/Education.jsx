import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "XYZ University",
    year: "2023 – 2027",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institute: "CBSE Board",
    year: "2022 – 2023",
  },
  {
    degree: "Secondary (Class X)",
    institute: "CBSE Board",
    year: "2020 – 2021",
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold mb-2">
        Education
      </h2>

      <p className="text-center text-sm text-slate-400 mb-10">
        My academic background and qualifications.
      </p>

      {/* Education list */}
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       px-6 py-5
                       shadow-[0_0_30px_rgba(56,189,248,0.12)]"
          >
            <h3 className="text-base font-medium text-slate-200 mb-1">
              {edu.degree}
            </h3>

            <span className="block text-xs text-sky-400 mb-2">
              {edu.year}
            </span>

            <p className="text-sm text-slate-400">
              {edu.institute}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
