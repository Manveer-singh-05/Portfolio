const skillsData = [
  { name: "C++ / DSA", level: 85 },
  { name: "HTML, CSS, JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "DBMS & SQL", level: 75 },
  { name: "OS & Computer Networks", level: 70 },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="section-desc">
        Technologies and concepts I work with regularly.
      </p>

      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.name}</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
