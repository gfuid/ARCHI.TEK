import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'pmc-works',
    title: 'PMC Works',
    desc: 'Professional Project Management Consultancy focusing on quality, safety, and cost control.',
    image: 'https://i.pinimg.com/736x/80/85/ce/8085cec34b5927bcfa6d10e5cdc67989.jpg',
    longDesc: 'Specialized site audits, safety protocols, and risk management led by our engineering team to ensure timely project delivery.'
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    desc: 'Bespoke luxury home building with a focus on structural stability and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    longDesc: 'Led by M.Tech Structural Engineers, our residential projects prioritize seismic stability and premium aesthetics from excavation to handover.'
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    desc: 'Scalable structural solutions for corporate hubs, retail spaces, and industrial units.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
    longDesc: 'We deliver commercial spaces that evoke trust. Our team handles complex glazing and large-span structural elements with rapid deployment.'
  },
  {
    id: 'interior-work',
    title: 'Interior Work',
    desc: 'Premium interior fit-outs and turnkey finishing for residential and commercial interiors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
    longDesc: 'Bespoke interior solutions including modular kitchens, custom lighting design, and high-end wood finishes.'
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    desc: 'Full-service management from the first brick to the final key handover.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
    longDesc: 'Complete peace of mind. We manage procurement, site supervision, and rigorous quality audits throughout the construction lifecycle.'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Modernizing existing structures with a focus on structural retrofitting and new aesthetics.',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1200',
    longDesc: 'Specializing in structural strengthening and modernizing outdated layouts to meet contemporary architectural standards.'
  },
  {
    id: 'planning-layout',
    title: 'Planning Layout 2D',
    desc: 'Precision architectural mapping and scientific space planning for optimized living.',
    image: 'https://i.pinimg.com/1200x/9f/16/9c/9f169c8f1a3b40629e5302ace1884db9.jpg',
    longDesc: 'Technical 2D mapping adhering to local building codes to ensure space efficiency and smooth project approval.'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    desc: 'Immersive 3D renders that allow you to walk through your project before construction.',
    image: 'https://i.pinimg.com/736x/b7/92/63/b792630e90054df317d01f7d665184e8.jpg',
    longDesc: 'High-fidelity rendering by Suraj Kumar that visualizes every texture and light detail before a single brick is laid.'
  },

];

const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Esc key to close drawer
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="services" className="py-32 bg-[#F8F7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Engineering Excellence
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif text-[#111111] mb-6 tracking-tight uppercase">SERVICES</h2>
          <div className="w-20 h-[1px] bg-[#C5A059] mx-auto opacity-50"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(service)}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative h-[480px] bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
            >
              <div className="flex flex-col h-full items-center justify-center p-12 text-center relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-5 tracking-tight uppercase group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <div className="w-10 h-[1.5px] bg-[#C5A059] mb-8 group-hover:bg-white transition-all duration-500"></div>
                <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] group-hover:text-white transition-colors">
                  Read Analysis <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Background Overlay */}
              <div className={`absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeIdx === idx ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="absolute inset-0 bg-[#111111]/80 z-10 backdrop-blur-[2px]"></div>
                <img src={service.image} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={service.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SIDE DRAWER --- */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-[#111111]/60 z-[120] backdrop-blur-md"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 h-full w-full md:w-[550px] bg-white z-[130] shadow-2xl p-12 flex flex-col"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="flex items-center gap-3 text-[#111111] hover:text-[#C5A059] transition-all mb-12 group w-fit"
              >
                <div className="p-2 rounded-full border border-gray-100 group-hover:border-[#C5A059]/30 group-hover:-translate-x-1 transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Expertise</span>
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div className="h-72 w-full mb-10 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
                </div>

                <span className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block underline underline-offset-8 decoration-[#C5A059]/20">
                  Specialization Detail
                </span>

                <h3 className="text-4xl md:text-5xl font-serif text-[#111111] mb-8 uppercase leading-tight">
                  {selectedService.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm mb-12 italic border-l-2 border-[#C5A059]/30 pl-6">
                  {selectedService.longDesc}
                </p>

                <div className="space-y-6 pt-10 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">Structural Standards</h4>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-sm">
                    <div className="w-1 h-full bg-[#C5A059]"></div>
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                      All projects are supervised by <strong>M.Tech Structural Engineers</strong> to ensure maximum safety and cost optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12">
                <a href="/contact" onClick={() => setSelectedService(null)}>
                  <button className="w-full bg-[#111111] text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-500 shadow-xl shadow-black/10">
                    Get Inquiry & Quote
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;