import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badgeText="Academic Background"
          title="Education & Certifications"
          subtitle="Foundational engineering degree and continuous professional industry certifications."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.75rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="education-grid"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard
                style={{
                  height: '100%',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(15, 20, 34, 0.7)'
                }}
              >
                <div>
                  {/* Top Badge & Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {idx === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--accent-indigo)',
                      fontWeight: 600,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {edu.institution}
                  </div>

                  {/* Grade Badge */}
                  {edu.grade && (
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#34d399',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {edu.grade}
                    </div>
                  )}

                  {/* Highlights List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
                    {edu.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55
                        }}
                      >
                        <CheckCircle size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .education-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
