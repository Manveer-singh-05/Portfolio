import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
// import Contact from "./components/Contact";
// import SocialContact from "./components/SocialContact";
import Education from "./components/Education";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Certificates from "./components/Certificates";
import ContactSection from "./components/ContactSection";
import MotionSection from "./components/MotionSection";


function App() {
  return (
    <>
      <main className="px-6 md:px-16 py-20 space-y-24">
        <Sidebar />

        <MotionSection id="home" className="max-w-7xl mx-auto">
          <Hero />
        </MotionSection>

        <MotionSection id="skills" className="max-w-6xl mx-auto">
          <Skills />
        </MotionSection>
        <MotionSection id="competitive" className="max-w-7xl mx-auto">
          <CompetitiveProgramming />
        </MotionSection>

        <MotionSection id="certificates" className="max-w-7xl mx-auto">
          <Certificates />
        </MotionSection>

        <MotionSection   id="languages" className="max-w-7xl mx-auto">
          <Languages />
        </MotionSection>
        <MotionSection id="education" className="max-w-4xl mx-auto">
          <Education />
        </MotionSection>

        <MotionSection id="projects" className="max-w-6xl mx-auto">
          <Projects />
        </MotionSection>
        {/* <section id="contact" className="max-w-6xl mx-auto">
          <SocialContact />
        </section>

        <section id="contact" className="max-w-4xl mx-auto">
          <Contact />
        </section> */}

        <MotionSection id="contact" className="max-w-7xl mx-auto">
          <ContactSection />
        </MotionSection>
      </main>
    </>
  );
}

export default App;
