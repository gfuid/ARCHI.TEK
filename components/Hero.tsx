import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    title: 'Interior Mastery',
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    title: 'Turnkey Design',
  }
];

// Client ke notes se liye gaye 8 names
const CLIENT_SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Work",
  "Turnkey Projects",
  "Renovation",
  "Planning Layout 2D/3D",
  "3D Visualization",
  "PMC Works"
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 right-0 h-[65%] bg-houzz-sage/20 z-0 origin-top"></div>

      {/* Image Slider */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-75">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover grayscale brightness-110"
            />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 text-center w-full">


        {/* --- INFINITE AUTO-SLIDER (MARQUEE) --- */}
        <div className="relative flex overflow-x-hidden border-y border-houzz-gold/20 py-6 bg-white/50 backdrop-blur-sm mt-[450px]">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Array ko 2 baar repeat kiya taaki seamless loop bane */}
            {[...CLIENT_SERVICES, ...CLIENT_SERVICES].map((service, index) => (
              <React.Fragment key={index}>
                <span className="mx-8 text-houzz-dark font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase hover:text-houzz-gold transition-colors cursor-default">
                  {service}
                </span>
                <span className="text-houzz-gold/40">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 z-30 animate-bounce">
        <a href="#services" className="text-houzz-gold">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;