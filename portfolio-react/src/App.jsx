import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "./components/Projects";
import Languages from "../components/Languages";
import Contact from "../components/Contact";

function App() {
  return (
    <>
      <Sidebar />

      <section id="home" className="card">
        <Hero />
      </section>

      <section id="skills" className="card">
        <Skills />
      </section>

      <section id="projects" className="card">
        <Projects />
      </section>

      <section id="languages" className="card">
        <Languages />
      </section>

      <section id="contact" className="card">
        <Contact />
      </section>
    </>
  );
}

export default App;
