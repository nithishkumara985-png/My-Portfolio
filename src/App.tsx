/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTerminal } from './components/AboutTerminal';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { DsaLab } from './components/DsaLab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard accessibility shortcuts (P for projects, C for contact)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing inside an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'c' || e.key === 'C') {
        scrollToContact();
      } else if (e.key === 'p' || e.key === 'P') {
        scrollToProjects();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] text-[#f1f5f9] selection:bg-[#00f0ff]/20 selection:text-[#00f0ff] flex flex-col font-sans">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar onOpenQuickContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreProjects={scrollToProjects}
          onOpenQuickContact={scrollToContact}
        />
        <AboutTerminal onOpenQuickContact={scrollToContact} />
        <TechStack />
        <Projects />
        <DsaLab />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
