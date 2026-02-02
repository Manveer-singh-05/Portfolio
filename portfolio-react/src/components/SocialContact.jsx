import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const contacts = [
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

const SocialContact = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 flex items-center justify-center">

      <div className="w-full max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            Feel free to connect with me through any of the platforms below.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl p-8
                           bg-white/5 backdrop-blur
                           border border-white/10
                           hover:border-sky-400/40
                           shadow-[0_0_30px_rgba(56,189,248,0.15)]
                           hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                           transition-all duration-300"
              >
                {/* GLOW STRIP */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl
                              bg-gradient-to-r ${item.color}`}
                />

                <div className="flex items-center gap-6">

                  {/* ICON */}
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center
                                bg-gradient-to-r ${item.color}
                                shadow-[0_0_25px_rgba(56,189,248,0.8)]
                                group-hover:scale-110 transition`}
                  >
                    <Icon className="text-xl text-slate-950" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      Click to connect
                    </p>
                  </div>

                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialContact;
