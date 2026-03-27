import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../components/Magnetic';
import img from "./../assets/i2.png";

// Import Team Images
import ashishImg from "../assets/Ashishbhargav.png";
import sachinImg from "../assets/Sachin.png";

// Import Support Staff Images
import surajImg from "../assets/Suraj.png";
import shivamImg from "../assets/Shivam.png";
import abhishekImg from "../assets/Ashishbhargav.png";

const TEAM = [
    {
        id: "ashish",
        name: "Er. Ashish Bhargav",
        role: "Lead Structural Engineer",
        image: ashishImg,
        qual: "Diploma, B.Tech, M.Tech (Structural Engg.)",
        exp: "A proven track record of 10+ years in construction and interior works. Over a decade of hands-on expertise in construction and interior works, delivering quality craftsmanship, reliable execution, and innovative design solutions."
    },
    {
        id: "sachin",
        name: "Er. Sachin Kumar",
        role: "Lead Structural Engineer",
        image: sachinImg,
        qual: "Diploma, B.Tech, M.Tech (Structural Engg.)",
        exp: "Backed by more than a decade of experience in construction and interior works, specializing in turning ideas into reality with quality materials and expert planning."
    }
];

const OTHER_STAFF = [
    { name: "Suraj Kumar", role: "3D Visualizer", image: surajImg },
    { name: "Abhishek Bhargav", role: "Site Manager" },
    { name: "Shivam Bhardwaj", role: "Social Media Handler", image: shivamImg }
];

const About: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const activeMember = TEAM.find(m => m.id === selectedId);

    return (
        <section id="about" className="py-32 bg-[#FBFBF9] overflow-hidden mt-9">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 border-l-4 border-houzz-gold pl-8">
                            <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-houzz-dark mb-8 leading-tight">
                                Engineering <span className="italic text-houzz-gold">Stability</span> With Professional Precision.
                            </h2>
                            <p className="text-houzz-gray text-lg leading-relaxed mb-6">
                                Founded on the principles of structural integrity and modern aesthetic excellence, our studio is led by highly qualified engineers.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <img src={img} alt="Planning" className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600" alt="Site Work" className="w-full h-64 object-cover rounded-sm mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>

                {/* Leadership Team Grid */}
                <div className="mb-24">
                    <h3 className="text-2xl font-serif mb-12 border-b border-gray-200 pb-4 uppercase tracking-widest text-center">Leadership Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {TEAM.map((member) => (
                            <motion.div
                                key={member.id}
                                layoutId={member.id}
                                onClick={() => setSelectedId(member.id)}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer group"
                            >
                                <motion.div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-2 border-houzz-gold/20 shadow-lg group-hover:border-houzz-gold transition-colors duration-500">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.h4 className="text-2xl font-serif text-houzz-dark mb-1">{member.name}</motion.h4>
                                <motion.p className="text-houzz-gold font-bold text-[10px] uppercase tracking-widest mb-4">{member.role}</motion.p>

                                {/* Experience content shown by default */}
                                <div className="space-y-3 mb-6">
                                    <p className="text-xs text-houzz-gray/60 font-medium italic px-4 uppercase tracking-tighter">{member.qual}</p>
                                    <p className="text-[13px] text-houzz-gray leading-relaxed max-w-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                        {member.exp}
                                    </p>
                                </div>

                                <span className="text-[10px] text-houzz-gold border border-houzz-gold px-4 py-1 rounded-full group-hover:bg-houzz-gold group-hover:text-white transition-all duration-300">
                                    View Full Details
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Support Staff Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
                    {OTHER_STAFF.map((staff, i) => (
                        <div key={i} className="flex flex-row items-center space-x-4 group p-4 hover:bg-white hover:shadow-sm transition-all duration-300 rounded-sm">
                            <div className="w-16 h-16 shrink-0 overflow-hidden rounded-full border border-gray-200">
                                <img src={staff.image} alt={staff.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-lg font-serif text-houzz-dark mb-0">{staff.name}</h5>
                                <p className="text-[9px] font-bold text-houzz-gold uppercase tracking-widest">{staff.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Modal View */}
                <AnimatePresence>
                    {selectedId && activeMember && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-md"
                            />

                            <motion.div
                                layoutId={selectedId}
                                className="relative w-full max-w-2xl bg-white p-8 md:p-12 shadow-2xl rounded-sm z-10 overflow-hidden"
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 text-2xl hover:rotate-90 transition-transform duration-300"
                                >
                                    ✕
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-houzz-gold/10 mb-6">
                                        <img src={activeMember.image} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <h2 className="text-3xl font-serif text-houzz-dark">{activeMember.name}</h2>
                                    <p className="text-houzz-gold font-bold text-xs uppercase tracking-[0.2em] mt-2 mb-8">{activeMember.role}</p>

                                    <div className="text-left w-full space-y-6">
                                        <div className="border-l-2 border-houzz-gold pl-6">
                                            <h5 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Qualifications</h5>
                                            <p className="text-houzz-dark font-medium leading-relaxed">{activeMember.qual}</p>
                                        </div>
                                        <div className="border-l-2 border-houzz-gold pl-6">
                                            <h5 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Detailed Experience</h5>
                                            <p className="text-houzz-gray leading-relaxed italic">"{activeMember.exp}"</p>
                                        </div>
                                    </div>

                                    <div className="mt-12">
                                        <Magnetic>
                                            <button className="bg-houzz-dark text-white px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-houzz-gold transition-colors duration-500">
                                                Contact Specialist
                                            </button>
                                        </Magnetic>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default About;