import React from 'react';
import { Target, Zap, BarChart, Layers, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Intent-Driven Acquisition',
      desc: 'Filtering out non-converting traffic to target users actively looking for your solutions.',
    },
    {
      icon: Zap,
      title: 'High-Converting Web Architecture',
      desc: 'Developing lightning-fast, mobile-first WordPress sites engineered to turn visitors into leads.',
    },
    {
      icon: BarChart,
      title: 'Performance Media Buying',
      desc: 'Optimizing Meta & Google ad spend with strict CPL benchmarks and ongoing creative testing.',
    },
    {
      icon: Layers,
      title: 'End-to-End Tracking Rigor',
      desc: 'Configuring GA4, GTM, and server-side pixels so every single converted rupee is accounted for.',
    },
  ];

  const highlights = [
    'Based in Thiruvananthapuram, Kerala',
    'Specialist in SEO & Performance Ads',
    'Full-Funnel Lead Generation Strategy',
    'Custom WordPress Development',
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <span>01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl text-balance">
            Building Digital Channels That Deliver Genuine Revenue.
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Digital
              Marketing Professional and freelance performance marketer based in{' '}
              <span className="text-violet-300 font-medium">Thiruvananthapuram, Kerala</span>.
            </p>
            <p>
              In a digital landscape flooded with vanity metrics like page impressions and passive
              likes, my focus is laser-targeted on what truly moves a company forward: attracting
              high-intent audiences, ranking on page 1 of Google for commercial queries, lowering customer acquisition
              costs, and generating qualified business inquiries.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base">
              Whether partnering with healthcare practices like{' '}
              <strong className="text-neutral-200">Ayursparsham</strong> to fill patient
              consultations, scaling rapid home-service calls for{' '}
              <strong className="text-neutral-200">Fixo Expert</strong> through Meta campaigns, or
              overhauling slow e-commerce storefronts, I bridge the gap between creative storytelling
              and analytical precision.
            </p>

            {/* Quick Location & Availability Card */}
            <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-800/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Thiruvananthapuram, Kerala</p>
                  <p className="text-xs text-neutral-400">Available for remote &amp; regional client projects</p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap"
              >
                <span>Hire Ajith</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verified highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Pillars & Visual Indicators */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Strategic Growth Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-950/70 border border-violet-800/40 flex items-center justify-center text-violet-300 mb-4 group-hover:scale-110 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Callout quote box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 to-purple-950/20 border border-violet-900/30 mt-6">
              <p className="text-sm italic text-neutral-300 leading-relaxed">
                "Marketing without measurement is merely hope. Every campaign I build is rooted in
                real user behavior, verifiable conversion events, and transparent return on investment."
              </p>
              <p className="text-xs font-semibold text-violet-400 mt-3">— Ajith B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
