import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] shadow-sm py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo Section - Centered on Mobile, Left on Desktop */}
          <div className="z-[110] flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Magnetic strength={0.1}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="DEI 23 SIGN HOUZZ"
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Link
              to="/services"
              className="text-black hover:text-[#C5A059] transition-colors duration-300"
            >
              Services
            </Link>

            <Link
              to="/site-pics"
              className="text-black hover:text-[#C5A059] transition-colors duration-300"
            >
              Site Pics
            </Link>

            <Link
              to="/about"
              className="text-black hover:text-[#C5A059] transition-colors duration-300"
            >
              About
            </Link>

            <Link
              to="/key-role"
              className="text-black hover:text-[#C5A059] transition-colors duration-300"
            >
              Key Role
            </Link>


          </div>

          {/* Contact Button - Right Side Desktop */}
          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <Link to="/contact">
                <button className="bg-[#111111] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-500 rounded-sm">
                  Contact Us
                </button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Toggle Button - Right Side */}
          <button
            className="md:hidden z-[110] p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Slide Menu - From Left */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[105] flex flex-col justify-left px-10 space-y-8"
          >
            <div className="flex flex-col items-center space-y-8 text-3xl font-serif text-[#111111]">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/site-pics" onClick={() => setIsMobileMenuOpen(false)}>Site Pics</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/key-role" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>


            <div className="pt-10 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold text-center">Led by M.Tech Engineers</p>
              <p className="text-sm italic text-gray-400 mt-2 font-serif text-center">
                Engineering stability with 10+ years of excellence.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;