const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">

        <div className="profile-pic"></div>

        <h1>
          Hi, I&apos;m <span>Manveer</span>
        </h1>

        <h3>Software Engineering Student</h3>

        <p>
          I build clean, responsive web applications and enjoy solving
          real-world problems using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#" className="btn secondary">Download CV</a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
