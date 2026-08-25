import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      {/* Ambient Glow */}
      <div className="ambient-glow-3" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeading
          badgeText="Career Journey"
          title="Professional Experience"
          subtitle="A track record of engineering scalable platforms, leading technical teams, and shipping production-grade applications."
        />

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '2.5rem'
          }}
          className="experience-timeline"
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '12px',
              width: '2px',
              background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 50%, #a855f7 100%)',
              boxShadow: '0 0 12px rgba(99, 102, 241, 0.6)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline Indicator Dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '-2.5rem',
                    transform: 'translateX(-50%)',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid #6366f1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px #6366f1',
                    zIndex: 2
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)'
                    }}
                  />
                </div>

                {/* Experience Card */}
                <TiltCard
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  style={{
                    padding: '2rem',
                    background: 'rgba(16, 22, 36, 0.75)'
                  }}
                >
                  {/* Header Row: Role & Period */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '0.35rem'
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '0.85rem',
                          color: 'var(--accent-cyan)',
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                      >
                        <span style={{ color: '#ffffff' }}>{exp.company}</span>
                        <span>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        color: '#c7d2fe',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Key Achievements Bullets */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.88rem',
                          color: '#cbd5e1',
                          lineHeight: 1.55
                        }}
                      >
                        <ChevronRight size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .experience-timeline {
            padding-left: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
