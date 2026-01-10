// components/QuickActions.js
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const actions = [
  {
    icon: Mail,
    title: "Email",
    sub: "Send Email",
    gradient: "from-purple-500 to-pink-500",
    href: "mailto:sheikhhasibubalam758@gmail.com",
  },
  {
    icon: Phone,
    title: "Call",
    sub: "WhatsApp",
    gradient: "from-blue-500 to-cyan-500",
    href: "https://wa.me/8801949219333",
  },
  {
    icon: Calendar,
    title: "Schedule",
    sub: "30-min Call",
    gradient: "from-green-500 to-emerald-500",
    href: "https://calendly.com/your-calendly", // replace
  },
  {
    icon: MapPin,
    title: "Location",
    sub: "Dhaka, BD",
    gradient: "from-pink-500 to-rose-500",
    href: "https://maps.google.com/?q=Tejgaon,Dhaka",
  },
];

export default function QuickActions() {
  return (
    <div className="space-y-16">
      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((a, i) => (
          <motion.a
            key={i}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-transparent rounded-3xl p-6 text-center border border-white/10 hover:border-white/30 transition-all"
          >
            <div
              className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${a.gradient} p-1`}
            >
              <div className="w-full h-full bg-black/40 rounded-2xl flex items-center justify-center">
                <a.icon className="w-9 h-9 text-white" />
              </div>
            </div>
            <p className="font-bold text-lg">{a.title}</p>
            <p className="text-cyan-400 text-sm">{a.sub}</p>
          </motion.a>
        ))}
      </div>

      {/* SOCIAL + AVAILABILITY */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/in/your-profile" },
            { Icon: Twitter, href: "https://twitter.com/your-handle" },
            { Icon: Github, href: "https://github.com/your-username" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400"
            >
              <Icon className="w-6 h-6 text-gray-400" />
            </motion.a>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-bold text-lg"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full animate-ping absolute inset-0" />
            <div className="w-3 h-3 bg-white rounded-full relative" />
          </div>
          Available
        </motion.div>
      </div>
    </div>
  );
}