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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo only
    alert("Message sent! (demo)");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-green-400">Get in Touch</h2>
            <p className="text-gray-400">
              Feel free to reach out! Whether you have a question or just want to drop a message,
              I’ll do my best to get back to you.
            </p>

            {/* CARDS */}
            {[
              { Icon: MapPin, label: "Location", value: "Tejgaon, Dhaka", href: "https://maps.google.com/?q=Tejgaon,Dhaka" },
              { Icon: Mail, label: "Email", value: "sheikhhasibubalam758@gmail.com", href: "mailto:sheikhhasibubalam758@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+8801949219333 (WhatsApp)", href: "https://wa.me/8801949219333" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400 transition"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${i === 0 ? "from-green-500 to-emerald-500" : i === 1 ? "from-purple-500 to-pink-500" : "from-blue-500 to-cyan-500"} flex items-center justify-center`}>
                  <c.Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT – FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-4xl font-black text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let’s Build Something Epic
            </h3>
            <p className="text-center text-gray-400">
              Drop your details and I’ll hit you up faster than light speed
            </p>

            {/* NAME */}
            <input
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />

            {/* PHONE + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* SUBJECT */}
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="">Select Subject</option>
              <option>Web Design</option>
              <option>Mobile App</option>
              <option>Branding</option>
              <option>Other</option>
            </select>

            {/* PREFERRED METHOD + HEAR */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2 text-sm text-gray-400">Preferred Contact Method</p>
                <div className="flex gap-6">
                  {["email", "phone"].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        value={v}
                        checked={method === v}
                        onChange={() => setMethod(v)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                          method === v ? "border-cyan-400 bg-cyan-400" : "border-gray-600"
                        }`}
                      >
                        {method === v && (
                          <motion.div layoutId="contactBubble" className="w-2 h-2 bg-black rounded-full" />
                        )}
                      </div>
                      <span className="capitalize">{v}</span>
                    </label>
                  ))}
                </div>
              </div>

              <input
                name="hear"
                placeholder="How did you hear about me?"
                value={form.hear}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Project Idea..."
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
            />

            {/* SEND */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-bold text-black"
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