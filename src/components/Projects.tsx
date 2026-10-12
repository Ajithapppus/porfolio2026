import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Performance Ads' | 'SEO Campaigns' | 'Web Development' | 'Social Media';

interface ProjectsProps {
  onSelectProjectForInquiry?: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filters: CategoryFilter[] = [
    'All',
    'Performance Ads',
    'SEO Campaigns',
    'Web Development',
    'Social Media',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleInquiry = (project: Project) => {
    setSelectedCaseStudy(null);
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(project.title);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0B0B0B] border-t border-neutral-900">
      {/* Background radial violet highlights */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              <span>04. Projects &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl text-balance">
              Verified Case Studies &amp; Campaign Outcomes.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Real campaign executions with measurable outcomes across health, home services,
            retail, and regional consulting.
          </p>
        </div>

        {/* Category Filters: Functional buttons per frontend-design guidelines */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-800/60">
          <div className="flex items-center gap-2 mr-3 text-xs text-neutral-400">
            <Filter className="w-3.5 h-3.5 text-violet-400" />
            <span>Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950 font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between shadow-xl shadow-black/50 hover:shadow-violet-950/40"
            >
              <div>
                {/* Large Thumbnail with Zoom Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Clean unboxed category label over image */}
                  <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-violet-300 border border-violet-500/20">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Clean unboxed client name */}
                  <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                    <span>{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Key Highlights / Metrics strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-800/80 mb-4 bg-neutral-950/40 rounded-lg px-2">
                    {project.results.map((res) => (
                      <div key={res.label} className="text-center">
                        <span className="block text-sm font-extrabold text-white font-mono">
                          {res.value}
                        </span>
                        <span className="block text-[10px] text-neutral-400 truncate">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-900 group-hover:bg-violet-600 text-neutral-300 group-hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Case Study Modal Layout */}
      {selectedCaseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div
            className="relative w-full max-w-3xl my-8 bg-neutral-950 border border-violet-500/40 rounded-2xl shadow-2xl shadow-violet-950/80 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between gap-4 sticky top-0 bg-neutral-950 z-20">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  {selectedCaseStudy.category} · {selectedCaseStudy.client}
                </span>
                <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Feature Image Banner */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tagline / Overview */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Executive Overview
                </h4>
                <p className="text-base text-neutral-200 leading-relaxed">
                  {selectedCaseStudy.overview}
                </p>
              </div>

              {/* Verified Results Ribbon */}
              <div className="p-6 rounded-xl bg-violet-950/30 border border-violet-800/40">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-4">
                  Verified Campaign Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedCaseStudy.results.map((res) => (
                    <div key={res.label} className="p-4 rounded-lg bg-neutral-950/80 border border-white/5">
                      <span className="text-2xl font-extrabold text-white font-mono block">
                        {res.value}
                      </span>
                      <span className="text-xs text-neutral-400 mt-1 block">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Challenge & Strategy Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
                    The Strategy
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* Execution Steps */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Execution &amp; Action Plan
                </h4>
                <div className="space-y-3">
                  {selectedCaseStudy.execution.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Stack &amp; Tools Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Sticky Actions */}
            <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
              <span className="text-xs text-neutral-400 hidden sm:inline">
                Want similar growth outcomes for your business?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleInquiry(selectedCaseStudy)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-violet-950/60"
                >
                  <span>Discuss Similar Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="py-3 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
