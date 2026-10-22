import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Download, 
  Sparkles,
  Phone,
  Code2,
  Award,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import MagneticButton from './ui/MagneticButton';
import Toast from './ui/Toast';

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const emailService = contact.emailService || {};

      // Option 1: Formspree — Easiest! Just sign up at formspree.io, verify email. No form creation needed.
      if (emailService.formspreeEndpoint && emailService.formspreeEndpoint.startsWith("https://formspree.io/f/")) {
        const response = await fetch(emailService.formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
          }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Formspree failed");
      }
      // Option 2: EmailJS REST API
      else if (emailService.emailJsServiceId && emailService.emailJsTemplateId && emailService.emailJsPublicKey) {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: emailService.emailJsServiceId,
            template_id: emailService.emailJsTemplateId,
            user_id: emailService.emailJsPublicKey,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject || `Message from ${formData.name}`,
              message: formData.message,
              to_email: contact.email
            }
          })
        });
        if (!response.ok) throw new Error("EmailJS service error");
      }
      // Option 3: Open Gmail compose in browser (pre-filled with form data)
      else {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${contact.email}&su=${encodeURIComponent(
          formData.subject || `Portfolio Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(gmailUrl, '_blank');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      } catch (err) { /* ignore */ }

      showToast(`Thank you ${formData.name}! Message delivered to ${contact.email} ✓`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);

    } catch (error) {
      console.error("Email error:", error);
      setIsSubmitting(false);
      // Fallback: open Gmail compose
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${contact.email}&su=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(gmailUrl, '_blank');
      showToast("Opening Gmail to send the message!", "success");
    }
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <Github size={18} />;
      case 'LinkedIn': return <Linkedin size={18} />;
      case 'LeetCode': return <Code2 size={18} color="#f59e0b" />;
      case 'CodeChef': return <Award size={18} color="#f97316" />;
      case 'Twitter / X': return <Twitter size={18} />;
      case 'Dribbble': return <Dribbble size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badgeText="Get In Touch"
          title="Let's Build Something Extraordinary"
          subtitle="Have an ambitious project, a question, or a new opportunity? Feel free to reach out directly or send a message."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '2.5rem'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Direct Email Card */}
            <TiltCard style={{ padding: '1.75rem', background: 'rgba(15, 20, 34, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    DIRECT INBOX
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                    {contact.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: copiedEmail ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                  color: copiedEmail ? '#34d399' : '#e2e8f0',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </TiltCard>

            {/* Location & Time Info */}
            <TiltCard style={{ padding: '1.75rem', background: 'rgba(15, 20, 34, 0.75)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} color="var(--accent-indigo)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      LOCATION
                    </div>
                    <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#ffffff' }}>
                      {contact.location}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} color="var(--accent-indigo)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      PHONE
                    </div>
                    <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#ffffff' }}>
                      {contact.phone}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GraduationCap size={18} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      COLLEGE
                    </div>
                    <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#ffffff' }}>
                      {contact.college}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={18} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      TIME ZONE
                    </div>
                    <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#ffffff' }}>
                      {contact.timeZone}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Social Links Matrix & Resume Download */}
            <TiltCard style={{ padding: '1.75rem', background: 'rgba(15, 20, 34, 0.75)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                SOCIAL & CODING PROFILES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.25rem' }}>
                {contact.socials.map((s) => (
                  <MagneticButton
                    key={s.name}
                    as="a"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.5rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {getSocialIcon(s.name)}
                    <span>{s.name}</span>
                  </MagneticButton>
                ))}
              </div>

              <MagneticButton
                as="a"
                href={personal.resumeUrl}
                download="ECE2K23194_AdityaHikke_Resume.pdf"
                className="btn-secondary"
                style={{ width: '100%', padding: '0.7rem' }}
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </MagneticButton>
            </TiltCard>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TiltCard
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              style={{
                padding: '2.25rem',
                background: 'rgba(16, 22, 38, 0.85)'
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-two-cols">
                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Your Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        borderColor: errors.name ? '#ef4444' : undefined
                      }}
                    />
                    {errors.name && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Your Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        borderColor: errors.email ? '#ef4444' : undefined
                      }}
                    />
                    {errors.email && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                {/* Message Textarea */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Message <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    className="form-input"
                    rows={5}
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      resize: 'vertical',
                      borderColor: errors.message ? '#ef4444' : undefined
                    }}
                  />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : isSubmitted ? (
                    <>
                      <Check size={18} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </MagneticButton>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Global Toast Component */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-two-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
