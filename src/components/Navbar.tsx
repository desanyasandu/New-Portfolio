import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur transition
      setIsScrolled(window.scrollY > 20);

      // Active Section Tracking
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.4s ease'
        }}
      >
        <div
          className={isScrolled ? 'glass' : ''}
          style={{
            width: '90%',
            maxWidth: '1200px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            borderRadius: '20px',
            background: isScrolled ? 'var(--bg-surface)' : 'transparent',
            border: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
            boxShadow: isScrolled ? 'var(--neu-card)' : 'none',
            transition: 'all 0.4s ease'
          }}
        >
          {/* Logo */}
          <div className="logo" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
            <span className="text-gradient">DY.</span>
          </div>

          {/* Desktop Links */}
          <div
            style={{
              display: 'none',
              gap: '1.75rem',
              alignItems: 'center'
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="interactive"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? '#fff' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeDot"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--accent-secondary)',
                      boxShadow: '0 0 8px var(--accent-secondary)'
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Action / Socials */}
          <div style={{ display: 'none', gap: '0.75rem', alignItems: 'center' }} className="desktop-socials">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-btn interactive"
              style={{ width: '36px', height: '36px', borderRadius: '10px' }}
            >
              <Github size={17} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-btn interactive"
              style={{ width: '36px', height: '36px', borderRadius: '10px' }}
            >
              <Linkedin size={17} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            className="neu-icon-btn interactive mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{
              position: 'fixed',
              top: '90px',
              left: '5%',
              width: '90%',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              gap: '1.5rem',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              boxShadow: 'var(--neu-hover)'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS to show/hide menus based on screen width */}
      <style>{`
        @media (min-width: 800px) {
          .desktop-menu { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
