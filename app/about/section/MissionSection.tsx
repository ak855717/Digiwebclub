import React from 'react';

const MissionSection = () => {
  const achievements = [
    "Influencer Marketing The Power of",
    "Marketing The Power of Influencer"
  ];

  return (
    <section className="py-20 -skew-y-3 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
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
          
          <div>
            <div className="text-purple-400 text-sm font-semibold mb-2 tracking-wider uppercase">
              OUR MISSION CLIENTS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Believe That Our Works Can To A Better World.
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              On the other hand We denounce with righteous indignation And 
              Dislike men who are so beguiled our
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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