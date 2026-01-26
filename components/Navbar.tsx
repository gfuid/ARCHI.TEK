
import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-studio-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Magnetic strength={0.2}>
          <a href="#" className="text-2xl font-bold tracking-[0.2em] hover:text-studio-gold transition-colors block">
            ARCHI<span className="text-studio-gold">.</span>TEK
          </a>
        </Magnetic>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase items-center">
          {['Portfolio', 'Studio', 'AI Consult', 'Contact'].map((item) => (
            <Magnetic key={item} strength={0.3}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-studio-gold transition-colors px-2 py-1"
              >
                {item}
              </a>
            </Magnetic>
          ))}
        </div>

        <button className="md:hidden text-studio-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
