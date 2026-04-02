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
      padding: '100px 2rem 50px 2rem'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '4rem', 
        alignItems: 'center' 
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ 
              fontSize: '1.1rem', 
              color: 'var(--accent-cyan)', 
              fontWeight: 600, 
              letterSpacing: '2px', 
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            Hi there, I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              marginBottom: '1.5rem', 
              letterSpacing: '-2px'
            }}
          >
            {portfolioData.name.split(' ')[0]} <br />
            <span className="text-gradient">{portfolioData.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ 
              fontSize: '1.8rem', 
              color: 'rgba(255,255,255,0.7)', 
              fontWeight: 400, 
              marginBottom: '2rem' 
            }}
          >
            I build <span style={{ color: '#fff', fontWeight: 600 }}>efficient</span> software solutions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ 
              fontSize: '1.1rem', 
              color: 'rgba(255,255,255,0.5)', 
              maxWidth: '500px', 
              lineHeight: 1.6,
              marginBottom: '3rem'
            }}
          >
            {portfolioData.about}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="interactive glass" style={{ 
              padding: '1rem 2.5rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              color: '#fff', 
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'transform 0.3s'
            }}>
              View My Work
            </a>
            
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="interactive glass" style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="interactive glass" style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={`mailto:${portfolioData.socials.email}`} className="interactive glass" style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.3s'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="interactive"
          style={{ position: 'relative' }}
        >
          <div className="glass" style={{
            width: '380px',
            height: '480px',
            borderRadius: '40px',
            overflow: 'hidden',
            padding: '12px',
            position: 'relative'
          }}>
             <img 
               src={portfolioData.profileImage} 
               alt={portfolioData.name} 
               style={{ 
                 width: '100%', 
                 height: '100%', 
                 objectFit: 'cover', 
                 borderRadius: '30px' 
               }} 
             />
             <div style={{
               position: 'absolute',
               inset: 0,
               background: 'linear-gradient(to bottom, transparent 60%, rgba(5,5,10,0.8))'
             }}></div>
          </div>
          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'var(--accent-cyan)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            opacity: 0.4,
            zIndex: -1
          }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
