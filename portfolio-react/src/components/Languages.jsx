import { motion } from "framer-motion";

const languagesData = [
  { name: "English", level: 90 },
  { name: "Hindi", level: 95 },
  { name: "Punjabi", level: 80 },
];

const Languages = () => {
  return (
    <motion.div
      className="languages"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Languages</h2>
      <p className="section-desc">
        Languages I am comfortable communicating in.
      </p>

      <div className="language-list">
        {languagesData.map((lang, index) => (
          <div className="language" key={index}>
            <div className="lang-header">
              <span>{lang.name}</span>
              <span className="percent">{lang.level}%</span>
            </div>

            <div className="progress">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Languages;
