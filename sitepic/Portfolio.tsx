import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Grid2X2 } from 'lucide-react';

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

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX — full screen, always-visible arrows + cross
// ─────────────────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{ startIndex: number; onClose: () => void }> = ({
    startIndex,
    onClose,
}) => {
    const [current, setCurrent] = useState(startIndex);
    const [dir, setDir] = useState(0);

    const goPrev = useCallback(() => {
        setDir(-1);
        setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
    }, []);

    const goNext = useCallback(() => {
        setDir(1);
        setCurrent((c) => (c + 1) % IMAGES.length);
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handler);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handler);
        };
    }, [goPrev, goNext, onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-[200] flex flex-col"
            style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* ── TOP BAR ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-4 sm:px-8 py-4 flex-shrink-0">
                <div>
                    <p style={{ color: '#C5A059', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Site Pics
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 2 }}>
                        {current + 1} of {IMAGES.length}
                    </p>
                </div>

                {/* ✕ CLOSE BUTTON — always visible, never hidden */}
                <button
                    onClick={onClose}
                    style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.12)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        color: '#fff', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s',
                        flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#ef4444')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                    aria-label="Close"
                >
                    <X size={22} />
                </button>
            </div>

            {/* ── IMAGE AREA + SIDE ARROWS ────────────────────────────── */}
            <div
                style={{
                    flex: 1, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', position: 'relative',
                    minHeight: 0, padding: '0 70px',
                }}
            >
                {/* LEFT ARROW — always visible */}
                <button
                    onClick={goPrev}
                    style={{
                        position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                        width: 52, height: 52, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        color: '#fff', cursor: 'pointer', zIndex: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#C5A059';
                        e.currentTarget.style.borderColor = '#C5A059';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Previous"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* IMAGE */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <AnimatePresence mode="wait" custom={dir}>
                        <motion.img
                            key={current}
                            src={IMAGES[current]}
                            alt={`Site Pic ${current + 1}`}
                            style={{
                                maxHeight: '70vh', maxWidth: '100%',
                                objectFit: 'contain', borderRadius: 14,
                                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                                userSelect: 'none', display: 'block',
                            }}
                            initial={{ opacity: 0, x: dir * 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: dir * -60 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            draggable={false}
                        />
                    </AnimatePresence>
                </div>

                {/* RIGHT ARROW — always visible */}
                <button
                    onClick={goNext}
                    style={{
                        position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                        width: 52, height: 52, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        color: '#fff', cursor: 'pointer', zIndex: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#C5A059';
                        e.currentTarget.style.borderColor = '#C5A059';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Next"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* ── DOTS + HINT ─────────────────────────────────────────── */}
            <div style={{ flexShrink: 0, padding: '16px 0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center', padding: '0 16px' }}>
                    {IMAGES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setDir(idx > current ? 1 : -1); setCurrent(idx); }}
                            style={{
                                borderRadius: 999, border: 'none', cursor: 'pointer',
                                transition: 'all 0.3s',
                                width: idx === current ? 24 : 8,
                                height: 8,
                                background: idx === current ? '#C5A059' : 'rgba(255,255,255,0.22)',
                                padding: 0,
                            }}
                            aria-label={`Go to photo ${idx + 1}`}
                        />
                    ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                    Esc to close · ← → to navigate
                </p>
            </div>
        </motion.div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// GRID ITEM
// ─────────────────────────────────────────────────────────────────────────────
const GridItem: React.FC<{ src: string; index: number; onClick: () => void }> = ({
    src, index, onClick,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index % 5) * 0.06, duration: 0.45 }}
        onClick={onClick}
        className="group relative overflow-hidden rounded-xl cursor-zoom-in bg-gray-100"
        style={{ aspectRatio: '4/3' }}
    >
        <img
            src={src}
            alt={`Site Pic ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-400" />
        {/* Number badge */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 999, letterSpacing: '0.1em' }}>
            {String(index + 1).padStart(2, '0')}
        </div>
        {/* Gold ring */}
        <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-[#C5A059] transition-all duration-300" />
    </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────
const SitePics: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <>
            <section id="site-pics" className="bg-[#FAFAF8] py-16 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <div className="mb-10 sm:mb-16 mt-12">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-xs mb-3 block"
                        >
                            Ground Reality
                        </motion.span>

                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] leading-tight"
                            >
                                Site <span className="italic text-[#C5A059]">Pics</span>.
                            </motion.h2>

                            {/* Photo count chip */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="flex items-center gap-2 self-start sm:self-auto"
                            >
                                <Grid2X2 className="w-4 h-4 text-[#C5A059]" />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                                    {IMAGES.length} Photographs
                                </span>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mt-5 h-px w-20 bg-[#C5A059] origin-left"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-gray-400 text-sm max-w-lg leading-relaxed"
                        >
                            Real photographs from our active construction sites — documenting every stage with engineering precision.
                        </motion.p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                        {IMAGES.map((src, i) => (
                            <GridItem
                                key={i}
                                src={src}
                                index={i}
                                onClick={() => setLightboxIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox portal */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        startIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SitePics;