import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  Linkedin,
  Instagram,
  Phone,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    service: 'SEO & Organic Growth',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and a brief message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate reliable dispatch & log to local storage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('ajith_portfolio_inquiries') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('ajith_portfolio_inquiries', JSON.stringify(stored));
      } catch {
        // Safe fallback
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Ajith! I came across your portfolio. I'd like to discuss a project regarding ${
        formData.service || 'Digital Marketing'
      }.\n\nName: ${formData.name || 'Visitor'}\nMessage: ${
        formData.message || 'Looking forward to connecting!'
      }`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  const getDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Ajith,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0B0B] border-t border-neutral-900">
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <span>06. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Whether you want to scale your organic search presence, build a high-performance ad
            campaign, or develop a fast-converting web presence, let’s explore how we can accelerate
            your growth.
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Direct Contact Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/90 shadow-2xl shadow-black/80 relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-violet-950/80 border border-violet-500/40 flex items-center justify-center text-violet-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-white">{formData.name}</span>. I will review your requirements and respond within 24 hours.
                  </p>

                  <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          service: 'SEO & Organic Growth',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Nair"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white text-sm placeholder:text-neutral-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white text-sm placeholder:text-neutral-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Primary Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white text-sm outline-none transition-colors"
                      >
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook &amp; Instagram)</option>
                        <option value="Google Ads (Search & PMax)">Google Ads (Search &amp; PMax)</option>
                        <option value="WordPress Website Development">WordPress Website Development</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Analytics & GTM Tracking">Analytics &amp; GTM Tracking</option>
                        <option value="Full-Funnel Growth Consultation">Full-Funnel Growth Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Scale leads for medical clinic"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white text-sm placeholder:text-neutral-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Project Details &amp; Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your current marketing challenges, target audience, and business targets..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white text-sm placeholder:text-neutral-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Animated CTA Button with subtle violet glow */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-violet-950/60 hover:shadow-violet-600/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getDirectMailto()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-violet-400" />
                      <span>Send via Default Mail</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels, WhatsApp, Location, Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Fast Channel Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-neutral-900/60 border border-emerald-800/30 hover:border-emerald-600/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Instant Response
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp Direct Chat</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                Need a rapid response or want to brainstorm ideas directly? Connect with me directly on WhatsApp.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email Contact Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  Official Email
                </span>
                {copiedEmail && (
                  <span className="text-xs text-violet-300 font-mono animate-fade-in">
                    Copied to clipboard!
                  </span>
                )}
              </div>
              <p className="text-base font-mono text-white mb-4 break-all">
                {PERSONAL_INFO.email}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                  <span>Open Mail App</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Location</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Thiruvananthapuram, Kerala, India (IST / UTC+5:30)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Availability</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Open for select freelance projects &amp; retained advisory consultations
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links: LinkedIn, Instagram */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Professional Networks
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-violet-950/60 border border-neutral-800 hover:border-violet-500/40 text-neutral-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-violet-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-violet-950/60 border border-neutral-800 hover:border-violet-500/40 text-neutral-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
