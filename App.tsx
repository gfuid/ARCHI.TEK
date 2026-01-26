
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AuraAI from './components/AuraAI';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import Magnetic from './components/Magnetic';
import { TEAM } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />

        <Marquee />

        {/* Studio Philosophy Section */}
        <section id="studio" className="py-24 bg-studio-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-studio-gold/30"></div>
                <div className="relative z-10 w-full overflow-hidden rounded-sm shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Studio space"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-studio-gold/30"></div>
              </div>
              
              <div className="animate-fade-in">
                <h2 className="text-sm text-studio-gold font-bold uppercase tracking-[0.3em] mb-4">Our Essence</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  We create spaces that <span className="italic">speak</span> to the soul and the site.
                </h3>
                <p className="text-studio-white/60 text-lg leading-relaxed mb-8">
                  ARCHI-TEK was founded on the belief that architecture is a dialogue between human needs and the natural world. Our process is highly collaborative, leveraging state-of-the-art simulation software and traditional model-making to ensure every line serves a purpose.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <span className="block text-4xl font-serif text-studio-gold mb-2">14+</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Years of Innovation</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif text-studio-gold mb-2">85+</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Projects Delivered</span>
                  </div>
                </div>
                <Magnetic strength={0.3}>
                  <button className="text-studio-gold font-bold uppercase tracking-widest text-sm flex items-center space-x-2 hover:translate-x-2 transition-transform">
                    <span>Learn about our process</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </section>

        <Portfolio />
        
        <AuraAI />

        {/* Team Section */}
        <section className="py-32 bg-studio-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm text-studio-gold font-bold uppercase tracking-[0.3em] mb-4">The Visionaries</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-20">Our Leadership</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {TEAM.map((member, idx) => (
                <div key={idx} className="group text-left animate-slide-up" style={{ animationDelay: `${idx * 200}ms` }}>
                  <div className="overflow-hidden mb-8 aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <h4 className="text-2xl font-bold mb-1 tracking-wider">{member.name}</h4>
                  <span className="text-studio-gold text-xs uppercase tracking-widest font-bold mb-6 block">{member.role}</span>
                  <p className="text-studio-white/40 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-studio-gold text-studio-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 flex items-center justify-center">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
              <path d="M0 0 L100 0 L100 100 Z" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-12 leading-tight">
              Ready to redefine <br /> your perspective?
            </h2>
            <p className="text-2xl font-medium mb-16 max-w-3xl mx-auto opacity-80">
              Let's collaborate on your next architectural masterpiece. Our studio is now accepting inquiries for 2025/2026 projects.
            </p>
            <Magnetic strength={0.1}>
              <a 
                href="mailto:studio@archi-tek.design" 
                className="inline-block bg-studio-black text-studio-white px-16 py-6 font-bold uppercase tracking-widest hover:bg-studio-gray transition-colors shadow-2xl text-lg"
              >
                Start a Conversation
              </a>
            </Magnetic>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
