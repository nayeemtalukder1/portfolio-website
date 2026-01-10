"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { icon: "Briefcase", label: "WEBKART", link: "/shop", gradient: "from-blue-500 to-cyan-500" },
  { icon: "Code", label: "PROJECTS", link: "/projects", gradient: "from-purple-500 to-pink-500" },
  { icon: "User", label: "ABOUT ME", link: "/about", gradient: "from-green-500 to-emerald-500" },
  { icon: "Mail", label: "CONTACT", link: "/contact", gradient: "from-orange-500 to-red-500" },
];

export default function QuickLinksGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="grid grid-cols-2 gap-5 max-w-md mx-auto"
    >
      {quickLinks.map((item, i) => (
        <Link href={item.link} key={i}>
          <motion.div
            whileHover={{ scale: 1.12, y: -8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 400 }}
            className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-6 text-center cursor-pointer hover:border-cyan-400/70 transition-all duration-400"
          >
            {/* GLOW ORB */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-25 transition-opacity`} />
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

            {/* ICON */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}
            >
              <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                <span className="text-3xl">{item.icon}</span>
              </div>
            </motion.div>

            {/* LABEL */}
            <p className="text-white font-bold text-sm tracking-wider bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              {item.label}
            </p>

            {/* ARROW */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="inline-block mt-1 text-cyan-400 text-xl font-bold"
            >
              →
            </motion.span>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}