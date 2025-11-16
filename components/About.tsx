
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-amber-400 rounded-lg"></div>
              <img 
                src="https://picsum.photos/seed/architect/600/700" 
                alt="Architect Portrait" 
                className="relative w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">About The Architect</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With over 15 years of experience, our lead architect is a visionary in the field, renowned for creating spaces that are both functional and profoundly beautiful. Holding a Master's degree from the Harvard Graduate School of Design, their work is guided by a deep respect for context, material, and light.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The philosophy is simple: architecture should elevate the human experience. Each project is a unique journey, a collaborative process with clients to translate their dreams into tangible, enduring structures. Our portfolio spans residential, commercial, and cultural projects, each marked by a signature of thoughtful minimalism and sustainable innovation.
            </p>
            <a href="#contact" className="inline-block bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
