// components/ContactModal.js
"use client";

import { motion } from "framer-motion";
import { X, MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactModal({ onClose }) {
  const [method, setMethod] = useState("email");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    hear: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo)");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 md:p-4 bg-black/70 backdrop-blur-lg overflow-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-md md:max-w-xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/10 shadow-xl pb-45 md:pb-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-green-400">Get in Touch</h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Feel free to reach out! Whether you have a question or just want to drop a message, I’ll do my best to get back to you.
            </p>

            {/* CONTACT CARDS */}
            {[
              { Icon: MapPin, label: "Location", value: "Mymensingh, Bangladesh", href: "https://maps.google.com/?q=Mymensingh,Bangladesh" },
              { Icon: Mail, label: "Email", value: "nayeemtalukder882@gmail.com", href: "mailto:nayeemtalukder882@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+8801969148410 (WhatsApp)", href: "https://wa.me/8801969148410" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${i === 0 ? "from-green-500 to-emerald-500" : i === 1 ? "from-purple-500 to-pink-500" : "from-blue-500 to-cyan-500"} flex items-center justify-center`}>
                  <c.Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">{c.label}</p>
                  <p className="font-semibold text-sm">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT – FORM */}
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let’s Build Something Epic
            </h3>
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              Drop your details and I’ll hit you up faster than light speed
            </p>

            {/* NAME */}
            <input
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
            />

            {/* PHONE + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
              />
            </div>

            {/* SUBJECT */}
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white text-sm focus:outline-none focus:border-cyan-400"
            >
              <option value="">Select Subject</option>
              <option>Web Design</option>
              <option>Mobile App</option>
              <option>Branding</option>
              <option>Other</option>
            </select>

            {/* PREFERRED METHOD + HEAR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <p className="mb-1 text-xs text-gray-400">Preferred Contact Method</p>
                <div className="flex gap-2">
                  {["email", "phone"].map((v) => (
                    <label key={v} className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        value={v}
                        checked={method === v}
                        onChange={() => setMethod(v)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition ${
                          method === v ? "border-cyan-400 bg-cyan-400" : "border-gray-600"
                        }`}
                      >
                        {method === v && (
                          <motion.div layoutId="contactBubble" className="w-2 h-2 bg-black rounded-full" />
                        )}
                      </div>
                      <span className="capitalize text-xs">{v}</span>
                    </label>
                  ))}
                </div>
              </div>

              <input
                name="hear"
                placeholder="How did you hear about me?"
                value={form.hear}
                onChange={handleChange}
                className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={3}
              placeholder="Your Project Idea..."
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none text-sm"
            />

            {/* SEND */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg font-bold text-black text-sm"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
