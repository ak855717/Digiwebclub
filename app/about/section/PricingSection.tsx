"use client"
import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Young Plans

  const plans = ["Starting Plans", "Young Plans", "Unlimited Plans"];

  const pricingData = {
    0: {
      price: "$9.99",
      title: "Starting Plans",
      description: "Perfect for small businesses getting started with digital presence.",
      features: [
        "Basic website design",
        "5 pages included",
        "Mobile responsive",
        "Basic SEO setup"
      ]
    },
    1: {
      price: "$16.00",
      title: "Young Plans",
      description: "Set up your business analytics dashboard to increase your business profit.",
      features: [
        "Professional website design",
        "10 pages included",
        "Advanced SEO optimization",
        "Content management system",
        "Social media integration"
      ]
    },
    2: {
      price: "$29.99",
      title: "Unlimited Plans",
      description: "Complete digital solution for growing businesses with unlimited possibilities.",
      features: [
        "Custom website development",
        "Unlimited pages",
        "E-commerce integration",
        "Advanced analytics",
        "Priority support",
        "Custom domain setup"
      ]
    }
  };

  const currentPlan = pricingData[selectedPlan as keyof typeof pricingData];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
            WEB DESIGN & DEVELOPMENT
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AFFORDABLE PRICING.<br />
            EASY SCALING.
          </h2>
          
          <div className="flex justify-center space-x-8 mt-8">
            {plans.map((plan, index) => (
              <button 
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === selectedPlan
                    ? 'bg-gradient-to-r from-[#14473b] to-[#039158] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-[#05ce9b] hover:bg-gray-100'
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#14473b] to-[#03a564] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Strategy planning"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <div className="mb-4">
                <div className="text-3xl font-bold mb-2">{currentPlan.price}</div>
                <div className="text-[#30ffcb] text-sm">Monthly</div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{currentPlan.title}</h3>
              <p className="text-purple-100 text-sm">
                {currentPlan.description}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {currentPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-8 h-8 bg-[#05ce9c33] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#05ce9b]" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
            
            <div className="pt-6">
              <button className="bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#05ce9b] hover:to-[#039158] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;