import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Briefcase, 
  FolderCheck, 
  Star,
  Sparkles,
  ChevronDown,
  GraduationCap,
  Award,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './ui/MagneticButton';
import TiltCard from './ui/TiltCard';

export default function Hero() {
  const { personal, heroBadges } = portfolioData;

  // Typewriter / rotating title effect
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = personal.typedTitles[titleIndex % personal.typedTitles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullTitle.substring(0, displayedText.length + 1));
        if (displayedText === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentFullTitle.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, personal.typedTitles]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={16} color="#818cf8" />;
      case 'Code2': return <Code2 size={16} color="#38bdf8" />;
      case 'Award': return <Award size={16} color="#f59e0b" />;
      case 'Briefcase': return <Briefcase size={16} color="#818cf8" />;
      case 'FolderCheck': return <FolderCheck size={16} color="#38bdf8" />;
      case 'Star': return <Star size={16} color="#f59e0b" />;
      default: return <Sparkles size={16} color="#a855f7" />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Radial Ambient Backdrops */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="status-badge"
              style={{ marginBottom: '1.25rem' }}
            >
              <span className="status-dot" />
              <span>{personal.availability}</span>
            </motion.div>

            {/* Subtitle / Intro Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.05rem',
                color: 'var(--accent-cyan)',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}
            >
              Hello, I'm
            </motion.p>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                color: '#ffffff'
              }}
            >
              {personal.name}
            </motion.h1>

            {/* Dynamic Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
                  fontWeight: 700,
                  color: 'var(--text-secondary)'
                }}
              >
                I am a{' '}
                <span className="gradient-text" style={{ fontWeight: 800 }}>
                  {displayedText}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.2em',
                    backgroundColor: 'var(--accent-cyan)',
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    animation: 'pulse-dot 0.8s infinite'
                  }}
                />
              </h2>
            </motion.div>

            {/* Short Tagline / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem'
              }}
            >
              {personal.tagline} {personal.bioShort}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <MagneticButton
                as="a"
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personal.resumeUrl}
                download="ECE2K23194_AdityaHikke_Resume.pdf"
                className="btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                PROFILES:
              </span>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <Github size={18} />, href: personal.socialLinks.github, label: 'GitHub' },
                  { icon: <Linkedin size={18} />, href: personal.socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: <Code2 size={18} color="#f59e0b" />, href: personal.socialLinks.leetcode, label: 'LeetCode (1500+)' },
                  { icon: <Award size={18} color="#f97316" />, href: personal.socialLinks.codechef, label: 'CodeChef (2★)' },
                  { icon: <Mail size={18} />, href: `https://mail.google.com/mail/?view=cm&to=${personal.socialLinks.email}`, label: 'Email' }
                ].map((s, idx) => (
                  <MagneticButton
                    key={idx}
                    as="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s.icon}
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Avatar with 3D Card and Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* Glowing Ring Halo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '105%',
                height: '105%',
                borderRadius: '32px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(168, 85, 247, 0.4) 100%)',
                filter: 'blur(25px)',
                opacity: 0.7,
                zIndex: 0
              }}
            />

            {/* Main Avatar Container */}
            <TiltCard
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1.08',
                borderRadius: '28px',
                padding: '12px',
                background: 'rgba(15, 20, 32, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.25)',
                zIndex: 1
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onError={(e) => {
                    // Fallback to avatar photo if image load fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Subtle gradient vignette over avatar */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 9, 14, 0.7) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </TiltCard>

            {/* Floating Live Badges */}
            {heroBadges.map((badge, idx) => {
              const positions = [
                { top: '-18px', left: '-20px' },
                { bottom: '10px', left: '-28px' },
                { bottom: '20px', right: '-28px' }
              ];
              const pos = positions[idx] || {};

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    ...pos,
                    animationDelay: `${idx * 1.5}s`,
                    padding: '0.65rem 1rem',
                    background: 'rgba(15, 21, 35, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.6), 0 0 15px rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    zIndex: 2
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getBadgeIcon(badge.icon)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {badge.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>
                      {badge.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Scroll Down Mouse Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3.5rem',
            gap: '0.4rem',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} color="var(--accent-cyan)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-grid > div:first-child {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid > div:last-child {
            order: 1;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
