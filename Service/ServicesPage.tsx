import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Building2, Paintbrush, Key,
  RotateCcw, Layout, Box, Briefcase,
  ChevronLeft, ChevronRight, X, Images
} from 'lucide-react';

import c1 from '../assets/Commercial/c1.jpeg';
import c2 from '../assets/Commercial/c2.jpeg';
import c3 from '../assets/Commercial/c3.jpeg';
import c4 from '../assets/Commercial/c4.jpeg';
import c5 from '../assets/Commercial/c5.jpeg';
import c6 from '../assets/Commercial/c6.jpeg';
import c7 from '../assets/Commercial/c7.jpeg';
import c8 from '../assets/Commercial/c8.jpeg';

import in1 from '../assets/Interior/in1.jpeg';
import in2 from '../assets/Interior/in2.jpeg';
import in3 from '../assets/Interior/in3.jpeg';
import in4 from '../assets/Interior/in4.jpeg';
import in5 from '../assets/Interior/in5.jpeg';
import in6 from '../assets/Interior/in6.jpeg';
import in7 from '../assets/Interior/in7.jpeg';
import in8 from '../assets/Interior/in8.png';
import in9 from '../assets/Interior/in9.png';
import in11 from '../assets/Interior/in11.png'
import in12 from '../assets/Interior/in12.png';
import in13 from '../assets/Interior/in13.png';
import in14 from '../assets/Interior/in14.png';


import s1 from '../assets/SitePics/s1.jpeg';
import s2 from '../assets/SitePics/s2.jpeg';
import s3 from '../assets/SitePics/s3.jpeg';
import s4 from '../assets/SitePics/s4.jpeg';


import threeD from '../assets/3d.jpeg'; // Changed '3d' to 'threeD'



// Interior 1 Folder Imports
import i1 from '../assets/interior1/i1.jpeg';
import i2 from '../assets/interior1/i2.jpeg';
import i3 from '../assets/interior1/i3.jpeg';
import i4 from '../assets/interior1/i4.jpeg';
import i5 from '../assets/interior1/i5.jpeg';
import i6 from '../assets/interior1/i6.jpeg';
import i7 from '../assets/interior1/i7.jpeg';
import i8 from '../assets/interior1/i8.jpeg';
import i9 from '../assets/interior1/i9.jpeg';
import i10 from '../assets/interior1/i10.jpeg';
import i11 from '../assets/interior1/i11.jpeg';
import i12 from '../assets/interior1/i12.jpeg';
import i13 from '../assets/interior1/i13.jpeg';
import i14 from '../assets/interior1/i14.jpeg';

// Fix for the 3D image (cannot start with a number)


const ALL_SERVICES = [
  {
    title: "Interior Work",
    icon: <Paintbrush className="w-6 h-6" />,
    desc: "Turnkey interior fit-outs with premium finishes and modular solutions.",
    features: ["Modular Kitchens", "False Ceilings", "Bespoke Furniture"],
    images: [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, in8, in9, in11, in12, in13, in14],
  },
  {
    title: "Residential Construction",
    icon: <Home className="w-6 h-6" />,
    desc: "Luxury home building with structural stability led by M.Tech Engineers.",
    features: ["Foundation Engineering", "Superstructure", "Luxury Finishing"],
    images: [c1, c2, c3, c4, c5, c6, c7, c8, s1, s2, s3, s4],
  },
  {
    title: "Commercial Construction",
    icon: <Building2 className="w-6 h-6" />,
    desc: "High-performance structures for corporate hubs and retail spaces.",
    features: ["Large Span Structures", "Modern Glazing", "Rapid Deployment"],
    images: [in6, in7],
  },
  {
    title: "3D Visualization",
    icon: <Box className="w-6 h-6" />,
    desc: "High-fidelity 3D renders to walk through your vision before building.",
    features: ["Photorealistic Renders", "Walkthroughs", "Material Simulation"],
    images: [threeD],
  },
  {
    title: "PMC Works",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Professional Project Management Consultancy for complete operational control.",
    features: ["Cost Management", "Risk Assessment", "Quality Control"],
    images: [], // Add PMC specific image variables here
  },
  {
    title: "Turnkey Projects",
    icon: <Key className="w-6 h-6" />,
    desc: "End-to-end responsibility from groundbreaking to key handover.",
    features: ["Procurement", "Site Supervision", "Quality Audits"],
    images: [],
  },
  {
    title: "Renovation",
    icon: <RotateCcw className="w-6 h-6" />,
    desc: "Modernizing existing structures with structural retrofitting.",
    features: ["Retrofitting", "Layout Upgrades", "Aesthetic Overhaul"],
    images: [],
  },
  {
    title: "Planning Layout 2D",
    icon: <Layout className="w-6 h-6" />,
    desc: "Scientific space planning and precision architectural mapping.",
    features: ["Vastu Compliance", "Code Approval", "Space Optimization"],
    images: [],
  },

];

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}> = ({ images, startIndex, title, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [dir, setDir] = useState(0);

  const goPrev = () => { setDir(-1); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const goNext = () => { setDir(1); setCurrent((c) => (c + 1) % images.length); };

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [images.length, onClose]);

  // lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {/* ── TOP BAR ── */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 flex-shrink-0">
        <div>
          <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">{title}</p>
          <p className="text-white/40 text-xs mt-0.5">{current + 1} / {images.length}</p>
        </div>
        {/* ✕ CLOSE — big, always visible */}
        <button
          onClick={onClose}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-red-500"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* ── IMAGE + SIDE ARROWS ── */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-16 min-h-0 relative">

        {/* LEFT ARROW */}
        {images.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-[#C5A059] text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-[#C5A059] hover:scale-110 active:scale-95 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* IMAGE */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden px-12 sm:px-0">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} ${current + 1}`}
              className="max-h-[65vh] sm:max-h-[72vh] max-w-full w-auto object-contain rounded-xl shadow-2xl select-none"
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* RIGHT ARROW */}
        {images.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-[#C5A059] text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-[#C5A059] hover:scale-110 active:scale-95 flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>

      {/* ── DOT INDICATORS + CLOSE HINT ── */}
      <div className="flex-shrink-0 py-5 flex flex-col items-center gap-3">
        <div className="flex gap-2 flex-wrap justify-center px-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setDir(idx > current ? 1 : -1); setCurrent(idx); }}
              className={`rounded-full transition-all duration-300 ${idx === current ? 'w-6 h-2 bg-[#C5A059]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                }`}
            />
          ))}
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-widest hidden sm:block">
          Press Esc to close · ← → to navigate
        </p>
      </div>
    </motion.div>
  );
};

