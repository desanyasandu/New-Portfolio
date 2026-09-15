import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--accent-secondary)',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            Contact
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div
            style={{
              height: '4px',
              width: '60px',
              background: 'var(--gradient-linear)',
              borderRadius: '10px',
              margin: '16px auto 0 auto'
            }}
          />
        </motion.div>

        {/* Centered Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Let's build something great
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            I'm always open to discussing new projects, design systems, API development, or opportunities to collaborate on innovative products.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', alignItems: 'center' }}>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--bg-deep)',
                  boxShadow: 'var(--neu-inset)',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                  flexShrink: 0
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email Me</span>
                <a href={`mailto:${portfolioData.socials.email}`} style={{ display: 'block', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }} className="interactive">
                  {portfolioData.socials.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--bg-deep)',
                  boxShadow: 'var(--neu-inset)',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0
                }}
              >
                <MapPin size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Based In</span>
                <span style={{ display: 'block', color: '#fff', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                  Colombo, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
