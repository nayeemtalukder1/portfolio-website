"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { 
  Download, 
  CheckCircle, 
  Sparkles,
  FileText,
  Code2,
  GraduationCap,
} from "lucide-react";
import SkillsTabAbout from "../components/SkillsTabAbout";
import EducationTab from "../components/EducationTab";

const tabs = [
  { id: 1, label: "Biography", icon: FileText, gradient: "from-purple-500 to-pink-500" },
  { id: 2, label: "Skills", icon: Code2, gradient: "from-blue-500 to-cyan-500" },
  { id: 3, label: "Education", icon: GraduationCap, gradient: "from-green-500 to-emerald-500" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* HERO NAV */}
      <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-2xl 
                     rounded-full px-4 sm:px-6 md:px-8 
                     py-2 sm:py-3 md:py-4 
                     border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-2 sm:gap-4 
                          text-white/70 text-sm sm:text-base">
            <span>Home</span>
            <span>→</span>
            <span className="text-green-400 font-black 
                             text-base sm:text-xl">
              About Me
            </span>
          </div>
        </motion.div>
      </div>

      {/* PAGE */}
      <div className="min-h-screen 
                      px-4 sm:px-6 md:px-8 
                      py-24 sm:py-28 md:py-32 
                      max-w-7xl mx-auto">

        {/* TAB BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12 sm:mb-20"
        >
          <div className="bg-white/10 backdrop-blur-2xl 
                          rounded-full p-2 sm:p-3 
                          border border-white/20 shadow-3xl">
            <div className="flex gap-2 sm:gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative 
                              px-3 sm:px-5 md:px-8 
                              py-2 sm:py-3 md:py-4 
                              rounded-full flex items-center 
                              gap-2 sm:gap-3 
                              text-xs sm:text-sm md:text-base
                              transition-all ${
                                activeTab === tab.id
                                  ? "text-white font-black"
                                  : "text-white/60"
                              }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 
                                  bg-gradient-to-r ${tab.gradient} 
                                  rounded-full -z-10`}
                    />
                  )}

                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{tab.label}</span>
                  <span className="text-xs opacity-70">
                    0{tab.id}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">

          {/* BIO */}
          {activeTab === 1 && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="grid grid-cols-1 
                         lg:grid-cols-2 
                         gap-10 md:gap-16 
                         items-center"
            >
              {/* IMAGE */}
              <div className="relative">
                <div className="relative mx-auto 
                                w-64 sm:w-80 md:w-96 
                                h-[350px] sm:h-[420px] md:h-[500px] 
                                rounded-3xl overflow-hidden 
                                ring-4 sm:ring-6 md:ring-8 
                                ring-purple-500/30 shadow-3xl">
                  <Image
                    src="/nayeem_2.png"
                    alt="Nayeem"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 
                                  bg-gradient-to-t 
                                  from-black/80 
                                  via-transparent 
                                  to-transparent" />
                </div>

                <div className="absolute 
                                -bottom-6 -right-6 
                                sm:-bottom-10 sm:-right-10 
                                w-40 sm:w-56 md:w-64 
                                h-40 sm:h-56 md:h-64 
                                bg-gradient-to-br 
                                from-purple-600 to-pink-600 
                                rounded-full blur-3xl 
                                opacity-50" />
              </div>

              {/* TEXT */}
              <div className="space-y-6 md:space-y-8">

                <div>
                  <p className="text-yellow-400 
                                font-bold text-sm 
                                sm:text-base 
                                mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    VISIT MY PORTFOLIO & HIRE ME
                  </p>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl 
                                 font-black text-green-400 
                                 mb-4 md:mb-6">
                    About Me
                  </h1>
                </div>

                <p className="text-white/80 
                              text-sm sm:text-base md:text-lg 
                              leading-relaxed">
                  I'm a passionate{" "}
                  <span className="text-cyan-400 font-bold">
                    Web Developer
                  </span>{" "}
                  specializing in building modern, responsive,
                  and interactive web applications using{" "}
                  <span className="text-purple-400 font-bold">
                    React, Next.js, and Tailwind CSS
                  </span>{" "}
                  on the frontend, and{" "}
                  <span className="text-pink-400 font-bold">
                    Node.js, Express, and MongoDB
                  </span>{" "}
                  on the backend.
                </p>

                <p className="text-white/80 
                              text-sm sm:text-base md:text-lg 
                              leading-relaxed">
                  I love transforming creative ideas into
                  seamless digital experiences with clean,
                  scalable, and efficient code.
                </p>

                {/* FEATURES */}
                <div className="space-y-3 sm:space-y-4 mt-6">

                  {[
                    "Web Design Full stack",
                    "24/7 Support",
                    "Unlimited Revisions",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <CheckCircle 
                        className="w-5 h-5 
                                   sm:w-6 sm:h-6 
                                   md:w-8 md:h-8 
                                   text-cyan-400" 
                      />
                      <span className="text-white 
                                       text-sm sm:text-base 
                                       md:text-xl 
                                       font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CV BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-8 md:mt-12"
                >
                  <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 
                               px-6 sm:px-8 md:px-12 
                               py-3 sm:py-4 md:py-6 
                               bg-gradient-to-r 
                               from-yellow-500 to-orange-500 
                               rounded-full font-black 
                               text-black 
                               text-sm sm:text-lg md:text-2xl 
                               shadow-2xl"
                  >
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    DOWNLOAD CV
                  </motion.a>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* SKILLS */}
          {activeTab === 2 && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SkillsTabAbout />
            </motion.div>
          )}

          {/* EDUCATION */}
          {activeTab === 3 && (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-6 sm:py-10"
            >
              <EducationTab />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </>
  );
}
