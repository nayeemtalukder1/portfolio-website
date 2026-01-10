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
import SkillCircle from "../components/SkillCircle";
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
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-2xl rounded-full px-6 md:px-8 py-4 border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-4 text-white/70">
            <span>Home</span>
            <span className="text-2xl">→</span>
            <span className="text-green-400 font-black text-xl">About Me</span>
          </div>
        </motion.div>
      </div>

      <div className="min-h-screen px-6 md:px-8 py-25 md:py-32 max-w-7xl mx-auto">
        {/* TAB BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-20"
        >
          <div className="bg-white/10 backdrop-blur-2xl rounded-full p-3 border border-white/20 shadow-3xl">
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-2 md:px-8 py-4 rounded-full flex items-center gap-3 transition-all ${
                    activeTab === tab.id 
                      ? "text-white font-black" 
                      : "text-white/60"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-full -z-10`}
                    />
                  )}
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className="text-sm opacity-70">0{tab.id}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">
          {activeTab === 1 && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* LEFT - PHOTO */}
              <div className="relative">
                <div className="relative mx-auto w-96 h-[500px] rounded-3xl overflow-hidden ring-8 ring-purple-500/30 shadow-3xl">
                  <Image
                    src="/nayeem_2.png"
                    alt="Hasibul"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50" />
              </div>

              {/* RIGHT - BIO */}
              <div className="space-y-8">
                <div>
                  <p className="text-yellow-400 font-bold text-lg mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    VISIT MY PORTFOLIO & HIRE ME
                  </p>
                  <h1 className="text-7xl font-black text-green-400 mb-6">About Me</h1>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  I'm a passionate <span className="text-cyan-400 font-bold">Web Developer</span> specializing in building modern, 
                  responsive, and interactive web applications using technologies like{" "}
                  <span className="text-purple-400 font-bold">React, Next.js, and Tailwind CSS</span> on the frontend, 
                  and <span className="text-pink-400 font-bold">Node.js, Express, and MongoDB</span> on the backend.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  I love transforming creative ideas into seamless digital experiences with clean, scalable, 
                  and efficient code across the entire stack.
                </p>

                <div className="space-y-4 mt-10">
                  {["Web Design Full stack", "24/7 Support", "Unlimited Revisions"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                      <span className="text-white text-xl font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-12"
                >
                  <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-black text-black text-2xl shadow-2xl"
                  >
                    <Download className="w-8 h-8" />
                    DOWNLOAD CV
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}

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

          {activeTab === 3 && (
  <motion.div
    key="education"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-10"
  >
    <EducationTab />
  </motion.div>
)}
       </AnimatePresence>
        <div className="flex items-center justify-center">
          
        </div>
        
      </div>
    </>
  );
}