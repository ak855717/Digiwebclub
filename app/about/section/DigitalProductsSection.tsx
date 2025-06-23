"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Search, TrendingUp, Award, ArrowUpRight } from 'lucide-react';

const DigitalProductsSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "On the other hand, we denounce with righteous indignation And dislikes",
      progress: 2850
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Strategy",
      description: "On the other hand, we denounce with righteous indignation And dislikes",
      progress: 2920
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Carefully Crafted",
      description: "On the other hand, we denounce with righteous indignation And dislikes",
      progress: 2780
    }
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animatedProgress, setAnimatedProgress] = useState(services.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let observer: IntersectionObserver;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(section);
    } else {
      // fallback if IntersectionObserver is not supported
      setHasAnimated(true);
    }
    return () => {
      if (observer && section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    // Animate each progress bar
    const intervals: NodeJS.Timeout[] = [];
    services.forEach((service, idx) => {
      let current = 0;
      const step = Math.max(1, Math.floor(service.progress / 30)); // 30 steps
      const interval = setInterval(() => {
        current += step;
        if (current >= service.progress) {
          current = service.progress;
          setAnimatedProgress((prev) => {
            const copy = [...prev];
            copy[idx] = current;
            return copy;
          });
          clearInterval(interval);
        } else {
          setAnimatedProgress((prev) => {
            const copy = [...prev];
            copy[idx] = current;
            return copy;
          });
        }
      }, 20); // 20ms per step
      intervals.push(interval);
    });
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [hasAnimated, services]);

  return (
    <section ref={sectionRef} className="py-20 -skew-y-3 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500 rounded-full opacity-5"></div>
      <div className="absolute top-40 left-1/2 w-24 h-24 bg-cyan-400 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
              WEB DESIGN & DEVELOPMENT
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              BETTER DESIGN FOR<br />
              YOUR DIGITAL PRODUCTS.
            </h2>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-[#05ce9b] group-hover:text-purple-300 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                        <ArrowUpRight className="w-5 h-5 text-[#05ce9b] group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div 
                          className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${animatedProgress[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProductsSection;