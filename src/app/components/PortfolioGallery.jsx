"use client";

import { motion } from "framer-motion";
import { Lock, Play, Code2, Search, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Trabook travel website",
    desc: "A team of experienced tourism professionals will provide you the best advice and tips for your desired place. We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.",
    views: 129,
    tags: ["Next.js", "Node.js", "Tailwind", "React"],
    live: true,
    premium: false,
    liveUrl: "https://tbnayeem.onrender.com",
  },
  {
    id: 2,
    title: "Doctor Appointment System",
    desc: "A modern healthcare platform connecting patients with trusted doctors for seamless appointment booking.",
    views: 144,
    tags: ["React", "Tailwind", "Framer Motion"],
    live: true,
    premium: false,
  },
  {
    id: 3,
    title: "AI Dashboard Pro",
    desc: "Advanced analytics dashboard with real-time data visualization.",
    views: 89,
    tags: ["JavaScript", "Chart.js", "Supabase"],
    live: false,
    premium: true,
  },
];

const filters = ["All", "Frontend", "Full stack", "Developer tool", "Frontend library"];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen px-4 sm:px-8 py-16">
      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex flex-wrap justify-center items-center gap-4 mb-6"
        >
          <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold flex items-center gap-2 text-sm sm:text-base">
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            PREMIUM PORTFOLIO
          </span>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <Search className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
          </button>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8">
          Creative Works
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-white text-sm sm:text-base">
            9 Projects
          </div>
          <div className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white text-sm sm:text-base">
            6601 Likes
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* FILTERS SIDEBAR */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Filters</h3>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">Choose category</p>
            
            <div className="space-y-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`w-full text-left px-4 sm:px-6 py-3 rounded-2xl flex items-center gap-3 text-sm sm:text-base transition-all ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activeFilter"
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  )}
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-white/60 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>6 Projects</span>
                <span>5 Categories</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              {project.premium && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl z-10 flex flex-col items-center justify-center gap-4 p-4 sm:p-8">
                  <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">PREMIUM PROJECT</h3>
                    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white text-sm sm:text-base">
                      Click to Unlock
                    </button>
                    <p className="text-white/60 mt-2 text-xs sm:text-sm">Enter password to view project details</p>
                  </div>
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-4 sm:p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
                {/* LIVE BADGE */}
                {project.live && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                    LIVE
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{project.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-white/70">
                      <span className="text-green-400">Active</span>
                      <span className="text-cyan-400">{project.views} Views</span>
                      <span className="text-purple-400">Updated</span>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-white/80 text-xs sm:text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
                      {project.live && project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:scale-105 transition"
                        >
                          <Play className="w-3 h-3 sm:w-5 sm:h-5" />
                          Live Demo
                        </a>
                      )}
                      <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:scale-105 transition">
                        <Code2 className="w-3 h-3 sm:w-5 sm:h-5" />
                        View Code
                      </button>
                    </div>
                  </div>

                  <div className="relative mt-4 md:mt-0">
                    <div className="bg-white/10 rounded-2xl h-40 sm:h-80 overflow-hidden flex items-center justify-center">
                      <span className="text-white/40 text-3xl sm:text-6xl">Preview</span>
                    </div>
                    {project.live && (
                      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <span className="text-red-500">❤</span>
                        {project.views + 700}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
