"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="space-y-6 md:space-y-8">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl sm:text-2xl md:text-3xl font-black leading-snug md:leading-tight"
      >
        Hi, I'm <span className="text-purple-400 text-4xl">Nayeem Talukder</span> -<br />
        <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to nayeem studio!
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm sm:text-base md:text-xl text-white/80 leading-relaxed max-w-xl md:max-w-2xl"
      >
        I'm <span className="text-cyan-400 font-bold">Nayeem</span> (Nayeem Talukder), a{" "}
        <span className="text-purple-400 font-bold">Full-Stack Developer</span> based in Bangladesh, 
        crafting immersive digital experiences that blend form and function.
      </motion.p>

      {/* SPECIALIZATION CARD */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/20 w-fit"
      >
        <p className="text-yellow-400 text-lg md:text-2xl mb-2">
          Specializing in React, Next.js, Node.js
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white/70">
          with a focus on performance optimization and responsive design.
        </p>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 md:gap-6"
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white shadow-2xl text-sm md:text-lg"
          >
            View My Work
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-10 py-3 md:py-5 bg-white/10 backdrop-blur-xl rounded-full font-bold text-white border border-white/30 flex items-center gap-2 md:gap-3 text-sm md:text-lg hover:bg-white/20 transition-all"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            Get In Touch
          </motion.button>
        </Link>
      </motion.div>

    </div>
  );
}
