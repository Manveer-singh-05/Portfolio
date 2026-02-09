import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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
    link: "https://www.linkedin.com/in/manveersingh05/",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Manveer-singh-05",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Gmail",
    icon: FaEnvelope,
    link: "mailto:manveersingh0501l@gmail.com",
    color: "from-red-400 to-orange-500",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://x.com/singh_manveer05",
    color: "from-sky-400 to-blue-500",
  },
];

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lekgi3",
        "template_dqi6tr1",
        formRef.current,
        "YDR71vEmh6mTAcPN9"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

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
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="rounded-2xl p-8 bg-white/5 backdrop-blur
                       border border-white/10
                       shadow-[0_0_40px_rgba(56,189,248,0.2)]"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5
                           border border-white/10 text-slate-200
                           placeholder:text-slate-500
                           focus:outline-none focus:border-sky-400/60"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5
                           border border-white/10 text-slate-200
                           placeholder:text-slate-500
                           focus:outline-none focus:border-sky-400/60"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
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

          {/* ================= SOCIAL ORBS ================= */}
          <div className="grid grid-cols-2 gap-10 place-items-center">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 220, damping: 12 }}
                  className="group relative aspect-square w-40 rounded-full
                             bg-white/5 backdrop-blur
                             border border-white/10
                             hover:border-sky-400/50
                             shadow-[0_0_30px_rgba(56,189,248,0.25)]
                             hover:shadow-[0_0_90px_rgba(56,189,248,0.8)]
                             flex items-center justify-center
                             cursor-pointer"
                >
                  {/* INNER ORB */}
                  <div
                    className={`h-20 w-20 rounded-full flex items-center justify-center
                                bg-gradient-to-r ${item.color}
                                shadow-[0_0_35px_rgba(56,189,248,0.9)]
                                group-hover:scale-125 transition`}
                  >
                    <Icon className="text-3xl text-slate-950" />
                  </div>

                  {/* LABEL */}
                  <div className="absolute -bottom-7 text-center">
                    <p className="text-sm font-medium text-slate-300
                                  group-hover:text-sky-400 transition">
                      {item.name}
                    </p>
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
