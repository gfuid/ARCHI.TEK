
import React from 'react';
import GenerativeCanvas from './GenerativeCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <GenerativeCanvas />
      
      {/* Background Image Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-studio-black via-studio-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="text-studio-gold font-medium tracking-widest uppercase mb-4 block animate-fade-in">
            ESTABLISHED 2010 — NEW YORK
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8 animate-slide-up">
            Designing the <br /> 
            <span className="italic text-studio-white/80">Future of Space</span>
          </h1>
          <p className="text-xl text-studio-white/60 mb-10 max-w-xl leading-relaxed animate-slide-up [animation-delay:200ms]">
            Where structural precision meets poetic minimalism. We define architectural excellence through digital innovation and heritage craft.
          </p>
          <div className="flex space-x-6 animate-slide-up [animation-delay:400ms]">
            <a 
              href="#portfolio" 
              className="bg-studio-white text-studio-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-studio-gold hover:text-studio-white transition-all duration-300"
            >
              View Works
            </a>
            <a 
              href="#studio" 
              className="border border-studio-white/30 px-10 py-4 font-bold uppercase tracking-widest hover:bg-studio-white/10 transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 z-10 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <div className="w-px h-24 bg-studio-white/20 ml-3"></div>
          <p className="rotate-90 origin-left translate-x-3 text-[10px] tracking-[0.5em] uppercase text-studio-white/40">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
