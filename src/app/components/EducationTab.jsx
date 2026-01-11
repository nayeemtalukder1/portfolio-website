"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const formalEducation = [
  {
    degree: "BSc in Statistics and Data Science",
    university: "Jatiya Kabi Kazi Nazrul Islam University",
    cgpa: "CGPA: Progress",
    year: "2025 - present",
  },
  {
    degree: "Higher Secondary Science Stream",
    university: "Agriculture University College, Mymensingh",
    cgpa: "GPA: 5.00",
    year: "2020 - 2021",
  },
];

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "Hablu Programmer",
    description:
      "Built fast, scalable UIs with React, Next.js & Tailwind CSS",
    year: "2024",
    link: "#",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Frontend Developer Intern",
    issuer: "Hablu Programmer",
    description:
      "Responsive UIs with React & Next.js\nModern design with Tailwind CSS",
    year: "2025",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Career Essentials in GitHub",
    issuer: "GitHub",
    description:
      "Version control with Git & GitHub\nWorkflow integration",
    year: "2025",
    link: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "Hablu Programmer",
    description:
      "Core JS concepts\nProject-based learning",
    year: "2024",
    link: "#",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function EducationTab() {
  return (
    <div className="space-y-16 py-10 px-3 sm:px-6">

      {/* FORMAL EDUCATION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <GraduationCap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl sm:text-5xl font-black text-yellow-400">
            Formal Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {formalEducation.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl 
                              p-5 sm:p-8 border border-white/20
                              hover:border-white/40 transition">

                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="w-9 h-9 text-purple-400" />
                  <div>
                    <h3 className="text-lg sm:text-2xl font-black text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 text-sm sm:text-base font-bold">
                      {edu.university}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-sm">{edu.cgpa}</p>
                <p className="text-white/50 text-xs mt-2">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CERTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <Award className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl sm:text-5xl font-black text-purple-400">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl 
                              p-5 sm:p-8 border border-white/20
                              hover:border-cyan-400/60 transition">

                {/* TOP BAR */}
                <div
                  className={`h-1.5 rounded-full bg-gradient-to-r ${cert.color} mb-4`}
                />

                <h3 className="text-lg sm:text-2xl font-black text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 text-sm font-bold mb-2">
                  {cert.issuer}
                </p>

                <p className="text-white/70 text-xs sm:text-sm whitespace-pre-line mb-4">
                  {cert.description}
                </p>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={cert.link}
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 text-sm font-bold 
                               flex items-center gap-2"
                  >
                    View
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <span className="text-white/50 text-xs">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
