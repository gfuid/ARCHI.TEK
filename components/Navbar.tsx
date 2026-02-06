
import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

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
    // ... rest of the code remains the same

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
      {/* 1. Added 'relative' to the container to allow absolute positioning for the mobile button */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center relative">

        <Magnetic strength={0.2}>
          {/* 2. Added 'md:origin-left' so it scales from the corner on desktop but the center on mobile */}
          <a href="#" className="flex items-center group">
            <img
              src={logo}
              alt="Logo"
              className={`h-16 w-auto transition-all duration-500 ease-in-out origin-center md:origin-left ${isScrolled ? 'scale-100' : 'scale-[1.8] md:scale-[2.2]'
                }`}
            />
          </a>
        </Magnetic>

        {/* Desktop Navigation (Stays hidden on mobile) */}
        <div className="hidden md:flex space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase items-center">
          {['Services', 'Site Pics', 'About', 'Contact'].map((item) => (
            <Magnetic key={item} strength={0.3}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="...">
                {item}
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Consult Button (Hidden on mobile) */}
        <Magnetic strength={0.2}>
          <button className="hidden lg:block ...">
            Consult Now
          </button>
        </Magnetic>

        {/* 3. Mobile Menu Button - Added 'absolute right-6' to keep it at the edge while logo centers */}
        <button className="md:hidden text-houzz-dark absolute right-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
