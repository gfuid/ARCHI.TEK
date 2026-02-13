import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[90px] md:h-[120px]">

          {/* Logo Section - Centered on Mobile, Left on Desktop */}
          <div className="z-[110] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Magnetic strength={0.1}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="DEI 23 SIGN HOUZZ"
                  // Increased mobile height to 85px for better visibility
                  className="h-[85px] md:h-[140px] w-auto object-contain transition-all"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-[14px] font-bold tracking-[0.2em] uppercase">
            <Link to="/services" className="text-black hover:text-[#C5A059] transition-colors">Services</Link>
            <Link to="/site-pics" className="text-black hover:text-[#C5A059] transition-colors">Site Pics</Link>
            <Link to="/about" className="text-black hover:text-[#C5A059] transition-colors">About</Link>
            <Link to="/key-role" className="text-black hover:text-[#C5A059] transition-colors">Key Role</Link>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <Link to="/contact">
                <button className="bg-[#111111] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all rounded-sm">
                  Contact Us
                </button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Toggle Button - Placed at the end */}
          <button
            className="md:hidden z-[110] ml-auto p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Slide Menu - Fixed Visibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Lock: Isse piche ka content scroll nahi hoga aur gaps nahi dikhenge */}
            <style>{`body { overflow: hidden; }`}</style>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              // !bg-white gaps ko fill karega aur z-[9999] sabse upar rahega
              className="fixed inset-0 w-screen h-screen !bg-white z-[9999] flex flex-col"
            >
              {/* Mobile Header: Logo and Close Button inside the white menu to hide gaps */}
              <div className="flex items-center justify-between px-6 h-[80px] border-b border-gray-50">
                <img src={logo} alt="Logo" className="h-[50px] w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-black"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links Section */}
              <div className="flex flex-col px-8 pt-10 space-y-6">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Site Pics", path: "/site-pics" },
                  { name: "About", path: "/about" },
                  { name: "Key Role", path: "/key-role" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-4xl font-serif text-[#111111] border-b border-gray-100 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  className="text-[#C5A059] text-lg uppercase font-sans font-bold tracking-[0.2em] pt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-auto p-8 bg-gray-50/50">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">
                  Led by M.Tech Engineers
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;