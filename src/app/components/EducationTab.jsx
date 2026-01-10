"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const formalEducation = [
  {
    degree: "BSc in Statistics and Data Science",
    university: "Jatiya Kabi Kazi Nazrul Islam University",
    cgpa: "CGPA: Progress",
    year: "2025 - present",
    color: "from-green-500 to-emerald-600",
  },
  {
    degree: "Higher Secondary Science Stream",
    university: "Agriculture University College, Mymensingh",
    cgpa: "GPA: 5.00",
    year: "2020 - 2021",
    color: "from-blue-500 to-cyan-600",
  },
];

const certifications = [
  {
    title: "Frontend Developer (React) Certificate",
    issuer: "Hablu Programmer",
    description: "Built fast, scalable UIs with React, Next.js, TypeScript & Tailwind CSS",
    year: "2024",
    link: "#",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Frontend Developer Intern – Innovative",
    issuer: "Hablu Programmer",
    description: "Responsive UIs with React, Next.js & TypeScript\nModern design & performance with Tailwind CSS",
    year: "2025",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Career Essentials in GitHub",
    issuer: "GitHub",
    description: "Version control with Git & GitHub\nWorkflow integration for frontend projects",
    year: "2025",
    link: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "Hablu Programmer",
    description: "Responsive UIs with React, Next.js & TypeScript\nModern design & performance with Tailwind CSS",
    year: "2024",
    link: "#",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function EducationTab() {
  return (
    <div className="space-y-20 py-10">
      {/* FORMAL EDUCATION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex items-center gap-6 mb-12">
          <GraduationCap className="w-10 h-10 text-yellow-400" />
          <h2 className="text-5xl font-black text-yellow-400">Formal Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {formalEducation.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              {/* GLOWING ICON */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70"
              />

              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-12 h-12 text-purple-400" />
                  <div>
                    <h3 className="text-2xl font-black text-white">{edu.degree}</h3>
                    <p className="text-cyan-400 font-bold">{edu.university}</p>
                  </div>
                </div>
                <p className="text-white/70">{edu.cgpa}</p>
                <p className="text-white/50 text-sm mt-2">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PROFESSIONAL CERTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-6 mb-12">
          <Award className="w-10 h-10 text-purple-400" />
          <h2 className="text-5xl font-black text-purple-400">Professional Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border-2 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-${cert.color.split('-')[1]}-500/30`}
                style={{ borderColor: `rgba(${i % 2 === 0 ? '59, 130, 246' : '168, 85, 247'}, 0.5)` }}
              >
                {/* TOP BAR */}
                <div className={`h-2 rounded-full bg-gradient-to-r ${cert.color} mb-6`} />

                <h3 className="text-2xl font-black text-white mb-3">{cert.title}</h3>
                <p className="text-cyan-400 font-bold mb-2">{cert.issuer}</p>
                
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line mb-6">
                  {cert.description}
                </p>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={cert.link}
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    View Credential
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <span className="text-white/50 text-sm">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}