
import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import logo from '../assets/logo.jpeg';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Magnetic strength={0.2}>
          <a href="#" className="flex items-center group">
            <img
              src={logo}
              alt="Logo"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'
                }`}
            />
          </a>
        </Magnetic>

        <div className="hidden md:flex space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase items-center">
          {['Services', 'Site Pics', 'About', 'Contact'].map((item) => (
            <Magnetic key={item} strength={0.3}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-houzz-dark/60 hover:text-houzz-gold transition-colors px-2 py-1"
              >
                {item}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic strength={0.2}>
          <button className="hidden lg:block bg-houzz-gold text-white px-8 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-houzz-dark shadow-lg shadow-houzz-gold/20">
            Consult Now
          </button>
        </Magnetic>

        <button className="md:hidden text-houzz-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
