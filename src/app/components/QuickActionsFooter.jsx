"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Mail, 
  Phone, 
  Calendar, 
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function QuickActionsFooter() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const quickActions = [
    {
      icon: Mail,
      label: "Email",
      sub: "Send Email",
      color: "from-purple-500 to-pink-500",
      action: () => window.open("mailto:sheikhhasibubalam758@gmail.com", "_blank")
    },
    {
      icon: Phone,
      label: "WhatsApp",
      sub: "Chat Now",
      color: "from-blue-500 to-cyan-500",
      action: () => window.open("https://wa.me/8801949219333", "_blank")
    },
    {
      icon: Calendar,
      label: "Schedule",
      sub: "30-min Call",
      color: "from-green-500 to-emerald-500",
      action: () => window.open("https://calendly.com/sheikhhasibul", "_blank")
    },
    {
      icon: MapPin,
      label: "Location",
      sub: "Dhaka, BD",
      color: "from-pink-500 to-rose-500",
      action: () => window.open("https://maps.google.com/?q=Tejgaon,Dhaka,Bangladesh", "_blank")
    },
  ];

  const socialLinks = [
    { icon: Linkedin, link: "https://linkedin.com/in/sheikhhasibul" },
    { icon: Twitter, link: "https://twitter.com/sheikhhasibul" },
    { icon: Github, link: "https://github.com/sheikhhasibul" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isContactPage ? 1 : 0, y: isContactPage ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-32"
      style={{ pointerEvents: isContactPage ? "auto" : "none" }}
    >
      {/* QUICK ACTION CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isContactPage ? 1 : 0, y: isContactPage ? 0 : 50 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
      >
        {quickActions.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, y: -15 }}
            whileTap={{ scale: 0.95 }}
            onClick={card.action}
            className="group relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 text-center border border-white/20 hover:border-white/60 cursor-pointer transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />

            <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${card.color} p-1 group-hover:scale-110 transition-transform duration-300`}>
              <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-3xl flex items-center justify-center">
                <card.icon className="w-11 h-11 text-white" />
              </div>
            </div>
            <p className="text-white font-black text-xl tracking-tight">{card.label}</p>
            <p className="text-cyan-400 font-bold text-sm mt-1">{card.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* SOCIAL + AVAILABILITY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isContactPage ? 1 : 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-center gap-10"
      >
        <div className="flex gap-8">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center border-2 border-white/20 hover:border-cyan-400 cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
            >
              <social.icon className="w-9 h-9 text-white/80" />
            </motion.a>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-black text-white text-2xl flex items-center gap-5 shadow-2xl hover:shadow-green-500/50 transition-all"
        >
          <div className="relative">
            <div className="w-6 h-6 bg-white rounded-full animate-ping absolute inset-0" />
            <div className="w-6 h-6 bg-white rounded-full relative" />
          </div>
          Available for Hire
        </motion.div>
      </motion.div>
    </motion.div>
  );
}