"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";
import QuickLinksGrid from "./QuickLinksGrid";

const quickLinks = [
  { icon: "Briefcase", label: "WEBKART", link: "/shop" },
  { icon: "Code", label: "PROJECTS", link: "/projects" },
  { icon: "User", label: "ABOUT ME", link: "/about" },
  { icon: "Mail", label: "CONTACT", link: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, link: "https://linkedin.com/in/hasibul" },
  { icon: Twitter, link: "https://twitter.com" },
  { icon: Github, link: "https://github.com" },
  { icon: Mail, link: "mailto:hi@hasibul.com" },
];

export default function HeroRightSection() {
  return (
    <div className="relative">
      {/* AVATAR WITH GLOW */}
      <ProfileAvatar />

      {/* QUICK LINKS GRID */}

      {/* STATS + HIRE ME */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                px-5 sm:px-10 py-4 sm:py-6 
                border border-white/20 text-center">

  <p className="text-3xl sm:text-4xl md:text-5xl 
                font-black text-purple-400">
    2.1+
  </p>

  <p className="text-xs sm:text-sm md:text-base 
                text-white/70 mt-1">
    Years Exp
  </p>
</div>


        <Link href="/hire">
  <motion.button
    whileHover={{ scale: 1.1, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 sm:px-12 md:px-16 
               py-4 sm:py-5 md:py-7 
               bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
               rounded-2xl md:rounded-3xl 
               font-black text-white 
               text-lg sm:text-xl md:text-2xl 
               shadow-2xl hover:shadow-purple-500/50 transition-all"
  >
    HIRE ME
  </motion.button>
</Link>

<div className="bg-white/10 backdrop-blur-xl 
                rounded-2xl md:rounded-3xl 
                px-5 sm:px-8 md:px-10 
                py-3 sm:py-4 md:py-6 
                border border-white/20 
                flex items-center gap-3 sm:gap-4">

  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 
                  bg-green-400 rounded-full animate-ping" />

  <p className="text-green-400 font-bold 
                text-sm sm:text-base md:text-xl">
    Currently ACTIVE
  </p>
</div>

      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
  className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 pb-5 md:pb-0"
>
  {socialLinks.map((social, i) => (
    <a href={social.link} key={i} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                   bg-white/10 backdrop-blur-xl rounded-full 
                   flex items-center justify-center 
                   border border-white/30 
                   hover:border-cyan-400 hover:bg-white/20 
                   transition-all duration-300 cursor-pointer group"
      >
        <social.icon
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8
                     text-white/70 
                     group-hover:text-cyan-300 
                     transition-colors"
        />
      </motion.div>
    </a>
  ))}
</motion.div>

    </div>
  );
}