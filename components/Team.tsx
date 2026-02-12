import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const TEAM = [
    {
        name: "Er. Ashish Bhargav",
        role: "Structural Lead (M.Tech)",
        exp: "10+ Years",
        desc: "Specialist in structural stability and earthquake-resistant design."
    },
    {
        name: "Er. Sachin Kumar",
        role: "Project Director (M.Tech)",
        exp: "10+ Years",
        desc: "Expert in turnkey project execution and high-end commercial construction."
    },
    {
        name: "Abhishek Bhargav",
        role: "Site Manager",
        desc: "Overseeing daily site progress, safety protocols, and quality control."
    },
    {
        name: "Suraj Kumar",
        role: "3D Visualizer",
        desc: "Transforming layouts into immersive 3D architectural experiences."
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-32 bg-white overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Qualified Experts</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[#111111] mb-6">
                        The <span className="italic text-[#C5A059]">Engineering</span> Mindset.
                    </h2>
                    <div className="w-24 h-1 bg-[#C5A059]"></div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {TEAM.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            {/* Profile Card Placeholder */}
                            <div className="aspect-[3/4] bg-gray-50 mb-8 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                                <div className="absolute inset-0 border border-gray-100 group-hover:border-[#C5A059]/30 transition-colors"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white px-3 py-1">Experience: {member.exp || 'Site Expert'}</p>
                                </div>
                            </div>

                            {/* Details */}
                            <h4 className="text-xl font-serif text-[#111111] mb-1 uppercase tracking-tight group-hover:text-[#C5A059] transition-colors">
                                {member.name}
                            </h4>
                            <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-4">
                                {member.role}
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">
                                {member.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Note based on Footer content */}
                <div className="mt-20 p-10 bg-[#111111] text-center rounded-sm">
                    <h3 className="text-white/90 text-xl font-serif mb-4 italic">
                        "Engineering stability with 10+ years of excellence in construction."
                    </h3>
                    <Magnetic strength={0.2}>
                        <a href="/contact" className="inline-block text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#C5A059] pb-1 hover:text-white hover:border-white transition-all">
                            Book Technical Consultation
                        </a>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
};

export default Team;