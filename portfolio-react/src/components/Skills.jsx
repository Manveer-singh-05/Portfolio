import { useState } from "react";
import { motion as m } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";

/* =======================
   SKILLS DATA
======================= */
const skillsData = [
  { name: "C++ / DSA", level: 85 },
  { name: "HTML, CSS, JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "DBMS & SQL", level: 75 },
  { name: "OS & Computer Networks", level: 70 },
];

/* =======================
   ORBIT ICONS
======================= */
const orbitIconsInner = [
  { Icon: FaReact, color: "text-cyan-400", angle: 0 },
  { Icon: FaHtml5, color: "text-orange-400", angle: 72 },
  { Icon: FaCss3Alt, color: "text-blue-400", angle: 144 },
  { Icon: FaJs, color: "text-yellow-300", angle: 216 },
  { Icon: FaDatabase, color: "text-indigo-400", angle: 288 },
];

const orbitIconsOuter = [
  { Icon: FaJava, color: "text-red-400", angle: 0 },
  { Icon: FaPython, color: "text-yellow-400", angle: 60 },
  { Icon: SiCplusplus, color: "text-blue-400", angle: 120 },
  { Icon: SiMongodb, color: "text-green-400", angle: 180 },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-20">

      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">

        {/* =======================
            LEFT – ORBIT SYSTEM
        ======================= */}
        <div className="relative flex items-center justify-center">

          {/* CORE */}
          <m.div
            animate={{
              boxShadow: hoveredSkill
                ? "0 0 120px rgba(56,189,248,1)"
                : "0 0 80px rgba(56,189,248,0.9)",
              scale: hoveredSkill ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute h-28 w-28 rounded-full
                       bg-gradient-to-r from-sky-400 to-indigo-400"
          />

          {/* INNER RING */}
          <div className="absolute h-72 w-72 rounded-full border border-sky-400/10" />

          {/* OUTER RING */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-sky-400/5" />

          {/* INNER ORBIT */}
          <m.div
            className="absolute h-72 w-72"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: hoveredSkill ? 40 : 18,
              ease: "linear",
            }}
          >
            {orbitIconsInner.map(({ Icon, color, angle }, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-144px) rotate(-${angle}deg)`,
                }}
              >
                <m.div
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 45px rgba(56,189,248,1)",
                  }}
                  className="p-3 rounded-full bg-white/5 backdrop-blur
                             shadow-[0_0_25px_rgba(56,189,248,0.8)]"
                >
                  <Icon className={`text-3xl ${color}`} />
                </m.div>
              </div>
            ))}
          </m.div>

          {/* OUTER ORBIT */}
          <m.div
            className="absolute h-[420px] w-[420px]"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: hoveredSkill ? 60 : 28,
              ease: "linear",
            }}
          >
            {orbitIconsOuter.map(({ Icon, color, angle }, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-210px) rotate(-${angle}deg)`,
                }}
              >
                <m.div
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 45px rgba(56,189,248,1)",
                  }}
                  className="p-3 rounded-full bg-white/5 backdrop-blur
                             shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                >
                  <Icon className={`text-3xl ${color}`} />
                </m.div>
              </div>
            ))}
          </m.div>
        </div>

        {/* =======================
            RIGHT – SKILLS CARD
        ======================= */}
        <div className="relative rounded-3xl border border-white/10
                        bg-white/5 backdrop-blur-xl
                        p-8 md:p-10
                        shadow-[0_0_60px_rgba(56,189,248,0.15)]">

          <div className="absolute inset-0 rounded-3xl
                          bg-gradient-to-r from-sky-400/30 via-indigo-400/30 to-sky-400/30
                          opacity-40 blur-[1px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="text-slate-400 mb-10">
              Technologies and concepts I work with regularly.
            </p>

            <div className="space-y-7">
              {skillsData.map((skill, i) => (
                <m.div
                  key={i}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl p-4 cursor-pointer
                             hover:bg-white/5
                             hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                >
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-sky-400">{skill.level}%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                      className="h-full rounded-full
                                 bg-gradient-to-r from-sky-400 to-indigo-400
                                 shadow-[0_0_20px_rgba(56,189,248,0.9)]"
                    />
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
