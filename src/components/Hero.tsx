import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Cpu, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenQuickContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenQuickContact }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#1e2638] cyber-grid">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Split Grid: Left Typography + Right Portrait HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Monospaced Kicker (Clean unboxed text, no pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#00f0ff] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-xs"></span>
              <span>Computer Science & Engineering</span>
              <span className="text-[#3b494b]" aria-hidden="true">·</span>
              <span className="text-[#94a3b8]">{PERSONAL_INFO.university}</span>
              <span className="text-[#3b494b]" aria-hidden="true">·</span>
              <span className="text-[#64748b]">{PERSONAL_INFO.location}</span>
            </div>

            {/* Core Identity Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f1f5f9] leading-[1.15] font-['Space_Grotesk'] text-balance">
              {PERSONAL_INFO.name}
              <span className="block text-xl sm:text-2xl font-medium text-[#94a3b8] mt-2 font-['Space_Grotesk']">
                {PERSONAL_INFO.title}
              </span>
            </h1>

            {/* Quotation Anchor */}
            <div className="relative pl-4 border-l-2 border-[#00f0ff] py-1 bg-[#0b0f17]/60 rounded-r-[0.25rem]">
              <p className="text-sm sm:text-base italic text-[#dbfcff] font-sans">
                {PERSONAL_INFO.quote}
              </p>
            </div>

            {/* Lead Narrative Body */}
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl font-sans">
              {PERSONAL_INFO.summary}
            </p>

            {/* Memorable Taglines (Unboxed bullet list with custom marks) */}
            <div className="space-y-2 pt-1">
              {PERSONAL_INFO.taglines.map((tagline, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1] font-mono">
                  <span className="text-[#00f0ff] mt-0.5 select-none font-bold">›</span>
                  <span>{tagline}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-xs sm:text-sm font-semibold font-mono text-[#05070a] bg-[#00f0ff] rounded-[0.25rem] hover:bg-[#7df4ff] hover:shadow-[0_0_24px_rgba(0,240,255,0.4)] active:scale-[0.98] transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>Inspect Projects & Systems</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuickContact}
                className="px-5 py-3 text-xs sm:text-sm font-medium font-mono text-[#f1f5f9] bg-[#0b0f17] border border-[#1e2638] rounded-[0.25rem] hover:border-[#00f0ff]/50 hover:bg-[#131924] active:scale-[0.98] transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>Direct Reach Console</span>
                <ArrowUpRight className="w-4 h-4 text-[#00f0ff]" />
              </button>
            </div>
          </div>

          {/* Right Column (Span 5): High-Fidelity Portrait & HUD Status */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#0b0f17] rounded-[0.5rem] p-3 border border-[#1e2638] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              {/* Upper Telemetry Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e2638] px-1 text-xs font-mono text-[#64748b]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block animate-pulse"></span>
                  <span className="text-[#cbd5e1] font-medium">BUILD_MODE // ACTIVE</span>
                </div>
                <span>REVA_CSE::SYSTEMS</span>
              </div>

              {/* Main Portrait Container */}
              <div className="relative aspect-square overflow-hidden rounded-[0.375rem] bg-[#05070a] border border-[#1e2638]">
                <img
                  src="/src/assets/images/hero_builder_portrait_1793342835932.jpg"
                  alt="Nithish Kumar A - Developer, Builder & Designer"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro Scrim overlay with subtle cyber corner brackets */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating HUD status indicator in bottom corner */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0b0f17]/90 backdrop-blur-md rounded-[0.25rem] border border-[#1e2638] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#00f0ff] uppercase tracking-wider">Availability Status</span>
                    <span className="text-[#10b981] font-mono text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Ready for Projects & Ops
                    </span>
                  </div>
                  <p className="text-[12px] text-[#cbd5e1] font-sans">
                    Exploring Autonomous AI, High-Performance Full-Stack Web & Embedded Hardware convergence.
                  </p>
                </div>
              </div>

              {/* Lower Coordinates Strip */}
              <div className="mt-3 pt-2.5 border-t border-[#1e2638] flex items-center justify-between px-1 text-[11px] font-mono text-[#94a3b8]">
                <span>ENG: WEB · PY · C/C++</span>
                <span className="text-[#00f0ff]">FOCUS: DSA & AGENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI & Core Discipline Strip below the split */}
        <div className="mt-14 pt-8 border-t border-[#1e2638] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] hover:border-[#00f0ff]/40 transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f0ff] block mb-1">Domain 01</span>
            <h4 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">Web Development</h4>
            <p className="text-xs text-[#94a3b8] mt-1 font-sans">
              React, Supabase, modern UI/UX design, and production SPA systems.
            </p>
          </div>

          <div className="p-4 bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] hover:border-[#00f0ff]/40 transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#3b82f6] block mb-1">Domain 02</span>
            <h4 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">Autonomous AI</h4>
            <p className="text-xs text-[#94a3b8] mt-1 font-sans">
              Prompt engineering, agentic architecture, LLM interfaces, and ML logic.
            </p>
          </div>

          <div className="p-4 bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] hover:border-[#00f0ff]/40 transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#10b981] block mb-1">Domain 03</span>
            <h4 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">Hardware & Systems</h4>
            <p className="text-xs text-[#94a3b8] mt-1 font-sans">
              C/C++, Python pipelines, GCC toolchains, and physical microcontrollers.
            </p>
          </div>

          <div className="p-4 bg-[#0b0f17] rounded-[0.5rem] border border-[#1e2638] hover:border-[#00f0ff]/40 transition-colors">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#d8ffe7] block mb-1">Domain 04</span>
            <h4 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">Algorithms & DSA</h4>
            <p className="text-xs text-[#94a3b8] mt-1 font-sans">
              Active deep study: Tree balance, graph traversal, and complexity bounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
