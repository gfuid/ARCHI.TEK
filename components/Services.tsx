
import React, { useState } from 'react';
import Magnetic from './Magnetic';

const SERVICES = [
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    desc: 'Scalable structural solutions and high-specification builds designed for operational excellence and long-term asset value.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'interior-fitout',
    title: 'Interior & Fit-Out',
    desc: 'Bespoke interior architecture and turnkey fit-outs that harmonize workplace ergonomics with premium brand aesthetics.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'interior',
    title: 'Interior Work',
    desc: 'High-end interior transformations that evoke luxury and comfort.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    desc: 'End-to-end management ensuring seamless delivery of complex projects.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Breathe new life into existing structures with modern architectural standards.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'luxury-residential',
    title: 'Residential Development',
    desc: 'High-end residential construction specializing in custom estates and sophisticated multi-family dwellings with a focus on sustainable luxury.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-houzz-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif text-houzz-dark mb-6">SERVICES</h2>
          <div className="w-20 h-1 bg-houzz-sage mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative h-96 bg-white overflow-hidden border border-houzz-sage/20 transition-all duration-700 cursor-pointer rounded-sm"
            >
              <div className="flex flex-col h-full items-center justify-center p-12 text-center relative z-10 transition-colors group-hover:text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tighter uppercase transition-transform group-hover:scale-110">
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-houzz-gold mb-6 group-hover:bg-white transition-colors"></div>
                <p className="max-w-xs text-sm text-houzz-gray group-hover:text-white/80 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Hover Image Reveal */}
              <div className={`absolute inset-0 bg-houzz-dark z-0 transform transition-transform duration-1000 ease-in-out ${activeIdx === idx ? 'translate-y-0' : 'translate-y-full'}`}>
                <img
                  src={service.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
