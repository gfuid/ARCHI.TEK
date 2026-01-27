
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Magnetic from './Magnetic';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const categories = ['All', 'Residential', 'Commercial', 'Cultural'];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(cat => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full border transition-all duration-500 ${
                  filter === cat 
                    ? 'bg-houzz-gold border-houzz-gold text-white shadow-lg shadow-houzz-gold/20' 
                    : 'bg-houzz-light border-transparent text-houzz-gray hover:border-houzz-gold/30'
                }`}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-houzz-light aspect-square overflow-hidden cursor-pointer rounded-sm opacity-0 translate-y-12 transition-all duration-700"
            >
              <img 
                src={project.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" 
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-houzz-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-houzz-gold text-[10px] font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-serif font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-in rounded-sm">
             <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-50 text-houzz-dark/40 hover:text-houzz-gold transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="md:w-1/2 h-[300px] md:h-auto">
              <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
            </div>
            <div className="md:w-1/2 p-12 overflow-y-auto">
              <span className="text-houzz-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">{selectedProject.location}</span>
              <h2 className="text-4xl font-serif font-bold text-houzz-dark mb-6">{selectedProject.title}</h2>
              <p className="text-houzz-gray leading-relaxed mb-10">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-8 border-y border-houzz-gold/10 py-8">
                <div>
                  <span className="text-[10px] uppercase text-houzz-gray/40 block mb-1">Service Type</span>
                  <span className="font-bold text-houzz-dark">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-houzz-gray/40 block mb-1">Completion</span>
                  <span className="font-bold text-houzz-dark">{selectedProject.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