// ── SERVICE CARD — IMAGE TOP, CONTENT BOTTOM ──────────────────────────────────
const ServiceCard: React.FC<{ service: typeof ALL_SERVICES[0]; index: number }> = ({ service, index }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasImages = service.images.length > 0;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrent((c) => (c - 1 + service.images.length) % service.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrent((c) => (c + 1) % service.images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C5A059]/40 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
      >

        {/* ═══ IMAGE — TOP ═══════════════════════════════════════════ */}
        {hasImages ? (
          <div
            className="relative aspect-[4/3] overflow-hidden cursor-zoom-in bg-gray-50 flex-shrink-0"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current}
                src={service.images[current] as string}
                alt={`${service.title} ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>

            {/* Counter */}
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Images className="w-3 h-3" />
              {current + 1}/{service.images.length}
            </div>

            {/* Arrows — visible on hover */}
            {service.images.length > 1 && (
              <>
                <button onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#C5A059] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#C5A059] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {service.images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" onClick={e => e.stopPropagation()}>
                {service.images.map((_, idx) => (
                  <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                    className={`rounded-full transition-all duration-300 ${idx === current ? 'w-4 h-1.5 bg-[#C5A059]' : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* No image placeholder */
          <div className="aspect-[4/3] bg-[#F5F3EE] flex items-center justify-center flex-shrink-0">
            <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Photos Coming Soon</p>
          </div>
        )}

        {/* ═══ CONTENT — BOTTOM ══════════════════════════════════════ */}
        <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-sm font-serif text-[#111111] uppercase tracking-tight group-hover:text-[#C5A059] transition-colors leading-tight">
              {service.title}
            </h3>
          </div>

          {/* Desc */}
          <p className="text-xs text-gray-400 leading-relaxed mb-4">{service.desc}</p>

          {/* Features */}
          <ul className="space-y-1.5 mt-auto">
            {service.features.map((feat, i) => (
              <li key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/40 flex items-center">
                <span className="w-1 h-1 bg-[#C5A059] rounded-full mr-2 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && hasImages && (
          <Lightbox
            images={service.images as string[]}
            startIndex={current}
            title={service.title}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// ── PAGE ──────────────────────────────────────────────────────────────────────
const ServicesPage: React.FC = () => (
  <div className="bg-[#FAFAF8] pt-24 sm:pt-40">
    <section className="px-4 sm:px-6 mb-12 sm:mb-24">
      <div className="max-w-7xl mx-auto">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
          Our Full Spectrum
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif text-[#111111] leading-tight mb-8">
          Engineering <span className="italic text-[#C5A059]">Excellence</span>.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="max-w-2xl text-gray-500 text-lg leading-relaxed">
          Integrating 10+ years of site stability expertise with advanced M.Tech structural insights to deliver landmarks that last.
        </motion.p>
      </div>
    </section>

    <section className="px-4 sm:px-6 pb-16 sm:pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {ALL_SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>

    <section className="bg-[#111111] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-12">The Engineering Process Behind Every Project</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          {["Project Planning", "Cost Management", "Quality Control", "Risk Management"].map((t) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-[0.4em]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;