
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Magnetic from './Magnetic';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const categories = ['All', 'Residential', 'Commercial', 'Cultural'];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-studio-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <h2 className="text-sm text-studio-gold font-bold uppercase tracking-[0.3em] mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Portfolio</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <Magnetic key={cat} strength={0.2}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`text-xs uppercase tracking-widest px-6 py-2 border transition-all duration-500 ${
                    filter === cat 
                      ? 'border-studio-gold text-studio-gold bg-studio-gold/10' 
                      : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              ref={(el) => (cardRefs.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden bg-studio-gray aspect-[4/5] cursor-pointer border border-white/5 hover:border-studio-gold/30 transition-all duration-700 ease-out opacity-0 translate-y-12"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700 z-10"></div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <span className="text-studio-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.category} / {project.year}
                  </span>
                </div>
                
                <div className="overflow-hidden">
                  <h4 className="text-2xl font-serif font-bold mb-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.title}
                  </h4>
                </div>

                <p className="text-sm text-studio-white/60 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  {project.description}
                </p>

                <div className="flex items-center space-x-3 text-studio-gold font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-[400ms]">
                  <span className="border-b border-transparent hover:border-studio-gold transition-colors">View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-studio-black/95 backdrop-blur-md transition-opacity duration-500"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-studio-gray w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-slide-up">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 text-studio-white/50 hover:text-studio-gold transition-colors p-2 bg-studio-black/50 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="lg:w-3/5 h-[300px] lg:h-auto overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <span className="text-studio-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  {selectedProject.title}
                </h2>
                
                <div className="flex space-x-12 mb-10 border-y border-white/10 py-6">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Location</span>
                    <span className="text-sm font-medium">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Year</span>
                    <span className="text-sm font-medium">{selectedProject.year}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-studio-white/60 leading-relaxed text-lg mb-8">
                    {selectedProject.description}
                  </p>
                  <p className="text-studio-white/40 text-sm leading-relaxed italic">
                    This project exemplifies our commitment to structural honesty and environmental integration.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Magnetic strength={0.15}>
                  <button className="bg-studio-gold text-studio-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-studio-white transition-colors">
                    Download Project Specs
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
