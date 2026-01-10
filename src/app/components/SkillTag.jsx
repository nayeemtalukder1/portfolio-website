"use client"; // ADD THIS LINE

import { motion } from "framer-motion";

export default function SkillTag({ children, variant = "skill", className = "" }) {
  const variants = {
    skill: "px-4 py-2 bg-white/10 backdrop-blur-md border border-cyan-500/50 text-cyan-300 text-sm font-medium shadow-lg",
    nav: "px-6 py-3 bg-white/20 hover:bg-white/30 transition",
    hire: "px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-white shadow-2xl",
    pill: "px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full cursor-pointer transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}