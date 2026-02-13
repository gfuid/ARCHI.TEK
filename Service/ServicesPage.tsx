import React from 'react';
import { motion } from 'framer-motion';
import {
  Home, Building2, Paintbrush, Key,
  RotateCcw, Layout, Box, Briefcase
} from 'lucide-react';

const ALL_SERVICES = [
  {
    title: "Residential Construction",
    icon: <Home className="w-8 h-8" />,
    desc: "Luxury home building with structural stability led by M.Tech Engineers.",
    features: ["Foundation Engineering", "Superstructure", "Luxury Finishing"]
  },
  {
    title: "Commercial Construction",
    icon: <Building2 className="w-8 h-8" />,
    desc: "High-performance structures for corporate hubs and retail spaces.",
    features: ["Large Span Structures", "Modern Glazing", "Rapid Deployment"]
  },
  {
    title: "Interior Work",
    icon: <Paintbrush className="w-8 h-8" />,
    desc: "Turnkey interior fit-outs with premium finishes and modular solutions.",
    features: ["Modular Kitchens", "False Ceilings", "Bespoke Furniture"]
  },
  {
    title: "Turnkey Projects",
    icon: <Key className="w-8 h-8" />,
    desc: "End-to-end responsibility from groundbreaking to key handover.",
    features: ["Procurement", "Site Supervision", "Quality Audits"]
  },
  {
    title: "Renovation",
    icon: <RotateCcw className="w-8 h-8" />,
    desc: "Modernizing existing structures with structural retrofitting.",
    features: ["Retrofitting", "Layout Upgrades", "Aesthetic Overhaul"]
  },
  {
    title: "Planning Layout 2D",
    icon: <Layout className="w-8 h-8" />,
    desc: "Scientific space planning and precision architectural mapping.",
    features: ["Vastu Compliance", "Code Approval", "Space Optimization"]
  },
  {
    title: "3D Visualization",
    icon: <Box className="w-8 h-8" />,
    desc: "High-fidelity 3D renders to walk through your vision before building.",
    features: ["Photorealistic Renders", "Walkthroughs", "Material Simulation"]
  },
  {
    title: "PMC Works",
    icon: <Briefcase className="w-8 h-8" />,
    desc: "Professional Project Management Consultancy for complete control.",
    features: ["Cost Management", "Risk Assessment", "Quality Control"]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white pt-40">
      {/* Header Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Our Full Spectrum</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#111111] leading-tight mb-8">
            Engineering <span className="italic text-[#C5A059]">Excellence</span>.
          </h1>
          <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
            Integrating 10+ years of site stability expertise with advanced M.Tech structural insights to deliver landmarks that last.
          </p>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {ALL_SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border-t border-gray-100 pt-8"
            >
              <div className="text-[#C5A059] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-[#111111] mb-4 uppercase tracking-tight group-hover:text-[#C5A059] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/40 flex items-center">
                    <span className="w-1 h-1 bg-[#C5A059] rounded-full mr-2"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Roles Highlight */}
      <section className="bg-[#111111] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-12">The Engineering Process Behind Every Project</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Project Planning</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Cost Management</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Quality Control</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Risk Management</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;