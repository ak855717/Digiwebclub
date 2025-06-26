import { describe } from 'node:test';
import React from 'react';

const AffordablePricing: React.FC = () => {

    const cards = [
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: '',
            describe: 'Working Together, ideas Come to Life'
        },
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: '',
            describe: 'Working Together, ideas Come to Life'
        },
        {
            img: 'https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/blog-380x458.jpg',
            alt: '',
            describe: 'Working Together, ideas Come to Life'
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className=' text-sm text-[#05ce9b]'>WEB DESIGN & DEVELOPMENT</h3>
                    <h2 className="text-6xl font-bold text-gray-900 mb-4">
                        Affordable pricing. <br />
                        Easy scaling.
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 mb-6 mx-28'>
                    {cards.map((card, index) => (
                        <div key={index} className='flex flex-col items-center mx-auto w-auto'>
                            <img src={card.img} alt={card.alt} />
                            <p className='text-xl'>
                                {card.describe}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AffordablePricing;
