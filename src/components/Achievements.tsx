import React, { useEffect, useRef, useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { TrendingUp, Award, Users, DollarSign } from 'lucide-react';

const icons = [TrendingUp, DollarSign, Award, Users];

export const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={containerRef} className="relative py-12 border-y border-neutral-800/80 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="relative p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-950/30"
              >
                {/* Subtle corner glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl group-hover:bg-violet-600/15 transition-all duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                    {item.label}
                  </span>
                  <div className="p-2 rounded-lg bg-violet-950/40 border border-violet-800/30 text-violet-300 group-hover:text-violet-200 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Animated counter figure */}
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-2">
                  <AnimatedCounter
                    target={item.number}
                    isVisible={isVisible}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </div>

                {/* Subtitle / explanation of metric */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  isVisible: boolean;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, isVisible, prefix = '', suffix = '' }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * target);
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(update);
  }, [isVisible, target]);

  return (
    <span>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};
