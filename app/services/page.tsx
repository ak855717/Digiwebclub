"use client"

import React, { useState, useEffect, useRef } from 'react'
import {
  Palette,
  TrendingUp,
  Code,
  Layers,
  Play,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Home,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react'
import Link from 'next/link'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const [openItem, setOpenItem] = useState<number | null>(1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [counts, setCounts] = useState({
    officeLocation: 0,
    availability: 0,
    positiveFeedback: 0,
    skilledExpert: 0
  });

  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workProcessRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === cardDetails.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? cardDetails.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  // Counter animation function
  const animateCounter = (target: number, setter: (value: number) => void) => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, duration / steps);
  };

  useEffect(() => {
    // Hero Section Animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelector('h1'), 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      
      gsap.fromTo(heroRef.current.querySelector('nav'), 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }

    // Services Section Animation
    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card');
      
      gsap.fromTo(servicesRef.current.querySelector('.section-header'), 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      serviceCards.forEach((card, index) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0, scale: 0.9 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // Work Process Section Animation
    if (workProcessRef.current) {
      const leftContent = workProcessRef.current.querySelector('.left-content');
      const rightContent = workProcessRef.current.querySelector('.right-content');
      
      gsap.fromTo(leftContent, 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: workProcessRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightContent, 
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workProcessRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // FAQ Section Animation
    if (faqRef.current) {
      const faqLeft = faqRef.current.querySelector('.faq-left');
      const faqRight = faqRef.current.querySelector('.faq-right');
      
      gsap.fromTo(faqLeft, 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(faqRight, 
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Partners Section Animation
    if (partnersRef.current) {
      const partnerLogos = partnersRef.current.querySelectorAll('img');
      
      partnerLogos.forEach((logo, index) => {
        gsap.fromTo(logo, 
          { y: 50, opacity: 0, scale: 0.8 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // Statistics Section Animation
    if (statsRef.current) {
      const statsLeft = statsRef.current.querySelector('.stats-left');
      const statsRight = statsRef.current.querySelector('.stats-right');
      
      gsap.fromTo(statsLeft, 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(statsRight, 
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Counter animation observer
    if (statsRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Start counting animations
              animateCounter(46, (value) => setCounts(prev => ({ ...prev, officeLocation: value })));
              animateCounter(41, (value) => setCounts(prev => ({ ...prev, availability: value })));
              animateCounter(95, (value) => setCounts(prev => ({ ...prev, positiveFeedback: value })));
              animateCounter(85, (value) => setCounts(prev => ({ ...prev, skilledExpert: value })));
              
              // Unobserve after animation starts
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(statsRef.current);

      return () => {
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      };
    }
  }, []);

  const cardDetails = [
    {
      id: 1,
      title: "QUALITY SERVICES",
      subtitle: "AND BEST REPAIR",
      description: "Quality service is a business approach focused on providing excellent customer experiences and meeting or exceeding customer expectations consistently.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      subtitle: "AND DESIGN SOLUTIONS",
      description: "We specialize in creating modern, responsive websites and web applications that drive business growth and provide exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    },
    {
      id: 3,
      title: "DIGITAL MARKETING",
      subtitle: "AND BRAND STRATEGY",
      description: "Our digital marketing services help businesses reach their target audience, increase brand awareness, and drive conversions through strategic campaigns.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "UI/UX DESIGN",
      subtitle: "AND USER EXPERIENCE",
      description: "We create intuitive and beautiful user interfaces that enhance user experience and drive engagement across all digital platforms.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "What is Business?",
      answer: "Business efficiency, provide a better customer experience with modern technology that makes everything available around business efficiency service."
    },
    {
      id: 2,
      question: "Nulls vitae est enim, Janson dignissim dolor et mauris",
      answer: "Lorem ipsum dolor sit amet consectetur. Vel velit tincidunt adipiscing mauri tincidunt nunc et. Tincidunt lectus massa gravida sit placerat. Fermentum morbi viverra accumsan vitae. Sed consectetur tempus eget mauris at eleifend."
    },
    {
      id: 3,
      question: "Pellentesque habitant morbi tristique senectus?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
  ];

  const cards = [
    {
      logo: Palette,
      head: "Branding & Art",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
    {
      logo: TrendingUp,
      head: "Digital Marketing",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
    {
      logo: Code,
      head: "Web Development",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
    {
      logo: Layers,
      head: "Design & Development",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
    {
      logo: Play,
      head: "3D Animation",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
    {
      logo: Users,
      head: "Branding & Ilastration",
      para: "No matter how big your company is, as you expand and reach new highs you'll want an agency to have your back.",
    },
  ]


  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Service</h1>
          <nav className="flex items-center space-x-2 text-white/80">
            <Home className="w-4 h-4" />
            <Link href="/">
              <span className="text-sm">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-[#05ce9b]">Service</span>
          </nav>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-header">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-[#05ce9b] rounded-full mr-2"></div>
              <span className="text-[#05ce9b] font-medium uppercase tracking-wide">Welcome Creative Agency</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Driven by Quality &<br />
              Dedicated
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Branding & Art */}
            {cards.map((card, index) => (
              <div key={index} className="rounded-2xl service-card"
                // style={{
                //   backgroundImage: "url('https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/07/ser1.jpg')",
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                // }}
                >
                <div

                  className="bg-white hover:bg-transparent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-[#05ce9b] group-hover:to-[#02ef91] transition-colors duration-300">
                    {card.logo && <card.logo className="w-8 h-8 text-[#05ce9b] group-hover:text-white transition-colors duration-300" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{card.head}</h3>
                  <p className="text-gray-600 mb-6">
                    {card.para}
                  </p>
                  <a href="#" className="inline-flex items-center text-[#05ce9b] font-medium hover:text-white transition-colors">
                    <ArrowRight className="w-10 h-10 ml-2 rounded-full hover:bg-gradient-to-r hover:from-[#05ce9b] hover:to-[#02ef91]" />
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section ref={workProcessRef} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="left-content">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-[#05ce9b] rounded-full mr-2"></div>
                <span className="text-[#05ce9b] font-medium uppercase tracking-wide">Ideas come to life</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Work Starts<br />
                Immediately
              </h2>
              <div className="space-y-6 mb-9">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#05ce9b] mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">User Research</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#05ce9b] mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">StoryBoard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#05ce9b] mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Wireframing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#05ce9b] mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Usability Testing</span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Team collaboration"
                className="w-full object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-rows-2 right-content">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Office workspace"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 space-y-5 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                  alt="Professional meeting"
                  className="w-full object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                  alt="Professional meeting"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Section */}
      <section ref={faqRef} className="py-12 text-white" style={{
        backgroundImage: 'url(https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/faq-bg-1.jpg)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="faq-left">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-[#05ce9b] rounded-full mr-2"></div>
                <span className="text-[#05ce9b] font-medium uppercase tracking-wide">Working Status</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Diversity is Our<br />
                Strengths
              </h2>

              <div className="space-y-8">
                {faqData.map((item) => (
                  <div key={item.id} className="bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-bold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItem === item.id ? (
                          <Minus className="w-5 h-5 text-[#05ce9b] transition-transform duration-200" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#05ce9b] transition-transform duration-200" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${openItem === item.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-6 pb-4">
                        <div className="h-px bg-white/20 mb-4"></div>
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl relative overflow-hidden faq-right">
              <div
                className={`transition-all duration-300 ease-in-out ${isAnimating
                  ? slideDirection === 'right'
                    ? 'transform translate-x-full opacity-0'
                    : 'transform -translate-x-full opacity-0'
                  : 'transform translate-x-0 opacity-100'
                  }`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={cardDetails[currentCardIndex].image}
                    alt="Team member"
                    className="w-16 h-16 rounded-full object-cover mr-4 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-lg transition-all duration-300">{cardDetails[currentCardIndex].title}</h4>
                    <p className="font-bold text-lg transition-all duration-300">{cardDetails[currentCardIndex].subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 transition-all duration-300">
                  {cardDetails[currentCardIndex].description}
                </p>
              </div>

              <div className="flex justify-center items-center space-x-4 ">
                <button
                  onClick={prevCard}
                  disabled={isAnimating}
                  className={`w-10 h-10 bg-gradient-to-r from-[#05ce9b] to-[#02ef91] rounded-lg flex items-center justify-center transition-all duration-200 ${isAnimating
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-[#039bad] hover:to-[#05ce9b] hover:scale-105 active:scale-95'
                    }`}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextCard}
                  disabled={isAnimating}
                  className={`w-10 h-10 bg-gradient-to-r from-[#05ce9b] to-[#02ef91] rounded-lg flex items-center justify-center transition-all duration-200 ${isAnimating
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-[#039bad] hover:to-[#05ce9b] hover:scale-105 active:scale-95'
                    }`}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Card indicator dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {cardDetails.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentCardIndex
                      ? 'bg-gradient-to-r from-[#05ce9b] to-[#02ef91] scale-125'
                      : 'bg-gray-300 hover:bg-[#05ce9b]'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center space-x-8 ">
            <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/6.png" alt="ola" />
            <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/1.png" alt="imart" />
            <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/5.png" alt="microsoft" />
            <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/3.png" alt="amazon" />
            <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/4.png" alt="google" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="stats-left">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-[#05ce9b] rounded-full mr-2"></div>
                <span className="text-[#05ce9b] font-medium uppercase tracking-wide">Innovative Status</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Building better<br />
                <span className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] bg-clip-text text-transparent">digital products</span><br />
                Organizations.
              </h2>
              <button className="bg-gradient-to-r from-[#05ce9b] to-[#02ef91] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                GET SERVICES
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 stats-right">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">{counts.officeLocation}K</div>
                <p className="text-gray-600 font-medium">OFFICE LOCATION</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">{counts.availability}K</div>
                <p className="text-gray-600 font-medium">AVAILABILITY</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                  {counts.positiveFeedback}K
                </div>
                <p className="text-gray-600 font-medium">POSITIVE FEEDBACK</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">{counts.skilledExpert}K</div>
                <p className="text-gray-600 font-medium">SKILLED EXPERT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Service;