"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Flame, Menu, X } from "lucide-react";

export default function ShopNavbar({ cartCount = 3 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex justify-between items-center">
        {/* LEFT - LOGO + HOT DEALS (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Logo */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
            Premium Shop
          </h1>

          {/* Hot Deals Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-bold text-white flex items-center gap-2 shadow-2xl cursor-pointer"
          >
            <Flame className="w-5 h-5" />
            <span className="hidden lg:inline">NEW </span>Hot Deals!
          </motion.div>
        </div>

        {/* MOBILE LOGO ONLY */}
        <div className="md:hidden flex items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Premium Shop
          </h1>
        </div>

        {/* CENTER - HOT DEALS (Only on medium screens when menu is closed) */}
        <div className="hidden sm:flex md:hidden flex-1 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-bold text-white flex items-center gap-2 shadow-2xl"
          >
            <Flame className="w-5 h-5" />
            Hot Deals!
          </motion.div>
        </div>

        {/* RIGHT - CART + MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4">
          {/* Desktop Cart */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-white items-center gap-3 shadow-2xl"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="hidden md:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </motion.button>

          {/* Mobile Cart Icon Only */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden relative p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-2xl"
          >
            <ShoppingCart className="w-6 h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Slides in from top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10 mt-4 rounded-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {/* Hot Deals in Mobile Menu */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-bold text-white flex items-center justify-center gap-3 shadow-2xl"
              >
                <Flame className="w-6 h-6" />
                NEW Hot Deals!
              </motion.div>

              {/* Optional: Add navigation links here later */}
              <div className="h-px bg-white/20" />
              
              <div className="text-center text-white/80 font-medium">
                Welcome back! Ready to shop?
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}