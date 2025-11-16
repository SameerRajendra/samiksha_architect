
import React from 'react';
import { projectsData } from '../constants';
import type { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg transform transition-transform duration-500 hover:scale-105"
      onClick={onClick}
    >
      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">{project.title}</h3>
            <p className="text-amber-300 text-sm">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Work</h2>
          <p className="text-lg text-gray-400 mt-2">A selection of our finest projects.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
          ))}
        </div>
      </div>
    </section>
  );
};
