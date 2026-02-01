import { useEffect, useRef } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

const skillsData = [
  { name: "C++ / DSA", level: 85 },
  { name: "HTML, CSS, JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "DBMS & SQL", level: 75 },
  { name: "OS & Computer Networks", level: 70 },
];

const orbitIcons = [
  { Icon: FaReact, color: "text-cyan-400", angle: 0 },
  { Icon: FaHtml5, color: "text-orange-400", angle: 72 },
  { Icon: FaCss3Alt, color: "text-blue-400", angle: 144 },
  { Icon: FaJs, color: "text-yellow-300", angle: 216 },
  { Icon: FaDatabase, color: "text-indigo-400", angle: 288 },
];

const Skills = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      if (bar) bar.style.width = bar.dataset.level + "%";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-visible">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[800px] w-[800px] rounded-full bg-sky-400/20 blur-[300px]" />
      </div>

      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-28 items-center z-10">

        {/* LEFT – ORBIT SYSTEM */}
        <div className="relative flex items-center justify-center">

          {/* CORE */}
          <div className="absolute h-28 w-28 rounded-full 
                          bg-gradient-to-r from-sky-400 to-indigo-400
                          shadow-[0_0_80px_rgba(56,189,248,1)]" />

          {/* ORBIT RING */}
          <div className="absolute h-72 w-72 rounded-full border border-sky-400/15" />

          {/* ROTATING ORBIT */}
          <div className="absolute h-72 w-72 animate-orbit">

            {orbitIcons.map(({ Icon, color, angle }, index) => (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-144px) rotate(-${angle}deg)`,
                }}
              >
                <div
                  className="p-3 rounded-full bg-white/5 backdrop-blur
                             shadow-[0_0_25px_rgba(56,189,248,0.8)]
                             hover:shadow-[0_0_55px_rgba(56,189,248,1)]
                             hover:scale-125 transition-all duration-300"
                >
                  <Icon className={`text-3xl ${color}`} />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT – SKILLS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-slate-400 mb-12 max-w-md">
            Technologies and concepts I work with regularly.
          </p>

          <div className="space-y-8">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-sky-400">{skill.level}%</span>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    data-level={skill.level}
                    className="h-full w-0 rounded-full
                               bg-gradient-to-r from-sky-400 to-indigo-400
                               shadow-[0_0_20px_rgba(56,189,248,0.9)]
                               transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
