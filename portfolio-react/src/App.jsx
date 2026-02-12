import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import { Suspense, lazy } from "react";

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

// updated imports with lazy loading
// const Sidebar = lazy(() => import("./components/Sidebar"));
// const Hero = lazy(() => import("./components/Hero"));
// const Skills = lazy(() => import("./components/Skills"));
// const Projects = lazy(() => import("./components/Projects"));
// const Languages = lazy(() => import("./components/Languages"));
// const Education = lazy(() => import("./components/Education"));
// const CompetitiveProgramming = lazy(() => import("./components/CompetitiveProgramming"));
// const Certificates = lazy(() => import("./components/Certificates"));
// const ContactSection = lazy(() => import("./components/ContactSection"));
// const MotionSection = lazy(() => import("./components/MotionSection"));

function App() {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Custom Cursor Logic
  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   const dot = document.querySelector(".cursor-dot");
  //   const moveCursor = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //     dot.style.left = `${e.clientX}px`;
  //     dot.style.top = `${e.clientY}px`;
  //   };
  //   window.addEventListener("mousemove", moveCursor);
  //   return () => window.removeEventListener("mousemove", moveCursor);
  // }, []);
  // Optimized Custom Cursor Logic
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    let rafId;

    const moveCursor = (e) => {
      // This syncs movement with your monitor's frame rate
      rafId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        // This 'translate3d' tells the GPU to handle the movement
        const transformStr = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

        if (cursor) cursor.style.transform = transformStr;
        if (dot) dot.style.transform = transformStr;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Particles Configuration (Matched to your Blue Theme)
  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Let your CSS gradient show through
      },
      fpsLimit: 90,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" }, // Connects lines to cursor
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 4 },
        },
      },
      particles: {
        color: { value: "#4facfe" }, // Matches your cursor blue
        links: {
          color: "#4facfe",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80, // Adjust this for more/less dots
        },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      {/* 🌌 DYNAMIC BACKGROUND */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="fixed inset-0 -z-10"
        />
      )}

      {/* 🔵 CUSTOM CURSOR */}
      <div className="cursor"></div>
      <div className="cursor-dot"></div>

      {/* <main className="relative z-10 px-6 md:px-16 space-y-24 scroll-smooth"> */}
      <main
        className="
  relative z-10
  px-4 sm:px-6 md:px-12 lg:px-16
  space-y-16 sm:space-y-20 md:space-y-24
  scroll-smooth
"
      >
        <Sidebar />
        <MotionSection id="home" className=" w-full max-w-7xl mx-auto">
          <Hero />
        </MotionSection>
        <MotionSection id="skills" className=" w-full max-w-7xl mx-auto">
          <Skills />
        </MotionSection>
        <MotionSection id="competitive" className=" w-full max-w-7xl mx-auto">
          <CompetitiveProgramming />
        </MotionSection>
        <MotionSection id="certificates" className=" w-full max-w-7xl mx-auto">
          <Certificates />
        </MotionSection>
        <MotionSection id="languages" className=" w-full max-w-7xl mx-auto">
          <Languages />
        </MotionSection>
        <MotionSection id="education" className=" w-full max-w-4xl mx-auto">
          <Education />
        </MotionSection>
        <MotionSection id="projects" className=" w-full max-w-6xl mx-auto">
          <Projects />
        </MotionSection>
        <MotionSection id="contact" className=" w-full max-w-7xl mx-auto">
          <ContactSection />
        </MotionSection>
      </main>
    </>
  );
}

export default App;
