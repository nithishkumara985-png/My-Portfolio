import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types/portfolio';
import { ChevronRight } from 'lucide-react';
import { AnimatedItem } from './AnimatedItem';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'tools' | 'ai'>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_STACK[0]);

  const filteredItems = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'ai', label: 'AI & Systems' },
  ] as const;

  return (
    <section id="stack" className="py-20 border-b border-[#1e2638] bg-[#05070a]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block mb-2">
              02. Signature Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9] font-['Space_Grotesk']">
              Tools, Toolchains & Architecture Foundations
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md font-sans">
            Curated toolkit bridging compiled low-level systems, full-stack web platforms, and autonomous intelligence.
          </p>
        </div>

        {/* Category Filter Tabs (Functional segmented controls, single-line) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0b0f17] border border-[#1e2638] rounded-[0.375rem] overflow-x-auto mb-8 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-[0.25rem] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#00f0ff] text-[#05070a] font-semibold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                  : 'text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#131924]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Layout: Grid of Technologies + Selected Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Tech Cards (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((tech, idx) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <AnimatedItem
                  key={`${activeCategory}-${tech.name}`}
                  delayMs={(idx % 6) * 50}
                  className="h-full"
                >
                  <div
                    onClick={() => setSelectedTech(tech)}
                    className={`h-full p-4 rounded-[0.5rem] bg-[#0b0f17] border transition-all duration-150 cursor-pointer text-left flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#00f0ff] shadow-[0_0_20px_-5px_rgba(0,240,255,0.2)] bg-[#0f1420]'
                        : 'border-[#1e2638] hover:border-[#2e3d5b] hover:bg-[#0e131d]'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                          {tech.name}
                        </h3>
                        {/* Clean unboxed metadata separator */}
                        <span className="text-[11px] font-mono text-[#00f0ff] shrink-0">
                          {tech.proficiency}
                        </span>
                      </div>

                      <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-2 font-sans mb-3">
                        {tech.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#64748b] pt-2 border-t border-[#1e2638]">
                      <span className="text-[#cbd5e1] truncate">{tech.highlight}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#00f0ff]' : 'text-[#475569]'}`} />
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>

          {/* Right Inspector: Deep Architectural Note (Span 4) */}
          <div className="lg:col-span-4 sticky top-24">
            <AnimatedItem delayMs={150}>
              <div className="bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
              <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                Tech Inspector
              </span>
              <span className="text-[11px] font-mono text-[#64748b]">
                CATEGORY: {selectedTech.category.toUpperCase()}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#f1f5f9] font-['Space_Grotesk']">
                {selectedTech.name}
              </h3>
              <p className="text-xs font-mono text-[#10b981] mt-1">
                Proficiency Level: {selectedTech.proficiency}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                Primary Application
              </span>
              <p className="text-sm text-[#cbd5e1] leading-relaxed font-sans">
                {selectedTech.description}
              </p>
            </div>

            <div className="p-3.5 bg-[#05070a] rounded-[0.375rem] border border-[#1e2638] space-y-1.5">
              <span className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider block">
                Production Implementation
              </span>
              <p className="text-xs text-[#94a3b8] font-sans">
                {selectedTech.highlight}
              </p>
            </div>

            <div className="pt-2 border-t border-[#1e2638] space-y-2 text-xs font-sans text-[#94a3b8]">
              <div className="flex items-center justify-between">
                <span>Codebase Verification:</span>
                <span className="text-[#f1f5f9] font-mono">GCC / Node / Python</span>
              </div>
              <div className="flex items-center justify-between">
                <span>REVA CSE Curriculum:</span>
                <span className="text-[#10b981] font-mono">Active Labs & Projects</span>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </div>
  </div>
</section>
  );
};

