import React, { useState } from 'react';
import {
  Search,
  Share2,
  TrendingUp,
  BarChart2,
  Cpu,
  Layers,
  Code2,
  FileSpreadsheet,
  Check,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const TOOLS_LIST = [
  { name: 'Google Ads', category: 'Paid Media', role: 'Search & PMax Campaigns' },
  { name: 'Meta Ads Manager', category: 'Paid Media', role: 'Lookalike & Retargeting' },
  { name: 'Google Analytics 4', category: 'Analytics', role: 'Funnel & User Flows' },
  { name: 'Google Search Console', category: 'SEO', role: 'Indexation & Queries' },
  { name: 'Google Tag Manager', category: 'Tracking', role: 'Custom Events & DataLayer' },
  { name: 'WordPress', category: 'CMS', role: 'High-Converting Web Portals' },
  { name: 'Elementor Pro', category: 'Design', role: 'Responsive Landing Pages' },
  { name: 'SEMrush / Ahrefs', category: 'SEO', role: 'Keyword Gap Analysis' },
  { name: 'Canva / Figma', category: 'Creative', role: 'High-CTR Visual Assets' },
  { name: 'Meta Pixel & CAPI', category: 'Tracking', role: 'Server-Side Conversions' },
  { name: 'Screaming Frog', category: 'SEO', role: 'Technical Site Crawling' },
  { name: 'Looker Studio', category: 'Reporting', role: 'Client ROI Dashboards' },
];

export const SkillsTools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="relative py-24 bg-[#0B0B0B] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <span>03. Skills &amp; Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl text-balance">
            Battle-Tested Marketing &amp; Technical Capabilities.
          </h2>
          <p className="text-sm text-neutral-400 mt-4 max-w-xl">
            A comprehensive, verified toolkit combining performance advertising, search engine
            engineering, conversion tracking, and high-speed web design.
          </p>
        </div>

        {/* Category Tabs: Interactive segmented control */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/60 rounded-xl border border-neutral-800/80 mb-10 w-fit">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === idx
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Category Overview */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between min-h-[260px]">
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                Category 0{activeCategory + 1}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                {SKILL_CATEGORIES[activeCategory].category}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {SKILL_CATEGORIES[activeCategory].description}
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400">
                {SKILL_CATEGORIES[activeCategory].skills.length} Core Competencies
              </span>
            </div>
          </div>

          {/* Right: Skills List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/90 hover:border-violet-500/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                  <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 pl-5">{skill.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Showcase Grid */}
        <div className="pt-12 border-t border-neutral-800/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Platforms &amp; Tool Ecosystem</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Industry-standard platforms utilized daily for strategy, execution, and reporting.
              </p>
            </div>
            <span className="text-xs font-mono text-violet-400">12 Verified Platforms</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOOLS_LIST.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/70 hover:border-violet-500/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-neutral-400 group-hover:text-violet-400 transition-colors">
                    {tool.category}
                  </span>
                  <Check className="w-3.5 h-3.5 text-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-violet-200 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
