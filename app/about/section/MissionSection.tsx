"use client"

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const achievements = [
    "Influencer Marketing The Power of",
    "Marketing The Power of Influencer"
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set([imageRef.current, contentRef.current], { opacity: 0, y: 50 });
    gsap.set(floatingCardRef.current, { opacity: 0, scale: 0.8, y: 30 });
    gsap.set('.bg-element', { opacity: 0, scale: 0 });
    gsap.set(achievementsRef.current?.children || [], { opacity: 0, x: -20 });

    // Main animation sequence
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5')
    .to(floatingCardRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .to('.bg-element', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .to(achievementsRef.current?.children || [], {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3');

    // Floating card hover effect
    gsap.to(floatingCardRef.current, {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });

    // Background elements floating animation
    gsap.to('.bg-element', {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Image parallax effect
    gsap.to(imageRef.current, {
      y: -20,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 -skew-y-3 bg-gradient-to-r from-[#14473b] to-[#039158] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-5 bg-element"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 bg-element"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-5 bg-element"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <img 
              src="https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            
            {/* Floating card */}
            <div ref={floatingCardRef} className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Team member"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Creative Director</div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={contentRef}>
            <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
              OUR MISSION CLIENTS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Believe That Our Works Can To A Better World.
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              On the other hand We denounce with righteous indignation And 
              Dislike men who are so beguiled our
            </p>
            
            <div ref={achievementsRef} className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#05ce9b] rounded-full"></div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;