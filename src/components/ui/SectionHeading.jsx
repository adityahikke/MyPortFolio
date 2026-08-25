import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badgeText = "Section",
  title = "Heading Title",
  subtitle = "",
  centered = true
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {badgeText && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: '#818cf8',
            border: '1px solid rgba(99, 102, 241, 0.25)'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1' }}></span>
          {badgeText}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: '#ffffff',
          marginBottom: '0.75rem'
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: centered ? '0 auto' : '0',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: '60px',
          height: '3px',
          background: 'var(--grad-primary)',
          borderRadius: '9999px',
          margin: centered ? '1.25rem auto 0' : '1.25rem 0 0',
          transformOrigin: centered ? 'center' : 'left'
        }}
      />
    </div>
  );
}
