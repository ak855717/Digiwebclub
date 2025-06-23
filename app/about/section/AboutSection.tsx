import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About</h1>
        
        <nav className="flex items-center space-x-2 text-white/80">
          <Home className="w-4 h-4" />
          <Link href="/">
            <span className="text-sm">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-sm text-[#05ce9b]">About</span>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;