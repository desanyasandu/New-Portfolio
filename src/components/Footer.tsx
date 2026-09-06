import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        padding: '60px 0',
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          {/* Logo */}
          <div className="logo" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            <span className="text-gradient">DY.</span>
          </div>

          {/* Social Links Row */}
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-btn interactive"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px'
              }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-btn interactive"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px'
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Separation Line */}
          <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)' }} />

          {/* Bottom Row */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.9rem'
            }}
          >
            <div>
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="neu-icon-btn interactive"
              style={{
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
