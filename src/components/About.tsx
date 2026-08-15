import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about">
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
            About Me
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Know Me <span className="text-gradient">More</span>
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

        {/* About Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Stylized Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}
          >
            <div
              className="glass"
              style={{
                padding: '12px',
                borderRadius: '32px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div
                style={{
                  aspectRatio: '1/1',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.01)',
                  position: 'relative'
                }}
              >
                <img
                  src={portfolioData.aboutImage || portfolioData.profileImage}
                  alt={portfolioData.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Backdrop Blur Rings */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '120px',
                height: '120px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: 0.2,
                zIndex: -1
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'var(--accent-secondary)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: 0.2,
                zIndex: -1
              }}
            />
          </motion.div>

          {/* Right Column: Bio & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}
            >
              Who am I?
            </h3>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                textAlign: 'justify'
              }}
            >
              {portfolioData.about}
            </p>

            {/* Metrics Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {/* Experience */}
              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <Award size={24} color="var(--accent-secondary)" />
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>2+ Years</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Development Experience
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <Briefcase size={24} color="var(--accent-primary)" />
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>15+ Completed</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Personal & Github Projects
                  </p>
                </div>
              </div>

              {/* Education */}
              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <GraduationCap size={24} color="var(--accent-tertiary)" />
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>SE Student</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Software Engineering Degree
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
