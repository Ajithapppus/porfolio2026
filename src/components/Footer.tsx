import React from 'react';
import { ArrowUp, Linkedin, Instagram, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-neutral-900 py-16 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_#7C3AED]" />
              <span className="font-['Outfit'] font-extrabold text-2xl tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Digital Marketing Professional · SEO Specialist · Performance Marketer
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Thiruvananthapuram, Kerala, India
            </p>
          </div>

          {/* Nav / Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-violet-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>Email</span>
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-violet-500/40 text-neutral-300 hover:text-white text-xs font-semibold transition-all group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-violet-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright notice & unboxed metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Ajith B. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with precision in Kerala</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Performance &amp; SEO Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
