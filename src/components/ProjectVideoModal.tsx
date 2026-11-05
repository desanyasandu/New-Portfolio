import React, { useEffect, useId, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { resolveVideoEmbed } from '../utils/videoEmbed';
import { projectName } from './projectText';

interface Props {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, video[controls], [tabindex]:not([tabindex="-1"])';

type LenisWindow = Window & { __lenis?: { stop: () => void; start: () => void } };

const ProjectVideoModal: React.FC<Props> = ({ project, onClose }) => {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const embed = resolveVideoEmbed(project.demoVideo);
  const name = projectName(project.title);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const lenis = (window as LenisWindow).__lenis;
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      lenis?.start();
      opener?.focus?.();
    };
  }, [onClose]);

  if (!embed) return null;

  const sourceLabel = embed.type === 'linkedin' ? 'LinkedIn' : 'the original site';

  return (
    <motion.div
      className="video-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="video-modal__panel"
        data-lenis-prevent
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="video-modal__header">
          <h3 id={titleId} className="video-modal__title">{name} demo</h3>
          <a className="video-modal__open" href={embed.externalUrl} target="_blank" rel="noreferrer">
            Open on {sourceLabel}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          <button ref={closeRef} type="button" className="video-modal__close" onClick={onClose} aria-label="Close demo">
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div className="video-modal__stage" data-type={embed.type}>
          {embed.type === 'linkedin' && (
            <iframe
              src={embed.embedUrl}
              title={`${name} demo on LinkedIn`}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          {embed.type === 'youtube' && (
            <iframe
              src={embed.embedUrl}
              title={`${name} demo video`}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          {embed.type === 'video' && <video src={embed.embedUrl} controls autoPlay playsInline />}
          {embed.type === 'external' && (
            <p className="video-modal__fallback">
              This demo is hosted elsewhere.{' '}
              <a href={embed.externalUrl} target="_blank" rel="noreferrer">Watch it on the original site</a>.
            </p>
          )}
        </div>

        {embed.type === 'linkedin' && (
          <p className="video-modal__note">
            Video not loading? <a href={embed.externalUrl} target="_blank" rel="noreferrer">Watch it on LinkedIn</a>.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectVideoModal;
