import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Play, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { SportsClubModal } from './SportsClubModal';
import { AnimatedItem } from './AnimatedItem';

export const Projects: React.FC = () => {
  const [activeSportsModal, setActiveSportsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sportsProject = PROJECTS.find((p) => p.id === 'sports-club') || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => p.id !== 'sports-club');

  return (
    <section id="projects" className="py-20 border-b border-[#1e2638] bg-[#05070a]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block mb-2">
              03. Engineered Projects & Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9] font-['Space_Grotesk']">
              Featured Builds: Full-Stack Platforms & Physical Hardware
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md font-sans">
            Production-grade systems designed with rigorous zero-conflict logic, responsive UX, and autonomous software principles.
          </p>
        </div>

        {/* Featured Showcase: Sports Club Management System (Wide Hero Card) */}
        <AnimatedItem delayMs={0} className="w-full mb-10">
          <div className="bg-[#0b0f17] border border-[#1e2638] hover:border-[#00f0ff]/40 rounded-[0.5rem] overflow-hidden transition-all duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
          {/* Top Telemetry Bar */}
          <div className="px-6 py-3 bg-[#0e121b] border-b border-[#1e2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-[#00f0ff] font-semibold uppercase tracking-wider">
                FEATURED FLAGSHIP SYSTEM
              </span>
              <span className="text-[#3b494b]" aria-hidden="true">·</span>
              <span className="text-[#94a3b8]">{sportsProject.category}</span>
            </div>
            <div className="flex items-center gap-3 text-[#64748b]">
              <span>STACK: REACT + SUPABASE</span>
              <span className="text-[#3b494b]" aria-hidden="true">·</span>
              <span className="text-[#10b981]">STATUS: OPERATIONAL</span>
            </div>
          </div>

          {/* 2-Column Split: Image / Visual + Deep Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-center">
            {/* Visual Preview (Span 7) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-video rounded-[0.375rem] overflow-hidden bg-[#05070a] border border-[#1e2638]">
                <img
                  src={sportsProject.image}
                  alt={sportsProject.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/90 via-transparent to-transparent"></div>

                {/* Live Demo Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#05070a]/60 backdrop-blur-xs">
                  <button
                    onClick={() => setActiveSportsModal(true)}
                    className="px-5 py-2.5 bg-[#00f0ff] text-[#05070a] font-mono font-semibold text-xs rounded-[0.25rem] shadow-[0_0_20px_rgba(0,240,255,0.5)] flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Launch Interactive Demo</span>
                  </button>
                </div>
              </div>

              {/* Unboxed Tech Tags */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-[#94a3b8]">
                <span className="text-[#64748b]">Built with:</span>
                {sportsProject.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="text-[#cbd5e1]">{tag}</span>
                    {idx < sportsProject.tags.length - 1 && (
                      <span className="text-[#3b494b]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Description & Action (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-[#f1f5f9] font-['Space_Grotesk']">
                  {sportsProject.title}
                </h3>
                <p className="text-xs font-mono text-[#00f0ff] mt-1">
                  {sportsProject.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#cbd5e1] leading-relaxed font-sans">
                {sportsProject.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-1 border-t border-[#1e2638]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] block">
                  Core Capabilities
                </span>
                <ul className="space-y-1.5 text-xs text-[#cbd5e1] font-sans">
                  {sportsProject.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {sportsProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-[#05070a] border border-[#1e2638] rounded-[0.25rem]">
                    <span className="text-[11px] font-mono text-[#64748b] block">{m.label}</span>
                    <span className="text-sm font-semibold text-[#f1f5f9] font-['Space_Grotesk']">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveSportsModal(true)}
                  className="px-4 py-2.5 text-xs font-mono font-semibold text-[#05070a] bg-[#00f0ff] rounded-[0.25rem] hover:bg-[#7df4ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulator</span>
                </button>

                <a
                  href={sportsProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-mono text-[#cbd5e1] hover:text-[#00f0ff] bg-[#131924] border border-[#1e2638] hover:border-[#00f0ff]/40 rounded-[0.25rem] flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </AnimatedItem>

        {/* Secondary Systems Grid (Hardware & DSA Research) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <AnimatedItem key={project.id} delayMs={idx * 120} className="h-full">
              <div
                className="bg-[#0b0f17] border border-[#1e2638] hover:border-[#2e3d5b] rounded-[0.5rem] overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  {/* Upper Bar */}
                  <div className="px-5 py-2.5 bg-[#0e121b] border-b border-[#1e2638] flex items-center justify-between text-xs font-mono text-[#64748b]">
                    <span>{project.category}</span>
                    <span className="text-[#00f0ff]">SYSTEM PIPELINE</span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video bg-[#05070a] border-b border-[#1e2638] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#f1f5f9] font-['Space_Grotesk']">
                        {project.title}
                      </h4>
                      <p className="text-xs font-mono text-[#3b82f6] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Clean unboxed tags */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#64748b]">
                      {project.tags.map((tag, tagIdx) => (
                        <React.Fragment key={tag}>
                          <span className="text-[#cbd5e1]">{tag}</span>
                          {tagIdx < project.tags.length - 1 && (
                            <span className="text-[#3b494b]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1e2638]">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2 bg-[#05070a] rounded-[0.25rem] border border-[#1e2638]">
                          <span className="text-[10px] font-mono text-[#64748b] block">{m.label}</span>
                          <span className="text-xs font-semibold text-[#f1f5f9] font-['Space_Grotesk']">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#080b11] border-t border-[#1e2638] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748b]">Curriculum & R&D</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00f0ff] hover:underline flex items-center gap-1"
                  >
                    <span>Inspect Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>

      {/* Live Interactive Sports Club Modal */}
      <SportsClubModal
        isOpen={activeSportsModal}
        onClose={() => setActiveSportsModal(false)}
      />
    </section>
  );
};
