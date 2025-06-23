import React from 'react';
import { Lightbulb, Palette, Settings, BarChart3 } from 'lucide-react';

const InnovationSection = () => {
  const services = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Brand Strategy & Art Direction",
      color: "text-[#05ce9b]"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX/UI Design & Website/App Design",
      color: "text-[#05ce9b]"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Frontend developing experience",
      color: "text-[#05ce9b]"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Brand Strategy & Art Direction",
      color: "text-[#05ce9b]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creative team working"
                className="rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-[#05ce9b] text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">32+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-8 left-8 w-32 h-32 border-2 border-purple-300 rounded-full opacity-30"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-40"></div>
            <div className="absolute top-20 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
          </div>
          
          <div>
            <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
              OUR VALUED CLIENTS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              CREATIVE PROBLEM SOLVING INNOVATIONS
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ON THE OTHER HAND WE DENOUNCE WITH RIGHTEOUS INDIGNATION 
              AND DISLIKE MEN WHO ARE SO BEGUILED AND DEMORALIZED BY THE 
              CHARMS OF PLEASURE OF THE MOMENT
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`${service.color} mt-1`}>
                    {service.icon}
                  </div>
                  <div className="text-gray-700 font-medium text-sm leading-tight">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-[#05ce9b] hover:bg-[#098e6b] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;