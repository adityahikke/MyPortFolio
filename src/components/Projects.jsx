import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import MagneticButton from './ui/MagneticButton';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Spring Boot', 'React', 'AI', 'Web Portal'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badgeText="Featured Work"
          title="My Projects"
          subtitle="A showcase of real-world platforms built with Spring Boot, React, AI, and Cloud technologies."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  border: isActive ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
              >
                <TiltCard
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    background: 'rgba(15, 20, 34, 0.75)'
                  }}
                >
                  <div>
                    {/* Visual Preview with Hover Zoom */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/10',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        marginBottom: '1.25rem',
                        border: '1px solid var(--border-subtle)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.06)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />

                      {/* Overlay On Hover */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(7, 9, 14, 0.8) 0%, rgba(7, 9, 14, 0.2) 60%, transparent 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: '1rem',
                          opacity: 0.9
                        }}
                      >
                        <span
                          style={{
                            padding: '0.25rem 0.65rem',
                            borderRadius: '9999px',
                            background: 'rgba(99, 102, 241, 0.3)',
                            border: '1px solid rgba(99, 102, 241, 0.5)',
                            color: '#e0e7ff',
                            fontSize: '0.725rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.35rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} color="var(--accent-cyan)" />
                    </h3>

                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                        fontWeight: 600,
                        marginBottom: '0.75rem'
                      }}
                    >
                      {project.tagline}
                    </p>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-pill" style={{ fontSize: '0.725rem', padding: '0.2rem 0.55rem' }}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-pill" style={{ fontSize: '0.725rem', padding: '0.2rem 0.55rem', opacity: 0.7 }}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <MagneticButton
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff'
                        }}
                      >
                        <Github size={15} />
                      </MagneticButton>

                      <MagneticButton
                        as="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                          color: '#ffffff',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          border: 'none'
                        }}
                      >
                        <span>Demo</span>
                        <ExternalLink size={13} />
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
