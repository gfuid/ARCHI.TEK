import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
    { label: "Years of Stability", value: "10+", desc: "Led by M.Tech Experts" },
    { label: "Projects Delivered", value: "250+", desc: "Residential & Commercial" },
    { label: "Planning Layouts", value: "500+", desc: "Precision 2D/3D Designs" },
    { label: "Happy Families", value: "150+", desc: "Trust & Transparency" }
];

const Stats: React.FC = () => {
    return (
        <section className="py-24 bg-[#F8F7F2] border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <h3 className="text-5xl md:text-7xl font-serif text-[#111111] mb-2 group-hover:text-[#C5A059] transition-colors duration-500">
                                {stat.value}
                            </h3>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-2">
                                {stat.label}
                            </p>
                            <div className="w-8 h-[1px] bg-gray-200 mx-auto mb-4 group-hover:w-12 group-hover:bg-[#C5A059] transition-all"></div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;