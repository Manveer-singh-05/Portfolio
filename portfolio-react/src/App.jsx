import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Hero (standalone, full screen) */}
      <Hero />

      {/* Main content */}
      <main className="px-6 md:px-16 py-20 space-y-24">


        <section id="skills" className="max-w-4xl mx-auto">
          <Skills />
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
