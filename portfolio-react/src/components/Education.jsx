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
      className="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Education</h2>
      <p className="section-desc">
        My academic background and qualifications.
      </p>

      <div className="education-list">
        {educationData.map((edu, index) => (
          <motion.div
            className="education-item"
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{edu.degree}</h3>
            <span className="edu-year">{edu.year}</span>
            <p>{edu.institute}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
