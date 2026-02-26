import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";

import {
  FaTrophy,
  FaFire,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    accent: "from-yellow-400 to-orange-500",
    stats: [
      { label: "Problems Solved", value: "170", icon: FaCode },
      { label: "Active Streak", value: "29 days", icon: FaFire },
      { label: "Contests", value: "1416", icon: FaTrophy },
    ],
    link: "https://leetcode.com/u/manveersingh0501l/",
  },
  {
    name: "CodeForces",
    icon: SiCodeforces,
    accent: "from-blue-400 to-cyan-500",
    stats: [
      { label: "Rating", value: "0", icon: FaTrophy },
      { label: "Rank", value: "Unrated", icon: FaCode },
      { label: "Problems Solved", value: "27", icon: FaFire },
      { label: "Contests", value: "0", icon: FaTrophy },
    ],
    link: "https://codeforces.com/profile/manveersingh0501l",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    accent: "from-gray-400 to-yellow-600",
    stats: [
      { label: "Rating", value: "", icon: FaTrophy },
      { label: "Rank", value: "Bronze league", icon: FaCode },
      { label: "Problems Solved", value: "97", icon: FaFire },
      { label: "Contests", value: "0", icon: FaTrophy },
    ],
    link: "https://www.codechef.com/users/manveer_05",
  },
];

const CompetitiveProgramming = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Competitive{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Programming
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400">
          My journey in algorithms, data structures, and problem-solving
          competitions across different platforms.
        </p>
      </div>

      {/* PLATFORM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {platforms.map((platform, index) => {
          const Icon = platform.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur
                         border border-white/10
                         hover:border-sky-400/40
                         shadow-[0_0_30px_rgba(56,189,248,0.15)]
                         hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                         transition-colors duration-300"
            >

              {/* TOP BAR */}
              {/* <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl
                            bg-gradient-to-r ${platform.accent}`}
              /> */}

{/* PROGRESS TOP BAR */}
<div className="absolute inset-x-0 top-0 h-1 overflow-hidden rounded-t-2xl bg-white/10">
  <motion.div
    className={`h-full bg-gradient-to-r ${platform.accent}`}
    initial={{ width: "0%" }}
    animate={{ width: "100%" }}
    transition={{
      duration: 1.8,
      ease: "easeInOut",
      delay: index * 0.15,
    }}
  />
</div>



              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Icon className="text-3xl text-sky-400" />
                  <h3 className="text-xl font-semibold text-slate-100">
                    {platform.name}
                  </h3>
                </div>

                <a title="profile"
                  href={platform.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              {/* STATS */}
              <div className="space-y-4">
                {platform.stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                    >
                      <StatIcon className="text-sky-400" />
                      <span className="text-slate-400">
                        {stat.label}:
                      </span>
                      <span className="text-slate-200 font-medium">
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
