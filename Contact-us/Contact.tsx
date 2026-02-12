import React from 'react';
import { motion } from 'framer-motion';
// Isse replace karein
import Magnetic from "../components/Magnetic";

const Contact: React.FC = () => {
  return (
    <section id="contact-us" className="py-20 bg-houzz-dark text-white overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Side: Contact Info & Branding */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's Build Your <span className="italic text-houzz-gold">Vision</span>.</h2>

              <div className="space-y-8 mt-12">
                {/* Qualification Badge - From Notes */}
                <div className="flex items-start space-x-4 border-l border-houzz-gold/30 pl-6">
                  <div>
                    <h4 className="text-houzz-gold font-bold uppercase tracking-widest text-[10px] mb-1">Expert Consultation</h4>
                    <p className="text-sm text-gray-400">Discuss your project with M.Tech Structural Engineers having 10+ years of site experience.</p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="space-y-4">
                  <p className="text-gray-400 text-xs uppercase tracking-widest">Office Hours: Mon - Sat (9AM - 7PM)</p>
                  <div className="text-2xl font-serif hover:text-houzz-gold transition-colors cursor-pointer">
                    +91 999 000 0000
                  </div>
                  <div className="text-2xl font-serif hover:text-houzz-gold transition-colors cursor-pointer">
                    info@yourconstruction.com
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-sm text-houzz-dark"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-houzz-gold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gray-200 py-2 focus:border-houzz-gold outline-none transition-colors" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Service Required</label>
                <select className="w-full border-b border-gray-200 py-2 focus:border-houzz-gold outline-none bg-transparent cursor-pointer">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior & Fit-out</option>
                  <option>Planning Layout (2D/3D)</option>
                  <option>PMC Consultancy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Project Brief</label>
                <textarea rows={4} className="w-full border border-gray-100 p-4 focus:border-houzz-gold outline-none transition-colors resize-none bg-gray-50" placeholder="Tell us about your project..."></textarea>
              </div>

              <Magnetic strength={0.2}>
                <button className="w-full bg-houzz-dark text-white py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-houzz-gold transition-all duration-500">
                  Send Inquiry
                </button>
              </Magnetic>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;