import React from 'react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{ 
      padding: '160px 0 80px 0', 
      background: 'rgba(2,2,5,0.4)', 
      backdropFilter: 'blur(40px)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '160px'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '580px', margin: '0 auto 48px auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <a href={`mailto:${portfolioData.socials.email}`} className="interactive" style={{
            padding: '1.2rem 3.5rem',
            borderRadius: '16px',
            color: '#000',
            background: '#fff',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 20px rgba(255,255,255,0.1)'
          }}>
            Send a Message <MailIcon size={20} />
          </a>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '60px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.95rem'
        }}>
          <div>© {new Date().getFullYear()} Desan Yasandu. Built with React & Vite.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="interactive" style={{ color: 'inherit' }}><GithubIcon size={22} /></a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="interactive" style={{ color: 'inherit' }}><LinkedinIcon size={22} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

