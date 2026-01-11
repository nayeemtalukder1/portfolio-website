"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const skills = [
  { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 92, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-amber-500" },
  { name: "ReactJS", level: 93, color: "from-cyan-400 to-blue-600" },
  { name: "NodeJs", level: 85, color: "from-green-500 to-emerald-600" },
  { name: "ExpressJS", level: 87, color: "from-gray-400 to-gray-600" },
  { name: "NextJs", level: 91, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 82, color: "from-blue-600 to-indigo-600" },
  { name: "React Native", level: 78, color: "from-teal-500 to-cyan-600" },
  { name: "Tailwind", level: 96, color: "from-sky-500 to-teal-500" },
  { name: "Material UI", level: 88, color: "from-indigo-500 to-purple-600" },
  { name: "Framer Motion", level: 94, color: "from-pink-500 to-rose-500" },
  { name: "MongoDB", level: 86, color: "from-green-600 to-lime-600" },
  { name: "Git", level: 89, color: "from-orange-600 to-red-600" },
  { name: "UI/UX", level: 87, color: "from-purple-600 to-violet-600" },
  { name: "Figma", level: 85, color: "from-pink-600 to-rose-600" },
];

export default function SkillsTabAbout() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setProgress(0);

    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= skill.level) {
            clearInterval(interval);
            return skill.level;
          }
          return prev + 1;
        });
      }, 15);
    }, 300);
  };

  return (
    <div className="space-y-10 md:space-y-12">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-2"
      >
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                       bg-clip-text text-transparent">
          Where I'm Expert?
        </h2>

        <p className="text-white/70 text-sm sm:text-base md:text-lg 
                      mt-4 sm:mt-6 max-w-3xl mx-auto">
          I design modern, animated, and user-friendly websites.
          My main focus is front-end development and I'm learning back-end.
        </p>
      </motion.div>

      {/* SKILL TAGS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center 
                   gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto"
      >
        {skills.map((skill, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSkillClick(skill)}
            className={`px-3 sm:px-5 md:px-6 
                        py-2 sm:py-2.5 md:py-3 
                        rounded-full border-2 
                        transition-all text-xs sm:text-sm md:text-base
                        ${
                          selectedSkill?.name === skill.name
                            ? "border-cyan-400 shadow-lg shadow-cyan-500/50"
                            : "border-white/30 hover:border-cyan-400/60"
                        }
                        bg-white/10 backdrop-blur-xl 
                        text-white font-bold`}
          >
            {skill.name}
          </motion.button>
        ))}
      </motion.div>

      {/* PROGRESS */}
      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col md:flex-row 
                       justify-center items-center 
                       gap-10 md:gap-20 mt-12"
          >
            {/* CIRCLE */}
            <div className="relative scale-75 sm:scale-90 md:scale-100">
              <svg width="300" height="300" viewBox="0 0 300 300">
                <circle
                  cx="150"
                  cy="150"
                  r="130"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="25"
                  fill="none"
                />

                <motion.circle
                  cx="150"
                  cy="150"
                  r="130"
                  stroke="url(#gradient)"
                  strokeWidth="25"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 130}`}
                  strokeDashoffset={`${2 * Math.PI * 130 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 150 150)"
                  initial={{ strokeDashoffset: 2 * Math.PI * 130 }}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 130 * (1 - progress / 100),
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <h3 className="text-4xl sm:text-5xl md:text-7xl 
                                 font-black text-cyan-400">
                    {progress}%
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mt-2">
                    Skill Level
                  </p>
                </motion.div>
              </div>
            </div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 text-center md:text-left"
            >
              <h3
                className={`text-3xl sm:text-4xl md:text-6xl 
                            font-black bg-gradient-to-r 
                            ${selectedSkill.color} 
                            bg-clip-text text-transparent`}
              >
                {selectedSkill.name}
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-white text-sm sm:text-lg">
                  Mastered
                </span>
              </div>

              <p className="text-white/70 text-sm sm:text-base max-w-md">
                I use {selectedSkill.name} daily in real projects.
                From animations to full-stack apps.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HINT */}
      {!selectedSkill && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/50 text-sm sm:text-lg"
        >
          Click any skill tag
        </motion.p>
      )}
    </div>
  );
}
