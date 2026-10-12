import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#0B0B0B] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <span>05. Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Professional Experience &amp; Impact Timeline.
          </h2>
          <p className="text-sm text-neutral-400 mt-4">
            Hands-on track record in performance digital marketing, agency campaign execution, and
            independent client growth advisory.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node with Glow */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  item.current
                    ? 'bg-violet-600 border-violet-400 shadow-[0_0_12px_#7C3AED]'
                    : 'bg-neutral-900 border-neutral-700 group-hover:border-violet-500'
                } transition-all`}
              />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-violet-500/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-950/20">
                {/* Header Strip: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-violet-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Achievements Bullets */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    Key Outcomes &amp; Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
