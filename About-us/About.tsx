import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import img from "./../assets/image.png"

const TEAM = [
    {
        name: "Er. Ashish Bhargav",
        role: "Lead Structural Engineer",
        qual: "Diploma, B.Tech, M.Tech (Structural Engg.)",
        exp: "10+ Years Experience in Construction & Interior Works"
    },
    {
        name: "Er. Sachin Kumar",
        role: "Lead Structural Engineer",
        qual: "Diploma, B.Tech, M.Tech (Structural Engg.)",
        exp: "10+ Years Experience in Construction & Interior Works"
    }
];

const OTHER_STAFF = [
    { name: "Suraj Kumar", role: "3D Visualizer" },
    { name: "Abhishek Bhargav", role: "Site Manager" },
    { name: "Shivam Bhardwaj", role: "Social Media Handler" }
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-[#FBFBF9] overflow-hidden">
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
                                Founded on the principles of structural integrity and modern aesthetic excellence, our studio is led by highly qualified engineers with a deep-rooted passion for construction.
                            </p>
                            <p className="text-houzz-gray/80 text-base leading-relaxed">
                                With over a decade of hands-on experience in both construction and interior works, we ensure that every blueprint is a perfect blend of safety, cost-effectiveness, and luxury.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <img src={img} alt="Planning" className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600" alt="Site Work" className="w-full h-64 object-cover rounded-sm mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>

                {/* Leadership Team (The Engineers) */}
                <div className="mb-24">
                    <h3 className="text-2xl font-serif mb-12 border-b border-gray-200 pb-4 uppercase tracking-widest text-center">Leadership Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {TEAM.map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 bg-houzz-light rounded-full mb-6 flex items-center justify-center border border-houzz-gold/20">
                                    <span className="text-houzz-gold font-serif text-3xl">Er.</span>
                                </div>
                                <h4 className="text-2xl font-serif text-houzz-dark mb-2">{member.name}</h4>
                                <p className="text-houzz-gold font-bold text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                                <div className="space-y-2">
                                    <p className="text-xs text-houzz-gray font-semibold">{member.qual}</p>
                                    <p className="text-[11px] text-houzz-gray/70 leading-relaxed max-w-xs">{member.exp}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Support Staff */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
                    {OTHER_STAFF.map((staff, i) => (
                        <div key={i} className="text-center md:text-left group">
                            <p className="text-[10px] font-bold text-houzz-gold uppercase tracking-widest mb-1 group-hover:translate-x-2 transition-transform">{staff.role}</p>
                            <h5 className="text-xl font-serif text-houzz-dark">{staff.name}</h5>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;