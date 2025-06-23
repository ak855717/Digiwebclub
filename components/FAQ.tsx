"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Business?",
    answer: "Lorem ipsum dolor sit amet consectetur. Vel velit tincidunt adipiscing mauri tincidunt nunc et. Tincidunt lectus massa gravida sit placerat. Fermentum morbi viverra accumsan vitae. Sed consectetur tempus eget mauris at eleifend. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet."
  },
  {
    id: 2,
    question: "Nulla vitae est risus. Aenean aliquam dolor a massa?",
    answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    question: "Habitant morbi tristique senectus?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
  },
  {
    id: 4,
    question: "Pellentesque habitant morbi tristique senectus?",
    answer: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
  },
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1); // Only one item can be open at a time

  const toggleItem = (id: number) => {
    // If clicking on the currently open item, close it. Otherwise, open the clicked item
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - FAQ Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="space-y-2 md:space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-50 text-[#05ce9b] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                <span className="w-2 h-2 bg-gradient-to-r from-[#05ce9b] to-[#02ef91] rounded-full"></span>
                FAQs
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                You Are Confused!<br />
                <span className="text-[#05ce9b]">Question & Answers.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                In nec libero luctus, aliquet turpis at, vehicula nisl. Cras eget mauri 
                in nisl tempus lobortis. Nunc in nisl sapien.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3 md:space-y-4">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
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
                    className={`transition-all duration-300 ease-in-out ${
                      openItem === item.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="h-px bg-gray-200 mb-3 sm:mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-2 sm:-inset-4 border-2 border-dashed border-red-300 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Main image container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional consultation"
                  className="w-full h-64 sm:h-96 lg:h-[600px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 w-10 sm:w-16 h-10 sm:h-16 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-8 sm:bottom-16 -right-2 sm:-right-4 w-8 sm:w-12 h-8 sm:h-12 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;