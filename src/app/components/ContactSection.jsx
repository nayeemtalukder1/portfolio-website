"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

import ContactForm from "./ContactForm";

export default function ContactSection({ onClose }) {
  const contactItems = [
    {
      icon: MapPin,
      label: "Location",
      value: "Tejgaon, Dhaka",
      action: () =>
        window.open("https://maps.google.com/?q=Tejgaon,Dhaka", "_blank"),
    },
    {
      icon: Mail,
      label: "Email",
      value: "sheikhhasibubalam758@gmail.com",
      action: () => window.open("mailto:sheikhhasibubalam758@gmail.com"),
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801949219333 (WhatsApp)",
      action: () => window.open("https://wa.me/8801949219333", "_blank"),
    },
  ];

  return (
    <div className="space-y-12">
      {/* TITLE & INFO */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-black text-green-400 mb-6">
          Get in Touch
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Feel free to reach out! Whether you have a question or just want to
          drop a message, I'll do my best to get back to you.
        </p>

        {/* CONTACT CARDS */}
        <div className="space-y-6">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={item.action}
              className="flex items-center gap-6 bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-cyan-400/60 cursor-pointer transition-all group shadow-xl"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  i === 0
                    ? "from-green-500 to-emerald-500"
                    : i === 1
                    ? "from-purple-500 to-pink-500"
                    : "from-blue-500 to-cyan-500"
                } p-1 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                  <item.icon className="w-9 h-9 text-white" />
                </div>
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium">
                  {item.label}
                </p>
                <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FORM (inside modal) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <h3 className="text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Let's Build Something Epic
        </h3>
        <p className="text-white/70 text-center text-lg mb-10">
          Drop your details and I'll hit you up faster than light speed
        </p>
        <ContactForm onSuccess={onClose} />
      </motion.div>
    </div>
  );
}