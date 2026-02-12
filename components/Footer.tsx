import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  // Client ke notes se 8 services
  const EXPERTISE = [
    { name: "Residential Construction", link: "/residential" },
    { name: "Commercial Construction", link: "/commercial" },
    { name: "Interior & Fit-out", link: "/interior" },
    { name: "Turnkey Projects", link: "/turnkey" },
    { name: "Renovation", link: "/renovation" },
    { name: "Planning Layout 2D", link: "/planning" },
    { name: "3D Visualization", link: "/visualization" },
    { name: "PMC Works", link: "/pmc" }
  ];

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Subtle Glow Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Brand & Identity Column - Text Removed, Only Logo */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            <Magnetic strength={0.1}>
              <Link to="/">
                <img
                  src={logo}
                  alt="DEI 23 SIGN HOUZZ"
                  className="h-24 md:h-32 w-auto mb-8  "
                />
              </Link>
            </Magnetic>
            <p className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">
              Led by M.Tech Structural Engineers
            </p>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm italic border-l border-[#C5A059]/30 pl-4">
              "Engineering stability with 10+ years of excellence in construction and luxury interior works."
            </p>
          </div>

          {/* Navigation & Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/60 font-medium">
                <li><Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link></li>
                <li><Link to="/site-pics" className="hover:text-[#C5A059] transition-colors">Site Progress</Link></li>
                <li><Link to="/about" className="hover:text-[#C5A059] transition-colors">About Studio</Link></li>
                <li><Link to="/contact" className="hover:text-[#C5A059] transition-colors">Get Inquiry</Link></li>
              </ul>
            </div>

            {/* All 8 Services from Notebook */}
            <div className="sm:col-span-2">
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {EXPERTISE.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-xs text-white/50 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-[#C5A059]/40 rounded-full mr-2 group-hover:bg-[#C5A059] transition-colors"></span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Contact Strip & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5 mb-12">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2 font-bold">Office Address</span>
            <p className="text-sm text-white/80">Sector 23, Gurugram, Haryana, India</p>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2 font-bold">Direct Line</span>
            <p className="text-xl font-serif text-[#C5A059]">+91 999 000 0000</p>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2 font-bold">Official Inquiries</span>
            <a href="mailto:info@deisignhouzz.com" className="text-sm text-white/80 hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/30 underline-offset-4">
              info@deisignhouzz.com
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-6 text-[10px] font-bold tracking-widest text-white/20 uppercase">
            <p>© 2026 DEI 23 SIGN HOUZZ</p>
            <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
            <p>Built with Engineering Precision</p>
          </div>

          <div className="flex space-x-8">
            {['Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
              <Magnetic key={social} strength={0.2}>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#C5A059] transition-colors">
                  {social}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;