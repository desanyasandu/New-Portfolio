import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fetchGithubProjects } from '../services/githubService';
import type { Project } from '../types/portfolio';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);


const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      className="glass" 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '520px',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        height: '240px', 
        width: '100%', 
        overflow: 'hidden', 
        position: 'relative',
        background: '#111'
      }}>
        {project.badge && (
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 3,
            background: 'rgba(8, 3, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 193, 7, 0.4)',
            padding: '6px 14px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#ffc107',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(255, 193, 7, 0.25)'
          }}>
            <StarIcon size={12} />
            <span>{project.badge}</span>
          </div>
        )}
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }} 
          className="project-image"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(2,2,5,0.9))'
        }}></div>
      </div>

      <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          marginBottom: '12px', 
          textTransform: 'capitalize',
          letterSpacing: '-0.02em'
        }}>
          {project.title}
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          color: 'rgba(255,255,255,0.5)', 
          lineHeight: 1.6, 
          marginBottom: '24px',
          flexGrow: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
          {project.tech.map(t => (
            <span key={t} style={{ 
              fontSize: '0.75rem', 
              padding: '6px 14px', 
              borderRadius: '100px', 
              background: 'rgba(255,255,255,0.05)', 
              color: 'var(--accent-secondary)',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(portfolioData.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const fetched = await fetchGithubProjects();
      
      let merged = [...portfolioData.projects];
      
      if (fetched.length > 0) {
        fetched.forEach(fetchedProj => {
          const index = merged.findIndex(p => p.github.toLowerCase() === fetchedProj.github.toLowerCase());
          if (index !== -1) {
            merged[index] = {
              ...merged[index],
              link: fetchedProj.link || merged[index].link,
              github: fetchedProj.github || merged[index].github
            };
          } else {
            merged.push(fetchedProj);
          }
        });
      }
      
      setProjects(merged);
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" style={{ padding: '160px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.03em' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '640px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
            A curated collection of my work, ranging from systems optimization to full-stack applications.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
          gap: '48px' 
        }}>
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            
            {/* GitHub Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: projects.length * 0.1, duration: 0.6 }}
            >
              <div 
                className="glass" 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '520px',
                  textAlign: 'center',
                  padding: '48px',
                  borderStyle: 'dashed'
                }}
              >
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  borderRadius: '32px', 
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px'
                }}>
                  <GithubIcon size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  Explore <span className="text-gradient">More</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Visit my GitHub to see all of my projects, contributions, and active experiments.
                </p>
                <a 
                  href={portfolioData.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn interactive" 
                >
                  View My GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {loading && (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px', 
            color: 'var(--accent-secondary)',
            fontWeight: 600,
            letterSpacing: '4px',
            fontSize: '0.9rem'
          }}>
            RETRIVING LATEST REPOS...
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
