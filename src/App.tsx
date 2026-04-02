import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Cursor />
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
