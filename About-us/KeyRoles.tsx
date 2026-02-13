import React from 'react';
import { Shield, Hammer, PenTool, Ruler, HardHat, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
const KeyRoles: React.FC = () => {
  const roles = [
    {
      title: "Structural Engineering",
      icon: <Shield className="w-8 h-8" />,
      desc: "Led by M.Tech experts, ensuring maximum stability and safety for every structural design."
    },
    {
      title: "Architectural Planning",
      icon: <Ruler className="w-8 h-8" />,
      desc: "Precision 2D layouts and 3D visualizations that bring your conceptual vision to life."
    },
    {
      title: "Luxury Interiors",
      icon: <PenTool className="w-8 h-8" />,
      desc: "Bespoke fit-out works and interior designs tailored for high-end residential and commercial spaces."
    },
    {
      title: "Project Management",
      icon: <HardHat className="w-8 h-8" />,
      desc: "End-to-end PMC services to ensure projects are delivered on time, within budget, and with quality."
    },
    {
      title: "Turnkey Solutions",
      icon: <Hammer className="w-8 h-8" />,
      desc: "Seamless construction from groundbreaking to final handover, managing every technical detail."
    },
    {
      title: "Commercial Excellence",
      icon: <Layout className="w-8 h-8" />,
      desc: "Innovative space planning for retail and corporate environments to maximize functionality."
    }
  ];

  return (
    <section id="key-roles" className="py-24 bg-[#F8F7F2] mt-[80px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="mb-16">
          <h4 className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
            Our Expertise
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
            Key Roles in Your <br />
            <span className="italic">Project Success</span>
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mt-8"></div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group p-10 bg-white border border-black/5 hover:border-[#C5A059]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A059]/5 rounded-sm"
            >
              <div className="text-[#C5A059] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {role.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-wider">
                {role.title}
              </h3>

              <p className="text-black/60 text-sm leading-relaxed">
                {role.desc}
              </p>

              <div className="mt-8 overflow-hidden h-[1px] w-0 group-hover:w-full bg-[#C5A059]/40 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 p-12 border border-[#C5A059]/20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-sm">
          <div>
            <h3 className="text-2xl font-serif text-[#1a1a1a]">Ready to start your journey?</h3>
            <p className="text-black/50 text-sm mt-2">Let our M.Tech Structural Engineers guide your next build.</p>
          </div>
          <Link to="/contact">
            <button className="px-8 py-4 bg-[#1a1a1a] text-[#F8F7F2] hover:bg-[#C5A059] transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest">
              Request a Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyRoles;