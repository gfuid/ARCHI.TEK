
import React from 'react';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-houzz-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-houzz-sage/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-64 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all" 
                  alt="Office"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all" 
                  alt="Process"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all" 
                  alt="Building"
                />
                <div className="bg-houzz-gold p-8 rounded-sm shadow-xl text-white">
                  <p className="text-4xl font-serif mb-2">15+</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About the Studio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-houzz-dark mb-8 leading-tight">
              Designing with <span className="italic text-houzz-gold">Purpose</span> & Responsibility.
            </h2>
            <p className="text-houzz-gray text-lg leading-relaxed mb-8">
              Founded with a vision for structural integrity, DEI 23 SIGN HOUZZ has established itself as a beacon of architectural innovation. Our philosophy is rooted in the belief that great design evokes trust and stability.
            </p>
            <p className="text-houzz-gray/80 text-base leading-relaxed mb-12">
              We leverage modern engineering and high-end aesthetic trends to deliver projects that stand the test of time. Every blueprint is a unique collaboration between our visionary team and your aspirations.
            </p>
            <div className="flex space-x-12 mb-12">
              <div>
                <span className="block text-2xl font-bold text-houzz-dark mb-1">120+</span>
                <span className="text-[10px] uppercase tracking-widest text-houzz-gray font-bold">Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-houzz-dark mb-1">14</span>
                <span className="text-[10px] uppercase tracking-widest text-houzz-gray font-bold">Awards</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-houzz-dark mb-1">4</span>
                <span className="text-[10px] uppercase tracking-widest text-houzz-gray font-bold">Offices</span>
              </div>
            </div>
            <Magnetic strength={0.3}>
              <button className="bg-houzz-dark text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-houzz-gold transition-all duration-500 rounded-sm">
                Meet the Team
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
