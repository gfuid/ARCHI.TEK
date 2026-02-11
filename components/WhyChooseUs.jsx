import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Coins, HardHat } from 'lucide-react'; // Humne lucide-react install kiya hai
import i2 from './../assets/i2.png'
const ROLES = [
  {
    title: "Project Planning",
    desc: "Scientific scheduling and resource optimization for timely project delivery.",
    icon: <Ruler className="w-6 h-6" />
  },
  {
    title: "Cost Management",
    desc: "Transparent budgeting and cost control to ensure maximum financial efficiency.",
    icon: <Coins className="w-6 h-6" />
  },
  {
    title: "Quality & Safety",
    desc: "Strict quality control and safety protocols led by M.Tech Structural Engineers.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Risk Management",
    desc: "Proactive identification of site challenges to ensure structural stability.",
    icon: <HardHat className="w-6 h-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Commitment</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#111111] mb-8 leading-tight">
              Precision Engineering, <span className="italic text-[#C5A059]">Seamless</span> Execution.
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-lg">
              We focus on structural integrity and stakeholder coordination to transform architectural visions into reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ROLES.map((role, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full text-[#C5A059] mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                    {role.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#111111]">
                    {role.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Technical Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm relative z-10 shadow-2xl">
              <img
                src={i2}
                alt="Engineering Precision"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Aesthetic Gold Accent Line */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C5A059]/20 z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;