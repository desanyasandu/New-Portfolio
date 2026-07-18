import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const roles = [
  'Full-stack Developer',
  'Software Engineer',
  'Creative Thinker',
  'Problem Solver'
];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const currentWord = roles[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typedText === currentWord) {
      // Hold word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 0 80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glow Blur Circles */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(99, 102, 241, 0.08)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(34, 211, 238, 0.08)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Available for new projects pill */}
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

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                letterSpacing: '-0.04em',
                color: '#fff'
              }}
            >
              {portfolioData.name.split(' ')[0]} <br />
              <span className="text-gradient">{portfolioData.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Typing Subtitle */}
            <div style={{ height: '32px', marginBottom: '1.8rem', display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em'
                }}
              >
                I am a{' '}
                <span
                  style={{
                    color: 'var(--accent-secondary)',
                    fontWeight: 700,
                    borderRight: '2px solid var(--accent-secondary)',
                    paddingRight: '4px'
                  }}
                  className="animate-blink"
                >
                  {typedText}
                </span>
              </span>
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                textAlign: 'justify'
              }}
            >
              {portfolioData.tagline}. Specialized in building scalable, responsive digital products and backend systems that prioritize user experience.
            </p>

            {/* Call To Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <a
                href="#projects"
                className="interactive"
                style={{
                  padding: '14px 28px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: '#000',
                  background: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 20px rgba(255,255,255,0.06)'
                }}
              >
                View Projects <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="interactive"
                style={{
                  padding: '14px 28px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'var(--accent-secondary)',
                  border: '1px solid rgba(34, 211, 238, 0.4)',
                  background: 'rgba(34, 211, 238, 0.02)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Contact Me <Mail size={16} />
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="interactive glass"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.04)'
                }}
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="interactive glass"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.04)'
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating picture & Demo video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}
          >
            {/* Main Picture Floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              style={{
                position: 'relative',
                zIndex: 10,
                width: '85%',
                maxWidth: '450px',
                aspectRatio: '4/5',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
               <img src={portfolioData.profileImage} alt={portfolioData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Floating Video Demo Card (Overlapping) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-5%',
                right: '-5%',
                zIndex: 20,
                width: '60%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                background: '#000',
                aspectRatio: '16/10'
              }}
            >
               {/* Video Header Label */}
               <div style={{
                 position: 'absolute',
                 top: '16px',
                 left: '16px',
                 zIndex: 3,
                 background: 'rgba(0,0,0,0.5)',
                 backdropFilter: 'blur(8px)',
                 padding: '4px 10px',
                 borderRadius: '100px',
                 border: '1px solid rgba(255,255,255,0.1)',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '6px'
               }}>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Featured</span>
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></span>
                  <span style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>Demo V1.0</span>
               </div>

               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover',
                   display: 'block',
                   opacity: 0.8
                 }} 
               >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-9210-large.mp4" type="video/mp4" />
               </video>
               
               {/* Scanline Effect */}
               <div style={{
                 position: 'absolute',
                 inset: 0,
                 background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                 backgroundSize: '100% 2px, 3px 100%',
                 pointerEvents: 'none',
                 zIndex: 2,
                 opacity: 0.4
               }}></div>

               {/* Dynamic Video Overlay */}
               <div style={{
                 position: 'absolute',
                 inset: 0,
                 background: 'linear-gradient(to bottom, transparent 40%, rgba(2,2,5,0.95))',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'flex-end',
                 padding: '1.2rem',
                 pointerEvents: 'none'
               }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '0.25rem'
                  }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: '#ff4b2b',
                      boxShadow: '0 0 10px #ff4b2b',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{ 
                      fontSize: '0.65rem', 
                      fontWeight: 700, 
                      color: '#fff', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px' 
                    }}>Live Demo</span>
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                    {portfolioData.projects[0].title}
                  </h3>
               </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
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
              bottom: '-20px',
              left: '-20px',
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
      </div>
    </section>
  );
};

export default Hero;
