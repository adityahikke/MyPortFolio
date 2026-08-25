import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Atom, 
  Layers, 
  FileCode2, 
  Code2, 
  Sparkles, 
  Globe, 
  Palette, 
  Box, 
  Terminal, 
  Cpu, 
  Network, 
  Boxes, 
  Radio, 
  ShieldCheck, 
  HardDrive, 
  Zap, 
  Workflow, 
  Flame, 
  Container, 
  GitBranch, 
  UploadCloud, 
  RotateCw, 
  Figma, 
  Cog, 
  CheckCircle2, 
  FileText, 
  Sliders 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      case 'Wrench': return <Wrench size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Atom size={20} color="#06b6d4" />;
      case 'Layers': return <Layers size={20} color="#ffffff" />;
      case 'FileCode2': return <FileCode2 size={20} color="#38bdf8" />;
      case 'Code2': return <Code2 size={20} color="#f59e0b" />;
      case 'Sparkles': return <Sparkles size={20} color="#a855f7" />;
      case 'Globe': return <Globe size={20} color="#f97316" />;
      case 'Palette': return <Palette size={20} color="#38bdf8" />;
      case 'Box': return <Box size={20} color="#ec4899" />;
      case 'Terminal': return <Terminal size={20} color="#22c55e" />;
      case 'Cpu': return <Cpu size={20} color="#38bdf8" />;
      case 'Network': return <Network size={20} color="#e11d48" />;
      case 'Boxes': return <Boxes size={20} color="#6366f1" />;
      case 'Radio': return <Radio size={20} color="#06b6d4" />;
      case 'ShieldCheck': return <ShieldCheck size={20} color="#10b981" />;
      case 'HardDrive': return <HardDrive size={20} color="#22c55e" />;
      case 'Zap': return <Zap size={20} color="#ef4444" />;
      case 'Workflow': return <Workflow size={20} color="#8b5cf6" />;
      case 'Flame': return <Flame size={20} color="#f59e0b" />;
      case 'Container': return <Container size={20} color="#0284c7" />;
      case 'GitBranch': return <GitBranch size={20} color="#f97316" />;
      case 'UploadCloud': return <UploadCloud size={20} color="#ffffff" />;
      case 'RotateCw': return <RotateCw size={20} color="#10b981" />;
      case 'Figma': return <Figma size={20} color="#a855f7" />;
      case 'Cog': return <Cog size={20} color="#fbbf24" />;
      case 'CheckCircle2': return <CheckCircle2 size={20} color="#10b981" />;
      case 'FileText': return <FileText size={20} color="#f97316" />;
      case 'Sliders': return <Sliders size={20} color="#06b6d4" />;
      default: return <Code2 size={20} color="#6366f1" />;
    }
  };

  // Filter skills based on selected category tab
  const displayedCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badgeText="Technical Arsenal"
          title="Skills & Technologies"
          subtitle="Modern languages, frameworks, databases, and development workflows I specialize in."
        />

        {/* Category Tabs Switcher */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.6rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              border: activeCategory === 'all' ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
              background: activeCategory === 'all' ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)' : 'rgba(255, 255, 255, 0.04)',
              color: activeCategory === 'all' ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Sparkles size={16} color={activeCategory === 'all' ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
            <span>All Categories</span>
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1.25rem',
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
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Showcase Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Title Header */}
              {activeCategory === 'all' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                    {category.name}
                  </h3>
                </div>
              )}

              {/* Skills Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {category.skills.map((skill, idx) => (
                  <TiltCard
                    key={skill.name}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    style={{
                      padding: '1.25rem',
                      background: 'rgba(15, 20, 34, 0.65)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getSkillIcon(skill.icon)}
                        </div>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Modern Glowing Progress Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.07)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                        style={{
                          height: '100%',
                          borderRadius: '9999px',
                          background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                        }}
                      />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
