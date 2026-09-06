import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Zap, Layout } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    icon: <Globe size={32} />,
    title: 'Full-Stack Web Dev',
    description: 'Building end-to-end web applications with modern libraries like React, Vite, and robust Spring Boot / Node.js backends.',
    color: 'var(--accent-secondary)'
  },
  {
    icon: <Server size={32} />,
    title: 'Backend & APIs',
    description: 'Designing clean, decoupled RESTful APIs, securing microservices, and setting up performant SQL and NoSQL database schemas.',
    color: 'var(--accent-primary)'
  },
  {
    icon: <Zap size={32} />,
    title: 'Scripting & Automation',
    description: 'Developing shell/batch optimization scripts and automate background operations to maximize OS speed and app builds.',
    color: 'var(--accent-tertiary)'
  },
  {
    icon: <Layout size={32} />,
    title: 'Interactive Frontend',
    description: 'Crafting responsive user interfaces with premium layout grid structures, scroll interactions, and framer-motion transitions.',
    color: '#34d399' // Emerald/Green
  }
];

const Services: React.FC = () => {
  return (
    <section id="services">
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
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--accent-tertiary)',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            My Services
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            What I <span className="text-gradient">Deliver</span>
          </h2>
          <div
            style={{
              height: '4px',
              width: '60px',
              background: 'var(--gradient-linear-reverse)',
              borderRadius: '10px',
              margin: '16px auto 0 auto'
            }}
          />
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '40px 32px',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}
            >
              {/* Service Icon Container */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'var(--bg-deep)',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.color,
                  boxShadow: 'var(--neu-inset)'
                }}
              >
                {service.icon}
              </div>

              {/* Service Text */}
              <div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Glowing Corner Indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '40px',
                  height: '40px',
                  background: `radial-gradient(circle at top right, ${service.color} 0%, transparent 70%)`,
                  opacity: 0.3
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
