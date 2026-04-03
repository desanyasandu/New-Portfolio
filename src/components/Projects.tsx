import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fetchGithubProjects } from '../services/githubService';
import type { Project } from '../types/portfolio';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      className="glass" 
      style={{ 
        position: 'relative', 
        borderRadius: '24px', 
        padding: '24px', 
        overflow: 'hidden', 
        transition: 'box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
        height: '480px'
      }}
    >
      <div style={{ 
        height: '200px', 
        width: '100%', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        marginBottom: '24px',
        position: 'relative'
      }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(5,5,10,0.5))'
        }}></div>
      </div>

      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', textTransform: 'capitalize' }}>
        {project.title}
      </h3>
      <p style={{ 
        fontSize: '0.9rem', 
        color: 'rgba(255,255,255,0.6)', 
        lineHeight: 1.5, 
        marginBottom: '20px',
        flexGrow: 1,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical'
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {project.tech.map(t => (
          <span key={t} style={{ 
            fontSize: '0.7rem', 
            padding: '4px 10px', 
            borderRadius: '20px', 
            background: 'var(--border-light)', 
            color: 'var(--accent-cyan)',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <a href={project.github} target="_blank" rel="noreferrer" className="interactive" style={{ 
          color: 'rgba(255,255,255,0.7)', 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          fontSize: '0.9rem' 
        }}>
          <GithubIcon /> Code
        </a>
        <a href={project.link} target="_blank" rel="noreferrer" className="interactive" style={{ 
          color: 'var(--accent-cyan)', 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          fontSize: '0.9rem',
          fontWeight: 600 
        }}>
          Live Demo <ExternalLinkIcon />
        </a>
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
      if (fetched.length > 0) {
        // Find existing project in fetched by title or github link, and update image if possible
        const merged = fetched.map(fetchedProj => {
           const staticMatch = portfolioData.projects.find(p => p.github.toLowerCase() === fetchedProj.github.toLowerCase());
           return {
             ...fetchedProj,
             image: staticMatch?.image || fetchedProj.image // Keep the premium image if defined statically
           };
        });
        setProjects(merged);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" style={{ padding: '120px 2rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '16px' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
            A dynamic showcase of my latest work, automated directly from my GitHub activity.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
          gap: '40px' 
        }}>
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="interactive"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            {/* GitHub Tile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: projects.length * 0.05, duration: 0.4 }}
              className="interactive"
            >
              <div 
                className="glass" 
                style={{ 
                  borderRadius: '24px', 
                  padding: '24px', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '480px',
                  textAlign: 'center',
                  border: '2px dashed var(--border-light)',
                  background: 'rgba(255,255,255,0.01)'
                }}
              >
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <GithubIcon />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', maxWidth: '280px' }}>
                  Visit My GitHub for <span className="text-gradient">All Projects</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px', fontSize: '0.9rem' }}>
                  Explore the full list of repositories and contributions.
                </p>
                <a 
                  href={portfolioData.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="interactive glass" 
                  style={{ 
                    padding: '12px 32px', 
                    borderRadius: '50px', 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    border: '1px solid var(--accent-cyan)'
                  }}
                >
                  View All Projects
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {loading && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--accent-cyan)',
            fontWeight: 600,
            letterSpacing: '2px'
          }}>
            FETCHING LATEST REPOSITORIES...
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
