import React from 'react';

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Project Planning & Scheduling",
    desc: "Detailed timeline creation and resource allocation to ensure every milestone is met on time."
  },
  {
    number: "02",
    title: "Cost Management & Budgeting",
    desc: "Transparent financial planning to deliver high-quality results within your specific budget constraints."
  },
  {
    number: "03",
    title: "Quality & Safety Controls",
    desc: "Rigorous on-site inspections and safety protocols to maintain the highest engineering standards."
  },
  {
    number: "04",
    title: "Stakeholder Coordination",
    desc: "Seamless communication between architects, engineers, and clients for a unified vision."
  },
  {
    number: "05",
    title: "Risk Management",
    desc: "Proactive identification of potential site challenges to ensure smooth and safe execution."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-houzz-gold font-bold uppercase tracking-widest text-xs mb-2 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-serif text-houzz-dark uppercase">Key Roles & Responsibilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative group">
              {/* Line Connector for Desktop */}
              {index !== PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-houzz-sage/20 z-0"></div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-houzz-light border border-houzz-sage/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-houzz-gold group-hover:text-white transition-all duration-500">
                  <span className="font-serif text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-houzz-dark mb-3 uppercase tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-houzz-gray leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;