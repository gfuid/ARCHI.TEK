import React from 'react';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-houzz-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Visual Side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-houzz-sage/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592f2416460a?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-64 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Architectural Planning"
                />
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-80 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Engineering"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-80 object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Site Construction"
                />
                <div className="bg-houzz-gold p-8 rounded-sm shadow-xl text-white">
                  <p className="text-4xl font-serif mb-2">10+</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Years of Field Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About the Studio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-houzz-dark mb-8 leading-tight">
              Engineering <span className="italic text-houzz-gold">Stability</span> with Modern Vision.
            </h2>

            <p className="text-houzz-gray text-lg leading-relaxed mb-6">
              Led by <strong>Er. Ashish Bhargav</strong> and <strong>Er. Sachin Kumar</strong>, our firm brings together over a decade of expertise in Structural Engineering and Construction. Both founders hold M.Tech degrees in Structural Engineering, ensuring every project is backed by rigorous technical standards.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <div className="mt-1.5 w-2 h-2 bg-houzz-gold rounded-full flex-shrink-0"></div>
                <p className="text-houzz-gray/80 text-base italic">"Specializing in High-End Construction and Luxury Interior Works."</p>
              </div>
            </div>

            {/* Team Stats from Notes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-houzz-sage/20 pt-8">
              <div>
                <span className="block text-2xl font-bold text-houzz-dark">2</span>
                <span className="text-[9px] uppercase tracking-tighter text-houzz-gray font-bold">Lead Engineers</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-houzz-dark">M.Tech</span>
                <span className="text-[9px] uppercase tracking-tighter text-houzz-gray font-bold">Qualification</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-houzz-dark">3D</span>
                <span className="text-[9px] uppercase tracking-tighter text-houzz-gray font-bold">Visualizers</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-houzz-dark">Site</span>
                <span className="text-[9px] uppercase tracking-tighter text-houzz-gray font-bold">Managers</span>
              </div>
            </div>

            <Magnetic strength={0.3}>
              <button className="bg-houzz-dark text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-houzz-gold transition-all duration-500 rounded-sm">
                View Our Portfolio
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;