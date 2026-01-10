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
    alert("Message sent! (demo)");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl my-8 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition backdrop-blur-md md:top-6 md:right-6"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="p-6 md:p-8 lg:p-10 xl:p-12">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">
            {/* LEFT – CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-green-400 leading-tight">
                  Get in Touch
                </h2>
                <p className="mt-4 text-gray-400 text-base md:text-lg">
                  Feel free to reach out! Whether you have a question or just want to say hi,
                  I’ll get back to you as fast as possible.
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: "Location", value: "Mymensingh, Dhaka", href: "https://maps.google.com/?q=Tejgaon,Dhaka" },
                  { Icon: Mail, label: "Email", value: "nayeemtalukder882@gmail.com", href: "mailto:nayeemtalukder882@gmail.com" },
                  { Icon: Phone, label: "Phone", value: "+8801969148410 (WhatsApp)", href: "https://wa.me/8801969148410" },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${i === 0 ? "from-green-500 to-emerald-500" : i === 1 ? "from-purple-500 to-pink-500" : "from-blue-500 to-cyan-500"} flex items-center justify-center shadow-lg group-hover:scale-110 transition`}>
                        <c.Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{c.label}</p>
                        <p className="font-semibold text-white mt-1">{c.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT – FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Let’s Build Something Epic
                </h3>
                <p className="mt-3 text-gray-400">
                  Drop your details and I’ll reply faster than Flash ⚡
                </p>
              </div>

              {/* NAME */}
              <input
                name="name"
                placeholder="Your Name *"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-base"
              />

              {/* PHONE + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* SUBJECT */}
              <select
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Subject *</option>
                <option>Web Design</option>
                <option>Mobile App</option>
                <option>Branding</option>
                <option>Full-Stack Project</option>
                <option>Other</option>
              </select>

              {/* PREFERRED METHOD + HEAR ABOUT */}
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm text-gray-400">Preferred Contact Method</p>
                  <div className="flex flex-wrap gap-8">
                    {["email", "phone", "whatsapp"].map((v) => (
                      <label key={v} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="method"
                          value={v}
                          checked={method === v}
                          onChange={() => setMethod(v)}
                          className="sr-only"
                        />
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                            method === v ? "border-cyan-400 bg-cyan-400" : "border-gray-600"
                          }`}
                        >
                          {method === v && (
                            <motion.div layoutId="contactRadio" className="w-3 h-3 bg-black rounded-full" />
                          )}
                        </div>
                        <span className="capitalize text-gray-300">{v === "whatsapp" ? "WhatsApp" : v}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <input
                  name="hear"
                  placeholder="How did you hear about me?"
                  value={form.hear}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project... *"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none transition"
              />

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl font-bold text-black text-lg shadow-xl hover:shadow-2xl transition flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" />
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}