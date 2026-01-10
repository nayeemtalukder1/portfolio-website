'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, Code2, ArrowDown } from 'lucide-react';

export default function ComponentGrid() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const copyToClipboard = async (code, idx) => {
    await navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  // CUSTOM ANIMATIONS (INLINED)
  const customAnimations = `
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes spin-30 {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes rotate-30-hover {
      from { transform: rotate(0deg); }
      to { transform: rotate(30deg); }
    }
    @keyframes live {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.5); opacity: 0.4; }
    }

    :root {
      --animate-wiggle: wiggle 0.5s ease-in-out infinite;
      --animate-heartbeat: heartbeat 1s ease-in-out infinite;
      --animate-fade-in: fade-in 0.8s ease-out;
      --animate-spin: spin 1s linear infinite;
      --animate-spin-30: spin-30 2s linear infinite;
      --animate-rotate-30-hover: rotate-30-hover 0.4s ease-out;
      --animate-live: live 1.5s ease-in-out infinite;
    }
  `;

  const snippets = [
    // === ORIGINAL COMPONENTS ===
    {
      title: 'Fancy Card',
      code: `<div className="group relative max-w-sm rounded-2xl overflow-hidden bg-white/80 backdrop-blur-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
  <h3 className="text-xl font-bold mb-2 text-indigo-600">Fancy Card</h3>
  <p className="text-gray-700">Glassmorphism card with cosmic glow.</p>
</div>`,
      preview: (
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative max-w-sm rounded-2xl overflow-hidden bg-white/80 backdrop-blur-2xl p-6 shadow-xl border border-white/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          <h3 className="text-xl font-bold mb-2 text-indigo-600">Fancy Card</h3>
          <p className="text-gray-700">Glassmorphism card with cosmic glow.</p>
        </motion.div>
      ),
    },
    {
      title: 'Animated Button',
      code: `<button className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg overflow-hidden group">
  <span className="relative z-10 flex items-center gap-2">
    <Sparkles className="w-5 h-5" /> Click Me
  </span>
  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
</button>`,
      preview: (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Click Me
          </span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </motion.button>
      ),
    },
    {
      title: 'Simple Chart (SVG)',
      code: `<svg viewBox="0 0 220 120" className="w-full h-36 drop-shadow-xl">
  <defs>
    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#8b5cf6" />
      <stop offset="100%" stopColor="#3b82f6" />
    </linearGradient>
  </defs>
  <polyline fill="none" stroke="url(#chartGrad)" strokeWidth="4" points="10,100 50,60 90,80 130,30 170,50 210,40" />
  <circle cx="130" cy="30" r="7" fill="#8b5cf6" />
</svg>`,
      preview: (
        <motion.svg
          viewBox="0 0 220 120"
          className="w-full h-36 drop-shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#chartGrad)"
            strokeWidth="4"
            points="10,100 50,60 90,80 130,30 170,50 210,40"
          />
          <circle cx="130" cy="30" r="7" fill="#8b5cf6" />
        </motion.svg>
      ),
    },

    // === ANIMATIONS ===
    {
      title: 'Wiggle Text',
      code: `<div className="text-4xl font-bold animate-[var(--animate-wiggle)] hover:animate-[var(--animate-heartbeat)] transition-all duration-300 text-indigo-600">
  I wiggle!
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-bold animate-[var(--animate-wiggle)] hover:animate-[var(--animate-heartbeat)] transition-all duration-300 text-indigo-600"
        >
          I wiggle!
        </motion.div>
      ),
    },
    {
      title: 'Bouncing Ball',
      code: `<div className="animate-bounce bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full shadow-lg" />`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="animate-bounce bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full shadow-lg"
        />
      ),
    },
    {
      title: 'Spinner',
      code: `<div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
        />
      ),
    },
    {
      title: 'Online Indicator',
      code: `<div className="relative inline-block">
  <div className="w-4 h-4 bg-green-500 rounded-full shadow-md" />
  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="relative inline-block"
        >
          <div className="w-4 h-4 bg-green-500 rounded-full shadow-md" />
          <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        </motion.div>
      ),
    },
    {
      title: 'Loading Card',
      code: `<div className="h-32 w-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse shadow-lg" />`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="h-32 w-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse shadow-lg"
        />
      ),
    },
    {
      title: 'Bouncing Arrow',
      code: `<div className="animate-bounce text-5xl text-purple-600">
  <ArrowDown className="w-12 h-12 mx-auto" />
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="animate-bounce text-5xl text-purple-600"
        >
          <ArrowDown className="w-12 h-12 mx-auto" />
        </motion.div>
      ),
    },
    {
      title: 'Fade In Text',
      code: `<div className="animate-[var(--animate-fade-in)] text-2xl font-medium text-gray-700">
  Hello!
</div>`,
      preview: (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-medium text-gray-700"
        >
          Hello!
        </motion.div>
      ),
    },
    {
      title: 'Spin Ring',
      code: `<div className="animate-[var(--animate-spin)] w-14 h-14 border-4 border-t-blue-500 border-r-cyan-500 border-b-purple-500 border-l-pink-500 rounded-full" />`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="animate-[var(--animate-spin)] w-14 h-14 border-4 border-t-blue-500 border-r-cyan-500 border-b-purple-500 border-l-pink-500 rounded-full"
        />
      ),
    },
    {
      title: 'Live Icon',
      code: `<div className="relative w-6 h-6">
  <span className="absolute inset-0 rounded-full bg-red-500 opacity-80 animate-[var(--animate-live)]" />
  <span className="relative inline-block w-6 h-6 bg-red-600 rounded-full shadow-md" />
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="relative w-6 h-6"
        >
          <span className="absolute inset-0 rounded-full bg-red-500 opacity-80 animate-[var(--animate-live)]" />
          <span className="relative inline-block w-6 h-6 bg-red-600 rounded-full shadow-md" />
        </motion.div>
      ),
    },
    {
      title: '30° Spin',
      code: `<div className="animate-[var(--animate-spin-30)] text-3xl font-bold text-indigo-600">
  30° Spin
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="animate-[var(--animate-spin-30)] text-3xl font-bold text-indigo-600"
        >
          30° Spin
        </motion.div>
      ),
    },
    {
      title: 'Hover to 30°',
      code: `<div className="
  inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 
  text-white rounded-xl font-bold text-xl shadow-lg
  hover:animate-[var(--animate-rotate-30-hover)]
  transition-transform duration-400
">
  Hover Me to 30°
</div>`,
      preview: (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 
            text-white rounded-xl font-bold text-xl shadow-lg
            hover:animate-[var(--animate-rotate-30-hover)]
            transition-transform duration-400
          "
        >
          Hover Me to 30°
        </motion.div>
      ),
    },

    // === NEW COMPONENT YOU REQUESTED ===
    {
      title: 'Slide-in Hover Button',
      code: `<button className="group relative overflow-hidden w-52 h-12 text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-xl shadow-inner shadow-gray-500/50 cursor-pointer transition-colors duration-500 hover:text-white">
  <span className="absolute inset-0 bg-green-500 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative z-10">Hover Me</span>
</button>`,
      preview: (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden w-52 h-12 text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-xl shadow-inner shadow-gray-500/50 cursor-pointer transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-green-500 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative z-10">Hover Me</span>
        </motion.button>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-8">
      {/* CUSTOM ANIMATIONS */}
      <style jsx>{customAnimations}</style>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Component Showcase
        </h1>
        <p className="text-xl text-gray-700">Copy • Paste • Deploy • Animate</p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {snippets.map((item, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="
              group relative 
              backdrop-blur-3xl 
              bg-white/20 
              border 
              border-white/40 
              rounded-3xl 
              p-6 
              shadow-2xl 
              flex 
              flex-col 
              gap-5 
              overflow-hidden
              hover:shadow-3xl 
              hover:-translate-y-2
              transition-all 
              duration-500
            "
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />

            {/* HEADER */}
            <div className="flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-indigo-600" />
                {item.title}
              </h2>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(item.code, idx)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg"
              >
                {copiedIdx === idx ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-green-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* PREVIEW */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/30 backdrop-blur-2xl rounded-2xl min-h-[140px] flex items-center justify-center border border-white/50 shadow-inner"
            >
              {item.preview}
            </motion.div>

            {/* CODE */}
            <pre className="bg-black/40 backdrop-blur-xl text-gray-100 p-5 rounded-2xl overflow-x-auto text-xs font-mono border border-white/30">
              <code className="text-cyan-300">{item.code}</code>
            </pre>
          </motion.section>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center mt-20 text-sm text-gray-600">
        Built with Love in <strong>Dhaka, BD</strong> • 06:55 PM +06
      </div>
    </div>
  );
}