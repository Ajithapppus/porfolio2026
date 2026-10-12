import React, { useState } from 'react';
import {
  Search,
  Share2,
  TrendingUp,
  Sparkles,
  Globe,
  Cpu,
  FileText,
  BarChart3,
  Palette,
  CheckCircle2,
  ArrowRight,
  X,
} from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Search,
  Share2,
  TrendingUp,
  Sparkles,
  Globe,
  Cpu,
  FileText,
  BarChart3,
  Palette,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#0B0B0B] border-t border-neutral-900">
      {/* Background ambient violet illumination */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              <span>02. Specialized Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl text-balance">
              Full-Spectrum Growth &amp; Performance Solutions.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Every service is tailored to deliver verifiable business expansion, combining technical
            rigor with creative positioning.
          </p>
        </div>

        {/* 9 Glassmorphic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative p-7 rounded-2xl bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-violet-950/40"
              >
                {/* Subtle top-corner violet glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-violet-600/0 group-hover:bg-violet-600/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar: Icon and Editorial Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-800/30 flex items-center justify-center text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-violet-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Deliverables snippet & Action */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 group-hover:text-violet-300 transition-colors">
                  <span>{service.deliverables.length} Key Deliverables</span>
                  <div className="flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            className="relative w-full max-w-xl bg-neutral-950 border border-violet-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-950/80 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                {selectedService.category}
              </span>
              <h3 id="service-modal-title" className="text-2xl font-bold text-white mt-1">
                {selectedService.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Deliverables Breakdown */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Key Scope &amp; Implementation
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Action CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-neutral-800">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-violet-950/50"
              >
                <span>Request This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
