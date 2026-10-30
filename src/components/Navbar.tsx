import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Terminal, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenQuickContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#05070a]/90 backdrop-blur-md border-b border-[#1e2638]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Zone */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-[#f1f5f9] whitespace-nowrap shrink-0 font-['Space_Grotesk']"
        >
          <span className="w-2 h-2 bg-[#00f0ff] rounded-xs group-hover:scale-125 transition-transform duration-200"></span>
          <span>{PERSONAL_INFO.name}</span>
          <span className="text-xs font-mono text-[#64748b] font-normal hidden sm:inline ml-1">/ CSE</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94a3b8]">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Tech Stack
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('dsa-lab')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            DSA Lab
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuickContact}
            className="px-4 py-2 text-xs font-medium font-mono text-[#05070a] bg-[#00f0ff] rounded-[0.25rem] hover:bg-[#7df4ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Drop Message</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#131924] rounded-[0.25rem] border border-[#1e2638] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f17] border-b border-[#1e2638] px-6 py-4 space-y-3">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-sm text-[#f1f5f9] hover:text-[#00f0ff] font-mono"
          >
            01. About Me
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="block w-full text-left py-2 text-sm text-[#f1f5f9] hover:text-[#00f0ff] font-mono"
          >
            02. Tech Stack
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="block w-full text-left py-2 text-sm text-[#f1f5f9] hover:text-[#00f0ff] font-mono"
          >
            03. Projects (Sports Club & Systems)
          </button>
          <button
            onClick={() => scrollTo('dsa-lab')}
            className="block w-full text-left py-2 text-sm text-[#f1f5f9] hover:text-[#00f0ff] font-mono"
          >
            04. DSA Interactive Lab
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left py-2 text-sm text-[#f1f5f9] hover:text-[#00f0ff] font-mono"
          >
            05. Contact & Channels
          </button>
          <div className="pt-2 border-t border-[#1e2638] flex gap-3 text-xs text-[#94a3b8]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#00f0ff]"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#3b494b]">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#00f0ff]"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
