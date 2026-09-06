import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const education: TimelineItem[] = [
  {
    year: 'Feb 2026 - ongoing',
    title: 'HND in Software Engineering',
    subtitle: 'NIBM',
    description: 'Pursuing higher education specializing in advanced software architectures, system designs, APIs, and modern development methodology.'
  },
  {
    year: 'Jan 2025 - Jan 2026',
    title: 'Diploma in Software Engineering',
    subtitle: 'NIBM',
    description: 'Graduated with deep knowledge in programming algorithms, object-oriented concepts (Java), web programming, and databases.'
  }
];

const projectsExperience: TimelineItem[] = [
  {
    year: '2025 - 2026',
    title: 'Green Dairy Distribution & Production Management System',
    subtitle: 'Featured Large-Scale Enterprise System | Full-Stack Architect',
    description: 'Designed and engineered an enterprise ERP platform managing real-time vehicle telemetry, raw material BOMs, milk collection ledgers, automated batch processing, and multi-outlet supply chain distribution.'
  },
  {
    year: '2024',
    title: 'Smart Browser History Manager',
    subtitle: 'Open Source Lead Developer',
    description: 'Engineered a React & TypeScript visual dashboard utilizing custom history visualization, advanced data indexing, and indexing performance.'
  },
  {
    year: '2024',
    title: 'Zoom Alternative & Collaboration App',
    subtitle: 'Open Source Developer',
    description: 'Built a real-time web video conferencing application using WebRTC, Socket.io, and Node.js backend integration.'
  },
  {
    year: '2023',
    title: 'Windows System RAM-Cleaner Utility',
    subtitle: 'Automation Lead',
    description: 'Created an optimization system for Windows systems automated through shell scripting to maximize operational RAM performance.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience">
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
            My Journey
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Education & <span className="text-gradient">Experience</span>
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

        {/* Experience Grid Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem'
          }}
        >
          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'var(--bg-deep)',
                  boxShadow: 'var(--neu-inset)',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)'
                }}
              >
                <BookOpen size={22} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>Education</h3>
            </div>

            <div className="timeline">
              {education.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="glass" style={{ padding: '28px', borderRadius: '20px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-secondary)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      marginBottom: '12px',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      background: 'var(--bg-deep)',
                      boxShadow: 'var(--neu-inset)',
                      border: '1px solid rgba(0, 0, 0, 0.3)'
                    }}>
                      <Calendar size={13} /> {item.year}
                    </div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block', marginBottom: '12px', fontWeight: 500 }}>{item.subtitle}</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects & Experience Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'var(--bg-deep)',
                  boxShadow: 'var(--neu-inset)',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-tertiary)'
                }}
              >
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>Projects & Work</h3>
            </div>

            <div className="timeline" style={{ position: 'relative' }}>
              {projectsExperience.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" style={{ borderColor: 'var(--accent-tertiary)', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5), -3px -3px 8px rgba(255, 255, 255, 0.04), 0 0 12px var(--accent-tertiary)' }} />
                  <div className="glass" style={{ padding: '28px', borderRadius: '20px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-tertiary)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      marginBottom: '12px',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      background: 'var(--bg-deep)',
                      boxShadow: 'var(--neu-inset)',
                      border: '1px solid rgba(0, 0, 0, 0.3)'
                    }}>
                      <Calendar size={13} /> {item.year}
                    </div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block', marginBottom: '12px', fontWeight: 500 }}>{item.subtitle}</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
