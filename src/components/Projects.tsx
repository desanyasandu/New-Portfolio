import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fetchGithubRepos, type GithubRepo } from '../services/githubService';
import type { Project } from '../types/portfolio';
import ProjectVideoModal from './ProjectVideoModal';
import { projectName, projectTagline, splitHighlight } from './projectText';
import './projects.css';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

interface ProjectRowProps {
  project: Project;
  flipped: boolean;
  priority: boolean;
  onOpenDemo: (project: Project) => void;
}

const ProjectRow = memo(({ project, flipped, priority, onOpenDemo }: ProjectRowProps) => {
  const reduceMotion = useReducedMotion();

  const name = projectName(project.title);
  const tagline = projectTagline(project.title);
  const hasDetails = Boolean(project.highlights?.length);

  const rise = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -80px 0px' },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <article className="project" data-flipped={flipped || undefined}>
      <motion.div className="project__media" {...rise()}>
        {project.demoVideo ? (
          // Mouse convenience only: the labelled "Watch demo" button below is the keyboard/AT path.
          <button
            type="button"
            className="project__poster"
            onClick={() => onOpenDemo(project)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <img
              src={project.image}
              alt=""
              width={1280}
              height={720}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className="project__poster-play"><Play size={20} fill="currentColor" aria-hidden="true" /></span>
          </button>
        ) : (
          <div className="project__poster">
            <img src={project.image} alt={`${name} screenshot`} width={1280} height={720} loading="lazy" decoding="async" />
          </div>
        )}
      </motion.div>

      <motion.div className="project__body" {...rise(0.08)}>
        {project.badge && (
          <p className="project__badge">
            <Star size={15} fill="currentColor" aria-hidden="true" />
            {project.badge}
          </p>
        )}
        <h3 className="project__name">{name}</h3>
        {tagline && <p className="project__tagline">{tagline}</p>}
        <p className="project__summary">{project.description}</p>

        <ul className="project__tech" aria-label={`${name} technologies`}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project__actions">
          {project.demoVideo && (
            <button type="button" className="btn-solid" onClick={() => onOpenDemo(project)}>
              <Play size={14} fill="currentColor" aria-hidden="true" />
              Watch demo
            </button>
          )}
          {project.github && (
            <a className="btn-text" href={project.github} target="_blank" rel="noreferrer">
              <GithubIcon size={16} />
              Source code
              <span className="sr-only"> for {name} (opens in a new tab)</span>
            </a>
          )}
          {project.link && (
            <a className="btn-text" href={project.link} target="_blank" rel="noreferrer">
              {/linkedin\.com|lnkd\.in/.test(project.link) ? 'LinkedIn post' : 'Live project'}
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> for {name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </motion.div>

      {hasDetails && (
        <section className="project__details" aria-label={`${name} architecture and engineering`}>
          <h4>Architecture &amp; engineering</h4>
          <ul className="project__highlights">
            {project.highlights!.map((h) => {
              const { lead, text } = splitHighlight(h);
              return (
                <li key={h}>
                  {lead && <strong>{lead}</strong>}
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
});
ProjectRow.displayName = 'ProjectRow';

const MoreOnGithub: React.FC<{ repos: GithubRepo[] }> = ({ repos }) => (
  <div className="more">
    <div className="more__head">
      <h3>More on GitHub</h3>
      <a className="btn-text" href={portfolioData.socials.github} target="_blank" rel="noreferrer">
        All repositories
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
    {repos.length > 0 && (
      <ul className="more__list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.homepage || repo.url} target="_blank" rel="noreferrer" className="more__item">
              <span className="more__name">{repo.name}</span>
              <span className="more__desc">{repo.description}</span>
              {repo.language && <span className="more__lang">{repo.language}</span>}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Projects: React.FC = () => {
  const featured = portfolioData.projects;
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchGithubRepos(controller.signal).then((fetched) => {
      if (!controller.signal.aborted) setRepos(fetched);
    });
    return () => controller.abort();
  }, []);

  // Repos already shown as featured projects are not repeated in the list.
  const extraRepos = useMemo(() => {
    const known = new Set(featured.map((p) => p.github.toLowerCase()));
    return repos.filter((r) => !known.has(r.url.toLowerCase()));
  }, [repos, featured]);

  const openDemo = useCallback((project: Project) => setActiveProject(project), []);
  const closeDemo = useCallback(() => setActiveProject(null), []);

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="projects__intro">
          <h2 id="projects-title">Projects</h2>
          <p>
            Systems I designed and built end to end, from offline-first field apps to
            collaborative tooling. Each one has a short demo and the source on GitHub.
          </p>
        </header>

        <div className="projects__list">
          {featured.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              flipped={i % 2 === 1}
              priority={i === 0}
              onOpenDemo={openDemo}
            />
          ))}
        </div>

        <MoreOnGithub repos={extraRepos} />
      </div>

      <AnimatePresence>
        {activeProject && <ProjectVideoModal project={activeProject} onClose={closeDemo} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
