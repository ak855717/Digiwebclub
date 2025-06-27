import { describe } from 'node:test';
"use client"

import React, { useState } from 'react';

const AffordablePricing: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const cards = [
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: 'Web Design Services',
            describe: 'Working Together, ideas Come to Life',
            price: '$999',
            features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', '3 Revisions']
        },
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: 'Web Development Services',
            describe: 'Working Together, ideas Come to Life',
            price: '$1,999',
            features: ['Full Stack Development', 'Database Integration', 'API Development', '5 Revisions']
        },
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: 'E-commerce Solutions',
            describe: 'Working Together, ideas Come to Life',
            price: '$2,999',
            features: ['E-commerce Platform', 'Payment Integration', 'Inventory Management', 'Unlimited Revisions']
        },
    ]

    const handleCardClick = (index: number) => {
        setSelectedCard(selectedCard === index ? null : index);
    };

    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h3 className='text-xs sm:text-sm text-[#05ce9b] animate-pulse'>WEB DESIGN & DEVELOPMENT</h3>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transition-colors duration-300 leading-tight">
                        Affordable pricing. <br className="hidden sm:block" />
                        Easy scaling.
                    </h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 mb-6 max-w-7xl mx-auto'>
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col items-center mx-auto w-full max-w-[320px] sm:max-w-[300px] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-2xl p-4 sm:p-6 ${
                                hoveredCard === index ? 'bg-white shadow-xl' : 'bg-transparent'
                            } ${selectedCard === index ? 'ring-4 ring-[#05ce9b] bg-white' : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="relative overflow-hidden rounded-xl mb-4 group w-full">
                                <img 
                                    src={card.img} 
                                    alt={card.alt} 
                                    className={`w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-500 ${
                                        hoveredCard === index ? 'scale-110' : 'scale-100'
                                    }`} 
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <button className="opacity-0 group-hover:opacity-100 bg-[#05ce9b] text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            
                            <div className="text-center w-full">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 hover:text-[#05ce9b] transition-colors duration-300">
                                    {card.alt}
                                </h3>
                                <p className='text-sm sm:text-lg text-gray-600 mb-3 px-2'>
                                    {card.describe}
                                </p>
                                <div className="text-2xl sm:text-3xl font-bold text-[#05ce9b] mb-4">
                                    {card.price}
                                </div>
                                
                                {selectedCard === index && (
                                    <div className="mt-4 space-y-2 animate-fadeIn px-2">
                                        {card.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#05ce9b] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-left">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                <button className="mt-4 bg-[#05ce9b] text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-[#04b08a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AffordablePricing;
