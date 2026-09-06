import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fetchGithubProjects } from '../services/githubService';
import type { Project } from '../types/portfolio';
import { ExternalLink, Zap, Play, X } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

interface VideoEmbedInfo {
  type: 'linkedin' | 'youtube' | 'video' | 'external';
  embedUrl: string;
  externalUrl: string;
}

const resolveVideoEmbed = (url?: string): VideoEmbedInfo | null => {
  if (!url) return null;

  // LinkedIn activity post match
  const linkedInActivityMatch = url.match(/activity[-:]([0-9]+)/i) || url.match(/activity\/([0-9]+)/i);
  if (url.includes('linkedin.com') && linkedInActivityMatch) {
    const activityId = linkedInActivityMatch[1];
    return {
      type: 'linkedin',
      embedUrl: `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`,
      externalUrl: url
    };
  }

  // YouTube match
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
      externalUrl: url
    };
  }

  // Direct video file
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) {
    return {
      type: 'video',
      embedUrl: url,
      externalUrl: url
    };
  }

  return {
    type: 'external',
    embedUrl: url,
    externalUrl: url
  };
};

const VideoModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project || !project.demoVideo) return null;

  const embedInfo = resolveVideoEmbed(project.demoVideo);
  if (!embedInfo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 7, 14, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="glass glow-card"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(18, 21, 30, 0.96)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(99, 102, 241, 0.25)'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(255, 255, 255, 0.02)',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'var(--bg-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-secondary)',
              boxShadow: 'var(--neu-inset)',
              flexShrink: 0
            }}>
              <Play size={13} fill="currentColor" />
            </div>
            <div style={{ minWidth: 0 }}>
              <h4 style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {project.title}
              </h4>
              <span style={{ fontSize: '0.74rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                Demo Video Walkthrough
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <a
              href={embedInfo.externalUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '6px 14px',
                borderRadius: '100px',
                background: 'rgba(34, 211, 238, 0.12)',
                border: '1px solid rgba(34, 211, 238, 0.35)',
                color: 'var(--accent-secondary)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              className="interactive"
            >
              <span>Open on {embedInfo.type === 'linkedin' ? 'LinkedIn' : 'External'}</span>
              <ExternalLink size={12} />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              className="interactive"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video / Embed Content */}
        <div style={{
          position: 'relative',
          background: '#07090e',
          width: '100%',
          minHeight: '440px',
          maxHeight: '68vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: embedInfo.type === 'linkedin' ? '12px' : '0'
        }}>
          {embedInfo.type === 'linkedin' ? (
            <div style={{ width: '100%', maxWidth: '710px', margin: '0 auto' }}>
              <iframe
                src={embedInfo.embedUrl}
                style={{
                  width: '100%',
                  height: '490px',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
                allowFullScreen
                title={`${project.title} LinkedIn Video Demo`}
              />
            </div>
          ) : embedInfo.type === 'youtube' ? (
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                src={embedInfo.embedUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.title} Video Demo`}
              />
            </div>
          ) : embedInfo.type === 'video' ? (
            <video
              src={embedInfo.embedUrl}
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '48px' }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
                This project demo is hosted on an external platform.
              </p>
              <a
                href={embedInfo.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="btn interactive"
              >
                Watch on External Site ↗
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer banner */}
        <div style={{
          padding: '12px 22px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'rgba(255, 255, 255, 0.55)',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span>
            {embedInfo.type === 'linkedin'
              ? 'Embedded via LinkedIn official player. You can also open the original post to interact.'
              : 'Interactive demo player'}
          </span>
          <a
            href={embedInfo.externalUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontWeight: 600 }}
          >
            Direct Post Link ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  onOpenDemo: (project: Project) => void;
}> = ({ project, onOpenDemo }) => {
  return (
    <motion.div 
      className={`glass ${project.featured ? 'glow-card' : ''}`}
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '560px',
        height: '100%',
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
          background: 'linear-gradient(to bottom, transparent 55%, rgba(3,4,11,0.95))'
        }}></div>

        {/* Demo Pill on bottom-right of project image */}
        {project.demoVideo && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDemo(project);
            }}
            className="project-demo-pill interactive"
            title="Watch Project Demo"
          >
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              border: '1.8px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.12)'
            }}>
              <Play size={10} fill="#ffffff" color="#ffffff" style={{ marginLeft: '1.5px' }} />
            </div>
            <span>Demo</span>
          </button>
        )}
      </div>

      <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ 
          fontSize: '1.4rem', 
          fontWeight: 700, 
          marginBottom: '10px', 
          letterSpacing: '-0.02em',
          color: '#fff'
        }}>
          {project.title}
        </h3>
        <p style={{ 
          fontSize: '0.95rem', 
          color: 'rgba(255,255,255,0.6)', 
          lineHeight: 1.55, 
          marginBottom: project.highlights && project.highlights.length > 0 ? '16px' : '24px'
        }}>
          {project.description}
        </p>

        {/* Enterprise Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div style={{
            marginBottom: '20px',
            padding: '14px 16px',
            background: 'var(--bg-deep)',
            borderRadius: '14px',
            boxShadow: 'var(--neu-inset)',
            border: '1px solid rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: 'var(--accent-secondary)',
              marginBottom: '8px'
            }}>
              <Zap size={13} style={{ color: 'var(--accent-secondary)' }} />
              <span>Architecture & Engineering</span>
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              {project.highlights.map((h, idx) => (
                <li key={idx} style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  <span style={{
                    color: 'var(--accent-primary)',
                    marginTop: '2px',
                    fontSize: '0.75rem',
                    flexShrink: 0
                  }}>▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags and Direct Links */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: 'auto',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', flex: '1 1 auto' }}>
            {project.tech.map(t => (
              <span key={t} style={{ 
                fontSize: '0.72rem', 
                padding: '4px 10px', 
                borderRadius: '100px', 
                background: 'var(--bg-deep)', 
                color: 'var(--accent-secondary)',
                fontWeight: 600, 
                boxShadow: 'var(--neu-inset)',
                border: '1px solid rgba(0, 0, 0, 0.3)'
              }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: 'auto', flexShrink: 0 }}>
            {project.demoVideo && (
              <button
                type="button"
                onClick={() => onOpenDemo(project)}
                title="Watch Demo Video"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  color: 'var(--accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer'
                }}
                className="neu-icon-btn interactive"
              >
                <Play size={15} fill="currentColor" />
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                title="View GitHub Repository"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px'
                }}
                className="neu-icon-btn interactive"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                title="Open Project / Video"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  color: 'var(--accent-secondary)'
                }}
                className="neu-icon-btn interactive"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(portfolioData.projects);
  const [loading, setLoading] = useState(true);
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);

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
                <ProjectCard project={project} onOpenDemo={(p) => setActiveVideoProject(p)} />
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
                  minHeight: '560px', 
                  height: '100%', 
                  textAlign: 'center', 
                  padding: '48px', 
                  borderStyle: 'dashed' 
                }}
              >
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  borderRadius: '28px', 
                  background: 'var(--bg-deep)', 
                  boxShadow: 'var(--neu-inset)', 
                  border: '1px solid rgba(0, 0, 0, 0.4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '32px', 
                  color: 'var(--accent-secondary)' 
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

      {/* Internal Video Modal Player */}
      <AnimatePresence>
        {activeVideoProject && (
          <VideoModal
            project={activeVideoProject}
            onClose={() => setActiveVideoProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
