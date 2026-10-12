import React from 'react';
import { ArrowDown, Sparkles, Send, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Image path from generate_image tool
const HERO_PROFILE_IMG = '/src/assets/images/hero_ajith_profile_1791798681671.jpg';

const FLOATING_TAGS = [
  { label: 'SEO Mastery', position: 'top-6 -left-6 md:-left-8' },
  { label: 'Meta Ads', position: 'top-28 -right-4 md:-right-8' },
  { label: 'Google Ads', position: 'bottom-28 -left-4 md:-left-6' },
  { label: 'WordPress Dev', position: 'bottom-8 -right-6 md:-right-6' },
  { label: 'Performance ROI', position: '-top-4 right-12 hidden md:block' },
];

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle background tech grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean kicker text */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>Digital Marketing Professional · Kerala, India</span>
            </div>

            {/* Display headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6 text-balance">
              Turning Digital Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500">
                Measurable Growth.
              </span>
            </h1>

            {/* Sub-role label */}
            <p className="text-base sm:text-lg font-medium text-violet-300/90 mb-4">
              {PERSONAL_INFO.name} —{' '}
              <span className="text-neutral-300">
                SEO Specialist &amp; Performance Marketer
              </span>
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-neutral-300/90 leading-relaxed max-w-2xl mb-8">
              Empowering ambitious brands with data-engineered Search Engine Optimization,
              high-converting Meta and Google ad campaigns, high-speed WordPress web
              experiences, and sustainable social media traction that converts clicks into verified
              business revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-600/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Let's Work Together</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 hover:border-violet-500/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Briefcase className="w-4 h-4 text-violet-400" />
                <span>Explore My Work</span>
              </button>
            </div>

            {/* Quick trust highlights: unboxed clean metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 pt-6 border-t border-neutral-800/80">
              <span>Data-Driven Campaigns</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Zero Vanity Metrics</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Based in Thiruvananthapuram</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Global Client Reach</span>
            </div>
          </div>

          {/* Right Column: Profile visual presentation with glowing container and floating badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square">
              {/* Outer decorative glow frame */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-violet-600/30 via-purple-600/20 to-violet-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              {/* Main portrait container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-violet-500/30 bg-neutral-950/80 shadow-2xl shadow-violet-950/60">
                <img
                  src={HERO_PROFILE_IMG}
                  alt="Ajith B - Digital Marketing Professional & Performance Marketer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container in case image fails
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-violet-950/60 p-8 text-center">
                          <div class="w-20 h-20 rounded-full bg-violet-600/30 flex items-center justify-center mb-4 text-violet-300 font-bold text-2xl">AB</div>
                          <h3 class="text-xl font-bold text-white">Ajith B</h3>
                          <p class="text-xs text-neutral-400 mt-1">Digital Marketing Professional</p>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle gradient vignette at bottom */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Bottom title strip inside photo container */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">Ajith B</p>
                    <p className="text-[11px] text-neutral-400">Growth &amp; Search Strategist</p>
                  </div>
                  <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-500/20">
                    Active for Hire
                  </span>
                </div>
              </div>

              {/* Floating Skill Labels around image */}
              {FLOATING_TAGS.map((tag) => (
                <div
                  key={tag.label}
                  className={`absolute ${tag.position} bg-neutral-900/90 backdrop-blur-md border border-violet-500/30 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg shadow-black/60 transition-transform duration-300 hover:scale-105 hover:border-violet-400`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('achievements')}
            className="flex flex-col items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to achievements"
          >
            <span className="text-[11px] tracking-widest uppercase text-neutral-400 group-hover:text-violet-400 transition-colors">
              Explore Performance
            </span>
            <ArrowDown className="w-4 h-4 text-violet-400 animate-bounce group-hover:text-violet-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
