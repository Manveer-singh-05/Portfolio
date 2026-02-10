import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Education from "./components/Education";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Certificates from "./components/Certificates";
import ContactSection from "./components/ContactSection";
import MotionSection from "./components/MotionSection";

function App() {

  // 👇 STEP 2 WILL GO HERE
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  
  useEffect(() => {
  let timeout;

  const onScroll = () => {
    document.body.classList.add("scroll-active");

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.body.classList.remove("scroll-active");
    }, 300);
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <>
      {/* 🔵 CUSTOM CURSOR */}
      <div className="cursor"></div>
      <div className="cursor-dot"></div>

      <main className="px-6 md:px-16 space-y-24">
        <Sidebar />

        <MotionSection id="home" className="max-w-7xl mx-auto">
          <Hero />
        </MotionSection>

        <MotionSection id="skills" className="max-w-7xl mx-auto">
          <Skills />
        </MotionSection>

        <MotionSection id="competitive" className="max-w-7xl mx-auto">
          <CompetitiveProgramming />
        </MotionSection>

        <MotionSection id="certificates" className="max-w-7xl mx-auto">
          <Certificates />
        </MotionSection>

        <MotionSection id="languages" className="max-w-7xl mx-auto">
          <Languages />
        </MotionSection>

        <MotionSection id="education" className="max-w-4xl mx-auto">
          <Education />
        </MotionSection>

        <MotionSection id="projects" className="max-w-6xl mx-auto">
          <Projects />
        </MotionSection>

        <MotionSection id="contact" className="max-w-7xl mx-auto">
          <ContactSection />
        </MotionSection>
      </main>
    </>
  );
}

export default App;
