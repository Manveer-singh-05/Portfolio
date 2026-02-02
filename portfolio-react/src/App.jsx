import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Education from "./components/Education";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <main className="px-6 md:px-16 py-20 space-y-24">
        <Sidebar />

        <section id="home" className="max-w-6xl mx-auto">
          <Hero />
        </section>

        <section id="skills" className="max-w-4xl mx-auto">
          <Skills />
        </section>
        <section id="competitive" className="max-w-7xl mx-auto">
          <CompetitiveProgramming />
        </section>

        <section id="certificates" className="max-w-7xl mx-auto">
          <Certificates />
        </section>

        <section id="languages" className="max-w-4xl mx-auto">
          <Languages />
        </section>
        <section id="education" className="max-w-4xl mx-auto">
          <Education />
        </section>

        <section id="projects" className="max-w-6xl mx-auto">
          <Projects />
        </section>

        <section id="contact" className="max-w-4xl mx-auto">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
