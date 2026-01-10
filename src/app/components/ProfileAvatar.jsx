"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileAvatar({ 
  src = "/nayeem.png", 
  size = "w-70 h-70",
  status = "LIVE NOW"
}) {
  const totalDots = 100; // MAX SMOOTHNESS

  return (
    <div className={`relative ${size} mx-auto`}>
      {/* 100 TINY ROTATING DOTS – PURE MAGIC */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {[...Array(totalDots)].map((_, i) => {
          const angle = (i * 360) / totalDots;
          const radius = 50;
          const x = 50 + radius * Math.cos((angle - 90) * Math.PI / 180);
          const y = 50 + radius * Math.sin((angle - 90) * Math.PI / 180);

          return (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
                background: `hsl(${(i * 3.6) % 360}, 100%, 65%)`,
                boxShadow: `0 0 8px hsl(${(i * 3.6) % 360}, 100%, 65%)`,
                opacity: 0.8,
              }}
            />
          );
        })}
      </motion.div>

      {/* CLEAN PROFILE IMAGE */}
      <div className="absolute inset-6 rounded-full overflow-hidden ring-8 ring-purple-500/20">
        <Image
          src={src}
          alt="Nayeem"
          fill
          className="object-cover"
        />
      </div>

      {/* "LIVE NOW" BADGE – REPLACES GREEN DOT */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 0.5, 
          type: "spring", 
          stiffness: 200 
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-black text-sm shadow-2xl flex items-center gap-2 animate-pulse">
          <div className="w-3 h-3 bg-white rounded-full animate-ping" />
          <span className="tracking-wider">{status}</span>
        </div>
      </motion.div>

      {/* BOTTOM STATUS (OPTIONAL) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-8 py-4 rounded-full font-bold shadow-2xl">
          AVAILABLE
        </div>
      </motion.div>
    </div>
  );
}