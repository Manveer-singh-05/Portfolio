import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://linkedin.com/in/yourusername",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/yourusername",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Gmail",
    icon: FaEnvelope,
    link: "mailto:yourmail@gmail.com",
    color: "from-red-400 to-orange-500",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/yourusername",
    color: "from-sky-400 to-blue-500",
  },
];

const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
  },
  transition: {
    type: "spring",
    stiffness: 180,
    damping: 14,
  },
};

const ContactSection = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 flex items-center justify-center">

      <div className="w-full max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Feel free to reach out for opportunities or collaborations.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ================= FORM ================= */}
          <motion.div
            {...cardHover}
            className="rounded-2xl p-8 bg-white/5 backdrop-blur
                       border border-white/10
                       shadow-[0_0_40px_rgba(56,189,248,0.2)]"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-white/5
                           border border-white/10 text-slate-200
                           placeholder:text-slate-500
                           focus:outline-none focus:border-sky-400/60"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-white/5
                           border border-white/10 text-slate-200
                           placeholder:text-slate-500
                           focus:outline-none focus:border-sky-400/60"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl bg-white/5
                           border border-white/10 text-slate-200
                           placeholder:text-slate-500
                           focus:outline-none focus:border-sky-400/60 resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-sky-400 py-4
                           font-medium text-slate-950
                           shadow-[0_0_40px_rgba(56,189,248,1)]
                           hover:shadow-[0_0_70px_rgba(56,189,248,1)]
                           transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* ================= SOCIAL CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  {...cardHover}
                  className="group relative rounded-2xl p-6
                             bg-white/5 backdrop-blur
                             border border-white/10
                             hover:border-sky-400/40
                             shadow-[0_0_30px_rgba(56,189,248,0.15)]
                             hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                             transition-all"
                >
                  {/* TOP STRIP */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl
                                bg-gradient-to-r ${item.color}`}
                  />

                  <div className="flex items-center gap-5">
                    <div
                      className={`h-14 w-14 rounded-full flex items-center justify-center
                                  bg-gradient-to-r ${item.color}
                                  shadow-[0_0_25px_rgba(56,189,248,0.8)]
                                  group-hover:scale-110 transition`}
                    >
                      <Icon className="text-xl text-slate-950" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-400">
                        Click to connect
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
