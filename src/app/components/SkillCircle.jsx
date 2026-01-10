"use client";

import { motion } from "framer-motion";

export default function SkillCircle({
  percentage = 95,
  label = "CSS",
  gradientFrom = "#ff006e",
  gradientTo = "#00ffff",
  textGradientFrom = "from-pink-500",
  textGradientTo = "to-cyan-400",
  size = "w-80 h-80"
}) {
  const circumference = 950;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <div className={`relative ${size}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 340 340">
        {/* Background circle */}
        <circle cx="170" cy="170" r="151" stroke="rgba(255,255,255,0.1)" strokeWidth="28" fill="none" />
        
        {/* Animated progress circle */}
        <motion.circle
          cx="170" cy="170"
          r="151"
          stroke="url(#skill-gradient)"
          strokeWidth="28"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className={`text-8xl font-black bg-gradient-to-r ${textGradientFrom} ${textGradientTo} bg-clip-text text-transparent`}
        >
          {percentage}%
        </motion.span>
        <span className="text-3xl text-white mt-2">{label}</span>
      </div>

      {/* Percentage labels around the circle */}
      <div className="absolute inset-0">
        {[
          { text: "0%", top: "84%", left: "50%", transform: "translateX(-50%)" },
          { text: "20%", top: "68%", left: "14%" },
          { text: "40%", top: "32%", left: "22%" },
          { text: "60%", top: "16%", left: "50%", transform: "translateX(-50%)" },
          { text: "80%", top: "32%", right: "22%" },
          { text: "100%", top: "68%", right: "14%" },
        ].map((l, i) => (
          <span
            key={i}
            className="absolute text-white/60 text-sm font-bold"
            style={{ top: l.top, left: l.left, right: l.right, transform: l.transform }}
          >
            {l.text}
          </span>
        ))}
      </div>

      {/* Button below */}
      <button className="absolute -bottom-20 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 text-white font-bold hover:bg-white/30 transition">
        Click the Skill Tag
      </button>
    </div>
  );
}