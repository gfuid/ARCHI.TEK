
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        <Marquee />

        {/* Primary Focus: Services */}
        <Services />

        {/* Site Pics: Simplified gallery replaced complex portfolio */}
        <section id="site-pics" className="pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
                <h2 className="text-4xl md:text-6xl font-serif text-houzz-dark">Site Progress</h2>
              </div>
              <p className="text-houzz-gray max-w-sm mt-6 md:mt-0">
                A raw look into our architectural milestones and ongoing site transformations.
              </p>
            </div>
          </div>
          <Portfolio />
        </section>

        <About />

      </main>

      <Footer />
    </div>
  );
};

export default App;
