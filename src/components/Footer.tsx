import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05070a] border-t border-[#1e2638] py-8 text-xs font-mono text-[#64748b]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Academic Affiliation */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#f1f5f9] font-medium">{PERSONAL_INFO.name}</span>
          <span className="text-[#3b494b]">·</span>
          <span>{PERSONAL_INFO.degree}</span>
          <span className="text-[#3b494b]">·</span>
          <span className="text-[#94a3b8]">{PERSONAL_INFO.university}</span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00f0ff] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3b82f6] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#00f0ff] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="text-[#3b494b]">|</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#f1f5f9] transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
