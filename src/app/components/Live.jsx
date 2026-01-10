import React from 'react'
import { motion } from "framer-motion";

const Live = () => {
  return (
    <div>
      <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
          <span className="text-green-400 font-bold">OPEN TO MEET</span>
        </motion.div>
    </div>
  )
}

export default Live
