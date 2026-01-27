
import React from 'react';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-houzz-dark text-white pt-32 pb-8 overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-houzz-sage/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter leading-none mb-4">
                DEI<span className="text-houzz-gold">23</span>SIGN <br />
                <span className="text-houzz-sage/80 uppercase text-3xl md:text-5xl tracking-[0.2em] font-sans font-bold">HOUZZ</span>
              </h2>
              <div className="w-24 h-1 bg-houzz-gold mb-6"></div>
              <p className="text-houzz-sage font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
                Evokes Trust & Stability
              </p>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Architectural excellence rooted in precision and transparency. Transforming visions into structural reality since 2023.
            </p>
          </div>

          {/* Navigation and Services Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-houzz-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#site-pics" className="hover:text-white transition-colors">Site Progress</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Studio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-houzz-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>Construction</li>
                <li>Interior Work</li>
                <li>Turnkey Projects</li>
                <li>Renovation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-houzz-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
              <div className="space-y-6 text-sm text-white/60">
                <p>
                  Sector 23, Gurugram,<br />
                  Haryana, India
                </p>
                <a href="mailto:info@deisignhouzz.com" className="block hover:text-white transition-colors underline decoration-houzz-gold/30 underline-offset-4">
                  info@deisignhouzz.com
                </a>
                <p className="text-white font-bold">+91 999 000 0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8 text-[10px] font-bold tracking-widest text-white/20 uppercase">
            <p>© 2024 DEI 23 SIGN HOUZZ</p>
            <span className="w-1 h-1 bg-houzz-gold rounded-full"></span>
            <p>Built with Precision</p>
          </div>
          
          <div className="flex space-x-6">
            {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-houzz-gold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Curved Element at the bottom (inverted) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-1 bg-houzz-gold/20 blur-sm"></div>
    </footer>
  );
};

export default Footer;
