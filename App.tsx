import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection'
// Naye folders se components
import Portfoliositepic from './sitepic/Portfolio';
import AboutUsSection from './About-us/About';
import Contact from './Contact-us/Contact';
import ServicesPage from './Service/ServicesPage';
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <CustomCursor />
        <Navbar />

        <Routes>
          {/* HOME PAGE: Saare main components yahan honge */}
          <Route path="/" element={
            <main>
              <Hero />
              <Marquee />
              <Services />
              <Stats />
              <Process />
              <WhyChooseUs />
              <Team />
              <ContactSection />
            </main>
          } />

          {/* ALAG PAGES: Jo aapne folders banaye hain */}
          <Route path="/site-pics" element={<Portfoliositepic />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;