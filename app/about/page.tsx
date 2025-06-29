"use client"

import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutSection from './section/AboutSection';
import InnovationSection from './section/InnovationSection';
import DigitalProductsSection from './section/DigitalProductsSection';
import MissionSection from './section/MissionSection';
import PricingSection from './section/PricingSection';
import AffordablePricing from './section/AffordablePricing';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AgencyPage() {
  useGSAP(() => {
    // Global GSAP setup for the about page
    gsap.set('.animate-on-scroll', { opacity: 0, y: 50 });
    
    // Stagger animation for sections
    gsap.to('.animate-on-scroll', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.animate-on-scroll',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen">
        <div className="animate-on-scroll">
          <AboutSection />
        </div>
        <div className="animate-on-scroll">
          <InnovationSection />
        </div>
        <div className="animate-on-scroll">
          <DigitalProductsSection />
        </div>
        <div className="animate-on-scroll">
          <MissionSection />
        </div>
        <div className="animate-on-scroll">
          <PricingSection />
        </div>
        <div className="animate-on-scroll">
          <AffordablePricing />
        </div>
      </div>
    </div>
  )
}