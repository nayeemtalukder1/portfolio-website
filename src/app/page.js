"use client";
import Live from "./components/Live";
import HeroContent from "./components/HeroContent";
import HeroRightSection from "./components/HeroRightSection";

export default function Home() {
  return (
    <div>
        {/* TOP BADGE */}
        <div className="ml-7 md:mt-7">
          <Live />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-8">
          
      <HeroContent />
      <HeroRightSection />
    </div>
    </div>
  );
}