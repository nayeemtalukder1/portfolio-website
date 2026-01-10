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
    tags: ["TypeScript", "Chart.js", "Supabase"],
    live: false,
    premium: true,
  },
];

const filters = ["All", "Frontend", "Full stack", "Developer tool", "Frontend library"];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen px-8 py-16">
      {/* HEADER */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold flex items-center gap-2">
            <Star className="w-5 h-5" />
            PREMIUM PORTFOLIO
          </span>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
          >
            <Search className="w-6 h-6 text-cyan-400" />
          </button>
        </motion.div>

        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
          Creative Works
        </h1>

        <div className="flex justify-center gap-8">
          <div className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-white">
            9 Projects
          </div>
          <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white">
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
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Filters</h3>
            <p className="text-white/60 mb-6">Choose category</p>
            
            <div className="space-y-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`w-full text-left px-6 py-4 rounded-2xl flex items-center gap-4 transition-all ${
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

            <div className="mt-8 pt-8 border-t border-white/10 text-white/60">
              <div className="flex justify-between mb-2">
                <span>6 Projects</span>
                <span>5 Categories</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="lg:col-span-3 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              {project.premium && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl z-10 flex flex-col items-center justify-center gap-6">
                  <Lock className="w-16 h-16 text-white/80" />
                  <div className="text-center">
                    <h3 className="text-3xl font-black text-white mb-2">PREMIUM PROJECT</h3>
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white">
                      Click to Unlock
                    </button>
                    <p className="text-white/60 mt-4">Enter password to view project details</p>
                  </div>
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
                {/* LIVE BADGE */}
                {project.live && (
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                    LIVE
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 leading-relaxed">{project.desc}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-400">Active</span>
                      <span className="text-cyan-400">{project.views} Views</span>
                      <span className="text-purple-400">Updated</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.live && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white flex items-center gap-2 hover:scale-105 transition"
                        >
                          <Play className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white flex items-center gap-2 hover:scale-105 transition">
                        <Code2 className="w-5 h-5" />
                        View Code
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white/10 rounded-2xl h-80 overflow-hidden">
                      <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 h-full flex items-center justify-center">
                        <span className="text-white/40 text-6xl">Preview</span>
                      </div>
                    </div>
                    {project.live && (
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2">
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