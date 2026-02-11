import React, { useState } from 'react';

const SERVICES = [
  {
    id: 'residential-commercial',
    title: 'Construction',
    desc: 'Expertise in both Residential and Commercial construction with a focus on structural integrity and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'interior-works',
    title: 'Interior & Fit-Out',
    desc: 'Premium interior works and turnkey fit-outs designed to transform spaces into luxury experiences.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    desc: 'Comprehensive end-to-end management from groundbreaking to the final finishing touches.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'planning-visualization',
    title: '2D & 3D Visualization',
    desc: 'Precision 2D Planning Layouts and immersive 3D Visualizations to see your project before it’s built.',
    image: 'https://images.unsplash.com/photo-1503387762-592f2416460a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'pmc-works',
    title: 'PMC Works',
    desc: 'Professional Project Management Consultancy ensuring quality, safety, and timely delivery of your projects.',
    image: 'https://images.unsplash.com/photo-1503387762-592f2416460a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Modernizing existing structures with the latest architectural standards and high-quality materials.',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'Residential Construction',
    title: 'Residential Construction',
    desc: 'Expertise in building luxurious and structurally sound residential properties tailored to your lifestyle.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-[#F8F7F2]"> {/* Subtle off-white for premium feel */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-6">SERVICES</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* 3 columns for better visibility */}
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative h-[450px] bg-white overflow-hidden border border-gray-100 transition-all duration-700 cursor-pointer"
            >
              <div className="flex flex-col h-full items-center justify-center p-10 text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 tracking-tight uppercase group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C5A059] mb-6 group-hover:bg-white transition-colors duration-500"></div>
                <p className="max-w-xs text-sm text-gray-500 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Background Reveal Logic */}
              <div
                className={`absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeIdx === idx ? 'translate-y-0' : 'translate-y-full'
                  }`}
              >
                <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark overlay for text readability */}
                <img
                  src={service.image}
                  className="absolute inset-0 w-full h-full object-cover"
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