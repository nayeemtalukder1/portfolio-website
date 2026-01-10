// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CosmicBackground from "./components/CosmicBackground";
import SidebarNav from "./components/SidebarNav"; // make sure it's .tsx

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nayeem – Full Stack Developer",
  description: "Welcome to my cosmic interface+",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}>
        
        {/* BACKGROUND */}
        <CosmicBackground />

        {/* SIDEBAR NAV - NOW VISIBLE ON MOBILE */}
        <SidebarNav />   {/* ← JUST PUT IT HERE! */}

        {/* MAIN CONTENT */}
        <main className="relative z-10 pb-24 sm:pb-0">
          {children}
        </main>

      </body>
    </html>
  );
}