import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Heart, Sparkles, Code2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './ui/MagneticButton';

export default function Footer() {
  const { personal, contact } = portfolioData;
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(7, 9, 14, 0.95)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem'
          }}
        >
          {/* Brand Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: '#ffffff'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--grad-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
              }}
            >
              <Sparkles size={18} color="#ffffff" />
            </div>
            <span>
              {personal.name}
              <span style={{ color: 'var(--accent-cyan)' }}>.</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem'
            }}
          >
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Education', id: 'education' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons Bar */}
          <div style={{ display: 'flex', gap: '0.85rem' }}>
            {contact.socials.map((s) => (
              <MagneticButton
                key={s.name}
                as="a"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {s.name === 'GitHub' && <Github size={18} />}
                {s.name === 'LinkedIn' && <Linkedin size={18} />}
                {s.name === 'LeetCode' && <Code2 size={18} color="#f59e0b" />}
                {s.name === 'CodeChef' && <Award size={18} color="#f97316" />}
                {s.name === 'Twitter / X' && <Twitter size={18} />}
                {s.name === 'Dribbble' && <Dribbble size={18} />}
              </MagneticButton>
            ))}
          </div>

          <div style={{ width: '100%', maxWidth: '500px', height: '1px', background: 'var(--border-subtle)', margin: '0.5rem 0' }} />

          {/* Copyright & Subtext */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div>
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              Crafted with React, Framer Motion & CSS Magic.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 900,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.5)'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
