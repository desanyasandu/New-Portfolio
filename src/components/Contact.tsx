import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback to mailto if access key is not yet configured
      const emailTo = portfolioData.socials.email || 'desanyasandu@gmail.com';
      const emailSubject = encodeURIComponent(
        formData.subject ? formData.subject : `Portfolio Message from ${formData.name}`
      );
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Opening your email client to send message... (Configure VITE_WEB3FORMS_ACCESS_KEY in .env for direct sending)'
      });
      setTimeout(() => setStatusMessage(null), 6000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name} via Portfolio`,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent directly to my inbox.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: result.message || 'Something went wrong. Please try again or email directly.'
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Network error. Please try again or reach out directly via email.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 6000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--accent-secondary)',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            Contact
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div
            style={{
              height: '4px',
              width: '60px',
              background: 'var(--gradient-linear)',
              borderRadius: '10px',
              margin: '16px auto 0 auto'
            }}
          />
        </motion.div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              Let's build something great
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
              I'm always open to discussing new projects, design systems, API development, or opportunities to collaborate on innovative products.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--bg-deep)',
                    boxShadow: 'var(--neu-inset)',
                    border: '1px solid rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-secondary)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email Me</span>
                  <a href={`mailto:${portfolioData.socials.email}`} style={{ display: 'block', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }} className="interactive">
                    {portfolioData.socials.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--bg-deep)',
                    boxShadow: 'var(--neu-inset)',
                    border: '1px solid rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Based In</span>
                  <span style={{ display: 'block', color: '#fff', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass"
            style={{ padding: '40px', borderRadius: '28px' }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  style={{ resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn interactive"
                style={{
                  width: '100%',
                  padding: '1em 1.5em',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  background: statusMessage?.type === 'success' ? '#10b981' : statusMessage?.type === 'error' ? '#ef4444' : undefined
                }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : statusMessage?.type === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: '16px',
                      color: statusMessage.type === 'success' ? '#10b981' : '#f87171',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
