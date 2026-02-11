import React from 'react';
import Magnetic from './Magnetic';
import logo from "./../assets/logo.png"

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-white pt-32 pb-8 overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand Identity Column */}
          <div className="lg:col-span-5">
            <div className="mb-8 flex flex-col items-start">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto mb-6 brightness-0 invert" // Ensures logo shows white
              />
              <h2 className="text-4xl font-serif font-bold tracking-tighter leading-none mb-4 text-white">
                DEI<span className="text-[#C5A059]">23</span>SIGN <br />
                <span className="text-white/90 uppercase text-3xl tracking-[0.2em] font-sans font-bold">HOUZZ</span>
              </h2>
              <div className="w-24 h-1 bg-[#C5A059] mb-6"></div>
              <p className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
                Led by M.Tech Structural Engineers
              </p>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed text-sm italic">
              "Engineering stability with 10+ years of excellence in construction and luxury interior works."
            </p>
          </div>

          {/* Navigation and Services Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
                <li><a href="#site-pics" className="hover:text-[#C5A059] transition-colors">Site Progress</a></li>
                <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Studio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li>Residential & Commercial</li>
                <li>Turnkey Projects</li>
                <li>2D/3D Planning Layout</li>
                <li>PMC Works</li>
                <li>Renovation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
              <div className="space-y-6 text-sm text-white/70">
                <p className="leading-relaxed">
                  Sector 23, Gurugram,<br />
                  Haryana, India
                </p>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase text-[#C5A059]/80 font-bold">Direct Line</p>
                  <p className="text-white font-bold text-xl">+91 999 000 0000</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase text-[#C5A059]/80 font-bold">Inquiries</p>
                  <a href="mailto:info@deisignhouzz.com" className="block text-white hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/50 underline-offset-4">
                    info@deisignhouzz.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8 text-[10px] font-bold tracking-widest text-white/40 uppercase">
            <p>© 2026 DEI 23 SIGN HOUZZ</p>
            <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></span>
            <p>Designed by Ar. Team</p>
          </div>

          <div className="flex space-x-8">
            {['Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
              <Magnetic key={social} strength={0.2}>
                <a
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#C5A059] transition-colors"
                >
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