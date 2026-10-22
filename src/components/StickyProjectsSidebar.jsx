import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ChevronRight, 
  ChevronLeft, 
  Layers, 
  Eye,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function StickyProjectsSidebar() {
  const { projects } = portfolioData;
  // Get top 2 projects
  const topProjects = projects.slice(0, 2);

  // Default expanded on larger desktop, collapsed on smaller screens
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Sticky Dock on Right Middle */}
      <aside
        id="sticky-top-projects"
        aria-label="Top Featured Projects Sidebar"
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 990,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            /* EXPANDED DOCK */
            <motion.div
              key="expanded"
              initial={{ x: 260, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 260, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{
                width: '280px',
                background: 'rgba(10, 14, 24, 0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRight: 'none',
                borderRadius: '16px 0 0 16px',
                boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.65), 0 0 20px rgba(99, 102, 241, 0.15)',
                padding: '1.1rem 1rem',
                position: 'relative',
                color: '#ffffff'
              }}
            >
              {/* Header / Collapse Toggle */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.85rem',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Flame size={16} color="#f59e0b" style={{ filter: 'drop-shadow(0 0 6px #f59e0b)' }} />
                  <span
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Top Projects
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.1rem 0.4rem',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                      color: '#ffffff'
                    }}
                  >
                    2
                  </span>
                </div>

                <button
                  onClick={() => setIsExpanded(false)}
                  title="Collapse sidebar"
                  aria-label="Collapse top projects sidebar"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <ChevronRight size={15} />
                </button>
              </div>

              {/* Projects List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {topProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    style={{
                      background: 'rgba(18, 24, 38, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '12px',
                      padding: '0.65rem',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.45)';
                      e.currentTarget.style.transform = 'translateX(-3px)';
                      e.currentTarget.style.background = 'rgba(22, 30, 48, 0.85)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.background = 'rgba(18, 24, 38, 0.7)';
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      {/* Thumbnail */}
                      <div
                        onClick={() => setSelectedProject(proj)}
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          flexShrink: 0,
                          cursor: 'pointer',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          onClick={() => setSelectedProject(proj)}
                          style={{
                            fontSize: '0.825rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            cursor: 'pointer'
                          }}
                          title={proj.title}
                        >
                          {proj.title}
                        </div>
                        <div
                          style={{
                            fontSize: '0.7rem',
                            color: 'var(--accent-cyan)',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {idx === 0 ? 'Full-Stack • Spring + React' : 'AI/ML • XGBoost + SHAP'}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.35rem',
                        paddingTop: '0.45rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <button
                        onClick={() => setSelectedProject(proj)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.2rem 0'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        <Eye size={12} />
                        <span>Details</span>
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Source Code"
                          aria-label={`Source code for ${proj.title}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#ffffff',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'}
                        >
                          <Github size={12} />
                        </a>

                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Demo"
                            aria-label={`Live demo for ${proj.title}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              padding: '0.25rem 0.55rem',
                              borderRadius: '6px',
                              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                              color: '#ffffff',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              textDecoration: 'none',
                              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.35)'
                            }}
                          >
                            <span>Live</span>
                            <ArrowUpRight size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* COLLAPSED TAB BUTTON */
            <motion.button
              key="collapsed"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              onClick={() => setIsExpanded(true)}
              title="Click to view Top Projects"
              aria-label="Expand Top Projects sidebar"
              style={{
                background: 'rgba(12, 17, 29, 0.92)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRight: 'none',
                borderRadius: '12px 0 0 12px',
                boxShadow: '-6px 0 25px rgba(0, 0, 0, 0.55), 0 0 16px rgba(99, 102, 241, 0.25)',
                padding: '0.85rem 0.6rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.55rem',
                cursor: 'pointer',
                color: '#ffffff',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(20, 26, 44, 0.98)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
                e.currentTarget.style.transform = 'translateX(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(12, 17, 29, 0.92)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <ChevronLeft size={16} color="var(--accent-cyan)" />
              <Flame size={18} color="#f59e0b" style={{ filter: 'drop-shadow(0 0 8px #f59e0b)' }} />
              <span
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#e2e8f0',
                  marginTop: '0.2rem'
                }}
              >
                Top Projects
              </span>
              <span
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.35rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  color: '#ffffff'
                }}
              >
                2
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </aside>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 820px) {
          #sticky-top-projects {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
