import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Education from "./components/Education";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <>
      <Sidebar />
  {/* HERO — standalone */}
      <Hero />
      <main className="dashboard">

        {/* ROW 1 */}
        {/* <section id="home" className="card span-2">
          <SectionWrapper>
            <Hero />
          </SectionWrapper>
        </section> */}

        <section id="languages" className="card">
          <SectionWrapper>
            <Languages />
          </SectionWrapper>
        </section>

        {/* ROW 2 */}
        <section id="skills" className="card">
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
        </section>

        <section id="education" className="card">
          <SectionWrapper>
            <Education />
          </SectionWrapper>
        </section>

        {/* ROW 3 */}
        <section id="projects" className="card span-2">
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
        </section>

        {/* ROW 4 */}
        <section id="contact" className="card span-2">
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
        </section>

      </main>
    </>
  );
}

export default App;
