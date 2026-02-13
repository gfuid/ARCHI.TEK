import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Added a fixed height to the flex container to control navbar thickness */}
        <div className="flex items-center justify-between h-[100px] md:h-[120px]">

          {/* Logo Section */}
          <div className="z-[110] flex-shrink-0">
            <Magnetic strength={0.1}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="DEI 23 SIGN HOUZZ"
                  // Kept your requested heights but removed mt-10 which was stretching the nav
                  className="h-[85px] md:h-[140px] w-auto object-contain transition-all duration-300"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Desktop Navigation - Using Flex instead of Absolute for better layout control */}
          <div className="hidden md:flex items-center space-x-10 text-[14px] font-bold tracking-[0.2em] uppercase">
            <Link to="/services" className="text-black hover:text-[#C5A059] transition-colors duration-300">
              Services
            </Link>
            <Link to="/site-pics" className="text-black hover:text-[#C5A059] transition-colors duration-300">
              Site Pics
            </Link>
            <Link to="/about" className="text-black hover:text-[#C5A059] transition-colors duration-300">
              About
            </Link>
            <Link to="/key-role" className="text-black hover:text-[#C5A059] transition-colors duration-300">
              Key Role
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <Link to="/contact">
                <button className="bg-[#111111] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-500 rounded-sm">
                  Contact Us
                </button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[105] flex flex-col justify-center px-10 space-y-8"
          >
            <div className="flex flex-col items-center space-y-8 text-3xl font-serif text-[#111111]">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/site-pics" onClick={() => setIsMobileMenuOpen(false)}>Site Pics</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/key-role" onClick={() => setIsMobileMenuOpen(false)}>Key Role</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>

            <div className="pt-10 border-t border-gray-100 text-center">
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