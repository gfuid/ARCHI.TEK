import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const PREVIEW_IMAGES = [
  { title: "Residential", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" },
  { title: "Commercial", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400" },
  { title: "Interior", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
        }`}
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

        {/* Logo Section */}
        <div className="z-[110]">
          <Magnetic strength={0.2}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="Logo"
                className={`w-auto transition-all duration-700 ease-in-out origin-left ${isScrolled
                    ? 'h-10 md:h-12 scale-100' // Scrolled size
                    : 'h-14 md:h-20 scale-110' // Initial size (Increased for mobile)
                  }`}
              />
            </Link>
          </Magnetic>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-[11px] font-bold tracking-[0.2em] uppercase items-center">
          <div
            className="relative py-2 cursor-pointer group"
            onMouseEnter={() => setShowMegaMenu(true)}
          >
            <span className="hover:text-houzz-gold transition-colors">Services</span>
            <motion.div
              className={`absolute bottom-0 left-0 h-[1px] bg-houzz-gold transition-all duration-300 ${showMegaMenu ? 'w-full' : 'w-0'}`}
            />
          </div>
          <Link to="/site-pics" className="hover:text-houzz-gold transition-colors">Site Pics</Link>
          <Link to="/about" className="hover:text-houzz-gold transition-colors">About</Link>

          <Magnetic strength={0.2}>
            <Link to="/contact">
              <button className="bg-houzz-dark text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-houzz-gold transition-all duration-500 rounded-sm">
                Contact-us
              </button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden z-[110] text-houzz-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[105] flex flex-col justify-center px-10 space-y-8"
            >
              <div className="flex flex-col space-y-6 text-2xl font-serif text-houzz-dark">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-houzz-gold">Home</Link>
                <Link to="/site-pics" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-houzz-gold">Site Pics</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-houzz-gold">About</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-houzz-gold">Contact Us</Link>
              </div>
              <div className="pt-10 border-t border-gray-100">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Engineering Excellence</p>
                <p className="text-sm italic mt-2 text-houzz-gray">Backed by M.Tech expertise & 10+ years of stability.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega Menu Dropdown (Desktop Only) */}
        <AnimatePresence>
          {showMegaMenu && !isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-12 px-6 overflow-hidden md:block hidden"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                {PREVIEW_IMAGES.map((img, i) => (
                  <motion.div key={i} className="group/item cursor-pointer">
                    <div className="relative overflow-hidden aspect-[4/5] mb-4">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-700" />
                    </div>
                    <p className="text-[10px] font-bold tracking-widest text-houzz-gray group-hover/item:text-houzz-gold transition-colors">{img.title}</p>
                  </motion.div>
                ))}
                <div className="flex flex-col justify-center border-l border-gray-100 pl-8">
                  <h4 className="font-serif text-2xl mb-4 text-houzz-dark">Expert Engineering</h4>
                  <p className="text-xs text-houzz-gray leading-relaxed mb-6 italic">10+ years of structural stability expertise.</p>
                  <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-houzz-gold">Explore All Services →</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;