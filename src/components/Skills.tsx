import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  name: string;
  proficiency: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

const skillsList: SkillItem[] = [
  { name: 'Next.js', proficiency: 95, category: 'Frontend' },
  { name: 'React.js', proficiency: 95, category: 'Frontend' },
  { name: 'TypeScript', proficiency: 90, category: 'Frontend' },
  { name: 'JavaScript', proficiency: 95, category: 'Frontend' },
  { name: 'HTML5 & CSS3', proficiency: 95, category: 'Frontend' },
  { name: 'Framer Motion', proficiency: 85, category: 'Frontend' },
  { name: 'Java (Spring Boot)', proficiency: 85, category: 'Backend' },
  { name: 'Python', proficiency: 80, category: 'Backend' },
  { name: 'Node.js', proficiency: 80, category: 'Backend' },
  { name: 'REST APIs', proficiency: 90, category: 'Backend' },
  { name: 'MySQL', proficiency: 85, category: 'Database' },
  { name: 'MongoDB', proficiency: 80, category: 'Database' },
  { name: 'PostgreSQL', proficiency: 75, category: 'Database' },
  { name: 'Git & GitHub', proficiency: 90, category: 'Tools' },
  { name: 'CI/CD', proficiency: 75, category: 'Tools' },
  { name: 'Docker', proficiency: 70, category: 'Tools' },
  { name: 'VS Code / JetBrains', proficiency: 95, category: 'Tools' }
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Frontend' | 'Backend' | 'Database' | 'Tools'>('Frontend');

  const categories: Array<'Frontend' | 'Backend' | 'Database' | 'Tools'> = [
    'Frontend',
    'Backend',
    'Database',
    'Tools'
  ];

  const filteredSkills = skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(34, 211, 238, 0.1)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
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
            My Skills
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Technical <span className="text-gradient">Expertise</span>
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

        {/* Tab Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}
        >
          <div
            className="glass"
            style={{
              display: 'flex',
              padding: '6px',
              borderRadius: '100px',
              gap: '4px',
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`tab-btn interactive ${activeTab === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Bars Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem'
          }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px'
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{skill.name}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="progress-bar-track">
                  <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
