import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../components/Magnetic';

const ContactSection: React.FC = () => {
  return (
    <section id="contact-us" className="py-24 bg-white text-[#111111] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Side: Direct Connect & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-[#111111]">
              Let's Build Your <span className="italic text-[#C5A059]">Vision</span> Into Reality.
            </h2>

            <div className="space-y-10 mt-12">
              {/* Engineering Badge from Team Profile */}
              <div className="flex items-start space-x-6 border-l border-[#C5A059]/30 pl-6">
                <div>
                  <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px] mb-2">Technical Consultation</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Discuss your project with our M.Tech Structural Engineering team for stability and cost optimization.
                  </p>
                </div>
              </div>

              {/* Direct Details with darker text for visibility */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1 font-bold">Office Location</p>
                  <p className="text-lg font-serif text-[#111111]">Sector 23, Gurugram, Haryana</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1 font-bold">Direct Line</p>
                  <p className="text-2xl font-serif text-[#C5A059]">+91 999 000 0000</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1 font-bold">Official Inquiry</p>
                  <p className="text-lg font-serif text-[#111111]">info@deisignhouzz.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Inquiry Form with subtle shadow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-sm text-[#111111] shadow-sm border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none transition-colors bg-transparent text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none transition-colors bg-transparent text-sm" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                <select className="w-full border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none bg-transparent cursor-pointer font-medium text-sm text-[#111111]">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior & Fit-out</option>
                  <option>Planning Layout (2D/3D)</option>
                  <option>PMC Consultancy</option>
                  <option>Turnkey Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Brief</label>
                <textarea rows={4} className="w-full border border-gray-200 p-4 focus:border-[#C5A059] outline-none transition-colors resize-none bg-white text-sm" placeholder="Tell us about your project location and requirements..."></textarea>
              </div>

              <Magnetic strength={0.2}>
                <button className="w-full bg-[#111111] text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#C5A059] transition-all duration-500 rounded-sm">
                  Send Inquiry Request
                </button>
              </Magnetic>
              <p className="text-center text-[9px] text-gray-400 uppercase tracking-widest mt-4">
                Quality • Safety • Stability
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;