const skillsData = [
  { name: "C++ / DSA", level: 85 },
  { name: "HTML, CSS, JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "DBMS & SQL", level: 75 },
  { name: "OS & Computer Networks", level: 70 },
];

const Skills = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold mb-2">
        My Skills
      </h2>

      <p className="text-center text-sm text-slate-400 mb-10">
        Technologies and concepts I work with regularly.
      </p>

      {/* Skills list */}
      <div className="space-y-6">
        {skillsData.map((skill, index) => (
          <div key={index}>
            {/* Label */}
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-200">{skill.name}</span>
              <span className="text-sky-400">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full 
                           bg-gradient-to-r from-sky-400 to-indigo-500
                           shadow-[0_0_15px_rgba(56,189,248,0.7)]
                           transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
