"use client"

import Image from 'next/image'
import { Play, ArrowRight, Phone, Palette, Lightbulb } from 'lucide-react'
// import { JSX } from 'react'
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQ from '@/components/FAQ';
import ConnectUs from "@/components/connectUs"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const firstSet = [
  { title: "Card A1", desc: "First set - card 1" },
  { title: "Card A2", desc: "First set - card 2" },
  { title: "Card A3", desc: "First set - card 3" },
];

const secondSet = [
  { title: "Card B1", desc: "Second set - card 1" },
  { title: "Card B2", desc: "Second set - card 2" },
  { title: "Card B3", desc: "Second set - card 3" },
];

const logos = [
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0eeeb860f66063130cc_Amsterdam-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09591135411dbf1f686_colorado-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65609f775edfd6ba4a3c3af7_Nairobi-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/656093f6591bba4a6757b985_Hudon-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560817610fbd2b58993793c_Aura-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607df9d46a61fcef7c719f_Aiken-colored.svg"
];

const offerCards = [
  {
    title: "UI/UX Design Professionals",
    description: "We provide professional UI/UX design services to enhance user experience.",
    backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    )
  },
  {
    title: "Web Developments",
    description: "Building modern and responsive web applications with cutting-edge technologies.",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3m0 0l3-3m-3 3v4.586a1 1 0 001.707.707l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.707.707V12M12 18h.01M3 6h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2zm0 0l-2-2m2 2l2-2"></path>
      </svg>
    )
  },
  {
    title: "Product & 3D Animation",
    description: "Bringing your ideas to life with stunning product visualization and 3D animations.",
    backgroundImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.515-1.319 2.153-1.319 2.668 0l.965 2.476a2 2 0 001.597 1.15l2.648.384c1.45.21 1.996 2.008.97 3.01l-1.91 1.86a2 2 0 00-.57 1.765l.45 2.63c.25 1.44-.99 2.56-2.31 1.83l-2.365-1.244a2 2 0 00-1.897 0l-2.365 1.244c-1.32.73-2.56-.39-2.31-1.83l.45-2.63a2 2 0 00-.57-1.765L2.99 11.97c-1.02-1.002-.474-2.8.97-3.01l2.648-.384a2 2 0 001.597-1.15l.965-2.476z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a3 3 0 100-6 3 3 0 000 6z"></path>
      </svg>
    )
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
    backgroundImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
      </svg>
    )
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    backgroundImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  }
];

