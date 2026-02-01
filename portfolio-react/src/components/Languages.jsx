import { motion } from "framer-motion";

const languagesData = [
  { name: "English", level: 90 },
  { name: "Hindi", level: 95 },
  { name: "Punjabi", level: 80 },
];

const Languages = () => {
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
        Languages
      </h2>

      <p className="text-center text-sm text-slate-400 mb-10">
        Languages I am comfortable communicating in.
      </p>

      {/* Language list */}
      <div className="space-y-6">
        {languagesData.map((lang, index) => (
          <div key={index}>
            {/* Label */}
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-200">{lang.name}</span>
              <span className="text-sky-400">{lang.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full
                           bg-gradient-to-r from-sky-400 to-indigo-500
                           shadow-[0_0_15px_rgba(56,189,248,0.7)]"
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
