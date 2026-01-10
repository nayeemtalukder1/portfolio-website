// src/components/CosmicBackground.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CosmicBackground({ children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setTrail((prev) => [...prev.slice

(-20), newPoint]);
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* EXACT SAME BACKGROUND FROM YOUR ORIGINAL CODE */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 overflow-hidden">

        {/* GIANT GLOWING ORB */}
        <div className="absolute top-0 left-0 w-96 h-96 -translate-x-48 -translate-y-32">
          <div
            className="absolute inset-0 rounded-full blur-3xl animate-pulse"
            style={{
              background: "radial-gradient(circle, #ff00ff 0%, #00ffff 50%, transparent 70%)",
            }}
          />
        </div>

        {/* SPRING GLOW */}
        <motion.div
          className="pointer-events-none fixed"
          animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <div
            className="w-96 h-96 rounded-full blur-3xl opacity-60"
            style={{
              background: "radial-gradient(circle, #ff006e 0%, #00ff88 40%, #006eff 80%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* RAINBOW TRAIL */}
        {trail.map((point, i) => (
          <motion.div
            key={point.id}
            className="pointer-events-none fixed rounded-full blur-3xl"
            initial={{ x: point.x - 200, y: point.y - 200, scale: 0.3, opacity: 0 }}
            animate={{ scale: isMoving ? 1 : 0, opacity: isMoving ? 0.9 : 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{
              width: 400,
              height: 400,
              background: `radial-gradient(circle,
                hsl(${(i * 18) % 360}, 100%, 65%) 0%,
                hsl(${(i * 22) % 360}, 100%, 55%) 35%,
                transparent 70%)`,
            }}
          />
        ))}

        {/* FLOATING PARTICLES */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: (typeof window !== "undefined" ? window.innerHeight : 1080) + 20,
            }}
            animate={{ y: -100 }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            style={{
              background: i % 3 === 0 ? "#ff006e" : i % 2 === 0 ? "#00ffff" : "#ff00ff",
              boxShadow: "0 0 15px currentColor",
            }}
          />
        ))}
      </div>

      {/* YOUR ORIGINAL CONTENT GOES HERE - UNTOUCHED */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}