import robotHand from "../assets/robot-hand.jpg";

/* Skill bars */
const skillsData = [
  { name: "C++ / DSA", level: 85 },
  { name: "HTML, CSS, JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "DBMS & SQL", level: 75 },
  { name: "OS & Computer Networks", level: 70 },
];

/* Floating tech icons */
const floatingIcons = [
  { label: "React", color: "text-cyan-400", top: "-top-10", left: "left-10" },
  { label: "JS", color: "text-yellow-400", top: "top-0", left: "left-32" },
  { label: "Vue", color: "text-emerald-400", top: "top-20", left: "left-16" },
  { label: "Tailwind", color: "text-sky-400", top: "top-10", left: "left-52" },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-visible">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full 
                        bg-sky-400/20 blur-[260px]" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT — ROBOTIC HAND + FLOATING ICONS */}
        <div className="relative flex items-center justify-center overflow-visible">

          {/* Floating tech icons */}
          {floatingIcons.map((icon, i) => (
            <div
              key={i}
              className={`absolute ${icon.top} ${icon.left}
                          h-12 w-12 rounded-full bg-white/5 backdrop-blur-md
                          flex items-center justify-center
                          ${icon.color} text-sm font-semibold
                          shadow-[0_0_25px_rgba(56,189,248,0.6)]
                          animate-float`}
            >
              {icon.label}
            </div>
          ))}

          {/* Glow behind hand */}
          <div className="absolute h-64 w-64 rounded-full 
                          bg-sky-400/25 blur-[140px]" />

          {/* Robotic Hand */}
          <img
            src={robotHand}
            alt="Robotic Hand"
            className="relative w-[320px] drop-shadow-[0_0_45px_rgba(56,189,248,0.9)]"
          />
        </div>

        {/* RIGHT — SKILLS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400
                             bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-slate-400 mb-10 max-w-md">
            Technologies and concepts I work with regularly.
          </p>

          <div className="space-y-7">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-sky-400">{skill.level}%</span>
                </div>

                <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full
                               bg-gradient-to-r from-sky-400 to-indigo-400
                               shadow-[0_0_25px_rgba(56,189,248,0.9)]
                               transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
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
