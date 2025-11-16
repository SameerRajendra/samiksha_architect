
import React from 'react';

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const StructureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
);
const HarmonyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const PhilosophyItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
    return (
        <div className="text-center p-6 bg-[#222] rounded-lg transition-all duration-300 hover:bg-[#2a2a2a] hover:-translate-y-2">
            <div className="flex justify-center items-center mb-4 text-amber-400">
                {icon}
            </div>
            <h3 className="text-2xl font-serif font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Philosophy</h2>
          <p className="text-lg text-gray-400 mt-2">The principles that guide our every creation.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PhilosophyItem 
                icon={<VisionIcon />}
                title="Contextual Vision"
                description="Every design begins with a deep understanding of its context—the culture, climate, and landscape. We create buildings that belong."
            />
            <PhilosophyItem 
                icon={<StructureIcon />}
                title="Material Honesty"
                description="We believe in the honest expression of materials. Wood, stone, and steel are celebrated for their intrinsic beauty and structural integrity."
            />
            <PhilosophyItem
                icon={<HarmonyIcon />}
                title="Human Harmony"
                description="Our ultimate goal is to create spaces that resonate with their inhabitants, fostering well-being, inspiration, and a profound sense of place."
            />
        </div>
      </div>
    </section>
  );
};
