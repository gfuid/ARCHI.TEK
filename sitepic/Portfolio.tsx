import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Client ke projects ka data (Notes ke basis par)
const PROJECTS = [
    {
        id: 1,
        category: "Residential",
        title: "Luxury Villa - Sector 45",
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800",
        description: "Full structural execution and interior fit-out."
    },
    {
        id: 2,
        category: "Commercial",
        title: "Corporate Hub",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        description: "Turnkey commercial project with modern glazing."
    },
    {
        id: 3,
        category: "Interior",
        title: "Modern Apartment",
        status: "Finishing",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
        description: "Custom modular kitchen and lighting design."
    },
    {
        id: 4,
        category: "Planning",
        title: "2D/3D Layout Design",
        status: "Planning Stage",
        image: "https://images.unsplash.com/photo-1503387762-592f2416460a?q=80&w=800",
        description: "Precision architectural mapping for clients."
    }
];

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <section id="site-pics" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-8 mb-12 border-b border-gray-100 pb-6">
                    {['All', 'Residential', 'Commercial', 'Interior', 'Planning'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${filter === cat ? 'text-houzz-gold' : 'text-gray-400 hover:text-houzz-dark'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-[10px] text-houzz-gold font-bold uppercase tracking-widest block mb-1">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-serif text-houzz-dark group-hover:text-houzz-gold transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-houzz-gray max-w-[200px] text-right leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;