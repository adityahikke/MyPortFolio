import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Sparkles, 
  Zap, 
  Layers, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

/**
 * Animated Counter Component that animates from 0 to target number on scroll into view.
 */
function AnimatedCounter({ target, suffix = "", duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Number((easeOut * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { about, personal } = portfolioData;
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badgeText="About Me"
          title="Architecting Elegant & High-Impact Software"
          subtitle="A passionate developer dedicated to creating intuitive, scalable, and visually captivating digital products."
        />

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}
          className="about-bento"
        >
          {/* Card 1: Bio Story (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            style={{ gridColumn: 'span 7' }}
            className="bento-col-7"
          >
            <TiltCard
              style={{
                height: '100%',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}
                >
                  <Code2 size={18} />
                  <span>WHO I AM</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.4,
                    marginBottom: '1.25rem'
                  }}
                >
                  {about.headline}
                </h3>

                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {about.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Location & Time Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <MapPin size={15} color="var(--accent-indigo)" />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Clock size={15} color="var(--accent-cyan)" />
                  <span>Local Time: {localTime || "10:30 PM"} (PST)</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Live Metrics Grid (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ gridColumn: 'span 5' }}
            className="bento-col-5"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                height: '100%'
              }}
            >
              {about.stats.map((stat, idx) => (
                <TiltCard
                  key={idx}
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'rgba(18, 24, 38, 0.7)'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
                      fontWeight: 900,
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      marginBottom: '0.35rem',
                      lineHeight: 1
                    }}
                    className="gradient-text"
                  >
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Four Core Highlights / Principles (Cols 1-12 full width) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginTop: '0.5rem'
            }}
          >
            {about.highlights.map((h, idx) => {
              const icons = [
                <Zap size={20} color="#818cf8" />,
                <Sparkles size={20} color="#38bdf8" />,
                <Award size={20} color="#f59e0b" />,
                <Layers size={20} color="#34d399" />
              ];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <TiltCard
                    style={{
                      padding: '1.5rem',
                      height: '100%',
                      background: 'rgba(14, 19, 32, 0.6)'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      {icons[idx % icons.length]}
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                      {h.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {h.desc}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-col-7, .bento-col-5 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
