"use client";

import { motion } from "framer-motion";
import { Lock, Play, Code2, Search, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Trabook travel website",
    desc: "A team of experienced tourism professionals will provide you the best advice and tips for your desired place.",
    views: 129,
    tags: ["Next.js", "Node.js", "Tailwind", "React"],
    live: true,
    premium: false,
    liveUrl: "https://tbnayeem.onrender.com",
    images: ["/p1-1.png", "/p1-2.png", "/p1-3.png"],
  },
  {
    id: 2,
    title: "Doctor Appointment System",
    desc: "A modern healthcare platform connecting patients with trusted doctors.",
    views: 144,
    tags: ["React", "Tailwind", "Framer Motion"],
    live: true,
    premium: false,
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586776976032-8a0e8e8e8e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "AI Dashboard Pro",
    desc: "Advanced analytics dashboard with real-time data visualization.",
    views: 89,
    tags: ["JavaScript", "Chart.js", "Supabase"],
    live: false,
    premium: true,
    images: [
      "https://images.unsplash.com/photo-1551288049-b1f9d0e6651e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556155099-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556155099-87a0c5d6d0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const filters = ["All", "Frontend", "Full stack"];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen px-4 py-6 sm:py-8 md:py-10 text-white pb-24 md:pb-10">
      {/* HEADER - unchanged */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2.5 mb-4"
        >
          <span className="px-3 py-1 text-[11px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-1.5">
            <Star className="w-3 h-3" />
            PREMIUM
          </span>
          <button className="p-2 bg-white/10 rounded-full">
            <Search className="w-4 h-4 text-cyan-400" />
          </button>
        </motion.div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-3">
          Creative Works
        </h1>

        <div className="flex justify-center gap-2.5">
          <div className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
            9 Projects
          </div>
          <div className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
            6601 Likes
          </div>
        </div>
      </div>

      {/* FILTERS - more compact on desktop */}
      <div className="mb-6 md:mb-8">
        <div className="mx-auto max-w-full md:max-w-5xl lg:max-w-6xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 md:p-3.5 border border-white/10">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin md:justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium transition-all 
                    touch-manipulation min-w-[90px] md:min-w-[100px] md:px-6 md:py-2.5
                    ${
                      activeFilter === filter
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-md"
                        : "bg-white/10 hover:bg-white/20"
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS - narrower on desktop */}
      <div className="mx-auto space-y-6 md:max-w-5xl lg:max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="relative"
          >
            {project.premium && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl z-10 flex flex-col items-center justify-center gap-4">
                <Lock className="w-12 h-12 text-white/90" />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition">
                  Unlock Project
                </button>
              </div>
            )}

            <div className="bg-white/6 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/10 shadow-lg">
              {project.live && (
                <div className="absolute top-3 left-3 bg-green-600/90 text-white px-2.5 py-1 rounded-full text-xs font-bold z-10">
                  LIVE
                </div>
              )}

              <div className="space-y-5 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                {/* Image gallery */}
                <div className="order-1 md:order-2">
                  <div className="gallery-scroll-container">
                    <div className="flex gap-3 pb-4">
                      {project.images?.map((img, idx) => (
                        <div
                          key={idx}
                          className="
                            flex-shrink-0 rounded-xl overflow-hidden border border-white/15
                            shadow-md transition-all hover:shadow-purple-500/30
                            w-[86vw] max-w-[340px] h-[48vw] max-h-[220px]
                            md:w-[320px] md:h-[220px] lg:w-full lg:h-[260px]
                          "
                        >
                          <img
                            src={img}
                            alt={`Preview ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2.5">{project.title}</h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/10 rounded-full text-white/80 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.live && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition min-w-[110px] justify-center"
                      >
                        <Play size={14} />
                        Live
                      </a>
                    )}
                    <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition min-w-[110px] justify-center">
                      <Code2 size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scrollbar styles */}
      <style jsx global>{`
        .gallery-scroll-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #a855f7aa transparent;
        }

        .gallery-scroll-container::-webkit-scrollbar {
          height: 7px;
        }

        .gallery-scroll-container::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.3);
          border-radius: 10px;
        }

        .gallery-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #a855f7, #ec4899);
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168,85,247,0.6);
          border-radius: 10px;
        }

        /* Always show scrollbar on mobile */
        @media (max-width: 640px) {
          .gallery-scroll-container {
            scrollbar-width: thin !important;
          }
          .gallery-scroll-container::-webkit-scrollbar {
            height: 7px !important;
          }
        }
      `}</style>
    </div>
  );
}