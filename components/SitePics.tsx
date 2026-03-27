import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

// Imports (Keep your existing imports)
import s1 from '../assets/SitePics/s1.jpeg';
import s2 from '../assets/SitePics/s2.jpeg';
import s3 from '../assets/SitePics/s3.jpeg';
import s4 from '../assets/SitePics/s4.jpeg';
import s5 from '../assets/SitePics/s5.jpeg';
import s6 from '../assets/SitePics/s6.jpeg';
import s7 from '../assets/SitePics/s7.jpeg';
import s8 from '../assets/SitePics/s8.jpeg';
import s9 from '../assets/SitePics/s9.jpeg';
import s10 from '../assets/SitePics/s10.jpeg';
import s11 from '../assets/SitePics/s11.jpeg';
import s12 from '../assets/SitePics/s12.jpeg';
import s13 from '../assets/SitePics/s13.jpeg';
import s14 from '../assets/SitePics/s14.jpeg';
import s15 from '../assets/SitePics/s15.jpeg';

const IMAGES = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15];

// ── LIGHTBOX COMPONENT (Same as your logic but with refined UI) ──
const Lightbox: React.FC<{ startIndex: number; onClose: () => void }> = ({ startIndex, onClose }) => {
    const [current, setCurrent] = useState(startIndex);

    const goPrev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
    const goNext = () => setCurrent((c) => (c + 1) % IMAGES.length);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
        >
            <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50">
                <X size={32} />
            </button>

            <button onClick={goPrev} className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#C5A059] transition-all">
                <ChevronLeft size={24} />
            </button>

            <motion.img
                key={current}
                src={IMAGES[current]}
                className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            />

            <button onClick={goNext} className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#C5A059] transition-all">
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 text-white/40 text-[10px] tracking-[0.3em] uppercase">
                {current + 1} / {IMAGES.length} Site Evidence
            </div>
        </motion.div>
    );
};

// ── MAIN COMPONENT ──
const SitePics: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Duplicate images for infinite loop effect
    const duplicatedImages = [...IMAGES, ...IMAGES];

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <span className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Archive</span>
                <h2 className="text-5xl md:text-7xl font-serif text-[#111111]">Site <span className="italic text-[#C5A059]">Gallery</span>.</h2>
            </div>

            {/* MARQUEE SCROLLER */}
            <div className="relative flex">
                <motion.div
                    className="flex gap-4 flex-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedImages.map((src, i) => (
                        <div
                            key={i}
                            onClick={() => setLightboxIndex(i % IMAGES.length)}
                            className="relative group flex-shrink-0 w-[280px] sm:w-[400px] aspect-[4/3] overflow-hidden rounded-sm cursor-pointer border border-gray-100"
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/90 p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                                    <Maximize2 size={20} className="text-[#111111]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* LIGHTBOX PORTAL */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        startIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-between items-center opacity-30">
                <p className="text-[9px] uppercase tracking-[0.2em]">Engineering Grounds · Live Documentation</p>
                <div className="h-px flex-1 mx-8 bg-black"></div>
                <p className="text-[9px] uppercase tracking-[0.2em]">Interactive Archive</p>
            </div>
        </section>
    );
};

export default SitePics;