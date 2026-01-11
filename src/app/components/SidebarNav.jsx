// components/SidebarNav.tsx
"use client";

import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  ShoppingBag,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
  { icon: DollarSign, label: "component", href: "/pricing" },
  { icon: MessageCircle, label: "Contact", href: "/contact" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <>

      {/* MOBILE BOTTOM NAV – ZERO MARGIN, FLUSH TO BOTTOM, SUPER ROUNDED */}
      <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <div className="bg-white/8 backdrop-blur-3xl border-t border-white/10">
          {/* PERFECT ROUNDED TOP + CLEAN GLOW */}
          <div className="rounded-t-3xl overflow-hidden">
            {/* TOP PURPLE GLOW LINE */}
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            
            <div className="flex justify-around items-center py-5 px-6">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link href={item.href} key={i}>
                    <motion.div
                      whileTap={{ scale: 0.85 }}
                      className="relative"
                    >
                      {/* ACTIVE GLOW BACKGROUND */}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-xl"
                        />
                      )}

                      {/* ICON */}
                      <div className={`
                        relative p-3.5 rounded-2xl transition-all duration-300
                        ${isActive ? "text-white" : "text-white/50"}
                      `}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden sm:block fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="pointer-events-auto bg-white/5 backdrop-blur-2xl rounded-full py-8 px-4 border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-8">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link href={item.href} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktopActive"
                        className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-70"
                      />
                    )}

                    <div className={`
                      relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all
                      ${isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-black/95 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-md border border-white/20">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* SAFE AREA FOR MOBILE */}
      <div className="pb-24 sm:pb-0" />
    </>
  );
}