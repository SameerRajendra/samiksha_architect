import React, { useState, useEffect, useCallback } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-white transition-colors">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [keywords, setKeywords] = useState(project.keywords.join(', '));
  const [customDesc, setCustomDesc] = useState('');

  useEffect(() => {
    // Reset state when project changes
    setCurrentImageIndex(0);
    setKeywords(project.keywords.join(', '));
    setCustomDesc('');
  }, [project]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextImage]);

  // Plain placeholder generator
  const handleGenerate = () => {
  setCustomDesc(`This ${project.category} project, built in ${project.year}, features ${keywords}.`);
  };


  if (!isOpen && !project) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative bg-[#1a1a1a] rounded-lg shadow-2xl w-11/12 max-w-5xl h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        
        <button onClick={onClose} className="absolute top-4 right-4 z-20"><CloseIcon /></button>

        <div className="w-full md:w-3/5 h-1/2 md:h-full relative">
          <img src={project.images[currentImageIndex]} alt={`${project.title} - view ${currentImageIndex + 1}`} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-colors"><ChevronLeftIcon /></button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-colors"><ChevronRightIcon /></button>
          <div className="absolute bottom-4 left-4 text-white">
            <p>{currentImageIndex + 1} / {project.images.length}</p>
          </div>
        </div>

        <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 overflow-y-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">{project.title}</h2>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
          </div>
          <p className="text-gray-300 mb-8">{project.description}</p>
          
          {/* REPLACED AI SECTION */}
          <div className="bg-[#222] p-4 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Custom Description</h4>
            <textarea
              className="w-full bg-[#111] text-gray-300 p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              rows={3}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Enter keywords for description"
            />
            <button onClick={handleGenerate} className="mt-2 w-full bg-amber-500 text-black font-bold py-2 px-4 rounded hover:bg-amber-400 transition-colors">
              Generate Description
            </button>

            {customDesc && (
              <div className="mt-4 p-3 bg-[#111] border border-gray-600 rounded">
                <p className="text-sm text-gray-300 whitespace-pre-wrap">{customDesc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
