"use client"

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const breadcrumbRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero section entrance animation
    tl.fromTo(sectionRef.current, 
      { 
        backgroundPosition: 'center 20%',
        scale: 1.1 
      },
      { 
        backgroundPosition: 'center center',
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      }
    )
    .fromTo(titleRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)'
      },
      '-=0.5'
    )
    .fromTo(breadcrumbRef.current,
      { 
        opacity: 0, 
        x: -30 
      },
      { 
        opacity: 1, 
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.3'
    );

    // Parallax effect on scroll
    gsap.to(sectionRef.current, {
      backgroundPosition: 'center 10%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold text-white mb-6">About</h1>
        
        <nav ref={breadcrumbRef} className="flex items-center space-x-2 text-white/80">
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