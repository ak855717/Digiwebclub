"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    quote: "Working with this team has been transformative for our business. Their attention to detail and innovative approach helped us exceed our goals by 150%. The level of professionalism and dedication is unmatched.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Lead",
    quote: "The technical expertise and problem-solving skills demonstrated throughout our project were exceptional. They delivered a solution that not only met our requirements but exceeded our expectations in every way.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "Team Leader",
    quote: "Lorem ipsum dolor sit amet consectetur. Vitae tortor purus elementum pellentesque in. Faucibus faucibus eget tempus non. Nisl est gravida molestie rhoncus. Vitae rutrum praesent enim a ante nunc enim. Malesuada dictumst sed enim diam. Metus jusce faucibus etiam molestie dui porttitor. Pretium quam sit aliquam id nam senectus malesuada tempus.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Operations Manager",
    quote: "The seamless integration and outstanding support provided has revolutionized our workflow. Our team productivity increased by 40% within the first month. Truly remarkable results that speak for themselves.",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Creative Director",
    quote: "The creative vision and strategic thinking brought to our project was outstanding. They understood our brand identity perfectly and delivered designs that resonated with our target audience beautifully.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleProfileClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="md:min-h-screen h-[700px] flex justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-96 sm:h-96 bg-red-500/10 transform -rotate-45 -translate-x-20 -translate-y-20 sm:-translate-x-48 sm:-translate-y-48"></div>
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-96 sm:h-96 bg-blue-500/10 transform rotate-45 translate-x-20 -translate-y-20 sm:translate-x-48 sm:-translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-96 sm:h-96 bg-purple-500/10 transform rotate-45 -translate-x-20 translate-y-20 sm:-translate-x-48 sm:translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-96 sm:h-96 bg-red-500/10 transform -rotate-45 translate-x-20 translate-y-20 sm:translate-x-48 sm:translate-y-48"></div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        type="button"
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
      </button> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 py-8 sm:px-4 sm:py-16">
        {/* Profile Images Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-16  w-full max-w-full scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleProfileClick(index)}
              className={`relative transform transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-105 sm:scale-110'
                  : 'scale-90 hover:scale-100 opacity-70 hover:opacity-90'
              }`}
            >
              <div
                className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === activeIndex
                    ? ' border-[#05ce9b] shadow-lg shadow-[#05ce9b]'
                    : 'border-transparent hover:border-white/30'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
          {/* Name and Role */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-wide">
            {activeTestimonial.name.toUpperCase()}
          </h2>
          <p className="text-base sm:text-xl text-blue-300 mb-6 sm:mb-12 font-medium">
            {activeTestimonial.role}
          </p>

          {/* Quote */}
          <blockquote className="text-sm sm:text-lg text-gray-300 italic leading-relaxed mb-6 sm:mb-12 px-2 sm:px-8">
            "{activeTestimonial.quote}"
          </blockquote>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 sm:w-6 sm:h-6 ${
                  i < activeTestimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}