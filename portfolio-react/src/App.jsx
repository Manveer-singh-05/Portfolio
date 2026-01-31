import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <>
      <Sidebar />

      <section id="home" className="card">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </section>

      <section id="skills" className="card">
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </section>

      <section id="projects" className="card">
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </section>

      <section id="languages" className="card">
        <SectionWrapper>
          <Languages />
        </SectionWrapper>
      </section>

      <section id="contact" className="card">
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </section>
    </>
  );
}

export default App;
