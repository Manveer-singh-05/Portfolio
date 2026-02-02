import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificatesData = [
  {
    title: "Data Structures & Algorithms",
    issuer: "Coursera",
    date: "2024",
    link: "#",
  },
  {
    title: "React Developer",
    issuer: "Udemy",
    date: "2024",
    link: "#",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    date: "2023",
    link: "#",
  },
  {
    title: "Operating Systems",
    issuer: "NPTEL",
    date: "2023",
    link: "#",
  },
  {
    title: "Java Programming",
    issuer: "Coursera",
    date: "2023",
    link: "#",
  },
  {
    title: "Problem Solving (C++)",
    issuer: "HackerRank",
    date: "2023",
    link: "#",
  },

  /* ===== EXTRA CERTIFICATES (VISIBLE AFTER CLICK) ===== */
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2022",
    link: "#",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    date: "2022",
    link: "#",
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 6);

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400">
          A collection of certifications that validate my technical skills
          and continuous learning journey.
        </p>
      </div>

      {/* CERTIFICATE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {visibleCertificates.map((cert, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 bg-white/5 backdrop-blur
                       border border-white/10
                       hover:border-sky-400/40
                       shadow-[0_0_30px_rgba(56,189,248,0.15)]
                       hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                       transition-all duration-300"
          >

            {/* ICON */}
            <div className="flex items-center justify-between mb-4">
              <FaCertificate className="text-3xl text-sky-400" />
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            {/* CONTENT */}
            <h3 className="text-lg font-semibold text-slate-100 mb-1">
              {cert.title}
            </h3>

            <p className="text-sm text-slate-400">
              {cert.issuer}
            </p>

            <p className="text-xs text-slate-500 mt-2">
              Issued: {cert.date}
            </p>

          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      {certificatesData.length > 6 && (
        <div className="text-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full
                       bg-white/5 border border-white/10
                       text-slate-200
                       hover:bg-sky-400 hover:text-slate-950
                       transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Certificates"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
