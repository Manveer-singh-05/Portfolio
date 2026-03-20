// import { motion } from "framer-motion";

// const languages = [
//   {
//     flag: "🇺🇸",
//     name: "English",
//     level: "Fluent",
//     percent: 90,
//   },
//   {
//     flag: "🇮🇳",
//     name: "Hindi",
//     level: "Native",
//     percent: 95,
//   },
//   {
//     flag: "🇮🇳",
//     name: "Punjabi",
//     level: "Conversational",
//     percent: 80,
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const rowVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 18,
//     },
//   },
// };

// const Languages = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="h-[700px] w-[700px] rounded-full bg-sky-400/10 blur-[280px]" />
//       </div>

//       <div className="relative w-full max-w-3xl z-10">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-semibold text-center mb-2"
//         >
//           Languages
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-center text-slate-400 mb-12"
//         >
//           Languages I am comfortable communicating in.
//         </motion.p>

//         {/* GLASS CARD */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="rounded-2xl bg-white/5 backdrop-blur-xl
//                      border border-white/10
//                      shadow-[0_0_60px_rgba(56,189,248,0.15)]
//                      p-6 space-y-6"
//         >
//           {languages.map((lang, index) => (
//             <motion.div
//               key={index}
//               variants={rowVariants}
//               whileHover={{
//                 scale: 1.03,
//                 boxShadow: "0 0 30px rgba(56,189,248,0.45)",
//               }}
//               className="relative flex items-center gap-4 p-4 rounded-xl
//                          bg-white/5 cursor-pointer
//                          transition-all overflow-hidden"
//             >
//               {/* HOVER GLOW LINE */}
//               <span
//                 className="absolute inset-x-0 top-0 h-[2px]
//                            bg-gradient-to-r from-sky-400 to-indigo-400
//                            opacity-0 hover:opacity-100 transition-opacity"
//               />

//               {/* FLAG */}
//               <div className="text-2xl">{lang.flag}</div>

//               {/* NAME */}
//               <div className="flex-1">
//                 <p className="text-slate-200 font-medium">
//                   {lang.name}
//                 </p>
//                 <p className="text-xs text-slate-400">
//                   {lang.level}
//                 </p>
//               </div>

//               {/* BAR */}
//               <div className="w-40">
//                 <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${lang.percent}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="h-full rounded-full
//                                bg-gradient-to-r from-sky-400 to-indigo-400"
//                   />
//                 </div>
//               </div>

//               {/* % */}
//               <span className="text-sky-400 text-sm w-10 text-right">
//                 {lang.percent}%
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Languages;

import { motion } from "framer-motion";
import { FaReact, FaServer, FaLightbulb, FaMobileAlt } from "react-icons/fa";

const languages = [
  {
    flag: "🇺🇸",
    name: "English",
    level: "Fluent",
    percent: 90,
  },
  {
    flag: "🇮🇳",
    name: "Hindi",
    level: "Native",
    percent: 95,
  },
  {
    flag: "🇮🇳",
    name: "Punjabi",
    level: "Conversational",
    percent: 80,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const AboutLanguages = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[700px] w-[700px] rounded-full bg-sky-400/10 blur-[280px]" />
      </div>

      <div className="relative w-full max-w-6xl z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed">
              Hello! I'm{" "}
              <span className="text-sky-400 font-medium">Manveer Singh</span>.
              I'm a passionate software developer with a knack for creating
              efficient, scalable, and user-friendly solutions to complex
              problems.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My journey into programming began with a curiosity about how
              things work behind the scenes. This curiosity evolved into a
              passion for building applications that make a difference in
              people's lives.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I believe in writing clean, maintainable code and constantly
              learning new technologies. My development philosophy centers
              around user experience, performance, and creating solutions that
              stand the test of time.
            </p>

            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>

          {/* RIGHT SIDE - 4 CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(56,189,248,0.35)",
              }}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              transition-all duration-300 cursor-pointer
              hover:border-sky-400/40"
            >
              <FaReact className="text-3xl text-sky-400 mb-3" />
              <p className="text-sky-400 font-semibold mb-2">Frontend</p>
              <p className="text-sm text-slate-400">
                Building responsive and interactive user interfaces.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(56,189,248,0.35)",
              }}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              transition-all duration-300 cursor-pointer
              hover:border-sky-400/40"
            >
              <FaServer className="text-3xl text-sky-400 mb-3" />
              <p className="text-sky-400 font-semibold mb-2">Backend</p>
              <p className="text-sm text-slate-400">
                Developing APIs and scalable server-side systems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(56,189,248,0.35)",
              }}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              transition-all duration-300 cursor-pointer
              hover:border-sky-400/40"
            >
              <FaLightbulb className="text-3xl text-sky-400 mb-3" />
              <p className="text-sky-400 font-semibold mb-2">Problem Solving</p>
              <p className="text-sm text-slate-400">
                Solving real-world problems using algorithms and logic.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(56,189,248,0.35)",
              }}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              transition-all duration-300 cursor-pointer
              hover:border-sky-400/40"
            >
              <FaMobileAlt className="text-3xl text-sky-400 mb-3" />
              <p className="text-sky-400 font-semibold mb-2">
                Responsive Design
              </p>
              <p className="text-sm text-slate-400">
                Creating UI that works perfectly on every device.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLanguages;
