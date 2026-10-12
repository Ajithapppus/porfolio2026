import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-900 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar: Conforming strictly to 3-zone contract */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-violet-900/20 py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_12px_#7C3AED] transition-transform group-hover:scale-125" />
            <span className="font-['Outfit'] font-extrabold text-xl tracking-tight text-white">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line text nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-neutral-300 hover:text-white transition-colors whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-violet-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                } else {
                  handleNavClick(e, '#contact');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-md shadow-violet-950/50 hover:shadow-violet-600/30 whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0e12]/95 backdrop-blur-xl border-b border-violet-900/30 px-6 py-6 transition-all duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-neutral-200 hover:text-violet-400 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    } else {
                      handleNavClick(e, '#contact');
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-wider text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
