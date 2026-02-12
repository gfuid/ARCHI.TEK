import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    desc: 'Bespoke luxury home building with a focus on structural stability and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    longDesc: 'Our residential wing is led by M.Tech Structural Engineers, ensuring that your dream home is as stable as it is beautiful. We manage the entire lifecycle from excavation to the final coat of paint.'
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    desc: 'Scalable structural solutions for corporate hubs, retail spaces, and industrial units.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
    longDesc: 'We deliver commercial spaces that evoke trust and stability. Our team handles complex glazing, large-span structural elements, and rapid deployment schedules.'
  },
  {
    id: 'interior-work',
    title: 'Interior Work',
    desc: 'Premium interior fit-outs and turnkey finishing for residential and commercial interiors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
    longDesc: 'From custom modular kitchens to bespoke false ceiling designs and premium wood finishes, we transform raw structures into luxury experiences.'
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    desc: 'Full-service management from the first brick to the final key handover.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
    longDesc: 'Groundbreaking to finishing—we take the stress out of building. Our turnkey solutions cover procurement, site supervision, and rigorous quality control.'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Modernizing existing structures with a focus on structural retrofitting and new aesthetics.',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1200',
    longDesc: 'Breathing new life into old spaces. We specialize in structural strengthening (retrofitting) and modernizing outdated architectural layouts.'
  },
  {
    id: 'planning-layout',
    title: 'Planning Layout 2D',
    desc: 'Precision architectural mapping and scientific space planning for optimized living.',
    image: 'https://i.pinimg.com/1200x/9f/16/9c/9f169c8f1a3b40629e5302ace1884db9.jpg',
    longDesc: 'Technical 2D mapping that maximizes space efficiency and adheres to local building codes, ensuring a smooth approval and construction process.'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    desc: 'Immersive 3D renders that allow you to walk through your project before construction.',
    image: 'https://i.pinimg.com/736x/b7/92/63/b792630e90054df317d01f7d665184e8.jpg',
    longDesc: 'Our visualization team, led by Suraj Kumar, utilizes high-fidelity rendering to help you visualize every texture, light, and corner of your future project.'
  },
  {
    id: 'pmc-works',
    title: 'PMC Works',
    desc: 'Professional Project Management Consultancy focusing on quality, safety, and cost control.',
    image: 'https://i.pinimg.com/736x/80/85/ce/8085cec34b5927bcfa6d10e5cdc67989.jpg',
    longDesc: 'Our PMC division specializes in site audits, safety protocols, risk management, and stakeholder coordination to ensure your project is delivered on time.'
  }
];

const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <section id="services" className="py-32 bg-[#F8F7F2] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-6 tracking-tight uppercase">SERVICES</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service)}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative h-[450px] bg-white overflow-hidden border border-gray-100 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl"
            >
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight uppercase group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C5A059] mb-6 group-hover:bg-white transition-colors duration-500"></div>
                <p className="max-w-xs text-xs text-gray-500 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                  {service.desc}
                </p>
                <button className="mt-8 text-[10px] font-bold uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059] py-1 group-hover:text-white group-hover:border-white transition-all">
                  Read More
                </button>
              </div>

              <div className={`absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeIdx === idx ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="absolute inset-0 bg-black/70 z-10"></div>
                <img src={service.image} className="absolute inset-0 w-full h-full object-cover" alt={service.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SIDE DETAIL DRAWER --- */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white z-[70] shadow-2xl p-10 flex flex-col"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-8 left-8 text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mt-16 flex-1 overflow-y-auto custom-scrollbar pr-4">
                <div className="h-64 w-full mb-8 overflow-hidden rounded-sm">
                  <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
                </div>
                <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Specialization</span>
                <h3 className="text-4xl font-serif text-[#1A1A1A] mb-6 uppercase">{selectedService.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  {selectedService.longDesc}
                </p>

                <div className="space-y-4 border-t border-gray-100 pt-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Ready to start?</h4>
                  <p className="text-xs text-gray-400 italic">"Engineering stability with 10+ years of excellence."</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <a href="/contact" onClick={() => setSelectedService(null)}>
                  <button className="w-full bg-[#1A1A1A] text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all duration-500 rounded-sm">
                    Inquire Now & Get Quote
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