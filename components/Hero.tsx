
import React, { useState, useEffect } from 'react';
//import logo from '../assets/logo.png';

const SLIDES = [
  // {
  //   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
  //   title: 'Precision Build',
  // },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    title: 'Interior Mastery',
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    title: 'Turnkey Design',
  }
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
      {/* Curved Sage Background (Matches the card) */}
      <div className="absolute top-0 left-0 right-0 h-[65%] bg-houzz-sage curved-bg z-0 origin-top"></div>

      {/* Image Slider - Light/Transparent Treatment */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-40">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === current ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-houzz-sage/50 to-white/95"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover grayscale brightness-110"
            />
          </div>
        ))}
      </div>

      <div className="relative z-30 text-center px-6 max-w-4xl">
        {/* <div className="mb-8 inline-block animate-fade-in"> */}
        {/* Official Brand Logo Replacement */}
        {/* <div className="mb-12 flex flex-col items-center">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-32 md:h-48 w-auto transition-transform duration-500 hover:scale-105"
            />

          </div> */}

        {/* <div className="w-48 h-[3px] bg-houzz-gold mx-auto mb-8"></div> */}
        {/* </div> */}

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-houzz-dark font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase animate-slide-up">
          <span className="hover:text-houzz-gold transition-colors cursor-default">Construction</span>
          <span className="hidden md:block text-houzz-gold/40">•</span>
          <span className="hover:text-houzz-gold transition-colors cursor-default">Interior Work</span>
          <span className="hidden md:block text-houzz-gold/40">•</span>
          <span className="hover:text-houzz-gold transition-colors cursor-default">Turnkey Projects</span>
          <span className="hidden md:block text-houzz-gold/40">•</span>
          <span className="hover:text-houzz-gold transition-colors cursor-default">Renovation</span>
        </div>
      </div>

      <div className="absolute bottom-12 z-30 animate-bounce">
        <a href="#services" className="text-houzz-gold hover:text-houzz-dark transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
