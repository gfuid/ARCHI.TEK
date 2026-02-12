import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 'bg-white' and 'py-4' are now fixed (static)
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo Section - Static Size */}
        <div className="z-[110] flex items-center">
          <Magnetic strength={0.1}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="DEI 23 SIGN HOUZZ"
                /* 1. 'w-auto' zaroori hai taaki width height ke sath adjust ho sake.
                   2. Mobile height 'h-14' (56px) rakhi hai.
                   3. Desktop height 'md:h-24' (96px) rakhi hai jo clear visibility degi.
                */
                className="h-14 md:h-24 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </Magnetic>
        </div>

        {/* Desktop Navigation - Static Colors */}
        <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold tracking-[0.2em] uppercase">
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

          <Magnetic strength={0.2}>
            <Link to="/contact">
              <button className="bg-[#111111] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-500 rounded-sm">
                Contact Us
              </button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle Button - Fixed Color */}
        <button
          className="md:hidden z-[110] p-2 ml-auto text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[105] flex flex-col justify-center px-10 space-y-8"
          >
            <div className="flex flex-col space-y-8 text-3xl font-serif text-[#111111]">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/site-pics" onClick={() => setIsMobileMenuOpen(false)}>Site Pics</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>

            <div className="pt-10 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Led by M.Tech Engineers</p>
              <p className="text-sm italic text-gray-400 mt-2 font-serif">
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