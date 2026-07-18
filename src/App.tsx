import React from 'react';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Cursor />
      <LoadingScreen />
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
