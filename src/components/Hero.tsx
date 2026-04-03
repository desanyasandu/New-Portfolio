import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '120px 2rem 80px 2rem',
      position: 'relative'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', 
        gap: '6rem', 
        alignItems: 'center' 
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              borderRadius: '100px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              marginBottom: '2rem'
            }}
          >
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: 'var(--accent-secondary)',
              boxShadow: '0 0 10px var(--accent-secondary)'
            }}></span>
            <span style={{ 
              fontSize: '0.85rem', 
              color: 'var(--accent-secondary)', 
              fontWeight: 600, 
              letterSpacing: '1px', 
              textTransform: 'uppercase'
            }}>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
              fontWeight: 800, 
              lineHeight: 1, 
              marginBottom: '1.5rem', 
              letterSpacing: '-0.04em'
            }}
          >
            {portfolioData.name.split(' ')[0]} <br />
            <span className="text-gradient">{portfolioData.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
              color: 'rgba(255,255,255,0.8)', 
              fontWeight: 500, 
              marginBottom: '2rem',
              letterSpacing: '-0.02em'
            }}
          >
            Crafting <span style={{ color: '#fff', fontWeight: 600 }}>seamless</span> digital experiences.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ 
              fontSize: '1.15rem', 
              color: 'rgba(255,255,255,0.5)', 
              maxWidth: '540px', 
              lineHeight: 1.8,
              marginBottom: '3rem'
            }}
          >
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#projects" className="interactive" style={{ 
              padding: '1.2rem 3rem', 
              borderRadius: '16px', 
              textDecoration: 'none', 
              color: '#000', 
              background: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 10px 20px rgba(255,255,255,0.1)'
            }}>
              View Projects
            </a>
            
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="interactive glass" style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="interactive glass" style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '48px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
             <img 
               src={portfolioData.profileImage} 
               alt={portfolioData.name} 
               style={{ 
                 width: '100%', 
                 height: 'auto', 
                 display: 'block',
                 filter: 'grayscale(20%) contrast(110%)'
               }} 
             />
             <div style={{
               position: 'absolute',
               inset: 0,
               background: 'linear-gradient(to bottom, transparent 50%, rgba(2,2,5,0.8))'
             }}></div>
          </div>
          
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '200px',
            height: '200px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.2,
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '200px',
            height: '200px',
            background: 'var(--accent-secondary)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.2,
            zIndex: 0
          }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
