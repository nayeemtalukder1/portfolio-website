// app/contact/page.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import QuickActions from "../components/QuickActions";
import ContactModal from "../components/ContactModal";

export default function ContactPage() {
  const [view, setView] = useState("connect"); // "connect" | "message"

  return (
    <div className="min-h-screen bg-transparent text-white px-6 py-20 max-w-7xl mx-auto relative">
      {/* PREMIUM SUPPORT */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-semibold mb-8"
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
        Premium Support
        <span className="ml-1 text-yellow-300">*****</span>
      </motion.div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Ready to bring your vision to life? Let’s create something extraordinary.
        </p>
      </motion.div>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-center gap-4 mb-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setView("connect")}
          className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${
            view === "connect"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          <Zap className="w-5 h-5" />
          Connect
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setView("message")}
          className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${
            view === "message"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          Message
        </motion.button>
      </div>

      {/* CONTENT */}
      {view === "connect" ? (
        <QuickActions />
      ) : (
        <ContactModal onClose={() => setView("connect")} />
      )}
    </div>
  );
}