const projectCards = [
  {
    title: "Mobile Application Design",
    category: "Web Design | Digital Product | Website",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    description: "Modern mobile app design with intuitive user experience and cutting-edge UI/UX principles.",
    technologies: ["React Native", "Figma", "Adobe XD"],
    duration: "3 months",
    client: "Tech Startup"
  },
  {
    title: "E-commerce Platform",
    category: "Web Development | E-commerce | UI/UX",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    description: "Full-stack e-commerce solution with advanced features and seamless payment integration.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    duration: "6 months",
    client: "Retail Chain"
  },
  {
    title: "Brand Identity Design",
    category: "Branding | Logo Design | Marketing",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    description: "Comprehensive brand identity package including logo, guidelines, and marketing materials.",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    duration: "2 months",
    client: "Fashion Brand"
  },
  {
    title: "Corporate Website",
    category: "Web Design | Corporate | Responsive",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    description: "Professional corporate website with modern design and comprehensive content management.",
    technologies: ["WordPress", "Elementor", "PHP"],
    duration: "4 months",
    client: "Financial Services"
  },
  {
    title: "Mobile App Development",
    category: "Mobile App | iOS/Android | Cross-platform",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    description: "Cross-platform mobile application with native performance and modern features.",
    technologies: ["Flutter", "Firebase", "Dart"],
    duration: "5 months",
    client: "Healthcare Provider"
  },
  {
    title: "3D Product Visualization",
    category: "3D Animation | Product Design | Visualization",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    description: "High-quality 3D product renders and animations for marketing and presentation.",
    technologies: ["Blender", "Cinema 4D", "V-Ray"],
    duration: "3 months",
    client: "Manufacturing Company"
  }
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openCard, setOpenCard] = useState<number>(0); // First card open by default

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = 80; // px per second

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Here you could navigate to project detail page or open modal
      console.log(`Opening project: ${projectCards[index].title}`);
    }, 1500);
  };

  const handleProjectHover = (index: number) => {
    // Add any hover-specific logic here
    gsap.to(`.project-card-${index}`, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleProjectLeave = (index: number) => {
    gsap.to(`.project-card-${index}`, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const trackWidth = track.getBoundingClientRect().width;
    let start = performance.now();
    let pos = 0;
    let animationId: number;

    // Clone track to create seamless loop
    const clone = track.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      pos = -(elapsed / 1000) * speed;

      if (Math.abs(pos) >= trackWidth) {
        start = timestamp;
        pos = 0;
      }

      container.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      clone.remove();
      container.style.transform = "";
    };
  }, []);

  //Gsap animation 
  useGSAP(() => {
    var tl1 = gsap.timeline();

    tl1.fromTo(
      '.welcome-web-agency',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.in' }
    )
      .fromTo(
        '.we-are-digital',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(
        '.heros-para',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

    gsap.fromTo(
      '.Creative-professional',
      { opacity: 0, x: 1000 },
      { opacity: 1, x: 0, duration: 2, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-circle-1',
      { scale: 0 },
      { scale: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-circle-2',
      { scale: 0 },
      { scale: 1, duration: 1, ease: 'power2.out' }
    );

    // About gsap

    gsap.fromTo(
      '.about-image',
      { opacity: 0, x: -400 },
      {
        opacity: 1, x: 0, duration: 1,
        scrollTrigger: {
          trigger: '.about-image',
          scroller: 'body',
          start: 'top 50%'
        }
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-mark',
        scroller: 'body',
        start: 'top 50%',
      }
    })
      .fromTo('.about-mark',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.2, ease: 'power2.in' }
      )
      .fromTo('.about-head',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
      .fromTo('.about-para',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo('.about-feature-1',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },'fea1'
      )
      .fromTo('.about-feature-2',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },'fea1'
      );

    // offer

    gsap.timeline({
      scrollTrigger: {
        trigger: '.offer-mark',
        scroller: 'body',
        start: 'top 80%',
      }
    })
      .fromTo('.offer-mark',
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: 'power2.out' }
      )
      .fromTo('.offer-head',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )

    // Project section animations
    gsap.timeline({
   crollTrigger: {
        trigger: '.project-section',
        scroller: 'body',
        start: 'top 80%',
      }
    })
      .fromTo('.prect-badge',
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
      )
      .fromTo('.project-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo('.left-project-cards .project-card',
        { opacity: 0, x: -100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2
        }
      )
      .fromTo('.right-project-cards .project-card',
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2
        },
        '-=0.4'
      );

    // Project card hover animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.project-image-hover'), {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.project-image-default'), {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

        // Add floating animation to the card
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.project-image-hover'), {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.project-image-default'), {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });

        // Remove floating animation
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      // Add click handler for project cards
      card.addEventListener('click', (event: Event) => {
        const mouseEvent = event as MouseEvent;
        // Create a ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(5, 206, 155, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';

        (card as HTMLElement).style.position = 'relative';
        card.appendChild(ripple);

        // Position ripple at click point
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (mouseEvent.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (mouseEvent.clientY - rect.top - size / 2) + 'px';

        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 600);

        // Add a brief scale animation on click
        gsap.to(card, {
          scale: 0.95,
          duration: 0.1,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1
        });
      });
    });

    // Add staggered animation for project titles
    gsap.timeline({
      scrollTrigger: {
        trigger: '.project-section',
        scroller: 'body',
        start: 'top 70%',
      }
    })
      .fromTo('.project-card h3',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        },
        '-=0.5'
      )
      .fromTo('.project-card p',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1
        },
        '-=0.3'
      );
  });

  return (
    <div id='main' >
      <div id='cursor'></div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-8 md:pt-0 bg-gradient-to-br from-gray-50 to-[#05ce9b]/10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#05ce9b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#02ef91]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#039bad] rounded-full opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#05ce9b] font-medium">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wider welcome-web-agency">Welcome Web Agency</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight we-are-digital">
                We are Digital
                <br />
                <span className="text-gray-800">Creative Web</span>
                <br />
                <span className="text-gray-700">About</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed heros-para">
                Suspendisse finibus dolor et pharetra porta. Sed quam elit, lacinia vitae mi quis, ullamcorper imperdiet dolor. Turpis nulla, eget pharetra.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 text-sm sm:text-base">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button className="flex items-center space-x-3 text-gray-700 hover:text-[#05ce9b] transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Play className="w-5 h-5 text-[#05ce9b] ml-1" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative mt-8 lg:mt-0 flex justify-center ">
              <div className="relative z-10 Creative-professional">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                  alt="Creative professional with headphones"
                  width={600}
                  height={700}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative green circle */}
              <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-32 sm:w-64 h-32 sm:h-64 border-8 border-[#05ce9b] rounded-full opacity-80 hero-circle-1"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-r from-[#05ce9b] to-[#02ef91] rounded-full opacity-60 hero-circle-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Content - Team Image */}
            <div className="relative flex justify-center">
              <div className="relative z-10 about-image">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop"
                  alt="Creative team working together"
                  width={600}
                  height={700}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-full h-full border-4 border-[#05ce9b] rounded-2xl -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#05ce9b] font-medium ">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wide about-mark">About Us</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                  <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight about-head">
                We Provide Best
                <br />
                <span className="text-gray-800">Design Solution in City</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed about-para">
                In nec libero luctus, aliquet turpis at, vehicula nisl. Cras eget mauris in nisl tempor lobortis. Nunc in nisl sapien. Suspendisse finibus dolor et pharetra porta. Sed quam elit, lacinia vitae mi quis.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 about-feature-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <Palette className="w-6 h-6 text-[#05ce9b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Creative Ideas</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </p>
                </div>

                <div className="space-y-4 about-feature-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <Lightbulb className="w-6 h-6 text-[#05ce9b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Creative Ideas</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>

              {/* CTA and Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 text-sm sm:text-base">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#05ce9b] to-[#02ef91] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Call Us Anytime</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">0215 6856 9875</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we offer */}

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* WHAT WE OFFER and Main Title */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 text-[#05ce9b] text-xs sm:text-sm font-medium rounded-full mb-4 offer-mark">WHAT WE OFFER</div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 offer-head">
              Unlock Revenue
              <br />
              Grow for you Business
            </h2>
            <button className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
              VIEW MORE
            </button>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-6">
            {offerCards.map((card, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center group relative h-[350px] sm:h-[500px] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer ${
                  openCard === index 
                    ? 'min-w-[300px] sm:min-w-[400px] h-[400px] sm:h-[500px]' 
                    : 'min-w-[180px] sm:min-w-[200px]'
                }`}
                onClick={() => setOpenCard(index)}
                onMouseEnter={() => setOpenCard(index)}
              >
                {/* Background Image */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out ${
                    openCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    openCard === index ? 'bg-black/70' : 'bg-black/60'
                  }`}></div>
                </div>
                
                {/* Default Content */}
                <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center z-10 ${
                  openCard === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 rotate-90 whitespace-nowrap origin-center flex items-center gap-2">
                    {card.icon}
                    {card.title}
                  </h3>
                </div>
                
                {/* Hover Content */}
                <div className={`absolute transition-all duration-500 text-white p-6 flex flex-col items-center justify-center h-full z-20 ${
                  openCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {card.title}
                  </h3>
                  <p className="mb-4 text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                  <button className="mt-4 bg-[#05ce9b] hover:bg-[#039bad] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">

        <div className='bg-[rgb(0,7,26)]'>


          <div className='flex flex-col py-10 justify-center items-center'>
            <div className="flex items-center pb-5 space-x-2 text-[#05ce9b] font-medium project-badge">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-wider">Our works</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
                <div className="w-2 h-2 bg-[#05ce9b] rotate-45"></div>
              </div>
            </div>

            <h2 className="text-4xl mb-10 text-center lg:text-5xl font-bold text-white leading-tight project-title">
              Explore Our Best Recently
              <br />
              <span className="text-white">Completed Projects</span>
            </h2>
          </div>

          <div>
            <div className='flex md:flex-row flex-col justify-center gap-20 pb-10 relative mx-auto'>
              <div className='flex flex-col min-[50%] left-project-cards'>
                {projectCards.slice(0, 3).map((card, index) => (
                  <div 
                    key={index} 
                    className={`my-12 project-card project-card-${index} cursor-pointer transform transition-all duration-500 hover:scale-105 group`}
                    onClick={() => handleProjectClick(index)}
                    onMouseEnter={() => handleProjectHover(index)}
                    onMouseLeave={() => handleProjectLeave(index)}
                  >
                    <div className="relative md:w-[450px] h-[300px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        className='project-image-default rounded-xl absolute inset-0 md:w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                        src={card.defaultImage}
                        alt="Default project image"
                      />
                      <img
                        className='project-image-hover rounded-xl absolute inset-0 md:w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110'
                        src={card.hoverImage}
                        alt="Hover project image"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Project Info Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="space-y-3 mb-10">
                          <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                          
                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-2">
                            {card.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-[#05ce9b]/20 text-[#05ce9b] px-2 py-1 rounded-full text-xs font-medium border border-[#05ce9b]/30 hover:bg-[#05ce9b]/30 transition-colors duration-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Project Details */}
                          <div className="flex items-center justify-between text-white/80 text-xs">
                            <span>Duration: {card.duration}</span>
                            <span>Client: {card.client}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* View Project Button */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-[#05ce9b] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#039bad] transition-colors duration-300 flex items-center space-x-2 group/btn">
                          <span>{selectedProject === index && isLoading ? 'Loading...' : 'View Project'}</span>
                          {!isLoading && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />}
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Loading Animation */}
                      {selectedProject === index && isLoading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#05ce9b]"></div>
                        </div>
                      )}
                      
                      {/* Selection Indicator */}
                      {selectedProject === index && !isLoading && (
                        <div className="absolute top-4 left-4 bg-[#05ce9b] text-white px-2 py-1 rounded-full text-xs font-medium">
                          Selected
                        </div>
                      )}
                    </div>
                    
                    {/* Card Content */}
                    <div className="mt-5 space-y-2">
                      <h3 className='text-white text-3xl group-hover:text-[#05ce9b] transition-colors duration-300 font-bold'>
                        {card.title}
                      </h3>
                      <p className='text-gray-200 group-hover:text-gray-300 transition-colors duration-300'>
                        {card.category.split('|').map((cat, catIndex) => (
                          <span key={catIndex}>
                            {cat.trim()}
                            {catIndex < card.category.split('|').length - 1 && (
                              <span className='text-[#05ce9b] mx-2'>|</span>
                            )}
                          </span>
                        ))}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                        <div 
                          className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] h-1 rounded-full transition-all duration-1000 group-hover:w-full" 
                          style={{width: selectedProject === index ? '100%' : '0%'}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* section 2 */}
              <div className='flex flex-col min-[50%] right-project-cards'>
                {projectCards.slice(3).map((card, index) => {
                  const actualIndex = index + 3; // Adjust index for right column
                  return (
                    <div 
                      key={actualIndex} 
                      className={`my-12 project-card project-card-${actualIndex} cursor-pointer transform transition-all duration-500 hover:scale-105 group`}
                      onClick={() => handleProjectClick(actualIndex)}
                      onMouseEnter={() => handleProjectHover(actualIndex)}
                      onMouseLeave={() => handleProjectLeave(actualIndex)}
                    >
                      <div className="relative md:w-[450px] h-[300px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                        <img
                          className='project-image-default rounded-xl absolute inset-0 md:w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                          src={card.defaultImage}
                          alt="Default project image"
                        />
                        <img
                          className='project-image-hover rounded-xl absolute inset-0 md:w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110'
                          src={card.hoverImage}
                          alt="Hover project image"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Project Info Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="space-y-3 mb-10">
                            <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                            
                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2">
                              {card.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-[#05ce9b]/20 text-[#05ce9b] px-2 py-1 rounded-full text-xs font-medium border border-[#05ce9b]/30 hover:bg-[#05ce9b]/30 transition-colors duration-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {/* Project Details */}
                            <div className="flex items-center justify-between text-white/80 text-xs">
                              <span>Duration: {card.duration}</span>
                              <span>Client: {card.client}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* View Project Button */}
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="bg-[#05ce9b] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#039bad] transition-colors duration-300 flex items-center space-x-2 group/btn">
                            <span>{selectedProject === actualIndex && isLoading ? 'Loading...' : 'View Project'}</span>
                            {!isLoading && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />}
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Loading Animation */}
                        {selectedProject === actualIndex && isLoading && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#05ce9b]"></div>
                          </div>
                        )}
                        
                        {/* Selection Indicator */}
                        {selectedProject === actualIndex && !isLoading && (
                          <div className="absolute top-4 left-4 bg-[#05ce9b] text-white px-2 py-1 rounded-full text-xs font-medium">
                            Selected
                          </div>
                        )}
                      </div>
                      
                      {/* Card Content */}
                      <div className="mt-5 space-y-2">
                        <h3 className='text-white text-3xl group-hover:text-[#05ce9b] transition-colors duration-300 font-bold'>
                          {card.title}
                        </h3>
                        <p className='text-gray-200 group-hover:text-gray-300 transition-colors duration-300'>
                          {card.category.split('|').map((cat, catIndex) => (
                            <span key={catIndex}>
                              {cat.trim()}
                              {catIndex < card.category.split('|').length - 1 && (
                                <span className='text-[#05ce9b] mx-2'>|</span>
                              )}
                            </span>
                          ))}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                          <div 
                            className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] h-1 rounded-full transition-all duration-1000 group-hover:w-full" 
                            style={{width: selectedProject === actualIndex ? '100%' : '0%'}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="py-20">
          <div className="relative overflow-hidden">
            {/* First Marquee */}
            <div className="flex overflow-hidden -skew-y-3 select-none">
              <div className="flex-shrink-0 flex items-center min-w-full animate-[scroll_60s_linear_infinite]">
                <div className="flex items-center">
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 1"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Creative Design
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 2"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Digital Solutions
                  </p>
                </div>
                {/* Duplicate content for seamless loop */}
                <div className="flex items-center">
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 1"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Creative Design
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 2"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Digital Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Second Marquee (Reverse) */}
            <div className="flex overflow-hidden -skew-y-3 select-none mt-8 border-y-4 border-[#05ce9b] py-3">
              <div className="flex-shrink-0 flex items-center min-w-full animate-[scroll_60s_linear_infinite_reverse]">
                <div className="flex items-center">
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
                    Web Development
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 3"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    UI/UX Design
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 4"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                </div>
                {/* Duplicate content for seamless loop */}
                <div className="flex items-center">
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
                    Web Development
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 3"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    UI/UX Design
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 4"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <TestimonialSlider />
      </section>

      <section>
        <div className="grid place-content-center h-20 bg-gray-100">
          <div className="overflow-hidden relative w-full mask-marquee">
            <div ref={containerRef} className="flex w-max will-change-transform">
              <div ref={trackRef} className="flex">
                {logos.map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-32 mr-12 flex justify-center items-center">
                    <img src={src} alt="LOGO" className="h-14 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <ConnectUs />
      </section>

    </div>
  )
}