
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight mb-4 animate-fade-in-down">
          Designing The Future
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          We craft spaces that inspire, connect, and endure—blending timeless design with modern innovation.
        </p>
      </div>
       <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
